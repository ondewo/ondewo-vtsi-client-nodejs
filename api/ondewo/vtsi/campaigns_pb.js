// source: ondewo/vtsi/campaigns.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var ondewo_sip_sip_pb = require('../../ondewo/sip/sip_pb.js');
goog.object.extend(proto, ondewo_sip_sip_pb);
var ondewo_vtsi_call_configs_pb = require('../../ondewo/vtsi/call_configs_pb.js');
goog.object.extend(proto, ondewo_vtsi_call_configs_pb);
goog.exportSymbol('proto.ondewo.vtsi.CallingWindowDayOfWeek', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CallingWindowSlot', null, global);
goog.exportSymbol('proto.ondewo.vtsi.Campaign', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CampaignAssignment', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CampaignAssignment.CampaignSelectorCase', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CampaignCall', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CampaignCallAttempt', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CampaignCallAttemptOutcome', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CampaignCallRefusal', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CampaignCallSource', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CampaignCallState', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CampaignCallingWindow', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CampaignFilter', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CampaignOrderBy', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CampaignStartMode', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CampaignState', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CampaignStatistics', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CancelCampaignCallsRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CancelCampaignCallsRequest.CampaignCase', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CancelCampaignCallsResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CloneCampaignRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CloneCampaignRequest.SourceCase', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CreateCampaignRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.DeleteCampaignRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.DeleteCampaignRequest.CampaignCase', null, global);
goog.exportSymbol('proto.ondewo.vtsi.DeleteCampaignResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.GetCampaignCallRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.GetCampaignRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.GetCampaignRequest.CampaignCase', null, global);
goog.exportSymbol('proto.ondewo.vtsi.GetCampaignStatisticsRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.GetCampaignStatisticsRequest.CampaignCase', null, global);
goog.exportSymbol('proto.ondewo.vtsi.HardStopCampaignRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.HardStopCampaignRequest.CampaignCase', null, global);
goog.exportSymbol('proto.ondewo.vtsi.ListCampaignCallsRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.ListCampaignCallsRequest.CampaignCase', null, global);
goog.exportSymbol('proto.ondewo.vtsi.ListCampaignCallsResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.ListCampaignsRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.ListCampaignsResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.ResumeCampaignRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.ResumeCampaignRequest.CampaignCase', null, global);
goog.exportSymbol('proto.ondewo.vtsi.RetryCampaignCallsRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.RetryCampaignCallsRequest.CampaignCase', null, global);
goog.exportSymbol('proto.ondewo.vtsi.RetryCampaignCallsResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StartCampaignRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StartCampaignRequest.CampaignCase', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StopCampaignRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StopCampaignRequest.CampaignCase', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StreamCampaignStatusRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StreamCampaignStatusResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StreamEndReason', null, global);
goog.exportSymbol('proto.ondewo.vtsi.UpdateCampaignRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.Campaign = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.Campaign.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.Campaign, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.Campaign.displayName = 'proto.ondewo.vtsi.Campaign';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.CampaignCallingWindow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.CampaignCallingWindow.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.CampaignCallingWindow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.CampaignCallingWindow.displayName = 'proto.ondewo.vtsi.CampaignCallingWindow';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.CallingWindowSlot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.CallingWindowSlot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.CallingWindowSlot.displayName = 'proto.ondewo.vtsi.CallingWindowSlot';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.CampaignStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.CampaignStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.CampaignStatistics.displayName = 'proto.ondewo.vtsi.CampaignStatistics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.CampaignCallAttempt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.CampaignCallAttempt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.CampaignCallAttempt.displayName = 'proto.ondewo.vtsi.CampaignCallAttempt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.CampaignCall = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.CampaignCall.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.CampaignCall, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.CampaignCall.displayName = 'proto.ondewo.vtsi.CampaignCall';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.CampaignAssignment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ondewo.vtsi.CampaignAssignment.oneofGroups_);
};
goog.inherits(proto.ondewo.vtsi.CampaignAssignment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.CampaignAssignment.displayName = 'proto.ondewo.vtsi.CampaignAssignment';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.CreateCampaignRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.CreateCampaignRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.CreateCampaignRequest.displayName = 'proto.ondewo.vtsi.CreateCampaignRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.GetCampaignRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ondewo.vtsi.GetCampaignRequest.oneofGroups_);
};
goog.inherits(proto.ondewo.vtsi.GetCampaignRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.GetCampaignRequest.displayName = 'proto.ondewo.vtsi.GetCampaignRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.UpdateCampaignRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.UpdateCampaignRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.UpdateCampaignRequest.displayName = 'proto.ondewo.vtsi.UpdateCampaignRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.DeleteCampaignRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ondewo.vtsi.DeleteCampaignRequest.oneofGroups_);
};
goog.inherits(proto.ondewo.vtsi.DeleteCampaignRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.DeleteCampaignRequest.displayName = 'proto.ondewo.vtsi.DeleteCampaignRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.DeleteCampaignResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.DeleteCampaignResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.DeleteCampaignResponse.displayName = 'proto.ondewo.vtsi.DeleteCampaignResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.CampaignFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.CampaignFilter.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.CampaignFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.CampaignFilter.displayName = 'proto.ondewo.vtsi.CampaignFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.ListCampaignsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.ListCampaignsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.ListCampaignsRequest.displayName = 'proto.ondewo.vtsi.ListCampaignsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.ListCampaignsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.ListCampaignsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.ListCampaignsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.ListCampaignsResponse.displayName = 'proto.ondewo.vtsi.ListCampaignsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.GetCampaignStatisticsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ondewo.vtsi.GetCampaignStatisticsRequest.oneofGroups_);
};
goog.inherits(proto.ondewo.vtsi.GetCampaignStatisticsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.GetCampaignStatisticsRequest.displayName = 'proto.ondewo.vtsi.GetCampaignStatisticsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.ListCampaignCallsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.ListCampaignCallsRequest.repeatedFields_, proto.ondewo.vtsi.ListCampaignCallsRequest.oneofGroups_);
};
goog.inherits(proto.ondewo.vtsi.ListCampaignCallsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.ListCampaignCallsRequest.displayName = 'proto.ondewo.vtsi.ListCampaignCallsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.ListCampaignCallsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.ListCampaignCallsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.ListCampaignCallsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.ListCampaignCallsResponse.displayName = 'proto.ondewo.vtsi.ListCampaignCallsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.StartCampaignRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ondewo.vtsi.StartCampaignRequest.oneofGroups_);
};
goog.inherits(proto.ondewo.vtsi.StartCampaignRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.StartCampaignRequest.displayName = 'proto.ondewo.vtsi.StartCampaignRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.StopCampaignRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ondewo.vtsi.StopCampaignRequest.oneofGroups_);
};
goog.inherits(proto.ondewo.vtsi.StopCampaignRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.StopCampaignRequest.displayName = 'proto.ondewo.vtsi.StopCampaignRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.HardStopCampaignRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ondewo.vtsi.HardStopCampaignRequest.oneofGroups_);
};
goog.inherits(proto.ondewo.vtsi.HardStopCampaignRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.HardStopCampaignRequest.displayName = 'proto.ondewo.vtsi.HardStopCampaignRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.ResumeCampaignRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ondewo.vtsi.ResumeCampaignRequest.oneofGroups_);
};
goog.inherits(proto.ondewo.vtsi.ResumeCampaignRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.ResumeCampaignRequest.displayName = 'proto.ondewo.vtsi.ResumeCampaignRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.StreamCampaignStatusRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.StreamCampaignStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.StreamCampaignStatusRequest.displayName = 'proto.ondewo.vtsi.StreamCampaignStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.StreamCampaignStatusResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.StreamCampaignStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.StreamCampaignStatusResponse.displayName = 'proto.ondewo.vtsi.StreamCampaignStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.GetCampaignCallRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.GetCampaignCallRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.GetCampaignCallRequest.displayName = 'proto.ondewo.vtsi.GetCampaignCallRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.CampaignCallRefusal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.CampaignCallRefusal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.CampaignCallRefusal.displayName = 'proto.ondewo.vtsi.CampaignCallRefusal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.CancelCampaignCallsRequest.repeatedFields_, proto.ondewo.vtsi.CancelCampaignCallsRequest.oneofGroups_);
};
goog.inherits(proto.ondewo.vtsi.CancelCampaignCallsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.CancelCampaignCallsRequest.displayName = 'proto.ondewo.vtsi.CancelCampaignCallsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.CancelCampaignCallsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.CancelCampaignCallsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.CancelCampaignCallsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.CancelCampaignCallsResponse.displayName = 'proto.ondewo.vtsi.CancelCampaignCallsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.RetryCampaignCallsRequest.repeatedFields_, proto.ondewo.vtsi.RetryCampaignCallsRequest.oneofGroups_);
};
goog.inherits(proto.ondewo.vtsi.RetryCampaignCallsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.RetryCampaignCallsRequest.displayName = 'proto.ondewo.vtsi.RetryCampaignCallsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.RetryCampaignCallsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.RetryCampaignCallsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.RetryCampaignCallsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.RetryCampaignCallsResponse.displayName = 'proto.ondewo.vtsi.RetryCampaignCallsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.vtsi.CloneCampaignRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.CloneCampaignRequest.repeatedFields_, proto.ondewo.vtsi.CloneCampaignRequest.oneofGroups_);
};
goog.inherits(proto.ondewo.vtsi.CloneCampaignRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.CloneCampaignRequest.displayName = 'proto.ondewo.vtsi.CloneCampaignRequest';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.Campaign.repeatedFields_ = [20];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.Campaign.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.Campaign.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.Campaign} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.Campaign.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    campaignId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    maxParallelCalls: jspb.Message.getFieldWithDefault(msg, 5, 0),
    maxAttempts: jspb.Message.getFieldWithDefault(msg, 6, 0),
    retryDelay: (f = msg.getRetryDelay()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    state: jspb.Message.getFieldWithDefault(msg, 8, 0),
    stateReason: jspb.Message.getFieldWithDefault(msg, 9, ""),
    statistics: (f = msg.getStatistics()) && proto.ondewo.vtsi.CampaignStatistics.toObject(includeInstance, f),
    createdBy: jspb.Message.getFieldWithDefault(msg, 11, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    modifiedBy: jspb.Message.getFieldWithDefault(msg, 13, ""),
    modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    startedAt: (f = msg.getStartedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    stoppedAt: (f = msg.getStoppedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    completedAt: (f = msg.getCompletedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    campaignCommonServicesConfig: (f = msg.getCampaignCommonServicesConfig()) && ondewo_vtsi_call_configs_pb.CommonServicesConfig.toObject(includeInstance, f),
    campaignSipCallerConfig: (f = msg.getCampaignSipCallerConfig()) && ondewo_vtsi_call_configs_pb.SipCallerConfig.toObject(includeInstance, f),
    campaignCallersList: (f = jspb.Message.getRepeatedField(msg, 20)) == null ? undefined : f,
    campaignCallersTruncated: jspb.Message.getBooleanFieldWithDefault(msg, 21, false),
    callingWindow: (f = msg.getCallingWindow()) && proto.ondewo.vtsi.CampaignCallingWindow.toObject(includeInstance, f),
    outsideCallingWindow: jspb.Message.getBooleanFieldWithDefault(msg, 23, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.Campaign}
 */
proto.ondewo.vtsi.Campaign.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.Campaign;
  return proto.ondewo.vtsi.Campaign.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.Campaign} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.Campaign}
 */
proto.ondewo.vtsi.Campaign.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaignId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVtsiProjectName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxParallelCalls(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxAttempts(value);
      break;
    case 7:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setRetryDelay(value);
      break;
    case 8:
      var value = /** @type {!proto.ondewo.vtsi.CampaignState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setStateReason(value);
      break;
    case 10:
      var value = new proto.ondewo.vtsi.CampaignStatistics;
      reader.readMessage(value,proto.ondewo.vtsi.CampaignStatistics.deserializeBinaryFromReader);
      msg.setStatistics(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setModifiedBy(value);
      break;
    case 14:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
      break;
    case 15:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartedAt(value);
      break;
    case 16:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStoppedAt(value);
      break;
    case 17:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCompletedAt(value);
      break;
    case 18:
      var value = new ondewo_vtsi_call_configs_pb.CommonServicesConfig;
      reader.readMessage(value,ondewo_vtsi_call_configs_pb.CommonServicesConfig.deserializeBinaryFromReader);
      msg.setCampaignCommonServicesConfig(value);
      break;
    case 19:
      var value = new ondewo_vtsi_call_configs_pb.SipCallerConfig;
      reader.readMessage(value,ondewo_vtsi_call_configs_pb.SipCallerConfig.deserializeBinaryFromReader);
      msg.setCampaignSipCallerConfig(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.addCampaignCallers(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCampaignCallersTruncated(value);
      break;
    case 22:
      var value = new proto.ondewo.vtsi.CampaignCallingWindow;
      reader.readMessage(value,proto.ondewo.vtsi.CampaignCallingWindow.deserializeBinaryFromReader);
      msg.setCallingWindow(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutsideCallingWindow(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.Campaign.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.Campaign.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.Campaign} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.Campaign.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCampaignId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVtsiProjectName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMaxParallelCalls();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getMaxAttempts();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getRetryDelay();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getStateReason();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getStatistics();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.ondewo.vtsi.CampaignStatistics.serializeBinaryToWriter
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedBy();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStartedAt();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStoppedAt();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCompletedAt();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCampaignCommonServicesConfig();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      ondewo_vtsi_call_configs_pb.CommonServicesConfig.serializeBinaryToWriter
    );
  }
  f = message.getCampaignSipCallerConfig();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      ondewo_vtsi_call_configs_pb.SipCallerConfig.serializeBinaryToWriter
    );
  }
  f = message.getCampaignCallersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      20,
      f
    );
  }
  f = message.getCampaignCallersTruncated();
  if (f) {
    writer.writeBool(
      21,
      f
    );
  }
  f = message.getCallingWindow();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.ondewo.vtsi.CampaignCallingWindow.serializeBinaryToWriter
    );
  }
  f = message.getOutsideCallingWindow();
  if (f) {
    writer.writeBool(
      23,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.Campaign.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string campaign_id = 2;
 * @return {string}
 */
proto.ondewo.vtsi.Campaign.prototype.getCampaignId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.setCampaignId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string vtsi_project_name = 3;
 * @return {string}
 */
proto.ondewo.vtsi.Campaign.prototype.getVtsiProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.setVtsiProjectName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string display_name = 4;
 * @return {string}
 */
proto.ondewo.vtsi.Campaign.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 max_parallel_calls = 5;
 * @return {number}
 */
proto.ondewo.vtsi.Campaign.prototype.getMaxParallelCalls = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.setMaxParallelCalls = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 max_attempts = 6;
 * @return {number}
 */
proto.ondewo.vtsi.Campaign.prototype.getMaxAttempts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.setMaxAttempts = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional google.protobuf.Duration retry_delay = 7;
 * @return {?proto.google.protobuf.Duration}
 */
proto.ondewo.vtsi.Campaign.prototype.getRetryDelay = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 7));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.ondewo.vtsi.Campaign} returns this
*/
proto.ondewo.vtsi.Campaign.prototype.setRetryDelay = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.clearRetryDelay = function() {
  return this.setRetryDelay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Campaign.prototype.hasRetryDelay = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional CampaignState state = 8;
 * @return {!proto.ondewo.vtsi.CampaignState}
 */
proto.ondewo.vtsi.Campaign.prototype.getState = function() {
  return /** @type {!proto.ondewo.vtsi.CampaignState} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.ondewo.vtsi.CampaignState} value
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional string state_reason = 9;
 * @return {string}
 */
proto.ondewo.vtsi.Campaign.prototype.getStateReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.setStateReason = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional CampaignStatistics statistics = 10;
 * @return {?proto.ondewo.vtsi.CampaignStatistics}
 */
proto.ondewo.vtsi.Campaign.prototype.getStatistics = function() {
  return /** @type{?proto.ondewo.vtsi.CampaignStatistics} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.CampaignStatistics, 10));
};


/**
 * @param {?proto.ondewo.vtsi.CampaignStatistics|undefined} value
 * @return {!proto.ondewo.vtsi.Campaign} returns this
*/
proto.ondewo.vtsi.Campaign.prototype.setStatistics = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.clearStatistics = function() {
  return this.setStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Campaign.prototype.hasStatistics = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string created_by = 11;
 * @return {string}
 */
proto.ondewo.vtsi.Campaign.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.Campaign.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.Campaign} returns this
*/
proto.ondewo.vtsi.Campaign.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Campaign.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string modified_by = 13;
 * @return {string}
 */
proto.ondewo.vtsi.Campaign.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.setModifiedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional google.protobuf.Timestamp modified_at = 14;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.Campaign.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 14));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.Campaign} returns this
*/
proto.ondewo.vtsi.Campaign.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Campaign.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional google.protobuf.Timestamp started_at = 15;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.Campaign.prototype.getStartedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 15));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.Campaign} returns this
*/
proto.ondewo.vtsi.Campaign.prototype.setStartedAt = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.clearStartedAt = function() {
  return this.setStartedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Campaign.prototype.hasStartedAt = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional google.protobuf.Timestamp stopped_at = 16;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.Campaign.prototype.getStoppedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 16));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.Campaign} returns this
*/
proto.ondewo.vtsi.Campaign.prototype.setStoppedAt = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.clearStoppedAt = function() {
  return this.setStoppedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Campaign.prototype.hasStoppedAt = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional google.protobuf.Timestamp completed_at = 17;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.Campaign.prototype.getCompletedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 17));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.Campaign} returns this
*/
proto.ondewo.vtsi.Campaign.prototype.setCompletedAt = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.clearCompletedAt = function() {
  return this.setCompletedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Campaign.prototype.hasCompletedAt = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional CommonServicesConfig campaign_common_services_config = 18;
 * @return {?proto.ondewo.vtsi.CommonServicesConfig}
 */
proto.ondewo.vtsi.Campaign.prototype.getCampaignCommonServicesConfig = function() {
  return /** @type{?proto.ondewo.vtsi.CommonServicesConfig} */ (
    jspb.Message.getWrapperField(this, ondewo_vtsi_call_configs_pb.CommonServicesConfig, 18));
};


/**
 * @param {?proto.ondewo.vtsi.CommonServicesConfig|undefined} value
 * @return {!proto.ondewo.vtsi.Campaign} returns this
*/
proto.ondewo.vtsi.Campaign.prototype.setCampaignCommonServicesConfig = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.clearCampaignCommonServicesConfig = function() {
  return this.setCampaignCommonServicesConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Campaign.prototype.hasCampaignCommonServicesConfig = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional SipCallerConfig campaign_sip_caller_config = 19;
 * @return {?proto.ondewo.vtsi.SipCallerConfig}
 */
proto.ondewo.vtsi.Campaign.prototype.getCampaignSipCallerConfig = function() {
  return /** @type{?proto.ondewo.vtsi.SipCallerConfig} */ (
    jspb.Message.getWrapperField(this, ondewo_vtsi_call_configs_pb.SipCallerConfig, 19));
};


/**
 * @param {?proto.ondewo.vtsi.SipCallerConfig|undefined} value
 * @return {!proto.ondewo.vtsi.Campaign} returns this
*/
proto.ondewo.vtsi.Campaign.prototype.setCampaignSipCallerConfig = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.clearCampaignSipCallerConfig = function() {
  return this.setCampaignSipCallerConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Campaign.prototype.hasCampaignSipCallerConfig = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * repeated string campaign_callers = 20;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.Campaign.prototype.getCampaignCallersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 20));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.setCampaignCallersList = function(value) {
  return jspb.Message.setField(this, 20, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.addCampaignCallers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 20, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.clearCampaignCallersList = function() {
  return this.setCampaignCallersList([]);
};


/**
 * optional bool campaign_callers_truncated = 21;
 * @return {boolean}
 */
proto.ondewo.vtsi.Campaign.prototype.getCampaignCallersTruncated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.setCampaignCallersTruncated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 21, value);
};


/**
 * optional CampaignCallingWindow calling_window = 22;
 * @return {?proto.ondewo.vtsi.CampaignCallingWindow}
 */
proto.ondewo.vtsi.Campaign.prototype.getCallingWindow = function() {
  return /** @type{?proto.ondewo.vtsi.CampaignCallingWindow} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.CampaignCallingWindow, 22));
};


/**
 * @param {?proto.ondewo.vtsi.CampaignCallingWindow|undefined} value
 * @return {!proto.ondewo.vtsi.Campaign} returns this
*/
proto.ondewo.vtsi.Campaign.prototype.setCallingWindow = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.clearCallingWindow = function() {
  return this.setCallingWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Campaign.prototype.hasCallingWindow = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional bool outside_calling_window = 23;
 * @return {boolean}
 */
proto.ondewo.vtsi.Campaign.prototype.getOutsideCallingWindow = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.Campaign} returns this
 */
proto.ondewo.vtsi.Campaign.prototype.setOutsideCallingWindow = function(value) {
  return jspb.Message.setProto3BooleanField(this, 23, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.CampaignCallingWindow.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.CampaignCallingWindow.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.CampaignCallingWindow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.CampaignCallingWindow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CampaignCallingWindow.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeZone: jspb.Message.getFieldWithDefault(msg, 1, ""),
    slotsList: jspb.Message.toObjectList(msg.getSlotsList(),
    proto.ondewo.vtsi.CallingWindowSlot.toObject, includeInstance),
    nextWindowStart: (f = msg.getNextWindowStart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.CampaignCallingWindow}
 */
proto.ondewo.vtsi.CampaignCallingWindow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.CampaignCallingWindow;
  return proto.ondewo.vtsi.CampaignCallingWindow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.CampaignCallingWindow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.CampaignCallingWindow}
 */
proto.ondewo.vtsi.CampaignCallingWindow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimeZone(value);
      break;
    case 2:
      var value = new proto.ondewo.vtsi.CallingWindowSlot;
      reader.readMessage(value,proto.ondewo.vtsi.CallingWindowSlot.deserializeBinaryFromReader);
      msg.addSlots(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setNextWindowStart(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.CampaignCallingWindow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.CampaignCallingWindow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.CampaignCallingWindow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CampaignCallingWindow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeZone();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSlotsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ondewo.vtsi.CallingWindowSlot.serializeBinaryToWriter
    );
  }
  f = message.getNextWindowStart();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string time_zone = 1;
 * @return {string}
 */
proto.ondewo.vtsi.CampaignCallingWindow.prototype.getTimeZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CampaignCallingWindow} returns this
 */
proto.ondewo.vtsi.CampaignCallingWindow.prototype.setTimeZone = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated CallingWindowSlot slots = 2;
 * @return {!Array<!proto.ondewo.vtsi.CallingWindowSlot>}
 */
proto.ondewo.vtsi.CampaignCallingWindow.prototype.getSlotsList = function() {
  return /** @type{!Array<!proto.ondewo.vtsi.CallingWindowSlot>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.CallingWindowSlot, 2));
};


/**
 * @param {!Array<!proto.ondewo.vtsi.CallingWindowSlot>} value
 * @return {!proto.ondewo.vtsi.CampaignCallingWindow} returns this
*/
proto.ondewo.vtsi.CampaignCallingWindow.prototype.setSlotsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ondewo.vtsi.CallingWindowSlot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.CallingWindowSlot}
 */
proto.ondewo.vtsi.CampaignCallingWindow.prototype.addSlots = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.vtsi.CallingWindowSlot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.CampaignCallingWindow} returns this
 */
proto.ondewo.vtsi.CampaignCallingWindow.prototype.clearSlotsList = function() {
  return this.setSlotsList([]);
};


/**
 * optional google.protobuf.Timestamp next_window_start = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.CampaignCallingWindow.prototype.getNextWindowStart = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.CampaignCallingWindow} returns this
*/
proto.ondewo.vtsi.CampaignCallingWindow.prototype.setNextWindowStart = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CampaignCallingWindow} returns this
 */
proto.ondewo.vtsi.CampaignCallingWindow.prototype.clearNextWindowStart = function() {
  return this.setNextWindowStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CampaignCallingWindow.prototype.hasNextWindowStart = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.CallingWindowSlot.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.CallingWindowSlot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.CallingWindowSlot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CallingWindowSlot.toObject = function(includeInstance, msg) {
  var f, obj = {
    dayOfWeek: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startMinute: jspb.Message.getFieldWithDefault(msg, 2, 0),
    endMinute: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.CallingWindowSlot}
 */
proto.ondewo.vtsi.CallingWindowSlot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.CallingWindowSlot;
  return proto.ondewo.vtsi.CallingWindowSlot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.CallingWindowSlot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.CallingWindowSlot}
 */
proto.ondewo.vtsi.CallingWindowSlot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ondewo.vtsi.CallingWindowDayOfWeek} */ (reader.readEnum());
      msg.setDayOfWeek(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStartMinute(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEndMinute(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.CallingWindowSlot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.CallingWindowSlot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.CallingWindowSlot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CallingWindowSlot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDayOfWeek();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getStartMinute();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getEndMinute();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional CallingWindowDayOfWeek day_of_week = 1;
 * @return {!proto.ondewo.vtsi.CallingWindowDayOfWeek}
 */
proto.ondewo.vtsi.CallingWindowSlot.prototype.getDayOfWeek = function() {
  return /** @type {!proto.ondewo.vtsi.CallingWindowDayOfWeek} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ondewo.vtsi.CallingWindowDayOfWeek} value
 * @return {!proto.ondewo.vtsi.CallingWindowSlot} returns this
 */
proto.ondewo.vtsi.CallingWindowSlot.prototype.setDayOfWeek = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 start_minute = 2;
 * @return {number}
 */
proto.ondewo.vtsi.CallingWindowSlot.prototype.getStartMinute = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.CallingWindowSlot} returns this
 */
proto.ondewo.vtsi.CallingWindowSlot.prototype.setStartMinute = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 end_minute = 3;
 * @return {number}
 */
proto.ondewo.vtsi.CallingWindowSlot.prototype.getEndMinute = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.CallingWindowSlot} returns this
 */
proto.ondewo.vtsi.CallingWindowSlot.prototype.setEndMinute = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.CampaignStatistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.CampaignStatistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CampaignStatistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    campaignName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0),
    notStarted: jspb.Message.getFieldWithDefault(msg, 3, 0),
    inProgress: jspb.Message.getFieldWithDefault(msg, 4, 0),
    retryPending: jspb.Message.getFieldWithDefault(msg, 5, 0),
    completed: jspb.Message.getFieldWithDefault(msg, 6, 0),
    failed: jspb.Message.getFieldWithDefault(msg, 7, 0),
    cancelled: jspb.Message.getFieldWithDefault(msg, 8, 0),
    totalAttempts: jspb.Message.getFieldWithDefault(msg, 9, 0),
    progressPercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    scheduledNotDue: jspb.Message.getFieldWithDefault(msg, 11, 0),
    callsRetried: jspb.Message.getFieldWithDefault(msg, 12, 0),
    averageConnectedDuration: (f = msg.getAverageConnectedDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    answeringMachineDetected: jspb.Message.getFieldWithDefault(msg, 14, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.CampaignStatistics}
 */
proto.ondewo.vtsi.CampaignStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.CampaignStatistics;
  return proto.ondewo.vtsi.CampaignStatistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.CampaignStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.CampaignStatistics}
 */
proto.ondewo.vtsi.CampaignStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaignName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNotStarted(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInProgress(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRetryPending(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCompleted(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFailed(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCancelled(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalAttempts(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setProgressPercent(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScheduledNotDue(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCallsRetried(value);
      break;
    case 13:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setAverageConnectedDuration(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAnsweringMachineDetected(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.CampaignStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.CampaignStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CampaignStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampaignName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getNotStarted();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getInProgress();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getRetryPending();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getCompleted();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getFailed();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getCancelled();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getTotalAttempts();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getProgressPercent();
  if (f !== 0.0) {
    writer.writeFloat(
      10,
      f
    );
  }
  f = message.getScheduledNotDue();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getCallsRetried();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getAverageConnectedDuration();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getAnsweringMachineDetected();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
};


/**
 * optional string campaign_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.getCampaignName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CampaignStatistics} returns this
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.setCampaignName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 total = 2;
 * @return {number}
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.CampaignStatistics} returns this
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 not_started = 3;
 * @return {number}
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.getNotStarted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.CampaignStatistics} returns this
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.setNotStarted = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 in_progress = 4;
 * @return {number}
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.getInProgress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.CampaignStatistics} returns this
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.setInProgress = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 retry_pending = 5;
 * @return {number}
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.getRetryPending = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.CampaignStatistics} returns this
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.setRetryPending = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 completed = 6;
 * @return {number}
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.getCompleted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.CampaignStatistics} returns this
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.setCompleted = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 failed = 7;
 * @return {number}
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.getFailed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.CampaignStatistics} returns this
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.setFailed = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 cancelled = 8;
 * @return {number}
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.getCancelled = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.CampaignStatistics} returns this
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.setCancelled = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 total_attempts = 9;
 * @return {number}
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.getTotalAttempts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.CampaignStatistics} returns this
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.setTotalAttempts = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional float progress_percent = 10;
 * @return {number}
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.getProgressPercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.CampaignStatistics} returns this
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.setProgressPercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional int32 scheduled_not_due = 11;
 * @return {number}
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.getScheduledNotDue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.CampaignStatistics} returns this
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.setScheduledNotDue = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 calls_retried = 12;
 * @return {number}
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.getCallsRetried = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.CampaignStatistics} returns this
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.setCallsRetried = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional google.protobuf.Duration average_connected_duration = 13;
 * @return {?proto.google.protobuf.Duration}
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.getAverageConnectedDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 13));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.ondewo.vtsi.CampaignStatistics} returns this
*/
proto.ondewo.vtsi.CampaignStatistics.prototype.setAverageConnectedDuration = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CampaignStatistics} returns this
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.clearAverageConnectedDuration = function() {
  return this.setAverageConnectedDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.hasAverageConnectedDuration = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int32 answering_machine_detected = 14;
 * @return {number}
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.getAnsweringMachineDetected = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.CampaignStatistics} returns this
 */
proto.ondewo.vtsi.CampaignStatistics.prototype.setAnsweringMachineDetected = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.CampaignCallAttempt.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.CampaignCallAttempt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.CampaignCallAttempt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CampaignCallAttempt.toObject = function(includeInstance, msg) {
  var f, obj = {
    attemptNumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    callerName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    callName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    outcome: jspb.Message.getFieldWithDefault(msg, 6, 0),
    sipStatusType: jspb.Message.getFieldWithDefault(msg, 7, 0),
    sipStatusDescription: jspb.Message.getFieldWithDefault(msg, 8, ""),
    errorMessage: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.CampaignCallAttempt}
 */
proto.ondewo.vtsi.CampaignCallAttempt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.CampaignCallAttempt;
  return proto.ondewo.vtsi.CampaignCallAttempt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.CampaignCallAttempt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.CampaignCallAttempt}
 */
proto.ondewo.vtsi.CampaignCallAttempt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAttemptNumber(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallerName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallName(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 6:
      var value = /** @type {!proto.ondewo.vtsi.CampaignCallAttemptOutcome} */ (reader.readEnum());
      msg.setOutcome(value);
      break;
    case 7:
      var value = /** @type {!proto.ondewo.sip.SipStatus.StatusType} */ (reader.readEnum());
      msg.setSipStatusType(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSipStatusDescription(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.CampaignCallAttempt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.CampaignCallAttempt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.CampaignCallAttempt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CampaignCallAttempt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttemptNumber();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCallerName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCallName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getOutcome();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getSipStatusType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getSipStatusDescription();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional int32 attempt_number = 1;
 * @return {number}
 */
proto.ondewo.vtsi.CampaignCallAttempt.prototype.getAttemptNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.CampaignCallAttempt} returns this
 */
proto.ondewo.vtsi.CampaignCallAttempt.prototype.setAttemptNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string caller_name = 2;
 * @return {string}
 */
proto.ondewo.vtsi.CampaignCallAttempt.prototype.getCallerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CampaignCallAttempt} returns this
 */
proto.ondewo.vtsi.CampaignCallAttempt.prototype.setCallerName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string call_name = 3;
 * @return {string}
 */
proto.ondewo.vtsi.CampaignCallAttempt.prototype.getCallName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CampaignCallAttempt} returns this
 */
proto.ondewo.vtsi.CampaignCallAttempt.prototype.setCallName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp start_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.CampaignCallAttempt.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.CampaignCallAttempt} returns this
*/
proto.ondewo.vtsi.CampaignCallAttempt.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CampaignCallAttempt} returns this
 */
proto.ondewo.vtsi.CampaignCallAttempt.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CampaignCallAttempt.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.CampaignCallAttempt.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.CampaignCallAttempt} returns this
*/
proto.ondewo.vtsi.CampaignCallAttempt.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CampaignCallAttempt} returns this
 */
proto.ondewo.vtsi.CampaignCallAttempt.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CampaignCallAttempt.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CampaignCallAttemptOutcome outcome = 6;
 * @return {!proto.ondewo.vtsi.CampaignCallAttemptOutcome}
 */
proto.ondewo.vtsi.CampaignCallAttempt.prototype.getOutcome = function() {
  return /** @type {!proto.ondewo.vtsi.CampaignCallAttemptOutcome} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.ondewo.vtsi.CampaignCallAttemptOutcome} value
 * @return {!proto.ondewo.vtsi.CampaignCallAttempt} returns this
 */
proto.ondewo.vtsi.CampaignCallAttempt.prototype.setOutcome = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional ondewo.sip.SipStatus.StatusType sip_status_type = 7;
 * @return {!proto.ondewo.sip.SipStatus.StatusType}
 */
proto.ondewo.vtsi.CampaignCallAttempt.prototype.getSipStatusType = function() {
  return /** @type {!proto.ondewo.sip.SipStatus.StatusType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.ondewo.sip.SipStatus.StatusType} value
 * @return {!proto.ondewo.vtsi.CampaignCallAttempt} returns this
 */
proto.ondewo.vtsi.CampaignCallAttempt.prototype.setSipStatusType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string sip_status_description = 8;
 * @return {string}
 */
proto.ondewo.vtsi.CampaignCallAttempt.prototype.getSipStatusDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CampaignCallAttempt} returns this
 */
proto.ondewo.vtsi.CampaignCallAttempt.prototype.setSipStatusDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string error_message = 9;
 * @return {string}
 */
proto.ondewo.vtsi.CampaignCallAttempt.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CampaignCallAttempt} returns this
 */
proto.ondewo.vtsi.CampaignCallAttempt.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.CampaignCall.repeatedFields_ = [22];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.CampaignCall.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.CampaignCall.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.CampaignCall} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CampaignCall.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    campaignName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    position: jspb.Message.getFieldWithDefault(msg, 3, 0),
    state: jspb.Message.getFieldWithDefault(msg, 4, 0),
    phoneNumber: jspb.Message.getFieldWithDefault(msg, 5, ""),
    source: jspb.Message.getFieldWithDefault(msg, 6, 0),
    scheduledCallerName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    scheduledTime: (f = msg.getScheduledTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    attempts: jspb.Message.getFieldWithDefault(msg, 9, 0),
    maxAttempts: jspb.Message.getFieldWithDefault(msg, 10, 0),
    callerName: jspb.Message.getFieldWithDefault(msg, 11, ""),
    callName: jspb.Message.getFieldWithDefault(msg, 12, ""),
    sipStatusType: jspb.Message.getFieldWithDefault(msg, 13, 0),
    sipStatusDescription: jspb.Message.getFieldWithDefault(msg, 14, ""),
    lastError: jspb.Message.getFieldWithDefault(msg, 15, ""),
    nextAttemptTime: (f = msg.getNextAttemptTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    firstAttemptTime: (f = msg.getFirstAttemptTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastAttemptTime: (f = msg.getLastAttemptTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    finishTime: (f = msg.getFinishTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    attemptHistoryList: jspb.Message.toObjectList(msg.getAttemptHistoryList(),
    proto.ondewo.vtsi.CampaignCallAttempt.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.CampaignCall}
 */
proto.ondewo.vtsi.CampaignCall.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.CampaignCall;
  return proto.ondewo.vtsi.CampaignCall.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.CampaignCall} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.CampaignCall}
 */
proto.ondewo.vtsi.CampaignCall.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaignName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPosition(value);
      break;
    case 4:
      var value = /** @type {!proto.ondewo.vtsi.CampaignCallState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneNumber(value);
      break;
    case 6:
      var value = /** @type {!proto.ondewo.vtsi.CampaignCallSource} */ (reader.readEnum());
      msg.setSource(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setScheduledCallerName(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setScheduledTime(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAttempts(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxAttempts(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallerName(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallName(value);
      break;
    case 13:
      var value = /** @type {!proto.ondewo.sip.SipStatus.StatusType} */ (reader.readEnum());
      msg.setSipStatusType(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setSipStatusDescription(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastError(value);
      break;
    case 16:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setNextAttemptTime(value);
      break;
    case 17:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFirstAttemptTime(value);
      break;
    case 18:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastAttemptTime(value);
      break;
    case 19:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFinishTime(value);
      break;
    case 20:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 21:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
      break;
    case 22:
      var value = new proto.ondewo.vtsi.CampaignCallAttempt;
      reader.readMessage(value,proto.ondewo.vtsi.CampaignCallAttempt.deserializeBinaryFromReader);
      msg.addAttemptHistory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.CampaignCall.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.CampaignCall.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.CampaignCall} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CampaignCall.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCampaignName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPosition();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getPhoneNumber();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSource();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getScheduledCallerName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getScheduledTime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAttempts();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getMaxAttempts();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getCallerName();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getCallName();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getSipStatusType();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getSipStatusDescription();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getLastError();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getNextAttemptTime();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFirstAttemptTime();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastAttemptTime();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFinishTime();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAttemptHistoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      22,
      f,
      proto.ondewo.vtsi.CampaignCallAttempt.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.CampaignCall.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
 */
proto.ondewo.vtsi.CampaignCall.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string campaign_name = 2;
 * @return {string}
 */
proto.ondewo.vtsi.CampaignCall.prototype.getCampaignName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
 */
proto.ondewo.vtsi.CampaignCall.prototype.setCampaignName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 position = 3;
 * @return {number}
 */
proto.ondewo.vtsi.CampaignCall.prototype.getPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
 */
proto.ondewo.vtsi.CampaignCall.prototype.setPosition = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional CampaignCallState state = 4;
 * @return {!proto.ondewo.vtsi.CampaignCallState}
 */
proto.ondewo.vtsi.CampaignCall.prototype.getState = function() {
  return /** @type {!proto.ondewo.vtsi.CampaignCallState} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.ondewo.vtsi.CampaignCallState} value
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
 */
proto.ondewo.vtsi.CampaignCall.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string phone_number = 5;
 * @return {string}
 */
proto.ondewo.vtsi.CampaignCall.prototype.getPhoneNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
 */
proto.ondewo.vtsi.CampaignCall.prototype.setPhoneNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional CampaignCallSource source = 6;
 * @return {!proto.ondewo.vtsi.CampaignCallSource}
 */
proto.ondewo.vtsi.CampaignCall.prototype.getSource = function() {
  return /** @type {!proto.ondewo.vtsi.CampaignCallSource} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.ondewo.vtsi.CampaignCallSource} value
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
 */
proto.ondewo.vtsi.CampaignCall.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string scheduled_caller_name = 7;
 * @return {string}
 */
proto.ondewo.vtsi.CampaignCall.prototype.getScheduledCallerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
 */
proto.ondewo.vtsi.CampaignCall.prototype.setScheduledCallerName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp scheduled_time = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.CampaignCall.prototype.getScheduledTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
*/
proto.ondewo.vtsi.CampaignCall.prototype.setScheduledTime = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
 */
proto.ondewo.vtsi.CampaignCall.prototype.clearScheduledTime = function() {
  return this.setScheduledTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CampaignCall.prototype.hasScheduledTime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 attempts = 9;
 * @return {number}
 */
proto.ondewo.vtsi.CampaignCall.prototype.getAttempts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
 */
proto.ondewo.vtsi.CampaignCall.prototype.setAttempts = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 max_attempts = 10;
 * @return {number}
 */
proto.ondewo.vtsi.CampaignCall.prototype.getMaxAttempts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
 */
proto.ondewo.vtsi.CampaignCall.prototype.setMaxAttempts = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string caller_name = 11;
 * @return {string}
 */
proto.ondewo.vtsi.CampaignCall.prototype.getCallerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
 */
proto.ondewo.vtsi.CampaignCall.prototype.setCallerName = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string call_name = 12;
 * @return {string}
 */
proto.ondewo.vtsi.CampaignCall.prototype.getCallName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
 */
proto.ondewo.vtsi.CampaignCall.prototype.setCallName = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional ondewo.sip.SipStatus.StatusType sip_status_type = 13;
 * @return {!proto.ondewo.sip.SipStatus.StatusType}
 */
proto.ondewo.vtsi.CampaignCall.prototype.getSipStatusType = function() {
  return /** @type {!proto.ondewo.sip.SipStatus.StatusType} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.ondewo.sip.SipStatus.StatusType} value
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
 */
proto.ondewo.vtsi.CampaignCall.prototype.setSipStatusType = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * optional string sip_status_description = 14;
 * @return {string}
 */
proto.ondewo.vtsi.CampaignCall.prototype.getSipStatusDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
 */
proto.ondewo.vtsi.CampaignCall.prototype.setSipStatusDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string last_error = 15;
 * @return {string}
 */
proto.ondewo.vtsi.CampaignCall.prototype.getLastError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
 */
proto.ondewo.vtsi.CampaignCall.prototype.setLastError = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional google.protobuf.Timestamp next_attempt_time = 16;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.CampaignCall.prototype.getNextAttemptTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 16));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
*/
proto.ondewo.vtsi.CampaignCall.prototype.setNextAttemptTime = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
 */
proto.ondewo.vtsi.CampaignCall.prototype.clearNextAttemptTime = function() {
  return this.setNextAttemptTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CampaignCall.prototype.hasNextAttemptTime = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional google.protobuf.Timestamp first_attempt_time = 17;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.CampaignCall.prototype.getFirstAttemptTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 17));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
*/
proto.ondewo.vtsi.CampaignCall.prototype.setFirstAttemptTime = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
 */
proto.ondewo.vtsi.CampaignCall.prototype.clearFirstAttemptTime = function() {
  return this.setFirstAttemptTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CampaignCall.prototype.hasFirstAttemptTime = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional google.protobuf.Timestamp last_attempt_time = 18;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.CampaignCall.prototype.getLastAttemptTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 18));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
*/
proto.ondewo.vtsi.CampaignCall.prototype.setLastAttemptTime = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
 */
proto.ondewo.vtsi.CampaignCall.prototype.clearLastAttemptTime = function() {
  return this.setLastAttemptTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CampaignCall.prototype.hasLastAttemptTime = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional google.protobuf.Timestamp finish_time = 19;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.CampaignCall.prototype.getFinishTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 19));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
*/
proto.ondewo.vtsi.CampaignCall.prototype.setFinishTime = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
 */
proto.ondewo.vtsi.CampaignCall.prototype.clearFinishTime = function() {
  return this.setFinishTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CampaignCall.prototype.hasFinishTime = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 20;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.CampaignCall.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 20));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
*/
proto.ondewo.vtsi.CampaignCall.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
 */
proto.ondewo.vtsi.CampaignCall.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CampaignCall.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 21;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.CampaignCall.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 21));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
*/
proto.ondewo.vtsi.CampaignCall.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
 */
proto.ondewo.vtsi.CampaignCall.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CampaignCall.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * repeated CampaignCallAttempt attempt_history = 22;
 * @return {!Array<!proto.ondewo.vtsi.CampaignCallAttempt>}
 */
proto.ondewo.vtsi.CampaignCall.prototype.getAttemptHistoryList = function() {
  return /** @type{!Array<!proto.ondewo.vtsi.CampaignCallAttempt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.CampaignCallAttempt, 22));
};


/**
 * @param {!Array<!proto.ondewo.vtsi.CampaignCallAttempt>} value
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
*/
proto.ondewo.vtsi.CampaignCall.prototype.setAttemptHistoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 22, value);
};


/**
 * @param {!proto.ondewo.vtsi.CampaignCallAttempt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.CampaignCallAttempt}
 */
proto.ondewo.vtsi.CampaignCall.prototype.addAttemptHistory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 22, opt_value, proto.ondewo.vtsi.CampaignCallAttempt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.CampaignCall} returns this
 */
proto.ondewo.vtsi.CampaignCall.prototype.clearAttemptHistoryList = function() {
  return this.setAttemptHistoryList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.vtsi.CampaignAssignment.oneofGroups_ = [[1,2,5]];

/**
 * @enum {number}
 */
proto.ondewo.vtsi.CampaignAssignment.CampaignSelectorCase = {
  CAMPAIGN_SELECTOR_NOT_SET: 0,
  CAMPAIGN_NAME: 1,
  NEW_CAMPAIGN: 2,
  DISPLAY_NAME: 5
};

/**
 * @return {proto.ondewo.vtsi.CampaignAssignment.CampaignSelectorCase}
 */
proto.ondewo.vtsi.CampaignAssignment.prototype.getCampaignSelectorCase = function() {
  return /** @type {proto.ondewo.vtsi.CampaignAssignment.CampaignSelectorCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.vtsi.CampaignAssignment.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.CampaignAssignment.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.CampaignAssignment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.CampaignAssignment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CampaignAssignment.toObject = function(includeInstance, msg) {
  var f, obj = {
    campaignName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    newCampaign: (f = msg.getNewCampaign()) && proto.ondewo.vtsi.Campaign.toObject(includeInstance, f),
    displayName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    startMode: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.CampaignAssignment}
 */
proto.ondewo.vtsi.CampaignAssignment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.CampaignAssignment;
  return proto.ondewo.vtsi.CampaignAssignment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.CampaignAssignment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.CampaignAssignment}
 */
proto.ondewo.vtsi.CampaignAssignment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaignName(value);
      break;
    case 2:
      var value = new proto.ondewo.vtsi.Campaign;
      reader.readMessage(value,proto.ondewo.vtsi.Campaign.deserializeBinaryFromReader);
      msg.setNewCampaign(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {!proto.ondewo.vtsi.CampaignStartMode} */ (reader.readEnum());
      msg.setStartMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.CampaignAssignment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.CampaignAssignment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.CampaignAssignment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CampaignAssignment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewCampaign();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.vtsi.Campaign.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStartMode();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string campaign_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.CampaignAssignment.prototype.getCampaignName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CampaignAssignment} returns this
 */
proto.ondewo.vtsi.CampaignAssignment.prototype.setCampaignName = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.CampaignAssignment.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.CampaignAssignment} returns this
 */
proto.ondewo.vtsi.CampaignAssignment.prototype.clearCampaignName = function() {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.CampaignAssignment.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CampaignAssignment.prototype.hasCampaignName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Campaign new_campaign = 2;
 * @return {?proto.ondewo.vtsi.Campaign}
 */
proto.ondewo.vtsi.CampaignAssignment.prototype.getNewCampaign = function() {
  return /** @type{?proto.ondewo.vtsi.Campaign} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.Campaign, 2));
};


/**
 * @param {?proto.ondewo.vtsi.Campaign|undefined} value
 * @return {!proto.ondewo.vtsi.CampaignAssignment} returns this
*/
proto.ondewo.vtsi.CampaignAssignment.prototype.setNewCampaign = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ondewo.vtsi.CampaignAssignment.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CampaignAssignment} returns this
 */
proto.ondewo.vtsi.CampaignAssignment.prototype.clearNewCampaign = function() {
  return this.setNewCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CampaignAssignment.prototype.hasNewCampaign = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string display_name = 5;
 * @return {string}
 */
proto.ondewo.vtsi.CampaignAssignment.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CampaignAssignment} returns this
 */
proto.ondewo.vtsi.CampaignAssignment.prototype.setDisplayName = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.ondewo.vtsi.CampaignAssignment.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.CampaignAssignment} returns this
 */
proto.ondewo.vtsi.CampaignAssignment.prototype.clearDisplayName = function() {
  return jspb.Message.setOneofField(this, 5, proto.ondewo.vtsi.CampaignAssignment.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CampaignAssignment.prototype.hasDisplayName = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CampaignStartMode start_mode = 3;
 * @return {!proto.ondewo.vtsi.CampaignStartMode}
 */
proto.ondewo.vtsi.CampaignAssignment.prototype.getStartMode = function() {
  return /** @type {!proto.ondewo.vtsi.CampaignStartMode} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ondewo.vtsi.CampaignStartMode} value
 * @return {!proto.ondewo.vtsi.CampaignAssignment} returns this
 */
proto.ondewo.vtsi.CampaignAssignment.prototype.setStartMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.CreateCampaignRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.CreateCampaignRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.CreateCampaignRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CreateCampaignRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    campaign: (f = msg.getCampaign()) && proto.ondewo.vtsi.Campaign.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    idempotencyKey: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.CreateCampaignRequest}
 */
proto.ondewo.vtsi.CreateCampaignRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.CreateCampaignRequest;
  return proto.ondewo.vtsi.CreateCampaignRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.CreateCampaignRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.CreateCampaignRequest}
 */
proto.ondewo.vtsi.CreateCampaignRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVtsiProjectName(value);
      break;
    case 2:
      var value = new proto.ondewo.vtsi.Campaign;
      reader.readMessage(value,proto.ondewo.vtsi.Campaign.deserializeBinaryFromReader);
      msg.setCampaign(value);
      break;
    case 3:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdempotencyKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.CreateCampaignRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.CreateCampaignRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.CreateCampaignRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CreateCampaignRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVtsiProjectName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCampaign();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.vtsi.Campaign.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getIdempotencyKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.CreateCampaignRequest.prototype.getVtsiProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CreateCampaignRequest} returns this
 */
proto.ondewo.vtsi.CreateCampaignRequest.prototype.setVtsiProjectName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Campaign campaign = 2;
 * @return {?proto.ondewo.vtsi.Campaign}
 */
proto.ondewo.vtsi.CreateCampaignRequest.prototype.getCampaign = function() {
  return /** @type{?proto.ondewo.vtsi.Campaign} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.Campaign, 2));
};


/**
 * @param {?proto.ondewo.vtsi.Campaign|undefined} value
 * @return {!proto.ondewo.vtsi.CreateCampaignRequest} returns this
*/
proto.ondewo.vtsi.CreateCampaignRequest.prototype.setCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CreateCampaignRequest} returns this
 */
proto.ondewo.vtsi.CreateCampaignRequest.prototype.clearCampaign = function() {
  return this.setCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CreateCampaignRequest.prototype.hasCampaign = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.vtsi.CreateCampaignRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.vtsi.CreateCampaignRequest} returns this
*/
proto.ondewo.vtsi.CreateCampaignRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CreateCampaignRequest} returns this
 */
proto.ondewo.vtsi.CreateCampaignRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CreateCampaignRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string idempotency_key = 4;
 * @return {string}
 */
proto.ondewo.vtsi.CreateCampaignRequest.prototype.getIdempotencyKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CreateCampaignRequest} returns this
 */
proto.ondewo.vtsi.CreateCampaignRequest.prototype.setIdempotencyKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.vtsi.GetCampaignRequest.oneofGroups_ = [[1,3]];

/**
 * @enum {number}
 */
proto.ondewo.vtsi.GetCampaignRequest.CampaignCase = {
  CAMPAIGN_NOT_SET: 0,
  NAME: 1,
  DISPLAY_NAME: 3
};

/**
 * @return {proto.ondewo.vtsi.GetCampaignRequest.CampaignCase}
 */
proto.ondewo.vtsi.GetCampaignRequest.prototype.getCampaignCase = function() {
  return /** @type {proto.ondewo.vtsi.GetCampaignRequest.CampaignCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.vtsi.GetCampaignRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.GetCampaignRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.GetCampaignRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.GetCampaignRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetCampaignRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.GetCampaignRequest}
 */
proto.ondewo.vtsi.GetCampaignRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.GetCampaignRequest;
  return proto.ondewo.vtsi.GetCampaignRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.GetCampaignRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.GetCampaignRequest}
 */
proto.ondewo.vtsi.GetCampaignRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVtsiProjectName(value);
      break;
    case 5:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.GetCampaignRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.GetCampaignRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.GetCampaignRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetCampaignRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVtsiProjectName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.GetCampaignRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.GetCampaignRequest} returns this
 */
proto.ondewo.vtsi.GetCampaignRequest.prototype.setName = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.GetCampaignRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.GetCampaignRequest} returns this
 */
proto.ondewo.vtsi.GetCampaignRequest.prototype.clearName = function() {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.GetCampaignRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.GetCampaignRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.ondewo.vtsi.GetCampaignRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.GetCampaignRequest} returns this
 */
proto.ondewo.vtsi.GetCampaignRequest.prototype.setDisplayName = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.vtsi.GetCampaignRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.GetCampaignRequest} returns this
 */
proto.ondewo.vtsi.GetCampaignRequest.prototype.clearDisplayName = function() {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.vtsi.GetCampaignRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.GetCampaignRequest.prototype.hasDisplayName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string vtsi_project_name = 4;
 * @return {string}
 */
proto.ondewo.vtsi.GetCampaignRequest.prototype.getVtsiProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.GetCampaignRequest} returns this
 */
proto.ondewo.vtsi.GetCampaignRequest.prototype.setVtsiProjectName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 5;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.vtsi.GetCampaignRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 5));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.vtsi.GetCampaignRequest} returns this
*/
proto.ondewo.vtsi.GetCampaignRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.GetCampaignRequest} returns this
 */
proto.ondewo.vtsi.GetCampaignRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.GetCampaignRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.UpdateCampaignRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.UpdateCampaignRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.UpdateCampaignRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.UpdateCampaignRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    campaign: (f = msg.getCampaign()) && proto.ondewo.vtsi.Campaign.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.UpdateCampaignRequest}
 */
proto.ondewo.vtsi.UpdateCampaignRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.UpdateCampaignRequest;
  return proto.ondewo.vtsi.UpdateCampaignRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.UpdateCampaignRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.UpdateCampaignRequest}
 */
proto.ondewo.vtsi.UpdateCampaignRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.vtsi.Campaign;
      reader.readMessage(value,proto.ondewo.vtsi.Campaign.deserializeBinaryFromReader);
      msg.setCampaign(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 3:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.UpdateCampaignRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.UpdateCampaignRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.UpdateCampaignRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.UpdateCampaignRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampaign();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.vtsi.Campaign.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional Campaign campaign = 1;
 * @return {?proto.ondewo.vtsi.Campaign}
 */
proto.ondewo.vtsi.UpdateCampaignRequest.prototype.getCampaign = function() {
  return /** @type{?proto.ondewo.vtsi.Campaign} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.Campaign, 1));
};


/**
 * @param {?proto.ondewo.vtsi.Campaign|undefined} value
 * @return {!proto.ondewo.vtsi.UpdateCampaignRequest} returns this
*/
proto.ondewo.vtsi.UpdateCampaignRequest.prototype.setCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.UpdateCampaignRequest} returns this
 */
proto.ondewo.vtsi.UpdateCampaignRequest.prototype.clearCampaign = function() {
  return this.setCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.UpdateCampaignRequest.prototype.hasCampaign = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.vtsi.UpdateCampaignRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.vtsi.UpdateCampaignRequest} returns this
*/
proto.ondewo.vtsi.UpdateCampaignRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.UpdateCampaignRequest} returns this
 */
proto.ondewo.vtsi.UpdateCampaignRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.UpdateCampaignRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.vtsi.UpdateCampaignRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.vtsi.UpdateCampaignRequest} returns this
*/
proto.ondewo.vtsi.UpdateCampaignRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.UpdateCampaignRequest} returns this
 */
proto.ondewo.vtsi.UpdateCampaignRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.UpdateCampaignRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.vtsi.DeleteCampaignRequest.oneofGroups_ = [[1,3]];

/**
 * @enum {number}
 */
proto.ondewo.vtsi.DeleteCampaignRequest.CampaignCase = {
  CAMPAIGN_NOT_SET: 0,
  NAME: 1,
  DISPLAY_NAME: 3
};

/**
 * @return {proto.ondewo.vtsi.DeleteCampaignRequest.CampaignCase}
 */
proto.ondewo.vtsi.DeleteCampaignRequest.prototype.getCampaignCase = function() {
  return /** @type {proto.ondewo.vtsi.DeleteCampaignRequest.CampaignCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.vtsi.DeleteCampaignRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.DeleteCampaignRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.DeleteCampaignRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.DeleteCampaignRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.DeleteCampaignRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    force: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.DeleteCampaignRequest}
 */
proto.ondewo.vtsi.DeleteCampaignRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.DeleteCampaignRequest;
  return proto.ondewo.vtsi.DeleteCampaignRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.DeleteCampaignRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.DeleteCampaignRequest}
 */
proto.ondewo.vtsi.DeleteCampaignRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVtsiProjectName(value);
      break;
    case 5:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.DeleteCampaignRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.DeleteCampaignRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.DeleteCampaignRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.DeleteCampaignRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVtsiProjectName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getForce();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.DeleteCampaignRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.DeleteCampaignRequest} returns this
 */
proto.ondewo.vtsi.DeleteCampaignRequest.prototype.setName = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.DeleteCampaignRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.DeleteCampaignRequest} returns this
 */
proto.ondewo.vtsi.DeleteCampaignRequest.prototype.clearName = function() {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.DeleteCampaignRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.DeleteCampaignRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.ondewo.vtsi.DeleteCampaignRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.DeleteCampaignRequest} returns this
 */
proto.ondewo.vtsi.DeleteCampaignRequest.prototype.setDisplayName = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.vtsi.DeleteCampaignRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.DeleteCampaignRequest} returns this
 */
proto.ondewo.vtsi.DeleteCampaignRequest.prototype.clearDisplayName = function() {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.vtsi.DeleteCampaignRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.DeleteCampaignRequest.prototype.hasDisplayName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string vtsi_project_name = 4;
 * @return {string}
 */
proto.ondewo.vtsi.DeleteCampaignRequest.prototype.getVtsiProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.DeleteCampaignRequest} returns this
 */
proto.ondewo.vtsi.DeleteCampaignRequest.prototype.setVtsiProjectName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 5;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.vtsi.DeleteCampaignRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 5));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.vtsi.DeleteCampaignRequest} returns this
*/
proto.ondewo.vtsi.DeleteCampaignRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.DeleteCampaignRequest} returns this
 */
proto.ondewo.vtsi.DeleteCampaignRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.DeleteCampaignRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool force = 6;
 * @return {boolean}
 */
proto.ondewo.vtsi.DeleteCampaignRequest.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.DeleteCampaignRequest} returns this
 */
proto.ondewo.vtsi.DeleteCampaignRequest.prototype.setForce = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.DeleteCampaignResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.DeleteCampaignResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.DeleteCampaignResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.DeleteCampaignResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deletedCampaignCallCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    cancelledScheduledCallerCount: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.DeleteCampaignResponse}
 */
proto.ondewo.vtsi.DeleteCampaignResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.DeleteCampaignResponse;
  return proto.ondewo.vtsi.DeleteCampaignResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.DeleteCampaignResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.DeleteCampaignResponse}
 */
proto.ondewo.vtsi.DeleteCampaignResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDeletedCampaignCallCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCancelledScheduledCallerCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.DeleteCampaignResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.DeleteCampaignResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.DeleteCampaignResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.DeleteCampaignResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeletedCampaignCallCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCancelledScheduledCallerCount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.DeleteCampaignResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.DeleteCampaignResponse} returns this
 */
proto.ondewo.vtsi.DeleteCampaignResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 deleted_campaign_call_count = 2;
 * @return {number}
 */
proto.ondewo.vtsi.DeleteCampaignResponse.prototype.getDeletedCampaignCallCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.DeleteCampaignResponse} returns this
 */
proto.ondewo.vtsi.DeleteCampaignResponse.prototype.setDeletedCampaignCallCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 cancelled_scheduled_caller_count = 3;
 * @return {number}
 */
proto.ondewo.vtsi.DeleteCampaignResponse.prototype.getCancelledScheduledCallerCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.DeleteCampaignResponse} returns this
 */
proto.ondewo.vtsi.DeleteCampaignResponse.prototype.setCancelledScheduledCallerCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.CampaignFilter.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.CampaignFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.CampaignFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.CampaignFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CampaignFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    statesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    displayNameContains: jspb.Message.getFieldWithDefault(msg, 2, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createdAfter: (f = msg.getCreatedAfter()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createdBefore: (f = msg.getCreatedBefore()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createdBy: jspb.Message.getFieldWithDefault(msg, 6, ""),
    modifiedSince: (f = msg.getModifiedSince()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.CampaignFilter}
 */
proto.ondewo.vtsi.CampaignFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.CampaignFilter;
  return proto.ondewo.vtsi.CampaignFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.CampaignFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.CampaignFilter}
 */
proto.ondewo.vtsi.CampaignFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.ondewo.vtsi.CampaignState>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addStates(values[i]);
      }
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayNameContains(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAfter(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedBefore(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedSince(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.CampaignFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.CampaignFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.CampaignFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CampaignFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
  f = message.getDisplayNameContains();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreatedAfter();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatedBefore();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getModifiedSince();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CampaignState states = 1;
 * @return {!Array<!proto.ondewo.vtsi.CampaignState>}
 */
proto.ondewo.vtsi.CampaignFilter.prototype.getStatesList = function() {
  return /** @type {!Array<!proto.ondewo.vtsi.CampaignState>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.ondewo.vtsi.CampaignState>} value
 * @return {!proto.ondewo.vtsi.CampaignFilter} returns this
 */
proto.ondewo.vtsi.CampaignFilter.prototype.setStatesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.ondewo.vtsi.CampaignState} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.CampaignFilter} returns this
 */
proto.ondewo.vtsi.CampaignFilter.prototype.addStates = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.CampaignFilter} returns this
 */
proto.ondewo.vtsi.CampaignFilter.prototype.clearStatesList = function() {
  return this.setStatesList([]);
};


/**
 * optional string display_name_contains = 2;
 * @return {string}
 */
proto.ondewo.vtsi.CampaignFilter.prototype.getDisplayNameContains = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CampaignFilter} returns this
 */
proto.ondewo.vtsi.CampaignFilter.prototype.setDisplayNameContains = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.ondewo.vtsi.CampaignFilter.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CampaignFilter} returns this
 */
proto.ondewo.vtsi.CampaignFilter.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp created_after = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.CampaignFilter.prototype.getCreatedAfter = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.CampaignFilter} returns this
*/
proto.ondewo.vtsi.CampaignFilter.prototype.setCreatedAfter = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CampaignFilter} returns this
 */
proto.ondewo.vtsi.CampaignFilter.prototype.clearCreatedAfter = function() {
  return this.setCreatedAfter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CampaignFilter.prototype.hasCreatedAfter = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp created_before = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.CampaignFilter.prototype.getCreatedBefore = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.CampaignFilter} returns this
*/
proto.ondewo.vtsi.CampaignFilter.prototype.setCreatedBefore = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CampaignFilter} returns this
 */
proto.ondewo.vtsi.CampaignFilter.prototype.clearCreatedBefore = function() {
  return this.setCreatedBefore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CampaignFilter.prototype.hasCreatedBefore = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string created_by = 6;
 * @return {string}
 */
proto.ondewo.vtsi.CampaignFilter.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CampaignFilter} returns this
 */
proto.ondewo.vtsi.CampaignFilter.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp modified_since = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.CampaignFilter.prototype.getModifiedSince = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.CampaignFilter} returns this
*/
proto.ondewo.vtsi.CampaignFilter.prototype.setModifiedSince = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CampaignFilter} returns this
 */
proto.ondewo.vtsi.CampaignFilter.prototype.clearModifiedSince = function() {
  return this.setModifiedSince(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CampaignFilter.prototype.hasModifiedSince = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.ListCampaignsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.ListCampaignsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.ListCampaignsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ListCampaignsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: (f = msg.getFilter()) && proto.ondewo.vtsi.CampaignFilter.toObject(includeInstance, f),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, ""),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    orderBy: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.ListCampaignsRequest}
 */
proto.ondewo.vtsi.ListCampaignsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.ListCampaignsRequest;
  return proto.ondewo.vtsi.ListCampaignsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.ListCampaignsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.ListCampaignsRequest}
 */
proto.ondewo.vtsi.ListCampaignsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVtsiProjectName(value);
      break;
    case 2:
      var value = new proto.ondewo.vtsi.CampaignFilter;
      reader.readMessage(value,proto.ondewo.vtsi.CampaignFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 5:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    case 6:
      var value = /** @type {!proto.ondewo.vtsi.CampaignOrderBy} */ (reader.readEnum());
      msg.setOrderBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.ListCampaignsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.ListCampaignsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.ListCampaignsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ListCampaignsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVtsiProjectName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.vtsi.CampaignFilter.serializeBinaryToWriter
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getOrderBy();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.ListCampaignsRequest.prototype.getVtsiProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ListCampaignsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignsRequest.prototype.setVtsiProjectName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CampaignFilter filter = 2;
 * @return {?proto.ondewo.vtsi.CampaignFilter}
 */
proto.ondewo.vtsi.ListCampaignsRequest.prototype.getFilter = function() {
  return /** @type{?proto.ondewo.vtsi.CampaignFilter} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.CampaignFilter, 2));
};


/**
 * @param {?proto.ondewo.vtsi.CampaignFilter|undefined} value
 * @return {!proto.ondewo.vtsi.ListCampaignsRequest} returns this
*/
proto.ondewo.vtsi.ListCampaignsRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.ListCampaignsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignsRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ListCampaignsRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.ondewo.vtsi.ListCampaignsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.ListCampaignsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.ondewo.vtsi.ListCampaignsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ListCampaignsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.ListCampaignsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignsRequest.prototype.clearPageToken = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ListCampaignsRequest.prototype.hasPageToken = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 5;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.vtsi.ListCampaignsRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 5));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.vtsi.ListCampaignsRequest} returns this
*/
proto.ondewo.vtsi.ListCampaignsRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.ListCampaignsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignsRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ListCampaignsRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CampaignOrderBy order_by = 6;
 * @return {!proto.ondewo.vtsi.CampaignOrderBy}
 */
proto.ondewo.vtsi.ListCampaignsRequest.prototype.getOrderBy = function() {
  return /** @type {!proto.ondewo.vtsi.CampaignOrderBy} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.ondewo.vtsi.CampaignOrderBy} value
 * @return {!proto.ondewo.vtsi.ListCampaignsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignsRequest.prototype.setOrderBy = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.ListCampaignsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.ListCampaignsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.ListCampaignsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.ListCampaignsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ListCampaignsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    campaignsList: jspb.Message.toObjectList(msg.getCampaignsList(),
    proto.ondewo.vtsi.Campaign.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.ListCampaignsResponse}
 */
proto.ondewo.vtsi.ListCampaignsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.ListCampaignsResponse;
  return proto.ondewo.vtsi.ListCampaignsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.ListCampaignsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.ListCampaignsResponse}
 */
proto.ondewo.vtsi.ListCampaignsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.vtsi.Campaign;
      reader.readMessage(value,proto.ondewo.vtsi.Campaign.deserializeBinaryFromReader);
      msg.addCampaigns(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.ListCampaignsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.ListCampaignsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.ListCampaignsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ListCampaignsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampaignsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.vtsi.Campaign.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Campaign campaigns = 1;
 * @return {!Array<!proto.ondewo.vtsi.Campaign>}
 */
proto.ondewo.vtsi.ListCampaignsResponse.prototype.getCampaignsList = function() {
  return /** @type{!Array<!proto.ondewo.vtsi.Campaign>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.Campaign, 1));
};


/**
 * @param {!Array<!proto.ondewo.vtsi.Campaign>} value
 * @return {!proto.ondewo.vtsi.ListCampaignsResponse} returns this
*/
proto.ondewo.vtsi.ListCampaignsResponse.prototype.setCampaignsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.vtsi.Campaign=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.Campaign}
 */
proto.ondewo.vtsi.ListCampaignsResponse.prototype.addCampaigns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.vtsi.Campaign, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.ListCampaignsResponse} returns this
 */
proto.ondewo.vtsi.ListCampaignsResponse.prototype.clearCampaignsList = function() {
  return this.setCampaignsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.ondewo.vtsi.ListCampaignsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ListCampaignsResponse} returns this
 */
proto.ondewo.vtsi.ListCampaignsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.vtsi.GetCampaignStatisticsRequest.oneofGroups_ = [[1,3]];

/**
 * @enum {number}
 */
proto.ondewo.vtsi.GetCampaignStatisticsRequest.CampaignCase = {
  CAMPAIGN_NOT_SET: 0,
  NAME: 1,
  DISPLAY_NAME: 3
};

/**
 * @return {proto.ondewo.vtsi.GetCampaignStatisticsRequest.CampaignCase}
 */
proto.ondewo.vtsi.GetCampaignStatisticsRequest.prototype.getCampaignCase = function() {
  return /** @type {proto.ondewo.vtsi.GetCampaignStatisticsRequest.CampaignCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.vtsi.GetCampaignStatisticsRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.GetCampaignStatisticsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.GetCampaignStatisticsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.GetCampaignStatisticsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetCampaignStatisticsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.GetCampaignStatisticsRequest}
 */
proto.ondewo.vtsi.GetCampaignStatisticsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.GetCampaignStatisticsRequest;
  return proto.ondewo.vtsi.GetCampaignStatisticsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.GetCampaignStatisticsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.GetCampaignStatisticsRequest}
 */
proto.ondewo.vtsi.GetCampaignStatisticsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVtsiProjectName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.GetCampaignStatisticsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.GetCampaignStatisticsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.GetCampaignStatisticsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetCampaignStatisticsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVtsiProjectName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.GetCampaignStatisticsRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.GetCampaignStatisticsRequest} returns this
 */
proto.ondewo.vtsi.GetCampaignStatisticsRequest.prototype.setName = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.GetCampaignStatisticsRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.GetCampaignStatisticsRequest} returns this
 */
proto.ondewo.vtsi.GetCampaignStatisticsRequest.prototype.clearName = function() {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.GetCampaignStatisticsRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.GetCampaignStatisticsRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.ondewo.vtsi.GetCampaignStatisticsRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.GetCampaignStatisticsRequest} returns this
 */
proto.ondewo.vtsi.GetCampaignStatisticsRequest.prototype.setDisplayName = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.vtsi.GetCampaignStatisticsRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.GetCampaignStatisticsRequest} returns this
 */
proto.ondewo.vtsi.GetCampaignStatisticsRequest.prototype.clearDisplayName = function() {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.vtsi.GetCampaignStatisticsRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.GetCampaignStatisticsRequest.prototype.hasDisplayName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string vtsi_project_name = 4;
 * @return {string}
 */
proto.ondewo.vtsi.GetCampaignStatisticsRequest.prototype.getVtsiProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.GetCampaignStatisticsRequest} returns this
 */
proto.ondewo.vtsi.GetCampaignStatisticsRequest.prototype.setVtsiProjectName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.repeatedFields_ = [2,11,12,17];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.oneofGroups_ = [[1,8]];

/**
 * @enum {number}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.CampaignCase = {
  CAMPAIGN_NOT_SET: 0,
  CAMPAIGN_NAME: 1,
  DISPLAY_NAME: 8
};

/**
 * @return {proto.ondewo.vtsi.ListCampaignCallsRequest.CampaignCase}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.getCampaignCase = function() {
  return /** @type {proto.ondewo.vtsi.ListCampaignCallsRequest.CampaignCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.vtsi.ListCampaignCallsRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.ListCampaignCallsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.ListCampaignCallsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    campaignName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 8, ""),
    vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 9, ""),
    statesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    phoneNumber: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 5, ""),
    includeAttempts: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    phoneNumbersList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    sourcesList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
    finishTimeMin: (f = msg.getFinishTimeMin()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    finishTimeMax: (f = msg.getFinishTimeMax()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    modifiedSince: (f = msg.getModifiedSince()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    minAttempts: jspb.Message.getFieldWithDefault(msg, 16, 0),
    campaignCallNamesList: (f = jspb.Message.getRepeatedField(msg, 17)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.ListCampaignCallsRequest;
  return proto.ondewo.vtsi.ListCampaignCallsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.ListCampaignCallsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaignName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setVtsiProjectName(value);
      break;
    case 2:
      var values = /** @type {!Array<!proto.ondewo.vtsi.CampaignCallState>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addStates(values[i]);
      }
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneNumber(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeAttempts(value);
      break;
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addPhoneNumbers(value);
      break;
    case 12:
      var values = /** @type {!Array<!proto.ondewo.vtsi.CampaignCallSource>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSources(values[i]);
      }
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFinishTimeMin(value);
      break;
    case 14:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFinishTimeMax(value);
      break;
    case 15:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedSince(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinAttempts(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.addCampaignCallNames(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.ListCampaignCallsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.ListCampaignCallsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getVtsiProjectName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getStatesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
  f = message.getPhoneNumber();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIncludeAttempts();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getPhoneNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getSourcesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      12,
      f
    );
  }
  f = message.getFinishTimeMin();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFinishTimeMax();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedSince();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMinAttempts();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = message.getCampaignCallNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      17,
      f
    );
  }
};


/**
 * optional string campaign_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.getCampaignName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.setCampaignName = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.ListCampaignCallsRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.clearCampaignName = function() {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.ListCampaignCallsRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.hasCampaignName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string display_name = 8;
 * @return {string}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.setDisplayName = function(value) {
  return jspb.Message.setOneofField(this, 8, proto.ondewo.vtsi.ListCampaignCallsRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.clearDisplayName = function() {
  return jspb.Message.setOneofField(this, 8, proto.ondewo.vtsi.ListCampaignCallsRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.hasDisplayName = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string vtsi_project_name = 9;
 * @return {string}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.getVtsiProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.setVtsiProjectName = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated CampaignCallState states = 2;
 * @return {!Array<!proto.ondewo.vtsi.CampaignCallState>}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.getStatesList = function() {
  return /** @type {!Array<!proto.ondewo.vtsi.CampaignCallState>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.ondewo.vtsi.CampaignCallState>} value
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.setStatesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.ondewo.vtsi.CampaignCallState} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.addStates = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.clearStatesList = function() {
  return this.setStatesList([]);
};


/**
 * optional string phone_number = 3;
 * @return {string}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.getPhoneNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.setPhoneNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.clearPageToken = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.hasPageToken = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool include_attempts = 6;
 * @return {boolean}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.getIncludeAttempts = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.setIncludeAttempts = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
*/
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated string phone_numbers = 11;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.getPhoneNumbersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.setPhoneNumbersList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.addPhoneNumbers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.clearPhoneNumbersList = function() {
  return this.setPhoneNumbersList([]);
};


/**
 * repeated CampaignCallSource sources = 12;
 * @return {!Array<!proto.ondewo.vtsi.CampaignCallSource>}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.getSourcesList = function() {
  return /** @type {!Array<!proto.ondewo.vtsi.CampaignCallSource>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<!proto.ondewo.vtsi.CampaignCallSource>} value
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.setSourcesList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {!proto.ondewo.vtsi.CampaignCallSource} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.addSources = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.clearSourcesList = function() {
  return this.setSourcesList([]);
};


/**
 * optional google.protobuf.Timestamp finish_time_min = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.getFinishTimeMin = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
*/
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.setFinishTimeMin = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.clearFinishTimeMin = function() {
  return this.setFinishTimeMin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.hasFinishTimeMin = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional google.protobuf.Timestamp finish_time_max = 14;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.getFinishTimeMax = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 14));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
*/
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.setFinishTimeMax = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.clearFinishTimeMax = function() {
  return this.setFinishTimeMax(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.hasFinishTimeMax = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional google.protobuf.Timestamp modified_since = 15;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.getModifiedSince = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 15));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
*/
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.setModifiedSince = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.clearModifiedSince = function() {
  return this.setModifiedSince(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.hasModifiedSince = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional int32 min_attempts = 16;
 * @return {number}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.getMinAttempts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.setMinAttempts = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * repeated string campaign_call_names = 17;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.getCampaignCallNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 17));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.setCampaignCallNamesList = function(value) {
  return jspb.Message.setField(this, 17, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.addCampaignCallNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 17, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.ListCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsRequest.prototype.clearCampaignCallNamesList = function() {
  return this.setCampaignCallNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.ListCampaignCallsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.ListCampaignCallsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.ListCampaignCallsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.ListCampaignCallsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ListCampaignCallsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    campaignCallsList: jspb.Message.toObjectList(msg.getCampaignCallsList(),
    proto.ondewo.vtsi.CampaignCall.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.ListCampaignCallsResponse}
 */
proto.ondewo.vtsi.ListCampaignCallsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.ListCampaignCallsResponse;
  return proto.ondewo.vtsi.ListCampaignCallsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.ListCampaignCallsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.ListCampaignCallsResponse}
 */
proto.ondewo.vtsi.ListCampaignCallsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.vtsi.CampaignCall;
      reader.readMessage(value,proto.ondewo.vtsi.CampaignCall.deserializeBinaryFromReader);
      msg.addCampaignCalls(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.ListCampaignCallsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.ListCampaignCallsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.ListCampaignCallsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ListCampaignCallsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampaignCallsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.vtsi.CampaignCall.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated CampaignCall campaign_calls = 1;
 * @return {!Array<!proto.ondewo.vtsi.CampaignCall>}
 */
proto.ondewo.vtsi.ListCampaignCallsResponse.prototype.getCampaignCallsList = function() {
  return /** @type{!Array<!proto.ondewo.vtsi.CampaignCall>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.CampaignCall, 1));
};


/**
 * @param {!Array<!proto.ondewo.vtsi.CampaignCall>} value
 * @return {!proto.ondewo.vtsi.ListCampaignCallsResponse} returns this
*/
proto.ondewo.vtsi.ListCampaignCallsResponse.prototype.setCampaignCallsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.vtsi.CampaignCall=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.CampaignCall}
 */
proto.ondewo.vtsi.ListCampaignCallsResponse.prototype.addCampaignCalls = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.vtsi.CampaignCall, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.ListCampaignCallsResponse} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsResponse.prototype.clearCampaignCallsList = function() {
  return this.setCampaignCallsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.ondewo.vtsi.ListCampaignCallsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ListCampaignCallsResponse} returns this
 */
proto.ondewo.vtsi.ListCampaignCallsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.vtsi.StartCampaignRequest.oneofGroups_ = [[1,3]];

/**
 * @enum {number}
 */
proto.ondewo.vtsi.StartCampaignRequest.CampaignCase = {
  CAMPAIGN_NOT_SET: 0,
  NAME: 1,
  DISPLAY_NAME: 3
};

/**
 * @return {proto.ondewo.vtsi.StartCampaignRequest.CampaignCase}
 */
proto.ondewo.vtsi.StartCampaignRequest.prototype.getCampaignCase = function() {
  return /** @type {proto.ondewo.vtsi.StartCampaignRequest.CampaignCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.vtsi.StartCampaignRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.StartCampaignRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.StartCampaignRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.StartCampaignRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StartCampaignRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.StartCampaignRequest}
 */
proto.ondewo.vtsi.StartCampaignRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.StartCampaignRequest;
  return proto.ondewo.vtsi.StartCampaignRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StartCampaignRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StartCampaignRequest}
 */
proto.ondewo.vtsi.StartCampaignRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVtsiProjectName(value);
      break;
    case 5:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.StartCampaignRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.StartCampaignRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StartCampaignRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StartCampaignRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVtsiProjectName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StartCampaignRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartCampaignRequest} returns this
 */
proto.ondewo.vtsi.StartCampaignRequest.prototype.setName = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.StartCampaignRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.StartCampaignRequest} returns this
 */
proto.ondewo.vtsi.StartCampaignRequest.prototype.clearName = function() {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.StartCampaignRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.StartCampaignRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.ondewo.vtsi.StartCampaignRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartCampaignRequest} returns this
 */
proto.ondewo.vtsi.StartCampaignRequest.prototype.setDisplayName = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.vtsi.StartCampaignRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.StartCampaignRequest} returns this
 */
proto.ondewo.vtsi.StartCampaignRequest.prototype.clearDisplayName = function() {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.vtsi.StartCampaignRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.StartCampaignRequest.prototype.hasDisplayName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string vtsi_project_name = 4;
 * @return {string}
 */
proto.ondewo.vtsi.StartCampaignRequest.prototype.getVtsiProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartCampaignRequest} returns this
 */
proto.ondewo.vtsi.StartCampaignRequest.prototype.setVtsiProjectName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 5;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.vtsi.StartCampaignRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 5));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.vtsi.StartCampaignRequest} returns this
*/
proto.ondewo.vtsi.StartCampaignRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.StartCampaignRequest} returns this
 */
proto.ondewo.vtsi.StartCampaignRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.StartCampaignRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.vtsi.StopCampaignRequest.oneofGroups_ = [[1,3]];

/**
 * @enum {number}
 */
proto.ondewo.vtsi.StopCampaignRequest.CampaignCase = {
  CAMPAIGN_NOT_SET: 0,
  NAME: 1,
  DISPLAY_NAME: 3
};

/**
 * @return {proto.ondewo.vtsi.StopCampaignRequest.CampaignCase}
 */
proto.ondewo.vtsi.StopCampaignRequest.prototype.getCampaignCase = function() {
  return /** @type {proto.ondewo.vtsi.StopCampaignRequest.CampaignCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.vtsi.StopCampaignRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.StopCampaignRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.StopCampaignRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.StopCampaignRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StopCampaignRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.StopCampaignRequest}
 */
proto.ondewo.vtsi.StopCampaignRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.StopCampaignRequest;
  return proto.ondewo.vtsi.StopCampaignRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StopCampaignRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StopCampaignRequest}
 */
proto.ondewo.vtsi.StopCampaignRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVtsiProjectName(value);
      break;
    case 5:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.StopCampaignRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.StopCampaignRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StopCampaignRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StopCampaignRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVtsiProjectName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StopCampaignRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StopCampaignRequest} returns this
 */
proto.ondewo.vtsi.StopCampaignRequest.prototype.setName = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.StopCampaignRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.StopCampaignRequest} returns this
 */
proto.ondewo.vtsi.StopCampaignRequest.prototype.clearName = function() {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.StopCampaignRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.StopCampaignRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.ondewo.vtsi.StopCampaignRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StopCampaignRequest} returns this
 */
proto.ondewo.vtsi.StopCampaignRequest.prototype.setDisplayName = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.vtsi.StopCampaignRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.StopCampaignRequest} returns this
 */
proto.ondewo.vtsi.StopCampaignRequest.prototype.clearDisplayName = function() {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.vtsi.StopCampaignRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.StopCampaignRequest.prototype.hasDisplayName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string vtsi_project_name = 4;
 * @return {string}
 */
proto.ondewo.vtsi.StopCampaignRequest.prototype.getVtsiProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StopCampaignRequest} returns this
 */
proto.ondewo.vtsi.StopCampaignRequest.prototype.setVtsiProjectName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 5;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.vtsi.StopCampaignRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 5));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.vtsi.StopCampaignRequest} returns this
*/
proto.ondewo.vtsi.StopCampaignRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.StopCampaignRequest} returns this
 */
proto.ondewo.vtsi.StopCampaignRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.StopCampaignRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.vtsi.HardStopCampaignRequest.oneofGroups_ = [[1,3]];

/**
 * @enum {number}
 */
proto.ondewo.vtsi.HardStopCampaignRequest.CampaignCase = {
  CAMPAIGN_NOT_SET: 0,
  NAME: 1,
  DISPLAY_NAME: 3
};

/**
 * @return {proto.ondewo.vtsi.HardStopCampaignRequest.CampaignCase}
 */
proto.ondewo.vtsi.HardStopCampaignRequest.prototype.getCampaignCase = function() {
  return /** @type {proto.ondewo.vtsi.HardStopCampaignRequest.CampaignCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.vtsi.HardStopCampaignRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.HardStopCampaignRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.HardStopCampaignRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.HardStopCampaignRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.HardStopCampaignRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.HardStopCampaignRequest}
 */
proto.ondewo.vtsi.HardStopCampaignRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.HardStopCampaignRequest;
  return proto.ondewo.vtsi.HardStopCampaignRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.HardStopCampaignRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.HardStopCampaignRequest}
 */
proto.ondewo.vtsi.HardStopCampaignRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVtsiProjectName(value);
      break;
    case 5:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.HardStopCampaignRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.HardStopCampaignRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.HardStopCampaignRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.HardStopCampaignRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVtsiProjectName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.HardStopCampaignRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.HardStopCampaignRequest} returns this
 */
proto.ondewo.vtsi.HardStopCampaignRequest.prototype.setName = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.HardStopCampaignRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.HardStopCampaignRequest} returns this
 */
proto.ondewo.vtsi.HardStopCampaignRequest.prototype.clearName = function() {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.HardStopCampaignRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.HardStopCampaignRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.ondewo.vtsi.HardStopCampaignRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.HardStopCampaignRequest} returns this
 */
proto.ondewo.vtsi.HardStopCampaignRequest.prototype.setDisplayName = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.vtsi.HardStopCampaignRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.HardStopCampaignRequest} returns this
 */
proto.ondewo.vtsi.HardStopCampaignRequest.prototype.clearDisplayName = function() {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.vtsi.HardStopCampaignRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.HardStopCampaignRequest.prototype.hasDisplayName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string vtsi_project_name = 4;
 * @return {string}
 */
proto.ondewo.vtsi.HardStopCampaignRequest.prototype.getVtsiProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.HardStopCampaignRequest} returns this
 */
proto.ondewo.vtsi.HardStopCampaignRequest.prototype.setVtsiProjectName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 5;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.vtsi.HardStopCampaignRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 5));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.vtsi.HardStopCampaignRequest} returns this
*/
proto.ondewo.vtsi.HardStopCampaignRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.HardStopCampaignRequest} returns this
 */
proto.ondewo.vtsi.HardStopCampaignRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.HardStopCampaignRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.vtsi.ResumeCampaignRequest.oneofGroups_ = [[1,3]];

/**
 * @enum {number}
 */
proto.ondewo.vtsi.ResumeCampaignRequest.CampaignCase = {
  CAMPAIGN_NOT_SET: 0,
  NAME: 1,
  DISPLAY_NAME: 3
};

/**
 * @return {proto.ondewo.vtsi.ResumeCampaignRequest.CampaignCase}
 */
proto.ondewo.vtsi.ResumeCampaignRequest.prototype.getCampaignCase = function() {
  return /** @type {proto.ondewo.vtsi.ResumeCampaignRequest.CampaignCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.vtsi.ResumeCampaignRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.ResumeCampaignRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.ResumeCampaignRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.ResumeCampaignRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ResumeCampaignRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.ResumeCampaignRequest}
 */
proto.ondewo.vtsi.ResumeCampaignRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.ResumeCampaignRequest;
  return proto.ondewo.vtsi.ResumeCampaignRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.ResumeCampaignRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.ResumeCampaignRequest}
 */
proto.ondewo.vtsi.ResumeCampaignRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVtsiProjectName(value);
      break;
    case 5:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.ResumeCampaignRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.ResumeCampaignRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.ResumeCampaignRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ResumeCampaignRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVtsiProjectName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.ResumeCampaignRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ResumeCampaignRequest} returns this
 */
proto.ondewo.vtsi.ResumeCampaignRequest.prototype.setName = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.ResumeCampaignRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.ResumeCampaignRequest} returns this
 */
proto.ondewo.vtsi.ResumeCampaignRequest.prototype.clearName = function() {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.ResumeCampaignRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ResumeCampaignRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.ondewo.vtsi.ResumeCampaignRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ResumeCampaignRequest} returns this
 */
proto.ondewo.vtsi.ResumeCampaignRequest.prototype.setDisplayName = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.vtsi.ResumeCampaignRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.ResumeCampaignRequest} returns this
 */
proto.ondewo.vtsi.ResumeCampaignRequest.prototype.clearDisplayName = function() {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.vtsi.ResumeCampaignRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ResumeCampaignRequest.prototype.hasDisplayName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string vtsi_project_name = 4;
 * @return {string}
 */
proto.ondewo.vtsi.ResumeCampaignRequest.prototype.getVtsiProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ResumeCampaignRequest} returns this
 */
proto.ondewo.vtsi.ResumeCampaignRequest.prototype.setVtsiProjectName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 5;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.vtsi.ResumeCampaignRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 5));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.vtsi.ResumeCampaignRequest} returns this
*/
proto.ondewo.vtsi.ResumeCampaignRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.ResumeCampaignRequest} returns this
 */
proto.ondewo.vtsi.ResumeCampaignRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ResumeCampaignRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest.repeatedFields_ = [2,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.StreamCampaignStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.StreamCampaignStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    campaignNamesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    campaignDisplayNamesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    includeCalls: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    statesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusRequest}
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.StreamCampaignStatusRequest;
  return proto.ondewo.vtsi.StreamCampaignStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StreamCampaignStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusRequest}
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVtsiProjectName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addCampaignNames(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addCampaignDisplayNames(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeCalls(value);
      break;
    case 5:
      var values = /** @type {!Array<!proto.ondewo.vtsi.CampaignState>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addStates(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.StreamCampaignStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StreamCampaignStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVtsiProjectName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCampaignNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getCampaignDisplayNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getIncludeCalls();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getStatesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      5,
      f
    );
  }
};


/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest.prototype.getVtsiProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusRequest} returns this
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest.prototype.setVtsiProjectName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string campaign_names = 2;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest.prototype.getCampaignNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusRequest} returns this
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest.prototype.setCampaignNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusRequest} returns this
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest.prototype.addCampaignNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusRequest} returns this
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest.prototype.clearCampaignNamesList = function() {
  return this.setCampaignNamesList([]);
};


/**
 * repeated string campaign_display_names = 4;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest.prototype.getCampaignDisplayNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusRequest} returns this
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest.prototype.setCampaignDisplayNamesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusRequest} returns this
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest.prototype.addCampaignDisplayNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusRequest} returns this
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest.prototype.clearCampaignDisplayNamesList = function() {
  return this.setCampaignDisplayNamesList([]);
};


/**
 * optional bool include_calls = 3;
 * @return {boolean}
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest.prototype.getIncludeCalls = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusRequest} returns this
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest.prototype.setIncludeCalls = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * repeated CampaignState states = 5;
 * @return {!Array<!proto.ondewo.vtsi.CampaignState>}
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest.prototype.getStatesList = function() {
  return /** @type {!Array<!proto.ondewo.vtsi.CampaignState>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<!proto.ondewo.vtsi.CampaignState>} value
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusRequest} returns this
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest.prototype.setStatesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!proto.ondewo.vtsi.CampaignState} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusRequest} returns this
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest.prototype.addStates = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusRequest} returns this
 */
proto.ondewo.vtsi.StreamCampaignStatusRequest.prototype.clearStatesList = function() {
  return this.setStatesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.StreamCampaignStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.StreamCampaignStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    campaignsList: jspb.Message.toObjectList(msg.getCampaignsList(),
    proto.ondewo.vtsi.Campaign.toObject, includeInstance),
    campaignCallsList: jspb.Message.toObjectList(msg.getCampaignCallsList(),
    proto.ondewo.vtsi.CampaignCall.toObject, includeInstance),
    deletedCampaignNamesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    snapshot: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    endReason: jspb.Message.getFieldWithDefault(msg, 5, ""),
    endReasonType: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusResponse}
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.StreamCampaignStatusResponse;
  return proto.ondewo.vtsi.StreamCampaignStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StreamCampaignStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusResponse}
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.vtsi.Campaign;
      reader.readMessage(value,proto.ondewo.vtsi.Campaign.deserializeBinaryFromReader);
      msg.addCampaigns(value);
      break;
    case 2:
      var value = new proto.ondewo.vtsi.CampaignCall;
      reader.readMessage(value,proto.ondewo.vtsi.CampaignCall.deserializeBinaryFromReader);
      msg.addCampaignCalls(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addDeletedCampaignNames(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSnapshot(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndReason(value);
      break;
    case 6:
      var value = /** @type {!proto.ondewo.vtsi.StreamEndReason} */ (reader.readEnum());
      msg.setEndReasonType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.StreamCampaignStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StreamCampaignStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampaignsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.vtsi.Campaign.serializeBinaryToWriter
    );
  }
  f = message.getCampaignCallsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ondewo.vtsi.CampaignCall.serializeBinaryToWriter
    );
  }
  f = message.getDeletedCampaignNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getSnapshot();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getEndReason();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEndReasonType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * repeated Campaign campaigns = 1;
 * @return {!Array<!proto.ondewo.vtsi.Campaign>}
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse.prototype.getCampaignsList = function() {
  return /** @type{!Array<!proto.ondewo.vtsi.Campaign>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.Campaign, 1));
};


/**
 * @param {!Array<!proto.ondewo.vtsi.Campaign>} value
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusResponse} returns this
*/
proto.ondewo.vtsi.StreamCampaignStatusResponse.prototype.setCampaignsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.vtsi.Campaign=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.Campaign}
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse.prototype.addCampaigns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.vtsi.Campaign, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusResponse} returns this
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse.prototype.clearCampaignsList = function() {
  return this.setCampaignsList([]);
};


/**
 * repeated CampaignCall campaign_calls = 2;
 * @return {!Array<!proto.ondewo.vtsi.CampaignCall>}
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse.prototype.getCampaignCallsList = function() {
  return /** @type{!Array<!proto.ondewo.vtsi.CampaignCall>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.CampaignCall, 2));
};


/**
 * @param {!Array<!proto.ondewo.vtsi.CampaignCall>} value
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusResponse} returns this
*/
proto.ondewo.vtsi.StreamCampaignStatusResponse.prototype.setCampaignCallsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ondewo.vtsi.CampaignCall=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.CampaignCall}
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse.prototype.addCampaignCalls = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.vtsi.CampaignCall, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusResponse} returns this
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse.prototype.clearCampaignCallsList = function() {
  return this.setCampaignCallsList([]);
};


/**
 * repeated string deleted_campaign_names = 3;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse.prototype.getDeletedCampaignNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusResponse} returns this
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse.prototype.setDeletedCampaignNamesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusResponse} returns this
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse.prototype.addDeletedCampaignNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusResponse} returns this
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse.prototype.clearDeletedCampaignNamesList = function() {
  return this.setDeletedCampaignNamesList([]);
};


/**
 * optional bool snapshot = 4;
 * @return {boolean}
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse.prototype.getSnapshot = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusResponse} returns this
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse.prototype.setSnapshot = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string end_reason = 5;
 * @return {string}
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse.prototype.getEndReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusResponse} returns this
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse.prototype.setEndReason = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional StreamEndReason end_reason_type = 6;
 * @return {!proto.ondewo.vtsi.StreamEndReason}
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse.prototype.getEndReasonType = function() {
  return /** @type {!proto.ondewo.vtsi.StreamEndReason} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.ondewo.vtsi.StreamEndReason} value
 * @return {!proto.ondewo.vtsi.StreamCampaignStatusResponse} returns this
 */
proto.ondewo.vtsi.StreamCampaignStatusResponse.prototype.setEndReasonType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.GetCampaignCallRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.GetCampaignCallRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.GetCampaignCallRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetCampaignCallRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    includeAttempts: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.GetCampaignCallRequest}
 */
proto.ondewo.vtsi.GetCampaignCallRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.GetCampaignCallRequest;
  return proto.ondewo.vtsi.GetCampaignCallRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.GetCampaignCallRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.GetCampaignCallRequest}
 */
proto.ondewo.vtsi.GetCampaignCallRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeAttempts(value);
      break;
    case 3:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.GetCampaignCallRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.GetCampaignCallRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.GetCampaignCallRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetCampaignCallRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIncludeAttempts();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.GetCampaignCallRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.GetCampaignCallRequest} returns this
 */
proto.ondewo.vtsi.GetCampaignCallRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool include_attempts = 2;
 * @return {boolean}
 */
proto.ondewo.vtsi.GetCampaignCallRequest.prototype.getIncludeAttempts = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.GetCampaignCallRequest} returns this
 */
proto.ondewo.vtsi.GetCampaignCallRequest.prototype.setIncludeAttempts = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.vtsi.GetCampaignCallRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.vtsi.GetCampaignCallRequest} returns this
*/
proto.ondewo.vtsi.GetCampaignCallRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.GetCampaignCallRequest} returns this
 */
proto.ondewo.vtsi.GetCampaignCallRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.GetCampaignCallRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.CampaignCallRefusal.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.CampaignCallRefusal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.CampaignCallRefusal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CampaignCallRefusal.toObject = function(includeInstance, msg) {
  var f, obj = {
    campaignCallName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.CampaignCallRefusal}
 */
proto.ondewo.vtsi.CampaignCallRefusal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.CampaignCallRefusal;
  return proto.ondewo.vtsi.CampaignCallRefusal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.CampaignCallRefusal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.CampaignCallRefusal}
 */
proto.ondewo.vtsi.CampaignCallRefusal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaignCallName(value);
      break;
    case 2:
      var value = /** @type {!proto.ondewo.vtsi.CampaignCallState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.CampaignCallRefusal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.CampaignCallRefusal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.CampaignCallRefusal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CampaignCallRefusal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampaignCallName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string campaign_call_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.CampaignCallRefusal.prototype.getCampaignCallName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CampaignCallRefusal} returns this
 */
proto.ondewo.vtsi.CampaignCallRefusal.prototype.setCampaignCallName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CampaignCallState state = 2;
 * @return {!proto.ondewo.vtsi.CampaignCallState}
 */
proto.ondewo.vtsi.CampaignCallRefusal.prototype.getState = function() {
  return /** @type {!proto.ondewo.vtsi.CampaignCallState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ondewo.vtsi.CampaignCallState} value
 * @return {!proto.ondewo.vtsi.CampaignCallRefusal} returns this
 */
proto.ondewo.vtsi.CampaignCallRefusal.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string reason = 3;
 * @return {string}
 */
proto.ondewo.vtsi.CampaignCallRefusal.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CampaignCallRefusal} returns this
 */
proto.ondewo.vtsi.CampaignCallRefusal.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.repeatedFields_ = [4,5];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.CampaignCase = {
  CAMPAIGN_NOT_SET: 0,
  NAME: 1,
  DISPLAY_NAME: 2
};

/**
 * @return {proto.ondewo.vtsi.CancelCampaignCallsRequest.CampaignCase}
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.prototype.getCampaignCase = function() {
  return /** @type {proto.ondewo.vtsi.CancelCampaignCallsRequest.CampaignCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.vtsi.CancelCampaignCallsRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.CancelCampaignCallsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.CancelCampaignCallsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    campaignCallNamesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    statesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.CancelCampaignCallsRequest}
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.CancelCampaignCallsRequest;
  return proto.ondewo.vtsi.CancelCampaignCallsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.CancelCampaignCallsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.CancelCampaignCallsRequest}
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVtsiProjectName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addCampaignCallNames(value);
      break;
    case 5:
      var values = /** @type {!Array<!proto.ondewo.vtsi.CampaignCallState>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addStates(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.CancelCampaignCallsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.CancelCampaignCallsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVtsiProjectName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCampaignCallNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getStatesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CancelCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.prototype.setName = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.CancelCampaignCallsRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.CancelCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.prototype.clearName = function() {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.CancelCampaignCallsRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CancelCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.prototype.setDisplayName = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.ondewo.vtsi.CancelCampaignCallsRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.CancelCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.prototype.clearDisplayName = function() {
  return jspb.Message.setOneofField(this, 2, proto.ondewo.vtsi.CancelCampaignCallsRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.prototype.hasDisplayName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string vtsi_project_name = 3;
 * @return {string}
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.prototype.getVtsiProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CancelCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.prototype.setVtsiProjectName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string campaign_call_names = 4;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.prototype.getCampaignCallNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.CancelCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.prototype.setCampaignCallNamesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.CancelCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.prototype.addCampaignCallNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.CancelCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.prototype.clearCampaignCallNamesList = function() {
  return this.setCampaignCallNamesList([]);
};


/**
 * repeated CampaignCallState states = 5;
 * @return {!Array<!proto.ondewo.vtsi.CampaignCallState>}
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.prototype.getStatesList = function() {
  return /** @type {!Array<!proto.ondewo.vtsi.CampaignCallState>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<!proto.ondewo.vtsi.CampaignCallState>} value
 * @return {!proto.ondewo.vtsi.CancelCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.prototype.setStatesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!proto.ondewo.vtsi.CampaignCallState} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.CancelCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.prototype.addStates = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.CancelCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.CancelCampaignCallsRequest.prototype.clearStatesList = function() {
  return this.setStatesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.CancelCampaignCallsResponse.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.CancelCampaignCallsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.CancelCampaignCallsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.CancelCampaignCallsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CancelCampaignCallsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    campaignName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cancelledCampaignCallNamesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    refusedList: jspb.Message.toObjectList(msg.getRefusedList(),
    proto.ondewo.vtsi.CampaignCallRefusal.toObject, includeInstance),
    remainingCount: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.CancelCampaignCallsResponse}
 */
proto.ondewo.vtsi.CancelCampaignCallsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.CancelCampaignCallsResponse;
  return proto.ondewo.vtsi.CancelCampaignCallsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.CancelCampaignCallsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.CancelCampaignCallsResponse}
 */
proto.ondewo.vtsi.CancelCampaignCallsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaignName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addCancelledCampaignCallNames(value);
      break;
    case 3:
      var value = new proto.ondewo.vtsi.CampaignCallRefusal;
      reader.readMessage(value,proto.ondewo.vtsi.CampaignCallRefusal.deserializeBinaryFromReader);
      msg.addRefused(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRemainingCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.CancelCampaignCallsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.CancelCampaignCallsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.CancelCampaignCallsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CancelCampaignCallsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampaignName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCancelledCampaignCallNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getRefusedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ondewo.vtsi.CampaignCallRefusal.serializeBinaryToWriter
    );
  }
  f = message.getRemainingCount();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string campaign_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.CancelCampaignCallsResponse.prototype.getCampaignName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CancelCampaignCallsResponse} returns this
 */
proto.ondewo.vtsi.CancelCampaignCallsResponse.prototype.setCampaignName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string cancelled_campaign_call_names = 2;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.CancelCampaignCallsResponse.prototype.getCancelledCampaignCallNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.CancelCampaignCallsResponse} returns this
 */
proto.ondewo.vtsi.CancelCampaignCallsResponse.prototype.setCancelledCampaignCallNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.CancelCampaignCallsResponse} returns this
 */
proto.ondewo.vtsi.CancelCampaignCallsResponse.prototype.addCancelledCampaignCallNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.CancelCampaignCallsResponse} returns this
 */
proto.ondewo.vtsi.CancelCampaignCallsResponse.prototype.clearCancelledCampaignCallNamesList = function() {
  return this.setCancelledCampaignCallNamesList([]);
};


/**
 * repeated CampaignCallRefusal refused = 3;
 * @return {!Array<!proto.ondewo.vtsi.CampaignCallRefusal>}
 */
proto.ondewo.vtsi.CancelCampaignCallsResponse.prototype.getRefusedList = function() {
  return /** @type{!Array<!proto.ondewo.vtsi.CampaignCallRefusal>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.CampaignCallRefusal, 3));
};


/**
 * @param {!Array<!proto.ondewo.vtsi.CampaignCallRefusal>} value
 * @return {!proto.ondewo.vtsi.CancelCampaignCallsResponse} returns this
*/
proto.ondewo.vtsi.CancelCampaignCallsResponse.prototype.setRefusedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ondewo.vtsi.CampaignCallRefusal=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.CampaignCallRefusal}
 */
proto.ondewo.vtsi.CancelCampaignCallsResponse.prototype.addRefused = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ondewo.vtsi.CampaignCallRefusal, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.CancelCampaignCallsResponse} returns this
 */
proto.ondewo.vtsi.CancelCampaignCallsResponse.prototype.clearRefusedList = function() {
  return this.setRefusedList([]);
};


/**
 * optional int32 remaining_count = 4;
 * @return {number}
 */
proto.ondewo.vtsi.CancelCampaignCallsResponse.prototype.getRemainingCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.CancelCampaignCallsResponse} returns this
 */
proto.ondewo.vtsi.CancelCampaignCallsResponse.prototype.setRemainingCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.repeatedFields_ = [4,5];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.CampaignCase = {
  CAMPAIGN_NOT_SET: 0,
  NAME: 1,
  DISPLAY_NAME: 2
};

/**
 * @return {proto.ondewo.vtsi.RetryCampaignCallsRequest.CampaignCase}
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.getCampaignCase = function() {
  return /** @type {proto.ondewo.vtsi.RetryCampaignCallsRequest.CampaignCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.vtsi.RetryCampaignCallsRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.RetryCampaignCallsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.RetryCampaignCallsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    campaignCallNamesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    statesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    additionalAttempts: jspb.Message.getFieldWithDefault(msg, 6, 0),
    notBefore: (f = msg.getNotBefore()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsRequest}
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.RetryCampaignCallsRequest;
  return proto.ondewo.vtsi.RetryCampaignCallsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.RetryCampaignCallsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsRequest}
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVtsiProjectName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addCampaignCallNames(value);
      break;
    case 5:
      var values = /** @type {!Array<!proto.ondewo.vtsi.CampaignCallState>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addStates(values[i]);
      }
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAdditionalAttempts(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setNotBefore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.RetryCampaignCallsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.RetryCampaignCallsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVtsiProjectName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCampaignCallNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getStatesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      5,
      f
    );
  }
  f = message.getAdditionalAttempts();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getNotBefore();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.setName = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.RetryCampaignCallsRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.clearName = function() {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.RetryCampaignCallsRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.setDisplayName = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.ondewo.vtsi.RetryCampaignCallsRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.clearDisplayName = function() {
  return jspb.Message.setOneofField(this, 2, proto.ondewo.vtsi.RetryCampaignCallsRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.hasDisplayName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string vtsi_project_name = 3;
 * @return {string}
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.getVtsiProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.setVtsiProjectName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string campaign_call_names = 4;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.getCampaignCallNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.setCampaignCallNamesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.addCampaignCallNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.clearCampaignCallNamesList = function() {
  return this.setCampaignCallNamesList([]);
};


/**
 * repeated CampaignCallState states = 5;
 * @return {!Array<!proto.ondewo.vtsi.CampaignCallState>}
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.getStatesList = function() {
  return /** @type {!Array<!proto.ondewo.vtsi.CampaignCallState>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<!proto.ondewo.vtsi.CampaignCallState>} value
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.setStatesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!proto.ondewo.vtsi.CampaignCallState} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.addStates = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.clearStatesList = function() {
  return this.setStatesList([]);
};


/**
 * optional int32 additional_attempts = 6;
 * @return {number}
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.getAdditionalAttempts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.setAdditionalAttempts = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp not_before = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.getNotBefore = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsRequest} returns this
*/
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.setNotBefore = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsRequest} returns this
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.clearNotBefore = function() {
  return this.setNotBefore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.RetryCampaignCallsRequest.prototype.hasNotBefore = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.RetryCampaignCallsResponse.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.RetryCampaignCallsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.RetryCampaignCallsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.RetryCampaignCallsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.RetryCampaignCallsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    campaignName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requeuedCampaignCallNamesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    refusedList: jspb.Message.toObjectList(msg.getRefusedList(),
    proto.ondewo.vtsi.CampaignCallRefusal.toObject, includeInstance),
    remainingCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    campaignState: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsResponse}
 */
proto.ondewo.vtsi.RetryCampaignCallsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.RetryCampaignCallsResponse;
  return proto.ondewo.vtsi.RetryCampaignCallsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.RetryCampaignCallsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsResponse}
 */
proto.ondewo.vtsi.RetryCampaignCallsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaignName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addRequeuedCampaignCallNames(value);
      break;
    case 3:
      var value = new proto.ondewo.vtsi.CampaignCallRefusal;
      reader.readMessage(value,proto.ondewo.vtsi.CampaignCallRefusal.deserializeBinaryFromReader);
      msg.addRefused(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRemainingCount(value);
      break;
    case 5:
      var value = /** @type {!proto.ondewo.vtsi.CampaignState} */ (reader.readEnum());
      msg.setCampaignState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.RetryCampaignCallsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.RetryCampaignCallsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.RetryCampaignCallsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.RetryCampaignCallsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampaignName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequeuedCampaignCallNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getRefusedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ondewo.vtsi.CampaignCallRefusal.serializeBinaryToWriter
    );
  }
  f = message.getRemainingCount();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getCampaignState();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional string campaign_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.RetryCampaignCallsResponse.prototype.getCampaignName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsResponse} returns this
 */
proto.ondewo.vtsi.RetryCampaignCallsResponse.prototype.setCampaignName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string requeued_campaign_call_names = 2;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.RetryCampaignCallsResponse.prototype.getRequeuedCampaignCallNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsResponse} returns this
 */
proto.ondewo.vtsi.RetryCampaignCallsResponse.prototype.setRequeuedCampaignCallNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsResponse} returns this
 */
proto.ondewo.vtsi.RetryCampaignCallsResponse.prototype.addRequeuedCampaignCallNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsResponse} returns this
 */
proto.ondewo.vtsi.RetryCampaignCallsResponse.prototype.clearRequeuedCampaignCallNamesList = function() {
  return this.setRequeuedCampaignCallNamesList([]);
};


/**
 * repeated CampaignCallRefusal refused = 3;
 * @return {!Array<!proto.ondewo.vtsi.CampaignCallRefusal>}
 */
proto.ondewo.vtsi.RetryCampaignCallsResponse.prototype.getRefusedList = function() {
  return /** @type{!Array<!proto.ondewo.vtsi.CampaignCallRefusal>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.CampaignCallRefusal, 3));
};


/**
 * @param {!Array<!proto.ondewo.vtsi.CampaignCallRefusal>} value
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsResponse} returns this
*/
proto.ondewo.vtsi.RetryCampaignCallsResponse.prototype.setRefusedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ondewo.vtsi.CampaignCallRefusal=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.CampaignCallRefusal}
 */
proto.ondewo.vtsi.RetryCampaignCallsResponse.prototype.addRefused = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ondewo.vtsi.CampaignCallRefusal, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsResponse} returns this
 */
proto.ondewo.vtsi.RetryCampaignCallsResponse.prototype.clearRefusedList = function() {
  return this.setRefusedList([]);
};


/**
 * optional int32 remaining_count = 4;
 * @return {number}
 */
proto.ondewo.vtsi.RetryCampaignCallsResponse.prototype.getRemainingCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsResponse} returns this
 */
proto.ondewo.vtsi.RetryCampaignCallsResponse.prototype.setRemainingCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional CampaignState campaign_state = 5;
 * @return {!proto.ondewo.vtsi.CampaignState}
 */
proto.ondewo.vtsi.RetryCampaignCallsResponse.prototype.getCampaignState = function() {
  return /** @type {!proto.ondewo.vtsi.CampaignState} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.ondewo.vtsi.CampaignState} value
 * @return {!proto.ondewo.vtsi.RetryCampaignCallsResponse} returns this
 */
proto.ondewo.vtsi.RetryCampaignCallsResponse.prototype.setCampaignState = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.CloneCampaignRequest.repeatedFields_ = [6];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.vtsi.CloneCampaignRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.ondewo.vtsi.CloneCampaignRequest.SourceCase = {
  SOURCE_NOT_SET: 0,
  SOURCE_NAME: 1,
  SOURCE_DISPLAY_NAME: 2
};

/**
 * @return {proto.ondewo.vtsi.CloneCampaignRequest.SourceCase}
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.getSourceCase = function() {
  return /** @type {proto.ondewo.vtsi.CloneCampaignRequest.SourceCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.vtsi.CloneCampaignRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.CloneCampaignRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.CloneCampaignRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CloneCampaignRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sourceDisplayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    newDisplayName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    includeCalls: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    callStatesList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    idempotencyKey: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.vtsi.CloneCampaignRequest}
 */
proto.ondewo.vtsi.CloneCampaignRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.CloneCampaignRequest;
  return proto.ondewo.vtsi.CloneCampaignRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.CloneCampaignRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.CloneCampaignRequest}
 */
proto.ondewo.vtsi.CloneCampaignRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceDisplayName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVtsiProjectName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewDisplayName(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeCalls(value);
      break;
    case 6:
      var values = /** @type {!Array<!proto.ondewo.vtsi.CampaignCallState>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addCallStates(values[i]);
      }
      break;
    case 7:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdempotencyKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.CloneCampaignRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.CloneCampaignRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CloneCampaignRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVtsiProjectName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNewDisplayName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIncludeCalls();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getCallStatesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      6,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getIdempotencyKey();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string source_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.getSourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CloneCampaignRequest} returns this
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.setSourceName = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.CloneCampaignRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.CloneCampaignRequest} returns this
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.clearSourceName = function() {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.vtsi.CloneCampaignRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.hasSourceName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string source_display_name = 2;
 * @return {string}
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.getSourceDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CloneCampaignRequest} returns this
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.setSourceDisplayName = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.ondewo.vtsi.CloneCampaignRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.CloneCampaignRequest} returns this
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.clearSourceDisplayName = function() {
  return jspb.Message.setOneofField(this, 2, proto.ondewo.vtsi.CloneCampaignRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.hasSourceDisplayName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string vtsi_project_name = 3;
 * @return {string}
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.getVtsiProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CloneCampaignRequest} returns this
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.setVtsiProjectName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string new_display_name = 4;
 * @return {string}
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.getNewDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CloneCampaignRequest} returns this
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.setNewDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool include_calls = 5;
 * @return {boolean}
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.getIncludeCalls = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.CloneCampaignRequest} returns this
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.setIncludeCalls = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * repeated CampaignCallState call_states = 6;
 * @return {!Array<!proto.ondewo.vtsi.CampaignCallState>}
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.getCallStatesList = function() {
  return /** @type {!Array<!proto.ondewo.vtsi.CampaignCallState>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<!proto.ondewo.vtsi.CampaignCallState>} value
 * @return {!proto.ondewo.vtsi.CloneCampaignRequest} returns this
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.setCallStatesList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!proto.ondewo.vtsi.CampaignCallState} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.CloneCampaignRequest} returns this
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.addCallStates = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.CloneCampaignRequest} returns this
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.clearCallStatesList = function() {
  return this.setCallStatesList([]);
};


/**
 * optional google.protobuf.FieldMask field_mask = 7;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 7));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.vtsi.CloneCampaignRequest} returns this
*/
proto.ondewo.vtsi.CloneCampaignRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CloneCampaignRequest} returns this
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string idempotency_key = 8;
 * @return {string}
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.getIdempotencyKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CloneCampaignRequest} returns this
 */
proto.ondewo.vtsi.CloneCampaignRequest.prototype.setIdempotencyKey = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * @enum {number}
 */
proto.ondewo.vtsi.CampaignState = {
  CAMPAIGN_STATE_UNSPECIFIED: 0,
  CAMPAIGN_STATE_CREATED: 1,
  CAMPAIGN_STATE_RUNNING: 2,
  CAMPAIGN_STATE_STOPPING: 3,
  CAMPAIGN_STATE_STOPPED: 4,
  CAMPAIGN_STATE_HARD_STOPPING: 5,
  CAMPAIGN_STATE_HARD_STOPPED: 6,
  CAMPAIGN_STATE_COMPLETED: 7
};

/**
 * @enum {number}
 */
proto.ondewo.vtsi.CampaignCallState = {
  CAMPAIGN_CALL_STATE_UNSPECIFIED: 0,
  CAMPAIGN_CALL_STATE_NOT_STARTED: 1,
  CAMPAIGN_CALL_STATE_DISPATCHING: 2,
  CAMPAIGN_CALL_STATE_IN_PROGRESS: 3,
  CAMPAIGN_CALL_STATE_RETRY_PENDING: 4,
  CAMPAIGN_CALL_STATE_COMPLETED: 5,
  CAMPAIGN_CALL_STATE_FAILED: 6,
  CAMPAIGN_CALL_STATE_CANCELLED: 7
};

/**
 * @enum {number}
 */
proto.ondewo.vtsi.CampaignStartMode = {
  CAMPAIGN_START_MODE_UNSPECIFIED: 0,
  CAMPAIGN_START_MODE_START: 1,
  CAMPAIGN_START_MODE_DO_NOT_START: 2
};

/**
 * @enum {number}
 */
proto.ondewo.vtsi.CampaignCallSource = {
  CAMPAIGN_CALL_SOURCE_UNSPECIFIED: 0,
  CAMPAIGN_CALL_SOURCE_CALLER: 1,
  CAMPAIGN_CALL_SOURCE_SCHEDULED_CALLER: 2
};

/**
 * @enum {number}
 */
proto.ondewo.vtsi.CampaignCallAttemptOutcome = {
  CAMPAIGN_CALL_ATTEMPT_OUTCOME_UNSPECIFIED: 0,
  CAMPAIGN_CALL_ATTEMPT_OUTCOME_IN_PROGRESS: 1,
  CAMPAIGN_CALL_ATTEMPT_OUTCOME_COMPLETED: 2,
  CAMPAIGN_CALL_ATTEMPT_OUTCOME_FAILED: 3,
  CAMPAIGN_CALL_ATTEMPT_OUTCOME_CANCELLED: 4
};

/**
 * @enum {number}
 */
proto.ondewo.vtsi.CallingWindowDayOfWeek = {
  CALLING_WINDOW_DAY_OF_WEEK_UNSPECIFIED: 0,
  CALLING_WINDOW_DAY_OF_WEEK_MONDAY: 1,
  CALLING_WINDOW_DAY_OF_WEEK_TUESDAY: 2,
  CALLING_WINDOW_DAY_OF_WEEK_WEDNESDAY: 3,
  CALLING_WINDOW_DAY_OF_WEEK_THURSDAY: 4,
  CALLING_WINDOW_DAY_OF_WEEK_FRIDAY: 5,
  CALLING_WINDOW_DAY_OF_WEEK_SATURDAY: 6,
  CALLING_WINDOW_DAY_OF_WEEK_SUNDAY: 7
};

/**
 * @enum {number}
 */
proto.ondewo.vtsi.CampaignOrderBy = {
  CAMPAIGN_ORDER_BY_UNSPECIFIED: 0,
  CAMPAIGN_ORDER_BY_CREATED_AT_DESC: 1,
  CAMPAIGN_ORDER_BY_MODIFIED_AT_DESC: 2,
  CAMPAIGN_ORDER_BY_DISPLAY_NAME_ASC: 3
};

/**
 * @enum {number}
 */
proto.ondewo.vtsi.StreamEndReason = {
  STREAM_END_REASON_UNSPECIFIED: 0,
  STREAM_END_REASON_MAX_DURATION: 1,
  STREAM_END_REASON_CLIENT_TOO_SLOW: 2,
  STREAM_END_REASON_SUBSCRIPTION_DELETED: 3,
  STREAM_END_REASON_SUBSCRIPTION_DISABLED: 4,
  STREAM_END_REASON_PROJECT_DELETED: 5,
  STREAM_END_REASON_SERVER_SHUTDOWN: 6
};

goog.object.extend(exports, proto.ondewo.vtsi);
