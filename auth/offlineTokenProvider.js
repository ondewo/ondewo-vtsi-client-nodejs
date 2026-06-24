'use strict';
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
// Keycloak offline-token auth helper (D18 of the keycloak migration plan).
//
// Headless SDK authentication against a PUBLIC Keycloak client (no client_secret, Q1):
// performs Resource-Owner-Password-Credentials (ROPC) + `offline_access`, then
// auto-refreshes the short-lived access token from the long-lived offline refresh token
// so callers always have a fresh `Authorization: Bearer <jwt>` value to attach as gRPC
// metadata. The refresh loop stops after `tokenExpirationInS` (when given).
Object.defineProperty(exports, '__esModule', { value: true });
exports.OfflineTokenProvider = void 0;
exports.buildTokenEndpoint = buildTokenEndpoint;
exports.login = login;
const DEFAULT_REFRESH_SKEW_S = 30;
/** Builds the realm token endpoint URL from a Keycloak base URL + realm. */
function buildTokenEndpoint(keycloakUrl, realm) {
	const base = keycloakUrl.replace(/\/+$/, '');
	return base + '/realms/' + encodeURIComponent(realm) + '/protocol/openid-connect/token';
}
/** Performs a token request against the Keycloak token endpoint and returns the parsed body. */
async function requestToken(tokenEndpoint, form, fetchImpl) {
	const response = await fetchImpl(tokenEndpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Accept: 'application/json'
		},
		body: form.toString()
	});
	const text = await response.text();
	let body = {};
	if (text) {
		try {
			body = JSON.parse(text);
		} catch (parseError) {
			throw new Error('Keycloak token endpoint returned a non-JSON response: ' + text);
		}
	}
	if (!response.ok) {
		const description = body.error_description || body.error || text || 'HTTP ' + response.status;
		throw new Error('Keycloak token request failed (' + response.status + '): ' + description);
	}
	return body;
}
/**
 * A live offline-token session: holds the current access token, auto-refreshes it from the
 * offline refresh token, and exposes it for the `Authorization: Bearer` gRPC metadata.
 */
class OfflineTokenProvider {
	constructor(config, fetchImpl) {
		this.tokenEndpoint = buildTokenEndpoint(config.keycloakUrl, config.realm);
		this.clientId = config.clientId;
		this.username = config.username;
		this.password = config.password;
		this.tokenExpirationInS = config.tokenExpirationInS;
		this.fetchImpl = fetchImpl;
		this.accessToken = '';
		this.refreshToken = '';
		this.accessExpiresAtMs = 0;
		this.deadlineMs = undefined;
		this.stopped = false;
	}
	/** One-time ROPC login with `scope=offline_access` against the public client. */
	async login() {
		const form = new URLSearchParams();
		form.set('grant_type', 'password');
		form.set('client_id', this.clientId);
		form.set('username', this.username);
		form.set('password', this.password);
		form.set('scope', 'offline_access');
		const body = await requestToken(this.tokenEndpoint, form, this.fetchImpl);
		this.applyTokenResponse(body);
		if (typeof this.tokenExpirationInS === 'number') {
			this.deadlineMs = Date.now() + this.tokenExpirationInS * 1000;
		}
	}
	/** Exchanges the offline refresh token for a fresh access token. */
	async refresh() {
		const form = new URLSearchParams();
		form.set('grant_type', 'refresh_token');
		form.set('client_id', this.clientId);
		form.set('refresh_token', this.refreshToken);
		const body = await requestToken(this.tokenEndpoint, form, this.fetchImpl);
		this.applyTokenResponse(body);
	}
	/** Stores the tokens from a token-endpoint response and records the access-token expiry. */
	applyTokenResponse(body) {
		if (!body.access_token) {
			throw new Error('Keycloak token response did not contain an access_token');
		}
		this.accessToken = body.access_token;
		if (body.refresh_token) {
			this.refreshToken = body.refresh_token;
		}
		let expiresInS = 0;
		if (typeof body.expires_in === 'number') {
			expiresInS = body.expires_in;
		}
		this.accessExpiresAtMs = Date.now() + expiresInS * 1000;
	}
	/** True once `tokenExpirationInS` has elapsed since login (auto-refresh must then stop). */
	isExpired() {
		return typeof this.deadlineMs === 'number' && Date.now() >= this.deadlineMs;
	}
	/**
	 * Returns a valid access token, refreshing it first when it is within the skew window of
	 * `exp`. Throws once `tokenExpirationInS` has elapsed (callers must re-login).
	 */
	async getAccessToken() {
		if (this.stopped || this.isExpired()) {
			this.stopped = true;
			throw new Error('Offline-token session expired (tokenExpirationInS elapsed); re-login required');
		}
		const skewMs = DEFAULT_REFRESH_SKEW_S * 1000;
		if (Date.now() >= this.accessExpiresAtMs - skewMs) {
			await this.refresh();
		}
		return this.accessToken;
	}
	/** Returns the gRPC metadata header object for the current access token. */
	async getAuthorizationMetadata() {
		const token = await this.getAccessToken();
		return { Authorization: 'Bearer ' + token };
	}
	/** Stops the session so subsequent token access fails fast. */
	stop() {
		this.stopped = true;
	}
}
exports.OfflineTokenProvider = OfflineTokenProvider;
/**
 * Logs in against a PUBLIC Keycloak client via ROPC + `offline_access` and returns a live
 * {@link OfflineTokenProvider} that auto-refreshes the access token until `tokenExpirationInS`.
 *
 * @param config login configuration; `fetch` may be injected for tests (defaults to global `fetch`).
 * @returns a live provider whose `getAccessToken` / `getAuthorizationMetadata` yield a fresh JWT.
 */
async function login(config) {
	if (!config || typeof config !== 'object') {
		throw new Error('login(config) requires a configuration object');
	}
	const required = ['keycloakUrl', 'realm', 'clientId', 'username', 'password'];
	for (const key of required) {
		if (!config[key]) {
			throw new Error('login(config) requires a non-empty "' + key + '"');
		}
	}
	const fetchImpl = config.fetch || globalThis.fetch;
	if (typeof fetchImpl !== 'function') {
		throw new Error('No fetch implementation available; pass config.fetch or run on Node 18+');
	}
	const provider = new OfflineTokenProvider(
		{
			keycloakUrl: config.keycloakUrl,
			realm: config.realm,
			clientId: config.clientId,
			username: config.username,
			password: config.password,
			tokenExpirationInS: config.tokenExpirationInS
		},
		fetchImpl
	);
	await provider.login();
	return provider;
}
