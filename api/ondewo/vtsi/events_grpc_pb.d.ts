// package: ondewo.vtsi
// file: ondewo/vtsi/events.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_vtsi_events_pb from "../../ondewo/vtsi/events_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_sip_sip_pb from "../../ondewo/sip/sip_pb";
import * as ondewo_vtsi_campaigns_pb from "../../ondewo/vtsi/campaigns_pb";

interface IEventsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createVtsiEventSubscription: IEventsService_ICreateVtsiEventSubscription;
    getVtsiEventSubscription: IEventsService_IGetVtsiEventSubscription;
    updateVtsiEventSubscription: IEventsService_IUpdateVtsiEventSubscription;
    deleteVtsiEventSubscription: IEventsService_IDeleteVtsiEventSubscription;
    listVtsiEventSubscriptions: IEventsService_IListVtsiEventSubscriptions;
    createWebhook: IEventsService_ICreateWebhook;
    getWebhook: IEventsService_IGetWebhook;
    updateWebhook: IEventsService_IUpdateWebhook;
    deleteWebhook: IEventsService_IDeleteWebhook;
    listWebhooks: IEventsService_IListWebhooks;
    testWebhook: IEventsService_ITestWebhook;
    subscribeVtsiEvents: IEventsService_ISubscribeVtsiEvents;
}

interface IEventsService_ICreateVtsiEventSubscription extends grpc.MethodDefinition<ondewo_vtsi_events_pb.CreateVtsiEventSubscriptionRequest, ondewo_vtsi_events_pb.VtsiEventSubscription> {
    path: "/ondewo.vtsi.Events/CreateVtsiEventSubscription";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_events_pb.CreateVtsiEventSubscriptionRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.CreateVtsiEventSubscriptionRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_events_pb.VtsiEventSubscription>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.VtsiEventSubscription>;
}
interface IEventsService_IGetVtsiEventSubscription extends grpc.MethodDefinition<ondewo_vtsi_events_pb.GetVtsiEventSubscriptionRequest, ondewo_vtsi_events_pb.VtsiEventSubscription> {
    path: "/ondewo.vtsi.Events/GetVtsiEventSubscription";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_events_pb.GetVtsiEventSubscriptionRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.GetVtsiEventSubscriptionRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_events_pb.VtsiEventSubscription>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.VtsiEventSubscription>;
}
interface IEventsService_IUpdateVtsiEventSubscription extends grpc.MethodDefinition<ondewo_vtsi_events_pb.UpdateVtsiEventSubscriptionRequest, ondewo_vtsi_events_pb.VtsiEventSubscription> {
    path: "/ondewo.vtsi.Events/UpdateVtsiEventSubscription";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_events_pb.UpdateVtsiEventSubscriptionRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.UpdateVtsiEventSubscriptionRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_events_pb.VtsiEventSubscription>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.VtsiEventSubscription>;
}
interface IEventsService_IDeleteVtsiEventSubscription extends grpc.MethodDefinition<ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionRequest, ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionResponse> {
    path: "/ondewo.vtsi.Events/DeleteVtsiEventSubscription";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionResponse>;
}
interface IEventsService_IListVtsiEventSubscriptions extends grpc.MethodDefinition<ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsRequest, ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsResponse> {
    path: "/ondewo.vtsi.Events/ListVtsiEventSubscriptions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsResponse>;
}
interface IEventsService_ICreateWebhook extends grpc.MethodDefinition<ondewo_vtsi_events_pb.CreateWebhookRequest, ondewo_vtsi_events_pb.Webhook> {
    path: "/ondewo.vtsi.Events/CreateWebhook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_events_pb.CreateWebhookRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.CreateWebhookRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_events_pb.Webhook>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.Webhook>;
}
interface IEventsService_IGetWebhook extends grpc.MethodDefinition<ondewo_vtsi_events_pb.GetWebhookRequest, ondewo_vtsi_events_pb.Webhook> {
    path: "/ondewo.vtsi.Events/GetWebhook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_events_pb.GetWebhookRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.GetWebhookRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_events_pb.Webhook>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.Webhook>;
}
interface IEventsService_IUpdateWebhook extends grpc.MethodDefinition<ondewo_vtsi_events_pb.UpdateWebhookRequest, ondewo_vtsi_events_pb.Webhook> {
    path: "/ondewo.vtsi.Events/UpdateWebhook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_events_pb.UpdateWebhookRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.UpdateWebhookRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_events_pb.Webhook>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.Webhook>;
}
interface IEventsService_IDeleteWebhook extends grpc.MethodDefinition<ondewo_vtsi_events_pb.DeleteWebhookRequest, ondewo_vtsi_events_pb.DeleteWebhookResponse> {
    path: "/ondewo.vtsi.Events/DeleteWebhook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_events_pb.DeleteWebhookRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.DeleteWebhookRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_events_pb.DeleteWebhookResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.DeleteWebhookResponse>;
}
interface IEventsService_IListWebhooks extends grpc.MethodDefinition<ondewo_vtsi_events_pb.ListWebhooksRequest, ondewo_vtsi_events_pb.ListWebhooksResponse> {
    path: "/ondewo.vtsi.Events/ListWebhooks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_events_pb.ListWebhooksRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.ListWebhooksRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_events_pb.ListWebhooksResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.ListWebhooksResponse>;
}
interface IEventsService_ITestWebhook extends grpc.MethodDefinition<ondewo_vtsi_events_pb.TestWebhookRequest, ondewo_vtsi_events_pb.TestWebhookResponse> {
    path: "/ondewo.vtsi.Events/TestWebhook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_events_pb.TestWebhookRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.TestWebhookRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_events_pb.TestWebhookResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.TestWebhookResponse>;
}
interface IEventsService_ISubscribeVtsiEvents extends grpc.MethodDefinition<ondewo_vtsi_events_pb.SubscribeVtsiEventsRequest, ondewo_vtsi_events_pb.SubscribeVtsiEventsResponse> {
    path: "/ondewo.vtsi.Events/SubscribeVtsiEvents";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_vtsi_events_pb.SubscribeVtsiEventsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.SubscribeVtsiEventsRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_events_pb.SubscribeVtsiEventsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_events_pb.SubscribeVtsiEventsResponse>;
}

export const EventsService: IEventsService;

export interface IEventsServer {
    createVtsiEventSubscription: grpc.handleUnaryCall<ondewo_vtsi_events_pb.CreateVtsiEventSubscriptionRequest, ondewo_vtsi_events_pb.VtsiEventSubscription>;
    getVtsiEventSubscription: grpc.handleUnaryCall<ondewo_vtsi_events_pb.GetVtsiEventSubscriptionRequest, ondewo_vtsi_events_pb.VtsiEventSubscription>;
    updateVtsiEventSubscription: grpc.handleUnaryCall<ondewo_vtsi_events_pb.UpdateVtsiEventSubscriptionRequest, ondewo_vtsi_events_pb.VtsiEventSubscription>;
    deleteVtsiEventSubscription: grpc.handleUnaryCall<ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionRequest, ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionResponse>;
    listVtsiEventSubscriptions: grpc.handleUnaryCall<ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsRequest, ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsResponse>;
    createWebhook: grpc.handleUnaryCall<ondewo_vtsi_events_pb.CreateWebhookRequest, ondewo_vtsi_events_pb.Webhook>;
    getWebhook: grpc.handleUnaryCall<ondewo_vtsi_events_pb.GetWebhookRequest, ondewo_vtsi_events_pb.Webhook>;
    updateWebhook: grpc.handleUnaryCall<ondewo_vtsi_events_pb.UpdateWebhookRequest, ondewo_vtsi_events_pb.Webhook>;
    deleteWebhook: grpc.handleUnaryCall<ondewo_vtsi_events_pb.DeleteWebhookRequest, ondewo_vtsi_events_pb.DeleteWebhookResponse>;
    listWebhooks: grpc.handleUnaryCall<ondewo_vtsi_events_pb.ListWebhooksRequest, ondewo_vtsi_events_pb.ListWebhooksResponse>;
    testWebhook: grpc.handleUnaryCall<ondewo_vtsi_events_pb.TestWebhookRequest, ondewo_vtsi_events_pb.TestWebhookResponse>;
    subscribeVtsiEvents: grpc.handleServerStreamingCall<ondewo_vtsi_events_pb.SubscribeVtsiEventsRequest, ondewo_vtsi_events_pb.SubscribeVtsiEventsResponse>;
}

export interface IEventsClient {
    createVtsiEventSubscription(request: ondewo_vtsi_events_pb.CreateVtsiEventSubscriptionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.VtsiEventSubscription) => void): grpc.ClientUnaryCall;
    createVtsiEventSubscription(request: ondewo_vtsi_events_pb.CreateVtsiEventSubscriptionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.VtsiEventSubscription) => void): grpc.ClientUnaryCall;
    createVtsiEventSubscription(request: ondewo_vtsi_events_pb.CreateVtsiEventSubscriptionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.VtsiEventSubscription) => void): grpc.ClientUnaryCall;
    getVtsiEventSubscription(request: ondewo_vtsi_events_pb.GetVtsiEventSubscriptionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.VtsiEventSubscription) => void): grpc.ClientUnaryCall;
    getVtsiEventSubscription(request: ondewo_vtsi_events_pb.GetVtsiEventSubscriptionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.VtsiEventSubscription) => void): grpc.ClientUnaryCall;
    getVtsiEventSubscription(request: ondewo_vtsi_events_pb.GetVtsiEventSubscriptionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.VtsiEventSubscription) => void): grpc.ClientUnaryCall;
    updateVtsiEventSubscription(request: ondewo_vtsi_events_pb.UpdateVtsiEventSubscriptionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.VtsiEventSubscription) => void): grpc.ClientUnaryCall;
    updateVtsiEventSubscription(request: ondewo_vtsi_events_pb.UpdateVtsiEventSubscriptionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.VtsiEventSubscription) => void): grpc.ClientUnaryCall;
    updateVtsiEventSubscription(request: ondewo_vtsi_events_pb.UpdateVtsiEventSubscriptionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.VtsiEventSubscription) => void): grpc.ClientUnaryCall;
    deleteVtsiEventSubscription(request: ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionResponse) => void): grpc.ClientUnaryCall;
    deleteVtsiEventSubscription(request: ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionResponse) => void): grpc.ClientUnaryCall;
    deleteVtsiEventSubscription(request: ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionResponse) => void): grpc.ClientUnaryCall;
    listVtsiEventSubscriptions(request: ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsResponse) => void): grpc.ClientUnaryCall;
    listVtsiEventSubscriptions(request: ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsResponse) => void): grpc.ClientUnaryCall;
    listVtsiEventSubscriptions(request: ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsResponse) => void): grpc.ClientUnaryCall;
    createWebhook(request: ondewo_vtsi_events_pb.CreateWebhookRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.Webhook) => void): grpc.ClientUnaryCall;
    createWebhook(request: ondewo_vtsi_events_pb.CreateWebhookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.Webhook) => void): grpc.ClientUnaryCall;
    createWebhook(request: ondewo_vtsi_events_pb.CreateWebhookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.Webhook) => void): grpc.ClientUnaryCall;
    getWebhook(request: ondewo_vtsi_events_pb.GetWebhookRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.Webhook) => void): grpc.ClientUnaryCall;
    getWebhook(request: ondewo_vtsi_events_pb.GetWebhookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.Webhook) => void): grpc.ClientUnaryCall;
    getWebhook(request: ondewo_vtsi_events_pb.GetWebhookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.Webhook) => void): grpc.ClientUnaryCall;
    updateWebhook(request: ondewo_vtsi_events_pb.UpdateWebhookRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.Webhook) => void): grpc.ClientUnaryCall;
    updateWebhook(request: ondewo_vtsi_events_pb.UpdateWebhookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.Webhook) => void): grpc.ClientUnaryCall;
    updateWebhook(request: ondewo_vtsi_events_pb.UpdateWebhookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.Webhook) => void): grpc.ClientUnaryCall;
    deleteWebhook(request: ondewo_vtsi_events_pb.DeleteWebhookRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.DeleteWebhookResponse) => void): grpc.ClientUnaryCall;
    deleteWebhook(request: ondewo_vtsi_events_pb.DeleteWebhookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.DeleteWebhookResponse) => void): grpc.ClientUnaryCall;
    deleteWebhook(request: ondewo_vtsi_events_pb.DeleteWebhookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.DeleteWebhookResponse) => void): grpc.ClientUnaryCall;
    listWebhooks(request: ondewo_vtsi_events_pb.ListWebhooksRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.ListWebhooksResponse) => void): grpc.ClientUnaryCall;
    listWebhooks(request: ondewo_vtsi_events_pb.ListWebhooksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.ListWebhooksResponse) => void): grpc.ClientUnaryCall;
    listWebhooks(request: ondewo_vtsi_events_pb.ListWebhooksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.ListWebhooksResponse) => void): grpc.ClientUnaryCall;
    testWebhook(request: ondewo_vtsi_events_pb.TestWebhookRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.TestWebhookResponse) => void): grpc.ClientUnaryCall;
    testWebhook(request: ondewo_vtsi_events_pb.TestWebhookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.TestWebhookResponse) => void): grpc.ClientUnaryCall;
    testWebhook(request: ondewo_vtsi_events_pb.TestWebhookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.TestWebhookResponse) => void): grpc.ClientUnaryCall;
    subscribeVtsiEvents(request: ondewo_vtsi_events_pb.SubscribeVtsiEventsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_events_pb.SubscribeVtsiEventsResponse>;
    subscribeVtsiEvents(request: ondewo_vtsi_events_pb.SubscribeVtsiEventsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_events_pb.SubscribeVtsiEventsResponse>;
}

export class EventsClient extends grpc.Client implements IEventsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createVtsiEventSubscription(request: ondewo_vtsi_events_pb.CreateVtsiEventSubscriptionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.VtsiEventSubscription) => void): grpc.ClientUnaryCall;
    public createVtsiEventSubscription(request: ondewo_vtsi_events_pb.CreateVtsiEventSubscriptionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.VtsiEventSubscription) => void): grpc.ClientUnaryCall;
    public createVtsiEventSubscription(request: ondewo_vtsi_events_pb.CreateVtsiEventSubscriptionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.VtsiEventSubscription) => void): grpc.ClientUnaryCall;
    public getVtsiEventSubscription(request: ondewo_vtsi_events_pb.GetVtsiEventSubscriptionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.VtsiEventSubscription) => void): grpc.ClientUnaryCall;
    public getVtsiEventSubscription(request: ondewo_vtsi_events_pb.GetVtsiEventSubscriptionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.VtsiEventSubscription) => void): grpc.ClientUnaryCall;
    public getVtsiEventSubscription(request: ondewo_vtsi_events_pb.GetVtsiEventSubscriptionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.VtsiEventSubscription) => void): grpc.ClientUnaryCall;
    public updateVtsiEventSubscription(request: ondewo_vtsi_events_pb.UpdateVtsiEventSubscriptionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.VtsiEventSubscription) => void): grpc.ClientUnaryCall;
    public updateVtsiEventSubscription(request: ondewo_vtsi_events_pb.UpdateVtsiEventSubscriptionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.VtsiEventSubscription) => void): grpc.ClientUnaryCall;
    public updateVtsiEventSubscription(request: ondewo_vtsi_events_pb.UpdateVtsiEventSubscriptionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.VtsiEventSubscription) => void): grpc.ClientUnaryCall;
    public deleteVtsiEventSubscription(request: ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionResponse) => void): grpc.ClientUnaryCall;
    public deleteVtsiEventSubscription(request: ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionResponse) => void): grpc.ClientUnaryCall;
    public deleteVtsiEventSubscription(request: ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionResponse) => void): grpc.ClientUnaryCall;
    public listVtsiEventSubscriptions(request: ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsResponse) => void): grpc.ClientUnaryCall;
    public listVtsiEventSubscriptions(request: ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsResponse) => void): grpc.ClientUnaryCall;
    public listVtsiEventSubscriptions(request: ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsResponse) => void): grpc.ClientUnaryCall;
    public createWebhook(request: ondewo_vtsi_events_pb.CreateWebhookRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.Webhook) => void): grpc.ClientUnaryCall;
    public createWebhook(request: ondewo_vtsi_events_pb.CreateWebhookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.Webhook) => void): grpc.ClientUnaryCall;
    public createWebhook(request: ondewo_vtsi_events_pb.CreateWebhookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.Webhook) => void): grpc.ClientUnaryCall;
    public getWebhook(request: ondewo_vtsi_events_pb.GetWebhookRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.Webhook) => void): grpc.ClientUnaryCall;
    public getWebhook(request: ondewo_vtsi_events_pb.GetWebhookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.Webhook) => void): grpc.ClientUnaryCall;
    public getWebhook(request: ondewo_vtsi_events_pb.GetWebhookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.Webhook) => void): grpc.ClientUnaryCall;
    public updateWebhook(request: ondewo_vtsi_events_pb.UpdateWebhookRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.Webhook) => void): grpc.ClientUnaryCall;
    public updateWebhook(request: ondewo_vtsi_events_pb.UpdateWebhookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.Webhook) => void): grpc.ClientUnaryCall;
    public updateWebhook(request: ondewo_vtsi_events_pb.UpdateWebhookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.Webhook) => void): grpc.ClientUnaryCall;
    public deleteWebhook(request: ondewo_vtsi_events_pb.DeleteWebhookRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.DeleteWebhookResponse) => void): grpc.ClientUnaryCall;
    public deleteWebhook(request: ondewo_vtsi_events_pb.DeleteWebhookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.DeleteWebhookResponse) => void): grpc.ClientUnaryCall;
    public deleteWebhook(request: ondewo_vtsi_events_pb.DeleteWebhookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.DeleteWebhookResponse) => void): grpc.ClientUnaryCall;
    public listWebhooks(request: ondewo_vtsi_events_pb.ListWebhooksRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.ListWebhooksResponse) => void): grpc.ClientUnaryCall;
    public listWebhooks(request: ondewo_vtsi_events_pb.ListWebhooksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.ListWebhooksResponse) => void): grpc.ClientUnaryCall;
    public listWebhooks(request: ondewo_vtsi_events_pb.ListWebhooksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.ListWebhooksResponse) => void): grpc.ClientUnaryCall;
    public testWebhook(request: ondewo_vtsi_events_pb.TestWebhookRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.TestWebhookResponse) => void): grpc.ClientUnaryCall;
    public testWebhook(request: ondewo_vtsi_events_pb.TestWebhookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.TestWebhookResponse) => void): grpc.ClientUnaryCall;
    public testWebhook(request: ondewo_vtsi_events_pb.TestWebhookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_events_pb.TestWebhookResponse) => void): grpc.ClientUnaryCall;
    public subscribeVtsiEvents(request: ondewo_vtsi_events_pb.SubscribeVtsiEventsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_events_pb.SubscribeVtsiEventsResponse>;
    public subscribeVtsiEvents(request: ondewo_vtsi_events_pb.SubscribeVtsiEventsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_events_pb.SubscribeVtsiEventsResponse>;
}
