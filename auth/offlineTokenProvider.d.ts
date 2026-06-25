/**
 * Minimal subset of the Fetch API response used by the offline-token provider.
 *
 * Only the members the provider actually reads are modelled, so both the global `fetch`
 * response and a hand-rolled test double satisfy the contract.
 */
export interface FetchResponseLike {
	/** `true` when the HTTP status is in the 2xx range. */
	ok: boolean;
	/** Numeric HTTP status code (e.g. `200`, `401`, `503`). */
	status: number;
	/**
	 * Reads the full response body as text.
	 *
	 * @returns A promise resolving to the raw (un-parsed) response body.
	 */
	text(): Promise<string>;
}
/**
 * Minimal subset of the Fetch API used by the offline-token provider.
 *
 * Matches the call shape the provider makes against the Keycloak token endpoint, allowing the
 * global `fetch` or an injected test double to be supplied interchangeably.
 *
 * @param input The absolute request URL (the realm token endpoint).
 * @param init The request options: HTTP method, headers, and the form-encoded body.
 * @returns A promise resolving to the {@link FetchResponseLike} for the request.
 */
export type FetchLike = (
	input: string,
	init: {
		method: string;
		headers: Record<string, string>;
		body: string;
	}
) => Promise<FetchResponseLike>;
/**
 * Parsed Keycloak token-endpoint response body.
 *
 * Every field is optional because the same shape models both a successful token grant
 * (`access_token`/`refresh_token`/`expires_in`) and an OAuth error reply
 * (`error`/`error_description`).
 */
export interface TokenResponseBody {
	/** Short-lived bearer JWT issued by Keycloak; present on a successful grant. */
	access_token?: string;
	/** Long-lived offline refresh token used to mint new access tokens; present on a successful grant. */
	refresh_token?: string;
	/** Lifetime of `access_token` in seconds, as reported by Keycloak. */
	expires_in?: number;
	/** OAuth error code (e.g. `invalid_grant`); present on a failed request. */
	error?: string;
	/** Human-readable error detail; present on a failed request. */
	error_description?: string;
}
/** Configuration for {@link login} against a PUBLIC Keycloak client (no client_secret, Q1). */
export interface OfflineTokenLoginConfig {
	/** Keycloak base URL, e.g. `https://host/auth`. */
	keycloakUrl: string;
	/** Realm name, e.g. `ondewo-ccai-platform`. */
	realm: string;
	/** PUBLIC client id, e.g. `ondewo-nlu-cai-sdk-public` (no secret). */
	clientId: string;
	/** Technical-user email. */
	username: string;
	/** Technical-user password. */
	password: string;
	/** Optional bound (seconds) on how long the auto-refresh loop runs after login. */
	tokenExpirationInS?: number;
	/** Optional fetch implementation (for tests); defaults to the global `fetch`. */
	fetch?: FetchLike;
}
/**
 * Internal provider configuration (the public {@link FetchLike} is supplied separately).
 *
 * Mirrors {@link OfflineTokenLoginConfig} minus the injectable `fetch`, which the provider
 * receives as a dedicated constructor argument rather than as part of its config object.
 */
interface ProviderConfig {
	/** Keycloak base URL, e.g. `https://host/auth`. */
	keycloakUrl: string;
	/** Realm name, e.g. `ondewo-ccai-platform`. */
	realm: string;
	/** PUBLIC client id, e.g. `ondewo-nlu-cai-sdk-public` (no secret). */
	clientId: string;
	/** Technical-user email. */
	username: string;
	/** Technical-user password. */
	password: string;
	/** Optional bound (seconds) on how long the auto-refresh loop runs after login. */
	tokenExpirationInS?: number;
}
/**
 * Builds the realm token endpoint URL from a Keycloak base URL + realm.
 *
 * @param keycloakUrl Keycloak base URL, e.g. `https://host/auth`; any trailing slashes are trimmed.
 * @param realm Realm name; URL-encoded into the path.
 * @returns The fully-qualified OpenID-Connect token endpoint URL for the realm.
 */
export declare function buildTokenEndpoint(keycloakUrl: string, realm: string): string;
/**
 * A live offline-token session: holds the current access token, auto-refreshes it from the
 * offline refresh token, and exposes it for the `Authorization: Bearer` gRPC metadata.
 */
export declare class OfflineTokenProvider {
	/** Absolute realm token endpoint URL, derived once from the config in the constructor. */
	private readonly tokenEndpoint;
	/** PUBLIC Keycloak client id sent with every grant request. */
	private readonly clientId;
	/** Technical-user email used for the initial ROPC login. */
	private readonly username;
	/** Technical-user password used for the initial ROPC login. */
	private readonly password;
	/** Optional bound (seconds) on how long the auto-refresh loop runs after login. */
	private readonly tokenExpirationInS?;
	/** Fetch implementation used for all token-endpoint HTTP calls. */
	private readonly fetchImpl;
	/** Current access-token JWT; empty until {@link login} succeeds. */
	private accessToken;
	/** Current offline refresh token; empty until {@link login} succeeds. */
	private refreshToken;
	/** Epoch-millis timestamp at which the current `accessToken` expires. */
	private accessExpiresAtMs;
	/** Epoch-millis deadline after which the session is expired; `undefined` when unbounded. */
	private deadlineMs?;
	/** `true` once the session has been stopped or has expired; gates all token access. */
	private stopped;
	/**
	 * Creates a provider; call {@link login} before requesting tokens.
	 *
	 * @param config Resolved provider configuration (endpoint, client id, credentials, optional deadline).
	 * @param fetchImpl Fetch implementation used for every token-endpoint request.
	 */
	constructor(config: ProviderConfig, fetchImpl: FetchLike);
	/**
	 * One-time ROPC login with `scope=offline_access` against the public client.
	 *
	 * Stores the returned access/refresh tokens and, when `tokenExpirationInS` is set, records the
	 * session deadline relative to now.
	 *
	 * @returns A promise that resolves once the tokens have been stored.
	 * @throws {Error} When the token request fails or the response carries no `access_token`.
	 */
	login(): Promise<void>;
	/**
	 * Exchanges the offline refresh token for a fresh access token.
	 *
	 * @returns A promise that resolves once the new tokens have been stored.
	 * @throws {Error} When the refresh request fails or the response carries no `access_token`.
	 */
	refresh(): Promise<void>;
	/**
	 * Stores the tokens from a token-endpoint response and records the access-token expiry.
	 *
	 * The refresh token is only overwritten when the response carries a new one, so a refresh
	 * grant that omits it keeps the existing offline token.
	 *
	 * @param body Parsed token-endpoint response body.
	 * @throws {Error} When `body` has no `access_token`.
	 */
	private applyTokenResponse;
	/**
	 * Reports whether the session deadline has passed.
	 *
	 * @returns `true` once `tokenExpirationInS` has elapsed since login (auto-refresh must then
	 *   stop); always `false` when no deadline was configured.
	 */
	isExpired(): boolean;
	/**
	 * Returns a valid access token, refreshing it first when it is within the skew window of
	 * `exp`. Throws once `tokenExpirationInS` has elapsed (callers must re-login).
	 *
	 * @returns A promise resolving to a currently-valid access-token JWT.
	 * @throws {Error} When the session is stopped or expired, or when an underlying refresh fails.
	 */
	getAccessToken(): Promise<string>;
	/**
	 * Returns the gRPC metadata header object for the current access token.
	 *
	 * @returns A promise resolving to an object with a single `Authorization: 'Bearer <jwt>'` entry,
	 *   ready to attach as gRPC call metadata.
	 * @throws {Error} When the session is stopped or expired, or when an underlying refresh fails.
	 */
	getAuthorizationMetadata(): Promise<{
		Authorization: string;
	}>;
	/**
	 * Stops the session so subsequent token access fails fast.
	 *
	 * @returns Nothing; after this call {@link getAccessToken} rejects without issuing a refresh.
	 */
	stop(): void;
}
/**
 * Logs in against a PUBLIC Keycloak client via ROPC + `offline_access` and returns a live
 * {@link OfflineTokenProvider} that auto-refreshes the access token until `tokenExpirationInS`.
 *
 * @param config login configuration; `fetch` may be injected for tests (defaults to global `fetch`).
 * @returns a live provider whose `getAccessToken` / `getAuthorizationMetadata` yield a fresh JWT.
 * @throws {Error} When `config` is missing/not an object, a required field is empty, no fetch
 *   implementation is available, or the initial login request fails.
 */
export declare function login(config: OfflineTokenLoginConfig): Promise<OfflineTokenProvider>;
export {};
