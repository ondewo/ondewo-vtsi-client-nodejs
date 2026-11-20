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
// The call-control surface of ondewo-vtsi-api 9.5.0 (OND236-120), as GENERATED for this client: the
// live-call RPCs of Calls (media control, call audio, DTMF, participants, typed transfer outcomes),
// the warm intro records, and the ondewo.sip SipStatus fields ondewo-vtsi reads from a SIP container
// (call_id, the media-control level, sip_response_code, delegated_transfer, capabilities).
//
// Every field of the listed messages is parsed from the pinned protos and checked ON THE WIRE: a
// minimal value is encoded under the proto's field number, decoded by the generated class, read back
// through the generated getter and re-encoded byte for byte. So a field the generator dropped, a
// getter wired to another number, or a regeneration against a different api commit fails by name.

import nodeTest from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import * as callConfigsPb from '../api/ondewo/vtsi/call_configs_pb';
import * as callsPb from '../api/ondewo/vtsi/calls_pb';
import { CallsService } from '../api/ondewo/vtsi/calls_grpc_pb';
import * as sipPb from '../api/ondewo/sip/sip_pb';
import { SipService } from '../api/ondewo/sip/sip_grpc_pb';

const PROTO_ROOT: string = join(process.cwd(), 'src/ondewo-vtsi-api/ondewo');

/** Reads a pinned proto without its comments. */
function protoText(relativePath: string): string {
	return readFileSync(join(PROTO_ROOT, relativePath), 'utf8')
		.replace(/\/\*[\s\S]*?\*\//g, '')
		.replace(/\/\/.*$/gm, '');
}

const CALLS_PROTO: string = protoText('vtsi/calls.proto');
const CALL_CONFIGS_PROTO: string = protoText('vtsi/call_configs.proto');
const SIP_PROTO: string = protoText('sip/sip.proto');

/** Every enum name declared in the protos the checked messages can reference, nested ones included. */
const ENUM_NAMES: Set<string> = new Set<string>(
	['vtsi/calls.proto', 'vtsi/call_configs.proto', 'sip/sip.proto', 'nlu/intent.proto'].flatMap(
		(file: string): string[] =>
			Array.from(protoText(file).matchAll(/\benum\s+(\w+)\s*\{/g), (match: RegExpMatchArray): string => match[1])
	)
);

/** The body (between the braces) of the first `<keyword> <name> {` block of a proto. */
function blockBody(proto: string, keyword: 'message' | 'enum' | 'service', name: string): string {
	const start: RegExpExecArray | null = new RegExp(`\\b${keyword}\\s+${name}\\s*\\{`).exec(proto);
	assert.ok(start, `the pinned proto declares no ${keyword} ${name}`);
	const open: number = start.index + start[0].length;
	let depth: number = 1;
	for (let index: number = open; index < proto.length; index++) {
		if (proto[index] === '{') {
			depth++;
		} else if (proto[index] === '}') {
			depth--;
		}
		if (depth === 0) {
			return proto.slice(open, index);
		}
	}
	throw new Error(`${keyword} ${name} is not closed`);
}

/** A field as the pinned proto declares it. */
interface ProtoField {
	name: string;
	number: number;
	type: string;
	repeated: boolean;
}

/** The fields of a message, oneof members included, nested message and enum declarations excluded. */
function protoFields(proto: string, message: string): ProtoField[] {
	let body: string = blockBody(proto, 'message', message);
	let nested: RegExpExecArray | null = /\b(message|enum)\s+(\w+)\s*\{/.exec(body);
	while (nested) {
		const inner: string = blockBody(body, nested[1] as 'message' | 'enum', nested[2]);
		body = body.slice(0, nested.index) + body.slice(nested.index + nested[0].length + inner.length + 1);
		nested = /\b(message|enum)\s+(\w+)\s*\{/.exec(body);
	}
	return Array.from(
		body.matchAll(
			/(?:^|[\s;{}])(repeated\s+|optional\s+)?(map\s*<\s*\w+\s*,\s*[\w.]+\s*>|[\w.]+)\s+(\w+)\s*=\s*(\d+)\s*(?:\[[^\]]*\])?\s*;/g
		),
		(match: RegExpMatchArray): ProtoField => ({
			name: match[3],
			number: Number(match[4]),
			type: match[2].replace(/\s+/g, ''),
			repeated: (match[1] ?? '').trim() === 'repeated'
		})
	);
}

/** The values of an enum, by name. */
function protoEnum(proto: string, name: string): Record<string, number> {
	const values: Record<string, number> = {};
	for (const match of blockBody(proto, 'enum', name).matchAll(/(\w+)\s*=\s*(-?\d+)\s*;/g)) {
		values[match[1]] = Number(match[2]);
	}
	assert.ok(Object.keys(values).length > 1, `parsed no values of enum ${name}`);
	return values;
}

/** How an RPC streams. */
type StreamingShape = 'unary' | 'server' | 'client' | 'bidi';

function shapeOf(requestStream: boolean, responseStream: boolean): StreamingShape {
	if (requestStream) {
		return responseStream ? 'bidi' : 'client';
	}
	return responseStream ? 'server' : 'unary';
}

/** Every RPC of a service of the pinned proto, keyed by its wire path. */
function protoServiceShapes(proto: string, protoPackage: string, service: string): Record<string, StreamingShape> {
	const shapes: Record<string, StreamingShape> = {};
	for (const match of blockBody(proto, 'service', service).matchAll(
		/\brpc\s+(\w+)\s*\(\s*(stream\s+)?[\w.]+\s*\)\s*returns\s*\(\s*(stream\s+)?[\w.]+\s*\)/g
	)) {
		shapes[`/${protoPackage}.${service}/${match[1]}`] = shapeOf(Boolean(match[2]), Boolean(match[3]));
	}
	return shapes;
}

/** The descriptor fields the streaming checks read; the generated `.d.ts` types them against a phantom `grpc`. */
interface MethodShape {
	path: string;
	requestStream: boolean;
	responseStream: boolean;
}

/** Every RPC of a generated service definition, keyed by its wire path. */
function generatedServiceShapes(service: unknown): Record<string, StreamingShape> {
	const shapes: Record<string, StreamingShape> = {};
	for (const method of Object.values(service as Record<string, MethodShape>)) {
		shapes[method.path] = shapeOf(method.requestStream, method.responseStream);
	}
	return shapes;
}

/** A generated message class, read dynamically. */
interface GeneratedMessage {
	serializeBinary(): Uint8Array;
}
interface GeneratedClass {
	deserializeBinary(bytes: Uint8Array): GeneratedMessage;
}

function varint(value: number): number[] {
	const bytes: number[] = [];
	for (; value > 0x7f; value = Math.floor(value / 128)) {
		bytes.push((value & 0x7f) | 0x80);
	}
	bytes.push(value);
	return bytes;
}

function tag(fieldNumber: number, wireType: number): number[] {
	return varint(fieldNumber * 8 + wireType);
}

const X: number = 0x78; // 'x'
const VARINT_TYPES: Set<string> = new Set<string>(['bool', 'int32', 'int64', 'uint32', 'uint64']);

/** The wire bytes of a minimal non-default value of a field, and the check of what the getter returns. */
function minimalValue(field: ProtoField): { bytes: number[]; getter: string; check(value: unknown): void } {
	const camel: string = field.name
		.split('_')
		.map((part: string): string => part.charAt(0).toUpperCase() + part.slice(1))
		.join('');
	const map: RegExpExecArray | null = /^map<(\w+),([\w.]+)>$/.exec(field.type);
	if (map) {
		assert.ok(map[1] === 'string' && map[2] === 'string', `${field.name}: unsupported map type ${field.type}`);
		return {
			bytes: [...tag(field.number, 2), 6, ...tag(1, 2), 1, 0x6b, ...tag(2, 2), 1, 0x76],
			getter: `get${camel}Map`,
			check: (value: unknown): void => assert.equal((value as { get(key: string): string | undefined }).get('k'), 'v')
		};
	}
	const isVarint: boolean = VARINT_TYPES.has(field.type) || ENUM_NAMES.has(field.type.split('.').pop() ?? '');
	const scalarOne: unknown = field.type === 'bool' ? true : 1;
	if (field.repeated) {
		const listGetter: string = `get${camel}List`;
		if (field.type === 'string') {
			return {
				bytes: [...tag(field.number, 2), 1, X],
				getter: listGetter,
				check: (v: unknown): void => assert.deepEqual(v, ['x'])
			};
		}
		if (isVarint) {
			// proto3 packs repeated scalars.
			return {
				bytes: [...tag(field.number, 2), 1, 1],
				getter: listGetter,
				check: (v: unknown): void => assert.deepEqual(v, [scalarOne])
			};
		}
		assert.ok(/^[A-Z]|\./.test(field.type), `${field.name}: unsupported repeated type ${field.type}`);
		return {
			bytes: [...tag(field.number, 2), 0],
			getter: listGetter,
			check: (v: unknown): void => assert.equal((v as unknown[]).length, 1)
		};
	}
	const getter: string = `get${camel}`;
	if (field.type === 'string') {
		return { bytes: [...tag(field.number, 2), 1, X], getter, check: (v: unknown): void => assert.equal(v, 'x') };
	}
	if (field.type === 'bytes') {
		return {
			bytes: [...tag(field.number, 2), 1, X],
			getter: `${getter}_asU8`,
			check: (v: unknown): void => assert.deepEqual(Array.from(v as Uint8Array), [X])
		};
	}
	if (isVarint) {
		return { bytes: [...tag(field.number, 0), 1], getter, check: (v: unknown): void => assert.equal(v, scalarOne) };
	}
	if (field.type === 'float') {
		return {
			bytes: [...tag(field.number, 5), 0, 0, 0x80, 0x3f],
			getter,
			check: (v: unknown): void => assert.equal(v, 1)
		};
	}
	if (field.type === 'double') {
		return {
			bytes: [...tag(field.number, 1), 0, 0, 0, 0, 0, 0, 0xf0, 0x3f],
			getter,
			check: (v: unknown): void => assert.equal(v, 1)
		};
	}
	assert.ok(/^[A-Z]|\./.test(field.type), `${field.name}: unsupported type ${field.type}`);
	return {
		bytes: [...tag(field.number, 2), 0],
		getter,
		check: (v: unknown): void => assert.ok(v instanceof Object, 'a set message field must read back')
	};
}

/** Fails unless the generated class decodes, reads back and re-encodes the field under its proto number. */
function assertFieldOnTheWire(generated: GeneratedClass, message: string, field: ProtoField): void {
	const { bytes, getter, check } = minimalValue(field);
	const read: unknown = (generated.deserializeBinary(new Uint8Array()) as unknown as Record<string, unknown>)[getter];
	assert.equal(typeof read, 'function', `${message}.${field.name}: the generated class has no ${getter}()`);
	try {
		const decoded: GeneratedMessage = generated.deserializeBinary(Uint8Array.from(bytes));
		check((read as () => unknown).call(decoded));
		assert.deepEqual(Array.from(decoded.serializeBinary()), bytes);
	} catch (error: unknown) {
		assert.fail(`${message}.${field.name} = ${field.number}: ${(error as Error).message}`);
	}
}

/** The checked messages: the generated module, the proto that declares them, and their names. */
const CHECKED_MESSAGES: [Record<string, unknown>, string, string[]][] = [
	[
		callsPb,
		CALLS_PROTO,
		[
			'Call',
			'CallMediaControlState',
			'SetCallMediaControlRequest',
			'SetCallMediaControlResponse',
			'StreamCallAudioConfig',
			'CallAudioFrame',
			'StreamCallAudioRequest',
			'CallAudioStarted',
			'CallAudioStats',
			'CallAudioEnded',
			'StreamCallAudioResponse',
			'ListenCallAudioRequest',
			'SendCallDtmfRequest',
			'SendCallDtmfResponse',
			'InviteToCallRequest',
			'InviteToCallResponse',
			'RemoveCallParticipantRequest',
			'CallParticipant',
			'CallTarget',
			'TransferCallRequest',
			'TransferCallResponse',
			'CallTransferRecord'
		]
	],
	[callConfigsPb, CALL_CONFIGS_PROTO, ['WarmTransferConfig', 'WarmIntroRecord']],
	[
		sipPb,
		SIP_PROTO,
		[
			'SipStatus',
			'SipDelegatedTransfer',
			'SipEndCallRequest',
			'SipTransferCallRequest',
			'SipSetCallMediaControlRequest',
			'SipWarmTransferOutcomeNotice',
			'SipSendDtmfRequest',
			'SipCallAudioConfig',
			'SipCallAudioFrame',
			'SipCallAudioRequest',
			'SipCallAudioStarted',
			'SipCallAudioStats',
			'SipCallAudioEnded',
			'SipCallAudioResponse'
		]
	]
];

nodeTest('the fields ondewo-vtsi reads are where the pinned protos put them', (): void => {
	// Pinned by hand, so the wire check below cannot pass vacuously on a proto that lost them.
	const expected: [string, string, string, number][] = [
		[SIP_PROTO, 'SipStatus', 'call_id', 12],
		[SIP_PROTO, 'SipStatus', 'bot_muted', 13],
		[SIP_PROTO, 'SipStatus', 'listening_paused', 14],
		[SIP_PROTO, 'SipStatus', 'call_audio_streams', 15],
		[SIP_PROTO, 'SipStatus', 'sip_response_code', 16],
		[SIP_PROTO, 'SipStatus', 'delegated_transfer', 17],
		[SIP_PROTO, 'SipStatus', 'capabilities', 18],
		[SIP_PROTO, 'SipStatus', 'warm_transfer_outcome_notice_status', 19],
		[CALLS_PROTO, 'Call', 'media_control', 22],
		[CALLS_PROTO, 'Call', 'participants', 23],
		[CALLS_PROTO, 'Call', 'last_transfer', 24],
		[CALLS_PROTO, 'Call', 'sip_call_id', 25],
		[CALLS_PROTO, 'TransferCallRequest', 'warm_transfer_config', 9],
		[CALLS_PROTO, 'TransferCallResponse', 'outcome', 5],
		[CALLS_PROTO, 'TransferCallResponse', 'sip_response_code', 7],
		[CALLS_PROTO, 'TransferCallResponse', 'error_reason', 8],
		[CALLS_PROTO, 'CallTransferRecord', 'outcome', 4],
		[CALLS_PROTO, 'CallTransferRecord', 'warm_intro', 7]
	];
	for (const [proto, message, name, number] of expected) {
		const field: ProtoField | undefined = protoFields(proto, message).find((f: ProtoField): boolean => f.name === name);
		assert.equal(field?.number, number, `${message}.${name} must be field ${number}`);
	}
	assert.equal(
		protoFields(SIP_PROTO, 'SipStatus').find((f: ProtoField): boolean => f.name === 'capabilities')?.repeated,
		true
	);
});

nodeTest('every field of the call-control messages reaches the wire under its proto field number', (): void => {
	for (const [module, proto, messages] of CHECKED_MESSAGES) {
		for (const message of messages) {
			const generated: GeneratedClass | undefined = module[message] as GeneratedClass | undefined;
			assert.equal(typeof generated?.deserializeBinary, 'function', `${message} was not generated`);
			const fields: ProtoField[] = protoFields(proto, message);
			assert.ok(fields.length > 0, `parsed no fields of ${message}`);
			for (const field of fields) {
				assertFieldOnTheWire(generated as GeneratedClass, message, field);
			}
		}
	}
});

nodeTest('the wire check is falsifiable: a field read under the wrong number fails it', (): void => {
	const capabilities: ProtoField = { name: 'capabilities', number: 17, type: 'string', repeated: true };
	assert.throws(
		(): void => assertFieldOnTheWire(sipPb.SipStatus, 'SipStatus', capabilities),
		/SipStatus\.capabilities = 17/
	);
	const renamed: ProtoField = { name: 'capability', number: 18, type: 'string', repeated: true };
	assert.throws((): void => assertFieldOnTheWire(sipPb.SipStatus, 'SipStatus', renamed), /no getCapabilityList/);
});

nodeTest('the generated call-control enums are exactly the enums of the pinned protos', (): void => {
	const cases: [string, unknown, string, string][] = [
		['TransferOutcome', callsPb.TransferOutcome, CALLS_PROTO, 'TransferOutcome'],
		['TransferMode', callsPb.TransferMode, CALLS_PROTO, 'TransferMode'],
		['CallMediaSetting', callsPb.CallMediaSetting, CALLS_PROTO, 'CallMediaSetting'],
		['ParticipantMode', callsPb.ParticipantMode, CALLS_PROTO, 'ParticipantMode'],
		['BotPolicyOnJoin', callsPb.BotPolicyOnJoin, CALLS_PROTO, 'BotPolicyOnJoin'],
		['ParticipantState', callsPb.ParticipantState, CALLS_PROTO, 'ParticipantState'],
		['ParticipantEndReason', callsPb.ParticipantEndReason, CALLS_PROTO, 'ParticipantEndReason'],
		['CallAudioMode', callsPb.CallAudioMode, CALLS_PROTO, 'CallAudioMode'],
		['CallAudioEndReason', callsPb.CallAudioEndReason, CALLS_PROTO, 'CallAudioEndReason'],
		['WarmIntroTextSource', callConfigsPb.WarmIntroTextSource, CALL_CONFIGS_PROTO, 'WarmIntroTextSource'],
		[
			'WarmIntroUnavailablePolicy',
			callConfigsPb.WarmIntroUnavailablePolicy,
			CALL_CONFIGS_PROTO,
			'WarmIntroUnavailablePolicy'
		],
		['WarmIntroDecision', callConfigsPb.WarmIntroDecision, CALL_CONFIGS_PROTO, 'WarmIntroDecision'],
		['WarmIntroDecidedBy', callConfigsPb.WarmIntroDecidedBy, CALL_CONFIGS_PROTO, 'WarmIntroDecidedBy'],
		['SipStatus.StatusType', sipPb.SipStatus.StatusType, SIP_PROTO, 'StatusType'],
		['SipTransferDelegation', sipPb.SipTransferDelegation, SIP_PROTO, 'SipTransferDelegation'],
		['MediaControlSetting', sipPb.MediaControlSetting, SIP_PROTO, 'MediaControlSetting'],
		['MediaControlOwner', sipPb.MediaControlOwner, SIP_PROTO, 'MediaControlOwner'],
		['SipWarmTransferOutcome', sipPb.SipWarmTransferOutcome, SIP_PROTO, 'SipWarmTransferOutcome'],
		[
			'SipWarmTransferOutcomeNoticeStatus',
			sipPb.SipWarmTransferOutcomeNoticeStatus,
			SIP_PROTO,
			'SipWarmTransferOutcomeNoticeStatus'
		],
		['SipCallAudioMode', sipPb.SipCallAudioMode, SIP_PROTO, 'SipCallAudioMode'],
		['SipCallAudioEndReason', sipPb.SipCallAudioEndReason, SIP_PROTO, 'SipCallAudioEndReason']
	];
	for (const [label, generated, proto, name] of cases) {
		assert.deepEqual({ ...(generated as Record<string, number>) }, protoEnum(proto, name), label);
	}
	// By hand too: an outcome dropped from the proto AND the stub would pass the comparison above.
	assert.equal(callsPb.TransferOutcome.TRANSFER_OUTCOME_INTRO_UNAVAILABLE, 12);
	assert.equal(callsPb.TransferOutcome.TRANSFER_OUTCOME_TARGET_UNAVAILABLE, 11);
	assert.equal(sipPb.SipStatus.StatusType.OUTGOING_CALL_ANSWERING_MACHINE_DETECTED, 22);
});

nodeTest('the Calls and Sip services stream exactly as the pinned protos declare', (): void => {
	const calls: Record<string, StreamingShape> = generatedServiceShapes(CallsService);
	const sip: Record<string, StreamingShape> = generatedServiceShapes(SipService);
	assert.deepEqual(calls, protoServiceShapes(CALLS_PROTO, 'ondewo.vtsi', 'Calls'));
	assert.deepEqual(sip, protoServiceShapes(SIP_PROTO, 'ondewo.sip', 'Sip'));
	assert.equal(calls['/ondewo.vtsi.Calls/StreamCallAudio'], 'bidi');
	assert.equal(calls['/ondewo.vtsi.Calls/ListenCallAudio'], 'server');
	for (const name of ['SetCallMediaControl', 'SendCallDtmf', 'InviteToCall', 'RemoveCallParticipant', 'TransferCall']) {
		assert.equal(calls[`/ondewo.vtsi.Calls/${name}`], 'unary', name);
	}
	assert.equal(sip['/ondewo.sip.Sip/SipStreamCallAudio'], 'bidi');
	for (const name of [
		'SipSetCallMediaControl',
		'SipSendDtmf',
		'SipTransferCall',
		'SipReportAnsweringMachineDetected'
	]) {
		assert.equal(sip[`/ondewo.sip.Sip/${name}`], 'unary', name);
	}
});

nodeTest('a SipStatus carries call_id, capabilities and a delegated transfer through the typed stubs', (): void => {
	const sent: sipPb.SipStatus = new sipPb.SipStatus()
		.setCallId('call-7')
		.setBotMuted(true)
		.setSipResponseCode(202)
		.setCapabilitiesList(['warm-transfer-outcome-notice'])
		.setDelegatedTransfer(new sipPb.SipDelegatedTransfer().setRequestId('request-1').setTargetIsPhoneNumber(true));
	const received: sipPb.SipStatus = sipPb.SipStatus.deserializeBinary(sent.serializeBinary());
	assert.equal(received.getCallId(), 'call-7');
	assert.equal(received.getBotMuted(), true);
	assert.equal(received.getSipResponseCode(), 202);
	assert.deepEqual(received.getCapabilitiesList(), ['warm-transfer-outcome-notice']);
	assert.equal(received.getDelegatedTransfer()?.getRequestId(), 'request-1');
	assert.equal(received.getDelegatedTransfer()?.getTargetIsPhoneNumber(), true);
	assert.equal(new sipPb.SipStatus().hasDelegatedTransfer(), false, 'an unset delegated transfer must stay absent');
});

nodeTest('a transfer outcome and the media-control level survive the wire through the typed stubs', (): void => {
	const response: callsPb.TransferCallResponse = callsPb.TransferCallResponse.deserializeBinary(
		new callsPb.TransferCallResponse()
			.setOutcome(callsPb.TransferOutcome.TRANSFER_OUTCOME_INTRO_UNAVAILABLE)
			.setErrorReason('warm-intro-needs-listener')
			.serializeBinary()
	);
	assert.equal(response.getOutcome(), callsPb.TransferOutcome.TRANSFER_OUTCOME_INTRO_UNAVAILABLE);
	assert.equal(response.getErrorReason(), 'warm-intro-needs-listener');

	const call: callsPb.Call = callsPb.Call.deserializeBinary(
		new callsPb.Call()
			.setMediaControl(new callsPb.CallMediaControlState().setBotMuted(true).setConnectedAudioStreams(1))
			.setLastTransfer(
				new callsPb.CallTransferRecord()
					.setOutcome(callsPb.TransferOutcome.TRANSFER_OUTCOME_PENDING)
					.setWarmIntro(new callConfigsPb.WarmIntroRecord().setIntroId('intro-1'))
			)
			.serializeBinary()
	);
	assert.equal(call.getMediaControl()?.getBotMuted(), true);
	assert.equal(call.getMediaControl()?.getConnectedAudioStreams(), 1);
	assert.equal(call.getLastTransfer()?.getOutcome(), callsPb.TransferOutcome.TRANSFER_OUTCOME_PENDING);
	assert.equal(call.getLastTransfer()?.getWarmIntro()?.getIntroId(), 'intro-1');
});
