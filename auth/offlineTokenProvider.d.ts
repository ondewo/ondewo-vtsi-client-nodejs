/** Minimal subset of the Fetch API response used by the offline-token provider. */
export interface FetchResponseLike {
	ok: boolean;
	status: number;
	text(): Promise<string>;
}
/** Minimal subset of the Fetch API used by the offline-token provider. */
export type FetchLike = (
	input: string,
	init: {
		method: string;
		headers: Record<string, string>;
		body: string;
	}
) => Promise<FetchResponseLike>;
/** Parsed Keycloak token-endpoint response body. */
export interface TokenResponseBody {
	access_token?: string;
	refresh_token?: string;
	expires_in?: number;
	error?: string;
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
/** Internal provider configuration (the public {@link FetchLike} is supplied separately). */
interface ProviderConfig {
	keycloakUrl: string;
	realm: string;
	clientId: string;
	username: string;
	password: string;
	tokenExpirationInS?: number;
}
/** Builds the realm token endpoint URL from a Keycloak base URL + realm. */
export declare function buildTokenEndpoint(keycloakUrl: string, realm: string): string;
/**
 * A live offline-token session: holds the current access token, auto-refreshes it from the
 * offline refresh token, and exposes it for the `Authorization: Bearer` gRPC metadata.
 */
export declare class OfflineTokenProvider {
	private readonly tokenEndpoint;
	private readonly clientId;
	private readonly username;
	private readonly password;
	private readonly tokenExpirationInS?;
	private readonly fetchImpl;
	private accessToken;
	private refreshToken;
	private accessExpiresAtMs;
	private deadlineMs?;
	private stopped;
	constructor(config: ProviderConfig, fetchImpl: FetchLike);
	/** One-time ROPC login with `scope=offline_access` against the public client. */
	login(): Promise<void>;
	/** Exchanges the offline refresh token for a fresh access token. */
	refresh(): Promise<void>;
	/** Stores the tokens from a token-endpoint response and records the access-token expiry. */
	private applyTokenResponse;
	/** True once `tokenExpirationInS` has elapsed since login (auto-refresh must then stop). */
	isExpired(): boolean;
	/**
	 * Returns a valid access token, refreshing it first when it is within the skew window of
	 * `exp`. Throws once `tokenExpirationInS` has elapsed (callers must re-login).
	 */
	getAccessToken(): Promise<string>;
	/** Returns the gRPC metadata header object for the current access token. */
	getAuthorizationMetadata(): Promise<{
		Authorization: string;
	}>;
	/** Stops the session so subsequent token access fails fast. */
	stop(): void;
}
/**
 * Logs in against a PUBLIC Keycloak client via ROPC + `offline_access` and returns a live
 * {@link OfflineTokenProvider} that auto-refreshes the access token until `tokenExpirationInS`.
 *
 * @param config login configuration; `fetch` may be injected for tests (defaults to global `fetch`).
 * @returns a live provider whose `getAccessToken` / `getAuthorizationMetadata` yield a fresh JWT.
 */
export declare function login(config: OfflineTokenLoginConfig): Promise<OfflineTokenProvider>;
export {};
