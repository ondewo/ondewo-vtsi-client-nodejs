// package: ondewo.vtsi
// file: ondewo/vtsi/ivr_menus.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_vtsi_calls_pb from "../../ondewo/vtsi/calls_pb";
import * as ondewo_vtsi_campaigns_pb from "../../ondewo/vtsi/campaigns_pb";

export class IvrMenu extends jspb.Message { 
    getName(): string;
    setName(value: string): IvrMenu;
    getDisplayName(): string;
    setDisplayName(value: string): IvrMenu;
    getDescription(): string;
    setDescription(value: string): IvrMenu;
    getEntryNodeId(): string;
    setEntryNodeId(value: string): IvrMenu;
    clearNodesList(): void;
    getNodesList(): Array<IvrNode>;
    setNodesList(value: Array<IvrNode>): IvrMenu;
    addNodes(value?: IvrNode, index?: number): IvrNode;
    getLanguageCode(): string;
    setLanguageCode(value: string): IvrMenu;
    getT2sPipelineId(): string;
    setT2sPipelineId(value: string): IvrMenu;
    clearInboundPhoneNumbersList(): void;
    getInboundPhoneNumbersList(): Array<string>;
    setInboundPhoneNumbersList(value: Array<string>): IvrMenu;
    addInboundPhoneNumbers(value: string, index?: number): string;
    getDefaultInbound(): boolean;
    setDefaultInbound(value: boolean): IvrMenu;
    getDisabled(): boolean;
    setDisabled(value: boolean): IvrMenu;
    getState(): IvrMenuState;
    setState(value: IvrMenuState): IvrMenu;
    getRevision(): number;
    setRevision(value: number): IvrMenu;
    getPublishedRevision(): number;
    setPublishedRevision(value: number): IvrMenu;
    getStateMessage(): string;
    setStateMessage(value: string): IvrMenu;

    getLayoutMap(): jspb.Map<string, IvrNodePosition>;
    clearLayoutMap(): void;
    getCreatedBy(): string;
    setCreatedBy(value: string): IvrMenu;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): IvrMenu;
    getModifiedBy(): string;
    setModifiedBy(value: string): IvrMenu;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): IvrMenu;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): IvrMenu;
    getPublishedBy(): string;
    setPublishedBy(value: string): IvrMenu;

    getNodeStatsMap(): jspb.Map<string, IvrNodeStats>;
    clearNodeStatsMap(): void;

    hasNodeStatsUpdatedAt(): boolean;
    clearNodeStatsUpdatedAt(): void;
    getNodeStatsUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setNodeStatsUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): IvrMenu;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IvrMenu.AsObject;
    static toObject(includeInstance: boolean, msg: IvrMenu): IvrMenu.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IvrMenu, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IvrMenu;
    static deserializeBinaryFromReader(message: IvrMenu, reader: jspb.BinaryReader): IvrMenu;
}

export namespace IvrMenu {
    export type AsObject = {
        name: string,
        displayName: string,
        description: string,
        entryNodeId: string,
        nodesList: Array<IvrNode.AsObject>,
        languageCode: string,
        t2sPipelineId: string,
        inboundPhoneNumbersList: Array<string>,
        defaultInbound: boolean,
        disabled: boolean,
        state: IvrMenuState,
        revision: number,
        publishedRevision: number,
        stateMessage: string,

        layoutMap: Array<[string, IvrNodePosition.AsObject]>,
        createdBy: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedBy: string,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedBy: string,

        nodeStatsMap: Array<[string, IvrNodeStats.AsObject]>,
        nodeStatsUpdatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class IvrNode extends jspb.Message { 
    getNodeId(): string;
    setNodeId(value: string): IvrNode;
    getDisplayName(): string;
    setDisplayName(value: string): IvrNode;
    getType(): IvrNodeType;
    setType(value: IvrNodeType): IvrNode;

    hasPrompt(): boolean;
    clearPrompt(): void;
    getPrompt(): IvrPrompt | undefined;
    setPrompt(value?: IvrPrompt): IvrNode;
    clearOptionsList(): void;
    getOptionsList(): Array<IvrOption>;
    setOptionsList(value: Array<IvrOption>): IvrNode;
    addOptions(value?: IvrOption, index?: number): IvrOption;
    getTimeoutS(): number;
    setTimeoutS(value: number): IvrNode;
    getMaxRetries(): number;
    setMaxRetries(value: number): IvrNode;
    getTimeoutNextNodeId(): string;
    setTimeoutNextNodeId(value: string): IvrNode;
    getInvalidNextNodeId(): string;
    setInvalidNextNodeId(value: string): IvrNode;
    getNextNodeId(): string;
    setNextNodeId(value: string): IvrNode;

    hasRouteTarget(): boolean;
    clearRouteTarget(): void;
    getRouteTarget(): ondewo_vtsi_calls_pb.CallTarget | undefined;
    setRouteTarget(value?: ondewo_vtsi_calls_pb.CallTarget): IvrNode;

    hasSchedule(): boolean;
    clearSchedule(): void;
    getSchedule(): ondewo_vtsi_campaigns_pb.CampaignCallingWindow | undefined;
    setSchedule(value?: ondewo_vtsi_campaigns_pb.CampaignCallingWindow): IvrNode;
    getClosedNextNodeId(): string;
    setClosedNextNodeId(value: string): IvrNode;
    getBusyNextNodeId(): string;
    setBusyNextNodeId(value: string): IvrNode;

    hasReprompt(): boolean;
    clearReprompt(): void;
    getReprompt(): IvrPrompt | undefined;
    setReprompt(value?: IvrPrompt): IvrNode;
    getGotoMenuName(): string;
    setGotoMenuName(value: string): IvrNode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IvrNode.AsObject;
    static toObject(includeInstance: boolean, msg: IvrNode): IvrNode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IvrNode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IvrNode;
    static deserializeBinaryFromReader(message: IvrNode, reader: jspb.BinaryReader): IvrNode;
}

export namespace IvrNode {
    export type AsObject = {
        nodeId: string,
        displayName: string,
        type: IvrNodeType,
        prompt?: IvrPrompt.AsObject,
        optionsList: Array<IvrOption.AsObject>,
        timeoutS: number,
        maxRetries: number,
        timeoutNextNodeId: string,
        invalidNextNodeId: string,
        nextNodeId: string,
        routeTarget?: ondewo_vtsi_calls_pb.CallTarget.AsObject,
        schedule?: ondewo_vtsi_campaigns_pb.CampaignCallingWindow.AsObject,
        closedNextNodeId: string,
        busyNextNodeId: string,
        reprompt?: IvrPrompt.AsObject,
        gotoMenuName: string,
    }
}

export class IvrOption extends jspb.Message { 
    getDtmf(): string;
    setDtmf(value: string): IvrOption;
    getNextNodeId(): string;
    setNextNodeId(value: string): IvrOption;
    getLabel(): string;
    setLabel(value: string): IvrOption;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IvrOption.AsObject;
    static toObject(includeInstance: boolean, msg: IvrOption): IvrOption.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IvrOption, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IvrOption;
    static deserializeBinaryFromReader(message: IvrOption, reader: jspb.BinaryReader): IvrOption;
}

export namespace IvrOption {
    export type AsObject = {
        dtmf: string,
        nextNodeId: string,
        label: string,
    }
}

export class IvrPrompt extends jspb.Message { 

    hasText(): boolean;
    clearText(): void;
    getText(): string;
    setText(value: string): IvrPrompt;

    hasWav(): boolean;
    clearWav(): void;
    getWav(): Uint8Array | string;
    getWav_asU8(): Uint8Array;
    getWav_asB64(): string;
    setWav(value: Uint8Array | string): IvrPrompt;

    hasAsteriskSound(): boolean;
    clearAsteriskSound(): void;
    getAsteriskSound(): string;
    setAsteriskSound(value: string): IvrPrompt;
    getSha256(): string;
    setSha256(value: string): IvrPrompt;

    getSourceCase(): IvrPrompt.SourceCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IvrPrompt.AsObject;
    static toObject(includeInstance: boolean, msg: IvrPrompt): IvrPrompt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IvrPrompt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IvrPrompt;
    static deserializeBinaryFromReader(message: IvrPrompt, reader: jspb.BinaryReader): IvrPrompt;
}

export namespace IvrPrompt {
    export type AsObject = {
        text: string,
        wav: Uint8Array | string,
        asteriskSound: string,
        sha256: string,
    }

    export enum SourceCase {
        SOURCE_NOT_SET = 0,
        TEXT = 1,
        WAV = 2,
        ASTERISK_SOUND = 3,
    }

}

export class IvrNodePosition extends jspb.Message { 
    getX(): number;
    setX(value: number): IvrNodePosition;
    getY(): number;
    setY(value: number): IvrNodePosition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IvrNodePosition.AsObject;
    static toObject(includeInstance: boolean, msg: IvrNodePosition): IvrNodePosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IvrNodePosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IvrNodePosition;
    static deserializeBinaryFromReader(message: IvrNodePosition, reader: jspb.BinaryReader): IvrNodePosition;
}

export namespace IvrNodePosition {
    export type AsObject = {
        x: number,
        y: number,
    }
}

export class IvrNodeStats extends jspb.Message { 
    getPublishedRevisionEntries(): number;
    setPublishedRevisionEntries(value: number): IvrNodeStats;
    getTotalEntries(): number;
    setTotalEntries(value: number): IvrNodeStats;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IvrNodeStats.AsObject;
    static toObject(includeInstance: boolean, msg: IvrNodeStats): IvrNodeStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IvrNodeStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IvrNodeStats;
    static deserializeBinaryFromReader(message: IvrNodeStats, reader: jspb.BinaryReader): IvrNodeStats;
}

export namespace IvrNodeStats {
    export type AsObject = {
        publishedRevisionEntries: number,
        totalEntries: number,
    }
}

export class CreateIvrMenuRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): CreateIvrMenuRequest;

    hasIvrMenu(): boolean;
    clearIvrMenu(): void;
    getIvrMenu(): IvrMenu | undefined;
    setIvrMenu(value?: IvrMenu): CreateIvrMenuRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): CreateIvrMenuRequest;
    getIdempotencyKey(): string;
    setIdempotencyKey(value: string): CreateIvrMenuRequest;
    getValidateOnly(): boolean;
    setValidateOnly(value: boolean): CreateIvrMenuRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateIvrMenuRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateIvrMenuRequest): CreateIvrMenuRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateIvrMenuRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateIvrMenuRequest;
    static deserializeBinaryFromReader(message: CreateIvrMenuRequest, reader: jspb.BinaryReader): CreateIvrMenuRequest;
}

export namespace CreateIvrMenuRequest {
    export type AsObject = {
        vtsiProjectName: string,
        ivrMenu?: IvrMenu.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        idempotencyKey: string,
        validateOnly: boolean,
    }
}

export class GetIvrMenuRequest extends jspb.Message { 

    hasName(): boolean;
    clearName(): void;
    getName(): string;
    setName(value: string): GetIvrMenuRequest;

    hasDisplayName(): boolean;
    clearDisplayName(): void;
    getDisplayName(): string;
    setDisplayName(value: string): GetIvrMenuRequest;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): GetIvrMenuRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetIvrMenuRequest;

    getIvrMenuCase(): GetIvrMenuRequest.IvrMenuCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetIvrMenuRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetIvrMenuRequest): GetIvrMenuRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetIvrMenuRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetIvrMenuRequest;
    static deserializeBinaryFromReader(message: GetIvrMenuRequest, reader: jspb.BinaryReader): GetIvrMenuRequest;
}

export namespace GetIvrMenuRequest {
    export type AsObject = {
        name: string,
        displayName: string,
        vtsiProjectName: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }

    export enum IvrMenuCase {
        IVR_MENU_NOT_SET = 0,
        NAME = 1,
        DISPLAY_NAME = 2,
    }

}

export class UpdateIvrMenuRequest extends jspb.Message { 

    hasIvrMenu(): boolean;
    clearIvrMenu(): void;
    getIvrMenu(): IvrMenu | undefined;
    setIvrMenu(value?: IvrMenu): UpdateIvrMenuRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateIvrMenuRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateIvrMenuRequest;
    getValidateOnly(): boolean;
    setValidateOnly(value: boolean): UpdateIvrMenuRequest;
    getExpectedRevision(): number;
    setExpectedRevision(value: number): UpdateIvrMenuRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateIvrMenuRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateIvrMenuRequest): UpdateIvrMenuRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateIvrMenuRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateIvrMenuRequest;
    static deserializeBinaryFromReader(message: UpdateIvrMenuRequest, reader: jspb.BinaryReader): UpdateIvrMenuRequest;
}

export namespace UpdateIvrMenuRequest {
    export type AsObject = {
        ivrMenu?: IvrMenu.AsObject,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        validateOnly: boolean,
        expectedRevision: number,
    }
}

export class DeleteIvrMenuRequest extends jspb.Message { 

    hasName(): boolean;
    clearName(): void;
    getName(): string;
    setName(value: string): DeleteIvrMenuRequest;

    hasDisplayName(): boolean;
    clearDisplayName(): void;
    getDisplayName(): string;
    setDisplayName(value: string): DeleteIvrMenuRequest;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): DeleteIvrMenuRequest;
    getForce(): boolean;
    setForce(value: boolean): DeleteIvrMenuRequest;

    getIvrMenuCase(): DeleteIvrMenuRequest.IvrMenuCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteIvrMenuRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteIvrMenuRequest): DeleteIvrMenuRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteIvrMenuRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteIvrMenuRequest;
    static deserializeBinaryFromReader(message: DeleteIvrMenuRequest, reader: jspb.BinaryReader): DeleteIvrMenuRequest;
}

export namespace DeleteIvrMenuRequest {
    export type AsObject = {
        name: string,
        displayName: string,
        vtsiProjectName: string,
        force: boolean,
    }

    export enum IvrMenuCase {
        IVR_MENU_NOT_SET = 0,
        NAME = 1,
        DISPLAY_NAME = 2,
    }

}

export class DeleteIvrMenuResponse extends jspb.Message { 
    getUnroutedPhoneNumbers(): number;
    setUnroutedPhoneNumbers(value: number): DeleteIvrMenuResponse;
    getDefaultInboundRemoved(): boolean;
    setDefaultInboundRemoved(value: boolean): DeleteIvrMenuResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteIvrMenuResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteIvrMenuResponse): DeleteIvrMenuResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteIvrMenuResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteIvrMenuResponse;
    static deserializeBinaryFromReader(message: DeleteIvrMenuResponse, reader: jspb.BinaryReader): DeleteIvrMenuResponse;
}

export namespace DeleteIvrMenuResponse {
    export type AsObject = {
        unroutedPhoneNumbers: number,
        defaultInboundRemoved: boolean,
    }
}

export class IvrMenuFilter extends jspb.Message { 
    getDisplayNameContains(): string;
    setDisplayNameContains(value: string): IvrMenuFilter;
    getState(): IvrMenuState;
    setState(value: IvrMenuState): IvrMenuFilter;
    getInboundPhoneNumber(): string;
    setInboundPhoneNumber(value: string): IvrMenuFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IvrMenuFilter.AsObject;
    static toObject(includeInstance: boolean, msg: IvrMenuFilter): IvrMenuFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IvrMenuFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IvrMenuFilter;
    static deserializeBinaryFromReader(message: IvrMenuFilter, reader: jspb.BinaryReader): IvrMenuFilter;
}

export namespace IvrMenuFilter {
    export type AsObject = {
        displayNameContains: string,
        state: IvrMenuState,
        inboundPhoneNumber: string,
    }
}

export class ListIvrMenusRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): ListIvrMenusRequest;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): IvrMenuFilter | undefined;
    setFilter(value?: IvrMenuFilter): ListIvrMenusRequest;
    getPageSize(): number;
    setPageSize(value: number): ListIvrMenusRequest;

    hasPageToken(): boolean;
    clearPageToken(): void;
    getPageToken(): string | undefined;
    setPageToken(value: string): ListIvrMenusRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListIvrMenusRequest;
    getOrderBy(): IvrMenuOrderBy;
    setOrderBy(value: IvrMenuOrderBy): ListIvrMenusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListIvrMenusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListIvrMenusRequest): ListIvrMenusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListIvrMenusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListIvrMenusRequest;
    static deserializeBinaryFromReader(message: ListIvrMenusRequest, reader: jspb.BinaryReader): ListIvrMenusRequest;
}

export namespace ListIvrMenusRequest {
    export type AsObject = {
        vtsiProjectName: string,
        filter?: IvrMenuFilter.AsObject,
        pageSize: number,
        pageToken?: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        orderBy: IvrMenuOrderBy,
    }
}

export class ListIvrMenusResponse extends jspb.Message { 
    clearIvrMenusList(): void;
    getIvrMenusList(): Array<IvrMenu>;
    setIvrMenusList(value: Array<IvrMenu>): ListIvrMenusResponse;
    addIvrMenus(value?: IvrMenu, index?: number): IvrMenu;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListIvrMenusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListIvrMenusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListIvrMenusResponse): ListIvrMenusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListIvrMenusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListIvrMenusResponse;
    static deserializeBinaryFromReader(message: ListIvrMenusResponse, reader: jspb.BinaryReader): ListIvrMenusResponse;
}

export namespace ListIvrMenusResponse {
    export type AsObject = {
        ivrMenusList: Array<IvrMenu.AsObject>,
        nextPageToken: string,
    }
}

export class ValidateIvrMenuRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): ValidateIvrMenuRequest;

    hasIvrMenu(): boolean;
    clearIvrMenu(): void;
    getIvrMenu(): IvrMenu | undefined;
    setIvrMenu(value?: IvrMenu): ValidateIvrMenuRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateIvrMenuRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateIvrMenuRequest): ValidateIvrMenuRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateIvrMenuRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateIvrMenuRequest;
    static deserializeBinaryFromReader(message: ValidateIvrMenuRequest, reader: jspb.BinaryReader): ValidateIvrMenuRequest;
}

export namespace ValidateIvrMenuRequest {
    export type AsObject = {
        vtsiProjectName: string,
        ivrMenu?: IvrMenu.AsObject,
    }
}

export class IvrMenuIssue extends jspb.Message { 
    getSeverity(): IvrMenuIssueSeverity;
    setSeverity(value: IvrMenuIssueSeverity): IvrMenuIssue;
    getCode(): string;
    setCode(value: string): IvrMenuIssue;
    getPath(): string;
    setPath(value: string): IvrMenuIssue;
    getNodeId(): string;
    setNodeId(value: string): IvrMenuIssue;
    getMessage(): string;
    setMessage(value: string): IvrMenuIssue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IvrMenuIssue.AsObject;
    static toObject(includeInstance: boolean, msg: IvrMenuIssue): IvrMenuIssue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IvrMenuIssue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IvrMenuIssue;
    static deserializeBinaryFromReader(message: IvrMenuIssue, reader: jspb.BinaryReader): IvrMenuIssue;
}

export namespace IvrMenuIssue {
    export type AsObject = {
        severity: IvrMenuIssueSeverity,
        code: string,
        path: string,
        nodeId: string,
        message: string,
    }
}

export class ValidateIvrMenuResponse extends jspb.Message { 
    clearIssuesList(): void;
    getIssuesList(): Array<IvrMenuIssue>;
    setIssuesList(value: Array<IvrMenuIssue>): ValidateIvrMenuResponse;
    addIssues(value?: IvrMenuIssue, index?: number): IvrMenuIssue;
    getValid(): boolean;
    setValid(value: boolean): ValidateIvrMenuResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateIvrMenuResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateIvrMenuResponse): ValidateIvrMenuResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateIvrMenuResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateIvrMenuResponse;
    static deserializeBinaryFromReader(message: ValidateIvrMenuResponse, reader: jspb.BinaryReader): ValidateIvrMenuResponse;
}

export namespace ValidateIvrMenuResponse {
    export type AsObject = {
        issuesList: Array<IvrMenuIssue.AsObject>,
        valid: boolean,
    }
}

export class PublishIvrMenuRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): PublishIvrMenuRequest;
    getRevision(): number;
    setRevision(value: number): PublishIvrMenuRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PublishIvrMenuRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PublishIvrMenuRequest): PublishIvrMenuRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PublishIvrMenuRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PublishIvrMenuRequest;
    static deserializeBinaryFromReader(message: PublishIvrMenuRequest, reader: jspb.BinaryReader): PublishIvrMenuRequest;
}

export namespace PublishIvrMenuRequest {
    export type AsObject = {
        name: string,
        revision: number,
    }
}

export class CloneIvrMenuRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CloneIvrMenuRequest;
    getDisplayName(): string;
    setDisplayName(value: string): CloneIvrMenuRequest;
    getRevision(): number;
    setRevision(value: number): CloneIvrMenuRequest;
    getIdempotencyKey(): string;
    setIdempotencyKey(value: string): CloneIvrMenuRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CloneIvrMenuRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CloneIvrMenuRequest): CloneIvrMenuRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CloneIvrMenuRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CloneIvrMenuRequest;
    static deserializeBinaryFromReader(message: CloneIvrMenuRequest, reader: jspb.BinaryReader): CloneIvrMenuRequest;
}

export namespace CloneIvrMenuRequest {
    export type AsObject = {
        name: string,
        displayName: string,
        revision: number,
        idempotencyKey: string,
    }
}

export class ListIvrMenuRevisionsRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): ListIvrMenuRevisionsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListIvrMenuRevisionsRequest;

    hasPageToken(): boolean;
    clearPageToken(): void;
    getPageToken(): string | undefined;
    setPageToken(value: string): ListIvrMenuRevisionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListIvrMenuRevisionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListIvrMenuRevisionsRequest): ListIvrMenuRevisionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListIvrMenuRevisionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListIvrMenuRevisionsRequest;
    static deserializeBinaryFromReader(message: ListIvrMenuRevisionsRequest, reader: jspb.BinaryReader): ListIvrMenuRevisionsRequest;
}

export namespace ListIvrMenuRevisionsRequest {
    export type AsObject = {
        name: string,
        pageSize: number,
        pageToken?: string,
    }
}

export class IvrMenuRevision extends jspb.Message { 
    getRevision(): number;
    setRevision(value: number): IvrMenuRevision;

    hasSnapshot(): boolean;
    clearSnapshot(): void;
    getSnapshot(): IvrMenu | undefined;
    setSnapshot(value?: IvrMenu): IvrMenuRevision;
    getModifiedBy(): string;
    setModifiedBy(value: string): IvrMenuRevision;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): IvrMenuRevision;
    getPublished(): boolean;
    setPublished(value: boolean): IvrMenuRevision;
    getLive(): boolean;
    setLive(value: boolean): IvrMenuRevision;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IvrMenuRevision.AsObject;
    static toObject(includeInstance: boolean, msg: IvrMenuRevision): IvrMenuRevision.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IvrMenuRevision, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IvrMenuRevision;
    static deserializeBinaryFromReader(message: IvrMenuRevision, reader: jspb.BinaryReader): IvrMenuRevision;
}

export namespace IvrMenuRevision {
    export type AsObject = {
        revision: number,
        snapshot?: IvrMenu.AsObject,
        modifiedBy: string,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        published: boolean,
        live: boolean,
    }
}

export class ListIvrMenuRevisionsResponse extends jspb.Message { 
    clearRevisionsList(): void;
    getRevisionsList(): Array<IvrMenuRevision>;
    setRevisionsList(value: Array<IvrMenuRevision>): ListIvrMenuRevisionsResponse;
    addRevisions(value?: IvrMenuRevision, index?: number): IvrMenuRevision;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListIvrMenuRevisionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListIvrMenuRevisionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListIvrMenuRevisionsResponse): ListIvrMenuRevisionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListIvrMenuRevisionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListIvrMenuRevisionsResponse;
    static deserializeBinaryFromReader(message: ListIvrMenuRevisionsResponse, reader: jspb.BinaryReader): ListIvrMenuRevisionsResponse;
}

export namespace ListIvrMenuRevisionsResponse {
    export type AsObject = {
        revisionsList: Array<IvrMenuRevision.AsObject>,
        nextPageToken: string,
    }
}

export class IvrTestStep extends jspb.Message { 
    getWaitMs(): number;
    setWaitMs(value: number): IvrTestStep;
    getDtmf(): string;
    setDtmf(value: string): IvrTestStep;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IvrTestStep.AsObject;
    static toObject(includeInstance: boolean, msg: IvrTestStep): IvrTestStep.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IvrTestStep, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IvrTestStep;
    static deserializeBinaryFromReader(message: IvrTestStep, reader: jspb.BinaryReader): IvrTestStep;
}

export namespace IvrTestStep {
    export type AsObject = {
        waitMs: number,
        dtmf: string,
    }
}

export class TestIvrMenuRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): TestIvrMenuRequest;
    clearStepsList(): void;
    getStepsList(): Array<IvrTestStep>;
    setStepsList(value: Array<IvrTestStep>): TestIvrMenuRequest;
    addSteps(value?: IvrTestStep, index?: number): IvrTestStep;
    getMaxDurationS(): number;
    setMaxDurationS(value: number): TestIvrMenuRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestIvrMenuRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TestIvrMenuRequest): TestIvrMenuRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestIvrMenuRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestIvrMenuRequest;
    static deserializeBinaryFromReader(message: TestIvrMenuRequest, reader: jspb.BinaryReader): TestIvrMenuRequest;
}

export namespace TestIvrMenuRequest {
    export type AsObject = {
        name: string,
        stepsList: Array<IvrTestStep.AsObject>,
        maxDurationS: number,
    }
}

export class GetIvrMenuTestRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetIvrMenuTestRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetIvrMenuTestRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetIvrMenuTestRequest): GetIvrMenuTestRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetIvrMenuTestRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetIvrMenuTestRequest;
    static deserializeBinaryFromReader(message: GetIvrMenuTestRequest, reader: jspb.BinaryReader): GetIvrMenuTestRequest;
}

export namespace GetIvrMenuTestRequest {
    export type AsObject = {
        name: string,
    }
}

export class IvrTraversalStep extends jspb.Message { 
    getNodeId(): string;
    setNodeId(value: string): IvrTraversalStep;
    getInput(): string;
    setInput(value: string): IvrTraversalStep;
    getNextNodeId(): string;
    setNextNodeId(value: string): IvrTraversalStep;

    hasEnteredAt(): boolean;
    clearEnteredAt(): void;
    getEnteredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEnteredAt(value?: google_protobuf_timestamp_pb.Timestamp): IvrTraversalStep;
    getIvrMenuName(): string;
    setIvrMenuName(value: string): IvrTraversalStep;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IvrTraversalStep.AsObject;
    static toObject(includeInstance: boolean, msg: IvrTraversalStep): IvrTraversalStep.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IvrTraversalStep, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IvrTraversalStep;
    static deserializeBinaryFromReader(message: IvrTraversalStep, reader: jspb.BinaryReader): IvrTraversalStep;
}

export namespace IvrTraversalStep {
    export type AsObject = {
        nodeId: string,
        input: string,
        nextNodeId: string,
        enteredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        ivrMenuName: string,
    }
}

export class IvrMenuTest extends jspb.Message { 
    getName(): string;
    setName(value: string): IvrMenuTest;
    getTestId(): string;
    setTestId(value: string): IvrMenuTest;
    getState(): IvrMenuTestState;
    setState(value: IvrMenuTestState): IvrMenuTest;
    getRevision(): number;
    setRevision(value: number): IvrMenuTest;
    clearPathList(): void;
    getPathList(): Array<IvrTraversalStep>;
    setPathList(value: Array<IvrTraversalStep>): IvrMenuTest;
    addPath(value?: IvrTraversalStep, index?: number): IvrTraversalStep;
    getFinalNodeId(): string;
    setFinalNodeId(value: string): IvrMenuTest;
    getRoute(): string;
    setRoute(value: string): IvrMenuTest;
    getErrorMessage(): string;
    setErrorMessage(value: string): IvrMenuTest;

    hasStartedAt(): boolean;
    clearStartedAt(): void;
    getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): IvrMenuTest;

    hasFinishedAt(): boolean;
    clearFinishedAt(): void;
    getFinishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFinishedAt(value?: google_protobuf_timestamp_pb.Timestamp): IvrMenuTest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IvrMenuTest.AsObject;
    static toObject(includeInstance: boolean, msg: IvrMenuTest): IvrMenuTest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IvrMenuTest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IvrMenuTest;
    static deserializeBinaryFromReader(message: IvrMenuTest, reader: jspb.BinaryReader): IvrMenuTest;
}

export namespace IvrMenuTest {
    export type AsObject = {
        name: string,
        testId: string,
        state: IvrMenuTestState,
        revision: number,
        pathList: Array<IvrTraversalStep.AsObject>,
        finalNodeId: string,
        route: string,
        errorMessage: string,
        startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        finishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class GetIvrMenuDialplanRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetIvrMenuDialplanRequest;
    getRevision(): number;
    setRevision(value: number): GetIvrMenuDialplanRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetIvrMenuDialplanRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetIvrMenuDialplanRequest): GetIvrMenuDialplanRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetIvrMenuDialplanRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetIvrMenuDialplanRequest;
    static deserializeBinaryFromReader(message: GetIvrMenuDialplanRequest, reader: jspb.BinaryReader): GetIvrMenuDialplanRequest;
}

export namespace GetIvrMenuDialplanRequest {
    export type AsObject = {
        name: string,
        revision: number,
    }
}

export class GetIvrMenuDialplanResponse extends jspb.Message { 
    getDialplan(): string;
    setDialplan(value: string): GetIvrMenuDialplanResponse;
    clearPromptFilesList(): void;
    getPromptFilesList(): Array<string>;
    setPromptFilesList(value: Array<string>): GetIvrMenuDialplanResponse;
    addPromptFiles(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetIvrMenuDialplanResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetIvrMenuDialplanResponse): GetIvrMenuDialplanResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetIvrMenuDialplanResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetIvrMenuDialplanResponse;
    static deserializeBinaryFromReader(message: GetIvrMenuDialplanResponse, reader: jspb.BinaryReader): GetIvrMenuDialplanResponse;
}

export namespace GetIvrMenuDialplanResponse {
    export type AsObject = {
        dialplan: string,
        promptFilesList: Array<string>,
    }
}

export enum IvrNodeType {
    IVR_NODE_TYPE_UNSPECIFIED = 0,
    IVR_NODE_TYPE_MENU = 1,
    IVR_NODE_TYPE_PLAY = 2,
    IVR_NODE_TYPE_ROUTE = 3,
    IVR_NODE_TYPE_HANGUP = 4,
    IVR_NODE_TYPE_SCHEDULE = 5,
    IVR_NODE_TYPE_GOTO_MENU = 6,
}

export enum IvrMenuState {
    IVR_MENU_STATE_UNSPECIFIED = 0,
    IVR_MENU_STATE_DRAFT = 1,
    IVR_MENU_STATE_PUBLISHED = 2,
    IVR_MENU_STATE_PUBLISH_FAILED = 3,
}

export enum IvrMenuOrderBy {
    IVR_MENU_ORDER_BY_UNSPECIFIED = 0,
    IVR_MENU_ORDER_BY_DISPLAY_NAME = 1,
    IVR_MENU_ORDER_BY_MODIFIED_AT_DESC = 2,
}

export enum IvrMenuIssueSeverity {
    IVR_MENU_ISSUE_SEVERITY_UNSPECIFIED = 0,
    IVR_MENU_ISSUE_SEVERITY_ERROR = 1,
    IVR_MENU_ISSUE_SEVERITY_WARNING = 2,
}

export enum IvrMenuTestState {
    IVR_MENU_TEST_STATE_UNSPECIFIED = 0,
    IVR_MENU_TEST_STATE_RUNNING = 1,
    IVR_MENU_TEST_STATE_SUCCEEDED = 2,
    IVR_MENU_TEST_STATE_TIMED_OUT = 3,
    IVR_MENU_TEST_STATE_FAILED = 4,
}
