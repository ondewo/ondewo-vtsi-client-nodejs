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
var ondewo_vtsi_projects_pb = require('../../ondewo/vtsi/projects_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_ondewo_vtsi_CreateVtsiProjectRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_projects_pb.CreateVtsiProjectRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.CreateVtsiProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_CreateVtsiProjectRequest(buffer_arg) {
  return ondewo_vtsi_projects_pb.CreateVtsiProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_CreateVtsiProjectResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_projects_pb.CreateVtsiProjectResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.CreateVtsiProjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_CreateVtsiProjectResponse(buffer_arg) {
  return ondewo_vtsi_projects_pb.CreateVtsiProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeleteVtsiProjectRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_projects_pb.DeleteVtsiProjectRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeleteVtsiProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeleteVtsiProjectRequest(buffer_arg) {
  return ondewo_vtsi_projects_pb.DeleteVtsiProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeleteVtsiProjectResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_projects_pb.DeleteVtsiProjectResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeleteVtsiProjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeleteVtsiProjectResponse(buffer_arg) {
  return ondewo_vtsi_projects_pb.DeleteVtsiProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeployVtsiProjectRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_projects_pb.DeployVtsiProjectRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeployVtsiProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeployVtsiProjectRequest(buffer_arg) {
  return ondewo_vtsi_projects_pb.DeployVtsiProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeployVtsiProjectResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_projects_pb.DeployVtsiProjectResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeployVtsiProjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeployVtsiProjectResponse(buffer_arg) {
  return ondewo_vtsi_projects_pb.DeployVtsiProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetVtsiProjectRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_projects_pb.GetVtsiProjectRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetVtsiProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetVtsiProjectRequest(buffer_arg) {
  return ondewo_vtsi_projects_pb.GetVtsiProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListVtsiProjectsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_projects_pb.ListVtsiProjectsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListVtsiProjectsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListVtsiProjectsRequest(buffer_arg) {
  return ondewo_vtsi_projects_pb.ListVtsiProjectsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListVtsiProjectsResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_projects_pb.ListVtsiProjectsResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListVtsiProjectsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListVtsiProjectsResponse(buffer_arg) {
  return ondewo_vtsi_projects_pb.ListVtsiProjectsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UndeployVtsiProjectRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_projects_pb.UndeployVtsiProjectRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.UndeployVtsiProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UndeployVtsiProjectRequest(buffer_arg) {
  return ondewo_vtsi_projects_pb.UndeployVtsiProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UndeployVtsiProjectResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_projects_pb.UndeployVtsiProjectResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.UndeployVtsiProjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UndeployVtsiProjectResponse(buffer_arg) {
  return ondewo_vtsi_projects_pb.UndeployVtsiProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UpdateVtsiProjectRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_projects_pb.UpdateVtsiProjectRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.UpdateVtsiProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UpdateVtsiProjectRequest(buffer_arg) {
  return ondewo_vtsi_projects_pb.UpdateVtsiProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UpdateVtsiProjectResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_projects_pb.UpdateVtsiProjectResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.UpdateVtsiProjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UpdateVtsiProjectResponse(buffer_arg) {
  return ondewo_vtsi_projects_pb.UpdateVtsiProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_VtsiProject(arg) {
  if (!(arg instanceof ondewo_vtsi_projects_pb.VtsiProject)) {
    throw new Error('Expected argument of type ondewo.vtsi.VtsiProject');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_VtsiProject(buffer_arg) {
  return ondewo_vtsi_projects_pb.VtsiProject.deserializeBinary(new Uint8Array(buffer_arg));
}


// <p>ONDEWO VTSI API</p>
// <p>Manages VTSI (Virtual Telephone System Integration) PROJECTS: the per-project configuration of an
// Asterisk SIP server (its SIP trunk, its ports, its Asterisk version) together with the caller and
// listener capacity of the project and the ONDEWO NLU agents it serves. Deploying a project starts its
// Asterisk container; callers, listeners, campaigns and softphone accounts of the project need a
// <code>DEPLOYED</code> project to place or take calls.</p>
// <p>Errors are reported as gRPC status codes. The <code>error_message</code> fields of the responses
// are never set, neither on success nor on failure (they predate the status codes and are kept for wire
// compatibility): <code>INVALID_ARGUMENT</code> for a malformed name, an unknown <code>update_mask</code>
// or <code>field_mask</code> path, a malformed <code>page_token</code> or an out-of-range value (each
// naming the field); <code>NOT_FOUND</code> for an unknown project; <code>ALREADY_EXISTS</code> when
// <code>CreateVtsiProject</code> names a project that exists; <code>FAILED_PRECONDITION</code> when the
// project is in a status that does not allow the operation (each RPC names its cases);
// <code>ABORTED</code> when another create, update, deploy, undeploy or delete of the same project held
// it for longer than the server waits (about 30 seconds), in which case nothing was changed and the
// request can be retried; <code>UNAVAILABLE</code> when the docker daemon or the database cannot be
// reached.</p>
// <p>Authorization (only when the server enforces it, i.e. <code>ONDEWO_VTSI_KEYCLOAK_AUTH_ENABLED</code>
// and <code>ONDEWO_VTSI_AUTH_REQUIRED</code> are both true): a caller without a credential is
// <code>UNAUTHENTICATED</code> whatever it sent. A caller needs a server role (<code>SERVER_ADMIN</code>,
// <code>SERVER_MANAGER</code> or <code>SERVER_USER</code>), else every RPC is
// <code>PERMISSION_DENIED</code>. The project roles are derived from the caller&apos;s roles on the
// project&apos;s <code>nlu_agent_names</code>: <code>CreateVtsiProject</code>,
// <code>GetVtsiProject</code>, <code>UpdateVtsiProject</code>, <code>DeleteVtsiProject</code>,
// <code>DeployVtsiProject</code> and <code>UndeployVtsiProject</code> require
// <code>PROJECT_DEVELOPER</code> or higher (<code>PROJECT_ADMIN</code>); <code>ListVtsiProjects</code>
// is open to every project role and returns only the projects the caller holds a role on.
// <code>SERVER_ADMIN</code> passes every project check. With enforcement on, a well-formed request naming
// a project the caller holds no role on, an unknown project included, is answered
// <code>PERMISSION_DENIED</code> rather than <code>NOT_FOUND</code>, so the answer does not reveal
// whether the project exists; <code>NOT_FOUND</code> is then reserved to <code>SERVER_ADMIN</code>. With
// enforcement off (the default) every request is served and only logged.</p>
// <p><b>Credentials.</b> <code>AsteriskConfigsVariables.sip_trunk_password</code> is stored and returned
// as sent (it is not write-only): <code>GetVtsiProject</code>, <code>CreateVtsiProject</code>,
// <code>UpdateVtsiProject</code> and <code>ListVtsiProjects</code> return it to every caller allowed to
// call them with a view that populates <code>asterisk_configs</code>. With enforcement on,
// <code>ListVtsiProjects</code> withholds the whole <code>asterisk_configs</code> (and every other
// configuration field) from a caller whose highest role on the project is <code>PROJECT_EXECUTOR</code>
// or <code>PROJECT_USER</code>. Use a <code>field_mask</code> without <code>asterisk_configs</code> where
// the password is not needed.</p>
// <p>Events: every change emits the matching <code>VtsiEvent</code> of the project
// (<code>VTSI_EVENT_VTSI_PROJECT_UPDATED</code>, <code>_DEPLOYED</code>, <code>_DEPLOY_FAILED</code>,
// <code>_UNDEPLOYED</code>, <code>_UNDEPLOY_FAILED</code>, <code>_DELETED</code>) and, for every change
// of <code>vtsi_project_status</code>, <code>VTSI_EVENT_VTSI_PROJECT_STATUS_CHANGED</code>. A request
// with <code>validate_only</code> emits nothing.</p>
var ProjectsService = exports.ProjectsService = {
  // ////////////////////////////////////////////////////////////////////////////
// Project endpoints
// ////////////////////////////////////////////////////////////////////////////
//
// <p>Creates a VTSI project with its configuration. The project is created
// <code>UNDEPLOYED</code>; nothing is started. <code>max_callers</code> caller and
// <code>max_listeners</code> listener SIP accounts are provisioned for it and an Asterisk port is
// assigned when none was given.</p>
// <p>With <code>validate_only</code> every check of a real create runs (authorization included) and
// nothing is written, reserved or emitted; the would-be project is returned.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for an empty or over-long (more than 256 characters)
// <code>display_name</code>, a negative <code>max_callers</code> or <code>max_listeners</code>, a port
// outside 0..65535, <code>asterisk_port</code> and <code>asterisk_configs.asterisk_port</code> both set
// and different, a malformed <code>name</code>, an invalid <code>asterisk_configs</code> (each naming
// the field); <code>ALREADY_EXISTS</code> when
// <code>vtsi_project.name</code> names an existing project (also when two creates of the same name
// race); <code>ABORTED</code>, <code>UNAUTHENTICATED</code>, <code>PERMISSION_DENIED</code> as in the
// service description.</p>
// <p>Authorization: <code>PROJECT_DEVELOPER</code> or higher on EVERY agent of
// <code>nlu_agent_names</code>; a project with no agent can only be created by
// <code>SERVER_ADMIN</code>.</p>
// <p>Idempotency: none. A retry after a lost response creates a second project unless
// <code>vtsi_project.name</code> is set, in which case the retry is answered
// <code>ALREADY_EXISTS</code>.</p>
createVtsiProject: {
    path: '/ondewo.vtsi.Projects/CreateVtsiProject',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_projects_pb.CreateVtsiProjectRequest,
    responseType: ondewo_vtsi_projects_pb.CreateVtsiProjectResponse,
    requestSerialize: serialize_ondewo_vtsi_CreateVtsiProjectRequest,
    requestDeserialize: deserialize_ondewo_vtsi_CreateVtsiProjectRequest,
    responseSerialize: serialize_ondewo_vtsi_CreateVtsiProjectResponse,
    responseDeserialize: deserialize_ondewo_vtsi_CreateVtsiProjectResponse,
  },
  // <p>Returns a VTSI project with its configuration.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for an empty or malformed <code>name</code> or an unknown
// <code>field_mask</code> path; <code>NOT_FOUND</code> for an unknown project;
// <code>UNAUTHENTICATED</code>, <code>PERMISSION_DENIED</code> as in the service description.</p>
// <p>Authorization: <code>PROJECT_DEVELOPER</code> or higher on the project.</p>
getVtsiProject: {
    path: '/ondewo.vtsi.Projects/GetVtsiProject',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_projects_pb.GetVtsiProjectRequest,
    responseType: ondewo_vtsi_projects_pb.VtsiProject,
    requestSerialize: serialize_ondewo_vtsi_GetVtsiProjectRequest,
    requestDeserialize: deserialize_ondewo_vtsi_GetVtsiProjectRequest,
    responseSerialize: serialize_ondewo_vtsi_VtsiProject,
    responseDeserialize: deserialize_ondewo_vtsi_VtsiProject,
  },
  // <p>Updates a VTSI project: the fields named in <code>update_mask</code>, or, with no mask, the
// fields <code>vtsi_project</code> sets (see <code>UpdateVtsiProjectRequest.update_mask</code>).</p>
// <p>An update of an <code>UNDEPLOYED</code> project only writes it. An update of a
// <code>DEPLOYED</code> project is applied to the running Asterisk by the cheapest path that applies
// every change, chosen by the server: <code>display_name</code>, <code>nlu_agent_names</code> and
// <code>transfer_phone_number_allowlist</code> touch no Asterisk; a configuration change that Asterisk
// measurably applies on a reload is reloaded in place and keeps every call; every other change is a
// RESTART of the Asterisk container or a REDEPLOY of the project (a changed <code>max_callers</code>,
// <code>max_listeners</code>, Asterisk port, <code>asterisk_version</code> or managed account), and
// ENDS EVERY CALL of the project: a redeploy undeploys and deploys the project and recycles its
// listeners and pooled callers. Use <code>validate_only</code> to check an update first.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for an empty or malformed <code>vtsi_project.name</code>,
// an unknown <code>update_mask</code> path (also the prefixed form <code>vtsi_project.x</code>), a mask
// that clears the configuration source (<code>asterisk_configs</code> with no arm set), an out-of-range
// value (as on create) or an unknown <code>field_mask</code> path; <code>NOT_FOUND</code> for an
// unknown project; <code>FAILED_PRECONDITION</code> while the project is <code>DELETING</code>;
// <code>ABORTED</code> when another lifecycle operation of the project held it too long or the
// project changed concurrently, nothing being written; <code>UNAUTHENTICATED</code>,
// <code>PERMISSION_DENIED</code> as in the service description. When a deployed project&apos;s
// Asterisk cannot be reloaded, restarted or redeployed the RPC fails (<code>INTERNAL</code> or
// <code>UNAVAILABLE</code>) and the project is left as the failure left it (see
// <code>status_message</code>).</p>
// <p>Authorization: <code>PROJECT_DEVELOPER</code> or higher on the project and on every agent of the
// stored AND of the resulting <code>nlu_agent_names</code> (removing an agent needs the same role as
// adding it).</p>
// <p>Idempotency: an update is a set of absolute values, so a retry with the same request converges
// to the same project (a redeploying update ends the calls of the retry&apos;s moment too).</p>
updateVtsiProject: {
    path: '/ondewo.vtsi.Projects/UpdateVtsiProject',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_projects_pb.UpdateVtsiProjectRequest,
    responseType: ondewo_vtsi_projects_pb.UpdateVtsiProjectResponse,
    requestSerialize: serialize_ondewo_vtsi_UpdateVtsiProjectRequest,
    requestDeserialize: deserialize_ondewo_vtsi_UpdateVtsiProjectRequest,
    responseSerialize: serialize_ondewo_vtsi_UpdateVtsiProjectResponse,
    responseDeserialize: deserialize_ondewo_vtsi_UpdateVtsiProjectResponse,
  },
  // <p>Deletes a VTSI project and its configuration. A project that is deployed, deploying,
// undeploying or <code>DEPLOY_FAILED</code> is UNDEPLOYED FIRST, automatically, exactly as by <code>UndeployVtsiProject</code>:
// every call of the project ends and its listeners, callers and Asterisk container are removed. The
// undeploy is best effort: a failing teardown is logged and the deletion goes on. The project then
// moves to <code>DELETING</code>, its stored configuration is removed and the project no longer
// exists (<code>DELETED</code> is never returned: a deleted
// project is <code>NOT_FOUND</code>). Deletion is permanent.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for an empty or malformed <code>name</code>;
// <code>NOT_FOUND</code> for an unknown project, also for a retry of a deletion that succeeded (the
// RPC is not idempotent); <code>ABORTED</code>, <code>UNAUTHENTICATED</code>,
// <code>PERMISSION_DENIED</code> as in the service description.</p>
// <p>Authorization: <code>PROJECT_DEVELOPER</code> or higher on the project.</p>
// <p>Events: <code>VTSI_EVENT_VTSI_PROJECT_UNDEPLOYED</code> when it had to undeploy, then
// <code>VTSI_EVENT_VTSI_PROJECT_DELETED</code>, the last event of the project.</p>
deleteVtsiProject: {
    path: '/ondewo.vtsi.Projects/DeleteVtsiProject',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_projects_pb.DeleteVtsiProjectRequest,
    responseType: ondewo_vtsi_projects_pb.DeleteVtsiProjectResponse,
    requestSerialize: serialize_ondewo_vtsi_DeleteVtsiProjectRequest,
    requestDeserialize: deserialize_ondewo_vtsi_DeleteVtsiProjectRequest,
    responseSerialize: serialize_ondewo_vtsi_DeleteVtsiProjectResponse,
    responseDeserialize: deserialize_ondewo_vtsi_DeleteVtsiProjectResponse,
  },
  // <p>Deploys a VTSI project: starts its Asterisk container with the stored configuration and waits
// until the container runs. SYNCHRONOUS: the RPC returns when the project is <code>DEPLOYED</code>
// or the deployment failed. The status moves <code>UNDEPLOYED</code> (or <code>DEPLOY_FAILED</code>)
// &gt; <code>DEPLOYING</code> &gt; <code>DEPLOYED</code>; on failure the half-started container is
// removed, the status becomes <code>DEPLOY_FAILED</code> with the reason in
// <code>status_message</code>, and the RPC fails. The server waits about 30 seconds for the container
// to run, plus the docker API timeout of each docker call (<code>ONDEWO_VTSI_DOCKER_API_TIMEOUT_S</code>,
// default 90 seconds); a client deadline of at least 3 minutes is recommended. Deploying applies the
// project&apos;s softphone accounts to the new Asterisk. No caller or listener is started: start them
// with the <code>Calls</code> service.</p>
// <p>Idempotent: deploying a <code>DEPLOYED</code> project changes nothing and succeeds (nothing is
// restarted); a deploy that arrives while another deploy of the project runs waits for it and then
// finds the project <code>DEPLOYED</code>.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for an empty or malformed <code>name</code>;
// <code>NOT_FOUND</code> for an unknown project; <code>FAILED_PRECONDITION</code> while the project is
// <code>DELETING</code>, or <code>DEPLOYING</code> / <code>UNDEPLOYING</code> after the operation that
// set the status was interrupted (undeploy the project first); <code>INTERNAL</code> or
// <code>UNAVAILABLE</code> when the deployment failed (the project is then
// <code>DEPLOY_FAILED</code>); <code>ABORTED</code>, <code>UNAUTHENTICATED</code>,
// <code>PERMISSION_DENIED</code> as in the service description.</p>
// <p>Authorization: <code>PROJECT_DEVELOPER</code> or higher on the project.</p>
// <p>Events: <code>VTSI_EVENT_VTSI_PROJECT_DEPLOYED</code> or
// <code>VTSI_EVENT_VTSI_PROJECT_DEPLOY_FAILED</code>, and
// <code>VTSI_EVENT_VTSI_PROJECT_STATUS_CHANGED</code> per status change.</p>
deployVtsiProject: {
    path: '/ondewo.vtsi.Projects/DeployVtsiProject',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_projects_pb.DeployVtsiProjectRequest,
    responseType: ondewo_vtsi_projects_pb.DeployVtsiProjectResponse,
    requestSerialize: serialize_ondewo_vtsi_DeployVtsiProjectRequest,
    requestDeserialize: deserialize_ondewo_vtsi_DeployVtsiProjectRequest,
    responseSerialize: serialize_ondewo_vtsi_DeployVtsiProjectResponse,
    responseDeserialize: deserialize_ondewo_vtsi_DeployVtsiProjectResponse,
  },
  // <p>Undeploys a VTSI project. SYNCHRONOUS: the status moves to <code>UNDEPLOYING</code>, EVERY CALL
// of the project is ended (callers and listeners alike, campaign calls included), the listeners and
// the pooled callers are undeployed, the Asterisk container is removed, and the status becomes
// <code>UNDEPLOYED</code>. The registrations of the project&apos;s softphone accounts end with the
// container; the accounts themselves are kept and are applied again on the next deploy. The stored
// configuration, callers, listeners and campaigns are kept. A failed undeploy restores the previous
// status (or <code>UNDEPLOYED</code> when the container is already gone) and fails the RPC.</p>
// <p>Idempotent: undeploying an <code>UNDEPLOYED</code> project changes nothing and succeeds.
// Undeploying a <code>DEPLOY_FAILED</code> project removes what the failed deployment left and makes it
// <code>UNDEPLOYED</code>.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for an empty or malformed <code>name</code>;
// <code>NOT_FOUND</code> for an unknown project; <code>FAILED_PRECONDITION</code> while the project is
// <code>DELETING</code>; <code>INTERNAL</code> or <code>UNAVAILABLE</code> when the teardown failed;
// <code>ABORTED</code>, <code>UNAUTHENTICATED</code>, <code>PERMISSION_DENIED</code> as in the service
// description.</p>
// <p>Authorization: <code>PROJECT_DEVELOPER</code> or higher on the project.</p>
// <p>Events: <code>VTSI_EVENT_VTSI_PROJECT_UNDEPLOYED</code> or
// <code>VTSI_EVENT_VTSI_PROJECT_UNDEPLOY_FAILED</code>, and
// <code>VTSI_EVENT_VTSI_PROJECT_STATUS_CHANGED</code> per status change.</p>
undeployVtsiProject: {
    path: '/ondewo.vtsi.Projects/UndeployVtsiProject',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_projects_pb.UndeployVtsiProjectRequest,
    responseType: ondewo_vtsi_projects_pb.UndeployVtsiProjectResponse,
    requestSerialize: serialize_ondewo_vtsi_UndeployVtsiProjectRequest,
    requestDeserialize: deserialize_ondewo_vtsi_UndeployVtsiProjectRequest,
    responseSerialize: serialize_ondewo_vtsi_UndeployVtsiProjectResponse,
    responseDeserialize: deserialize_ondewo_vtsi_UndeployVtsiProjectResponse,
  },
  // <p>Lists VTSI projects, filtered, sorted and paged. With authorization enforced, only the projects
// the caller holds a project role on are listed (every project for <code>SERVER_ADMIN</code>), and
// the configuration fields are withheld from a <code>PROJECT_EXECUTOR</code> or
// <code>PROJECT_USER</code> (see the service description); a caller without a usable credential gets an
// empty page.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for a negative <code>page_size</code>, a malformed
// <code>page_token</code>, an unspecified status in <code>statuses</code>, an over-long
// <code>display_name_contains</code>, a <code>created_after</code> that is not before
// <code>created_before</code>, or an unknown <code>field_mask</code> path;
// <code>UNAUTHENTICATED</code> as in the service description.</p>
// <p>Authorization: any project role (<code>PROJECT_USER</code> or higher).</p>
listVtsiProjects: {
    path: '/ondewo.vtsi.Projects/ListVtsiProjects',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_projects_pb.ListVtsiProjectsRequest,
    responseType: ondewo_vtsi_projects_pb.ListVtsiProjectsResponse,
    requestSerialize: serialize_ondewo_vtsi_ListVtsiProjectsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_ListVtsiProjectsRequest,
    responseSerialize: serialize_ondewo_vtsi_ListVtsiProjectsResponse,
    responseDeserialize: deserialize_ondewo_vtsi_ListVtsiProjectsResponse,
  },
};

exports.ProjectsClient = grpc.makeGenericClientConstructor(ProjectsService, 'Projects');
