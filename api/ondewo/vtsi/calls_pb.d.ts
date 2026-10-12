// package: ondewo.vtsi
// file: ondewo/vtsi/calls.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_nlu_intent_pb from "../../ondewo/nlu/intent_pb";
import * as ondewo_sip_sip_pb from "../../ondewo/sip/sip_pb";
import * as ondewo_vtsi_call_configs_pb from "../../ondewo/vtsi/call_configs_pb";
import * as ondewo_vtsi_campaigns_pb from "../../ondewo/vtsi/campaigns_pb";
import * as ondewo_vtsi_projects_pb from "../../ondewo/vtsi/projects_pb";

export class AsteriskConfig extends jspb.Message { 

    hasAsteriskBaseConfig(): boolean;
    clearAsteriskBaseConfig(): void;
    getAsteriskBaseConfig(): ondewo_vtsi_call_configs_pb.BaseServiceConfig | undefined;
    setAsteriskBaseConfig(value?: ondewo_vtsi_call_configs_pb.BaseServiceConfig): AsteriskConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AsteriskConfig.AsObject;
    static toObject(includeInstance: boolean, msg: AsteriskConfig): AsteriskConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AsteriskConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AsteriskConfig;
    static deserializeBinaryFromReader(message: AsteriskConfig, reader: jspb.BinaryReader): AsteriskConfig;
}

export namespace AsteriskConfig {
    export type AsObject = {
        asteriskBaseConfig?: ondewo_vtsi_call_configs_pb.BaseServiceConfig.AsObject,
    }
}

export class Listener extends jspb.Message { 
    getName(): string;
    setName(value: string): Listener;
    getCallName(): string;
    setCallName(value: string): Listener;

    hasSipBaseConfig(): boolean;
    clearSipBaseConfig(): void;
    getSipBaseConfig(): ondewo_vtsi_call_configs_pb.SipBaseConfig | undefined;
    setSipBaseConfig(value?: ondewo_vtsi_call_configs_pb.SipBaseConfig): Listener;

    hasCommonServicesConfig(): boolean;
    clearCommonServicesConfig(): void;
    getCommonServicesConfig(): ondewo_vtsi_call_configs_pb.CommonServicesConfig | undefined;
    setCommonServicesConfig(value?: ondewo_vtsi_call_configs_pb.CommonServicesConfig): Listener;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): Listener;
    getActive(): boolean;
    setActive(value: boolean): Listener;
    getSipStatusType(): ondewo_sip_sip_pb.SipStatus.StatusType;
    setSipStatusType(value: ondewo_sip_sip_pb.SipStatus.StatusType): Listener;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Listener;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Listener.AsObject;
    static toObject(includeInstance: boolean, msg: Listener): Listener.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Listener, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Listener;
    static deserializeBinaryFromReader(message: Listener, reader: jspb.BinaryReader): Listener;
}

export namespace Listener {
    export type AsObject = {
        name: string,
        callName: string,
        sipBaseConfig?: ondewo_vtsi_call_configs_pb.SipBaseConfig.AsObject,
        commonServicesConfig?: ondewo_vtsi_call_configs_pb.CommonServicesConfig.AsObject,
        vtsiProjectName: string,
        active: boolean,
        sipStatusType: ondewo_sip_sip_pb.SipStatus.StatusType,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class Caller extends jspb.Message { 
    getName(): string;
    setName(value: string): Caller;
    getCallName(): string;
    setCallName(value: string): Caller;

    hasSipCallerConfig(): boolean;
    clearSipCallerConfig(): void;
    getSipCallerConfig(): ondewo_vtsi_call_configs_pb.SipCallerConfig | undefined;
    setSipCallerConfig(value?: ondewo_vtsi_call_configs_pb.SipCallerConfig): Caller;

    hasCommonServicesConfig(): boolean;
    clearCommonServicesConfig(): void;
    getCommonServicesConfig(): ondewo_vtsi_call_configs_pb.CommonServicesConfig | undefined;
    setCommonServicesConfig(value?: ondewo_vtsi_call_configs_pb.CommonServicesConfig): Caller;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): Caller;
    getActive(): boolean;
    setActive(value: boolean): Caller;
    getSipStatusType(): ondewo_sip_sip_pb.SipStatus.StatusType;
    setSipStatusType(value: ondewo_sip_sip_pb.SipStatus.StatusType): Caller;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Caller;
    getPooled(): boolean;
    setPooled(value: boolean): Caller;
    getCampaignName(): string;
    setCampaignName(value: string): Caller;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Caller.AsObject;
    static toObject(includeInstance: boolean, msg: Caller): Caller.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Caller, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Caller;
    static deserializeBinaryFromReader(message: Caller, reader: jspb.BinaryReader): Caller;
}

export namespace Caller {
    export type AsObject = {
        name: string,
        callName: string,
        sipCallerConfig?: ondewo_vtsi_call_configs_pb.SipCallerConfig.AsObject,
        commonServicesConfig?: ondewo_vtsi_call_configs_pb.CommonServicesConfig.AsObject,
        vtsiProjectName: string,
        active: boolean,
        sipStatusType: ondewo_sip_sip_pb.SipStatus.StatusType,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        pooled: boolean,
        campaignName: string,
    }
}

export class StartListenerRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): StartListenerRequest;

    hasSipBaseConfig(): boolean;
    clearSipBaseConfig(): void;
    getSipBaseConfig(): ondewo_vtsi_call_configs_pb.SipBaseConfig | undefined;
    setSipBaseConfig(value?: ondewo_vtsi_call_configs_pb.SipBaseConfig): StartListenerRequest;

    hasCommonServicesConfig(): boolean;
    clearCommonServicesConfig(): void;
    getCommonServicesConfig(): ondewo_vtsi_call_configs_pb.CommonServicesConfig | undefined;
    setCommonServicesConfig(value?: ondewo_vtsi_call_configs_pb.CommonServicesConfig): StartListenerRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): StartListenerRequest;
    getValidateOnly(): boolean;
    setValidateOnly(value: boolean): StartListenerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartListenerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartListenerRequest): StartListenerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartListenerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartListenerRequest;
    static deserializeBinaryFromReader(message: StartListenerRequest, reader: jspb.BinaryReader): StartListenerRequest;
}

export namespace StartListenerRequest {
    export type AsObject = {
        vtsiProjectName: string,
        sipBaseConfig?: ondewo_vtsi_call_configs_pb.SipBaseConfig.AsObject,
        commonServicesConfig?: ondewo_vtsi_call_configs_pb.CommonServicesConfig.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        validateOnly: boolean,
    }
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartListenerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartListenerResponse;
    static deserializeBinaryFromReader(message: StartListenerResponse, reader: jspb.BinaryReader): StartListenerResponse;
}

export namespace StartListenerResponse {
    export type AsObject = {
        vtsiProjectName: string,
        listener?: Listener.AsObject,
        errorMessage: string,
    }
}

export class StartListenersRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): StartListenersRequest;
    clearListenerRequestsList(): void;
    getListenerRequestsList(): Array<StartListenerRequest>;
    setListenerRequestsList(value: Array<StartListenerRequest>): StartListenersRequest;
    addListenerRequests(value?: StartListenerRequest, index?: number): StartListenerRequest;
    getIdempotencyKey(): string;
    setIdempotencyKey(value: string): StartListenersRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): StartListenersRequest;
    getValidateOnly(): boolean;
    setValidateOnly(value: boolean): StartListenersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartListenersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartListenersRequest): StartListenersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartListenersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartListenersRequest;
    static deserializeBinaryFromReader(message: StartListenersRequest, reader: jspb.BinaryReader): StartListenersRequest;
}

export namespace StartListenersRequest {
    export type AsObject = {
        vtsiProjectName: string,
        listenerRequestsList: Array<StartListenerRequest.AsObject>,
        idempotencyKey: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        validateOnly: boolean,
    }
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartListenersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartListenersResponse;
    static deserializeBinaryFromReader(message: StartListenersResponse, reader: jspb.BinaryReader): StartListenersResponse;
}

export namespace StartListenersResponse {
    export type AsObject = {
        vtsiProjectName: string,
        listenerResponsesList: Array<StartListenerResponse.AsObject>,
        errorMessage: string,
    }
}

export class StartCallerRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): StartCallerRequest;

    hasSipCallerConfig(): boolean;
    clearSipCallerConfig(): void;
    getSipCallerConfig(): ondewo_vtsi_call_configs_pb.SipCallerConfig | undefined;
    setSipCallerConfig(value?: ondewo_vtsi_call_configs_pb.SipCallerConfig): StartCallerRequest;

    hasCommonServicesConfig(): boolean;
    clearCommonServicesConfig(): void;
    getCommonServicesConfig(): ondewo_vtsi_call_configs_pb.CommonServicesConfig | undefined;
    setCommonServicesConfig(value?: ondewo_vtsi_call_configs_pb.CommonServicesConfig): StartCallerRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): StartCallerRequest;
    getValidateOnly(): boolean;
    setValidateOnly(value: boolean): StartCallerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartCallerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartCallerRequest): StartCallerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartCallerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartCallerRequest;
    static deserializeBinaryFromReader(message: StartCallerRequest, reader: jspb.BinaryReader): StartCallerRequest;
}

export namespace StartCallerRequest {
    export type AsObject = {
        vtsiProjectName: string,
        sipCallerConfig?: ondewo_vtsi_call_configs_pb.SipCallerConfig.AsObject,
        commonServicesConfig?: ondewo_vtsi_call_configs_pb.CommonServicesConfig.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        validateOnly: boolean,
    }
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartCallerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartCallerResponse;
    static deserializeBinaryFromReader(message: StartCallerResponse, reader: jspb.BinaryReader): StartCallerResponse;
}

export namespace StartCallerResponse {
    export type AsObject = {
        vtsiProjectName: string,
        caller?: Caller.AsObject,
        errorMessage: string,
    }
}

export class StartCallersRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): StartCallersRequest;
    clearCallerRequestsList(): void;
    getCallerRequestsList(): Array<StartCallerRequest>;
    setCallerRequestsList(value: Array<StartCallerRequest>): StartCallersRequest;
    addCallerRequests(value?: StartCallerRequest, index?: number): StartCallerRequest;
    getIdempotencyKey(): string;
    setIdempotencyKey(value: string): StartCallersRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): StartCallersRequest;
    getValidateOnly(): boolean;
    setValidateOnly(value: boolean): StartCallersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartCallersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartCallersRequest): StartCallersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartCallersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartCallersRequest;
    static deserializeBinaryFromReader(message: StartCallersRequest, reader: jspb.BinaryReader): StartCallersRequest;
}

export namespace StartCallersRequest {
    export type AsObject = {
        vtsiProjectName: string,
        callerRequestsList: Array<StartCallerRequest.AsObject>,
        idempotencyKey: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        validateOnly: boolean,
    }
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartCallersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartCallersResponse;
    static deserializeBinaryFromReader(message: StartCallersResponse, reader: jspb.BinaryReader): StartCallersResponse;
}

export namespace StartCallersResponse {
    export type AsObject = {
        vtsiProjectName: string,
        callerResponsesList: Array<StartCallerResponse.AsObject>,
        errorMessage: string,
    }
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

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListCallersRequest;

    hasCampaignName(): boolean;
    clearCampaignName(): void;
    getCampaignName(): string;
    setCampaignName(value: string): ListCallersRequest;

    hasCampaignDisplayName(): boolean;
    clearCampaignDisplayName(): void;
    getCampaignDisplayName(): string;
    setCampaignDisplayName(value: string): ListCallersRequest;
    getPageSize(): number;
    setPageSize(value: number): ListCallersRequest;
    getActiveOnly(): boolean;
    setActiveOnly(value: boolean): ListCallersRequest;
    clearSipStatusTypesList(): void;
    getSipStatusTypesList(): Array<ondewo_sip_sip_pb.SipStatus.StatusType>;
    setSipStatusTypesList(value: Array<ondewo_sip_sip_pb.SipStatus.StatusType>): ListCallersRequest;
    addSipStatusTypes(value: ondewo_sip_sip_pb.SipStatus.StatusType, index?: number): ondewo_sip_sip_pb.SipStatus.StatusType;

    getCampaignCase(): ListCallersRequest.CampaignCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCallersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListCallersRequest): ListCallersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCallersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCallersRequest;
    static deserializeBinaryFromReader(message: ListCallersRequest, reader: jspb.BinaryReader): ListCallersRequest;
}

export namespace ListCallersRequest {
    export type AsObject = {
        vtsiProjectName: string,
        pageToken?: string,
        callView?: CallView,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        campaignName: string,
        campaignDisplayName: string,
        pageSize: number,
        activeOnly: boolean,
        sipStatusTypesList: Array<ondewo_sip_sip_pb.SipStatus.StatusType>,
    }

    export enum CampaignCase {
        CAMPAIGN_NOT_SET = 0,
        CAMPAIGN_NAME = 5,
        CAMPAIGN_DISPLAY_NAME = 6,
    }

}

export class ListCallersResponse extends jspb.Message { 
    clearCallersList(): void;
    getCallersList(): Array<Caller>;
    setCallersList(value: Array<Caller>): ListCallersResponse;
    addCallers(value?: Caller, index?: number): Caller;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListCallersResponse;
    getTotalSize(): number;
    setTotalSize(value: number): ListCallersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCallersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListCallersResponse): ListCallersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCallersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCallersResponse;
    static deserializeBinaryFromReader(message: ListCallersResponse, reader: jspb.BinaryReader): ListCallersResponse;
}

export namespace ListCallersResponse {
    export type AsObject = {
        callersList: Array<Caller.AsObject>,
        nextPageToken: string,
        totalSize: number,
    }
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

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetCallerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCallerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCallerRequest): GetCallerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCallerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCallerRequest;
    static deserializeBinaryFromReader(message: GetCallerRequest, reader: jspb.BinaryReader): GetCallerRequest;
}

export namespace GetCallerRequest {
    export type AsObject = {
        vtsiProjectName: string,
        name: string,
        callView?: CallView,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
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

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListListenersRequest;
    getPageSize(): number;
    setPageSize(value: number): ListListenersRequest;
    getActiveOnly(): boolean;
    setActiveOnly(value: boolean): ListListenersRequest;
    clearSipStatusTypesList(): void;
    getSipStatusTypesList(): Array<ondewo_sip_sip_pb.SipStatus.StatusType>;
    setSipStatusTypesList(value: Array<ondewo_sip_sip_pb.SipStatus.StatusType>): ListListenersRequest;
    addSipStatusTypes(value: ondewo_sip_sip_pb.SipStatus.StatusType, index?: number): ondewo_sip_sip_pb.SipStatus.StatusType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListListenersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListListenersRequest): ListListenersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListListenersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListListenersRequest;
    static deserializeBinaryFromReader(message: ListListenersRequest, reader: jspb.BinaryReader): ListListenersRequest;
}

export namespace ListListenersRequest {
    export type AsObject = {
        vtsiProjectName: string,
        pageToken?: string,
        callView?: CallView,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        pageSize: number,
        activeOnly: boolean,
        sipStatusTypesList: Array<ondewo_sip_sip_pb.SipStatus.StatusType>,
    }
}

export class ListListenersResponse extends jspb.Message { 
    clearListenersList(): void;
    getListenersList(): Array<Listener>;
    setListenersList(value: Array<Listener>): ListListenersResponse;
    addListeners(value?: Listener, index?: number): Listener;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListListenersResponse;
    getTotalSize(): number;
    setTotalSize(value: number): ListListenersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListListenersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListListenersResponse): ListListenersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListListenersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListListenersResponse;
    static deserializeBinaryFromReader(message: ListListenersResponse, reader: jspb.BinaryReader): ListListenersResponse;
}

export namespace ListListenersResponse {
    export type AsObject = {
        listenersList: Array<Listener.AsObject>,
        nextPageToken: string,
        totalSize: number,
    }
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

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetListenerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetListenerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetListenerRequest): GetListenerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetListenerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetListenerRequest;
    static deserializeBinaryFromReader(message: GetListenerRequest, reader: jspb.BinaryReader): GetListenerRequest;
}

export namespace GetListenerRequest {
    export type AsObject = {
        vtsiProjectName: string,
        name: string,
        callView?: CallView,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class StopListenerRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): StopListenerRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): StopListenerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopListenerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopListenerRequest): StopListenerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopListenerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopListenerRequest;
    static deserializeBinaryFromReader(message: StopListenerRequest, reader: jspb.BinaryReader): StopListenerRequest;
}

export namespace StopListenerRequest {
    export type AsObject = {
        name: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class StopListenerResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): StopListenerResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): StopListenerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopListenerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StopListenerResponse): StopListenerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopListenerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopListenerResponse;
    static deserializeBinaryFromReader(message: StopListenerResponse, reader: jspb.BinaryReader): StopListenerResponse;
}

export namespace StopListenerResponse {
    export type AsObject = {
        name: string,
        errorMessage: string,
    }
}

export class StopListenersRequest extends jspb.Message { 
    clearNamesList(): void;
    getNamesList(): Array<string>;
    setNamesList(value: Array<string>): StopListenersRequest;
    addNames(value: string, index?: number): string;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): StopListenersRequest;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): StopListenersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopListenersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopListenersRequest): StopListenersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopListenersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopListenersRequest;
    static deserializeBinaryFromReader(message: StopListenersRequest, reader: jspb.BinaryReader): StopListenersRequest;
}

export namespace StopListenersRequest {
    export type AsObject = {
        namesList: Array<string>,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        vtsiProjectName: string,
    }
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopListenersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopListenersResponse;
    static deserializeBinaryFromReader(message: StopListenersResponse, reader: jspb.BinaryReader): StopListenersResponse;
}

export namespace StopListenersResponse {
    export type AsObject = {
        stopListenerResponsesList: Array<StopListenerResponse.AsObject>,
        errorMessage: string,
    }
}

export class StopCallerRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): StopCallerRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): StopCallerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopCallerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopCallerRequest): StopCallerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopCallerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopCallerRequest;
    static deserializeBinaryFromReader(message: StopCallerRequest, reader: jspb.BinaryReader): StopCallerRequest;
}

export namespace StopCallerRequest {
    export type AsObject = {
        name: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class StopCallerResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): StopCallerResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): StopCallerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopCallerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StopCallerResponse): StopCallerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopCallerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopCallerResponse;
    static deserializeBinaryFromReader(message: StopCallerResponse, reader: jspb.BinaryReader): StopCallerResponse;
}

export namespace StopCallerResponse {
    export type AsObject = {
        name: string,
        errorMessage: string,
    }
}

export class StopCallersRequest extends jspb.Message { 
    clearNamesList(): void;
    getNamesList(): Array<string>;
    setNamesList(value: Array<string>): StopCallersRequest;
    addNames(value: string, index?: number): string;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): StopCallersRequest;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): StopCallersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopCallersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopCallersRequest): StopCallersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopCallersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopCallersRequest;
    static deserializeBinaryFromReader(message: StopCallersRequest, reader: jspb.BinaryReader): StopCallersRequest;
}

export namespace StopCallersRequest {
    export type AsObject = {
        namesList: Array<string>,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        vtsiProjectName: string,
    }
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopCallersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopCallersResponse;
    static deserializeBinaryFromReader(message: StopCallersResponse, reader: jspb.BinaryReader): StopCallersResponse;
}

export namespace StopCallersResponse {
    export type AsObject = {
        stopCallerResponsesList: Array<StopCallerResponse.AsObject>,
        errorMessage: string,
    }
}

export class DeleteListenerRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteListenerRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): DeleteListenerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteListenerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteListenerRequest): DeleteListenerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteListenerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteListenerRequest;
    static deserializeBinaryFromReader(message: DeleteListenerRequest, reader: jspb.BinaryReader): DeleteListenerRequest;
}

export namespace DeleteListenerRequest {
    export type AsObject = {
        name: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class DeleteListenerResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteListenerResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): DeleteListenerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteListenerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteListenerResponse): DeleteListenerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteListenerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteListenerResponse;
    static deserializeBinaryFromReader(message: DeleteListenerResponse, reader: jspb.BinaryReader): DeleteListenerResponse;
}

export namespace DeleteListenerResponse {
    export type AsObject = {
        name: string,
        errorMessage: string,
    }
}

export class DeleteListenersRequest extends jspb.Message { 
    clearNamesList(): void;
    getNamesList(): Array<string>;
    setNamesList(value: Array<string>): DeleteListenersRequest;
    addNames(value: string, index?: number): string;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): DeleteListenersRequest;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): DeleteListenersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteListenersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteListenersRequest): DeleteListenersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteListenersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteListenersRequest;
    static deserializeBinaryFromReader(message: DeleteListenersRequest, reader: jspb.BinaryReader): DeleteListenersRequest;
}

export namespace DeleteListenersRequest {
    export type AsObject = {
        namesList: Array<string>,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        vtsiProjectName: string,
    }
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteListenersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteListenersResponse;
    static deserializeBinaryFromReader(message: DeleteListenersResponse, reader: jspb.BinaryReader): DeleteListenersResponse;
}

export namespace DeleteListenersResponse {
    export type AsObject = {
        deleteListenerResponsesList: Array<DeleteListenerResponse.AsObject>,
        errorMessage: string,
    }
}

export class DeleteCallerRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteCallerRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): DeleteCallerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteCallerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteCallerRequest): DeleteCallerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteCallerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteCallerRequest;
    static deserializeBinaryFromReader(message: DeleteCallerRequest, reader: jspb.BinaryReader): DeleteCallerRequest;
}

export namespace DeleteCallerRequest {
    export type AsObject = {
        name: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class DeleteCallerResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteCallerResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): DeleteCallerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteCallerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteCallerResponse): DeleteCallerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteCallerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteCallerResponse;
    static deserializeBinaryFromReader(message: DeleteCallerResponse, reader: jspb.BinaryReader): DeleteCallerResponse;
}

export namespace DeleteCallerResponse {
    export type AsObject = {
        name: string,
        errorMessage: string,
    }
}

export class DeleteCallersRequest extends jspb.Message { 
    clearNamesList(): void;
    getNamesList(): Array<string>;
    setNamesList(value: Array<string>): DeleteCallersRequest;
    addNames(value: string, index?: number): string;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): DeleteCallersRequest;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): DeleteCallersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteCallersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteCallersRequest): DeleteCallersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteCallersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteCallersRequest;
    static deserializeBinaryFromReader(message: DeleteCallersRequest, reader: jspb.BinaryReader): DeleteCallersRequest;
}

export namespace DeleteCallersRequest {
    export type AsObject = {
        namesList: Array<string>,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        vtsiProjectName: string,
    }
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteCallersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteCallersResponse;
    static deserializeBinaryFromReader(message: DeleteCallersResponse, reader: jspb.BinaryReader): DeleteCallersResponse;
}

export namespace DeleteCallersResponse {
    export type AsObject = {
        deleteCallerResponsesList: Array<DeleteCallerResponse.AsObject>,
        errorMessage: string,
    }
}

export class UpdateCallerRequest extends jspb.Message { 

    hasCaller(): boolean;
    clearCaller(): void;
    getCaller(): Caller | undefined;
    setCaller(value?: Caller): UpdateCallerRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateCallerRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateCallerRequest;
    getValidateOnly(): boolean;
    setValidateOnly(value: boolean): UpdateCallerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCallerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCallerRequest): UpdateCallerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCallerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCallerRequest;
    static deserializeBinaryFromReader(message: UpdateCallerRequest, reader: jspb.BinaryReader): UpdateCallerRequest;
}

export namespace UpdateCallerRequest {
    export type AsObject = {
        caller?: Caller.AsObject,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        validateOnly: boolean,
    }
}

export class UpdateCallerResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): UpdateCallerResponse;

    hasCaller(): boolean;
    clearCaller(): void;
    getCaller(): Caller | undefined;
    setCaller(value?: Caller): UpdateCallerResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): UpdateCallerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCallerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCallerResponse): UpdateCallerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCallerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCallerResponse;
    static deserializeBinaryFromReader(message: UpdateCallerResponse, reader: jspb.BinaryReader): UpdateCallerResponse;
}

export namespace UpdateCallerResponse {
    export type AsObject = {
        name: string,
        caller?: Caller.AsObject,
        errorMessage: string,
    }
}

export class UpdateCallersRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): UpdateCallersRequest;
    clearUpdateCallerRequestsList(): void;
    getUpdateCallerRequestsList(): Array<UpdateCallerRequest>;
    setUpdateCallerRequestsList(value: Array<UpdateCallerRequest>): UpdateCallersRequest;
    addUpdateCallerRequests(value?: UpdateCallerRequest, index?: number): UpdateCallerRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateCallersRequest;
    getValidateOnly(): boolean;
    setValidateOnly(value: boolean): UpdateCallersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCallersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCallersRequest): UpdateCallersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCallersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCallersRequest;
    static deserializeBinaryFromReader(message: UpdateCallersRequest, reader: jspb.BinaryReader): UpdateCallersRequest;
}

export namespace UpdateCallersRequest {
    export type AsObject = {
        vtsiProjectName: string,
        updateCallerRequestsList: Array<UpdateCallerRequest.AsObject>,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        validateOnly: boolean,
    }
}

export class UpdateCallersResponse extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): UpdateCallersResponse;
    clearUpdateCallerResponsesList(): void;
    getUpdateCallerResponsesList(): Array<UpdateCallerResponse>;
    setUpdateCallerResponsesList(value: Array<UpdateCallerResponse>): UpdateCallersResponse;
    addUpdateCallerResponses(value?: UpdateCallerResponse, index?: number): UpdateCallerResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): UpdateCallersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCallersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCallersResponse): UpdateCallersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCallersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCallersResponse;
    static deserializeBinaryFromReader(message: UpdateCallersResponse, reader: jspb.BinaryReader): UpdateCallersResponse;
}

export namespace UpdateCallersResponse {
    export type AsObject = {
        vtsiProjectName: string,
        updateCallerResponsesList: Array<UpdateCallerResponse.AsObject>,
        errorMessage: string,
    }
}

export class UpdateListenerRequest extends jspb.Message { 

    hasListener(): boolean;
    clearListener(): void;
    getListener(): Listener | undefined;
    setListener(value?: Listener): UpdateListenerRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateListenerRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateListenerRequest;
    getValidateOnly(): boolean;
    setValidateOnly(value: boolean): UpdateListenerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateListenerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateListenerRequest): UpdateListenerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateListenerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateListenerRequest;
    static deserializeBinaryFromReader(message: UpdateListenerRequest, reader: jspb.BinaryReader): UpdateListenerRequest;
}

export namespace UpdateListenerRequest {
    export type AsObject = {
        listener?: Listener.AsObject,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        validateOnly: boolean,
    }
}

export class UpdateListenerResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): UpdateListenerResponse;

    hasListener(): boolean;
    clearListener(): void;
    getListener(): Listener | undefined;
    setListener(value?: Listener): UpdateListenerResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): UpdateListenerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateListenerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateListenerResponse): UpdateListenerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateListenerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateListenerResponse;
    static deserializeBinaryFromReader(message: UpdateListenerResponse, reader: jspb.BinaryReader): UpdateListenerResponse;
}

export namespace UpdateListenerResponse {
    export type AsObject = {
        name: string,
        listener?: Listener.AsObject,
        errorMessage: string,
    }
}

export class UpdateListenersRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): UpdateListenersRequest;
    clearUpdateListenerRequestsList(): void;
    getUpdateListenerRequestsList(): Array<UpdateListenerRequest>;
    setUpdateListenerRequestsList(value: Array<UpdateListenerRequest>): UpdateListenersRequest;
    addUpdateListenerRequests(value?: UpdateListenerRequest, index?: number): UpdateListenerRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateListenersRequest;
    getValidateOnly(): boolean;
    setValidateOnly(value: boolean): UpdateListenersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateListenersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateListenersRequest): UpdateListenersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateListenersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateListenersRequest;
    static deserializeBinaryFromReader(message: UpdateListenersRequest, reader: jspb.BinaryReader): UpdateListenersRequest;
}

export namespace UpdateListenersRequest {
    export type AsObject = {
        vtsiProjectName: string,
        updateListenerRequestsList: Array<UpdateListenerRequest.AsObject>,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        validateOnly: boolean,
    }
}

export class UpdateListenersResponse extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): UpdateListenersResponse;
    clearUpdateListenerResponsesList(): void;
    getUpdateListenerResponsesList(): Array<UpdateListenerResponse>;
    setUpdateListenerResponsesList(value: Array<UpdateListenerResponse>): UpdateListenersResponse;
    addUpdateListenerResponses(value?: UpdateListenerResponse, index?: number): UpdateListenerResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): UpdateListenersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateListenersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateListenersResponse): UpdateListenersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateListenersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateListenersResponse;
    static deserializeBinaryFromReader(message: UpdateListenersResponse, reader: jspb.BinaryReader): UpdateListenersResponse;
}

export namespace UpdateListenersResponse {
    export type AsObject = {
        vtsiProjectName: string,
        updateListenerResponsesList: Array<UpdateListenerResponse.AsObject>,
        errorMessage: string,
    }
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

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): StartScheduledCallerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartScheduledCallerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartScheduledCallerRequest): StartScheduledCallerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartScheduledCallerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartScheduledCallerRequest;
    static deserializeBinaryFromReader(message: StartScheduledCallerRequest, reader: jspb.BinaryReader): StartScheduledCallerRequest;
}

export namespace StartScheduledCallerRequest {
    export type AsObject = {
        vtsiProjectName: string,
        request?: StartCallerRequest.AsObject,
        scheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class StartScheduledCallersRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): StartScheduledCallersRequest;
    clearScheduledCallerRequestsList(): void;
    getScheduledCallerRequestsList(): Array<StartScheduledCallerRequest>;
    setScheduledCallerRequestsList(value: Array<StartScheduledCallerRequest>): StartScheduledCallersRequest;
    addScheduledCallerRequests(value?: StartScheduledCallerRequest, index?: number): StartScheduledCallerRequest;
    getIdempotencyKey(): string;
    setIdempotencyKey(value: string): StartScheduledCallersRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): StartScheduledCallersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartScheduledCallersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartScheduledCallersRequest): StartScheduledCallersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartScheduledCallersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartScheduledCallersRequest;
    static deserializeBinaryFromReader(message: StartScheduledCallersRequest, reader: jspb.BinaryReader): StartScheduledCallersRequest;
}

export namespace StartScheduledCallersRequest {
    export type AsObject = {
        vtsiProjectName: string,
        scheduledCallerRequestsList: Array<StartScheduledCallerRequest.AsObject>,
        idempotencyKey: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartScheduledCallersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartScheduledCallersResponse;
    static deserializeBinaryFromReader(message: StartScheduledCallersResponse, reader: jspb.BinaryReader): StartScheduledCallersResponse;
}

export namespace StartScheduledCallersResponse {
    export type AsObject = {
        vtsiProjectName: string,
        scheduledCallerResponsesList: Array<StartScheduledCallerResponse.AsObject>,
    }
}

export class AddCallersToCampaignRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): AddCallersToCampaignRequest;
    clearCallerRequestsList(): void;
    getCallerRequestsList(): Array<StartCallerRequest>;
    setCallerRequestsList(value: Array<StartCallerRequest>): AddCallersToCampaignRequest;
    addCallerRequests(value?: StartCallerRequest, index?: number): StartCallerRequest;

    hasCampaignAssignment(): boolean;
    clearCampaignAssignment(): void;
    getCampaignAssignment(): ondewo_vtsi_campaigns_pb.CampaignAssignment | undefined;
    setCampaignAssignment(value?: ondewo_vtsi_campaigns_pb.CampaignAssignment): AddCallersToCampaignRequest;
    getIdempotencyKey(): string;
    setIdempotencyKey(value: string): AddCallersToCampaignRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddCallersToCampaignRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddCallersToCampaignRequest): AddCallersToCampaignRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddCallersToCampaignRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddCallersToCampaignRequest;
    static deserializeBinaryFromReader(message: AddCallersToCampaignRequest, reader: jspb.BinaryReader): AddCallersToCampaignRequest;
}

export namespace AddCallersToCampaignRequest {
    export type AsObject = {
        vtsiProjectName: string,
        callerRequestsList: Array<StartCallerRequest.AsObject>,
        campaignAssignment?: ondewo_vtsi_campaigns_pb.CampaignAssignment.AsObject,
        idempotencyKey: string,
    }
}

export class AddCallersToCampaignResponse extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): AddCallersToCampaignResponse;

    hasCampaign(): boolean;
    clearCampaign(): void;
    getCampaign(): ondewo_vtsi_campaigns_pb.Campaign | undefined;
    setCampaign(value?: ondewo_vtsi_campaigns_pb.Campaign): AddCallersToCampaignResponse;
    clearCampaignCallNamesList(): void;
    getCampaignCallNamesList(): Array<string>;
    setCampaignCallNamesList(value: Array<string>): AddCallersToCampaignResponse;
    addCampaignCallNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddCallersToCampaignResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddCallersToCampaignResponse): AddCallersToCampaignResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddCallersToCampaignResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddCallersToCampaignResponse;
    static deserializeBinaryFromReader(message: AddCallersToCampaignResponse, reader: jspb.BinaryReader): AddCallersToCampaignResponse;
}

export namespace AddCallersToCampaignResponse {
    export type AsObject = {
        vtsiProjectName: string,
        campaign?: ondewo_vtsi_campaigns_pb.Campaign.AsObject,
        campaignCallNamesList: Array<string>,
    }
}

export class AddScheduledCallersToCampaignRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): AddScheduledCallersToCampaignRequest;
    clearScheduledCallerRequestsList(): void;
    getScheduledCallerRequestsList(): Array<StartScheduledCallerRequest>;
    setScheduledCallerRequestsList(value: Array<StartScheduledCallerRequest>): AddScheduledCallersToCampaignRequest;
    addScheduledCallerRequests(value?: StartScheduledCallerRequest, index?: number): StartScheduledCallerRequest;

    hasCampaignAssignment(): boolean;
    clearCampaignAssignment(): void;
    getCampaignAssignment(): ondewo_vtsi_campaigns_pb.CampaignAssignment | undefined;
    setCampaignAssignment(value?: ondewo_vtsi_campaigns_pb.CampaignAssignment): AddScheduledCallersToCampaignRequest;
    getIdempotencyKey(): string;
    setIdempotencyKey(value: string): AddScheduledCallersToCampaignRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddScheduledCallersToCampaignRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddScheduledCallersToCampaignRequest): AddScheduledCallersToCampaignRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddScheduledCallersToCampaignRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddScheduledCallersToCampaignRequest;
    static deserializeBinaryFromReader(message: AddScheduledCallersToCampaignRequest, reader: jspb.BinaryReader): AddScheduledCallersToCampaignRequest;
}

export namespace AddScheduledCallersToCampaignRequest {
    export type AsObject = {
        vtsiProjectName: string,
        scheduledCallerRequestsList: Array<StartScheduledCallerRequest.AsObject>,
        campaignAssignment?: ondewo_vtsi_campaigns_pb.CampaignAssignment.AsObject,
        idempotencyKey: string,
    }
}

export class AddScheduledCallersToCampaignResponse extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): AddScheduledCallersToCampaignResponse;
    clearScheduledCallerResponsesList(): void;
    getScheduledCallerResponsesList(): Array<StartScheduledCallerResponse>;
    setScheduledCallerResponsesList(value: Array<StartScheduledCallerResponse>): AddScheduledCallersToCampaignResponse;
    addScheduledCallerResponses(value?: StartScheduledCallerResponse, index?: number): StartScheduledCallerResponse;

    hasCampaign(): boolean;
    clearCampaign(): void;
    getCampaign(): ondewo_vtsi_campaigns_pb.Campaign | undefined;
    setCampaign(value?: ondewo_vtsi_campaigns_pb.Campaign): AddScheduledCallersToCampaignResponse;
    clearCampaignCallNamesList(): void;
    getCampaignCallNamesList(): Array<string>;
    setCampaignCallNamesList(value: Array<string>): AddScheduledCallersToCampaignResponse;
    addCampaignCallNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddScheduledCallersToCampaignResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddScheduledCallersToCampaignResponse): AddScheduledCallersToCampaignResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddScheduledCallersToCampaignResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddScheduledCallersToCampaignResponse;
    static deserializeBinaryFromReader(message: AddScheduledCallersToCampaignResponse, reader: jspb.BinaryReader): AddScheduledCallersToCampaignResponse;
}

export namespace AddScheduledCallersToCampaignResponse {
    export type AsObject = {
        vtsiProjectName: string,
        scheduledCallerResponsesList: Array<StartScheduledCallerResponse.AsObject>,
        campaign?: ondewo_vtsi_campaigns_pb.Campaign.AsObject,
        campaignCallNamesList: Array<string>,
    }
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartScheduledCallerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartScheduledCallerResponse;
    static deserializeBinaryFromReader(message: StartScheduledCallerResponse, reader: jspb.BinaryReader): StartScheduledCallerResponse;
}

export namespace StartScheduledCallerResponse {
    export type AsObject = {
        vtsiProjectName: string,
        scheduledCaller?: ScheduledCaller.AsObject,
        errorMessage: string,
    }
}

export class ScheduledCaller extends jspb.Message { 
    getName(): string;
    setName(value: string): ScheduledCaller;
    getCallName(): string;
    setCallName(value: string): ScheduledCaller;

    hasSipConfig(): boolean;
    clearSipConfig(): void;
    getSipConfig(): ondewo_vtsi_call_configs_pb.SipBaseConfig | undefined;
    setSipConfig(value?: ondewo_vtsi_call_configs_pb.SipBaseConfig): ScheduledCaller;

    hasCommonServicesConfig(): boolean;
    clearCommonServicesConfig(): void;
    getCommonServicesConfig(): ondewo_vtsi_call_configs_pb.CommonServicesConfig | undefined;
    setCommonServicesConfig(value?: ondewo_vtsi_call_configs_pb.CommonServicesConfig): ScheduledCaller;

    hasScheduledTime(): boolean;
    clearScheduledTime(): void;
    getScheduledTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setScheduledTime(value?: google_protobuf_timestamp_pb.Timestamp): ScheduledCaller;

    hasSipCallerConfig(): boolean;
    clearSipCallerConfig(): void;
    getSipCallerConfig(): ondewo_vtsi_call_configs_pb.SipCallerConfig | undefined;
    setSipCallerConfig(value?: ondewo_vtsi_call_configs_pb.SipCallerConfig): ScheduledCaller;
    getStatus(): ScheduledCallerStatus;
    setStatus(value: ScheduledCallerStatus): ScheduledCaller;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): ScheduledCaller;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ScheduledCaller;

    hasFiredAt(): boolean;
    clearFiredAt(): void;
    getFiredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFiredAt(value?: google_protobuf_timestamp_pb.Timestamp): ScheduledCaller;
    getErrorMessage(): string;
    setErrorMessage(value: string): ScheduledCaller;
    getCampaignName(): string;
    setCampaignName(value: string): ScheduledCaller;
    getRetryOfScheduledCallerName(): string;
    setRetryOfScheduledCallerName(value: string): ScheduledCaller;
    getRetriedByScheduledCallerName(): string;
    setRetriedByScheduledCallerName(value: string): ScheduledCaller;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScheduledCaller.AsObject;
    static toObject(includeInstance: boolean, msg: ScheduledCaller): ScheduledCaller.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScheduledCaller, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScheduledCaller;
    static deserializeBinaryFromReader(message: ScheduledCaller, reader: jspb.BinaryReader): ScheduledCaller;
}

export namespace ScheduledCaller {
    export type AsObject = {
        name: string,
        callName: string,
        sipConfig?: ondewo_vtsi_call_configs_pb.SipBaseConfig.AsObject,
        commonServicesConfig?: ondewo_vtsi_call_configs_pb.CommonServicesConfig.AsObject,
        scheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        sipCallerConfig?: ondewo_vtsi_call_configs_pb.SipCallerConfig.AsObject,
        status: ScheduledCallerStatus,
        vtsiProjectName: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        firedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        errorMessage: string,
        campaignName: string,
        retryOfScheduledCallerName: string,
        retriedByScheduledCallerName: string,
    }
}

export class GetScheduledCallerRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): GetScheduledCallerRequest;
    getName(): string;
    setName(value: string): GetScheduledCallerRequest;

    hasCallView(): boolean;
    clearCallView(): void;
    getCallView(): CallView | undefined;
    setCallView(value: CallView): GetScheduledCallerRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetScheduledCallerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetScheduledCallerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetScheduledCallerRequest): GetScheduledCallerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetScheduledCallerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetScheduledCallerRequest;
    static deserializeBinaryFromReader(message: GetScheduledCallerRequest, reader: jspb.BinaryReader): GetScheduledCallerRequest;
}

export namespace GetScheduledCallerRequest {
    export type AsObject = {
        vtsiProjectName: string,
        name: string,
        callView?: CallView,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class ListScheduledCallersRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): ListScheduledCallersRequest;

    hasPageToken(): boolean;
    clearPageToken(): void;
    getPageToken(): string | undefined;
    setPageToken(value: string): ListScheduledCallersRequest;

    hasCallView(): boolean;
    clearCallView(): void;
    getCallView(): CallView | undefined;
    setCallView(value: CallView): ListScheduledCallersRequest;
    clearStatusesList(): void;
    getStatusesList(): Array<ScheduledCallerStatus>;
    setStatusesList(value: Array<ScheduledCallerStatus>): ListScheduledCallersRequest;
    addStatuses(value: ScheduledCallerStatus, index?: number): ScheduledCallerStatus;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListScheduledCallersRequest;
    getPageSize(): number;
    setPageSize(value: number): ListScheduledCallersRequest;
    getCampaignName(): string;
    setCampaignName(value: string): ListScheduledCallersRequest;

    hasScheduledAfter(): boolean;
    clearScheduledAfter(): void;
    getScheduledAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setScheduledAfter(value?: google_protobuf_timestamp_pb.Timestamp): ListScheduledCallersRequest;

    hasScheduledBefore(): boolean;
    clearScheduledBefore(): void;
    getScheduledBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setScheduledBefore(value?: google_protobuf_timestamp_pb.Timestamp): ListScheduledCallersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListScheduledCallersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListScheduledCallersRequest): ListScheduledCallersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListScheduledCallersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListScheduledCallersRequest;
    static deserializeBinaryFromReader(message: ListScheduledCallersRequest, reader: jspb.BinaryReader): ListScheduledCallersRequest;
}

export namespace ListScheduledCallersRequest {
    export type AsObject = {
        vtsiProjectName: string,
        pageToken?: string,
        callView?: CallView,
        statusesList: Array<ScheduledCallerStatus>,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        pageSize: number,
        campaignName: string,
        scheduledAfter?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        scheduledBefore?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ListScheduledCallersResponse extends jspb.Message { 
    clearScheduledCallersList(): void;
    getScheduledCallersList(): Array<ScheduledCaller>;
    setScheduledCallersList(value: Array<ScheduledCaller>): ListScheduledCallersResponse;
    addScheduledCallers(value?: ScheduledCaller, index?: number): ScheduledCaller;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListScheduledCallersResponse;
    getTotalSize(): number;
    setTotalSize(value: number): ListScheduledCallersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListScheduledCallersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListScheduledCallersResponse): ListScheduledCallersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListScheduledCallersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListScheduledCallersResponse;
    static deserializeBinaryFromReader(message: ListScheduledCallersResponse, reader: jspb.BinaryReader): ListScheduledCallersResponse;
}

export namespace ListScheduledCallersResponse {
    export type AsObject = {
        scheduledCallersList: Array<ScheduledCaller.AsObject>,
        nextPageToken: string,
        totalSize: number,
    }
}

export class CancelScheduledCallerRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): CancelScheduledCallerRequest;
    getName(): string;
    setName(value: string): CancelScheduledCallerRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): CancelScheduledCallerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelScheduledCallerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CancelScheduledCallerRequest): CancelScheduledCallerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelScheduledCallerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelScheduledCallerRequest;
    static deserializeBinaryFromReader(message: CancelScheduledCallerRequest, reader: jspb.BinaryReader): CancelScheduledCallerRequest;
}

export namespace CancelScheduledCallerRequest {
    export type AsObject = {
        vtsiProjectName: string,
        name: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class CancelScheduledCallerResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): CancelScheduledCallerResponse;
    getStatus(): ScheduledCallerStatus;
    setStatus(value: ScheduledCallerStatus): CancelScheduledCallerResponse;
    getCancelled(): boolean;
    setCancelled(value: boolean): CancelScheduledCallerResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): CancelScheduledCallerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelScheduledCallerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CancelScheduledCallerResponse): CancelScheduledCallerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelScheduledCallerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelScheduledCallerResponse;
    static deserializeBinaryFromReader(message: CancelScheduledCallerResponse, reader: jspb.BinaryReader): CancelScheduledCallerResponse;
}

export namespace CancelScheduledCallerResponse {
    export type AsObject = {
        name: string,
        status: ScheduledCallerStatus,
        cancelled: boolean,
        errorMessage: string,
    }
}

export class CancelScheduledCallersRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): CancelScheduledCallersRequest;
    clearNamesList(): void;
    getNamesList(): Array<string>;
    setNamesList(value: Array<string>): CancelScheduledCallersRequest;
    addNames(value: string, index?: number): string;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): CancelScheduledCallersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelScheduledCallersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CancelScheduledCallersRequest): CancelScheduledCallersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelScheduledCallersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelScheduledCallersRequest;
    static deserializeBinaryFromReader(message: CancelScheduledCallersRequest, reader: jspb.BinaryReader): CancelScheduledCallersRequest;
}

export namespace CancelScheduledCallersRequest {
    export type AsObject = {
        vtsiProjectName: string,
        namesList: Array<string>,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class CancelScheduledCallersResponse extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): CancelScheduledCallersResponse;
    clearCancelScheduledCallerResponsesList(): void;
    getCancelScheduledCallerResponsesList(): Array<CancelScheduledCallerResponse>;
    setCancelScheduledCallerResponsesList(value: Array<CancelScheduledCallerResponse>): CancelScheduledCallersResponse;
    addCancelScheduledCallerResponses(value?: CancelScheduledCallerResponse, index?: number): CancelScheduledCallerResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): CancelScheduledCallersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelScheduledCallersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CancelScheduledCallersResponse): CancelScheduledCallersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelScheduledCallersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelScheduledCallersResponse;
    static deserializeBinaryFromReader(message: CancelScheduledCallersResponse, reader: jspb.BinaryReader): CancelScheduledCallersResponse;
}

export namespace CancelScheduledCallersResponse {
    export type AsObject = {
        vtsiProjectName: string,
        cancelScheduledCallerResponsesList: Array<CancelScheduledCallerResponse.AsObject>,
        errorMessage: string,
    }
}

export class UpdateScheduledCallerRequest extends jspb.Message { 

    hasScheduledCaller(): boolean;
    clearScheduledCaller(): void;
    getScheduledCaller(): ScheduledCaller | undefined;
    setScheduledCaller(value?: ScheduledCaller): UpdateScheduledCallerRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateScheduledCallerRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateScheduledCallerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateScheduledCallerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateScheduledCallerRequest): UpdateScheduledCallerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateScheduledCallerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateScheduledCallerRequest;
    static deserializeBinaryFromReader(message: UpdateScheduledCallerRequest, reader: jspb.BinaryReader): UpdateScheduledCallerRequest;
}

export namespace UpdateScheduledCallerRequest {
    export type AsObject = {
        scheduledCaller?: ScheduledCaller.AsObject,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class RetryScheduledCallerRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): RetryScheduledCallerRequest;
    getName(): string;
    setName(value: string): RetryScheduledCallerRequest;

    hasScheduledTime(): boolean;
    clearScheduledTime(): void;
    getScheduledTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setScheduledTime(value?: google_protobuf_timestamp_pb.Timestamp): RetryScheduledCallerRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RetryScheduledCallerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RetryScheduledCallerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RetryScheduledCallerRequest): RetryScheduledCallerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RetryScheduledCallerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RetryScheduledCallerRequest;
    static deserializeBinaryFromReader(message: RetryScheduledCallerRequest, reader: jspb.BinaryReader): RetryScheduledCallerRequest;
}

export namespace RetryScheduledCallerRequest {
    export type AsObject = {
        vtsiProjectName: string,
        name: string,
        scheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class StopCallRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): StopCallRequest;
    getCallName(): string;
    setCallName(value: string): StopCallRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): StopCallRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopCallRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopCallRequest): StopCallRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopCallRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopCallRequest;
    static deserializeBinaryFromReader(message: StopCallRequest, reader: jspb.BinaryReader): StopCallRequest;
}

export namespace StopCallRequest {
    export type AsObject = {
        vtsiProjectName: string,
        callName: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopCallResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopCallResponse;
    static deserializeBinaryFromReader(message: StopCallResponse, reader: jspb.BinaryReader): StopCallResponse;
}

export namespace StopCallResponse {
    export type AsObject = {
        vtsiProjectName: string,
        callName: string,
        errorMessage: string,
    }
}

export class StopCallsRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): StopCallsRequest;
    clearCallNamesList(): void;
    getCallNamesList(): Array<string>;
    setCallNamesList(value: Array<string>): StopCallsRequest;
    addCallNames(value: string, index?: number): string;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): StopCallsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopCallsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopCallsRequest): StopCallsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopCallsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopCallsRequest;
    static deserializeBinaryFromReader(message: StopCallsRequest, reader: jspb.BinaryReader): StopCallsRequest;
}

export namespace StopCallsRequest {
    export type AsObject = {
        vtsiProjectName: string,
        callNamesList: Array<string>,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopCallsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopCallsResponse;
    static deserializeBinaryFromReader(message: StopCallsResponse, reader: jspb.BinaryReader): StopCallsResponse;
}

export namespace StopCallsResponse {
    export type AsObject = {
        stopCallResponsesList: Array<StopCallResponse.AsObject>,
        errorMessage: string,
    }
}

export class StopAllCallsRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): StopAllCallsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): StopAllCallsRequest;

    hasCallFilter(): boolean;
    clearCallFilter(): void;
    getCallFilter(): CallFilter | undefined;
    setCallFilter(value?: CallFilter): StopAllCallsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopAllCallsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopAllCallsRequest): StopAllCallsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopAllCallsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopAllCallsRequest;
    static deserializeBinaryFromReader(message: StopAllCallsRequest, reader: jspb.BinaryReader): StopAllCallsRequest;
}

export namespace StopAllCallsRequest {
    export type AsObject = {
        vtsiProjectName: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        callFilter?: CallFilter.AsObject,
    }
}

export class TransferCallRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): TransferCallRequest;
    getCallName(): string;
    setCallName(value: string): TransferCallRequest;
    getTransferId(): string;
    setTransferId(value: string): TransferCallRequest;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): CallTarget | undefined;
    setTarget(value?: CallTarget): TransferCallRequest;
    getMode(): TransferMode;
    setMode(value: TransferMode): TransferCallRequest;

    getHeadersMap(): jspb.Map<string, string>;
    clearHeadersMap(): void;
    getRingTimeoutS(): number;
    setRingTimeoutS(value: number): TransferCallRequest;
    getRequestId(): string;
    setRequestId(value: string): TransferCallRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferCallRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TransferCallRequest): TransferCallRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferCallRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferCallRequest;
    static deserializeBinaryFromReader(message: TransferCallRequest, reader: jspb.BinaryReader): TransferCallRequest;
}

export namespace TransferCallRequest {
    export type AsObject = {
        vtsiProjectName: string,
        callName: string,
        transferId: string,
        target?: CallTarget.AsObject,
        mode: TransferMode,

        headersMap: Array<[string, string]>,
        ringTimeoutS: number,
        requestId: string,
    }
}

export class CallTarget extends jspb.Message { 

    hasPhoneNumber(): boolean;
    clearPhoneNumber(): void;
    getPhoneNumber(): string;
    setPhoneNumber(value: string): CallTarget;

    hasSoftphoneAccountName(): boolean;
    clearSoftphoneAccountName(): void;
    getSoftphoneAccountName(): string;
    setSoftphoneAccountName(value: string): CallTarget;

    hasListenerName(): boolean;
    clearListenerName(): void;
    getListenerName(): string;
    setListenerName(value: string): CallTarget;

    hasListenerQueue(): boolean;
    clearListenerQueue(): void;
    getListenerQueue(): ListenerQueueTarget | undefined;
    setListenerQueue(value?: ListenerQueueTarget): CallTarget;

    getTargetCase(): CallTarget.TargetCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallTarget.AsObject;
    static toObject(includeInstance: boolean, msg: CallTarget): CallTarget.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallTarget, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallTarget;
    static deserializeBinaryFromReader(message: CallTarget, reader: jspb.BinaryReader): CallTarget;
}

export namespace CallTarget {
    export type AsObject = {
        phoneNumber: string,
        softphoneAccountName: string,
        listenerName: string,
        listenerQueue?: ListenerQueueTarget.AsObject,
    }

    export enum TargetCase {
        TARGET_NOT_SET = 0,
        PHONE_NUMBER = 1,
        SOFTPHONE_ACCOUNT_NAME = 2,
        LISTENER_NAME = 3,
        LISTENER_QUEUE = 4,
    }

}

export class ListenerQueueTarget extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListenerQueueTarget.AsObject;
    static toObject(includeInstance: boolean, msg: ListenerQueueTarget): ListenerQueueTarget.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListenerQueueTarget, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListenerQueueTarget;
    static deserializeBinaryFromReader(message: ListenerQueueTarget, reader: jspb.BinaryReader): ListenerQueueTarget;
}

export namespace ListenerQueueTarget {
    export type AsObject = {
    }
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
    getOutcome(): TransferOutcome;
    setOutcome(value: TransferOutcome): TransferCallResponse;
    getResolvedTarget(): string;
    setResolvedTarget(value: string): TransferCallResponse;
    getSipResponseCode(): number;
    setSipResponseCode(value: number): TransferCallResponse;
    getErrorReason(): string;
    setErrorReason(value: string): TransferCallResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferCallResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TransferCallResponse): TransferCallResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferCallResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferCallResponse;
    static deserializeBinaryFromReader(message: TransferCallResponse, reader: jspb.BinaryReader): TransferCallResponse;
}

export namespace TransferCallResponse {
    export type AsObject = {
        vtsiProjectName: string,
        callName: string,
        transferId: string,
        errorMessage: string,
        outcome: TransferOutcome,
        resolvedTarget: string,
        sipResponseCode: number,
        errorReason: string,
    }
}

export class CallTransferRecord extends jspb.Message { 

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): CallTarget | undefined;
    setTarget(value?: CallTarget): CallTransferRecord;
    getResolvedTarget(): string;
    setResolvedTarget(value: string): CallTransferRecord;
    getMode(): TransferMode;
    setMode(value: TransferMode): CallTransferRecord;
    getOutcome(): TransferOutcome;
    setOutcome(value: TransferOutcome): CallTransferRecord;
    getSipResponseCode(): number;
    setSipResponseCode(value: number): CallTransferRecord;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): CallTransferRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallTransferRecord.AsObject;
    static toObject(includeInstance: boolean, msg: CallTransferRecord): CallTransferRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallTransferRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallTransferRecord;
    static deserializeBinaryFromReader(message: CallTransferRecord, reader: jspb.BinaryReader): CallTransferRecord;
}

export namespace CallTransferRecord {
    export type AsObject = {
        target?: CallTarget.AsObject,
        resolvedTarget: string,
        mode: TransferMode,
        outcome: TransferOutcome,
        sipResponseCode: number,
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CallMediaControlState extends jspb.Message { 
    getBotMuted(): boolean;
    setBotMuted(value: boolean): CallMediaControlState;
    getListeningPaused(): boolean;
    setListeningPaused(value: boolean): CallMediaControlState;
    getConnectedAudioStreams(): number;
    setConnectedAudioStreams(value: number): CallMediaControlState;
    getJoinedParticipants(): number;
    setJoinedParticipants(value: number): CallMediaControlState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallMediaControlState.AsObject;
    static toObject(includeInstance: boolean, msg: CallMediaControlState): CallMediaControlState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallMediaControlState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallMediaControlState;
    static deserializeBinaryFromReader(message: CallMediaControlState, reader: jspb.BinaryReader): CallMediaControlState;
}

export namespace CallMediaControlState {
    export type AsObject = {
        botMuted: boolean,
        listeningPaused: boolean,
        connectedAudioStreams: number,
        joinedParticipants: number,
    }
}

export class CallParticipant extends jspb.Message { 
    getParticipantId(): string;
    setParticipantId(value: string): CallParticipant;
    getSoftphoneAccountName(): string;
    setSoftphoneAccountName(value: string): CallParticipant;
    getMode(): ParticipantMode;
    setMode(value: ParticipantMode): CallParticipant;
    getState(): ParticipantState;
    setState(value: ParticipantState): CallParticipant;

    hasInvitedAt(): boolean;
    clearInvitedAt(): void;
    getInvitedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setInvitedAt(value?: google_protobuf_timestamp_pb.Timestamp): CallParticipant;

    hasJoinedAt(): boolean;
    clearJoinedAt(): void;
    getJoinedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setJoinedAt(value?: google_protobuf_timestamp_pb.Timestamp): CallParticipant;

    hasLeftAt(): boolean;
    clearLeftAt(): void;
    getLeftAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLeftAt(value?: google_protobuf_timestamp_pb.Timestamp): CallParticipant;
    getEndReason(): string;
    setEndReason(value: string): CallParticipant;
    getInvitedBy(): string;
    setInvitedBy(value: string): CallParticipant;
    getBotPolicy(): BotPolicyOnJoin;
    setBotPolicy(value: BotPolicyOnJoin): CallParticipant;
    getEndReasonType(): ParticipantEndReason;
    setEndReasonType(value: ParticipantEndReason): CallParticipant;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallParticipant.AsObject;
    static toObject(includeInstance: boolean, msg: CallParticipant): CallParticipant.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallParticipant, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallParticipant;
    static deserializeBinaryFromReader(message: CallParticipant, reader: jspb.BinaryReader): CallParticipant;
}

export namespace CallParticipant {
    export type AsObject = {
        participantId: string,
        softphoneAccountName: string,
        mode: ParticipantMode,
        state: ParticipantState,
        invitedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        joinedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        leftAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endReason: string,
        invitedBy: string,
        botPolicy: BotPolicyOnJoin,
        endReasonType: ParticipantEndReason,
    }
}

export class InviteToCallRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): InviteToCallRequest;
    getCallName(): string;
    setCallName(value: string): InviteToCallRequest;
    getSoftphoneAccountName(): string;
    setSoftphoneAccountName(value: string): InviteToCallRequest;
    getMode(): ParticipantMode;
    setMode(value: ParticipantMode): InviteToCallRequest;
    getRingTimeoutS(): number;
    setRingTimeoutS(value: number): InviteToCallRequest;
    getBotPolicy(): BotPolicyOnJoin;
    setBotPolicy(value: BotPolicyOnJoin): InviteToCallRequest;
    getCallerIdDisplayName(): string;
    setCallerIdDisplayName(value: string): InviteToCallRequest;
    getRequestId(): string;
    setRequestId(value: string): InviteToCallRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteToCallRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InviteToCallRequest): InviteToCallRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteToCallRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteToCallRequest;
    static deserializeBinaryFromReader(message: InviteToCallRequest, reader: jspb.BinaryReader): InviteToCallRequest;
}

export namespace InviteToCallRequest {
    export type AsObject = {
        vtsiProjectName: string,
        callName: string,
        softphoneAccountName: string,
        mode: ParticipantMode,
        ringTimeoutS: number,
        botPolicy: BotPolicyOnJoin,
        callerIdDisplayName: string,
        requestId: string,
    }
}

export class InviteToCallResponse extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): InviteToCallResponse;
    getCallName(): string;
    setCallName(value: string): InviteToCallResponse;

    hasParticipant(): boolean;
    clearParticipant(): void;
    getParticipant(): CallParticipant | undefined;
    setParticipant(value?: CallParticipant): InviteToCallResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): InviteToCallResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteToCallResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InviteToCallResponse): InviteToCallResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteToCallResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteToCallResponse;
    static deserializeBinaryFromReader(message: InviteToCallResponse, reader: jspb.BinaryReader): InviteToCallResponse;
}

export namespace InviteToCallResponse {
    export type AsObject = {
        vtsiProjectName: string,
        callName: string,
        participant?: CallParticipant.AsObject,
        errorMessage: string,
    }
}

export class RemoveCallParticipantRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): RemoveCallParticipantRequest;
    getCallName(): string;
    setCallName(value: string): RemoveCallParticipantRequest;
    getParticipantId(): string;
    setParticipantId(value: string): RemoveCallParticipantRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveCallParticipantRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveCallParticipantRequest): RemoveCallParticipantRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveCallParticipantRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveCallParticipantRequest;
    static deserializeBinaryFromReader(message: RemoveCallParticipantRequest, reader: jspb.BinaryReader): RemoveCallParticipantRequest;
}

export namespace RemoveCallParticipantRequest {
    export type AsObject = {
        vtsiProjectName: string,
        callName: string,
        participantId: string,
    }
}

export class RemoveCallParticipantResponse extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): RemoveCallParticipantResponse;
    getCallName(): string;
    setCallName(value: string): RemoveCallParticipantResponse;

    hasParticipant(): boolean;
    clearParticipant(): void;
    getParticipant(): CallParticipant | undefined;
    setParticipant(value?: CallParticipant): RemoveCallParticipantResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): RemoveCallParticipantResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveCallParticipantResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveCallParticipantResponse): RemoveCallParticipantResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveCallParticipantResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveCallParticipantResponse;
    static deserializeBinaryFromReader(message: RemoveCallParticipantResponse, reader: jspb.BinaryReader): RemoveCallParticipantResponse;
}

export namespace RemoveCallParticipantResponse {
    export type AsObject = {
        vtsiProjectName: string,
        callName: string,
        participant?: CallParticipant.AsObject,
        errorMessage: string,
    }
}

export class SetCallMediaControlRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): SetCallMediaControlRequest;
    getCallName(): string;
    setCallName(value: string): SetCallMediaControlRequest;
    getBotVoice(): CallMediaSetting;
    setBotVoice(value: CallMediaSetting): SetCallMediaControlRequest;
    getBotListening(): CallMediaSetting;
    setBotListening(value: CallMediaSetting): SetCallMediaControlRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetCallMediaControlRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetCallMediaControlRequest): SetCallMediaControlRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetCallMediaControlRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetCallMediaControlRequest;
    static deserializeBinaryFromReader(message: SetCallMediaControlRequest, reader: jspb.BinaryReader): SetCallMediaControlRequest;
}

export namespace SetCallMediaControlRequest {
    export type AsObject = {
        vtsiProjectName: string,
        callName: string,
        botVoice: CallMediaSetting,
        botListening: CallMediaSetting,
    }
}

export class SetCallMediaControlResponse extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): SetCallMediaControlResponse;
    getCallName(): string;
    setCallName(value: string): SetCallMediaControlResponse;

    hasState(): boolean;
    clearState(): void;
    getState(): CallMediaControlState | undefined;
    setState(value?: CallMediaControlState): SetCallMediaControlResponse;
    getChanged(): boolean;
    setChanged(value: boolean): SetCallMediaControlResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): SetCallMediaControlResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetCallMediaControlResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetCallMediaControlResponse): SetCallMediaControlResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetCallMediaControlResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetCallMediaControlResponse;
    static deserializeBinaryFromReader(message: SetCallMediaControlResponse, reader: jspb.BinaryReader): SetCallMediaControlResponse;
}

export namespace SetCallMediaControlResponse {
    export type AsObject = {
        vtsiProjectName: string,
        callName: string,
        state?: CallMediaControlState.AsObject,
        changed: boolean,
        errorMessage: string,
    }
}

export class StreamCallAudioConfig extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): StreamCallAudioConfig;
    getCallName(): string;
    setCallName(value: string): StreamCallAudioConfig;
    getMode(): CallAudioMode;
    setMode(value: CallAudioMode): StreamCallAudioConfig;
    getSampleRateHz(): number;
    setSampleRateHz(value: number): StreamCallAudioConfig;
    getTakeOver(): boolean;
    setTakeOver(value: boolean): StreamCallAudioConfig;
    getMaxDurationS(): number;
    setMaxDurationS(value: number): StreamCallAudioConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamCallAudioConfig.AsObject;
    static toObject(includeInstance: boolean, msg: StreamCallAudioConfig): StreamCallAudioConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamCallAudioConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamCallAudioConfig;
    static deserializeBinaryFromReader(message: StreamCallAudioConfig, reader: jspb.BinaryReader): StreamCallAudioConfig;
}

export namespace StreamCallAudioConfig {
    export type AsObject = {
        vtsiProjectName: string,
        callName: string,
        mode: CallAudioMode,
        sampleRateHz: number,
        takeOver: boolean,
        maxDurationS: number,
    }
}

export class CallAudioFrame extends jspb.Message { 
    getPcmS16le(): Uint8Array | string;
    getPcmS16le_asU8(): Uint8Array;
    getPcmS16le_asB64(): string;
    setPcmS16le(value: Uint8Array | string): CallAudioFrame;
    getSequence(): number;
    setSequence(value: number): CallAudioFrame;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallAudioFrame.AsObject;
    static toObject(includeInstance: boolean, msg: CallAudioFrame): CallAudioFrame.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallAudioFrame, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallAudioFrame;
    static deserializeBinaryFromReader(message: CallAudioFrame, reader: jspb.BinaryReader): CallAudioFrame;
}

export namespace CallAudioFrame {
    export type AsObject = {
        pcmS16le: Uint8Array | string,
        sequence: number,
    }
}

export class StreamCallAudioRequest extends jspb.Message { 

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): StreamCallAudioConfig | undefined;
    setConfig(value?: StreamCallAudioConfig): StreamCallAudioRequest;

    hasAudio(): boolean;
    clearAudio(): void;
    getAudio(): CallAudioFrame | undefined;
    setAudio(value?: CallAudioFrame): StreamCallAudioRequest;

    hasAgentMuted(): boolean;
    clearAgentMuted(): void;
    getAgentMuted(): boolean;
    setAgentMuted(value: boolean): StreamCallAudioRequest;

    getRequestCase(): StreamCallAudioRequest.RequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamCallAudioRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamCallAudioRequest): StreamCallAudioRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamCallAudioRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamCallAudioRequest;
    static deserializeBinaryFromReader(message: StreamCallAudioRequest, reader: jspb.BinaryReader): StreamCallAudioRequest;
}

export namespace StreamCallAudioRequest {
    export type AsObject = {
        config?: StreamCallAudioConfig.AsObject,
        audio?: CallAudioFrame.AsObject,
        agentMuted: boolean,
    }

    export enum RequestCase {
        REQUEST_NOT_SET = 0,
        CONFIG = 1,
        AUDIO = 2,
        AGENT_MUTED = 3,
    }

}

export class CallAudioStarted extends jspb.Message { 
    getStreamId(): string;
    setStreamId(value: string): CallAudioStarted;
    getSampleRateHz(): number;
    setSampleRateHz(value: number): CallAudioStarted;
    getFrameMs(): number;
    setFrameMs(value: number): CallAudioStarted;
    getMode(): CallAudioMode;
    setMode(value: CallAudioMode): CallAudioStarted;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallAudioStarted.AsObject;
    static toObject(includeInstance: boolean, msg: CallAudioStarted): CallAudioStarted.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallAudioStarted, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallAudioStarted;
    static deserializeBinaryFromReader(message: CallAudioStarted, reader: jspb.BinaryReader): CallAudioStarted;
}

export namespace CallAudioStarted {
    export type AsObject = {
        streamId: string,
        sampleRateHz: number,
        frameMs: number,
        mode: CallAudioMode,
    }
}

export class CallAudioStats extends jspb.Message { 
    getFramesSent(): number;
    setFramesSent(value: number): CallAudioStats;
    getFramesDropped(): number;
    setFramesDropped(value: number): CallAudioStats;
    getFramesReceived(): number;
    setFramesReceived(value: number): CallAudioStats;
    getUnderruns(): number;
    setUnderruns(value: number): CallAudioStats;
    getFramesDiscarded(): number;
    setFramesDiscarded(value: number): CallAudioStats;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallAudioStats.AsObject;
    static toObject(includeInstance: boolean, msg: CallAudioStats): CallAudioStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallAudioStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallAudioStats;
    static deserializeBinaryFromReader(message: CallAudioStats, reader: jspb.BinaryReader): CallAudioStats;
}

export namespace CallAudioStats {
    export type AsObject = {
        framesSent: number,
        framesDropped: number,
        framesReceived: number,
        underruns: number,
        framesDiscarded: number,
    }
}

export class CallAudioEnded extends jspb.Message { 
    getReason(): CallAudioEndReason;
    setReason(value: CallAudioEndReason): CallAudioEnded;
    getDetail(): string;
    setDetail(value: string): CallAudioEnded;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallAudioEnded.AsObject;
    static toObject(includeInstance: boolean, msg: CallAudioEnded): CallAudioEnded.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallAudioEnded, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallAudioEnded;
    static deserializeBinaryFromReader(message: CallAudioEnded, reader: jspb.BinaryReader): CallAudioEnded;
}

export namespace CallAudioEnded {
    export type AsObject = {
        reason: CallAudioEndReason,
        detail: string,
    }
}

export class StreamCallAudioResponse extends jspb.Message { 

    hasStarted(): boolean;
    clearStarted(): void;
    getStarted(): CallAudioStarted | undefined;
    setStarted(value?: CallAudioStarted): StreamCallAudioResponse;

    hasAudio(): boolean;
    clearAudio(): void;
    getAudio(): CallAudioFrame | undefined;
    setAudio(value?: CallAudioFrame): StreamCallAudioResponse;

    hasStats(): boolean;
    clearStats(): void;
    getStats(): CallAudioStats | undefined;
    setStats(value?: CallAudioStats): StreamCallAudioResponse;

    hasEnded(): boolean;
    clearEnded(): void;
    getEnded(): CallAudioEnded | undefined;
    setEnded(value?: CallAudioEnded): StreamCallAudioResponse;

    getResponseCase(): StreamCallAudioResponse.ResponseCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamCallAudioResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StreamCallAudioResponse): StreamCallAudioResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamCallAudioResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamCallAudioResponse;
    static deserializeBinaryFromReader(message: StreamCallAudioResponse, reader: jspb.BinaryReader): StreamCallAudioResponse;
}

export namespace StreamCallAudioResponse {
    export type AsObject = {
        started?: CallAudioStarted.AsObject,
        audio?: CallAudioFrame.AsObject,
        stats?: CallAudioStats.AsObject,
        ended?: CallAudioEnded.AsObject,
    }

    export enum ResponseCase {
        RESPONSE_NOT_SET = 0,
        STARTED = 1,
        AUDIO = 2,
        STATS = 3,
        ENDED = 4,
    }

}

export class ListenCallAudioRequest extends jspb.Message { 

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): StreamCallAudioConfig | undefined;
    setConfig(value?: StreamCallAudioConfig): ListenCallAudioRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListenCallAudioRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListenCallAudioRequest): ListenCallAudioRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListenCallAudioRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListenCallAudioRequest;
    static deserializeBinaryFromReader(message: ListenCallAudioRequest, reader: jspb.BinaryReader): ListenCallAudioRequest;
}

export namespace ListenCallAudioRequest {
    export type AsObject = {
        config?: StreamCallAudioConfig.AsObject,
    }
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferCallsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferCallsRequest;
    static deserializeBinaryFromReader(message: TransferCallsRequest, reader: jspb.BinaryReader): TransferCallsRequest;
}

export namespace TransferCallsRequest {
    export type AsObject = {
        vtsiProjectName: string,
        transferCallRequestsList: Array<TransferCallRequest.AsObject>,
    }
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferCallsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferCallsResponse;
    static deserializeBinaryFromReader(message: TransferCallsResponse, reader: jspb.BinaryReader): TransferCallsResponse;
}

export namespace TransferCallsResponse {
    export type AsObject = {
        vtsiProjectName: string,
        transferCallResponsesList: Array<TransferCallResponse.AsObject>,
        errorMessage: string,
    }
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

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetCallRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCallRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCallRequest): GetCallRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCallRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCallRequest;
    static deserializeBinaryFromReader(message: GetCallRequest, reader: jspb.BinaryReader): GetCallRequest;
}

export namespace GetCallRequest {
    export type AsObject = {
        vtsiProjectName: string,
        callName: string,
        callView?: CallView,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
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
    getCommonServicesConfig(): ondewo_vtsi_call_configs_pb.CommonServicesConfig | undefined;
    setCommonServicesConfig(value?: ondewo_vtsi_call_configs_pb.CommonServicesConfig): Call;

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

    hasRedialRecommended(): boolean;
    clearRedialRecommended(): void;
    getRedialRecommended(): boolean | undefined;
    setRedialRecommended(value: boolean): Call;

    hasRedialReason(): boolean;
    clearRedialReason(): void;
    getRedialReason(): string | undefined;
    setRedialReason(value: string): Call;

    hasAnsweringMachineDetectionEndDescription(): boolean;
    clearAnsweringMachineDetectionEndDescription(): void;
    getAnsweringMachineDetectionEndDescription(): string | undefined;
    setAnsweringMachineDetectionEndDescription(value: string): Call;

    hasMediaControl(): boolean;
    clearMediaControl(): void;
    getMediaControl(): CallMediaControlState | undefined;
    setMediaControl(value?: CallMediaControlState): Call;
    clearParticipantsList(): void;
    getParticipantsList(): Array<CallParticipant>;
    setParticipantsList(value: Array<CallParticipant>): Call;
    addParticipants(value?: CallParticipant, index?: number): CallParticipant;

    hasLastTransfer(): boolean;
    clearLastTransfer(): void;
    getLastTransfer(): CallTransferRecord | undefined;
    setLastTransfer(value?: CallTransferRecord): Call;
    getSipCallId(): string;
    setSipCallId(value: string): Call;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Call.AsObject;
    static toObject(includeInstance: boolean, msg: Call): Call.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Call, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Call;
    static deserializeBinaryFromReader(message: Call, reader: jspb.BinaryReader): Call;
}

export namespace Call {
    export type AsObject = {
        name: string,
        sipAccount: string,
        containerName: string,
        callType: CallType,
        phoneNumber: string,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        sipStatusType: ondewo_sip_sip_pb.SipStatus.StatusType,
        sipStatus?: ondewo_sip_sip_pb.SipStatus.AsObject,
        sipStatusHistory?: ondewo_sip_sip_pb.SipStatusHistoryResponse.AsObject,
        servicesStatuses?: AllServicesStatuses.AsObject,
        active: boolean,
        vtsiProjectName: string,
        commonServicesConfig?: ondewo_vtsi_call_configs_pb.CommonServicesConfig.AsObject,
        sipPort?: number,
        csiPort?: number,
        nluSessionName?: string,
        platforms?: ondewo_nlu_intent_pb.Intent.Message.Platform,
        redialRecommended?: boolean,
        redialReason?: string,
        answeringMachineDetectionEndDescription?: string,
        mediaControl?: CallMediaControlState.AsObject,
        participantsList: Array<CallParticipant.AsObject>,
        lastTransfer?: CallTransferRecord.AsObject,
        sipCallId: string,

        labelsMap: Array<[string, string]>,
    }
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
    addSipStatusTypes(value: ondewo_sip_sip_pb.SipStatus.StatusType, index?: number): ondewo_sip_sip_pb.SipStatus.StatusType;

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
    addPlatforms(value: ondewo_nlu_intent_pb.Intent.Message.Platform, index?: number): ondewo_nlu_intent_pb.Intent.Message.Platform;

    hasCampaignName(): boolean;
    clearCampaignName(): void;
    getCampaignName(): string;
    setCampaignName(value: string): CallFilter;

    hasCampaignDisplayName(): boolean;
    clearCampaignDisplayName(): void;
    getCampaignDisplayName(): string;
    setCampaignDisplayName(value: string): CallFilter;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    clearCallerNamesList(): void;
    getCallerNamesList(): Array<string>;
    setCallerNamesList(value: Array<string>): CallFilter;
    addCallerNames(value: string, index?: number): string;
    clearListenerNamesList(): void;
    getListenerNamesList(): Array<string>;
    setListenerNamesList(value: Array<string>): CallFilter;
    addListenerNames(value: string, index?: number): string;

    hasRedialRecommended(): boolean;
    clearRedialRecommended(): void;
    getRedialRecommended(): boolean | undefined;
    setRedialRecommended(value: boolean): CallFilter;
    clearTransferOutcomesList(): void;
    getTransferOutcomesList(): Array<TransferOutcome>;
    setTransferOutcomesList(value: Array<TransferOutcome>): CallFilter;
    addTransferOutcomes(value: TransferOutcome, index?: number): TransferOutcome;
    clearSipPortNumbersList(): void;
    getSipPortNumbersList(): Array<number>;
    setSipPortNumbersList(value: Array<number>): CallFilter;
    addSipPortNumbers(value: number, index?: number): number;
    clearCsiPortNumbersList(): void;
    getCsiPortNumbersList(): Array<number>;
    setCsiPortNumbersList(value: Array<number>): CallFilter;
    addCsiPortNumbers(value: number, index?: number): number;

    getCampaignCase(): CallFilter.CampaignCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallFilter.AsObject;
    static toObject(includeInstance: boolean, msg: CallFilter): CallFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallFilter;
    static deserializeBinaryFromReader(message: CallFilter, reader: jspb.BinaryReader): CallFilter;
}

export namespace CallFilter {
    export type AsObject = {
        callNamesList: Array<string>,
        nluSessionNamesList: Array<string>,
        sipAccountsList: Array<string>,
        phoneNumbersList: Array<string>,
        containerNamesList: Array<string>,
        sipPortsList: Array<string>,
        csiPortsList: Array<string>,
        callTypesList: Array<CallType>,
        sipStatusTypesList: Array<ondewo_sip_sip_pb.SipStatus.StatusType>,
        callStatus?: CallStatus,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        durationInSMin?: number,
        durationInSMax?: number,
        platformsList: Array<ondewo_nlu_intent_pb.Intent.Message.Platform>,
        campaignName: string,
        campaignDisplayName: string,

        labelsMap: Array<[string, string]>,
        callerNamesList: Array<string>,
        listenerNamesList: Array<string>,
        redialRecommended?: boolean,
        transferOutcomesList: Array<TransferOutcome>,
        sipPortNumbersList: Array<number>,
        csiPortNumbersList: Array<number>,
    }

    export enum CampaignCase {
        CAMPAIGN_NOT_SET = 0,
        CAMPAIGN_NAME = 16,
        CAMPAIGN_DISPLAY_NAME = 17,
    }

}

export class CallSorting extends jspb.Message { 
    getSortingField(): CallSorting.CallSortingField;
    setSortingField(value: CallSorting.CallSortingField): CallSorting;
    getSortingMode(): ondewo_vtsi_projects_pb.VtsiProjectSortingMode;
    setSortingMode(value: ondewo_vtsi_projects_pb.VtsiProjectSortingMode): CallSorting;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallSorting.AsObject;
    static toObject(includeInstance: boolean, msg: CallSorting): CallSorting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallSorting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallSorting;
    static deserializeBinaryFromReader(message: CallSorting, reader: jspb.BinaryReader): CallSorting;
}

export namespace CallSorting {
    export type AsObject = {
        sortingField: CallSorting.CallSortingField,
        sortingMode: ondewo_vtsi_projects_pb.VtsiProjectSortingMode,
    }

    export enum CallSortingField {
    NO_CALL_SORTING = 0,
    SORT_CALL_BY_START_TIME = 1,
    }

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

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListCallsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListCallsRequest;

    hasCallSorting(): boolean;
    clearCallSorting(): void;
    getCallSorting(): CallSorting | undefined;
    setCallSorting(value?: CallSorting): ListCallsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCallsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListCallsRequest): ListCallsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCallsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCallsRequest;
    static deserializeBinaryFromReader(message: ListCallsRequest, reader: jspb.BinaryReader): ListCallsRequest;
}

export namespace ListCallsRequest {
    export type AsObject = {
        vtsiProjectName: string,
        callView?: CallView,
        callFilter?: CallFilter.AsObject,
        pageToken?: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        pageSize: number,
        callSorting?: CallSorting.AsObject,
    }
}

export class ListCallsResponse extends jspb.Message { 
    clearCallsList(): void;
    getCallsList(): Array<Call>;
    setCallsList(value: Array<Call>): ListCallsResponse;
    addCalls(value?: Call, index?: number): Call;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListCallsResponse;
    getTotalSize(): number;
    setTotalSize(value: number): ListCallsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCallsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListCallsResponse): ListCallsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCallsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCallsResponse;
    static deserializeBinaryFromReader(message: ListCallsResponse, reader: jspb.BinaryReader): ListCallsResponse;
}

export namespace ListCallsResponse {
    export type AsObject = {
        callsList: Array<Call.AsObject>,
        nextPageToken: string,
        totalSize: number,
    }
}

export class UpdateCallRequest extends jspb.Message { 

    hasCall(): boolean;
    clearCall(): void;
    getCall(): Call | undefined;
    setCall(value?: Call): UpdateCallRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateCallRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateCallRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCallRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCallRequest): UpdateCallRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCallRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCallRequest;
    static deserializeBinaryFromReader(message: UpdateCallRequest, reader: jspb.BinaryReader): UpdateCallRequest;
}

export namespace UpdateCallRequest {
    export type AsObject = {
        call?: Call.AsObject,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class UpdateCallResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): UpdateCallResponse;

    hasCall(): boolean;
    clearCall(): void;
    getCall(): Call | undefined;
    setCall(value?: Call): UpdateCallResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): UpdateCallResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCallResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCallResponse): UpdateCallResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCallResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCallResponse;
    static deserializeBinaryFromReader(message: UpdateCallResponse, reader: jspb.BinaryReader): UpdateCallResponse;
}

export namespace UpdateCallResponse {
    export type AsObject = {
        name: string,
        call?: Call.AsObject,
        errorMessage: string,
    }
}

export class UpdateCallsRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): UpdateCallsRequest;
    clearUpdateCallRequestsList(): void;
    getUpdateCallRequestsList(): Array<UpdateCallRequest>;
    setUpdateCallRequestsList(value: Array<UpdateCallRequest>): UpdateCallsRequest;
    addUpdateCallRequests(value?: UpdateCallRequest, index?: number): UpdateCallRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateCallsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCallsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCallsRequest): UpdateCallsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCallsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCallsRequest;
    static deserializeBinaryFromReader(message: UpdateCallsRequest, reader: jspb.BinaryReader): UpdateCallsRequest;
}

export namespace UpdateCallsRequest {
    export type AsObject = {
        vtsiProjectName: string,
        updateCallRequestsList: Array<UpdateCallRequest.AsObject>,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class UpdateCallsResponse extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): UpdateCallsResponse;
    clearUpdateCallResponsesList(): void;
    getUpdateCallResponsesList(): Array<UpdateCallResponse>;
    setUpdateCallResponsesList(value: Array<UpdateCallResponse>): UpdateCallsResponse;
    addUpdateCallResponses(value?: UpdateCallResponse, index?: number): UpdateCallResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): UpdateCallsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCallsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCallsResponse): UpdateCallsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCallsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCallsResponse;
    static deserializeBinaryFromReader(message: UpdateCallsResponse, reader: jspb.BinaryReader): UpdateCallsResponse;
}

export namespace UpdateCallsResponse {
    export type AsObject = {
        vtsiProjectName: string,
        updateCallResponsesList: Array<UpdateCallResponse.AsObject>,
        errorMessage: string,
    }
}

export class GetCallStatisticsRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): GetCallStatisticsRequest;

    hasCallFilter(): boolean;
    clearCallFilter(): void;
    getCallFilter(): CallFilter | undefined;
    setCallFilter(value?: CallFilter): GetCallStatisticsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCallStatisticsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCallStatisticsRequest): GetCallStatisticsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCallStatisticsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCallStatisticsRequest;
    static deserializeBinaryFromReader(message: GetCallStatisticsRequest, reader: jspb.BinaryReader): GetCallStatisticsRequest;
}

export namespace GetCallStatisticsRequest {
    export type AsObject = {
        vtsiProjectName: string,
        callFilter?: CallFilter.AsObject,
    }
}

export class SipStatusTypeCount extends jspb.Message { 
    getSipStatusType(): ondewo_sip_sip_pb.SipStatus.StatusType;
    setSipStatusType(value: ondewo_sip_sip_pb.SipStatus.StatusType): SipStatusTypeCount;
    getCount(): number;
    setCount(value: number): SipStatusTypeCount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SipStatusTypeCount.AsObject;
    static toObject(includeInstance: boolean, msg: SipStatusTypeCount): SipStatusTypeCount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SipStatusTypeCount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SipStatusTypeCount;
    static deserializeBinaryFromReader(message: SipStatusTypeCount, reader: jspb.BinaryReader): SipStatusTypeCount;
}

export namespace SipStatusTypeCount {
    export type AsObject = {
        sipStatusType: ondewo_sip_sip_pb.SipStatus.StatusType,
        count: number,
    }
}

export class CallTypeCount extends jspb.Message { 
    getCallType(): CallType;
    setCallType(value: CallType): CallTypeCount;
    getCount(): number;
    setCount(value: number): CallTypeCount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallTypeCount.AsObject;
    static toObject(includeInstance: boolean, msg: CallTypeCount): CallTypeCount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallTypeCount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallTypeCount;
    static deserializeBinaryFromReader(message: CallTypeCount, reader: jspb.BinaryReader): CallTypeCount;
}

export namespace CallTypeCount {
    export type AsObject = {
        callType: CallType,
        count: number,
    }
}

export class AmdVerdictCount extends jspb.Message { 
    getVerdict(): ondewo_sip_sip_pb.AnsweringMachineDetectionResult.Verdict;
    setVerdict(value: ondewo_sip_sip_pb.AnsweringMachineDetectionResult.Verdict): AmdVerdictCount;
    getCount(): number;
    setCount(value: number): AmdVerdictCount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AmdVerdictCount.AsObject;
    static toObject(includeInstance: boolean, msg: AmdVerdictCount): AmdVerdictCount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AmdVerdictCount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AmdVerdictCount;
    static deserializeBinaryFromReader(message: AmdVerdictCount, reader: jspb.BinaryReader): AmdVerdictCount;
}

export namespace AmdVerdictCount {
    export type AsObject = {
        verdict: ondewo_sip_sip_pb.AnsweringMachineDetectionResult.Verdict,
        count: number,
    }
}

export class TransferOutcomeCount extends jspb.Message { 
    getOutcome(): TransferOutcome;
    setOutcome(value: TransferOutcome): TransferOutcomeCount;
    getCount(): number;
    setCount(value: number): TransferOutcomeCount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferOutcomeCount.AsObject;
    static toObject(includeInstance: boolean, msg: TransferOutcomeCount): TransferOutcomeCount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferOutcomeCount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferOutcomeCount;
    static deserializeBinaryFromReader(message: TransferOutcomeCount, reader: jspb.BinaryReader): TransferOutcomeCount;
}

export namespace TransferOutcomeCount {
    export type AsObject = {
        outcome: TransferOutcome,
        count: number,
    }
}

export class CallStatistics extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): CallStatistics;
    getTotal(): number;
    setTotal(value: number): CallStatistics;
    getActive(): number;
    setActive(value: number): CallStatistics;
    clearSipStatusTypeCountsList(): void;
    getSipStatusTypeCountsList(): Array<SipStatusTypeCount>;
    setSipStatusTypeCountsList(value: Array<SipStatusTypeCount>): CallStatistics;
    addSipStatusTypeCounts(value?: SipStatusTypeCount, index?: number): SipStatusTypeCount;
    clearCallTypeCountsList(): void;
    getCallTypeCountsList(): Array<CallTypeCount>;
    setCallTypeCountsList(value: Array<CallTypeCount>): CallStatistics;
    addCallTypeCounts(value?: CallTypeCount, index?: number): CallTypeCount;
    getEndedCalls(): number;
    setEndedCalls(value: number): CallStatistics;
    getTotalDurationS(): number;
    setTotalDurationS(value: number): CallStatistics;
    getAverageDurationS(): number;
    setAverageDurationS(value: number): CallStatistics;
    getRedialRecommended(): number;
    setRedialRecommended(value: number): CallStatistics;
    clearAmdVerdictCountsList(): void;
    getAmdVerdictCountsList(): Array<AmdVerdictCount>;
    setAmdVerdictCountsList(value: Array<AmdVerdictCount>): CallStatistics;
    addAmdVerdictCounts(value?: AmdVerdictCount, index?: number): AmdVerdictCount;
    clearTransferOutcomeCountsList(): void;
    getTransferOutcomeCountsList(): Array<TransferOutcomeCount>;
    setTransferOutcomeCountsList(value: Array<TransferOutcomeCount>): CallStatistics;
    addTransferOutcomeCounts(value?: TransferOutcomeCount, index?: number): TransferOutcomeCount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallStatistics.AsObject;
    static toObject(includeInstance: boolean, msg: CallStatistics): CallStatistics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallStatistics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallStatistics;
    static deserializeBinaryFromReader(message: CallStatistics, reader: jspb.BinaryReader): CallStatistics;
}

export namespace CallStatistics {
    export type AsObject = {
        vtsiProjectName: string,
        total: number,
        active: number,
        sipStatusTypeCountsList: Array<SipStatusTypeCount.AsObject>,
        callTypeCountsList: Array<CallTypeCount.AsObject>,
        endedCalls: number,
        totalDurationS: number,
        averageDurationS: number,
        redialRecommended: number,
        amdVerdictCountsList: Array<AmdVerdictCount.AsObject>,
        transferOutcomeCountsList: Array<TransferOutcomeCount.AsObject>,
    }
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AllServicesStatuses, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AllServicesStatuses;
    static deserializeBinaryFromReader(message: AllServicesStatuses, reader: jspb.BinaryReader): AllServicesStatuses;
}

export namespace AllServicesStatuses {
    export type AsObject = {
        statusSip?: ServiceStatus.AsObject,
        statusAsterisk?: ServiceStatus.AsObject,
        statusNlu?: ServiceStatus.AsObject,
        statusStt?: ServiceStatus.AsObject,
        statusTts?: ServiceStatus.AsObject,
    }
}

export class ServiceStatus extends jspb.Message { 
    getHealthy(): boolean;
    setHealthy(value: boolean): ServiceStatus;
    getErrorMessage(): string;
    setErrorMessage(value: string): ServiceStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceStatus.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceStatus): ServiceStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceStatus;
    static deserializeBinaryFromReader(message: ServiceStatus, reader: jspb.BinaryReader): ServiceStatus;
}

export namespace ServiceStatus {
    export type AsObject = {
        healthy: boolean,
        errorMessage: string,
    }
}

export class CallResourceStatus extends jspb.Message { 
    getResourceName(): string;
    setResourceName(value: string): CallResourceStatus;
    getCallType(): CallType;
    setCallType(value: CallType): CallResourceStatus;
    getCallName(): string;
    setCallName(value: string): CallResourceStatus;
    getActive(): boolean;
    setActive(value: boolean): CallResourceStatus;
    getSipStatusType(): ondewo_sip_sip_pb.SipStatus.StatusType;
    setSipStatusType(value: ondewo_sip_sip_pb.SipStatus.StatusType): CallResourceStatus;
    getSipStatusDescription(): string;
    setSipStatusDescription(value: string): CallResourceStatus;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): CallResourceStatus;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): CallResourceStatus;
    getPhoneNumber(): string;
    setPhoneNumber(value: string): CallResourceStatus;
    getScheduledCallerStatus(): ScheduledCallerStatus;
    setScheduledCallerStatus(value: ScheduledCallerStatus): CallResourceStatus;

    hasScheduledTime(): boolean;
    clearScheduledTime(): void;
    getScheduledTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setScheduledTime(value?: google_protobuf_timestamp_pb.Timestamp): CallResourceStatus;
    getCampaignName(): string;
    setCampaignName(value: string): CallResourceStatus;
    getErrorMessage(): string;
    setErrorMessage(value: string): CallResourceStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallResourceStatus.AsObject;
    static toObject(includeInstance: boolean, msg: CallResourceStatus): CallResourceStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallResourceStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallResourceStatus;
    static deserializeBinaryFromReader(message: CallResourceStatus, reader: jspb.BinaryReader): CallResourceStatus;
}

export namespace CallResourceStatus {
    export type AsObject = {
        resourceName: string,
        callType: CallType,
        callName: string,
        active: boolean,
        sipStatusType: ondewo_sip_sip_pb.SipStatus.StatusType,
        sipStatusDescription: string,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        phoneNumber: string,
        scheduledCallerStatus: ScheduledCallerStatus,
        scheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        campaignName: string,
        errorMessage: string,
    }
}

export class StreamCallerStatusRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): StreamCallerStatusRequest;
    clearCallerNamesList(): void;
    getCallerNamesList(): Array<string>;
    setCallerNamesList(value: Array<string>): StreamCallerStatusRequest;
    addCallerNames(value: string, index?: number): string;
    getActiveOnly(): boolean;
    setActiveOnly(value: boolean): StreamCallerStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamCallerStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamCallerStatusRequest): StreamCallerStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamCallerStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamCallerStatusRequest;
    static deserializeBinaryFromReader(message: StreamCallerStatusRequest, reader: jspb.BinaryReader): StreamCallerStatusRequest;
}

export namespace StreamCallerStatusRequest {
    export type AsObject = {
        vtsiProjectName: string,
        callerNamesList: Array<string>,
        activeOnly: boolean,
    }
}

export class StreamListenerStatusRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): StreamListenerStatusRequest;
    clearListenerNamesList(): void;
    getListenerNamesList(): Array<string>;
    setListenerNamesList(value: Array<string>): StreamListenerStatusRequest;
    addListenerNames(value: string, index?: number): string;
    getActiveOnly(): boolean;
    setActiveOnly(value: boolean): StreamListenerStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamListenerStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamListenerStatusRequest): StreamListenerStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamListenerStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamListenerStatusRequest;
    static deserializeBinaryFromReader(message: StreamListenerStatusRequest, reader: jspb.BinaryReader): StreamListenerStatusRequest;
}

export namespace StreamListenerStatusRequest {
    export type AsObject = {
        vtsiProjectName: string,
        listenerNamesList: Array<string>,
        activeOnly: boolean,
    }
}

export class StreamScheduledCallerStatusRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): StreamScheduledCallerStatusRequest;
    clearScheduledCallerNamesList(): void;
    getScheduledCallerNamesList(): Array<string>;
    setScheduledCallerNamesList(value: Array<string>): StreamScheduledCallerStatusRequest;
    addScheduledCallerNames(value: string, index?: number): string;
    clearStatusesList(): void;
    getStatusesList(): Array<ScheduledCallerStatus>;
    setStatusesList(value: Array<ScheduledCallerStatus>): StreamScheduledCallerStatusRequest;
    addStatuses(value: ScheduledCallerStatus, index?: number): ScheduledCallerStatus;
    getCampaignName(): string;
    setCampaignName(value: string): StreamScheduledCallerStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamScheduledCallerStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamScheduledCallerStatusRequest): StreamScheduledCallerStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamScheduledCallerStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamScheduledCallerStatusRequest;
    static deserializeBinaryFromReader(message: StreamScheduledCallerStatusRequest, reader: jspb.BinaryReader): StreamScheduledCallerStatusRequest;
}

export namespace StreamScheduledCallerStatusRequest {
    export type AsObject = {
        vtsiProjectName: string,
        scheduledCallerNamesList: Array<string>,
        statusesList: Array<ScheduledCallerStatus>,
        campaignName: string,
    }
}

export class StreamCallResourceStatusResponse extends jspb.Message { 
    clearStatusesList(): void;
    getStatusesList(): Array<CallResourceStatus>;
    setStatusesList(value: Array<CallResourceStatus>): StreamCallResourceStatusResponse;
    addStatuses(value?: CallResourceStatus, index?: number): CallResourceStatus;
    clearRemovedResourceNamesList(): void;
    getRemovedResourceNamesList(): Array<string>;
    setRemovedResourceNamesList(value: Array<string>): StreamCallResourceStatusResponse;
    addRemovedResourceNames(value: string, index?: number): string;
    getSnapshot(): boolean;
    setSnapshot(value: boolean): StreamCallResourceStatusResponse;
    getSnapshotTruncated(): boolean;
    setSnapshotTruncated(value: boolean): StreamCallResourceStatusResponse;
    getEndReason(): string;
    setEndReason(value: string): StreamCallResourceStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamCallResourceStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StreamCallResourceStatusResponse): StreamCallResourceStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamCallResourceStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamCallResourceStatusResponse;
    static deserializeBinaryFromReader(message: StreamCallResourceStatusResponse, reader: jspb.BinaryReader): StreamCallResourceStatusResponse;
}

export namespace StreamCallResourceStatusResponse {
    export type AsObject = {
        statusesList: Array<CallResourceStatus.AsObject>,
        removedResourceNamesList: Array<string>,
        snapshot: boolean,
        snapshotTruncated: boolean,
        endReason: string,
    }
}

export enum ScheduledCallerStatus {
    SCHEDULED_CALLER_STATUS_UNSPECIFIED = 0,
    SCHEDULED_CALLER_STATUS_PENDING = 1,
    SCHEDULED_CALLER_STATUS_FIRING = 2,
    SCHEDULED_CALLER_STATUS_DONE = 3,
    SCHEDULED_CALLER_STATUS_FAILED = 4,
    SCHEDULED_CALLER_STATUS_CANCELLED = 5,
}

export enum TransferMode {
    TRANSFER_MODE_UNSPECIFIED = 0,
    TRANSFER_MODE_BLIND = 1,
    TRANSFER_MODE_WARM = 2,
}

export enum TransferOutcome {
    TRANSFER_OUTCOME_UNSPECIFIED = 0,
    TRANSFER_OUTCOME_ACCEPTED = 1,
    TRANSFER_OUTCOME_PENDING = 2,
    TRANSFER_OUTCOME_TARGET_INVALID = 3,
    TRANSFER_OUTCOME_REFER_REJECTED = 4,
    TRANSFER_OUTCOME_TIMEOUT = 5,
    TRANSFER_OUTCOME_CALL_ENDED = 6,
    TRANSFER_OUTCOME_CALL_SCOPE_MISMATCH = 7,
    TRANSFER_OUTCOME_SIP_UNREACHABLE = 8,
}

export enum CallMediaSetting {
    CALL_MEDIA_SETTING_UNCHANGED = 0,
    CALL_MEDIA_SETTING_ON = 1,
    CALL_MEDIA_SETTING_OFF = 2,
}

export enum ParticipantMode {
    PARTICIPANT_MODE_UNSPECIFIED = 0,
    PARTICIPANT_MODE_CONFERENCE = 1,
    PARTICIPANT_MODE_MONITOR = 2,
}

export enum BotPolicyOnJoin {
    BOT_POLICY_ON_JOIN_UNSPECIFIED = 0,
    BOT_POLICY_ON_JOIN_PAUSE = 1,
    BOT_POLICY_ON_JOIN_PAUSE_LISTENING = 2,
    BOT_POLICY_ON_JOIN_KEEP = 3,
}

export enum ParticipantState {
    PARTICIPANT_STATE_UNSPECIFIED = 0,
    PARTICIPANT_STATE_RINGING = 1,
    PARTICIPANT_STATE_JOINED = 2,
    PARTICIPANT_STATE_FAILED = 3,
    PARTICIPANT_STATE_LEFT = 4,
}

export enum ParticipantEndReason {
    PARTICIPANT_END_REASON_UNSPECIFIED = 0,
    PARTICIPANT_END_REASON_NO_ANSWER = 1,
    PARTICIPANT_END_REASON_BUSY = 2,
    PARTICIPANT_END_REASON_CHANNEL_UNAVAILABLE = 3,
    PARTICIPANT_END_REASON_CALL_ENDED = 4,
    PARTICIPANT_END_REASON_REMOVED = 5,
    PARTICIPANT_END_REASON_HANGUP = 6,
    PARTICIPANT_END_REASON_HANDED_OVER = 7,
    PARTICIPANT_END_REASON_JOIN_FAILED = 8,
    PARTICIPANT_END_REASON_TIMEOUT = 9,
}

export enum CallAudioMode {
    CALL_AUDIO_MODE_UNSPECIFIED = 0,
    CALL_AUDIO_MODE_LISTEN = 1,
    CALL_AUDIO_MODE_TALK = 2,
}

export enum CallAudioEndReason {
    CALL_AUDIO_END_REASON_UNSPECIFIED = 0,
    CALL_AUDIO_END_REASON_CLIENT_CLOSED = 1,
    CALL_AUDIO_END_REASON_CALL_ENDED = 2,
    CALL_AUDIO_END_REASON_CALL_TRANSFERRED = 3,
    CALL_AUDIO_END_REASON_MAX_DURATION = 4,
    CALL_AUDIO_END_REASON_STALLED = 5,
    CALL_AUDIO_END_REASON_INTERNAL = 6,
}

export enum CallView {
    MINIMUM = 0,
    SHALLOW = 1,
    FULL = 2,
}

export enum CallStatus {
    CALL_STATUS_UNSPECIFIED = 0,
    CALL_STATUS_ACTIVE = 1,
    CALL_STATUS_INACTIVE = 2,
}

export enum CallType {
    BOTH = 0,
    LISTENER = 1,
    CALLER = 2,
    SCHEDULED_CALLER = 3,
}
