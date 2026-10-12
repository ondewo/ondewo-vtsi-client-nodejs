// package: ondewo.vtsi
// file: ondewo/vtsi/campaigns.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_sip_sip_pb from "../../ondewo/sip/sip_pb";
import * as ondewo_vtsi_call_configs_pb from "../../ondewo/vtsi/call_configs_pb";

export class Campaign extends jspb.Message { 
    getName(): string;
    setName(value: string): Campaign;
    getCampaignId(): string;
    setCampaignId(value: string): Campaign;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): Campaign;
    getDisplayName(): string;
    setDisplayName(value: string): Campaign;
    getMaxParallelCalls(): number;
    setMaxParallelCalls(value: number): Campaign;
    getMaxAttempts(): number;
    setMaxAttempts(value: number): Campaign;

    hasRetryDelay(): boolean;
    clearRetryDelay(): void;
    getRetryDelay(): google_protobuf_duration_pb.Duration | undefined;
    setRetryDelay(value?: google_protobuf_duration_pb.Duration): Campaign;
    getState(): CampaignState;
    setState(value: CampaignState): Campaign;
    getStateReason(): string;
    setStateReason(value: string): Campaign;

    hasStatistics(): boolean;
    clearStatistics(): void;
    getStatistics(): CampaignStatistics | undefined;
    setStatistics(value?: CampaignStatistics): Campaign;
    getCreatedBy(): string;
    setCreatedBy(value: string): Campaign;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Campaign;
    getModifiedBy(): string;
    setModifiedBy(value: string): Campaign;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Campaign;

    hasStartedAt(): boolean;
    clearStartedAt(): void;
    getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): Campaign;

    hasStoppedAt(): boolean;
    clearStoppedAt(): void;
    getStoppedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStoppedAt(value?: google_protobuf_timestamp_pb.Timestamp): Campaign;

    hasCompletedAt(): boolean;
    clearCompletedAt(): void;
    getCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): Campaign;

    hasCampaignCommonServicesConfig(): boolean;
    clearCampaignCommonServicesConfig(): void;
    getCampaignCommonServicesConfig(): ondewo_vtsi_call_configs_pb.CommonServicesConfig | undefined;
    setCampaignCommonServicesConfig(value?: ondewo_vtsi_call_configs_pb.CommonServicesConfig): Campaign;

    hasCampaignSipCallerConfig(): boolean;
    clearCampaignSipCallerConfig(): void;
    getCampaignSipCallerConfig(): ondewo_vtsi_call_configs_pb.SipCallerConfig | undefined;
    setCampaignSipCallerConfig(value?: ondewo_vtsi_call_configs_pb.SipCallerConfig): Campaign;
    clearCampaignCallersList(): void;
    getCampaignCallersList(): Array<string>;
    setCampaignCallersList(value: Array<string>): Campaign;
    addCampaignCallers(value: string, index?: number): string;
    getCampaignCallersTruncated(): boolean;
    setCampaignCallersTruncated(value: boolean): Campaign;

    hasCallingWindow(): boolean;
    clearCallingWindow(): void;
    getCallingWindow(): CampaignCallingWindow | undefined;
    setCallingWindow(value?: CampaignCallingWindow): Campaign;
    getOutsideCallingWindow(): boolean;
    setOutsideCallingWindow(value: boolean): Campaign;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Campaign.AsObject;
    static toObject(includeInstance: boolean, msg: Campaign): Campaign.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Campaign, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Campaign;
    static deserializeBinaryFromReader(message: Campaign, reader: jspb.BinaryReader): Campaign;
}

export namespace Campaign {
    export type AsObject = {
        name: string,
        campaignId: string,
        vtsiProjectName: string,
        displayName: string,
        maxParallelCalls: number,
        maxAttempts: number,
        retryDelay?: google_protobuf_duration_pb.Duration.AsObject,
        state: CampaignState,
        stateReason: string,
        statistics?: CampaignStatistics.AsObject,
        createdBy: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedBy: string,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        stoppedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        completedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        campaignCommonServicesConfig?: ondewo_vtsi_call_configs_pb.CommonServicesConfig.AsObject,
        campaignSipCallerConfig?: ondewo_vtsi_call_configs_pb.SipCallerConfig.AsObject,
        campaignCallersList: Array<string>,
        campaignCallersTruncated: boolean,
        callingWindow?: CampaignCallingWindow.AsObject,
        outsideCallingWindow: boolean,
    }
}

export class CampaignCallingWindow extends jspb.Message { 
    getTimeZone(): string;
    setTimeZone(value: string): CampaignCallingWindow;
    clearSlotsList(): void;
    getSlotsList(): Array<CallingWindowSlot>;
    setSlotsList(value: Array<CallingWindowSlot>): CampaignCallingWindow;
    addSlots(value?: CallingWindowSlot, index?: number): CallingWindowSlot;

    hasNextWindowStart(): boolean;
    clearNextWindowStart(): void;
    getNextWindowStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setNextWindowStart(value?: google_protobuf_timestamp_pb.Timestamp): CampaignCallingWindow;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CampaignCallingWindow.AsObject;
    static toObject(includeInstance: boolean, msg: CampaignCallingWindow): CampaignCallingWindow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CampaignCallingWindow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CampaignCallingWindow;
    static deserializeBinaryFromReader(message: CampaignCallingWindow, reader: jspb.BinaryReader): CampaignCallingWindow;
}

export namespace CampaignCallingWindow {
    export type AsObject = {
        timeZone: string,
        slotsList: Array<CallingWindowSlot.AsObject>,
        nextWindowStart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CallingWindowSlot extends jspb.Message { 
    getDayOfWeek(): CallingWindowDayOfWeek;
    setDayOfWeek(value: CallingWindowDayOfWeek): CallingWindowSlot;
    getStartMinute(): number;
    setStartMinute(value: number): CallingWindowSlot;
    getEndMinute(): number;
    setEndMinute(value: number): CallingWindowSlot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallingWindowSlot.AsObject;
    static toObject(includeInstance: boolean, msg: CallingWindowSlot): CallingWindowSlot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallingWindowSlot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallingWindowSlot;
    static deserializeBinaryFromReader(message: CallingWindowSlot, reader: jspb.BinaryReader): CallingWindowSlot;
}

export namespace CallingWindowSlot {
    export type AsObject = {
        dayOfWeek: CallingWindowDayOfWeek,
        startMinute: number,
        endMinute: number,
    }
}

export class CampaignStatistics extends jspb.Message { 
    getCampaignName(): string;
    setCampaignName(value: string): CampaignStatistics;
    getTotal(): number;
    setTotal(value: number): CampaignStatistics;
    getNotStarted(): number;
    setNotStarted(value: number): CampaignStatistics;
    getInProgress(): number;
    setInProgress(value: number): CampaignStatistics;
    getRetryPending(): number;
    setRetryPending(value: number): CampaignStatistics;
    getCompleted(): number;
    setCompleted(value: number): CampaignStatistics;
    getFailed(): number;
    setFailed(value: number): CampaignStatistics;
    getCancelled(): number;
    setCancelled(value: number): CampaignStatistics;
    getTotalAttempts(): number;
    setTotalAttempts(value: number): CampaignStatistics;
    getProgressPercent(): number;
    setProgressPercent(value: number): CampaignStatistics;
    getScheduledNotDue(): number;
    setScheduledNotDue(value: number): CampaignStatistics;
    getCallsRetried(): number;
    setCallsRetried(value: number): CampaignStatistics;

    hasAverageConnectedDuration(): boolean;
    clearAverageConnectedDuration(): void;
    getAverageConnectedDuration(): google_protobuf_duration_pb.Duration | undefined;
    setAverageConnectedDuration(value?: google_protobuf_duration_pb.Duration): CampaignStatistics;
    getAnsweringMachineDetected(): number;
    setAnsweringMachineDetected(value: number): CampaignStatistics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CampaignStatistics.AsObject;
    static toObject(includeInstance: boolean, msg: CampaignStatistics): CampaignStatistics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CampaignStatistics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CampaignStatistics;
    static deserializeBinaryFromReader(message: CampaignStatistics, reader: jspb.BinaryReader): CampaignStatistics;
}

export namespace CampaignStatistics {
    export type AsObject = {
        campaignName: string,
        total: number,
        notStarted: number,
        inProgress: number,
        retryPending: number,
        completed: number,
        failed: number,
        cancelled: number,
        totalAttempts: number,
        progressPercent: number,
        scheduledNotDue: number,
        callsRetried: number,
        averageConnectedDuration?: google_protobuf_duration_pb.Duration.AsObject,
        answeringMachineDetected: number,
    }
}

export class CampaignCallAttempt extends jspb.Message { 
    getAttemptNumber(): number;
    setAttemptNumber(value: number): CampaignCallAttempt;
    getCallerName(): string;
    setCallerName(value: string): CampaignCallAttempt;
    getCallName(): string;
    setCallName(value: string): CampaignCallAttempt;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): CampaignCallAttempt;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): CampaignCallAttempt;
    getOutcome(): CampaignCallAttemptOutcome;
    setOutcome(value: CampaignCallAttemptOutcome): CampaignCallAttempt;
    getSipStatusType(): ondewo_sip_sip_pb.SipStatus.StatusType;
    setSipStatusType(value: ondewo_sip_sip_pb.SipStatus.StatusType): CampaignCallAttempt;
    getSipStatusDescription(): string;
    setSipStatusDescription(value: string): CampaignCallAttempt;
    getErrorMessage(): string;
    setErrorMessage(value: string): CampaignCallAttempt;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CampaignCallAttempt.AsObject;
    static toObject(includeInstance: boolean, msg: CampaignCallAttempt): CampaignCallAttempt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CampaignCallAttempt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CampaignCallAttempt;
    static deserializeBinaryFromReader(message: CampaignCallAttempt, reader: jspb.BinaryReader): CampaignCallAttempt;
}

export namespace CampaignCallAttempt {
    export type AsObject = {
        attemptNumber: number,
        callerName: string,
        callName: string,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        outcome: CampaignCallAttemptOutcome,
        sipStatusType: ondewo_sip_sip_pb.SipStatus.StatusType,
        sipStatusDescription: string,
        errorMessage: string,
    }
}

export class CampaignCall extends jspb.Message { 
    getName(): string;
    setName(value: string): CampaignCall;
    getCampaignName(): string;
    setCampaignName(value: string): CampaignCall;
    getPosition(): number;
    setPosition(value: number): CampaignCall;
    getState(): CampaignCallState;
    setState(value: CampaignCallState): CampaignCall;
    getPhoneNumber(): string;
    setPhoneNumber(value: string): CampaignCall;
    getSource(): CampaignCallSource;
    setSource(value: CampaignCallSource): CampaignCall;
    getScheduledCallerName(): string;
    setScheduledCallerName(value: string): CampaignCall;

    hasScheduledTime(): boolean;
    clearScheduledTime(): void;
    getScheduledTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setScheduledTime(value?: google_protobuf_timestamp_pb.Timestamp): CampaignCall;
    getAttempts(): number;
    setAttempts(value: number): CampaignCall;
    getMaxAttempts(): number;
    setMaxAttempts(value: number): CampaignCall;
    getCallerName(): string;
    setCallerName(value: string): CampaignCall;
    getCallName(): string;
    setCallName(value: string): CampaignCall;
    getSipStatusType(): ondewo_sip_sip_pb.SipStatus.StatusType;
    setSipStatusType(value: ondewo_sip_sip_pb.SipStatus.StatusType): CampaignCall;
    getSipStatusDescription(): string;
    setSipStatusDescription(value: string): CampaignCall;
    getLastError(): string;
    setLastError(value: string): CampaignCall;

    hasNextAttemptTime(): boolean;
    clearNextAttemptTime(): void;
    getNextAttemptTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setNextAttemptTime(value?: google_protobuf_timestamp_pb.Timestamp): CampaignCall;

    hasFirstAttemptTime(): boolean;
    clearFirstAttemptTime(): void;
    getFirstAttemptTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFirstAttemptTime(value?: google_protobuf_timestamp_pb.Timestamp): CampaignCall;

    hasLastAttemptTime(): boolean;
    clearLastAttemptTime(): void;
    getLastAttemptTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastAttemptTime(value?: google_protobuf_timestamp_pb.Timestamp): CampaignCall;

    hasFinishTime(): boolean;
    clearFinishTime(): void;
    getFinishTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFinishTime(value?: google_protobuf_timestamp_pb.Timestamp): CampaignCall;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): CampaignCall;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): CampaignCall;
    clearAttemptHistoryList(): void;
    getAttemptHistoryList(): Array<CampaignCallAttempt>;
    setAttemptHistoryList(value: Array<CampaignCallAttempt>): CampaignCall;
    addAttemptHistory(value?: CampaignCallAttempt, index?: number): CampaignCallAttempt;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CampaignCall.AsObject;
    static toObject(includeInstance: boolean, msg: CampaignCall): CampaignCall.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CampaignCall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CampaignCall;
    static deserializeBinaryFromReader(message: CampaignCall, reader: jspb.BinaryReader): CampaignCall;
}

export namespace CampaignCall {
    export type AsObject = {
        name: string,
        campaignName: string,
        position: number,
        state: CampaignCallState,
        phoneNumber: string,
        source: CampaignCallSource,
        scheduledCallerName: string,
        scheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        attempts: number,
        maxAttempts: number,
        callerName: string,
        callName: string,
        sipStatusType: ondewo_sip_sip_pb.SipStatus.StatusType,
        sipStatusDescription: string,
        lastError: string,
        nextAttemptTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        firstAttemptTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        lastAttemptTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        finishTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        attemptHistoryList: Array<CampaignCallAttempt.AsObject>,
    }
}

export class CampaignAssignment extends jspb.Message { 

    hasCampaignName(): boolean;
    clearCampaignName(): void;
    getCampaignName(): string;
    setCampaignName(value: string): CampaignAssignment;

    hasNewCampaign(): boolean;
    clearNewCampaign(): void;
    getNewCampaign(): Campaign | undefined;
    setNewCampaign(value?: Campaign): CampaignAssignment;

    hasDisplayName(): boolean;
    clearDisplayName(): void;
    getDisplayName(): string;
    setDisplayName(value: string): CampaignAssignment;
    getStartMode(): CampaignStartMode;
    setStartMode(value: CampaignStartMode): CampaignAssignment;

    getCampaignSelectorCase(): CampaignAssignment.CampaignSelectorCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CampaignAssignment.AsObject;
    static toObject(includeInstance: boolean, msg: CampaignAssignment): CampaignAssignment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CampaignAssignment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CampaignAssignment;
    static deserializeBinaryFromReader(message: CampaignAssignment, reader: jspb.BinaryReader): CampaignAssignment;
}

export namespace CampaignAssignment {
    export type AsObject = {
        campaignName: string,
        newCampaign?: Campaign.AsObject,
        displayName: string,
        startMode: CampaignStartMode,
    }

    export enum CampaignSelectorCase {
        CAMPAIGN_SELECTOR_NOT_SET = 0,
        CAMPAIGN_NAME = 1,
        NEW_CAMPAIGN = 2,
        DISPLAY_NAME = 5,
    }

}

export class CreateCampaignRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): CreateCampaignRequest;

    hasCampaign(): boolean;
    clearCampaign(): void;
    getCampaign(): Campaign | undefined;
    setCampaign(value?: Campaign): CreateCampaignRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): CreateCampaignRequest;
    getIdempotencyKey(): string;
    setIdempotencyKey(value: string): CreateCampaignRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCampaignRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCampaignRequest): CreateCampaignRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCampaignRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCampaignRequest;
    static deserializeBinaryFromReader(message: CreateCampaignRequest, reader: jspb.BinaryReader): CreateCampaignRequest;
}

export namespace CreateCampaignRequest {
    export type AsObject = {
        vtsiProjectName: string,
        campaign?: Campaign.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        idempotencyKey: string,
    }
}

export class GetCampaignRequest extends jspb.Message { 

    hasName(): boolean;
    clearName(): void;
    getName(): string;
    setName(value: string): GetCampaignRequest;

    hasDisplayName(): boolean;
    clearDisplayName(): void;
    getDisplayName(): string;
    setDisplayName(value: string): GetCampaignRequest;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): GetCampaignRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetCampaignRequest;

    getCampaignCase(): GetCampaignRequest.CampaignCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCampaignRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCampaignRequest): GetCampaignRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCampaignRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCampaignRequest;
    static deserializeBinaryFromReader(message: GetCampaignRequest, reader: jspb.BinaryReader): GetCampaignRequest;
}

export namespace GetCampaignRequest {
    export type AsObject = {
        name: string,
        displayName: string,
        vtsiProjectName: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }

    export enum CampaignCase {
        CAMPAIGN_NOT_SET = 0,
        NAME = 1,
        DISPLAY_NAME = 3,
    }

}

export class UpdateCampaignRequest extends jspb.Message { 

    hasCampaign(): boolean;
    clearCampaign(): void;
    getCampaign(): Campaign | undefined;
    setCampaign(value?: Campaign): UpdateCampaignRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateCampaignRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateCampaignRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCampaignRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCampaignRequest): UpdateCampaignRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCampaignRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCampaignRequest;
    static deserializeBinaryFromReader(message: UpdateCampaignRequest, reader: jspb.BinaryReader): UpdateCampaignRequest;
}

export namespace UpdateCampaignRequest {
    export type AsObject = {
        campaign?: Campaign.AsObject,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class DeleteCampaignRequest extends jspb.Message { 

    hasName(): boolean;
    clearName(): void;
    getName(): string;
    setName(value: string): DeleteCampaignRequest;

    hasDisplayName(): boolean;
    clearDisplayName(): void;
    getDisplayName(): string;
    setDisplayName(value: string): DeleteCampaignRequest;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): DeleteCampaignRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): DeleteCampaignRequest;
    getForce(): boolean;
    setForce(value: boolean): DeleteCampaignRequest;

    getCampaignCase(): DeleteCampaignRequest.CampaignCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteCampaignRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteCampaignRequest): DeleteCampaignRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteCampaignRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteCampaignRequest;
    static deserializeBinaryFromReader(message: DeleteCampaignRequest, reader: jspb.BinaryReader): DeleteCampaignRequest;
}

export namespace DeleteCampaignRequest {
    export type AsObject = {
        name: string,
        displayName: string,
        vtsiProjectName: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        force: boolean,
    }

    export enum CampaignCase {
        CAMPAIGN_NOT_SET = 0,
        NAME = 1,
        DISPLAY_NAME = 3,
    }

}

export class DeleteCampaignResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteCampaignResponse;
    getDeletedCampaignCallCount(): number;
    setDeletedCampaignCallCount(value: number): DeleteCampaignResponse;
    getCancelledScheduledCallerCount(): number;
    setCancelledScheduledCallerCount(value: number): DeleteCampaignResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteCampaignResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteCampaignResponse): DeleteCampaignResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteCampaignResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteCampaignResponse;
    static deserializeBinaryFromReader(message: DeleteCampaignResponse, reader: jspb.BinaryReader): DeleteCampaignResponse;
}

export namespace DeleteCampaignResponse {
    export type AsObject = {
        name: string,
        deletedCampaignCallCount: number,
        cancelledScheduledCallerCount: number,
    }
}

export class CampaignFilter extends jspb.Message { 
    clearStatesList(): void;
    getStatesList(): Array<CampaignState>;
    setStatesList(value: Array<CampaignState>): CampaignFilter;
    addStates(value: CampaignState, index?: number): CampaignState;
    getDisplayNameContains(): string;
    setDisplayNameContains(value: string): CampaignFilter;
    getDisplayName(): string;
    setDisplayName(value: string): CampaignFilter;

    hasCreatedAfter(): boolean;
    clearCreatedAfter(): void;
    getCreatedAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAfter(value?: google_protobuf_timestamp_pb.Timestamp): CampaignFilter;

    hasCreatedBefore(): boolean;
    clearCreatedBefore(): void;
    getCreatedBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedBefore(value?: google_protobuf_timestamp_pb.Timestamp): CampaignFilter;
    getCreatedBy(): string;
    setCreatedBy(value: string): CampaignFilter;

    hasModifiedSince(): boolean;
    clearModifiedSince(): void;
    getModifiedSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedSince(value?: google_protobuf_timestamp_pb.Timestamp): CampaignFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CampaignFilter.AsObject;
    static toObject(includeInstance: boolean, msg: CampaignFilter): CampaignFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CampaignFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CampaignFilter;
    static deserializeBinaryFromReader(message: CampaignFilter, reader: jspb.BinaryReader): CampaignFilter;
}

export namespace CampaignFilter {
    export type AsObject = {
        statesList: Array<CampaignState>,
        displayNameContains: string,
        displayName: string,
        createdAfter?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBefore?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        modifiedSince?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ListCampaignsRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): ListCampaignsRequest;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): CampaignFilter | undefined;
    setFilter(value?: CampaignFilter): ListCampaignsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListCampaignsRequest;

    hasPageToken(): boolean;
    clearPageToken(): void;
    getPageToken(): string | undefined;
    setPageToken(value: string): ListCampaignsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListCampaignsRequest;
    getOrderBy(): CampaignOrderBy;
    setOrderBy(value: CampaignOrderBy): ListCampaignsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCampaignsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListCampaignsRequest): ListCampaignsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCampaignsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCampaignsRequest;
    static deserializeBinaryFromReader(message: ListCampaignsRequest, reader: jspb.BinaryReader): ListCampaignsRequest;
}

export namespace ListCampaignsRequest {
    export type AsObject = {
        vtsiProjectName: string,
        filter?: CampaignFilter.AsObject,
        pageSize: number,
        pageToken?: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        orderBy: CampaignOrderBy,
    }
}

export class ListCampaignsResponse extends jspb.Message { 
    clearCampaignsList(): void;
    getCampaignsList(): Array<Campaign>;
    setCampaignsList(value: Array<Campaign>): ListCampaignsResponse;
    addCampaigns(value?: Campaign, index?: number): Campaign;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListCampaignsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCampaignsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListCampaignsResponse): ListCampaignsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCampaignsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCampaignsResponse;
    static deserializeBinaryFromReader(message: ListCampaignsResponse, reader: jspb.BinaryReader): ListCampaignsResponse;
}

export namespace ListCampaignsResponse {
    export type AsObject = {
        campaignsList: Array<Campaign.AsObject>,
        nextPageToken: string,
    }
}

export class GetCampaignStatisticsRequest extends jspb.Message { 

    hasName(): boolean;
    clearName(): void;
    getName(): string;
    setName(value: string): GetCampaignStatisticsRequest;

    hasDisplayName(): boolean;
    clearDisplayName(): void;
    getDisplayName(): string;
    setDisplayName(value: string): GetCampaignStatisticsRequest;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): GetCampaignStatisticsRequest;

    getCampaignCase(): GetCampaignStatisticsRequest.CampaignCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCampaignStatisticsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCampaignStatisticsRequest): GetCampaignStatisticsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCampaignStatisticsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCampaignStatisticsRequest;
    static deserializeBinaryFromReader(message: GetCampaignStatisticsRequest, reader: jspb.BinaryReader): GetCampaignStatisticsRequest;
}

export namespace GetCampaignStatisticsRequest {
    export type AsObject = {
        name: string,
        displayName: string,
        vtsiProjectName: string,
    }

    export enum CampaignCase {
        CAMPAIGN_NOT_SET = 0,
        NAME = 1,
        DISPLAY_NAME = 3,
    }

}

export class ListCampaignCallsRequest extends jspb.Message { 

    hasCampaignName(): boolean;
    clearCampaignName(): void;
    getCampaignName(): string;
    setCampaignName(value: string): ListCampaignCallsRequest;

    hasDisplayName(): boolean;
    clearDisplayName(): void;
    getDisplayName(): string;
    setDisplayName(value: string): ListCampaignCallsRequest;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): ListCampaignCallsRequest;
    clearStatesList(): void;
    getStatesList(): Array<CampaignCallState>;
    setStatesList(value: Array<CampaignCallState>): ListCampaignCallsRequest;
    addStates(value: CampaignCallState, index?: number): CampaignCallState;
    getPhoneNumber(): string;
    setPhoneNumber(value: string): ListCampaignCallsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListCampaignCallsRequest;

    hasPageToken(): boolean;
    clearPageToken(): void;
    getPageToken(): string | undefined;
    setPageToken(value: string): ListCampaignCallsRequest;
    getIncludeAttempts(): boolean;
    setIncludeAttempts(value: boolean): ListCampaignCallsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListCampaignCallsRequest;
    clearPhoneNumbersList(): void;
    getPhoneNumbersList(): Array<string>;
    setPhoneNumbersList(value: Array<string>): ListCampaignCallsRequest;
    addPhoneNumbers(value: string, index?: number): string;
    clearSourcesList(): void;
    getSourcesList(): Array<CampaignCallSource>;
    setSourcesList(value: Array<CampaignCallSource>): ListCampaignCallsRequest;
    addSources(value: CampaignCallSource, index?: number): CampaignCallSource;

    hasFinishTimeMin(): boolean;
    clearFinishTimeMin(): void;
    getFinishTimeMin(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFinishTimeMin(value?: google_protobuf_timestamp_pb.Timestamp): ListCampaignCallsRequest;

    hasFinishTimeMax(): boolean;
    clearFinishTimeMax(): void;
    getFinishTimeMax(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFinishTimeMax(value?: google_protobuf_timestamp_pb.Timestamp): ListCampaignCallsRequest;

    hasModifiedSince(): boolean;
    clearModifiedSince(): void;
    getModifiedSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedSince(value?: google_protobuf_timestamp_pb.Timestamp): ListCampaignCallsRequest;
    getMinAttempts(): number;
    setMinAttempts(value: number): ListCampaignCallsRequest;
    clearCampaignCallNamesList(): void;
    getCampaignCallNamesList(): Array<string>;
    setCampaignCallNamesList(value: Array<string>): ListCampaignCallsRequest;
    addCampaignCallNames(value: string, index?: number): string;

    getCampaignCase(): ListCampaignCallsRequest.CampaignCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCampaignCallsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListCampaignCallsRequest): ListCampaignCallsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCampaignCallsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCampaignCallsRequest;
    static deserializeBinaryFromReader(message: ListCampaignCallsRequest, reader: jspb.BinaryReader): ListCampaignCallsRequest;
}

export namespace ListCampaignCallsRequest {
    export type AsObject = {
        campaignName: string,
        displayName: string,
        vtsiProjectName: string,
        statesList: Array<CampaignCallState>,
        phoneNumber: string,
        pageSize: number,
        pageToken?: string,
        includeAttempts: boolean,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        phoneNumbersList: Array<string>,
        sourcesList: Array<CampaignCallSource>,
        finishTimeMin?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        finishTimeMax?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedSince?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        minAttempts: number,
        campaignCallNamesList: Array<string>,
    }

    export enum CampaignCase {
        CAMPAIGN_NOT_SET = 0,
        CAMPAIGN_NAME = 1,
        DISPLAY_NAME = 8,
    }

}

export class ListCampaignCallsResponse extends jspb.Message { 
    clearCampaignCallsList(): void;
    getCampaignCallsList(): Array<CampaignCall>;
    setCampaignCallsList(value: Array<CampaignCall>): ListCampaignCallsResponse;
    addCampaignCalls(value?: CampaignCall, index?: number): CampaignCall;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListCampaignCallsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCampaignCallsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListCampaignCallsResponse): ListCampaignCallsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCampaignCallsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCampaignCallsResponse;
    static deserializeBinaryFromReader(message: ListCampaignCallsResponse, reader: jspb.BinaryReader): ListCampaignCallsResponse;
}

export namespace ListCampaignCallsResponse {
    export type AsObject = {
        campaignCallsList: Array<CampaignCall.AsObject>,
        nextPageToken: string,
    }
}

export class StartCampaignRequest extends jspb.Message { 

    hasName(): boolean;
    clearName(): void;
    getName(): string;
    setName(value: string): StartCampaignRequest;

    hasDisplayName(): boolean;
    clearDisplayName(): void;
    getDisplayName(): string;
    setDisplayName(value: string): StartCampaignRequest;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): StartCampaignRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): StartCampaignRequest;

    getCampaignCase(): StartCampaignRequest.CampaignCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartCampaignRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartCampaignRequest): StartCampaignRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartCampaignRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartCampaignRequest;
    static deserializeBinaryFromReader(message: StartCampaignRequest, reader: jspb.BinaryReader): StartCampaignRequest;
}

export namespace StartCampaignRequest {
    export type AsObject = {
        name: string,
        displayName: string,
        vtsiProjectName: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }

    export enum CampaignCase {
        CAMPAIGN_NOT_SET = 0,
        NAME = 1,
        DISPLAY_NAME = 3,
    }

}

export class StopCampaignRequest extends jspb.Message { 

    hasName(): boolean;
    clearName(): void;
    getName(): string;
    setName(value: string): StopCampaignRequest;

    hasDisplayName(): boolean;
    clearDisplayName(): void;
    getDisplayName(): string;
    setDisplayName(value: string): StopCampaignRequest;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): StopCampaignRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): StopCampaignRequest;

    getCampaignCase(): StopCampaignRequest.CampaignCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopCampaignRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopCampaignRequest): StopCampaignRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopCampaignRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopCampaignRequest;
    static deserializeBinaryFromReader(message: StopCampaignRequest, reader: jspb.BinaryReader): StopCampaignRequest;
}

export namespace StopCampaignRequest {
    export type AsObject = {
        name: string,
        displayName: string,
        vtsiProjectName: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }

    export enum CampaignCase {
        CAMPAIGN_NOT_SET = 0,
        NAME = 1,
        DISPLAY_NAME = 3,
    }

}

export class HardStopCampaignRequest extends jspb.Message { 

    hasName(): boolean;
    clearName(): void;
    getName(): string;
    setName(value: string): HardStopCampaignRequest;

    hasDisplayName(): boolean;
    clearDisplayName(): void;
    getDisplayName(): string;
    setDisplayName(value: string): HardStopCampaignRequest;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): HardStopCampaignRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): HardStopCampaignRequest;

    getCampaignCase(): HardStopCampaignRequest.CampaignCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HardStopCampaignRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HardStopCampaignRequest): HardStopCampaignRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HardStopCampaignRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HardStopCampaignRequest;
    static deserializeBinaryFromReader(message: HardStopCampaignRequest, reader: jspb.BinaryReader): HardStopCampaignRequest;
}

export namespace HardStopCampaignRequest {
    export type AsObject = {
        name: string,
        displayName: string,
        vtsiProjectName: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }

    export enum CampaignCase {
        CAMPAIGN_NOT_SET = 0,
        NAME = 1,
        DISPLAY_NAME = 3,
    }

}

export class ResumeCampaignRequest extends jspb.Message { 

    hasName(): boolean;
    clearName(): void;
    getName(): string;
    setName(value: string): ResumeCampaignRequest;

    hasDisplayName(): boolean;
    clearDisplayName(): void;
    getDisplayName(): string;
    setDisplayName(value: string): ResumeCampaignRequest;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): ResumeCampaignRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ResumeCampaignRequest;

    getCampaignCase(): ResumeCampaignRequest.CampaignCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResumeCampaignRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ResumeCampaignRequest): ResumeCampaignRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResumeCampaignRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResumeCampaignRequest;
    static deserializeBinaryFromReader(message: ResumeCampaignRequest, reader: jspb.BinaryReader): ResumeCampaignRequest;
}

export namespace ResumeCampaignRequest {
    export type AsObject = {
        name: string,
        displayName: string,
        vtsiProjectName: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }

    export enum CampaignCase {
        CAMPAIGN_NOT_SET = 0,
        NAME = 1,
        DISPLAY_NAME = 3,
    }

}

export class StreamCampaignStatusRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): StreamCampaignStatusRequest;
    clearCampaignNamesList(): void;
    getCampaignNamesList(): Array<string>;
    setCampaignNamesList(value: Array<string>): StreamCampaignStatusRequest;
    addCampaignNames(value: string, index?: number): string;
    clearCampaignDisplayNamesList(): void;
    getCampaignDisplayNamesList(): Array<string>;
    setCampaignDisplayNamesList(value: Array<string>): StreamCampaignStatusRequest;
    addCampaignDisplayNames(value: string, index?: number): string;
    getIncludeCalls(): boolean;
    setIncludeCalls(value: boolean): StreamCampaignStatusRequest;
    clearStatesList(): void;
    getStatesList(): Array<CampaignState>;
    setStatesList(value: Array<CampaignState>): StreamCampaignStatusRequest;
    addStates(value: CampaignState, index?: number): CampaignState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamCampaignStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamCampaignStatusRequest): StreamCampaignStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamCampaignStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamCampaignStatusRequest;
    static deserializeBinaryFromReader(message: StreamCampaignStatusRequest, reader: jspb.BinaryReader): StreamCampaignStatusRequest;
}

export namespace StreamCampaignStatusRequest {
    export type AsObject = {
        vtsiProjectName: string,
        campaignNamesList: Array<string>,
        campaignDisplayNamesList: Array<string>,
        includeCalls: boolean,
        statesList: Array<CampaignState>,
    }
}

export class StreamCampaignStatusResponse extends jspb.Message { 
    clearCampaignsList(): void;
    getCampaignsList(): Array<Campaign>;
    setCampaignsList(value: Array<Campaign>): StreamCampaignStatusResponse;
    addCampaigns(value?: Campaign, index?: number): Campaign;
    clearCampaignCallsList(): void;
    getCampaignCallsList(): Array<CampaignCall>;
    setCampaignCallsList(value: Array<CampaignCall>): StreamCampaignStatusResponse;
    addCampaignCalls(value?: CampaignCall, index?: number): CampaignCall;
    clearDeletedCampaignNamesList(): void;
    getDeletedCampaignNamesList(): Array<string>;
    setDeletedCampaignNamesList(value: Array<string>): StreamCampaignStatusResponse;
    addDeletedCampaignNames(value: string, index?: number): string;
    getSnapshot(): boolean;
    setSnapshot(value: boolean): StreamCampaignStatusResponse;
    getEndReason(): string;
    setEndReason(value: string): StreamCampaignStatusResponse;
    getEndReasonType(): StreamEndReason;
    setEndReasonType(value: StreamEndReason): StreamCampaignStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamCampaignStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StreamCampaignStatusResponse): StreamCampaignStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamCampaignStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamCampaignStatusResponse;
    static deserializeBinaryFromReader(message: StreamCampaignStatusResponse, reader: jspb.BinaryReader): StreamCampaignStatusResponse;
}

export namespace StreamCampaignStatusResponse {
    export type AsObject = {
        campaignsList: Array<Campaign.AsObject>,
        campaignCallsList: Array<CampaignCall.AsObject>,
        deletedCampaignNamesList: Array<string>,
        snapshot: boolean,
        endReason: string,
        endReasonType: StreamEndReason,
    }
}

export class GetCampaignCallRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetCampaignCallRequest;
    getIncludeAttempts(): boolean;
    setIncludeAttempts(value: boolean): GetCampaignCallRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetCampaignCallRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCampaignCallRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCampaignCallRequest): GetCampaignCallRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCampaignCallRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCampaignCallRequest;
    static deserializeBinaryFromReader(message: GetCampaignCallRequest, reader: jspb.BinaryReader): GetCampaignCallRequest;
}

export namespace GetCampaignCallRequest {
    export type AsObject = {
        name: string,
        includeAttempts: boolean,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class CampaignCallRefusal extends jspb.Message { 
    getCampaignCallName(): string;
    setCampaignCallName(value: string): CampaignCallRefusal;
    getState(): CampaignCallState;
    setState(value: CampaignCallState): CampaignCallRefusal;
    getReason(): string;
    setReason(value: string): CampaignCallRefusal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CampaignCallRefusal.AsObject;
    static toObject(includeInstance: boolean, msg: CampaignCallRefusal): CampaignCallRefusal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CampaignCallRefusal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CampaignCallRefusal;
    static deserializeBinaryFromReader(message: CampaignCallRefusal, reader: jspb.BinaryReader): CampaignCallRefusal;
}

export namespace CampaignCallRefusal {
    export type AsObject = {
        campaignCallName: string,
        state: CampaignCallState,
        reason: string,
    }
}

export class CancelCampaignCallsRequest extends jspb.Message { 

    hasName(): boolean;
    clearName(): void;
    getName(): string;
    setName(value: string): CancelCampaignCallsRequest;

    hasDisplayName(): boolean;
    clearDisplayName(): void;
    getDisplayName(): string;
    setDisplayName(value: string): CancelCampaignCallsRequest;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): CancelCampaignCallsRequest;
    clearCampaignCallNamesList(): void;
    getCampaignCallNamesList(): Array<string>;
    setCampaignCallNamesList(value: Array<string>): CancelCampaignCallsRequest;
    addCampaignCallNames(value: string, index?: number): string;
    clearStatesList(): void;
    getStatesList(): Array<CampaignCallState>;
    setStatesList(value: Array<CampaignCallState>): CancelCampaignCallsRequest;
    addStates(value: CampaignCallState, index?: number): CampaignCallState;

    getCampaignCase(): CancelCampaignCallsRequest.CampaignCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelCampaignCallsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CancelCampaignCallsRequest): CancelCampaignCallsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelCampaignCallsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelCampaignCallsRequest;
    static deserializeBinaryFromReader(message: CancelCampaignCallsRequest, reader: jspb.BinaryReader): CancelCampaignCallsRequest;
}

export namespace CancelCampaignCallsRequest {
    export type AsObject = {
        name: string,
        displayName: string,
        vtsiProjectName: string,
        campaignCallNamesList: Array<string>,
        statesList: Array<CampaignCallState>,
    }

    export enum CampaignCase {
        CAMPAIGN_NOT_SET = 0,
        NAME = 1,
        DISPLAY_NAME = 2,
    }

}

export class CancelCampaignCallsResponse extends jspb.Message { 
    getCampaignName(): string;
    setCampaignName(value: string): CancelCampaignCallsResponse;
    clearCancelledCampaignCallNamesList(): void;
    getCancelledCampaignCallNamesList(): Array<string>;
    setCancelledCampaignCallNamesList(value: Array<string>): CancelCampaignCallsResponse;
    addCancelledCampaignCallNames(value: string, index?: number): string;
    clearRefusedList(): void;
    getRefusedList(): Array<CampaignCallRefusal>;
    setRefusedList(value: Array<CampaignCallRefusal>): CancelCampaignCallsResponse;
    addRefused(value?: CampaignCallRefusal, index?: number): CampaignCallRefusal;
    getRemainingCount(): number;
    setRemainingCount(value: number): CancelCampaignCallsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelCampaignCallsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CancelCampaignCallsResponse): CancelCampaignCallsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelCampaignCallsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelCampaignCallsResponse;
    static deserializeBinaryFromReader(message: CancelCampaignCallsResponse, reader: jspb.BinaryReader): CancelCampaignCallsResponse;
}

export namespace CancelCampaignCallsResponse {
    export type AsObject = {
        campaignName: string,
        cancelledCampaignCallNamesList: Array<string>,
        refusedList: Array<CampaignCallRefusal.AsObject>,
        remainingCount: number,
    }
}

export class RetryCampaignCallsRequest extends jspb.Message { 

    hasName(): boolean;
    clearName(): void;
    getName(): string;
    setName(value: string): RetryCampaignCallsRequest;

    hasDisplayName(): boolean;
    clearDisplayName(): void;
    getDisplayName(): string;
    setDisplayName(value: string): RetryCampaignCallsRequest;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): RetryCampaignCallsRequest;
    clearCampaignCallNamesList(): void;
    getCampaignCallNamesList(): Array<string>;
    setCampaignCallNamesList(value: Array<string>): RetryCampaignCallsRequest;
    addCampaignCallNames(value: string, index?: number): string;
    clearStatesList(): void;
    getStatesList(): Array<CampaignCallState>;
    setStatesList(value: Array<CampaignCallState>): RetryCampaignCallsRequest;
    addStates(value: CampaignCallState, index?: number): CampaignCallState;
    getAdditionalAttempts(): number;
    setAdditionalAttempts(value: number): RetryCampaignCallsRequest;

    hasNotBefore(): boolean;
    clearNotBefore(): void;
    getNotBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setNotBefore(value?: google_protobuf_timestamp_pb.Timestamp): RetryCampaignCallsRequest;

    getCampaignCase(): RetryCampaignCallsRequest.CampaignCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RetryCampaignCallsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RetryCampaignCallsRequest): RetryCampaignCallsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RetryCampaignCallsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RetryCampaignCallsRequest;
    static deserializeBinaryFromReader(message: RetryCampaignCallsRequest, reader: jspb.BinaryReader): RetryCampaignCallsRequest;
}

export namespace RetryCampaignCallsRequest {
    export type AsObject = {
        name: string,
        displayName: string,
        vtsiProjectName: string,
        campaignCallNamesList: Array<string>,
        statesList: Array<CampaignCallState>,
        additionalAttempts: number,
        notBefore?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum CampaignCase {
        CAMPAIGN_NOT_SET = 0,
        NAME = 1,
        DISPLAY_NAME = 2,
    }

}

export class RetryCampaignCallsResponse extends jspb.Message { 
    getCampaignName(): string;
    setCampaignName(value: string): RetryCampaignCallsResponse;
    clearRequeuedCampaignCallNamesList(): void;
    getRequeuedCampaignCallNamesList(): Array<string>;
    setRequeuedCampaignCallNamesList(value: Array<string>): RetryCampaignCallsResponse;
    addRequeuedCampaignCallNames(value: string, index?: number): string;
    clearRefusedList(): void;
    getRefusedList(): Array<CampaignCallRefusal>;
    setRefusedList(value: Array<CampaignCallRefusal>): RetryCampaignCallsResponse;
    addRefused(value?: CampaignCallRefusal, index?: number): CampaignCallRefusal;
    getRemainingCount(): number;
    setRemainingCount(value: number): RetryCampaignCallsResponse;
    getCampaignState(): CampaignState;
    setCampaignState(value: CampaignState): RetryCampaignCallsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RetryCampaignCallsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RetryCampaignCallsResponse): RetryCampaignCallsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RetryCampaignCallsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RetryCampaignCallsResponse;
    static deserializeBinaryFromReader(message: RetryCampaignCallsResponse, reader: jspb.BinaryReader): RetryCampaignCallsResponse;
}

export namespace RetryCampaignCallsResponse {
    export type AsObject = {
        campaignName: string,
        requeuedCampaignCallNamesList: Array<string>,
        refusedList: Array<CampaignCallRefusal.AsObject>,
        remainingCount: number,
        campaignState: CampaignState,
    }
}

export class CloneCampaignRequest extends jspb.Message { 

    hasSourceName(): boolean;
    clearSourceName(): void;
    getSourceName(): string;
    setSourceName(value: string): CloneCampaignRequest;

    hasSourceDisplayName(): boolean;
    clearSourceDisplayName(): void;
    getSourceDisplayName(): string;
    setSourceDisplayName(value: string): CloneCampaignRequest;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): CloneCampaignRequest;
    getNewDisplayName(): string;
    setNewDisplayName(value: string): CloneCampaignRequest;
    getIncludeCalls(): boolean;
    setIncludeCalls(value: boolean): CloneCampaignRequest;
    clearCallStatesList(): void;
    getCallStatesList(): Array<CampaignCallState>;
    setCallStatesList(value: Array<CampaignCallState>): CloneCampaignRequest;
    addCallStates(value: CampaignCallState, index?: number): CampaignCallState;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): CloneCampaignRequest;
    getIdempotencyKey(): string;
    setIdempotencyKey(value: string): CloneCampaignRequest;

    getSourceCase(): CloneCampaignRequest.SourceCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CloneCampaignRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CloneCampaignRequest): CloneCampaignRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CloneCampaignRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CloneCampaignRequest;
    static deserializeBinaryFromReader(message: CloneCampaignRequest, reader: jspb.BinaryReader): CloneCampaignRequest;
}

export namespace CloneCampaignRequest {
    export type AsObject = {
        sourceName: string,
        sourceDisplayName: string,
        vtsiProjectName: string,
        newDisplayName: string,
        includeCalls: boolean,
        callStatesList: Array<CampaignCallState>,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        idempotencyKey: string,
    }

    export enum SourceCase {
        SOURCE_NOT_SET = 0,
        SOURCE_NAME = 1,
        SOURCE_DISPLAY_NAME = 2,
    }

}

export enum CampaignState {
    CAMPAIGN_STATE_UNSPECIFIED = 0,
    CAMPAIGN_STATE_CREATED = 1,
    CAMPAIGN_STATE_RUNNING = 2,
    CAMPAIGN_STATE_STOPPING = 3,
    CAMPAIGN_STATE_STOPPED = 4,
    CAMPAIGN_STATE_HARD_STOPPING = 5,
    CAMPAIGN_STATE_HARD_STOPPED = 6,
    CAMPAIGN_STATE_COMPLETED = 7,
}

export enum CampaignCallState {
    CAMPAIGN_CALL_STATE_UNSPECIFIED = 0,
    CAMPAIGN_CALL_STATE_NOT_STARTED = 1,
    CAMPAIGN_CALL_STATE_DISPATCHING = 2,
    CAMPAIGN_CALL_STATE_IN_PROGRESS = 3,
    CAMPAIGN_CALL_STATE_RETRY_PENDING = 4,
    CAMPAIGN_CALL_STATE_COMPLETED = 5,
    CAMPAIGN_CALL_STATE_FAILED = 6,
    CAMPAIGN_CALL_STATE_CANCELLED = 7,
}

export enum CampaignStartMode {
    CAMPAIGN_START_MODE_UNSPECIFIED = 0,
    CAMPAIGN_START_MODE_START = 1,
    CAMPAIGN_START_MODE_DO_NOT_START = 2,
}

export enum CampaignCallSource {
    CAMPAIGN_CALL_SOURCE_UNSPECIFIED = 0,
    CAMPAIGN_CALL_SOURCE_CALLER = 1,
    CAMPAIGN_CALL_SOURCE_SCHEDULED_CALLER = 2,
}

export enum CampaignCallAttemptOutcome {
    CAMPAIGN_CALL_ATTEMPT_OUTCOME_UNSPECIFIED = 0,
    CAMPAIGN_CALL_ATTEMPT_OUTCOME_IN_PROGRESS = 1,
    CAMPAIGN_CALL_ATTEMPT_OUTCOME_COMPLETED = 2,
    CAMPAIGN_CALL_ATTEMPT_OUTCOME_FAILED = 3,
    CAMPAIGN_CALL_ATTEMPT_OUTCOME_CANCELLED = 4,
}

export enum CallingWindowDayOfWeek {
    CALLING_WINDOW_DAY_OF_WEEK_UNSPECIFIED = 0,
    CALLING_WINDOW_DAY_OF_WEEK_MONDAY = 1,
    CALLING_WINDOW_DAY_OF_WEEK_TUESDAY = 2,
    CALLING_WINDOW_DAY_OF_WEEK_WEDNESDAY = 3,
    CALLING_WINDOW_DAY_OF_WEEK_THURSDAY = 4,
    CALLING_WINDOW_DAY_OF_WEEK_FRIDAY = 5,
    CALLING_WINDOW_DAY_OF_WEEK_SATURDAY = 6,
    CALLING_WINDOW_DAY_OF_WEEK_SUNDAY = 7,
}

export enum CampaignOrderBy {
    CAMPAIGN_ORDER_BY_UNSPECIFIED = 0,
    CAMPAIGN_ORDER_BY_CREATED_AT_DESC = 1,
    CAMPAIGN_ORDER_BY_MODIFIED_AT_DESC = 2,
    CAMPAIGN_ORDER_BY_DISPLAY_NAME_ASC = 3,
}

export enum StreamEndReason {
    STREAM_END_REASON_UNSPECIFIED = 0,
    STREAM_END_REASON_MAX_DURATION = 1,
    STREAM_END_REASON_CLIENT_TOO_SLOW = 2,
    STREAM_END_REASON_SUBSCRIPTION_DELETED = 3,
    STREAM_END_REASON_SUBSCRIPTION_DISABLED = 4,
    STREAM_END_REASON_PROJECT_DELETED = 5,
    STREAM_END_REASON_SERVER_SHUTDOWN = 6,
}
