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
// Minimal, idiomatic VTSI example: construct a Calls gRPC client, attach the
// Keycloak bearer token as `Authorization` metadata, call the ListCallers RPC,
// and handle the response.
//
// The reusable Keycloak flow that produces the bearer token lives in
// `loginAndListCallers.ts`; here the token is taken from any {@link AccessTokenSource}
// (an {@link OfflineTokenProvider} from `login(...)` satisfies it) so the RPC logic
// stays hermetically unit-testable with a mocked client.

import { ChannelCredentials, ClientUnaryCall, Metadata, ServiceError } from '@grpc/grpc-js';

import { CallsClient } from '../api/ondewo/vtsi/calls_grpc_pb';
import { Caller, ListCallersRequest, ListCallersResponse } from '../api/ondewo/vtsi/calls_pb';

/**
 * Anything that can hand out a currently-valid Keycloak access token.
 *
 * The SDK's {@link OfflineTokenProvider} (returned by `login(...)`) implements this, but a plain
 * object works too, which keeps the RPC logic below testable without a live Keycloak.
 */
export interface AccessTokenSource {
	/**
	 * Returns a currently-valid access-token JWT to attach as `Authorization: Bearer <jwt>`.
	 *
	 * @returns A promise resolving to the bearer token string.
	 */
	getAccessToken(): Promise<string>;
}

/**
 * The single generated-client method this example depends on.
 *
 * The generated {@link CallsClient} satisfies this structurally, so a hand-written mock can be
 * substituted in unit tests.
 */
export interface CallerLister {
	/**
	 * Lists the callers configured for a VTSI project.
	 *
	 * @param request The populated {@link ListCallersRequest}.
	 * @param metadata gRPC call metadata carrying the `Authorization` bearer header.
	 * @param onResponse Node-style callback receiving the error or the {@link ListCallersResponse}.
	 * @returns The in-flight unary call handle.
	 */
	listCallers(
		request: ListCallersRequest,
		metadata: Metadata,
		onResponse: (error: ServiceError | null, response: ListCallersResponse) => void
	): ClientUnaryCall;
}

/**
 * A {@link CallsClient} with `close()` exposed.
 *
 * The generated stub's `.d.ts` types its base against a phantom `grpc` module, so the runtime
 * `close()` inherited from the real `@grpc/grpc-js` client is invisible to the type-checker; this
 * interface re-declares it so callers can release the channel without an inline cast.
 */
export interface ClosableCallsClient extends CallsClient {
	/** Closes the underlying gRPC channel, releasing its resources. */
	close(): void;
}

/**
 * Constructs a VTSI {@link CallsClient} pointed at a gRPC endpoint.
 *
 * @param target Host:port of the VTSI gRPC server, e.g. `localhost:40051`.
 * @param credentials Channel credentials; defaults to insecure (plaintext) for local development.
 *   Use `ChannelCredentials.createSsl()` against a TLS-terminated endpoint.
 * @returns A ready-to-use {@link ClosableCallsClient}.
 */
export function createCallsClient(
	target: string,
	credentials: ChannelCredentials = ChannelCredentials.createInsecure()
): ClosableCallsClient {
	return new CallsClient(target, credentials) as ClosableCallsClient;
}

/**
 * Lists a VTSI project's callers over gRPC and returns their names.
 *
 * Demonstrates the full request/response cycle: pull a fresh bearer token from the
 * {@link AccessTokenSource}, attach it as `Authorization` metadata, build and send the
 * {@link ListCallersRequest}, then map the {@link ListCallersResponse} to caller names.
 *
 * @param client The generated {@link CallsClient} (or any {@link CallerLister} mock).
 * @param tokenSource Source of the Keycloak bearer access token.
 * @param vtsiProjectName Resource name of the VTSI project whose callers to list.
 * @returns A promise resolving to the list of caller resource names.
 * @throws {ServiceError} When the gRPC call fails.
 */
export async function fetchCallerNames(
	client: CallerLister,
	tokenSource: AccessTokenSource,
	vtsiProjectName: string
): Promise<string[]> {
	const accessToken: string = await tokenSource.getAccessToken();
	const metadata: Metadata = new Metadata();
	metadata.set('Authorization', 'Bearer ' + accessToken);

	const request: ListCallersRequest = new ListCallersRequest();
	request.setVtsiProjectName(vtsiProjectName);

	const response: ListCallersResponse = await new Promise<ListCallersResponse>(
		(resolve: (value: ListCallersResponse) => void, reject: (reason: ServiceError) => void): void => {
			client.listCallers(request, metadata, (error: ServiceError | null, value: ListCallersResponse): void => {
				if (error) {
					reject(error);
					return;
				}
				resolve(value);
			});
		}
	);

	return response.getCallersList().map((caller: Caller): string => caller.getName());
}
