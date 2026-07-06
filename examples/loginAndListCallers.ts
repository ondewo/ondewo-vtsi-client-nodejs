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
// End-to-end VTSI example wiring the Keycloak offline-token `login(...)` flow to the
// ListCallers RPC. `login(...)` performs a ROPC + `offline_access` grant against a PUBLIC
// Keycloak client and returns an auto-refreshing OfflineTokenProvider whose access token is
// attached as `Authorization: Bearer <jwt>` metadata on every call (the current, bearer-only auth
// convention).

import { readFileSync } from 'fs';
import * as path from 'path';

import * as dotenv from 'dotenv';
import { ChannelCredentials, ServiceError } from '@grpc/grpc-js';

import { login, OfflineTokenProvider } from '../auth/offlineTokenProvider';

import { ClosableCallsClient, createCallsClient, fetchCallerNames } from './listCallers';

// Load the example configuration from `environment.env` sitting next to this script, so the
// values resolve regardless of the current working directory.
dotenv.config({ path: path.join(__dirname, 'environment.env') });

/** Everything {@link runListCallersExample} needs to authenticate and list a project's callers. */
export interface ListCallersExampleConfig {
	/** Keycloak base URL, e.g. `https://my-host/auth`. */
	keycloakUrl: string;
	/** Realm name, e.g. `ondewo-ccai-platform`. */
	realm: string;
	/** PUBLIC Keycloak client id (no secret), e.g. `ondewo-nlu-cai-sdk-public`. */
	clientId: string;
	/** Technical-user email. */
	username: string;
	/** Technical-user password. */
	password: string;
	/** Whether to verify the Keycloak server's TLS certificate during login. */
	keycloakVerifySsl: boolean;
	/** Host:port of the VTSI gRPC server, e.g. `localhost:40051`. */
	grpcTarget: string;
	/** Whether to open a TLS (SSL) gRPC channel instead of a plaintext one. */
	useSecureChannel: boolean;
	/** Optional path to a PEM root-certificate file for the secure gRPC channel. */
	grpcCert?: string;
	/** Resource name of the VTSI project whose callers to list. */
	vtsiProjectName: string;
}

/**
 * Reads a required environment variable, throwing a descriptive error when it is unset or empty.
 *
 * @param name The environment-variable name to read.
 * @returns The trimmed, non-empty value.
 * @throws {Error} When the variable is unset or empty.
 */
function requireEnv(name: string): string {
	const value: string | undefined = process.env[name];
	if (!value) {
		throw new Error('Missing required environment variable "' + name + '" (see examples/environment.env)');
	}
	return value;
}

/**
 * Parses a boolean-ish environment-variable value.
 *
 * @param value The raw value (or `undefined` when unset).
 * @param fallback The value to use when unset/empty.
 * @returns `true` for `true`/`1`/`yes`, `false` for `false`/`0`/`no`, otherwise `fallback`.
 */
function parseBool(value: string | undefined, fallback: boolean): boolean {
	if (value === undefined || value.trim() === '') {
		return fallback;
	}
	const normalized: string = value.trim().toLowerCase();
	if (['true', '1', 'yes'].includes(normalized)) {
		return true;
	}
	if (['false', '0', 'no'].includes(normalized)) {
		return false;
	}
	return fallback;
}

/**
 * Builds a {@link ListCallersExampleConfig} from the canonical ONDEWO/Keycloak environment variables
 * loaded from `examples/environment.env`.
 *
 * @returns The fully-populated example configuration.
 * @throws {Error} When a required variable is missing.
 */
export function loadConfigFromEnv(): ListCallersExampleConfig {
	const grpcCert: string | undefined = process.env.ONDEWO_GRPC_CERT?.trim() || undefined;
	return {
		keycloakUrl: requireEnv('KEYCLOAK_URL'),
		realm: requireEnv('KEYCLOAK_REALM'),
		clientId: requireEnv('KEYCLOAK_CLIENT_ID'),
		username: requireEnv('KEYCLOAK_USER_NAME'),
		password: requireEnv('KEYCLOAK_PASSWORD'),
		keycloakVerifySsl: parseBool(process.env.KEYCLOAK_VERIFY_SSL, true),
		grpcTarget: requireEnv('ONDEWO_HOST') + ':' + requireEnv('ONDEWO_PORT'),
		useSecureChannel: parseBool(process.env.ONDEWO_USE_SECURE_CHANNEL, false),
		grpcCert,
		vtsiProjectName: requireEnv('ONDEWO_VTSI_PROJECT_ID')
	};
}

/**
 * Builds the gRPC channel credentials for the configured security mode.
 *
 * @param useSecureChannel Whether to open a TLS channel.
 * @param grpcCert Optional path to a PEM root-certificate file.
 * @returns Insecure credentials for plaintext, otherwise SSL credentials (with the given root cert).
 */
function buildChannelCredentials(useSecureChannel: boolean, grpcCert?: string): ChannelCredentials {
	if (!useSecureChannel) {
		return ChannelCredentials.createInsecure();
	}
	if (grpcCert) {
		return ChannelCredentials.createSsl(readFileSync(grpcCert));
	}
	return ChannelCredentials.createSsl();
}

/**
 * Logs in against Keycloak, lists the project's callers over gRPC, and returns their names.
 *
 * @param config Keycloak credentials plus the gRPC target and VTSI project name.
 * @returns A promise resolving to the caller resource names.
 * @throws {Error} When the Keycloak login fails.
 * @throws {ServiceError} When the gRPC call fails.
 */
export async function runListCallersExample(config: ListCallersExampleConfig): Promise<string[]> {
	console.log('Authenticating against Keycloak at ' + config.keycloakUrl + ' (realm ' + config.realm + ')');
	const tokenProvider: OfflineTokenProvider = await login({
		keycloakUrl: config.keycloakUrl,
		realm: config.realm,
		clientId: config.clientId,
		username: config.username,
		password: config.password,
		keycloakVerifySsl: config.keycloakVerifySsl
	});
	console.log('Keycloak login succeeded; obtained an offline-token provider');

	const credentials: ChannelCredentials = buildChannelCredentials(config.useSecureChannel, config.grpcCert);
	let channelKind: string = 'insecure (plaintext)';
	if (config.useSecureChannel) {
		channelKind = 'secure (TLS)';
	}
	console.log('Opening ' + channelKind + ' gRPC channel to ' + config.grpcTarget);
	const client: ClosableCallsClient = createCallsClient(config.grpcTarget, credentials);
	try {
		console.log('Listing callers for VTSI project "' + config.vtsiProjectName + '"');
		return await fetchCallerNames(client, tokenProvider, config.vtsiProjectName);
	} finally {
		client.close();
		tokenProvider.stop();
	}
}

/**
 * Narrows an unknown error to a gRPC {@link ServiceError} (carrying a status `code` and `details`).
 *
 * @param error The caught value.
 * @returns `true` when the value looks like a {@link ServiceError}.
 */
function isServiceError(error: unknown): error is ServiceError {
	return typeof error === 'object' && error !== null && 'code' in error && 'details' in error;
}

/**
 * Logs a failure with as much context as is available, without leaking secrets.
 *
 * @param error The caught value.
 */
function logExampleError(error: unknown): void {
	if (isServiceError(error)) {
		console.error('gRPC call failed: code=' + String(error.code) + ' details=' + error.details);
	}
	let detail: unknown = error;
	if (error instanceof Error) {
		detail = error.message;
	}
	console.error('Failed to list VTSI callers:', detail);
}

/**
 * CLI entrypoint: loads config from `environment.env`, runs the example, and prints the callers.
 *
 * Any failure is logged with context and exits the process with a non-zero status.
 *
 * @returns A promise that resolves once the example has finished (or the process has exited).
 */
async function main(): Promise<void> {
	try {
		const config: ListCallersExampleConfig = loadConfigFromEnv();
		console.log('START: listing callers for VTSI project "' + config.vtsiProjectName + '"');
		const callerNames: string[] = await runListCallersExample(config);
		console.log('DONE: retrieved ' + String(callerNames.length) + ' caller(s)');
		for (const callerName of callerNames) {
			console.log('  - ' + callerName);
		}
	} catch (error) {
		logExampleError(error);
		process.exit(1);
	}
}

// Only run when executed directly (e.g. `node loginAndListCallers.js`), not when imported.
if (require.main === module) {
	void main();
}
