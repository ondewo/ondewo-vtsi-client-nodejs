// package: ondewo.vtsi
// file: ondewo/vtsi/call_configs.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
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

    hasPreemptiveGenerationConfig(): boolean;
    clearPreemptiveGenerationConfig(): void;
    getPreemptiveGenerationConfig(): NluPreemptiveGenerationConfig | undefined;
    setPreemptiveGenerationConfig(value?: NluPreemptiveGenerationConfig): NluVtsiConfig;

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
        preemptiveGenerationConfig?: NluPreemptiveGenerationConfig.AsObject,
    }

    export enum AuthenticationCase {
        AUTHENTICATION_NOT_SET = 0,
        CREDENTIALS = 2,
        AUTH_TOKEN = 3,
    }

}

export class NluPreemptiveGenerationConfig extends jspb.Message { 

    hasMaxDraftsPerTurn(): boolean;
    clearMaxDraftsPerTurn(): void;
    getMaxDraftsPerTurn(): number | undefined;
    setMaxDraftsPerTurn(value: number): NluPreemptiveGenerationConfig;

    hasMinStableDwellSeconds(): boolean;
    clearMinStableDwellSeconds(): void;
    getMinStableDwellSeconds(): number | undefined;
    setMinStableDwellSeconds(value: number): NluPreemptiveGenerationConfig;

    hasMinIntervalSeconds(): boolean;
    clearMinIntervalSeconds(): void;
    getMinIntervalSeconds(): number | undefined;
    setMinIntervalSeconds(value: number): NluPreemptiveGenerationConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NluPreemptiveGenerationConfig.AsObject;
    static toObject(includeInstance: boolean, msg: NluPreemptiveGenerationConfig): NluPreemptiveGenerationConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NluPreemptiveGenerationConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NluPreemptiveGenerationConfig;
    static deserializeBinaryFromReader(message: NluPreemptiveGenerationConfig, reader: jspb.BinaryReader): NluPreemptiveGenerationConfig;
}

export namespace NluPreemptiveGenerationConfig {
    export type AsObject = {
        maxDraftsPerTurn?: number,
        minStableDwellSeconds?: number,
        minIntervalSeconds?: number,
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

    hasPreemptiveSynthesisConfig(): boolean;
    clearPreemptiveSynthesisConfig(): void;
    getPreemptiveSynthesisConfig(): T2sPreemptiveSynthesisConfig | undefined;
    setPreemptiveSynthesisConfig(value?: T2sPreemptiveSynthesisConfig): T2sVtsiConfig;

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
        preemptiveSynthesisConfig?: T2sPreemptiveSynthesisConfig.AsObject,
    }
}

export class T2sPreemptiveSynthesisConfig extends jspb.Message { 

    hasEnabled(): boolean;
    clearEnabled(): void;
    getEnabled(): boolean | undefined;
    setEnabled(value: boolean): T2sPreemptiveSynthesisConfig;

    hasChunked(): boolean;
    clearChunked(): void;
    getChunked(): boolean | undefined;
    setChunked(value: boolean): T2sPreemptiveSynthesisConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): T2sPreemptiveSynthesisConfig.AsObject;
    static toObject(includeInstance: boolean, msg: T2sPreemptiveSynthesisConfig): T2sPreemptiveSynthesisConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: T2sPreemptiveSynthesisConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): T2sPreemptiveSynthesisConfig;
    static deserializeBinaryFromReader(message: T2sPreemptiveSynthesisConfig, reader: jspb.BinaryReader): T2sPreemptiveSynthesisConfig;
}

export namespace T2sPreemptiveSynthesisConfig {
    export type AsObject = {
        enabled?: boolean,
        chunked?: boolean,
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

    hasDtmfConfig(): boolean;
    clearDtmfConfig(): void;
    getDtmfConfig(): DtmfConfig | undefined;
    setDtmfConfig(value?: DtmfConfig): VoiceInteractionConfig;

    hasWarmTransferConfig(): boolean;
    clearWarmTransferConfig(): void;
    getWarmTransferConfig(): WarmTransferConfig | undefined;
    setWarmTransferConfig(value?: WarmTransferConfig): VoiceInteractionConfig;

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
        dtmfConfig?: DtmfConfig.AsObject,
        warmTransferConfig?: WarmTransferConfig.AsObject,
    }
}

export class DtmfConfig extends jspb.Message { 

    hasEnabled(): boolean;
    clearEnabled(): void;
    getEnabled(): boolean | undefined;
    setEnabled(value: boolean): DtmfConfig;

    hasBargeIn(): boolean;
    clearBargeIn(): void;
    getBargeIn(): boolean | undefined;
    setBargeIn(value: boolean): DtmfConfig;

    hasInterDigitTimeoutMs(): boolean;
    clearInterDigitTimeoutMs(): void;
    getInterDigitTimeoutMs(): number | undefined;
    setInterDigitTimeoutMs(value: number): DtmfConfig;

    hasUndeclaredPolicy(): boolean;
    clearUndeclaredPolicy(): void;
    getUndeclaredPolicy(): string | undefined;
    setUndeclaredPolicy(value: string): DtmfConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DtmfConfig.AsObject;
    static toObject(includeInstance: boolean, msg: DtmfConfig): DtmfConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DtmfConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DtmfConfig;
    static deserializeBinaryFromReader(message: DtmfConfig, reader: jspb.BinaryReader): DtmfConfig;
}

export namespace DtmfConfig {
    export type AsObject = {
        enabled?: boolean,
        bargeIn?: boolean,
        interDigitTimeoutMs?: number,
        undeclaredPolicy?: string,
    }
}

export class WarmTransferConfig extends jspb.Message { 

    hasEnabled(): boolean;
    clearEnabled(): void;
    getEnabled(): boolean | undefined;
    setEnabled(value: boolean): WarmTransferConfig;

    hasIntroPrompt(): boolean;
    clearIntroPrompt(): void;
    getIntroPrompt(): string | undefined;
    setIntroPrompt(value: string): WarmTransferConfig;
    getIntroTextSource(): WarmIntroTextSource;
    setIntroTextSource(value: WarmIntroTextSource): WarmTransferConfig;

    hasReadyQuestion(): boolean;
    clearReadyQuestion(): void;
    getReadyQuestion(): string | undefined;
    setReadyQuestion(value: string): WarmTransferConfig;

    hasConfirmHumanBeforeIntro(): boolean;
    clearConfirmHumanBeforeIntro(): void;
    getConfirmHumanBeforeIntro(): boolean | undefined;
    setConfirmHumanBeforeIntro(value: boolean): WarmTransferConfig;

    hasAcceptQuestion(): boolean;
    clearAcceptQuestion(): void;
    getAcceptQuestion(): string | undefined;
    setAcceptQuestion(value: string): WarmTransferConfig;

    hasDeclineReasonQuestion(): boolean;
    clearDeclineReasonQuestion(): void;
    getDeclineReasonQuestion(): string | undefined;
    setDeclineReasonQuestion(value: string): WarmTransferConfig;

    hasCallerDeclinedMessage(): boolean;
    clearCallerDeclinedMessage(): void;
    getCallerDeclinedMessage(): string | undefined;
    setCallerDeclinedMessage(value: string): WarmTransferConfig;

    hasCallerUnreachableMessage(): boolean;
    clearCallerUnreachableMessage(): void;
    getCallerUnreachableMessage(): string | undefined;
    setCallerUnreachableMessage(value: string): WarmTransferConfig;

    hasAcceptDtmf(): boolean;
    clearAcceptDtmf(): void;
    getAcceptDtmf(): string | undefined;
    setAcceptDtmf(value: string): WarmTransferConfig;

    hasDeclineDtmf(): boolean;
    clearDeclineDtmf(): void;
    getDeclineDtmf(): string | undefined;
    setDeclineDtmf(value: string): WarmTransferConfig;

    hasDecisionTimeoutS(): boolean;
    clearDecisionTimeoutS(): void;
    getDecisionTimeoutS(): number | undefined;
    setDecisionTimeoutS(value: number): WarmTransferConfig;

    hasMaxIntroDurationS(): boolean;
    clearMaxIntroDurationS(): void;
    getMaxIntroDurationS(): number | undefined;
    setMaxIntroDurationS(value: number): WarmTransferConfig;

    hasCalleeDisplayName(): boolean;
    clearCalleeDisplayName(): void;
    getCalleeDisplayName(): string | undefined;
    setCalleeDisplayName(value: string): WarmTransferConfig;

    hasCalleeDescription(): boolean;
    clearCalleeDescription(): void;
    getCalleeDescription(): string | undefined;
    setCalleeDescription(value: string): WarmTransferConfig;
    getOnIntroUnavailable(): WarmIntroUnavailablePolicy;
    setOnIntroUnavailable(value: WarmIntroUnavailablePolicy): WarmTransferConfig;

    hasApplyToBotTransfers(): boolean;
    clearApplyToBotTransfers(): void;
    getApplyToBotTransfers(): boolean | undefined;
    setApplyToBotTransfers(value: boolean): WarmTransferConfig;

    hasCallerHoldMessage(): boolean;
    clearCallerHoldMessage(): void;
    getCallerHoldMessage(): string | undefined;
    setCallerHoldMessage(value: string): WarmTransferConfig;

    hasCallerHoldMusic(): boolean;
    clearCallerHoldMusic(): void;
    getCallerHoldMusic(): boolean | undefined;
    setCallerHoldMusic(value: boolean): WarmTransferConfig;

    hasCallerReassureIntervalS(): boolean;
    clearCallerReassureIntervalS(): void;
    getCallerReassureIntervalS(): number | undefined;
    setCallerReassureIntervalS(value: number): WarmTransferConfig;

    hasLlmCcaiServiceName(): boolean;
    clearLlmCcaiServiceName(): void;
    getLlmCcaiServiceName(): string | undefined;
    setLlmCcaiServiceName(value: string): WarmTransferConfig;

    hasCallerDisclosureMessage(): boolean;
    clearCallerDisclosureMessage(): void;
    getCallerDisclosureMessage(): string | undefined;
    setCallerDisclosureMessage(value: string): WarmTransferConfig;

    hasCallerAcceptedMessage(): boolean;
    clearCallerAcceptedMessage(): void;
    getCallerAcceptedMessage(): string | undefined;
    setCallerAcceptedMessage(value: string): WarmTransferConfig;

    hasStoreIntroAudio(): boolean;
    clearStoreIntroAudio(): void;
    getStoreIntroAudio(): boolean | undefined;
    setStoreIntroAudio(value: boolean): WarmTransferConfig;
    clearIntroListenerNamesList(): void;
    getIntroListenerNamesList(): Array<string>;
    setIntroListenerNamesList(value: Array<string>): WarmTransferConfig;
    addIntroListenerNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WarmTransferConfig.AsObject;
    static toObject(includeInstance: boolean, msg: WarmTransferConfig): WarmTransferConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WarmTransferConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WarmTransferConfig;
    static deserializeBinaryFromReader(message: WarmTransferConfig, reader: jspb.BinaryReader): WarmTransferConfig;
}

export namespace WarmTransferConfig {
    export type AsObject = {
        enabled?: boolean,
        introPrompt?: string,
        introTextSource: WarmIntroTextSource,
        readyQuestion?: string,
        confirmHumanBeforeIntro?: boolean,
        acceptQuestion?: string,
        declineReasonQuestion?: string,
        callerDeclinedMessage?: string,
        callerUnreachableMessage?: string,
        acceptDtmf?: string,
        declineDtmf?: string,
        decisionTimeoutS?: number,
        maxIntroDurationS?: number,
        calleeDisplayName?: string,
        calleeDescription?: string,
        onIntroUnavailable: WarmIntroUnavailablePolicy,
        applyToBotTransfers?: boolean,
        callerHoldMessage?: string,
        callerHoldMusic?: boolean,
        callerReassureIntervalS?: number,
        llmCcaiServiceName?: string,
        callerDisclosureMessage?: string,
        callerAcceptedMessage?: string,
        storeIntroAudio?: boolean,
        introListenerNamesList: Array<string>,
    }
}

export class WarmIntroRecord extends jspb.Message { 
    getIntroId(): string;
    setIntroId(value: string): WarmIntroRecord;
    getDecision(): WarmIntroDecision;
    setDecision(value: WarmIntroDecision): WarmIntroRecord;
    getDecidedBy(): WarmIntroDecidedBy;
    setDecidedBy(value: WarmIntroDecidedBy): WarmIntroRecord;
    getDeclineReasonPresent(): boolean;
    setDeclineReasonPresent(value: boolean): WarmIntroRecord;
    getIntroCallName(): string;
    setIntroCallName(value: string): WarmIntroRecord;

    hasRingDuration(): boolean;
    clearRingDuration(): void;
    getRingDuration(): google_protobuf_duration_pb.Duration | undefined;
    setRingDuration(value?: google_protobuf_duration_pb.Duration): WarmIntroRecord;

    hasIntroDuration(): boolean;
    clearIntroDuration(): void;
    getIntroDuration(): google_protobuf_duration_pb.Duration | undefined;
    setIntroDuration(value?: google_protobuf_duration_pb.Duration): WarmIntroRecord;
    getTextSource(): WarmIntroTextSource;
    setTextSource(value: WarmIntroTextSource): WarmIntroRecord;
    getTextFellBack(): boolean;
    setTextFellBack(value: boolean): WarmIntroRecord;
    getCause(): string;
    setCause(value: string): WarmIntroRecord;
    getNoticeDelivered(): boolean;
    setNoticeDelivered(value: boolean): WarmIntroRecord;
    getIntroStarted(): boolean;
    setIntroStarted(value: boolean): WarmIntroRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WarmIntroRecord.AsObject;
    static toObject(includeInstance: boolean, msg: WarmIntroRecord): WarmIntroRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WarmIntroRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WarmIntroRecord;
    static deserializeBinaryFromReader(message: WarmIntroRecord, reader: jspb.BinaryReader): WarmIntroRecord;
}

export namespace WarmIntroRecord {
    export type AsObject = {
        introId: string,
        decision: WarmIntroDecision,
        decidedBy: WarmIntroDecidedBy,
        declineReasonPresent: boolean,
        introCallName: string,
        ringDuration?: google_protobuf_duration_pb.Duration.AsObject,
        introDuration?: google_protobuf_duration_pb.Duration.AsObject,
        textSource: WarmIntroTextSource,
        textFellBack: boolean,
        cause: string,
        noticeDelivered: boolean,
        introStarted: boolean,
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

    hasConversationContextTurns(): boolean;
    clearConversationContextTurns(): void;
    getConversationContextTurns(): number | undefined;
    setConversationContextTurns(value: number): TurnDetectionConfig;

    hasSemanticModelName(): boolean;
    clearSemanticModelName(): void;
    getSemanticModelName(): string | undefined;
    setSemanticModelName(value: string): TurnDetectionConfig;

    hasEndOfTurnProbabilityThreshold(): boolean;
    clearEndOfTurnProbabilityThreshold(): void;
    getEndOfTurnProbabilityThreshold(): number | undefined;
    setEndOfTurnProbabilityThreshold(value: number): TurnDetectionConfig;

    hasHoldBands(): boolean;
    clearHoldBands(): void;
    getHoldBands(): TurnDetectionConfig.EndOfTurnHoldBands | undefined;
    setHoldBands(value?: TurnDetectionConfig.EndOfTurnHoldBands): TurnDetectionConfig;

    hasUncertainMinWords(): boolean;
    clearUncertainMinWords(): void;
    getUncertainMinWords(): number | undefined;
    setUncertainMinWords(value: number): TurnDetectionConfig;

    hasIncompleteMaxSilenceSeconds(): boolean;
    clearIncompleteMaxSilenceSeconds(): void;
    getIncompleteMaxSilenceSeconds(): number | undefined;
    setIncompleteMaxSilenceSeconds(value: number): TurnDetectionConfig;

    hasExactProbability(): boolean;
    clearExactProbability(): void;
    getExactProbability(): boolean | undefined;
    setExactProbability(value: boolean): TurnDetectionConfig;

    hasFinalMergeWindowSeconds(): boolean;
    clearFinalMergeWindowSeconds(): void;
    getFinalMergeWindowSeconds(): number | undefined;
    setFinalMergeWindowSeconds(value: number): TurnDetectionConfig;

    hasDictationConfig(): boolean;
    clearDictationConfig(): void;
    getDictationConfig(): DictationConfig | undefined;
    setDictationConfig(value?: DictationConfig): TurnDetectionConfig;

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
        conversationContextTurns?: number,
        semanticModelName?: string,
        endOfTurnProbabilityThreshold?: number,
        holdBands?: TurnDetectionConfig.EndOfTurnHoldBands.AsObject,
        uncertainMinWords?: number,
        incompleteMaxSilenceSeconds?: number,
        exactProbability?: boolean,
        finalMergeWindowSeconds?: number,
        dictationConfig?: DictationConfig.AsObject,
    }


    export class EndOfTurnHoldBands extends jspb.Message { 
        clearBandsList(): void;
        getBandsList(): Array<TurnDetectionConfig.EndOfTurnHoldBand>;
        setBandsList(value: Array<TurnDetectionConfig.EndOfTurnHoldBand>): EndOfTurnHoldBands;
        addBands(value?: TurnDetectionConfig.EndOfTurnHoldBand, index?: number): TurnDetectionConfig.EndOfTurnHoldBand;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): EndOfTurnHoldBands.AsObject;
        static toObject(includeInstance: boolean, msg: EndOfTurnHoldBands): EndOfTurnHoldBands.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: EndOfTurnHoldBands, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): EndOfTurnHoldBands;
        static deserializeBinaryFromReader(message: EndOfTurnHoldBands, reader: jspb.BinaryReader): EndOfTurnHoldBands;
    }

    export namespace EndOfTurnHoldBands {
        export type AsObject = {
            bandsList: Array<TurnDetectionConfig.EndOfTurnHoldBand.AsObject>,
        }
    }

    export class EndOfTurnHoldBand extends jspb.Message { 
        getUpperProbability(): number;
        setUpperProbability(value: number): EndOfTurnHoldBand;
        getMaxSilenceSeconds(): number;
        setMaxSilenceSeconds(value: number): EndOfTurnHoldBand;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): EndOfTurnHoldBand.AsObject;
        static toObject(includeInstance: boolean, msg: EndOfTurnHoldBand): EndOfTurnHoldBand.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: EndOfTurnHoldBand, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): EndOfTurnHoldBand;
        static deserializeBinaryFromReader(message: EndOfTurnHoldBand, reader: jspb.BinaryReader): EndOfTurnHoldBand;
    }

    export namespace EndOfTurnHoldBand {
        export type AsObject = {
            upperProbability: number,
            maxSilenceSeconds: number,
        }
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

export class DictationConfig extends jspb.Message { 

    hasHoldEnabled(): boolean;
    clearHoldEnabled(): void;
    getHoldEnabled(): boolean | undefined;
    setHoldEnabled(value: boolean): DictationConfig;

    hasExpectedInputEnabled(): boolean;
    clearExpectedInputEnabled(): void;
    getExpectedInputEnabled(): boolean | undefined;
    setExpectedInputEnabled(value: boolean): DictationConfig;

    hasReadBackFromBotTextEnabled(): boolean;
    clearReadBackFromBotTextEnabled(): void;
    getReadBackFromBotTextEnabled(): boolean | undefined;
    setReadBackFromBotTextEnabled(value: boolean): DictationConfig;

    hasHoldGenericMaxSeconds(): boolean;
    clearHoldGenericMaxSeconds(): void;
    getHoldGenericMaxSeconds(): number | undefined;
    setHoldGenericMaxSeconds(value: number): DictationConfig;

    getHoldMaxSecondsByCategoryMap(): jspb.Map<string, number>;
    clearHoldMaxSecondsByCategoryMap(): void;

    hasHoldInvalidChecksumSeconds(): boolean;
    clearHoldInvalidChecksumSeconds(): void;
    getHoldInvalidChecksumSeconds(): number | undefined;
    setHoldInvalidChecksumSeconds(value: number): DictationConfig;

    hasEarlyCommitOnCompleteValue(): boolean;
    clearEarlyCommitOnCompleteValue(): void;
    getEarlyCommitOnCompleteValue(): boolean | undefined;
    setEarlyCommitOnCompleteValue(value: boolean): DictationConfig;

    hasS2tSlotMinDurationOffSeconds(): boolean;
    clearS2tSlotMinDurationOffSeconds(): void;
    getS2tSlotMinDurationOffSeconds(): number | undefined;
    setS2tSlotMinDurationOffSeconds(value: number): DictationConfig;

    hasS2tSlotMinDurationOffRestoreSeconds(): boolean;
    clearS2tSlotMinDurationOffRestoreSeconds(): void;
    getS2tSlotMinDurationOffRestoreSeconds(): number | undefined;
    setS2tSlotMinDurationOffRestoreSeconds(value: number): DictationConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DictationConfig.AsObject;
    static toObject(includeInstance: boolean, msg: DictationConfig): DictationConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DictationConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DictationConfig;
    static deserializeBinaryFromReader(message: DictationConfig, reader: jspb.BinaryReader): DictationConfig;
}

export namespace DictationConfig {
    export type AsObject = {
        holdEnabled?: boolean,
        expectedInputEnabled?: boolean,
        readBackFromBotTextEnabled?: boolean,
        holdGenericMaxSeconds?: number,

        holdMaxSecondsByCategoryMap: Array<[string, number]>,
        holdInvalidChecksumSeconds?: number,
        earlyCommitOnCompleteValue?: boolean,
        s2tSlotMinDurationOffSeconds?: number,
        s2tSlotMinDurationOffRestoreSeconds?: number,
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

    hasInterruptionFadeOutMs(): boolean;
    clearInterruptionFadeOutMs(): void;
    getInterruptionFadeOutMs(): number | undefined;
    setInterruptionFadeOutMs(value: number): InterruptionHandlingConfig;

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
        interruptionFadeOutMs?: number,
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

    hasPreemptiveGenerationConfig(): boolean;
    clearPreemptiveGenerationConfig(): void;
    getPreemptiveGenerationConfig(): CsiPreemptiveGenerationConfig | undefined;
    setPreemptiveGenerationConfig(value?: CsiPreemptiveGenerationConfig): CsiVtsiConfig;

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
        preemptiveGenerationConfig?: CsiPreemptiveGenerationConfig.AsObject,
    }
}

export class CsiPreemptiveGenerationConfig extends jspb.Message { 

    hasEnabled(): boolean;
    clearEnabled(): void;
    getEnabled(): boolean | undefined;
    setEnabled(value: boolean): CsiPreemptiveGenerationConfig;

    hasCommitWaitTimeoutSeconds(): boolean;
    clearCommitWaitTimeoutSeconds(): void;
    getCommitWaitTimeoutSeconds(): number | undefined;
    setCommitWaitTimeoutSeconds(value: number): CsiPreemptiveGenerationConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CsiPreemptiveGenerationConfig.AsObject;
    static toObject(includeInstance: boolean, msg: CsiPreemptiveGenerationConfig): CsiPreemptiveGenerationConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CsiPreemptiveGenerationConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CsiPreemptiveGenerationConfig;
    static deserializeBinaryFromReader(message: CsiPreemptiveGenerationConfig, reader: jspb.BinaryReader): CsiPreemptiveGenerationConfig;
}

export namespace CsiPreemptiveGenerationConfig {
    export type AsObject = {
        enabled?: boolean,
        commitWaitTimeoutSeconds?: number,
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

export enum WarmIntroTextSource {
    WARM_INTRO_TEXT_SOURCE_UNSPECIFIED = 0,
    WARM_INTRO_TEXT_SOURCE_TEMPLATE = 1,
    WARM_INTRO_TEXT_SOURCE_LLM_SUMMARY = 2,
}

export enum WarmIntroUnavailablePolicy {
    WARM_INTRO_UNAVAILABLE_POLICY_UNSPECIFIED = 0,
    WARM_INTRO_UNAVAILABLE_POLICY_CONNECT_WITHOUT_INTRO = 1,
    WARM_INTRO_UNAVAILABLE_POLICY_RETURN_TO_CALLER = 2,
}

export enum WarmIntroDecision {
    WARM_INTRO_DECISION_UNSPECIFIED = 0,
    WARM_INTRO_DECISION_ACCEPTED = 1,
    WARM_INTRO_DECISION_DECLINED = 2,
    WARM_INTRO_DECISION_NO_DECISION = 3,
}

export enum WarmIntroDecidedBy {
    WARM_INTRO_DECIDED_BY_UNSPECIFIED = 0,
    WARM_INTRO_DECIDED_BY_DTMF = 1,
    WARM_INTRO_DECIDED_BY_SPEECH = 2,
    WARM_INTRO_DECIDED_BY_TIMEOUT = 3,
}
