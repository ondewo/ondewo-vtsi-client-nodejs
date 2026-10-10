// package: ondewo.vtsi
// file: ondewo/vtsi/campaigns.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_vtsi_campaigns_pb from "../../ondewo/vtsi/campaigns_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_sip_sip_pb from "../../ondewo/sip/sip_pb";

interface ICampaignsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createCampaign: ICampaignsService_ICreateCampaign;
    getCampaign: ICampaignsService_IGetCampaign;
    updateCampaign: ICampaignsService_IUpdateCampaign;
    deleteCampaign: ICampaignsService_IDeleteCampaign;
    listCampaigns: ICampaignsService_IListCampaigns;
    getCampaignStatistics: ICampaignsService_IGetCampaignStatistics;
    listCampaignCalls: ICampaignsService_IListCampaignCalls;
    startCampaign: ICampaignsService_IStartCampaign;
    stopCampaign: ICampaignsService_IStopCampaign;
    hardStopCampaign: ICampaignsService_IHardStopCampaign;
    resumeCampaign: ICampaignsService_IResumeCampaign;
    streamCampaignStatus: ICampaignsService_IStreamCampaignStatus;
}

interface ICampaignsService_ICreateCampaign extends grpc.MethodDefinition<ondewo_vtsi_campaigns_pb.CreateCampaignRequest, ondewo_vtsi_campaigns_pb.Campaign> {
    path: "/ondewo.vtsi.Campaigns/CreateCampaign";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.CreateCampaignRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.CreateCampaignRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.Campaign>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.Campaign>;
}
interface ICampaignsService_IGetCampaign extends grpc.MethodDefinition<ondewo_vtsi_campaigns_pb.GetCampaignRequest, ondewo_vtsi_campaigns_pb.Campaign> {
    path: "/ondewo.vtsi.Campaigns/GetCampaign";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.GetCampaignRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.GetCampaignRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.Campaign>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.Campaign>;
}
interface ICampaignsService_IUpdateCampaign extends grpc.MethodDefinition<ondewo_vtsi_campaigns_pb.UpdateCampaignRequest, ondewo_vtsi_campaigns_pb.Campaign> {
    path: "/ondewo.vtsi.Campaigns/UpdateCampaign";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.UpdateCampaignRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.UpdateCampaignRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.Campaign>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.Campaign>;
}
interface ICampaignsService_IDeleteCampaign extends grpc.MethodDefinition<ondewo_vtsi_campaigns_pb.DeleteCampaignRequest, ondewo_vtsi_campaigns_pb.DeleteCampaignResponse> {
    path: "/ondewo.vtsi.Campaigns/DeleteCampaign";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.DeleteCampaignRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.DeleteCampaignRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.DeleteCampaignResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.DeleteCampaignResponse>;
}
interface ICampaignsService_IListCampaigns extends grpc.MethodDefinition<ondewo_vtsi_campaigns_pb.ListCampaignsRequest, ondewo_vtsi_campaigns_pb.ListCampaignsResponse> {
    path: "/ondewo.vtsi.Campaigns/ListCampaigns";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.ListCampaignsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.ListCampaignsRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.ListCampaignsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.ListCampaignsResponse>;
}
interface ICampaignsService_IGetCampaignStatistics extends grpc.MethodDefinition<ondewo_vtsi_campaigns_pb.GetCampaignStatisticsRequest, ondewo_vtsi_campaigns_pb.CampaignStatistics> {
    path: "/ondewo.vtsi.Campaigns/GetCampaignStatistics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.GetCampaignStatisticsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.GetCampaignStatisticsRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.CampaignStatistics>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.CampaignStatistics>;
}
interface ICampaignsService_IListCampaignCalls extends grpc.MethodDefinition<ondewo_vtsi_campaigns_pb.ListCampaignCallsRequest, ondewo_vtsi_campaigns_pb.ListCampaignCallsResponse> {
    path: "/ondewo.vtsi.Campaigns/ListCampaignCalls";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.ListCampaignCallsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.ListCampaignCallsRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.ListCampaignCallsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.ListCampaignCallsResponse>;
}
interface ICampaignsService_IStartCampaign extends grpc.MethodDefinition<ondewo_vtsi_campaigns_pb.StartCampaignRequest, ondewo_vtsi_campaigns_pb.Campaign> {
    path: "/ondewo.vtsi.Campaigns/StartCampaign";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.StartCampaignRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.StartCampaignRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.Campaign>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.Campaign>;
}
interface ICampaignsService_IStopCampaign extends grpc.MethodDefinition<ondewo_vtsi_campaigns_pb.StopCampaignRequest, ondewo_vtsi_campaigns_pb.Campaign> {
    path: "/ondewo.vtsi.Campaigns/StopCampaign";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.StopCampaignRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.StopCampaignRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.Campaign>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.Campaign>;
}
interface ICampaignsService_IHardStopCampaign extends grpc.MethodDefinition<ondewo_vtsi_campaigns_pb.HardStopCampaignRequest, ondewo_vtsi_campaigns_pb.Campaign> {
    path: "/ondewo.vtsi.Campaigns/HardStopCampaign";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.HardStopCampaignRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.HardStopCampaignRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.Campaign>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.Campaign>;
}
interface ICampaignsService_IResumeCampaign extends grpc.MethodDefinition<ondewo_vtsi_campaigns_pb.ResumeCampaignRequest, ondewo_vtsi_campaigns_pb.Campaign> {
    path: "/ondewo.vtsi.Campaigns/ResumeCampaign";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.ResumeCampaignRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.ResumeCampaignRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.Campaign>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.Campaign>;
}
interface ICampaignsService_IStreamCampaignStatus extends grpc.MethodDefinition<ondewo_vtsi_campaigns_pb.StreamCampaignStatusRequest, ondewo_vtsi_campaigns_pb.StreamCampaignStatusResponse> {
    path: "/ondewo.vtsi.Campaigns/StreamCampaignStatus";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.StreamCampaignStatusRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.StreamCampaignStatusRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_campaigns_pb.StreamCampaignStatusResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_campaigns_pb.StreamCampaignStatusResponse>;
}

export const CampaignsService: ICampaignsService;

export interface ICampaignsServer {
    createCampaign: grpc.handleUnaryCall<ondewo_vtsi_campaigns_pb.CreateCampaignRequest, ondewo_vtsi_campaigns_pb.Campaign>;
    getCampaign: grpc.handleUnaryCall<ondewo_vtsi_campaigns_pb.GetCampaignRequest, ondewo_vtsi_campaigns_pb.Campaign>;
    updateCampaign: grpc.handleUnaryCall<ondewo_vtsi_campaigns_pb.UpdateCampaignRequest, ondewo_vtsi_campaigns_pb.Campaign>;
    deleteCampaign: grpc.handleUnaryCall<ondewo_vtsi_campaigns_pb.DeleteCampaignRequest, ondewo_vtsi_campaigns_pb.DeleteCampaignResponse>;
    listCampaigns: grpc.handleUnaryCall<ondewo_vtsi_campaigns_pb.ListCampaignsRequest, ondewo_vtsi_campaigns_pb.ListCampaignsResponse>;
    getCampaignStatistics: grpc.handleUnaryCall<ondewo_vtsi_campaigns_pb.GetCampaignStatisticsRequest, ondewo_vtsi_campaigns_pb.CampaignStatistics>;
    listCampaignCalls: grpc.handleUnaryCall<ondewo_vtsi_campaigns_pb.ListCampaignCallsRequest, ondewo_vtsi_campaigns_pb.ListCampaignCallsResponse>;
    startCampaign: grpc.handleUnaryCall<ondewo_vtsi_campaigns_pb.StartCampaignRequest, ondewo_vtsi_campaigns_pb.Campaign>;
    stopCampaign: grpc.handleUnaryCall<ondewo_vtsi_campaigns_pb.StopCampaignRequest, ondewo_vtsi_campaigns_pb.Campaign>;
    hardStopCampaign: grpc.handleUnaryCall<ondewo_vtsi_campaigns_pb.HardStopCampaignRequest, ondewo_vtsi_campaigns_pb.Campaign>;
    resumeCampaign: grpc.handleUnaryCall<ondewo_vtsi_campaigns_pb.ResumeCampaignRequest, ondewo_vtsi_campaigns_pb.Campaign>;
    streamCampaignStatus: grpc.handleServerStreamingCall<ondewo_vtsi_campaigns_pb.StreamCampaignStatusRequest, ondewo_vtsi_campaigns_pb.StreamCampaignStatusResponse>;
}

export interface ICampaignsClient {
    createCampaign(request: ondewo_vtsi_campaigns_pb.CreateCampaignRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    createCampaign(request: ondewo_vtsi_campaigns_pb.CreateCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    createCampaign(request: ondewo_vtsi_campaigns_pb.CreateCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    getCampaign(request: ondewo_vtsi_campaigns_pb.GetCampaignRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    getCampaign(request: ondewo_vtsi_campaigns_pb.GetCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    getCampaign(request: ondewo_vtsi_campaigns_pb.GetCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    updateCampaign(request: ondewo_vtsi_campaigns_pb.UpdateCampaignRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    updateCampaign(request: ondewo_vtsi_campaigns_pb.UpdateCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    updateCampaign(request: ondewo_vtsi_campaigns_pb.UpdateCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    deleteCampaign(request: ondewo_vtsi_campaigns_pb.DeleteCampaignRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.DeleteCampaignResponse) => void): grpc.ClientUnaryCall;
    deleteCampaign(request: ondewo_vtsi_campaigns_pb.DeleteCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.DeleteCampaignResponse) => void): grpc.ClientUnaryCall;
    deleteCampaign(request: ondewo_vtsi_campaigns_pb.DeleteCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.DeleteCampaignResponse) => void): grpc.ClientUnaryCall;
    listCampaigns(request: ondewo_vtsi_campaigns_pb.ListCampaignsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.ListCampaignsResponse) => void): grpc.ClientUnaryCall;
    listCampaigns(request: ondewo_vtsi_campaigns_pb.ListCampaignsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.ListCampaignsResponse) => void): grpc.ClientUnaryCall;
    listCampaigns(request: ondewo_vtsi_campaigns_pb.ListCampaignsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.ListCampaignsResponse) => void): grpc.ClientUnaryCall;
    getCampaignStatistics(request: ondewo_vtsi_campaigns_pb.GetCampaignStatisticsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.CampaignStatistics) => void): grpc.ClientUnaryCall;
    getCampaignStatistics(request: ondewo_vtsi_campaigns_pb.GetCampaignStatisticsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.CampaignStatistics) => void): grpc.ClientUnaryCall;
    getCampaignStatistics(request: ondewo_vtsi_campaigns_pb.GetCampaignStatisticsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.CampaignStatistics) => void): grpc.ClientUnaryCall;
    listCampaignCalls(request: ondewo_vtsi_campaigns_pb.ListCampaignCallsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.ListCampaignCallsResponse) => void): grpc.ClientUnaryCall;
    listCampaignCalls(request: ondewo_vtsi_campaigns_pb.ListCampaignCallsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.ListCampaignCallsResponse) => void): grpc.ClientUnaryCall;
    listCampaignCalls(request: ondewo_vtsi_campaigns_pb.ListCampaignCallsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.ListCampaignCallsResponse) => void): grpc.ClientUnaryCall;
    startCampaign(request: ondewo_vtsi_campaigns_pb.StartCampaignRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    startCampaign(request: ondewo_vtsi_campaigns_pb.StartCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    startCampaign(request: ondewo_vtsi_campaigns_pb.StartCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    stopCampaign(request: ondewo_vtsi_campaigns_pb.StopCampaignRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    stopCampaign(request: ondewo_vtsi_campaigns_pb.StopCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    stopCampaign(request: ondewo_vtsi_campaigns_pb.StopCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    hardStopCampaign(request: ondewo_vtsi_campaigns_pb.HardStopCampaignRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    hardStopCampaign(request: ondewo_vtsi_campaigns_pb.HardStopCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    hardStopCampaign(request: ondewo_vtsi_campaigns_pb.HardStopCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    resumeCampaign(request: ondewo_vtsi_campaigns_pb.ResumeCampaignRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    resumeCampaign(request: ondewo_vtsi_campaigns_pb.ResumeCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    resumeCampaign(request: ondewo_vtsi_campaigns_pb.ResumeCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    streamCampaignStatus(request: ondewo_vtsi_campaigns_pb.StreamCampaignStatusRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_campaigns_pb.StreamCampaignStatusResponse>;
    streamCampaignStatus(request: ondewo_vtsi_campaigns_pb.StreamCampaignStatusRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_campaigns_pb.StreamCampaignStatusResponse>;
}

export class CampaignsClient extends grpc.Client implements ICampaignsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createCampaign(request: ondewo_vtsi_campaigns_pb.CreateCampaignRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    public createCampaign(request: ondewo_vtsi_campaigns_pb.CreateCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    public createCampaign(request: ondewo_vtsi_campaigns_pb.CreateCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    public getCampaign(request: ondewo_vtsi_campaigns_pb.GetCampaignRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    public getCampaign(request: ondewo_vtsi_campaigns_pb.GetCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    public getCampaign(request: ondewo_vtsi_campaigns_pb.GetCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    public updateCampaign(request: ondewo_vtsi_campaigns_pb.UpdateCampaignRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    public updateCampaign(request: ondewo_vtsi_campaigns_pb.UpdateCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    public updateCampaign(request: ondewo_vtsi_campaigns_pb.UpdateCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    public deleteCampaign(request: ondewo_vtsi_campaigns_pb.DeleteCampaignRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.DeleteCampaignResponse) => void): grpc.ClientUnaryCall;
    public deleteCampaign(request: ondewo_vtsi_campaigns_pb.DeleteCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.DeleteCampaignResponse) => void): grpc.ClientUnaryCall;
    public deleteCampaign(request: ondewo_vtsi_campaigns_pb.DeleteCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.DeleteCampaignResponse) => void): grpc.ClientUnaryCall;
    public listCampaigns(request: ondewo_vtsi_campaigns_pb.ListCampaignsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.ListCampaignsResponse) => void): grpc.ClientUnaryCall;
    public listCampaigns(request: ondewo_vtsi_campaigns_pb.ListCampaignsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.ListCampaignsResponse) => void): grpc.ClientUnaryCall;
    public listCampaigns(request: ondewo_vtsi_campaigns_pb.ListCampaignsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.ListCampaignsResponse) => void): grpc.ClientUnaryCall;
    public getCampaignStatistics(request: ondewo_vtsi_campaigns_pb.GetCampaignStatisticsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.CampaignStatistics) => void): grpc.ClientUnaryCall;
    public getCampaignStatistics(request: ondewo_vtsi_campaigns_pb.GetCampaignStatisticsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.CampaignStatistics) => void): grpc.ClientUnaryCall;
    public getCampaignStatistics(request: ondewo_vtsi_campaigns_pb.GetCampaignStatisticsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.CampaignStatistics) => void): grpc.ClientUnaryCall;
    public listCampaignCalls(request: ondewo_vtsi_campaigns_pb.ListCampaignCallsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.ListCampaignCallsResponse) => void): grpc.ClientUnaryCall;
    public listCampaignCalls(request: ondewo_vtsi_campaigns_pb.ListCampaignCallsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.ListCampaignCallsResponse) => void): grpc.ClientUnaryCall;
    public listCampaignCalls(request: ondewo_vtsi_campaigns_pb.ListCampaignCallsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.ListCampaignCallsResponse) => void): grpc.ClientUnaryCall;
    public startCampaign(request: ondewo_vtsi_campaigns_pb.StartCampaignRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    public startCampaign(request: ondewo_vtsi_campaigns_pb.StartCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    public startCampaign(request: ondewo_vtsi_campaigns_pb.StartCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    public stopCampaign(request: ondewo_vtsi_campaigns_pb.StopCampaignRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    public stopCampaign(request: ondewo_vtsi_campaigns_pb.StopCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    public stopCampaign(request: ondewo_vtsi_campaigns_pb.StopCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    public hardStopCampaign(request: ondewo_vtsi_campaigns_pb.HardStopCampaignRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    public hardStopCampaign(request: ondewo_vtsi_campaigns_pb.HardStopCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    public hardStopCampaign(request: ondewo_vtsi_campaigns_pb.HardStopCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    public resumeCampaign(request: ondewo_vtsi_campaigns_pb.ResumeCampaignRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    public resumeCampaign(request: ondewo_vtsi_campaigns_pb.ResumeCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    public resumeCampaign(request: ondewo_vtsi_campaigns_pb.ResumeCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_campaigns_pb.Campaign) => void): grpc.ClientUnaryCall;
    public streamCampaignStatus(request: ondewo_vtsi_campaigns_pb.StreamCampaignStatusRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_campaigns_pb.StreamCampaignStatusResponse>;
    public streamCampaignStatus(request: ondewo_vtsi_campaigns_pb.StreamCampaignStatusRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_campaigns_pb.StreamCampaignStatusResponse>;
}
