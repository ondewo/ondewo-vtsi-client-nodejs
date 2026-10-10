// package: ondewo.vtsi
// file: ondewo/vtsi/softphones.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_vtsi_softphones_pb from "../../ondewo/vtsi/softphones_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_vtsi_projects_pb from "../../ondewo/vtsi/projects_pb";

interface ISoftphonesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createSoftphoneAccount: ISoftphonesService_ICreateSoftphoneAccount;
    getSoftphoneAccount: ISoftphonesService_IGetSoftphoneAccount;
    updateSoftphoneAccount: ISoftphonesService_IUpdateSoftphoneAccount;
    deleteSoftphoneAccount: ISoftphonesService_IDeleteSoftphoneAccount;
    listSoftphoneAccounts: ISoftphonesService_IListSoftphoneAccounts;
    rotateSoftphoneCredentials: ISoftphonesService_IRotateSoftphoneCredentials;
    listSoftphoneCertificates: ISoftphonesService_IListSoftphoneCertificates;
    getSoftphoneCertificate: ISoftphonesService_IGetSoftphoneCertificate;
    revokeSoftphoneCertificate: ISoftphonesService_IRevokeSoftphoneCertificate;
    getSoftphoneProvisioning: ISoftphonesService_IGetSoftphoneProvisioning;
}

interface ISoftphonesService_ICreateSoftphoneAccount extends grpc.MethodDefinition<ondewo_vtsi_softphones_pb.CreateSoftphoneAccountRequest, ondewo_vtsi_softphones_pb.CreateSoftphoneAccountResponse> {
    path: "/ondewo.vtsi.Softphones/CreateSoftphoneAccount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_softphones_pb.CreateSoftphoneAccountRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_softphones_pb.CreateSoftphoneAccountRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_softphones_pb.CreateSoftphoneAccountResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_softphones_pb.CreateSoftphoneAccountResponse>;
}
interface ISoftphonesService_IGetSoftphoneAccount extends grpc.MethodDefinition<ondewo_vtsi_softphones_pb.GetSoftphoneAccountRequest, ondewo_vtsi_softphones_pb.SoftphoneAccount> {
    path: "/ondewo.vtsi.Softphones/GetSoftphoneAccount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_softphones_pb.GetSoftphoneAccountRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_softphones_pb.GetSoftphoneAccountRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_softphones_pb.SoftphoneAccount>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_softphones_pb.SoftphoneAccount>;
}
interface ISoftphonesService_IUpdateSoftphoneAccount extends grpc.MethodDefinition<ondewo_vtsi_softphones_pb.UpdateSoftphoneAccountRequest, ondewo_vtsi_softphones_pb.SoftphoneAccount> {
    path: "/ondewo.vtsi.Softphones/UpdateSoftphoneAccount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_softphones_pb.UpdateSoftphoneAccountRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_softphones_pb.UpdateSoftphoneAccountRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_softphones_pb.SoftphoneAccount>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_softphones_pb.SoftphoneAccount>;
}
interface ISoftphonesService_IDeleteSoftphoneAccount extends grpc.MethodDefinition<ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountRequest, ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountResponse> {
    path: "/ondewo.vtsi.Softphones/DeleteSoftphoneAccount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountResponse>;
}
interface ISoftphonesService_IListSoftphoneAccounts extends grpc.MethodDefinition<ondewo_vtsi_softphones_pb.ListSoftphoneAccountsRequest, ondewo_vtsi_softphones_pb.ListSoftphoneAccountsResponse> {
    path: "/ondewo.vtsi.Softphones/ListSoftphoneAccounts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_softphones_pb.ListSoftphoneAccountsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_softphones_pb.ListSoftphoneAccountsRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_softphones_pb.ListSoftphoneAccountsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_softphones_pb.ListSoftphoneAccountsResponse>;
}
interface ISoftphonesService_IRotateSoftphoneCredentials extends grpc.MethodDefinition<ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsRequest, ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsResponse> {
    path: "/ondewo.vtsi.Softphones/RotateSoftphoneCredentials";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsResponse>;
}
interface ISoftphonesService_IListSoftphoneCertificates extends grpc.MethodDefinition<ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesRequest, ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesResponse> {
    path: "/ondewo.vtsi.Softphones/ListSoftphoneCertificates";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesResponse>;
}
interface ISoftphonesService_IGetSoftphoneCertificate extends grpc.MethodDefinition<ondewo_vtsi_softphones_pb.GetSoftphoneCertificateRequest, ondewo_vtsi_softphones_pb.SoftphoneCertificate> {
    path: "/ondewo.vtsi.Softphones/GetSoftphoneCertificate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_softphones_pb.GetSoftphoneCertificateRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_softphones_pb.GetSoftphoneCertificateRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_softphones_pb.SoftphoneCertificate>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_softphones_pb.SoftphoneCertificate>;
}
interface ISoftphonesService_IRevokeSoftphoneCertificate extends grpc.MethodDefinition<ondewo_vtsi_softphones_pb.RevokeSoftphoneCertificateRequest, ondewo_vtsi_softphones_pb.SoftphoneCertificate> {
    path: "/ondewo.vtsi.Softphones/RevokeSoftphoneCertificate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_softphones_pb.RevokeSoftphoneCertificateRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_softphones_pb.RevokeSoftphoneCertificateRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_softphones_pb.SoftphoneCertificate>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_softphones_pb.SoftphoneCertificate>;
}
interface ISoftphonesService_IGetSoftphoneProvisioning extends grpc.MethodDefinition<ondewo_vtsi_softphones_pb.GetSoftphoneProvisioningRequest, ondewo_vtsi_softphones_pb.SoftphoneProvisioning> {
    path: "/ondewo.vtsi.Softphones/GetSoftphoneProvisioning";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_vtsi_softphones_pb.GetSoftphoneProvisioningRequest>;
    requestDeserialize: grpc.deserialize<ondewo_vtsi_softphones_pb.GetSoftphoneProvisioningRequest>;
    responseSerialize: grpc.serialize<ondewo_vtsi_softphones_pb.SoftphoneProvisioning>;
    responseDeserialize: grpc.deserialize<ondewo_vtsi_softphones_pb.SoftphoneProvisioning>;
}

export const SoftphonesService: ISoftphonesService;

export interface ISoftphonesServer {
    createSoftphoneAccount: grpc.handleUnaryCall<ondewo_vtsi_softphones_pb.CreateSoftphoneAccountRequest, ondewo_vtsi_softphones_pb.CreateSoftphoneAccountResponse>;
    getSoftphoneAccount: grpc.handleUnaryCall<ondewo_vtsi_softphones_pb.GetSoftphoneAccountRequest, ondewo_vtsi_softphones_pb.SoftphoneAccount>;
    updateSoftphoneAccount: grpc.handleUnaryCall<ondewo_vtsi_softphones_pb.UpdateSoftphoneAccountRequest, ondewo_vtsi_softphones_pb.SoftphoneAccount>;
    deleteSoftphoneAccount: grpc.handleUnaryCall<ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountRequest, ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountResponse>;
    listSoftphoneAccounts: grpc.handleUnaryCall<ondewo_vtsi_softphones_pb.ListSoftphoneAccountsRequest, ondewo_vtsi_softphones_pb.ListSoftphoneAccountsResponse>;
    rotateSoftphoneCredentials: grpc.handleUnaryCall<ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsRequest, ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsResponse>;
    listSoftphoneCertificates: grpc.handleUnaryCall<ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesRequest, ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesResponse>;
    getSoftphoneCertificate: grpc.handleUnaryCall<ondewo_vtsi_softphones_pb.GetSoftphoneCertificateRequest, ondewo_vtsi_softphones_pb.SoftphoneCertificate>;
    revokeSoftphoneCertificate: grpc.handleUnaryCall<ondewo_vtsi_softphones_pb.RevokeSoftphoneCertificateRequest, ondewo_vtsi_softphones_pb.SoftphoneCertificate>;
    getSoftphoneProvisioning: grpc.handleUnaryCall<ondewo_vtsi_softphones_pb.GetSoftphoneProvisioningRequest, ondewo_vtsi_softphones_pb.SoftphoneProvisioning>;
}

export interface ISoftphonesClient {
    createSoftphoneAccount(request: ondewo_vtsi_softphones_pb.CreateSoftphoneAccountRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.CreateSoftphoneAccountResponse) => void): grpc.ClientUnaryCall;
    createSoftphoneAccount(request: ondewo_vtsi_softphones_pb.CreateSoftphoneAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.CreateSoftphoneAccountResponse) => void): grpc.ClientUnaryCall;
    createSoftphoneAccount(request: ondewo_vtsi_softphones_pb.CreateSoftphoneAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.CreateSoftphoneAccountResponse) => void): grpc.ClientUnaryCall;
    getSoftphoneAccount(request: ondewo_vtsi_softphones_pb.GetSoftphoneAccountRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneAccount) => void): grpc.ClientUnaryCall;
    getSoftphoneAccount(request: ondewo_vtsi_softphones_pb.GetSoftphoneAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneAccount) => void): grpc.ClientUnaryCall;
    getSoftphoneAccount(request: ondewo_vtsi_softphones_pb.GetSoftphoneAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneAccount) => void): grpc.ClientUnaryCall;
    updateSoftphoneAccount(request: ondewo_vtsi_softphones_pb.UpdateSoftphoneAccountRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneAccount) => void): grpc.ClientUnaryCall;
    updateSoftphoneAccount(request: ondewo_vtsi_softphones_pb.UpdateSoftphoneAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneAccount) => void): grpc.ClientUnaryCall;
    updateSoftphoneAccount(request: ondewo_vtsi_softphones_pb.UpdateSoftphoneAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneAccount) => void): grpc.ClientUnaryCall;
    deleteSoftphoneAccount(request: ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountResponse) => void): grpc.ClientUnaryCall;
    deleteSoftphoneAccount(request: ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountResponse) => void): grpc.ClientUnaryCall;
    deleteSoftphoneAccount(request: ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountResponse) => void): grpc.ClientUnaryCall;
    listSoftphoneAccounts(request: ondewo_vtsi_softphones_pb.ListSoftphoneAccountsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.ListSoftphoneAccountsResponse) => void): grpc.ClientUnaryCall;
    listSoftphoneAccounts(request: ondewo_vtsi_softphones_pb.ListSoftphoneAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.ListSoftphoneAccountsResponse) => void): grpc.ClientUnaryCall;
    listSoftphoneAccounts(request: ondewo_vtsi_softphones_pb.ListSoftphoneAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.ListSoftphoneAccountsResponse) => void): grpc.ClientUnaryCall;
    rotateSoftphoneCredentials(request: ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsResponse) => void): grpc.ClientUnaryCall;
    rotateSoftphoneCredentials(request: ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsResponse) => void): grpc.ClientUnaryCall;
    rotateSoftphoneCredentials(request: ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsResponse) => void): grpc.ClientUnaryCall;
    listSoftphoneCertificates(request: ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesResponse) => void): grpc.ClientUnaryCall;
    listSoftphoneCertificates(request: ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesResponse) => void): grpc.ClientUnaryCall;
    listSoftphoneCertificates(request: ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesResponse) => void): grpc.ClientUnaryCall;
    getSoftphoneCertificate(request: ondewo_vtsi_softphones_pb.GetSoftphoneCertificateRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneCertificate) => void): grpc.ClientUnaryCall;
    getSoftphoneCertificate(request: ondewo_vtsi_softphones_pb.GetSoftphoneCertificateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneCertificate) => void): grpc.ClientUnaryCall;
    getSoftphoneCertificate(request: ondewo_vtsi_softphones_pb.GetSoftphoneCertificateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneCertificate) => void): grpc.ClientUnaryCall;
    revokeSoftphoneCertificate(request: ondewo_vtsi_softphones_pb.RevokeSoftphoneCertificateRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneCertificate) => void): grpc.ClientUnaryCall;
    revokeSoftphoneCertificate(request: ondewo_vtsi_softphones_pb.RevokeSoftphoneCertificateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneCertificate) => void): grpc.ClientUnaryCall;
    revokeSoftphoneCertificate(request: ondewo_vtsi_softphones_pb.RevokeSoftphoneCertificateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneCertificate) => void): grpc.ClientUnaryCall;
    getSoftphoneProvisioning(request: ondewo_vtsi_softphones_pb.GetSoftphoneProvisioningRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneProvisioning) => void): grpc.ClientUnaryCall;
    getSoftphoneProvisioning(request: ondewo_vtsi_softphones_pb.GetSoftphoneProvisioningRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneProvisioning) => void): grpc.ClientUnaryCall;
    getSoftphoneProvisioning(request: ondewo_vtsi_softphones_pb.GetSoftphoneProvisioningRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneProvisioning) => void): grpc.ClientUnaryCall;
}

export class SoftphonesClient extends grpc.Client implements ISoftphonesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createSoftphoneAccount(request: ondewo_vtsi_softphones_pb.CreateSoftphoneAccountRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.CreateSoftphoneAccountResponse) => void): grpc.ClientUnaryCall;
    public createSoftphoneAccount(request: ondewo_vtsi_softphones_pb.CreateSoftphoneAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.CreateSoftphoneAccountResponse) => void): grpc.ClientUnaryCall;
    public createSoftphoneAccount(request: ondewo_vtsi_softphones_pb.CreateSoftphoneAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.CreateSoftphoneAccountResponse) => void): grpc.ClientUnaryCall;
    public getSoftphoneAccount(request: ondewo_vtsi_softphones_pb.GetSoftphoneAccountRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneAccount) => void): grpc.ClientUnaryCall;
    public getSoftphoneAccount(request: ondewo_vtsi_softphones_pb.GetSoftphoneAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneAccount) => void): grpc.ClientUnaryCall;
    public getSoftphoneAccount(request: ondewo_vtsi_softphones_pb.GetSoftphoneAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneAccount) => void): grpc.ClientUnaryCall;
    public updateSoftphoneAccount(request: ondewo_vtsi_softphones_pb.UpdateSoftphoneAccountRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneAccount) => void): grpc.ClientUnaryCall;
    public updateSoftphoneAccount(request: ondewo_vtsi_softphones_pb.UpdateSoftphoneAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneAccount) => void): grpc.ClientUnaryCall;
    public updateSoftphoneAccount(request: ondewo_vtsi_softphones_pb.UpdateSoftphoneAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneAccount) => void): grpc.ClientUnaryCall;
    public deleteSoftphoneAccount(request: ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountResponse) => void): grpc.ClientUnaryCall;
    public deleteSoftphoneAccount(request: ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountResponse) => void): grpc.ClientUnaryCall;
    public deleteSoftphoneAccount(request: ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountResponse) => void): grpc.ClientUnaryCall;
    public listSoftphoneAccounts(request: ondewo_vtsi_softphones_pb.ListSoftphoneAccountsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.ListSoftphoneAccountsResponse) => void): grpc.ClientUnaryCall;
    public listSoftphoneAccounts(request: ondewo_vtsi_softphones_pb.ListSoftphoneAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.ListSoftphoneAccountsResponse) => void): grpc.ClientUnaryCall;
    public listSoftphoneAccounts(request: ondewo_vtsi_softphones_pb.ListSoftphoneAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.ListSoftphoneAccountsResponse) => void): grpc.ClientUnaryCall;
    public rotateSoftphoneCredentials(request: ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsResponse) => void): grpc.ClientUnaryCall;
    public rotateSoftphoneCredentials(request: ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsResponse) => void): grpc.ClientUnaryCall;
    public rotateSoftphoneCredentials(request: ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsResponse) => void): grpc.ClientUnaryCall;
    public listSoftphoneCertificates(request: ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesResponse) => void): grpc.ClientUnaryCall;
    public listSoftphoneCertificates(request: ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesResponse) => void): grpc.ClientUnaryCall;
    public listSoftphoneCertificates(request: ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesResponse) => void): grpc.ClientUnaryCall;
    public getSoftphoneCertificate(request: ondewo_vtsi_softphones_pb.GetSoftphoneCertificateRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneCertificate) => void): grpc.ClientUnaryCall;
    public getSoftphoneCertificate(request: ondewo_vtsi_softphones_pb.GetSoftphoneCertificateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneCertificate) => void): grpc.ClientUnaryCall;
    public getSoftphoneCertificate(request: ondewo_vtsi_softphones_pb.GetSoftphoneCertificateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneCertificate) => void): grpc.ClientUnaryCall;
    public revokeSoftphoneCertificate(request: ondewo_vtsi_softphones_pb.RevokeSoftphoneCertificateRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneCertificate) => void): grpc.ClientUnaryCall;
    public revokeSoftphoneCertificate(request: ondewo_vtsi_softphones_pb.RevokeSoftphoneCertificateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneCertificate) => void): grpc.ClientUnaryCall;
    public revokeSoftphoneCertificate(request: ondewo_vtsi_softphones_pb.RevokeSoftphoneCertificateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneCertificate) => void): grpc.ClientUnaryCall;
    public getSoftphoneProvisioning(request: ondewo_vtsi_softphones_pb.GetSoftphoneProvisioningRequest, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneProvisioning) => void): grpc.ClientUnaryCall;
    public getSoftphoneProvisioning(request: ondewo_vtsi_softphones_pb.GetSoftphoneProvisioningRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneProvisioning) => void): grpc.ClientUnaryCall;
    public getSoftphoneProvisioning(request: ondewo_vtsi_softphones_pb.GetSoftphoneProvisioningRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_vtsi_softphones_pb.SoftphoneProvisioning) => void): grpc.ClientUnaryCall;
}
