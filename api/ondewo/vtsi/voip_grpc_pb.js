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
var ondewo_vtsi_voip_pb = require('../../ondewo/vtsi/voip_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var ondewo_nlu_context_pb = require('../../ondewo/nlu/context_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var ondewo_s2t_speech$to$text_pb = require('../../ondewo/s2t/speech-to-text_pb.js');
var ondewo_t2s_text$to$speech_pb = require('../../ondewo/t2s/text-to-speech_pb.js');
var ondewo_sip_sip_pb = require('../../ondewo/sip/sip_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_CreateProjectConfigsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_voip_pb.CreateProjectConfigsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.CreateProjectConfigsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_CreateProjectConfigsRequest(buffer_arg) {
  return ondewo_vtsi_voip_pb.CreateProjectConfigsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeleteProjectConfigsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_voip_pb.DeleteProjectConfigsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeleteProjectConfigsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeleteProjectConfigsRequest(buffer_arg) {
  return ondewo_vtsi_voip_pb.DeleteProjectConfigsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeployProjectRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_voip_pb.DeployProjectRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeployProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeployProjectRequest(buffer_arg) {
  return ondewo_vtsi_voip_pb.DeployProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetAudioFileRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_voip_pb.GetAudioFileRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetAudioFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetAudioFileRequest(buffer_arg) {
  return ondewo_vtsi_voip_pb.GetAudioFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetAudioFileResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_voip_pb.GetAudioFileResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetAudioFileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetAudioFileResponse(buffer_arg) {
  return ondewo_vtsi_voip_pb.GetAudioFileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetFullConversationAudioFileRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_voip_pb.GetFullConversationAudioFileRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetFullConversationAudioFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetFullConversationAudioFileRequest(buffer_arg) {
  return ondewo_vtsi_voip_pb.GetFullConversationAudioFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetFullConversationAudioFileResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_voip_pb.GetFullConversationAudioFileResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetFullConversationAudioFileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetFullConversationAudioFileResponse(buffer_arg) {
  return ondewo_vtsi_voip_pb.GetFullConversationAudioFileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetProjectConfigsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_voip_pb.GetProjectConfigsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetProjectConfigsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetProjectConfigsRequest(buffer_arg) {
  return ondewo_vtsi_voip_pb.GetProjectConfigsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetProjectConfigsResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_voip_pb.GetProjectConfigsResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetProjectConfigsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetProjectConfigsResponse(buffer_arg) {
  return ondewo_vtsi_voip_pb.GetProjectConfigsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetVoipCallInfoRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_voip_pb.GetVoipCallInfoRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetVoipCallInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetVoipCallInfoRequest(buffer_arg) {
  return ondewo_vtsi_voip_pb.GetVoipCallInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetVoipCallInfoResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_voip_pb.GetVoipCallInfoResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetVoipCallInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetVoipCallInfoResponse(buffer_arg) {
  return ondewo_vtsi_voip_pb.GetVoipCallInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListVoipCallInfoRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_voip_pb.ListVoipCallInfoRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListVoipCallInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListVoipCallInfoRequest(buffer_arg) {
  return ondewo_vtsi_voip_pb.ListVoipCallInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListVoipCallInfoResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_voip_pb.ListVoipCallInfoResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListVoipCallInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListVoipCallInfoResponse(buffer_arg) {
  return ondewo_vtsi_voip_pb.ListVoipCallInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StartCallersRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_voip_pb.StartCallersRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StartCallersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StartCallersRequest(buffer_arg) {
  return ondewo_vtsi_voip_pb.StartCallersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StartCallersResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_voip_pb.StartCallersResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.StartCallersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StartCallersResponse(buffer_arg) {
  return ondewo_vtsi_voip_pb.StartCallersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StartListenersRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_voip_pb.StartListenersRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StartListenersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StartListenersRequest(buffer_arg) {
  return ondewo_vtsi_voip_pb.StartListenersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StartListenersResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_voip_pb.StartListenersResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.StartListenersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StartListenersResponse(buffer_arg) {
  return ondewo_vtsi_voip_pb.StartListenersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StartScheduledCallersRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_voip_pb.StartScheduledCallersRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StartScheduledCallersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StartScheduledCallersRequest(buffer_arg) {
  return ondewo_vtsi_voip_pb.StartScheduledCallersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StopAllCallsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_voip_pb.StopAllCallsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StopAllCallsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StopAllCallsRequest(buffer_arg) {
  return ondewo_vtsi_voip_pb.StopAllCallsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StopCallsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_voip_pb.StopCallsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StopCallsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StopCallsRequest(buffer_arg) {
  return ondewo_vtsi_voip_pb.StopCallsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_TransferCallsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_voip_pb.TransferCallsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.TransferCallsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_TransferCallsRequest(buffer_arg) {
  return ondewo_vtsi_voip_pb.TransferCallsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UndeployProjectRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_voip_pb.UndeployProjectRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.UndeployProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UndeployProjectRequest(buffer_arg) {
  return ondewo_vtsi_voip_pb.UndeployProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UpdateProjectConfigsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_voip_pb.UpdateProjectConfigsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.UpdateProjectConfigsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UpdateProjectConfigsRequest(buffer_arg) {
  return ondewo_vtsi_voip_pb.UpdateProjectConfigsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// session manager for phone calls.
// endpoints of voip server that manages instances of ondewo-sip, which handle individual calls
var VoipSessionsService = exports.VoipSessionsService = {
  // Create an NLU project with configs.
createProjectConfigs: {
    path: '/ondewo.vtsi.VoipSessions/CreateProjectConfigs',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_voip_pb.CreateProjectConfigsRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_vtsi_CreateProjectConfigsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_CreateProjectConfigsRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Get an NLU project with configs.
getProjectConfigs: {
    path: '/ondewo.vtsi.VoipSessions/GetProjectConfigs',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_voip_pb.GetProjectConfigsRequest,
    responseType: ondewo_vtsi_voip_pb.GetProjectConfigsResponse,
    requestSerialize: serialize_ondewo_vtsi_GetProjectConfigsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_GetProjectConfigsRequest,
    responseSerialize: serialize_ondewo_vtsi_GetProjectConfigsResponse,
    responseDeserialize: deserialize_ondewo_vtsi_GetProjectConfigsResponse,
  },
  // Update an NLU project with configs.
updateProjectConfigs: {
    path: '/ondewo.vtsi.VoipSessions/UpdateProjectConfigs',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_voip_pb.UpdateProjectConfigsRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_vtsi_UpdateProjectConfigsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_UpdateProjectConfigsRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Delete an NLU project with configs.
deleteProjectConfigs: {
    path: '/ondewo.vtsi.VoipSessions/DeleteProjectConfigs',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_voip_pb.DeleteProjectConfigsRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_vtsi_DeleteProjectConfigsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_DeleteProjectConfigsRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // /////////
// Asterisk //
// /////////
//
deployProject: {
    path: '/ondewo.vtsi.VoipSessions/DeployProject',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_voip_pb.DeployProjectRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_vtsi_DeployProjectRequest,
    requestDeserialize: deserialize_ondewo_vtsi_DeployProjectRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  undeployProject: {
    path: '/ondewo.vtsi.VoipSessions/UndeployProject',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_voip_pb.UndeployProjectRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_vtsi_UndeployProjectRequest,
    requestDeserialize: deserialize_ondewo_vtsi_UndeployProjectRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // /////////
// CALLS //
// /////////
//
// start multiple ondewo-sip listeners instances for a specific nlu-project.
startListeners: {
    path: '/ondewo.vtsi.VoipSessions/StartListeners',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_voip_pb.StartListenersRequest,
    responseType: ondewo_vtsi_voip_pb.StartListenersResponse,
    requestSerialize: serialize_ondewo_vtsi_StartListenersRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StartListenersRequest,
    responseSerialize: serialize_ondewo_vtsi_StartListenersResponse,
    responseDeserialize: deserialize_ondewo_vtsi_StartListenersResponse,
  },
  // start multiple ondewo-sip callers instances for a specific nlu-project.
startCallers: {
    path: '/ondewo.vtsi.VoipSessions/StartCallers',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_voip_pb.StartCallersRequest,
    responseType: ondewo_vtsi_voip_pb.StartCallersResponse,
    requestSerialize: serialize_ondewo_vtsi_StartCallersRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StartCallersRequest,
    responseSerialize: serialize_ondewo_vtsi_StartCallersResponse,
    responseDeserialize: deserialize_ondewo_vtsi_StartCallersResponse,
  },
  // start multiple ondewo-sip callers instances with schedules
startScheduledCallers: {
    path: '/ondewo.vtsi.VoipSessions/StartScheduledCallers',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_voip_pb.StartScheduledCallersRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_vtsi_StartScheduledCallersRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StartScheduledCallersRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // stop/kill a list of ondewo-sip listener or caller instances for a specific nlu-project.
// "stops both Listener and Caller calls"
stopCalls: {
    path: '/ondewo.vtsi.VoipSessions/StopCalls',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_voip_pb.StopCallsRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_vtsi_StopCallsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StopCallsRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // stop/kill all ondewo-sip listener or caller instance for a specific nlu-project.
// "stops all Listener and Caller calls"
stopAllCalls: {
    path: '/ondewo.vtsi.VoipSessions/StopAllCalls',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_voip_pb.StopAllCallsRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_vtsi_StopAllCallsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StopAllCallsRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Transfer a call from a listener to another number for a specific nlu-project.
transferCalls: {
    path: '/ondewo.vtsi.VoipSessions/TransferCalls',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_voip_pb.TransferCallsRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_vtsi_TransferCallsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_TransferCallsRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // ConferenceCall .. to be added in the future
// rpc ConferenceCall (ConferenceCallRequest) returns (google.protobuf.Empty);
//
// //////////
// STATUS //
// //////////
//
// get call log for single call instance
getVoipCallInfo: {
    path: '/ondewo.vtsi.VoipSessions/GetVoipCallInfo',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_voip_pb.GetVoipCallInfoRequest,
    responseType: ondewo_vtsi_voip_pb.GetVoipCallInfoResponse,
    requestSerialize: serialize_ondewo_vtsi_GetVoipCallInfoRequest,
    requestDeserialize: deserialize_ondewo_vtsi_GetVoipCallInfoRequest,
    responseSerialize: serialize_ondewo_vtsi_GetVoipCallInfoResponse,
    responseDeserialize: deserialize_ondewo_vtsi_GetVoipCallInfoResponse,
  },
  // get call log for all call instances
listVoipCallInfo: {
    path: '/ondewo.vtsi.VoipSessions/ListVoipCallInfo',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_voip_pb.ListVoipCallInfoRequest,
    responseType: ondewo_vtsi_voip_pb.ListVoipCallInfoResponse,
    requestSerialize: serialize_ondewo_vtsi_ListVoipCallInfoRequest,
    requestDeserialize: deserialize_ondewo_vtsi_ListVoipCallInfoRequest,
    responseSerialize: serialize_ondewo_vtsi_ListVoipCallInfoResponse,
    responseDeserialize: deserialize_ondewo_vtsi_ListVoipCallInfoResponse,
  },
  // ///////////////////////
// Retrieving Audio files //
// //////////////////////////
//
// Get a s2t or t2s audio file for this conversation if it exists in Minio
getAudioFile: {
    path: '/ondewo.vtsi.VoipSessions/GetAudioFile',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_voip_pb.GetAudioFileRequest,
    responseType: ondewo_vtsi_voip_pb.GetAudioFileResponse,
    requestSerialize: serialize_ondewo_vtsi_GetAudioFileRequest,
    requestDeserialize: deserialize_ondewo_vtsi_GetAudioFileRequest,
    responseSerialize: serialize_ondewo_vtsi_GetAudioFileResponse,
    responseDeserialize: deserialize_ondewo_vtsi_GetAudioFileResponse,
  },
  // Get The whole conversation in an audio file
getFullConversationAudioFile: {
    path: '/ondewo.vtsi.VoipSessions/GetFullConversationAudioFile',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_voip_pb.GetFullConversationAudioFileRequest,
    responseType: ondewo_vtsi_voip_pb.GetFullConversationAudioFileResponse,
    requestSerialize: serialize_ondewo_vtsi_GetFullConversationAudioFileRequest,
    requestDeserialize: deserialize_ondewo_vtsi_GetFullConversationAudioFileRequest,
    responseSerialize: serialize_ondewo_vtsi_GetFullConversationAudioFileResponse,
    responseDeserialize: deserialize_ondewo_vtsi_GetFullConversationAudioFileResponse,
  },
};

exports.VoipSessionsClient = grpc.makeGenericClientConstructor(VoipSessionsService);
// /////////
// Projects //
// /////////
