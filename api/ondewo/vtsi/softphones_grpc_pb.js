// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2021 ONDEWO GmbH
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var ondewo_vtsi_softphones_pb = require('../../ondewo/vtsi/softphones_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var ondewo_vtsi_projects_pb = require('../../ondewo/vtsi/projects_pb.js');

function serialize_ondewo_vtsi_CreateSoftphoneAccountRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_softphones_pb.CreateSoftphoneAccountRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.CreateSoftphoneAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_CreateSoftphoneAccountRequest(buffer_arg) {
  return ondewo_vtsi_softphones_pb.CreateSoftphoneAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_CreateSoftphoneAccountResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_softphones_pb.CreateSoftphoneAccountResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.CreateSoftphoneAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_CreateSoftphoneAccountResponse(buffer_arg) {
  return ondewo_vtsi_softphones_pb.CreateSoftphoneAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeleteSoftphoneAccountRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeleteSoftphoneAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeleteSoftphoneAccountRequest(buffer_arg) {
  return ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeleteSoftphoneAccountResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeleteSoftphoneAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeleteSoftphoneAccountResponse(buffer_arg) {
  return ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetSoftphoneAccountRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_softphones_pb.GetSoftphoneAccountRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetSoftphoneAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetSoftphoneAccountRequest(buffer_arg) {
  return ondewo_vtsi_softphones_pb.GetSoftphoneAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetSoftphoneCertificateRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_softphones_pb.GetSoftphoneCertificateRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetSoftphoneCertificateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetSoftphoneCertificateRequest(buffer_arg) {
  return ondewo_vtsi_softphones_pb.GetSoftphoneCertificateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetSoftphoneProvisioningRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_softphones_pb.GetSoftphoneProvisioningRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetSoftphoneProvisioningRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetSoftphoneProvisioningRequest(buffer_arg) {
  return ondewo_vtsi_softphones_pb.GetSoftphoneProvisioningRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListSoftphoneAccountsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_softphones_pb.ListSoftphoneAccountsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListSoftphoneAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListSoftphoneAccountsRequest(buffer_arg) {
  return ondewo_vtsi_softphones_pb.ListSoftphoneAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListSoftphoneAccountsResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_softphones_pb.ListSoftphoneAccountsResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListSoftphoneAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListSoftphoneAccountsResponse(buffer_arg) {
  return ondewo_vtsi_softphones_pb.ListSoftphoneAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListSoftphoneCertificatesRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListSoftphoneCertificatesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListSoftphoneCertificatesRequest(buffer_arg) {
  return ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListSoftphoneCertificatesResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListSoftphoneCertificatesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListSoftphoneCertificatesResponse(buffer_arg) {
  return ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_RevokeSoftphoneCertificateRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_softphones_pb.RevokeSoftphoneCertificateRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.RevokeSoftphoneCertificateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_RevokeSoftphoneCertificateRequest(buffer_arg) {
  return ondewo_vtsi_softphones_pb.RevokeSoftphoneCertificateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_RotateSoftphoneCredentialsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.RotateSoftphoneCredentialsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_RotateSoftphoneCredentialsRequest(buffer_arg) {
  return ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_RotateSoftphoneCredentialsResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.RotateSoftphoneCredentialsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_RotateSoftphoneCredentialsResponse(buffer_arg) {
  return ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_SoftphoneAccount(arg) {
  if (!(arg instanceof ondewo_vtsi_softphones_pb.SoftphoneAccount)) {
    throw new Error('Expected argument of type ondewo.vtsi.SoftphoneAccount');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_SoftphoneAccount(buffer_arg) {
  return ondewo_vtsi_softphones_pb.SoftphoneAccount.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_SoftphoneCertificate(arg) {
  if (!(arg instanceof ondewo_vtsi_softphones_pb.SoftphoneCertificate)) {
    throw new Error('Expected argument of type ondewo.vtsi.SoftphoneCertificate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_SoftphoneCertificate(buffer_arg) {
  return ondewo_vtsi_softphones_pb.SoftphoneCertificate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_SoftphoneProvisioning(arg) {
  if (!(arg instanceof ondewo_vtsi_softphones_pb.SoftphoneProvisioning)) {
    throw new Error('Expected argument of type ondewo.vtsi.SoftphoneProvisioning');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_SoftphoneProvisioning(buffer_arg) {
  return ondewo_vtsi_softphones_pb.SoftphoneProvisioning.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UpdateSoftphoneAccountRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_softphones_pb.UpdateSoftphoneAccountRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.UpdateSoftphoneAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UpdateSoftphoneAccountRequest(buffer_arg) {
  return ondewo_vtsi_softphones_pb.UpdateSoftphoneAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// <p>ONDEWO VTSI API</p>
// <p>Manages the SOFTPHONE ACCOUNTS of a VTSI project: SIP accounts on the project&apos;s Asterisk that
// a human uses from a softphone such as Zoiper, to call into the project&apos;s listeners or to be reached
// by the project.</p>
// <p>A softphone account is NEVER one of the <code>ondewo000N</code> accounts the per-call ondewo-sip
// containers register with: it has its own SIP credentials, its own endpoint on the Asterisk and, for
// <code>SOFTPHONE_TRANSPORT_SECURITY_CLIENT_CERTIFICATE</code>, its own client certificate issued by the
// project&apos;s SOFTPHONE certificate authority.</p>
// <p><b>Secrets are handed out exactly once.</b> The SIP password and the password-protected PKCS#12
// bundle carrying the client private key appear only in the responses of
// <code>CreateSoftphoneAccount</code> and <code>RotateSoftphoneCredentials</code>. VTSI keeps no copy of
// the private key or of the PKCS#12 password, and stores the SIP password only in the form the Asterisk
// needs to verify a SIP digest. No other RPC returns a secret; a lost private key or password is
// recovered by rotating it.</p>
// <p>Errors are reported as gRPC status codes, not as <code>error_message</code> fields:
// <code>INVALID_ARGUMENT</code> for a malformed name, filter, field mask or value;
// <code>NOT_FOUND</code> for an unknown project, account or certificate;
// <code>ALREADY_EXISTS</code> for a <code>sip_username</code> already taken in the project;
// <code>FAILED_PRECONDITION</code> when the project or the account is in a state that does not allow the
// operation (each RPC names its cases); <code>ABORTED</code> when a concurrent change to the same account
// won, in which case nothing was stored and the request can be retried.</p>
// <p><b>A change that reduces access is enforced before it is acknowledged.</b> When
// <code>UpdateSoftphoneAccount</code>, <code>DeleteSoftphoneAccount</code> or
// <code>RevokeSoftphoneCertificate</code> is stored but the running Asterisk of a deployed project could
// not be updated, the RPC fails with <code>FAILED_PRECONDITION</code>; the stored change is applied by
// the next successful change or deployment. <code>CreateSoftphoneAccount</code> and
// <code>RotateSoftphoneCredentials</code> return their one-time secrets even then.</p>
var SoftphonesService = exports.SoftphonesService = {
  // ////////////////////////////////////////////////////////////////////////////
// Softphone account endpoints
// ////////////////////////////////////////////////////////////////////////////
//
// <p>Creates a softphone account in a VTSI project, generates its SIP password and, for
// <code>SOFTPHONE_TRANSPORT_SECURITY_CLIENT_CERTIFICATE</code>, issues its first client certificate.
// The response carries the ONE-TIME secrets; they cannot be retrieved again.</p>
// <p>If the project is deployed the account is applied to the running Asterisk; otherwise it is
// applied on the next deployment.</p>
// <p>Errors: <code>NOT_FOUND</code> if the project does not exist; <code>ALREADY_EXISTS</code> if the
// <code>sip_username</code> is taken in the project; <code>INVALID_ARGUMENT</code> for an invalid or
// reserved <code>sip_username</code>, an output-only field that was set, or an out-of-range value;
// <code>FAILED_PRECONDITION</code> if the project is being deleted, or, for
// <code>SOFTPHONE_TRANSPORT_SECURITY_CLIENT_CERTIFICATE</code>, if the project has no Asterisk port yet
// or its SOFTPHONE certificate authority is unusable (a redeployment mints a new one).</p>
// <p>The account is reachable on either TLS port only from the project&apos;s
// <code>softphone_permit_cidrs</code> (default: the server&apos;s list, private networks unless the
// operator changed it); see <code>AsteriskConfigsVariables.softphone_permit_cidrs</code>.</p>
createSoftphoneAccount: {
    path: '/ondewo.vtsi.Softphones/CreateSoftphoneAccount',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_softphones_pb.CreateSoftphoneAccountRequest,
    responseType: ondewo_vtsi_softphones_pb.CreateSoftphoneAccountResponse,
    requestSerialize: serialize_ondewo_vtsi_CreateSoftphoneAccountRequest,
    requestDeserialize: deserialize_ondewo_vtsi_CreateSoftphoneAccountRequest,
    responseSerialize: serialize_ondewo_vtsi_CreateSoftphoneAccountResponse,
    responseDeserialize: deserialize_ondewo_vtsi_CreateSoftphoneAccountResponse,
  },
  // <p>Returns a softphone account. Never returns a secret.</p>
// <p>Errors: <code>NOT_FOUND</code> if the account does not exist; <code>INVALID_ARGUMENT</code> for a
// malformed name or an unknown <code>field_mask</code> path.</p>
getSoftphoneAccount: {
    path: '/ondewo.vtsi.Softphones/GetSoftphoneAccount',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_softphones_pb.GetSoftphoneAccountRequest,
    responseType: ondewo_vtsi_softphones_pb.SoftphoneAccount,
    requestSerialize: serialize_ondewo_vtsi_GetSoftphoneAccountRequest,
    requestDeserialize: deserialize_ondewo_vtsi_GetSoftphoneAccountRequest,
    responseSerialize: serialize_ondewo_vtsi_SoftphoneAccount,
    responseDeserialize: deserialize_ondewo_vtsi_SoftphoneAccount,
  },
  // <p>Updates the mutable fields of a softphone account named by <code>update_mask</code>. Credentials
// are not changed here; use <code>RotateSoftphoneCredentials</code>.</p>
// <p>Errors: <code>NOT_FOUND</code> if the account does not exist; <code>INVALID_ARGUMENT</code> for an
// empty mask, an unknown, output-only or immutable path, or an out-of-range value;
// <code>FAILED_PRECONDITION</code> when switching to
// <code>SOFTPHONE_TRANSPORT_SECURITY_CLIENT_CERTIFICATE</code> while the account has no
// <code>SOFTPHONE_CERTIFICATE_STATUS_ACTIVE</code> certificate, or if the project is being deleted.</p>
// <p>The account is reachable on either TLS port only from the project&apos;s
// <code>softphone_permit_cidrs</code> (default: the server&apos;s list, private networks unless the
// operator changed it); see <code>AsteriskConfigsVariables.softphone_permit_cidrs</code>.</p>
updateSoftphoneAccount: {
    path: '/ondewo.vtsi.Softphones/UpdateSoftphoneAccount',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_softphones_pb.UpdateSoftphoneAccountRequest,
    responseType: ondewo_vtsi_softphones_pb.SoftphoneAccount,
    requestSerialize: serialize_ondewo_vtsi_UpdateSoftphoneAccountRequest,
    requestDeserialize: deserialize_ondewo_vtsi_UpdateSoftphoneAccountRequest,
    responseSerialize: serialize_ondewo_vtsi_SoftphoneAccount,
    responseDeserialize: deserialize_ondewo_vtsi_SoftphoneAccount,
  },
  // <p>Deletes a softphone account. Its endpoint is removed from the Asterisk, its registrations are
// dropped and every certificate it holds is revoked. Deletion is permanent.</p>
// <p>Errors: <code>NOT_FOUND</code> if the account does not exist.</p>
deleteSoftphoneAccount: {
    path: '/ondewo.vtsi.Softphones/DeleteSoftphoneAccount',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountRequest,
    responseType: ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountResponse,
    requestSerialize: serialize_ondewo_vtsi_DeleteSoftphoneAccountRequest,
    requestDeserialize: deserialize_ondewo_vtsi_DeleteSoftphoneAccountRequest,
    responseSerialize: serialize_ondewo_vtsi_DeleteSoftphoneAccountResponse,
    responseDeserialize: deserialize_ondewo_vtsi_DeleteSoftphoneAccountResponse,
  },
  // <p>Lists the softphone accounts of a VTSI project, filtered, sorted and paged. Never returns a
// secret.</p>
// <p>Errors: <code>NOT_FOUND</code> if the project does not exist; <code>INVALID_ARGUMENT</code> for an
// invalid filter, an unknown <code>field_mask</code> path, a negative <code>page_size</code> or a
// <code>page_token</code> that was not issued for the same project, filter and sorting.</p>
listSoftphoneAccounts: {
    path: '/ondewo.vtsi.Softphones/ListSoftphoneAccounts',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_softphones_pb.ListSoftphoneAccountsRequest,
    responseType: ondewo_vtsi_softphones_pb.ListSoftphoneAccountsResponse,
    requestSerialize: serialize_ondewo_vtsi_ListSoftphoneAccountsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_ListSoftphoneAccountsRequest,
    responseSerialize: serialize_ondewo_vtsi_ListSoftphoneAccountsResponse,
    responseDeserialize: deserialize_ondewo_vtsi_ListSoftphoneAccountsResponse,
  },
  // <p>Rotates the SIP password and/or the client certificate of a softphone account and returns the new
// ONE-TIME secrets. <b>Every rotation rotates the SIP password</b>, including one that asked only for
// <code>rotate_certificate</code>: the Asterisk has no certificate revocation list, so a previous
// certificate stops being usable for this account only because the password it was issued with
// stops working. The new password takes effect immediately and drops the account&apos;s current
// registrations, so every softphone using it must be reconfigured. A rotated certificate moves the
// previous <code>SOFTPHONE_CERTIFICATE_STATUS_ACTIVE</code> certificate to
// <code>SOFTPHONE_CERTIFICATE_STATUS_SUPERSEDED</code>. A rotation also unlocks an account that
// <code>RevokeSoftphoneCertificate</code> locked (a <code>SOFTPHONE_TRANSPORT_SECURITY_CLIENT_CERTIFICATE</code>
// account only once it again holds an ACTIVE certificate).</p>
// <p>Rotating the certificate of a <code>SOFTPHONE_TRANSPORT_SECURITY_SERVER_TLS_ONLY</code> account is
// allowed: it issues the certificate that a later switch to
// <code>SOFTPHONE_TRANSPORT_SECURITY_CLIENT_CERTIFICATE</code> requires, and rotates the password too.</p>
// <p>Errors: <code>NOT_FOUND</code> if the account does not exist; <code>INVALID_ARGUMENT</code> if
// neither <code>rotate_sip_password</code> nor <code>rotate_certificate</code> is set;
// <code>FAILED_PRECONDITION</code> if the project is being deleted, or, for
// <code>rotate_certificate</code>, if the project has no Asterisk port yet or its SOFTPHONE
// certificate authority is unusable.</p>
rotateSoftphoneCredentials: {
    path: '/ondewo.vtsi.Softphones/RotateSoftphoneCredentials',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsRequest,
    responseType: ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsResponse,
    requestSerialize: serialize_ondewo_vtsi_RotateSoftphoneCredentialsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_RotateSoftphoneCredentialsRequest,
    responseSerialize: serialize_ondewo_vtsi_RotateSoftphoneCredentialsResponse,
    responseDeserialize: deserialize_ondewo_vtsi_RotateSoftphoneCredentialsResponse,
  },
  // ////////////////////////////////////////////////////////////////////////////
// Softphone certificate endpoints
// ////////////////////////////////////////////////////////////////////////////
//
// <p>Lists softphone client certificates, either of one softphone account or of a whole VTSI project,
// filtered and paged, newest first. Only public material is returned.</p>
// <p>Errors: <code>NOT_FOUND</code> if the project or account does not exist;
// <code>INVALID_ARGUMENT</code> if no scope is set, for an invalid filter, an unknown
// <code>field_mask</code> path, a negative <code>page_size</code> or a foreign
// <code>page_token</code>.</p>
listSoftphoneCertificates: {
    path: '/ondewo.vtsi.Softphones/ListSoftphoneCertificates',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesRequest,
    responseType: ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesResponse,
    requestSerialize: serialize_ondewo_vtsi_ListSoftphoneCertificatesRequest,
    requestDeserialize: deserialize_ondewo_vtsi_ListSoftphoneCertificatesRequest,
    responseSerialize: serialize_ondewo_vtsi_ListSoftphoneCertificatesResponse,
    responseDeserialize: deserialize_ondewo_vtsi_ListSoftphoneCertificatesResponse,
  },
  // <p>Returns one softphone client certificate. Only public material is returned.</p>
// <p>Errors: <code>NOT_FOUND</code> if the certificate does not exist; <code>INVALID_ARGUMENT</code> for
// a malformed name or an unknown <code>field_mask</code> path.</p>
getSoftphoneCertificate: {
    path: '/ondewo.vtsi.Softphones/GetSoftphoneCertificate',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_softphones_pb.GetSoftphoneCertificateRequest,
    responseType: ondewo_vtsi_softphones_pb.SoftphoneCertificate,
    requestSerialize: serialize_ondewo_vtsi_GetSoftphoneCertificateRequest,
    requestDeserialize: deserialize_ondewo_vtsi_GetSoftphoneCertificateRequest,
    responseSerialize: serialize_ondewo_vtsi_SoftphoneCertificate,
    responseDeserialize: deserialize_ondewo_vtsi_SoftphoneCertificate,
  },
  // <p>Revokes a softphone client certificate. The Asterisk has no certificate revocation list, so
// revocation is enforced on the account&apos;s SIP password rather than on the certificate: a revoked
// certificate still completes the TLS handshake on the project&apos;s mutual-TLS port, but it no longer
// gets its holder an account.</p>
// <p>Revoking the ACTIVE certificate of an account LOCKS the account, whatever its transport
// security: it is removed from the Asterisk and its registrations are dropped until
// <code>RotateSoftphoneCredentials</code> issues a new password (and, for
// <code>SOFTPHONE_TRANSPORT_SECURITY_CLIENT_CERTIFICATE</code>, a new certificate). Revoking a
// SUPERSEDED certificate records the revocation only; its password was already rotated away.
// Revoking an already revoked certificate is idempotent and keeps the original revocation time and
// reason.</p>
// <p>Errors: <code>NOT_FOUND</code> if the certificate does not exist; <code>INVALID_ARGUMENT</code>
// for a malformed name or an over-long reason.</p>
revokeSoftphoneCertificate: {
    path: '/ondewo.vtsi.Softphones/RevokeSoftphoneCertificate',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_softphones_pb.RevokeSoftphoneCertificateRequest,
    responseType: ondewo_vtsi_softphones_pb.SoftphoneCertificate,
    requestSerialize: serialize_ondewo_vtsi_RevokeSoftphoneCertificateRequest,
    requestDeserialize: deserialize_ondewo_vtsi_RevokeSoftphoneCertificateRequest,
    responseSerialize: serialize_ondewo_vtsi_SoftphoneCertificate,
    responseDeserialize: deserialize_ondewo_vtsi_SoftphoneCertificate,
  },
  // ////////////////////////////////////////////////////////////////////////////
// Softphone provisioning endpoints
// ////////////////////////////////////////////////////////////////////////////
//
// <p>Returns everything needed to configure a softphone for an account: server, port, transport,
// outbound proxy, SIP identity, SRTP mode, codecs, the certificate authority to trust, which client
// certificate to import, and step-by-step Zoiper instructions. It never contains the SIP password or
// the private key; those were returned once by <code>CreateSoftphoneAccount</code> or
// <code>RotateSoftphoneCredentials</code>.</p>
// <p>Errors: <code>NOT_FOUND</code> if the account does not exist; <code>FAILED_PRECONDITION</code> if
// the project is not <code>DEPLOYED</code> (the host and ports describe a running Asterisk), or if a
// <code>SOFTPHONE_TRANSPORT_SECURITY_CLIENT_CERTIFICATE</code> account has no
// <code>SOFTPHONE_CERTIFICATE_STATUS_ACTIVE</code> certificate.</p>
getSoftphoneProvisioning: {
    path: '/ondewo.vtsi.Softphones/GetSoftphoneProvisioning',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_softphones_pb.GetSoftphoneProvisioningRequest,
    responseType: ondewo_vtsi_softphones_pb.SoftphoneProvisioning,
    requestSerialize: serialize_ondewo_vtsi_GetSoftphoneProvisioningRequest,
    requestDeserialize: deserialize_ondewo_vtsi_GetSoftphoneProvisioningRequest,
    responseSerialize: serialize_ondewo_vtsi_SoftphoneProvisioning,
    responseDeserialize: deserialize_ondewo_vtsi_SoftphoneProvisioning,
  },
};

exports.SoftphonesClient = grpc.makeGenericClientConstructor(SoftphonesService, 'Softphones');
