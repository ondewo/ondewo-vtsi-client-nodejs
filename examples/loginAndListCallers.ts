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

import { login, OfflineTokenProvider } from '../auth/offlineTokenProvider';

import { ClosableCallsClient, createCallsClient, fetchCallerNames } from './listCallers';

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
	/** Host:port of the VTSI gRPC server, e.g. `localhost:40051`. */
	grpcTarget: string;
	/** Resource name of the VTSI project whose callers to list. */
	vtsiProjectName: string;
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
	const tokenProvider: OfflineTokenProvider = await login({
		keycloakUrl: config.keycloakUrl,
		realm: config.realm,
		clientId: config.clientId,
		username: config.username,
		password: config.password
	});

	const client: ClosableCallsClient = createCallsClient(config.grpcTarget);
	try {
		return await fetchCallerNames(client, tokenProvider, config.vtsiProjectName);
	} finally {
		client.close();
		tokenProvider.stop();
	}
}
