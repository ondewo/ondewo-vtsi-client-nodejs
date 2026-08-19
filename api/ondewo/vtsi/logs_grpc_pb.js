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
var ondewo_vtsi_logs_pb = require('../../ondewo/vtsi/logs_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js');
var ondewo_vtsi_calls_pb = require('../../ondewo/vtsi/calls_pb.js');

function serialize_ondewo_vtsi_CallLogStream(arg) {
  if (!(arg instanceof ondewo_vtsi_logs_pb.CallLogStream)) {
    throw new Error('Expected argument of type ondewo.vtsi.CallLogStream');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_CallLogStream(buffer_arg) {
  return ondewo_vtsi_logs_pb.CallLogStream.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeleteCallLogsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_logs_pb.DeleteCallLogsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeleteCallLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeleteCallLogsRequest(buffer_arg) {
  return ondewo_vtsi_logs_pb.DeleteCallLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeleteCallLogsResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_logs_pb.DeleteCallLogsResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeleteCallLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeleteCallLogsResponse(buffer_arg) {
  return ondewo_vtsi_logs_pb.DeleteCallLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetCallLogStreamRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_logs_pb.GetCallLogStreamRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetCallLogStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetCallLogStreamRequest(buffer_arg) {
  return ondewo_vtsi_logs_pb.GetCallLogStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListCallLogStreamsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_logs_pb.ListCallLogStreamsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListCallLogStreamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListCallLogStreamsRequest(buffer_arg) {
  return ondewo_vtsi_logs_pb.ListCallLogStreamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListCallLogStreamsResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_logs_pb.ListCallLogStreamsResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListCallLogStreamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListCallLogStreamsResponse(buffer_arg) {
  return ondewo_vtsi_logs_pb.ListCallLogStreamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListCallLogsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_logs_pb.ListCallLogsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListCallLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListCallLogsRequest(buffer_arg) {
  return ondewo_vtsi_logs_pb.ListCallLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListCallLogsResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_logs_pb.ListCallLogsResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListCallLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListCallLogsResponse(buffer_arg) {
  return ondewo_vtsi_logs_pb.ListCallLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StreamCallLogsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_logs_pb.StreamCallLogsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.StreamCallLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StreamCallLogsRequest(buffer_arg) {
  return ondewo_vtsi_logs_pb.StreamCallLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_StreamCallLogsResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_logs_pb.StreamCallLogsResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.StreamCallLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_StreamCallLogsResponse(buffer_arg) {
  return ondewo_vtsi_logs_pb.StreamCallLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// <p>ONDEWO VTSI API</p>
var LogsService = exports.LogsService = {
  // ////////////////////////////////////////////////////////////////////////////
// Call log endpoints
// ////////////////////////////////////////////////////////////////////////////
//
// <p>Streams the container logs of the ondewo-sip / ondewo-csi containers of a VTSI project as
// they are captured, in the manner of <code>docker logs --follow</code>. The stream replays
// <code>tail_lines</code> historical entries and then follows. It stays open until the capture
// of every matching log stream has terminated, until the client disconnects, or until the
// server-side maximum stream duration is reached.</p>
// <p>Entries are served from the VTSI database rather than from the docker daemon, so a
// container that has already been removed still streams. Secrets are redacted server-side.</p>
streamCallLogs: {
    path: '/ondewo.vtsi.Logs/StreamCallLogs',
    requestStream: false,
    responseStream: true,
    requestType: ondewo_vtsi_logs_pb.StreamCallLogsRequest,
    responseType: ondewo_vtsi_logs_pb.StreamCallLogsResponse,
    requestSerialize: serialize_ondewo_vtsi_StreamCallLogsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_StreamCallLogsRequest,
    responseSerialize: serialize_ondewo_vtsi_StreamCallLogsResponse,
    responseDeserialize: deserialize_ondewo_vtsi_StreamCallLogsResponse,
  },
  // <p>Returns a bounded, filtered page of captured container log entries. Supports a time window,
// severity filtering, a regular expression, a plain-text search and cursor paging in both
// directions for infinite scrolling. Secrets are redacted server-side.</p>
listCallLogs: {
    path: '/ondewo.vtsi.Logs/ListCallLogs',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_logs_pb.ListCallLogsRequest,
    responseType: ondewo_vtsi_logs_pb.ListCallLogsResponse,
    requestSerialize: serialize_ondewo_vtsi_ListCallLogsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_ListCallLogsRequest,
    responseSerialize: serialize_ondewo_vtsi_ListCallLogsResponse,
    responseDeserialize: deserialize_ondewo_vtsi_ListCallLogsResponse,
  },
  // <p>Returns the capture state of a single log stream, i.e. of one capture generation of one
// container.</p>
getCallLogStream: {
    path: '/ondewo.vtsi.Logs/GetCallLogStream',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_logs_pb.GetCallLogStreamRequest,
    responseType: ondewo_vtsi_logs_pb.CallLogStream,
    requestSerialize: serialize_ondewo_vtsi_GetCallLogStreamRequest,
    requestDeserialize: deserialize_ondewo_vtsi_GetCallLogStreamRequest,
    responseSerialize: serialize_ondewo_vtsi_CallLogStream,
    responseDeserialize: deserialize_ondewo_vtsi_CallLogStream,
  },
  // <p>Lists the log streams VTSI has captured for a project. A single container yields a new log
// stream every time it is recreated, because a recreated container is a new docker container
// whose previous logs no longer exist.</p>
listCallLogStreams: {
    path: '/ondewo.vtsi.Logs/ListCallLogStreams',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_logs_pb.ListCallLogStreamsRequest,
    responseType: ondewo_vtsi_logs_pb.ListCallLogStreamsResponse,
    requestSerialize: serialize_ondewo_vtsi_ListCallLogStreamsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_ListCallLogStreamsRequest,
    responseSerialize: serialize_ondewo_vtsi_ListCallLogStreamsResponse,
    responseDeserialize: deserialize_ondewo_vtsi_ListCallLogStreamsResponse,
  },
  // <p>Permanently deletes captured log entries matching a filter. This is the erasure path for
// data-subject requests: retention answers &quot;delete everything older than N days&quot;, this
// answers &quot;delete everything for this call or this phone number&quot;.</p>
deleteCallLogs: {
    path: '/ondewo.vtsi.Logs/DeleteCallLogs',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_logs_pb.DeleteCallLogsRequest,
    responseType: ondewo_vtsi_logs_pb.DeleteCallLogsResponse,
    requestSerialize: serialize_ondewo_vtsi_DeleteCallLogsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_DeleteCallLogsRequest,
    responseSerialize: serialize_ondewo_vtsi_DeleteCallLogsResponse,
    responseDeserialize: deserialize_ondewo_vtsi_DeleteCallLogsResponse,
  },
};

exports.LogsClient = grpc.makeGenericClientConstructor(LogsService, 'Logs');
