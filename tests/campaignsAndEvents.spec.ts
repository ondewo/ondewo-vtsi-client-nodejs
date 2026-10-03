// Copyright 2021-2026 ONDEWO GmbH
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
// The Campaigns and Events services, campaign enrollment through AddCallersToCampaign /
// AddScheduledCallersToCampaign, the idempotency key of the five batch-creating Calls requests,
// the Calls status streams and the softphone source allow-list of AsteriskConfigsVariables, as
// GENERATED for this client.
//
// The assertions drive the generated stubs directly: a renamed field or a dropped RPC fails to
// compile, a server stream that became unary fails the descriptor checks, and the two stream
// round trips run a real @grpc/grpc-js server and client in-process over loopback, so the
// serialisers the generator wired are the ones exercised.

import nodeTest from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import {
	ClientReadableStream,
	credentials,
	Server,
	ServerCredentials,
	ServerWritableStream,
	ServiceDefinition,
	UntypedServiceImplementation
} from '@grpc/grpc-js';

import { Duration } from '../api/google/protobuf/duration_pb';
import { CallsService } from '../api/ondewo/vtsi/calls_grpc_pb';
import {
	AddCallersToCampaignRequest,
	AddScheduledCallersToCampaignRequest,
	StartCallersRequest,
	StartListenersRequest,
	StartScheduledCallersRequest
} from '../api/ondewo/vtsi/calls_pb';
import { CampaignsClient, CampaignsService } from '../api/ondewo/vtsi/campaigns_grpc_pb';
import {
	Campaign,
	CampaignAssignment,
	CampaignDisplayName,
	CampaignStartMode,
	CampaignState,
	CampaignStatistics,
	StreamCampaignStatusRequest,
	StreamCampaignStatusResponse
} from '../api/ondewo/vtsi/campaigns_pb';
import { AsteriskConfigsVariables } from '../api/ondewo/vtsi/projects_pb';
import { EventsClient, EventsService } from '../api/ondewo/vtsi/events_grpc_pb';
import {
	SubscribeVtsiEventsRequest,
	SubscribeVtsiEventsResponse,
	VtsiEvent,
	VtsiEventFilter,
	VtsiEventMessage,
	Webhook
} from '../api/ondewo/vtsi/events_pb';

/** The descriptor fields the streaming checks read; the generated `.d.ts` types them against a phantom `grpc`. */
interface MethodShape {
	path: string;
	requestStream: boolean;
	responseStream: boolean;
}

/** Reads a generated service definition as a plain record of method descriptors. */
function methodsOf(service: unknown): Record<string, MethodShape> {
	return service as Record<string, MethodShape>;
}

/** Every RPC of a service, keyed by its wire path, with true for a server stream. */
function serverStreamsByPath(service: unknown): Record<string, boolean> {
	const result: Record<string, boolean> = {};
	for (const method of Object.values(methodsOf(service))) {
		assert.equal(method.requestStream, false, `${method.path} must not be client-streaming`);
		result[method.path] = method.responseStream;
	}
	return result;
}

nodeTest('the Campaigns service carries every campaign RPC, and only the status RPC streams', (): void => {
	assert.deepEqual(serverStreamsByPath(CampaignsService), {
		'/ondewo.vtsi.Campaigns/CreateCampaign': false,
		'/ondewo.vtsi.Campaigns/GetCampaign': false,
		'/ondewo.vtsi.Campaigns/UpdateCampaign': false,
		'/ondewo.vtsi.Campaigns/DeleteCampaign': false,
		'/ondewo.vtsi.Campaigns/ListCampaigns': false,
		'/ondewo.vtsi.Campaigns/GetCampaignStatistics': false,
		'/ondewo.vtsi.Campaigns/ListCampaignCalls': false,
		'/ondewo.vtsi.Campaigns/StartCampaign': false,
		'/ondewo.vtsi.Campaigns/StopCampaign': false,
		'/ondewo.vtsi.Campaigns/HardStopCampaign': false,
		'/ondewo.vtsi.Campaigns/ResumeCampaign': false,
		'/ondewo.vtsi.Campaigns/StreamCampaignStatus': true
	});
});

nodeTest('the Events service carries subscription and webhook CRUD, and only the subscription streams', (): void => {
	assert.deepEqual(serverStreamsByPath(EventsService), {
		'/ondewo.vtsi.Events/CreateVtsiEventSubscription': false,
		'/ondewo.vtsi.Events/GetVtsiEventSubscription': false,
		'/ondewo.vtsi.Events/UpdateVtsiEventSubscription': false,
		'/ondewo.vtsi.Events/DeleteVtsiEventSubscription': false,
		'/ondewo.vtsi.Events/ListVtsiEventSubscriptions': false,
		'/ondewo.vtsi.Events/CreateWebhook': false,
		'/ondewo.vtsi.Events/GetWebhook': false,
		'/ondewo.vtsi.Events/UpdateWebhook': false,
		'/ondewo.vtsi.Events/DeleteWebhook': false,
		'/ondewo.vtsi.Events/ListWebhooks': false,
		'/ondewo.vtsi.Events/TestWebhook': false,
		'/ondewo.vtsi.Events/SubscribeVtsiEvents': true
	});
});

nodeTest('the Calls service gains the three resource status streams', (): void => {
	const streams: Record<string, boolean> = serverStreamsByPath(CallsService);
	for (const name of ['StreamCallerStatus', 'StreamListenerStatus', 'StreamScheduledCallerStatus']) {
		assert.equal(streams[`/ondewo.vtsi.Calls/${name}`], true, `${name} must be a server stream`);
	}
});

nodeTest(
	'campaign enrollment is two unary Calls RPCs, and the Start* requests carry no campaign any more',
	(): void => {
		// An old server answers these two paths UNIMPLEMENTED and starts nothing, which is what keeps a
		// rolling update from dialling a whole campaign at once. The campaign fields the 9.0.0
		// development builds put on StartCallers / StartScheduledCallers are reserved upstream, so the
		// generated Start* messages must not expose them.
		const streams: Record<string, boolean> = serverStreamsByPath(CallsService);
		assert.equal(streams['/ondewo.vtsi.Calls/AddCallersToCampaign'], false);
		assert.equal(streams['/ondewo.vtsi.Calls/AddScheduledCallersToCampaign'], false);
		for (const request of [new StartCallersRequest(), new StartScheduledCallersRequest()]) {
			assert.equal(
				(request as unknown as Record<string, unknown>)['setCampaignAssignment'],
				undefined,
				`${request.constructor.name} must not carry a campaign assignment`
			);
		}
	}
);

/** A batch-creating request, its idempotency_key field number, and how to decode the key back. */
type IdempotencyCase = [
	string,
	number,
	{ setIdempotencyKey(value: string): unknown; serializeBinary(): Uint8Array },
	(bytes: Uint8Array) => string
];

nodeTest('the five batch-creating Calls requests carry an idempotency key at its pinned field number', (): void => {
	// The server dedupes a retry by this key, so it must reach the wire under the field number the
	// pinned calls.proto gives it; the empty default means "no dedupe" and must not be serialised.
	const key: string = 'retry-7f3a';
	const cases: IdempotencyCase[] = [
		[
			'StartCallersRequest',
			4,
			new StartCallersRequest(),
			(b: Uint8Array): string => StartCallersRequest.deserializeBinary(b).getIdempotencyKey()
		],
		[
			'StartListenersRequest',
			3,
			new StartListenersRequest(),
			(b: Uint8Array): string => StartListenersRequest.deserializeBinary(b).getIdempotencyKey()
		],
		[
			'StartScheduledCallersRequest',
			4,
			new StartScheduledCallersRequest(),
			(b: Uint8Array): string => StartScheduledCallersRequest.deserializeBinary(b).getIdempotencyKey()
		],
		[
			'AddCallersToCampaignRequest',
			4,
			new AddCallersToCampaignRequest(),
			(b: Uint8Array): string => AddCallersToCampaignRequest.deserializeBinary(b).getIdempotencyKey()
		],
		[
			'AddScheduledCallersToCampaignRequest',
			4,
			new AddScheduledCallersToCampaignRequest(),
			(b: Uint8Array): string => AddScheduledCallersToCampaignRequest.deserializeBinary(b).getIdempotencyKey()
		]
	];
	for (const [name, fieldNumber, request, decode] of cases) {
		assert.equal(request.serializeBinary().length, 0, `${name}: an empty key must not be serialised`);
		request.setIdempotencyKey(key);
		const bytes: Uint8Array = request.serializeBinary();
		// Length-delimited wire type 2, one-byte tag for field numbers below 16.
		assert.deepEqual(
			Array.from(bytes),
			[(fieldNumber << 3) | 2, key.length, ...Array.from(Buffer.from(key, 'ascii'))],
			`${name}: idempotency_key must be field ${fieldNumber}`
		);
		assert.equal(decode(bytes), key, `${name}: the key must survive the wire`);
	}
});

nodeTest('the generated VtsiEvent enum is exactly the enum of the pinned events.proto', (): void => {
	// Parsed from the proto the submodule pins, so a value added upstream without a regeneration
	// -- or a regeneration against a different api commit -- fails here by name.
	const proto: string = readFileSync(join(process.cwd(), 'src/ondewo-vtsi-api/ondewo/vtsi/events.proto'), 'utf8');
	const body: string = proto.slice(proto.indexOf('enum VtsiEvent {'), proto.indexOf('enum WebhookHttpMethod {'));
	const expected: Record<string, number> = {};
	for (const match of body.matchAll(/^\s*(VTSI_EVENT_[A-Z0-9_]+)\s*=\s*(\d+);/gm)) {
		expected[match[1]] = Number(match[2]);
	}
	assert.ok(Object.keys(expected).length > 1, 'parsed no VtsiEvent values from events.proto');
	assert.deepEqual({ ...VtsiEvent }, expected);
	assert.equal(VtsiEvent.VTSI_EVENT_UNSPECIFIED, 0);
});

nodeTest('a campaign assignment selects exactly one campaign, and the selector survives the wire', (): void => {
	const byName: CampaignAssignment = new CampaignAssignment().setCampaignName('projects/p/campaigns/c');
	assert.equal(byName.getCampaignSelectorCase(), CampaignAssignment.CampaignSelectorCase.CAMPAIGN_NAME);

	const newCampaign: Campaign = new Campaign()
		.setDisplayName('autumn outreach')
		.setMaxParallelCalls(10)
		.setMaxAttempts(3)
		.setRetryDelay(new Duration().setSeconds(120));
	const assignment: CampaignAssignment = new CampaignAssignment()
		.setCampaignName('replaced by the next setter')
		.setNewCampaign(newCampaign)
		.setStartMode(CampaignStartMode.CAMPAIGN_START_MODE_DO_NOT_START);
	assert.equal(assignment.getCampaignSelectorCase(), CampaignAssignment.CampaignSelectorCase.NEW_CAMPAIGN);
	assert.equal(assignment.getCampaignName(), '');

	const sent: AddCallersToCampaignRequest = new AddCallersToCampaignRequest().setCampaignAssignment(assignment);
	const received: CampaignAssignment | undefined = AddCallersToCampaignRequest.deserializeBinary(
		sent.serializeBinary()
	).getCampaignAssignment();
	assert.ok(received);
	assert.equal(received.getStartMode(), CampaignStartMode.CAMPAIGN_START_MODE_DO_NOT_START);
	const campaign: Campaign | undefined = received.getNewCampaign();
	assert.ok(campaign);
	assert.equal(campaign.getDisplayName(), 'autumn outreach');
	assert.equal(campaign.getMaxParallelCalls(), 10);
	assert.equal(campaign.getMaxAttempts(), 3);
	assert.equal(campaign.getRetryDelay()?.getSeconds(), 120);

	const byDisplayName: AddScheduledCallersToCampaignRequest =
		new AddScheduledCallersToCampaignRequest().setCampaignAssignment(
			new CampaignAssignment().setCampaignDisplayName(
				new CampaignDisplayName().setVtsiProjectName('projects/p').setDisplayName('autumn outreach')
			)
		);
	assert.equal(
		AddScheduledCallersToCampaignRequest.deserializeBinary(byDisplayName.serializeBinary())
			.getCampaignAssignment()
			?.getCampaignSelectorCase(),
		CampaignAssignment.CampaignSelectorCase.CAMPAIGN_DISPLAY_NAME
	);
});

nodeTest('the softphone source allow-list round-trips as an ordered repeated string', (): void => {
	const sent: AsteriskConfigsVariables = new AsteriskConfigsVariables().setSoftphonePermitCidrsList([
		'10.20.0.0/16',
		'fd00:1::/64'
	]);
	const received: AsteriskConfigsVariables = AsteriskConfigsVariables.deserializeBinary(sent.serializeBinary());
	assert.deepEqual(received.getSoftphonePermitCidrsList(), ['10.20.0.0/16', 'fd00:1::/64']);
	assert.deepEqual(new AsteriskConfigsVariables().getSoftphonePermitCidrsList(), []);
});

nodeTest('webhook custom headers round-trip as a map', (): void => {
	const sent: Webhook = new Webhook().setUrl('https://example.com/vtsi-events');
	sent.getCustomHeadersMap().set('X-Tenant', 'acme').set('Authorization', 'Bearer not-a-real-token');
	const received: Webhook = Webhook.deserializeBinary(sent.serializeBinary());
	assert.deepEqual(received.getCustomHeadersMap().toObject().sort(), [
		['Authorization', 'Bearer not-a-real-token'],
		['X-Tenant', 'acme']
	]);
});

/** Starts an in-process server on a kernel-chosen loopback port and returns its address. */
async function startServer(server: Server): Promise<string> {
	const port: number = await new Promise<number>(
		(resolve: (bound: number) => void, reject: (error: Error) => void): void => {
			server.bindAsync(
				'127.0.0.1:0',
				ServerCredentials.createInsecure(),
				(error: Error | null, bound: number): void => {
					if (error) {
						reject(error);
						return;
					}
					resolve(bound);
				}
			);
		}
	);
	return `127.0.0.1:${port}`;
}

/** Collects every message of a server stream until it ends. */
function collect<T>(stream: ClientReadableStream<T>): Promise<T[]> {
	return new Promise<T[]>((resolve: (received: T[]) => void, reject: (error: Error) => void): void => {
		const received: T[] = [];
		stream.on('data', (message: T): number => received.push(message));
		stream.on('error', reject);
		stream.on('end', (): void => resolve(received));
	});
}

/** A generated client constructor, typed against the real @grpc/grpc-js so it can be closed. */
type StreamingClient<TRequest, TResponse> = { close(): void } & Record<
	string,
	(request: TRequest) => ClientReadableStream<TResponse>
>;

nodeTest(
	'StreamCampaignStatus streams a snapshot then progress through the generated stubs',
	async (): Promise<void> => {
		const server: Server = new Server();
		let seenRequest: StreamCampaignStatusRequest | undefined;
		const implementation: UntypedServiceImplementation = {
			streamCampaignStatus: (
				call: ServerWritableStream<StreamCampaignStatusRequest, StreamCampaignStatusResponse>
			): void => {
				seenRequest = call.request;
				const statistics: CampaignStatistics = new CampaignStatistics()
					.setTotal(100)
					.setCompleted(20)
					.setFailed(30)
					.setInProgress(10)
					.setNotStarted(40);
				const campaign: Campaign = new Campaign()
					.setName('projects/p/campaigns/c')
					.setState(CampaignState.CAMPAIGN_STATE_RUNNING)
					.setStatistics(statistics);
				const stopping: Campaign = Campaign.deserializeBinary(campaign.serializeBinary()).setState(
					CampaignState.CAMPAIGN_STATE_STOPPING
				);
				call.write(new StreamCampaignStatusResponse().setSnapshot(true).setCampaignsList([campaign]));
				call.write(new StreamCampaignStatusResponse().setCampaignsList([stopping]));
				call.end();
			}
		};
		server.addService(CampaignsService as unknown as ServiceDefinition, implementation);
		const address: string = await startServer(server);
		const client: StreamingClient<StreamCampaignStatusRequest, StreamCampaignStatusResponse> = new CampaignsClient(
			address,
			credentials.createInsecure()
		) as unknown as StreamingClient<StreamCampaignStatusRequest, StreamCampaignStatusResponse>;
		try {
			const responses: StreamCampaignStatusResponse[] = await collect(
				client.streamCampaignStatus(
					new StreamCampaignStatusRequest().setVtsiProjectName('projects/p').setIncludeCalls(true)
				)
			);
			assert.equal(seenRequest?.getVtsiProjectName(), 'projects/p');
			assert.equal(seenRequest?.getIncludeCalls(), true);
			assert.deepEqual(
				responses.map((response: StreamCampaignStatusResponse): boolean => response.getSnapshot()),
				[true, false]
			);
			const statistics: CampaignStatistics | undefined = responses[0].getCampaignsList()[0].getStatistics();
			assert.deepEqual(
				[
					statistics?.getTotal(),
					statistics?.getCompleted(),
					statistics?.getFailed(),
					statistics?.getInProgress(),
					statistics?.getNotStarted()
				],
				[100, 20, 30, 10, 40]
			);
			assert.equal(responses[1].getCampaignsList()[0].getState(), CampaignState.CAMPAIGN_STATE_STOPPING);
		} finally {
			client.close();
			server.forceShutdown();
		}
	}
);

nodeTest(
	'SubscribeVtsiEvents streams events and a resume token through the generated stubs',
	async (): Promise<void> => {
		const server: Server = new Server();
		let seenRequest: SubscribeVtsiEventsRequest | undefined;
		const implementation: UntypedServiceImplementation = {
			subscribeVtsiEvents: (
				call: ServerWritableStream<SubscribeVtsiEventsRequest, SubscribeVtsiEventsResponse>
			): void => {
				seenRequest = call.request;
				const event: VtsiEventMessage = new VtsiEventMessage()
					.setEventId('e-1')
					.setEvent(VtsiEvent.VTSI_EVENT_CALL_CONNECTED)
					.setVtsiProjectName('projects/p')
					.setResourceSequence(7);
				call.write(new SubscribeVtsiEventsResponse().setEventsList([event]).setResumeToken('token-1'));
				call.end();
			}
		};
		server.addService(EventsService as unknown as ServiceDefinition, implementation);
		const address: string = await startServer(server);
		const client: StreamingClient<SubscribeVtsiEventsRequest, SubscribeVtsiEventsResponse> = new EventsClient(
			address,
			credentials.createInsecure()
		) as unknown as StreamingClient<SubscribeVtsiEventsRequest, SubscribeVtsiEventsResponse>;
		try {
			const request: SubscribeVtsiEventsRequest = new SubscribeVtsiEventsRequest()
				.setVtsiProjectName('projects/p')
				.setFilter(new VtsiEventFilter().setEventsList([VtsiEvent.VTSI_EVENT_CALL_CONNECTED]));
			const responses: SubscribeVtsiEventsResponse[] = await collect(client.subscribeVtsiEvents(request));
			assert.equal(seenRequest?.getSelectorCase(), SubscribeVtsiEventsRequest.SelectorCase.FILTER);
			assert.equal(seenRequest?.hasResumeToken(), false, 'an unset resume token must stay absent');
			assert.equal(responses.length, 1);
			assert.equal(responses[0].getResumeToken(), 'token-1');
			const event: VtsiEventMessage = responses[0].getEventsList()[0];
			assert.equal(event.getEvent(), VtsiEvent.VTSI_EVENT_CALL_CONNECTED);
			assert.equal(event.getResourceSequence(), 7);
			assert.equal(event.hasSipStatusType(), false);
		} finally {
			client.close();
			server.forceShutdown();
		}
	}
);
