// source: ondewo/vtsi/voip.proto
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
var global = Function('return this')();

var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var ondewo_nlu_context_pb = require('../../ondewo/nlu/context_pb.js');
goog.object.extend(proto, ondewo_nlu_context_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var ondewo_s2t_speech$to$text_pb = require('../../ondewo/s2t/speech-to-text_pb.js');
goog.object.extend(proto, ondewo_s2t_speech$to$text_pb);
var ondewo_t2s_text$to$speech_pb = require('../../ondewo/t2s/text-to-speech_pb.js');
goog.object.extend(proto, ondewo_t2s_text$to$speech_pb);
var ondewo_sip_sip_pb = require('../../ondewo/sip/sip_pb.js');
goog.object.extend(proto, ondewo_sip_sip_pb);
goog.exportSymbol('proto.ondewo.vtsi.AllServicesStatuses', null, global);
goog.exportSymbol('proto.ondewo.vtsi.AsteriskConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.AsteriskConfigs', null, global);
goog.exportSymbol('proto.ondewo.vtsi.AsteriskConfigs.AsteriskConfigsOneofCase', null, global);
goog.exportSymbol('proto.ondewo.vtsi.AsteriskConfigsFiles', null, global);
goog.exportSymbol('proto.ondewo.vtsi.AsteriskConfigsVariables', null, global);
goog.exportSymbol('proto.ondewo.vtsi.AudioObjectStorageConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.AudioObjectStorageConfig.AudioStorageConfigCase', null, global);
goog.exportSymbol('proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.BaseServiceConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CallType', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CommonServicesConfigs', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CreateProjectConfigsRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.Credentials', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CsiConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.DeleteProjectConfigsRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.DeployProjectRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.Endpoint', null, global);
goog.exportSymbol('proto.ondewo.vtsi.GetAudioFileRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.GetAudioFileResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.GetFullConversationAudioFileRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.GetFullConversationAudioFileResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.GetProjectConfigsRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.GetProjectConfigsResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.GetVoipCallInfoRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.GetVoipCallInfoResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.ListVoipCallInfoRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.ListVoipCallInfoResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.MessageBrokerConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.MessageBrokerConfig.MessageBrokerConfigCase', null, global);
goog.exportSymbol('proto.ondewo.vtsi.MessageBrokerServicesActivationConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.MinioConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.NLUConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.NLUConfig.AuthenticationCase', null, global);
goog.exportSymbol('proto.ondewo.vtsi.NluCallbacks', null, global);
goog.exportSymbol('proto.ondewo.vtsi.ProjectConfigs', null, global);
goog.exportSymbol('proto.ondewo.vtsi.RabbitMqConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.S2TConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.S2tCallbacks', null, global);
goog.exportSymbol('proto.ondewo.vtsi.SIPBaseConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.SIPCallerConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.ServiceStatus', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StartCallerRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StartCallersRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StartCallersResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StartListenerRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StartListenersRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StartListenersResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StartScheduledCallerRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StartScheduledCallersRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StopAllCallsRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StopCallsRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.T2SConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.T2sCallbacks', null, global);
goog.exportSymbol('proto.ondewo.vtsi.TransferCallsRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.UndeployProjectRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.UpdateProjectConfigsRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.VoipCallInfo', null, global);
goog.exportSymbol('proto.ondewo.vtsi.VoipCallInfoView', null, global);
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
proto.ondewo.vtsi.ProjectConfigs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.ProjectConfigs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.ProjectConfigs.displayName = 'proto.ondewo.vtsi.ProjectConfigs';
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
proto.ondewo.vtsi.AsteriskConfigsVariables = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.AsteriskConfigsVariables, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.AsteriskConfigsVariables.displayName = 'proto.ondewo.vtsi.AsteriskConfigsVariables';
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
proto.ondewo.vtsi.AsteriskConfigsFiles = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.AsteriskConfigsFiles, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.AsteriskConfigsFiles.displayName = 'proto.ondewo.vtsi.AsteriskConfigsFiles';
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
proto.ondewo.vtsi.AsteriskConfigs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ondewo.vtsi.AsteriskConfigs.oneofGroups_);
};
goog.inherits(proto.ondewo.vtsi.AsteriskConfigs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.AsteriskConfigs.displayName = 'proto.ondewo.vtsi.AsteriskConfigs';
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
proto.ondewo.vtsi.CreateProjectConfigsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.CreateProjectConfigsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.CreateProjectConfigsRequest.displayName = 'proto.ondewo.vtsi.CreateProjectConfigsRequest';
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
proto.ondewo.vtsi.GetProjectConfigsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.GetProjectConfigsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.GetProjectConfigsRequest.displayName = 'proto.ondewo.vtsi.GetProjectConfigsRequest';
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
proto.ondewo.vtsi.GetProjectConfigsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.GetProjectConfigsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.GetProjectConfigsResponse.displayName = 'proto.ondewo.vtsi.GetProjectConfigsResponse';
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
proto.ondewo.vtsi.UpdateProjectConfigsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.UpdateProjectConfigsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.UpdateProjectConfigsRequest.displayName = 'proto.ondewo.vtsi.UpdateProjectConfigsRequest';
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
proto.ondewo.vtsi.DeleteProjectConfigsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.DeleteProjectConfigsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.DeleteProjectConfigsRequest.displayName = 'proto.ondewo.vtsi.DeleteProjectConfigsRequest';
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
proto.ondewo.vtsi.DeployProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.DeployProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.DeployProjectRequest.displayName = 'proto.ondewo.vtsi.DeployProjectRequest';
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
proto.ondewo.vtsi.UndeployProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.UndeployProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.UndeployProjectRequest.displayName = 'proto.ondewo.vtsi.UndeployProjectRequest';
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
proto.ondewo.vtsi.BaseServiceConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.BaseServiceConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.BaseServiceConfig.displayName = 'proto.ondewo.vtsi.BaseServiceConfig';
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
proto.ondewo.vtsi.Credentials = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.Credentials, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.Credentials.displayName = 'proto.ondewo.vtsi.Credentials';
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
proto.ondewo.vtsi.NLUConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.NLUConfig.repeatedFields_, proto.ondewo.vtsi.NLUConfig.oneofGroups_);
};
goog.inherits(proto.ondewo.vtsi.NLUConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.NLUConfig.displayName = 'proto.ondewo.vtsi.NLUConfig';
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
proto.ondewo.vtsi.T2SConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.T2SConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.T2SConfig.displayName = 'proto.ondewo.vtsi.T2SConfig';
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
proto.ondewo.vtsi.S2TConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.S2TConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.S2TConfig.displayName = 'proto.ondewo.vtsi.S2TConfig';
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
proto.ondewo.vtsi.AsteriskConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.AsteriskConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.AsteriskConfig.displayName = 'proto.ondewo.vtsi.AsteriskConfig';
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
proto.ondewo.vtsi.CommonServicesConfigs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.CommonServicesConfigs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.CommonServicesConfigs.displayName = 'proto.ondewo.vtsi.CommonServicesConfigs';
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
proto.ondewo.vtsi.SIPBaseConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.SIPBaseConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.SIPBaseConfig.displayName = 'proto.ondewo.vtsi.SIPBaseConfig';
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
proto.ondewo.vtsi.SIPCallerConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.SIPCallerConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.SIPCallerConfig.displayName = 'proto.ondewo.vtsi.SIPCallerConfig';
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
proto.ondewo.vtsi.CsiConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.CsiConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.CsiConfig.displayName = 'proto.ondewo.vtsi.CsiConfig';
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
proto.ondewo.vtsi.AudioObjectStorageConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ondewo.vtsi.AudioObjectStorageConfig.oneofGroups_);
};
goog.inherits(proto.ondewo.vtsi.AudioObjectStorageConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.AudioObjectStorageConfig.displayName = 'proto.ondewo.vtsi.AudioObjectStorageConfig';
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
proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.displayName = 'proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig';
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
proto.ondewo.vtsi.MessageBrokerConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ondewo.vtsi.MessageBrokerConfig.oneofGroups_);
};
goog.inherits(proto.ondewo.vtsi.MessageBrokerConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.MessageBrokerConfig.displayName = 'proto.ondewo.vtsi.MessageBrokerConfig';
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
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.MessageBrokerServicesActivationConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.displayName = 'proto.ondewo.vtsi.MessageBrokerServicesActivationConfig';
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
proto.ondewo.vtsi.RabbitMqConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.RabbitMqConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.RabbitMqConfig.displayName = 'proto.ondewo.vtsi.RabbitMqConfig';
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
proto.ondewo.vtsi.Endpoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.Endpoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.Endpoint.displayName = 'proto.ondewo.vtsi.Endpoint';
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
proto.ondewo.vtsi.MinioConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.MinioConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.MinioConfig.displayName = 'proto.ondewo.vtsi.MinioConfig';
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
proto.ondewo.vtsi.S2tCallbacks = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.S2tCallbacks.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.S2tCallbacks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.S2tCallbacks.displayName = 'proto.ondewo.vtsi.S2tCallbacks';
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
proto.ondewo.vtsi.NluCallbacks = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.NluCallbacks.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.NluCallbacks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.NluCallbacks.displayName = 'proto.ondewo.vtsi.NluCallbacks';
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
proto.ondewo.vtsi.T2sCallbacks = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.T2sCallbacks.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.T2sCallbacks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.T2sCallbacks.displayName = 'proto.ondewo.vtsi.T2sCallbacks';
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
proto.ondewo.vtsi.StartListenerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.StartListenerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.StartListenerRequest.displayName = 'proto.ondewo.vtsi.StartListenerRequest';
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
proto.ondewo.vtsi.StartCallerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.StartCallerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.StartCallerRequest.displayName = 'proto.ondewo.vtsi.StartCallerRequest';
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
proto.ondewo.vtsi.StartScheduledCallerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.StartScheduledCallerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.StartScheduledCallerRequest.displayName = 'proto.ondewo.vtsi.StartScheduledCallerRequest';
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
proto.ondewo.vtsi.StartListenersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.StartListenersRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.StartListenersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.StartListenersRequest.displayName = 'proto.ondewo.vtsi.StartListenersRequest';
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
proto.ondewo.vtsi.StartListenersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.StartListenersResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.StartListenersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.StartListenersResponse.displayName = 'proto.ondewo.vtsi.StartListenersResponse';
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
proto.ondewo.vtsi.StartCallersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.StartCallersRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.StartCallersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.StartCallersRequest.displayName = 'proto.ondewo.vtsi.StartCallersRequest';
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
proto.ondewo.vtsi.StartCallersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.StartCallersResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.StartCallersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.StartCallersResponse.displayName = 'proto.ondewo.vtsi.StartCallersResponse';
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
proto.ondewo.vtsi.StartScheduledCallersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.StartScheduledCallersRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.StartScheduledCallersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.StartScheduledCallersRequest.displayName = 'proto.ondewo.vtsi.StartScheduledCallersRequest';
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
proto.ondewo.vtsi.StopCallsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.StopCallsRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.StopCallsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.StopCallsRequest.displayName = 'proto.ondewo.vtsi.StopCallsRequest';
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
proto.ondewo.vtsi.StopAllCallsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.StopAllCallsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.StopAllCallsRequest.displayName = 'proto.ondewo.vtsi.StopAllCallsRequest';
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
proto.ondewo.vtsi.TransferCallsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.TransferCallsRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.TransferCallsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.TransferCallsRequest.displayName = 'proto.ondewo.vtsi.TransferCallsRequest';
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
proto.ondewo.vtsi.GetVoipCallInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.GetVoipCallInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.GetVoipCallInfoRequest.displayName = 'proto.ondewo.vtsi.GetVoipCallInfoRequest';
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
proto.ondewo.vtsi.GetVoipCallInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.GetVoipCallInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.GetVoipCallInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.GetVoipCallInfoResponse.displayName = 'proto.ondewo.vtsi.GetVoipCallInfoResponse';
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
proto.ondewo.vtsi.VoipCallInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.VoipCallInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.VoipCallInfo.displayName = 'proto.ondewo.vtsi.VoipCallInfo';
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
proto.ondewo.vtsi.ListVoipCallInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.ListVoipCallInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.ListVoipCallInfoRequest.displayName = 'proto.ondewo.vtsi.ListVoipCallInfoRequest';
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
proto.ondewo.vtsi.ListVoipCallInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.ListVoipCallInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.ListVoipCallInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.ListVoipCallInfoResponse.displayName = 'proto.ondewo.vtsi.ListVoipCallInfoResponse';
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
proto.ondewo.vtsi.AllServicesStatuses = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.AllServicesStatuses, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.AllServicesStatuses.displayName = 'proto.ondewo.vtsi.AllServicesStatuses';
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
proto.ondewo.vtsi.ServiceStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.ServiceStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.ServiceStatus.displayName = 'proto.ondewo.vtsi.ServiceStatus';
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
proto.ondewo.vtsi.GetAudioFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.GetAudioFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.GetAudioFileRequest.displayName = 'proto.ondewo.vtsi.GetAudioFileRequest';
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
proto.ondewo.vtsi.GetAudioFileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.GetAudioFileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.GetAudioFileResponse.displayName = 'proto.ondewo.vtsi.GetAudioFileResponse';
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
proto.ondewo.vtsi.GetFullConversationAudioFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.GetFullConversationAudioFileRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.GetFullConversationAudioFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.GetFullConversationAudioFileRequest.displayName = 'proto.ondewo.vtsi.GetFullConversationAudioFileRequest';
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
proto.ondewo.vtsi.GetFullConversationAudioFileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.GetFullConversationAudioFileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.vtsi.GetFullConversationAudioFileResponse.displayName = 'proto.ondewo.vtsi.GetFullConversationAudioFileResponse';
}



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
proto.ondewo.vtsi.ProjectConfigs.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.ProjectConfigs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.ProjectConfigs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ProjectConfigs.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxCallers: jspb.Message.getFieldWithDefault(msg, 1, 0),
    maxListeners: jspb.Message.getFieldWithDefault(msg, 2, 0),
    asteriskConfigs: (f = msg.getAsteriskConfigs()) && proto.ondewo.vtsi.AsteriskConfigs.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.vtsi.ProjectConfigs}
 */
proto.ondewo.vtsi.ProjectConfigs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.ProjectConfigs;
  return proto.ondewo.vtsi.ProjectConfigs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.ProjectConfigs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.ProjectConfigs}
 */
proto.ondewo.vtsi.ProjectConfigs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxCallers(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxListeners(value);
      break;
    case 3:
      var value = new proto.ondewo.vtsi.AsteriskConfigs;
      reader.readMessage(value,proto.ondewo.vtsi.AsteriskConfigs.deserializeBinaryFromReader);
      msg.setAsteriskConfigs(value);
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
proto.ondewo.vtsi.ProjectConfigs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.ProjectConfigs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.ProjectConfigs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ProjectConfigs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxCallers();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMaxListeners();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getAsteriskConfigs();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.vtsi.AsteriskConfigs.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 max_callers = 1;
 * @return {number}
 */
proto.ondewo.vtsi.ProjectConfigs.prototype.getMaxCallers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.ProjectConfigs} returns this
 */
proto.ondewo.vtsi.ProjectConfigs.prototype.setMaxCallers = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 max_listeners = 2;
 * @return {number}
 */
proto.ondewo.vtsi.ProjectConfigs.prototype.getMaxListeners = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.ProjectConfigs} returns this
 */
proto.ondewo.vtsi.ProjectConfigs.prototype.setMaxListeners = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional AsteriskConfigs asterisk_configs = 3;
 * @return {?proto.ondewo.vtsi.AsteriskConfigs}
 */
proto.ondewo.vtsi.ProjectConfigs.prototype.getAsteriskConfigs = function() {
  return /** @type{?proto.ondewo.vtsi.AsteriskConfigs} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.AsteriskConfigs, 3));
};


/**
 * @param {?proto.ondewo.vtsi.AsteriskConfigs|undefined} value
 * @return {!proto.ondewo.vtsi.ProjectConfigs} returns this
*/
proto.ondewo.vtsi.ProjectConfigs.prototype.setAsteriskConfigs = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.ProjectConfigs} returns this
 */
proto.ondewo.vtsi.ProjectConfigs.prototype.clearAsteriskConfigs = function() {
  return this.setAsteriskConfigs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ProjectConfigs.prototype.hasAsteriskConfigs = function() {
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
proto.ondewo.vtsi.AsteriskConfigsVariables.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.AsteriskConfigsVariables.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.AsteriskConfigsVariables} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.AsteriskConfigsVariables.toObject = function(includeInstance, msg) {
  var f, obj = {
    sipTrunkUsername: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sipTrunkPassword: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sipTrunkHost: jspb.Message.getFieldWithDefault(msg, 3, ""),
    transferNumber: jspb.Message.getFieldWithDefault(msg, 4, ""),
    transferNumberHost: jspb.Message.getFieldWithDefault(msg, 5, ""),
    sipTrunkPhoneNumber: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.ondewo.vtsi.AsteriskConfigsVariables}
 */
proto.ondewo.vtsi.AsteriskConfigsVariables.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.AsteriskConfigsVariables;
  return proto.ondewo.vtsi.AsteriskConfigsVariables.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.AsteriskConfigsVariables} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.AsteriskConfigsVariables}
 */
proto.ondewo.vtsi.AsteriskConfigsVariables.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSipTrunkUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSipTrunkPassword(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSipTrunkHost(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferNumber(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferNumberHost(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSipTrunkPhoneNumber(value);
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
proto.ondewo.vtsi.AsteriskConfigsVariables.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.AsteriskConfigsVariables.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.AsteriskConfigsVariables} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.AsteriskConfigsVariables.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSipTrunkUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSipTrunkPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSipTrunkHost();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTransferNumber();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTransferNumberHost();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSipTrunkPhoneNumber();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string sip_trunk_username = 1;
 * @return {string}
 */
proto.ondewo.vtsi.AsteriskConfigsVariables.prototype.getSipTrunkUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.AsteriskConfigsVariables} returns this
 */
proto.ondewo.vtsi.AsteriskConfigsVariables.prototype.setSipTrunkUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string sip_trunk_password = 2;
 * @return {string}
 */
proto.ondewo.vtsi.AsteriskConfigsVariables.prototype.getSipTrunkPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.AsteriskConfigsVariables} returns this
 */
proto.ondewo.vtsi.AsteriskConfigsVariables.prototype.setSipTrunkPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sip_trunk_host = 3;
 * @return {string}
 */
proto.ondewo.vtsi.AsteriskConfigsVariables.prototype.getSipTrunkHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.AsteriskConfigsVariables} returns this
 */
proto.ondewo.vtsi.AsteriskConfigsVariables.prototype.setSipTrunkHost = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string transfer_number = 4;
 * @return {string}
 */
proto.ondewo.vtsi.AsteriskConfigsVariables.prototype.getTransferNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.AsteriskConfigsVariables} returns this
 */
proto.ondewo.vtsi.AsteriskConfigsVariables.prototype.setTransferNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string transfer_number_host = 5;
 * @return {string}
 */
proto.ondewo.vtsi.AsteriskConfigsVariables.prototype.getTransferNumberHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.AsteriskConfigsVariables} returns this
 */
proto.ondewo.vtsi.AsteriskConfigsVariables.prototype.setTransferNumberHost = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string sip_trunk_phone_number = 6;
 * @return {string}
 */
proto.ondewo.vtsi.AsteriskConfigsVariables.prototype.getSipTrunkPhoneNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.AsteriskConfigsVariables} returns this
 */
proto.ondewo.vtsi.AsteriskConfigsVariables.prototype.setSipTrunkPhoneNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.ondewo.vtsi.AsteriskConfigsFiles.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.AsteriskConfigsFiles.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.AsteriskConfigsFiles} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.AsteriskConfigsFiles.toObject = function(includeInstance, msg) {
  var f, obj = {
    sipConfFileString: jspb.Message.getFieldWithDefault(msg, 1, ""),
    extensionsConfFileString: jspb.Message.getFieldWithDefault(msg, 2, ""),
    queuesConfFileString: jspb.Message.getFieldWithDefault(msg, 3, ""),
    modulesConfFileString: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.ondewo.vtsi.AsteriskConfigsFiles}
 */
proto.ondewo.vtsi.AsteriskConfigsFiles.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.AsteriskConfigsFiles;
  return proto.ondewo.vtsi.AsteriskConfigsFiles.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.AsteriskConfigsFiles} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.AsteriskConfigsFiles}
 */
proto.ondewo.vtsi.AsteriskConfigsFiles.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSipConfFileString(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtensionsConfFileString(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setQueuesConfFileString(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setModulesConfFileString(value);
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
proto.ondewo.vtsi.AsteriskConfigsFiles.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.AsteriskConfigsFiles.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.AsteriskConfigsFiles} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.AsteriskConfigsFiles.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSipConfFileString();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExtensionsConfFileString();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getQueuesConfFileString();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getModulesConfFileString();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string sip_conf_file_string = 1;
 * @return {string}
 */
proto.ondewo.vtsi.AsteriskConfigsFiles.prototype.getSipConfFileString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.AsteriskConfigsFiles} returns this
 */
proto.ondewo.vtsi.AsteriskConfigsFiles.prototype.setSipConfFileString = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string extensions_conf_file_string = 2;
 * @return {string}
 */
proto.ondewo.vtsi.AsteriskConfigsFiles.prototype.getExtensionsConfFileString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.AsteriskConfigsFiles} returns this
 */
proto.ondewo.vtsi.AsteriskConfigsFiles.prototype.setExtensionsConfFileString = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string queues_conf_file_string = 3;
 * @return {string}
 */
proto.ondewo.vtsi.AsteriskConfigsFiles.prototype.getQueuesConfFileString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.AsteriskConfigsFiles} returns this
 */
proto.ondewo.vtsi.AsteriskConfigsFiles.prototype.setQueuesConfFileString = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string modules_conf_file_string = 4;
 * @return {string}
 */
proto.ondewo.vtsi.AsteriskConfigsFiles.prototype.getModulesConfFileString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.AsteriskConfigsFiles} returns this
 */
proto.ondewo.vtsi.AsteriskConfigsFiles.prototype.setModulesConfFileString = function(value) {
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
proto.ondewo.vtsi.AsteriskConfigs.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.ondewo.vtsi.AsteriskConfigs.AsteriskConfigsOneofCase = {
  ASTERISK_CONFIGS_ONEOF_NOT_SET: 0,
  ASTERISK_CONFIGS_VARIABLES: 1,
  ASTERISK_CONFIGS_FILES: 2,
  ASTERISK_CONFIGS_TARGET_DIRECTORY_NAME: 3
};

/**
 * @return {proto.ondewo.vtsi.AsteriskConfigs.AsteriskConfigsOneofCase}
 */
proto.ondewo.vtsi.AsteriskConfigs.prototype.getAsteriskConfigsOneofCase = function() {
  return /** @type {proto.ondewo.vtsi.AsteriskConfigs.AsteriskConfigsOneofCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.vtsi.AsteriskConfigs.oneofGroups_[0]));
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
proto.ondewo.vtsi.AsteriskConfigs.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.AsteriskConfigs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.AsteriskConfigs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.AsteriskConfigs.toObject = function(includeInstance, msg) {
  var f, obj = {
    asteriskConfigsVariables: (f = msg.getAsteriskConfigsVariables()) && proto.ondewo.vtsi.AsteriskConfigsVariables.toObject(includeInstance, f),
    asteriskConfigsFiles: (f = msg.getAsteriskConfigsFiles()) && proto.ondewo.vtsi.AsteriskConfigsFiles.toObject(includeInstance, f),
    asteriskConfigsTargetDirectoryName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    asteriskPort: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.ondewo.vtsi.AsteriskConfigs}
 */
proto.ondewo.vtsi.AsteriskConfigs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.AsteriskConfigs;
  return proto.ondewo.vtsi.AsteriskConfigs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.AsteriskConfigs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.AsteriskConfigs}
 */
proto.ondewo.vtsi.AsteriskConfigs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.vtsi.AsteriskConfigsVariables;
      reader.readMessage(value,proto.ondewo.vtsi.AsteriskConfigsVariables.deserializeBinaryFromReader);
      msg.setAsteriskConfigsVariables(value);
      break;
    case 2:
      var value = new proto.ondewo.vtsi.AsteriskConfigsFiles;
      reader.readMessage(value,proto.ondewo.vtsi.AsteriskConfigsFiles.deserializeBinaryFromReader);
      msg.setAsteriskConfigsFiles(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsteriskConfigsTargetDirectoryName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAsteriskPort(value);
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
proto.ondewo.vtsi.AsteriskConfigs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.AsteriskConfigs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.AsteriskConfigs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.AsteriskConfigs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAsteriskConfigsVariables();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.vtsi.AsteriskConfigsVariables.serializeBinaryToWriter
    );
  }
  f = message.getAsteriskConfigsFiles();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.vtsi.AsteriskConfigsFiles.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAsteriskPort();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional AsteriskConfigsVariables asterisk_configs_variables = 1;
 * @return {?proto.ondewo.vtsi.AsteriskConfigsVariables}
 */
proto.ondewo.vtsi.AsteriskConfigs.prototype.getAsteriskConfigsVariables = function() {
  return /** @type{?proto.ondewo.vtsi.AsteriskConfigsVariables} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.AsteriskConfigsVariables, 1));
};


/**
 * @param {?proto.ondewo.vtsi.AsteriskConfigsVariables|undefined} value
 * @return {!proto.ondewo.vtsi.AsteriskConfigs} returns this
*/
proto.ondewo.vtsi.AsteriskConfigs.prototype.setAsteriskConfigsVariables = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ondewo.vtsi.AsteriskConfigs.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.AsteriskConfigs} returns this
 */
proto.ondewo.vtsi.AsteriskConfigs.prototype.clearAsteriskConfigsVariables = function() {
  return this.setAsteriskConfigsVariables(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.AsteriskConfigs.prototype.hasAsteriskConfigsVariables = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AsteriskConfigsFiles asterisk_configs_files = 2;
 * @return {?proto.ondewo.vtsi.AsteriskConfigsFiles}
 */
proto.ondewo.vtsi.AsteriskConfigs.prototype.getAsteriskConfigsFiles = function() {
  return /** @type{?proto.ondewo.vtsi.AsteriskConfigsFiles} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.AsteriskConfigsFiles, 2));
};


/**
 * @param {?proto.ondewo.vtsi.AsteriskConfigsFiles|undefined} value
 * @return {!proto.ondewo.vtsi.AsteriskConfigs} returns this
*/
proto.ondewo.vtsi.AsteriskConfigs.prototype.setAsteriskConfigsFiles = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ondewo.vtsi.AsteriskConfigs.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.AsteriskConfigs} returns this
 */
proto.ondewo.vtsi.AsteriskConfigs.prototype.clearAsteriskConfigsFiles = function() {
  return this.setAsteriskConfigsFiles(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.AsteriskConfigs.prototype.hasAsteriskConfigsFiles = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string asterisk_configs_target_directory_name = 3;
 * @return {string}
 */
proto.ondewo.vtsi.AsteriskConfigs.prototype.getAsteriskConfigsTargetDirectoryName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.AsteriskConfigs} returns this
 */
proto.ondewo.vtsi.AsteriskConfigs.prototype.setAsteriskConfigsTargetDirectoryName = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.vtsi.AsteriskConfigs.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.AsteriskConfigs} returns this
 */
proto.ondewo.vtsi.AsteriskConfigs.prototype.clearAsteriskConfigsTargetDirectoryName = function() {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.vtsi.AsteriskConfigs.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.AsteriskConfigs.prototype.hasAsteriskConfigsTargetDirectoryName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 asterisk_port = 4;
 * @return {number}
 */
proto.ondewo.vtsi.AsteriskConfigs.prototype.getAsteriskPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.AsteriskConfigs} returns this
 */
proto.ondewo.vtsi.AsteriskConfigs.prototype.setAsteriskPort = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.ondewo.vtsi.CreateProjectConfigsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.CreateProjectConfigsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.CreateProjectConfigsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CreateProjectConfigsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    projectConfigs: (f = msg.getProjectConfigs()) && proto.ondewo.vtsi.ProjectConfigs.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.vtsi.CreateProjectConfigsRequest}
 */
proto.ondewo.vtsi.CreateProjectConfigsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.CreateProjectConfigsRequest;
  return proto.ondewo.vtsi.CreateProjectConfigsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.CreateProjectConfigsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.CreateProjectConfigsRequest}
 */
proto.ondewo.vtsi.CreateProjectConfigsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = new proto.ondewo.vtsi.ProjectConfigs;
      reader.readMessage(value,proto.ondewo.vtsi.ProjectConfigs.deserializeBinaryFromReader);
      msg.setProjectConfigs(value);
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
proto.ondewo.vtsi.CreateProjectConfigsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.CreateProjectConfigsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.CreateProjectConfigsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CreateProjectConfigsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProjectConfigs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.vtsi.ProjectConfigs.serializeBinaryToWriter
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.ondewo.vtsi.CreateProjectConfigsRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.CreateProjectConfigsRequest} returns this
 */
proto.ondewo.vtsi.CreateProjectConfigsRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ProjectConfigs project_configs = 2;
 * @return {?proto.ondewo.vtsi.ProjectConfigs}
 */
proto.ondewo.vtsi.CreateProjectConfigsRequest.prototype.getProjectConfigs = function() {
  return /** @type{?proto.ondewo.vtsi.ProjectConfigs} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.ProjectConfigs, 2));
};


/**
 * @param {?proto.ondewo.vtsi.ProjectConfigs|undefined} value
 * @return {!proto.ondewo.vtsi.CreateProjectConfigsRequest} returns this
*/
proto.ondewo.vtsi.CreateProjectConfigsRequest.prototype.setProjectConfigs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CreateProjectConfigsRequest} returns this
 */
proto.ondewo.vtsi.CreateProjectConfigsRequest.prototype.clearProjectConfigs = function() {
  return this.setProjectConfigs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CreateProjectConfigsRequest.prototype.hasProjectConfigs = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.ondewo.vtsi.GetProjectConfigsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.GetProjectConfigsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.GetProjectConfigsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetProjectConfigsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.ondewo.vtsi.GetProjectConfigsRequest}
 */
proto.ondewo.vtsi.GetProjectConfigsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.GetProjectConfigsRequest;
  return proto.ondewo.vtsi.GetProjectConfigsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.GetProjectConfigsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.GetProjectConfigsRequest}
 */
proto.ondewo.vtsi.GetProjectConfigsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
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
proto.ondewo.vtsi.GetProjectConfigsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.GetProjectConfigsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.GetProjectConfigsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetProjectConfigsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.ondewo.vtsi.GetProjectConfigsRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.GetProjectConfigsRequest} returns this
 */
proto.ondewo.vtsi.GetProjectConfigsRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.ondewo.vtsi.GetProjectConfigsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.GetProjectConfigsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.GetProjectConfigsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetProjectConfigsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectConfigs: (f = msg.getProjectConfigs()) && proto.ondewo.vtsi.ProjectConfigs.toObject(includeInstance, f),
    errorMessages: jspb.Message.getFieldWithDefault(msg, 2, ""),
    request: (f = msg.getRequest()) && proto.ondewo.vtsi.GetProjectConfigsRequest.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.vtsi.GetProjectConfigsResponse}
 */
proto.ondewo.vtsi.GetProjectConfigsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.GetProjectConfigsResponse;
  return proto.ondewo.vtsi.GetProjectConfigsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.GetProjectConfigsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.GetProjectConfigsResponse}
 */
proto.ondewo.vtsi.GetProjectConfigsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.vtsi.ProjectConfigs;
      reader.readMessage(value,proto.ondewo.vtsi.ProjectConfigs.deserializeBinaryFromReader);
      msg.setProjectConfigs(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessages(value);
      break;
    case 3:
      var value = new proto.ondewo.vtsi.GetProjectConfigsRequest;
      reader.readMessage(value,proto.ondewo.vtsi.GetProjectConfigsRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
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
proto.ondewo.vtsi.GetProjectConfigsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.GetProjectConfigsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.GetProjectConfigsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetProjectConfigsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectConfigs();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.vtsi.ProjectConfigs.serializeBinaryToWriter
    );
  }
  f = message.getErrorMessages();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.vtsi.GetProjectConfigsRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProjectConfigs project_configs = 1;
 * @return {?proto.ondewo.vtsi.ProjectConfigs}
 */
proto.ondewo.vtsi.GetProjectConfigsResponse.prototype.getProjectConfigs = function() {
  return /** @type{?proto.ondewo.vtsi.ProjectConfigs} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.ProjectConfigs, 1));
};


/**
 * @param {?proto.ondewo.vtsi.ProjectConfigs|undefined} value
 * @return {!proto.ondewo.vtsi.GetProjectConfigsResponse} returns this
*/
proto.ondewo.vtsi.GetProjectConfigsResponse.prototype.setProjectConfigs = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.GetProjectConfigsResponse} returns this
 */
proto.ondewo.vtsi.GetProjectConfigsResponse.prototype.clearProjectConfigs = function() {
  return this.setProjectConfigs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.GetProjectConfigsResponse.prototype.hasProjectConfigs = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string error_messages = 2;
 * @return {string}
 */
proto.ondewo.vtsi.GetProjectConfigsResponse.prototype.getErrorMessages = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.GetProjectConfigsResponse} returns this
 */
proto.ondewo.vtsi.GetProjectConfigsResponse.prototype.setErrorMessages = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional GetProjectConfigsRequest request = 3;
 * @return {?proto.ondewo.vtsi.GetProjectConfigsRequest}
 */
proto.ondewo.vtsi.GetProjectConfigsResponse.prototype.getRequest = function() {
  return /** @type{?proto.ondewo.vtsi.GetProjectConfigsRequest} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.GetProjectConfigsRequest, 3));
};


/**
 * @param {?proto.ondewo.vtsi.GetProjectConfigsRequest|undefined} value
 * @return {!proto.ondewo.vtsi.GetProjectConfigsResponse} returns this
*/
proto.ondewo.vtsi.GetProjectConfigsResponse.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.GetProjectConfigsResponse} returns this
 */
proto.ondewo.vtsi.GetProjectConfigsResponse.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.GetProjectConfigsResponse.prototype.hasRequest = function() {
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
proto.ondewo.vtsi.UpdateProjectConfigsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.UpdateProjectConfigsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.UpdateProjectConfigsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.UpdateProjectConfigsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    projectConfigs: (f = msg.getProjectConfigs()) && proto.ondewo.vtsi.ProjectConfigs.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.vtsi.UpdateProjectConfigsRequest}
 */
proto.ondewo.vtsi.UpdateProjectConfigsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.UpdateProjectConfigsRequest;
  return proto.ondewo.vtsi.UpdateProjectConfigsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.UpdateProjectConfigsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.UpdateProjectConfigsRequest}
 */
proto.ondewo.vtsi.UpdateProjectConfigsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = new proto.ondewo.vtsi.ProjectConfigs;
      reader.readMessage(value,proto.ondewo.vtsi.ProjectConfigs.deserializeBinaryFromReader);
      msg.setProjectConfigs(value);
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
proto.ondewo.vtsi.UpdateProjectConfigsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.UpdateProjectConfigsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.UpdateProjectConfigsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.UpdateProjectConfigsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProjectConfigs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.vtsi.ProjectConfigs.serializeBinaryToWriter
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.ondewo.vtsi.UpdateProjectConfigsRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.UpdateProjectConfigsRequest} returns this
 */
proto.ondewo.vtsi.UpdateProjectConfigsRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ProjectConfigs project_configs = 2;
 * @return {?proto.ondewo.vtsi.ProjectConfigs}
 */
proto.ondewo.vtsi.UpdateProjectConfigsRequest.prototype.getProjectConfigs = function() {
  return /** @type{?proto.ondewo.vtsi.ProjectConfigs} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.ProjectConfigs, 2));
};


/**
 * @param {?proto.ondewo.vtsi.ProjectConfigs|undefined} value
 * @return {!proto.ondewo.vtsi.UpdateProjectConfigsRequest} returns this
*/
proto.ondewo.vtsi.UpdateProjectConfigsRequest.prototype.setProjectConfigs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.UpdateProjectConfigsRequest} returns this
 */
proto.ondewo.vtsi.UpdateProjectConfigsRequest.prototype.clearProjectConfigs = function() {
  return this.setProjectConfigs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.UpdateProjectConfigsRequest.prototype.hasProjectConfigs = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.ondewo.vtsi.DeleteProjectConfigsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.DeleteProjectConfigsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.DeleteProjectConfigsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.DeleteProjectConfigsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.ondewo.vtsi.DeleteProjectConfigsRequest}
 */
proto.ondewo.vtsi.DeleteProjectConfigsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.DeleteProjectConfigsRequest;
  return proto.ondewo.vtsi.DeleteProjectConfigsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.DeleteProjectConfigsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.DeleteProjectConfigsRequest}
 */
proto.ondewo.vtsi.DeleteProjectConfigsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
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
proto.ondewo.vtsi.DeleteProjectConfigsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.DeleteProjectConfigsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.DeleteProjectConfigsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.DeleteProjectConfigsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.ondewo.vtsi.DeleteProjectConfigsRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.DeleteProjectConfigsRequest} returns this
 */
proto.ondewo.vtsi.DeleteProjectConfigsRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.ondewo.vtsi.DeployProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.DeployProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.DeployProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.DeployProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.ondewo.vtsi.DeployProjectRequest}
 */
proto.ondewo.vtsi.DeployProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.DeployProjectRequest;
  return proto.ondewo.vtsi.DeployProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.DeployProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.DeployProjectRequest}
 */
proto.ondewo.vtsi.DeployProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
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
proto.ondewo.vtsi.DeployProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.DeployProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.DeployProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.DeployProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.ondewo.vtsi.DeployProjectRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.DeployProjectRequest} returns this
 */
proto.ondewo.vtsi.DeployProjectRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.ondewo.vtsi.UndeployProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.UndeployProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.UndeployProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.UndeployProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.ondewo.vtsi.UndeployProjectRequest}
 */
proto.ondewo.vtsi.UndeployProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.UndeployProjectRequest;
  return proto.ondewo.vtsi.UndeployProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.UndeployProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.UndeployProjectRequest}
 */
proto.ondewo.vtsi.UndeployProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
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
proto.ondewo.vtsi.UndeployProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.UndeployProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.UndeployProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.UndeployProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.ondewo.vtsi.UndeployProjectRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.UndeployProjectRequest} returns this
 */
proto.ondewo.vtsi.UndeployProjectRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.ondewo.vtsi.BaseServiceConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.BaseServiceConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.BaseServiceConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.BaseServiceConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0),
    grpcCert: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.ondewo.vtsi.BaseServiceConfig}
 */
proto.ondewo.vtsi.BaseServiceConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.BaseServiceConfig;
  return proto.ondewo.vtsi.BaseServiceConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.BaseServiceConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.BaseServiceConfig}
 */
proto.ondewo.vtsi.BaseServiceConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrpcCert(value);
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
proto.ondewo.vtsi.BaseServiceConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.BaseServiceConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.BaseServiceConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.BaseServiceConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getGrpcCert();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.ondewo.vtsi.BaseServiceConfig.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.BaseServiceConfig} returns this
 */
proto.ondewo.vtsi.BaseServiceConfig.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 port = 2;
 * @return {number}
 */
proto.ondewo.vtsi.BaseServiceConfig.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.BaseServiceConfig} returns this
 */
proto.ondewo.vtsi.BaseServiceConfig.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string grpc_cert = 3;
 * @return {string}
 */
proto.ondewo.vtsi.BaseServiceConfig.prototype.getGrpcCert = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.BaseServiceConfig} returns this
 */
proto.ondewo.vtsi.BaseServiceConfig.prototype.setGrpcCert = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.ondewo.vtsi.Credentials.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.Credentials.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.Credentials} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.Credentials.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.ondewo.vtsi.Credentials}
 */
proto.ondewo.vtsi.Credentials.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.Credentials;
  return proto.ondewo.vtsi.Credentials.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.Credentials} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.Credentials}
 */
proto.ondewo.vtsi.Credentials.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
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
proto.ondewo.vtsi.Credentials.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.Credentials.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.Credentials} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.Credentials.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string account_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.Credentials.prototype.getAccountName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.Credentials} returns this
 */
proto.ondewo.vtsi.Credentials.prototype.setAccountName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.ondewo.vtsi.Credentials.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.Credentials} returns this
 */
proto.ondewo.vtsi.Credentials.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.NLUConfig.repeatedFields_ = [6];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.vtsi.NLUConfig.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.ondewo.vtsi.NLUConfig.AuthenticationCase = {
  AUTHENTICATION_NOT_SET: 0,
  CREDENTIALS: 2,
  AUTH_TOKEN: 3
};

/**
 * @return {proto.ondewo.vtsi.NLUConfig.AuthenticationCase}
 */
proto.ondewo.vtsi.NLUConfig.prototype.getAuthenticationCase = function() {
  return /** @type {proto.ondewo.vtsi.NLUConfig.AuthenticationCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.vtsi.NLUConfig.oneofGroups_[0]));
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
proto.ondewo.vtsi.NLUConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.NLUConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.NLUConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.NLUConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    baseConfig: (f = msg.getBaseConfig()) && proto.ondewo.vtsi.BaseServiceConfig.toObject(includeInstance, f),
    credentials: (f = msg.getCredentials()) && proto.ondewo.vtsi.Credentials.toObject(includeInstance, f),
    authToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    languageCode: jspb.Message.getFieldWithDefault(msg, 4, ""),
    initialIntent: jspb.Message.getFieldWithDefault(msg, 5, ""),
    contextsList: jspb.Message.toObjectList(msg.getContextsList(),
    ondewo_nlu_context_pb.Context.toObject, includeInstance)
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
 * @return {!proto.ondewo.vtsi.NLUConfig}
 */
proto.ondewo.vtsi.NLUConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.NLUConfig;
  return proto.ondewo.vtsi.NLUConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.NLUConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.NLUConfig}
 */
proto.ondewo.vtsi.NLUConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.vtsi.BaseServiceConfig;
      reader.readMessage(value,proto.ondewo.vtsi.BaseServiceConfig.deserializeBinaryFromReader);
      msg.setBaseConfig(value);
      break;
    case 2:
      var value = new proto.ondewo.vtsi.Credentials;
      reader.readMessage(value,proto.ondewo.vtsi.Credentials.deserializeBinaryFromReader);
      msg.setCredentials(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthToken(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setInitialIntent(value);
      break;
    case 6:
      var value = new ondewo_nlu_context_pb.Context;
      reader.readMessage(value,ondewo_nlu_context_pb.Context.deserializeBinaryFromReader);
      msg.addContexts(value);
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
proto.ondewo.vtsi.NLUConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.NLUConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.NLUConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.NLUConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBaseConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.vtsi.BaseServiceConfig.serializeBinaryToWriter
    );
  }
  f = message.getCredentials();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.vtsi.Credentials.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInitialIntent();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getContextsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      ondewo_nlu_context_pb.Context.serializeBinaryToWriter
    );
  }
};


/**
 * optional BaseServiceConfig base_config = 1;
 * @return {?proto.ondewo.vtsi.BaseServiceConfig}
 */
proto.ondewo.vtsi.NLUConfig.prototype.getBaseConfig = function() {
  return /** @type{?proto.ondewo.vtsi.BaseServiceConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.BaseServiceConfig, 1));
};


/**
 * @param {?proto.ondewo.vtsi.BaseServiceConfig|undefined} value
 * @return {!proto.ondewo.vtsi.NLUConfig} returns this
*/
proto.ondewo.vtsi.NLUConfig.prototype.setBaseConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.NLUConfig} returns this
 */
proto.ondewo.vtsi.NLUConfig.prototype.clearBaseConfig = function() {
  return this.setBaseConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.NLUConfig.prototype.hasBaseConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Credentials credentials = 2;
 * @return {?proto.ondewo.vtsi.Credentials}
 */
proto.ondewo.vtsi.NLUConfig.prototype.getCredentials = function() {
  return /** @type{?proto.ondewo.vtsi.Credentials} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.Credentials, 2));
};


/**
 * @param {?proto.ondewo.vtsi.Credentials|undefined} value
 * @return {!proto.ondewo.vtsi.NLUConfig} returns this
*/
proto.ondewo.vtsi.NLUConfig.prototype.setCredentials = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ondewo.vtsi.NLUConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.NLUConfig} returns this
 */
proto.ondewo.vtsi.NLUConfig.prototype.clearCredentials = function() {
  return this.setCredentials(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.NLUConfig.prototype.hasCredentials = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string auth_token = 3;
 * @return {string}
 */
proto.ondewo.vtsi.NLUConfig.prototype.getAuthToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.NLUConfig} returns this
 */
proto.ondewo.vtsi.NLUConfig.prototype.setAuthToken = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.vtsi.NLUConfig.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.NLUConfig} returns this
 */
proto.ondewo.vtsi.NLUConfig.prototype.clearAuthToken = function() {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.vtsi.NLUConfig.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.NLUConfig.prototype.hasAuthToken = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string language_code = 4;
 * @return {string}
 */
proto.ondewo.vtsi.NLUConfig.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.NLUConfig} returns this
 */
proto.ondewo.vtsi.NLUConfig.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string initial_intent = 5;
 * @return {string}
 */
proto.ondewo.vtsi.NLUConfig.prototype.getInitialIntent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.NLUConfig} returns this
 */
proto.ondewo.vtsi.NLUConfig.prototype.setInitialIntent = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated ondewo.nlu.Context contexts = 6;
 * @return {!Array<!proto.ondewo.nlu.Context>}
 */
proto.ondewo.vtsi.NLUConfig.prototype.getContextsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Context>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_context_pb.Context, 6));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Context>} value
 * @return {!proto.ondewo.vtsi.NLUConfig} returns this
*/
proto.ondewo.vtsi.NLUConfig.prototype.setContextsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.ondewo.nlu.Context=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Context}
 */
proto.ondewo.vtsi.NLUConfig.prototype.addContexts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.ondewo.nlu.Context, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.NLUConfig} returns this
 */
proto.ondewo.vtsi.NLUConfig.prototype.clearContextsList = function() {
  return this.setContextsList([]);
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
proto.ondewo.vtsi.T2SConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.T2SConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.T2SConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.T2SConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    baseConfig: (f = msg.getBaseConfig()) && proto.ondewo.vtsi.BaseServiceConfig.toObject(includeInstance, f),
    t2sConfig: (f = msg.getT2sConfig()) && ondewo_t2s_text$to$speech_pb.RequestConfig.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.vtsi.T2SConfig}
 */
proto.ondewo.vtsi.T2SConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.T2SConfig;
  return proto.ondewo.vtsi.T2SConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.T2SConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.T2SConfig}
 */
proto.ondewo.vtsi.T2SConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.vtsi.BaseServiceConfig;
      reader.readMessage(value,proto.ondewo.vtsi.BaseServiceConfig.deserializeBinaryFromReader);
      msg.setBaseConfig(value);
      break;
    case 2:
      var value = new ondewo_t2s_text$to$speech_pb.RequestConfig;
      reader.readMessage(value,ondewo_t2s_text$to$speech_pb.RequestConfig.deserializeBinaryFromReader);
      msg.setT2sConfig(value);
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
proto.ondewo.vtsi.T2SConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.T2SConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.T2SConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.T2SConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBaseConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.vtsi.BaseServiceConfig.serializeBinaryToWriter
    );
  }
  f = message.getT2sConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      ondewo_t2s_text$to$speech_pb.RequestConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional BaseServiceConfig base_config = 1;
 * @return {?proto.ondewo.vtsi.BaseServiceConfig}
 */
proto.ondewo.vtsi.T2SConfig.prototype.getBaseConfig = function() {
  return /** @type{?proto.ondewo.vtsi.BaseServiceConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.BaseServiceConfig, 1));
};


/**
 * @param {?proto.ondewo.vtsi.BaseServiceConfig|undefined} value
 * @return {!proto.ondewo.vtsi.T2SConfig} returns this
*/
proto.ondewo.vtsi.T2SConfig.prototype.setBaseConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.T2SConfig} returns this
 */
proto.ondewo.vtsi.T2SConfig.prototype.clearBaseConfig = function() {
  return this.setBaseConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.T2SConfig.prototype.hasBaseConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ondewo.t2s.RequestConfig t2s_config = 2;
 * @return {?proto.ondewo.t2s.RequestConfig}
 */
proto.ondewo.vtsi.T2SConfig.prototype.getT2sConfig = function() {
  return /** @type{?proto.ondewo.t2s.RequestConfig} */ (
    jspb.Message.getWrapperField(this, ondewo_t2s_text$to$speech_pb.RequestConfig, 2));
};


/**
 * @param {?proto.ondewo.t2s.RequestConfig|undefined} value
 * @return {!proto.ondewo.vtsi.T2SConfig} returns this
*/
proto.ondewo.vtsi.T2SConfig.prototype.setT2sConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.T2SConfig} returns this
 */
proto.ondewo.vtsi.T2SConfig.prototype.clearT2sConfig = function() {
  return this.setT2sConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.T2SConfig.prototype.hasT2sConfig = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.ondewo.vtsi.S2TConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.S2TConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.S2TConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.S2TConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    baseConfig: (f = msg.getBaseConfig()) && proto.ondewo.vtsi.BaseServiceConfig.toObject(includeInstance, f),
    s2tConfig: (f = msg.getS2tConfig()) && ondewo_s2t_speech$to$text_pb.TranscribeRequestConfig.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.vtsi.S2TConfig}
 */
proto.ondewo.vtsi.S2TConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.S2TConfig;
  return proto.ondewo.vtsi.S2TConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.S2TConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.S2TConfig}
 */
proto.ondewo.vtsi.S2TConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.vtsi.BaseServiceConfig;
      reader.readMessage(value,proto.ondewo.vtsi.BaseServiceConfig.deserializeBinaryFromReader);
      msg.setBaseConfig(value);
      break;
    case 2:
      var value = new ondewo_s2t_speech$to$text_pb.TranscribeRequestConfig;
      reader.readMessage(value,ondewo_s2t_speech$to$text_pb.TranscribeRequestConfig.deserializeBinaryFromReader);
      msg.setS2tConfig(value);
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
proto.ondewo.vtsi.S2TConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.S2TConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.S2TConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.S2TConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBaseConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.vtsi.BaseServiceConfig.serializeBinaryToWriter
    );
  }
  f = message.getS2tConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      ondewo_s2t_speech$to$text_pb.TranscribeRequestConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional BaseServiceConfig base_config = 1;
 * @return {?proto.ondewo.vtsi.BaseServiceConfig}
 */
proto.ondewo.vtsi.S2TConfig.prototype.getBaseConfig = function() {
  return /** @type{?proto.ondewo.vtsi.BaseServiceConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.BaseServiceConfig, 1));
};


/**
 * @param {?proto.ondewo.vtsi.BaseServiceConfig|undefined} value
 * @return {!proto.ondewo.vtsi.S2TConfig} returns this
*/
proto.ondewo.vtsi.S2TConfig.prototype.setBaseConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.S2TConfig} returns this
 */
proto.ondewo.vtsi.S2TConfig.prototype.clearBaseConfig = function() {
  return this.setBaseConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.S2TConfig.prototype.hasBaseConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ondewo.s2t.TranscribeRequestConfig s2t_config = 2;
 * @return {?proto.ondewo.s2t.TranscribeRequestConfig}
 */
proto.ondewo.vtsi.S2TConfig.prototype.getS2tConfig = function() {
  return /** @type{?proto.ondewo.s2t.TranscribeRequestConfig} */ (
    jspb.Message.getWrapperField(this, ondewo_s2t_speech$to$text_pb.TranscribeRequestConfig, 2));
};


/**
 * @param {?proto.ondewo.s2t.TranscribeRequestConfig|undefined} value
 * @return {!proto.ondewo.vtsi.S2TConfig} returns this
*/
proto.ondewo.vtsi.S2TConfig.prototype.setS2tConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.S2TConfig} returns this
 */
proto.ondewo.vtsi.S2TConfig.prototype.clearS2tConfig = function() {
  return this.setS2tConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.S2TConfig.prototype.hasS2tConfig = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.ondewo.vtsi.AsteriskConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.AsteriskConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.AsteriskConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.AsteriskConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    baseConfig: (f = msg.getBaseConfig()) && proto.ondewo.vtsi.BaseServiceConfig.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.vtsi.AsteriskConfig}
 */
proto.ondewo.vtsi.AsteriskConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.AsteriskConfig;
  return proto.ondewo.vtsi.AsteriskConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.AsteriskConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.AsteriskConfig}
 */
proto.ondewo.vtsi.AsteriskConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.vtsi.BaseServiceConfig;
      reader.readMessage(value,proto.ondewo.vtsi.BaseServiceConfig.deserializeBinaryFromReader);
      msg.setBaseConfig(value);
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
proto.ondewo.vtsi.AsteriskConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.AsteriskConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.AsteriskConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.AsteriskConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBaseConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.vtsi.BaseServiceConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional BaseServiceConfig base_config = 1;
 * @return {?proto.ondewo.vtsi.BaseServiceConfig}
 */
proto.ondewo.vtsi.AsteriskConfig.prototype.getBaseConfig = function() {
  return /** @type{?proto.ondewo.vtsi.BaseServiceConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.BaseServiceConfig, 1));
};


/**
 * @param {?proto.ondewo.vtsi.BaseServiceConfig|undefined} value
 * @return {!proto.ondewo.vtsi.AsteriskConfig} returns this
*/
proto.ondewo.vtsi.AsteriskConfig.prototype.setBaseConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.AsteriskConfig} returns this
 */
proto.ondewo.vtsi.AsteriskConfig.prototype.clearBaseConfig = function() {
  return this.setBaseConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.AsteriskConfig.prototype.hasBaseConfig = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.ondewo.vtsi.CommonServicesConfigs.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.CommonServicesConfigs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.CommonServicesConfigs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CommonServicesConfigs.toObject = function(includeInstance, msg) {
  var f, obj = {
    asteriskConfig: (f = msg.getAsteriskConfig()) && proto.ondewo.vtsi.AsteriskConfig.toObject(includeInstance, f),
    caiConfig: (f = msg.getCaiConfig()) && proto.ondewo.vtsi.NLUConfig.toObject(includeInstance, f),
    sttConfig: (f = msg.getSttConfig()) && proto.ondewo.vtsi.S2TConfig.toObject(includeInstance, f),
    ttsConfig: (f = msg.getTtsConfig()) && proto.ondewo.vtsi.T2SConfig.toObject(includeInstance, f),
    csiConfig: (f = msg.getCsiConfig()) && proto.ondewo.vtsi.CsiConfig.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.vtsi.CommonServicesConfigs}
 */
proto.ondewo.vtsi.CommonServicesConfigs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.CommonServicesConfigs;
  return proto.ondewo.vtsi.CommonServicesConfigs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.CommonServicesConfigs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.CommonServicesConfigs}
 */
proto.ondewo.vtsi.CommonServicesConfigs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.vtsi.AsteriskConfig;
      reader.readMessage(value,proto.ondewo.vtsi.AsteriskConfig.deserializeBinaryFromReader);
      msg.setAsteriskConfig(value);
      break;
    case 2:
      var value = new proto.ondewo.vtsi.NLUConfig;
      reader.readMessage(value,proto.ondewo.vtsi.NLUConfig.deserializeBinaryFromReader);
      msg.setCaiConfig(value);
      break;
    case 3:
      var value = new proto.ondewo.vtsi.S2TConfig;
      reader.readMessage(value,proto.ondewo.vtsi.S2TConfig.deserializeBinaryFromReader);
      msg.setSttConfig(value);
      break;
    case 4:
      var value = new proto.ondewo.vtsi.T2SConfig;
      reader.readMessage(value,proto.ondewo.vtsi.T2SConfig.deserializeBinaryFromReader);
      msg.setTtsConfig(value);
      break;
    case 5:
      var value = new proto.ondewo.vtsi.CsiConfig;
      reader.readMessage(value,proto.ondewo.vtsi.CsiConfig.deserializeBinaryFromReader);
      msg.setCsiConfig(value);
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
proto.ondewo.vtsi.CommonServicesConfigs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.CommonServicesConfigs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.CommonServicesConfigs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CommonServicesConfigs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAsteriskConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.vtsi.AsteriskConfig.serializeBinaryToWriter
    );
  }
  f = message.getCaiConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.vtsi.NLUConfig.serializeBinaryToWriter
    );
  }
  f = message.getSttConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.vtsi.S2TConfig.serializeBinaryToWriter
    );
  }
  f = message.getTtsConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ondewo.vtsi.T2SConfig.serializeBinaryToWriter
    );
  }
  f = message.getCsiConfig();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ondewo.vtsi.CsiConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional AsteriskConfig asterisk_config = 1;
 * @return {?proto.ondewo.vtsi.AsteriskConfig}
 */
proto.ondewo.vtsi.CommonServicesConfigs.prototype.getAsteriskConfig = function() {
  return /** @type{?proto.ondewo.vtsi.AsteriskConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.AsteriskConfig, 1));
};


/**
 * @param {?proto.ondewo.vtsi.AsteriskConfig|undefined} value
 * @return {!proto.ondewo.vtsi.CommonServicesConfigs} returns this
*/
proto.ondewo.vtsi.CommonServicesConfigs.prototype.setAsteriskConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CommonServicesConfigs} returns this
 */
proto.ondewo.vtsi.CommonServicesConfigs.prototype.clearAsteriskConfig = function() {
  return this.setAsteriskConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CommonServicesConfigs.prototype.hasAsteriskConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional NLUConfig cai_config = 2;
 * @return {?proto.ondewo.vtsi.NLUConfig}
 */
proto.ondewo.vtsi.CommonServicesConfigs.prototype.getCaiConfig = function() {
  return /** @type{?proto.ondewo.vtsi.NLUConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.NLUConfig, 2));
};


/**
 * @param {?proto.ondewo.vtsi.NLUConfig|undefined} value
 * @return {!proto.ondewo.vtsi.CommonServicesConfigs} returns this
*/
proto.ondewo.vtsi.CommonServicesConfigs.prototype.setCaiConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CommonServicesConfigs} returns this
 */
proto.ondewo.vtsi.CommonServicesConfigs.prototype.clearCaiConfig = function() {
  return this.setCaiConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CommonServicesConfigs.prototype.hasCaiConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional S2TConfig stt_config = 3;
 * @return {?proto.ondewo.vtsi.S2TConfig}
 */
proto.ondewo.vtsi.CommonServicesConfigs.prototype.getSttConfig = function() {
  return /** @type{?proto.ondewo.vtsi.S2TConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.S2TConfig, 3));
};


/**
 * @param {?proto.ondewo.vtsi.S2TConfig|undefined} value
 * @return {!proto.ondewo.vtsi.CommonServicesConfigs} returns this
*/
proto.ondewo.vtsi.CommonServicesConfigs.prototype.setSttConfig = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CommonServicesConfigs} returns this
 */
proto.ondewo.vtsi.CommonServicesConfigs.prototype.clearSttConfig = function() {
  return this.setSttConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CommonServicesConfigs.prototype.hasSttConfig = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional T2SConfig tts_config = 4;
 * @return {?proto.ondewo.vtsi.T2SConfig}
 */
proto.ondewo.vtsi.CommonServicesConfigs.prototype.getTtsConfig = function() {
  return /** @type{?proto.ondewo.vtsi.T2SConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.T2SConfig, 4));
};


/**
 * @param {?proto.ondewo.vtsi.T2SConfig|undefined} value
 * @return {!proto.ondewo.vtsi.CommonServicesConfigs} returns this
*/
proto.ondewo.vtsi.CommonServicesConfigs.prototype.setTtsConfig = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CommonServicesConfigs} returns this
 */
proto.ondewo.vtsi.CommonServicesConfigs.prototype.clearTtsConfig = function() {
  return this.setTtsConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CommonServicesConfigs.prototype.hasTtsConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CsiConfig csi_config = 5;
 * @return {?proto.ondewo.vtsi.CsiConfig}
 */
proto.ondewo.vtsi.CommonServicesConfigs.prototype.getCsiConfig = function() {
  return /** @type{?proto.ondewo.vtsi.CsiConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.CsiConfig, 5));
};


/**
 * @param {?proto.ondewo.vtsi.CsiConfig|undefined} value
 * @return {!proto.ondewo.vtsi.CommonServicesConfigs} returns this
*/
proto.ondewo.vtsi.CommonServicesConfigs.prototype.setCsiConfig = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CommonServicesConfigs} returns this
 */
proto.ondewo.vtsi.CommonServicesConfigs.prototype.clearCsiConfig = function() {
  return this.setCsiConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CommonServicesConfigs.prototype.hasCsiConfig = function() {
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
proto.ondewo.vtsi.SIPBaseConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.SIPBaseConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.SIPBaseConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.SIPBaseConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    sipSimVersion: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.ondewo.vtsi.SIPBaseConfig}
 */
proto.ondewo.vtsi.SIPBaseConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.SIPBaseConfig;
  return proto.ondewo.vtsi.SIPBaseConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.SIPBaseConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.SIPBaseConfig}
 */
proto.ondewo.vtsi.SIPBaseConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSipSimVersion(value);
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
proto.ondewo.vtsi.SIPBaseConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.SIPBaseConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.SIPBaseConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.SIPBaseConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSipSimVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string sip_sim_version = 1;
 * @return {string}
 */
proto.ondewo.vtsi.SIPBaseConfig.prototype.getSipSimVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.SIPBaseConfig} returns this
 */
proto.ondewo.vtsi.SIPBaseConfig.prototype.setSipSimVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.ondewo.vtsi.SIPCallerConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.SIPCallerConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.SIPCallerConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.SIPCallerConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    sipBaseConfig: (f = msg.getSipBaseConfig()) && proto.ondewo.vtsi.SIPBaseConfig.toObject(includeInstance, f),
    phoneNumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
    headersMap: (f = msg.getHeadersMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.ondewo.vtsi.SIPCallerConfig}
 */
proto.ondewo.vtsi.SIPCallerConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.SIPCallerConfig;
  return proto.ondewo.vtsi.SIPCallerConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.SIPCallerConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.SIPCallerConfig}
 */
proto.ondewo.vtsi.SIPCallerConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.vtsi.SIPBaseConfig;
      reader.readMessage(value,proto.ondewo.vtsi.SIPBaseConfig.deserializeBinaryFromReader);
      msg.setSipBaseConfig(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneNumber(value);
      break;
    case 3:
      var value = msg.getHeadersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
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
proto.ondewo.vtsi.SIPCallerConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.SIPCallerConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.SIPCallerConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.SIPCallerConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSipBaseConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.vtsi.SIPBaseConfig.serializeBinaryToWriter
    );
  }
  f = message.getPhoneNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHeadersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional SIPBaseConfig sip_base_config = 1;
 * @return {?proto.ondewo.vtsi.SIPBaseConfig}
 */
proto.ondewo.vtsi.SIPCallerConfig.prototype.getSipBaseConfig = function() {
  return /** @type{?proto.ondewo.vtsi.SIPBaseConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.SIPBaseConfig, 1));
};


/**
 * @param {?proto.ondewo.vtsi.SIPBaseConfig|undefined} value
 * @return {!proto.ondewo.vtsi.SIPCallerConfig} returns this
*/
proto.ondewo.vtsi.SIPCallerConfig.prototype.setSipBaseConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.SIPCallerConfig} returns this
 */
proto.ondewo.vtsi.SIPCallerConfig.prototype.clearSipBaseConfig = function() {
  return this.setSipBaseConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.SIPCallerConfig.prototype.hasSipBaseConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string phone_number = 2;
 * @return {string}
 */
proto.ondewo.vtsi.SIPCallerConfig.prototype.getPhoneNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.SIPCallerConfig} returns this
 */
proto.ondewo.vtsi.SIPCallerConfig.prototype.setPhoneNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> headers = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.ondewo.vtsi.SIPCallerConfig.prototype.getHeadersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ondewo.vtsi.SIPCallerConfig} returns this
 */
proto.ondewo.vtsi.SIPCallerConfig.prototype.clearHeadersMap = function() {
  this.getHeadersMap().clear();
  return this;};





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
proto.ondewo.vtsi.CsiConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.CsiConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.CsiConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CsiConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    s2tCallbacks: (f = msg.getS2tCallbacks()) && proto.ondewo.vtsi.S2tCallbacks.toObject(includeInstance, f),
    nluCallbacks: (f = msg.getNluCallbacks()) && proto.ondewo.vtsi.NluCallbacks.toObject(includeInstance, f),
    t2sCallbacks: (f = msg.getT2sCallbacks()) && proto.ondewo.vtsi.T2sCallbacks.toObject(includeInstance, f),
    audioObjectStoreConfig: (f = msg.getAudioObjectStoreConfig()) && proto.ondewo.vtsi.AudioObjectStorageConfig.toObject(includeInstance, f),
    messageBrokerConfig: (f = msg.getMessageBrokerConfig()) && proto.ondewo.vtsi.MessageBrokerConfig.toObject(includeInstance, f),
    activateControlMessages: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.ondewo.vtsi.CsiConfig}
 */
proto.ondewo.vtsi.CsiConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.CsiConfig;
  return proto.ondewo.vtsi.CsiConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.CsiConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.CsiConfig}
 */
proto.ondewo.vtsi.CsiConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.vtsi.S2tCallbacks;
      reader.readMessage(value,proto.ondewo.vtsi.S2tCallbacks.deserializeBinaryFromReader);
      msg.setS2tCallbacks(value);
      break;
    case 2:
      var value = new proto.ondewo.vtsi.NluCallbacks;
      reader.readMessage(value,proto.ondewo.vtsi.NluCallbacks.deserializeBinaryFromReader);
      msg.setNluCallbacks(value);
      break;
    case 3:
      var value = new proto.ondewo.vtsi.T2sCallbacks;
      reader.readMessage(value,proto.ondewo.vtsi.T2sCallbacks.deserializeBinaryFromReader);
      msg.setT2sCallbacks(value);
      break;
    case 4:
      var value = new proto.ondewo.vtsi.AudioObjectStorageConfig;
      reader.readMessage(value,proto.ondewo.vtsi.AudioObjectStorageConfig.deserializeBinaryFromReader);
      msg.setAudioObjectStoreConfig(value);
      break;
    case 5:
      var value = new proto.ondewo.vtsi.MessageBrokerConfig;
      reader.readMessage(value,proto.ondewo.vtsi.MessageBrokerConfig.deserializeBinaryFromReader);
      msg.setMessageBrokerConfig(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActivateControlMessages(value);
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
proto.ondewo.vtsi.CsiConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.CsiConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.CsiConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CsiConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getS2tCallbacks();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.vtsi.S2tCallbacks.serializeBinaryToWriter
    );
  }
  f = message.getNluCallbacks();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.vtsi.NluCallbacks.serializeBinaryToWriter
    );
  }
  f = message.getT2sCallbacks();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.vtsi.T2sCallbacks.serializeBinaryToWriter
    );
  }
  f = message.getAudioObjectStoreConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ondewo.vtsi.AudioObjectStorageConfig.serializeBinaryToWriter
    );
  }
  f = message.getMessageBrokerConfig();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ondewo.vtsi.MessageBrokerConfig.serializeBinaryToWriter
    );
  }
  f = message.getActivateControlMessages();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional S2tCallbacks s2t_callbacks = 1;
 * @return {?proto.ondewo.vtsi.S2tCallbacks}
 */
proto.ondewo.vtsi.CsiConfig.prototype.getS2tCallbacks = function() {
  return /** @type{?proto.ondewo.vtsi.S2tCallbacks} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.S2tCallbacks, 1));
};


/**
 * @param {?proto.ondewo.vtsi.S2tCallbacks|undefined} value
 * @return {!proto.ondewo.vtsi.CsiConfig} returns this
*/
proto.ondewo.vtsi.CsiConfig.prototype.setS2tCallbacks = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CsiConfig} returns this
 */
proto.ondewo.vtsi.CsiConfig.prototype.clearS2tCallbacks = function() {
  return this.setS2tCallbacks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CsiConfig.prototype.hasS2tCallbacks = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional NluCallbacks nlu_callbacks = 2;
 * @return {?proto.ondewo.vtsi.NluCallbacks}
 */
proto.ondewo.vtsi.CsiConfig.prototype.getNluCallbacks = function() {
  return /** @type{?proto.ondewo.vtsi.NluCallbacks} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.NluCallbacks, 2));
};


/**
 * @param {?proto.ondewo.vtsi.NluCallbacks|undefined} value
 * @return {!proto.ondewo.vtsi.CsiConfig} returns this
*/
proto.ondewo.vtsi.CsiConfig.prototype.setNluCallbacks = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CsiConfig} returns this
 */
proto.ondewo.vtsi.CsiConfig.prototype.clearNluCallbacks = function() {
  return this.setNluCallbacks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CsiConfig.prototype.hasNluCallbacks = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional T2sCallbacks t2s_callbacks = 3;
 * @return {?proto.ondewo.vtsi.T2sCallbacks}
 */
proto.ondewo.vtsi.CsiConfig.prototype.getT2sCallbacks = function() {
  return /** @type{?proto.ondewo.vtsi.T2sCallbacks} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.T2sCallbacks, 3));
};


/**
 * @param {?proto.ondewo.vtsi.T2sCallbacks|undefined} value
 * @return {!proto.ondewo.vtsi.CsiConfig} returns this
*/
proto.ondewo.vtsi.CsiConfig.prototype.setT2sCallbacks = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CsiConfig} returns this
 */
proto.ondewo.vtsi.CsiConfig.prototype.clearT2sCallbacks = function() {
  return this.setT2sCallbacks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CsiConfig.prototype.hasT2sCallbacks = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AudioObjectStorageConfig audio_object_store_config = 4;
 * @return {?proto.ondewo.vtsi.AudioObjectStorageConfig}
 */
proto.ondewo.vtsi.CsiConfig.prototype.getAudioObjectStoreConfig = function() {
  return /** @type{?proto.ondewo.vtsi.AudioObjectStorageConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.AudioObjectStorageConfig, 4));
};


/**
 * @param {?proto.ondewo.vtsi.AudioObjectStorageConfig|undefined} value
 * @return {!proto.ondewo.vtsi.CsiConfig} returns this
*/
proto.ondewo.vtsi.CsiConfig.prototype.setAudioObjectStoreConfig = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CsiConfig} returns this
 */
proto.ondewo.vtsi.CsiConfig.prototype.clearAudioObjectStoreConfig = function() {
  return this.setAudioObjectStoreConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CsiConfig.prototype.hasAudioObjectStoreConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MessageBrokerConfig message_broker_config = 5;
 * @return {?proto.ondewo.vtsi.MessageBrokerConfig}
 */
proto.ondewo.vtsi.CsiConfig.prototype.getMessageBrokerConfig = function() {
  return /** @type{?proto.ondewo.vtsi.MessageBrokerConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.MessageBrokerConfig, 5));
};


/**
 * @param {?proto.ondewo.vtsi.MessageBrokerConfig|undefined} value
 * @return {!proto.ondewo.vtsi.CsiConfig} returns this
*/
proto.ondewo.vtsi.CsiConfig.prototype.setMessageBrokerConfig = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CsiConfig} returns this
 */
proto.ondewo.vtsi.CsiConfig.prototype.clearMessageBrokerConfig = function() {
  return this.setMessageBrokerConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CsiConfig.prototype.hasMessageBrokerConfig = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool activate_control_messages = 6;
 * @return {boolean}
 */
proto.ondewo.vtsi.CsiConfig.prototype.getActivateControlMessages = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.CsiConfig} returns this
 */
proto.ondewo.vtsi.CsiConfig.prototype.setActivateControlMessages = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.vtsi.AudioObjectStorageConfig.oneofGroups_ = [[3]];

/**
 * @enum {number}
 */
proto.ondewo.vtsi.AudioObjectStorageConfig.AudioStorageConfigCase = {
  AUDIO_STORAGE_CONFIG_NOT_SET: 0,
  MINIO_CONFIG: 3
};

/**
 * @return {proto.ondewo.vtsi.AudioObjectStorageConfig.AudioStorageConfigCase}
 */
proto.ondewo.vtsi.AudioObjectStorageConfig.prototype.getAudioStorageConfigCase = function() {
  return /** @type {proto.ondewo.vtsi.AudioObjectStorageConfig.AudioStorageConfigCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.vtsi.AudioObjectStorageConfig.oneofGroups_[0]));
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
proto.ondewo.vtsi.AudioObjectStorageConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.AudioObjectStorageConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.AudioObjectStorageConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.AudioObjectStorageConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    activateAudioObjectStorage: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    audioObjectStorageServicesActivationConfig: (f = msg.getAudioObjectStorageServicesActivationConfig()) && proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.toObject(includeInstance, f),
    minioConfig: (f = msg.getMinioConfig()) && proto.ondewo.vtsi.MinioConfig.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.vtsi.AudioObjectStorageConfig}
 */
proto.ondewo.vtsi.AudioObjectStorageConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.AudioObjectStorageConfig;
  return proto.ondewo.vtsi.AudioObjectStorageConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.AudioObjectStorageConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.AudioObjectStorageConfig}
 */
proto.ondewo.vtsi.AudioObjectStorageConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActivateAudioObjectStorage(value);
      break;
    case 2:
      var value = new proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig;
      reader.readMessage(value,proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.deserializeBinaryFromReader);
      msg.setAudioObjectStorageServicesActivationConfig(value);
      break;
    case 3:
      var value = new proto.ondewo.vtsi.MinioConfig;
      reader.readMessage(value,proto.ondewo.vtsi.MinioConfig.deserializeBinaryFromReader);
      msg.setMinioConfig(value);
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
proto.ondewo.vtsi.AudioObjectStorageConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.AudioObjectStorageConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.AudioObjectStorageConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.AudioObjectStorageConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActivateAudioObjectStorage();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getAudioObjectStorageServicesActivationConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.serializeBinaryToWriter
    );
  }
  f = message.getMinioConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.vtsi.MinioConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool activate_audio_object_storage = 1;
 * @return {boolean}
 */
proto.ondewo.vtsi.AudioObjectStorageConfig.prototype.getActivateAudioObjectStorage = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.AudioObjectStorageConfig} returns this
 */
proto.ondewo.vtsi.AudioObjectStorageConfig.prototype.setActivateAudioObjectStorage = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional AudioObjectStorageServicesActivationConfig audio_object_storage_services_activation_config = 2;
 * @return {?proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig}
 */
proto.ondewo.vtsi.AudioObjectStorageConfig.prototype.getAudioObjectStorageServicesActivationConfig = function() {
  return /** @type{?proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig, 2));
};


/**
 * @param {?proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig|undefined} value
 * @return {!proto.ondewo.vtsi.AudioObjectStorageConfig} returns this
*/
proto.ondewo.vtsi.AudioObjectStorageConfig.prototype.setAudioObjectStorageServicesActivationConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.AudioObjectStorageConfig} returns this
 */
proto.ondewo.vtsi.AudioObjectStorageConfig.prototype.clearAudioObjectStorageServicesActivationConfig = function() {
  return this.setAudioObjectStorageServicesActivationConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.AudioObjectStorageConfig.prototype.hasAudioObjectStorageServicesActivationConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MinioConfig minio_config = 3;
 * @return {?proto.ondewo.vtsi.MinioConfig}
 */
proto.ondewo.vtsi.AudioObjectStorageConfig.prototype.getMinioConfig = function() {
  return /** @type{?proto.ondewo.vtsi.MinioConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.MinioConfig, 3));
};


/**
 * @param {?proto.ondewo.vtsi.MinioConfig|undefined} value
 * @return {!proto.ondewo.vtsi.AudioObjectStorageConfig} returns this
*/
proto.ondewo.vtsi.AudioObjectStorageConfig.prototype.setMinioConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ondewo.vtsi.AudioObjectStorageConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.AudioObjectStorageConfig} returns this
 */
proto.ondewo.vtsi.AudioObjectStorageConfig.prototype.clearMinioConfig = function() {
  return this.setMinioConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.AudioObjectStorageConfig.prototype.hasMinioConfig = function() {
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
proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    activateS2t: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    activateT2s: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig}
 */
proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig;
  return proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig}
 */
proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActivateS2t(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActivateT2s(value);
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
proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActivateS2t();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getActivateT2s();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool activate_s2t = 1;
 * @return {boolean}
 */
proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.prototype.getActivateS2t = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig} returns this
 */
proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.prototype.setActivateS2t = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool activate_t2s = 2;
 * @return {boolean}
 */
proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.prototype.getActivateT2s = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig} returns this
 */
proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.prototype.setActivateT2s = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.vtsi.MessageBrokerConfig.oneofGroups_ = [[3]];

/**
 * @enum {number}
 */
proto.ondewo.vtsi.MessageBrokerConfig.MessageBrokerConfigCase = {
  MESSAGE_BROKER_CONFIG_NOT_SET: 0,
  RABBIT_MQ_CONFIG: 3
};

/**
 * @return {proto.ondewo.vtsi.MessageBrokerConfig.MessageBrokerConfigCase}
 */
proto.ondewo.vtsi.MessageBrokerConfig.prototype.getMessageBrokerConfigCase = function() {
  return /** @type {proto.ondewo.vtsi.MessageBrokerConfig.MessageBrokerConfigCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.vtsi.MessageBrokerConfig.oneofGroups_[0]));
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
proto.ondewo.vtsi.MessageBrokerConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.MessageBrokerConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.MessageBrokerConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.MessageBrokerConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    activateMessageBroker: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    messageBrokerServicesActivationConfig: (f = msg.getMessageBrokerServicesActivationConfig()) && proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.toObject(includeInstance, f),
    rabbitMqConfig: (f = msg.getRabbitMqConfig()) && proto.ondewo.vtsi.RabbitMqConfig.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.vtsi.MessageBrokerConfig}
 */
proto.ondewo.vtsi.MessageBrokerConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.MessageBrokerConfig;
  return proto.ondewo.vtsi.MessageBrokerConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.MessageBrokerConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.MessageBrokerConfig}
 */
proto.ondewo.vtsi.MessageBrokerConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActivateMessageBroker(value);
      break;
    case 2:
      var value = new proto.ondewo.vtsi.MessageBrokerServicesActivationConfig;
      reader.readMessage(value,proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.deserializeBinaryFromReader);
      msg.setMessageBrokerServicesActivationConfig(value);
      break;
    case 3:
      var value = new proto.ondewo.vtsi.RabbitMqConfig;
      reader.readMessage(value,proto.ondewo.vtsi.RabbitMqConfig.deserializeBinaryFromReader);
      msg.setRabbitMqConfig(value);
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
proto.ondewo.vtsi.MessageBrokerConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.MessageBrokerConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.MessageBrokerConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.MessageBrokerConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActivateMessageBroker();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessageBrokerServicesActivationConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.serializeBinaryToWriter
    );
  }
  f = message.getRabbitMqConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.vtsi.RabbitMqConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool activate_message_broker = 1;
 * @return {boolean}
 */
proto.ondewo.vtsi.MessageBrokerConfig.prototype.getActivateMessageBroker = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.MessageBrokerConfig} returns this
 */
proto.ondewo.vtsi.MessageBrokerConfig.prototype.setActivateMessageBroker = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional MessageBrokerServicesActivationConfig message_broker_services_activation_config = 2;
 * @return {?proto.ondewo.vtsi.MessageBrokerServicesActivationConfig}
 */
proto.ondewo.vtsi.MessageBrokerConfig.prototype.getMessageBrokerServicesActivationConfig = function() {
  return /** @type{?proto.ondewo.vtsi.MessageBrokerServicesActivationConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.MessageBrokerServicesActivationConfig, 2));
};


/**
 * @param {?proto.ondewo.vtsi.MessageBrokerServicesActivationConfig|undefined} value
 * @return {!proto.ondewo.vtsi.MessageBrokerConfig} returns this
*/
proto.ondewo.vtsi.MessageBrokerConfig.prototype.setMessageBrokerServicesActivationConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.MessageBrokerConfig} returns this
 */
proto.ondewo.vtsi.MessageBrokerConfig.prototype.clearMessageBrokerServicesActivationConfig = function() {
  return this.setMessageBrokerServicesActivationConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.MessageBrokerConfig.prototype.hasMessageBrokerServicesActivationConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RabbitMqConfig rabbit_mq_config = 3;
 * @return {?proto.ondewo.vtsi.RabbitMqConfig}
 */
proto.ondewo.vtsi.MessageBrokerConfig.prototype.getRabbitMqConfig = function() {
  return /** @type{?proto.ondewo.vtsi.RabbitMqConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.RabbitMqConfig, 3));
};


/**
 * @param {?proto.ondewo.vtsi.RabbitMqConfig|undefined} value
 * @return {!proto.ondewo.vtsi.MessageBrokerConfig} returns this
*/
proto.ondewo.vtsi.MessageBrokerConfig.prototype.setRabbitMqConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ondewo.vtsi.MessageBrokerConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.MessageBrokerConfig} returns this
 */
proto.ondewo.vtsi.MessageBrokerConfig.prototype.clearRabbitMqConfig = function() {
  return this.setRabbitMqConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.MessageBrokerConfig.prototype.hasRabbitMqConfig = function() {
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
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.MessageBrokerServicesActivationConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    activateS2t: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    activateNlu: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    activateT2s: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    activateSip: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.ondewo.vtsi.MessageBrokerServicesActivationConfig}
 */
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.MessageBrokerServicesActivationConfig;
  return proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.MessageBrokerServicesActivationConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.MessageBrokerServicesActivationConfig}
 */
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActivateS2t(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActivateNlu(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActivateT2s(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActivateSip(value);
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
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.MessageBrokerServicesActivationConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActivateS2t();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getActivateNlu();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getActivateT2s();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getActivateSip();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional bool activate_s2t = 1;
 * @return {boolean}
 */
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.prototype.getActivateS2t = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.MessageBrokerServicesActivationConfig} returns this
 */
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.prototype.setActivateS2t = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool activate_nlu = 2;
 * @return {boolean}
 */
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.prototype.getActivateNlu = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.MessageBrokerServicesActivationConfig} returns this
 */
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.prototype.setActivateNlu = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool activate_t2s = 3;
 * @return {boolean}
 */
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.prototype.getActivateT2s = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.MessageBrokerServicesActivationConfig} returns this
 */
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.prototype.setActivateT2s = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool activate_sip = 4;
 * @return {boolean}
 */
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.prototype.getActivateSip = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.MessageBrokerServicesActivationConfig} returns this
 */
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.prototype.setActivateSip = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.ondewo.vtsi.RabbitMqConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.RabbitMqConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.RabbitMqConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.RabbitMqConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, ""),
    port2: jspb.Message.getFieldWithDefault(msg, 3, ""),
    user: jspb.Message.getFieldWithDefault(msg, 4, ""),
    password: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.ondewo.vtsi.RabbitMqConfig}
 */
proto.ondewo.vtsi.RabbitMqConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.RabbitMqConfig;
  return proto.ondewo.vtsi.RabbitMqConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.RabbitMqConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.RabbitMqConfig}
 */
proto.ondewo.vtsi.RabbitMqConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPort2(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
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
proto.ondewo.vtsi.RabbitMqConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.RabbitMqConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.RabbitMqConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.RabbitMqConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPort2();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.ondewo.vtsi.RabbitMqConfig.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.RabbitMqConfig} returns this
 */
proto.ondewo.vtsi.RabbitMqConfig.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string port = 2;
 * @return {string}
 */
proto.ondewo.vtsi.RabbitMqConfig.prototype.getPort = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.RabbitMqConfig} returns this
 */
proto.ondewo.vtsi.RabbitMqConfig.prototype.setPort = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string port_2 = 3;
 * @return {string}
 */
proto.ondewo.vtsi.RabbitMqConfig.prototype.getPort2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.RabbitMqConfig} returns this
 */
proto.ondewo.vtsi.RabbitMqConfig.prototype.setPort2 = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string user = 4;
 * @return {string}
 */
proto.ondewo.vtsi.RabbitMqConfig.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.RabbitMqConfig} returns this
 */
proto.ondewo.vtsi.RabbitMqConfig.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string password = 5;
 * @return {string}
 */
proto.ondewo.vtsi.RabbitMqConfig.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.RabbitMqConfig} returns this
 */
proto.ondewo.vtsi.RabbitMqConfig.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.ondewo.vtsi.Endpoint.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.Endpoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.Endpoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.Endpoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.ondewo.vtsi.Endpoint}
 */
proto.ondewo.vtsi.Endpoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.Endpoint;
  return proto.ondewo.vtsi.Endpoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.Endpoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.Endpoint}
 */
proto.ondewo.vtsi.Endpoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPort(value);
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
proto.ondewo.vtsi.Endpoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.Endpoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.Endpoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.Endpoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.ondewo.vtsi.Endpoint.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.Endpoint} returns this
 */
proto.ondewo.vtsi.Endpoint.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string port = 2;
 * @return {string}
 */
proto.ondewo.vtsi.Endpoint.prototype.getPort = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.Endpoint} returns this
 */
proto.ondewo.vtsi.Endpoint.prototype.setPort = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.ondewo.vtsi.MinioConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.MinioConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.MinioConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.MinioConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    endpoint: (f = msg.getEndpoint()) && proto.ondewo.vtsi.Endpoint.toObject(includeInstance, f),
    accessKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    secretKey: jspb.Message.getFieldWithDefault(msg, 3, ""),
    secure: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    sessionToken: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.ondewo.vtsi.MinioConfig}
 */
proto.ondewo.vtsi.MinioConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.MinioConfig;
  return proto.ondewo.vtsi.MinioConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.MinioConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.MinioConfig}
 */
proto.ondewo.vtsi.MinioConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.vtsi.Endpoint;
      reader.readMessage(value,proto.ondewo.vtsi.Endpoint.deserializeBinaryFromReader);
      msg.setEndpoint(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecretKey(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSecure(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionToken(value);
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
proto.ondewo.vtsi.MinioConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.MinioConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.MinioConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.MinioConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndpoint();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.vtsi.Endpoint.serializeBinaryToWriter
    );
  }
  f = message.getAccessKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSecretKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSecure();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getSessionToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional Endpoint endpoint = 1;
 * @return {?proto.ondewo.vtsi.Endpoint}
 */
proto.ondewo.vtsi.MinioConfig.prototype.getEndpoint = function() {
  return /** @type{?proto.ondewo.vtsi.Endpoint} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.Endpoint, 1));
};


/**
 * @param {?proto.ondewo.vtsi.Endpoint|undefined} value
 * @return {!proto.ondewo.vtsi.MinioConfig} returns this
*/
proto.ondewo.vtsi.MinioConfig.prototype.setEndpoint = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.MinioConfig} returns this
 */
proto.ondewo.vtsi.MinioConfig.prototype.clearEndpoint = function() {
  return this.setEndpoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.MinioConfig.prototype.hasEndpoint = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string access_key = 2;
 * @return {string}
 */
proto.ondewo.vtsi.MinioConfig.prototype.getAccessKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.MinioConfig} returns this
 */
proto.ondewo.vtsi.MinioConfig.prototype.setAccessKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string secret_key = 3;
 * @return {string}
 */
proto.ondewo.vtsi.MinioConfig.prototype.getSecretKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.MinioConfig} returns this
 */
proto.ondewo.vtsi.MinioConfig.prototype.setSecretKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool secure = 4;
 * @return {boolean}
 */
proto.ondewo.vtsi.MinioConfig.prototype.getSecure = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.MinioConfig} returns this
 */
proto.ondewo.vtsi.MinioConfig.prototype.setSecure = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string session_token = 5;
 * @return {string}
 */
proto.ondewo.vtsi.MinioConfig.prototype.getSessionToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.MinioConfig} returns this
 */
proto.ondewo.vtsi.MinioConfig.prototype.setSessionToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.S2tCallbacks.repeatedFields_ = [1,2];



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
proto.ondewo.vtsi.S2tCallbacks.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.S2tCallbacks.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.S2tCallbacks} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.S2tCallbacks.toObject = function(includeInstance, msg) {
  var f, obj = {
    preS2tCallbacksList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    postS2tCallbacksList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ondewo.vtsi.S2tCallbacks}
 */
proto.ondewo.vtsi.S2tCallbacks.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.S2tCallbacks;
  return proto.ondewo.vtsi.S2tCallbacks.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.S2tCallbacks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.S2tCallbacks}
 */
proto.ondewo.vtsi.S2tCallbacks.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPreS2tCallbacks(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPostS2tCallbacks(value);
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
proto.ondewo.vtsi.S2tCallbacks.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.S2tCallbacks.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.S2tCallbacks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.S2tCallbacks.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPreS2tCallbacksList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getPostS2tCallbacksList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string pre_s2t_callbacks = 1;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.S2tCallbacks.prototype.getPreS2tCallbacksList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.S2tCallbacks} returns this
 */
proto.ondewo.vtsi.S2tCallbacks.prototype.setPreS2tCallbacksList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.S2tCallbacks} returns this
 */
proto.ondewo.vtsi.S2tCallbacks.prototype.addPreS2tCallbacks = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.S2tCallbacks} returns this
 */
proto.ondewo.vtsi.S2tCallbacks.prototype.clearPreS2tCallbacksList = function() {
  return this.setPreS2tCallbacksList([]);
};


/**
 * repeated string post_s2t_callbacks = 2;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.S2tCallbacks.prototype.getPostS2tCallbacksList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.S2tCallbacks} returns this
 */
proto.ondewo.vtsi.S2tCallbacks.prototype.setPostS2tCallbacksList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.S2tCallbacks} returns this
 */
proto.ondewo.vtsi.S2tCallbacks.prototype.addPostS2tCallbacks = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.S2tCallbacks} returns this
 */
proto.ondewo.vtsi.S2tCallbacks.prototype.clearPostS2tCallbacksList = function() {
  return this.setPostS2tCallbacksList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.NluCallbacks.repeatedFields_ = [1,2];



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
proto.ondewo.vtsi.NluCallbacks.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.NluCallbacks.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.NluCallbacks} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.NluCallbacks.toObject = function(includeInstance, msg) {
  var f, obj = {
    preNluCallbacksList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    postNluCallbacksList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ondewo.vtsi.NluCallbacks}
 */
proto.ondewo.vtsi.NluCallbacks.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.NluCallbacks;
  return proto.ondewo.vtsi.NluCallbacks.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.NluCallbacks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.NluCallbacks}
 */
proto.ondewo.vtsi.NluCallbacks.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPreNluCallbacks(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPostNluCallbacks(value);
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
proto.ondewo.vtsi.NluCallbacks.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.NluCallbacks.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.NluCallbacks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.NluCallbacks.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPreNluCallbacksList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getPostNluCallbacksList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string pre_nlu_callbacks = 1;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.NluCallbacks.prototype.getPreNluCallbacksList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.NluCallbacks} returns this
 */
proto.ondewo.vtsi.NluCallbacks.prototype.setPreNluCallbacksList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.NluCallbacks} returns this
 */
proto.ondewo.vtsi.NluCallbacks.prototype.addPreNluCallbacks = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.NluCallbacks} returns this
 */
proto.ondewo.vtsi.NluCallbacks.prototype.clearPreNluCallbacksList = function() {
  return this.setPreNluCallbacksList([]);
};


/**
 * repeated string post_nlu_callbacks = 2;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.NluCallbacks.prototype.getPostNluCallbacksList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.NluCallbacks} returns this
 */
proto.ondewo.vtsi.NluCallbacks.prototype.setPostNluCallbacksList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.NluCallbacks} returns this
 */
proto.ondewo.vtsi.NluCallbacks.prototype.addPostNluCallbacks = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.NluCallbacks} returns this
 */
proto.ondewo.vtsi.NluCallbacks.prototype.clearPostNluCallbacksList = function() {
  return this.setPostNluCallbacksList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.T2sCallbacks.repeatedFields_ = [1,2];



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
proto.ondewo.vtsi.T2sCallbacks.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.T2sCallbacks.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.T2sCallbacks} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.T2sCallbacks.toObject = function(includeInstance, msg) {
  var f, obj = {
    preT2sCallbacksList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    postT2sCallbacksList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ondewo.vtsi.T2sCallbacks}
 */
proto.ondewo.vtsi.T2sCallbacks.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.T2sCallbacks;
  return proto.ondewo.vtsi.T2sCallbacks.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.T2sCallbacks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.T2sCallbacks}
 */
proto.ondewo.vtsi.T2sCallbacks.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPreT2sCallbacks(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPostT2sCallbacks(value);
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
proto.ondewo.vtsi.T2sCallbacks.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.T2sCallbacks.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.T2sCallbacks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.T2sCallbacks.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPreT2sCallbacksList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getPostT2sCallbacksList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string pre_t2s_callbacks = 1;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.T2sCallbacks.prototype.getPreT2sCallbacksList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.T2sCallbacks} returns this
 */
proto.ondewo.vtsi.T2sCallbacks.prototype.setPreT2sCallbacksList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.T2sCallbacks} returns this
 */
proto.ondewo.vtsi.T2sCallbacks.prototype.addPreT2sCallbacks = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.T2sCallbacks} returns this
 */
proto.ondewo.vtsi.T2sCallbacks.prototype.clearPreT2sCallbacksList = function() {
  return this.setPreT2sCallbacksList([]);
};


/**
 * repeated string post_t2s_callbacks = 2;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.T2sCallbacks.prototype.getPostT2sCallbacksList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.T2sCallbacks} returns this
 */
proto.ondewo.vtsi.T2sCallbacks.prototype.setPostT2sCallbacksList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.T2sCallbacks} returns this
 */
proto.ondewo.vtsi.T2sCallbacks.prototype.addPostT2sCallbacks = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.T2sCallbacks} returns this
 */
proto.ondewo.vtsi.T2sCallbacks.prototype.clearPostT2sCallbacksList = function() {
  return this.setPostT2sCallbacksList([]);
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
proto.ondewo.vtsi.StartListenerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.StartListenerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.StartListenerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StartListenerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sipConfig: (f = msg.getSipConfig()) && proto.ondewo.vtsi.SIPBaseConfig.toObject(includeInstance, f),
    servicesConfigs: (f = msg.getServicesConfigs()) && proto.ondewo.vtsi.CommonServicesConfigs.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.vtsi.StartListenerRequest}
 */
proto.ondewo.vtsi.StartListenerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.StartListenerRequest;
  return proto.ondewo.vtsi.StartListenerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StartListenerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StartListenerRequest}
 */
proto.ondewo.vtsi.StartListenerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.vtsi.SIPBaseConfig;
      reader.readMessage(value,proto.ondewo.vtsi.SIPBaseConfig.deserializeBinaryFromReader);
      msg.setSipConfig(value);
      break;
    case 2:
      var value = new proto.ondewo.vtsi.CommonServicesConfigs;
      reader.readMessage(value,proto.ondewo.vtsi.CommonServicesConfigs.deserializeBinaryFromReader);
      msg.setServicesConfigs(value);
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
proto.ondewo.vtsi.StartListenerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.StartListenerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StartListenerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StartListenerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSipConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.vtsi.SIPBaseConfig.serializeBinaryToWriter
    );
  }
  f = message.getServicesConfigs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.vtsi.CommonServicesConfigs.serializeBinaryToWriter
    );
  }
};


/**
 * optional SIPBaseConfig sip_config = 1;
 * @return {?proto.ondewo.vtsi.SIPBaseConfig}
 */
proto.ondewo.vtsi.StartListenerRequest.prototype.getSipConfig = function() {
  return /** @type{?proto.ondewo.vtsi.SIPBaseConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.SIPBaseConfig, 1));
};


/**
 * @param {?proto.ondewo.vtsi.SIPBaseConfig|undefined} value
 * @return {!proto.ondewo.vtsi.StartListenerRequest} returns this
*/
proto.ondewo.vtsi.StartListenerRequest.prototype.setSipConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.StartListenerRequest} returns this
 */
proto.ondewo.vtsi.StartListenerRequest.prototype.clearSipConfig = function() {
  return this.setSipConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.StartListenerRequest.prototype.hasSipConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CommonServicesConfigs services_configs = 2;
 * @return {?proto.ondewo.vtsi.CommonServicesConfigs}
 */
proto.ondewo.vtsi.StartListenerRequest.prototype.getServicesConfigs = function() {
  return /** @type{?proto.ondewo.vtsi.CommonServicesConfigs} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.CommonServicesConfigs, 2));
};


/**
 * @param {?proto.ondewo.vtsi.CommonServicesConfigs|undefined} value
 * @return {!proto.ondewo.vtsi.StartListenerRequest} returns this
*/
proto.ondewo.vtsi.StartListenerRequest.prototype.setServicesConfigs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.StartListenerRequest} returns this
 */
proto.ondewo.vtsi.StartListenerRequest.prototype.clearServicesConfigs = function() {
  return this.setServicesConfigs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.StartListenerRequest.prototype.hasServicesConfigs = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.ondewo.vtsi.StartCallerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.StartCallerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.StartCallerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StartCallerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sipConfig: (f = msg.getSipConfig()) && proto.ondewo.vtsi.SIPCallerConfig.toObject(includeInstance, f),
    servicesConfigs: (f = msg.getServicesConfigs()) && proto.ondewo.vtsi.CommonServicesConfigs.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.vtsi.StartCallerRequest}
 */
proto.ondewo.vtsi.StartCallerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.StartCallerRequest;
  return proto.ondewo.vtsi.StartCallerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StartCallerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StartCallerRequest}
 */
proto.ondewo.vtsi.StartCallerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.vtsi.SIPCallerConfig;
      reader.readMessage(value,proto.ondewo.vtsi.SIPCallerConfig.deserializeBinaryFromReader);
      msg.setSipConfig(value);
      break;
    case 2:
      var value = new proto.ondewo.vtsi.CommonServicesConfigs;
      reader.readMessage(value,proto.ondewo.vtsi.CommonServicesConfigs.deserializeBinaryFromReader);
      msg.setServicesConfigs(value);
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
proto.ondewo.vtsi.StartCallerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.StartCallerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StartCallerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StartCallerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSipConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.vtsi.SIPCallerConfig.serializeBinaryToWriter
    );
  }
  f = message.getServicesConfigs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.vtsi.CommonServicesConfigs.serializeBinaryToWriter
    );
  }
};


/**
 * optional SIPCallerConfig sip_config = 1;
 * @return {?proto.ondewo.vtsi.SIPCallerConfig}
 */
proto.ondewo.vtsi.StartCallerRequest.prototype.getSipConfig = function() {
  return /** @type{?proto.ondewo.vtsi.SIPCallerConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.SIPCallerConfig, 1));
};


/**
 * @param {?proto.ondewo.vtsi.SIPCallerConfig|undefined} value
 * @return {!proto.ondewo.vtsi.StartCallerRequest} returns this
*/
proto.ondewo.vtsi.StartCallerRequest.prototype.setSipConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.StartCallerRequest} returns this
 */
proto.ondewo.vtsi.StartCallerRequest.prototype.clearSipConfig = function() {
  return this.setSipConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.StartCallerRequest.prototype.hasSipConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CommonServicesConfigs services_configs = 2;
 * @return {?proto.ondewo.vtsi.CommonServicesConfigs}
 */
proto.ondewo.vtsi.StartCallerRequest.prototype.getServicesConfigs = function() {
  return /** @type{?proto.ondewo.vtsi.CommonServicesConfigs} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.CommonServicesConfigs, 2));
};


/**
 * @param {?proto.ondewo.vtsi.CommonServicesConfigs|undefined} value
 * @return {!proto.ondewo.vtsi.StartCallerRequest} returns this
*/
proto.ondewo.vtsi.StartCallerRequest.prototype.setServicesConfigs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.StartCallerRequest} returns this
 */
proto.ondewo.vtsi.StartCallerRequest.prototype.clearServicesConfigs = function() {
  return this.setServicesConfigs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.StartCallerRequest.prototype.hasServicesConfigs = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.ondewo.vtsi.StartScheduledCallerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.StartScheduledCallerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.StartScheduledCallerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StartScheduledCallerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && proto.ondewo.vtsi.StartCallerRequest.toObject(includeInstance, f),
    scheduledTime: (f = msg.getScheduledTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.vtsi.StartScheduledCallerRequest}
 */
proto.ondewo.vtsi.StartScheduledCallerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.StartScheduledCallerRequest;
  return proto.ondewo.vtsi.StartScheduledCallerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StartScheduledCallerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StartScheduledCallerRequest}
 */
proto.ondewo.vtsi.StartScheduledCallerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.vtsi.StartCallerRequest;
      reader.readMessage(value,proto.ondewo.vtsi.StartCallerRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setScheduledTime(value);
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
proto.ondewo.vtsi.StartScheduledCallerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.StartScheduledCallerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StartScheduledCallerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StartScheduledCallerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.vtsi.StartCallerRequest.serializeBinaryToWriter
    );
  }
  f = message.getScheduledTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional StartCallerRequest request = 1;
 * @return {?proto.ondewo.vtsi.StartCallerRequest}
 */
proto.ondewo.vtsi.StartScheduledCallerRequest.prototype.getRequest = function() {
  return /** @type{?proto.ondewo.vtsi.StartCallerRequest} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.StartCallerRequest, 1));
};


/**
 * @param {?proto.ondewo.vtsi.StartCallerRequest|undefined} value
 * @return {!proto.ondewo.vtsi.StartScheduledCallerRequest} returns this
*/
proto.ondewo.vtsi.StartScheduledCallerRequest.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.StartScheduledCallerRequest} returns this
 */
proto.ondewo.vtsi.StartScheduledCallerRequest.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.StartScheduledCallerRequest.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp scheduled_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.StartScheduledCallerRequest.prototype.getScheduledTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.StartScheduledCallerRequest} returns this
*/
proto.ondewo.vtsi.StartScheduledCallerRequest.prototype.setScheduledTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.StartScheduledCallerRequest} returns this
 */
proto.ondewo.vtsi.StartScheduledCallerRequest.prototype.clearScheduledTime = function() {
  return this.setScheduledTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.StartScheduledCallerRequest.prototype.hasScheduledTime = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.StartListenersRequest.repeatedFields_ = [2];



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
proto.ondewo.vtsi.StartListenersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.StartListenersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.StartListenersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StartListenersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.ondewo.vtsi.StartListenerRequest.toObject, includeInstance)
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
 * @return {!proto.ondewo.vtsi.StartListenersRequest}
 */
proto.ondewo.vtsi.StartListenersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.StartListenersRequest;
  return proto.ondewo.vtsi.StartListenersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StartListenersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StartListenersRequest}
 */
proto.ondewo.vtsi.StartListenersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = new proto.ondewo.vtsi.StartListenerRequest;
      reader.readMessage(value,proto.ondewo.vtsi.StartListenerRequest.deserializeBinaryFromReader);
      msg.addRequests(value);
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
proto.ondewo.vtsi.StartListenersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.StartListenersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StartListenersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StartListenersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ondewo.vtsi.StartListenerRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StartListenersRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartListenersRequest} returns this
 */
proto.ondewo.vtsi.StartListenersRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated StartListenerRequest requests = 2;
 * @return {!Array<!proto.ondewo.vtsi.StartListenerRequest>}
 */
proto.ondewo.vtsi.StartListenersRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.ondewo.vtsi.StartListenerRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.StartListenerRequest, 2));
};


/**
 * @param {!Array<!proto.ondewo.vtsi.StartListenerRequest>} value
 * @return {!proto.ondewo.vtsi.StartListenersRequest} returns this
*/
proto.ondewo.vtsi.StartListenersRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ondewo.vtsi.StartListenerRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.StartListenerRequest}
 */
proto.ondewo.vtsi.StartListenersRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.vtsi.StartListenerRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StartListenersRequest} returns this
 */
proto.ondewo.vtsi.StartListenersRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.StartListenersResponse.repeatedFields_ = [2];



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
proto.ondewo.vtsi.StartListenersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.StartListenersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.StartListenersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StartListenersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    callIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ondewo.vtsi.StartListenersResponse}
 */
proto.ondewo.vtsi.StartListenersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.StartListenersResponse;
  return proto.ondewo.vtsi.StartListenersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StartListenersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StartListenersResponse}
 */
proto.ondewo.vtsi.StartListenersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addCallIds(value);
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
proto.ondewo.vtsi.StartListenersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.StartListenersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StartListenersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StartListenersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCallIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StartListenersResponse.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartListenersResponse} returns this
 */
proto.ondewo.vtsi.StartListenersResponse.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string call_ids = 2;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.StartListenersResponse.prototype.getCallIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.StartListenersResponse} returns this
 */
proto.ondewo.vtsi.StartListenersResponse.prototype.setCallIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.StartListenersResponse} returns this
 */
proto.ondewo.vtsi.StartListenersResponse.prototype.addCallIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StartListenersResponse} returns this
 */
proto.ondewo.vtsi.StartListenersResponse.prototype.clearCallIdsList = function() {
  return this.setCallIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.StartCallersRequest.repeatedFields_ = [2];



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
proto.ondewo.vtsi.StartCallersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.StartCallersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.StartCallersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StartCallersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.ondewo.vtsi.StartCallerRequest.toObject, includeInstance)
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
 * @return {!proto.ondewo.vtsi.StartCallersRequest}
 */
proto.ondewo.vtsi.StartCallersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.StartCallersRequest;
  return proto.ondewo.vtsi.StartCallersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StartCallersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StartCallersRequest}
 */
proto.ondewo.vtsi.StartCallersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = new proto.ondewo.vtsi.StartCallerRequest;
      reader.readMessage(value,proto.ondewo.vtsi.StartCallerRequest.deserializeBinaryFromReader);
      msg.addRequests(value);
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
proto.ondewo.vtsi.StartCallersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.StartCallersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StartCallersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StartCallersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ondewo.vtsi.StartCallerRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StartCallersRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartCallersRequest} returns this
 */
proto.ondewo.vtsi.StartCallersRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated StartCallerRequest requests = 2;
 * @return {!Array<!proto.ondewo.vtsi.StartCallerRequest>}
 */
proto.ondewo.vtsi.StartCallersRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.ondewo.vtsi.StartCallerRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.StartCallerRequest, 2));
};


/**
 * @param {!Array<!proto.ondewo.vtsi.StartCallerRequest>} value
 * @return {!proto.ondewo.vtsi.StartCallersRequest} returns this
*/
proto.ondewo.vtsi.StartCallersRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ondewo.vtsi.StartCallerRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.StartCallerRequest}
 */
proto.ondewo.vtsi.StartCallersRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.vtsi.StartCallerRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StartCallersRequest} returns this
 */
proto.ondewo.vtsi.StartCallersRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.StartCallersResponse.repeatedFields_ = [2];



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
proto.ondewo.vtsi.StartCallersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.StartCallersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.StartCallersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StartCallersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    callIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ondewo.vtsi.StartCallersResponse}
 */
proto.ondewo.vtsi.StartCallersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.StartCallersResponse;
  return proto.ondewo.vtsi.StartCallersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StartCallersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StartCallersResponse}
 */
proto.ondewo.vtsi.StartCallersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addCallIds(value);
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
proto.ondewo.vtsi.StartCallersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.StartCallersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StartCallersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StartCallersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCallIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StartCallersResponse.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartCallersResponse} returns this
 */
proto.ondewo.vtsi.StartCallersResponse.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string call_ids = 2;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.StartCallersResponse.prototype.getCallIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.StartCallersResponse} returns this
 */
proto.ondewo.vtsi.StartCallersResponse.prototype.setCallIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.StartCallersResponse} returns this
 */
proto.ondewo.vtsi.StartCallersResponse.prototype.addCallIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StartCallersResponse} returns this
 */
proto.ondewo.vtsi.StartCallersResponse.prototype.clearCallIdsList = function() {
  return this.setCallIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.StartScheduledCallersRequest.repeatedFields_ = [2];



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
proto.ondewo.vtsi.StartScheduledCallersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.StartScheduledCallersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.StartScheduledCallersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StartScheduledCallersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.ondewo.vtsi.StartScheduledCallerRequest.toObject, includeInstance)
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
 * @return {!proto.ondewo.vtsi.StartScheduledCallersRequest}
 */
proto.ondewo.vtsi.StartScheduledCallersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.StartScheduledCallersRequest;
  return proto.ondewo.vtsi.StartScheduledCallersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StartScheduledCallersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StartScheduledCallersRequest}
 */
proto.ondewo.vtsi.StartScheduledCallersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = new proto.ondewo.vtsi.StartScheduledCallerRequest;
      reader.readMessage(value,proto.ondewo.vtsi.StartScheduledCallerRequest.deserializeBinaryFromReader);
      msg.addRequests(value);
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
proto.ondewo.vtsi.StartScheduledCallersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.StartScheduledCallersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StartScheduledCallersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StartScheduledCallersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ondewo.vtsi.StartScheduledCallerRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StartScheduledCallersRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartScheduledCallersRequest} returns this
 */
proto.ondewo.vtsi.StartScheduledCallersRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated StartScheduledCallerRequest requests = 2;
 * @return {!Array<!proto.ondewo.vtsi.StartScheduledCallerRequest>}
 */
proto.ondewo.vtsi.StartScheduledCallersRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.ondewo.vtsi.StartScheduledCallerRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.StartScheduledCallerRequest, 2));
};


/**
 * @param {!Array<!proto.ondewo.vtsi.StartScheduledCallerRequest>} value
 * @return {!proto.ondewo.vtsi.StartScheduledCallersRequest} returns this
*/
proto.ondewo.vtsi.StartScheduledCallersRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ondewo.vtsi.StartScheduledCallerRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.StartScheduledCallerRequest}
 */
proto.ondewo.vtsi.StartScheduledCallersRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.vtsi.StartScheduledCallerRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StartScheduledCallersRequest} returns this
 */
proto.ondewo.vtsi.StartScheduledCallersRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.StopCallsRequest.repeatedFields_ = [2];



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
proto.ondewo.vtsi.StopCallsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.StopCallsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.StopCallsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StopCallsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    callIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ondewo.vtsi.StopCallsRequest}
 */
proto.ondewo.vtsi.StopCallsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.StopCallsRequest;
  return proto.ondewo.vtsi.StopCallsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StopCallsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StopCallsRequest}
 */
proto.ondewo.vtsi.StopCallsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addCallIds(value);
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
proto.ondewo.vtsi.StopCallsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.StopCallsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StopCallsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StopCallsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCallIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StopCallsRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StopCallsRequest} returns this
 */
proto.ondewo.vtsi.StopCallsRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string call_ids = 2;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.StopCallsRequest.prototype.getCallIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.StopCallsRequest} returns this
 */
proto.ondewo.vtsi.StopCallsRequest.prototype.setCallIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.StopCallsRequest} returns this
 */
proto.ondewo.vtsi.StopCallsRequest.prototype.addCallIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StopCallsRequest} returns this
 */
proto.ondewo.vtsi.StopCallsRequest.prototype.clearCallIdsList = function() {
  return this.setCallIdsList([]);
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
proto.ondewo.vtsi.StopAllCallsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.StopAllCallsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.StopAllCallsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StopAllCallsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.ondewo.vtsi.StopAllCallsRequest}
 */
proto.ondewo.vtsi.StopAllCallsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.StopAllCallsRequest;
  return proto.ondewo.vtsi.StopAllCallsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StopAllCallsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StopAllCallsRequest}
 */
proto.ondewo.vtsi.StopAllCallsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
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
proto.ondewo.vtsi.StopAllCallsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.StopAllCallsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StopAllCallsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StopAllCallsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StopAllCallsRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StopAllCallsRequest} returns this
 */
proto.ondewo.vtsi.StopAllCallsRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.TransferCallsRequest.repeatedFields_ = [2,3];



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
proto.ondewo.vtsi.TransferCallsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.TransferCallsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.TransferCallsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.TransferCallsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    callIdList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    transferIdList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.ondewo.vtsi.TransferCallsRequest}
 */
proto.ondewo.vtsi.TransferCallsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.TransferCallsRequest;
  return proto.ondewo.vtsi.TransferCallsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.TransferCallsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.TransferCallsRequest}
 */
proto.ondewo.vtsi.TransferCallsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addCallId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addTransferId(value);
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
proto.ondewo.vtsi.TransferCallsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.TransferCallsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.TransferCallsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.TransferCallsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCallIdList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getTransferIdList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.ondewo.vtsi.TransferCallsRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.TransferCallsRequest} returns this
 */
proto.ondewo.vtsi.TransferCallsRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string call_id = 2;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.TransferCallsRequest.prototype.getCallIdList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.TransferCallsRequest} returns this
 */
proto.ondewo.vtsi.TransferCallsRequest.prototype.setCallIdList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.TransferCallsRequest} returns this
 */
proto.ondewo.vtsi.TransferCallsRequest.prototype.addCallId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.TransferCallsRequest} returns this
 */
proto.ondewo.vtsi.TransferCallsRequest.prototype.clearCallIdList = function() {
  return this.setCallIdList([]);
};


/**
 * repeated string transfer_id = 3;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.TransferCallsRequest.prototype.getTransferIdList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.TransferCallsRequest} returns this
 */
proto.ondewo.vtsi.TransferCallsRequest.prototype.setTransferIdList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.TransferCallsRequest} returns this
 */
proto.ondewo.vtsi.TransferCallsRequest.prototype.addTransferId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.TransferCallsRequest} returns this
 */
proto.ondewo.vtsi.TransferCallsRequest.prototype.clearTransferIdList = function() {
  return this.setTransferIdList([]);
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
proto.ondewo.vtsi.GetVoipCallInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.GetVoipCallInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.GetVoipCallInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetVoipCallInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    callId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    voipCallInfoView: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.ondewo.vtsi.GetVoipCallInfoRequest}
 */
proto.ondewo.vtsi.GetVoipCallInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.GetVoipCallInfoRequest;
  return proto.ondewo.vtsi.GetVoipCallInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.GetVoipCallInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.GetVoipCallInfoRequest}
 */
proto.ondewo.vtsi.GetVoipCallInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallId(value);
      break;
    case 3:
      var value = /** @type {!proto.ondewo.vtsi.VoipCallInfoView} */ (reader.readEnum());
      msg.setVoipCallInfoView(value);
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
proto.ondewo.vtsi.GetVoipCallInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.GetVoipCallInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.GetVoipCallInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetVoipCallInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCallId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVoipCallInfoView();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.ondewo.vtsi.GetVoipCallInfoRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.GetVoipCallInfoRequest} returns this
 */
proto.ondewo.vtsi.GetVoipCallInfoRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string call_id = 2;
 * @return {string}
 */
proto.ondewo.vtsi.GetVoipCallInfoRequest.prototype.getCallId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.GetVoipCallInfoRequest} returns this
 */
proto.ondewo.vtsi.GetVoipCallInfoRequest.prototype.setCallId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional VoipCallInfoView voip_call_info_view = 3;
 * @return {!proto.ondewo.vtsi.VoipCallInfoView}
 */
proto.ondewo.vtsi.GetVoipCallInfoRequest.prototype.getVoipCallInfoView = function() {
  return /** @type {!proto.ondewo.vtsi.VoipCallInfoView} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ondewo.vtsi.VoipCallInfoView} value
 * @return {!proto.ondewo.vtsi.GetVoipCallInfoRequest} returns this
 */
proto.ondewo.vtsi.GetVoipCallInfoRequest.prototype.setVoipCallInfoView = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.GetVoipCallInfoResponse.repeatedFields_ = [2];



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
proto.ondewo.vtsi.GetVoipCallInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.GetVoipCallInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.GetVoipCallInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetVoipCallInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    activeLog: (f = msg.getActiveLog()) && proto.ondewo.vtsi.VoipCallInfo.toObject(includeInstance, f),
    doneLogsList: jspb.Message.toObjectList(msg.getDoneLogsList(),
    proto.ondewo.vtsi.VoipCallInfo.toObject, includeInstance)
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
 * @return {!proto.ondewo.vtsi.GetVoipCallInfoResponse}
 */
proto.ondewo.vtsi.GetVoipCallInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.GetVoipCallInfoResponse;
  return proto.ondewo.vtsi.GetVoipCallInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.GetVoipCallInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.GetVoipCallInfoResponse}
 */
proto.ondewo.vtsi.GetVoipCallInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.vtsi.VoipCallInfo;
      reader.readMessage(value,proto.ondewo.vtsi.VoipCallInfo.deserializeBinaryFromReader);
      msg.setActiveLog(value);
      break;
    case 2:
      var value = new proto.ondewo.vtsi.VoipCallInfo;
      reader.readMessage(value,proto.ondewo.vtsi.VoipCallInfo.deserializeBinaryFromReader);
      msg.addDoneLogs(value);
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
proto.ondewo.vtsi.GetVoipCallInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.GetVoipCallInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.GetVoipCallInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetVoipCallInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActiveLog();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.vtsi.VoipCallInfo.serializeBinaryToWriter
    );
  }
  f = message.getDoneLogsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ondewo.vtsi.VoipCallInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional VoipCallInfo active_log = 1;
 * @return {?proto.ondewo.vtsi.VoipCallInfo}
 */
proto.ondewo.vtsi.GetVoipCallInfoResponse.prototype.getActiveLog = function() {
  return /** @type{?proto.ondewo.vtsi.VoipCallInfo} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.VoipCallInfo, 1));
};


/**
 * @param {?proto.ondewo.vtsi.VoipCallInfo|undefined} value
 * @return {!proto.ondewo.vtsi.GetVoipCallInfoResponse} returns this
*/
proto.ondewo.vtsi.GetVoipCallInfoResponse.prototype.setActiveLog = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.GetVoipCallInfoResponse} returns this
 */
proto.ondewo.vtsi.GetVoipCallInfoResponse.prototype.clearActiveLog = function() {
  return this.setActiveLog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.GetVoipCallInfoResponse.prototype.hasActiveLog = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated VoipCallInfo done_logs = 2;
 * @return {!Array<!proto.ondewo.vtsi.VoipCallInfo>}
 */
proto.ondewo.vtsi.GetVoipCallInfoResponse.prototype.getDoneLogsList = function() {
  return /** @type{!Array<!proto.ondewo.vtsi.VoipCallInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.VoipCallInfo, 2));
};


/**
 * @param {!Array<!proto.ondewo.vtsi.VoipCallInfo>} value
 * @return {!proto.ondewo.vtsi.GetVoipCallInfoResponse} returns this
*/
proto.ondewo.vtsi.GetVoipCallInfoResponse.prototype.setDoneLogsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ondewo.vtsi.VoipCallInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.VoipCallInfo}
 */
proto.ondewo.vtsi.GetVoipCallInfoResponse.prototype.addDoneLogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.vtsi.VoipCallInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.GetVoipCallInfoResponse} returns this
 */
proto.ondewo.vtsi.GetVoipCallInfoResponse.prototype.clearDoneLogsList = function() {
  return this.setDoneLogsList([]);
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
proto.ondewo.vtsi.VoipCallInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.VoipCallInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.VoipCallInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.VoipCallInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    callId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sipAccount: jspb.Message.getFieldWithDefault(msg, 2, ""),
    containerName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    callType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    phoneNumber: jspb.Message.getFieldWithDefault(msg, 5, ""),
    startTime: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    endTime: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    sipStatus: (f = msg.getSipStatus()) && ondewo_sip_sip_pb.SipStatus.toObject(includeInstance, f),
    sipStatusHistory: (f = msg.getSipStatusHistory()) && ondewo_sip_sip_pb.SipStatusHistoryResponse.toObject(includeInstance, f),
    servicesStatuses: (f = msg.getServicesStatuses()) && proto.ondewo.vtsi.AllServicesStatuses.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.vtsi.VoipCallInfo}
 */
proto.ondewo.vtsi.VoipCallInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.VoipCallInfo;
  return proto.ondewo.vtsi.VoipCallInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.VoipCallInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.VoipCallInfo}
 */
proto.ondewo.vtsi.VoipCallInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSipAccount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContainerName(value);
      break;
    case 4:
      var value = /** @type {!proto.ondewo.vtsi.CallType} */ (reader.readEnum());
      msg.setCallType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneNumber(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStartTime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEndTime(value);
      break;
    case 8:
      var value = new ondewo_sip_sip_pb.SipStatus;
      reader.readMessage(value,ondewo_sip_sip_pb.SipStatus.deserializeBinaryFromReader);
      msg.setSipStatus(value);
      break;
    case 9:
      var value = new ondewo_sip_sip_pb.SipStatusHistoryResponse;
      reader.readMessage(value,ondewo_sip_sip_pb.SipStatusHistoryResponse.deserializeBinaryFromReader);
      msg.setSipStatusHistory(value);
      break;
    case 10:
      var value = new proto.ondewo.vtsi.AllServicesStatuses;
      reader.readMessage(value,proto.ondewo.vtsi.AllServicesStatuses.deserializeBinaryFromReader);
      msg.setServicesStatuses(value);
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
proto.ondewo.vtsi.VoipCallInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.VoipCallInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.VoipCallInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.VoipCallInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCallId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSipAccount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContainerName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCallType();
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
  f = message.getStartTime();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getEndTime();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getSipStatus();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      ondewo_sip_sip_pb.SipStatus.serializeBinaryToWriter
    );
  }
  f = message.getSipStatusHistory();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      ondewo_sip_sip_pb.SipStatusHistoryResponse.serializeBinaryToWriter
    );
  }
  f = message.getServicesStatuses();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.ondewo.vtsi.AllServicesStatuses.serializeBinaryToWriter
    );
  }
};


/**
 * optional string call_id = 1;
 * @return {string}
 */
proto.ondewo.vtsi.VoipCallInfo.prototype.getCallId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.VoipCallInfo} returns this
 */
proto.ondewo.vtsi.VoipCallInfo.prototype.setCallId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string sip_account = 2;
 * @return {string}
 */
proto.ondewo.vtsi.VoipCallInfo.prototype.getSipAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.VoipCallInfo} returns this
 */
proto.ondewo.vtsi.VoipCallInfo.prototype.setSipAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string container_name = 3;
 * @return {string}
 */
proto.ondewo.vtsi.VoipCallInfo.prototype.getContainerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.VoipCallInfo} returns this
 */
proto.ondewo.vtsi.VoipCallInfo.prototype.setContainerName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional CallType call_type = 4;
 * @return {!proto.ondewo.vtsi.CallType}
 */
proto.ondewo.vtsi.VoipCallInfo.prototype.getCallType = function() {
  return /** @type {!proto.ondewo.vtsi.CallType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.ondewo.vtsi.CallType} value
 * @return {!proto.ondewo.vtsi.VoipCallInfo} returns this
 */
proto.ondewo.vtsi.VoipCallInfo.prototype.setCallType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string phone_number = 5;
 * @return {string}
 */
proto.ondewo.vtsi.VoipCallInfo.prototype.getPhoneNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.VoipCallInfo} returns this
 */
proto.ondewo.vtsi.VoipCallInfo.prototype.setPhoneNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional double start_time = 6;
 * @return {number}
 */
proto.ondewo.vtsi.VoipCallInfo.prototype.getStartTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.VoipCallInfo} returns this
 */
proto.ondewo.vtsi.VoipCallInfo.prototype.setStartTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double end_time = 7;
 * @return {number}
 */
proto.ondewo.vtsi.VoipCallInfo.prototype.getEndTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.VoipCallInfo} returns this
 */
proto.ondewo.vtsi.VoipCallInfo.prototype.setEndTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional ondewo.sip.SipStatus sip_status = 8;
 * @return {?proto.ondewo.sip.SipStatus}
 */
proto.ondewo.vtsi.VoipCallInfo.prototype.getSipStatus = function() {
  return /** @type{?proto.ondewo.sip.SipStatus} */ (
    jspb.Message.getWrapperField(this, ondewo_sip_sip_pb.SipStatus, 8));
};


/**
 * @param {?proto.ondewo.sip.SipStatus|undefined} value
 * @return {!proto.ondewo.vtsi.VoipCallInfo} returns this
*/
proto.ondewo.vtsi.VoipCallInfo.prototype.setSipStatus = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.VoipCallInfo} returns this
 */
proto.ondewo.vtsi.VoipCallInfo.prototype.clearSipStatus = function() {
  return this.setSipStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.VoipCallInfo.prototype.hasSipStatus = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ondewo.sip.SipStatusHistoryResponse sip_status_history = 9;
 * @return {?proto.ondewo.sip.SipStatusHistoryResponse}
 */
proto.ondewo.vtsi.VoipCallInfo.prototype.getSipStatusHistory = function() {
  return /** @type{?proto.ondewo.sip.SipStatusHistoryResponse} */ (
    jspb.Message.getWrapperField(this, ondewo_sip_sip_pb.SipStatusHistoryResponse, 9));
};


/**
 * @param {?proto.ondewo.sip.SipStatusHistoryResponse|undefined} value
 * @return {!proto.ondewo.vtsi.VoipCallInfo} returns this
*/
proto.ondewo.vtsi.VoipCallInfo.prototype.setSipStatusHistory = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.VoipCallInfo} returns this
 */
proto.ondewo.vtsi.VoipCallInfo.prototype.clearSipStatusHistory = function() {
  return this.setSipStatusHistory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.VoipCallInfo.prototype.hasSipStatusHistory = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional AllServicesStatuses services_statuses = 10;
 * @return {?proto.ondewo.vtsi.AllServicesStatuses}
 */
proto.ondewo.vtsi.VoipCallInfo.prototype.getServicesStatuses = function() {
  return /** @type{?proto.ondewo.vtsi.AllServicesStatuses} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.AllServicesStatuses, 10));
};


/**
 * @param {?proto.ondewo.vtsi.AllServicesStatuses|undefined} value
 * @return {!proto.ondewo.vtsi.VoipCallInfo} returns this
*/
proto.ondewo.vtsi.VoipCallInfo.prototype.setServicesStatuses = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.VoipCallInfo} returns this
 */
proto.ondewo.vtsi.VoipCallInfo.prototype.clearServicesStatuses = function() {
  return this.setServicesStatuses(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.VoipCallInfo.prototype.hasServicesStatuses = function() {
  return jspb.Message.getField(this, 10) != null;
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
proto.ondewo.vtsi.ListVoipCallInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.ListVoipCallInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.ListVoipCallInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ListVoipCallInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    voipCallInfoView: jspb.Message.getFieldWithDefault(msg, 2, 0),
    callType: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.ondewo.vtsi.ListVoipCallInfoRequest}
 */
proto.ondewo.vtsi.ListVoipCallInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.ListVoipCallInfoRequest;
  return proto.ondewo.vtsi.ListVoipCallInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.ListVoipCallInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.ListVoipCallInfoRequest}
 */
proto.ondewo.vtsi.ListVoipCallInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {!proto.ondewo.vtsi.VoipCallInfoView} */ (reader.readEnum());
      msg.setVoipCallInfoView(value);
      break;
    case 3:
      var value = /** @type {!proto.ondewo.vtsi.CallType} */ (reader.readEnum());
      msg.setCallType(value);
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
proto.ondewo.vtsi.ListVoipCallInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.ListVoipCallInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.ListVoipCallInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ListVoipCallInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVoipCallInfoView();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getCallType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.ondewo.vtsi.ListVoipCallInfoRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ListVoipCallInfoRequest} returns this
 */
proto.ondewo.vtsi.ListVoipCallInfoRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional VoipCallInfoView voip_call_info_view = 2;
 * @return {!proto.ondewo.vtsi.VoipCallInfoView}
 */
proto.ondewo.vtsi.ListVoipCallInfoRequest.prototype.getVoipCallInfoView = function() {
  return /** @type {!proto.ondewo.vtsi.VoipCallInfoView} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ondewo.vtsi.VoipCallInfoView} value
 * @return {!proto.ondewo.vtsi.ListVoipCallInfoRequest} returns this
 */
proto.ondewo.vtsi.ListVoipCallInfoRequest.prototype.setVoipCallInfoView = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional CallType call_type = 3;
 * @return {!proto.ondewo.vtsi.CallType}
 */
proto.ondewo.vtsi.ListVoipCallInfoRequest.prototype.getCallType = function() {
  return /** @type {!proto.ondewo.vtsi.CallType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ondewo.vtsi.CallType} value
 * @return {!proto.ondewo.vtsi.ListVoipCallInfoRequest} returns this
 */
proto.ondewo.vtsi.ListVoipCallInfoRequest.prototype.setCallType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.ListVoipCallInfoResponse.repeatedFields_ = [1];



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
proto.ondewo.vtsi.ListVoipCallInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.ListVoipCallInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.ListVoipCallInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ListVoipCallInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    voipInfoList: jspb.Message.toObjectList(msg.getVoipInfoList(),
    proto.ondewo.vtsi.VoipCallInfo.toObject, includeInstance)
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
 * @return {!proto.ondewo.vtsi.ListVoipCallInfoResponse}
 */
proto.ondewo.vtsi.ListVoipCallInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.ListVoipCallInfoResponse;
  return proto.ondewo.vtsi.ListVoipCallInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.ListVoipCallInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.ListVoipCallInfoResponse}
 */
proto.ondewo.vtsi.ListVoipCallInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.vtsi.VoipCallInfo;
      reader.readMessage(value,proto.ondewo.vtsi.VoipCallInfo.deserializeBinaryFromReader);
      msg.addVoipInfo(value);
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
proto.ondewo.vtsi.ListVoipCallInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.ListVoipCallInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.ListVoipCallInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ListVoipCallInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoipInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.vtsi.VoipCallInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated VoipCallInfo voip_info = 1;
 * @return {!Array<!proto.ondewo.vtsi.VoipCallInfo>}
 */
proto.ondewo.vtsi.ListVoipCallInfoResponse.prototype.getVoipInfoList = function() {
  return /** @type{!Array<!proto.ondewo.vtsi.VoipCallInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.VoipCallInfo, 1));
};


/**
 * @param {!Array<!proto.ondewo.vtsi.VoipCallInfo>} value
 * @return {!proto.ondewo.vtsi.ListVoipCallInfoResponse} returns this
*/
proto.ondewo.vtsi.ListVoipCallInfoResponse.prototype.setVoipInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.vtsi.VoipCallInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.VoipCallInfo}
 */
proto.ondewo.vtsi.ListVoipCallInfoResponse.prototype.addVoipInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.vtsi.VoipCallInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.ListVoipCallInfoResponse} returns this
 */
proto.ondewo.vtsi.ListVoipCallInfoResponse.prototype.clearVoipInfoList = function() {
  return this.setVoipInfoList([]);
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
proto.ondewo.vtsi.AllServicesStatuses.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.AllServicesStatuses.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.AllServicesStatuses} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.AllServicesStatuses.toObject = function(includeInstance, msg) {
  var f, obj = {
    statusSip: (f = msg.getStatusSip()) && proto.ondewo.vtsi.ServiceStatus.toObject(includeInstance, f),
    statusAsterisk: (f = msg.getStatusAsterisk()) && proto.ondewo.vtsi.ServiceStatus.toObject(includeInstance, f),
    statusCai: (f = msg.getStatusCai()) && proto.ondewo.vtsi.ServiceStatus.toObject(includeInstance, f),
    statusStt: (f = msg.getStatusStt()) && proto.ondewo.vtsi.ServiceStatus.toObject(includeInstance, f),
    statusTts: (f = msg.getStatusTts()) && proto.ondewo.vtsi.ServiceStatus.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.vtsi.AllServicesStatuses}
 */
proto.ondewo.vtsi.AllServicesStatuses.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.AllServicesStatuses;
  return proto.ondewo.vtsi.AllServicesStatuses.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.AllServicesStatuses} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.AllServicesStatuses}
 */
proto.ondewo.vtsi.AllServicesStatuses.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.vtsi.ServiceStatus;
      reader.readMessage(value,proto.ondewo.vtsi.ServiceStatus.deserializeBinaryFromReader);
      msg.setStatusSip(value);
      break;
    case 2:
      var value = new proto.ondewo.vtsi.ServiceStatus;
      reader.readMessage(value,proto.ondewo.vtsi.ServiceStatus.deserializeBinaryFromReader);
      msg.setStatusAsterisk(value);
      break;
    case 3:
      var value = new proto.ondewo.vtsi.ServiceStatus;
      reader.readMessage(value,proto.ondewo.vtsi.ServiceStatus.deserializeBinaryFromReader);
      msg.setStatusCai(value);
      break;
    case 4:
      var value = new proto.ondewo.vtsi.ServiceStatus;
      reader.readMessage(value,proto.ondewo.vtsi.ServiceStatus.deserializeBinaryFromReader);
      msg.setStatusStt(value);
      break;
    case 5:
      var value = new proto.ondewo.vtsi.ServiceStatus;
      reader.readMessage(value,proto.ondewo.vtsi.ServiceStatus.deserializeBinaryFromReader);
      msg.setStatusTts(value);
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
proto.ondewo.vtsi.AllServicesStatuses.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.AllServicesStatuses.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.AllServicesStatuses} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.AllServicesStatuses.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatusSip();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.vtsi.ServiceStatus.serializeBinaryToWriter
    );
  }
  f = message.getStatusAsterisk();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.vtsi.ServiceStatus.serializeBinaryToWriter
    );
  }
  f = message.getStatusCai();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.vtsi.ServiceStatus.serializeBinaryToWriter
    );
  }
  f = message.getStatusStt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ondewo.vtsi.ServiceStatus.serializeBinaryToWriter
    );
  }
  f = message.getStatusTts();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ondewo.vtsi.ServiceStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional ServiceStatus status_sip = 1;
 * @return {?proto.ondewo.vtsi.ServiceStatus}
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.getStatusSip = function() {
  return /** @type{?proto.ondewo.vtsi.ServiceStatus} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.ServiceStatus, 1));
};


/**
 * @param {?proto.ondewo.vtsi.ServiceStatus|undefined} value
 * @return {!proto.ondewo.vtsi.AllServicesStatuses} returns this
*/
proto.ondewo.vtsi.AllServicesStatuses.prototype.setStatusSip = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.AllServicesStatuses} returns this
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.clearStatusSip = function() {
  return this.setStatusSip(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.hasStatusSip = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ServiceStatus status_asterisk = 2;
 * @return {?proto.ondewo.vtsi.ServiceStatus}
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.getStatusAsterisk = function() {
  return /** @type{?proto.ondewo.vtsi.ServiceStatus} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.ServiceStatus, 2));
};


/**
 * @param {?proto.ondewo.vtsi.ServiceStatus|undefined} value
 * @return {!proto.ondewo.vtsi.AllServicesStatuses} returns this
*/
proto.ondewo.vtsi.AllServicesStatuses.prototype.setStatusAsterisk = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.AllServicesStatuses} returns this
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.clearStatusAsterisk = function() {
  return this.setStatusAsterisk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.hasStatusAsterisk = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ServiceStatus status_cai = 3;
 * @return {?proto.ondewo.vtsi.ServiceStatus}
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.getStatusCai = function() {
  return /** @type{?proto.ondewo.vtsi.ServiceStatus} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.ServiceStatus, 3));
};


/**
 * @param {?proto.ondewo.vtsi.ServiceStatus|undefined} value
 * @return {!proto.ondewo.vtsi.AllServicesStatuses} returns this
*/
proto.ondewo.vtsi.AllServicesStatuses.prototype.setStatusCai = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.AllServicesStatuses} returns this
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.clearStatusCai = function() {
  return this.setStatusCai(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.hasStatusCai = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ServiceStatus status_stt = 4;
 * @return {?proto.ondewo.vtsi.ServiceStatus}
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.getStatusStt = function() {
  return /** @type{?proto.ondewo.vtsi.ServiceStatus} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.ServiceStatus, 4));
};


/**
 * @param {?proto.ondewo.vtsi.ServiceStatus|undefined} value
 * @return {!proto.ondewo.vtsi.AllServicesStatuses} returns this
*/
proto.ondewo.vtsi.AllServicesStatuses.prototype.setStatusStt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.AllServicesStatuses} returns this
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.clearStatusStt = function() {
  return this.setStatusStt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.hasStatusStt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ServiceStatus status_tts = 5;
 * @return {?proto.ondewo.vtsi.ServiceStatus}
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.getStatusTts = function() {
  return /** @type{?proto.ondewo.vtsi.ServiceStatus} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.ServiceStatus, 5));
};


/**
 * @param {?proto.ondewo.vtsi.ServiceStatus|undefined} value
 * @return {!proto.ondewo.vtsi.AllServicesStatuses} returns this
*/
proto.ondewo.vtsi.AllServicesStatuses.prototype.setStatusTts = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.AllServicesStatuses} returns this
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.clearStatusTts = function() {
  return this.setStatusTts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.hasStatusTts = function() {
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
proto.ondewo.vtsi.ServiceStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.ServiceStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.ServiceStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ServiceStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    healthy: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    errorMesssages: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.ondewo.vtsi.ServiceStatus}
 */
proto.ondewo.vtsi.ServiceStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.ServiceStatus;
  return proto.ondewo.vtsi.ServiceStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.ServiceStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.ServiceStatus}
 */
proto.ondewo.vtsi.ServiceStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHealthy(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMesssages(value);
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
proto.ondewo.vtsi.ServiceStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.ServiceStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.ServiceStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ServiceStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHealthy();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getErrorMesssages();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool healthy = 1;
 * @return {boolean}
 */
proto.ondewo.vtsi.ServiceStatus.prototype.getHealthy = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.ServiceStatus} returns this
 */
proto.ondewo.vtsi.ServiceStatus.prototype.setHealthy = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string error_messsages = 2;
 * @return {string}
 */
proto.ondewo.vtsi.ServiceStatus.prototype.getErrorMesssages = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ServiceStatus} returns this
 */
proto.ondewo.vtsi.ServiceStatus.prototype.setErrorMesssages = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.ondewo.vtsi.GetAudioFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.GetAudioFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.GetAudioFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetAudioFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    objectName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    minioConfig: (f = msg.getMinioConfig()) && proto.ondewo.vtsi.MinioConfig.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.vtsi.GetAudioFileRequest}
 */
proto.ondewo.vtsi.GetAudioFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.GetAudioFileRequest;
  return proto.ondewo.vtsi.GetAudioFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.GetAudioFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.GetAudioFileRequest}
 */
proto.ondewo.vtsi.GetAudioFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectName(value);
      break;
    case 3:
      var value = new proto.ondewo.vtsi.MinioConfig;
      reader.readMessage(value,proto.ondewo.vtsi.MinioConfig.deserializeBinaryFromReader);
      msg.setMinioConfig(value);
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
proto.ondewo.vtsi.GetAudioFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.GetAudioFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.GetAudioFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetAudioFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getObjectName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMinioConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.vtsi.MinioConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string bucket_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.GetAudioFileRequest.prototype.getBucketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.GetAudioFileRequest} returns this
 */
proto.ondewo.vtsi.GetAudioFileRequest.prototype.setBucketName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string object_name = 2;
 * @return {string}
 */
proto.ondewo.vtsi.GetAudioFileRequest.prototype.getObjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.GetAudioFileRequest} returns this
 */
proto.ondewo.vtsi.GetAudioFileRequest.prototype.setObjectName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional MinioConfig minio_config = 3;
 * @return {?proto.ondewo.vtsi.MinioConfig}
 */
proto.ondewo.vtsi.GetAudioFileRequest.prototype.getMinioConfig = function() {
  return /** @type{?proto.ondewo.vtsi.MinioConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.MinioConfig, 3));
};


/**
 * @param {?proto.ondewo.vtsi.MinioConfig|undefined} value
 * @return {!proto.ondewo.vtsi.GetAudioFileRequest} returns this
*/
proto.ondewo.vtsi.GetAudioFileRequest.prototype.setMinioConfig = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.GetAudioFileRequest} returns this
 */
proto.ondewo.vtsi.GetAudioFileRequest.prototype.clearMinioConfig = function() {
  return this.setMinioConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.GetAudioFileRequest.prototype.hasMinioConfig = function() {
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
proto.ondewo.vtsi.GetAudioFileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.GetAudioFileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.GetAudioFileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetAudioFileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    audio: msg.getAudio_asB64()
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
 * @return {!proto.ondewo.vtsi.GetAudioFileResponse}
 */
proto.ondewo.vtsi.GetAudioFileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.GetAudioFileResponse;
  return proto.ondewo.vtsi.GetAudioFileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.GetAudioFileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.GetAudioFileResponse}
 */
proto.ondewo.vtsi.GetAudioFileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAudio(value);
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
proto.ondewo.vtsi.GetAudioFileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.GetAudioFileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.GetAudioFileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetAudioFileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudio_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes audio = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ondewo.vtsi.GetAudioFileResponse.prototype.getAudio = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes audio = 1;
 * This is a type-conversion wrapper around `getAudio()`
 * @return {string}
 */
proto.ondewo.vtsi.GetAudioFileResponse.prototype.getAudio_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAudio()));
};


/**
 * optional bytes audio = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAudio()`
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.GetAudioFileResponse.prototype.getAudio_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAudio()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ondewo.vtsi.GetAudioFileResponse} returns this
 */
proto.ondewo.vtsi.GetAudioFileResponse.prototype.setAudio = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.GetFullConversationAudioFileRequest.repeatedFields_ = [2];



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
proto.ondewo.vtsi.GetFullConversationAudioFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.GetFullConversationAudioFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.GetFullConversationAudioFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetFullConversationAudioFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    objectNamesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    minioConfig: (f = msg.getMinioConfig()) && proto.ondewo.vtsi.MinioConfig.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.vtsi.GetFullConversationAudioFileRequest}
 */
proto.ondewo.vtsi.GetFullConversationAudioFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.GetFullConversationAudioFileRequest;
  return proto.ondewo.vtsi.GetFullConversationAudioFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.GetFullConversationAudioFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.GetFullConversationAudioFileRequest}
 */
proto.ondewo.vtsi.GetFullConversationAudioFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addObjectNames(value);
      break;
    case 3:
      var value = new proto.ondewo.vtsi.MinioConfig;
      reader.readMessage(value,proto.ondewo.vtsi.MinioConfig.deserializeBinaryFromReader);
      msg.setMinioConfig(value);
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
proto.ondewo.vtsi.GetFullConversationAudioFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.GetFullConversationAudioFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.GetFullConversationAudioFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetFullConversationAudioFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getObjectNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getMinioConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.vtsi.MinioConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string bucket_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.GetFullConversationAudioFileRequest.prototype.getBucketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.GetFullConversationAudioFileRequest} returns this
 */
proto.ondewo.vtsi.GetFullConversationAudioFileRequest.prototype.setBucketName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string object_names = 2;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.GetFullConversationAudioFileRequest.prototype.getObjectNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.GetFullConversationAudioFileRequest} returns this
 */
proto.ondewo.vtsi.GetFullConversationAudioFileRequest.prototype.setObjectNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.GetFullConversationAudioFileRequest} returns this
 */
proto.ondewo.vtsi.GetFullConversationAudioFileRequest.prototype.addObjectNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.GetFullConversationAudioFileRequest} returns this
 */
proto.ondewo.vtsi.GetFullConversationAudioFileRequest.prototype.clearObjectNamesList = function() {
  return this.setObjectNamesList([]);
};


/**
 * optional MinioConfig minio_config = 3;
 * @return {?proto.ondewo.vtsi.MinioConfig}
 */
proto.ondewo.vtsi.GetFullConversationAudioFileRequest.prototype.getMinioConfig = function() {
  return /** @type{?proto.ondewo.vtsi.MinioConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.vtsi.MinioConfig, 3));
};


/**
 * @param {?proto.ondewo.vtsi.MinioConfig|undefined} value
 * @return {!proto.ondewo.vtsi.GetFullConversationAudioFileRequest} returns this
*/
proto.ondewo.vtsi.GetFullConversationAudioFileRequest.prototype.setMinioConfig = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.GetFullConversationAudioFileRequest} returns this
 */
proto.ondewo.vtsi.GetFullConversationAudioFileRequest.prototype.clearMinioConfig = function() {
  return this.setMinioConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.GetFullConversationAudioFileRequest.prototype.hasMinioConfig = function() {
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
proto.ondewo.vtsi.GetFullConversationAudioFileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.vtsi.GetFullConversationAudioFileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.vtsi.GetFullConversationAudioFileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetFullConversationAudioFileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    audio: msg.getAudio_asB64()
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
 * @return {!proto.ondewo.vtsi.GetFullConversationAudioFileResponse}
 */
proto.ondewo.vtsi.GetFullConversationAudioFileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.vtsi.GetFullConversationAudioFileResponse;
  return proto.ondewo.vtsi.GetFullConversationAudioFileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.GetFullConversationAudioFileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.GetFullConversationAudioFileResponse}
 */
proto.ondewo.vtsi.GetFullConversationAudioFileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAudio(value);
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
proto.ondewo.vtsi.GetFullConversationAudioFileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.vtsi.GetFullConversationAudioFileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.GetFullConversationAudioFileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetFullConversationAudioFileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudio_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes audio = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ondewo.vtsi.GetFullConversationAudioFileResponse.prototype.getAudio = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes audio = 1;
 * This is a type-conversion wrapper around `getAudio()`
 * @return {string}
 */
proto.ondewo.vtsi.GetFullConversationAudioFileResponse.prototype.getAudio_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAudio()));
};


/**
 * optional bytes audio = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAudio()`
 * @return {!Uint8Array}
 */
proto.ondewo.vtsi.GetFullConversationAudioFileResponse.prototype.getAudio_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAudio()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ondewo.vtsi.GetFullConversationAudioFileResponse} returns this
 */
proto.ondewo.vtsi.GetFullConversationAudioFileResponse.prototype.setAudio = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.ondewo.vtsi.VoipCallInfoView = {
  INFO_VIEW_SHALLOW: 0,
  INFO_VIEW_FULL: 1
};

/**
 * @enum {number}
 */
proto.ondewo.vtsi.CallType = {
  BOTH: 0,
  LISTENER: 1,
  CALLER: 2
};

goog.object.extend(exports, proto.ondewo.vtsi);
