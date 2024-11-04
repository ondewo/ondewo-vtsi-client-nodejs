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
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
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


// ONDEWO VTSI API
var ProjectsService = exports.ProjectsService = {
  // ////////////////////////////////////////////////////////////////////////////
// Project endpoints
// ////////////////////////////////////////////////////////////////////////////
//
// Create a VTSI project with configs
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
  // Get a VTSI project with configs
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
  // Update a VTSI project with configs
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
  // Delete a VTSI project with configs
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
  // Deploy a VTSI project
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
  // Undeploy a VTSI project
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
  // Get a VTSI project with configs
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

exports.ProjectsClient = grpc.makeGenericClientConstructor(ProjectsService);
