// package: ondewo.vtsi
// file: ondewo/vtsi/events.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_sip_sip_pb from "../../ondewo/sip/sip_pb";
import * as ondewo_vtsi_campaigns_pb from "../../ondewo/vtsi/campaigns_pb";

export class VtsiEventMessage extends jspb.Message { 
    getEventId(): string;
    setEventId(value: string): VtsiEventMessage;
    getEvent(): VtsiEvent;
    setEvent(value: VtsiEvent): VtsiEventMessage;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): VtsiEventMessage;
    getResourceName(): string;
    setResourceName(value: string): VtsiEventMessage;

    hasEventTime(): boolean;
    clearEventTime(): void;
    getEventTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEventTime(value?: google_protobuf_timestamp_pb.Timestamp): VtsiEventMessage;

    hasSipStatusType(): boolean;
    clearSipStatusType(): void;
    getSipStatusType(): ondewo_sip_sip_pb.SipStatus.StatusType | undefined;
    setSipStatusType(value: ondewo_sip_sip_pb.SipStatus.StatusType): VtsiEventMessage;
    getSipStatusDescription(): string;
    setSipStatusDescription(value: string): VtsiEventMessage;

    hasPreviousSipStatusType(): boolean;
    clearPreviousSipStatusType(): void;
    getPreviousSipStatusType(): ondewo_sip_sip_pb.SipStatus.StatusType | undefined;
    setPreviousSipStatusType(value: ondewo_sip_sip_pb.SipStatus.StatusType): VtsiEventMessage;
    getCallName(): string;
    setCallName(value: string): VtsiEventMessage;
    getCampaignName(): string;
    setCampaignName(value: string): VtsiEventMessage;
    getDescription(): string;
    setDescription(value: string): VtsiEventMessage;

    getAttributesMap(): jspb.Map<string, string>;
    clearAttributesMap(): void;

    hasCampaignStatistics(): boolean;
    clearCampaignStatistics(): void;
    getCampaignStatistics(): ondewo_vtsi_campaigns_pb.CampaignStatistics | undefined;
    setCampaignStatistics(value?: ondewo_vtsi_campaigns_pb.CampaignStatistics): VtsiEventMessage;
    getResourceSequence(): number;
    setResourceSequence(value: number): VtsiEventMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VtsiEventMessage.AsObject;
    static toObject(includeInstance: boolean, msg: VtsiEventMessage): VtsiEventMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VtsiEventMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VtsiEventMessage;
    static deserializeBinaryFromReader(message: VtsiEventMessage, reader: jspb.BinaryReader): VtsiEventMessage;
}

export namespace VtsiEventMessage {
    export type AsObject = {
        eventId: string,
        event: VtsiEvent,
        vtsiProjectName: string,
        resourceName: string,
        eventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        sipStatusType?: ondewo_sip_sip_pb.SipStatus.StatusType,
        sipStatusDescription: string,
        previousSipStatusType?: ondewo_sip_sip_pb.SipStatus.StatusType,
        callName: string,
        campaignName: string,
        description: string,

        attributesMap: Array<[string, string]>,
        campaignStatistics?: ondewo_vtsi_campaigns_pb.CampaignStatistics.AsObject,
        resourceSequence: number,
    }
}

export class VtsiEventSubscription extends jspb.Message { 
    getName(): string;
    setName(value: string): VtsiEventSubscription;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): VtsiEventSubscription;
    getDisplayName(): string;
    setDisplayName(value: string): VtsiEventSubscription;
    clearEventsList(): void;
    getEventsList(): Array<VtsiEvent>;
    setEventsList(value: Array<VtsiEvent>): VtsiEventSubscription;
    addEvents(value: VtsiEvent, index?: number): VtsiEvent;
    getAllEvents(): boolean;
    setAllEvents(value: boolean): VtsiEventSubscription;
    clearResourceNamePrefixesList(): void;
    getResourceNamePrefixesList(): Array<string>;
    setResourceNamePrefixesList(value: Array<string>): VtsiEventSubscription;
    addResourceNamePrefixes(value: string, index?: number): string;
    clearWebhookNamesList(): void;
    getWebhookNamesList(): Array<string>;
    setWebhookNamesList(value: Array<string>): VtsiEventSubscription;
    addWebhookNames(value: string, index?: number): string;
    getDisabled(): boolean;
    setDisabled(value: boolean): VtsiEventSubscription;
    getCreatedBy(): string;
    setCreatedBy(value: string): VtsiEventSubscription;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): VtsiEventSubscription;
    getModifiedBy(): string;
    setModifiedBy(value: string): VtsiEventSubscription;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): VtsiEventSubscription;
    clearCampaignNamesList(): void;
    getCampaignNamesList(): Array<string>;
    setCampaignNamesList(value: Array<string>): VtsiEventSubscription;
    addCampaignNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VtsiEventSubscription.AsObject;
    static toObject(includeInstance: boolean, msg: VtsiEventSubscription): VtsiEventSubscription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VtsiEventSubscription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VtsiEventSubscription;
    static deserializeBinaryFromReader(message: VtsiEventSubscription, reader: jspb.BinaryReader): VtsiEventSubscription;
}

export namespace VtsiEventSubscription {
    export type AsObject = {
        name: string,
        vtsiProjectName: string,
        displayName: string,
        eventsList: Array<VtsiEvent>,
        allEvents: boolean,
        resourceNamePrefixesList: Array<string>,
        webhookNamesList: Array<string>,
        disabled: boolean,
        createdBy: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedBy: string,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        campaignNamesList: Array<string>,
    }
}

export class WebhookDeliveryStatistics extends jspb.Message { 
    getDeliveredCount(): number;
    setDeliveredCount(value: number): WebhookDeliveryStatistics;
    getFailedCount(): number;
    setFailedCount(value: number): WebhookDeliveryStatistics;
    getDroppedCount(): number;
    setDroppedCount(value: number): WebhookDeliveryStatistics;

    hasLastDeliveryTime(): boolean;
    clearLastDeliveryTime(): void;
    getLastDeliveryTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastDeliveryTime(value?: google_protobuf_timestamp_pb.Timestamp): WebhookDeliveryStatistics;

    hasLastSuccessTime(): boolean;
    clearLastSuccessTime(): void;
    getLastSuccessTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastSuccessTime(value?: google_protobuf_timestamp_pb.Timestamp): WebhookDeliveryStatistics;
    getLastHttpStatusCode(): number;
    setLastHttpStatusCode(value: number): WebhookDeliveryStatistics;
    getLastError(): string;
    setLastError(value: string): WebhookDeliveryStatistics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebhookDeliveryStatistics.AsObject;
    static toObject(includeInstance: boolean, msg: WebhookDeliveryStatistics): WebhookDeliveryStatistics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebhookDeliveryStatistics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebhookDeliveryStatistics;
    static deserializeBinaryFromReader(message: WebhookDeliveryStatistics, reader: jspb.BinaryReader): WebhookDeliveryStatistics;
}

export namespace WebhookDeliveryStatistics {
    export type AsObject = {
        deliveredCount: number,
        failedCount: number,
        droppedCount: number,
        lastDeliveryTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        lastSuccessTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        lastHttpStatusCode: number,
        lastError: string,
    }
}

export class Webhook extends jspb.Message { 
    getName(): string;
    setName(value: string): Webhook;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): Webhook;
    getDisplayName(): string;
    setDisplayName(value: string): Webhook;
    getUrl(): string;
    setUrl(value: string): Webhook;
    getHttpMethod(): WebhookHttpMethod;
    setHttpMethod(value: WebhookHttpMethod): Webhook;

    getCustomHeadersMap(): jspb.Map<string, string>;
    clearCustomHeadersMap(): void;
    getDisabled(): boolean;
    setDisabled(value: boolean): Webhook;

    hasTimeout(): boolean;
    clearTimeout(): void;
    getTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setTimeout(value?: google_protobuf_duration_pb.Duration): Webhook;

    hasDeliveryStatistics(): boolean;
    clearDeliveryStatistics(): void;
    getDeliveryStatistics(): WebhookDeliveryStatistics | undefined;
    setDeliveryStatistics(value?: WebhookDeliveryStatistics): Webhook;
    getCreatedBy(): string;
    setCreatedBy(value: string): Webhook;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Webhook;
    getModifiedBy(): string;
    setModifiedBy(value: string): Webhook;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Webhook;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Webhook.AsObject;
    static toObject(includeInstance: boolean, msg: Webhook): Webhook.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Webhook, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Webhook;
    static deserializeBinaryFromReader(message: Webhook, reader: jspb.BinaryReader): Webhook;
}

export namespace Webhook {
    export type AsObject = {
        name: string,
        vtsiProjectName: string,
        displayName: string,
        url: string,
        httpMethod: WebhookHttpMethod,

        customHeadersMap: Array<[string, string]>,
        disabled: boolean,
        timeout?: google_protobuf_duration_pb.Duration.AsObject,
        deliveryStatistics?: WebhookDeliveryStatistics.AsObject,
        createdBy: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedBy: string,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class VtsiEventFilter extends jspb.Message { 
    clearEventsList(): void;
    getEventsList(): Array<VtsiEvent>;
    setEventsList(value: Array<VtsiEvent>): VtsiEventFilter;
    addEvents(value: VtsiEvent, index?: number): VtsiEvent;
    clearResourceNamePrefixesList(): void;
    getResourceNamePrefixesList(): Array<string>;
    setResourceNamePrefixesList(value: Array<string>): VtsiEventFilter;
    addResourceNamePrefixes(value: string, index?: number): string;
    clearCampaignNamesList(): void;
    getCampaignNamesList(): Array<string>;
    setCampaignNamesList(value: Array<string>): VtsiEventFilter;
    addCampaignNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VtsiEventFilter.AsObject;
    static toObject(includeInstance: boolean, msg: VtsiEventFilter): VtsiEventFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VtsiEventFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VtsiEventFilter;
    static deserializeBinaryFromReader(message: VtsiEventFilter, reader: jspb.BinaryReader): VtsiEventFilter;
}

export namespace VtsiEventFilter {
    export type AsObject = {
        eventsList: Array<VtsiEvent>,
        resourceNamePrefixesList: Array<string>,
        campaignNamesList: Array<string>,
    }
}

export class CreateVtsiEventSubscriptionRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): CreateVtsiEventSubscriptionRequest;

    hasEventSubscription(): boolean;
    clearEventSubscription(): void;
    getEventSubscription(): VtsiEventSubscription | undefined;
    setEventSubscription(value?: VtsiEventSubscription): CreateVtsiEventSubscriptionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateVtsiEventSubscriptionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateVtsiEventSubscriptionRequest): CreateVtsiEventSubscriptionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateVtsiEventSubscriptionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateVtsiEventSubscriptionRequest;
    static deserializeBinaryFromReader(message: CreateVtsiEventSubscriptionRequest, reader: jspb.BinaryReader): CreateVtsiEventSubscriptionRequest;
}

export namespace CreateVtsiEventSubscriptionRequest {
    export type AsObject = {
        vtsiProjectName: string,
        eventSubscription?: VtsiEventSubscription.AsObject,
    }
}

export class GetVtsiEventSubscriptionRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetVtsiEventSubscriptionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVtsiEventSubscriptionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetVtsiEventSubscriptionRequest): GetVtsiEventSubscriptionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVtsiEventSubscriptionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVtsiEventSubscriptionRequest;
    static deserializeBinaryFromReader(message: GetVtsiEventSubscriptionRequest, reader: jspb.BinaryReader): GetVtsiEventSubscriptionRequest;
}

export namespace GetVtsiEventSubscriptionRequest {
    export type AsObject = {
        name: string,
    }
}

export class UpdateVtsiEventSubscriptionRequest extends jspb.Message { 

    hasEventSubscription(): boolean;
    clearEventSubscription(): void;
    getEventSubscription(): VtsiEventSubscription | undefined;
    setEventSubscription(value?: VtsiEventSubscription): UpdateVtsiEventSubscriptionRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateVtsiEventSubscriptionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateVtsiEventSubscriptionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateVtsiEventSubscriptionRequest): UpdateVtsiEventSubscriptionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateVtsiEventSubscriptionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateVtsiEventSubscriptionRequest;
    static deserializeBinaryFromReader(message: UpdateVtsiEventSubscriptionRequest, reader: jspb.BinaryReader): UpdateVtsiEventSubscriptionRequest;
}

export namespace UpdateVtsiEventSubscriptionRequest {
    export type AsObject = {
        eventSubscription?: VtsiEventSubscription.AsObject,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class DeleteVtsiEventSubscriptionRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteVtsiEventSubscriptionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteVtsiEventSubscriptionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteVtsiEventSubscriptionRequest): DeleteVtsiEventSubscriptionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteVtsiEventSubscriptionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteVtsiEventSubscriptionRequest;
    static deserializeBinaryFromReader(message: DeleteVtsiEventSubscriptionRequest, reader: jspb.BinaryReader): DeleteVtsiEventSubscriptionRequest;
}

export namespace DeleteVtsiEventSubscriptionRequest {
    export type AsObject = {
        name: string,
    }
}

export class DeleteVtsiEventSubscriptionResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteVtsiEventSubscriptionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteVtsiEventSubscriptionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteVtsiEventSubscriptionResponse): DeleteVtsiEventSubscriptionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteVtsiEventSubscriptionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteVtsiEventSubscriptionResponse;
    static deserializeBinaryFromReader(message: DeleteVtsiEventSubscriptionResponse, reader: jspb.BinaryReader): DeleteVtsiEventSubscriptionResponse;
}

export namespace DeleteVtsiEventSubscriptionResponse {
    export type AsObject = {
        name: string,
    }
}

export class ListVtsiEventSubscriptionsRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): ListVtsiEventSubscriptionsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListVtsiEventSubscriptionsRequest;

    hasPageToken(): boolean;
    clearPageToken(): void;
    getPageToken(): string | undefined;
    setPageToken(value: string): ListVtsiEventSubscriptionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListVtsiEventSubscriptionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListVtsiEventSubscriptionsRequest): ListVtsiEventSubscriptionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListVtsiEventSubscriptionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListVtsiEventSubscriptionsRequest;
    static deserializeBinaryFromReader(message: ListVtsiEventSubscriptionsRequest, reader: jspb.BinaryReader): ListVtsiEventSubscriptionsRequest;
}

export namespace ListVtsiEventSubscriptionsRequest {
    export type AsObject = {
        vtsiProjectName: string,
        pageSize: number,
        pageToken?: string,
    }
}

export class ListVtsiEventSubscriptionsResponse extends jspb.Message { 
    clearEventSubscriptionsList(): void;
    getEventSubscriptionsList(): Array<VtsiEventSubscription>;
    setEventSubscriptionsList(value: Array<VtsiEventSubscription>): ListVtsiEventSubscriptionsResponse;
    addEventSubscriptions(value?: VtsiEventSubscription, index?: number): VtsiEventSubscription;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListVtsiEventSubscriptionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListVtsiEventSubscriptionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListVtsiEventSubscriptionsResponse): ListVtsiEventSubscriptionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListVtsiEventSubscriptionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListVtsiEventSubscriptionsResponse;
    static deserializeBinaryFromReader(message: ListVtsiEventSubscriptionsResponse, reader: jspb.BinaryReader): ListVtsiEventSubscriptionsResponse;
}

export namespace ListVtsiEventSubscriptionsResponse {
    export type AsObject = {
        eventSubscriptionsList: Array<VtsiEventSubscription.AsObject>,
        nextPageToken: string,
    }
}

export class CreateWebhookRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): CreateWebhookRequest;

    hasWebhook(): boolean;
    clearWebhook(): void;
    getWebhook(): Webhook | undefined;
    setWebhook(value?: Webhook): CreateWebhookRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateWebhookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateWebhookRequest): CreateWebhookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateWebhookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateWebhookRequest;
    static deserializeBinaryFromReader(message: CreateWebhookRequest, reader: jspb.BinaryReader): CreateWebhookRequest;
}

export namespace CreateWebhookRequest {
    export type AsObject = {
        vtsiProjectName: string,
        webhook?: Webhook.AsObject,
    }
}

export class GetWebhookRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetWebhookRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWebhookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetWebhookRequest): GetWebhookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWebhookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWebhookRequest;
    static deserializeBinaryFromReader(message: GetWebhookRequest, reader: jspb.BinaryReader): GetWebhookRequest;
}

export namespace GetWebhookRequest {
    export type AsObject = {
        name: string,
    }
}

export class UpdateWebhookRequest extends jspb.Message { 

    hasWebhook(): boolean;
    clearWebhook(): void;
    getWebhook(): Webhook | undefined;
    setWebhook(value?: Webhook): UpdateWebhookRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateWebhookRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateWebhookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateWebhookRequest): UpdateWebhookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateWebhookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateWebhookRequest;
    static deserializeBinaryFromReader(message: UpdateWebhookRequest, reader: jspb.BinaryReader): UpdateWebhookRequest;
}

export namespace UpdateWebhookRequest {
    export type AsObject = {
        webhook?: Webhook.AsObject,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class DeleteWebhookRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteWebhookRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteWebhookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteWebhookRequest): DeleteWebhookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteWebhookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteWebhookRequest;
    static deserializeBinaryFromReader(message: DeleteWebhookRequest, reader: jspb.BinaryReader): DeleteWebhookRequest;
}

export namespace DeleteWebhookRequest {
    export type AsObject = {
        name: string,
    }
}

export class DeleteWebhookResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteWebhookResponse;
    getDetachedSubscriptionCount(): number;
    setDetachedSubscriptionCount(value: number): DeleteWebhookResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteWebhookResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteWebhookResponse): DeleteWebhookResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteWebhookResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteWebhookResponse;
    static deserializeBinaryFromReader(message: DeleteWebhookResponse, reader: jspb.BinaryReader): DeleteWebhookResponse;
}

export namespace DeleteWebhookResponse {
    export type AsObject = {
        name: string,
        detachedSubscriptionCount: number,
    }
}

export class ListWebhooksRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): ListWebhooksRequest;
    getPageSize(): number;
    setPageSize(value: number): ListWebhooksRequest;

    hasPageToken(): boolean;
    clearPageToken(): void;
    getPageToken(): string | undefined;
    setPageToken(value: string): ListWebhooksRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWebhooksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListWebhooksRequest): ListWebhooksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWebhooksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWebhooksRequest;
    static deserializeBinaryFromReader(message: ListWebhooksRequest, reader: jspb.BinaryReader): ListWebhooksRequest;
}

export namespace ListWebhooksRequest {
    export type AsObject = {
        vtsiProjectName: string,
        pageSize: number,
        pageToken?: string,
    }
}

export class ListWebhooksResponse extends jspb.Message { 
    clearWebhooksList(): void;
    getWebhooksList(): Array<Webhook>;
    setWebhooksList(value: Array<Webhook>): ListWebhooksResponse;
    addWebhooks(value?: Webhook, index?: number): Webhook;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListWebhooksResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWebhooksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListWebhooksResponse): ListWebhooksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWebhooksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWebhooksResponse;
    static deserializeBinaryFromReader(message: ListWebhooksResponse, reader: jspb.BinaryReader): ListWebhooksResponse;
}

export namespace ListWebhooksResponse {
    export type AsObject = {
        webhooksList: Array<Webhook.AsObject>,
        nextPageToken: string,
    }
}

export class TestWebhookRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): TestWebhookRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestWebhookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TestWebhookRequest): TestWebhookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestWebhookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestWebhookRequest;
    static deserializeBinaryFromReader(message: TestWebhookRequest, reader: jspb.BinaryReader): TestWebhookRequest;
}

export namespace TestWebhookRequest {
    export type AsObject = {
        name: string,
    }
}

export class TestWebhookResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): TestWebhookResponse;
    getHttpStatusCode(): number;
    setHttpStatusCode(value: number): TestWebhookResponse;

    hasLatency(): boolean;
    clearLatency(): void;
    getLatency(): google_protobuf_duration_pb.Duration | undefined;
    setLatency(value?: google_protobuf_duration_pb.Duration): TestWebhookResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): TestWebhookResponse;
    getEventId(): string;
    setEventId(value: string): TestWebhookResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestWebhookResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TestWebhookResponse): TestWebhookResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestWebhookResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestWebhookResponse;
    static deserializeBinaryFromReader(message: TestWebhookResponse, reader: jspb.BinaryReader): TestWebhookResponse;
}

export namespace TestWebhookResponse {
    export type AsObject = {
        success: boolean,
        httpStatusCode: number,
        latency?: google_protobuf_duration_pb.Duration.AsObject,
        errorMessage: string,
        eventId: string,
    }
}

export class SubscribeVtsiEventsRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): SubscribeVtsiEventsRequest;

    hasEventSubscriptionName(): boolean;
    clearEventSubscriptionName(): void;
    getEventSubscriptionName(): string;
    setEventSubscriptionName(value: string): SubscribeVtsiEventsRequest;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): VtsiEventFilter | undefined;
    setFilter(value?: VtsiEventFilter): SubscribeVtsiEventsRequest;

    hasResumeToken(): boolean;
    clearResumeToken(): void;
    getResumeToken(): string | undefined;
    setResumeToken(value: string): SubscribeVtsiEventsRequest;

    getSelectorCase(): SubscribeVtsiEventsRequest.SelectorCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeVtsiEventsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeVtsiEventsRequest): SubscribeVtsiEventsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeVtsiEventsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeVtsiEventsRequest;
    static deserializeBinaryFromReader(message: SubscribeVtsiEventsRequest, reader: jspb.BinaryReader): SubscribeVtsiEventsRequest;
}

export namespace SubscribeVtsiEventsRequest {
    export type AsObject = {
        vtsiProjectName: string,
        eventSubscriptionName: string,
        filter?: VtsiEventFilter.AsObject,
        resumeToken?: string,
    }

    export enum SelectorCase {
        SELECTOR_NOT_SET = 0,
        EVENT_SUBSCRIPTION_NAME = 2,
        FILTER = 3,
    }

}

export class SubscribeVtsiEventsResponse extends jspb.Message { 
    clearEventsList(): void;
    getEventsList(): Array<VtsiEventMessage>;
    setEventsList(value: Array<VtsiEventMessage>): SubscribeVtsiEventsResponse;
    addEvents(value?: VtsiEventMessage, index?: number): VtsiEventMessage;
    getResumeToken(): string;
    setResumeToken(value: string): SubscribeVtsiEventsResponse;
    getDroppedEventCount(): number;
    setDroppedEventCount(value: number): SubscribeVtsiEventsResponse;
    getEndReason(): string;
    setEndReason(value: string): SubscribeVtsiEventsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeVtsiEventsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeVtsiEventsResponse): SubscribeVtsiEventsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeVtsiEventsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeVtsiEventsResponse;
    static deserializeBinaryFromReader(message: SubscribeVtsiEventsResponse, reader: jspb.BinaryReader): SubscribeVtsiEventsResponse;
}

export namespace SubscribeVtsiEventsResponse {
    export type AsObject = {
        eventsList: Array<VtsiEventMessage.AsObject>,
        resumeToken: string,
        droppedEventCount: number,
        endReason: string,
    }
}

export enum VtsiEvent {
    VTSI_EVENT_UNSPECIFIED = 0,
    VTSI_EVENT_CALL_CREATED = 100,
    VTSI_EVENT_CALL_INITIATED = 101,
    VTSI_EVENT_CALL_CONNECTED = 102,
    VTSI_EVENT_CALL_FINISHED = 103,
    VTSI_EVENT_CALL_FAILED = 104,
    VTSI_EVENT_CALL_TRANSFER_INITIATED = 105,
    VTSI_EVENT_CALL_TRANSFERRED = 106,
    VTSI_EVENT_CALL_TRANSFER_FAILED = 107,
    VTSI_EVENT_CALL_HANGUP_INITIATED = 108,
    VTSI_EVENT_CALL_ANSWERING_MACHINE_DETECTED = 109,
    VTSI_EVENT_CALL_STOPPED = 110,
    VTSI_EVENT_CALL_SIP_STATUS_CHANGED = 111,
    VTSI_EVENT_CALL_PARTICIPANT_INVITED = 112,
    VTSI_EVENT_CALL_PARTICIPANT_JOINED = 113,
    VTSI_EVENT_CALL_PARTICIPANT_FAILED = 114,
    VTSI_EVENT_CALL_PARTICIPANT_LEFT = 115,
    VTSI_EVENT_CALL_BOT_MUTED = 116,
    VTSI_EVENT_CALL_BOT_UNMUTED = 117,
    VTSI_EVENT_CALL_LISTENING_PAUSED = 118,
    VTSI_EVENT_CALL_LISTENING_RESUMED = 119,
    VTSI_EVENT_CALL_AUDIO_STREAM_CONNECTED = 120,
    VTSI_EVENT_CALL_AUDIO_STREAM_DISCONNECTED = 121,
    VTSI_EVENT_CALLER_STARTED = 200,
    VTSI_EVENT_CALLER_START_FAILED = 201,
    VTSI_EVENT_CALLER_STOPPED = 202,
    VTSI_EVENT_CALLER_DELETED = 203,
    VTSI_EVENT_CALLER_RESTARTED = 204,
    VTSI_EVENT_CALLER_UNHEALTHY = 205,
    VTSI_EVENT_CALLER_HEALTHY = 206,
    VTSI_EVENT_LISTENER_STARTED = 300,
    VTSI_EVENT_LISTENER_START_FAILED = 301,
    VTSI_EVENT_LISTENER_STOPPED = 302,
    VTSI_EVENT_LISTENER_DELETED = 303,
    VTSI_EVENT_LISTENER_RESTARTED = 304,
    VTSI_EVENT_LISTENER_UNHEALTHY = 305,
    VTSI_EVENT_LISTENER_HEALTHY = 306,
    VTSI_EVENT_SCHEDULED_CALLER_CREATED = 400,
    VTSI_EVENT_SCHEDULED_CALLER_FIRED = 401,
    VTSI_EVENT_SCHEDULED_CALLER_FAILED = 402,
    VTSI_EVENT_SCHEDULED_CALLER_CANCELLED = 403,
    VTSI_EVENT_SCHEDULED_CALLER_RETRY_SCHEDULED = 404,
    VTSI_EVENT_CAMPAIGN_CREATED = 500,
    VTSI_EVENT_CAMPAIGN_UPDATED = 501,
    VTSI_EVENT_CAMPAIGN_DELETED = 502,
    VTSI_EVENT_CAMPAIGN_STARTED = 503,
    VTSI_EVENT_CAMPAIGN_STOP_REQUESTED = 504,
    VTSI_EVENT_CAMPAIGN_STOPPED = 505,
    VTSI_EVENT_CAMPAIGN_HARD_STOP_REQUESTED = 506,
    VTSI_EVENT_CAMPAIGN_HARD_STOPPED = 507,
    VTSI_EVENT_CAMPAIGN_RESUMED = 508,
    VTSI_EVENT_CAMPAIGN_COMPLETED = 509,
    VTSI_EVENT_CAMPAIGN_PROGRESS = 510,
    VTSI_EVENT_CAMPAIGN_MAX_PARALLEL_CALLS_CHANGED = 511,
    VTSI_EVENT_CAMPAIGN_CALLS_ADDED = 512,
    VTSI_EVENT_CAMPAIGN_CALL_DISPATCHED = 513,
    VTSI_EVENT_CAMPAIGN_CALL_COMPLETED = 514,
    VTSI_EVENT_CAMPAIGN_CALL_FAILED = 515,
    VTSI_EVENT_CAMPAIGN_CALL_RETRY_SCHEDULED = 516,
    VTSI_EVENT_CAMPAIGN_CALL_CANCELLED = 517,
    VTSI_EVENT_CAMPAIGN_AUTO_STOPPED = 518,
    VTSI_EVENT_VTSI_PROJECT_UPDATED = 601,
    VTSI_EVENT_VTSI_PROJECT_DELETED = 602,
    VTSI_EVENT_VTSI_PROJECT_DEPLOYED = 603,
    VTSI_EVENT_VTSI_PROJECT_DEPLOY_FAILED = 604,
    VTSI_EVENT_VTSI_PROJECT_UNDEPLOYED = 605,
    VTSI_EVENT_VTSI_PROJECT_STATUS_CHANGED = 606,
    VTSI_EVENT_VTSI_PROJECT_UNDEPLOY_FAILED = 607,
    VTSI_EVENT_ASTERISK_DEPLOYED = 700,
    VTSI_EVENT_ASTERISK_REMOVED = 701,
    VTSI_EVENT_ASTERISK_RESTARTED = 702,
    VTSI_EVENT_ASTERISK_CONFIG_RELOADED = 703,
    VTSI_EVENT_ASTERISK_UNHEALTHY = 704,
    VTSI_EVENT_ASTERISK_HEALTHY = 705,
    VTSI_EVENT_ASTERISK_TRUNK_REGISTERED = 706,
    VTSI_EVENT_ASTERISK_TRUNK_UNREGISTERED = 707,
    VTSI_EVENT_ASTERISK_DEPLOY_FAILED = 708,
    VTSI_EVENT_ASTERISK_RESTART_FAILED = 709,
    VTSI_EVENT_ASTERISK_CONFIG_RELOAD_FAILED = 710,
    VTSI_EVENT_SOFTPHONE_ACCOUNT_CREATED = 800,
    VTSI_EVENT_SOFTPHONE_ACCOUNT_UPDATED = 801,
    VTSI_EVENT_SOFTPHONE_ACCOUNT_DELETED = 802,
    VTSI_EVENT_SOFTPHONE_CREDENTIALS_ROTATED = 803,
    VTSI_EVENT_SOFTPHONE_CERTIFICATE_REVOKED = 804,
    VTSI_EVENT_WEBHOOK_TEST = 900,
    VTSI_EVENT_WEBHOOK_CREATED = 901,
    VTSI_EVENT_WEBHOOK_UPDATED = 902,
    VTSI_EVENT_WEBHOOK_DELETED = 903,
    VTSI_EVENT_EVENT_SUBSCRIPTION_CREATED = 904,
    VTSI_EVENT_EVENT_SUBSCRIPTION_UPDATED = 905,
    VTSI_EVENT_EVENT_SUBSCRIPTION_DELETED = 906,
}

export enum WebhookHttpMethod {
    WEBHOOK_HTTP_METHOD_UNSPECIFIED = 0,
    WEBHOOK_HTTP_METHOD_POST = 1,
    WEBHOOK_HTTP_METHOD_PUT = 2,
}
