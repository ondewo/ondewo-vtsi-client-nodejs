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
var ondewo_qa_qa_pb = require('../../ondewo/qa/qa_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var ondewo_nlu_session_pb = require('../../ondewo/nlu/session_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_qa_GetAnswerRequest(arg) {
  if (!(arg instanceof ondewo_qa_qa_pb.GetAnswerRequest)) {
    throw new Error('Expected argument of type ondewo.qa.GetAnswerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_qa_GetAnswerRequest(buffer_arg) {
  return ondewo_qa_qa_pb.GetAnswerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_qa_GetAnswerResponse(arg) {
  if (!(arg instanceof ondewo_qa_qa_pb.GetAnswerResponse)) {
    throw new Error('Expected argument of type ondewo.qa.GetAnswerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_qa_GetAnswerResponse(buffer_arg) {
  return ondewo_qa_qa_pb.GetAnswerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_qa_GetProjectConfigRequest(arg) {
  if (!(arg instanceof ondewo_qa_qa_pb.GetProjectConfigRequest)) {
    throw new Error('Expected argument of type ondewo.qa.GetProjectConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_qa_GetProjectConfigRequest(buffer_arg) {
  return ondewo_qa_qa_pb.GetProjectConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_qa_GetProjectConfigResponse(arg) {
  if (!(arg instanceof ondewo_qa_qa_pb.GetProjectConfigResponse)) {
    throw new Error('Expected argument of type ondewo.qa.GetProjectConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_qa_GetProjectConfigResponse(buffer_arg) {
  return ondewo_qa_qa_pb.GetProjectConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_qa_GetServerStateResponse(arg) {
  if (!(arg instanceof ondewo_qa_qa_pb.GetServerStateResponse)) {
    throw new Error('Expected argument of type ondewo.qa.GetServerStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_qa_GetServerStateResponse(buffer_arg) {
  return ondewo_qa_qa_pb.GetServerStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_qa_ListProjectIdsResponse(arg) {
  if (!(arg instanceof ondewo_qa_qa_pb.ListProjectIdsResponse)) {
    throw new Error('Expected argument of type ondewo.qa.ListProjectIdsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_qa_ListProjectIdsResponse(buffer_arg) {
  return ondewo_qa_qa_pb.ListProjectIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_qa_RunScraperRequest(arg) {
  if (!(arg instanceof ondewo_qa_qa_pb.RunScraperRequest)) {
    throw new Error('Expected argument of type ondewo.qa.RunScraperRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_qa_RunScraperRequest(buffer_arg) {
  return ondewo_qa_qa_pb.RunScraperRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_qa_RunScraperResponse(arg) {
  if (!(arg instanceof ondewo_qa_qa_pb.RunScraperResponse)) {
    throw new Error('Expected argument of type ondewo.qa.RunScraperResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_qa_RunScraperResponse(buffer_arg) {
  return ondewo_qa_qa_pb.RunScraperResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_qa_RunTrainingResponse(arg) {
  if (!(arg instanceof ondewo_qa_qa_pb.RunTrainingResponse)) {
    throw new Error('Expected argument of type ondewo.qa.RunTrainingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_qa_RunTrainingResponse(buffer_arg) {
  return ondewo_qa_qa_pb.RunTrainingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_qa_UpdateDatabaseRequest(arg) {
  if (!(arg instanceof ondewo_qa_qa_pb.UpdateDatabaseRequest)) {
    throw new Error('Expected argument of type ondewo.qa.UpdateDatabaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_qa_UpdateDatabaseRequest(buffer_arg) {
  return ondewo_qa_qa_pb.UpdateDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_qa_UpdateDatabaseResponse(arg) {
  if (!(arg instanceof ondewo_qa_qa_pb.UpdateDatabaseResponse)) {
    throw new Error('Expected argument of type ondewo.qa.UpdateDatabaseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_qa_UpdateDatabaseResponse(buffer_arg) {
  return ondewo_qa_qa_pb.UpdateDatabaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// ///// Services ///////
//
var QAService = exports.QAService = {
  getAnswer: {
    path: '/ondewo.qa.QA/GetAnswer',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_qa_qa_pb.GetAnswerRequest,
    responseType: ondewo_qa_qa_pb.GetAnswerResponse,
    requestSerialize: serialize_ondewo_qa_GetAnswerRequest,
    requestDeserialize: deserialize_ondewo_qa_GetAnswerRequest,
    responseSerialize: serialize_ondewo_qa_GetAnswerResponse,
    responseDeserialize: deserialize_ondewo_qa_GetAnswerResponse,
  },
  runScraper: {
    path: '/ondewo.qa.QA/RunScraper',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_qa_qa_pb.RunScraperRequest,
    responseType: ondewo_qa_qa_pb.RunScraperResponse,
    requestSerialize: serialize_ondewo_qa_RunScraperRequest,
    requestDeserialize: deserialize_ondewo_qa_RunScraperRequest,
    responseSerialize: serialize_ondewo_qa_RunScraperResponse,
    responseDeserialize: deserialize_ondewo_qa_RunScraperResponse,
  },
  updateDatabase: {
    path: '/ondewo.qa.QA/UpdateDatabase',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_qa_qa_pb.UpdateDatabaseRequest,
    responseType: ondewo_qa_qa_pb.UpdateDatabaseResponse,
    requestSerialize: serialize_ondewo_qa_UpdateDatabaseRequest,
    requestDeserialize: deserialize_ondewo_qa_UpdateDatabaseRequest,
    responseSerialize: serialize_ondewo_qa_UpdateDatabaseResponse,
    responseDeserialize: deserialize_ondewo_qa_UpdateDatabaseResponse,
  },
  runTraining: {
    path: '/ondewo.qa.QA/RunTraining',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: ondewo_qa_qa_pb.RunTrainingResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ondewo_qa_RunTrainingResponse,
    responseDeserialize: deserialize_ondewo_qa_RunTrainingResponse,
  },
  getServerState: {
    path: '/ondewo.qa.QA/GetServerState',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: ondewo_qa_qa_pb.GetServerStateResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ondewo_qa_GetServerStateResponse,
    responseDeserialize: deserialize_ondewo_qa_GetServerStateResponse,
  },
  listProjectIds: {
    path: '/ondewo.qa.QA/ListProjectIds',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: ondewo_qa_qa_pb.ListProjectIdsResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ondewo_qa_ListProjectIdsResponse,
    responseDeserialize: deserialize_ondewo_qa_ListProjectIdsResponse,
  },
  getProjectConfig: {
    path: '/ondewo.qa.QA/GetProjectConfig',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_qa_qa_pb.GetProjectConfigRequest,
    responseType: ondewo_qa_qa_pb.GetProjectConfigResponse,
    requestSerialize: serialize_ondewo_qa_GetProjectConfigRequest,
    requestDeserialize: deserialize_ondewo_qa_GetProjectConfigRequest,
    responseSerialize: serialize_ondewo_qa_GetProjectConfigResponse,
    responseDeserialize: deserialize_ondewo_qa_GetProjectConfigResponse,
  },
};

exports.QAClient = grpc.makeGenericClientConstructor(QAService);
