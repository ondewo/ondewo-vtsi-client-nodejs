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
// Hermetic unit tests for the ListCallers example. The generated CallsClient is replaced by a
// hand-written stub, so the example's request-building, bearer-metadata, and response-handling
// logic is exercised without a live VTSI gRPC server.

import nodeTest from 'node:test';
import assert from 'node:assert/strict';

import { ClientUnaryCall, Metadata, ServiceError, status } from '@grpc/grpc-js';

import { CallsClient } from '../api/ondewo/vtsi/calls_grpc_pb';
import { Caller, ListCallersRequest, ListCallersResponse } from '../api/ondewo/vtsi/calls_pb';

import {
	AccessTokenSource,
	CallerLister,
	ClosableCallsClient,
	createCallsClient,
	fetchCallerNames
} from './listCallers';

/** VTSI project resource name used as both the RPC input and the expected sent value. */
const PROJECT_NAME: string = 'projects/vtsi-demo';
/** Bearer access token the stubbed {@link AccessTokenSource} hands out. */
const ACCESS_TOKEN: string = 'access-xyz';
/** Caller resource names used as both the stub's response and the expected result. */
const CALLER_NAMES: string[] = ['projects/vtsi-demo/callers/a', 'projects/vtsi-demo/callers/b'];

/** A single `listCallers` invocation captured by {@link makeCallsClientStub}. */
interface RecordedListCall {
	/** The request the example built and sent. */
	request: ListCallersRequest;
	/** The metadata the example attached (carrying the `Authorization` header). */
	metadata: Metadata;
}

/** A {@link CallerLister} test double that records each call and replies from a fixed result. */
interface CallsClientStub extends CallerLister {
	/** Calls captured in invocation order. */
	calls: RecordedListCall[];
}

/**
 * Builds a Calls-client stub that records each `listCallers` call and replies once.
 *
 * @param rpcError The gRPC error to hand back, or `null` for success.
 * @param response The response to return on success (ignored when `rpcError` is set).
 * @returns A {@link CallsClientStub} whose `calls` array records every request it received.
 */
function makeCallsClientStub(rpcError: ServiceError | null, response: ListCallersResponse): CallsClientStub {
	const calls: RecordedListCall[] = [];
	const stub: CallsClientStub = {
		calls,
		listCallers(
			request: ListCallersRequest,
			metadata: Metadata,
			onResponse: (error: ServiceError | null, value: ListCallersResponse) => void
		): ClientUnaryCall {
			calls.push({ request, metadata });
			onResponse(rpcError, response);
			return undefined as unknown as ClientUnaryCall;
		}
	};
	return stub;
}

/**
 * Builds an {@link AccessTokenSource} that always resolves to the given token.
 *
 * @param token The bearer token to hand out.
 * @returns A minimal token source for the example under test.
 */
function makeTokenSource(token: string): AccessTokenSource {
	return {
		getAccessToken(): Promise<string> {
			return Promise.resolve(token);
		}
	};
}

/**
 * Builds a {@link ListCallersResponse} containing one {@link Caller} per name.
 *
 * @param names Caller resource names to add.
 * @returns The populated response.
 */
function makeResponseWith(names: string[]): ListCallersResponse {
	const response: ListCallersResponse = new ListCallersResponse();
	for (const name of names) {
		const caller: Caller = new Caller();
		caller.setName(name);
		response.addCallers(caller);
	}
	return response;
}

/** The example sends the project name, attaches the Bearer token, and maps the response to names. */
nodeTest(
	'fetchCallerNames sends the project name with a Bearer token and returns caller names',
	async (): Promise<void> => {
		const stub: CallsClientStub = makeCallsClientStub(null, makeResponseWith(CALLER_NAMES));

		const names: string[] = await fetchCallerNames(stub, makeTokenSource(ACCESS_TOKEN), PROJECT_NAME);

		assert.deepEqual(names, CALLER_NAMES);
		assert.equal(stub.calls.length, 1);
		const sent: RecordedListCall = stub.calls[0];
		assert.equal(sent.request.getVtsiProjectName(), PROJECT_NAME);
		assert.deepEqual(sent.metadata.get('authorization'), ['Bearer ' + ACCESS_TOKEN]);
		// The bearer header goes on the wire under the lowercase `authorization` key.
		const wireKeys: string[] = Object.keys(sent.metadata.getMap());
		assert.ok(wireKeys.includes('authorization'));
		assert.ok(!wireKeys.includes('Authorization'));
	}
);

/** A gRPC error from the client surfaces as a rejected promise carrying the error message. */
nodeTest('fetchCallerNames rejects when the gRPC call returns an error', async (): Promise<void> => {
	const rpcError: ServiceError = Object.assign(new Error('caller listing failed'), {
		code: status.UNAVAILABLE,
		details: 'caller listing failed',
		metadata: new Metadata()
	});
	const stub: CallsClientStub = makeCallsClientStub(rpcError, new ListCallersResponse());

	await assert.rejects(fetchCallerNames(stub, makeTokenSource(ACCESS_TOKEN), PROJECT_NAME), /caller listing failed/);
});

/** {@link createCallsClient} constructs the concrete generated {@link CallsClient}. */
nodeTest('createCallsClient builds a CallsClient for the given target', (): void => {
	const client: ClosableCallsClient = createCallsClient('localhost:40051');
	try {
		assert.ok(client instanceof CallsClient);
	} finally {
		client.close();
	}
});
