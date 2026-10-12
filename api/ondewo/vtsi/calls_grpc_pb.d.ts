// package: ondewo.vtsi
// file: ondewo/vtsi/calls.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_vtsi_calls_pb from "../../ondewo/vtsi/calls_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_nlu_intent_pb from "../../ondewo/nlu/intent_pb";
import * as ondewo_sip_sip_pb from "../../ondewo/sip/sip_pb";
import * as ondewo_vtsi_call_configs_pb from "../../ondewo/vtsi/call_configs_pb";
import * as ondewo_vtsi_campaigns_pb from "../../ondewo/vtsi/campaigns_pb";
import * as ondewo_vtsi_projects_pb from "../../ondewo/vtsi/projects_pb";

interface ICallsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    startCaller: ICallsService_IStartCaller;
    startCallers: ICallsService_IStartCallers;
    listCallers: ICallsService_IListCallers;
    getCaller: ICallsService_IGetCaller;
    updateCaller: ICallsService_IUpdateCaller;
    updateCallers: ICallsService_IUpdateCallers;
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
    updateListener: ICallsService_IUpdateListener;
    updateListeners: ICallsService_IUpdateListeners;
    deleteListener: ICallsService_IDeleteListener;
    deleteListeners: ICallsService_IDeleteListeners;
    startScheduledCaller: ICallsService_IStartScheduledCaller;
    startScheduledCallers: ICallsService_IStartScheduledCallers;
    addCallersToCampaign: ICallsService_IAddCallersToCampaign;
    addScheduledCallersToCampaign: ICallsService_IAddScheduledCallersToCampaign;
    getScheduledCaller: ICallsService_IGetScheduledCaller;
    listScheduledCallers: ICallsService_IListScheduledCallers;
    updateScheduledCaller: ICallsService_IUpdateScheduledCaller;
    cancelScheduledCaller: ICallsService_ICancelScheduledCaller;
    cancelScheduledCallers: ICallsService_ICancelScheduledCallers;
    retryScheduledCaller: ICallsService_IRetryScheduledCaller;
    stopCall: ICallsService_IStopCall;
    stopCalls: ICallsService_IStopCalls;
    stopAllCalls: ICallsService_IStopAllCalls;
    transferCall: ICallsService_ITransferCall;
    transferCalls: ICallsService_ITransferCalls;
    getCall: ICallsService_IGetCall;
    listCalls: ICallsService_IListCalls;
    getCallStatistics: ICallsService_IGetCallStatistics;
    updateCall: ICallsService_IUpdateCall;
    updateCalls: ICallsService_IUpdateCalls;
    streamCallerStatus: ICallsService_IStreamCallerStatus;
    streamListenerStatus: ICallsService_IStreamListenerStatus;
    streamScheduledCallerStatus: ICallsService_IStreamScheduledCallerStatus;
    inviteToCall: ICallsService_IInviteToCall;
    removeCallParticipant: ICallsService_IRemoveCallParticipant;
    setCallMediaControl: ICallsService_ISetCallMediaControl;
    streamCallAudio: ICallsService_IStreamCallAudio;
    listenCallAudio: ICallsService_IListenCallAudio;
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
interface ICallsService_IUpdateCaller extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.UpdateCallerRequest, ondewo_vtsi_calls_pb.UpdateCallerResponse> {
    path: "/ondewo.vtsi.Calls/UpdateCaller";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.UpdateCallerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.UpdateCallerRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.UpdateCallerResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.UpdateCallerResponse>;
}
interface ICallsService_IUpdateCallers extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.UpdateCallersRequest, ondewo_vtsi_calls_pb.UpdateCallersResponse> {
    path: "/ondewo.vtsi.Calls/UpdateCallers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.UpdateCallersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.UpdateCallersRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.UpdateCallersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.UpdateCallersResponse>;
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
interface ICallsService_IUpdateListener extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.UpdateListenerRequest, ondewo_vtsi_calls_pb.UpdateListenerResponse> {
    path: "/ondewo.vtsi.Calls/UpdateListener";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.UpdateListenerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.UpdateListenerRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.UpdateListenerResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.UpdateListenerResponse>;
}
interface ICallsService_IUpdateListeners extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.UpdateListenersRequest, ondewo_vtsi_calls_pb.UpdateListenersResponse> {
    path: "/ondewo.vtsi.Calls/UpdateListeners";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.UpdateListenersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.UpdateListenersRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.UpdateListenersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.UpdateListenersResponse>;
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
interface ICallsService_IAddCallersToCampaign extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.AddCallersToCampaignRequest, ondewo_vtsi_calls_pb.AddCallersToCampaignResponse> {
    path: "/ondewo.vtsi.Calls/AddCallersToCampaign";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.AddCallersToCampaignRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.AddCallersToCampaignRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.AddCallersToCampaignResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.AddCallersToCampaignResponse>;
}
interface ICallsService_IAddScheduledCallersToCampaign extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignRequest, ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignResponse> {
    path: "/ondewo.vtsi.Calls/AddScheduledCallersToCampaign";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignResponse>;
}
interface ICallsService_IGetScheduledCaller extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.GetScheduledCallerRequest, ondewo_vtsi_calls_pb.ScheduledCaller> {
    path: "/ondewo.vtsi.Calls/GetScheduledCaller";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.GetScheduledCallerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.GetScheduledCallerRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.ScheduledCaller>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.ScheduledCaller>;
}
interface ICallsService_IListScheduledCallers extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.ListScheduledCallersRequest, ondewo_vtsi_calls_pb.ListScheduledCallersResponse> {
    path: "/ondewo.vtsi.Calls/ListScheduledCallers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.ListScheduledCallersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.ListScheduledCallersRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.ListScheduledCallersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.ListScheduledCallersResponse>;
}
interface ICallsService_IUpdateScheduledCaller extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.UpdateScheduledCallerRequest, ondewo_vtsi_calls_pb.ScheduledCaller> {
    path: "/ondewo.vtsi.Calls/UpdateScheduledCaller";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.UpdateScheduledCallerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.UpdateScheduledCallerRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.ScheduledCaller>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.ScheduledCaller>;
}
interface ICallsService_ICancelScheduledCaller extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.CancelScheduledCallerRequest, ondewo_vtsi_calls_pb.CancelScheduledCallerResponse> {
    path: "/ondewo.vtsi.Calls/CancelScheduledCaller";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.CancelScheduledCallerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.CancelScheduledCallerRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.CancelScheduledCallerResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.CancelScheduledCallerResponse>;
}
interface ICallsService_ICancelScheduledCallers extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.CancelScheduledCallersRequest, ondewo_vtsi_calls_pb.CancelScheduledCallersResponse> {
    path: "/ondewo.vtsi.Calls/CancelScheduledCallers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.CancelScheduledCallersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.CancelScheduledCallersRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.CancelScheduledCallersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.CancelScheduledCallersResponse>;
}
interface ICallsService_IRetryScheduledCaller extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.RetryScheduledCallerRequest, ondewo_vtsi_calls_pb.ScheduledCaller> {
    path: "/ondewo.vtsi.Calls/RetryScheduledCaller";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.RetryScheduledCallerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.RetryScheduledCallerRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.ScheduledCaller>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.ScheduledCaller>;
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
interface ICallsService_IGetCallStatistics extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.GetCallStatisticsRequest, ondewo_vtsi_calls_pb.CallStatistics> {
    path: "/ondewo.vtsi.Calls/GetCallStatistics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.GetCallStatisticsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.GetCallStatisticsRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.CallStatistics>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.CallStatistics>;
}
interface ICallsService_IUpdateCall extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.UpdateCallRequest, ondewo_vtsi_calls_pb.UpdateCallResponse> {
    path: "/ondewo.vtsi.Calls/UpdateCall";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.UpdateCallRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.UpdateCallRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.UpdateCallResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.UpdateCallResponse>;
}
interface ICallsService_IUpdateCalls extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.UpdateCallsRequest, ondewo_vtsi_calls_pb.UpdateCallsResponse> {
    path: "/ondewo.vtsi.Calls/UpdateCalls";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.UpdateCallsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.UpdateCallsRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.UpdateCallsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.UpdateCallsResponse>;
}
interface ICallsService_IStreamCallerStatus extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.StreamCallerStatusRequest, ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse> {
    path: "/ondewo.vtsi.Calls/StreamCallerStatus";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StreamCallerStatusRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StreamCallerStatusRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse>;
}
interface ICallsService_IStreamListenerStatus extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.StreamListenerStatusRequest, ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse> {
    path: "/ondewo.vtsi.Calls/StreamListenerStatus";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StreamListenerStatusRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StreamListenerStatusRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse>;
}
interface ICallsService_IStreamScheduledCallerStatus extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.StreamScheduledCallerStatusRequest, ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse> {
    path: "/ondewo.vtsi.Calls/StreamScheduledCallerStatus";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StreamScheduledCallerStatusRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StreamScheduledCallerStatusRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse>;
}
interface ICallsService_IInviteToCall extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.InviteToCallRequest, ondewo_vtsi_calls_pb.InviteToCallResponse> {
    path: "/ondewo.vtsi.Calls/InviteToCall";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.InviteToCallRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.InviteToCallRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.InviteToCallResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.InviteToCallResponse>;
}
interface ICallsService_IRemoveCallParticipant extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.RemoveCallParticipantRequest, ondewo_vtsi_calls_pb.RemoveCallParticipantResponse> {
    path: "/ondewo.vtsi.Calls/RemoveCallParticipant";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.RemoveCallParticipantRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.RemoveCallParticipantRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.RemoveCallParticipantResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.RemoveCallParticipantResponse>;
}
interface ICallsService_ISetCallMediaControl extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.SetCallMediaControlRequest, ondewo_vtsi_calls_pb.SetCallMediaControlResponse> {
    path: "/ondewo.vtsi.Calls/SetCallMediaControl";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.SetCallMediaControlRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.SetCallMediaControlRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.SetCallMediaControlResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.SetCallMediaControlResponse>;
}
interface ICallsService_IStreamCallAudio extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.StreamCallAudioRequest, ondewo_vtsi_calls_pb.StreamCallAudioResponse> {
    path: "/ondewo.vtsi.Calls/StreamCallAudio";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StreamCallAudioRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StreamCallAudioRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StreamCallAudioResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StreamCallAudioResponse>;
}
interface ICallsService_IListenCallAudio extends grpc.MethodDefinition<ondewo_vtsi_calls_pb.ListenCallAudioRequest, ondewo_vtsi_calls_pb.StreamCallAudioResponse> {
    path: "/ondewo.vtsi.Calls/ListenCallAudio";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_vtsi_calls_pb.ListenCallAudioRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.ListenCallAudioRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_calls_pb.StreamCallAudioResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_calls_pb.StreamCallAudioResponse>;
}

export const CallsService: ICallsService;

export interface ICallsServer {
    startCaller: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.StartCallerRequest, ondewo_vtsi_calls_pb.StartCallerResponse>;
    startCallers: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.StartCallersRequest, ondewo_vtsi_calls_pb.StartCallersResponse>;
    listCallers: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.ListCallersRequest, ondewo_vtsi_calls_pb.ListCallersResponse>;
    getCaller: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.GetCallerRequest, ondewo_vtsi_calls_pb.Caller>;
    updateCaller: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.UpdateCallerRequest, ondewo_vtsi_calls_pb.UpdateCallerResponse>;
    updateCallers: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.UpdateCallersRequest, ondewo_vtsi_calls_pb.UpdateCallersResponse>;
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
    updateListener: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.UpdateListenerRequest, ondewo_vtsi_calls_pb.UpdateListenerResponse>;
    updateListeners: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.UpdateListenersRequest, ondewo_vtsi_calls_pb.UpdateListenersResponse>;
    deleteListener: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.DeleteListenerRequest, ondewo_vtsi_calls_pb.DeleteListenerResponse>;
    deleteListeners: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.DeleteListenersRequest, ondewo_vtsi_calls_pb.DeleteListenersResponse>;
    startScheduledCaller: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.StartScheduledCallerRequest, ondewo_vtsi_calls_pb.StartScheduledCallerResponse>;
    startScheduledCallers: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.StartScheduledCallersRequest, ondewo_vtsi_calls_pb.StartScheduledCallersResponse>;
    addCallersToCampaign: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.AddCallersToCampaignRequest, ondewo_vtsi_calls_pb.AddCallersToCampaignResponse>;
    addScheduledCallersToCampaign: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignRequest, ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignResponse>;
    getScheduledCaller: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.GetScheduledCallerRequest, ondewo_vtsi_calls_pb.ScheduledCaller>;
    listScheduledCallers: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.ListScheduledCallersRequest, ondewo_vtsi_calls_pb.ListScheduledCallersResponse>;
    updateScheduledCaller: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.UpdateScheduledCallerRequest, ondewo_vtsi_calls_pb.ScheduledCaller>;
    cancelScheduledCaller: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.CancelScheduledCallerRequest, ondewo_vtsi_calls_pb.CancelScheduledCallerResponse>;
    cancelScheduledCallers: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.CancelScheduledCallersRequest, ondewo_vtsi_calls_pb.CancelScheduledCallersResponse>;
    retryScheduledCaller: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.RetryScheduledCallerRequest, ondewo_vtsi_calls_pb.ScheduledCaller>;
    stopCall: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.StopCallRequest, ondewo_vtsi_calls_pb.StopCallResponse>;
    stopCalls: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.StopCallsRequest, ondewo_vtsi_calls_pb.StopCallsResponse>;
    stopAllCalls: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.StopAllCallsRequest, ondewo_vtsi_calls_pb.StopCallsResponse>;
    transferCall: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.TransferCallRequest, ondewo_vtsi_calls_pb.TransferCallResponse>;
    transferCalls: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.TransferCallsRequest, ondewo_vtsi_calls_pb.TransferCallsResponse>;
    getCall: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.GetCallRequest, ondewo_vtsi_calls_pb.Call>;
    listCalls: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.ListCallsRequest, ondewo_vtsi_calls_pb.ListCallsResponse>;
    getCallStatistics: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.GetCallStatisticsRequest, ondewo_vtsi_calls_pb.CallStatistics>;
    updateCall: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.UpdateCallRequest, ondewo_vtsi_calls_pb.UpdateCallResponse>;
    updateCalls: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.UpdateCallsRequest, ondewo_vtsi_calls_pb.UpdateCallsResponse>;
    streamCallerStatus: grpc.handleServerStreamingCall<ondewo_vtsi_calls_pb.StreamCallerStatusRequest, ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse>;
    streamListenerStatus: grpc.handleServerStreamingCall<ondewo_vtsi_calls_pb.StreamListenerStatusRequest, ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse>;
    streamScheduledCallerStatus: grpc.handleServerStreamingCall<ondewo_vtsi_calls_pb.StreamScheduledCallerStatusRequest, ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse>;
    inviteToCall: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.InviteToCallRequest, ondewo_vtsi_calls_pb.InviteToCallResponse>;
    removeCallParticipant: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.RemoveCallParticipantRequest, ondewo_vtsi_calls_pb.RemoveCallParticipantResponse>;
    setCallMediaControl: grpc.handleUnaryCall<ondewo_vtsi_calls_pb.SetCallMediaControlRequest, ondewo_vtsi_calls_pb.SetCallMediaControlResponse>;
    streamCallAudio: grpc.handleBidiStreamingCall<ondewo_vtsi_calls_pb.StreamCallAudioRequest, ondewo_vtsi_calls_pb.StreamCallAudioResponse>;
    listenCallAudio: grpc.handleServerStreamingCall<ondewo_vtsi_calls_pb.ListenCallAudioRequest, ondewo_vtsi_calls_pb.StreamCallAudioResponse>;
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
    updateCaller(request: ondewo_vtsi_calls_pb.UpdateCallerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallerResponse) => void): grpc.ClientUnaryCall;
    updateCaller(request: ondewo_vtsi_calls_pb.UpdateCallerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallerResponse) => void): grpc.ClientUnaryCall;
    updateCaller(request: ondewo_vtsi_calls_pb.UpdateCallerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallerResponse) => void): grpc.ClientUnaryCall;
    updateCallers(request: ondewo_vtsi_calls_pb.UpdateCallersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallersResponse) => void): grpc.ClientUnaryCall;
    updateCallers(request: ondewo_vtsi_calls_pb.UpdateCallersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallersResponse) => void): grpc.ClientUnaryCall;
    updateCallers(request: ondewo_vtsi_calls_pb.UpdateCallersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallersResponse) => void): grpc.ClientUnaryCall;
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
    updateListener(request: ondewo_vtsi_calls_pb.UpdateListenerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateListenerResponse) => void): grpc.ClientUnaryCall;
    updateListener(request: ondewo_vtsi_calls_pb.UpdateListenerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateListenerResponse) => void): grpc.ClientUnaryCall;
    updateListener(request: ondewo_vtsi_calls_pb.UpdateListenerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateListenerResponse) => void): grpc.ClientUnaryCall;
    updateListeners(request: ondewo_vtsi_calls_pb.UpdateListenersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateListenersResponse) => void): grpc.ClientUnaryCall;
    updateListeners(request: ondewo_vtsi_calls_pb.UpdateListenersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateListenersResponse) => void): grpc.ClientUnaryCall;
    updateListeners(request: ondewo_vtsi_calls_pb.UpdateListenersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateListenersResponse) => void): grpc.ClientUnaryCall;
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
    addCallersToCampaign(request: ondewo_vtsi_calls_pb.AddCallersToCampaignRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.AddCallersToCampaignResponse) => void): grpc.ClientUnaryCall;
    addCallersToCampaign(request: ondewo_vtsi_calls_pb.AddCallersToCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.AddCallersToCampaignResponse) => void): grpc.ClientUnaryCall;
    addCallersToCampaign(request: ondewo_vtsi_calls_pb.AddCallersToCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.AddCallersToCampaignResponse) => void): grpc.ClientUnaryCall;
    addScheduledCallersToCampaign(request: ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignResponse) => void): grpc.ClientUnaryCall;
    addScheduledCallersToCampaign(request: ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignResponse) => void): grpc.ClientUnaryCall;
    addScheduledCallersToCampaign(request: ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignResponse) => void): grpc.ClientUnaryCall;
    getScheduledCaller(request: ondewo_vtsi_calls_pb.GetScheduledCallerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ScheduledCaller) => void): grpc.ClientUnaryCall;
    getScheduledCaller(request: ondewo_vtsi_calls_pb.GetScheduledCallerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ScheduledCaller) => void): grpc.ClientUnaryCall;
    getScheduledCaller(request: ondewo_vtsi_calls_pb.GetScheduledCallerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ScheduledCaller) => void): grpc.ClientUnaryCall;
    listScheduledCallers(request: ondewo_vtsi_calls_pb.ListScheduledCallersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListScheduledCallersResponse) => void): grpc.ClientUnaryCall;
    listScheduledCallers(request: ondewo_vtsi_calls_pb.ListScheduledCallersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListScheduledCallersResponse) => void): grpc.ClientUnaryCall;
    listScheduledCallers(request: ondewo_vtsi_calls_pb.ListScheduledCallersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListScheduledCallersResponse) => void): grpc.ClientUnaryCall;
    updateScheduledCaller(request: ondewo_vtsi_calls_pb.UpdateScheduledCallerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ScheduledCaller) => void): grpc.ClientUnaryCall;
    updateScheduledCaller(request: ondewo_vtsi_calls_pb.UpdateScheduledCallerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ScheduledCaller) => void): grpc.ClientUnaryCall;
    updateScheduledCaller(request: ondewo_vtsi_calls_pb.UpdateScheduledCallerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ScheduledCaller) => void): grpc.ClientUnaryCall;
    cancelScheduledCaller(request: ondewo_vtsi_calls_pb.CancelScheduledCallerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.CancelScheduledCallerResponse) => void): grpc.ClientUnaryCall;
    cancelScheduledCaller(request: ondewo_vtsi_calls_pb.CancelScheduledCallerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.CancelScheduledCallerResponse) => void): grpc.ClientUnaryCall;
    cancelScheduledCaller(request: ondewo_vtsi_calls_pb.CancelScheduledCallerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.CancelScheduledCallerResponse) => void): grpc.ClientUnaryCall;
    cancelScheduledCallers(request: ondewo_vtsi_calls_pb.CancelScheduledCallersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.CancelScheduledCallersResponse) => void): grpc.ClientUnaryCall;
    cancelScheduledCallers(request: ondewo_vtsi_calls_pb.CancelScheduledCallersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.CancelScheduledCallersResponse) => void): grpc.ClientUnaryCall;
    cancelScheduledCallers(request: ondewo_vtsi_calls_pb.CancelScheduledCallersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.CancelScheduledCallersResponse) => void): grpc.ClientUnaryCall;
    retryScheduledCaller(request: ondewo_vtsi_calls_pb.RetryScheduledCallerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ScheduledCaller) => void): grpc.ClientUnaryCall;
    retryScheduledCaller(request: ondewo_vtsi_calls_pb.RetryScheduledCallerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ScheduledCaller) => void): grpc.ClientUnaryCall;
    retryScheduledCaller(request: ondewo_vtsi_calls_pb.RetryScheduledCallerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ScheduledCaller) => void): grpc.ClientUnaryCall;
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
    getCallStatistics(request: ondewo_vtsi_calls_pb.GetCallStatisticsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.CallStatistics) => void): grpc.ClientUnaryCall;
    getCallStatistics(request: ondewo_vtsi_calls_pb.GetCallStatisticsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.CallStatistics) => void): grpc.ClientUnaryCall;
    getCallStatistics(request: ondewo_vtsi_calls_pb.GetCallStatisticsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.CallStatistics) => void): grpc.ClientUnaryCall;
    updateCall(request: ondewo_vtsi_calls_pb.UpdateCallRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallResponse) => void): grpc.ClientUnaryCall;
    updateCall(request: ondewo_vtsi_calls_pb.UpdateCallRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallResponse) => void): grpc.ClientUnaryCall;
    updateCall(request: ondewo_vtsi_calls_pb.UpdateCallRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallResponse) => void): grpc.ClientUnaryCall;
    updateCalls(request: ondewo_vtsi_calls_pb.UpdateCallsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallsResponse) => void): grpc.ClientUnaryCall;
    updateCalls(request: ondewo_vtsi_calls_pb.UpdateCallsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallsResponse) => void): grpc.ClientUnaryCall;
    updateCalls(request: ondewo_vtsi_calls_pb.UpdateCallsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallsResponse) => void): grpc.ClientUnaryCall;
    streamCallerStatus(request: ondewo_vtsi_calls_pb.StreamCallerStatusRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse>;
    streamCallerStatus(request: ondewo_vtsi_calls_pb.StreamCallerStatusRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse>;
    streamListenerStatus(request: ondewo_vtsi_calls_pb.StreamListenerStatusRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse>;
    streamListenerStatus(request: ondewo_vtsi_calls_pb.StreamListenerStatusRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse>;
    streamScheduledCallerStatus(request: ondewo_vtsi_calls_pb.StreamScheduledCallerStatusRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse>;
    streamScheduledCallerStatus(request: ondewo_vtsi_calls_pb.StreamScheduledCallerStatusRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse>;
    inviteToCall(request: ondewo_vtsi_calls_pb.InviteToCallRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.InviteToCallResponse) => void): grpc.ClientUnaryCall;
    inviteToCall(request: ondewo_vtsi_calls_pb.InviteToCallRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.InviteToCallResponse) => void): grpc.ClientUnaryCall;
    inviteToCall(request: ondewo_vtsi_calls_pb.InviteToCallRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.InviteToCallResponse) => void): grpc.ClientUnaryCall;
    removeCallParticipant(request: ondewo_vtsi_calls_pb.RemoveCallParticipantRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.RemoveCallParticipantResponse) => void): grpc.ClientUnaryCall;
    removeCallParticipant(request: ondewo_vtsi_calls_pb.RemoveCallParticipantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.RemoveCallParticipantResponse) => void): grpc.ClientUnaryCall;
    removeCallParticipant(request: ondewo_vtsi_calls_pb.RemoveCallParticipantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.RemoveCallParticipantResponse) => void): grpc.ClientUnaryCall;
    setCallMediaControl(request: ondewo_vtsi_calls_pb.SetCallMediaControlRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.SetCallMediaControlResponse) => void): grpc.ClientUnaryCall;
    setCallMediaControl(request: ondewo_vtsi_calls_pb.SetCallMediaControlRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.SetCallMediaControlResponse) => void): grpc.ClientUnaryCall;
    setCallMediaControl(request: ondewo_vtsi_calls_pb.SetCallMediaControlRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.SetCallMediaControlResponse) => void): grpc.ClientUnaryCall;
    streamCallAudio(): grpc.ClientDuplexStream<ondewo_vtsi_calls_pb.StreamCallAudioRequest, ondewo_vtsi_calls_pb.StreamCallAudioResponse>;
    streamCallAudio(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ondewo_vtsi_calls_pb.StreamCallAudioRequest, ondewo_vtsi_calls_pb.StreamCallAudioResponse>;
    streamCallAudio(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ondewo_vtsi_calls_pb.StreamCallAudioRequest, ondewo_vtsi_calls_pb.StreamCallAudioResponse>;
    listenCallAudio(request: ondewo_vtsi_calls_pb.ListenCallAudioRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_calls_pb.StreamCallAudioResponse>;
    listenCallAudio(request: ondewo_vtsi_calls_pb.ListenCallAudioRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_calls_pb.StreamCallAudioResponse>;
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
    public updateCaller(request: ondewo_vtsi_calls_pb.UpdateCallerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallerResponse) => void): grpc.ClientUnaryCall;
    public updateCaller(request: ondewo_vtsi_calls_pb.UpdateCallerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallerResponse) => void): grpc.ClientUnaryCall;
    public updateCaller(request: ondewo_vtsi_calls_pb.UpdateCallerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallerResponse) => void): grpc.ClientUnaryCall;
    public updateCallers(request: ondewo_vtsi_calls_pb.UpdateCallersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallersResponse) => void): grpc.ClientUnaryCall;
    public updateCallers(request: ondewo_vtsi_calls_pb.UpdateCallersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallersResponse) => void): grpc.ClientUnaryCall;
    public updateCallers(request: ondewo_vtsi_calls_pb.UpdateCallersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallersResponse) => void): grpc.ClientUnaryCall;
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
    public updateListener(request: ondewo_vtsi_calls_pb.UpdateListenerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateListenerResponse) => void): grpc.ClientUnaryCall;
    public updateListener(request: ondewo_vtsi_calls_pb.UpdateListenerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateListenerResponse) => void): grpc.ClientUnaryCall;
    public updateListener(request: ondewo_vtsi_calls_pb.UpdateListenerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateListenerResponse) => void): grpc.ClientUnaryCall;
    public updateListeners(request: ondewo_vtsi_calls_pb.UpdateListenersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateListenersResponse) => void): grpc.ClientUnaryCall;
    public updateListeners(request: ondewo_vtsi_calls_pb.UpdateListenersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateListenersResponse) => void): grpc.ClientUnaryCall;
    public updateListeners(request: ondewo_vtsi_calls_pb.UpdateListenersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateListenersResponse) => void): grpc.ClientUnaryCall;
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
    public addCallersToCampaign(request: ondewo_vtsi_calls_pb.AddCallersToCampaignRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.AddCallersToCampaignResponse) => void): grpc.ClientUnaryCall;
    public addCallersToCampaign(request: ondewo_vtsi_calls_pb.AddCallersToCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.AddCallersToCampaignResponse) => void): grpc.ClientUnaryCall;
    public addCallersToCampaign(request: ondewo_vtsi_calls_pb.AddCallersToCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.AddCallersToCampaignResponse) => void): grpc.ClientUnaryCall;
    public addScheduledCallersToCampaign(request: ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignResponse) => void): grpc.ClientUnaryCall;
    public addScheduledCallersToCampaign(request: ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignResponse) => void): grpc.ClientUnaryCall;
    public addScheduledCallersToCampaign(request: ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignResponse) => void): grpc.ClientUnaryCall;
    public getScheduledCaller(request: ondewo_vtsi_calls_pb.GetScheduledCallerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ScheduledCaller) => void): grpc.ClientUnaryCall;
    public getScheduledCaller(request: ondewo_vtsi_calls_pb.GetScheduledCallerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ScheduledCaller) => void): grpc.ClientUnaryCall;
    public getScheduledCaller(request: ondewo_vtsi_calls_pb.GetScheduledCallerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ScheduledCaller) => void): grpc.ClientUnaryCall;
    public listScheduledCallers(request: ondewo_vtsi_calls_pb.ListScheduledCallersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListScheduledCallersResponse) => void): grpc.ClientUnaryCall;
    public listScheduledCallers(request: ondewo_vtsi_calls_pb.ListScheduledCallersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListScheduledCallersResponse) => void): grpc.ClientUnaryCall;
    public listScheduledCallers(request: ondewo_vtsi_calls_pb.ListScheduledCallersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ListScheduledCallersResponse) => void): grpc.ClientUnaryCall;
    public updateScheduledCaller(request: ondewo_vtsi_calls_pb.UpdateScheduledCallerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ScheduledCaller) => void): grpc.ClientUnaryCall;
    public updateScheduledCaller(request: ondewo_vtsi_calls_pb.UpdateScheduledCallerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ScheduledCaller) => void): grpc.ClientUnaryCall;
    public updateScheduledCaller(request: ondewo_vtsi_calls_pb.UpdateScheduledCallerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ScheduledCaller) => void): grpc.ClientUnaryCall;
    public cancelScheduledCaller(request: ondewo_vtsi_calls_pb.CancelScheduledCallerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.CancelScheduledCallerResponse) => void): grpc.ClientUnaryCall;
    public cancelScheduledCaller(request: ondewo_vtsi_calls_pb.CancelScheduledCallerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.CancelScheduledCallerResponse) => void): grpc.ClientUnaryCall;
    public cancelScheduledCaller(request: ondewo_vtsi_calls_pb.CancelScheduledCallerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.CancelScheduledCallerResponse) => void): grpc.ClientUnaryCall;
    public cancelScheduledCallers(request: ondewo_vtsi_calls_pb.CancelScheduledCallersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.CancelScheduledCallersResponse) => void): grpc.ClientUnaryCall;
    public cancelScheduledCallers(request: ondewo_vtsi_calls_pb.CancelScheduledCallersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.CancelScheduledCallersResponse) => void): grpc.ClientUnaryCall;
    public cancelScheduledCallers(request: ondewo_vtsi_calls_pb.CancelScheduledCallersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.CancelScheduledCallersResponse) => void): grpc.ClientUnaryCall;
    public retryScheduledCaller(request: ondewo_vtsi_calls_pb.RetryScheduledCallerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ScheduledCaller) => void): grpc.ClientUnaryCall;
    public retryScheduledCaller(request: ondewo_vtsi_calls_pb.RetryScheduledCallerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ScheduledCaller) => void): grpc.ClientUnaryCall;
    public retryScheduledCaller(request: ondewo_vtsi_calls_pb.RetryScheduledCallerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.ScheduledCaller) => void): grpc.ClientUnaryCall;
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
    public getCallStatistics(request: ondewo_vtsi_calls_pb.GetCallStatisticsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.CallStatistics) => void): grpc.ClientUnaryCall;
    public getCallStatistics(request: ondewo_vtsi_calls_pb.GetCallStatisticsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.CallStatistics) => void): grpc.ClientUnaryCall;
    public getCallStatistics(request: ondewo_vtsi_calls_pb.GetCallStatisticsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.CallStatistics) => void): grpc.ClientUnaryCall;
    public updateCall(request: ondewo_vtsi_calls_pb.UpdateCallRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallResponse) => void): grpc.ClientUnaryCall;
    public updateCall(request: ondewo_vtsi_calls_pb.UpdateCallRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallResponse) => void): grpc.ClientUnaryCall;
    public updateCall(request: ondewo_vtsi_calls_pb.UpdateCallRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallResponse) => void): grpc.ClientUnaryCall;
    public updateCalls(request: ondewo_vtsi_calls_pb.UpdateCallsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallsResponse) => void): grpc.ClientUnaryCall;
    public updateCalls(request: ondewo_vtsi_calls_pb.UpdateCallsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallsResponse) => void): grpc.ClientUnaryCall;
    public updateCalls(request: ondewo_vtsi_calls_pb.UpdateCallsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.UpdateCallsResponse) => void): grpc.ClientUnaryCall;
    public streamCallerStatus(request: ondewo_vtsi_calls_pb.StreamCallerStatusRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse>;
    public streamCallerStatus(request: ondewo_vtsi_calls_pb.StreamCallerStatusRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse>;
    public streamListenerStatus(request: ondewo_vtsi_calls_pb.StreamListenerStatusRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse>;
    public streamListenerStatus(request: ondewo_vtsi_calls_pb.StreamListenerStatusRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse>;
    public streamScheduledCallerStatus(request: ondewo_vtsi_calls_pb.StreamScheduledCallerStatusRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse>;
    public streamScheduledCallerStatus(request: ondewo_vtsi_calls_pb.StreamScheduledCallerStatusRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse>;
    public inviteToCall(request: ondewo_vtsi_calls_pb.InviteToCallRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.InviteToCallResponse) => void): grpc.ClientUnaryCall;
    public inviteToCall(request: ondewo_vtsi_calls_pb.InviteToCallRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.InviteToCallResponse) => void): grpc.ClientUnaryCall;
    public inviteToCall(request: ondewo_vtsi_calls_pb.InviteToCallRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.InviteToCallResponse) => void): grpc.ClientUnaryCall;
    public removeCallParticipant(request: ondewo_vtsi_calls_pb.RemoveCallParticipantRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.RemoveCallParticipantResponse) => void): grpc.ClientUnaryCall;
    public removeCallParticipant(request: ondewo_vtsi_calls_pb.RemoveCallParticipantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.RemoveCallParticipantResponse) => void): grpc.ClientUnaryCall;
    public removeCallParticipant(request: ondewo_vtsi_calls_pb.RemoveCallParticipantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.RemoveCallParticipantResponse) => void): grpc.ClientUnaryCall;
    public setCallMediaControl(request: ondewo_vtsi_calls_pb.SetCallMediaControlRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.SetCallMediaControlResponse) => void): grpc.ClientUnaryCall;
    public setCallMediaControl(request: ondewo_vtsi_calls_pb.SetCallMediaControlRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.SetCallMediaControlResponse) => void): grpc.ClientUnaryCall;
    public setCallMediaControl(request: ondewo_vtsi_calls_pb.SetCallMediaControlRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_calls_pb.SetCallMediaControlResponse) => void): grpc.ClientUnaryCall;
    public streamCallAudio(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ondewo_vtsi_calls_pb.StreamCallAudioRequest, ondewo_vtsi_calls_pb.StreamCallAudioResponse>;
    public streamCallAudio(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ondewo_vtsi_calls_pb.StreamCallAudioRequest, ondewo_vtsi_calls_pb.StreamCallAudioResponse>;
    public listenCallAudio(request: ondewo_vtsi_calls_pb.ListenCallAudioRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_calls_pb.StreamCallAudioResponse>;
    public listenCallAudio(request: ondewo_vtsi_calls_pb.ListenCallAudioRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_calls_pb.StreamCallAudioResponse>;
}
