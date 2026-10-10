// package: ondewo.vtsi
// file: ondewo/vtsi/softphones.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_vtsi_projects_pb from "../../ondewo/vtsi/projects_pb";

export class SoftphoneAccount extends jspb.Message { 
    getName(): string;
    setName(value: string): SoftphoneAccount;
    getSoftphoneAccountId(): string;
    setSoftphoneAccountId(value: string): SoftphoneAccount;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): SoftphoneAccount;
    getDisplayName(): string;
    setDisplayName(value: string): SoftphoneAccount;
    getSipUsername(): string;
    setSipUsername(value: string): SoftphoneAccount;
    getTransportSecurity(): SoftphoneTransportSecurity;
    setTransportSecurity(value: SoftphoneTransportSecurity): SoftphoneAccount;

    hasEnabled(): boolean;
    clearEnabled(): void;
    getEnabled(): boolean | undefined;
    setEnabled(value: boolean): SoftphoneAccount;
    getMaxContacts(): number;
    setMaxContacts(value: number): SoftphoneAccount;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    clearAllowedDestinationsList(): void;
    getAllowedDestinationsList(): Array<string>;
    setAllowedDestinationsList(value: Array<string>): SoftphoneAccount;
    addAllowedDestinations(value: string, index?: number): string;
    getCurrentCertificateName(): string;
    setCurrentCertificateName(value: string): SoftphoneAccount;
    getCurrentCertificateSha256Fingerprint(): string;
    setCurrentCertificateSha256Fingerprint(value: string): SoftphoneAccount;

    hasCurrentCertificateExpireTime(): boolean;
    clearCurrentCertificateExpireTime(): void;
    getCurrentCertificateExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCurrentCertificateExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): SoftphoneAccount;

    hasSipPasswordSetAt(): boolean;
    clearSipPasswordSetAt(): void;
    getSipPasswordSetAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setSipPasswordSetAt(value?: google_protobuf_timestamp_pb.Timestamp): SoftphoneAccount;
    getCreatedBy(): string;
    setCreatedBy(value: string): SoftphoneAccount;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SoftphoneAccount;
    getModifiedBy(): string;
    setModifiedBy(value: string): SoftphoneAccount;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): SoftphoneAccount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SoftphoneAccount.AsObject;
    static toObject(includeInstance: boolean, msg: SoftphoneAccount): SoftphoneAccount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SoftphoneAccount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SoftphoneAccount;
    static deserializeBinaryFromReader(message: SoftphoneAccount, reader: jspb.BinaryReader): SoftphoneAccount;
}

export namespace SoftphoneAccount {
    export type AsObject = {
        name: string,
        softphoneAccountId: string,
        vtsiProjectName: string,
        displayName: string,
        sipUsername: string,
        transportSecurity: SoftphoneTransportSecurity,
        enabled?: boolean,
        maxContacts: number,

        labelsMap: Array<[string, string]>,
        allowedDestinationsList: Array<string>,
        currentCertificateName: string,
        currentCertificateSha256Fingerprint: string,
        currentCertificateExpireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        sipPasswordSetAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedBy: string,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class SoftphoneCertificate extends jspb.Message { 
    getName(): string;
    setName(value: string): SoftphoneCertificate;
    getSoftphoneAccountName(): string;
    setSoftphoneAccountName(value: string): SoftphoneCertificate;
    getStatus(): SoftphoneCertificateStatus;
    setStatus(value: SoftphoneCertificateStatus): SoftphoneCertificate;
    getCertificatePem(): string;
    setCertificatePem(value: string): SoftphoneCertificate;
    getIssuerCaCertificatePem(): string;
    setIssuerCaCertificatePem(value: string): SoftphoneCertificate;
    getSha256Fingerprint(): string;
    setSha256Fingerprint(value: string): SoftphoneCertificate;
    getSerialNumber(): string;
    setSerialNumber(value: string): SoftphoneCertificate;
    getSubject(): string;
    setSubject(value: string): SoftphoneCertificate;

    hasNotBefore(): boolean;
    clearNotBefore(): void;
    getNotBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setNotBefore(value?: google_protobuf_timestamp_pb.Timestamp): SoftphoneCertificate;

    hasNotAfter(): boolean;
    clearNotAfter(): void;
    getNotAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setNotAfter(value?: google_protobuf_timestamp_pb.Timestamp): SoftphoneCertificate;
    getCreatedBy(): string;
    setCreatedBy(value: string): SoftphoneCertificate;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SoftphoneCertificate;

    hasSupersededAt(): boolean;
    clearSupersededAt(): void;
    getSupersededAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setSupersededAt(value?: google_protobuf_timestamp_pb.Timestamp): SoftphoneCertificate;
    getSupersededByCertificateName(): string;
    setSupersededByCertificateName(value: string): SoftphoneCertificate;

    hasRevokedAt(): boolean;
    clearRevokedAt(): void;
    getRevokedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setRevokedAt(value?: google_protobuf_timestamp_pb.Timestamp): SoftphoneCertificate;
    getRevokedBy(): string;
    setRevokedBy(value: string): SoftphoneCertificate;
    getRevocationReason(): string;
    setRevocationReason(value: string): SoftphoneCertificate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SoftphoneCertificate.AsObject;
    static toObject(includeInstance: boolean, msg: SoftphoneCertificate): SoftphoneCertificate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SoftphoneCertificate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SoftphoneCertificate;
    static deserializeBinaryFromReader(message: SoftphoneCertificate, reader: jspb.BinaryReader): SoftphoneCertificate;
}

export namespace SoftphoneCertificate {
    export type AsObject = {
        name: string,
        softphoneAccountName: string,
        status: SoftphoneCertificateStatus,
        certificatePem: string,
        issuerCaCertificatePem: string,
        sha256Fingerprint: string,
        serialNumber: string,
        subject: string,
        notBefore?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        notAfter?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        supersededAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        supersededByCertificateName: string,
        revokedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        revokedBy: string,
        revocationReason: string,
    }
}

export class SoftphoneCredentials extends jspb.Message { 
    getSipPassword(): string;
    setSipPassword(value: string): SoftphoneCredentials;
    getPkcs12Bundle(): Uint8Array | string;
    getPkcs12Bundle_asU8(): Uint8Array;
    getPkcs12Bundle_asB64(): string;
    setPkcs12Bundle(value: Uint8Array | string): SoftphoneCredentials;
    getPkcs12Password(): string;
    setPkcs12Password(value: string): SoftphoneCredentials;

    hasCertificate(): boolean;
    clearCertificate(): void;
    getCertificate(): SoftphoneCertificate | undefined;
    setCertificate(value?: SoftphoneCertificate): SoftphoneCredentials;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SoftphoneCredentials.AsObject;
    static toObject(includeInstance: boolean, msg: SoftphoneCredentials): SoftphoneCredentials.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SoftphoneCredentials, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SoftphoneCredentials;
    static deserializeBinaryFromReader(message: SoftphoneCredentials, reader: jspb.BinaryReader): SoftphoneCredentials;
}

export namespace SoftphoneCredentials {
    export type AsObject = {
        sipPassword: string,
        pkcs12Bundle: Uint8Array | string,
        pkcs12Password: string,
        certificate?: SoftphoneCertificate.AsObject,
    }
}

export class SoftphoneProvisioning extends jspb.Message { 
    getSoftphoneAccountName(): string;
    setSoftphoneAccountName(value: string): SoftphoneProvisioning;
    getTransportSecurity(): SoftphoneTransportSecurity;
    setTransportSecurity(value: SoftphoneTransportSecurity): SoftphoneProvisioning;
    getSipDomain(): string;
    setSipDomain(value: string): SoftphoneProvisioning;
    getSipAddress(): string;
    setSipAddress(value: string): SoftphoneProvisioning;
    getSipServerHost(): string;
    setSipServerHost(value: string): SoftphoneProvisioning;
    getSipServerPort(): number;
    setSipServerPort(value: number): SoftphoneProvisioning;
    getSipTransport(): string;
    setSipTransport(value: string): SoftphoneProvisioning;
    getOutboundProxy(): string;
    setOutboundProxy(value: string): SoftphoneProvisioning;
    getUsername(): string;
    setUsername(value: string): SoftphoneProvisioning;
    getAuthUsername(): string;
    setAuthUsername(value: string): SoftphoneProvisioning;
    getRealm(): string;
    setRealm(value: string): SoftphoneProvisioning;
    getSrtpMode(): SoftphoneSrtpMode;
    setSrtpMode(value: SoftphoneSrtpMode): SoftphoneProvisioning;
    clearCodecsList(): void;
    getCodecsList(): Array<string>;
    setCodecsList(value: Array<string>): SoftphoneProvisioning;
    addCodecs(value: string, index?: number): string;
    getServerCaCertificatePem(): string;
    setServerCaCertificatePem(value: string): SoftphoneProvisioning;
    getServerCertificateSha256Fingerprint(): string;
    setServerCertificateSha256Fingerprint(value: string): SoftphoneProvisioning;
    getClientCertificateName(): string;
    setClientCertificateName(value: string): SoftphoneProvisioning;
    getClientCertificateSha256Fingerprint(): string;
    setClientCertificateSha256Fingerprint(value: string): SoftphoneProvisioning;

    hasClientCertificateExpireTime(): boolean;
    clearClientCertificateExpireTime(): void;
    getClientCertificateExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setClientCertificateExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): SoftphoneProvisioning;
    getZoiperInstructions(): string;
    setZoiperInstructions(value: string): SoftphoneProvisioning;
    getClientCertificateSupportNote(): string;
    setClientCertificateSupportNote(value: string): SoftphoneProvisioning;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SoftphoneProvisioning.AsObject;
    static toObject(includeInstance: boolean, msg: SoftphoneProvisioning): SoftphoneProvisioning.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SoftphoneProvisioning, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SoftphoneProvisioning;
    static deserializeBinaryFromReader(message: SoftphoneProvisioning, reader: jspb.BinaryReader): SoftphoneProvisioning;
}

export namespace SoftphoneProvisioning {
    export type AsObject = {
        softphoneAccountName: string,
        transportSecurity: SoftphoneTransportSecurity,
        sipDomain: string,
        sipAddress: string,
        sipServerHost: string,
        sipServerPort: number,
        sipTransport: string,
        outboundProxy: string,
        username: string,
        authUsername: string,
        realm: string,
        srtpMode: SoftphoneSrtpMode,
        codecsList: Array<string>,
        serverCaCertificatePem: string,
        serverCertificateSha256Fingerprint: string,
        clientCertificateName: string,
        clientCertificateSha256Fingerprint: string,
        clientCertificateExpireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        zoiperInstructions: string,
        clientCertificateSupportNote: string,
    }
}

export class SoftphoneAccountFilter extends jspb.Message { 
    clearTransportSecuritiesList(): void;
    getTransportSecuritiesList(): Array<SoftphoneTransportSecurity>;
    setTransportSecuritiesList(value: Array<SoftphoneTransportSecurity>): SoftphoneAccountFilter;
    addTransportSecurities(value: SoftphoneTransportSecurity, index?: number): SoftphoneTransportSecurity;

    hasEnabled(): boolean;
    clearEnabled(): void;
    getEnabled(): boolean | undefined;
    setEnabled(value: boolean): SoftphoneAccountFilter;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getDisplayNameContains(): string;
    setDisplayNameContains(value: string): SoftphoneAccountFilter;
    getSipUsernameContains(): string;
    setSipUsernameContains(value: string): SoftphoneAccountFilter;

    hasCertificateExpiresBefore(): boolean;
    clearCertificateExpiresBefore(): void;
    getCertificateExpiresBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCertificateExpiresBefore(value?: google_protobuf_timestamp_pb.Timestamp): SoftphoneAccountFilter;

    hasCertificateExpiresAfter(): boolean;
    clearCertificateExpiresAfter(): void;
    getCertificateExpiresAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCertificateExpiresAfter(value?: google_protobuf_timestamp_pb.Timestamp): SoftphoneAccountFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SoftphoneAccountFilter.AsObject;
    static toObject(includeInstance: boolean, msg: SoftphoneAccountFilter): SoftphoneAccountFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SoftphoneAccountFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SoftphoneAccountFilter;
    static deserializeBinaryFromReader(message: SoftphoneAccountFilter, reader: jspb.BinaryReader): SoftphoneAccountFilter;
}

export namespace SoftphoneAccountFilter {
    export type AsObject = {
        transportSecuritiesList: Array<SoftphoneTransportSecurity>,
        enabled?: boolean,

        labelsMap: Array<[string, string]>,
        displayNameContains: string,
        sipUsernameContains: string,
        certificateExpiresBefore?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        certificateExpiresAfter?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class SoftphoneCertificateFilter extends jspb.Message { 
    clearStatusesList(): void;
    getStatusesList(): Array<SoftphoneCertificateStatus>;
    setStatusesList(value: Array<SoftphoneCertificateStatus>): SoftphoneCertificateFilter;
    addStatuses(value: SoftphoneCertificateStatus, index?: number): SoftphoneCertificateStatus;

    hasExpiresBefore(): boolean;
    clearExpiresBefore(): void;
    getExpiresBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpiresBefore(value?: google_protobuf_timestamp_pb.Timestamp): SoftphoneCertificateFilter;

    hasExpiresAfter(): boolean;
    clearExpiresAfter(): void;
    getExpiresAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpiresAfter(value?: google_protobuf_timestamp_pb.Timestamp): SoftphoneCertificateFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SoftphoneCertificateFilter.AsObject;
    static toObject(includeInstance: boolean, msg: SoftphoneCertificateFilter): SoftphoneCertificateFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SoftphoneCertificateFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SoftphoneCertificateFilter;
    static deserializeBinaryFromReader(message: SoftphoneCertificateFilter, reader: jspb.BinaryReader): SoftphoneCertificateFilter;
}

export namespace SoftphoneCertificateFilter {
    export type AsObject = {
        statusesList: Array<SoftphoneCertificateStatus>,
        expiresBefore?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        expiresAfter?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class SoftphoneAccountSorting extends jspb.Message { 

    hasSortingField(): boolean;
    clearSortingField(): void;
    getSortingField(): SoftphoneAccountSorting.SoftphoneAccountSortingField | undefined;
    setSortingField(value: SoftphoneAccountSorting.SoftphoneAccountSortingField): SoftphoneAccountSorting;

    hasSortingMode(): boolean;
    clearSortingMode(): void;
    getSortingMode(): ondewo_vtsi_projects_pb.VtsiProjectSortingMode | undefined;
    setSortingMode(value: ondewo_vtsi_projects_pb.VtsiProjectSortingMode): SoftphoneAccountSorting;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SoftphoneAccountSorting.AsObject;
    static toObject(includeInstance: boolean, msg: SoftphoneAccountSorting): SoftphoneAccountSorting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SoftphoneAccountSorting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SoftphoneAccountSorting;
    static deserializeBinaryFromReader(message: SoftphoneAccountSorting, reader: jspb.BinaryReader): SoftphoneAccountSorting;
}

export namespace SoftphoneAccountSorting {
    export type AsObject = {
        sortingField?: SoftphoneAccountSorting.SoftphoneAccountSortingField,
        sortingMode?: ondewo_vtsi_projects_pb.VtsiProjectSortingMode,
    }

    export enum SoftphoneAccountSortingField {
    NO_SOFTPHONE_ACCOUNT_SORTING = 0,
    SORT_SOFTPHONE_ACCOUNT_BY_DISPLAY_NAME = 1,
    SORT_SOFTPHONE_ACCOUNT_BY_SIP_USERNAME = 2,
    SORT_SOFTPHONE_ACCOUNT_BY_CREATION_DATE = 3,
    SORT_SOFTPHONE_ACCOUNT_BY_LAST_MODIFIED = 4,
    SORT_SOFTPHONE_ACCOUNT_BY_CERTIFICATE_EXPIRY = 5,
    }

}

export class CreateSoftphoneAccountRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): CreateSoftphoneAccountRequest;

    hasSoftphoneAccount(): boolean;
    clearSoftphoneAccount(): void;
    getSoftphoneAccount(): SoftphoneAccount | undefined;
    setSoftphoneAccount(value?: SoftphoneAccount): CreateSoftphoneAccountRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSoftphoneAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSoftphoneAccountRequest): CreateSoftphoneAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSoftphoneAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSoftphoneAccountRequest;
    static deserializeBinaryFromReader(message: CreateSoftphoneAccountRequest, reader: jspb.BinaryReader): CreateSoftphoneAccountRequest;
}

export namespace CreateSoftphoneAccountRequest {
    export type AsObject = {
        vtsiProjectName: string,
        softphoneAccount?: SoftphoneAccount.AsObject,
    }
}

export class CreateSoftphoneAccountResponse extends jspb.Message { 

    hasSoftphoneAccount(): boolean;
    clearSoftphoneAccount(): void;
    getSoftphoneAccount(): SoftphoneAccount | undefined;
    setSoftphoneAccount(value?: SoftphoneAccount): CreateSoftphoneAccountResponse;

    hasCredentials(): boolean;
    clearCredentials(): void;
    getCredentials(): SoftphoneCredentials | undefined;
    setCredentials(value?: SoftphoneCredentials): CreateSoftphoneAccountResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSoftphoneAccountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSoftphoneAccountResponse): CreateSoftphoneAccountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSoftphoneAccountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSoftphoneAccountResponse;
    static deserializeBinaryFromReader(message: CreateSoftphoneAccountResponse, reader: jspb.BinaryReader): CreateSoftphoneAccountResponse;
}

export namespace CreateSoftphoneAccountResponse {
    export type AsObject = {
        softphoneAccount?: SoftphoneAccount.AsObject,
        credentials?: SoftphoneCredentials.AsObject,
    }
}

export class GetSoftphoneAccountRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetSoftphoneAccountRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetSoftphoneAccountRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSoftphoneAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSoftphoneAccountRequest): GetSoftphoneAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSoftphoneAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSoftphoneAccountRequest;
    static deserializeBinaryFromReader(message: GetSoftphoneAccountRequest, reader: jspb.BinaryReader): GetSoftphoneAccountRequest;
}

export namespace GetSoftphoneAccountRequest {
    export type AsObject = {
        name: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class UpdateSoftphoneAccountRequest extends jspb.Message { 

    hasSoftphoneAccount(): boolean;
    clearSoftphoneAccount(): void;
    getSoftphoneAccount(): SoftphoneAccount | undefined;
    setSoftphoneAccount(value?: SoftphoneAccount): UpdateSoftphoneAccountRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSoftphoneAccountRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSoftphoneAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSoftphoneAccountRequest): UpdateSoftphoneAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSoftphoneAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSoftphoneAccountRequest;
    static deserializeBinaryFromReader(message: UpdateSoftphoneAccountRequest, reader: jspb.BinaryReader): UpdateSoftphoneAccountRequest;
}

export namespace UpdateSoftphoneAccountRequest {
    export type AsObject = {
        softphoneAccount?: SoftphoneAccount.AsObject,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class DeleteSoftphoneAccountRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteSoftphoneAccountRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSoftphoneAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSoftphoneAccountRequest): DeleteSoftphoneAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSoftphoneAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSoftphoneAccountRequest;
    static deserializeBinaryFromReader(message: DeleteSoftphoneAccountRequest, reader: jspb.BinaryReader): DeleteSoftphoneAccountRequest;
}

export namespace DeleteSoftphoneAccountRequest {
    export type AsObject = {
        name: string,
    }
}

export class DeleteSoftphoneAccountResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteSoftphoneAccountResponse;
    getRevokedCertificateCount(): number;
    setRevokedCertificateCount(value: number): DeleteSoftphoneAccountResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSoftphoneAccountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSoftphoneAccountResponse): DeleteSoftphoneAccountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSoftphoneAccountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSoftphoneAccountResponse;
    static deserializeBinaryFromReader(message: DeleteSoftphoneAccountResponse, reader: jspb.BinaryReader): DeleteSoftphoneAccountResponse;
}

export namespace DeleteSoftphoneAccountResponse {
    export type AsObject = {
        name: string,
        revokedCertificateCount: number,
    }
}

export class ListSoftphoneAccountsRequest extends jspb.Message { 
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): ListSoftphoneAccountsRequest;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): SoftphoneAccountFilter | undefined;
    setFilter(value?: SoftphoneAccountFilter): ListSoftphoneAccountsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListSoftphoneAccountsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListSoftphoneAccountsRequest;

    hasPageToken(): boolean;
    clearPageToken(): void;
    getPageToken(): string | undefined;
    setPageToken(value: string): ListSoftphoneAccountsRequest;

    hasSoftphoneAccountSorting(): boolean;
    clearSoftphoneAccountSorting(): void;
    getSoftphoneAccountSorting(): SoftphoneAccountSorting | undefined;
    setSoftphoneAccountSorting(value?: SoftphoneAccountSorting): ListSoftphoneAccountsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSoftphoneAccountsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSoftphoneAccountsRequest): ListSoftphoneAccountsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSoftphoneAccountsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSoftphoneAccountsRequest;
    static deserializeBinaryFromReader(message: ListSoftphoneAccountsRequest, reader: jspb.BinaryReader): ListSoftphoneAccountsRequest;
}

export namespace ListSoftphoneAccountsRequest {
    export type AsObject = {
        vtsiProjectName: string,
        filter?: SoftphoneAccountFilter.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        pageSize: number,
        pageToken?: string,
        softphoneAccountSorting?: SoftphoneAccountSorting.AsObject,
    }
}

export class ListSoftphoneAccountsResponse extends jspb.Message { 
    clearSoftphoneAccountsList(): void;
    getSoftphoneAccountsList(): Array<SoftphoneAccount>;
    setSoftphoneAccountsList(value: Array<SoftphoneAccount>): ListSoftphoneAccountsResponse;
    addSoftphoneAccounts(value?: SoftphoneAccount, index?: number): SoftphoneAccount;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListSoftphoneAccountsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSoftphoneAccountsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSoftphoneAccountsResponse): ListSoftphoneAccountsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSoftphoneAccountsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSoftphoneAccountsResponse;
    static deserializeBinaryFromReader(message: ListSoftphoneAccountsResponse, reader: jspb.BinaryReader): ListSoftphoneAccountsResponse;
}

export namespace ListSoftphoneAccountsResponse {
    export type AsObject = {
        softphoneAccountsList: Array<SoftphoneAccount.AsObject>,
        nextPageToken: string,
    }
}

export class RotateSoftphoneCredentialsRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): RotateSoftphoneCredentialsRequest;
    getRotateSipPassword(): boolean;
    setRotateSipPassword(value: boolean): RotateSoftphoneCredentialsRequest;
    getRotateCertificate(): boolean;
    setRotateCertificate(value: boolean): RotateSoftphoneCredentialsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RotateSoftphoneCredentialsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RotateSoftphoneCredentialsRequest): RotateSoftphoneCredentialsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RotateSoftphoneCredentialsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RotateSoftphoneCredentialsRequest;
    static deserializeBinaryFromReader(message: RotateSoftphoneCredentialsRequest, reader: jspb.BinaryReader): RotateSoftphoneCredentialsRequest;
}

export namespace RotateSoftphoneCredentialsRequest {
    export type AsObject = {
        name: string,
        rotateSipPassword: boolean,
        rotateCertificate: boolean,
    }
}

export class RotateSoftphoneCredentialsResponse extends jspb.Message { 

    hasSoftphoneAccount(): boolean;
    clearSoftphoneAccount(): void;
    getSoftphoneAccount(): SoftphoneAccount | undefined;
    setSoftphoneAccount(value?: SoftphoneAccount): RotateSoftphoneCredentialsResponse;

    hasCredentials(): boolean;
    clearCredentials(): void;
    getCredentials(): SoftphoneCredentials | undefined;
    setCredentials(value?: SoftphoneCredentials): RotateSoftphoneCredentialsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RotateSoftphoneCredentialsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RotateSoftphoneCredentialsResponse): RotateSoftphoneCredentialsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RotateSoftphoneCredentialsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RotateSoftphoneCredentialsResponse;
    static deserializeBinaryFromReader(message: RotateSoftphoneCredentialsResponse, reader: jspb.BinaryReader): RotateSoftphoneCredentialsResponse;
}

export namespace RotateSoftphoneCredentialsResponse {
    export type AsObject = {
        softphoneAccount?: SoftphoneAccount.AsObject,
        credentials?: SoftphoneCredentials.AsObject,
    }
}

export class ListSoftphoneCertificatesRequest extends jspb.Message { 

    hasVtsiProjectName(): boolean;
    clearVtsiProjectName(): void;
    getVtsiProjectName(): string;
    setVtsiProjectName(value: string): ListSoftphoneCertificatesRequest;

    hasSoftphoneAccountName(): boolean;
    clearSoftphoneAccountName(): void;
    getSoftphoneAccountName(): string;
    setSoftphoneAccountName(value: string): ListSoftphoneCertificatesRequest;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): SoftphoneCertificateFilter | undefined;
    setFilter(value?: SoftphoneCertificateFilter): ListSoftphoneCertificatesRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListSoftphoneCertificatesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListSoftphoneCertificatesRequest;

    hasPageToken(): boolean;
    clearPageToken(): void;
    getPageToken(): string | undefined;
    setPageToken(value: string): ListSoftphoneCertificatesRequest;

    getScopeCase(): ListSoftphoneCertificatesRequest.ScopeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSoftphoneCertificatesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSoftphoneCertificatesRequest): ListSoftphoneCertificatesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSoftphoneCertificatesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSoftphoneCertificatesRequest;
    static deserializeBinaryFromReader(message: ListSoftphoneCertificatesRequest, reader: jspb.BinaryReader): ListSoftphoneCertificatesRequest;
}

export namespace ListSoftphoneCertificatesRequest {
    export type AsObject = {
        vtsiProjectName: string,
        softphoneAccountName: string,
        filter?: SoftphoneCertificateFilter.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        pageSize: number,
        pageToken?: string,
    }

    export enum ScopeCase {
        SCOPE_NOT_SET = 0,
        VTSI_PROJECT_NAME = 1,
        SOFTPHONE_ACCOUNT_NAME = 2,
    }

}

export class ListSoftphoneCertificatesResponse extends jspb.Message { 
    clearSoftphoneCertificatesList(): void;
    getSoftphoneCertificatesList(): Array<SoftphoneCertificate>;
    setSoftphoneCertificatesList(value: Array<SoftphoneCertificate>): ListSoftphoneCertificatesResponse;
    addSoftphoneCertificates(value?: SoftphoneCertificate, index?: number): SoftphoneCertificate;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListSoftphoneCertificatesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSoftphoneCertificatesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSoftphoneCertificatesResponse): ListSoftphoneCertificatesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSoftphoneCertificatesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSoftphoneCertificatesResponse;
    static deserializeBinaryFromReader(message: ListSoftphoneCertificatesResponse, reader: jspb.BinaryReader): ListSoftphoneCertificatesResponse;
}

export namespace ListSoftphoneCertificatesResponse {
    export type AsObject = {
        softphoneCertificatesList: Array<SoftphoneCertificate.AsObject>,
        nextPageToken: string,
    }
}

export class GetSoftphoneCertificateRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetSoftphoneCertificateRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetSoftphoneCertificateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSoftphoneCertificateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSoftphoneCertificateRequest): GetSoftphoneCertificateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSoftphoneCertificateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSoftphoneCertificateRequest;
    static deserializeBinaryFromReader(message: GetSoftphoneCertificateRequest, reader: jspb.BinaryReader): GetSoftphoneCertificateRequest;
}

export namespace GetSoftphoneCertificateRequest {
    export type AsObject = {
        name: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class RevokeSoftphoneCertificateRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): RevokeSoftphoneCertificateRequest;
    getReason(): string;
    setReason(value: string): RevokeSoftphoneCertificateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RevokeSoftphoneCertificateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RevokeSoftphoneCertificateRequest): RevokeSoftphoneCertificateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RevokeSoftphoneCertificateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RevokeSoftphoneCertificateRequest;
    static deserializeBinaryFromReader(message: RevokeSoftphoneCertificateRequest, reader: jspb.BinaryReader): RevokeSoftphoneCertificateRequest;
}

export namespace RevokeSoftphoneCertificateRequest {
    export type AsObject = {
        name: string,
        reason: string,
    }
}

export class GetSoftphoneProvisioningRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetSoftphoneProvisioningRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSoftphoneProvisioningRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSoftphoneProvisioningRequest): GetSoftphoneProvisioningRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSoftphoneProvisioningRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSoftphoneProvisioningRequest;
    static deserializeBinaryFromReader(message: GetSoftphoneProvisioningRequest, reader: jspb.BinaryReader): GetSoftphoneProvisioningRequest;
}

export namespace GetSoftphoneProvisioningRequest {
    export type AsObject = {
        name: string,
    }
}

export enum SoftphoneTransportSecurity {
    SOFTPHONE_TRANSPORT_SECURITY_UNSPECIFIED = 0,
    SOFTPHONE_TRANSPORT_SECURITY_CLIENT_CERTIFICATE = 1,
    SOFTPHONE_TRANSPORT_SECURITY_SERVER_TLS_ONLY = 2,
}

export enum SoftphoneCertificateStatus {
    SOFTPHONE_CERTIFICATE_STATUS_UNSPECIFIED = 0,
    SOFTPHONE_CERTIFICATE_STATUS_ACTIVE = 1,
    SOFTPHONE_CERTIFICATE_STATUS_SUPERSEDED = 2,
    SOFTPHONE_CERTIFICATE_STATUS_REVOKED = 3,
}

export enum SoftphoneSrtpMode {
    SOFTPHONE_SRTP_MODE_UNSPECIFIED = 0,
    SOFTPHONE_SRTP_MODE_SDES_MANDATORY = 1,
}
