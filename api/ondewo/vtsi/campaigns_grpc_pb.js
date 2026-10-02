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
var ondewo_vtsi_campaigns_pb = require('../../ondewo/vtsi/campaigns_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var ondewo_sip_sip_pb = require('../../ondewo/sip/sip_pb.js');

function serialize_ondewo_vtsi_Campaign(arg) {
  if (!(arg instanceof ondewo_vtsi_campaigns_pb.Campaign)) {
    throw new Error('Expected argument of type ondewo.vtsi.Campaign');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_Campaign(buffer_arg) {
  return ondewo_vtsi_campaigns_pb.Campaign.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_CampaignStatistics(arg) {
  if (!(arg instanceof ondewo_vtsi_campaigns_pb.CampaignStatistics)) {
    throw new Error('Expected argument of type ondewo.vtsi.CampaignStatistics');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_CampaignStatistics(buffer_arg) {
  return ondewo_vtsi_campaigns_pb.CampaignStatistics.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_CreateCampaignRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_campaigns_pb.CreateCampaignRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.CreateCampaignRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_CreateCampaignRequest(buffer_arg) {
  return ondewo_vtsi_campaigns_pb.CreateCampaignRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeleteCampaignRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_campaigns_pb.DeleteCampaignRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeleteCampaignRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeleteCampaignRequest(buffer_arg) {
  return ondewo_vtsi_campaigns_pb.DeleteCampaignRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeleteCampaignResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_campaigns_pb.DeleteCampaignResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeleteCampaignResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeleteCampaignResponse(buffer_arg) {
  return ondewo_vtsi_campaigns_pb.DeleteCampaignResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetCampaignRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_campaigns_pb.GetCampaignRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetCampaignRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetCampaignRequest(buffer_arg) {
  return ondewo_vtsi_campaigns_pb.GetCampaignRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetCampaignStatisticsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_campaigns_pb.GetCampaignStatisticsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetCampaignStatisticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetCampaignStatisticsRequest(buffer_arg) {
  return ondewo_vtsi_campaigns_pb.GetCampaignStatisticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_HardStopCampaignRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_campaigns_pb.HardStopCampaignRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.HardStopCampaignRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_HardStopCampaignRequest(buffer_arg) {
  return ondewo_vtsi_campaigns_pb.HardStopCampaignRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListCampaignCallsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_campaigns_pb.ListCampaignCallsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListCampaignCallsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListCampaignCallsRequest(buffer_arg) {
  return ondewo_vtsi_campaigns_pb.ListCampaignCallsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListCampaignCallsResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_campaigns_pb.ListCampaignCallsResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListCampaignCallsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListCampaignCallsResponse(buffer_arg) {
  return ondewo_vtsi_campaigns_pb.ListCampaignCallsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListCampaignsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_campaigns_pb.ListCampaignsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListCampaignsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListCampaignsRequest(buffer_arg) {
  return ondewo_vtsi_campaigns_pb.ListCampaignsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListCampaignsResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_campaigns_pb.ListCampaignsResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListCampaignsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListCampaignsResponse(buffer_arg) {
  return ondewo_vtsi_campaigns_pb.ListCampaignsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ResumeCampaignRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_campaigns_pb.ResumeCampaignRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.ResumeCampaignRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ResumeCampaignRequest(buffer_arg) {
  return ondewo_vtsi_campaigns_pb.ResumeCampaignRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StartCampaignRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_campaigns_pb.StartCampaignRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StartCampaignRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StartCampaignRequest(buffer_arg) {
  return ondewo_vtsi_campaigns_pb.StartCampaignRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StopCampaignRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_campaigns_pb.StopCampaignRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StopCampaignRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StopCampaignRequest(buffer_arg) {
  return ondewo_vtsi_campaigns_pb.StopCampaignRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StreamCampaignStatusRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_campaigns_pb.StreamCampaignStatusRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StreamCampaignStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StreamCampaignStatusRequest(buffer_arg) {
  return ondewo_vtsi_campaigns_pb.StreamCampaignStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StreamCampaignStatusResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_campaigns_pb.StreamCampaignStatusResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.StreamCampaignStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StreamCampaignStatusResponse(buffer_arg) {
  return ondewo_vtsi_campaigns_pb.StreamCampaignStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UpdateCampaignRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_campaigns_pb.UpdateCampaignRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.UpdateCampaignRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UpdateCampaignRequest(buffer_arg) {
  return ondewo_vtsi_campaigns_pb.UpdateCampaignRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// <p>ONDEWO VTSI API</p>
// <p>Manages the CAMPAIGNS of a VTSI project. A campaign is a named set of outbound calls that VTSI
// places for the client while keeping at most <code>max_parallel_calls</code> of them running at
// the same time. If 100 callers are added to a campaign with <code>max_parallel_calls = 10</code>,
// at any moment at most 10 of those calls are being set up or are connected; the next one starts
// when one ends.</p>
// <p>Calls are added to a campaign by setting <code>campaign_assignment</code> on
// <a href="index.html#ondewo.vtsi.StartCallersRequest">StartCallersRequest</a> or
// <a href="index.html#ondewo.vtsi.StartScheduledCallersRequest">StartScheduledCallersRequest</a>;
// a scheduled call of a campaign is started at or after its scheduled time AND when the campaign has
// a free slot.</p>
// <p>A call that fails is retried up to <code>max_attempts</code> times in total, waiting
// <code>retry_delay</code> between attempts. A call counts as failed only after its last attempt.
// A failure that cannot succeed by repetition (for example a rejected credential, an invalid
// configuration) is never retried.</p>
// <p>Lifecycle: <code>StartCampaign</code> starts a created campaign; <code>StopCampaign</code> lets
// the ongoing calls finish and starts no new ones; <code>HardStopCampaign</code> ends the ongoing
// calls immediately and starts no new ones; <code>ResumeCampaign</code> continues a stopped or hard
// stopped campaign with the calls that have not finished yet.</p>
// <p>Every RPC about ONE campaign accepts either its resource name or its display name
// (<a href="index.html#ondewo.vtsi.CampaignDisplayName">CampaignDisplayName</a>); display names are
// unique within a project.</p>
// <p>Errors are reported as gRPC status codes: <code>INVALID_ARGUMENT</code> for a malformed name,
// filter, field mask or value; <code>NOT_FOUND</code> for an unknown project, campaign or campaign
// call; <code>ALREADY_EXISTS</code> for a <code>display_name</code> already used in the project;
// <code>FAILED_PRECONDITION</code> for a state that does not allow the operation (each RPC names its
// cases); <code>ABORTED</code> when a concurrent change won, nothing was stored and the request can
// be retried; <code>RESOURCE_EXHAUSTED</code> when the server has no free stream slot.</p>
var CampaignsService = exports.CampaignsService = {
  // ////////////////////////////////////////////////////////////////////////////
// Campaign endpoints
// ////////////////////////////////////////////////////////////////////////////
//
// <p>Creates a campaign in state <code>CAMPAIGN_STATE_CREATED</code>. Calls are added with
// <code>StartCallers</code> / <code>StartScheduledCallers</code>; nothing is dialled before
// <code>StartCampaign</code>.</p>
// <p>Errors: <code>NOT_FOUND</code> if the project does not exist; <code>ALREADY_EXISTS</code> if
// the <code>display_name</code> is used in the project; <code>INVALID_ARGUMENT</code> for an
// output-only field that was set or an out-of-range value.</p>
createCampaign: {
    path: '/ondewo.vtsi.Campaigns/CreateCampaign',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_campaigns_pb.CreateCampaignRequest,
    responseType: ondewo_vtsi_campaigns_pb.Campaign,
    requestSerialize: serialize_ondewo_vtsi_CreateCampaignRequest,
    requestDeserialize: deserialize_ondewo_vtsi_CreateCampaignRequest,
    responseSerialize: serialize_ondewo_vtsi_Campaign,
    responseDeserialize: deserialize_ondewo_vtsi_Campaign,
  },
  // <p>Returns a campaign including its statistics.</p>
// <p>Errors: <code>NOT_FOUND</code>; <code>INVALID_ARGUMENT</code> for a malformed name.</p>
getCampaign: {
    path: '/ondewo.vtsi.Campaigns/GetCampaign',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_campaigns_pb.GetCampaignRequest,
    responseType: ondewo_vtsi_campaigns_pb.Campaign,
    requestSerialize: serialize_ondewo_vtsi_GetCampaignRequest,
    requestDeserialize: deserialize_ondewo_vtsi_GetCampaignRequest,
    responseSerialize: serialize_ondewo_vtsi_Campaign,
    responseDeserialize: deserialize_ondewo_vtsi_Campaign,
  },
  // <p>Updates the fields named in <code>update_mask</code>: <code>display_name</code>,
// <code>max_parallel_calls</code>, <code>max_attempts</code>, <code>retry_delay</code>. Allowed in
// every state. Lowering <code>max_parallel_calls</code> never ends a running call: the campaign
// starts no new call until fewer than the new maximum are running.</p>
// <p>Errors: <code>NOT_FOUND</code>; <code>INVALID_ARGUMENT</code> for an empty mask, an unknown,
// output-only or immutable path, or an out-of-range value; <code>ALREADY_EXISTS</code> for a
// <code>display_name</code> used by another campaign of the project.</p>
updateCampaign: {
    path: '/ondewo.vtsi.Campaigns/UpdateCampaign',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_campaigns_pb.UpdateCampaignRequest,
    responseType: ondewo_vtsi_campaigns_pb.Campaign,
    requestSerialize: serialize_ondewo_vtsi_UpdateCampaignRequest,
    requestDeserialize: deserialize_ondewo_vtsi_UpdateCampaignRequest,
    responseSerialize: serialize_ondewo_vtsi_Campaign,
    responseDeserialize: deserialize_ondewo_vtsi_Campaign,
  },
  // <p>Deletes a campaign and its campaign calls. Its scheduled callers that have not fired yet are
// cancelled. Calls that already ran are not touched and stay visible through
// <code>ListCalls</code>.</p>
// <p>Errors: <code>NOT_FOUND</code>; <code>FAILED_PRECONDITION</code> while the campaign is
// <code>RUNNING</code>, <code>STOPPING</code> or <code>HARD_STOPPING</code> (stop or hard stop it
// first).</p>
deleteCampaign: {
    path: '/ondewo.vtsi.Campaigns/DeleteCampaign',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_campaigns_pb.DeleteCampaignRequest,
    responseType: ondewo_vtsi_campaigns_pb.DeleteCampaignResponse,
    requestSerialize: serialize_ondewo_vtsi_DeleteCampaignRequest,
    requestDeserialize: deserialize_ondewo_vtsi_DeleteCampaignRequest,
    responseSerialize: serialize_ondewo_vtsi_DeleteCampaignResponse,
    responseDeserialize: deserialize_ondewo_vtsi_DeleteCampaignResponse,
  },
  // <p>Lists the campaigns of a project, newest first, filtered and paged, each with its
// statistics.</p>
// <p>Errors: <code>NOT_FOUND</code> if the project does not exist; <code>INVALID_ARGUMENT</code>
// for a negative <code>page_size</code> or a foreign <code>page_token</code>.</p>
listCampaigns: {
    path: '/ondewo.vtsi.Campaigns/ListCampaigns',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_campaigns_pb.ListCampaignsRequest,
    responseType: ondewo_vtsi_campaigns_pb.ListCampaignsResponse,
    requestSerialize: serialize_ondewo_vtsi_ListCampaignsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_ListCampaignsRequest,
    responseSerialize: serialize_ondewo_vtsi_ListCampaignsResponse,
    responseDeserialize: deserialize_ondewo_vtsi_ListCampaignsResponse,
  },
  // <p>Returns the progress of a campaign: how many of its calls are not started, in progress,
// waiting for a retry, completed, failed and cancelled, and how many attempts were made.</p>
// <p>Errors: <code>NOT_FOUND</code>; <code>INVALID_ARGUMENT</code> for a malformed name.</p>
getCampaignStatistics: {
    path: '/ondewo.vtsi.Campaigns/GetCampaignStatistics',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_campaigns_pb.GetCampaignStatisticsRequest,
    responseType: ondewo_vtsi_campaigns_pb.CampaignStatistics,
    requestSerialize: serialize_ondewo_vtsi_GetCampaignStatisticsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_GetCampaignStatisticsRequest,
    responseSerialize: serialize_ondewo_vtsi_CampaignStatistics,
    responseDeserialize: deserialize_ondewo_vtsi_CampaignStatistics,
  },
  // <p>Lists the calls of a campaign in the order they were added, filtered and paged, each with
// its current SIP status, the SIP status description and its attempts.</p>
// <p>Errors: <code>NOT_FOUND</code>; <code>INVALID_ARGUMENT</code> for a negative
// <code>page_size</code> or a foreign <code>page_token</code>.</p>
listCampaignCalls: {
    path: '/ondewo.vtsi.Campaigns/ListCampaignCalls',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_campaigns_pb.ListCampaignCallsRequest,
    responseType: ondewo_vtsi_campaigns_pb.ListCampaignCallsResponse,
    requestSerialize: serialize_ondewo_vtsi_ListCampaignCallsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_ListCampaignCallsRequest,
    responseSerialize: serialize_ondewo_vtsi_ListCampaignCallsResponse,
    responseDeserialize: deserialize_ondewo_vtsi_ListCampaignCallsResponse,
  },
  // <p>Starts a <code>CAMPAIGN_STATE_CREATED</code> campaign. Idempotent on a
// <code>RUNNING</code> campaign.</p>
// <p>Errors: <code>NOT_FOUND</code>; <code>FAILED_PRECONDITION</code> in any other state (use
// <code>ResumeCampaign</code> for a stopped campaign).</p>
startCampaign: {
    path: '/ondewo.vtsi.Campaigns/StartCampaign',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_campaigns_pb.StartCampaignRequest,
    responseType: ondewo_vtsi_campaigns_pb.Campaign,
    requestSerialize: serialize_ondewo_vtsi_StartCampaignRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StartCampaignRequest,
    responseSerialize: serialize_ondewo_vtsi_Campaign,
    responseDeserialize: deserialize_ondewo_vtsi_Campaign,
  },
  // <p>Stops a campaign gracefully: no new call is started, the calls that are running continue
// until they end, then the campaign is <code>CAMPAIGN_STATE_STOPPED</code>. Returns the campaign
// in <code>STOPPING</code> (or already <code>STOPPED</code> when no call was running).
// Idempotent on <code>STOPPING</code>, <code>STOPPED</code>, <code>HARD_STOPPING</code> and
// <code>HARD_STOPPED</code>.</p>
// <p>Errors: <code>NOT_FOUND</code>; <code>FAILED_PRECONDITION</code> on a
// <code>COMPLETED</code> campaign.</p>
stopCampaign: {
    path: '/ondewo.vtsi.Campaigns/StopCampaign',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_campaigns_pb.StopCampaignRequest,
    responseType: ondewo_vtsi_campaigns_pb.Campaign,
    requestSerialize: serialize_ondewo_vtsi_StopCampaignRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StopCampaignRequest,
    responseSerialize: serialize_ondewo_vtsi_Campaign,
    responseDeserialize: deserialize_ondewo_vtsi_Campaign,
  },
  // <p>Stops a campaign immediately: no new call is started and the server hangs up every running
// call of the campaign right away. The campaign stays <code>CAMPAIGN_STATE_HARD_STOPPING</code>
// until the end of each of those calls is CONFIRMED (its call record is no longer active), then
// becomes <code>CAMPAIGN_STATE_HARD_STOPPED</code>; with a reachable call infrastructure this
// takes seconds, scaled by the number of running calls. A hang-up that fails is repeated every
// few seconds, and the campaign does not report <code>HARD_STOPPED</code> while one of its calls
// is still up. Calls ended this way are <code>CAMPAIGN_CALL_STATE_CANCELLED</code>; a call that
// finished on its own before the hard stop keeps its own outcome. Calls not started yet stay
// <code>NOT_STARTED</code> / <code>RETRY_PENDING</code> and run after <code>ResumeCampaign</code>.
// Returns the campaign in <code>HARD_STOPPING</code> (or already <code>HARD_STOPPED</code>).
// Idempotent on <code>HARD_STOPPING</code> and <code>HARD_STOPPED</code>.</p>
// <p>Errors: <code>NOT_FOUND</code>; <code>FAILED_PRECONDITION</code> on a
// <code>COMPLETED</code> campaign.</p>
hardStopCampaign: {
    path: '/ondewo.vtsi.Campaigns/HardStopCampaign',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_campaigns_pb.HardStopCampaignRequest,
    responseType: ondewo_vtsi_campaigns_pb.Campaign,
    requestSerialize: serialize_ondewo_vtsi_HardStopCampaignRequest,
    requestDeserialize: deserialize_ondewo_vtsi_HardStopCampaignRequest,
    responseSerialize: serialize_ondewo_vtsi_Campaign,
    responseDeserialize: deserialize_ondewo_vtsi_Campaign,
  },
  // <p>Resumes a <code>STOPPING</code>, <code>STOPPED</code> or <code>HARD_STOPPED</code>
// campaign: it becomes <code>RUNNING</code> and continues with the calls that are not finished.
// Idempotent on <code>RUNNING</code>.</p>
// <p>Errors: <code>NOT_FOUND</code>; <code>FAILED_PRECONDITION</code> on <code>CREATED</code>
// (use <code>StartCampaign</code>), <code>HARD_STOPPING</code> (wait until it is
// <code>HARD_STOPPED</code>) and <code>COMPLETED</code>.</p>
resumeCampaign: {
    path: '/ondewo.vtsi.Campaigns/ResumeCampaign',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_campaigns_pb.ResumeCampaignRequest,
    responseType: ondewo_vtsi_campaigns_pb.Campaign,
    requestSerialize: serialize_ondewo_vtsi_ResumeCampaignRequest,
    requestDeserialize: deserialize_ondewo_vtsi_ResumeCampaignRequest,
    responseSerialize: serialize_ondewo_vtsi_Campaign,
    responseDeserialize: deserialize_ondewo_vtsi_Campaign,
  },
  // <p>Streams the status and progress of the campaigns of a project. The first message is a
// snapshot (<code>snapshot = true</code>) of every matching campaign; every later message
// carries only the campaigns (and, with <code>include_calls</code>, the campaign calls) that
// changed. An empty message is sent as a keep-alive. The stream ends when the client
// disconnects or the server-side maximum stream duration is reached
// (<code>end_reason</code> set on the last message).</p>
// <p>Errors: <code>NOT_FOUND</code> if the project does not exist; <code>RESOURCE_EXHAUSTED</code>
// when the server has no free stream slot.</p>
streamCampaignStatus: {
    path: '/ondewo.vtsi.Campaigns/StreamCampaignStatus',
    requestStream: false,
    responseStream: true,
    requestType: ondewo_vtsi_campaigns_pb.StreamCampaignStatusRequest,
    responseType: ondewo_vtsi_campaigns_pb.StreamCampaignStatusResponse,
    requestSerialize: serialize_ondewo_vtsi_StreamCampaignStatusRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StreamCampaignStatusRequest,
    responseSerialize: serialize_ondewo_vtsi_StreamCampaignStatusResponse,
    responseDeserialize: deserialize_ondewo_vtsi_StreamCampaignStatusResponse,
  },
};

exports.CampaignsClient = grpc.makeGenericClientConstructor(CampaignsService, 'Campaigns');
