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
var ondewo_vtsi_events_pb = require('../../ondewo/vtsi/events_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var ondewo_sip_sip_pb = require('../../ondewo/sip/sip_pb.js');
var ondewo_vtsi_campaigns_pb = require('../../ondewo/vtsi/campaigns_pb.js');

function serialize_ondewo_vtsi_CreateVtsiEventSubscriptionRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_events_pb.CreateVtsiEventSubscriptionRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.CreateVtsiEventSubscriptionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_CreateVtsiEventSubscriptionRequest(buffer_arg) {
  return ondewo_vtsi_events_pb.CreateVtsiEventSubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_CreateWebhookRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_events_pb.CreateWebhookRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.CreateWebhookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_CreateWebhookRequest(buffer_arg) {
  return ondewo_vtsi_events_pb.CreateWebhookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeleteVtsiEventSubscriptionRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeleteVtsiEventSubscriptionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeleteVtsiEventSubscriptionRequest(buffer_arg) {
  return ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeleteVtsiEventSubscriptionResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeleteVtsiEventSubscriptionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeleteVtsiEventSubscriptionResponse(buffer_arg) {
  return ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeleteWebhookRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_events_pb.DeleteWebhookRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeleteWebhookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeleteWebhookRequest(buffer_arg) {
  return ondewo_vtsi_events_pb.DeleteWebhookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_DeleteWebhookResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_events_pb.DeleteWebhookResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.DeleteWebhookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_DeleteWebhookResponse(buffer_arg) {
  return ondewo_vtsi_events_pb.DeleteWebhookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetVtsiEventSubscriptionRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_events_pb.GetVtsiEventSubscriptionRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetVtsiEventSubscriptionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetVtsiEventSubscriptionRequest(buffer_arg) {
  return ondewo_vtsi_events_pb.GetVtsiEventSubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_GetWebhookRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_events_pb.GetWebhookRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.GetWebhookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_GetWebhookRequest(buffer_arg) {
  return ondewo_vtsi_events_pb.GetWebhookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListVtsiEventSubscriptionsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListVtsiEventSubscriptionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListVtsiEventSubscriptionsRequest(buffer_arg) {
  return ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListVtsiEventSubscriptionsResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListVtsiEventSubscriptionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListVtsiEventSubscriptionsResponse(buffer_arg) {
  return ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListWebhooksRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_events_pb.ListWebhooksRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListWebhooksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListWebhooksRequest(buffer_arg) {
  return ondewo_vtsi_events_pb.ListWebhooksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_ListWebhooksResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_events_pb.ListWebhooksResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.ListWebhooksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_ListWebhooksResponse(buffer_arg) {
  return ondewo_vtsi_events_pb.ListWebhooksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_SubscribeVtsiEventsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_events_pb.SubscribeVtsiEventsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.SubscribeVtsiEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_SubscribeVtsiEventsRequest(buffer_arg) {
  return ondewo_vtsi_events_pb.SubscribeVtsiEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_SubscribeVtsiEventsResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_events_pb.SubscribeVtsiEventsResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.SubscribeVtsiEventsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_SubscribeVtsiEventsResponse(buffer_arg) {
  return ondewo_vtsi_events_pb.SubscribeVtsiEventsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_TestWebhookRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_events_pb.TestWebhookRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.TestWebhookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_TestWebhookRequest(buffer_arg) {
  return ondewo_vtsi_events_pb.TestWebhookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_TestWebhookResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_events_pb.TestWebhookResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.TestWebhookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_TestWebhookResponse(buffer_arg) {
  return ondewo_vtsi_events_pb.TestWebhookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UpdateVtsiEventSubscriptionRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_events_pb.UpdateVtsiEventSubscriptionRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.UpdateVtsiEventSubscriptionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UpdateVtsiEventSubscriptionRequest(buffer_arg) {
  return ondewo_vtsi_events_pb.UpdateVtsiEventSubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_UpdateWebhookRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_events_pb.UpdateWebhookRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.UpdateWebhookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_UpdateWebhookRequest(buffer_arg) {
  return ondewo_vtsi_events_pb.UpdateWebhookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_VtsiEventSubscription(arg) {
  if (!(arg instanceof ondewo_vtsi_events_pb.VtsiEventSubscription)) {
    throw new Error('Expected argument of type ondewo.vtsi.VtsiEventSubscription');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_VtsiEventSubscription(buffer_arg) {
  return ondewo_vtsi_events_pb.VtsiEventSubscription.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_Webhook(arg) {
  if (!(arg instanceof ondewo_vtsi_events_pb.Webhook)) {
    throw new Error('Expected argument of type ondewo.vtsi.Webhook');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_Webhook(buffer_arg) {
  return ondewo_vtsi_events_pb.Webhook.deserializeBinary(new Uint8Array(buffer_arg));
}


// <p>ONDEWO VTSI API</p>
// <p>Notifies other systems of VTSI events: calls, callers, listeners, scheduled callers,
// campaigns, VTSI projects, the project&apos;s Asterisk and softphone accounts. Every event is one
// value of <a href="index.html#ondewo.vtsi.VtsiEvent">VtsiEvent</a> and is delivered as a
// <a href="index.html#ondewo.vtsi.VtsiEventMessage">VtsiEventMessage</a>.</p>
// <p>Two delivery paths: the server-streaming <code>SubscribeVtsiEvents</code> RPC, and WEBHOOKS
// (an HTTP request per event to a URL of the client&apos;s choice). Which events go to which
// webhooks is configured per project with EVENT SUBSCRIPTIONS.</p>
// <p><b>Webhooks are best effort.</b> Each event is sent to a webhook as at most
// <code>ONDEWO_VTSI_WEBHOOK_MAX_ATTEMPTS</code> HTTP requests (3 by default) with backoff between
// them; after the last one fails, the event is dropped for that webhook. Pending webhook requests
// live in the memory of the server replica that produced the event and are lost when it restarts.
// An overloaded server, or a webhook that keeps timing out, drops events rather than slowing calls
// down. The same event can arrive more than once (a request whose answer was lost is sent again):
// de-duplicate by <code>event_id</code>. Requests of one webhook can arrive out of order, because
// several server replicas send independently: order by <code>resource_sequence</code> per
// <code>resource_name</code>, then <code>event_time</code>.</p>
// <p><b>Streams can be resumed.</b> While a project has an open <code>SubscribeVtsiEvents</code>
// stream or an enabled event subscription, its events are also written to a short-lived journal
// (24 h by default). A stream that reconnects with its last <code>resume_token</code> receives the
// events it missed, provided they are still in the journal; nothing else is persisted for
// redelivery.</p>
// <p>Use the status RPCs (<code>GetCampaign</code>, <code>ListCalls</code>, the status streams) to
// reconcile.</p>
// <p><b>Custom header values are write-only.</b> They are returned as <code>********</code> by every
// RPC and are never logged.</p>
// <p>Errors are gRPC status codes: <code>INVALID_ARGUMENT</code>, <code>NOT_FOUND</code>,
// <code>FAILED_PRECONDITION</code>, <code>RESOURCE_EXHAUSTED</code> (no free stream slot).</p>
var EventsService = exports.EventsService = {
  // ////////////////////////////////////////////////////////////////////////////
// Event subscription endpoints
// ////////////////////////////////////////////////////////////////////////////
//
// <p>Creates an event subscription: which events of the project are delivered to which
// webhooks. A subscription without webhooks is usable by <code>SubscribeVtsiEvents</code>.</p>
// <p>Errors: <code>NOT_FOUND</code> for an unknown project or webhook; <code>INVALID_ARGUMENT</code>
// for no events and <code>all_events</code> unset, <code>events</code> together with
// <code>all_events</code>, <code>VTSI_EVENT_UNSPECIFIED</code> or a reserved value, a webhook or a
// campaign name of another project, a malformed campaign name, or an output-only field that was
// set. A campaign named in <code>campaign_names</code> need not exist (it may be created later
// or deleted since).</p>
createVtsiEventSubscription: {
    path: '/ondewo.vtsi.Events/CreateVtsiEventSubscription',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_events_pb.CreateVtsiEventSubscriptionRequest,
    responseType: ondewo_vtsi_events_pb.VtsiEventSubscription,
    requestSerialize: serialize_ondewo_vtsi_CreateVtsiEventSubscriptionRequest,
    requestDeserialize: deserialize_ondewo_vtsi_CreateVtsiEventSubscriptionRequest,
    responseSerialize: serialize_ondewo_vtsi_VtsiEventSubscription,
    responseDeserialize: deserialize_ondewo_vtsi_VtsiEventSubscription,
  },
  // <p>Returns an event subscription.</p>
getVtsiEventSubscription: {
    path: '/ondewo.vtsi.Events/GetVtsiEventSubscription',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_events_pb.GetVtsiEventSubscriptionRequest,
    responseType: ondewo_vtsi_events_pb.VtsiEventSubscription,
    requestSerialize: serialize_ondewo_vtsi_GetVtsiEventSubscriptionRequest,
    requestDeserialize: deserialize_ondewo_vtsi_GetVtsiEventSubscriptionRequest,
    responseSerialize: serialize_ondewo_vtsi_VtsiEventSubscription,
    responseDeserialize: deserialize_ondewo_vtsi_VtsiEventSubscription,
  },
  // <p>Updates the fields named in <code>update_mask</code>: <code>display_name</code>,
// <code>events</code>, <code>all_events</code>, <code>resource_name_prefixes</code>,
// <code>campaign_names</code>, <code>webhook_names</code>, <code>disabled</code>. Takes effect
// within a few seconds on every server replica.</p>
updateVtsiEventSubscription: {
    path: '/ondewo.vtsi.Events/UpdateVtsiEventSubscription',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_events_pb.UpdateVtsiEventSubscriptionRequest,
    responseType: ondewo_vtsi_events_pb.VtsiEventSubscription,
    requestSerialize: serialize_ondewo_vtsi_UpdateVtsiEventSubscriptionRequest,
    requestDeserialize: deserialize_ondewo_vtsi_UpdateVtsiEventSubscriptionRequest,
    responseSerialize: serialize_ondewo_vtsi_VtsiEventSubscription,
    responseDeserialize: deserialize_ondewo_vtsi_VtsiEventSubscription,
  },
  // <p>Deletes an event subscription. Open <code>SubscribeVtsiEvents</code> streams that name it
// end with <code>end_reason</code> set.</p>
deleteVtsiEventSubscription: {
    path: '/ondewo.vtsi.Events/DeleteVtsiEventSubscription',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionRequest,
    responseType: ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionResponse,
    requestSerialize: serialize_ondewo_vtsi_DeleteVtsiEventSubscriptionRequest,
    requestDeserialize: deserialize_ondewo_vtsi_DeleteVtsiEventSubscriptionRequest,
    responseSerialize: serialize_ondewo_vtsi_DeleteVtsiEventSubscriptionResponse,
    responseDeserialize: deserialize_ondewo_vtsi_DeleteVtsiEventSubscriptionResponse,
  },
  // <p>Lists the event subscriptions of a project, paged.</p>
listVtsiEventSubscriptions: {
    path: '/ondewo.vtsi.Events/ListVtsiEventSubscriptions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsRequest,
    responseType: ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsResponse,
    requestSerialize: serialize_ondewo_vtsi_ListVtsiEventSubscriptionsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_ListVtsiEventSubscriptionsRequest,
    responseSerialize: serialize_ondewo_vtsi_ListVtsiEventSubscriptionsResponse,
    responseDeserialize: deserialize_ondewo_vtsi_ListVtsiEventSubscriptionsResponse,
  },
  // ////////////////////////////////////////////////////////////////////////////
// Webhook endpoints
// ////////////////////////////////////////////////////////////////////////////
//
// <p>Creates a webhook: an HTTP(S) endpoint that receives one request per event, with a JSON
// body holding the <code>VtsiEventMessage</code> (proto3 JSON, original field names).</p>
// <p>Errors: <code>NOT_FOUND</code> for an unknown project; <code>INVALID_ARGUMENT</code> for a
// URL that is not http(s), has no host, carries user information (use a custom header for
// credentials) or exceeds 2048 characters; for a reserved or malformed header name, a header
// value with a line break, too many or too long headers; or for a timeout outside
// 1 s to 30 s.</p>
createWebhook: {
    path: '/ondewo.vtsi.Events/CreateWebhook',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_events_pb.CreateWebhookRequest,
    responseType: ondewo_vtsi_events_pb.Webhook,
    requestSerialize: serialize_ondewo_vtsi_CreateWebhookRequest,
    requestDeserialize: deserialize_ondewo_vtsi_CreateWebhookRequest,
    responseSerialize: serialize_ondewo_vtsi_Webhook,
    responseDeserialize: deserialize_ondewo_vtsi_Webhook,
  },
  // <p>Returns a webhook. Custom header values are masked.</p>
getWebhook: {
    path: '/ondewo.vtsi.Events/GetWebhook',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_events_pb.GetWebhookRequest,
    responseType: ondewo_vtsi_events_pb.Webhook,
    requestSerialize: serialize_ondewo_vtsi_GetWebhookRequest,
    requestDeserialize: deserialize_ondewo_vtsi_GetWebhookRequest,
    responseSerialize: serialize_ondewo_vtsi_Webhook,
    responseDeserialize: deserialize_ondewo_vtsi_Webhook,
  },
  // <p>Updates the fields named in <code>update_mask</code>: <code>display_name</code>,
// <code>url</code>, <code>http_method</code>, <code>custom_headers</code>, <code>disabled</code>,
// <code>timeout</code>. <code>custom_headers</code> replaces the whole map; a value equal to the
// mask <code>********</code> keeps the stored value of that header, so a Get-modify-Update
// round trip does not overwrite secrets with the mask.</p>
// <p>Moving the webhook to another origin (scheme, host or port of <code>url</code>) while custom
// headers are stored requires re-sending <code>custom_headers</code> in the same request, with
// their REAL values (or an empty map to drop them): the stored values are never carried to a new
// origin, and an update that leaves <code>custom_headers</code> out of the mask or sends the mask
// value <code>********</code> for any header is rejected with <code>INVALID_ARGUMENT</code> naming
// the headers. A new path on the same origin keeps the stored values.</p>
updateWebhook: {
    path: '/ondewo.vtsi.Events/UpdateWebhook',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_events_pb.UpdateWebhookRequest,
    responseType: ondewo_vtsi_events_pb.Webhook,
    requestSerialize: serialize_ondewo_vtsi_UpdateWebhookRequest,
    requestDeserialize: deserialize_ondewo_vtsi_UpdateWebhookRequest,
    responseSerialize: serialize_ondewo_vtsi_Webhook,
    responseDeserialize: deserialize_ondewo_vtsi_Webhook,
  },
  // <p>Deletes a webhook and removes it from every event subscription.</p>
deleteWebhook: {
    path: '/ondewo.vtsi.Events/DeleteWebhook',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_events_pb.DeleteWebhookRequest,
    responseType: ondewo_vtsi_events_pb.DeleteWebhookResponse,
    requestSerialize: serialize_ondewo_vtsi_DeleteWebhookRequest,
    requestDeserialize: deserialize_ondewo_vtsi_DeleteWebhookRequest,
    responseSerialize: serialize_ondewo_vtsi_DeleteWebhookResponse,
    responseDeserialize: deserialize_ondewo_vtsi_DeleteWebhookResponse,
  },
  // <p>Lists the webhooks of a project, paged. Custom header values are masked.</p>
listWebhooks: {
    path: '/ondewo.vtsi.Events/ListWebhooks',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_events_pb.ListWebhooksRequest,
    responseType: ondewo_vtsi_events_pb.ListWebhooksResponse,
    requestSerialize: serialize_ondewo_vtsi_ListWebhooksRequest,
    requestDeserialize: deserialize_ondewo_vtsi_ListWebhooksRequest,
    responseSerialize: serialize_ondewo_vtsi_ListWebhooksResponse,
    responseDeserialize: deserialize_ondewo_vtsi_ListWebhooksResponse,
  },
  // <p>Sends one <code>VTSI_EVENT_WEBHOOK_TEST</code> event to a webhook now, without retries,
// and reports the outcome. Works on a disabled webhook too, and ignores an open circuit.</p>
// <p>Errors: <code>NOT_FOUND</code>. A failed delivery is reported in the response, not as an
// error status.</p>
testWebhook: {
    path: '/ondewo.vtsi.Events/TestWebhook',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_events_pb.TestWebhookRequest,
    responseType: ondewo_vtsi_events_pb.TestWebhookResponse,
    requestSerialize: serialize_ondewo_vtsi_TestWebhookRequest,
    requestDeserialize: deserialize_ondewo_vtsi_TestWebhookRequest,
    responseSerialize: serialize_ondewo_vtsi_TestWebhookResponse,
    responseDeserialize: deserialize_ondewo_vtsi_TestWebhookResponse,
  },
  // ////////////////////////////////////////////////////////////////////////////
// Event stream endpoint
// ////////////////////////////////////////////////////////////////////////////
//
// <p>Streams the events of a project as they happen, selected either by a named event
// subscription or by an inline filter. An empty message is sent as a keep-alive. After a
// disconnect, pass the last <code>resume_token</code> to continue where the stream stopped;
// events older than the server&apos;s retention (24 h by default) are no longer available, and
// the journal records a project&apos;s events only while it has an open stream (and for 1 h
// after the last one closed) or an enabled event subscription. A stream sees events of other
// server replicas from at most a few seconds after it opened. A client that stops reading for
// longer than the server&apos;s stall timeout (30 s by default) is disconnected; reconnect with
// the <code>resume_token</code>. When the project is deleted, the stream delivers
// <code>VTSI_EVENT_VTSI_PROJECT_DELETED</code> and ends.</p>
// <p>Errors: <code>NOT_FOUND</code> for an unknown project or subscription;
// <code>INVALID_ARGUMENT</code> for a malformed <code>resume_token</code>;
// <code>FAILED_PRECONDITION</code> for a disabled subscription; <code>RESOURCE_EXHAUSTED</code>
// when the server has no free stream slot.</p>
subscribeVtsiEvents: {
    path: '/ondewo.vtsi.Events/SubscribeVtsiEvents',
    requestStream: false,
    responseStream: true,
    requestType: ondewo_vtsi_events_pb.SubscribeVtsiEventsRequest,
    responseType: ondewo_vtsi_events_pb.SubscribeVtsiEventsResponse,
    requestSerialize: serialize_ondewo_vtsi_SubscribeVtsiEventsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_SubscribeVtsiEventsRequest,
    responseSerialize: serialize_ondewo_vtsi_SubscribeVtsiEventsResponse,
    responseDeserialize: deserialize_ondewo_vtsi_SubscribeVtsiEventsResponse,
  },
};

exports.EventsClient = grpc.makeGenericClientConstructor(EventsService, 'Events');
