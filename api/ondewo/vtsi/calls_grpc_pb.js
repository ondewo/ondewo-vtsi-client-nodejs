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

function serialize_ondewo_vtsi_Listener(arg) {
	if (!(arg instanceof ondewo_vtsi_calls_pb.Listener)) {
		throw new Error('Expected argument of type ondewo.vtsi.Listener');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_Listener(buffer_arg) {
	return ondewo_vtsi_calls_pb.Listener.deserializeBinary(new Uint8Array(buffer_arg));
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

// ONDEWO VTSI API
var CallsService = (exports.CallsService = {
	// ////////////////////////////////////////////////////////////////////////////
	// Caller and Listener endpoints
	// ////////////////////////////////////////////////////////////////////////////
	//
	// start single caller instance for a specific nlu-project.
	startCaller: {
		path: '/ondewo.vtsi.Calls/StartCaller',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.StartCallerRequest,
		responseType: ondewo_vtsi_calls_pb.StartCallerResponse,
		requestSerialize: serialize_ondewo_vtsi_StartCallerRequest,
		requestDeserialize: deserialize_ondewo_vtsi_StartCallerRequest,
		responseSerialize: serialize_ondewo_vtsi_StartCallerResponse,
		responseDeserialize: deserialize_ondewo_vtsi_StartCallerResponse
	},
	// start multiple ondewo-sip callers instances for a specific nlu-project.
	startCallers: {
		path: '/ondewo.vtsi.Calls/StartCallers',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.StartCallersRequest,
		responseType: ondewo_vtsi_calls_pb.StartCallersResponse,
		requestSerialize: serialize_ondewo_vtsi_StartCallersRequest,
		requestDeserialize: deserialize_ondewo_vtsi_StartCallersRequest,
		responseSerialize: serialize_ondewo_vtsi_StartCallersResponse,
		responseDeserialize: deserialize_ondewo_vtsi_StartCallersResponse
	},
	// lists all available callers
	listCallers: {
		path: '/ondewo.vtsi.Calls/ListCallers',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.ListCallersRequest,
		responseType: ondewo_vtsi_calls_pb.ListCallersResponse,
		requestSerialize: serialize_ondewo_vtsi_ListCallersRequest,
		requestDeserialize: deserialize_ondewo_vtsi_ListCallersRequest,
		responseSerialize: serialize_ondewo_vtsi_ListCallersResponse,
		responseDeserialize: deserialize_ondewo_vtsi_ListCallersResponse
	},
	// gets a caller
	getCaller: {
		path: '/ondewo.vtsi.Calls/GetCaller',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.GetCallerRequest,
		responseType: ondewo_vtsi_calls_pb.Caller,
		requestSerialize: serialize_ondewo_vtsi_GetCallerRequest,
		requestDeserialize: deserialize_ondewo_vtsi_GetCallerRequest,
		responseSerialize: serialize_ondewo_vtsi_Caller,
		responseDeserialize: deserialize_ondewo_vtsi_Caller
	},
	// deletes a caller
	deleteCaller: {
		path: '/ondewo.vtsi.Calls/DeleteCaller',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.DeleteCallerRequest,
		responseType: ondewo_vtsi_calls_pb.DeleteCallerResponse,
		requestSerialize: serialize_ondewo_vtsi_DeleteCallerRequest,
		requestDeserialize: deserialize_ondewo_vtsi_DeleteCallerRequest,
		responseSerialize: serialize_ondewo_vtsi_DeleteCallerResponse,
		responseDeserialize: deserialize_ondewo_vtsi_DeleteCallerResponse
	},
	// deletes multiple callers
	deleteCallers: {
		path: '/ondewo.vtsi.Calls/DeleteCallers',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.DeleteCallersRequest,
		responseType: ondewo_vtsi_calls_pb.DeleteCallersResponse,
		requestSerialize: serialize_ondewo_vtsi_DeleteCallersRequest,
		requestDeserialize: deserialize_ondewo_vtsi_DeleteCallersRequest,
		responseSerialize: serialize_ondewo_vtsi_DeleteCallersResponse,
		responseDeserialize: deserialize_ondewo_vtsi_DeleteCallersResponse
	},
	// stops a caller
	stopCaller: {
		path: '/ondewo.vtsi.Calls/StopCaller',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.StopCallerRequest,
		responseType: ondewo_vtsi_calls_pb.StopCallerResponse,
		requestSerialize: serialize_ondewo_vtsi_StopCallerRequest,
		requestDeserialize: deserialize_ondewo_vtsi_StopCallerRequest,
		responseSerialize: serialize_ondewo_vtsi_StopCallerResponse,
		responseDeserialize: deserialize_ondewo_vtsi_StopCallerResponse
	},
	// stops multiple callers
	stopCallers: {
		path: '/ondewo.vtsi.Calls/StopCallers',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.StopCallersRequest,
		responseType: ondewo_vtsi_calls_pb.StopCallersResponse,
		requestSerialize: serialize_ondewo_vtsi_StopCallersRequest,
		requestDeserialize: deserialize_ondewo_vtsi_StopCallersRequest,
		responseSerialize: serialize_ondewo_vtsi_StopCallersResponse,
		responseDeserialize: deserialize_ondewo_vtsi_StopCallersResponse
	},
	// start single listener instance for a specific nlu-project.
	startListener: {
		path: '/ondewo.vtsi.Calls/StartListener',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.StartListenerRequest,
		responseType: ondewo_vtsi_calls_pb.StartListenerResponse,
		requestSerialize: serialize_ondewo_vtsi_StartListenerRequest,
		requestDeserialize: deserialize_ondewo_vtsi_StartListenerRequest,
		responseSerialize: serialize_ondewo_vtsi_StartListenerResponse,
		responseDeserialize: deserialize_ondewo_vtsi_StartListenerResponse
	},
	// start multiple ondewo-sip listeners instances for a specific nlu-project.
	startListeners: {
		path: '/ondewo.vtsi.Calls/StartListeners',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.StartListenersRequest,
		responseType: ondewo_vtsi_calls_pb.StartListenersResponse,
		requestSerialize: serialize_ondewo_vtsi_StartListenersRequest,
		requestDeserialize: deserialize_ondewo_vtsi_StartListenersRequest,
		responseSerialize: serialize_ondewo_vtsi_StartListenersResponse,
		responseDeserialize: deserialize_ondewo_vtsi_StartListenersResponse
	},
	// stop a ondewo-sip listeners instances for a specific nlu-project.
	stopListener: {
		path: '/ondewo.vtsi.Calls/StopListener',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.StopListenerRequest,
		responseType: ondewo_vtsi_calls_pb.StopListenerResponse,
		requestSerialize: serialize_ondewo_vtsi_StopListenerRequest,
		requestDeserialize: deserialize_ondewo_vtsi_StopListenerRequest,
		responseSerialize: serialize_ondewo_vtsi_StopListenerResponse,
		responseDeserialize: deserialize_ondewo_vtsi_StopListenerResponse
	},
	// stop multiple ondewo-sip listeners instances for a specific nlu-project.
	stopListeners: {
		path: '/ondewo.vtsi.Calls/StopListeners',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.StopListenersRequest,
		responseType: ondewo_vtsi_calls_pb.StopListenersResponse,
		requestSerialize: serialize_ondewo_vtsi_StopListenersRequest,
		requestDeserialize: deserialize_ondewo_vtsi_StopListenersRequest,
		responseSerialize: serialize_ondewo_vtsi_StopListenersResponse,
		responseDeserialize: deserialize_ondewo_vtsi_StopListenersResponse
	},
	// lists all available listeners
	listListeners: {
		path: '/ondewo.vtsi.Calls/ListListeners',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.ListListenersRequest,
		responseType: ondewo_vtsi_calls_pb.ListListenersResponse,
		requestSerialize: serialize_ondewo_vtsi_ListListenersRequest,
		requestDeserialize: deserialize_ondewo_vtsi_ListListenersRequest,
		responseSerialize: serialize_ondewo_vtsi_ListListenersResponse,
		responseDeserialize: deserialize_ondewo_vtsi_ListListenersResponse
	},
	// gets a listener
	getListener: {
		path: '/ondewo.vtsi.Calls/GetListener',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.GetListenerRequest,
		responseType: ondewo_vtsi_calls_pb.Listener,
		requestSerialize: serialize_ondewo_vtsi_GetListenerRequest,
		requestDeserialize: deserialize_ondewo_vtsi_GetListenerRequest,
		responseSerialize: serialize_ondewo_vtsi_Listener,
		responseDeserialize: deserialize_ondewo_vtsi_Listener
	},
	// deletes a listener
	deleteListener: {
		path: '/ondewo.vtsi.Calls/DeleteListener',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.DeleteListenerRequest,
		responseType: ondewo_vtsi_calls_pb.DeleteListenerResponse,
		requestSerialize: serialize_ondewo_vtsi_DeleteListenerRequest,
		requestDeserialize: deserialize_ondewo_vtsi_DeleteListenerRequest,
		responseSerialize: serialize_ondewo_vtsi_DeleteListenerResponse,
		responseDeserialize: deserialize_ondewo_vtsi_DeleteListenerResponse
	},
	// deletes multiple listeners
	deleteListeners: {
		path: '/ondewo.vtsi.Calls/DeleteListeners',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.DeleteListenersRequest,
		responseType: ondewo_vtsi_calls_pb.DeleteListenersResponse,
		requestSerialize: serialize_ondewo_vtsi_DeleteListenersRequest,
		requestDeserialize: deserialize_ondewo_vtsi_DeleteListenersRequest,
		responseSerialize: serialize_ondewo_vtsi_DeleteListenersResponse,
		responseDeserialize: deserialize_ondewo_vtsi_DeleteListenersResponse
	},
	// start multiple ondewo-sip callers instances with schedules
	startScheduledCaller: {
		path: '/ondewo.vtsi.Calls/StartScheduledCaller',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.StartScheduledCallerRequest,
		responseType: ondewo_vtsi_calls_pb.StartScheduledCallerResponse,
		requestSerialize: serialize_ondewo_vtsi_StartScheduledCallerRequest,
		requestDeserialize: deserialize_ondewo_vtsi_StartScheduledCallerRequest,
		responseSerialize: serialize_ondewo_vtsi_StartScheduledCallerResponse,
		responseDeserialize: deserialize_ondewo_vtsi_StartScheduledCallerResponse
	},
	// start multiple ondewo-sip callers instances with schedules
	startScheduledCallers: {
		path: '/ondewo.vtsi.Calls/StartScheduledCallers',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.StartScheduledCallersRequest,
		responseType: ondewo_vtsi_calls_pb.StartScheduledCallersResponse,
		requestSerialize: serialize_ondewo_vtsi_StartScheduledCallersRequest,
		requestDeserialize: deserialize_ondewo_vtsi_StartScheduledCallersRequest,
		responseSerialize: serialize_ondewo_vtsi_StartScheduledCallersResponse,
		responseDeserialize: deserialize_ondewo_vtsi_StartScheduledCallersResponse
	},
	// stop/kill a ondewo-sip listener or caller instance for a specific vtsi-project.
	stopCall: {
		path: '/ondewo.vtsi.Calls/StopCall',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.StopCallRequest,
		responseType: ondewo_vtsi_calls_pb.StopCallResponse,
		requestSerialize: serialize_ondewo_vtsi_StopCallRequest,
		requestDeserialize: deserialize_ondewo_vtsi_StopCallRequest,
		responseSerialize: serialize_ondewo_vtsi_StopCallResponse,
		responseDeserialize: deserialize_ondewo_vtsi_StopCallResponse
	},
	// stop/kill a list of ondewo-sip listener or caller instances for a specific vtsi-project.
	// "stops both Listener and Caller calls"
	stopCalls: {
		path: '/ondewo.vtsi.Calls/StopCalls',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.StopCallsRequest,
		responseType: ondewo_vtsi_calls_pb.StopCallsResponse,
		requestSerialize: serialize_ondewo_vtsi_StopCallsRequest,
		requestDeserialize: deserialize_ondewo_vtsi_StopCallsRequest,
		responseSerialize: serialize_ondewo_vtsi_StopCallsResponse,
		responseDeserialize: deserialize_ondewo_vtsi_StopCallsResponse
	},
	// stop/kill all ondewo-sip listener or caller instance for a specific nlu-project.
	// "stops all Listener and Caller calls"
	stopAllCalls: {
		path: '/ondewo.vtsi.Calls/StopAllCalls',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.StopAllCallsRequest,
		responseType: ondewo_vtsi_calls_pb.StopCallsResponse,
		requestSerialize: serialize_ondewo_vtsi_StopAllCallsRequest,
		requestDeserialize: deserialize_ondewo_vtsi_StopAllCallsRequest,
		responseSerialize: serialize_ondewo_vtsi_StopCallsResponse,
		responseDeserialize: deserialize_ondewo_vtsi_StopCallsResponse
	},
	// Transfer a call from a listener to another
	transferCall: {
		path: '/ondewo.vtsi.Calls/TransferCall',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.TransferCallRequest,
		responseType: ondewo_vtsi_calls_pb.TransferCallResponse,
		requestSerialize: serialize_ondewo_vtsi_TransferCallRequest,
		requestDeserialize: deserialize_ondewo_vtsi_TransferCallRequest,
		responseSerialize: serialize_ondewo_vtsi_TransferCallResponse,
		responseDeserialize: deserialize_ondewo_vtsi_TransferCallResponse
	},
	// Transfer a call from a listener to another
	transferCalls: {
		path: '/ondewo.vtsi.Calls/TransferCalls',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.TransferCallsRequest,
		responseType: ondewo_vtsi_calls_pb.TransferCallsResponse,
		requestSerialize: serialize_ondewo_vtsi_TransferCallsRequest,
		requestDeserialize: deserialize_ondewo_vtsi_TransferCallsRequest,
		responseSerialize: serialize_ondewo_vtsi_TransferCallsResponse,
		responseDeserialize: deserialize_ondewo_vtsi_TransferCallsResponse
	},
	// get call log for single call instance
	getCall: {
		path: '/ondewo.vtsi.Calls/GetCall',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.GetCallRequest,
		responseType: ondewo_vtsi_calls_pb.Call,
		requestSerialize: serialize_ondewo_vtsi_GetCallRequest,
		requestDeserialize: deserialize_ondewo_vtsi_GetCallRequest,
		responseSerialize: serialize_ondewo_vtsi_Call,
		responseDeserialize: deserialize_ondewo_vtsi_Call
	},
	// get call log for all call instances
	listCalls: {
		path: '/ondewo.vtsi.Calls/ListCalls',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_vtsi_calls_pb.ListCallsRequest,
		responseType: ondewo_vtsi_calls_pb.ListCallsResponse,
		requestSerialize: serialize_ondewo_vtsi_ListCallsRequest,
		requestDeserialize: deserialize_ondewo_vtsi_ListCallsRequest,
		responseSerialize: serialize_ondewo_vtsi_ListCallsResponse,
		responseDeserialize: deserialize_ondewo_vtsi_ListCallsResponse
	}
});

exports.CallsClient = grpc.makeGenericClientConstructor(CallsService);
