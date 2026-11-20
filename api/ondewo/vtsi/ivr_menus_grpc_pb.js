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
var ondewo_vtsi_ivr_menus_pb = require('../../ondewo/vtsi/ivr_menus_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var ondewo_vtsi_calls_pb = require('../../ondewo/vtsi/calls_pb.js');
var ondewo_vtsi_campaigns_pb = require('../../ondewo/vtsi/campaigns_pb.js');

function serialize_ondewo_vtsi_CloneIvrMenuRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_ivr_menus_pb.CloneIvrMenuRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.CloneIvrMenuRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_CloneIvrMenuRequest(buffer_arg) {
  return ondewo_vtsi_ivr_menus_pb.CloneIvrMenuRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_CreateIvrMenuRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_ivr_menus_pb.CreateIvrMenuRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.CreateIvrMenuRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_CreateIvrMenuRequest(buffer_arg) {
  return ondewo_vtsi_ivr_menus_pb.CreateIvrMenuRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeleteIvrMenuRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeleteIvrMenuRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeleteIvrMenuRequest(buffer_arg) {
  return ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeleteIvrMenuResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeleteIvrMenuResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeleteIvrMenuResponse(buffer_arg) {
  return ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetIvrMenuDialplanRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetIvrMenuDialplanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetIvrMenuDialplanRequest(buffer_arg) {
  return ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetIvrMenuDialplanResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetIvrMenuDialplanResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetIvrMenuDialplanResponse(buffer_arg) {
  return ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetIvrMenuRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_ivr_menus_pb.GetIvrMenuRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetIvrMenuRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetIvrMenuRequest(buffer_arg) {
  return ondewo_vtsi_ivr_menus_pb.GetIvrMenuRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetIvrMenuTestRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_ivr_menus_pb.GetIvrMenuTestRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetIvrMenuTestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetIvrMenuTestRequest(buffer_arg) {
  return ondewo_vtsi_ivr_menus_pb.GetIvrMenuTestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_IvrMenu(arg) {
  if (!(arg instanceof ondewo_vtsi_ivr_menus_pb.IvrMenu)) {
    throw new Error('Expected argument of type ondewo.vtsi.IvrMenu');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_IvrMenu(buffer_arg) {
  return ondewo_vtsi_ivr_menus_pb.IvrMenu.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_IvrMenuTest(arg) {
  if (!(arg instanceof ondewo_vtsi_ivr_menus_pb.IvrMenuTest)) {
    throw new Error('Expected argument of type ondewo.vtsi.IvrMenuTest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_IvrMenuTest(buffer_arg) {
  return ondewo_vtsi_ivr_menus_pb.IvrMenuTest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListIvrMenuRevisionsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListIvrMenuRevisionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListIvrMenuRevisionsRequest(buffer_arg) {
  return ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListIvrMenuRevisionsResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListIvrMenuRevisionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListIvrMenuRevisionsResponse(buffer_arg) {
  return ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListIvrMenusRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_ivr_menus_pb.ListIvrMenusRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListIvrMenusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListIvrMenusRequest(buffer_arg) {
  return ondewo_vtsi_ivr_menus_pb.ListIvrMenusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListIvrMenusResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_ivr_menus_pb.ListIvrMenusResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListIvrMenusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListIvrMenusResponse(buffer_arg) {
  return ondewo_vtsi_ivr_menus_pb.ListIvrMenusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_PublishIvrMenuRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_ivr_menus_pb.PublishIvrMenuRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.PublishIvrMenuRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_PublishIvrMenuRequest(buffer_arg) {
  return ondewo_vtsi_ivr_menus_pb.PublishIvrMenuRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_TestIvrMenuRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_ivr_menus_pb.TestIvrMenuRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.TestIvrMenuRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_TestIvrMenuRequest(buffer_arg) {
  return ondewo_vtsi_ivr_menus_pb.TestIvrMenuRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UpdateIvrMenuRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_ivr_menus_pb.UpdateIvrMenuRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.UpdateIvrMenuRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UpdateIvrMenuRequest(buffer_arg) {
  return ondewo_vtsi_ivr_menus_pb.UpdateIvrMenuRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ValidateIvrMenuRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.ValidateIvrMenuRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ValidateIvrMenuRequest(buffer_arg) {
  return ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ValidateIvrMenuResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.ValidateIvrMenuResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ValidateIvrMenuResponse(buffer_arg) {
  return ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// <p>ONDEWO VTSI API</p>
// <p>Manages the IVR MENUS of a VTSI project: keypad (DTMF) menus that a caller dialling one of the project&apos;s
// inbound phone numbers goes through BEFORE a bot or a person takes the call (&quot;press 1 for sales, 2 for
// billing&quot;). A menu is a graph of nodes (<code>IvrNode</code>): MENU (a prompt and one key), PLAY (a prompt),
// SCHEDULE (opening hours), ROUTE (to a listener, the listener queue, a softphone account or a phone number),
// GOTO_MENU (into another menu of the project) and HANGUP. The project&apos;s Asterisk executes a menu as generated
// dialplan: a menu keeps running while VTSI is down, and no user text ever reaches the dialplan.</p>
// <p>Lifecycle: <code>CreateIvrMenu</code> / <code>UpdateIvrMenu</code> save a DRAFT revision (every save is
// validated; <code>ValidateIvrMenu</code> returns every issue at once). Nothing routes until
// <code>PublishIvrMenu</code> renders a revision into the project&apos;s Asterisk and switches the menu&apos;s
// <code>inbound_phone_numbers</code> to it; a failed publish leaves the previous published revision live. A caller
// inside a menu during a publish finishes on the revision they entered. <code>TestIvrMenu</code> runs a scripted
// test call through the published revision inside the Asterisk, and <code>GetIvrMenuTest</code> reports it.</p>
// <p>A bot reached through a menu learns the path: the headers <code>X-ondewo-ivr-menu</code> (the menu&apos;s
// display name, sanitized), <code>X-ondewo-ivr-path</code> (the option labels taken, e.g.
// <code>main:1&gt;billing:2</code>) and <code>X-ondewo-dialed-number</code> become parameters of the bot&apos;s
// SIP context, and the call records them in <code>Call.ivr_menu_display_name</code> / <code>Call.ivr_path</code>,
// and the menu&apos;s resource name in <code>Call.ivr_menu_name</code>.
// Labels therefore must never carry a secret.</p>
// <p>Deployment switch: with <code>ONDEWO_VTSI_IVR_ACTIVE=false</code> (the default) every RPC of this service
// answers <code>UNIMPLEMENTED</code> with <code>reason=ivr-disabled</code>. <code>VtsiProject.ivr_menus_enabled</code>
// switches the routes of one project off, and <code>VtsiProject.feature_availability.ivr</code> says whether a project
// can use IVR menus at all (a project whose Asterisk is not run by this server cannot: Publish is refused with
// <code>FAILED_PRECONDITION</code> <code>reason=asterisk-not-local</code>).</p>
// <p>Limits: <code>ONDEWO_VTSI_IVR_MAX_NODES</code> nodes per menu (100),
// <code>ONDEWO_VTSI_IVR_MAX_MENUS_PER_PROJECT</code> menus (50), <code>ONDEWO_VTSI_IVR_MAX_PROMPT_BYTES</code> per uploaded prompt (1048576),
// <code>ONDEWO_VTSI_IVR_MAX_PROMPTS_TOTAL_BYTES</code> per menu (52428800), <code>ONDEWO_VTSI_IVR_MAX_HOPS</code> node
// entries per call across menus (50; the call is then hung up).</p>
// <p>Every RPC about ONE menu accepts its resource name; Get and Delete also accept its display name, unique within a
// project and resolved within <code>vtsi_project_name</code>, which is then REQUIRED.</p>
// <p>Authorization (Keycloak auth mode <code>ENFORCE</code>, as Campaigns): <code>PROJECT_DEVELOPER</code> or higher
// for Create, Update, Delete, Publish, Clone and Test; <code>PROJECT_EXECUTOR</code> or higher for Get, List,
// Validate, ListRevisions, GetDialplan and GetIvrMenuTest. Every change emits its <code>VTSI_EVENT_IVR_MENU_*</code>
// event; a request with <code>validate_only</code> emits nothing.</p>
var IvrMenusService = exports.IvrMenusService = {
  // <p>Creates an IVR menu as a DRAFT (revision 1). Nothing routes until it is published.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> with the code and path of the FIRST error issue (see
// <code>IvrMenuIssue</code>; <code>ValidateIvrMenu</code> returns all of them), a set output-only field, or a
// malformed <code>idempotency_key</code>; <code>ALREADY_EXISTS</code> for a display name the project already has;
// <code>RESOURCE_EXHAUSTED</code> beyond <code>ONDEWO_VTSI_IVR_MAX_MENUS_PER_PROJECT</code>;
// <code>NOT_FOUND</code> for an unknown project.</p>
createIvrMenu: {
    path: '/ondewo.vtsi.IvrMenus/CreateIvrMenu',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_ivr_menus_pb.CreateIvrMenuRequest,
    responseType: ondewo_vtsi_ivr_menus_pb.IvrMenu,
    requestSerialize: serialize_ondewo_vtsi_CreateIvrMenuRequest,
    requestDeserialize: deserialize_ondewo_vtsi_CreateIvrMenuRequest,
    responseSerialize: serialize_ondewo_vtsi_IvrMenu,
    responseDeserialize: deserialize_ondewo_vtsi_IvrMenu,
  },
  // <p>Returns an IVR menu at its current revision.</p>
getIvrMenu: {
    path: '/ondewo.vtsi.IvrMenus/GetIvrMenu',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_ivr_menus_pb.GetIvrMenuRequest,
    responseType: ondewo_vtsi_ivr_menus_pb.IvrMenu,
    requestSerialize: serialize_ondewo_vtsi_GetIvrMenuRequest,
    requestDeserialize: deserialize_ondewo_vtsi_GetIvrMenuRequest,
    responseSerialize: serialize_ondewo_vtsi_IvrMenu,
    responseDeserialize: deserialize_ondewo_vtsi_IvrMenu,
  },
  // <p>Updates the fields named in <code>update_mask</code> and saves a new DRAFT revision (+1) when a graph field
// changed. <code>layout</code> alone is saved without a new revision.</p>
// <p>Errors: as <code>CreateIvrMenu</code>, plus <code>ABORTED</code> <code>reason=revision-mismatch</code> when
// <code>expected_revision</code> is set and not the current revision.</p>
updateIvrMenu: {
    path: '/ondewo.vtsi.IvrMenus/UpdateIvrMenu',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_ivr_menus_pb.UpdateIvrMenuRequest,
    responseType: ondewo_vtsi_ivr_menus_pb.IvrMenu,
    requestSerialize: serialize_ondewo_vtsi_UpdateIvrMenuRequest,
    requestDeserialize: deserialize_ondewo_vtsi_UpdateIvrMenuRequest,
    responseSerialize: serialize_ondewo_vtsi_IvrMenu,
    responseDeserialize: deserialize_ondewo_vtsi_IvrMenu,
  },
  // <p>Deletes an IVR menu and all its revisions; its bound phone numbers fall back to the project&apos;s routing
// without a menu at once.</p>
// <p>Errors: <code>FAILED_PRECONDITION</code> <code>reason=menu-published</code> for a PUBLISHED menu with bound
// phone numbers unless <code>force</code>; <code>FAILED_PRECONDITION</code> <code>reason=menu-referenced</code>
// while a GOTO_MENU node of another menu names it; <code>NOT_FOUND</code> for an unknown menu.</p>
deleteIvrMenu: {
    path: '/ondewo.vtsi.IvrMenus/DeleteIvrMenu',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuRequest,
    responseType: ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuResponse,
    requestSerialize: serialize_ondewo_vtsi_DeleteIvrMenuRequest,
    requestDeserialize: deserialize_ondewo_vtsi_DeleteIvrMenuRequest,
    responseSerialize: serialize_ondewo_vtsi_DeleteIvrMenuResponse,
    responseDeserialize: deserialize_ondewo_vtsi_DeleteIvrMenuResponse,
  },
  // <p>Lists the IVR menus of a project.</p>
listIvrMenus: {
    path: '/ondewo.vtsi.IvrMenus/ListIvrMenus',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_ivr_menus_pb.ListIvrMenusRequest,
    responseType: ondewo_vtsi_ivr_menus_pb.ListIvrMenusResponse,
    requestSerialize: serialize_ondewo_vtsi_ListIvrMenusRequest,
    requestDeserialize: deserialize_ondewo_vtsi_ListIvrMenusRequest,
    responseSerialize: serialize_ondewo_vtsi_ListIvrMenusResponse,
    responseDeserialize: deserialize_ondewo_vtsi_ListIvrMenusResponse,
  },
  // <p>Runs every check of Create, Update and Publish on the given draft and returns ALL issues with their node
// paths. Writes nothing and emits nothing.</p>
validateIvrMenu: {
    path: '/ondewo.vtsi.IvrMenus/ValidateIvrMenu',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuRequest,
    responseType: ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuResponse,
    requestSerialize: serialize_ondewo_vtsi_ValidateIvrMenuRequest,
    requestDeserialize: deserialize_ondewo_vtsi_ValidateIvrMenuRequest,
    responseSerialize: serialize_ondewo_vtsi_ValidateIvrMenuResponse,
    responseDeserialize: deserialize_ondewo_vtsi_ValidateIvrMenuResponse,
  },
  // <p>Renders the given (or the current) revision into the project&apos;s Asterisk: prompts synthesized or copied,
// the dialplan reloaded and read back, every prompt checked, and only then the bound phone numbers switched to
// it. Any failure restores the previous dialplan, leaves the previous published revision live and answers the
// menu with <code>IVR_MENU_STATE_PUBLISH_FAILED</code> and <code>state_message</code>. Re-validates first,
// because the allowlist, the softphone accounts or the listeners may have changed since the save. Binding or
// unbinding a phone number ends no call.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for an error issue; <code>ABORTED</code>
// <code>reason=revision-mismatch</code> for a revision that is not current; <code>FAILED_PRECONDITION</code>
// <code>reason=asterisk-not-local</code>, <code>reason=project-not-deployed</code> or
// <code>reason=ivr-entry-hook-missing</code> (a project whose own dialplan lacks the IVR entry hook);
// <code>FAILED_PRECONDITION</code> <code>reason=target-menu-not-published</code> when a GOTO_MENU node names a
// menu that is not published.</p>
publishIvrMenu: {
    path: '/ondewo.vtsi.IvrMenus/PublishIvrMenu',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_ivr_menus_pb.PublishIvrMenuRequest,
    responseType: ondewo_vtsi_ivr_menus_pb.IvrMenu,
    requestSerialize: serialize_ondewo_vtsi_PublishIvrMenuRequest,
    requestDeserialize: deserialize_ondewo_vtsi_PublishIvrMenuRequest,
    responseSerialize: serialize_ondewo_vtsi_IvrMenu,
    responseDeserialize: deserialize_ondewo_vtsi_IvrMenu,
  },
  // <p>Copies a menu (its current or a given revision) into a new DRAFT menu without phone numbers.</p>
cloneIvrMenu: {
    path: '/ondewo.vtsi.IvrMenus/CloneIvrMenu',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_ivr_menus_pb.CloneIvrMenuRequest,
    responseType: ondewo_vtsi_ivr_menus_pb.IvrMenu,
    requestSerialize: serialize_ondewo_vtsi_CloneIvrMenuRequest,
    requestDeserialize: deserialize_ondewo_vtsi_CloneIvrMenuRequest,
    responseSerialize: serialize_ondewo_vtsi_IvrMenu,
    responseDeserialize: deserialize_ondewo_vtsi_IvrMenu,
  },
  // <p>Lists the saved revisions of a menu, newest first.</p>
listIvrMenuRevisions: {
    path: '/ondewo.vtsi.IvrMenus/ListIvrMenuRevisions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsRequest,
    responseType: ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsResponse,
    requestSerialize: serialize_ondewo_vtsi_ListIvrMenuRevisionsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_ListIvrMenuRevisionsRequest,
    responseSerialize: serialize_ondewo_vtsi_ListIvrMenuRevisionsResponse,
    responseDeserialize: deserialize_ondewo_vtsi_ListIvrMenuRevisionsResponse,
  },
  // <p>Starts a test call through the PUBLISHED revision of a menu and returns at once with the test in
// <code>IVR_MENU_TEST_STATE_RUNNING</code>; poll <code>GetIvrMenuTest</code> for the result. The test call runs
// INSIDE the project&apos;s Asterisk: a local channel enters the menu, presses the scripted keys and records the
// nodes it passes. No SIP container, no bot and no NLU session take part, and every ROUTE node is a stub that
// records the target and hangs up: a test NEVER dials a listener, a softphone or a phone number.</p>
// <p>Errors: <code>FAILED_PRECONDITION</code> <code>reason=menu-not-published</code>,
// <code>reason=asterisk-not-local</code> or <code>reason=project-not-deployed</code>;
// <code>INVALID_ARGUMENT</code> for invalid steps or a <code>max_duration_s</code> above
// <code>ONDEWO_VTSI_IVR_TEST_MAX_DURATION_S</code>.</p>
testIvrMenu: {
    path: '/ondewo.vtsi.IvrMenus/TestIvrMenu',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_ivr_menus_pb.TestIvrMenuRequest,
    responseType: ondewo_vtsi_ivr_menus_pb.IvrMenuTest,
    requestSerialize: serialize_ondewo_vtsi_TestIvrMenuRequest,
    requestDeserialize: deserialize_ondewo_vtsi_TestIvrMenuRequest,
    responseSerialize: serialize_ondewo_vtsi_IvrMenuTest,
    responseDeserialize: deserialize_ondewo_vtsi_IvrMenuTest,
  },
  // <p>Returns a test started by <code>TestIvrMenu</code>: its state and the path traversed so far. A test is kept
// for 24 hours after it finished, then <code>NOT_FOUND</code>.</p>
getIvrMenuTest: {
    path: '/ondewo.vtsi.IvrMenus/GetIvrMenuTest',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_ivr_menus_pb.GetIvrMenuTestRequest,
    responseType: ondewo_vtsi_ivr_menus_pb.IvrMenuTest,
    requestSerialize: serialize_ondewo_vtsi_GetIvrMenuTestRequest,
    requestDeserialize: deserialize_ondewo_vtsi_GetIvrMenuTestRequest,
    responseSerialize: serialize_ondewo_vtsi_IvrMenuTest,
    responseDeserialize: deserialize_ondewo_vtsi_IvrMenuTest,
  },
  // <p>Returns the rendered dialplan of one revision, read-only, for support.</p>
// <p>Errors: <code>FAILED_PRECONDITION</code> <code>reason=revision-not-rendered</code> for a revision that is no
// longer (or was never) in the project&apos;s Asterisk.</p>
getIvrMenuDialplan: {
    path: '/ondewo.vtsi.IvrMenus/GetIvrMenuDialplan',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanRequest,
    responseType: ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanResponse,
    requestSerialize: serialize_ondewo_vtsi_GetIvrMenuDialplanRequest,
    requestDeserialize: deserialize_ondewo_vtsi_GetIvrMenuDialplanRequest,
    responseSerialize: serialize_ondewo_vtsi_GetIvrMenuDialplanResponse,
    responseDeserialize: deserialize_ondewo_vtsi_GetIvrMenuDialplanResponse,
  },
};

exports.IvrMenusClient = grpc.makeGenericClientConstructor(IvrMenusService, 'IvrMenus');
