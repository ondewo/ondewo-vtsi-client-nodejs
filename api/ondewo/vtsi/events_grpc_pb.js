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

function serialize_ondewo_vtsi_RedeliverWebhookEventsRequest(arg) {
  if (!(arg instanceof ondewo_vtsi_events_pb.RedeliverWebhookEventsRequest)) {
    throw new Error('Expected argument of type ondewo.vtsi.RedeliverWebhookEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_RedeliverWebhookEventsRequest(buffer_arg) {
  return ondewo_vtsi_events_pb.RedeliverWebhookEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_vtsi_RedeliverWebhookEventsResponse(arg) {
  if (!(arg instanceof ondewo_vtsi_events_pb.RedeliverWebhookEventsResponse)) {
    throw new Error('Expected argument of type ondewo.vtsi.RedeliverWebhookEventsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_vtsi_RedeliverWebhookEventsResponse(buffer_arg) {
  return ondewo_vtsi_events_pb.RedeliverWebhookEventsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
// <code>resource_name</code>, then <code>event_time</code>. Events a webhook missed can be sent again from
// the journal with <code>RedeliverWebhookEvents</code>.</p>
// <p><b>Webhook requests.</b> One HTTP request per event, with the webhook&apos;s <code>http_method</code>
// (POST by default), the <code>VtsiEventMessage</code> as the body (proto3 JSON, original field names,
// UTF-8) and these headers, set by the server (a custom header can never use these names):</p>
// <ul>
//   <li><code>Content-Type: application/json</code></li>
//   <li><code>User-Agent: ondewo-vtsi/&lt;server version&gt;</code></li>
//   <li><code>X-Ondewo-Vtsi-Event</code>: the <code>VtsiEvent</code> name, e.g.
//       <code>VTSI_EVENT_CALL_CONNECTED</code> (the decimal number for a value the server cannot name)</li>
//   <li><code>X-Ondewo-Vtsi-Event-Id</code>: the <code>event_id</code></li>
//   <li><code>X-Ondewo-Vtsi-Delivery-Attempt</code>: the request&apos;s attempt number for this event, starting
//       at 1 (a redelivery starts at 1 again)</li>
//   <li><code>X-Ondewo-Vtsi-Webhook</code>: the webhook&apos;s resource name, so one endpoint can serve
//       several webhooks</li>
//   <li><code>X-Ondewo-Vtsi-Signature</code>: only when the webhook has a <code>signing_secret</code>:
//       <code>t=&lt;unix seconds&gt;,v1=&lt;signature&gt;</code>, see <code>Webhook.signing_secret</code></li>
//   <li><code>X-Ondewo-Vtsi-Redelivery: true</code>: only on requests sent by
//       <code>RedeliverWebhookEvents</code></li>
//   <li><code>X-Ondewo-Vtsi-Test: true</code>: only on requests sent by <code>TestWebhook</code></li>
// </ul>
// <p>then the webhook&apos;s <code>custom_headers</code>. A 2xx answer is a delivery; a 408, 425, 429 or 5xx
// answer, a timeout or a connection failure is retried; any other answer (a 3xx included: redirects are
// never followed) fails the event for that webhook at once.</p>
// <p><b>Streams can be resumed.</b> While a project has an open <code>SubscribeVtsiEvents</code>
// stream (and for <code>ONDEWO_VTSI_EVENT_STREAM_RESUME_WINDOW_S</code>, 1 h by default, after the last one
// closed) or an enabled event subscription, its events are also written to a short-lived journal
// (<code>ONDEWO_VTSI_EVENT_JOURNAL_RETENTION_S</code>, 24 h by default). A stream that reconnects with its last
// <code>resume_token</code>, or opens with a <code>start_time</code>, receives the events it missed, provided
// they are still in the journal; <code>RedeliverWebhookEvents</code> reads the same journal. Nothing else is
// persisted for redelivery, and events of a period in which the project had neither a stream nor an enabled
// subscription were never journaled.</p>
// <p>Use the status RPCs (<code>GetCampaign</code>, <code>ListCalls</code>, the status streams) to
// reconcile.</p>
// <p><b>Custom header values and signing secrets are write-only.</b> They are returned as
// <code>********</code> by every RPC and are never logged or put on an event.</p>
// <p><b>Names.</b> Event subscriptions are named
// <code>projects/&lt;project_uuid&gt;/event_subscriptions/&lt;subscription_uuid&gt;</code>, webhooks
// <code>projects/&lt;project_uuid&gt;/webhooks/&lt;webhook_uuid&gt;</code>, projects
// <code>projects/&lt;project_uuid&gt;/project</code>. Display names of webhooks and subscriptions are free
// text of at most 128 characters, NOT unique (two webhooks may share one) and may be empty; an empty display
// name stays empty (no default is generated). Resources are always addressed by resource name.</p>
// <p><b>Partial responses.</b> Every RPC returning a <code>VtsiEventSubscription</code> or a
// <code>Webhook</code>, the listings and the two <code>Delete*</code> RPCs (paths of their response) accept a
// <code>field_mask</code> with the convention of
// <a href="index.html#ondewo.vtsi.GetCampaignRequest">GetCampaignRequest.field_mask</a>: paths relative to the
// returned message, <code>name</code> always populated, unset or empty returns every field, an unknown path or
// a path below a repeated or map field is <code>INVALID_ARGUMENT</code> naming it, applied after the masking
// of secrets so a masked value stays <code>********</code>. A mask never changes what the RPC does.</p>
// <p><b>Authorization</b> (when enforced): the subscription and webhook RPCs, <code>TestWebhook</code> and
// <code>RedeliverWebhookEvents</code> need <code>PROJECT_DEVELOPER</code> or a higher role
// (<code>PROJECT_ADMIN</code>) on the project, or <code>SERVER_ADMIN</code>: a webhook is a standing outbound
// integration, i.e. administration. <code>SubscribeVtsiEvents</code> reads the project&apos;s events and needs
// <code>PROJECT_EXECUTOR</code> or higher.</p>
// <p>Errors are gRPC status codes: <code>INVALID_ARGUMENT</code> for a malformed resource name (also one of
// another collection), a request field out of range, a resource of another project than the request&apos;s
// <code>vtsi_project_name</code>, an output-only field that was set, an unknown <code>update_mask</code> or
// <code>field_mask</code> path; <code>NOT_FOUND</code> for an unknown project, subscription or webhook;
// <code>PERMISSION_DENIED</code> with authorization enforced for a project on which the caller holds no
// sufficient role (an unknown project included, so it is not answered <code>NOT_FOUND</code>);
// <code>UNAUTHENTICATED</code> for a request without a valid credential while authorization is enforced;
// <code>FAILED_PRECONDITION</code> for a disabled subscription or webhook where the RPC needs an enabled one;
// <code>ABORTED</code> when a concurrent change of the same subscription or webhook won (nothing was written;
// retry); <code>OUT_OF_RANGE</code> for a <code>start_time</code> older than the journal&apos;s retention;
// <code>RESOURCE_EXHAUSTED</code> when the server has no free stream slot
// (<code>ONDEWO_VTSI_EVENT_STREAM_MAX_CONCURRENT</code>, 16 per replica by default);
// <code>UNAVAILABLE</code> when event streams are not available on the replica reached (retry).</p>
var EventsService = exports.EventsService = {
  // ////////////////////////////////////////////////////////////////////////////
// Event subscription endpoints
// ////////////////////////////////////////////////////////////////////////////
//
// <p>Creates an event subscription: which events of the project are delivered to which
// webhooks. A subscription without webhooks is usable by <code>SubscribeVtsiEvents</code>. Takes effect
// within a few seconds on every server replica. Not idempotent: a repeat creates a second subscription.
// Emits <code>VTSI_EVENT_EVENT_SUBSCRIPTION_CREATED</code>.</p>
// <p>Errors: <code>NOT_FOUND</code> for an unknown project or webhook; <code>INVALID_ARGUMENT</code>
// for a malformed <code>vtsi_project_name</code>, no events and <code>all_events</code> unset,
// <code>events</code> together with <code>all_events</code>, <code>VTSI_EVENT_UNSPECIFIED</code> or a
// reserved value in <code>events</code> or <code>excluded_events</code>, an event both in
// <code>events</code> and <code>excluded_events</code>, a webhook or a campaign name of another project, a
// malformed webhook or campaign name, more entries than a list allows, a <code>display_name</code> over 128
// characters, an output-only field that was set or an unknown <code>field_mask</code> path. A campaign
// named in <code>campaign_names</code> need not exist (it may be created later or deleted since).</p>
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
  // <p>Returns an event subscription. Read-only.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for an empty or malformed <code>name</code> or an unknown
// <code>field_mask</code> path; <code>NOT_FOUND</code> for an unknown project or subscription.</p>
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
// <code>events</code>, <code>all_events</code>, <code>excluded_events</code>,
// <code>resource_name_prefixes</code>, <code>campaign_names</code>, <code>webhook_names</code>,
// <code>disabled</code>. Takes effect within a few seconds on every server replica; disabling it ends
// the open <code>SubscribeVtsiEvents</code> streams that name it (<code>STREAM_END_REASON_SUBSCRIPTION_DISABLED</code>).
// The result is validated as a whole, as on create. Emits
// <code>VTSI_EVENT_EVENT_SUBSCRIPTION_UPDATED</code> (attribute <code>updated_fields</code>).</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for a malformed <code>event_subscription.name</code>, an empty
// mask, an unknown or output-only path, a result that would be invalid on create, or an unknown
// <code>field_mask</code> path; <code>NOT_FOUND</code> for an unknown project, subscription or webhook;
// <code>ABORTED</code> when a concurrent update won.</p>
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
// end with <code>end_reason</code> set (<code>STREAM_END_REASON_SUBSCRIPTION_DELETED</code>). Its webhooks
// are not deleted. Emits <code>VTSI_EVENT_EVENT_SUBSCRIPTION_DELETED</code>.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for an empty or malformed <code>name</code> or an unknown
// <code>field_mask</code> path; <code>NOT_FOUND</code> for an unknown project or subscription (also on a
// repeated delete).</p>
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
  // <p>Lists the event subscriptions of a project, newest first, paged.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for a malformed <code>vtsi_project_name</code>, a negative
// <code>page_size</code>, a foreign <code>page_token</code> or an unknown <code>field_mask</code> path;
// <code>NOT_FOUND</code> for an unknown project.</p>
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
// body holding the <code>VtsiEventMessage</code> (proto3 JSON, original field names; see the service
// documentation for the headers). A webhook receives events only once an event subscription names it.
// Not idempotent. Emits <code>VTSI_EVENT_WEBHOOK_CREATED</code>.</p>
// <p>Errors: <code>NOT_FOUND</code> for an unknown project; <code>INVALID_ARGUMENT</code> for a
// malformed <code>vtsi_project_name</code>, a URL that is not http(s), has no host, carries user
// information (use a custom header for credentials) or exceeds 2048 characters; for a reserved or
// malformed header name, a header value with a line break, too many or too long headers; for a timeout
// outside 1 s to 30 s; for a <code>signing_secret</code> that is not 32 to 256 printable ASCII characters
// without whitespace (or is the mask <code>********</code>); for a <code>display_name</code> over 128
// characters, an output-only field that was set or an unknown <code>field_mask</code> path.</p>
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
  // <p>Returns a webhook. Custom header values and the signing secret are masked. Read-only.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for an empty or malformed <code>name</code> or an unknown
// <code>field_mask</code> path; <code>NOT_FOUND</code> for an unknown project or webhook.</p>
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
// <code>timeout</code>, <code>signing_secret</code>. <code>custom_headers</code> replaces the whole map; a
// value equal to the mask <code>********</code> keeps the stored value of that header, so a
// Get-modify-Update round trip does not overwrite secrets with the mask. <code>signing_secret</code>
// follows the same rule (see <code>Webhook.signing_secret</code> for rotation).</p>
// <p>Moving the webhook to another origin (scheme, host or port of <code>url</code>) while custom
// headers are stored requires re-sending <code>custom_headers</code> in the same request, with
// their REAL values (or an empty map to drop them): the stored values are never carried to a new
// origin, and an update that leaves <code>custom_headers</code> out of the mask or sends the mask
// value <code>********</code> for any header is rejected with <code>INVALID_ARGUMENT</code> naming
// the headers. A new path on the same origin keeps the stored values. The signing secret is kept on a
// new origin (it is never sent, only used to sign). Takes effect within a few seconds on every replica.
// Emits <code>VTSI_EVENT_WEBHOOK_UPDATED</code> (attribute
// <code>updated_fields</code>).</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for a malformed <code>webhook.name</code>, an empty mask, an
// unknown or output-only path, a value invalid on create, the origin rule above, or an unknown
// <code>field_mask</code> path; <code>NOT_FOUND</code> for an unknown project or webhook;
// <code>ABORTED</code> when a concurrent update won.</p>
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
  // <p>Deletes a webhook and removes it from every event subscription; requests of it still queued are
// dropped. Emits <code>VTSI_EVENT_WEBHOOK_DELETED</code>.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for an empty or malformed <code>name</code> or an unknown
// <code>field_mask</code> path; <code>NOT_FOUND</code> for an unknown project or webhook (also on a
// repeated delete).</p>
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
  // <p>Lists the webhooks of a project, newest first, paged. Custom header values and signing secrets are
// masked.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for a malformed <code>vtsi_project_name</code>, a negative
// <code>page_size</code>, a foreign <code>page_token</code> or an unknown <code>field_mask</code> path;
// <code>NOT_FOUND</code> for an unknown project.</p>
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
  // <p>Sends one test event to a webhook now, without retries, and reports the outcome: a
// <code>VTSI_EVENT_WEBHOOK_TEST</code> event, or, with <code>sample_event</code>, an event shaped like that
// real event (see <code>TestWebhookRequest.sample_event</code>). The request carries every header of a real
// delivery (signature included) plus <code>X-Ondewo-Vtsi-Test: true</code>. Works on a disabled webhook
// too, and ignores an open circuit. The test event is not journaled, not counted in
// <code>delivery_statistics</code> and not delivered anywhere else.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for an empty or malformed <code>name</code>, or a
// <code>sample_event</code> that is reserved or unknown to the server; <code>NOT_FOUND</code> for an
// unknown project or webhook. A failed delivery is reported in the response, not as an error status.</p>
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
  // <p>Sends events from the server&apos;s event journal to a webhook again: the events named by
// <code>event_ids</code>, or the events of a time window that the webhook&apos;s event subscriptions select
// (optionally narrowed by <code>filter</code>). Each event is queued for the webhook like a new delivery
// (same body and <code>event_id</code>, so a receiver de-duplicates as usual, attempt numbers from 1,
// retries and backoff as configured, header <code>X-Ondewo-Vtsi-Redelivery: true</code>) on the replica
// that serves the request, oldest first. Best effort like every webhook delivery: the RPC answers once the
// events are queued, not delivered; follow <code>delivery_statistics</code> or the receiver.</p>
// <p>Only what the journal still holds can be sent: events older than
// <code>ONDEWO_VTSI_EVENT_JOURNAL_RETENTION_S</code> (24 h by default) and events of a period in which the
// project had neither an open stream nor an enabled event subscription are not available and are counted
// in <code>not_in_journal_count</code> when named. At most 1000 events are queued per request
// (<code>not_enqueued_count</code> and <code>next_start_time</code> say how to continue). Not idempotent: a
// repeat sends the events again. Emits no event.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for an empty or malformed <code>webhook_name</code>, neither or
// both of <code>event_ids</code> and <code>start_time</code>, more than 1000 <code>event_ids</code>, an
// <code>event_id</code> that is not a uuid, <code>end_time</code> without <code>start_time</code> or not
// after it, a window longer than the journal retention, or an invalid <code>filter</code> (as on
// <code>SubscribeVtsiEvents</code>); <code>NOT_FOUND</code> for an unknown project or webhook;
// <code>FAILED_PRECONDITION</code> for a disabled webhook (enable it first; <code>TestWebhook</code> works
// on a disabled one); <code>OUT_OF_RANGE</code> for a <code>start_time</code> older than the journal
// retention; <code>RESOURCE_EXHAUSTED</code> when the server&apos;s webhook queue cannot take a single
// event now (retry later).</p>
redeliverWebhookEvents: {
    path: '/ondewo.vtsi.Events/RedeliverWebhookEvents',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_vtsi_events_pb.RedeliverWebhookEventsRequest,
    responseType: ondewo_vtsi_events_pb.RedeliverWebhookEventsResponse,
    requestSerialize: serialize_ondewo_vtsi_RedeliverWebhookEventsRequest,
    requestDeserialize: deserialize_ondewo_vtsi_RedeliverWebhookEventsRequest,
    responseSerialize: serialize_ondewo_vtsi_RedeliverWebhookEventsResponse,
    responseDeserialize: deserialize_ondewo_vtsi_RedeliverWebhookEventsResponse,
  },
  // ////////////////////////////////////////////////////////////////////////////
// Event stream endpoint
// ////////////////////////////////////////////////////////////////////////////
//
// <p>Streams the events of a project as they happen, selected either by a named event
// subscription or by an inline filter. An empty message is sent as a keep-alive after
// <code>ONDEWO_VTSI_EVENT_STREAM_KEEPALIVE_S</code> (15 s by default) without an event. After a
// disconnect, pass the last <code>resume_token</code> to continue where the stream stopped, or open
// with a <code>start_time</code> to replay from a point in time;
// events older than the server&apos;s retention (24 h by default) are no longer available, and
// the journal records a project&apos;s events only while it has an open stream (and for 1 h
// after the last one closed) or an enabled event subscription. A stream sees events of other
// server replicas from at most a few seconds after it opened. A client that stops reading for
// longer than the server&apos;s stall timeout (<code>ONDEWO_VTSI_STREAM_STALL_TIMEOUT_S</code>, 30 s by
// default) is disconnected; one that reads so slowly that the stream&apos;s buffer
// (<code>ONDEWO_VTSI_EVENT_STREAM_BUFFER_SIZE</code>, 1000 events) overflows gets a last message with
// <code>STREAM_END_REASON_CLIENT_TOO_SLOW</code>; reconnect with the <code>resume_token</code> in both
// cases.</p>
// <p>The server ends the stream with a last message carrying <code>end_reason</code>,
// <code>end_reason_type</code> and a final <code>resume_token</code>: at the maximum stream duration
// <code>ONDEWO_VTSI_EVENT_STREAM_MAX_DURATION_S</code> (3600 s by default), on server shutdown, when the
// client is too slow, when the named subscription is deleted or disabled, and when the project is deleted
// (after delivering <code>VTSI_EVENT_VTSI_PROJECT_DELETED</code>). While authorization is enforced, the
// caller&apos;s role is re-checked periodically; a revoked role ends the RPC with
// <code>PERMISSION_DENIED</code>, an expired credential with <code>UNAUTHENTICATED</code>.</p>
// <p>Errors: <code>NOT_FOUND</code> for an unknown project or subscription;
// <code>INVALID_ARGUMENT</code> for a malformed <code>vtsi_project_name</code>, a malformed or foreign
// <code>event_subscription_name</code> (of another project), a malformed <code>resume_token</code> or
// one issued for another project, <code>resume_token</code> together with <code>start_time</code>, a
// <code>start_time</code> in the future, or an invalid <code>filter</code> (a reserved or unspecified
// event, an event both selected and excluded, <code>all_events</code> with <code>events</code>, a malformed
// campaign name or one of another project, more than 50 prefixes or campaign names);
// <code>OUT_OF_RANGE</code> for a <code>start_time</code> older than the journal retention;
// <code>FAILED_PRECONDITION</code> for a disabled subscription; <code>RESOURCE_EXHAUSTED</code>
// when the server has no free stream slot; <code>UNAVAILABLE</code> when the replica reached serves no
// event streams (retry).</p>
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
