// package: ondewo.vtsi
// file: ondewo/vtsi/calls.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_vtsi_calls_pb from "../../ondewo/vtsi/calls_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_nlu_context_pb from "../../ondewo/nlu/context_pb";
import * as ondewo_nlu_intent_pb from "../../ondewo/nlu/intent_pb";
import * as ondewo_s2t_speech_to_text_pb from "../../ondewo/s2t/speech-to-text_pb";
import * as ondewo_t2s_text_to_speech_pb from "../../ondewo/t2s/text-to-speech_pb";
import * as ondewo_sip_sip_pb from "../../ondewo/sip/sip_pb";

interface ICallsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    startCaller: ICallsService_IStartCaller;
    startCallers: ICallsService_IStartCallers;
    listCallers: ICallsService_IListCallers;
    getCaller: ICallsService_IGetCaller;
    deleteCaller: ICallsService_IDeleteCaller;
    deleteCallers: ICallsService_IDeleteCallers;
    stopCaller: ICallsService_IStopCaller;
    stopCallers: ICallsService_IStopCallers;
    startListener: ICallsService_IStartListener;
    startListeners: ICallsService_IStartListeners;
    stopListener: ICallsService_IStopListener;
    stopListeners: ICallsService_IStopListeners;
    listListeners: ICallsService_IListListeners;
    getListener: ICallsService_IGetListener;
    deleteListener: ICallsService_IDeleteListener;
    deleteListeners: ICallsService_IDeleteListeners;
    startScheduledCaller: ICallsService_IStartScheduledCaller;
    startScheduledCallers: ICallsService_IStartScheduledCallers;
    stopCall: ICallsService_IStopCall;
    stopCalls: ICallsService_IStopCalls;
    stopAllCalls: ICallsService_IStopAllCalls;
    transferCall: ICallsService_ITransferCall;
    transferCalls: ICallsService_ITransferCalls;
    getCall: ICallsService_IGetCall;
    listCalls: ICallsService_IListCalls;
}

interface ICallsService_IStartCaller extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.StartCallerRequest, ondewo_vtsi_calls_pb.StartCallerResponse> {
    path: "/ondewo.vtsi.Calls/StartCaller";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StartCallerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StartCallerRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StartCallerResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StartCallerResponse>;
}
interface ICallsService_IStartCallers extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.StartCallersRequest, ondewo_vtsi_calls_pb.StartCallersResponse> {
    path: "/ondewo.vtsi.Calls/StartCallers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StartCallersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StartCallersRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StartCallersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StartCallersResponse>;
}
interface ICallsService_IListCallers extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.ListCallersRequest, ondewo_vtsi_calls_pb.ListCallersResponse> {
    path: "/ondewo.vtsi.Calls/ListCallers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.ListCallersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.ListCallersRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.ListCallersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.ListCallersResponse>;
}
interface ICallsService_IGetCaller extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.GetCallerRequest, ondewo_vtsi_calls_pb.Caller> {
    path: "/ondewo.vtsi.Calls/GetCaller";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.GetCallerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.GetCallerRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.Caller>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.Caller>;
}
interface ICallsService_IDeleteCaller extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.DeleteCallerRequest, ondewo_vtsi_calls_pb.DeleteCallerResponse> {
    path: "/ondewo.vtsi.Calls/DeleteCaller";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.DeleteCallerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.DeleteCallerRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.DeleteCallerResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.DeleteCallerResponse>;
}
interface ICallsService_IDeleteCallers extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.DeleteCallersRequest, ondewo_vtsi_calls_pb.DeleteCallersResponse> {
    path: "/ondewo.vtsi.Calls/DeleteCallers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.DeleteCallersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.DeleteCallersRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.DeleteCallersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.DeleteCallersResponse>;
}
interface ICallsService_IStopCaller extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.StopCallerRequest, ondewo_vtsi_calls_pb.StopCallerResponse> {
    path: "/ondewo.vtsi.Calls/StopCaller";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StopCallerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StopCallerRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StopCallerResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StopCallerResponse>;
}
interface ICallsService_IStopCallers extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.StopCallersRequest, ondewo_vtsi_calls_pb.StopCallersResponse> {
    path: "/ondewo.vtsi.Calls/StopCallers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StopCallersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StopCallersRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StopCallersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StopCallersResponse>;
}
interface ICallsService_IStartListener extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.StartListenerRequest, ondewo_vtsi_calls_pb.StartListenerResponse> {
    path: "/ondewo.vtsi.Calls/StartListener";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StartListenerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StartListenerRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StartListenerResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StartListenerResponse>;
}
interface ICallsService_IStartListeners extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.StartListenersRequest, ondewo_vtsi_calls_pb.StartListenersResponse> {
    path: "/ondewo.vtsi.Calls/StartListeners";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StartListenersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StartListenersRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StartListenersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StartListenersResponse>;
}
interface ICallsService_IStopListener extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.StopListenerRequest, ondewo_vtsi_calls_pb.StopListenerResponse> {
    path: "/ondewo.vtsi.Calls/StopListener";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StopListenerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StopListenerRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StopListenerResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StopListenerResponse>;
}
interface ICallsService_IStopListeners extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.StopListenersRequest, ondewo_vtsi_calls_pb.StopListenersResponse> {
    path: "/ondewo.vtsi.Calls/StopListeners";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StopListenersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StopListenersRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StopListenersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StopListenersResponse>;
}
interface ICallsService_IListListeners extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.ListListenersRequest, ondewo_vtsi_calls_pb.ListListenersResponse> {
    path: "/ondewo.vtsi.Calls/ListListeners";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.ListListenersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.ListListenersRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.ListListenersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.ListListenersResponse>;
}
interface ICallsService_IGetListener extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.GetListenerRequest, ondewo_vtsi_calls_pb.Listener> {
    path: "/ondewo.vtsi.Calls/GetListener";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.GetListenerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.GetListenerRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.Listener>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.Listener>;
}
interface ICallsService_IDeleteListener extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.DeleteListenerRequest, ondewo_vtsi_calls_pb.DeleteListenerResponse> {
    path: "/ondewo.vtsi.Calls/DeleteListener";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.DeleteListenerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.DeleteListenerRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.DeleteListenerResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.DeleteListenerResponse>;
}
interface ICallsService_IDeleteListeners extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.DeleteListenersRequest, ondewo_vtsi_calls_pb.DeleteListenersResponse> {
    path: "/ondewo.vtsi.Calls/DeleteListeners";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.DeleteListenersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.DeleteListenersRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.DeleteListenersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.DeleteListenersResponse>;
}
interface ICallsService_IStartScheduledCaller extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.StartScheduledCallerRequest, ondewo_vtsi_calls_pb.StartScheduledCallerResponse> {
    path: "/ondewo.vtsi.Calls/StartScheduledCaller";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StartScheduledCallerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StartScheduledCallerRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StartScheduledCallerResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StartScheduledCallerResponse>;
}
interface ICallsService_IStartScheduledCallers extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.StartScheduledCallersRequest, ondewo_vtsi_calls_pb.StartScheduledCallersResponse> {
    path: "/ondewo.vtsi.Calls/StartScheduledCallers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StartScheduledCallersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StartScheduledCallersRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StartScheduledCallersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StartScheduledCallersResponse>;
}
interface ICallsService_IStopCall extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.StopCallRequest, ondewo_vtsi_calls_pb.StopCallResponse> {
    path: "/ondewo.vtsi.Calls/StopCall";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StopCallRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StopCallRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StopCallResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StopCallResponse>;
}
interface ICallsService_IStopCalls extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.StopCallsRequest, ondewo_vtsi_calls_pb.StopCallsResponse> {
    path: "/ondewo.vtsi.Calls/StopCalls";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StopCallsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StopCallsRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StopCallsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StopCallsResponse>;
}
interface ICallsService_IStopAllCalls extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.StopAllCallsRequest, ondewo_vtsi_calls_pb.StopCallsResponse> {
    path: "/ondewo.vtsi.Calls/StopAllCalls";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StopAllCallsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StopAllCallsRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StopCallsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StopCallsResponse>;
}
interface ICallsService_ITransferCall extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.TransferCallRequest, ondewo_vtsi_calls_pb.TransferCallResponse> {
    path: "/ondewo.vtsi.Calls/TransferCall";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.TransferCallRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.TransferCallRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.TransferCallResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.TransferCallResponse>;
}
interface ICallsService_ITransferCalls extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.TransferCallsRequest, ondewo_vtsi_calls_pb.TransferCallsResponse> {
    path: "/ondewo.vtsi.Calls/TransferCalls";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.TransferCallsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.TransferCallsRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.TransferCallsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.TransferCallsResponse>;
}
interface ICallsService_IGetCall extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.GetCallRequest, ondewo_vtsi_calls_pb.Call> {
    path: "/ondewo.vtsi.Calls/GetCall";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.GetCallRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.GetCallRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.Call>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.Call>;
}
interface ICallsService_IListCalls extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.ListCallsRequest, ondewo_vtsi_calls_pb.ListCallsResponse> {
    path: "/ondewo.vtsi.Calls/ListCalls";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.ListCallsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.ListCallsRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.ListCallsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.ListCallsResponse>;
}

export const CallsService: ICallsService;

export interface ICallsServer {
    startCaller: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.StartCallerRequest, ondewo_vtsi_calls_pb.StartCallerResponse>;
    startCallers: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.StartCallersRequest, ondewo_vtsi_calls_pb.StartCallersResponse>;
    listCallers: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.ListCallersRequest, ondewo_vtsi_calls_pb.ListCallersResponse>;
    getCaller: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.GetCallerRequest, ondewo_vtsi_calls_pb.Caller>;
    deleteCaller: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.DeleteCallerRequest, ondewo_vtsi_calls_pb.DeleteCallerResponse>;
    deleteCallers: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.DeleteCallersRequest, ondewo_vtsi_calls_pb.DeleteCallersResponse>;
    stopCaller: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.StopCallerRequest, ondewo_vtsi_calls_pb.StopCallerResponse>;
    stopCallers: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.StopCallersRequest, ondewo_vtsi_calls_pb.StopCallersResponse>;
    startListener: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.StartListenerRequest, ondewo_vtsi_calls_pb.StartListenerResponse>;
    startListeners: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.StartListenersRequest, ondewo_vtsi_calls_pb.StartListenersResponse>;
    stopListener: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.StopListenerRequest, ondewo_vtsi_calls_pb.StopListenerResponse>;
    stopListeners: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.StopListenersRequest, ondewo_vtsi_calls_pb.StopListenersResponse>;
    listListeners: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.ListListenersRequest, ondewo_vtsi_calls_pb.ListListenersResponse>;
    getListener: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.GetListenerRequest, ondewo_vtsi_calls_pb.Listener>;
    deleteListener: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.DeleteListenerRequest, ondewo_vtsi_calls_pb.DeleteListenerResponse>;
    deleteListeners: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.DeleteListenersRequest, ondewo_vtsi_calls_pb.DeleteListenersResponse>;
    startScheduledCaller: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.StartScheduledCallerRequest, ondewo_vtsi_calls_pb.StartScheduledCallerResponse>;
    startScheduledCallers: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.StartScheduledCallersRequest, ondewo_vtsi_calls_pb.StartScheduledCallersResponse>;
    stopCall: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.StopCallRequest, ondewo_vtsi_calls_pb.StopCallResponse>;
    stopCalls: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.StopCallsRequest, ondewo_vtsi_calls_pb.StopCallsResponse>;
    stopAllCalls: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.StopAllCallsRequest, ondewo_vtsi_calls_pb.StopCallsResponse>;
    transferCall: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.TransferCallRequest, ondewo_vtsi_calls_pb.TransferCallResponse>;
    transferCalls: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.TransferCallsRequest, ondewo_vtsi_calls_pb.TransferCallsResponse>;
    getCall: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.GetCallRequest, ondewo_vtsi_calls_pb.Call>;
    listCalls: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.ListCallsRequest, ondewo_vtsi_calls_pb.ListCallsResponse>;
}

export interface ICallsClient {
    startCaller(request: ondewo_vtsi_calls_pb.StartCallerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartCallerResponse) => void): grpc.ClientUnaryCall;
    startCaller(request: ondewo_vtsi_calls_pb.StartCallerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartCallerResponse) => void): grpc.ClientUnaryCall;
    startCaller(request: ondewo_vtsi_calls_pb.StartCallerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartCallerResponse) => void): grpc.ClientUnaryCall;
    startCallers(request: ondewo_vtsi_calls_pb.StartCallersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartCallersResponse) => void): grpc.ClientUnaryCall;
    startCallers(request: ondewo_vtsi_calls_pb.StartCallersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartCallersResponse) => void): grpc.ClientUnaryCall;
    startCallers(request: ondewo_vtsi_calls_pb.StartCallersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartCallersResponse) => void): grpc.ClientUnaryCall;
    listCallers(request: ondewo_vtsi_calls_pb.ListCallersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListCallersResponse) => void): grpc.ClientUnaryCall;
    listCallers(request: ondewo_vtsi_calls_pb.ListCallersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListCallersResponse) => void): grpc.ClientUnaryCall;
    listCallers(request: ondewo_vtsi_calls_pb.ListCallersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListCallersResponse) => void): grpc.ClientUnaryCall;
    getCaller(request: ondewo_vtsi_calls_pb.GetCallerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.Caller) => void): grpc.ClientUnaryCall;
    getCaller(request: ondewo_vtsi_calls_pb.GetCallerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.Caller) => void): grpc.ClientUnaryCall;
    getCaller(request: ondewo_vtsi_calls_pb.GetCallerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.Caller) => void): grpc.ClientUnaryCall;
    deleteCaller(request: ondewo_vtsi_calls_pb.DeleteCallerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteCallerResponse) => void): grpc.ClientUnaryCall;
    deleteCaller(request: ondewo_vtsi_calls_pb.DeleteCallerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteCallerResponse) => void): grpc.ClientUnaryCall;
    deleteCaller(request: ondewo_vtsi_calls_pb.DeleteCallerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteCallerResponse) => void): grpc.ClientUnaryCall;
    deleteCallers(request: ondewo_vtsi_calls_pb.DeleteCallersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteCallersResponse) => void): grpc.ClientUnaryCall;
    deleteCallers(request: ondewo_vtsi_calls_pb.DeleteCallersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteCallersResponse) => void): grpc.ClientUnaryCall;
    deleteCallers(request: ondewo_vtsi_calls_pb.DeleteCallersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteCallersResponse) => void): grpc.ClientUnaryCall;
    stopCaller(request: ondewo_vtsi_calls_pb.StopCallerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallerResponse) => void): grpc.ClientUnaryCall;
    stopCaller(request: ondewo_vtsi_calls_pb.StopCallerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallerResponse) => void): grpc.ClientUnaryCall;
    stopCaller(request: ondewo_vtsi_calls_pb.StopCallerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallerResponse) => void): grpc.ClientUnaryCall;
    stopCallers(request: ondewo_vtsi_calls_pb.StopCallersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallersResponse) => void): grpc.ClientUnaryCall;
    stopCallers(request: ondewo_vtsi_calls_pb.StopCallersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallersResponse) => void): grpc.ClientUnaryCall;
    stopCallers(request: ondewo_vtsi_calls_pb.StopCallersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallersResponse) => void): grpc.ClientUnaryCall;
    startListener(request: ondewo_vtsi_calls_pb.StartListenerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartListenerResponse) => void): grpc.ClientUnaryCall;
    startListener(request: ondewo_vtsi_calls_pb.StartListenerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartListenerResponse) => void): grpc.ClientUnaryCall;
    startListener(request: ondewo_vtsi_calls_pb.StartListenerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartListenerResponse) => void): grpc.ClientUnaryCall;
    startListeners(request: ondewo_vtsi_calls_pb.StartListenersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartListenersResponse) => void): grpc.ClientUnaryCall;
    startListeners(request: ondewo_vtsi_calls_pb.StartListenersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartListenersResponse) => void): grpc.ClientUnaryCall;
    startListeners(request: ondewo_vtsi_calls_pb.StartListenersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartListenersResponse) => void): grpc.ClientUnaryCall;
    stopListener(request: ondewo_vtsi_calls_pb.StopListenerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopListenerResponse) => void): grpc.ClientUnaryCall;
    stopListener(request: ondewo_vtsi_calls_pb.StopListenerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopListenerResponse) => void): grpc.ClientUnaryCall;
    stopListener(request: ondewo_vtsi_calls_pb.StopListenerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopListenerResponse) => void): grpc.ClientUnaryCall;
    stopListeners(request: ondewo_vtsi_calls_pb.StopListenersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopListenersResponse) => void): grpc.ClientUnaryCall;
    stopListeners(request: ondewo_vtsi_calls_pb.StopListenersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopListenersResponse) => void): grpc.ClientUnaryCall;
    stopListeners(request: ondewo_vtsi_calls_pb.StopListenersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopListenersResponse) => void): grpc.ClientUnaryCall;
    listListeners(request: ondewo_vtsi_calls_pb.ListListenersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListListenersResponse) => void): grpc.ClientUnaryCall;
    listListeners(request: ondewo_vtsi_calls_pb.ListListenersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListListenersResponse) => void): grpc.ClientUnaryCall;
    listListeners(request: ondewo_vtsi_calls_pb.ListListenersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListListenersResponse) => void): grpc.ClientUnaryCall;
    getListener(request: ondewo_vtsi_calls_pb.GetListenerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.Listener) => void): grpc.ClientUnaryCall;
    getListener(request: ondewo_vtsi_calls_pb.GetListenerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.Listener) => void): grpc.ClientUnaryCall;
    getListener(request: ondewo_vtsi_calls_pb.GetListenerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.Listener) => void): grpc.ClientUnaryCall;
    deleteListener(request: ondewo_vtsi_calls_pb.DeleteListenerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteListenerResponse) => void): grpc.ClientUnaryCall;
    deleteListener(request: ondewo_vtsi_calls_pb.DeleteListenerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteListenerResponse) => void): grpc.ClientUnaryCall;
    deleteListener(request: ondewo_vtsi_calls_pb.DeleteListenerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteListenerResponse) => void): grpc.ClientUnaryCall;
    deleteListeners(request: ondewo_vtsi_calls_pb.DeleteListenersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteListenersResponse) => void): grpc.ClientUnaryCall;
    deleteListeners(request: ondewo_vtsi_calls_pb.DeleteListenersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteListenersResponse) => void): grpc.ClientUnaryCall;
    deleteListeners(request: ondewo_vtsi_calls_pb.DeleteListenersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteListenersResponse) => void): grpc.ClientUnaryCall;
    startScheduledCaller(request: ondewo_vtsi_calls_pb.StartScheduledCallerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartScheduledCallerResponse) => void): grpc.ClientUnaryCall;
    startScheduledCaller(request: ondewo_vtsi_calls_pb.StartScheduledCallerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartScheduledCallerResponse) => void): grpc.ClientUnaryCall;
    startScheduledCaller(request: ondewo_vtsi_calls_pb.StartScheduledCallerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartScheduledCallerResponse) => void): grpc.ClientUnaryCall;
    startScheduledCallers(request: ondewo_vtsi_calls_pb.StartScheduledCallersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartScheduledCallersResponse) => void): grpc.ClientUnaryCall;
    startScheduledCallers(request: ondewo_vtsi_calls_pb.StartScheduledCallersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartScheduledCallersResponse) => void): grpc.ClientUnaryCall;
    startScheduledCallers(request: ondewo_vtsi_calls_pb.StartScheduledCallersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartScheduledCallersResponse) => void): grpc.ClientUnaryCall;
    stopCall(request: ondewo_vtsi_calls_pb.StopCallRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallResponse) => void): grpc.ClientUnaryCall;
    stopCall(request: ondewo_vtsi_calls_pb.StopCallRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallResponse) => void): grpc.ClientUnaryCall;
    stopCall(request: ondewo_vtsi_calls_pb.StopCallRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallResponse) => void): grpc.ClientUnaryCall;
    stopCalls(request: ondewo_vtsi_calls_pb.StopCallsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallsResponse) => void): grpc.ClientUnaryCall;
    stopCalls(request: ondewo_vtsi_calls_pb.StopCallsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallsResponse) => void): grpc.ClientUnaryCall;
    stopCalls(request: ondewo_vtsi_calls_pb.StopCallsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallsResponse) => void): grpc.ClientUnaryCall;
    stopAllCalls(request: ondewo_vtsi_calls_pb.StopAllCallsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallsResponse) => void): grpc.ClientUnaryCall;
    stopAllCalls(request: ondewo_vtsi_calls_pb.StopAllCallsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallsResponse) => void): grpc.ClientUnaryCall;
    stopAllCalls(request: ondewo_vtsi_calls_pb.StopAllCallsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallsResponse) => void): grpc.ClientUnaryCall;
    transferCall(request: ondewo_vtsi_calls_pb.TransferCallRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.TransferCallResponse) => void): grpc.ClientUnaryCall;
    transferCall(request: ondewo_vtsi_calls_pb.TransferCallRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.TransferCallResponse) => void): grpc.ClientUnaryCall;
    transferCall(request: ondewo_vtsi_calls_pb.TransferCallRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.TransferCallResponse) => void): grpc.ClientUnaryCall;
    transferCalls(request: ondewo_vtsi_calls_pb.TransferCallsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.TransferCallsResponse) => void): grpc.ClientUnaryCall;
    transferCalls(request: ondewo_vtsi_calls_pb.TransferCallsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.TransferCallsResponse) => void): grpc.ClientUnaryCall;
    transferCalls(request: ondewo_vtsi_calls_pb.TransferCallsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.TransferCallsResponse) => void): grpc.ClientUnaryCall;
    getCall(request: ondewo_vtsi_calls_pb.GetCallRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.Call) => void): grpc.ClientUnaryCall;
    getCall(request: ondewo_vtsi_calls_pb.GetCallRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.Call) => void): grpc.ClientUnaryCall;
    getCall(request: ondewo_vtsi_calls_pb.GetCallRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.Call) => void): grpc.ClientUnaryCall;
    listCalls(request: ondewo_vtsi_calls_pb.ListCallsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListCallsResponse) => void): grpc.ClientUnaryCall;
    listCalls(request: ondewo_vtsi_calls_pb.ListCallsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListCallsResponse) => void): grpc.ClientUnaryCall;
    listCalls(request: ondewo_vtsi_calls_pb.ListCallsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListCallsResponse) => void): grpc.ClientUnaryCall;
}

export class CallsClient extends grpc.Client implements ICallsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public startCaller(request: ondewo_vtsi_calls_pb.StartCallerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartCallerResponse) => void): grpc.ClientUnaryCall;
    public startCaller(request: ondewo_vtsi_calls_pb.StartCallerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartCallerResponse) => void): grpc.ClientUnaryCall;
    public startCaller(request: ondewo_vtsi_calls_pb.StartCallerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartCallerResponse) => void): grpc.ClientUnaryCall;
    public startCallers(request: ondewo_vtsi_calls_pb.StartCallersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartCallersResponse) => void): grpc.ClientUnaryCall;
    public startCallers(request: ondewo_vtsi_calls_pb.StartCallersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartCallersResponse) => void): grpc.ClientUnaryCall;
    public startCallers(request: ondewo_vtsi_calls_pb.StartCallersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartCallersResponse) => void): grpc.ClientUnaryCall;
    public listCallers(request: ondewo_vtsi_calls_pb.ListCallersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListCallersResponse) => void): grpc.ClientUnaryCall;
    public listCallers(request: ondewo_vtsi_calls_pb.ListCallersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListCallersResponse) => void): grpc.ClientUnaryCall;
    public listCallers(request: ondewo_vtsi_calls_pb.ListCallersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListCallersResponse) => void): grpc.ClientUnaryCall;
    public getCaller(request: ondewo_vtsi_calls_pb.GetCallerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.Caller) => void): grpc.ClientUnaryCall;
    public getCaller(request: ondewo_vtsi_calls_pb.GetCallerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.Caller) => void): grpc.ClientUnaryCall;
    public getCaller(request: ondewo_vtsi_calls_pb.GetCallerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.Caller) => void): grpc.ClientUnaryCall;
    public deleteCaller(request: ondewo_vtsi_calls_pb.DeleteCallerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteCallerResponse) => void): grpc.ClientUnaryCall;
    public deleteCaller(request: ondewo_vtsi_calls_pb.DeleteCallerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteCallerResponse) => void): grpc.ClientUnaryCall;
    public deleteCaller(request: ondewo_vtsi_calls_pb.DeleteCallerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteCallerResponse) => void): grpc.ClientUnaryCall;
    public deleteCallers(request: ondewo_vtsi_calls_pb.DeleteCallersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteCallersResponse) => void): grpc.ClientUnaryCall;
    public deleteCallers(request: ondewo_vtsi_calls_pb.DeleteCallersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteCallersResponse) => void): grpc.ClientUnaryCall;
    public deleteCallers(request: ondewo_vtsi_calls_pb.DeleteCallersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteCallersResponse) => void): grpc.ClientUnaryCall;
    public stopCaller(request: ondewo_vtsi_calls_pb.StopCallerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallerResponse) => void): grpc.ClientUnaryCall;
    public stopCaller(request: ondewo_vtsi_calls_pb.StopCallerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallerResponse) => void): grpc.ClientUnaryCall;
    public stopCaller(request: ondewo_vtsi_calls_pb.StopCallerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallerResponse) => void): grpc.ClientUnaryCall;
    public stopCallers(request: ondewo_vtsi_calls_pb.StopCallersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallersResponse) => void): grpc.ClientUnaryCall;
    public stopCallers(request: ondewo_vtsi_calls_pb.StopCallersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallersResponse) => void): grpc.ClientUnaryCall;
    public stopCallers(request: ondewo_vtsi_calls_pb.StopCallersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallersResponse) => void): grpc.ClientUnaryCall;
    public startListener(request: ondewo_vtsi_calls_pb.StartListenerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartListenerResponse) => void): grpc.ClientUnaryCall;
    public startListener(request: ondewo_vtsi_calls_pb.StartListenerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartListenerResponse) => void): grpc.ClientUnaryCall;
    public startListener(request: ondewo_vtsi_calls_pb.StartListenerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartListenerResponse) => void): grpc.ClientUnaryCall;
    public startListeners(request: ondewo_vtsi_calls_pb.StartListenersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartListenersResponse) => void): grpc.ClientUnaryCall;
    public startListeners(request: ondewo_vtsi_calls_pb.StartListenersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartListenersResponse) => void): grpc.ClientUnaryCall;
    public startListeners(request: ondewo_vtsi_calls_pb.StartListenersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartListenersResponse) => void): grpc.ClientUnaryCall;
    public stopListener(request: ondewo_vtsi_calls_pb.StopListenerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopListenerResponse) => void): grpc.ClientUnaryCall;
    public stopListener(request: ondewo_vtsi_calls_pb.StopListenerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopListenerResponse) => void): grpc.ClientUnaryCall;
    public stopListener(request: ondewo_vtsi_calls_pb.StopListenerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopListenerResponse) => void): grpc.ClientUnaryCall;
    public stopListeners(request: ondewo_vtsi_calls_pb.StopListenersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopListenersResponse) => void): grpc.ClientUnaryCall;
    public stopListeners(request: ondewo_vtsi_calls_pb.StopListenersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopListenersResponse) => void): grpc.ClientUnaryCall;
    public stopListeners(request: ondewo_vtsi_calls_pb.StopListenersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopListenersResponse) => void): grpc.ClientUnaryCall;
    public listListeners(request: ondewo_vtsi_calls_pb.ListListenersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListListenersResponse) => void): grpc.ClientUnaryCall;
    public listListeners(request: ondewo_vtsi_calls_pb.ListListenersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListListenersResponse) => void): grpc.ClientUnaryCall;
    public listListeners(request: ondewo_vtsi_calls_pb.ListListenersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListListenersResponse) => void): grpc.ClientUnaryCall;
    public getListener(request: ondewo_vtsi_calls_pb.GetListenerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.Listener) => void): grpc.ClientUnaryCall;
    public getListener(request: ondewo_vtsi_calls_pb.GetListenerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.Listener) => void): grpc.ClientUnaryCall;
    public getListener(request: ondewo_vtsi_calls_pb.GetListenerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.Listener) => void): grpc.ClientUnaryCall;
    public deleteListener(request: ondewo_vtsi_calls_pb.DeleteListenerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteListenerResponse) => void): grpc.ClientUnaryCall;
    public deleteListener(request: ondewo_vtsi_calls_pb.DeleteListenerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteListenerResponse) => void): grpc.ClientUnaryCall;
    public deleteListener(request: ondewo_vtsi_calls_pb.DeleteListenerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteListenerResponse) => void): grpc.ClientUnaryCall;
    public deleteListeners(request: ondewo_vtsi_calls_pb.DeleteListenersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteListenersResponse) => void): grpc.ClientUnaryCall;
    public deleteListeners(request: ondewo_vtsi_calls_pb.DeleteListenersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteListenersResponse) => void): grpc.ClientUnaryCall;
    public deleteListeners(request: ondewo_vtsi_calls_pb.DeleteListenersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.DeleteListenersResponse) => void): grpc.ClientUnaryCall;
    public startScheduledCaller(request: ondewo_vtsi_calls_pb.StartScheduledCallerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartScheduledCallerResponse) => void): grpc.ClientUnaryCall;
    public startScheduledCaller(request: ondewo_vtsi_calls_pb.StartScheduledCallerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartScheduledCallerResponse) => void): grpc.ClientUnaryCall;
    public startScheduledCaller(request: ondewo_vtsi_calls_pb.StartScheduledCallerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartScheduledCallerResponse) => void): grpc.ClientUnaryCall;
    public startScheduledCallers(request: ondewo_vtsi_calls_pb.StartScheduledCallersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartScheduledCallersResponse) => void): grpc.ClientUnaryCall;
    public startScheduledCallers(request: ondewo_vtsi_calls_pb.StartScheduledCallersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartScheduledCallersResponse) => void): grpc.ClientUnaryCall;
    public startScheduledCallers(request: ondewo_vtsi_calls_pb.StartScheduledCallersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StartScheduledCallersResponse) => void): grpc.ClientUnaryCall;
    public stopCall(request: ondewo_vtsi_calls_pb.StopCallRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallResponse) => void): grpc.ClientUnaryCall;
    public stopCall(request: ondewo_vtsi_calls_pb.StopCallRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallResponse) => void): grpc.ClientUnaryCall;
    public stopCall(request: ondewo_vtsi_calls_pb.StopCallRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallResponse) => void): grpc.ClientUnaryCall;
    public stopCalls(request: ondewo_vtsi_calls_pb.StopCallsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallsResponse) => void): grpc.ClientUnaryCall;
    public stopCalls(request: ondewo_vtsi_calls_pb.StopCallsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallsResponse) => void): grpc.ClientUnaryCall;
    public stopCalls(request: ondewo_vtsi_calls_pb.StopCallsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallsResponse) => void): grpc.ClientUnaryCall;
    public stopAllCalls(request: ondewo_vtsi_calls_pb.StopAllCallsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallsResponse) => void): grpc.ClientUnaryCall;
    public stopAllCalls(request: ondewo_vtsi_calls_pb.StopAllCallsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallsResponse) => void): grpc.ClientUnaryCall;
    public stopAllCalls(request: ondewo_vtsi_calls_pb.StopAllCallsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.StopCallsResponse) => void): grpc.ClientUnaryCall;
    public transferCall(request: ondewo_vtsi_calls_pb.TransferCallRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.TransferCallResponse) => void): grpc.ClientUnaryCall;
    public transferCall(request: ondewo_vtsi_calls_pb.TransferCallRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.TransferCallResponse) => void): grpc.ClientUnaryCall;
    public transferCall(request: ondewo_vtsi_calls_pb.TransferCallRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.TransferCallResponse) => void): grpc.ClientUnaryCall;
    public transferCalls(request: ondewo_vtsi_calls_pb.TransferCallsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.TransferCallsResponse) => void): grpc.ClientUnaryCall;
    public transferCalls(request: ondewo_vtsi_calls_pb.TransferCallsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.TransferCallsResponse) => void): grpc.ClientUnaryCall;
    public transferCalls(request: ondewo_vtsi_calls_pb.TransferCallsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.TransferCallsResponse) => void): grpc.ClientUnaryCall;
    public getCall(request: ondewo_vtsi_calls_pb.GetCallRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.Call) => void): grpc.ClientUnaryCall;
    public getCall(request: ondewo_vtsi_calls_pb.GetCallRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.Call) => void): grpc.ClientUnaryCall;
    public getCall(request: ondewo_vtsi_calls_pb.GetCallRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.Call) => void): grpc.ClientUnaryCall;
    public listCalls(request: ondewo_vtsi_calls_pb.ListCallsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListCallsResponse) => void): grpc.ClientUnaryCall;
    public listCalls(request: ondewo_vtsi_calls_pb.ListCallsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListCallsResponse) => void): grpc.ClientUnaryCall;
    public listCalls(request: ondewo_vtsi_calls_pb.ListCallsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListCallsResponse) => void): grpc.ClientUnaryCall;
}
