// package: ondewo.vtsi
// file: ondewo/vtsi/logs.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_vtsi_logs_pb from "../../ondewo/vtsi/logs_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_nlu_common_pb from "../../ondewo/nlu/common_pb";
import * as ondewo_vtsi_calls_pb from "../../ondewo/vtsi/calls_pb";

interface ILogsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    streamCallLogs: ILogsService_IStreamCallLogs;
    listCallLogs: ILogsService_IListCallLogs;
    getCallLogStream: ILogsService_IGetCallLogStream;
    listCallLogStreams: ILogsService_IListCallLogStreams;
    deleteCallLogs: ILogsService_IDeleteCallLogs;
}

interface ILogsService_IStreamCallLogs extends grpc.MethodDefinition<ondewo_vtsi_logs_pb.StreamCallLogsRequest, ondewo_vtsi_logs_pb.StreamCallLogsResponse> {
    path: "/ondewo.vtsi.Logs/StreamCallLogs";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_vtsi_logs_pb.StreamCallLogsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_logs_pb.StreamCallLogsRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_logs_pb.StreamCallLogsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_logs_pb.StreamCallLogsResponse>;
}
interface ILogsService_IListCallLogs extends grpc.MethodDefinition<ondewo_vtsi_logs_pb.ListCallLogsRequest, ondewo_vtsi_logs_pb.ListCallLogsResponse> {
    path: "/ondewo.vtsi.Logs/ListCallLogs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_logs_pb.ListCallLogsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_logs_pb.ListCallLogsRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_logs_pb.ListCallLogsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_logs_pb.ListCallLogsResponse>;
}
interface ILogsService_IGetCallLogStream extends grpc.MethodDefinition<ondewo_vtsi_logs_pb.GetCallLogStreamRequest, ondewo_vtsi_logs_pb.CallLogStream> {
    path: "/ondewo.vtsi.Logs/GetCallLogStream";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_logs_pb.GetCallLogStreamRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_logs_pb.GetCallLogStreamRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_logs_pb.CallLogStream>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_logs_pb.CallLogStream>;
}
interface ILogsService_IListCallLogStreams extends grpc.MethodDefinition<ondewo_vtsi_logs_pb.ListCallLogStreamsRequest, ondewo_vtsi_logs_pb.ListCallLogStreamsResponse> {
    path: "/ondewo.vtsi.Logs/ListCallLogStreams";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_logs_pb.ListCallLogStreamsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_logs_pb.ListCallLogStreamsRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_logs_pb.ListCallLogStreamsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_logs_pb.ListCallLogStreamsResponse>;
}
interface ILogsService_IDeleteCallLogs extends grpc.MethodDefinition<ondewo_vtsi_logs_pb.DeleteCallLogsRequest, ondewo_vtsi_logs_pb.DeleteCallLogsResponse> {
    path: "/ondewo.vtsi.Logs/DeleteCallLogs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_logs_pb.DeleteCallLogsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_logs_pb.DeleteCallLogsRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_logs_pb.DeleteCallLogsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_logs_pb.DeleteCallLogsResponse>;
}

export const LogsService: ILogsService;

export interface ILogsServer {
    streamCallLogs: grpc.handleServerStreamingCall<ondewo_vtsi_logs_pb.StreamCallLogsRequest, ondewo_vtsi_logs_pb.StreamCallLogsResponse>;
    listCallLogs: grpc.handleUnaryCall<ondewo_vtsi_logs_pb.ListCallLogsRequest, ondewo_vtsi_logs_pb.ListCallLogsResponse>;
    getCallLogStream: grpc.handleUnaryCall<ondewo_vtsi_logs_pb.GetCallLogStreamRequest, ondewo_vtsi_logs_pb.CallLogStream>;
    listCallLogStreams: grpc.handleUnaryCall<ondewo_vtsi_logs_pb.ListCallLogStreamsRequest, ondewo_vtsi_logs_pb.ListCallLogStreamsResponse>;
    deleteCallLogs: grpc.handleUnaryCall<ondewo_vtsi_logs_pb.DeleteCallLogsRequest, ondewo_vtsi_logs_pb.DeleteCallLogsResponse>;
}

export interface ILogsClient {
    streamCallLogs(request: ondewo_vtsi_logs_pb.StreamCallLogsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_logs_pb.StreamCallLogsResponse>;
    streamCallLogs(request: ondewo_vtsi_logs_pb.StreamCallLogsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_logs_pb.StreamCallLogsResponse>;
    listCallLogs(request: ondewo_vtsi_logs_pb.ListCallLogsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.ListCallLogsResponse) => void): grpc.ClientUnaryCall;
    listCallLogs(request: ondewo_vtsi_logs_pb.ListCallLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.ListCallLogsResponse) => void): grpc.ClientUnaryCall;
    listCallLogs(request: ondewo_vtsi_logs_pb.ListCallLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.ListCallLogsResponse) => void): grpc.ClientUnaryCall;
    getCallLogStream(request: ondewo_vtsi_logs_pb.GetCallLogStreamRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.CallLogStream) => void): grpc.ClientUnaryCall;
    getCallLogStream(request: ondewo_vtsi_logs_pb.GetCallLogStreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.CallLogStream) => void): grpc.ClientUnaryCall;
    getCallLogStream(request: ondewo_vtsi_logs_pb.GetCallLogStreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.CallLogStream) => void): grpc.ClientUnaryCall;
    listCallLogStreams(request: ondewo_vtsi_logs_pb.ListCallLogStreamsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.ListCallLogStreamsResponse) => void): grpc.ClientUnaryCall;
    listCallLogStreams(request: ondewo_vtsi_logs_pb.ListCallLogStreamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.ListCallLogStreamsResponse) => void): grpc.ClientUnaryCall;
    listCallLogStreams(request: ondewo_vtsi_logs_pb.ListCallLogStreamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.ListCallLogStreamsResponse) => void): grpc.ClientUnaryCall;
    deleteCallLogs(request: ondewo_vtsi_logs_pb.DeleteCallLogsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.DeleteCallLogsResponse) => void): grpc.ClientUnaryCall;
    deleteCallLogs(request: ondewo_vtsi_logs_pb.DeleteCallLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.DeleteCallLogsResponse) => void): grpc.ClientUnaryCall;
    deleteCallLogs(request: ondewo_vtsi_logs_pb.DeleteCallLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.DeleteCallLogsResponse) => void): grpc.ClientUnaryCall;
}

export class LogsClient extends grpc.Client implements ILogsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public streamCallLogs(request: ondewo_vtsi_logs_pb.StreamCallLogsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_logs_pb.StreamCallLogsResponse>;
    public streamCallLogs(request: ondewo_vtsi_logs_pb.StreamCallLogsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_vtsi_logs_pb.StreamCallLogsResponse>;
    public listCallLogs(request: ondewo_vtsi_logs_pb.ListCallLogsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.ListCallLogsResponse) => void): grpc.ClientUnaryCall;
    public listCallLogs(request: ondewo_vtsi_logs_pb.ListCallLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.ListCallLogsResponse) => void): grpc.ClientUnaryCall;
    public listCallLogs(request: ondewo_vtsi_logs_pb.ListCallLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.ListCallLogsResponse) => void): grpc.ClientUnaryCall;
    public getCallLogStream(request: ondewo_vtsi_logs_pb.GetCallLogStreamRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.CallLogStream) => void): grpc.ClientUnaryCall;
    public getCallLogStream(request: ondewo_vtsi_logs_pb.GetCallLogStreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.CallLogStream) => void): grpc.ClientUnaryCall;
    public getCallLogStream(request: ondewo_vtsi_logs_pb.GetCallLogStreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.CallLogStream) => void): grpc.ClientUnaryCall;
    public listCallLogStreams(request: ondewo_vtsi_logs_pb.ListCallLogStreamsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.ListCallLogStreamsResponse) => void): grpc.ClientUnaryCall;
    public listCallLogStreams(request: ondewo_vtsi_logs_pb.ListCallLogStreamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.ListCallLogStreamsResponse) => void): grpc.ClientUnaryCall;
    public listCallLogStreams(request: ondewo_vtsi_logs_pb.ListCallLogStreamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.ListCallLogStreamsResponse) => void): grpc.ClientUnaryCall;
    public deleteCallLogs(request: ondewo_vtsi_logs_pb.DeleteCallLogsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.DeleteCallLogsResponse) => void): grpc.ClientUnaryCall;
    public deleteCallLogs(request: ondewo_vtsi_logs_pb.DeleteCallLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.DeleteCallLogsResponse) => void): grpc.ClientUnaryCall;
    public deleteCallLogs(request: ondewo_vtsi_logs_pb.DeleteCallLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_logs_pb.DeleteCallLogsResponse) => void): grpc.ClientUnaryCall;
}
