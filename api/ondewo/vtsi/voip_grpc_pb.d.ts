// package: ondewo.vtsi
// file: ondewo/vtsi/voip.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_vtsi_voip_pb from "../../ondewo/vtsi/voip_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as ondewo_nlu_context_pb from "../../ondewo/nlu/context_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_s2t_speech_to_text_pb from "../../ondewo/s2t/speech-to-text_pb";
import * as ondewo_t2s_text_to_speech_pb from "../../ondewo/t2s/text-to-speech_pb";
import * as ondewo_sip_sip_pb from "../../ondewo/sip/sip_pb";

interface IVoipSessionsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createProjectConfigs: IVoipSessionsService_ICreateProjectConfigs;
    getProjectConfigs: IVoipSessionsService_IGetProjectConfigs;
    updateProjectConfigs: IVoipSessionsService_IUpdateProjectConfigs;
    deleteProjectConfigs: IVoipSessionsService_IDeleteProjectConfigs;
    deployProject: IVoipSessionsService_IDeployProject;
    undeployProject: IVoipSessionsService_IUndeployProject;
    startListeners: IVoipSessionsService_IStartListeners;
    startCallers: IVoipSessionsService_IStartCallers;
    startScheduledCallers: IVoipSessionsService_IStartScheduledCallers;
    stopCalls: IVoipSessionsService_IStopCalls;
    stopAllCalls: IVoipSessionsService_IStopAllCalls;
    transferCalls: IVoipSessionsService_ITransferCalls;
    getVoipCallInfo: IVoipSessionsService_IGetVoipCallInfo;
    listVoipCallInfo: IVoipSessionsService_IListVoipCallInfo;
    getAudioFile: IVoipSessionsService_IGetAudioFile;
    getFullConversationAudioFile: IVoipSessionsService_IGetFullConversationAudioFile;
}

interface IVoipSessionsService_ICreateProjectConfigs extends grpc.MethodDefinition<ondewo_vtsi_voip_pb.CreateProjectConfigsRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.vtsi.VoipSessions/CreateProjectConfigs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_voip_pb.CreateProjectConfigsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_voip_pb.CreateProjectConfigsRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IVoipSessionsService_IGetProjectConfigs extends grpc.MethodDefinition<ondewo_vtsi_voip_pb.GetProjectConfigsRequest, ondewo_vtsi_voip_pb.GetProjectConfigsResponse> {
    path: "/ondewo.vtsi.VoipSessions/GetProjectConfigs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_voip_pb.GetProjectConfigsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_voip_pb.GetProjectConfigsRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_voip_pb.GetProjectConfigsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_voip_pb.GetProjectConfigsResponse>;
}
interface IVoipSessionsService_IUpdateProjectConfigs extends grpc.MethodDefinition<ondewo_vtsi_voip_pb.UpdateProjectConfigsRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.vtsi.VoipSessions/UpdateProjectConfigs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_voip_pb.UpdateProjectConfigsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_voip_pb.UpdateProjectConfigsRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IVoipSessionsService_IDeleteProjectConfigs extends grpc.MethodDefinition<ondewo_vtsi_voip_pb.DeleteProjectConfigsRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.vtsi.VoipSessions/DeleteProjectConfigs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_voip_pb.DeleteProjectConfigsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_voip_pb.DeleteProjectConfigsRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IVoipSessionsService_IDeployProject extends grpc.MethodDefinition<ondewo_vtsi_voip_pb.DeployProjectRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.vtsi.VoipSessions/DeployProject";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_voip_pb.DeployProjectRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_voip_pb.DeployProjectRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IVoipSessionsService_IUndeployProject extends grpc.MethodDefinition<ondewo_vtsi_voip_pb.UndeployProjectRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.vtsi.VoipSessions/UndeployProject";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_voip_pb.UndeployProjectRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_voip_pb.UndeployProjectRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IVoipSessionsService_IStartListeners extends grpc.MethodDefinition<ondewo_vtsi_voip_pb.StartListenersRequest, ondewo_vtsi_voip_pb.StartListenersResponse> {
    path: "/ondewo.vtsi.VoipSessions/StartListeners";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_voip_pb.StartListenersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_voip_pb.StartListenersRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_voip_pb.StartListenersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_voip_pb.StartListenersResponse>;
}
interface IVoipSessionsService_IStartCallers extends grpc.MethodDefinition<ondewo_vtsi_voip_pb.StartCallersRequest, ondewo_vtsi_voip_pb.StartCallersResponse> {
    path: "/ondewo.vtsi.VoipSessions/StartCallers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_voip_pb.StartCallersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_voip_pb.StartCallersRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_voip_pb.StartCallersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_voip_pb.StartCallersResponse>;
}
interface IVoipSessionsService_IStartScheduledCallers extends grpc.MethodDefinition<ondewo_vtsi_voip_pb.StartScheduledCallersRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.vtsi.VoipSessions/StartScheduledCallers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_voip_pb.StartScheduledCallersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_voip_pb.StartScheduledCallersRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IVoipSessionsService_IStopCalls extends grpc.MethodDefinition<ondewo_vtsi_voip_pb.StopCallsRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.vtsi.VoipSessions/StopCalls";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_voip_pb.StopCallsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_voip_pb.StopCallsRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IVoipSessionsService_IStopAllCalls extends grpc.MethodDefinition<ondewo_vtsi_voip_pb.StopAllCallsRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.vtsi.VoipSessions/StopAllCalls";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_voip_pb.StopAllCallsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_voip_pb.StopAllCallsRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IVoipSessionsService_ITransferCalls extends grpc.MethodDefinition<ondewo_vtsi_voip_pb.TransferCallsRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.vtsi.VoipSessions/TransferCalls";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_voip_pb.TransferCallsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_voip_pb.TransferCallsRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IVoipSessionsService_IGetVoipCallInfo extends grpc.MethodDefinition<ondewo_vtsi_voip_pb.GetVoipCallInfoRequest, ondewo_vtsi_voip_pb.GetVoipCallInfoResponse> {
    path: "/ondewo.vtsi.VoipSessions/GetVoipCallInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_voip_pb.GetVoipCallInfoRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_voip_pb.GetVoipCallInfoRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_voip_pb.GetVoipCallInfoResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_voip_pb.GetVoipCallInfoResponse>;
}
interface IVoipSessionsService_IListVoipCallInfo extends grpc.MethodDefinition<ondewo_vtsi_voip_pb.ListVoipCallInfoRequest, ondewo_vtsi_voip_pb.ListVoipCallInfoResponse> {
    path: "/ondewo.vtsi.VoipSessions/ListVoipCallInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_voip_pb.ListVoipCallInfoRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_voip_pb.ListVoipCallInfoRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_voip_pb.ListVoipCallInfoResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_voip_pb.ListVoipCallInfoResponse>;
}
interface IVoipSessionsService_IGetAudioFile extends grpc.MethodDefinition<ondewo_vtsi_voip_pb.GetAudioFileRequest, ondewo_vtsi_voip_pb.GetAudioFileResponse> {
    path: "/ondewo.vtsi.VoipSessions/GetAudioFile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_voip_pb.GetAudioFileRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_voip_pb.GetAudioFileRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_voip_pb.GetAudioFileResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_voip_pb.GetAudioFileResponse>;
}
interface IVoipSessionsService_IGetFullConversationAudioFile extends grpc.MethodDefinition<ondewo_vtsi_voip_pb.GetFullConversationAudioFileRequest, ondewo_vtsi_voip_pb.GetFullConversationAudioFileResponse> {
    path: "/ondewo.vtsi.VoipSessions/GetFullConversationAudioFile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_voip_pb.GetFullConversationAudioFileRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_voip_pb.GetFullConversationAudioFileRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_voip_pb.GetFullConversationAudioFileResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_voip_pb.GetFullConversationAudioFileResponse>;
}

export const VoipSessionsService: IVoipSessionsService;

export interface IVoipSessionsServer {
    createProjectConfigs: grpc.handleUnaryCall<ondewo_vtsi_voip_pb.CreateProjectConfigsRequest, google_protobuf_empty_pb.Empty>;
    getProjectConfigs: grpc.handleUnaryCall<ondewo_vtsi_voip_pb.GetProjectConfigsRequest, ondewo_vtsi_voip_pb.GetProjectConfigsResponse>;
    updateProjectConfigs: grpc.handleUnaryCall<ondewo_vtsi_voip_pb.UpdateProjectConfigsRequest, google_protobuf_empty_pb.Empty>;
    deleteProjectConfigs: grpc.handleUnaryCall<ondewo_vtsi_voip_pb.DeleteProjectConfigsRequest, google_protobuf_empty_pb.Empty>;
    deployProject: grpc.handleUnaryCall<ondewo_vtsi_voip_pb.DeployProjectRequest, google_protobuf_empty_pb.Empty>;
    undeployProject: grpc.handleUnaryCall<ondewo_vtsi_voip_pb.UndeployProjectRequest, google_protobuf_empty_pb.Empty>;
    startListeners: grpc.handleUnaryCall<ondewo_vtsi_voip_pb.StartListenersRequest, ondewo_vtsi_voip_pb.StartListenersResponse>;
    startCallers: grpc.handleUnaryCall<ondewo_vtsi_voip_pb.StartCallersRequest, ondewo_vtsi_voip_pb.StartCallersResponse>;
    startScheduledCallers: grpc.handleUnaryCall<ondewo_vtsi_voip_pb.StartScheduledCallersRequest, google_protobuf_empty_pb.Empty>;
    stopCalls: grpc.handleUnaryCall<ondewo_vtsi_voip_pb.StopCallsRequest, google_protobuf_empty_pb.Empty>;
    stopAllCalls: grpc.handleUnaryCall<ondewo_vtsi_voip_pb.StopAllCallsRequest, google_protobuf_empty_pb.Empty>;
    transferCalls: grpc.handleUnaryCall<ondewo_vtsi_voip_pb.TransferCallsRequest, google_protobuf_empty_pb.Empty>;
    getVoipCallInfo: grpc.handleUnaryCall<ondewo_vtsi_voip_pb.GetVoipCallInfoRequest, ondewo_vtsi_voip_pb.GetVoipCallInfoResponse>;
    listVoipCallInfo: grpc.handleUnaryCall<ondewo_vtsi_voip_pb.ListVoipCallInfoRequest, ondewo_vtsi_voip_pb.ListVoipCallInfoResponse>;
    getAudioFile: grpc.handleUnaryCall<ondewo_vtsi_voip_pb.GetAudioFileRequest, ondewo_vtsi_voip_pb.GetAudioFileResponse>;
    getFullConversationAudioFile: grpc.handleUnaryCall<ondewo_vtsi_voip_pb.GetFullConversationAudioFileRequest, ondewo_vtsi_voip_pb.GetFullConversationAudioFileResponse>;
}

export interface IVoipSessionsClient {
    createProjectConfigs(request: ondewo_vtsi_voip_pb.CreateProjectConfigsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createProjectConfigs(request: ondewo_vtsi_voip_pb.CreateProjectConfigsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createProjectConfigs(request: ondewo_vtsi_voip_pb.CreateProjectConfigsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getProjectConfigs(request: ondewo_vtsi_voip_pb.GetProjectConfigsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetProjectConfigsResponse) => void): grpc.ClientUnaryCall;
    getProjectConfigs(request: ondewo_vtsi_voip_pb.GetProjectConfigsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetProjectConfigsResponse) => void): grpc.ClientUnaryCall;
    getProjectConfigs(request: ondewo_vtsi_voip_pb.GetProjectConfigsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetProjectConfigsResponse) => void): grpc.ClientUnaryCall;
    updateProjectConfigs(request: ondewo_vtsi_voip_pb.UpdateProjectConfigsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateProjectConfigs(request: ondewo_vtsi_voip_pb.UpdateProjectConfigsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateProjectConfigs(request: ondewo_vtsi_voip_pb.UpdateProjectConfigsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteProjectConfigs(request: ondewo_vtsi_voip_pb.DeleteProjectConfigsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteProjectConfigs(request: ondewo_vtsi_voip_pb.DeleteProjectConfigsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteProjectConfigs(request: ondewo_vtsi_voip_pb.DeleteProjectConfigsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deployProject(request: ondewo_vtsi_voip_pb.DeployProjectRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deployProject(request: ondewo_vtsi_voip_pb.DeployProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deployProject(request: ondewo_vtsi_voip_pb.DeployProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    undeployProject(request: ondewo_vtsi_voip_pb.UndeployProjectRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    undeployProject(request: ondewo_vtsi_voip_pb.UndeployProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    undeployProject(request: ondewo_vtsi_voip_pb.UndeployProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    startListeners(request: ondewo_vtsi_voip_pb.StartListenersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.StartListenersResponse) => void): grpc.ClientUnaryCall;
    startListeners(request: ondewo_vtsi_voip_pb.StartListenersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.StartListenersResponse) => void): grpc.ClientUnaryCall;
    startListeners(request: ondewo_vtsi_voip_pb.StartListenersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.StartListenersResponse) => void): grpc.ClientUnaryCall;
    startCallers(request: ondewo_vtsi_voip_pb.StartCallersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.StartCallersResponse) => void): grpc.ClientUnaryCall;
    startCallers(request: ondewo_vtsi_voip_pb.StartCallersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.StartCallersResponse) => void): grpc.ClientUnaryCall;
    startCallers(request: ondewo_vtsi_voip_pb.StartCallersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.StartCallersResponse) => void): grpc.ClientUnaryCall;
    startScheduledCallers(request: ondewo_vtsi_voip_pb.StartScheduledCallersRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    startScheduledCallers(request: ondewo_vtsi_voip_pb.StartScheduledCallersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    startScheduledCallers(request: ondewo_vtsi_voip_pb.StartScheduledCallersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    stopCalls(request: ondewo_vtsi_voip_pb.StopCallsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    stopCalls(request: ondewo_vtsi_voip_pb.StopCallsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    stopCalls(request: ondewo_vtsi_voip_pb.StopCallsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    stopAllCalls(request: ondewo_vtsi_voip_pb.StopAllCallsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    stopAllCalls(request: ondewo_vtsi_voip_pb.StopAllCallsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    stopAllCalls(request: ondewo_vtsi_voip_pb.StopAllCallsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    transferCalls(request: ondewo_vtsi_voip_pb.TransferCallsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    transferCalls(request: ondewo_vtsi_voip_pb.TransferCallsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    transferCalls(request: ondewo_vtsi_voip_pb.TransferCallsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getVoipCallInfo(request: ondewo_vtsi_voip_pb.GetVoipCallInfoRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetVoipCallInfoResponse) => void): grpc.ClientUnaryCall;
    getVoipCallInfo(request: ondewo_vtsi_voip_pb.GetVoipCallInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetVoipCallInfoResponse) => void): grpc.ClientUnaryCall;
    getVoipCallInfo(request: ondewo_vtsi_voip_pb.GetVoipCallInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetVoipCallInfoResponse) => void): grpc.ClientUnaryCall;
    listVoipCallInfo(request: ondewo_vtsi_voip_pb.ListVoipCallInfoRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.ListVoipCallInfoResponse) => void): grpc.ClientUnaryCall;
    listVoipCallInfo(request: ondewo_vtsi_voip_pb.ListVoipCallInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.ListVoipCallInfoResponse) => void): grpc.ClientUnaryCall;
    listVoipCallInfo(request: ondewo_vtsi_voip_pb.ListVoipCallInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.ListVoipCallInfoResponse) => void): grpc.ClientUnaryCall;
    getAudioFile(request: ondewo_vtsi_voip_pb.GetAudioFileRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetAudioFileResponse) => void): grpc.ClientUnaryCall;
    getAudioFile(request: ondewo_vtsi_voip_pb.GetAudioFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetAudioFileResponse) => void): grpc.ClientUnaryCall;
    getAudioFile(request: ondewo_vtsi_voip_pb.GetAudioFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetAudioFileResponse) => void): grpc.ClientUnaryCall;
    getFullConversationAudioFile(request: ondewo_vtsi_voip_pb.GetFullConversationAudioFileRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetFullConversationAudioFileResponse) => void): grpc.ClientUnaryCall;
    getFullConversationAudioFile(request: ondewo_vtsi_voip_pb.GetFullConversationAudioFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetFullConversationAudioFileResponse) => void): grpc.ClientUnaryCall;
    getFullConversationAudioFile(request: ondewo_vtsi_voip_pb.GetFullConversationAudioFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetFullConversationAudioFileResponse) => void): grpc.ClientUnaryCall;
}

export class VoipSessionsClient extends grpc.Client implements IVoipSessionsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createProjectConfigs(request: ondewo_vtsi_voip_pb.CreateProjectConfigsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createProjectConfigs(request: ondewo_vtsi_voip_pb.CreateProjectConfigsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createProjectConfigs(request: ondewo_vtsi_voip_pb.CreateProjectConfigsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getProjectConfigs(request: ondewo_vtsi_voip_pb.GetProjectConfigsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetProjectConfigsResponse) => void): grpc.ClientUnaryCall;
    public getProjectConfigs(request: ondewo_vtsi_voip_pb.GetProjectConfigsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetProjectConfigsResponse) => void): grpc.ClientUnaryCall;
    public getProjectConfigs(request: ondewo_vtsi_voip_pb.GetProjectConfigsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetProjectConfigsResponse) => void): grpc.ClientUnaryCall;
    public updateProjectConfigs(request: ondewo_vtsi_voip_pb.UpdateProjectConfigsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateProjectConfigs(request: ondewo_vtsi_voip_pb.UpdateProjectConfigsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateProjectConfigs(request: ondewo_vtsi_voip_pb.UpdateProjectConfigsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteProjectConfigs(request: ondewo_vtsi_voip_pb.DeleteProjectConfigsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteProjectConfigs(request: ondewo_vtsi_voip_pb.DeleteProjectConfigsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteProjectConfigs(request: ondewo_vtsi_voip_pb.DeleteProjectConfigsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deployProject(request: ondewo_vtsi_voip_pb.DeployProjectRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deployProject(request: ondewo_vtsi_voip_pb.DeployProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deployProject(request: ondewo_vtsi_voip_pb.DeployProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public undeployProject(request: ondewo_vtsi_voip_pb.UndeployProjectRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public undeployProject(request: ondewo_vtsi_voip_pb.UndeployProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public undeployProject(request: ondewo_vtsi_voip_pb.UndeployProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public startListeners(request: ondewo_vtsi_voip_pb.StartListenersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.StartListenersResponse) => void): grpc.ClientUnaryCall;
    public startListeners(request: ondewo_vtsi_voip_pb.StartListenersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.StartListenersResponse) => void): grpc.ClientUnaryCall;
    public startListeners(request: ondewo_vtsi_voip_pb.StartListenersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.StartListenersResponse) => void): grpc.ClientUnaryCall;
    public startCallers(request: ondewo_vtsi_voip_pb.StartCallersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.StartCallersResponse) => void): grpc.ClientUnaryCall;
    public startCallers(request: ondewo_vtsi_voip_pb.StartCallersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.StartCallersResponse) => void): grpc.ClientUnaryCall;
    public startCallers(request: ondewo_vtsi_voip_pb.StartCallersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.StartCallersResponse) => void): grpc.ClientUnaryCall;
    public startScheduledCallers(request: ondewo_vtsi_voip_pb.StartScheduledCallersRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public startScheduledCallers(request: ondewo_vtsi_voip_pb.StartScheduledCallersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public startScheduledCallers(request: ondewo_vtsi_voip_pb.StartScheduledCallersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public stopCalls(request: ondewo_vtsi_voip_pb.StopCallsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public stopCalls(request: ondewo_vtsi_voip_pb.StopCallsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public stopCalls(request: ondewo_vtsi_voip_pb.StopCallsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public stopAllCalls(request: ondewo_vtsi_voip_pb.StopAllCallsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public stopAllCalls(request: ondewo_vtsi_voip_pb.StopAllCallsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public stopAllCalls(request: ondewo_vtsi_voip_pb.StopAllCallsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public transferCalls(request: ondewo_vtsi_voip_pb.TransferCallsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public transferCalls(request: ondewo_vtsi_voip_pb.TransferCallsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public transferCalls(request: ondewo_vtsi_voip_pb.TransferCallsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getVoipCallInfo(request: ondewo_vtsi_voip_pb.GetVoipCallInfoRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetVoipCallInfoResponse) => void): grpc.ClientUnaryCall;
    public getVoipCallInfo(request: ondewo_vtsi_voip_pb.GetVoipCallInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetVoipCallInfoResponse) => void): grpc.ClientUnaryCall;
    public getVoipCallInfo(request: ondewo_vtsi_voip_pb.GetVoipCallInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetVoipCallInfoResponse) => void): grpc.ClientUnaryCall;
    public listVoipCallInfo(request: ondewo_vtsi_voip_pb.ListVoipCallInfoRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.ListVoipCallInfoResponse) => void): grpc.ClientUnaryCall;
    public listVoipCallInfo(request: ondewo_vtsi_voip_pb.ListVoipCallInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.ListVoipCallInfoResponse) => void): grpc.ClientUnaryCall;
    public listVoipCallInfo(request: ondewo_vtsi_voip_pb.ListVoipCallInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.ListVoipCallInfoResponse) => void): grpc.ClientUnaryCall;
    public getAudioFile(request: ondewo_vtsi_voip_pb.GetAudioFileRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetAudioFileResponse) => void): grpc.ClientUnaryCall;
    public getAudioFile(request: ondewo_vtsi_voip_pb.GetAudioFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetAudioFileResponse) => void): grpc.ClientUnaryCall;
    public getAudioFile(request: ondewo_vtsi_voip_pb.GetAudioFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetAudioFileResponse) => void): grpc.ClientUnaryCall;
    public getFullConversationAudioFile(request: ondewo_vtsi_voip_pb.GetFullConversationAudioFileRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetFullConversationAudioFileResponse) => void): grpc.ClientUnaryCall;
    public getFullConversationAudioFile(request: ondewo_vtsi_voip_pb.GetFullConversationAudioFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetFullConversationAudioFileResponse) => void): grpc.ClientUnaryCall;
    public getFullConversationAudioFile(request: ondewo_vtsi_voip_pb.GetFullConversationAudioFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_voip_pb.GetFullConversationAudioFileResponse) => void): grpc.ClientUnaryCall;
}
