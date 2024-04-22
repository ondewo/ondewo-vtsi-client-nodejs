// package: ondewo.vtsi
// file: ondewo/vtsi/calls.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as ondewo_nlu_context_pb from '../../ondewo/nlu/context_pb';
import * as ondewo_nlu_intent_pb from '../../ondewo/nlu/intent_pb';
import * as ondewo_s2t_speech_to_text_pb from '../../ondewo/s2t/speech-to-text_pb';
import * as ondewo_t2s_text_to_speech_pb from '../../ondewo/t2s/text-to-speech_pb';
import * as ondewo_sip_sip_pb from '../../ondewo/sip/sip_pb';

export class BaseServiceConfig extends jspb.Message {
	getHost(): string;
	setHost(value: string): BaseServiceConfig;
	getPort(): number;
	setPort(value: number): BaseServiceConfig;
	getGrpcCert(): string;
	setGrpcCert(value: string): BaseServiceConfig;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): BaseServiceConfig.AsObject;
	static toObject(includeInstance: boolean, msg: BaseServiceConfig): BaseServiceConfig.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: BaseServiceConfig, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): BaseServiceConfig;
	static deserializeBinaryFromReader(message: BaseServiceConfig, reader: jspb.BinaryReader): BaseServiceConfig;
}

export namespace BaseServiceConfig {
	export type AsObject = {
		host: string;
		port: number;
		grpcCert: string;
	};
}

export class Credentials extends jspb.Message {
	getAccountName(): string;
	setAccountName(value: string): Credentials;
	getPassword(): string;
	setPassword(value: string): Credentials;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Credentials.AsObject;
	static toObject(includeInstance: boolean, msg: Credentials): Credentials.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: Credentials, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Credentials;
	static deserializeBinaryFromReader(message: Credentials, reader: jspb.BinaryReader): Credentials;
}

export namespace Credentials {
	export type AsObject = {
		accountName: string;
		password: string;
	};
}

export class NluVtsiConfig extends jspb.Message {
	hasNluBaseConfig(): boolean;
	clearNluBaseConfig(): void;
	getNluBaseConfig(): BaseServiceConfig | undefined;
	setNluBaseConfig(value?: BaseServiceConfig): NluVtsiConfig;

	hasCredentials(): boolean;
	clearCredentials(): void;
	getCredentials(): Credentials | undefined;
	setCredentials(value?: Credentials): NluVtsiConfig;

	hasAuthToken(): boolean;
	clearAuthToken(): void;
	getAuthToken(): string;
	setAuthToken(value: string): NluVtsiConfig;
	getAgentName(): string;
	setAgentName(value: string): NluVtsiConfig;
	getLanguageCode(): string;
	setLanguageCode(value: string): NluVtsiConfig;
	getInitialIntent(): string;
	setInitialIntent(value: string): NluVtsiConfig;
	clearContextsList(): void;
	getContextsList(): Array<ondewo_nlu_context_pb.Context>;
	setContextsList(value: Array<ondewo_nlu_context_pb.Context>): NluVtsiConfig;
	addContexts(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;
	getHttpBasicAuthToken(): string;
	setHttpBasicAuthToken(value: string): NluVtsiConfig;

	hasPlatform(): boolean;
	clearPlatform(): void;
	getPlatform(): ondewo_nlu_intent_pb.Intent.Message.Platform | undefined;
	setPlatform(value: ondewo_nlu_intent_pb.Intent.Message.Platform): NluVtsiConfig;

	getAuthenticationCase(): NluVtsiConfig.AuthenticationCase;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): NluVtsiConfig.AsObject;
	static toObject(includeInstance: boolean, msg: NluVtsiConfig): NluVtsiConfig.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: NluVtsiConfig, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): NluVtsiConfig;
	static deserializeBinaryFromReader(message: NluVtsiConfig, reader: jspb.BinaryReader): NluVtsiConfig;
}

export namespace NluVtsiConfig {
	export type AsObject = {
		nluBaseConfig?: BaseServiceConfig.AsObject;
		credentials?: Credentials.AsObject;
		authToken: string;
		agentName: string;
		languageCode: string;
		initialIntent: string;
		contextsList: Array<ondewo_nlu_context_pb.Context.AsObject>;
		httpBasicAuthToken: string;
		platform?: ondewo_nlu_intent_pb.Intent.Message.Platform;
	};

	export enum AuthenticationCase {
		AUTHENTICATION_NOT_SET = 0,
		CREDENTIALS = 2,
		AUTH_TOKEN = 3
	}
}

export class T2sVtsiConfig extends jspb.Message {
	hasT2sBaseConfig(): boolean;
	clearT2sBaseConfig(): void;
	getT2sBaseConfig(): BaseServiceConfig | undefined;
	setT2sBaseConfig(value?: BaseServiceConfig): T2sVtsiConfig;

	hasT2sRequestConfig(): boolean;
	clearT2sRequestConfig(): void;
	getT2sRequestConfig(): ondewo_t2s_text_to_speech_pb.RequestConfig | undefined;
	setT2sRequestConfig(value?: ondewo_t2s_text_to_speech_pb.RequestConfig): T2sVtsiConfig;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): T2sVtsiConfig.AsObject;
	static toObject(includeInstance: boolean, msg: T2sVtsiConfig): T2sVtsiConfig.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: T2sVtsiConfig, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): T2sVtsiConfig;
	static deserializeBinaryFromReader(message: T2sVtsiConfig, reader: jspb.BinaryReader): T2sVtsiConfig;
}

export namespace T2sVtsiConfig {
	export type AsObject = {
		t2sBaseConfig?: BaseServiceConfig.AsObject;
		t2sRequestConfig?: ondewo_t2s_text_to_speech_pb.RequestConfig.AsObject;
	};
}

export class S2tVtsiConfig extends jspb.Message {
	hasS2tBaseConfig(): boolean;
	clearS2tBaseConfig(): void;
	getS2tBaseConfig(): BaseServiceConfig | undefined;
	setS2tBaseConfig(value?: BaseServiceConfig): S2tVtsiConfig;

	hasS2tTranscribeRequestConfig(): boolean;
	clearS2tTranscribeRequestConfig(): void;
	getS2tTranscribeRequestConfig(): ondewo_s2t_speech_to_text_pb.TranscribeRequestConfig | undefined;
	setS2tTranscribeRequestConfig(value?: ondewo_s2t_speech_to_text_pb.TranscribeRequestConfig): S2tVtsiConfig;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): S2tVtsiConfig.AsObject;
	static toObject(includeInstance: boolean, msg: S2tVtsiConfig): S2tVtsiConfig.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: S2tVtsiConfig, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): S2tVtsiConfig;
	static deserializeBinaryFromReader(message: S2tVtsiConfig, reader: jspb.BinaryReader): S2tVtsiConfig;
}

export namespace S2tVtsiConfig {
	export type AsObject = {
		s2tBaseConfig?: BaseServiceConfig.AsObject;
		s2tTranscribeRequestConfig?: ondewo_s2t_speech_to_text_pb.TranscribeRequestConfig.AsObject;
	};
}

export class AsteriskConfig extends jspb.Message {
	hasAsteriskBaseConfig(): boolean;
	clearAsteriskBaseConfig(): void;
	getAsteriskBaseConfig(): BaseServiceConfig | undefined;
	setAsteriskBaseConfig(value?: BaseServiceConfig): AsteriskConfig;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): AsteriskConfig.AsObject;
	static toObject(includeInstance: boolean, msg: AsteriskConfig): AsteriskConfig.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: AsteriskConfig, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): AsteriskConfig;
	static deserializeBinaryFromReader(message: AsteriskConfig, reader: jspb.BinaryReader): AsteriskConfig;
}

export namespace AsteriskConfig {
	export type AsObject = {
		asteriskBaseConfig?: BaseServiceConfig.AsObject;
	};
}

export class CommonServicesConfig extends jspb.Message {
	hasS2tVtsiConfig(): boolean;
	clearS2tVtsiConfig(): void;
	getS2tVtsiConfig(): S2tVtsiConfig | undefined;
	setS2tVtsiConfig(value?: S2tVtsiConfig): CommonServicesConfig;

	hasNluVtsiConfig(): boolean;
	clearNluVtsiConfig(): void;
	getNluVtsiConfig(): NluVtsiConfig | undefined;
	setNluVtsiConfig(value?: NluVtsiConfig): CommonServicesConfig;

	hasT2sVtsiConfig(): boolean;
	clearT2sVtsiConfig(): void;
	getT2sVtsiConfig(): T2sVtsiConfig | undefined;
	setT2sVtsiConfig(value?: T2sVtsiConfig): CommonServicesConfig;

	hasCsiVtsiConfig(): boolean;
	clearCsiVtsiConfig(): void;
	getCsiVtsiConfig(): CsiVtsiConfig | undefined;
	setCsiVtsiConfig(value?: CsiVtsiConfig): CommonServicesConfig;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CommonServicesConfig.AsObject;
	static toObject(includeInstance: boolean, msg: CommonServicesConfig): CommonServicesConfig.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: CommonServicesConfig, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CommonServicesConfig;
	static deserializeBinaryFromReader(message: CommonServicesConfig, reader: jspb.BinaryReader): CommonServicesConfig;
}

export namespace CommonServicesConfig {
	export type AsObject = {
		s2tVtsiConfig?: S2tVtsiConfig.AsObject;
		nluVtsiConfig?: NluVtsiConfig.AsObject;
		t2sVtsiConfig?: T2sVtsiConfig.AsObject;
		csiVtsiConfig?: CsiVtsiConfig.AsObject;
	};
}

export class SipBaseConfig extends jspb.Message {
	getSipSimVersion(): string;
	setSipSimVersion(value: string): SipBaseConfig;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): SipBaseConfig.AsObject;
	static toObject(includeInstance: boolean, msg: SipBaseConfig): SipBaseConfig.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: SipBaseConfig, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): SipBaseConfig;
	static deserializeBinaryFromReader(message: SipBaseConfig, reader: jspb.BinaryReader): SipBaseConfig;
}

export namespace SipBaseConfig {
	export type AsObject = {
		sipSimVersion: string;
	};
}

export class SipCallerConfig extends jspb.Message {
	hasSipBaseConfig(): boolean;
	clearSipBaseConfig(): void;
	getSipBaseConfig(): SipBaseConfig | undefined;
	setSipBaseConfig(value?: SipBaseConfig): SipCallerConfig;
	getCalleeId(): string;
	setCalleeId(value: string): SipCallerConfig;

	getSipHeadersMap(): jspb.Map<string, string>;
	clearSipHeadersMap(): void;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): SipCallerConfig.AsObject;
	static toObject(includeInstance: boolean, msg: SipCallerConfig): SipCallerConfig.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: SipCallerConfig, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): SipCallerConfig;
	static deserializeBinaryFromReader(message: SipCallerConfig, reader: jspb.BinaryReader): SipCallerConfig;
}

export namespace SipCallerConfig {
	export type AsObject = {
		sipBaseConfig?: SipBaseConfig.AsObject;
		calleeId: string;

		sipHeadersMap: Array<[string, string]>;
	};
}

export class CsiVtsiConfig extends jspb.Message {
	hasS2tVtsiCallbacks(): boolean;
	clearS2tVtsiCallbacks(): void;
	getS2tVtsiCallbacks(): S2tVtsiCallbacks | undefined;
	setS2tVtsiCallbacks(value?: S2tVtsiCallbacks): CsiVtsiConfig;

	hasNluVtsiCallbacks(): boolean;
	clearNluVtsiCallbacks(): void;
	getNluVtsiCallbacks(): NluVtsiCallbacks | undefined;
	setNluVtsiCallbacks(value?: NluVtsiCallbacks): CsiVtsiConfig;

	hasT2sVtsiCallbacks(): boolean;
	clearT2sVtsiCallbacks(): void;
	getT2sVtsiCallbacks(): T2sVtsiCallbacks | undefined;
	setT2sVtsiCallbacks(value?: T2sVtsiCallbacks): CsiVtsiConfig;

	hasAudioObjectStoreConfig(): boolean;
	clearAudioObjectStoreConfig(): void;
	getAudioObjectStoreConfig(): AudioObjectStorageConfig | undefined;
	setAudioObjectStoreConfig(value?: AudioObjectStorageConfig): CsiVtsiConfig;

	hasMessageBrokerConfig(): boolean;
	clearMessageBrokerConfig(): void;
	getMessageBrokerConfig(): MessageBrokerConfig | undefined;
	setMessageBrokerConfig(value?: MessageBrokerConfig): CsiVtsiConfig;
	getActivateControlMessages(): boolean;
	setActivateControlMessages(value: boolean): CsiVtsiConfig;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CsiVtsiConfig.AsObject;
	static toObject(includeInstance: boolean, msg: CsiVtsiConfig): CsiVtsiConfig.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: CsiVtsiConfig, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CsiVtsiConfig;
	static deserializeBinaryFromReader(message: CsiVtsiConfig, reader: jspb.BinaryReader): CsiVtsiConfig;
}

export namespace CsiVtsiConfig {
	export type AsObject = {
		s2tVtsiCallbacks?: S2tVtsiCallbacks.AsObject;
		nluVtsiCallbacks?: NluVtsiCallbacks.AsObject;
		t2sVtsiCallbacks?: T2sVtsiCallbacks.AsObject;
		audioObjectStoreConfig?: AudioObjectStorageConfig.AsObject;
		messageBrokerConfig?: MessageBrokerConfig.AsObject;
		activateControlMessages: boolean;
	};
}

export class AudioObjectStorageConfig extends jspb.Message {
	getActivateAudioObjectStorage(): boolean;
	setActivateAudioObjectStorage(value: boolean): AudioObjectStorageConfig;

	hasAudioObjectStorageServicesActivationConfig(): boolean;
	clearAudioObjectStorageServicesActivationConfig(): void;
	getAudioObjectStorageServicesActivationConfig(): AudioObjectStorageServicesActivationConfig | undefined;
	setAudioObjectStorageServicesActivationConfig(
		value?: AudioObjectStorageServicesActivationConfig
	): AudioObjectStorageConfig;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): AudioObjectStorageConfig.AsObject;
	static toObject(includeInstance: boolean, msg: AudioObjectStorageConfig): AudioObjectStorageConfig.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: AudioObjectStorageConfig, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): AudioObjectStorageConfig;
	static deserializeBinaryFromReader(
		message: AudioObjectStorageConfig,
		reader: jspb.BinaryReader
	): AudioObjectStorageConfig;
}

export namespace AudioObjectStorageConfig {
	export type AsObject = {
		activateAudioObjectStorage: boolean;
		audioObjectStorageServicesActivationConfig?: AudioObjectStorageServicesActivationConfig.AsObject;
	};
}

export class AudioObjectStorageServicesActivationConfig extends jspb.Message {
	getActivateS2t(): boolean;
	setActivateS2t(value: boolean): AudioObjectStorageServicesActivationConfig;
	getActivateT2s(): boolean;
	setActivateT2s(value: boolean): AudioObjectStorageServicesActivationConfig;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): AudioObjectStorageServicesActivationConfig.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: AudioObjectStorageServicesActivationConfig
	): AudioObjectStorageServicesActivationConfig.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: AudioObjectStorageServicesActivationConfig, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): AudioObjectStorageServicesActivationConfig;
	static deserializeBinaryFromReader(
		message: AudioObjectStorageServicesActivationConfig,
		reader: jspb.BinaryReader
	): AudioObjectStorageServicesActivationConfig;
}

export namespace AudioObjectStorageServicesActivationConfig {
	export type AsObject = {
		activateS2t: boolean;
		activateT2s: boolean;
	};
}

export class MessageBrokerConfig extends jspb.Message {
	getActivateMessageBroker(): boolean;
	setActivateMessageBroker(value: boolean): MessageBrokerConfig;

	hasMessageBrokerServicesActivationConfig(): boolean;
	clearMessageBrokerServicesActivationConfig(): void;
	getMessageBrokerServicesActivationConfig(): MessageBrokerServicesActivationConfig | undefined;
	setMessageBrokerServicesActivationConfig(value?: MessageBrokerServicesActivationConfig): MessageBrokerConfig;

	hasRabbitMqConfig(): boolean;
	clearRabbitMqConfig(): void;
	getRabbitMqConfig(): RabbitMqConfig | undefined;
	setRabbitMqConfig(value?: RabbitMqConfig): MessageBrokerConfig;

	getMessageBrokerConfigCase(): MessageBrokerConfig.MessageBrokerConfigCase;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): MessageBrokerConfig.AsObject;
	static toObject(includeInstance: boolean, msg: MessageBrokerConfig): MessageBrokerConfig.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: MessageBrokerConfig, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): MessageBrokerConfig;
	static deserializeBinaryFromReader(message: MessageBrokerConfig, reader: jspb.BinaryReader): MessageBrokerConfig;
}

export namespace MessageBrokerConfig {
	export type AsObject = {
		activateMessageBroker: boolean;
		messageBrokerServicesActivationConfig?: MessageBrokerServicesActivationConfig.AsObject;
		rabbitMqConfig?: RabbitMqConfig.AsObject;
	};

	export enum MessageBrokerConfigCase {
		MESSAGE_BROKER_CONFIG_NOT_SET = 0,
		RABBIT_MQ_CONFIG = 3
	}
}

export class MessageBrokerServicesActivationConfig extends jspb.Message {
	getActivateS2t(): boolean;
	setActivateS2t(value: boolean): MessageBrokerServicesActivationConfig;
	getActivateNlu(): boolean;
	setActivateNlu(value: boolean): MessageBrokerServicesActivationConfig;
	getActivateT2s(): boolean;
	setActivateT2s(value: boolean): MessageBrokerServicesActivationConfig;
	getActivateSip(): boolean;
	setActivateSip(value: boolean): MessageBrokerServicesActivationConfig;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): MessageBrokerServicesActivationConfig.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: MessageBrokerServicesActivationConfig
	): MessageBrokerServicesActivationConfig.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: MessageBrokerServicesActivationConfig, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): MessageBrokerServicesActivationConfig;
	static deserializeBinaryFromReader(
		message: MessageBrokerServicesActivationConfig,
		reader: jspb.BinaryReader
	): MessageBrokerServicesActivationConfig;
}

export namespace MessageBrokerServicesActivationConfig {
	export type AsObject = {
		activateS2t: boolean;
		activateNlu: boolean;
		activateT2s: boolean;
		activateSip: boolean;
	};
}

export class RabbitMqConfig extends jspb.Message {
	getHost(): string;
	setHost(value: string): RabbitMqConfig;
	getPort(): number;
	setPort(value: number): RabbitMqConfig;
	getPort2(): number;
	setPort2(value: number): RabbitMqConfig;
	getUser(): string;
	setUser(value: string): RabbitMqConfig;
	getPassword(): string;
	setPassword(value: string): RabbitMqConfig;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): RabbitMqConfig.AsObject;
	static toObject(includeInstance: boolean, msg: RabbitMqConfig): RabbitMqConfig.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: RabbitMqConfig, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): RabbitMqConfig;
	static deserializeBinaryFromReader(message: RabbitMqConfig, reader: jspb.BinaryReader): RabbitMqConfig;
}

export namespace RabbitMqConfig {
	export type AsObject = {
		host: string;
		port: number;
		port2: number;
		user: string;
		password: string;
	};
}

export class S2tVtsiCallbacks extends jspb.Message {
	clearPreS2tCallbacksList(): void;
	getPreS2tCallbacksList(): Array<string>;
	setPreS2tCallbacksList(value: Array<string>): S2tVtsiCallbacks;
	addPreS2tCallbacks(value: string, index?: number): string;
	clearPostS2tCallbacksList(): void;
	getPostS2tCallbacksList(): Array<string>;
	setPostS2tCallbacksList(value: Array<string>): S2tVtsiCallbacks;
	addPostS2tCallbacks(value: string, index?: number): string;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): S2tVtsiCallbacks.AsObject;
	static toObject(includeInstance: boolean, msg: S2tVtsiCallbacks): S2tVtsiCallbacks.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: S2tVtsiCallbacks, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): S2tVtsiCallbacks;
	static deserializeBinaryFromReader(message: S2tVtsiCallbacks, reader: jspb.BinaryReader): S2tVtsiCallbacks;
}

export namespace S2tVtsiCallbacks {
	export type AsObject = {
		preS2tCallbacksList: Array<string>;
		postS2tCallbacksList: Array<string>;
	};
}

export class NluVtsiCallbacks extends jspb.Message {
	clearPreNluCallbacksList(): void;
	getPreNluCallbacksList(): Array<string>;
	setPreNluCallbacksList(value: Array<string>): NluVtsiCallbacks;
	addPreNluCallbacks(value: string, index?: number): string;
	clearPostNluCallbacksList(): void;
	getPostNluCallbacksList(): Array<string>;
	setPostNluCallbacksList(value: Array<string>): NluVtsiCallbacks;
	addPostNluCallbacks(value: string, index?: number): string;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): NluVtsiCallbacks.AsObject;
	static toObject(includeInstance: boolean, msg: NluVtsiCallbacks): NluVtsiCallbacks.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: NluVtsiCallbacks, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): NluVtsiCallbacks;
	static deserializeBinaryFromReader(message: NluVtsiCallbacks, reader: jspb.BinaryReader): NluVtsiCallbacks;
}

export namespace NluVtsiCallbacks {
	export type AsObject = {
		preNluCallbacksList: Array<string>;
		postNluCallbacksList: Array<string>;
	};
}

export class T2sVtsiCallbacks extends jspb.Message {
	clearPreT2sCallbacksList(): void;
	getPreT2sCallbacksList(): Array<string>;
	setPreT2sCallbacksList(value: Array<string>): T2sVtsiCallbacks;
	addPreT2sCallbacks(value: string, index?: number): string;
	clearPostT2sCallbacksList(): void;
	getPostT2sCallbacksList(): Array<string>;
	setPostT2sCallbacksList(value: Array<string>): T2sVtsiCallbacks;
	addPostT2sCallbacks(value: string, index?: number): string;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): T2sVtsiCallbacks.AsObject;
	static toObject(includeInstance: boolean, msg: T2sVtsiCallbacks): T2sVtsiCallbacks.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: T2sVtsiCallbacks, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): T2sVtsiCallbacks;
	static deserializeBinaryFromReader(message: T2sVtsiCallbacks, reader: jspb.BinaryReader): T2sVtsiCallbacks;
}

export namespace T2sVtsiCallbacks {
	export type AsObject = {
		preT2sCallbacksList: Array<string>;
		postT2sCallbacksList: Array<string>;
	};
}

export class Listener extends jspb.Message {
	getName(): string;
	setName(value: string): Listener;
	getCallName(): string;
	setCallName(value: string): Listener;

	hasSipBaseConfig(): boolean;
	clearSipBaseConfig(): void;
	getSipBaseConfig(): SipBaseConfig | undefined;
	setSipBaseConfig(value?: SipBaseConfig): Listener;

	hasCommonServicesConfig(): boolean;
	clearCommonServicesConfig(): void;
	getCommonServicesConfig(): CommonServicesConfig | undefined;
	setCommonServicesConfig(value?: CommonServicesConfig): Listener;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Listener.AsObject;
	static toObject(includeInstance: boolean, msg: Listener): Listener.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: Listener, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Listener;
	static deserializeBinaryFromReader(message: Listener, reader: jspb.BinaryReader): Listener;
}

export namespace Listener {
	export type AsObject = {
		name: string;
		callName: string;
		sipBaseConfig?: SipBaseConfig.AsObject;
		commonServicesConfig?: CommonServicesConfig.AsObject;
	};
}

export class Caller extends jspb.Message {
	getName(): string;
	setName(value: string): Caller;
	getCallName(): string;
	setCallName(value: string): Caller;

	hasSipCallerConfig(): boolean;
	clearSipCallerConfig(): void;
	getSipCallerConfig(): SipCallerConfig | undefined;
	setSipCallerConfig(value?: SipCallerConfig): Caller;

	hasCommonServicesConfig(): boolean;
	clearCommonServicesConfig(): void;
	getCommonServicesConfig(): CommonServicesConfig | undefined;
	setCommonServicesConfig(value?: CommonServicesConfig): Caller;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Caller.AsObject;
	static toObject(includeInstance: boolean, msg: Caller): Caller.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: Caller, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Caller;
	static deserializeBinaryFromReader(message: Caller, reader: jspb.BinaryReader): Caller;
}

export namespace Caller {
	export type AsObject = {
		name: string;
		callName: string;
		sipCallerConfig?: SipCallerConfig.AsObject;
		commonServicesConfig?: CommonServicesConfig.AsObject;
	};
}

export class StartListenerRequest extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): StartListenerRequest;

	hasSipBaseConfig(): boolean;
	clearSipBaseConfig(): void;
	getSipBaseConfig(): SipBaseConfig | undefined;
	setSipBaseConfig(value?: SipBaseConfig): StartListenerRequest;

	hasCommonServicesConfig(): boolean;
	clearCommonServicesConfig(): void;
	getCommonServicesConfig(): CommonServicesConfig | undefined;
	setCommonServicesConfig(value?: CommonServicesConfig): StartListenerRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StartListenerRequest.AsObject;
	static toObject(includeInstance: boolean, msg: StartListenerRequest): StartListenerRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StartListenerRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StartListenerRequest;
	static deserializeBinaryFromReader(message: StartListenerRequest, reader: jspb.BinaryReader): StartListenerRequest;
}

export namespace StartListenerRequest {
	export type AsObject = {
		vtsiProjectName: string;
		sipBaseConfig?: SipBaseConfig.AsObject;
		commonServicesConfig?: CommonServicesConfig.AsObject;
	};
}

export class StartListenerResponse extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): StartListenerResponse;

	hasListener(): boolean;
	clearListener(): void;
	getListener(): Listener | undefined;
	setListener(value?: Listener): StartListenerResponse;
	getErrorMessage(): string;
	setErrorMessage(value: string): StartListenerResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StartListenerResponse.AsObject;
	static toObject(includeInstance: boolean, msg: StartListenerResponse): StartListenerResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StartListenerResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StartListenerResponse;
	static deserializeBinaryFromReader(message: StartListenerResponse, reader: jspb.BinaryReader): StartListenerResponse;
}

export namespace StartListenerResponse {
	export type AsObject = {
		vtsiProjectName: string;
		listener?: Listener.AsObject;
		errorMessage: string;
	};
}

export class StartListenersRequest extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): StartListenersRequest;
	clearListenerRequestsList(): void;
	getListenerRequestsList(): Array<StartListenerRequest>;
	setListenerRequestsList(value: Array<StartListenerRequest>): StartListenersRequest;
	addListenerRequests(value?: StartListenerRequest, index?: number): StartListenerRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StartListenersRequest.AsObject;
	static toObject(includeInstance: boolean, msg: StartListenersRequest): StartListenersRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StartListenersRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StartListenersRequest;
	static deserializeBinaryFromReader(message: StartListenersRequest, reader: jspb.BinaryReader): StartListenersRequest;
}

export namespace StartListenersRequest {
	export type AsObject = {
		vtsiProjectName: string;
		listenerRequestsList: Array<StartListenerRequest.AsObject>;
	};
}

export class StartListenersResponse extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): StartListenersResponse;
	clearListenerResponsesList(): void;
	getListenerResponsesList(): Array<StartListenerResponse>;
	setListenerResponsesList(value: Array<StartListenerResponse>): StartListenersResponse;
	addListenerResponses(value?: StartListenerResponse, index?: number): StartListenerResponse;
	getErrorMessage(): string;
	setErrorMessage(value: string): StartListenersResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StartListenersResponse.AsObject;
	static toObject(includeInstance: boolean, msg: StartListenersResponse): StartListenersResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StartListenersResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StartListenersResponse;
	static deserializeBinaryFromReader(
		message: StartListenersResponse,
		reader: jspb.BinaryReader
	): StartListenersResponse;
}

export namespace StartListenersResponse {
	export type AsObject = {
		vtsiProjectName: string;
		listenerResponsesList: Array<StartListenerResponse.AsObject>;
		errorMessage: string;
	};
}

export class StartCallerRequest extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): StartCallerRequest;

	hasSipCallerConfig(): boolean;
	clearSipCallerConfig(): void;
	getSipCallerConfig(): SipCallerConfig | undefined;
	setSipCallerConfig(value?: SipCallerConfig): StartCallerRequest;

	hasCommonServicesConfig(): boolean;
	clearCommonServicesConfig(): void;
	getCommonServicesConfig(): CommonServicesConfig | undefined;
	setCommonServicesConfig(value?: CommonServicesConfig): StartCallerRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StartCallerRequest.AsObject;
	static toObject(includeInstance: boolean, msg: StartCallerRequest): StartCallerRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StartCallerRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StartCallerRequest;
	static deserializeBinaryFromReader(message: StartCallerRequest, reader: jspb.BinaryReader): StartCallerRequest;
}

export namespace StartCallerRequest {
	export type AsObject = {
		vtsiProjectName: string;
		sipCallerConfig?: SipCallerConfig.AsObject;
		commonServicesConfig?: CommonServicesConfig.AsObject;
	};
}

export class StartCallerResponse extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): StartCallerResponse;

	hasCaller(): boolean;
	clearCaller(): void;
	getCaller(): Caller | undefined;
	setCaller(value?: Caller): StartCallerResponse;
	getErrorMessage(): string;
	setErrorMessage(value: string): StartCallerResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StartCallerResponse.AsObject;
	static toObject(includeInstance: boolean, msg: StartCallerResponse): StartCallerResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StartCallerResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StartCallerResponse;
	static deserializeBinaryFromReader(message: StartCallerResponse, reader: jspb.BinaryReader): StartCallerResponse;
}

export namespace StartCallerResponse {
	export type AsObject = {
		vtsiProjectName: string;
		caller?: Caller.AsObject;
		errorMessage: string;
	};
}

export class StartCallersRequest extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): StartCallersRequest;
	clearCallerRequestsList(): void;
	getCallerRequestsList(): Array<StartCallerRequest>;
	setCallerRequestsList(value: Array<StartCallerRequest>): StartCallersRequest;
	addCallerRequests(value?: StartCallerRequest, index?: number): StartCallerRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StartCallersRequest.AsObject;
	static toObject(includeInstance: boolean, msg: StartCallersRequest): StartCallersRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StartCallersRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StartCallersRequest;
	static deserializeBinaryFromReader(message: StartCallersRequest, reader: jspb.BinaryReader): StartCallersRequest;
}

export namespace StartCallersRequest {
	export type AsObject = {
		vtsiProjectName: string;
		callerRequestsList: Array<StartCallerRequest.AsObject>;
	};
}

export class StartCallersResponse extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): StartCallersResponse;
	clearCallerResponsesList(): void;
	getCallerResponsesList(): Array<StartCallerResponse>;
	setCallerResponsesList(value: Array<StartCallerResponse>): StartCallersResponse;
	addCallerResponses(value?: StartCallerResponse, index?: number): StartCallerResponse;
	getErrorMessage(): string;
	setErrorMessage(value: string): StartCallersResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StartCallersResponse.AsObject;
	static toObject(includeInstance: boolean, msg: StartCallersResponse): StartCallersResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StartCallersResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StartCallersResponse;
	static deserializeBinaryFromReader(message: StartCallersResponse, reader: jspb.BinaryReader): StartCallersResponse;
}

export namespace StartCallersResponse {
	export type AsObject = {
		vtsiProjectName: string;
		callerResponsesList: Array<StartCallerResponse.AsObject>;
		errorMessage: string;
	};
}

export class ListCallersRequest extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): ListCallersRequest;

	hasPageToken(): boolean;
	clearPageToken(): void;
	getPageToken(): string | undefined;
	setPageToken(value: string): ListCallersRequest;

	hasCallView(): boolean;
	clearCallView(): void;
	getCallView(): CallView | undefined;
	setCallView(value: CallView): ListCallersRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListCallersRequest.AsObject;
	static toObject(includeInstance: boolean, msg: ListCallersRequest): ListCallersRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: ListCallersRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListCallersRequest;
	static deserializeBinaryFromReader(message: ListCallersRequest, reader: jspb.BinaryReader): ListCallersRequest;
}

export namespace ListCallersRequest {
	export type AsObject = {
		vtsiProjectName: string;
		pageToken?: string;
		callView?: CallView;
	};
}

export class ListCallersResponse extends jspb.Message {
	clearCallersList(): void;
	getCallersList(): Array<Caller>;
	setCallersList(value: Array<Caller>): ListCallersResponse;
	addCallers(value?: Caller, index?: number): Caller;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListCallersResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListCallersResponse): ListCallersResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: ListCallersResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListCallersResponse;
	static deserializeBinaryFromReader(message: ListCallersResponse, reader: jspb.BinaryReader): ListCallersResponse;
}

export namespace ListCallersResponse {
	export type AsObject = {
		callersList: Array<Caller.AsObject>;
	};
}

export class GetCallerRequest extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): GetCallerRequest;
	getName(): string;
	setName(value: string): GetCallerRequest;

	hasCallView(): boolean;
	clearCallView(): void;
	getCallView(): CallView | undefined;
	setCallView(value: CallView): GetCallerRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): GetCallerRequest.AsObject;
	static toObject(includeInstance: boolean, msg: GetCallerRequest): GetCallerRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: GetCallerRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): GetCallerRequest;
	static deserializeBinaryFromReader(message: GetCallerRequest, reader: jspb.BinaryReader): GetCallerRequest;
}

export namespace GetCallerRequest {
	export type AsObject = {
		vtsiProjectName: string;
		name: string;
		callView?: CallView;
	};
}

export class ListListenersRequest extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): ListListenersRequest;

	hasPageToken(): boolean;
	clearPageToken(): void;
	getPageToken(): string | undefined;
	setPageToken(value: string): ListListenersRequest;

	hasCallView(): boolean;
	clearCallView(): void;
	getCallView(): CallView | undefined;
	setCallView(value: CallView): ListListenersRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListListenersRequest.AsObject;
	static toObject(includeInstance: boolean, msg: ListListenersRequest): ListListenersRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: ListListenersRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListListenersRequest;
	static deserializeBinaryFromReader(message: ListListenersRequest, reader: jspb.BinaryReader): ListListenersRequest;
}

export namespace ListListenersRequest {
	export type AsObject = {
		vtsiProjectName: string;
		pageToken?: string;
		callView?: CallView;
	};
}

export class ListListenersResponse extends jspb.Message {
	clearListenersList(): void;
	getListenersList(): Array<Listener>;
	setListenersList(value: Array<Listener>): ListListenersResponse;
	addListeners(value?: Listener, index?: number): Listener;
	getNextPageToken(): string;
	setNextPageToken(value: string): ListListenersResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListListenersResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListListenersResponse): ListListenersResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: ListListenersResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListListenersResponse;
	static deserializeBinaryFromReader(message: ListListenersResponse, reader: jspb.BinaryReader): ListListenersResponse;
}

export namespace ListListenersResponse {
	export type AsObject = {
		listenersList: Array<Listener.AsObject>;
		nextPageToken: string;
	};
}

export class GetListenerRequest extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): GetListenerRequest;
	getName(): string;
	setName(value: string): GetListenerRequest;

	hasCallView(): boolean;
	clearCallView(): void;
	getCallView(): CallView | undefined;
	setCallView(value: CallView): GetListenerRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): GetListenerRequest.AsObject;
	static toObject(includeInstance: boolean, msg: GetListenerRequest): GetListenerRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: GetListenerRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): GetListenerRequest;
	static deserializeBinaryFromReader(message: GetListenerRequest, reader: jspb.BinaryReader): GetListenerRequest;
}

export namespace GetListenerRequest {
	export type AsObject = {
		vtsiProjectName: string;
		name: string;
		callView?: CallView;
	};
}

export class StopListenerRequest extends jspb.Message {
	getName(): string;
	setName(value: string): StopListenerRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StopListenerRequest.AsObject;
	static toObject(includeInstance: boolean, msg: StopListenerRequest): StopListenerRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StopListenerRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StopListenerRequest;
	static deserializeBinaryFromReader(message: StopListenerRequest, reader: jspb.BinaryReader): StopListenerRequest;
}

export namespace StopListenerRequest {
	export type AsObject = {
		name: string;
	};
}

export class StopListenerResponse extends jspb.Message {
	getName(): string;
	setName(value: string): StopListenerResponse;
	getErrorMessage(): string;
	setErrorMessage(value: string): StopListenerResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StopListenerResponse.AsObject;
	static toObject(includeInstance: boolean, msg: StopListenerResponse): StopListenerResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StopListenerResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StopListenerResponse;
	static deserializeBinaryFromReader(message: StopListenerResponse, reader: jspb.BinaryReader): StopListenerResponse;
}

export namespace StopListenerResponse {
	export type AsObject = {
		name: string;
		errorMessage: string;
	};
}

export class StopListenersRequest extends jspb.Message {
	clearNamesList(): void;
	getNamesList(): Array<string>;
	setNamesList(value: Array<string>): StopListenersRequest;
	addNames(value: string, index?: number): string;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StopListenersRequest.AsObject;
	static toObject(includeInstance: boolean, msg: StopListenersRequest): StopListenersRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StopListenersRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StopListenersRequest;
	static deserializeBinaryFromReader(message: StopListenersRequest, reader: jspb.BinaryReader): StopListenersRequest;
}

export namespace StopListenersRequest {
	export type AsObject = {
		namesList: Array<string>;
	};
}

export class StopListenersResponse extends jspb.Message {
	clearStopListenerResponsesList(): void;
	getStopListenerResponsesList(): Array<StopListenerResponse>;
	setStopListenerResponsesList(value: Array<StopListenerResponse>): StopListenersResponse;
	addStopListenerResponses(value?: StopListenerResponse, index?: number): StopListenerResponse;
	getErrorMessage(): string;
	setErrorMessage(value: string): StopListenersResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StopListenersResponse.AsObject;
	static toObject(includeInstance: boolean, msg: StopListenersResponse): StopListenersResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StopListenersResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StopListenersResponse;
	static deserializeBinaryFromReader(message: StopListenersResponse, reader: jspb.BinaryReader): StopListenersResponse;
}

export namespace StopListenersResponse {
	export type AsObject = {
		stopListenerResponsesList: Array<StopListenerResponse.AsObject>;
		errorMessage: string;
	};
}

export class StopCallerRequest extends jspb.Message {
	getName(): string;
	setName(value: string): StopCallerRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StopCallerRequest.AsObject;
	static toObject(includeInstance: boolean, msg: StopCallerRequest): StopCallerRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StopCallerRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StopCallerRequest;
	static deserializeBinaryFromReader(message: StopCallerRequest, reader: jspb.BinaryReader): StopCallerRequest;
}

export namespace StopCallerRequest {
	export type AsObject = {
		name: string;
	};
}

export class StopCallerResponse extends jspb.Message {
	getName(): string;
	setName(value: string): StopCallerResponse;
	getErrorMessage(): string;
	setErrorMessage(value: string): StopCallerResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StopCallerResponse.AsObject;
	static toObject(includeInstance: boolean, msg: StopCallerResponse): StopCallerResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StopCallerResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StopCallerResponse;
	static deserializeBinaryFromReader(message: StopCallerResponse, reader: jspb.BinaryReader): StopCallerResponse;
}

export namespace StopCallerResponse {
	export type AsObject = {
		name: string;
		errorMessage: string;
	};
}

export class StopCallersRequest extends jspb.Message {
	clearNamesList(): void;
	getNamesList(): Array<string>;
	setNamesList(value: Array<string>): StopCallersRequest;
	addNames(value: string, index?: number): string;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StopCallersRequest.AsObject;
	static toObject(includeInstance: boolean, msg: StopCallersRequest): StopCallersRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StopCallersRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StopCallersRequest;
	static deserializeBinaryFromReader(message: StopCallersRequest, reader: jspb.BinaryReader): StopCallersRequest;
}

export namespace StopCallersRequest {
	export type AsObject = {
		namesList: Array<string>;
	};
}

export class StopCallersResponse extends jspb.Message {
	clearStopCallerResponsesList(): void;
	getStopCallerResponsesList(): Array<StopCallerResponse>;
	setStopCallerResponsesList(value: Array<StopCallerResponse>): StopCallersResponse;
	addStopCallerResponses(value?: StopCallerResponse, index?: number): StopCallerResponse;
	getErrorMessage(): string;
	setErrorMessage(value: string): StopCallersResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StopCallersResponse.AsObject;
	static toObject(includeInstance: boolean, msg: StopCallersResponse): StopCallersResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StopCallersResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StopCallersResponse;
	static deserializeBinaryFromReader(message: StopCallersResponse, reader: jspb.BinaryReader): StopCallersResponse;
}

export namespace StopCallersResponse {
	export type AsObject = {
		stopCallerResponsesList: Array<StopCallerResponse.AsObject>;
		errorMessage: string;
	};
}

export class DeleteListenerRequest extends jspb.Message {
	getName(): string;
	setName(value: string): DeleteListenerRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): DeleteListenerRequest.AsObject;
	static toObject(includeInstance: boolean, msg: DeleteListenerRequest): DeleteListenerRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: DeleteListenerRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): DeleteListenerRequest;
	static deserializeBinaryFromReader(message: DeleteListenerRequest, reader: jspb.BinaryReader): DeleteListenerRequest;
}

export namespace DeleteListenerRequest {
	export type AsObject = {
		name: string;
	};
}

export class DeleteListenerResponse extends jspb.Message {
	getName(): string;
	setName(value: string): DeleteListenerResponse;
	getErrorMessage(): string;
	setErrorMessage(value: string): DeleteListenerResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): DeleteListenerResponse.AsObject;
	static toObject(includeInstance: boolean, msg: DeleteListenerResponse): DeleteListenerResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: DeleteListenerResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): DeleteListenerResponse;
	static deserializeBinaryFromReader(
		message: DeleteListenerResponse,
		reader: jspb.BinaryReader
	): DeleteListenerResponse;
}

export namespace DeleteListenerResponse {
	export type AsObject = {
		name: string;
		errorMessage: string;
	};
}

export class DeleteListenersRequest extends jspb.Message {
	clearNamesList(): void;
	getNamesList(): Array<string>;
	setNamesList(value: Array<string>): DeleteListenersRequest;
	addNames(value: string, index?: number): string;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): DeleteListenersRequest.AsObject;
	static toObject(includeInstance: boolean, msg: DeleteListenersRequest): DeleteListenersRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: DeleteListenersRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): DeleteListenersRequest;
	static deserializeBinaryFromReader(
		message: DeleteListenersRequest,
		reader: jspb.BinaryReader
	): DeleteListenersRequest;
}

export namespace DeleteListenersRequest {
	export type AsObject = {
		namesList: Array<string>;
	};
}

export class DeleteListenersResponse extends jspb.Message {
	clearDeleteListenerResponsesList(): void;
	getDeleteListenerResponsesList(): Array<DeleteListenerResponse>;
	setDeleteListenerResponsesList(value: Array<DeleteListenerResponse>): DeleteListenersResponse;
	addDeleteListenerResponses(value?: DeleteListenerResponse, index?: number): DeleteListenerResponse;
	getErrorMessage(): string;
	setErrorMessage(value: string): DeleteListenersResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): DeleteListenersResponse.AsObject;
	static toObject(includeInstance: boolean, msg: DeleteListenersResponse): DeleteListenersResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: DeleteListenersResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): DeleteListenersResponse;
	static deserializeBinaryFromReader(
		message: DeleteListenersResponse,
		reader: jspb.BinaryReader
	): DeleteListenersResponse;
}

export namespace DeleteListenersResponse {
	export type AsObject = {
		deleteListenerResponsesList: Array<DeleteListenerResponse.AsObject>;
		errorMessage: string;
	};
}

export class DeleteCallerRequest extends jspb.Message {
	getName(): string;
	setName(value: string): DeleteCallerRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): DeleteCallerRequest.AsObject;
	static toObject(includeInstance: boolean, msg: DeleteCallerRequest): DeleteCallerRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: DeleteCallerRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): DeleteCallerRequest;
	static deserializeBinaryFromReader(message: DeleteCallerRequest, reader: jspb.BinaryReader): DeleteCallerRequest;
}

export namespace DeleteCallerRequest {
	export type AsObject = {
		name: string;
	};
}

export class DeleteCallerResponse extends jspb.Message {
	getName(): string;
	setName(value: string): DeleteCallerResponse;
	getErrorMessage(): string;
	setErrorMessage(value: string): DeleteCallerResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): DeleteCallerResponse.AsObject;
	static toObject(includeInstance: boolean, msg: DeleteCallerResponse): DeleteCallerResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: DeleteCallerResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): DeleteCallerResponse;
	static deserializeBinaryFromReader(message: DeleteCallerResponse, reader: jspb.BinaryReader): DeleteCallerResponse;
}

export namespace DeleteCallerResponse {
	export type AsObject = {
		name: string;
		errorMessage: string;
	};
}

export class DeleteCallersRequest extends jspb.Message {
	clearNamesList(): void;
	getNamesList(): Array<string>;
	setNamesList(value: Array<string>): DeleteCallersRequest;
	addNames(value: string, index?: number): string;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): DeleteCallersRequest.AsObject;
	static toObject(includeInstance: boolean, msg: DeleteCallersRequest): DeleteCallersRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: DeleteCallersRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): DeleteCallersRequest;
	static deserializeBinaryFromReader(message: DeleteCallersRequest, reader: jspb.BinaryReader): DeleteCallersRequest;
}

export namespace DeleteCallersRequest {
	export type AsObject = {
		namesList: Array<string>;
	};
}

export class DeleteCallersResponse extends jspb.Message {
	clearDeleteCallerResponsesList(): void;
	getDeleteCallerResponsesList(): Array<DeleteCallerResponse>;
	setDeleteCallerResponsesList(value: Array<DeleteCallerResponse>): DeleteCallersResponse;
	addDeleteCallerResponses(value?: DeleteCallerResponse, index?: number): DeleteCallerResponse;
	getErrorMessage(): string;
	setErrorMessage(value: string): DeleteCallersResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): DeleteCallersResponse.AsObject;
	static toObject(includeInstance: boolean, msg: DeleteCallersResponse): DeleteCallersResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: DeleteCallersResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): DeleteCallersResponse;
	static deserializeBinaryFromReader(message: DeleteCallersResponse, reader: jspb.BinaryReader): DeleteCallersResponse;
}

export namespace DeleteCallersResponse {
	export type AsObject = {
		deleteCallerResponsesList: Array<DeleteCallerResponse.AsObject>;
		errorMessage: string;
	};
}

export class StartScheduledCallerRequest extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): StartScheduledCallerRequest;

	hasRequest(): boolean;
	clearRequest(): void;
	getRequest(): StartCallerRequest | undefined;
	setRequest(value?: StartCallerRequest): StartScheduledCallerRequest;

	hasScheduledTime(): boolean;
	clearScheduledTime(): void;
	getScheduledTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setScheduledTime(value?: google_protobuf_timestamp_pb.Timestamp): StartScheduledCallerRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StartScheduledCallerRequest.AsObject;
	static toObject(includeInstance: boolean, msg: StartScheduledCallerRequest): StartScheduledCallerRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StartScheduledCallerRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StartScheduledCallerRequest;
	static deserializeBinaryFromReader(
		message: StartScheduledCallerRequest,
		reader: jspb.BinaryReader
	): StartScheduledCallerRequest;
}

export namespace StartScheduledCallerRequest {
	export type AsObject = {
		vtsiProjectName: string;
		request?: StartCallerRequest.AsObject;
		scheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
	};
}

export class StartScheduledCallersRequest extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): StartScheduledCallersRequest;
	clearScheduledCallerRequestsList(): void;
	getScheduledCallerRequestsList(): Array<StartScheduledCallerRequest>;
	setScheduledCallerRequestsList(value: Array<StartScheduledCallerRequest>): StartScheduledCallersRequest;
	addScheduledCallerRequests(value?: StartScheduledCallerRequest, index?: number): StartScheduledCallerRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StartScheduledCallersRequest.AsObject;
	static toObject(includeInstance: boolean, msg: StartScheduledCallersRequest): StartScheduledCallersRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StartScheduledCallersRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StartScheduledCallersRequest;
	static deserializeBinaryFromReader(
		message: StartScheduledCallersRequest,
		reader: jspb.BinaryReader
	): StartScheduledCallersRequest;
}

export namespace StartScheduledCallersRequest {
	export type AsObject = {
		vtsiProjectName: string;
		scheduledCallerRequestsList: Array<StartScheduledCallerRequest.AsObject>;
	};
}

export class StartScheduledCallersResponse extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): StartScheduledCallersResponse;
	clearScheduledCallerResponsesList(): void;
	getScheduledCallerResponsesList(): Array<StartScheduledCallerResponse>;
	setScheduledCallerResponsesList(value: Array<StartScheduledCallerResponse>): StartScheduledCallersResponse;
	addScheduledCallerResponses(value?: StartScheduledCallerResponse, index?: number): StartScheduledCallerResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StartScheduledCallersResponse.AsObject;
	static toObject(includeInstance: boolean, msg: StartScheduledCallersResponse): StartScheduledCallersResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StartScheduledCallersResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StartScheduledCallersResponse;
	static deserializeBinaryFromReader(
		message: StartScheduledCallersResponse,
		reader: jspb.BinaryReader
	): StartScheduledCallersResponse;
}

export namespace StartScheduledCallersResponse {
	export type AsObject = {
		vtsiProjectName: string;
		scheduledCallerResponsesList: Array<StartScheduledCallerResponse.AsObject>;
	};
}

export class StartScheduledCallerResponse extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): StartScheduledCallerResponse;

	hasScheduledCaller(): boolean;
	clearScheduledCaller(): void;
	getScheduledCaller(): ScheduledCaller | undefined;
	setScheduledCaller(value?: ScheduledCaller): StartScheduledCallerResponse;
	getErrorMessage(): string;
	setErrorMessage(value: string): StartScheduledCallerResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StartScheduledCallerResponse.AsObject;
	static toObject(includeInstance: boolean, msg: StartScheduledCallerResponse): StartScheduledCallerResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StartScheduledCallerResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StartScheduledCallerResponse;
	static deserializeBinaryFromReader(
		message: StartScheduledCallerResponse,
		reader: jspb.BinaryReader
	): StartScheduledCallerResponse;
}

export namespace StartScheduledCallerResponse {
	export type AsObject = {
		vtsiProjectName: string;
		scheduledCaller?: ScheduledCaller.AsObject;
		errorMessage: string;
	};
}

export class ScheduledCaller extends jspb.Message {
	getName(): string;
	setName(value: string): ScheduledCaller;
	getCallName(): string;
	setCallName(value: string): ScheduledCaller;

	hasSipConfig(): boolean;
	clearSipConfig(): void;
	getSipConfig(): SipBaseConfig | undefined;
	setSipConfig(value?: SipBaseConfig): ScheduledCaller;

	hasCommonServicesConfig(): boolean;
	clearCommonServicesConfig(): void;
	getCommonServicesConfig(): CommonServicesConfig | undefined;
	setCommonServicesConfig(value?: CommonServicesConfig): ScheduledCaller;

	hasScheduledTime(): boolean;
	clearScheduledTime(): void;
	getScheduledTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setScheduledTime(value?: google_protobuf_timestamp_pb.Timestamp): ScheduledCaller;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ScheduledCaller.AsObject;
	static toObject(includeInstance: boolean, msg: ScheduledCaller): ScheduledCaller.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: ScheduledCaller, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ScheduledCaller;
	static deserializeBinaryFromReader(message: ScheduledCaller, reader: jspb.BinaryReader): ScheduledCaller;
}

export namespace ScheduledCaller {
	export type AsObject = {
		name: string;
		callName: string;
		sipConfig?: SipBaseConfig.AsObject;
		commonServicesConfig?: CommonServicesConfig.AsObject;
		scheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
	};
}

export class StopCallRequest extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): StopCallRequest;
	getCallName(): string;
	setCallName(value: string): StopCallRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StopCallRequest.AsObject;
	static toObject(includeInstance: boolean, msg: StopCallRequest): StopCallRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StopCallRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StopCallRequest;
	static deserializeBinaryFromReader(message: StopCallRequest, reader: jspb.BinaryReader): StopCallRequest;
}

export namespace StopCallRequest {
	export type AsObject = {
		vtsiProjectName: string;
		callName: string;
	};
}

export class StopCallResponse extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): StopCallResponse;
	getCallName(): string;
	setCallName(value: string): StopCallResponse;
	getErrorMessage(): string;
	setErrorMessage(value: string): StopCallResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StopCallResponse.AsObject;
	static toObject(includeInstance: boolean, msg: StopCallResponse): StopCallResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StopCallResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StopCallResponse;
	static deserializeBinaryFromReader(message: StopCallResponse, reader: jspb.BinaryReader): StopCallResponse;
}

export namespace StopCallResponse {
	export type AsObject = {
		vtsiProjectName: string;
		callName: string;
		errorMessage: string;
	};
}

export class StopCallsRequest extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): StopCallsRequest;
	clearCallNamesList(): void;
	getCallNamesList(): Array<string>;
	setCallNamesList(value: Array<string>): StopCallsRequest;
	addCallNames(value: string, index?: number): string;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StopCallsRequest.AsObject;
	static toObject(includeInstance: boolean, msg: StopCallsRequest): StopCallsRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StopCallsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StopCallsRequest;
	static deserializeBinaryFromReader(message: StopCallsRequest, reader: jspb.BinaryReader): StopCallsRequest;
}

export namespace StopCallsRequest {
	export type AsObject = {
		vtsiProjectName: string;
		callNamesList: Array<string>;
	};
}

export class StopCallsResponse extends jspb.Message {
	clearStopCallResponsesList(): void;
	getStopCallResponsesList(): Array<StopCallResponse>;
	setStopCallResponsesList(value: Array<StopCallResponse>): StopCallsResponse;
	addStopCallResponses(value?: StopCallResponse, index?: number): StopCallResponse;
	getErrorMessage(): string;
	setErrorMessage(value: string): StopCallsResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StopCallsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: StopCallsResponse): StopCallsResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StopCallsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StopCallsResponse;
	static deserializeBinaryFromReader(message: StopCallsResponse, reader: jspb.BinaryReader): StopCallsResponse;
}

export namespace StopCallsResponse {
	export type AsObject = {
		stopCallResponsesList: Array<StopCallResponse.AsObject>;
		errorMessage: string;
	};
}

export class StopAllCallsRequest extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): StopAllCallsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StopAllCallsRequest.AsObject;
	static toObject(includeInstance: boolean, msg: StopAllCallsRequest): StopAllCallsRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StopAllCallsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StopAllCallsRequest;
	static deserializeBinaryFromReader(message: StopAllCallsRequest, reader: jspb.BinaryReader): StopAllCallsRequest;
}

export namespace StopAllCallsRequest {
	export type AsObject = {
		vtsiProjectName: string;
	};
}

export class TransferCallRequest extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): TransferCallRequest;
	getCallName(): string;
	setCallName(value: string): TransferCallRequest;
	getTransferId(): string;
	setTransferId(value: string): TransferCallRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): TransferCallRequest.AsObject;
	static toObject(includeInstance: boolean, msg: TransferCallRequest): TransferCallRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: TransferCallRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): TransferCallRequest;
	static deserializeBinaryFromReader(message: TransferCallRequest, reader: jspb.BinaryReader): TransferCallRequest;
}

export namespace TransferCallRequest {
	export type AsObject = {
		vtsiProjectName: string;
		callName: string;
		transferId: string;
	};
}

export class TransferCallResponse extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): TransferCallResponse;
	getCallName(): string;
	setCallName(value: string): TransferCallResponse;
	getTransferId(): string;
	setTransferId(value: string): TransferCallResponse;
	getErrorMessage(): string;
	setErrorMessage(value: string): TransferCallResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): TransferCallResponse.AsObject;
	static toObject(includeInstance: boolean, msg: TransferCallResponse): TransferCallResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: TransferCallResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): TransferCallResponse;
	static deserializeBinaryFromReader(message: TransferCallResponse, reader: jspb.BinaryReader): TransferCallResponse;
}

export namespace TransferCallResponse {
	export type AsObject = {
		vtsiProjectName: string;
		callName: string;
		transferId: string;
		errorMessage: string;
	};
}

export class TransferCallsRequest extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): TransferCallsRequest;
	clearTransferCallRequestsList(): void;
	getTransferCallRequestsList(): Array<TransferCallRequest>;
	setTransferCallRequestsList(value: Array<TransferCallRequest>): TransferCallsRequest;
	addTransferCallRequests(value?: TransferCallRequest, index?: number): TransferCallRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): TransferCallsRequest.AsObject;
	static toObject(includeInstance: boolean, msg: TransferCallsRequest): TransferCallsRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: TransferCallsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): TransferCallsRequest;
	static deserializeBinaryFromReader(message: TransferCallsRequest, reader: jspb.BinaryReader): TransferCallsRequest;
}

export namespace TransferCallsRequest {
	export type AsObject = {
		vtsiProjectName: string;
		transferCallRequestsList: Array<TransferCallRequest.AsObject>;
	};
}

export class TransferCallsResponse extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): TransferCallsResponse;
	clearTransferCallResponsesList(): void;
	getTransferCallResponsesList(): Array<TransferCallResponse>;
	setTransferCallResponsesList(value: Array<TransferCallResponse>): TransferCallsResponse;
	addTransferCallResponses(value?: TransferCallResponse, index?: number): TransferCallResponse;
	getErrorMessage(): string;
	setErrorMessage(value: string): TransferCallsResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): TransferCallsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: TransferCallsResponse): TransferCallsResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: TransferCallsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): TransferCallsResponse;
	static deserializeBinaryFromReader(message: TransferCallsResponse, reader: jspb.BinaryReader): TransferCallsResponse;
}

export namespace TransferCallsResponse {
	export type AsObject = {
		vtsiProjectName: string;
		transferCallResponsesList: Array<TransferCallResponse.AsObject>;
		errorMessage: string;
	};
}

export class GetCallRequest extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): GetCallRequest;
	getCallName(): string;
	setCallName(value: string): GetCallRequest;

	hasCallView(): boolean;
	clearCallView(): void;
	getCallView(): CallView | undefined;
	setCallView(value: CallView): GetCallRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): GetCallRequest.AsObject;
	static toObject(includeInstance: boolean, msg: GetCallRequest): GetCallRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: GetCallRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): GetCallRequest;
	static deserializeBinaryFromReader(message: GetCallRequest, reader: jspb.BinaryReader): GetCallRequest;
}

export namespace GetCallRequest {
	export type AsObject = {
		vtsiProjectName: string;
		callName: string;
		callView?: CallView;
	};
}

export class Call extends jspb.Message {
	getName(): string;
	setName(value: string): Call;
	getSipAccount(): string;
	setSipAccount(value: string): Call;
	getContainerName(): string;
	setContainerName(value: string): Call;
	getCallType(): CallType;
	setCallType(value: CallType): Call;
	getPhoneNumber(): string;
	setPhoneNumber(value: string): Call;

	hasStartTime(): boolean;
	clearStartTime(): void;
	getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): Call;

	hasEndTime(): boolean;
	clearEndTime(): void;
	getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): Call;
	getSipStatusType(): ondewo_sip_sip_pb.SipStatus.StatusType;
	setSipStatusType(value: ondewo_sip_sip_pb.SipStatus.StatusType): Call;

	hasSipStatus(): boolean;
	clearSipStatus(): void;
	getSipStatus(): ondewo_sip_sip_pb.SipStatus | undefined;
	setSipStatus(value?: ondewo_sip_sip_pb.SipStatus): Call;

	hasSipStatusHistory(): boolean;
	clearSipStatusHistory(): void;
	getSipStatusHistory(): ondewo_sip_sip_pb.SipStatusHistoryResponse | undefined;
	setSipStatusHistory(value?: ondewo_sip_sip_pb.SipStatusHistoryResponse): Call;

	hasServicesStatuses(): boolean;
	clearServicesStatuses(): void;
	getServicesStatuses(): AllServicesStatuses | undefined;
	setServicesStatuses(value?: AllServicesStatuses): Call;
	getActive(): boolean;
	setActive(value: boolean): Call;
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): Call;

	hasCommonServicesConfig(): boolean;
	clearCommonServicesConfig(): void;
	getCommonServicesConfig(): CommonServicesConfig | undefined;
	setCommonServicesConfig(value?: CommonServicesConfig): Call;

	hasSipPort(): boolean;
	clearSipPort(): void;
	getSipPort(): number | undefined;
	setSipPort(value: number): Call;

	hasCsiPort(): boolean;
	clearCsiPort(): void;
	getCsiPort(): number | undefined;
	setCsiPort(value: number): Call;

	hasNluSessionName(): boolean;
	clearNluSessionName(): void;
	getNluSessionName(): string | undefined;
	setNluSessionName(value: string): Call;

	hasPlatforms(): boolean;
	clearPlatforms(): void;
	getPlatforms(): ondewo_nlu_intent_pb.Intent.Message.Platform | undefined;
	setPlatforms(value: ondewo_nlu_intent_pb.Intent.Message.Platform): Call;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Call.AsObject;
	static toObject(includeInstance: boolean, msg: Call): Call.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: Call, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Call;
	static deserializeBinaryFromReader(message: Call, reader: jspb.BinaryReader): Call;
}

export namespace Call {
	export type AsObject = {
		name: string;
		sipAccount: string;
		containerName: string;
		callType: CallType;
		phoneNumber: string;
		startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
		endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
		sipStatusType: ondewo_sip_sip_pb.SipStatus.StatusType;
		sipStatus?: ondewo_sip_sip_pb.SipStatus.AsObject;
		sipStatusHistory?: ondewo_sip_sip_pb.SipStatusHistoryResponse.AsObject;
		servicesStatuses?: AllServicesStatuses.AsObject;
		active: boolean;
		vtsiProjectName: string;
		commonServicesConfig?: CommonServicesConfig.AsObject;
		sipPort?: number;
		csiPort?: number;
		nluSessionName?: string;
		platforms?: ondewo_nlu_intent_pb.Intent.Message.Platform;
	};
}

export class CallFilter extends jspb.Message {
	clearCallNamesList(): void;
	getCallNamesList(): Array<string>;
	setCallNamesList(value: Array<string>): CallFilter;
	addCallNames(value: string, index?: number): string;
	clearNluSessionNamesList(): void;
	getNluSessionNamesList(): Array<string>;
	setNluSessionNamesList(value: Array<string>): CallFilter;
	addNluSessionNames(value: string, index?: number): string;
	clearSipAccountsList(): void;
	getSipAccountsList(): Array<string>;
	setSipAccountsList(value: Array<string>): CallFilter;
	addSipAccounts(value: string, index?: number): string;
	clearPhoneNumbersList(): void;
	getPhoneNumbersList(): Array<string>;
	setPhoneNumbersList(value: Array<string>): CallFilter;
	addPhoneNumbers(value: string, index?: number): string;
	clearContainerNamesList(): void;
	getContainerNamesList(): Array<string>;
	setContainerNamesList(value: Array<string>): CallFilter;
	addContainerNames(value: string, index?: number): string;
	clearSipPortsList(): void;
	getSipPortsList(): Array<string>;
	setSipPortsList(value: Array<string>): CallFilter;
	addSipPorts(value: string, index?: number): string;
	clearCsiPortsList(): void;
	getCsiPortsList(): Array<string>;
	setCsiPortsList(value: Array<string>): CallFilter;
	addCsiPorts(value: string, index?: number): string;
	clearCallTypesList(): void;
	getCallTypesList(): Array<CallType>;
	setCallTypesList(value: Array<CallType>): CallFilter;
	addCallTypes(value: CallType, index?: number): CallType;
	clearSipStatusTypesList(): void;
	getSipStatusTypesList(): Array<ondewo_sip_sip_pb.SipStatus.StatusType>;
	setSipStatusTypesList(value: Array<ondewo_sip_sip_pb.SipStatus.StatusType>): CallFilter;
	addSipStatusTypes(
		value: ondewo_sip_sip_pb.SipStatus.StatusType,
		index?: number
	): ondewo_sip_sip_pb.SipStatus.StatusType;

	hasCallStatus(): boolean;
	clearCallStatus(): void;
	getCallStatus(): CallStatus | undefined;
	setCallStatus(value: CallStatus): CallFilter;

	hasStartTime(): boolean;
	clearStartTime(): void;
	getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): CallFilter;

	hasEndTime(): boolean;
	clearEndTime(): void;
	getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): CallFilter;

	hasDurationInSMin(): boolean;
	clearDurationInSMin(): void;
	getDurationInSMin(): number | undefined;
	setDurationInSMin(value: number): CallFilter;

	hasDurationInSMax(): boolean;
	clearDurationInSMax(): void;
	getDurationInSMax(): number | undefined;
	setDurationInSMax(value: number): CallFilter;
	clearPlatformsList(): void;
	getPlatformsList(): Array<ondewo_nlu_intent_pb.Intent.Message.Platform>;
	setPlatformsList(value: Array<ondewo_nlu_intent_pb.Intent.Message.Platform>): CallFilter;
	addPlatforms(
		value: ondewo_nlu_intent_pb.Intent.Message.Platform,
		index?: number
	): ondewo_nlu_intent_pb.Intent.Message.Platform;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CallFilter.AsObject;
	static toObject(includeInstance: boolean, msg: CallFilter): CallFilter.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: CallFilter, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CallFilter;
	static deserializeBinaryFromReader(message: CallFilter, reader: jspb.BinaryReader): CallFilter;
}

export namespace CallFilter {
	export type AsObject = {
		callNamesList: Array<string>;
		nluSessionNamesList: Array<string>;
		sipAccountsList: Array<string>;
		phoneNumbersList: Array<string>;
		containerNamesList: Array<string>;
		sipPortsList: Array<string>;
		csiPortsList: Array<string>;
		callTypesList: Array<CallType>;
		sipStatusTypesList: Array<ondewo_sip_sip_pb.SipStatus.StatusType>;
		callStatus?: CallStatus;
		startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
		endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
		durationInSMin?: number;
		durationInSMax?: number;
		platformsList: Array<ondewo_nlu_intent_pb.Intent.Message.Platform>;
	};
}

export class ListCallsRequest extends jspb.Message {
	getVtsiProjectName(): string;
	setVtsiProjectName(value: string): ListCallsRequest;

	hasCallView(): boolean;
	clearCallView(): void;
	getCallView(): CallView | undefined;
	setCallView(value: CallView): ListCallsRequest;

	hasCallFilter(): boolean;
	clearCallFilter(): void;
	getCallFilter(): CallFilter | undefined;
	setCallFilter(value?: CallFilter): ListCallsRequest;

	hasPageToken(): boolean;
	clearPageToken(): void;
	getPageToken(): string | undefined;
	setPageToken(value: string): ListCallsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListCallsRequest.AsObject;
	static toObject(includeInstance: boolean, msg: ListCallsRequest): ListCallsRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: ListCallsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListCallsRequest;
	static deserializeBinaryFromReader(message: ListCallsRequest, reader: jspb.BinaryReader): ListCallsRequest;
}

export namespace ListCallsRequest {
	export type AsObject = {
		vtsiProjectName: string;
		callView?: CallView;
		callFilter?: CallFilter.AsObject;
		pageToken?: string;
	};
}

export class ListCallsResponse extends jspb.Message {
	clearCallsList(): void;
	getCallsList(): Array<Call>;
	setCallsList(value: Array<Call>): ListCallsResponse;
	addCalls(value?: Call, index?: number): Call;
	getNextPageToken(): string;
	setNextPageToken(value: string): ListCallsResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListCallsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListCallsResponse): ListCallsResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: ListCallsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListCallsResponse;
	static deserializeBinaryFromReader(message: ListCallsResponse, reader: jspb.BinaryReader): ListCallsResponse;
}

export namespace ListCallsResponse {
	export type AsObject = {
		callsList: Array<Call.AsObject>;
		nextPageToken: string;
	};
}

export class AllServicesStatuses extends jspb.Message {
	hasStatusSip(): boolean;
	clearStatusSip(): void;
	getStatusSip(): ServiceStatus | undefined;
	setStatusSip(value?: ServiceStatus): AllServicesStatuses;

	hasStatusAsterisk(): boolean;
	clearStatusAsterisk(): void;
	getStatusAsterisk(): ServiceStatus | undefined;
	setStatusAsterisk(value?: ServiceStatus): AllServicesStatuses;

	hasStatusNlu(): boolean;
	clearStatusNlu(): void;
	getStatusNlu(): ServiceStatus | undefined;
	setStatusNlu(value?: ServiceStatus): AllServicesStatuses;

	hasStatusStt(): boolean;
	clearStatusStt(): void;
	getStatusStt(): ServiceStatus | undefined;
	setStatusStt(value?: ServiceStatus): AllServicesStatuses;

	hasStatusTts(): boolean;
	clearStatusTts(): void;
	getStatusTts(): ServiceStatus | undefined;
	setStatusTts(value?: ServiceStatus): AllServicesStatuses;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): AllServicesStatuses.AsObject;
	static toObject(includeInstance: boolean, msg: AllServicesStatuses): AllServicesStatuses.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: AllServicesStatuses, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): AllServicesStatuses;
	static deserializeBinaryFromReader(message: AllServicesStatuses, reader: jspb.BinaryReader): AllServicesStatuses;
}

export namespace AllServicesStatuses {
	export type AsObject = {
		statusSip?: ServiceStatus.AsObject;
		statusAsterisk?: ServiceStatus.AsObject;
		statusNlu?: ServiceStatus.AsObject;
		statusStt?: ServiceStatus.AsObject;
		statusTts?: ServiceStatus.AsObject;
	};
}

export class ServiceStatus extends jspb.Message {
	getHealthy(): boolean;
	setHealthy(value: boolean): ServiceStatus;
	getErrorMessage(): string;
	setErrorMessage(value: string): ServiceStatus;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ServiceStatus.AsObject;
	static toObject(includeInstance: boolean, msg: ServiceStatus): ServiceStatus.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: ServiceStatus, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ServiceStatus;
	static deserializeBinaryFromReader(message: ServiceStatus, reader: jspb.BinaryReader): ServiceStatus;
}

export namespace ServiceStatus {
	export type AsObject = {
		healthy: boolean;
		errorMessage: string;
	};
}

export enum CallView {
	MINIMUM = 0,
	SHALLOW = 1,
	FULL = 2
}

export enum CallStatus {
	CALL_STATUS_UNSPECIFIED = 0,
	CALL_STATUS_ACTIVE = 1,
	CALL_STATUS_INACTIVE = 2
}

export enum CallType {
	BOTH = 0,
	LISTENER = 1,
	CALLER = 2,
	SCHEDULED_CALLER = 3
}
