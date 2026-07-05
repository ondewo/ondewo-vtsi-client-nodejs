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

/** Keycloak base URL used across the tests. */
const KEYCLOAK_URL: string = 'https://kc.example.com/auth';
/** Realm name used across the tests. */
const REALM: string = 'ondewo-ccai-platform';
/** PUBLIC client id used across the tests. */
const CLIENT_ID: string = 'ondewo-nlu-cai-sdk-public';
/** Technical-user email used across the tests. */
const USERNAME: string = 'tech-user@example.com';
/** Technical-user password used across the tests. */
const PASSWORD: string = 'secret-pw';
/** Token endpoint that {@link buildTokenEndpoint} must produce from {@link KEYCLOAK_URL} + {@link REALM}. */
const EXPECTED_ENDPOINT: string =
	'https://kc.example.com/auth/realms/ondewo-ccai-platform/protocol/openid-connect/token';

/** A single queued reply for {@link makeFetchStub}, modelling one Keycloak token-endpoint response. */
interface QueuedResponse {
	/** HTTP `ok` flag; defaults to `true` when omitted. */
	ok?: boolean;
	/** HTTP status code; defaults to `200` when omitted. */
	status?: number;
	/** Response body the stub JSON-stringifies and returns from `text()`. */
	body: TokenResponseBody;
}

/** A request captured by {@link makeFetchStub}, exposing the URL, raw init, and parsed form params. */
interface RecordedCall {
	/** The request URL the provider called. */
	url: string;
	/** The raw request init (method, headers, form-encoded body, optional dispatcher) passed to fetch. */
	init: { method: string; headers: Record<string, string>; body: string; dispatcher?: unknown };
	/** The request body parsed back into {@link URLSearchParams} for ergonomic assertions. */
	params: URLSearchParams;
}

/** A {@link FetchLike} test double that additionally records every call it received. */
interface FetchStub extends FetchLike {
	/** Calls captured in invocation order. */
	calls: RecordedCall[];
}

/**
 * Builds a fetch stub that records each call and replies from a queue of JSON bodies.
 *
 * Each invocation shifts the next {@link QueuedResponse} off the queue, JSON-stringifies its
 * `body`, and returns it; running out of queued responses throws to surface an unexpected extra call.
 *
 * @param responses Replies to hand out, in call order.
 * @returns A {@link FetchStub} whose `calls` array records every request it received.
 */
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

/**
 * Builds a fetch stub that replies once with a raw (possibly non-JSON or empty) text body.
 *
 * Needed for the transport edge paths that {@link makeFetchStub} cannot express because it always
 * JSON-stringifies its queued body.
 *
 * @param rawText Exact text the stub returns from `text()` (may be empty or non-JSON).
 * @param ok HTTP `ok` flag to report.
 * @param status HTTP status code to report.
 * @returns A {@link FetchLike} that always resolves with the given raw response.
 */
function makeRawFetchStub(rawText: string, ok: boolean, status: number): FetchLike {
	return (): Promise<FetchResponseLike> => {
		const response: FetchResponseLike = {
			ok,
			status,
			text(): Promise<string> {
				return Promise.resolve(rawText);
			}
		};
		return Promise.resolve(response);
	};
}

/** {@link buildTokenEndpoint} produces the realm token URL and trims trailing slashes off the base. */
nodeTest('buildTokenEndpoint constructs the realm token URL and trims trailing slashes', () => {
	assert.equal(buildTokenEndpoint(KEYCLOAK_URL, REALM), EXPECTED_ENDPOINT);
	assert.equal(buildTokenEndpoint(KEYCLOAK_URL + '///', REALM), EXPECTED_ENDPOINT);
});

/** {@link login} issues a ROPC password grant with `scope=offline_access` and no `client_secret`. */
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

/**
 * {@link OfflineTokenProvider.getAuthorizationMetadata} wraps the current token in a Bearer header
 * under the lowercase `authorization` key required by native gRPC transports.
 */
nodeTest('getAuthorizationMetadata returns a lowercase-authorization Bearer header', async () => {
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

	const metadata: { authorization: string } = await provider.getAuthorizationMetadata();
	assert.deepEqual(metadata, { authorization: 'Bearer access-1' });
	// The metadata key MUST be the lowercase `authorization` (grpc-js / grpc-python normalize or
	// reject a capitalized key on the wire); assert the literal key, not a case-insensitive lookup.
	assert.deepEqual(Object.keys(metadata), ['authorization']);
});

/** When the access token is within the skew window, `getAccessToken` refreshes via the offline token. */
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

/** A `tokenExpirationInS` deadline marks the session expired so `getAccessToken` throws, no refresh. */
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

/** {@link login} rejects up front when a required config field (here `password`) is empty. */
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

/** On an HTTP error, {@link login} surfaces the Keycloak `error_description` in the thrown message. */
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

/** The error message degrades gracefully: `error_description` → `error` → raw text → `HTTP <status>`. */
nodeTest('login falls back to error then text then HTTP status when no error_description is present', async () => {
	// error_description absent → falls back to the bare `error` code.
	await assert.rejects(
		login({
			keycloakUrl: KEYCLOAK_URL,
			realm: REALM,
			clientId: CLIENT_ID,
			username: USERNAME,
			password: 'wrong',
			fetch: makeFetchStub([{ ok: false, status: 401, body: { error: 'invalid_client' } }])
		}),
		/Keycloak token request failed \(401\): invalid_client/
	);

	// No error/error_description either → falls back to the raw response text.
	await assert.rejects(
		login({
			keycloakUrl: KEYCLOAK_URL,
			realm: REALM,
			clientId: CLIENT_ID,
			username: USERNAME,
			password: 'wrong',
			fetch: makeFetchStub([{ ok: false, status: 503, body: {} }])
		}),
		/Keycloak token request failed \(503\): \{\}/
	);

	// Empty body too → falls back to the "HTTP <status>" placeholder.
	await assert.rejects(
		login({
			keycloakUrl: KEYCLOAK_URL,
			realm: REALM,
			clientId: CLIENT_ID,
			username: USERNAME,
			password: 'wrong',
			fetch: makeRawFetchStub('', false, 500)
		}),
		/Keycloak token request failed \(500\): HTTP 500/
	);
});

/** A non-JSON 2xx body (e.g. an HTML error page) makes {@link login} reject with the raw text. */
nodeTest('login rejects when the token endpoint returns a non-JSON response', async () => {
	await assert.rejects(
		login({
			keycloakUrl: KEYCLOAK_URL,
			realm: REALM,
			clientId: CLIENT_ID,
			username: USERNAME,
			password: PASSWORD,
			fetch: makeRawFetchStub('<html>502 Bad Gateway</html>', true, 200)
		}),
		/non-JSON response: <html>502 Bad Gateway<\/html>/
	);
});

/** A 2xx body lacking `access_token` makes `applyTokenResponse` (via {@link login}) reject. */
nodeTest('login rejects when the token response contains no access_token', async () => {
	await assert.rejects(
		login({
			keycloakUrl: KEYCLOAK_URL,
			realm: REALM,
			clientId: CLIENT_ID,
			username: USERNAME,
			password: PASSWORD,
			// 2xx body without an access_token (only a refresh_token) → applyTokenResponse throws.
			fetch: makeFetchStub([{ body: { refresh_token: 'offline-1', expires_in: 300 } }])
		}),
		/did not contain an access_token/
	);
});

/** {@link OfflineTokenProvider.stop} short-circuits `getAccessToken` to reject without a refresh. */
nodeTest('stop() makes subsequent getAccessToken fail fast without a refresh call', async () => {
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

	provider.stop();
	await assert.rejects(provider.getAccessToken(), /tokenExpirationInS elapsed/);
	// stop() short-circuits before any refresh: only the initial login call was made.
	assert.equal(fetchStub.calls.length, 1);
});

/** {@link login} rejects when invoked with a non-object (here `null`) config argument. */
nodeTest('login rejects when called without a configuration object', async () => {
	await assert.rejects(login(null as unknown as Parameters<typeof login>[0]), /requires a configuration object/);
});

/** With `config.fetch` omitted, {@link login} falls back to `globalThis.fetch`. */
nodeTest('login uses globalThis.fetch when config.fetch is omitted', async () => {
	const fetchStub: FetchStub = makeFetchStub([
		{ body: { access_token: 'global-access-1', refresh_token: 'offline-1', expires_in: 300 } }
	]);
	const originalFetch: typeof globalThis.fetch = globalThis.fetch;
	globalThis.fetch = fetchStub as unknown as typeof globalThis.fetch;
	try {
		const provider: OfflineTokenProvider = await login({
			keycloakUrl: KEYCLOAK_URL,
			realm: REALM,
			clientId: CLIENT_ID,
			username: USERNAME,
			password: PASSWORD
		});
		assert.equal(await provider.getAccessToken(), 'global-access-1');
		assert.equal(fetchStub.calls.length, 1);
	} finally {
		globalThis.fetch = originalFetch;
	}
});

/** With neither `config.fetch` nor `globalThis.fetch` available, {@link login} rejects. */
nodeTest('login rejects when no fetch implementation is available', async () => {
	const originalFetch: typeof globalThis.fetch = globalThis.fetch;
	delete (globalThis as { fetch?: typeof globalThis.fetch }).fetch;
	try {
		await assert.rejects(
			login({
				keycloakUrl: KEYCLOAK_URL,
				realm: REALM,
				clientId: CLIENT_ID,
				username: USERNAME,
				password: PASSWORD
			}),
			/No fetch implementation available/
		);
	} finally {
		globalThis.fetch = originalFetch;
	}
});

/** By default (flag omitted) the default transport uses the plain global `fetch` with NO dispatcher, so TLS verification stays ON. */
nodeTest('keycloakVerifySsl default: the default transport attaches no dispatcher (TLS verify ON)', async () => {
	const originalFetch: typeof globalThis.fetch = globalThis.fetch;
	let capturedInit: { method: string; headers: Record<string, string>; body: string; dispatcher?: unknown } | undefined;
	globalThis.fetch = ((
		url: string,
		init: { method: string; headers: Record<string, string>; body: string; dispatcher?: unknown }
	): Promise<FetchResponseLike> => {
		capturedInit = init;
		return Promise.resolve({
			ok: true,
			status: 200,
			text: (): Promise<string> =>
				Promise.resolve(
					JSON.stringify({ access_token: 'access-secure', refresh_token: 'offline-secure', expires_in: 300 })
				)
		});
	}) as unknown as typeof globalThis.fetch;
	try {
		// Omit fetch (-> default transport) and keycloakVerifySsl (-> defaults to verify ON).
		const provider: OfflineTokenProvider = await login({
			keycloakUrl: KEYCLOAK_URL,
			realm: REALM,
			clientId: CLIENT_ID,
			username: USERNAME,
			password: PASSWORD
		});
		assert.ok(capturedInit !== undefined);
		// No undici dispatcher => undici's global dispatcher with TLS verification ON.
		assert.equal(capturedInit.dispatcher, undefined);
		assert.equal(await provider.getAccessToken(), 'access-secure');
	} finally {
		globalThis.fetch = originalFetch;
	}
});

/** With `keycloakVerifySsl: false` the default transport attaches an undici `Agent` dispatcher, disabling TLS verification for the token call. */
nodeTest(
	'keycloakVerifySsl false: the default transport attaches an undici Agent dispatcher (TLS verify OFF)',
	async () => {
		const originalFetch: typeof globalThis.fetch = globalThis.fetch;
		let capturedInit:
			{ method: string; headers: Record<string, string>; body: string; dispatcher?: unknown } | undefined;
		globalThis.fetch = ((
			url: string,
			init: { method: string; headers: Record<string, string>; body: string; dispatcher?: unknown }
		): Promise<FetchResponseLike> => {
			capturedInit = init;
			return Promise.resolve({
				ok: true,
				status: 200,
				text: (): Promise<string> =>
					Promise.resolve(
						JSON.stringify({ access_token: 'access-insecure', refresh_token: 'offline-insecure', expires_in: 300 })
					)
			});
		}) as unknown as typeof globalThis.fetch;
		try {
			const provider: OfflineTokenProvider = await login({
				keycloakUrl: KEYCLOAK_URL,
				realm: REALM,
				clientId: CLIENT_ID,
				username: USERNAME,
				password: PASSWORD,
				keycloakVerifySsl: false
			});
			// eslint-disable-next-line @typescript-eslint/no-require-imports
			const undici: { Agent: new (options: unknown) => unknown } = require('undici') as {
				Agent: new (options: unknown) => unknown;
			};
			assert.ok(capturedInit !== undefined);
			// The insecure undici Agent (rejectUnauthorized:false) reached the token POST.
			assert.ok(capturedInit.dispatcher instanceof undici.Agent);
			assert.equal(await provider.getAccessToken(), 'access-insecure');
		} finally {
			globalThis.fetch = originalFetch;
		}
	}
);

/** An injected `fetch` is used verbatim, so `keycloakVerifySsl: false` is a no-op (no dispatcher) for custom transports. */
nodeTest('keycloakVerifySsl false is ignored when a custom fetch is injected', async () => {
	const fetchStub: FetchStub = makeFetchStub([
		{ body: { access_token: 'access-1', refresh_token: 'offline-1', expires_in: 300 } }
	]);
	const provider: OfflineTokenProvider = await login({
		keycloakUrl: KEYCLOAK_URL,
		realm: REALM,
		clientId: CLIENT_ID,
		username: USERNAME,
		password: PASSWORD,
		keycloakVerifySsl: false,
		fetch: fetchStub
	});
	assert.equal(fetchStub.calls.length, 1);
	// The injected transport receives the request unchanged — the flag never touches it.
	assert.equal(fetchStub.calls[0].init.dispatcher, undefined);
	assert.equal(await provider.getAccessToken(), 'access-1');
});
