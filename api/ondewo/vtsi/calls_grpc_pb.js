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
var ondewo_vtsi_calls_pb = require('../../ondewo/vtsi/calls_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var ondewo_nlu_intent_pb = require('../../ondewo/nlu/intent_pb.js');
var ondewo_sip_sip_pb = require('../../ondewo/sip/sip_pb.js');
var ondewo_vtsi_call_configs_pb = require('../../ondewo/vtsi/call_configs_pb.js');
var ondewo_vtsi_campaigns_pb = require('../../ondewo/vtsi/campaigns_pb.js');
var ondewo_vtsi_projects_pb = require('../../ondewo/vtsi/projects_pb.js');

function serialize_ondewo_vtsi_AddCallersToCampaignRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.AddCallersToCampaignRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.AddCallersToCampaignRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_AddCallersToCampaignRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.AddCallersToCampaignRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_AddCallersToCampaignResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.AddCallersToCampaignResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.AddCallersToCampaignResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_AddCallersToCampaignResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.AddCallersToCampaignResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_AddScheduledCallersToCampaignRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.AddScheduledCallersToCampaignRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_AddScheduledCallersToCampaignRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_AddScheduledCallersToCampaignResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.AddScheduledCallersToCampaignResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_AddScheduledCallersToCampaignResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_Call(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.Call)) {
    throw new Error('Expected argument of type ondewo.vtsi.Call');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_Call(buffer_arg) {
  return ondewo_vtsi_calls_pb.Call.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_CallStatistics(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.CallStatistics)) {
    throw new Error('Expected argument of type ondewo.vtsi.CallStatistics');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_CallStatistics(buffer_arg) {
  return ondewo_vtsi_calls_pb.CallStatistics.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_Caller(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.Caller)) {
    throw new Error('Expected argument of type ondewo.vtsi.Caller');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_Caller(buffer_arg) {
  return ondewo_vtsi_calls_pb.Caller.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_CancelScheduledCallerRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.CancelScheduledCallerRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.CancelScheduledCallerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_CancelScheduledCallerRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.CancelScheduledCallerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_CancelScheduledCallerResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.CancelScheduledCallerResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.CancelScheduledCallerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_CancelScheduledCallerResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.CancelScheduledCallerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_CancelScheduledCallersRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.CancelScheduledCallersRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.CancelScheduledCallersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_CancelScheduledCallersRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.CancelScheduledCallersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_CancelScheduledCallersResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.CancelScheduledCallersResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.CancelScheduledCallersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_CancelScheduledCallersResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.CancelScheduledCallersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeleteCallerRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.DeleteCallerRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeleteCallerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeleteCallerRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.DeleteCallerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeleteCallerResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.DeleteCallerResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeleteCallerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeleteCallerResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.DeleteCallerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeleteCallersRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.DeleteCallersRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeleteCallersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeleteCallersRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.DeleteCallersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeleteCallersResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.DeleteCallersResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeleteCallersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeleteCallersResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.DeleteCallersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeleteListenerRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.DeleteListenerRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeleteListenerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeleteListenerRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.DeleteListenerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeleteListenerResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.DeleteListenerResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeleteListenerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeleteListenerResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.DeleteListenerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeleteListenersRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.DeleteListenersRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeleteListenersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeleteListenersRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.DeleteListenersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeleteListenersResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.DeleteListenersResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeleteListenersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeleteListenersResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.DeleteListenersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetCallRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.GetCallRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetCallRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetCallRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.GetCallRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetCallStatisticsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.GetCallStatisticsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetCallStatisticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetCallStatisticsRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.GetCallStatisticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetCallerRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.GetCallerRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetCallerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetCallerRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.GetCallerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetListenerRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.GetListenerRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetListenerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetListenerRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.GetListenerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetScheduledCallerRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.GetScheduledCallerRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetScheduledCallerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetScheduledCallerRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.GetScheduledCallerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_InviteToCallRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.InviteToCallRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.InviteToCallRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_InviteToCallRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.InviteToCallRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_InviteToCallResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.InviteToCallResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.InviteToCallResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_InviteToCallResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.InviteToCallResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListCallersRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.ListCallersRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListCallersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListCallersRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.ListCallersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListCallersResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.ListCallersResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListCallersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListCallersResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.ListCallersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListCallsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.ListCallsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListCallsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListCallsRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.ListCallsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListCallsResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.ListCallsResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListCallsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListCallsResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.ListCallsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListListenersRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.ListListenersRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListListenersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListListenersRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.ListListenersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListListenersResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.ListListenersResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListListenersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListListenersResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.ListListenersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListScheduledCallersRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.ListScheduledCallersRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListScheduledCallersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListScheduledCallersRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.ListScheduledCallersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListScheduledCallersResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.ListScheduledCallersResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListScheduledCallersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListScheduledCallersResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.ListScheduledCallersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListenCallAudioRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.ListenCallAudioRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListenCallAudioRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListenCallAudioRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.ListenCallAudioRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_Listener(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.Listener)) {
    throw new Error('Expected argument of type ondewo.vtsi.Listener');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_Listener(buffer_arg) {
  return ondewo_vtsi_calls_pb.Listener.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_RemoveCallParticipantRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.RemoveCallParticipantRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.RemoveCallParticipantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_RemoveCallParticipantRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.RemoveCallParticipantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_RemoveCallParticipantResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.RemoveCallParticipantResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.RemoveCallParticipantResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_RemoveCallParticipantResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.RemoveCallParticipantResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_RetryScheduledCallerRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.RetryScheduledCallerRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.RetryScheduledCallerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_RetryScheduledCallerRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.RetryScheduledCallerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ScheduledCaller(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.ScheduledCaller)) {
    throw new Error('Expected argument of type ondewo.vtsi.ScheduledCaller');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ScheduledCaller(buffer_arg) {
  return ondewo_vtsi_calls_pb.ScheduledCaller.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_SetCallMediaControlRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.SetCallMediaControlRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.SetCallMediaControlRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_SetCallMediaControlRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.SetCallMediaControlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_SetCallMediaControlResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.SetCallMediaControlResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.SetCallMediaControlResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_SetCallMediaControlResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.SetCallMediaControlResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StartCallerRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StartCallerRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StartCallerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StartCallerRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.StartCallerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StartCallerResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StartCallerResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.StartCallerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StartCallerResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.StartCallerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StartCallersRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StartCallersRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StartCallersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StartCallersRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.StartCallersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StartCallersResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StartCallersResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.StartCallersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StartCallersResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.StartCallersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StartListenerRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StartListenerRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StartListenerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StartListenerRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.StartListenerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StartListenerResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StartListenerResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.StartListenerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StartListenerResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.StartListenerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StartListenersRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StartListenersRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StartListenersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StartListenersRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.StartListenersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StartListenersResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StartListenersResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.StartListenersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StartListenersResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.StartListenersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StartScheduledCallerRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StartScheduledCallerRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StartScheduledCallerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StartScheduledCallerRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.StartScheduledCallerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StartScheduledCallerResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StartScheduledCallerResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.StartScheduledCallerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StartScheduledCallerResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.StartScheduledCallerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StartScheduledCallersRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StartScheduledCallersRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StartScheduledCallersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StartScheduledCallersRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.StartScheduledCallersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StartScheduledCallersResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StartScheduledCallersResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.StartScheduledCallersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StartScheduledCallersResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.StartScheduledCallersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StopAllCallsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StopAllCallsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StopAllCallsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StopAllCallsRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.StopAllCallsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StopCallRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StopCallRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StopCallRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StopCallRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.StopCallRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StopCallResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StopCallResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.StopCallResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StopCallResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.StopCallResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StopCallerRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StopCallerRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StopCallerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StopCallerRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.StopCallerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StopCallerResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StopCallerResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.StopCallerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StopCallerResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.StopCallerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StopCallersRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StopCallersRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StopCallersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StopCallersRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.StopCallersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StopCallersResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StopCallersResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.StopCallersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StopCallersResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.StopCallersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StopCallsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StopCallsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StopCallsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StopCallsRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.StopCallsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StopCallsResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StopCallsResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.StopCallsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StopCallsResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.StopCallsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StopListenerRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StopListenerRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StopListenerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StopListenerRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.StopListenerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StopListenerResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StopListenerResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.StopListenerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StopListenerResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.StopListenerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StopListenersRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StopListenersRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StopListenersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StopListenersRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.StopListenersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StopListenersResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StopListenersResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.StopListenersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StopListenersResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.StopListenersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StreamCallAudioRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StreamCallAudioRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StreamCallAudioRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StreamCallAudioRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.StreamCallAudioRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StreamCallAudioResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StreamCallAudioResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.StreamCallAudioResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StreamCallAudioResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.StreamCallAudioResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StreamCallResourceStatusResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.StreamCallResourceStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StreamCallResourceStatusResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StreamCallerStatusRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StreamCallerStatusRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StreamCallerStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StreamCallerStatusRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.StreamCallerStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StreamListenerStatusRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StreamListenerStatusRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StreamListenerStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StreamListenerStatusRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.StreamListenerStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StreamScheduledCallerStatusRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.StreamScheduledCallerStatusRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StreamScheduledCallerStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StreamScheduledCallerStatusRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.StreamScheduledCallerStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_TransferCallRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.TransferCallRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.TransferCallRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_TransferCallRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.TransferCallRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_TransferCallResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.TransferCallResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.TransferCallResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_TransferCallResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.TransferCallResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_TransferCallsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.TransferCallsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.TransferCallsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_TransferCallsRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.TransferCallsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_TransferCallsResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.TransferCallsResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.TransferCallsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_TransferCallsResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.TransferCallsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UpdateCallRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.UpdateCallRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.UpdateCallRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UpdateCallRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.UpdateCallRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UpdateCallResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.UpdateCallResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.UpdateCallResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UpdateCallResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.UpdateCallResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UpdateCallerRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.UpdateCallerRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.UpdateCallerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UpdateCallerRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.UpdateCallerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UpdateCallerResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.UpdateCallerResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.UpdateCallerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UpdateCallerResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.UpdateCallerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UpdateCallersRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.UpdateCallersRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.UpdateCallersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UpdateCallersRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.UpdateCallersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UpdateCallersResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.UpdateCallersResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.UpdateCallersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UpdateCallersResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.UpdateCallersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UpdateCallsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.UpdateCallsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.UpdateCallsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UpdateCallsRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.UpdateCallsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UpdateCallsResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.UpdateCallsResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.UpdateCallsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UpdateCallsResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.UpdateCallsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UpdateListenerRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.UpdateListenerRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.UpdateListenerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UpdateListenerRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.UpdateListenerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UpdateListenerResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.UpdateListenerResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.UpdateListenerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UpdateListenerResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.UpdateListenerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UpdateListenersRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.UpdateListenersRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.UpdateListenersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UpdateListenersRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.UpdateListenersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UpdateListenersResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.UpdateListenersResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.UpdateListenersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UpdateListenersResponse(buffer_arg) {
  return ondewo_vtsi_calls_pb.UpdateListenersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UpdateScheduledCallerRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_calls_pb.UpdateScheduledCallerRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.UpdateScheduledCallerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UpdateScheduledCallerRequest(buffer_arg) {
  return ondewo_vtsi_calls_pb.UpdateScheduledCallerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// <p>ONDEWO VTSI API</p>
var CallsService = exports.CallsService = {
  // ////////////////////////////////////////////////////////////////////////////
// Caller and Listener endpoints
// ////////////////////////////////////////////////////////////////////////////
//
// <p>Starts one caller in a VTSI project: an ondewo-sip container that places one outbound call to
// <code>sip_caller_config.callee_id</code> (or a pooled caller of the server&apos;s caller pool that runs the same
// configuration). The configuration is validated first, including live checks against the upstream services;
// nothing is started when it fails. Not idempotent: every successful request places a new call (send it as a
// batch of one with an <code>idempotency_key</code> to make it idempotent). <code>validate_only</code> runs the
// validation alone.</p>
// <p>Errors are gRPC status codes: <code>INVALID_ARGUMENT</code> for a malformed or invalid request or
// configuration (also when the NLU credentials are refused) or an unknown <code>field_mask</code> path;
// <code>NOT_FOUND</code> for an unknown project; <code>FAILED_PRECONDITION</code> when an upstream config lacks
// the required TLS certificate (<code>UPSTREAM_TLS_REQUIRED</code>) or the project is not deployed;
// <code>RESOURCE_EXHAUSTED</code> when the project reached its caller limit; <code>UNAVAILABLE</code> when an
// upstream service could not be reached; with authorization enforced <code>PERMISSION_DENIED</code>.</p>
// <p>Events: <code>VTSI_EVENT_CALLER_STARTED</code> or <code>VTSI_EVENT_CALLER_START_FAILED</code>, then the
// events of the call (<code>VTSI_EVENT_CALL_*</code>). None with <code>validate_only</code>.</p>
// <p>Authorization: <code>PROJECT_EXECUTOR</code> or higher on the project.</p>
startCaller: {
    path: '/ondewo.vtsi.Calls/StartCaller',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.StartCallerRequest,
    responseType: ondewo_vtsi_calls_pb.StartCallerResponse,
    requestSerialize: serialize_ondewo_vtsi_StartCallerRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StartCallerRequest,
    responseSerialize: serialize_ondewo_vtsi_StartCallerResponse,
    responseDeserialize: deserialize_ondewo_vtsi_StartCallerResponse,
  },
  // <p>Starts several callers, each like <code>StartCaller</code>. Not atomic: every caller is started on its own;
// a caller that fails to start is rolled back and has no entry in the response, which accounts for it in
// <code>StartCallersResponse.error_message</code>. The project&apos;s caller limit is checked for the batch as a
// whole before anything is started (<code>RESOURCE_EXHAUSTED</code>, nothing started). Idempotent per
// <code>idempotency_key</code>.</p>
// <p>Authorization: as <code>StartCaller</code>.</p>
startCallers: {
    path: '/ondewo.vtsi.Calls/StartCallers',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.StartCallersRequest,
    responseType: ondewo_vtsi_calls_pb.StartCallersResponse,
    requestSerialize: serialize_ondewo_vtsi_StartCallersRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StartCallersRequest,
    responseSerialize: serialize_ondewo_vtsi_StartCallersResponse,
    responseDeserialize: deserialize_ondewo_vtsi_StartCallersResponse,
  },
  // <p>Lists the callers of a VTSI project, ordered by the caller&apos;s uuid (the last segment of
// <code>name</code>), ascending: a stable order, not a chronological one. Paged with <code>page_size</code> /
// <code>page_token</code>; <code>total_size</code> counts every match.</p>
// <p>With <code>campaign_name</code> or <code>campaign_display_name</code> set, lists only the callers of that
// campaign: the callers that placed at least one attempt of one of its campaign calls (see
// <code>ListCallersRequest.campaign_name</code>). <code>active_only</code> and <code>sip_status_types</code>
// narrow the listing further.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for a malformed request, an invalid selector, a negative
// <code>page_size</code>, a <code>page_token</code> of another listing or an unknown <code>field_mask</code>
// path; <code>NOT_FOUND</code> for an unknown project or campaign; with authorization enforced
// <code>PERMISSION_DENIED</code>.</p>
// <p>Authorization: <code>PROJECT_EXECUTOR</code> or higher on the project.</p>
listCallers: {
    path: '/ondewo.vtsi.Calls/ListCallers',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.ListCallersRequest,
    responseType: ondewo_vtsi_calls_pb.ListCallersResponse,
    requestSerialize: serialize_ondewo_vtsi_ListCallersRequest,
    requestDeserialize: deserialize_ondewo_vtsi_ListCallersRequest,
    responseSerialize: serialize_ondewo_vtsi_ListCallersResponse,
    responseDeserialize: deserialize_ondewo_vtsi_ListCallersResponse,
  },
  // <p>Gets a caller, populated according to <code>call_view</code> and <code>field_mask</code>.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for a malformed name or an unknown <code>field_mask</code> path;
// <code>NOT_FOUND</code> for an unknown project or caller, or a caller of another project; with authorization
// enforced <code>PERMISSION_DENIED</code>.</p>
// <p>Authorization: <code>PROJECT_EXECUTOR</code> or higher on the project.</p>
getCaller: {
    path: '/ondewo.vtsi.Calls/GetCaller',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.GetCallerRequest,
    responseType: ondewo_vtsi_calls_pb.Caller,
    requestSerialize: serialize_ondewo_vtsi_GetCallerRequest,
    requestDeserialize: deserialize_ondewo_vtsi_GetCallerRequest,
    responseSerialize: serialize_ondewo_vtsi_Caller,
    responseDeserialize: deserialize_ondewo_vtsi_Caller,
  },
  // <p>Updates the STORED configuration of a caller: the fields named in <code>update_mask</code>, i.e.
// <code>sip_caller_config</code> and <code>common_services_config</code> or any nested sub-path of them.
// Allowed whether or not the caller has a call running.</p>
// <p>A running call and its container are NEVER changed: nothing is restarted, redeployed or reconfigured,
// and the call goes on with the configuration its container was deployed with.</p>
// <p>When the stored configuration takes effect: a caller is ONE call (every <code>StartCaller</code> creates
// a new caller carrying its own configuration, and no RPC redeploys an existing one), so for a caller that
// is not pooled the update changes ONLY the stored and returned configuration and never any present or
// future call. The one case in which the server deploys a container from a caller&apos;s stored
// configuration is a POOLED (persistent) caller, which the server keeps warm between calls: when the server
// recycles the pooled callers of a project onto its Asterisk (an <code>UpdateVtsiProject</code> of a
// deployed project, the recovery after the project&apos;s Asterisk restarted, a change of the project&apos;s
// TLS trust anchor), the pooled caller it starts in place of this one is deployed from the stored, i.e.
// updated, configuration. An in-place restart of a pooled caller&apos;s container (the call monitor&apos;s
// health recovery) keeps the configuration the container was deployed with. Until it is recycled, an idle
// pooled caller is matched to later <code>StartCaller</code> requests by the configuration its container
// RUNS, never by an updated stored configuration it does not run.</p>
// <p>Updating a caller never changes a campaign: the attempts of a campaign call take their configuration
// from the campaign and the campaign call, never from a <code>Caller</code>.</p>
// <p>A STOPPED caller (its call ended and its configuration was released) has no stored configuration left:
// the update starts from an empty one, so it must state a complete configuration
// (<code>sip_caller_config</code> and <code>common_services_config</code>), and a partial one is refused as a
// configuration a <code>StartCallerRequest</code> would be refused for. Nothing is deployed.</p>
// <p>Credentials follow their endpoint: an update that MOVES an upstream (the <code>host</code>,
// <code>port</code> or <code>grpc_cert</code> of the NLU, S2T or T2S <code>*_base_config</code>, or the
// <code>host</code> / ports of <code>csi_vtsi_config.message_broker_config.rabbit_mq_config</code>) must
// also write every credential path of that upstream that holds a stored value -- the NLU
// <code>credentials</code>, <code>auth_token</code>, <code>http_basic_auth_token</code> and
// <code>contexts</code>, the S2T <code>s2t_transcribe_request_config</code>, the T2S
// <code>t2s_request_config</code>, the RabbitMQ <code>user</code> and <code>password</code> -- named itself
// or by a shorter path, with the values to use. A stored credential is never sent to an endpoint the request
// moved without restating it, also not for the live validation of the result.</p>
// <p>Errors are gRPC status codes: <code>INVALID_ARGUMENT</code> for a malformed <code>caller.name</code>,
// an empty <code>update_mask</code>, an unknown, output-only or immutable <code>update_mask</code> path, an
// update that moves an upstream without restating its stored credentials (naming the paths to add), a
// resulting configuration that a <code>StartCallerRequest</code> carrying it would be refused for, or an
// unknown <code>field_mask</code> path (each naming the path or field); <code>NOT_FOUND</code> for an
// unknown caller or project; <code>ABORTED</code> when concurrent updates kept changing the caller, or while
// an update, deploy or undeploy of its project is still running (an update waits for it, for a bounded time,
// so that a recycle of the project cannot lose it), nothing being written (retry the request); with
// authorization enforced <code>PERMISSION_DENIED</code> for a project the caller holds no role on.</p>
// <p>Events: <code>VTSI_EVENT_CALLER_UPDATED</code> (none with <code>validate_only</code>).</p>
// <p>Authorization: the role that may start and stop callers of the project (<code>PROJECT_EXECUTOR</code>
// or higher).</p>
updateCaller: {
    path: '/ondewo.vtsi.Calls/UpdateCaller',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.UpdateCallerRequest,
    responseType: ondewo_vtsi_calls_pb.UpdateCallerResponse,
    requestSerialize: serialize_ondewo_vtsi_UpdateCallerRequest,
    requestDeserialize: deserialize_ondewo_vtsi_UpdateCallerRequest,
    responseSerialize: serialize_ondewo_vtsi_UpdateCallerResponse,
    responseDeserialize: deserialize_ondewo_vtsi_UpdateCallerResponse,
  },
  // <p>Updates several callers, each like <code>UpdateCaller</code>. Not atomic: every entry is applied on its
// own and reported in <code>UpdateCallersResponse.update_caller_responses</code>, in request order; an entry
// that fails changes nothing and does not stop the others. Errors of the request as a whole (see
// <code>UpdateCallersRequest</code>) are gRPC status codes, and then no entry is applied.</p>
// <p>Authorization: as <code>UpdateCaller</code>.</p>
updateCallers: {
    path: '/ondewo.vtsi.Calls/UpdateCallers',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.UpdateCallersRequest,
    responseType: ondewo_vtsi_calls_pb.UpdateCallersResponse,
    requestSerialize: serialize_ondewo_vtsi_UpdateCallersRequest,
    requestDeserialize: deserialize_ondewo_vtsi_UpdateCallersRequest,
    responseSerialize: serialize_ondewo_vtsi_UpdateCallersResponse,
    responseDeserialize: deserialize_ondewo_vtsi_UpdateCallersResponse,
  },
  // <p>Deletes a caller: stops it if it still runs (hanging up its call) and removes it, so it is no longer
// listed or returned. Its call records (and their participants) are deleted with it and are no longer returned
// by <code>GetCall</code> / <code>ListCalls</code>; stop it instead to keep them.</p>
// <p>Errors are gRPC status codes: <code>INVALID_ARGUMENT</code> for a malformed name or an unknown
// <code>field_mask</code> path; <code>NOT_FOUND</code> for an unknown caller, a caller of another project, or a
// caller that was already deleted (so deleting is NOT idempotent: a repeat answers <code>NOT_FOUND</code>);
// with authorization enforced <code>PERMISSION_DENIED</code>.</p>
// <p>Events: <code>VTSI_EVENT_CALLER_DELETED</code> (and <code>VTSI_EVENT_CALL_STOPPED</code> for a call that
// was hung up).</p>
// <p>Authorization: <code>PROJECT_EXECUTOR</code> or higher on the project.</p>
deleteCaller: {
    path: '/ondewo.vtsi.Calls/DeleteCaller',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.DeleteCallerRequest,
    responseType: ondewo_vtsi_calls_pb.DeleteCallerResponse,
    requestSerialize: serialize_ondewo_vtsi_DeleteCallerRequest,
    requestDeserialize: deserialize_ondewo_vtsi_DeleteCallerRequest,
    responseSerialize: serialize_ondewo_vtsi_DeleteCallerResponse,
    responseDeserialize: deserialize_ondewo_vtsi_DeleteCallerResponse,
  },
  // <p>Deletes several callers, each like <code>DeleteCaller</code>. Not atomic: every caller is deleted on its own
// and reported in its own entry, whose <code>error_message</code> carries the gRPC status code name
// <code>DeleteCaller</code> would have answered (e.g. <code>NOT_FOUND: ...</code>); an entry that fails does not
// stop the others. The request as a whole is refused, nothing being deleted, for no entry or more than 1000
// distinct names, and, when <code>vtsi_project_name</code> is set, as described there.</p>
// <p>Authorization: as <code>DeleteCaller</code>.</p>
deleteCallers: {
    path: '/ondewo.vtsi.Calls/DeleteCallers',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.DeleteCallersRequest,
    responseType: ondewo_vtsi_calls_pb.DeleteCallersResponse,
    requestSerialize: serialize_ondewo_vtsi_DeleteCallersRequest,
    requestDeserialize: deserialize_ondewo_vtsi_DeleteCallersRequest,
    responseSerialize: serialize_ondewo_vtsi_DeleteCallersResponse,
    responseDeserialize: deserialize_ondewo_vtsi_DeleteCallersResponse,
  },
  // <p>Stops a caller: hangs up its call if one is up and releases its container and SIP account. The caller
// stays listed (with <code>active = false</code>) until it is deleted, and its stored configuration stays
// updatable (see <code>UpdateCaller</code>). A pooled caller is taken out of the pool.</p>
// <p>Errors are gRPC status codes: <code>INVALID_ARGUMENT</code> for a malformed name or an unknown
// <code>field_mask</code> path; <code>NOT_FOUND</code> for an unknown caller, a caller of another project, or a
// caller that is already stopped (so stopping is NOT idempotent: a repeat answers <code>NOT_FOUND</code>); with
// authorization enforced <code>PERMISSION_DENIED</code>.</p>
// <p>Events: <code>VTSI_EVENT_CALLER_STOPPED</code> (and <code>VTSI_EVENT_CALL_STOPPED</code> for a call that
// was hung up).</p>
// <p>Authorization: <code>PROJECT_EXECUTOR</code> or higher on the project.</p>
stopCaller: {
    path: '/ondewo.vtsi.Calls/StopCaller',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.StopCallerRequest,
    responseType: ondewo_vtsi_calls_pb.StopCallerResponse,
    requestSerialize: serialize_ondewo_vtsi_StopCallerRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StopCallerRequest,
    responseSerialize: serialize_ondewo_vtsi_StopCallerResponse,
    responseDeserialize: deserialize_ondewo_vtsi_StopCallerResponse,
  },
  // <p>Stops several callers, each like <code>StopCaller</code>, with the per-entry results and the request-level
// errors of <code>DeleteCallers</code>.</p>
// <p>Authorization: as <code>StopCaller</code>.</p>
stopCallers: {
    path: '/ondewo.vtsi.Calls/StopCallers',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.StopCallersRequest,
    responseType: ondewo_vtsi_calls_pb.StopCallersResponse,
    requestSerialize: serialize_ondewo_vtsi_StopCallersRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StopCallersRequest,
    responseSerialize: serialize_ondewo_vtsi_StopCallersResponse,
    responseDeserialize: deserialize_ondewo_vtsi_StopCallersResponse,
  },
  // <p>Starts one listener in a VTSI project: an ondewo-sip container registered on the project&apos;s Asterisk
// that answers inbound calls, one after the other (persistent). Validation, <code>validate_only</code>, errors
// (<code>RESOURCE_EXHAUSTED</code> for the project&apos;s listener limit) and idempotency as for
// <code>StartCaller</code>.</p>
// <p>Events: <code>VTSI_EVENT_LISTENER_STARTED</code> or <code>VTSI_EVENT_LISTENER_START_FAILED</code>. None with
// <code>validate_only</code>.</p>
// <p>Authorization: <code>PROJECT_EXECUTOR</code> or higher on the project.</p>
startListener: {
    path: '/ondewo.vtsi.Calls/StartListener',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.StartListenerRequest,
    responseType: ondewo_vtsi_calls_pb.StartListenerResponse,
    requestSerialize: serialize_ondewo_vtsi_StartListenerRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StartListenerRequest,
    responseSerialize: serialize_ondewo_vtsi_StartListenerResponse,
    responseDeserialize: deserialize_ondewo_vtsi_StartListenerResponse,
  },
  // <p>Starts several listeners, each like <code>StartListener</code>, with the batch semantics of
// <code>StartCallers</code> (a listener that fails to start has no entry and is accounted for in
// <code>StartListenersResponse.error_message</code>).</p>
// <p>Authorization: as <code>StartListener</code>.</p>
startListeners: {
    path: '/ondewo.vtsi.Calls/StartListeners',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.StartListenersRequest,
    responseType: ondewo_vtsi_calls_pb.StartListenersResponse,
    requestSerialize: serialize_ondewo_vtsi_StartListenersRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StartListenersRequest,
    responseSerialize: serialize_ondewo_vtsi_StartListenersResponse,
    responseDeserialize: deserialize_ondewo_vtsi_StartListenersResponse,
  },
  // <p>Stops a listener: hangs up its call if one is up and releases its container and SIP account. A stopped
// listener has no stored configuration left (see <code>UpdateListener</code>). Errors and idempotency as for
// <code>StopCaller</code> (a listener that is already stopped is <code>NOT_FOUND</code>).</p>
// <p>Events: <code>VTSI_EVENT_LISTENER_STOPPED</code> (and <code>VTSI_EVENT_CALL_STOPPED</code> for a call that
// was hung up).</p>
// <p>Authorization: <code>PROJECT_EXECUTOR</code> or higher on the project.</p>
stopListener: {
    path: '/ondewo.vtsi.Calls/StopListener',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.StopListenerRequest,
    responseType: ondewo_vtsi_calls_pb.StopListenerResponse,
    requestSerialize: serialize_ondewo_vtsi_StopListenerRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StopListenerRequest,
    responseSerialize: serialize_ondewo_vtsi_StopListenerResponse,
    responseDeserialize: deserialize_ondewo_vtsi_StopListenerResponse,
  },
  // <p>Stops several listeners, each like <code>StopListener</code>, with the per-entry results and the
// request-level errors of <code>DeleteCallers</code>.</p>
// <p>Authorization: as <code>StopListener</code>.</p>
stopListeners: {
    path: '/ondewo.vtsi.Calls/StopListeners',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.StopListenersRequest,
    responseType: ondewo_vtsi_calls_pb.StopListenersResponse,
    requestSerialize: serialize_ondewo_vtsi_StopListenersRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StopListenersRequest,
    responseSerialize: serialize_ondewo_vtsi_StopListenersResponse,
    responseDeserialize: deserialize_ondewo_vtsi_StopListenersResponse,
  },
  // <p>Lists the listeners of a VTSI project, ordered by the listener&apos;s uuid (the last segment of
// <code>name</code>), ascending. Paging, <code>total_size</code>, filters and errors as for
// <code>ListCallers</code> (without a campaign selector).</p>
// <p>Authorization: <code>PROJECT_EXECUTOR</code> or higher on the project.</p>
listListeners: {
    path: '/ondewo.vtsi.Calls/ListListeners',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.ListListenersRequest,
    responseType: ondewo_vtsi_calls_pb.ListListenersResponse,
    requestSerialize: serialize_ondewo_vtsi_ListListenersRequest,
    requestDeserialize: deserialize_ondewo_vtsi_ListListenersRequest,
    responseSerialize: serialize_ondewo_vtsi_ListListenersResponse,
    responseDeserialize: deserialize_ondewo_vtsi_ListListenersResponse,
  },
  // <p>Gets a listener, populated according to <code>call_view</code> and <code>field_mask</code>. Errors as for
// <code>GetCaller</code>.</p>
// <p>Authorization: <code>PROJECT_EXECUTOR</code> or higher on the project.</p>
getListener: {
    path: '/ondewo.vtsi.Calls/GetListener',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.GetListenerRequest,
    responseType: ondewo_vtsi_calls_pb.Listener,
    requestSerialize: serialize_ondewo_vtsi_GetListenerRequest,
    requestDeserialize: deserialize_ondewo_vtsi_GetListenerRequest,
    responseSerialize: serialize_ondewo_vtsi_Listener,
    responseDeserialize: deserialize_ondewo_vtsi_Listener,
  },
  // <p>Updates the STORED configuration of a listener: the fields named in <code>update_mask</code>, i.e.
// <code>sip_base_config</code> and <code>common_services_config</code> or any nested sub-path of them.
// Allowed whether or not the listener&apos;s container is running or has a call, as long as the listener is
// DEPLOYED: a stopped listener has no stored configuration (it is deployed again only by a
// <code>StartListener</code> carrying a complete one) and is <code>NOT_FOUND</code>, unlike a stopped caller,
// which <code>UpdateCaller</code> accepts with a complete configuration.</p>
// <p>A running container and every call it takes are NEVER changed: nothing is restarted, redeployed or
// reconfigured, and the running container answers its calls with the configuration it was deployed with
// until it is replaced.</p>
// <p>When the stored configuration takes effect: only when the server RECREATES the listener from it, i.e.
// when it recycles the listeners of the project onto its Asterisk: an <code>UpdateVtsiProject</code> of a
// deployed project, the recovery after the project&apos;s Asterisk restarted, or a change of the
// project&apos;s TLS trust anchor. The listener the server starts in place of this one is deployed from the
// stored, i.e. updated, configuration. An in-place restart of the listener&apos;s container (the
// server&apos;s restore of listener containers when it starts, the call monitor&apos;s restart of an
// unhealthy container, a <code>docker restart</code>) keeps the configuration the container was deployed
// with. A listener that is never recycled keeps the update only as its stored (and returned)
// configuration.</p>
// <p>Errors as for <code>UpdateCaller</code> (the credential rule included), with
// <code>StartListenerRequest</code> as the validation of the resulting configuration, and
// <code>NOT_FOUND</code> also for a stopped listener.</p>
// <p>Events: <code>VTSI_EVENT_LISTENER_UPDATED</code> (none with <code>validate_only</code>).</p>
// <p>Authorization: the role that may start and stop listeners of the project (<code>PROJECT_EXECUTOR</code>
// or higher).</p>
updateListener: {
    path: '/ondewo.vtsi.Calls/UpdateListener',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.UpdateListenerRequest,
    responseType: ondewo_vtsi_calls_pb.UpdateListenerResponse,
    requestSerialize: serialize_ondewo_vtsi_UpdateListenerRequest,
    requestDeserialize: deserialize_ondewo_vtsi_UpdateListenerRequest,
    responseSerialize: serialize_ondewo_vtsi_UpdateListenerResponse,
    responseDeserialize: deserialize_ondewo_vtsi_UpdateListenerResponse,
  },
  // <p>Updates several listeners, each like <code>UpdateListener</code>, with the per-entry results and the
// request-level errors of <code>UpdateCallers</code>.</p>
// <p>Authorization: as <code>UpdateListener</code>.</p>
updateListeners: {
    path: '/ondewo.vtsi.Calls/UpdateListeners',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.UpdateListenersRequest,
    responseType: ondewo_vtsi_calls_pb.UpdateListenersResponse,
    requestSerialize: serialize_ondewo_vtsi_UpdateListenersRequest,
    requestDeserialize: deserialize_ondewo_vtsi_UpdateListenersRequest,
    responseSerialize: serialize_ondewo_vtsi_UpdateListenersResponse,
    responseDeserialize: deserialize_ondewo_vtsi_UpdateListenersResponse,
  },
  // <p>Deletes a listener: stops it if it still runs (hanging up its call) and removes it, with its call
// records, like <code>DeleteCaller</code>. Errors and idempotency as for <code>DeleteCaller</code> (a repeat
// answers <code>NOT_FOUND</code>).</p>
// <p>Events: <code>VTSI_EVENT_LISTENER_DELETED</code> (and <code>VTSI_EVENT_CALL_STOPPED</code> for a call that
// was hung up).</p>
// <p>Authorization: <code>PROJECT_EXECUTOR</code> or higher on the project.</p>
deleteListener: {
    path: '/ondewo.vtsi.Calls/DeleteListener',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.DeleteListenerRequest,
    responseType: ondewo_vtsi_calls_pb.DeleteListenerResponse,
    requestSerialize: serialize_ondewo_vtsi_DeleteListenerRequest,
    requestDeserialize: deserialize_ondewo_vtsi_DeleteListenerRequest,
    responseSerialize: serialize_ondewo_vtsi_DeleteListenerResponse,
    responseDeserialize: deserialize_ondewo_vtsi_DeleteListenerResponse,
  },
  // <p>Deletes several listeners, each like <code>DeleteListener</code>, with the per-entry results and the
// request-level errors of <code>DeleteCallers</code>.</p>
// <p>Authorization: as <code>DeleteListener</code>.</p>
deleteListeners: {
    path: '/ondewo.vtsi.Calls/DeleteListeners',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.DeleteListenersRequest,
    responseType: ondewo_vtsi_calls_pb.DeleteListenersResponse,
    requestSerialize: serialize_ondewo_vtsi_DeleteListenersRequest,
    requestDeserialize: deserialize_ondewo_vtsi_DeleteListenersRequest,
    responseSerialize: serialize_ondewo_vtsi_DeleteListenersResponse,
    responseDeserialize: deserialize_ondewo_vtsi_DeleteListenersResponse,
  },
  // <p>Creates a scheduled caller: a caller that the server starts at or after <code>scheduled_time</code>, like a
// <code>StartCaller</code> of the stored request. The request is checked structurally now; the live checks of
// the configuration run when it fires, and a failure then leaves the scheduled caller
// <code>SCHEDULED_CALLER_STATUS_FAILED</code> with its <code>error_message</code>. A <code>scheduled_time</code> in
// the past is due at once. Not idempotent (use <code>StartScheduledCallers</code> with an
// <code>idempotency_key</code>).</p>
// <p>Errors are gRPC status codes: <code>INVALID_ARGUMENT</code> for a malformed request, a missing
// <code>scheduled_time</code>, a nested request with its own <code>field_mask</code> or
// <code>validate_only</code>, or an unknown <code>field_mask</code> path; <code>NOT_FOUND</code> for an unknown
// project; <code>RESOURCE_EXHAUSTED</code> when the project reached its caller limit; with authorization
// enforced <code>PERMISSION_DENIED</code>.</p>
// <p>Events: <code>VTSI_EVENT_SCHEDULED_CALLER_CREATED</code>; later <code>VTSI_EVENT_SCHEDULED_CALLER_FIRED</code>,
// <code>VTSI_EVENT_SCHEDULED_CALLER_RETRY_SCHEDULED</code> or <code>VTSI_EVENT_SCHEDULED_CALLER_FAILED</code>.</p>
// <p>Authorization: <code>PROJECT_EXECUTOR</code> or higher on the project.</p>
startScheduledCaller: {
    path: '/ondewo.vtsi.Calls/StartScheduledCaller',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.StartScheduledCallerRequest,
    responseType: ondewo_vtsi_calls_pb.StartScheduledCallerResponse,
    requestSerialize: serialize_ondewo_vtsi_StartScheduledCallerRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StartScheduledCallerRequest,
    responseSerialize: serialize_ondewo_vtsi_StartScheduledCallerResponse,
    responseDeserialize: deserialize_ondewo_vtsi_StartScheduledCallerResponse,
  },
  // <p>Creates several scheduled callers, each like <code>StartScheduledCaller</code>, at most 1000. Not atomic: an
// entry that fails is reported in its own <code>error_message</code> and does not stop the others. Idempotent
// per <code>idempotency_key</code>.</p>
// <p>Authorization: as <code>StartScheduledCaller</code>.</p>
startScheduledCallers: {
    path: '/ondewo.vtsi.Calls/StartScheduledCallers',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.StartScheduledCallersRequest,
    responseType: ondewo_vtsi_calls_pb.StartScheduledCallersResponse,
    requestSerialize: serialize_ondewo_vtsi_StartScheduledCallersRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StartScheduledCallersRequest,
    responseSerialize: serialize_ondewo_vtsi_StartScheduledCallersResponse,
    responseDeserialize: deserialize_ondewo_vtsi_StartScheduledCallersResponse,
  },
  // <p>Adds callers to a campaign instead of starting them. The campaign then starts them, at most
// <code>max_parallel_calls</code> at a time. The request is atomic: either the campaign (when new), every
// campaign call is stored, or nothing is. Errors are gRPC status codes (see <code>CampaignAssignment</code>).</p>
// <p>Rolling updates: a VTSI server that predates this RPC answers <code>UNIMPLEMENTED</code> and starts
// nothing. Do not fall back to <code>StartCallers</code> on <code>UNIMPLEMENTED</code>; retry later.</p>
addCallersToCampaign: {
    path: '/ondewo.vtsi.Calls/AddCallersToCampaign',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.AddCallersToCampaignRequest,
    responseType: ondewo_vtsi_calls_pb.AddCallersToCampaignResponse,
    requestSerialize: serialize_ondewo_vtsi_AddCallersToCampaignRequest,
    requestDeserialize: deserialize_ondewo_vtsi_AddCallersToCampaignRequest,
    responseSerialize: serialize_ondewo_vtsi_AddCallersToCampaignResponse,
    responseDeserialize: deserialize_ondewo_vtsi_AddCallersToCampaignResponse,
  },
  // <p>Adds scheduled callers to a campaign: each fires at or after its scheduled time AND when the campaign has a
// free slot, and follows the campaign&apos;s retries, stop and hard stop. Same atomicity, errors and rolling-update
// behaviour as <code>AddCallersToCampaign</code>.</p>
addScheduledCallersToCampaign: {
    path: '/ondewo.vtsi.Calls/AddScheduledCallersToCampaign',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignRequest,
    responseType: ondewo_vtsi_calls_pb.AddScheduledCallersToCampaignResponse,
    requestSerialize: serialize_ondewo_vtsi_AddScheduledCallersToCampaignRequest,
    requestDeserialize: deserialize_ondewo_vtsi_AddScheduledCallersToCampaignRequest,
    responseSerialize: serialize_ondewo_vtsi_AddScheduledCallersToCampaignResponse,
    responseDeserialize: deserialize_ondewo_vtsi_AddScheduledCallersToCampaignResponse,
  },
  // <p>Gets a scheduled caller, populated according to <code>call_view</code> and <code>field_mask</code>.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for a malformed name or an unknown <code>field_mask</code> path;
// <code>NOT_FOUND</code> for an unknown project or scheduled caller, or one of another project; with
// authorization enforced <code>PERMISSION_DENIED</code>.</p>
// <p>Authorization: <code>PROJECT_EXECUTOR</code> or higher on the project.</p>
getScheduledCaller: {
    path: '/ondewo.vtsi.Calls/GetScheduledCaller',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.GetScheduledCallerRequest,
    responseType: ondewo_vtsi_calls_pb.ScheduledCaller,
    requestSerialize: serialize_ondewo_vtsi_GetScheduledCallerRequest,
    requestDeserialize: deserialize_ondewo_vtsi_GetScheduledCallerRequest,
    responseSerialize: serialize_ondewo_vtsi_ScheduledCaller,
    responseDeserialize: deserialize_ondewo_vtsi_ScheduledCaller,
  },
  // <p>Lists the scheduled callers of a VTSI project, ordered by <code>scheduled_time</code>, oldest first,
// optionally narrowed by state, campaign and a <code>scheduled_time</code> window. Paging,
// <code>total_size</code> and errors as for <code>ListCallers</code>.</p>
// <p>Authorization: <code>PROJECT_EXECUTOR</code> or higher on the project.</p>
listScheduledCallers: {
    path: '/ondewo.vtsi.Calls/ListScheduledCallers',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.ListScheduledCallersRequest,
    responseType: ondewo_vtsi_calls_pb.ListScheduledCallersResponse,
    requestSerialize: serialize_ondewo_vtsi_ListScheduledCallersRequest,
    requestDeserialize: deserialize_ondewo_vtsi_ListScheduledCallersRequest,
    responseSerialize: serialize_ondewo_vtsi_ListScheduledCallersResponse,
    responseDeserialize: deserialize_ondewo_vtsi_ListScheduledCallersResponse,
  },
  // <p>Changes the <code>scheduled_time</code> and/or the <code>sip_caller_config.sip_headers</code> of a scheduled
// caller that has not fired yet; the only updatable <code>update_mask</code> paths (see
// <code>UpdateScheduledCallerRequest.update_mask</code>). Allowed only while the status is
// <code>SCHEDULED_CALLER_STATUS_PENDING</code>; for a scheduled caller of a campaign only while its campaign call
// is <code>CAMPAIGN_CALL_STATE_NOT_STARTED</code> (a retry of a campaign call is timed by the campaign&apos;s
// <code>retry_delay</code>). The check and the write are one atomic step, so a scheduled caller that fires
// concurrently is either updated before it fires or refused. Updating to the stored values is accepted and
// changes nothing.</p>
// <p>Errors are gRPC status codes: <code>INVALID_ARGUMENT</code> for a malformed name, an empty
// <code>update_mask</code>, a path that is not updatable, an unset <code>scheduled_time</code> named by the
// mask, invalid <code>sip_headers</code>, or an unknown <code>field_mask</code> path (each naming the path);
// <code>NOT_FOUND</code> for an unknown project or scheduled caller, or one of another project;
// <code>FAILED_PRECONDITION</code> when it is no longer PENDING (<code>reason=not-pending</code>) or its campaign
// call has started (<code>reason=campaign-call-started</code>); with authorization enforced
// <code>PERMISSION_DENIED</code>.</p>
// <p>Events: <code>VTSI_EVENT_SCHEDULED_CALLER_UPDATED</code> when something changed.</p>
// <p>Authorization: <code>PROJECT_EXECUTOR</code> or higher on the project.</p>
updateScheduledCaller: {
    path: '/ondewo.vtsi.Calls/UpdateScheduledCaller',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.UpdateScheduledCallerRequest,
    responseType: ondewo_vtsi_calls_pb.ScheduledCaller,
    requestSerialize: serialize_ondewo_vtsi_UpdateScheduledCallerRequest,
    requestDeserialize: deserialize_ondewo_vtsi_UpdateScheduledCallerRequest,
    responseSerialize: serialize_ondewo_vtsi_ScheduledCaller,
    responseDeserialize: deserialize_ondewo_vtsi_ScheduledCaller,
  },
  // <p>Cancels a scheduled caller that has not fired yet: a PENDING scheduled caller becomes
// <code>SCHEDULED_CALLER_STATUS_CANCELLED</code> and never fires. A scheduled caller that is no longer PENDING
// (firing, done, failed or already cancelled) is not an error: the response says <code>cancelled = false</code>
// and carries its current <code>status</code>, so cancelling is idempotent.</p>
// <p>A scheduled caller of a campaign can be cancelled while its campaign call is
// <code>CAMPAIGN_CALL_STATE_NOT_STARTED</code> or <code>CAMPAIGN_CALL_STATE_RETRY_PENDING</code>;
// the campaign call then becomes <code>CAMPAIGN_CALL_STATE_CANCELLED</code>. While an attempt is
// <code>DISPATCHING</code> or <code>IN_PROGRESS</code> the request is refused:
// <code>cancelled = false</code>, an <code>error_message</code> saying why, and the scheduled caller keeps its
// status.</p>
// <p>Errors are gRPC status codes: <code>INVALID_ARGUMENT</code> for a malformed name or an unknown
// <code>field_mask</code> path; <code>NOT_FOUND</code> for an unknown project or scheduled caller, or one of
// another project; with authorization enforced <code>PERMISSION_DENIED</code>.</p>
// <p>Events: <code>VTSI_EVENT_SCHEDULED_CALLER_CANCELLED</code>, only when <code>cancelled = true</code>.</p>
// <p>Authorization: <code>PROJECT_EXECUTOR</code> or higher on the project.</p>
cancelScheduledCaller: {
    path: '/ondewo.vtsi.Calls/CancelScheduledCaller',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.CancelScheduledCallerRequest,
    responseType: ondewo_vtsi_calls_pb.CancelScheduledCallerResponse,
    requestSerialize: serialize_ondewo_vtsi_CancelScheduledCallerRequest,
    requestDeserialize: deserialize_ondewo_vtsi_CancelScheduledCallerRequest,
    responseSerialize: serialize_ondewo_vtsi_CancelScheduledCallerResponse,
    responseDeserialize: deserialize_ondewo_vtsi_CancelScheduledCallerResponse,
  },
  // <p>Cancels several scheduled callers, each like <code>CancelScheduledCaller</code>, at most 1000. Not atomic:
// every entry is applied on its own and reported in <code>CancelScheduledCallersResponse</code>, in request
// order; a failed entry carries an <code>error_message</code> prefixed with the gRPC status code name
// <code>CancelScheduledCaller</code> would have answered (e.g. <code>NOT_FOUND: ...</code>) and does not stop
// the others. Errors of the request as a whole (see <code>CancelScheduledCallersRequest</code>) are gRPC status
// codes, and then nothing is cancelled.</p>
// <p>Events: one <code>VTSI_EVENT_SCHEDULED_CALLER_CANCELLED</code> per entry with <code>cancelled = true</code>.</p>
// <p>Authorization: as <code>CancelScheduledCaller</code>.</p>
cancelScheduledCallers: {
    path: '/ondewo.vtsi.Calls/CancelScheduledCallers',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.CancelScheduledCallersRequest,
    responseType: ondewo_vtsi_calls_pb.CancelScheduledCallersResponse,
    requestSerialize: serialize_ondewo_vtsi_CancelScheduledCallersRequest,
    requestDeserialize: deserialize_ondewo_vtsi_CancelScheduledCallersRequest,
    responseSerialize: serialize_ondewo_vtsi_CancelScheduledCallersResponse,
    responseDeserialize: deserialize_ondewo_vtsi_CancelScheduledCallersResponse,
  },
  // <p>Retries a FAILED scheduled caller by creating a NEW scheduled caller from its stored request: the same
// <code>sip_caller_config</code> and <code>common_services_config</code>, <code>status = PENDING</code>, the
// <code>scheduled_time</code> of the request (unset: now), and <code>retry_of_scheduled_caller_name</code> naming
// the failed one, whose <code>retried_by_scheduled_caller_name</code> is set to the new one in the same atomic
// step. The failed scheduled caller itself is not changed otherwise, so its <code>error_message</code> and
// <code>fired_at</code> stay as the history of the failed attempt. Returns the new scheduled caller.</p>
// <p>Idempotency: a FAILED scheduled caller is retried at most once. A repeat of the request answers
// <code>ALREADY_EXISTS</code> naming the retry in its message (read
// <code>retried_by_scheduled_caller_name</code>); to retry again after the retry failed too, retry the new
// one.</p>
// <p>Errors are gRPC status codes: <code>INVALID_ARGUMENT</code> for a malformed name or an unknown
// <code>field_mask</code> path; <code>NOT_FOUND</code> for an unknown project or scheduled caller, or one of
// another project; <code>FAILED_PRECONDITION</code> for a scheduled caller that is not
// <code>SCHEDULED_CALLER_STATUS_FAILED</code> (<code>reason=not-failed</code>) or that belongs to a campaign
// (<code>reason=campaign-scheduled-caller</code>: a campaign call is retried by the campaign&apos;s
// <code>max_attempts</code>); <code>ALREADY_EXISTS</code> when it was already retried;
// <code>RESOURCE_EXHAUSTED</code> when the project reached its caller limit; with authorization enforced
// <code>PERMISSION_DENIED</code>.</p>
// <p>Events: <code>VTSI_EVENT_SCHEDULED_CALLER_CREATED</code> for the new scheduled caller.</p>
// <p>Authorization: <code>PROJECT_EXECUTOR</code> or higher on the project.</p>
retryScheduledCaller: {
    path: '/ondewo.vtsi.Calls/RetryScheduledCaller',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.RetryScheduledCallerRequest,
    responseType: ondewo_vtsi_calls_pb.ScheduledCaller,
    requestSerialize: serialize_ondewo_vtsi_RetryScheduledCallerRequest,
    requestDeserialize: deserialize_ondewo_vtsi_RetryScheduledCallerRequest,
    responseSerialize: serialize_ondewo_vtsi_ScheduledCaller,
    responseDeserialize: deserialize_ondewo_vtsi_ScheduledCaller,
  },
  // <p>Stops a call: hangs it up if it is still active and stops (releases) the listener or caller that serves
// it, like <code>StopCaller</code> / <code>StopListener</code>. A call that already ended is not an error: its
// listener or caller is still released if it is deployed, and when there was nothing left to release the
// response carries <code>error_message = Call ... was not released</code>, so a repeat succeeds with that
// message.</p>
// <p>Errors are gRPC status codes: <code>INVALID_ARGUMENT</code> for a malformed request or an unknown
// <code>field_mask</code> path; <code>NOT_FOUND</code> for an unknown project or call, or a call of another
// project; with authorization enforced <code>PERMISSION_DENIED</code>.</p>
// <p>Events: <code>VTSI_EVENT_CALL_STOPPED</code>, and <code>VTSI_EVENT_CALLER_STOPPED</code> /
// <code>VTSI_EVENT_LISTENER_STOPPED</code> for the released resource.</p>
// <p>Authorization: <code>PROJECT_EXECUTOR</code> or higher on the project.</p>
stopCall: {
    path: '/ondewo.vtsi.Calls/StopCall',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.StopCallRequest,
    responseType: ondewo_vtsi_calls_pb.StopCallResponse,
    requestSerialize: serialize_ondewo_vtsi_StopCallRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StopCallRequest,
    responseSerialize: serialize_ondewo_vtsi_StopCallResponse,
    responseDeserialize: deserialize_ondewo_vtsi_StopCallResponse,
  },
  // <p>Stops several calls of one project, each like <code>StopCall</code>, at most 1000 distinct names. Not
// atomic: every call is stopped on its own and reported in its own entry, in request order; a failed entry
// carries an <code>error_message</code> prefixed with the gRPC status code name <code>StopCall</code> would have
// answered and does not stop the others. No entry, more than 1000 names or a malformed
// <code>vtsi_project_name</code> is <code>INVALID_ARGUMENT</code>, an unknown project <code>NOT_FOUND</code>, and
// then nothing is stopped.</p>
// <p>Authorization: as <code>StopCall</code>.</p>
stopCalls: {
    path: '/ondewo.vtsi.Calls/StopCalls',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.StopCallsRequest,
    responseType: ondewo_vtsi_calls_pb.StopCallsResponse,
    requestSerialize: serialize_ondewo_vtsi_StopCallsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StopCallsRequest,
    responseSerialize: serialize_ondewo_vtsi_StopCallsResponse,
    responseDeserialize: deserialize_ondewo_vtsi_StopCallsResponse,
  },
  // <p>Stops every call of a VTSI project (listener and caller calls alike), or, with
// <code>call_filter</code>, those it matches, each like <code>StopCall</code>. Not atomic and not bounded in
// size; a project with nothing to stop answers an empty response, so the RPC is idempotent. If a stop fails
// part-way, the remaining calls are still stopped one by one and every call gets its own entry.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for a malformed request, an invalid <code>call_filter</code> or an
// unknown <code>field_mask</code> path; <code>NOT_FOUND</code> for an unknown project or campaign; with
// authorization enforced <code>PERMISSION_DENIED</code>.</p>
// <p>Authorization: <code>PROJECT_EXECUTOR</code> or higher on the project.</p>
stopAllCalls: {
    path: '/ondewo.vtsi.Calls/StopAllCalls',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.StopAllCallsRequest,
    responseType: ondewo_vtsi_calls_pb.StopCallsResponse,
    requestSerialize: serialize_ondewo_vtsi_StopAllCallsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StopAllCallsRequest,
    responseSerialize: serialize_ondewo_vtsi_StopCallsResponse,
    responseDeserialize: deserialize_ondewo_vtsi_StopCallsResponse,
  },
  // <p>Transfer a call to a phone number, a softphone account, another listener or the listener queue.</p>
// <p>The target is either the typed <code>target</code> or the legacy raw <code>transfer_id</code>, never both. It is
// resolved and validated before anything is sent; an invalid target is answered with
// <code>TRANSFER_OUTCOME_TARGET_INVALID</code> and an <code>error_reason</code>, and the call is untouched.</p>
// <p><code>TRANSFER_MODE_BLIND</code> (default) sends a SIP REFER and reports its outcome: a refused REFER keeps the
// call with the bot. <code>TRANSFER_MODE_WARM</code> rings the target into the call first, and the bot leaves only
// after the target joined (Asterisk 22 only).</p>
// <p>Telephony outcomes (busy, no answer, REFER rejected) are successful RPCs carrying an <code>outcome</code>.
// Refusals before any side effect also return a gRPC status with <code>reason=&lt;token&gt;</code> in its details:
// <code>INVALID_ARGUMENT</code> (both targets set, malformed target), <code>NOT_FOUND</code> (call or target not
// found, including another project&apos;s), <code>FAILED_PRECONDITION</code> (<code>call-not-connected</code>,
// <code>amd-in-progress</code>, <code>call-not-yet-identified</code>, <code>participants-present</code>,
// <code>asterisk-version-unsupported</code>, <code>sip-image-too-old</code>), <code>ABORTED</code>
// (<code>transfer-in-progress</code>), <code>UNAVAILABLE</code> (<code>sip-unreachable</code>).</p>
// <p>Authorization: requires the role <code>PROJECT_DEVELOPER</code> or higher on the project, and the server&apos;s
// Keycloak auth mode <code>ENFORCE</code>; otherwise <code>PERMISSION_DENIED</code>, or
// <code>FAILED_PRECONDITION</code> with <code>reason=call-supervision-requires-auth</code> when auth is not enforced.
// Every action writes an audit record (who, call, when, mode, target). No announcement is played to the caller.</p>
transferCall: {
    path: '/ondewo.vtsi.Calls/TransferCall',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.TransferCallRequest,
    responseType: ondewo_vtsi_calls_pb.TransferCallResponse,
    requestSerialize: serialize_ondewo_vtsi_TransferCallRequest,
    requestDeserialize: deserialize_ondewo_vtsi_TransferCallRequest,
    responseSerialize: serialize_ondewo_vtsi_TransferCallResponse,
    responseDeserialize: deserialize_ondewo_vtsi_TransferCallResponse,
  },
  // <p>Transfer several calls, each like <code>TransferCall</code>, at most 1000. Not atomic: every transfer is
// run on its own and reported in its own entry, in request order; an entry <code>TransferCall</code> would have
// refused with a gRPC status carries that refusal in its <code>error_message</code> (prefixed with the status
// code name) and does not stop the others. Idempotent per entry <code>request_id</code>.</p>
// <p>Authorization: requires the role <code>PROJECT_DEVELOPER</code> or higher on the project, and the server&apos;s
// Keycloak auth mode <code>ENFORCE</code>; otherwise <code>PERMISSION_DENIED</code>, or
// <code>FAILED_PRECONDITION</code> with <code>reason=call-supervision-requires-auth</code> when auth is not enforced.
// Every action writes an audit record (who, call, when, mode, target). No announcement is played to the caller.</p>
transferCalls: {
    path: '/ondewo.vtsi.Calls/TransferCalls',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.TransferCallsRequest,
    responseType: ondewo_vtsi_calls_pb.TransferCallsResponse,
    requestSerialize: serialize_ondewo_vtsi_TransferCallsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_TransferCallsRequest,
    responseSerialize: serialize_ondewo_vtsi_TransferCallsResponse,
    responseDeserialize: deserialize_ondewo_vtsi_TransferCallsResponse,
  },
  // <p>Gets a call, populated according to <code>call_view</code> and <code>field_mask</code> (the call&apos;s log
// lines are read with <code>Logs.ListCallLogs</code>). <code>FULL</code> also returns every participant ever
// invited into the call (see <code>Call.participants</code>).</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for a malformed name or an unknown <code>field_mask</code> path;
// <code>NOT_FOUND</code> for an unknown project or call, or a call of another project; with authorization
// enforced <code>PERMISSION_DENIED</code>.</p>
// <p>Authorization: <code>PROJECT_EXECUTOR</code> or higher on the project.</p>
getCall: {
    path: '/ondewo.vtsi.Calls/GetCall',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.GetCallRequest,
    responseType: ondewo_vtsi_calls_pb.Call,
    requestSerialize: serialize_ondewo_vtsi_GetCallRequest,
    requestDeserialize: deserialize_ondewo_vtsi_GetCallRequest,
    responseSerialize: serialize_ondewo_vtsi_Call,
    responseDeserialize: deserialize_ondewo_vtsi_Call,
  },
  // <p>Lists the calls of a VTSI project, ended ones included, narrowed by <code>call_filter</code>, ordered by
// <code>call_sorting</code> (default: by <code>start_time</code>, oldest first) and paged with
// <code>page_size</code> / <code>page_token</code>; <code>total_size</code> counts every match.</p>
// <p>With <code>call_filter.campaign_name</code> or <code>call_filter.campaign_display_name</code> set, lists
// only the calls of that campaign: the calls placed by the attempts of its campaign calls.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for a malformed request, an invalid filter, a negative
// <code>page_size</code>, a <code>page_token</code> of another listing or an unknown <code>field_mask</code>
// path; <code>NOT_FOUND</code> for an unknown project or campaign; with authorization enforced
// <code>PERMISSION_DENIED</code>.</p>
// <p>Authorization: <code>PROJECT_EXECUTOR</code> or higher on the project.</p>
listCalls: {
    path: '/ondewo.vtsi.Calls/ListCalls',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.ListCallsRequest,
    responseType: ondewo_vtsi_calls_pb.ListCallsResponse,
    requestSerialize: serialize_ondewo_vtsi_ListCallsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_ListCallsRequest,
    responseSerialize: serialize_ondewo_vtsi_ListCallsResponse,
    responseDeserialize: deserialize_ondewo_vtsi_ListCallsResponse,
  },
  // <p>Aggregate figures (totals, active calls, counts by SIP status type, by call type, by AMD verdict and by
// transfer outcome, durations, redial recommendations) over the calls of a VTSI project that
// <code>call_filter</code> matches; see <code>CallStatistics</code>. Read only, no side effect.</p>
// <p>Errors: as for <code>ListCalls</code> (an invalid filter is <code>INVALID_ARGUMENT</code>, an unknown project
// or campaign <code>NOT_FOUND</code>).</p>
// <p>Authorization: as <code>ListCalls</code> (<code>PROJECT_EXECUTOR</code> or higher on the project).</p>
getCallStatistics: {
    path: '/ondewo.vtsi.Calls/GetCallStatistics',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.GetCallStatisticsRequest,
    responseType: ondewo_vtsi_calls_pb.CallStatistics,
    requestSerialize: serialize_ondewo_vtsi_GetCallStatisticsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_GetCallStatisticsRequest,
    responseSerialize: serialize_ondewo_vtsi_CallStatistics,
    responseDeserialize: deserialize_ondewo_vtsi_CallStatistics,
  },
  // <p>Updates the descriptive metadata of a call: the only updatable <code>update_mask</code> path is
// <code>labels</code>. Allowed on active and ended calls. Refused for the WAITING call of a persistent
// listener or a pooled caller (status <code>NO_ONGOING_CALL</code>, not active: the record that waits for the
// next call, which <code>ListCalls</code> returns too) with <code>FAILED_PRECONDITION</code> and
// <code>reason=call-not-started</code> in the details: label the call once it has started. It changes only
// the stored call record: the live call, its SIP container, its status and its media are never touched, and
// nothing is sent to the call. Idempotent: writing the stored labels again changes nothing.</p>
// <p>Events: <code>VTSI_EVENT_CALL_UPDATED</code> when the labels changed.</p>
// <p>Errors are gRPC status codes: <code>INVALID_ARGUMENT</code> for a malformed <code>call.name</code>, an
// empty <code>update_mask</code>, any path other than <code>labels</code> (every other field of a
// <code>Call</code> is output only), a path below <code>labels</code>, labels outside the bounds of
// <code>Call.labels</code>, or an unknown <code>field_mask</code> path (each naming the path or label);
// <code>NOT_FOUND</code> for an unknown call or project; <code>FAILED_PRECONDITION</code>
// (<code>reason=call-not-started</code>) for a waiting call; with authorization enforced
// <code>PERMISSION_DENIED</code> for a project the caller holds no role on.</p>
// <p>Authorization: the role that may stop calls of the project (<code>PROJECT_EXECUTOR</code> or
// higher).</p>
updateCall: {
    path: '/ondewo.vtsi.Calls/UpdateCall',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.UpdateCallRequest,
    responseType: ondewo_vtsi_calls_pb.UpdateCallResponse,
    requestSerialize: serialize_ondewo_vtsi_UpdateCallRequest,
    requestDeserialize: deserialize_ondewo_vtsi_UpdateCallRequest,
    responseSerialize: serialize_ondewo_vtsi_UpdateCallResponse,
    responseDeserialize: deserialize_ondewo_vtsi_UpdateCallResponse,
  },
  // <p>Updates several calls, each like <code>UpdateCall</code>, with the per-entry results and the
// request-level errors of <code>UpdateCallers</code>.</p>
// <p>Authorization: as <code>UpdateCall</code>.</p>
updateCalls: {
    path: '/ondewo.vtsi.Calls/UpdateCalls',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.UpdateCallsRequest,
    responseType: ondewo_vtsi_calls_pb.UpdateCallsResponse,
    requestSerialize: serialize_ondewo_vtsi_UpdateCallsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_UpdateCallsRequest,
    responseSerialize: serialize_ondewo_vtsi_UpdateCallsResponse,
    responseDeserialize: deserialize_ondewo_vtsi_UpdateCallsResponse,
  },
  // ////////////////////////////////////////////////////////////////////////////
// Status stream endpoints
// ////////////////////////////////////////////////////////////////////////////
//
// <p>Streams the status of the callers of a project: a snapshot first
// (<code>snapshot = true</code>), then every caller whose call or SIP status changed, plus
// keep-alive messages. Ends when the client disconnects or at the server-side maximum stream
// duration.</p>
// <p>Errors: <code>NOT_FOUND</code> for an unknown project; <code>RESOURCE_EXHAUSTED</code> when
// the server has no free stream slot.</p>
streamCallerStatus: {
    path: '/ondewo.vtsi.Calls/StreamCallerStatus',
    requestStream: false,
    responseStream: true,
    requestType: ondewo_vtsi_calls_pb.StreamCallerStatusRequest,
    responseType: ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse,
    requestSerialize: serialize_ondewo_vtsi_StreamCallerStatusRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StreamCallerStatusRequest,
    responseSerialize: serialize_ondewo_vtsi_StreamCallResourceStatusResponse,
    responseDeserialize: deserialize_ondewo_vtsi_StreamCallResourceStatusResponse,
  },
  // <p>Streams the status of the listeners of a project, like <code>StreamCallerStatus</code>.</p>
streamListenerStatus: {
    path: '/ondewo.vtsi.Calls/StreamListenerStatus',
    requestStream: false,
    responseStream: true,
    requestType: ondewo_vtsi_calls_pb.StreamListenerStatusRequest,
    responseType: ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse,
    requestSerialize: serialize_ondewo_vtsi_StreamListenerStatusRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StreamListenerStatusRequest,
    responseSerialize: serialize_ondewo_vtsi_StreamCallResourceStatusResponse,
    responseDeserialize: deserialize_ondewo_vtsi_StreamCallResourceStatusResponse,
  },
  // <p>Streams the status of the scheduled callers of a project, like
// <code>StreamCallerStatus</code>. The snapshot holds every PENDING and FIRING scheduled caller
// and those that finished in the last hour.</p>
streamScheduledCallerStatus: {
    path: '/ondewo.vtsi.Calls/StreamScheduledCallerStatus',
    requestStream: false,
    responseStream: true,
    requestType: ondewo_vtsi_calls_pb.StreamScheduledCallerStatusRequest,
    responseType: ondewo_vtsi_calls_pb.StreamCallResourceStatusResponse,
    requestSerialize: serialize_ondewo_vtsi_StreamScheduledCallerStatusRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StreamScheduledCallerStatusRequest,
    responseSerialize: serialize_ondewo_vtsi_StreamCallResourceStatusResponse,
    responseDeserialize: deserialize_ondewo_vtsi_StreamCallResourceStatusResponse,
  },
  // ////////////////////////////////////////////////////////////////////////////
// Call control endpoints
// ////////////////////////////////////////////////////////////////////////////
//
// <p>Invite a registered softphone account of the project into a connected call. Returns the participant in
// <code>PARTICIPANT_STATE_RINGING</code>; follow <code>Call.participants</code> or the events
// <code>VTSI_EVENT_CALL_PARTICIPANT_*</code> for JOINED, FAILED and LEFT.</p>
// <p><code>PARTICIPANT_MODE_CONFERENCE</code> (default) joins the softphone into the call: Asterisk mixes the caller,
// the bot and the participant, and by default the bot keeps talking and listening
// (<code>BOT_POLICY_ON_JOIN_KEEP</code>). <code>PARTICIPANT_MODE_MONITOR</code> lets the participant listen only.
// When the bot&apos;s leg ends, every participant is hung up; the caller is handed over only by a WARM
// <code>TransferCall</code>. Idempotent per <code>request_id</code>.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code>, <code>NOT_FOUND</code> (call or softphone account, including another
// project&apos;s), <code>FAILED_PRECONDITION</code> (<code>call-not-connected</code>, <code>amd-in-progress</code>,
// <code>softphone-not-registered</code>, <code>softphone-disabled</code>, <code>softphone-unrouted</code>,
// <code>call-not-yet-identified</code>, <code>bot-channel-ambiguous</code>, <code>asterisk-not-local</code>,
// <code>asterisk-version-unsupported</code>), <code>ALREADY_EXISTS</code> (the softphone is already ringing or joined),
// <code>ABORTED</code> (<code>transfer-in-progress</code>), <code>RESOURCE_EXHAUSTED</code> (participant cap),
// <code>UNAVAILABLE</code> (<code>asterisk-unreachable</code>).</p>
// <p>Authorization: requires the role <code>PROJECT_DEVELOPER</code> or higher on the project, and the server&apos;s
// Keycloak auth mode <code>ENFORCE</code>; otherwise <code>PERMISSION_DENIED</code>, or
// <code>FAILED_PRECONDITION</code> with <code>reason=call-supervision-requires-auth</code> when auth is not enforced.
// Every action writes an audit record (who, call, when, mode, target). No announcement is played to the caller.</p>
inviteToCall: {
    path: '/ondewo.vtsi.Calls/InviteToCall',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.InviteToCallRequest,
    responseType: ondewo_vtsi_calls_pb.InviteToCallResponse,
    requestSerialize: serialize_ondewo_vtsi_InviteToCallRequest,
    requestDeserialize: deserialize_ondewo_vtsi_InviteToCallRequest,
    responseSerialize: serialize_ondewo_vtsi_InviteToCallResponse,
    responseDeserialize: deserialize_ondewo_vtsi_InviteToCallResponse,
  },
  // <p>Hang up a participant of a call (ringing or joined). The participant ends as
// <code>PARTICIPANT_STATE_LEFT</code> with <code>end_reason = REMOVED</code>; the call and the bot are not
// affected. Returns the participant after the request.</p>
// <p>Idempotent: a participant that already FAILED or LEFT (for whatever reason) is returned unchanged with OK,
// and nothing is sent.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for a malformed request; <code>NOT_FOUND</code> with
// <code>reason=call-not-found</code> for an unknown call or a call of another project, and with
// <code>reason=participant-not-found</code> for an unknown <code>participant_id</code> or a participant of
// another call; <code>ABORTED</code> with <code>reason=call-control-busy</code> while another call-control
// request for the call runs (retry); <code>UNAVAILABLE</code> with <code>reason=asterisk-unreachable</code> when
// the hang-up could not be sent; with authorization enforced <code>PERMISSION_DENIED</code>.</p>
// <p>Events: <code>VTSI_EVENT_CALL_PARTICIPANT_LEFT</code> (or <code>VTSI_EVENT_CALL_PARTICIPANT_FAILED</code>
// for a participant that was still ringing).</p>
// <p>Authorization: <code>PROJECT_EXECUTOR</code> or higher. Audited like <code>InviteToCall</code>.</p>
removeCallParticipant: {
    path: '/ondewo.vtsi.Calls/RemoveCallParticipant',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.RemoveCallParticipantRequest,
    responseType: ondewo_vtsi_calls_pb.RemoveCallParticipantResponse,
    requestSerialize: serialize_ondewo_vtsi_RemoveCallParticipantRequest,
    requestDeserialize: deserialize_ondewo_vtsi_RemoveCallParticipantRequest,
    responseSerialize: serialize_ondewo_vtsi_RemoveCallParticipantResponse,
    responseDeserialize: deserialize_ondewo_vtsi_RemoveCallParticipantResponse,
  },
  // <p>Mute the bot of a connected call and/or stop it listening to the caller, or undo either. Every request sets a
// desired level and never toggles: a repeat answers <code>changed = false</code>. The bot stays muted while
// anything else (a TALK take-over of <code>StreamCallAudio</code>, a participant bot policy) also holds it muted.</p>
// <p>Both settings <code>CALL_MEDIA_SETTING_UNCHANGED</code> is a valid read of the current state: it answers
// the effective <code>state</code> with <code>changed = false</code>, changes nothing, and writes no audit record
// and no event (see <code>SetCallMediaControlRequest.bot_voice</code>).</p>
// <p>Events: <code>VTSI_EVENT_CALL_BOT_MUTED</code> / <code>VTSI_EVENT_CALL_BOT_UNMUTED</code> /
// <code>VTSI_EVENT_CALL_LISTENING_PAUSED</code> / <code>VTSI_EVENT_CALL_LISTENING_RESUMED</code> when the
// effective state changed.</p>
// <p>Errors as for <code>InviteToCall</code>, plus <code>FAILED_PRECONDITION</code> <code>reason=sip-image-too-old</code>,
// <code>ABORTED</code> <code>reason=call-control-busy</code> (another call-control request for the call is running)
// and <code>UNAVAILABLE</code> <code>reason=sip-unreachable</code> or <code>reason=csi-media-control-failed</code> (the
// bot did not apply the level: a requested pause is rolled back, a requested mute is kept).</p>
// <p>Authorization: requires the role <code>PROJECT_DEVELOPER</code> or higher on the project, and the server&apos;s
// Keycloak auth mode <code>ENFORCE</code>; otherwise <code>PERMISSION_DENIED</code>, or
// <code>FAILED_PRECONDITION</code> with <code>reason=call-supervision-requires-auth</code> when auth is not enforced.
// Every action writes an audit record (who, call, when, mode, target). No announcement is played to the caller.</p>
setCallMediaControl: {
    path: '/ondewo.vtsi.Calls/SetCallMediaControl',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_calls_pb.SetCallMediaControlRequest,
    responseType: ondewo_vtsi_calls_pb.SetCallMediaControlResponse,
    requestSerialize: serialize_ondewo_vtsi_SetCallMediaControlRequest,
    requestDeserialize: deserialize_ondewo_vtsi_SetCallMediaControlRequest,
    responseSerialize: serialize_ondewo_vtsi_SetCallMediaControlResponse,
    responseDeserialize: deserialize_ondewo_vtsi_SetCallMediaControlResponse,
  },
  // <p>Live audio of a connected call, both ways. The first request MUST be <code>config</code> (within 2 seconds).
// LISTEN receives the caller mixed with the bot. TALK sends the agent&apos;s audio to the caller and REQUIRES
// <code>take_over</code>: the bot is muted and does not listen while the stream is connected, and resumes when it
// ends; in TALK the agent hears the caller only. Audio is LINEAR16 little-endian mono in 20 ms frames.</p>
// <p>Bidirectional streaming: available to native gRPC clients (python, nodejs) only. Browser (grpc-web) clients
// use <code>ListenCallAudio</code>, plus a softphone (<code>InviteToCall</code>) to talk.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> (no or invalid <code>config</code>, TALK without
// <code>take_over</code>, wrong frame size), <code>NOT_FOUND</code>, <code>FAILED_PRECONDITION</code>
// (<code>call-not-connected</code>, <code>amd-in-progress</code>, <code>call-not-yet-identified</code>,
// <code>bot-still-speaking</code>, <code>sip-image-too-old</code>), <code>RESOURCE_EXHAUSTED</code> (stream cap, a
// second TALK). A normal end sends one <code>ended</code> message, then OK. A second <code>config</code> or audio
// sent in LISTEN mode ends the stream with <code>INVALID_ARGUMENT</code>. A client half-close ends the stream
// (<code>CALL_AUDIO_END_REASON_CLIENT_CLOSED</code>), so a listening client keeps its request stream open.</p>
// <p>Authorization: requires the role <code>PROJECT_DEVELOPER</code> or higher on the project, and the server&apos;s
// Keycloak auth mode <code>ENFORCE</code>; otherwise <code>PERMISSION_DENIED</code>, or
// <code>FAILED_PRECONDITION</code> with <code>reason=call-supervision-requires-auth</code> when auth is not enforced.
// Every action writes an audit record (who, call, when, mode, target). No announcement is played to the caller.</p>
streamCallAudio: {
    path: '/ondewo.vtsi.Calls/StreamCallAudio',
    requestStream: true,
    responseStream: true,
    requestType: ondewo_vtsi_calls_pb.StreamCallAudioRequest,
    responseType: ondewo_vtsi_calls_pb.StreamCallAudioResponse,
    requestSerialize: serialize_ondewo_vtsi_StreamCallAudioRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StreamCallAudioRequest,
    responseSerialize: serialize_ondewo_vtsi_StreamCallAudioResponse,
    responseDeserialize: deserialize_ondewo_vtsi_StreamCallAudioResponse,
  },
  // <p>Listen-only live audio of a connected call, like <code>StreamCallAudio</code> in LISTEN mode, as a server
// stream that grpc-web (browser) clients can consume. <code>config.mode</code> must be LISTEN or unspecified and
// <code>config.take_over</code> must be false, otherwise <code>INVALID_ARGUMENT</code> <code>reason=listen-only</code>.</p>
// <p>Authorization: requires the role <code>PROJECT_DEVELOPER</code> or higher on the project, and the server&apos;s
// Keycloak auth mode <code>ENFORCE</code>; otherwise <code>PERMISSION_DENIED</code>, or
// <code>FAILED_PRECONDITION</code> with <code>reason=call-supervision-requires-auth</code> when auth is not enforced.
// Every action writes an audit record (who, call, when, mode, target). No announcement is played to the caller.</p>
listenCallAudio: {
    path: '/ondewo.vtsi.Calls/ListenCallAudio',
    requestStream: false,
    responseStream: true,
    requestType: ondewo_vtsi_calls_pb.ListenCallAudioRequest,
    responseType: ondewo_vtsi_calls_pb.StreamCallAudioResponse,
    requestSerialize: serialize_ondewo_vtsi_ListenCallAudioRequest,
    requestDeserialize: deserialize_ondewo_vtsi_ListenCallAudioRequest,
    responseSerialize: serialize_ondewo_vtsi_StreamCallAudioResponse,
    responseDeserialize: deserialize_ondewo_vtsi_StreamCallAudioResponse,
  },
};

exports.CallsClient = grpc.makeGenericClientConstructor(CallsService, 'Calls');
