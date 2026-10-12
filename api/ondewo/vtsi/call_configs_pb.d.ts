// package: ondewo.vtsi
// file: ondewo/vtsi/call_configs.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as ondewo_nlu_context_pb from "../../ondewo/nlu/context_pb";
import * as ondewo_nlu_intent_pb from "../../ondewo/nlu/intent_pb";
import * as ondewo_s2t_speech_to_text_pb from "../../ondewo/s2t/speech-to-text_pb";
import * as ondewo_t2s_text_to_speech_pb from "../../ondewo/t2s/text-to-speech_pb";

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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BaseServiceConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BaseServiceConfig;
    static deserializeBinaryFromReader(message: BaseServiceConfig, reader: jspb.BinaryReader): BaseServiceConfig;
}

export namespace BaseServiceConfig {
    export type AsObject = {
        host: string,
        port: number,
        grpcCert: string,
    }
}

export class Credentials extends jspb.Message { 
    getAccountName(): string;
    setAccountName(value: string): Credentials;
    getPassword(): string;
    setPassword(value: string): Credentials;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Credentials.AsObject;
    static toObject(includeInstance: boolean, msg: Credentials): Credentials.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Credentials, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Credentials;
    static deserializeBinaryFromReader(message: Credentials, reader: jspb.BinaryReader): Credentials;
}

export namespace Credentials {
    export type AsObject = {
        accountName: string,
        password: string,
    }
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NluVtsiConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NluVtsiConfig;
    static deserializeBinaryFromReader(message: NluVtsiConfig, reader: jspb.BinaryReader): NluVtsiConfig;
}

export namespace NluVtsiConfig {
    export type AsObject = {
        nluBaseConfig?: BaseServiceConfig.AsObject,
        credentials?: Credentials.AsObject,
        authToken: string,
        agentName: string,
        languageCode: string,
        initialIntent: string,
        contextsList: Array<ondewo_nlu_context_pb.Context.AsObject>,
        httpBasicAuthToken: string,
        platform?: ondewo_nlu_intent_pb.Intent.Message.Platform,
    }

    export enum AuthenticationCase {
        AUTHENTICATION_NOT_SET = 0,
        CREDENTIALS = 2,
        AUTH_TOKEN = 3,
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: T2sVtsiConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): T2sVtsiConfig;
    static deserializeBinaryFromReader(message: T2sVtsiConfig, reader: jspb.BinaryReader): T2sVtsiConfig;
}

export namespace T2sVtsiConfig {
    export type AsObject = {
        t2sBaseConfig?: BaseServiceConfig.AsObject,
        t2sRequestConfig?: ondewo_t2s_text_to_speech_pb.RequestConfig.AsObject,
    }
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: S2tVtsiConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): S2tVtsiConfig;
    static deserializeBinaryFromReader(message: S2tVtsiConfig, reader: jspb.BinaryReader): S2tVtsiConfig;
}

export namespace S2tVtsiConfig {
    export type AsObject = {
        s2tBaseConfig?: BaseServiceConfig.AsObject,
        s2tTranscribeRequestConfig?: ondewo_s2t_speech_to_text_pb.TranscribeRequestConfig.AsObject,
    }
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

    hasVoiceInteractionConfig(): boolean;
    clearVoiceInteractionConfig(): void;
    getVoiceInteractionConfig(): VoiceInteractionConfig | undefined;
    setVoiceInteractionConfig(value?: VoiceInteractionConfig): CommonServicesConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommonServicesConfig.AsObject;
    static toObject(includeInstance: boolean, msg: CommonServicesConfig): CommonServicesConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommonServicesConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommonServicesConfig;
    static deserializeBinaryFromReader(message: CommonServicesConfig, reader: jspb.BinaryReader): CommonServicesConfig;
}

export namespace CommonServicesConfig {
    export type AsObject = {
        s2tVtsiConfig?: S2tVtsiConfig.AsObject,
        nluVtsiConfig?: NluVtsiConfig.AsObject,
        t2sVtsiConfig?: T2sVtsiConfig.AsObject,
        csiVtsiConfig?: CsiVtsiConfig.AsObject,
        voiceInteractionConfig?: VoiceInteractionConfig.AsObject,
    }
}

export class VoiceInteractionConfig extends jspb.Message { 

    hasTurnDetectionConfig(): boolean;
    clearTurnDetectionConfig(): void;
    getTurnDetectionConfig(): TurnDetectionConfig | undefined;
    setTurnDetectionConfig(value?: TurnDetectionConfig): VoiceInteractionConfig;

    hasInterruptionHandlingConfig(): boolean;
    clearInterruptionHandlingConfig(): void;
    getInterruptionHandlingConfig(): InterruptionHandlingConfig | undefined;
    setInterruptionHandlingConfig(value?: InterruptionHandlingConfig): VoiceInteractionConfig;

    hasResponseTimingConfig(): boolean;
    clearResponseTimingConfig(): void;
    getResponseTimingConfig(): ResponseTimingConfig | undefined;
    setResponseTimingConfig(value?: ResponseTimingConfig): VoiceInteractionConfig;

    hasAnsweringMachineDetectionConfig(): boolean;
    clearAnsweringMachineDetectionConfig(): void;
    getAnsweringMachineDetectionConfig(): AnsweringMachineDetectionConfig | undefined;
    setAnsweringMachineDetectionConfig(value?: AnsweringMachineDetectionConfig): VoiceInteractionConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VoiceInteractionConfig.AsObject;
    static toObject(includeInstance: boolean, msg: VoiceInteractionConfig): VoiceInteractionConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VoiceInteractionConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VoiceInteractionConfig;
    static deserializeBinaryFromReader(message: VoiceInteractionConfig, reader: jspb.BinaryReader): VoiceInteractionConfig;
}

export namespace VoiceInteractionConfig {
    export type AsObject = {
        turnDetectionConfig?: TurnDetectionConfig.AsObject,
        interruptionHandlingConfig?: InterruptionHandlingConfig.AsObject,
        responseTimingConfig?: ResponseTimingConfig.AsObject,
        answeringMachineDetectionConfig?: AnsweringMachineDetectionConfig.AsObject,
    }
}

export class TurnDetectionConfig extends jspb.Message { 
    getMode(): TurnDetectionConfig.TurnDetectionMode;
    setMode(value: TurnDetectionConfig.TurnDetectionMode): TurnDetectionConfig;

    hasMinEndpointingDelaySeconds(): boolean;
    clearMinEndpointingDelaySeconds(): void;
    getMinEndpointingDelaySeconds(): number | undefined;
    setMinEndpointingDelaySeconds(value: number): TurnDetectionConfig;

    hasMaxEndpointingDelaySeconds(): boolean;
    clearMaxEndpointingDelaySeconds(): void;
    getMaxEndpointingDelaySeconds(): number | undefined;
    setMaxEndpointingDelaySeconds(value: number): TurnDetectionConfig;
    getTurnEagerness(): TurnDetectionConfig.TurnEagerness;
    setTurnEagerness(value: TurnDetectionConfig.TurnEagerness): TurnDetectionConfig;

    hasTurnDetectionSystemPrompt(): boolean;
    clearTurnDetectionSystemPrompt(): void;
    getTurnDetectionSystemPrompt(): string | undefined;
    setTurnDetectionSystemPrompt(value: string): TurnDetectionConfig;

    hasTurnDetectionUserPrompt(): boolean;
    clearTurnDetectionUserPrompt(): void;
    getTurnDetectionUserPrompt(): string | undefined;
    setTurnDetectionUserPrompt(value: string): TurnDetectionConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TurnDetectionConfig.AsObject;
    static toObject(includeInstance: boolean, msg: TurnDetectionConfig): TurnDetectionConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TurnDetectionConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TurnDetectionConfig;
    static deserializeBinaryFromReader(message: TurnDetectionConfig, reader: jspb.BinaryReader): TurnDetectionConfig;
}

export namespace TurnDetectionConfig {
    export type AsObject = {
        mode: TurnDetectionConfig.TurnDetectionMode,
        minEndpointingDelaySeconds?: number,
        maxEndpointingDelaySeconds?: number,
        turnEagerness: TurnDetectionConfig.TurnEagerness,
        turnDetectionSystemPrompt?: string,
        turnDetectionUserPrompt?: string,
    }

    export enum TurnDetectionMode {
    TURN_DETECTION_MODE_UNSPECIFIED = 0,
    VAD = 1,
    SEMANTIC_MODEL = 2,
    AUDIO_MODEL = 3,
    }

    export enum TurnEagerness {
    TURN_EAGERNESS_UNSPECIFIED = 0,
    PATIENT = 1,
    NORMAL = 2,
    EAGER = 3,
    }

}

export class InterruptionHandlingConfig extends jspb.Message { 

    hasEnabled(): boolean;
    clearEnabled(): void;
    getEnabled(): boolean | undefined;
    setEnabled(value: boolean): InterruptionHandlingConfig;

    hasMinInterruptionDurationSeconds(): boolean;
    clearMinInterruptionDurationSeconds(): void;
    getMinInterruptionDurationSeconds(): number | undefined;
    setMinInterruptionDurationSeconds(value: number): InterruptionHandlingConfig;

    hasMinInterruptionWords(): boolean;
    clearMinInterruptionWords(): void;
    getMinInterruptionWords(): number | undefined;
    setMinInterruptionWords(value: number): InterruptionHandlingConfig;

    hasFalseInterruptionTimeoutSeconds(): boolean;
    clearFalseInterruptionTimeoutSeconds(): void;
    getFalseInterruptionTimeoutSeconds(): number | undefined;
    setFalseInterruptionTimeoutSeconds(value: number): InterruptionHandlingConfig;

    hasResumeAfterFalseInterruption(): boolean;
    clearResumeAfterFalseInterruption(): void;
    getResumeAfterFalseInterruption(): boolean | undefined;
    setResumeAfterFalseInterruption(value: boolean): InterruptionHandlingConfig;

    hasBackoffSeconds(): boolean;
    clearBackoffSeconds(): void;
    getBackoffSeconds(): number | undefined;
    setBackoffSeconds(value: number): InterruptionHandlingConfig;

    hasFirstMessageProtectedSeconds(): boolean;
    clearFirstMessageProtectedSeconds(): void;
    getFirstMessageProtectedSeconds(): number | undefined;
    setFirstMessageProtectedSeconds(value: number): InterruptionHandlingConfig;

    hasTranscribeOnDisabledInterruptions(): boolean;
    clearTranscribeOnDisabledInterruptions(): void;
    getTranscribeOnDisabledInterruptions(): boolean | undefined;
    setTranscribeOnDisabledInterruptions(value: boolean): InterruptionHandlingConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InterruptionHandlingConfig.AsObject;
    static toObject(includeInstance: boolean, msg: InterruptionHandlingConfig): InterruptionHandlingConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InterruptionHandlingConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InterruptionHandlingConfig;
    static deserializeBinaryFromReader(message: InterruptionHandlingConfig, reader: jspb.BinaryReader): InterruptionHandlingConfig;
}

export namespace InterruptionHandlingConfig {
    export type AsObject = {
        enabled?: boolean,
        minInterruptionDurationSeconds?: number,
        minInterruptionWords?: number,
        falseInterruptionTimeoutSeconds?: number,
        resumeAfterFalseInterruption?: boolean,
        backoffSeconds?: number,
        firstMessageProtectedSeconds?: number,
        transcribeOnDisabledInterruptions?: boolean,
    }
}

export class ResponseTimingConfig extends jspb.Message { 

    hasTurnTimeoutSeconds(): boolean;
    clearTurnTimeoutSeconds(): void;
    getTurnTimeoutSeconds(): number | undefined;
    setTurnTimeoutSeconds(value: number): ResponseTimingConfig;

    hasSilenceEndCallTimeoutSeconds(): boolean;
    clearSilenceEndCallTimeoutSeconds(): void;
    getSilenceEndCallTimeoutSeconds(): number | undefined;
    setSilenceEndCallTimeoutSeconds(value: number): ResponseTimingConfig;

    hasSoftTimeoutConfig(): boolean;
    clearSoftTimeoutConfig(): void;
    getSoftTimeoutConfig(): SoftTimeoutConfig | undefined;
    setSoftTimeoutConfig(value?: SoftTimeoutConfig): ResponseTimingConfig;

    hasPreemptiveGenerationEnabled(): boolean;
    clearPreemptiveGenerationEnabled(): void;
    getPreemptiveGenerationEnabled(): boolean | undefined;
    setPreemptiveGenerationEnabled(value: boolean): ResponseTimingConfig;

    hasT2sChunkedStreamingEnabled(): boolean;
    clearT2sChunkedStreamingEnabled(): void;
    getT2sChunkedStreamingEnabled(): boolean | undefined;
    setT2sChunkedStreamingEnabled(value: boolean): ResponseTimingConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResponseTimingConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ResponseTimingConfig): ResponseTimingConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResponseTimingConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResponseTimingConfig;
    static deserializeBinaryFromReader(message: ResponseTimingConfig, reader: jspb.BinaryReader): ResponseTimingConfig;
}

export namespace ResponseTimingConfig {
    export type AsObject = {
        turnTimeoutSeconds?: number,
        silenceEndCallTimeoutSeconds?: number,
        softTimeoutConfig?: SoftTimeoutConfig.AsObject,
        preemptiveGenerationEnabled?: boolean,
        t2sChunkedStreamingEnabled?: boolean,
    }
}

export class SoftTimeoutConfig extends jspb.Message { 

    hasTimeoutSeconds(): boolean;
    clearTimeoutSeconds(): void;
    getTimeoutSeconds(): number | undefined;
    setTimeoutSeconds(value: number): SoftTimeoutConfig;
    clearMessagesList(): void;
    getMessagesList(): Array<string>;
    setMessagesList(value: Array<string>): SoftTimeoutConfig;
    addMessages(value: string, index?: number): string;

    hasMaxPerGeneration(): boolean;
    clearMaxPerGeneration(): void;
    getMaxPerGeneration(): number | undefined;
    setMaxPerGeneration(value: number): SoftTimeoutConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SoftTimeoutConfig.AsObject;
    static toObject(includeInstance: boolean, msg: SoftTimeoutConfig): SoftTimeoutConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SoftTimeoutConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SoftTimeoutConfig;
    static deserializeBinaryFromReader(message: SoftTimeoutConfig, reader: jspb.BinaryReader): SoftTimeoutConfig;
}

export namespace SoftTimeoutConfig {
    export type AsObject = {
        timeoutSeconds?: number,
        messagesList: Array<string>,
        maxPerGeneration?: number,
    }
}

export class AnsweringMachineDetectionConfig extends jspb.Message { 

    hasActive(): boolean;
    clearActive(): void;
    getActive(): boolean | undefined;
    setActive(value: boolean): AnsweringMachineDetectionConfig;

    hasAction(): boolean;
    clearAction(): void;
    getAction(): AnsweringMachineDetectionConfig.AmdAction | undefined;
    setAction(value: AnsweringMachineDetectionConfig.AmdAction): AnsweringMachineDetectionConfig;

    hasSensitivity(): boolean;
    clearSensitivity(): void;
    getSensitivity(): AnsweringMachineDetectionConfig.AmdSensitivity | undefined;
    setSensitivity(value: AnsweringMachineDetectionConfig.AmdSensitivity): AnsweringMachineDetectionConfig;

    hasMaxDecisionTimeMs(): boolean;
    clearMaxDecisionTimeMs(): void;
    getMaxDecisionTimeMs(): number | undefined;
    setMaxDecisionTimeMs(value: number): AnsweringMachineDetectionConfig;

    hasMaxMachineWaitMs(): boolean;
    clearMaxMachineWaitMs(): void;
    getMaxMachineWaitMs(): number | undefined;
    setMaxMachineWaitMs(value: number): AnsweringMachineDetectionConfig;

    hasBeepWaitAfterGreetingMs(): boolean;
    clearBeepWaitAfterGreetingMs(): void;
    getBeepWaitAfterGreetingMs(): number | undefined;
    setBeepWaitAfterGreetingMs(value: number): AnsweringMachineDetectionConfig;

    hasInitialSilenceMs(): boolean;
    clearInitialSilenceMs(): void;
    getInitialSilenceMs(): number | undefined;
    setInitialSilenceMs(value: number): AnsweringMachineDetectionConfig;

    hasMaxHumanGreetingMs(): boolean;
    clearMaxHumanGreetingMs(): void;
    getMaxHumanGreetingMs(): number | undefined;
    setMaxHumanGreetingMs(value: number): AnsweringMachineDetectionConfig;

    hasGreetingEndSilenceMs(): boolean;
    clearGreetingEndSilenceMs(): void;
    getGreetingEndSilenceMs(): number | undefined;
    setGreetingEndSilenceMs(value: number): AnsweringMachineDetectionConfig;

    hasBeepDetectionActive(): boolean;
    clearBeepDetectionActive(): void;
    getBeepDetectionActive(): boolean | undefined;
    setBeepDetectionActive(value: boolean): AnsweringMachineDetectionConfig;
    clearAdditionalMachinePhrasesList(): void;
    getAdditionalMachinePhrasesList(): Array<string>;
    setAdditionalMachinePhrasesList(value: Array<string>): AnsweringMachineDetectionConfig;
    addAdditionalMachinePhrases(value: string, index?: number): string;
    clearAdditionalHumanPhrasesList(): void;
    getAdditionalHumanPhrasesList(): Array<string>;
    setAdditionalHumanPhrasesList(value: Array<string>): AnsweringMachineDetectionConfig;
    addAdditionalHumanPhrases(value: string, index?: number): string;

    hasHangUpOnFax(): boolean;
    clearHangUpOnFax(): void;
    getHangUpOnFax(): boolean | undefined;
    setHangUpOnFax(value: boolean): AnsweringMachineDetectionConfig;

    hasHangUpOnNetworkAnnouncement(): boolean;
    clearHangUpOnNetworkAnnouncement(): void;
    getHangUpOnNetworkAnnouncement(): boolean | undefined;
    setHangUpOnNetworkAnnouncement(value: boolean): AnsweringMachineDetectionConfig;

    hasHangUpOnIvr(): boolean;
    clearHangUpOnIvr(): void;
    getHangUpOnIvr(): boolean | undefined;
    setHangUpOnIvr(value: boolean): AnsweringMachineDetectionConfig;

    hasHangUpOnCallScreening(): boolean;
    clearHangUpOnCallScreening(): void;
    getHangUpOnCallScreening(): boolean | undefined;
    setHangUpOnCallScreening(value: boolean): AnsweringMachineDetectionConfig;

    hasVoiceMessageIntent(): boolean;
    clearVoiceMessageIntent(): void;
    getVoiceMessageIntent(): string | undefined;
    setVoiceMessageIntent(value: string): AnsweringMachineDetectionConfig;

    hasVoiceMessageMaxBeepWaitMs(): boolean;
    clearVoiceMessageMaxBeepWaitMs(): void;
    getVoiceMessageMaxBeepWaitMs(): number | undefined;
    setVoiceMessageMaxBeepWaitMs(value: number): AnsweringMachineDetectionConfig;

    hasVoiceMessageTimeoutMs(): boolean;
    clearVoiceMessageTimeoutMs(): void;
    getVoiceMessageTimeoutMs(): number | undefined;
    setVoiceMessageTimeoutMs(value: number): AnsweringMachineDetectionConfig;

    hasKeywordDetectionActive(): boolean;
    clearKeywordDetectionActive(): void;
    getKeywordDetectionActive(): boolean | undefined;
    setKeywordDetectionActive(value: boolean): AnsweringMachineDetectionConfig;

    hasCadenceDetectionActive(): boolean;
    clearCadenceDetectionActive(): void;
    getCadenceDetectionActive(): boolean | undefined;
    setCadenceDetectionActive(value: boolean): AnsweringMachineDetectionConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnsweringMachineDetectionConfig.AsObject;
    static toObject(includeInstance: boolean, msg: AnsweringMachineDetectionConfig): AnsweringMachineDetectionConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnsweringMachineDetectionConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnsweringMachineDetectionConfig;
    static deserializeBinaryFromReader(message: AnsweringMachineDetectionConfig, reader: jspb.BinaryReader): AnsweringMachineDetectionConfig;
}

export namespace AnsweringMachineDetectionConfig {
    export type AsObject = {
        active?: boolean,
        action?: AnsweringMachineDetectionConfig.AmdAction,
        sensitivity?: AnsweringMachineDetectionConfig.AmdSensitivity,
        maxDecisionTimeMs?: number,
        maxMachineWaitMs?: number,
        beepWaitAfterGreetingMs?: number,
        initialSilenceMs?: number,
        maxHumanGreetingMs?: number,
        greetingEndSilenceMs?: number,
        beepDetectionActive?: boolean,
        additionalMachinePhrasesList: Array<string>,
        additionalHumanPhrasesList: Array<string>,
        hangUpOnFax?: boolean,
        hangUpOnNetworkAnnouncement?: boolean,
        hangUpOnIvr?: boolean,
        hangUpOnCallScreening?: boolean,
        voiceMessageIntent?: string,
        voiceMessageMaxBeepWaitMs?: number,
        voiceMessageTimeoutMs?: number,
        keywordDetectionActive?: boolean,
        cadenceDetectionActive?: boolean,
    }

    export enum AmdAction {
    AMD_ACTION_UNSPECIFIED = 0,
    HANG_UP = 1,
    DETECT_ONLY = 2,
    LEAVE_VOICE_MESSAGE = 3,
    }

    export enum AmdSensitivity {
    AMD_SENSITIVITY_UNSPECIFIED = 0,
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
    }

}

export class SipBaseConfig extends jspb.Message { 
    getSipSimVersion(): string;
    setSipSimVersion(value: string): SipBaseConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SipBaseConfig.AsObject;
    static toObject(includeInstance: boolean, msg: SipBaseConfig): SipBaseConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SipBaseConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SipBaseConfig;
    static deserializeBinaryFromReader(message: SipBaseConfig, reader: jspb.BinaryReader): SipBaseConfig;
}

export namespace SipBaseConfig {
    export type AsObject = {
        sipSimVersion: string,
    }
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SipCallerConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SipCallerConfig;
    static deserializeBinaryFromReader(message: SipCallerConfig, reader: jspb.BinaryReader): SipCallerConfig;
}

export namespace SipCallerConfig {
    export type AsObject = {
        sipBaseConfig?: SipBaseConfig.AsObject,
        calleeId: string,

        sipHeadersMap: Array<[string, string]>,
    }
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

    hasActivateControlMessages(): boolean;
    clearActivateControlMessages(): void;
    getActivateControlMessages(): boolean | undefined;
    setActivateControlMessages(value: boolean): CsiVtsiConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CsiVtsiConfig.AsObject;
    static toObject(includeInstance: boolean, msg: CsiVtsiConfig): CsiVtsiConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CsiVtsiConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CsiVtsiConfig;
    static deserializeBinaryFromReader(message: CsiVtsiConfig, reader: jspb.BinaryReader): CsiVtsiConfig;
}

export namespace CsiVtsiConfig {
    export type AsObject = {
        s2tVtsiCallbacks?: S2tVtsiCallbacks.AsObject,
        nluVtsiCallbacks?: NluVtsiCallbacks.AsObject,
        t2sVtsiCallbacks?: T2sVtsiCallbacks.AsObject,
        audioObjectStoreConfig?: AudioObjectStorageConfig.AsObject,
        messageBrokerConfig?: MessageBrokerConfig.AsObject,
        activateControlMessages?: boolean,
    }
}

export class AudioObjectStorageConfig extends jspb.Message { 

    hasActivateAudioObjectStorage(): boolean;
    clearActivateAudioObjectStorage(): void;
    getActivateAudioObjectStorage(): boolean | undefined;
    setActivateAudioObjectStorage(value: boolean): AudioObjectStorageConfig;

    hasAudioObjectStorageServicesActivationConfig(): boolean;
    clearAudioObjectStorageServicesActivationConfig(): void;
    getAudioObjectStorageServicesActivationConfig(): AudioObjectStorageServicesActivationConfig | undefined;
    setAudioObjectStorageServicesActivationConfig(value?: AudioObjectStorageServicesActivationConfig): AudioObjectStorageConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioObjectStorageConfig.AsObject;
    static toObject(includeInstance: boolean, msg: AudioObjectStorageConfig): AudioObjectStorageConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioObjectStorageConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioObjectStorageConfig;
    static deserializeBinaryFromReader(message: AudioObjectStorageConfig, reader: jspb.BinaryReader): AudioObjectStorageConfig;
}

export namespace AudioObjectStorageConfig {
    export type AsObject = {
        activateAudioObjectStorage?: boolean,
        audioObjectStorageServicesActivationConfig?: AudioObjectStorageServicesActivationConfig.AsObject,
    }
}

export class AudioObjectStorageServicesActivationConfig extends jspb.Message { 

    hasActivateS2t(): boolean;
    clearActivateS2t(): void;
    getActivateS2t(): boolean | undefined;
    setActivateS2t(value: boolean): AudioObjectStorageServicesActivationConfig;

    hasActivateT2s(): boolean;
    clearActivateT2s(): void;
    getActivateT2s(): boolean | undefined;
    setActivateT2s(value: boolean): AudioObjectStorageServicesActivationConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioObjectStorageServicesActivationConfig.AsObject;
    static toObject(includeInstance: boolean, msg: AudioObjectStorageServicesActivationConfig): AudioObjectStorageServicesActivationConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioObjectStorageServicesActivationConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioObjectStorageServicesActivationConfig;
    static deserializeBinaryFromReader(message: AudioObjectStorageServicesActivationConfig, reader: jspb.BinaryReader): AudioObjectStorageServicesActivationConfig;
}

export namespace AudioObjectStorageServicesActivationConfig {
    export type AsObject = {
        activateS2t?: boolean,
        activateT2s?: boolean,
    }
}

export class MessageBrokerConfig extends jspb.Message { 

    hasActivateMessageBroker(): boolean;
    clearActivateMessageBroker(): void;
    getActivateMessageBroker(): boolean | undefined;
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MessageBrokerConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MessageBrokerConfig;
    static deserializeBinaryFromReader(message: MessageBrokerConfig, reader: jspb.BinaryReader): MessageBrokerConfig;
}

export namespace MessageBrokerConfig {
    export type AsObject = {
        activateMessageBroker?: boolean,
        messageBrokerServicesActivationConfig?: MessageBrokerServicesActivationConfig.AsObject,
        rabbitMqConfig?: RabbitMqConfig.AsObject,
    }

    export enum MessageBrokerConfigCase {
        MESSAGE_BROKER_CONFIG_NOT_SET = 0,
        RABBIT_MQ_CONFIG = 3,
    }

}

export class MessageBrokerServicesActivationConfig extends jspb.Message { 

    hasActivateS2t(): boolean;
    clearActivateS2t(): void;
    getActivateS2t(): boolean | undefined;
    setActivateS2t(value: boolean): MessageBrokerServicesActivationConfig;

    hasActivateNlu(): boolean;
    clearActivateNlu(): void;
    getActivateNlu(): boolean | undefined;
    setActivateNlu(value: boolean): MessageBrokerServicesActivationConfig;

    hasActivateT2s(): boolean;
    clearActivateT2s(): void;
    getActivateT2s(): boolean | undefined;
    setActivateT2s(value: boolean): MessageBrokerServicesActivationConfig;

    hasActivateSip(): boolean;
    clearActivateSip(): void;
    getActivateSip(): boolean | undefined;
    setActivateSip(value: boolean): MessageBrokerServicesActivationConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MessageBrokerServicesActivationConfig.AsObject;
    static toObject(includeInstance: boolean, msg: MessageBrokerServicesActivationConfig): MessageBrokerServicesActivationConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MessageBrokerServicesActivationConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MessageBrokerServicesActivationConfig;
    static deserializeBinaryFromReader(message: MessageBrokerServicesActivationConfig, reader: jspb.BinaryReader): MessageBrokerServicesActivationConfig;
}

export namespace MessageBrokerServicesActivationConfig {
    export type AsObject = {
        activateS2t?: boolean,
        activateNlu?: boolean,
        activateT2s?: boolean,
        activateSip?: boolean,
    }
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RabbitMqConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RabbitMqConfig;
    static deserializeBinaryFromReader(message: RabbitMqConfig, reader: jspb.BinaryReader): RabbitMqConfig;
}

export namespace RabbitMqConfig {
    export type AsObject = {
        host: string,
        port: number,
        port2: number,
        user: string,
        password: string,
    }
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: S2tVtsiCallbacks, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): S2tVtsiCallbacks;
    static deserializeBinaryFromReader(message: S2tVtsiCallbacks, reader: jspb.BinaryReader): S2tVtsiCallbacks;
}

export namespace S2tVtsiCallbacks {
    export type AsObject = {
        preS2tCallbacksList: Array<string>,
        postS2tCallbacksList: Array<string>,
    }
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NluVtsiCallbacks, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NluVtsiCallbacks;
    static deserializeBinaryFromReader(message: NluVtsiCallbacks, reader: jspb.BinaryReader): NluVtsiCallbacks;
}

export namespace NluVtsiCallbacks {
    export type AsObject = {
        preNluCallbacksList: Array<string>,
        postNluCallbacksList: Array<string>,
    }
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: T2sVtsiCallbacks, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): T2sVtsiCallbacks;
    static deserializeBinaryFromReader(message: T2sVtsiCallbacks, reader: jspb.BinaryReader): T2sVtsiCallbacks;
}

export namespace T2sVtsiCallbacks {
    export type AsObject = {
        preT2sCallbacksList: Array<string>,
        postT2sCallbacksList: Array<string>,
    }
}
