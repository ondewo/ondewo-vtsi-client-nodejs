// Copyright 2020-2025 ONDEWO GmbH
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Hermetic unit tests for the Keycloak offline-token auth helper (D18).
// The token endpoint is mocked via an injected `fetch` — no network is used.

import nodeTest from 'node:test';
import assert from 'node:assert/strict';

import {
	login,
	buildTokenEndpoint,
	FetchLike,
	FetchResponseLike,
	TokenResponseBody,
	OfflineTokenProvider
} from './offlineTokenProvider';

const KEYCLOAK_URL: string = 'https://kc.example.com/auth';
const REALM: string = 'ondewo-ccai-platform';
const CLIENT_ID: string = 'ondewo-nlu-cai-sdk-public';
const USERNAME: string = 'tech-user@example.com';
const PASSWORD: string = 'secret-pw';
const EXPECTED_ENDPOINT: string =
	'https://kc.example.com/auth/realms/ondewo-ccai-platform/protocol/openid-connect/token';

interface QueuedResponse {
	ok?: boolean;
	status?: number;
	body: TokenResponseBody;
}

interface RecordedCall {
	url: string;
	init: { method: string; headers: Record<string, string>; body: string };
	params: URLSearchParams;
}

interface FetchStub extends FetchLike {
	calls: RecordedCall[];
}

// Builds a fetch stub that records each call and replies from a queue of JSON bodies.
function makeFetchStub(responses: QueuedResponse[]): FetchStub {
	const calls: RecordedCall[] = [];
	const queue: QueuedResponse[] = responses.slice();
	const fetchStub: FetchStub = ((
		url: string,
		init: { method: string; headers: Record<string, string>; body: string }
	): Promise<FetchResponseLike> => {
		const params: URLSearchParams = new URLSearchParams(init.body);
		calls.push({ url, init, params });
		const next: QueuedResponse | undefined = queue.shift();
		if (!next) {
			throw new Error('fetch stub ran out of queued responses');
		}
		const response: FetchResponseLike = {
			ok: next.ok !== false,
			status: next.status || 200,
			text(): Promise<string> {
				return Promise.resolve(JSON.stringify(next.body));
			}
		};
		return Promise.resolve(response);
	}) as FetchStub;
	fetchStub.calls = calls;
	return fetchStub;
}

nodeTest('buildTokenEndpoint constructs the realm token URL and trims trailing slashes', () => {
	assert.equal(buildTokenEndpoint(KEYCLOAK_URL, REALM), EXPECTED_ENDPOINT);
	assert.equal(buildTokenEndpoint(KEYCLOAK_URL + '///', REALM), EXPECTED_ENDPOINT);
});

nodeTest('login performs ROPC with scope=offline_access against the PUBLIC client (no client_secret)', async () => {
	const fetchStub: FetchStub = makeFetchStub([
		{ body: { access_token: 'access-1', refresh_token: 'offline-1', expires_in: 300 } }
	]);

	const provider: OfflineTokenProvider = await login({
		keycloakUrl: KEYCLOAK_URL,
		realm: REALM,
		clientId: CLIENT_ID,
		username: USERNAME,
		password: PASSWORD,
		fetch: fetchStub
	});

	assert.equal(fetchStub.calls.length, 1);
	const call: RecordedCall = fetchStub.calls[0];
	assert.equal(call.url, EXPECTED_ENDPOINT);
	assert.equal(call.init.method, 'POST');
	assert.equal(call.init.headers['Content-Type'], 'application/x-www-form-urlencoded');
	assert.equal(call.params.get('grant_type'), 'password');
	assert.equal(call.params.get('client_id'), CLIENT_ID);
	assert.equal(call.params.get('username'), USERNAME);
	assert.equal(call.params.get('password'), PASSWORD);
	assert.equal(call.params.get('scope'), 'offline_access');
	// PUBLIC client: never sends a client_secret (Q1).
	assert.equal(call.params.get('client_secret'), null);

	const token: string = await provider.getAccessToken();
	assert.equal(token, 'access-1');
});

nodeTest('getAuthorizationMetadata returns the Bearer header for the current access token', async () => {
	const fetchStub: FetchStub = makeFetchStub([
		{ body: { access_token: 'access-1', refresh_token: 'offline-1', expires_in: 300 } }
	]);
	const provider: OfflineTokenProvider = await login({
		keycloakUrl: KEYCLOAK_URL,
		realm: REALM,
		clientId: CLIENT_ID,
		username: USERNAME,
		password: PASSWORD,
		fetch: fetchStub
	});

	const metadata: { Authorization: string } = await provider.getAuthorizationMetadata();
	assert.deepEqual(metadata, { Authorization: 'Bearer access-1' });
});

nodeTest('access token auto-refreshes from the offline refresh token when near expiry', async () => {
	const fetchStub: FetchStub = makeFetchStub([
		// Initial login: expires_in=0 forces the next getAccessToken into the skew window.
		{ body: { access_token: 'access-1', refresh_token: 'offline-1', expires_in: 0 } },
		{ body: { access_token: 'access-2', refresh_token: 'offline-2', expires_in: 300 } }
	]);
	const provider: OfflineTokenProvider = await login({
		keycloakUrl: KEYCLOAK_URL,
		realm: REALM,
		clientId: CLIENT_ID,
		username: USERNAME,
		password: PASSWORD,
		fetch: fetchStub
	});

	const token: string = await provider.getAccessToken();
	assert.equal(token, 'access-2');
	assert.equal(fetchStub.calls.length, 2);

	const refreshCall: RecordedCall = fetchStub.calls[1];
	assert.equal(refreshCall.params.get('grant_type'), 'refresh_token');
	assert.equal(refreshCall.params.get('client_id'), CLIENT_ID);
	// Rotated offline token from the login response is used for the refresh.
	assert.equal(refreshCall.params.get('refresh_token'), 'offline-1');
	assert.equal(refreshCall.params.get('client_secret'), null);
});

nodeTest('tokenExpirationInS stops the refresh loop and getAccessToken then throws', async () => {
	const fetchStub: FetchStub = makeFetchStub([
		{ body: { access_token: 'access-1', refresh_token: 'offline-1', expires_in: 300 } }
	]);
	const provider: OfflineTokenProvider = await login({
		keycloakUrl: KEYCLOAK_URL,
		realm: REALM,
		clientId: CLIENT_ID,
		username: USERNAME,
		password: PASSWORD,
		tokenExpirationInS: 0,
		fetch: fetchStub
	});

	assert.equal(provider.isExpired(), true);
	await assert.rejects(provider.getAccessToken(), /tokenExpirationInS elapsed/);
	// No refresh call was issued once the loop deadline passed.
	assert.equal(fetchStub.calls.length, 1);
});

nodeTest('login rejects when a required config field is missing', async () => {
	await assert.rejects(
		login({
			keycloakUrl: KEYCLOAK_URL,
			realm: REALM,
			clientId: CLIENT_ID,
			username: USERNAME,
			password: '',
			fetch: makeFetchStub([])
		}),
		/requires a non-empty "password"/
	);
});

nodeTest('login surfaces a Keycloak error_description on invalid_grant', async () => {
	const fetchStub: FetchStub = makeFetchStub([
		{ ok: false, status: 401, body: { error: 'invalid_grant', error_description: 'Invalid user credentials' } }
	]);
	await assert.rejects(
		login({
			keycloakUrl: KEYCLOAK_URL,
			realm: REALM,
			clientId: CLIENT_ID,
			username: USERNAME,
			password: 'wrong',
			fetch: fetchStub
		}),
		/Invalid user credentials/
	);
});
