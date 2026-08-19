// package: ondewo.vtsi
// file: ondewo/vtsi/logs.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_nlu_common_pb from "../../ondewo/nlu/common_pb";
import * as ondewo_vtsi_calls_pb from "../../ondewo/vtsi/calls_pb";

export class CallLogEntry extends jspb.Message { 
    getSeq(): number;
    setSeq(value: number): CallLogEntry;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): CallLogEntry;
    getTimestampIsExact(): boolean;
    setTimestampIsExact(value: boolean): CallLogEntry;
    getLevel(): ondewo_nlu_common_pb.LogSeverity;
    setLevel(value: ondewo_nlu_common_pb.LogSeverity): CallLogEntry;
    getMessage(): string;
    setMessage(value: string): CallLogEntry;
    getContainerId(): string;
    setContainerId(value: string): CallLogEntry;
    getContainerName(): string;
    setContainerName(value: string): CallLogEntry;
    getLogSource(): LogSource;
    setLogSource(value: LogSource): CallLogEntry;
    getChannel(): LogStreamChannel;
    setChannel(value: LogStreamChannel): CallLogEntry;
    getEmitter(): string;
    setEmitter(value: string): CallLogEntry;
    getThreadName(): string;
    setThreadName(value: string): CallLogEntry;
    getLogStream(): string;
    setLogStream(value: string): CallLogEntry;
    getCall(): string;
    setCall(value: string): CallLogEntry;
    getNluSessionName(): string;
    setNluSessionName(value: string): CallLogEntry;
    getPhysicalLineCount(): number;
    setPhysicalLineCount(value: number): CallLogEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallLogEntry.AsObject;
    static toObject(includeInstance: boolean, msg: CallLogEntry): CallLogEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallLogEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallLogEntry;
    static deserializeBinaryFromReader(message: CallLogEntry, reader: jspb.BinaryReader): CallLogEntry;
}

export namespace CallLogEntry {
    export type AsObject = {
        seq: number,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        timestampIsExact: boolean,
        level: ondewo_nlu_common_pb.LogSeverity,
        message: string,
        containerId: string,
        containerName: string,
        logSource: LogSource,
        channel: LogStreamChannel,
        emitter: string,
        threadName: string,
        logStream: string,
        call: string,
        nluSessionName: string,
        physicalLineCount: number,
    }
}

export class SipHeaderFilter extends jspb.Message { 
    getKey(): string;
    setKey(value: string): SipHeaderFilter;
    getValue(): string;
    setValue(value: string): SipHeaderFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SipHeaderFilter.AsObject;
    static toObject(includeInstance: boolean, msg: SipHeaderFilter): SipHeaderFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SipHeaderFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SipHeaderFilter;
    static deserializeBinaryFromReader(message: SipHeaderFilter, reader: jspb.BinaryReader): SipHeaderFilter;
}

export namespace SipHeaderFilter {
    export type AsObject = {
        key: string,
        value: string,
    }
}

export class CallLogFilter extends jspb.Message { 
    clearCallNamesList(): void;
    getCallNamesList(): Array<string>;
    setCallNamesList(value: Array<string>): CallLogFilter;
    addCallNames(value: string, index?: number): string;
    clearCallerNamesList(): void;
    getCallerNamesList(): Array<string>;
    setCallerNamesList(value: Array<string>): CallLogFilter;
    addCallerNames(value: string, index?: number): string;
    clearListenerNamesList(): void;
    getListenerNamesList(): Array<string>;
    setListenerNamesList(value: Array<string>): CallLogFilter;
    addListenerNames(value: string, index?: number): string;
    clearCallerIdsList(): void;
    getCallerIdsList(): Array<string>;
    setCallerIdsList(value: Array<string>): CallLogFilter;
    addCallerIds(value: string, index?: number): string;
    clearListenerIdsList(): void;
    getListenerIdsList(): Array<string>;
    setListenerIdsList(value: Array<string>): CallLogFilter;
    addListenerIds(value: string, index?: number): string;
    clearCallIdsList(): void;
    getCallIdsList(): Array<string>;
    setCallIdsList(value: Array<string>): CallLogFilter;
    addCallIds(value: string, index?: number): string;
    clearContainerNamesList(): void;
    getContainerNamesList(): Array<string>;
    setContainerNamesList(value: Array<string>): CallLogFilter;
    addContainerNames(value: string, index?: number): string;
    clearContainerIdsList(): void;
    getContainerIdsList(): Array<string>;
    setContainerIdsList(value: Array<string>): CallLogFilter;
    addContainerIds(value: string, index?: number): string;
    clearLogStreamNamesList(): void;
    getLogStreamNamesList(): Array<string>;
    setLogStreamNamesList(value: Array<string>): CallLogFilter;
    addLogStreamNames(value: string, index?: number): string;
    clearSipAccountsList(): void;
    getSipAccountsList(): Array<string>;
    setSipAccountsList(value: Array<string>): CallLogFilter;
    addSipAccounts(value: string, index?: number): string;
    clearSipPortsList(): void;
    getSipPortsList(): Array<string>;
    setSipPortsList(value: Array<string>): CallLogFilter;
    addSipPorts(value: string, index?: number): string;
    clearCsiPortsList(): void;
    getCsiPortsList(): Array<string>;
    setCsiPortsList(value: Array<string>): CallLogFilter;
    addCsiPorts(value: string, index?: number): string;
    clearAsteriskPortsList(): void;
    getAsteriskPortsList(): Array<string>;
    setAsteriskPortsList(value: Array<string>): CallLogFilter;
    addAsteriskPorts(value: string, index?: number): string;
    clearPhoneNumbersList(): void;
    getPhoneNumbersList(): Array<string>;
    setPhoneNumbersList(value: Array<string>): CallLogFilter;
    addPhoneNumbers(value: string, index?: number): string;
    clearCalleeIdsList(): void;
    getCalleeIdsList(): Array<string>;
    setCalleeIdsList(value: Array<string>): CallLogFilter;
    addCalleeIds(value: string, index?: number): string;
    clearNluSessionNamesList(): void;
    getNluSessionNamesList(): Array<string>;
    setNluSessionNamesList(value: Array<string>): CallLogFilter;
    addNluSessionNames(value: string, index?: number): string;
    clearNluSessionUuidsList(): void;
    getNluSessionUuidsList(): Array<string>;
    setNluSessionUuidsList(value: Array<string>): CallLogFilter;
    addNluSessionUuids(value: string, index?: number): string;
    clearNluProjectUuidsList(): void;
    getNluProjectUuidsList(): Array<string>;
    setNluProjectUuidsList(value: Array<string>): CallLogFilter;
    addNluProjectUuids(value: string, index?: number): string;
    clearCallTypesList(): void;
    getCallTypesList(): Array<ondewo_vtsi_calls_pb.CallType>;
    setCallTypesList(value: Array<ondewo_vtsi_calls_pb.CallType>): CallLogFilter;
    addCallTypes(value: ondewo_vtsi_calls_pb.CallType, index?: number): ondewo_vtsi_calls_pb.CallType;
    clearSipHeadersList(): void;
    getSipHeadersList(): Array<SipHeaderFilter>;
    setSipHeadersList(value: Array<SipHeaderFilter>): CallLogFilter;
    addSipHeaders(value?: SipHeaderFilter, index?: number): SipHeaderFilter;
    clearLogSourcesList(): void;
    getLogSourcesList(): Array<LogSource>;
    setLogSourcesList(value: Array<LogSource>): CallLogFilter;
    addLogSources(value: LogSource, index?: number): LogSource;
    clearChannelsList(): void;
    getChannelsList(): Array<LogStreamChannel>;
    setChannelsList(value: Array<LogStreamChannel>): CallLogFilter;
    addChannels(value: LogStreamChannel, index?: number): LogStreamChannel;
    getMinLogLevel(): ondewo_nlu_common_pb.LogSeverity;
    setMinLogLevel(value: ondewo_nlu_common_pb.LogSeverity): CallLogFilter;
    clearLogLevelsList(): void;
    getLogLevelsList(): Array<ondewo_nlu_common_pb.LogSeverity>;
    setLogLevelsList(value: Array<ondewo_nlu_common_pb.LogSeverity>): CallLogFilter;
    addLogLevels(value: ondewo_nlu_common_pb.LogSeverity, index?: number): ondewo_nlu_common_pb.LogSeverity;

    hasIncludeUnleveledLines(): boolean;
    clearIncludeUnleveledLines(): void;
    getIncludeUnleveledLines(): boolean | undefined;
    setIncludeUnleveledLines(value: boolean): CallLogFilter;

    hasText(): boolean;
    clearText(): void;
    getText(): string | undefined;
    setText(value: string): CallLogFilter;

    hasRegex(): boolean;
    clearRegex(): void;
    getRegex(): string | undefined;
    setRegex(value: string): CallLogFilter;
    clearEmitterPrefixesList(): void;
    getEmitterPrefixesList(): Array<string>;
    setEmitterPrefixesList(value: Array<string>): CallLogFilter;
    addEmitterPrefixes(value: string, index?: number): string;
    clearThreadNamesList(): void;
    getThreadNamesList(): Array<string>;
    setThreadNamesList(value: Array<string>): CallLogFilter;
    addThreadNames(value: string, index?: number): string;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): CallLogFilter;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): CallLogFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallLogFilter.AsObject;
    static toObject(includeInstance: boolean, msg: CallLogFilter): CallLogFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallLogFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallLogFilter;
    static deserializeBinaryFromReader(message: CallLogFilter, reader: jspb.BinaryReader): CallLogFilter;
}

export namespace CallLogFilter {
    export type AsObject = {
        callNamesList: Array<string>,
        callerNamesList: Array<string>,
        listenerNamesList: Array<string>,
        callerIdsList: Array<string>,
        listenerIdsList: Array<string>,
        callIdsList: Array<string>,
        containerNamesList: Array<string>,
        containerIdsList: Array<string>,
        logStreamNamesList: Array<string>,
        sipAccountsList: Array<string>,
        sipPortsList: Array<string>,
        csiPortsList: Array<string>,
        asteriskPortsList: Array<string>,
        phoneNumbersList: Array<string>,
        calleeIdsList: Array<string>,
        nluSessionNamesList: Array<string>,
        nluSessionUuidsList: Array<string>,
        nluProjectUuidsList: Array<string>,
        callTypesList: Array<ondewo_vtsi_calls_pb.CallType>,
        sipHeadersList: Array<SipHeaderFilter.AsObject>,
        logSourcesList: Array<LogSource>,
        channelsList: Array<LogStreamChannel>,
        minLogLevel: ondewo_nlu_common_pb.LogSeverity,
        logLevelsList: Array<ondewo_nlu_common_pb.LogSeverity>,
        includeUnleveledLines?: boolean,
        text?: string,
        regex?: string,
        emitterPrefixesList: Array<string>,
        threadNamesList: Array<string>,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CallLogStream extends jspb.Message { 
    getName(): string;
    setName(value: string): CallLogStream;
    getContainerName(): string;
    setContainerName(value: string): CallLogStream;
    getContainerId(): string;
    setContainerId(value: string): CallLogStream;
    getChannel(): LogStreamChannel;
    setChannel(value: LogStreamChannel): CallLogStream;
    getProjectId(): string;
    setProjectId(value: string): CallLogStream;
    getVoipCallName(): string;
    setVoipCallName(value: string): CallLogStream;
    getCallType(): ondewo_vtsi_calls_pb.CallType;
    setCallType(value: ondewo_vtsi_calls_pb.CallType): CallLogStream;
    getSipAccount(): string;
    setSipAccount(value: string): CallLogStream;
    getSipPort(): number;
    setSipPort(value: number): CallLogStream;
    getCsiPort(): number;
    setCsiPort(value: number): CallLogStream;
    getAsteriskPort(): number;
    setAsteriskPort(value: number): CallLogStream;
    getImage(): string;
    setImage(value: string): CallLogStream;
    getCaptureState(): LogCaptureState;
    setCaptureState(value: LogCaptureState): CallLogStream;
    getCaptureError(): string;
    setCaptureError(value: string): CallLogStream;

    hasCaptureStartedAt(): boolean;
    clearCaptureStartedAt(): void;
    getCaptureStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCaptureStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): CallLogStream;

    hasCaptureFinishedAt(): boolean;
    clearCaptureFinishedAt(): void;
    getCaptureFinishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCaptureFinishedAt(value?: google_protobuf_timestamp_pb.Timestamp): CallLogStream;
    getPartialCapture(): boolean;
    setPartialCapture(value: boolean): CallLogStream;
    getMinAvailableSeq(): number;
    setMinAvailableSeq(value: number): CallLogStream;
    getMaxAvailableSeq(): number;
    setMaxAvailableSeq(value: number): CallLogStream;
    getLineCount(): number;
    setLineCount(value: number): CallLogStream;
    getDroppedLineCount(): number;
    setDroppedLineCount(value: number): CallLogStream;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallLogStream.AsObject;
    static toObject(includeInstance: boolean, msg: CallLogStream): CallLogStream.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallLogStream, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallLogStream;
    static deserializeBinaryFromReader(message: CallLogStream, reader: jspb.BinaryReader): CallLogStream;
}

export namespace CallLogStream {
    export type AsObject = {
        name: string,
        containerName: string,
        containerId: string,
        channel: LogStreamChannel,
        projectId: string,
        voipCallName: string,
        callType: ondewo_vtsi_calls_pb.CallType,
        sipAccount: string,
        sipPort: number,
        csiPort: number,
        asteriskPort: number,
        image: string,
        captureState: LogCaptureState,
        captureError: string,
        captureStartedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        captureFinishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        partialCapture: boolean,
        minAvailableSeq: number,
        maxAvailableSeq: number,
        lineCount: number,
        droppedLineCount: number,
    }
}

export class StreamCallLogsRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): StreamCallLogsRequest;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): CallLogFilter | undefined;
    setFilter(value?: CallLogFilter): StreamCallLogsRequest;

    hasTailLines(): boolean;
    clearTailLines(): void;
    getTailLines(): number | undefined;
    setTailLines(value: number): StreamCallLogsRequest;

    hasResumeToken(): boolean;
    clearResumeToken(): void;
    getResumeToken(): string | undefined;
    setResumeToken(value: string): StreamCallLogsRequest;

    hasAfterSeq(): boolean;
    clearAfterSeq(): void;
    getAfterSeq(): number | undefined;
    setAfterSeq(value: number): StreamCallLogsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamCallLogsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamCallLogsRequest): StreamCallLogsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamCallLogsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamCallLogsRequest;
    static deserializeBinaryFromReader(message: StreamCallLogsRequest, reader: jspb.BinaryReader): StreamCallLogsRequest;
}

export namespace StreamCallLogsRequest {
    export type AsObject = {
        vtsiProjectName: string,
        filter?: CallLogFilter.AsObject,
        tailLines?: number,
        resumeToken?: string,
        afterSeq?: number,
    }
}

export class StreamCallLogsResponse extends jspb.Message { 
    clearLogEntriesList(): void;
    getLogEntriesList(): Array<CallLogEntry>;
    setLogEntriesList(value: Array<CallLogEntry>): StreamCallLogsResponse;
    addLogEntries(value?: CallLogEntry, index?: number): CallLogEntry;
    getCaptureState(): LogCaptureState;
    setCaptureState(value: LogCaptureState): StreamCallLogsResponse;
    getCaptureError(): string;
    setCaptureError(value: string): StreamCallLogsResponse;
    getDroppedLineCount(): number;
    setDroppedLineCount(value: number): StreamCallLogsResponse;
    getResumeToken(): string;
    setResumeToken(value: string): StreamCallLogsResponse;
    getEndReason(): string;
    setEndReason(value: string): StreamCallLogsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamCallLogsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StreamCallLogsResponse): StreamCallLogsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamCallLogsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamCallLogsResponse;
    static deserializeBinaryFromReader(message: StreamCallLogsResponse, reader: jspb.BinaryReader): StreamCallLogsResponse;
}

export namespace StreamCallLogsResponse {
    export type AsObject = {
        logEntriesList: Array<CallLogEntry.AsObject>,
        captureState: LogCaptureState,
        captureError: string,
        droppedLineCount: number,
        resumeToken: string,
        endReason: string,
    }
}

export class ListCallLogsRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): ListCallLogsRequest;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): CallLogFilter | undefined;
    setFilter(value?: CallLogFilter): ListCallLogsRequest;

    hasMaxLines(): boolean;
    clearMaxLines(): void;
    getMaxLines(): number | undefined;
    setMaxLines(value: number): ListCallLogsRequest;

    hasBeforeSeq(): boolean;
    clearBeforeSeq(): void;
    getBeforeSeq(): number | undefined;
    setBeforeSeq(value: number): ListCallLogsRequest;

    hasAfterSeq(): boolean;
    clearAfterSeq(): void;
    getAfterSeq(): number | undefined;
    setAfterSeq(value: number): ListCallLogsRequest;

    hasResumeToken(): boolean;
    clearResumeToken(): void;
    getResumeToken(): string | undefined;
    setResumeToken(value: string): ListCallLogsRequest;

    hasOldestFirst(): boolean;
    clearOldestFirst(): void;
    getOldestFirst(): boolean | undefined;
    setOldestFirst(value: boolean): ListCallLogsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCallLogsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListCallLogsRequest): ListCallLogsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCallLogsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCallLogsRequest;
    static deserializeBinaryFromReader(message: ListCallLogsRequest, reader: jspb.BinaryReader): ListCallLogsRequest;
}

export namespace ListCallLogsRequest {
    export type AsObject = {
        vtsiProjectName: string,
        filter?: CallLogFilter.AsObject,
        maxLines?: number,
        beforeSeq?: number,
        afterSeq?: number,
        resumeToken?: string,
        oldestFirst?: boolean,
    }
}

export class ListCallLogsResponse extends jspb.Message { 
    clearLogEntriesList(): void;
    getLogEntriesList(): Array<CallLogEntry>;
    setLogEntriesList(value: Array<CallLogEntry>): ListCallLogsResponse;
    addLogEntries(value?: CallLogEntry, index?: number): CallLogEntry;
    getTruncated(): boolean;
    setTruncated(value: boolean): ListCallLogsResponse;
    getMinAvailableSeq(): number;
    setMinAvailableSeq(value: number): ListCallLogsResponse;
    getMaxAvailableSeq(): number;
    setMaxAvailableSeq(value: number): ListCallLogsResponse;
    getHasMoreOlder(): boolean;
    setHasMoreOlder(value: boolean): ListCallLogsResponse;
    getHasMoreNewer(): boolean;
    setHasMoreNewer(value: boolean): ListCallLogsResponse;
    getNextResumeToken(): string;
    setNextResumeToken(value: string): ListCallLogsResponse;
    clearScopeLimitedFiltersList(): void;
    getScopeLimitedFiltersList(): Array<CallLogFilterField>;
    setScopeLimitedFiltersList(value: Array<CallLogFilterField>): ListCallLogsResponse;
    addScopeLimitedFilters(value: CallLogFilterField, index?: number): CallLogFilterField;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCallLogsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListCallLogsResponse): ListCallLogsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCallLogsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCallLogsResponse;
    static deserializeBinaryFromReader(message: ListCallLogsResponse, reader: jspb.BinaryReader): ListCallLogsResponse;
}

export namespace ListCallLogsResponse {
    export type AsObject = {
        logEntriesList: Array<CallLogEntry.AsObject>,
        truncated: boolean,
        minAvailableSeq: number,
        maxAvailableSeq: number,
        hasMoreOlder: boolean,
        hasMoreNewer: boolean,
        nextResumeToken: string,
        scopeLimitedFiltersList: Array<CallLogFilterField>,
    }
}

export class GetCallLogStreamRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): GetCallLogStreamRequest;
    getName(): string;
    setName(value: string): GetCallLogStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCallLogStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCallLogStreamRequest): GetCallLogStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCallLogStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCallLogStreamRequest;
    static deserializeBinaryFromReader(message: GetCallLogStreamRequest, reader: jspb.BinaryReader): GetCallLogStreamRequest;
}

export namespace GetCallLogStreamRequest {
    export type AsObject = {
        vtsiProjectName: string,
        name: string,
    }
}

export class ListCallLogStreamsRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): ListCallLogStreamsRequest;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): CallLogFilter | undefined;
    setFilter(value?: CallLogFilter): ListCallLogStreamsRequest;

    hasPageToken(): boolean;
    clearPageToken(): void;
    getPageToken(): string | undefined;
    setPageToken(value: string): ListCallLogStreamsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCallLogStreamsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListCallLogStreamsRequest): ListCallLogStreamsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCallLogStreamsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCallLogStreamsRequest;
    static deserializeBinaryFromReader(message: ListCallLogStreamsRequest, reader: jspb.BinaryReader): ListCallLogStreamsRequest;
}

export namespace ListCallLogStreamsRequest {
    export type AsObject = {
        vtsiProjectName: string,
        filter?: CallLogFilter.AsObject,
        pageToken?: string,
    }
}

export class ListCallLogStreamsResponse extends jspb.Message { 
    clearLogStreamsList(): void;
    getLogStreamsList(): Array<CallLogStream>;
    setLogStreamsList(value: Array<CallLogStream>): ListCallLogStreamsResponse;
    addLogStreams(value?: CallLogStream, index?: number): CallLogStream;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListCallLogStreamsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCallLogStreamsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListCallLogStreamsResponse): ListCallLogStreamsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCallLogStreamsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCallLogStreamsResponse;
    static deserializeBinaryFromReader(message: ListCallLogStreamsResponse, reader: jspb.BinaryReader): ListCallLogStreamsResponse;
}

export namespace ListCallLogStreamsResponse {
    export type AsObject = {
        logStreamsList: Array<CallLogStream.AsObject>,
        nextPageToken: string,
    }
}

export class DeleteCallLogsRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): DeleteCallLogsRequest;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): CallLogFilter | undefined;
    setFilter(value?: CallLogFilter): DeleteCallLogsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteCallLogsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteCallLogsRequest): DeleteCallLogsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteCallLogsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteCallLogsRequest;
    static deserializeBinaryFromReader(message: DeleteCallLogsRequest, reader: jspb.BinaryReader): DeleteCallLogsRequest;
}

export namespace DeleteCallLogsRequest {
    export type AsObject = {
        vtsiProjectName: string,
        filter?: CallLogFilter.AsObject,
    }
}

export class DeleteCallLogsResponse extends jspb.Message { 
    getDeletedLogEntryCount(): number;
    setDeletedLogEntryCount(value: number): DeleteCallLogsResponse;
    getDeletedLogStreamCount(): number;
    setDeletedLogStreamCount(value: number): DeleteCallLogsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteCallLogsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteCallLogsResponse): DeleteCallLogsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteCallLogsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteCallLogsResponse;
    static deserializeBinaryFromReader(message: DeleteCallLogsResponse, reader: jspb.BinaryReader): DeleteCallLogsResponse;
}

export namespace DeleteCallLogsResponse {
    export type AsObject = {
        deletedLogEntryCount: number,
        deletedLogStreamCount: number,
    }
}

export enum LogSource {
    LOG_SOURCE_UNSPECIFIED = 0,
    LOG_SOURCE_SIP = 1,
    LOG_SOURCE_CSI = 2,
    LOG_SOURCE_ASTERISK = 3,
    LOG_SOURCE_PULSEAUDIO = 4,
    LOG_SOURCE_SYSTEM = 5,
}

export enum LogStreamChannel {
    LOG_STREAM_CHANNEL_UNSPECIFIED = 0,
    LOG_STREAM_CHANNEL_STDOUT = 1,
    LOG_STREAM_CHANNEL_STDERR = 2,
}

export enum LogCaptureState {
    LOG_CAPTURE_STATE_UNSPECIFIED = 0,
    LOG_CAPTURE_STATE_CAPTURING = 1,
    LOG_CAPTURE_STATE_STOPPED = 2,
    LOG_CAPTURE_STATE_FAILED = 3,
    LOG_CAPTURE_STATE_DETACHED = 4,
}

export enum CallLogFilterField {
    CALL_LOG_FILTER_FIELD_UNSPECIFIED = 0,
    CALL_LOG_FILTER_FIELD_TEXT = 1,
    CALL_LOG_FILTER_FIELD_REGEX = 2,
    CALL_LOG_FILTER_FIELD_LOG_SOURCES = 3,
    CALL_LOG_FILTER_FIELD_CHANNELS = 4,
    CALL_LOG_FILTER_FIELD_EMITTER_PREFIXES = 5,
    CALL_LOG_FILTER_FIELD_THREAD_NAMES = 6,
    CALL_LOG_FILTER_FIELD_SIP_HEADERS = 7,
}
