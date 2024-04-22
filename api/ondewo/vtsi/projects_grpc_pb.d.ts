// package: ondewo.vtsi
// file: ondewo/vtsi/projects.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from 'grpc';
import * as ondewo_vtsi_projects_pb from '../../ondewo/vtsi/projects_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

interface IProjectsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
	createVtsiProject: IProjectsService_ICreateVtsiProject;
	getVtsiProject: IProjectsService_IGetVtsiProject;
	updateVtsiProject: IProjectsService_IUpdateVtsiProject;
	deleteVtsiProject: IProjectsService_IDeleteVtsiProject;
	deployVtsiProject: IProjectsService_IDeployVtsiProject;
	undeployVtsiProject: IProjectsService_IUndeployVtsiProject;
	listVtsiProjects: IProjectsService_IListVtsiProjects;
}

interface IProjectsService_ICreateVtsiProject
	extends grpc.MethodDefinition<
		ondewo_vtsi_projects_pb.CreateVtsiProjectRequest,
		ondewo_vtsi_projects_pb.CreateVtsiProjectResponse
	> {
	path: '/ondewo.vtsi.Projects/CreateVtsiProject';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_vtsi_projects_pb.CreateVtsiProjectRequest>;
	requestDeserialize: grpc.deserialize<ondewo_vtsi_projects_pb.CreateVtsiProjectRequest>;
	responseSerialize: grpc.serialize<ondewo_vtsi_projects_pb.CreateVtsiProjectResponse>;
	responseDeserialize: grpc.deserialize<ondewo_vtsi_projects_pb.CreateVtsiProjectResponse>;
}
interface IProjectsService_IGetVtsiProject
	extends grpc.MethodDefinition<ondewo_vtsi_projects_pb.GetVtsiProjectRequest, ondewo_vtsi_projects_pb.VtsiProject> {
	path: '/ondewo.vtsi.Projects/GetVtsiProject';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_vtsi_projects_pb.GetVtsiProjectRequest>;
	requestDeserialize: grpc.deserialize<ondewo_vtsi_projects_pb.GetVtsiProjectRequest>;
	responseSerialize: grpc.serialize<ondewo_vtsi_projects_pb.VtsiProject>;
	responseDeserialize: grpc.deserialize<ondewo_vtsi_projects_pb.VtsiProject>;
}
interface IProjectsService_IUpdateVtsiProject
	extends grpc.MethodDefinition<
		ondewo_vtsi_projects_pb.UpdateVtsiProjectRequest,
		ondewo_vtsi_projects_pb.UpdateVtsiProjectResponse
	> {
	path: '/ondewo.vtsi.Projects/UpdateVtsiProject';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_vtsi_projects_pb.UpdateVtsiProjectRequest>;
	requestDeserialize: grpc.deserialize<ondewo_vtsi_projects_pb.UpdateVtsiProjectRequest>;
	responseSerialize: grpc.serialize<ondewo_vtsi_projects_pb.UpdateVtsiProjectResponse>;
	responseDeserialize: grpc.deserialize<ondewo_vtsi_projects_pb.UpdateVtsiProjectResponse>;
}
interface IProjectsService_IDeleteVtsiProject
	extends grpc.MethodDefinition<
		ondewo_vtsi_projects_pb.DeleteVtsiProjectRequest,
		ondewo_vtsi_projects_pb.DeleteVtsiProjectResponse
	> {
	path: '/ondewo.vtsi.Projects/DeleteVtsiProject';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_vtsi_projects_pb.DeleteVtsiProjectRequest>;
	requestDeserialize: grpc.deserialize<ondewo_vtsi_projects_pb.DeleteVtsiProjectRequest>;
	responseSerialize: grpc.serialize<ondewo_vtsi_projects_pb.DeleteVtsiProjectResponse>;
	responseDeserialize: grpc.deserialize<ondewo_vtsi_projects_pb.DeleteVtsiProjectResponse>;
}
interface IProjectsService_IDeployVtsiProject
	extends grpc.MethodDefinition<
		ondewo_vtsi_projects_pb.DeployVtsiProjectRequest,
		ondewo_vtsi_projects_pb.DeployVtsiProjectResponse
	> {
	path: '/ondewo.vtsi.Projects/DeployVtsiProject';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_vtsi_projects_pb.DeployVtsiProjectRequest>;
	requestDeserialize: grpc.deserialize<ondewo_vtsi_projects_pb.DeployVtsiProjectRequest>;
	responseSerialize: grpc.serialize<ondewo_vtsi_projects_pb.DeployVtsiProjectResponse>;
	responseDeserialize: grpc.deserialize<ondewo_vtsi_projects_pb.DeployVtsiProjectResponse>;
}
interface IProjectsService_IUndeployVtsiProject
	extends grpc.MethodDefinition<
		ondewo_vtsi_projects_pb.UndeployVtsiProjectRequest,
		ondewo_vtsi_projects_pb.UndeployVtsiProjectResponse
	> {
	path: '/ondewo.vtsi.Projects/UndeployVtsiProject';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_vtsi_projects_pb.UndeployVtsiProjectRequest>;
	requestDeserialize: grpc.deserialize<ondewo_vtsi_projects_pb.UndeployVtsiProjectRequest>;
	responseSerialize: grpc.serialize<ondewo_vtsi_projects_pb.UndeployVtsiProjectResponse>;
	responseDeserialize: grpc.deserialize<ondewo_vtsi_projects_pb.UndeployVtsiProjectResponse>;
}
interface IProjectsService_IListVtsiProjects
	extends grpc.MethodDefinition<
		ondewo_vtsi_projects_pb.ListVtsiProjectsRequest,
		ondewo_vtsi_projects_pb.ListVtsiProjectsResponse
	> {
	path: '/ondewo.vtsi.Projects/ListVtsiProjects';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_vtsi_projects_pb.ListVtsiProjectsRequest>;
	requestDeserialize: grpc.deserialize<ondewo_vtsi_projects_pb.ListVtsiProjectsRequest>;
	responseSerialize: grpc.serialize<ondewo_vtsi_projects_pb.ListVtsiProjectsResponse>;
	responseDeserialize: grpc.deserialize<ondewo_vtsi_projects_pb.ListVtsiProjectsResponse>;
}

export const ProjectsService: IProjectsService;

export interface IProjectsServer {
	createVtsiProject: grpc.handleUnaryCall<
		ondewo_vtsi_projects_pb.CreateVtsiProjectRequest,
		ondewo_vtsi_projects_pb.CreateVtsiProjectResponse
	>;
	getVtsiProject: grpc.handleUnaryCall<
		ondewo_vtsi_projects_pb.GetVtsiProjectRequest,
		ondewo_vtsi_projects_pb.VtsiProject
	>;
	updateVtsiProject: grpc.handleUnaryCall<
		ondewo_vtsi_projects_pb.UpdateVtsiProjectRequest,
		ondewo_vtsi_projects_pb.UpdateVtsiProjectResponse
	>;
	deleteVtsiProject: grpc.handleUnaryCall<
		ondewo_vtsi_projects_pb.DeleteVtsiProjectRequest,
		ondewo_vtsi_projects_pb.DeleteVtsiProjectResponse
	>;
	deployVtsiProject: grpc.handleUnaryCall<
		ondewo_vtsi_projects_pb.DeployVtsiProjectRequest,
		ondewo_vtsi_projects_pb.DeployVtsiProjectResponse
	>;
	undeployVtsiProject: grpc.handleUnaryCall<
		ondewo_vtsi_projects_pb.UndeployVtsiProjectRequest,
		ondewo_vtsi_projects_pb.UndeployVtsiProjectResponse
	>;
	listVtsiProjects: grpc.handleUnaryCall<
		ondewo_vtsi_projects_pb.ListVtsiProjectsRequest,
		ondewo_vtsi_projects_pb.ListVtsiProjectsResponse
	>;
}

export interface IProjectsClient {
	createVtsiProject(
		request: ondewo_vtsi_projects_pb.CreateVtsiProjectRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.CreateVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	createVtsiProject(
		request: ondewo_vtsi_projects_pb.CreateVtsiProjectRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.CreateVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	createVtsiProject(
		request: ondewo_vtsi_projects_pb.CreateVtsiProjectRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.CreateVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	getVtsiProject(
		request: ondewo_vtsi_projects_pb.GetVtsiProjectRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.VtsiProject) => void
	): grpc.ClientUnaryCall;
	getVtsiProject(
		request: ondewo_vtsi_projects_pb.GetVtsiProjectRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.VtsiProject) => void
	): grpc.ClientUnaryCall;
	getVtsiProject(
		request: ondewo_vtsi_projects_pb.GetVtsiProjectRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.VtsiProject) => void
	): grpc.ClientUnaryCall;
	updateVtsiProject(
		request: ondewo_vtsi_projects_pb.UpdateVtsiProjectRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.UpdateVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	updateVtsiProject(
		request: ondewo_vtsi_projects_pb.UpdateVtsiProjectRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.UpdateVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	updateVtsiProject(
		request: ondewo_vtsi_projects_pb.UpdateVtsiProjectRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.UpdateVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	deleteVtsiProject(
		request: ondewo_vtsi_projects_pb.DeleteVtsiProjectRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.DeleteVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	deleteVtsiProject(
		request: ondewo_vtsi_projects_pb.DeleteVtsiProjectRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.DeleteVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	deleteVtsiProject(
		request: ondewo_vtsi_projects_pb.DeleteVtsiProjectRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.DeleteVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	deployVtsiProject(
		request: ondewo_vtsi_projects_pb.DeployVtsiProjectRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.DeployVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	deployVtsiProject(
		request: ondewo_vtsi_projects_pb.DeployVtsiProjectRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.DeployVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	deployVtsiProject(
		request: ondewo_vtsi_projects_pb.DeployVtsiProjectRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.DeployVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	undeployVtsiProject(
		request: ondewo_vtsi_projects_pb.UndeployVtsiProjectRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.UndeployVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	undeployVtsiProject(
		request: ondewo_vtsi_projects_pb.UndeployVtsiProjectRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.UndeployVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	undeployVtsiProject(
		request: ondewo_vtsi_projects_pb.UndeployVtsiProjectRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.UndeployVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	listVtsiProjects(
		request: ondewo_vtsi_projects_pb.ListVtsiProjectsRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.ListVtsiProjectsResponse) => void
	): grpc.ClientUnaryCall;
	listVtsiProjects(
		request: ondewo_vtsi_projects_pb.ListVtsiProjectsRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.ListVtsiProjectsResponse) => void
	): grpc.ClientUnaryCall;
	listVtsiProjects(
		request: ondewo_vtsi_projects_pb.ListVtsiProjectsRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.ListVtsiProjectsResponse) => void
	): grpc.ClientUnaryCall;
}

export class ProjectsClient extends grpc.Client implements IProjectsClient {
	constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
	public createVtsiProject(
		request: ondewo_vtsi_projects_pb.CreateVtsiProjectRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.CreateVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	public createVtsiProject(
		request: ondewo_vtsi_projects_pb.CreateVtsiProjectRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.CreateVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	public createVtsiProject(
		request: ondewo_vtsi_projects_pb.CreateVtsiProjectRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.CreateVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	public getVtsiProject(
		request: ondewo_vtsi_projects_pb.GetVtsiProjectRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.VtsiProject) => void
	): grpc.ClientUnaryCall;
	public getVtsiProject(
		request: ondewo_vtsi_projects_pb.GetVtsiProjectRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.VtsiProject) => void
	): grpc.ClientUnaryCall;
	public getVtsiProject(
		request: ondewo_vtsi_projects_pb.GetVtsiProjectRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.VtsiProject) => void
	): grpc.ClientUnaryCall;
	public updateVtsiProject(
		request: ondewo_vtsi_projects_pb.UpdateVtsiProjectRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.UpdateVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	public updateVtsiProject(
		request: ondewo_vtsi_projects_pb.UpdateVtsiProjectRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.UpdateVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	public updateVtsiProject(
		request: ondewo_vtsi_projects_pb.UpdateVtsiProjectRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.UpdateVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	public deleteVtsiProject(
		request: ondewo_vtsi_projects_pb.DeleteVtsiProjectRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.DeleteVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	public deleteVtsiProject(
		request: ondewo_vtsi_projects_pb.DeleteVtsiProjectRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.DeleteVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	public deleteVtsiProject(
		request: ondewo_vtsi_projects_pb.DeleteVtsiProjectRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.DeleteVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	public deployVtsiProject(
		request: ondewo_vtsi_projects_pb.DeployVtsiProjectRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.DeployVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	public deployVtsiProject(
		request: ondewo_vtsi_projects_pb.DeployVtsiProjectRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.DeployVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	public deployVtsiProject(
		request: ondewo_vtsi_projects_pb.DeployVtsiProjectRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.DeployVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	public undeployVtsiProject(
		request: ondewo_vtsi_projects_pb.UndeployVtsiProjectRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.UndeployVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	public undeployVtsiProject(
		request: ondewo_vtsi_projects_pb.UndeployVtsiProjectRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.UndeployVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	public undeployVtsiProject(
		request: ondewo_vtsi_projects_pb.UndeployVtsiProjectRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.UndeployVtsiProjectResponse) => void
	): grpc.ClientUnaryCall;
	public listVtsiProjects(
		request: ondewo_vtsi_projects_pb.ListVtsiProjectsRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.ListVtsiProjectsResponse) => void
	): grpc.ClientUnaryCall;
	public listVtsiProjects(
		request: ondewo_vtsi_projects_pb.ListVtsiProjectsRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.ListVtsiProjectsResponse) => void
	): grpc.ClientUnaryCall;
	public listVtsiProjects(
		request: ondewo_vtsi_projects_pb.ListVtsiProjectsRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_projects_pb.ListVtsiProjectsResponse) => void
	): grpc.ClientUnaryCall;
}
