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
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var ondewo_nlu_context_pb = require('../../ondewo/nlu/context_pb.js');
var ondewo_nlu_intent_pb = require('../../ondewo/nlu/intent_pb.js');
var ondewo_s2t_speech$to$text_pb = require('../../ondewo/s2t/speech-to-text_pb.js');
var ondewo_t2s_text$to$speech_pb = require('../../ondewo/t2s/text-to-speech_pb.js');
var ondewo_sip_sip_pb = require('../../ondewo/sip/sip_pb.js');
var ondewo_vtsi_campaigns_pb = require('../../ondewo/vtsi/campaigns_pb.js');

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


// <p>ONDEWO VTSI API</p>
var CallsService = exports.CallsService = {
  // ////////////////////////////////////////////////////////////////////////////
// Caller and Listener endpoints
// ////////////////////////////////////////////////////////////////////////////
//
// <p>Start single caller instance for a specific nlu-project.</p>
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
  // <p>Start multiple ondewo-sip callers instances for a specific nlu-project.</p>
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
  // <p>Lists all available callers</p>
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
  // <p>Gets a caller</p>
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
  // <p>Deletes a caller</p>
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
  // <p>Deletes multiple callers</p>
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
  // <p>Stops a caller</p>
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
  // <p>Stops multiple callers</p>
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
  // <p>Start single listener instance for a specific nlu-project.</p>
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
  // <p>Start multiple ondewo-sip listeners instances for a specific nlu-project.</p>
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
  // <p>Stop a ondewo-sip listeners instances for a specific nlu-project.</p>
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
  // <p>Stop multiple ondewo-sip listeners instances for a specific nlu-project.</p>
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
  // <p>Lists all available listeners</p>
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
  // <p>Gets a listener</p>
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
  // <p>Deletes a listener</p>
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
  // <p>Deletes multiple listeners</p>
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
  // <p>Start a single ondewo-sip caller instance at a scheduled time</p>
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
  // <p>Start multiple ondewo-sip caller instances, each at its own scheduled time</p>
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
  // <p>Gets a scheduled caller</p>
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
  // <p>Lists the scheduled callers of a vtsi-project</p>
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
  // <p>Cancels a scheduled caller that has not fired yet</p>
// <p>A scheduled caller of a campaign can be cancelled while its campaign call is
// <code>CAMPAIGN_CALL_STATE_NOT_STARTED</code> or <code>CAMPAIGN_CALL_STATE_RETRY_PENDING</code>;
// the campaign call then becomes <code>CAMPAIGN_CALL_STATE_CANCELLED</code>. While an attempt is
// <code>DISPATCHING</code> or <code>IN_PROGRESS</code> the request is refused:
// <code>cancelled = false</code> and the scheduled caller keeps its status.</p>
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
  // <p>Stop/kill a ondewo-sip listener or caller instance for a specific vtsi-project.</p>
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
  // <p>Stop/kill a list of ondewo-sip listener or caller instances for a specific vtsi-project.</p>
// <p>Stops both Listener and Caller calls</p>
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
  // <p>Stop/kill all ondewo-sip listener or caller instance for a specific nlu-project.</p>
// <p>Stops all Listener and Caller calls</p>
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
  // <p>Transfer several calls, each like <code>TransferCall</code>.</p>
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
  // <p>Get call log for single call instance</p>
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
  // <p>Get call log for all call instances</p>
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
// affected.</p>
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
