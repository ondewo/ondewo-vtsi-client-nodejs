// package: ondewo.qa
// file: ondewo/qa/qa.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from 'grpc';
import * as ondewo_qa_qa_pb from '../../ondewo/qa/qa_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as ondewo_nlu_session_pb from '../../ondewo/nlu/session_pb';

interface IQAService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
	getAnswer: IQAService_IGetAnswer;
	runScraper: IQAService_IRunScraper;
	updateDatabase: IQAService_IUpdateDatabase;
	runTraining: IQAService_IRunTraining;
	getServerState: IQAService_IGetServerState;
	listProjectIds: IQAService_IListProjectIds;
	getProjectConfig: IQAService_IGetProjectConfig;
}

interface IQAService_IGetAnswer
	extends grpc.MethodDefinition<ondewo_qa_qa_pb.GetAnswerRequest, ondewo_qa_qa_pb.GetAnswerResponse> {
	path: '/ondewo.qa.QA/GetAnswer';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_qa_qa_pb.GetAnswerRequest>;
	requestDeserialize: grpc.deserialize<ondewo_qa_qa_pb.GetAnswerRequest>;
	responseSerialize: grpc.serialize<ondewo_qa_qa_pb.GetAnswerResponse>;
	responseDeserialize: grpc.deserialize<ondewo_qa_qa_pb.GetAnswerResponse>;
}
interface IQAService_IRunScraper
	extends grpc.MethodDefinition<ondewo_qa_qa_pb.RunScraperRequest, ondewo_qa_qa_pb.RunScraperResponse> {
	path: '/ondewo.qa.QA/RunScraper';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_qa_qa_pb.RunScraperRequest>;
	requestDeserialize: grpc.deserialize<ondewo_qa_qa_pb.RunScraperRequest>;
	responseSerialize: grpc.serialize<ondewo_qa_qa_pb.RunScraperResponse>;
	responseDeserialize: grpc.deserialize<ondewo_qa_qa_pb.RunScraperResponse>;
}
interface IQAService_IUpdateDatabase
	extends grpc.MethodDefinition<ondewo_qa_qa_pb.UpdateDatabaseRequest, ondewo_qa_qa_pb.UpdateDatabaseResponse> {
	path: '/ondewo.qa.QA/UpdateDatabase';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_qa_qa_pb.UpdateDatabaseRequest>;
	requestDeserialize: grpc.deserialize<ondewo_qa_qa_pb.UpdateDatabaseRequest>;
	responseSerialize: grpc.serialize<ondewo_qa_qa_pb.UpdateDatabaseResponse>;
	responseDeserialize: grpc.deserialize<ondewo_qa_qa_pb.UpdateDatabaseResponse>;
}
interface IQAService_IRunTraining
	extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, ondewo_qa_qa_pb.RunTrainingResponse> {
	path: '/ondewo.qa.QA/RunTraining';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
	requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
	responseSerialize: grpc.serialize<ondewo_qa_qa_pb.RunTrainingResponse>;
	responseDeserialize: grpc.deserialize<ondewo_qa_qa_pb.RunTrainingResponse>;
}
interface IQAService_IGetServerState
	extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, ondewo_qa_qa_pb.GetServerStateResponse> {
	path: '/ondewo.qa.QA/GetServerState';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
	requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
	responseSerialize: grpc.serialize<ondewo_qa_qa_pb.GetServerStateResponse>;
	responseDeserialize: grpc.deserialize<ondewo_qa_qa_pb.GetServerStateResponse>;
}
interface IQAService_IListProjectIds
	extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, ondewo_qa_qa_pb.ListProjectIdsResponse> {
	path: '/ondewo.qa.QA/ListProjectIds';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
	requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
	responseSerialize: grpc.serialize<ondewo_qa_qa_pb.ListProjectIdsResponse>;
	responseDeserialize: grpc.deserialize<ondewo_qa_qa_pb.ListProjectIdsResponse>;
}
interface IQAService_IGetProjectConfig
	extends grpc.MethodDefinition<ondewo_qa_qa_pb.GetProjectConfigRequest, ondewo_qa_qa_pb.GetProjectConfigResponse> {
	path: '/ondewo.qa.QA/GetProjectConfig';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_qa_qa_pb.GetProjectConfigRequest>;
	requestDeserialize: grpc.deserialize<ondewo_qa_qa_pb.GetProjectConfigRequest>;
	responseSerialize: grpc.serialize<ondewo_qa_qa_pb.GetProjectConfigResponse>;
	responseDeserialize: grpc.deserialize<ondewo_qa_qa_pb.GetProjectConfigResponse>;
}

export const QAService: IQAService;

export interface IQAServer {
	getAnswer: grpc.handleUnaryCall<ondewo_qa_qa_pb.GetAnswerRequest, ondewo_qa_qa_pb.GetAnswerResponse>;
	runScraper: grpc.handleUnaryCall<ondewo_qa_qa_pb.RunScraperRequest, ondewo_qa_qa_pb.RunScraperResponse>;
	updateDatabase: grpc.handleUnaryCall<ondewo_qa_qa_pb.UpdateDatabaseRequest, ondewo_qa_qa_pb.UpdateDatabaseResponse>;
	runTraining: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, ondewo_qa_qa_pb.RunTrainingResponse>;
	getServerState: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, ondewo_qa_qa_pb.GetServerStateResponse>;
	listProjectIds: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, ondewo_qa_qa_pb.ListProjectIdsResponse>;
	getProjectConfig: grpc.handleUnaryCall<
		ondewo_qa_qa_pb.GetProjectConfigRequest,
		ondewo_qa_qa_pb.GetProjectConfigResponse
	>;
}

export interface IQAClient {
	getAnswer(
		request: ondewo_qa_qa_pb.GetAnswerRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetAnswerResponse) => void
	): grpc.ClientUnaryCall;
	getAnswer(
		request: ondewo_qa_qa_pb.GetAnswerRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetAnswerResponse) => void
	): grpc.ClientUnaryCall;
	getAnswer(
		request: ondewo_qa_qa_pb.GetAnswerRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetAnswerResponse) => void
	): grpc.ClientUnaryCall;
	runScraper(
		request: ondewo_qa_qa_pb.RunScraperRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunScraperResponse) => void
	): grpc.ClientUnaryCall;
	runScraper(
		request: ondewo_qa_qa_pb.RunScraperRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunScraperResponse) => void
	): grpc.ClientUnaryCall;
	runScraper(
		request: ondewo_qa_qa_pb.RunScraperRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunScraperResponse) => void
	): grpc.ClientUnaryCall;
	updateDatabase(
		request: ondewo_qa_qa_pb.UpdateDatabaseRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.UpdateDatabaseResponse) => void
	): grpc.ClientUnaryCall;
	updateDatabase(
		request: ondewo_qa_qa_pb.UpdateDatabaseRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.UpdateDatabaseResponse) => void
	): grpc.ClientUnaryCall;
	updateDatabase(
		request: ondewo_qa_qa_pb.UpdateDatabaseRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.UpdateDatabaseResponse) => void
	): grpc.ClientUnaryCall;
	runTraining(
		request: google_protobuf_empty_pb.Empty,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunTrainingResponse) => void
	): grpc.ClientUnaryCall;
	runTraining(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunTrainingResponse) => void
	): grpc.ClientUnaryCall;
	runTraining(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunTrainingResponse) => void
	): grpc.ClientUnaryCall;
	getServerState(
		request: google_protobuf_empty_pb.Empty,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetServerStateResponse) => void
	): grpc.ClientUnaryCall;
	getServerState(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetServerStateResponse) => void
	): grpc.ClientUnaryCall;
	getServerState(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetServerStateResponse) => void
	): grpc.ClientUnaryCall;
	listProjectIds(
		request: google_protobuf_empty_pb.Empty,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.ListProjectIdsResponse) => void
	): grpc.ClientUnaryCall;
	listProjectIds(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.ListProjectIdsResponse) => void
	): grpc.ClientUnaryCall;
	listProjectIds(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.ListProjectIdsResponse) => void
	): grpc.ClientUnaryCall;
	getProjectConfig(
		request: ondewo_qa_qa_pb.GetProjectConfigRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetProjectConfigResponse) => void
	): grpc.ClientUnaryCall;
	getProjectConfig(
		request: ondewo_qa_qa_pb.GetProjectConfigRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetProjectConfigResponse) => void
	): grpc.ClientUnaryCall;
	getProjectConfig(
		request: ondewo_qa_qa_pb.GetProjectConfigRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetProjectConfigResponse) => void
	): grpc.ClientUnaryCall;
}

export class QAClient extends grpc.Client implements IQAClient {
	constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
	public getAnswer(
		request: ondewo_qa_qa_pb.GetAnswerRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetAnswerResponse) => void
	): grpc.ClientUnaryCall;
	public getAnswer(
		request: ondewo_qa_qa_pb.GetAnswerRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetAnswerResponse) => void
	): grpc.ClientUnaryCall;
	public getAnswer(
		request: ondewo_qa_qa_pb.GetAnswerRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetAnswerResponse) => void
	): grpc.ClientUnaryCall;
	public runScraper(
		request: ondewo_qa_qa_pb.RunScraperRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunScraperResponse) => void
	): grpc.ClientUnaryCall;
	public runScraper(
		request: ondewo_qa_qa_pb.RunScraperRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunScraperResponse) => void
	): grpc.ClientUnaryCall;
	public runScraper(
		request: ondewo_qa_qa_pb.RunScraperRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunScraperResponse) => void
	): grpc.ClientUnaryCall;
	public updateDatabase(
		request: ondewo_qa_qa_pb.UpdateDatabaseRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.UpdateDatabaseResponse) => void
	): grpc.ClientUnaryCall;
	public updateDatabase(
		request: ondewo_qa_qa_pb.UpdateDatabaseRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.UpdateDatabaseResponse) => void
	): grpc.ClientUnaryCall;
	public updateDatabase(
		request: ondewo_qa_qa_pb.UpdateDatabaseRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.UpdateDatabaseResponse) => void
	): grpc.ClientUnaryCall;
	public runTraining(
		request: google_protobuf_empty_pb.Empty,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunTrainingResponse) => void
	): grpc.ClientUnaryCall;
	public runTraining(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunTrainingResponse) => void
	): grpc.ClientUnaryCall;
	public runTraining(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.RunTrainingResponse) => void
	): grpc.ClientUnaryCall;
	public getServerState(
		request: google_protobuf_empty_pb.Empty,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetServerStateResponse) => void
	): grpc.ClientUnaryCall;
	public getServerState(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetServerStateResponse) => void
	): grpc.ClientUnaryCall;
	public getServerState(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetServerStateResponse) => void
	): grpc.ClientUnaryCall;
	public listProjectIds(
		request: google_protobuf_empty_pb.Empty,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.ListProjectIdsResponse) => void
	): grpc.ClientUnaryCall;
	public listProjectIds(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.ListProjectIdsResponse) => void
	): grpc.ClientUnaryCall;
	public listProjectIds(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.ListProjectIdsResponse) => void
	): grpc.ClientUnaryCall;
	public getProjectConfig(
		request: ondewo_qa_qa_pb.GetProjectConfigRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetProjectConfigResponse) => void
	): grpc.ClientUnaryCall;
	public getProjectConfig(
		request: ondewo_qa_qa_pb.GetProjectConfigRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetProjectConfigResponse) => void
	): grpc.ClientUnaryCall;
	public getProjectConfig(
		request: ondewo_qa_qa_pb.GetProjectConfigRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_qa_qa_pb.GetProjectConfigResponse) => void
	): grpc.ClientUnaryCall;
}
