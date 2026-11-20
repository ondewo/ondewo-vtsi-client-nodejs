// package: ondewo.vtsi
// file: ondewo/vtsi/ivr_menus.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_vtsi_ivr_menus_pb from "../../ondewo/vtsi/ivr_menus_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_vtsi_calls_pb from "../../ondewo/vtsi/calls_pb";
import * as ondewo_vtsi_campaigns_pb from "../../ondewo/vtsi/campaigns_pb";

interface IIvrMenusService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createIvrMenu: IIvrMenusService_ICreateIvrMenu;
    getIvrMenu: IIvrMenusService_IGetIvrMenu;
    updateIvrMenu: IIvrMenusService_IUpdateIvrMenu;
    deleteIvrMenu: IIvrMenusService_IDeleteIvrMenu;
    listIvrMenus: IIvrMenusService_IListIvrMenus;
    validateIvrMenu: IIvrMenusService_IValidateIvrMenu;
    publishIvrMenu: IIvrMenusService_IPublishIvrMenu;
    cloneIvrMenu: IIvrMenusService_ICloneIvrMenu;
    listIvrMenuRevisions: IIvrMenusService_IListIvrMenuRevisions;
    testIvrMenu: IIvrMenusService_ITestIvrMenu;
    getIvrMenuTest: IIvrMenusService_IGetIvrMenuTest;
    getIvrMenuDialplan: IIvrMenusService_IGetIvrMenuDialplan;
}

interface IIvrMenusService_ICreateIvrMenu extends grpc.MethodDefinition<ondewo_vtsi_ivr_menus_pb.CreateIvrMenuRequest, ondewo_vtsi_ivr_menus_pb.IvrMenu> {
    path: "/ondewo.vtsi.IvrMenus/CreateIvrMenu";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.CreateIvrMenuRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.CreateIvrMenuRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.IvrMenu>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.IvrMenu>;
}
interface IIvrMenusService_IGetIvrMenu extends grpc.MethodDefinition<ondewo_vtsi_ivr_menus_pb.GetIvrMenuRequest, ondewo_vtsi_ivr_menus_pb.IvrMenu> {
    path: "/ondewo.vtsi.IvrMenus/GetIvrMenu";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.GetIvrMenuRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.GetIvrMenuRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.IvrMenu>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.IvrMenu>;
}
interface IIvrMenusService_IUpdateIvrMenu extends grpc.MethodDefinition<ondewo_vtsi_ivr_menus_pb.UpdateIvrMenuRequest, ondewo_vtsi_ivr_menus_pb.IvrMenu> {
    path: "/ondewo.vtsi.IvrMenus/UpdateIvrMenu";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.UpdateIvrMenuRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.UpdateIvrMenuRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.IvrMenu>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.IvrMenu>;
}
interface IIvrMenusService_IDeleteIvrMenu extends grpc.MethodDefinition<ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuRequest, ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuResponse> {
    path: "/ondewo.vtsi.IvrMenus/DeleteIvrMenu";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuResponse>;
}
interface IIvrMenusService_IListIvrMenus extends grpc.MethodDefinition<ondewo_vtsi_ivr_menus_pb.ListIvrMenusRequest, ondewo_vtsi_ivr_menus_pb.ListIvrMenusResponse> {
    path: "/ondewo.vtsi.IvrMenus/ListIvrMenus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.ListIvrMenusRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.ListIvrMenusRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.ListIvrMenusResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.ListIvrMenusResponse>;
}
interface IIvrMenusService_IValidateIvrMenu extends grpc.MethodDefinition<ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuRequest, ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuResponse> {
    path: "/ondewo.vtsi.IvrMenus/ValidateIvrMenu";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuResponse>;
}
interface IIvrMenusService_IPublishIvrMenu extends grpc.MethodDefinition<ondewo_vtsi_ivr_menus_pb.PublishIvrMenuRequest, ondewo_vtsi_ivr_menus_pb.IvrMenu> {
    path: "/ondewo.vtsi.IvrMenus/PublishIvrMenu";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.PublishIvrMenuRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.PublishIvrMenuRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.IvrMenu>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.IvrMenu>;
}
interface IIvrMenusService_ICloneIvrMenu extends grpc.MethodDefinition<ondewo_vtsi_ivr_menus_pb.CloneIvrMenuRequest, ondewo_vtsi_ivr_menus_pb.IvrMenu> {
    path: "/ondewo.vtsi.IvrMenus/CloneIvrMenu";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.CloneIvrMenuRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.CloneIvrMenuRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.IvrMenu>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.IvrMenu>;
}
interface IIvrMenusService_IListIvrMenuRevisions extends grpc.MethodDefinition<ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsRequest, ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsResponse> {
    path: "/ondewo.vtsi.IvrMenus/ListIvrMenuRevisions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsResponse>;
}
interface IIvrMenusService_ITestIvrMenu extends grpc.MethodDefinition<ondewo_vtsi_ivr_menus_pb.TestIvrMenuRequest, ondewo_vtsi_ivr_menus_pb.IvrMenuTest> {
    path: "/ondewo.vtsi.IvrMenus/TestIvrMenu";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.TestIvrMenuRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.TestIvrMenuRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.IvrMenuTest>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.IvrMenuTest>;
}
interface IIvrMenusService_IGetIvrMenuTest extends grpc.MethodDefinition<ondewo_vtsi_ivr_menus_pb.GetIvrMenuTestRequest, ondewo_vtsi_ivr_menus_pb.IvrMenuTest> {
    path: "/ondewo.vtsi.IvrMenus/GetIvrMenuTest";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.GetIvrMenuTestRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.GetIvrMenuTestRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.IvrMenuTest>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.IvrMenuTest>;
}
interface IIvrMenusService_IGetIvrMenuDialplan extends grpc.MethodDefinition<ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanRequest, ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanResponse> {
    path: "/ondewo.vtsi.IvrMenus/GetIvrMenuDialplan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanResponse>;
}

export const IvrMenusService: IIvrMenusService;

export interface IIvrMenusServer {
    createIvrMenu: grpc.handleUnaryCall<ondewo_vtsi_ivr_menus_pb.CreateIvrMenuRequest, ondewo_vtsi_ivr_menus_pb.IvrMenu>;
    getIvrMenu: grpc.handleUnaryCall<ondewo_vtsi_ivr_menus_pb.GetIvrMenuRequest, ondewo_vtsi_ivr_menus_pb.IvrMenu>;
    updateIvrMenu: grpc.handleUnaryCall<ondewo_vtsi_ivr_menus_pb.UpdateIvrMenuRequest, ondewo_vtsi_ivr_menus_pb.IvrMenu>;
    deleteIvrMenu: grpc.handleUnaryCall<ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuRequest, ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuResponse>;
    listIvrMenus: grpc.handleUnaryCall<ondewo_vtsi_ivr_menus_pb.ListIvrMenusRequest, ondewo_vtsi_ivr_menus_pb.ListIvrMenusResponse>;
    validateIvrMenu: grpc.handleUnaryCall<ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuRequest, ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuResponse>;
    publishIvrMenu: grpc.handleUnaryCall<ondewo_vtsi_ivr_menus_pb.PublishIvrMenuRequest, ondewo_vtsi_ivr_menus_pb.IvrMenu>;
    cloneIvrMenu: grpc.handleUnaryCall<ondewo_vtsi_ivr_menus_pb.CloneIvrMenuRequest, ondewo_vtsi_ivr_menus_pb.IvrMenu>;
    listIvrMenuRevisions: grpc.handleUnaryCall<ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsRequest, ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsResponse>;
    testIvrMenu: grpc.handleUnaryCall<ondewo_vtsi_ivr_menus_pb.TestIvrMenuRequest, ondewo_vtsi_ivr_menus_pb.IvrMenuTest>;
    getIvrMenuTest: grpc.handleUnaryCall<ondewo_vtsi_ivr_menus_pb.GetIvrMenuTestRequest, ondewo_vtsi_ivr_menus_pb.IvrMenuTest>;
    getIvrMenuDialplan: grpc.handleUnaryCall<ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanRequest, ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanResponse>;
}

export interface IIvrMenusClient {
    createIvrMenu(request: ondewo_vtsi_ivr_menus_pb.CreateIvrMenuRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    createIvrMenu(request: ondewo_vtsi_ivr_menus_pb.CreateIvrMenuRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    createIvrMenu(request: ondewo_vtsi_ivr_menus_pb.CreateIvrMenuRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    getIvrMenu(request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    getIvrMenu(request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    getIvrMenu(request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    updateIvrMenu(request: ondewo_vtsi_ivr_menus_pb.UpdateIvrMenuRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    updateIvrMenu(request: ondewo_vtsi_ivr_menus_pb.UpdateIvrMenuRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    updateIvrMenu(request: ondewo_vtsi_ivr_menus_pb.UpdateIvrMenuRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    deleteIvrMenu(request: ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuResponse) => void): grpc.ClientUnaryCall;
    deleteIvrMenu(request: ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuResponse) => void): grpc.ClientUnaryCall;
    deleteIvrMenu(request: ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuResponse) => void): grpc.ClientUnaryCall;
    listIvrMenus(request: ondewo_vtsi_ivr_menus_pb.ListIvrMenusRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.ListIvrMenusResponse) => void): grpc.ClientUnaryCall;
    listIvrMenus(request: ondewo_vtsi_ivr_menus_pb.ListIvrMenusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.ListIvrMenusResponse) => void): grpc.ClientUnaryCall;
    listIvrMenus(request: ondewo_vtsi_ivr_menus_pb.ListIvrMenusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.ListIvrMenusResponse) => void): grpc.ClientUnaryCall;
    validateIvrMenu(request: ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuResponse) => void): grpc.ClientUnaryCall;
    validateIvrMenu(request: ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuResponse) => void): grpc.ClientUnaryCall;
    validateIvrMenu(request: ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuResponse) => void): grpc.ClientUnaryCall;
    publishIvrMenu(request: ondewo_vtsi_ivr_menus_pb.PublishIvrMenuRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    publishIvrMenu(request: ondewo_vtsi_ivr_menus_pb.PublishIvrMenuRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    publishIvrMenu(request: ondewo_vtsi_ivr_menus_pb.PublishIvrMenuRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    cloneIvrMenu(request: ondewo_vtsi_ivr_menus_pb.CloneIvrMenuRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    cloneIvrMenu(request: ondewo_vtsi_ivr_menus_pb.CloneIvrMenuRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    cloneIvrMenu(request: ondewo_vtsi_ivr_menus_pb.CloneIvrMenuRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    listIvrMenuRevisions(request: ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsResponse) => void): grpc.ClientUnaryCall;
    listIvrMenuRevisions(request: ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsResponse) => void): grpc.ClientUnaryCall;
    listIvrMenuRevisions(request: ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsResponse) => void): grpc.ClientUnaryCall;
    testIvrMenu(request: ondewo_vtsi_ivr_menus_pb.TestIvrMenuRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenuTest) => void): grpc.ClientUnaryCall;
    testIvrMenu(request: ondewo_vtsi_ivr_menus_pb.TestIvrMenuRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenuTest) => void): grpc.ClientUnaryCall;
    testIvrMenu(request: ondewo_vtsi_ivr_menus_pb.TestIvrMenuRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenuTest) => void): grpc.ClientUnaryCall;
    getIvrMenuTest(request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuTestRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenuTest) => void): grpc.ClientUnaryCall;
    getIvrMenuTest(request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuTestRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenuTest) => void): grpc.ClientUnaryCall;
    getIvrMenuTest(request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuTestRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenuTest) => void): grpc.ClientUnaryCall;
    getIvrMenuDialplan(request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanResponse) => void): grpc.ClientUnaryCall;
    getIvrMenuDialplan(request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanResponse) => void): grpc.ClientUnaryCall;
    getIvrMenuDialplan(request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanResponse) => void): grpc.ClientUnaryCall;
}

export class IvrMenusClient extends grpc.Client implements IIvrMenusClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createIvrMenu(request: ondewo_vtsi_ivr_menus_pb.CreateIvrMenuRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    public createIvrMenu(request: ondewo_vtsi_ivr_menus_pb.CreateIvrMenuRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    public createIvrMenu(request: ondewo_vtsi_ivr_menus_pb.CreateIvrMenuRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    public getIvrMenu(request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    public getIvrMenu(request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    public getIvrMenu(request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    public updateIvrMenu(request: ondewo_vtsi_ivr_menus_pb.UpdateIvrMenuRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    public updateIvrMenu(request: ondewo_vtsi_ivr_menus_pb.UpdateIvrMenuRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    public updateIvrMenu(request: ondewo_vtsi_ivr_menus_pb.UpdateIvrMenuRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    public deleteIvrMenu(request: ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuResponse) => void): grpc.ClientUnaryCall;
    public deleteIvrMenu(request: ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuResponse) => void): grpc.ClientUnaryCall;
    public deleteIvrMenu(request: ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuResponse) => void): grpc.ClientUnaryCall;
    public listIvrMenus(request: ondewo_vtsi_ivr_menus_pb.ListIvrMenusRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.ListIvrMenusResponse) => void): grpc.ClientUnaryCall;
    public listIvrMenus(request: ondewo_vtsi_ivr_menus_pb.ListIvrMenusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.ListIvrMenusResponse) => void): grpc.ClientUnaryCall;
    public listIvrMenus(request: ondewo_vtsi_ivr_menus_pb.ListIvrMenusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.ListIvrMenusResponse) => void): grpc.ClientUnaryCall;
    public validateIvrMenu(request: ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuResponse) => void): grpc.ClientUnaryCall;
    public validateIvrMenu(request: ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuResponse) => void): grpc.ClientUnaryCall;
    public validateIvrMenu(request: ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuResponse) => void): grpc.ClientUnaryCall;
    public publishIvrMenu(request: ondewo_vtsi_ivr_menus_pb.PublishIvrMenuRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    public publishIvrMenu(request: ondewo_vtsi_ivr_menus_pb.PublishIvrMenuRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    public publishIvrMenu(request: ondewo_vtsi_ivr_menus_pb.PublishIvrMenuRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    public cloneIvrMenu(request: ondewo_vtsi_ivr_menus_pb.CloneIvrMenuRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    public cloneIvrMenu(request: ondewo_vtsi_ivr_menus_pb.CloneIvrMenuRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    public cloneIvrMenu(request: ondewo_vtsi_ivr_menus_pb.CloneIvrMenuRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void): grpc.ClientUnaryCall;
    public listIvrMenuRevisions(request: ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsResponse) => void): grpc.ClientUnaryCall;
    public listIvrMenuRevisions(request: ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsResponse) => void): grpc.ClientUnaryCall;
    public listIvrMenuRevisions(request: ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsResponse) => void): grpc.ClientUnaryCall;
    public testIvrMenu(request: ondewo_vtsi_ivr_menus_pb.TestIvrMenuRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenuTest) => void): grpc.ClientUnaryCall;
    public testIvrMenu(request: ondewo_vtsi_ivr_menus_pb.TestIvrMenuRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenuTest) => void): grpc.ClientUnaryCall;
    public testIvrMenu(request: ondewo_vtsi_ivr_menus_pb.TestIvrMenuRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenuTest) => void): grpc.ClientUnaryCall;
    public getIvrMenuTest(request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuTestRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenuTest) => void): grpc.ClientUnaryCall;
    public getIvrMenuTest(request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuTestRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenuTest) => void): grpc.ClientUnaryCall;
    public getIvrMenuTest(request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuTestRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.IvrMenuTest) => void): grpc.ClientUnaryCall;
    public getIvrMenuDialplan(request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanResponse) => void): grpc.ClientUnaryCall;
    public getIvrMenuDialplan(request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanResponse) => void): grpc.ClientUnaryCall;
    public getIvrMenuDialplan(request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanResponse) => void): grpc.ClientUnaryCall;
}
