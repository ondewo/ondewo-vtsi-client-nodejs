// source: ondewo/vtsi/calls.proto
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
var global = function () {
	if (this) {
		return this;
	}
	if (typeof window !== 'undefined') {
		return window;
	}
	if (typeof global !== 'undefined') {
		return global;
	}
	if (typeof self !== 'undefined') {
		return self;
	}
	return Function('return this')();
}.call(null);

var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var ondewo_nlu_context_pb = require('../../ondewo/nlu/context_pb.js');
goog.object.extend(proto, ondewo_nlu_context_pb);
var ondewo_nlu_intent_pb = require('../../ondewo/nlu/intent_pb.js');
goog.object.extend(proto, ondewo_nlu_intent_pb);
var ondewo_s2t_speech$to$text_pb = require('../../ondewo/s2t/speech-to-text_pb.js');
goog.object.extend(proto, ondewo_s2t_speech$to$text_pb);
var ondewo_t2s_text$to$speech_pb = require('../../ondewo/t2s/text-to-speech_pb.js');
goog.object.extend(proto, ondewo_t2s_text$to$speech_pb);
var ondewo_sip_sip_pb = require('../../ondewo/sip/sip_pb.js');
goog.object.extend(proto, ondewo_sip_sip_pb);
goog.exportSymbol('proto.ondewo.vtsi.AllServicesStatuses', null, global);
goog.exportSymbol('proto.ondewo.vtsi.AsteriskConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.AudioObjectStorageConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.BaseServiceConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.Call', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CallFilter', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CallStatus', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CallType', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CallView', null, global);
goog.exportSymbol('proto.ondewo.vtsi.Caller', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CommonServicesConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.Credentials', null, global);
goog.exportSymbol('proto.ondewo.vtsi.CsiVtsiConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.DeleteCallerRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.DeleteCallerResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.DeleteCallersRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.DeleteCallersResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.DeleteListenerRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.DeleteListenerResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.DeleteListenersRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.DeleteListenersResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.GetCallRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.GetCallerRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.GetListenerRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.ListCallersRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.ListCallersResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.ListCallsRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.ListCallsResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.ListListenersRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.ListListenersResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.Listener', null, global);
goog.exportSymbol('proto.ondewo.vtsi.MessageBrokerConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.MessageBrokerConfig.MessageBrokerConfigCase', null, global);
goog.exportSymbol('proto.ondewo.vtsi.MessageBrokerServicesActivationConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.NluVtsiCallbacks', null, global);
goog.exportSymbol('proto.ondewo.vtsi.NluVtsiConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.NluVtsiConfig.AuthenticationCase', null, global);
goog.exportSymbol('proto.ondewo.vtsi.RabbitMqConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.S2tVtsiCallbacks', null, global);
goog.exportSymbol('proto.ondewo.vtsi.S2tVtsiConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.ScheduledCaller', null, global);
goog.exportSymbol('proto.ondewo.vtsi.ServiceStatus', null, global);
goog.exportSymbol('proto.ondewo.vtsi.SipBaseConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.SipCallerConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StartCallerRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StartCallerResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StartCallersRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StartCallersResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StartListenerRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StartListenerResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StartListenersRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StartListenersResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StartScheduledCallerRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StartScheduledCallerResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StartScheduledCallersRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StartScheduledCallersResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StopAllCallsRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StopCallRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StopCallResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StopCallerRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StopCallerResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StopCallersRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StopCallersResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StopCallsRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StopCallsResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StopListenerRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StopListenerResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StopListenersRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.StopListenersResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.T2sVtsiCallbacks', null, global);
goog.exportSymbol('proto.ondewo.vtsi.T2sVtsiConfig', null, global);
goog.exportSymbol('proto.ondewo.vtsi.TransferCallRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.TransferCallResponse', null, global);
goog.exportSymbol('proto.ondewo.vtsi.TransferCallsRequest', null, global);
goog.exportSymbol('proto.ondewo.vtsi.TransferCallsResponse', null, global);
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
proto.ondewo.vtsi.BaseServiceConfig = function (opt_data) {
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
proto.ondewo.vtsi.Credentials = function (opt_data) {
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
proto.ondewo.vtsi.NluVtsiConfig = function (opt_data) {
	jspb.Message.initialize(
		this,
		opt_data,
		0,
		-1,
		proto.ondewo.vtsi.NluVtsiConfig.repeatedFields_,
		proto.ondewo.vtsi.NluVtsiConfig.oneofGroups_
	);
};
goog.inherits(proto.ondewo.vtsi.NluVtsiConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.NluVtsiConfig.displayName = 'proto.ondewo.vtsi.NluVtsiConfig';
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
proto.ondewo.vtsi.T2sVtsiConfig = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.T2sVtsiConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.T2sVtsiConfig.displayName = 'proto.ondewo.vtsi.T2sVtsiConfig';
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
proto.ondewo.vtsi.S2tVtsiConfig = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.S2tVtsiConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.S2tVtsiConfig.displayName = 'proto.ondewo.vtsi.S2tVtsiConfig';
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
proto.ondewo.vtsi.AsteriskConfig = function (opt_data) {
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
proto.ondewo.vtsi.CommonServicesConfig = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.CommonServicesConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.CommonServicesConfig.displayName = 'proto.ondewo.vtsi.CommonServicesConfig';
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
proto.ondewo.vtsi.SipBaseConfig = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.SipBaseConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.SipBaseConfig.displayName = 'proto.ondewo.vtsi.SipBaseConfig';
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
proto.ondewo.vtsi.SipCallerConfig = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.SipCallerConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.SipCallerConfig.displayName = 'proto.ondewo.vtsi.SipCallerConfig';
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
proto.ondewo.vtsi.CsiVtsiConfig = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.CsiVtsiConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.CsiVtsiConfig.displayName = 'proto.ondewo.vtsi.CsiVtsiConfig';
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
proto.ondewo.vtsi.AudioObjectStorageConfig = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
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
proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.displayName =
		'proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig';
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
proto.ondewo.vtsi.MessageBrokerConfig = function (opt_data) {
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
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.MessageBrokerServicesActivationConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.displayName =
		'proto.ondewo.vtsi.MessageBrokerServicesActivationConfig';
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
proto.ondewo.vtsi.RabbitMqConfig = function (opt_data) {
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
proto.ondewo.vtsi.S2tVtsiCallbacks = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.S2tVtsiCallbacks.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.S2tVtsiCallbacks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.S2tVtsiCallbacks.displayName = 'proto.ondewo.vtsi.S2tVtsiCallbacks';
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
proto.ondewo.vtsi.NluVtsiCallbacks = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.NluVtsiCallbacks.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.NluVtsiCallbacks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.NluVtsiCallbacks.displayName = 'proto.ondewo.vtsi.NluVtsiCallbacks';
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
proto.ondewo.vtsi.T2sVtsiCallbacks = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.T2sVtsiCallbacks.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.T2sVtsiCallbacks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.T2sVtsiCallbacks.displayName = 'proto.ondewo.vtsi.T2sVtsiCallbacks';
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
proto.ondewo.vtsi.Listener = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.Listener, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.Listener.displayName = 'proto.ondewo.vtsi.Listener';
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
proto.ondewo.vtsi.Caller = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.Caller, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.Caller.displayName = 'proto.ondewo.vtsi.Caller';
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
proto.ondewo.vtsi.StartListenerRequest = function (opt_data) {
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
proto.ondewo.vtsi.StartListenerResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.StartListenerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.StartListenerResponse.displayName = 'proto.ondewo.vtsi.StartListenerResponse';
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
proto.ondewo.vtsi.StartListenersRequest = function (opt_data) {
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
proto.ondewo.vtsi.StartListenersResponse = function (opt_data) {
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
proto.ondewo.vtsi.StartCallerRequest = function (opt_data) {
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
proto.ondewo.vtsi.StartCallerResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.StartCallerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.StartCallerResponse.displayName = 'proto.ondewo.vtsi.StartCallerResponse';
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
proto.ondewo.vtsi.StartCallersRequest = function (opt_data) {
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
proto.ondewo.vtsi.StartCallersResponse = function (opt_data) {
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
proto.ondewo.vtsi.ListCallersRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.ListCallersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.ListCallersRequest.displayName = 'proto.ondewo.vtsi.ListCallersRequest';
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
proto.ondewo.vtsi.ListCallersResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.ListCallersResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.ListCallersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.ListCallersResponse.displayName = 'proto.ondewo.vtsi.ListCallersResponse';
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
proto.ondewo.vtsi.GetCallerRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.GetCallerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.GetCallerRequest.displayName = 'proto.ondewo.vtsi.GetCallerRequest';
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
proto.ondewo.vtsi.ListListenersRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.ListListenersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.ListListenersRequest.displayName = 'proto.ondewo.vtsi.ListListenersRequest';
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
proto.ondewo.vtsi.ListListenersResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.ListListenersResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.ListListenersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.ListListenersResponse.displayName = 'proto.ondewo.vtsi.ListListenersResponse';
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
proto.ondewo.vtsi.GetListenerRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.GetListenerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.GetListenerRequest.displayName = 'proto.ondewo.vtsi.GetListenerRequest';
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
proto.ondewo.vtsi.StopListenerRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.StopListenerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.StopListenerRequest.displayName = 'proto.ondewo.vtsi.StopListenerRequest';
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
proto.ondewo.vtsi.StopListenerResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.StopListenerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.StopListenerResponse.displayName = 'proto.ondewo.vtsi.StopListenerResponse';
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
proto.ondewo.vtsi.StopListenersRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.StopListenersRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.StopListenersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.StopListenersRequest.displayName = 'proto.ondewo.vtsi.StopListenersRequest';
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
proto.ondewo.vtsi.StopListenersResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.StopListenersResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.StopListenersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.StopListenersResponse.displayName = 'proto.ondewo.vtsi.StopListenersResponse';
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
proto.ondewo.vtsi.StopCallerRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.StopCallerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.StopCallerRequest.displayName = 'proto.ondewo.vtsi.StopCallerRequest';
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
proto.ondewo.vtsi.StopCallerResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.StopCallerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.StopCallerResponse.displayName = 'proto.ondewo.vtsi.StopCallerResponse';
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
proto.ondewo.vtsi.StopCallersRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.StopCallersRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.StopCallersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.StopCallersRequest.displayName = 'proto.ondewo.vtsi.StopCallersRequest';
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
proto.ondewo.vtsi.StopCallersResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.StopCallersResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.StopCallersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.StopCallersResponse.displayName = 'proto.ondewo.vtsi.StopCallersResponse';
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
proto.ondewo.vtsi.DeleteListenerRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.DeleteListenerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.DeleteListenerRequest.displayName = 'proto.ondewo.vtsi.DeleteListenerRequest';
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
proto.ondewo.vtsi.DeleteListenerResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.DeleteListenerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.DeleteListenerResponse.displayName = 'proto.ondewo.vtsi.DeleteListenerResponse';
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
proto.ondewo.vtsi.DeleteListenersRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.DeleteListenersRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.DeleteListenersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.DeleteListenersRequest.displayName = 'proto.ondewo.vtsi.DeleteListenersRequest';
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
proto.ondewo.vtsi.DeleteListenersResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.DeleteListenersResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.DeleteListenersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.DeleteListenersResponse.displayName = 'proto.ondewo.vtsi.DeleteListenersResponse';
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
proto.ondewo.vtsi.DeleteCallerRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.DeleteCallerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.DeleteCallerRequest.displayName = 'proto.ondewo.vtsi.DeleteCallerRequest';
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
proto.ondewo.vtsi.DeleteCallerResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.DeleteCallerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.DeleteCallerResponse.displayName = 'proto.ondewo.vtsi.DeleteCallerResponse';
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
proto.ondewo.vtsi.DeleteCallersRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.DeleteCallersRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.DeleteCallersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.DeleteCallersRequest.displayName = 'proto.ondewo.vtsi.DeleteCallersRequest';
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
proto.ondewo.vtsi.DeleteCallersResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.DeleteCallersResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.DeleteCallersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.DeleteCallersResponse.displayName = 'proto.ondewo.vtsi.DeleteCallersResponse';
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
proto.ondewo.vtsi.StartScheduledCallerRequest = function (opt_data) {
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
proto.ondewo.vtsi.StartScheduledCallersRequest = function (opt_data) {
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
proto.ondewo.vtsi.StartScheduledCallersResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.StartScheduledCallersResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.StartScheduledCallersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.StartScheduledCallersResponse.displayName = 'proto.ondewo.vtsi.StartScheduledCallersResponse';
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
proto.ondewo.vtsi.StartScheduledCallerResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.StartScheduledCallerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.StartScheduledCallerResponse.displayName = 'proto.ondewo.vtsi.StartScheduledCallerResponse';
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
proto.ondewo.vtsi.ScheduledCaller = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.ScheduledCaller, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.ScheduledCaller.displayName = 'proto.ondewo.vtsi.ScheduledCaller';
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
proto.ondewo.vtsi.StopCallRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.StopCallRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.StopCallRequest.displayName = 'proto.ondewo.vtsi.StopCallRequest';
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
proto.ondewo.vtsi.StopCallResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.StopCallResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.StopCallResponse.displayName = 'proto.ondewo.vtsi.StopCallResponse';
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
proto.ondewo.vtsi.StopCallsRequest = function (opt_data) {
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
proto.ondewo.vtsi.StopCallsResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.StopCallsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.StopCallsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.StopCallsResponse.displayName = 'proto.ondewo.vtsi.StopCallsResponse';
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
proto.ondewo.vtsi.StopAllCallsRequest = function (opt_data) {
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
proto.ondewo.vtsi.TransferCallRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.TransferCallRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.TransferCallRequest.displayName = 'proto.ondewo.vtsi.TransferCallRequest';
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
proto.ondewo.vtsi.TransferCallResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.TransferCallResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.TransferCallResponse.displayName = 'proto.ondewo.vtsi.TransferCallResponse';
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
proto.ondewo.vtsi.TransferCallsRequest = function (opt_data) {
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
proto.ondewo.vtsi.TransferCallsResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.TransferCallsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.TransferCallsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.TransferCallsResponse.displayName = 'proto.ondewo.vtsi.TransferCallsResponse';
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
proto.ondewo.vtsi.GetCallRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.GetCallRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.GetCallRequest.displayName = 'proto.ondewo.vtsi.GetCallRequest';
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
proto.ondewo.vtsi.Call = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.Call, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.Call.displayName = 'proto.ondewo.vtsi.Call';
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
proto.ondewo.vtsi.CallFilter = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.CallFilter.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.CallFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.CallFilter.displayName = 'proto.ondewo.vtsi.CallFilter';
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
proto.ondewo.vtsi.ListCallsRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.vtsi.ListCallsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.ListCallsRequest.displayName = 'proto.ondewo.vtsi.ListCallsRequest';
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
proto.ondewo.vtsi.ListCallsResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.vtsi.ListCallsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.vtsi.ListCallsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.vtsi.ListCallsResponse.displayName = 'proto.ondewo.vtsi.ListCallsResponse';
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
proto.ondewo.vtsi.AllServicesStatuses = function (opt_data) {
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
proto.ondewo.vtsi.ServiceStatus = function (opt_data) {
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
	proto.ondewo.vtsi.BaseServiceConfig.prototype.toObject = function (opt_includeInstance) {
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
	proto.ondewo.vtsi.BaseServiceConfig.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				host: jspb.Message.getFieldWithDefault(msg, 1, ''),
				port: jspb.Message.getFieldWithDefault(msg, 2, 0),
				grpcCert: jspb.Message.getFieldWithDefault(msg, 3, '')
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
proto.ondewo.vtsi.BaseServiceConfig.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.BaseServiceConfig();
	return proto.ondewo.vtsi.BaseServiceConfig.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.BaseServiceConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.BaseServiceConfig}
 */
proto.ondewo.vtsi.BaseServiceConfig.deserializeBinaryFromReader = function (msg, reader) {
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
proto.ondewo.vtsi.BaseServiceConfig.prototype.serializeBinary = function () {
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
proto.ondewo.vtsi.BaseServiceConfig.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getHost();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getPort();
	if (f !== 0) {
		writer.writeInt32(2, f);
	}
	f = message.getGrpcCert();
	if (f.length > 0) {
		writer.writeString(3, f);
	}
};

/**
 * optional string host = 1;
 * @return {string}
 */
proto.ondewo.vtsi.BaseServiceConfig.prototype.getHost = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.BaseServiceConfig} returns this
 */
proto.ondewo.vtsi.BaseServiceConfig.prototype.setHost = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional int32 port = 2;
 * @return {number}
 */
proto.ondewo.vtsi.BaseServiceConfig.prototype.getPort = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.BaseServiceConfig} returns this
 */
proto.ondewo.vtsi.BaseServiceConfig.prototype.setPort = function (value) {
	return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional string grpc_cert = 3;
 * @return {string}
 */
proto.ondewo.vtsi.BaseServiceConfig.prototype.getGrpcCert = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.BaseServiceConfig} returns this
 */
proto.ondewo.vtsi.BaseServiceConfig.prototype.setGrpcCert = function (value) {
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
	proto.ondewo.vtsi.Credentials.prototype.toObject = function (opt_includeInstance) {
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
	proto.ondewo.vtsi.Credentials.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				accountName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				password: jspb.Message.getFieldWithDefault(msg, 2, '')
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
proto.ondewo.vtsi.Credentials.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.Credentials();
	return proto.ondewo.vtsi.Credentials.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.Credentials} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.Credentials}
 */
proto.ondewo.vtsi.Credentials.deserializeBinaryFromReader = function (msg, reader) {
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
proto.ondewo.vtsi.Credentials.prototype.serializeBinary = function () {
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
proto.ondewo.vtsi.Credentials.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getAccountName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getPassword();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
};

/**
 * optional string account_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.Credentials.prototype.getAccountName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.Credentials} returns this
 */
proto.ondewo.vtsi.Credentials.prototype.setAccountName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string password = 2;
 * @return {string}
 */
proto.ondewo.vtsi.Credentials.prototype.getPassword = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.Credentials} returns this
 */
proto.ondewo.vtsi.Credentials.prototype.setPassword = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.NluVtsiConfig.repeatedFields_ = [7];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.vtsi.NluVtsiConfig.oneofGroups_ = [[2, 3]];

/**
 * @enum {number}
 */
proto.ondewo.vtsi.NluVtsiConfig.AuthenticationCase = {
	AUTHENTICATION_NOT_SET: 0,
	CREDENTIALS: 2,
	AUTH_TOKEN: 3
};

/**
 * @return {proto.ondewo.vtsi.NluVtsiConfig.AuthenticationCase}
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.getAuthenticationCase = function () {
	return /** @type {proto.ondewo.vtsi.NluVtsiConfig.AuthenticationCase} */ (
		jspb.Message.computeOneofCase(this, proto.ondewo.vtsi.NluVtsiConfig.oneofGroups_[0])
	);
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
	proto.ondewo.vtsi.NluVtsiConfig.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.NluVtsiConfig.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.NluVtsiConfig} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.NluVtsiConfig.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				nluBaseConfig: (f = msg.getNluBaseConfig()) && proto.ondewo.vtsi.BaseServiceConfig.toObject(includeInstance, f),
				credentials: (f = msg.getCredentials()) && proto.ondewo.vtsi.Credentials.toObject(includeInstance, f),
				authToken: jspb.Message.getFieldWithDefault(msg, 3, ''),
				agentName: jspb.Message.getFieldWithDefault(msg, 4, ''),
				languageCode: jspb.Message.getFieldWithDefault(msg, 5, ''),
				initialIntent: jspb.Message.getFieldWithDefault(msg, 6, ''),
				contextsList: jspb.Message.toObjectList(
					msg.getContextsList(),
					ondewo_nlu_context_pb.Context.toObject,
					includeInstance
				),
				httpBasicAuthToken: jspb.Message.getFieldWithDefault(msg, 8, ''),
				platform: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.ondewo.vtsi.NluVtsiConfig}
 */
proto.ondewo.vtsi.NluVtsiConfig.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.NluVtsiConfig();
	return proto.ondewo.vtsi.NluVtsiConfig.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.NluVtsiConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.NluVtsiConfig}
 */
proto.ondewo.vtsi.NluVtsiConfig.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new proto.ondewo.vtsi.BaseServiceConfig();
				reader.readMessage(value, proto.ondewo.vtsi.BaseServiceConfig.deserializeBinaryFromReader);
				msg.setNluBaseConfig(value);
				break;
			case 2:
				var value = new proto.ondewo.vtsi.Credentials();
				reader.readMessage(value, proto.ondewo.vtsi.Credentials.deserializeBinaryFromReader);
				msg.setCredentials(value);
				break;
			case 3:
				var value = /** @type {string} */ (reader.readString());
				msg.setAuthToken(value);
				break;
			case 4:
				var value = /** @type {string} */ (reader.readString());
				msg.setAgentName(value);
				break;
			case 5:
				var value = /** @type {string} */ (reader.readString());
				msg.setLanguageCode(value);
				break;
			case 6:
				var value = /** @type {string} */ (reader.readString());
				msg.setInitialIntent(value);
				break;
			case 7:
				var value = new ondewo_nlu_context_pb.Context();
				reader.readMessage(value, ondewo_nlu_context_pb.Context.deserializeBinaryFromReader);
				msg.addContexts(value);
				break;
			case 8:
				var value = /** @type {string} */ (reader.readString());
				msg.setHttpBasicAuthToken(value);
				break;
			case 9:
				var value = /** @type {!proto.ondewo.nlu.Intent.Message.Platform} */ (reader.readEnum());
				msg.setPlatform(value);
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
proto.ondewo.vtsi.NluVtsiConfig.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.NluVtsiConfig.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.NluVtsiConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.NluVtsiConfig.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getNluBaseConfig();
	if (f != null) {
		writer.writeMessage(1, f, proto.ondewo.vtsi.BaseServiceConfig.serializeBinaryToWriter);
	}
	f = message.getCredentials();
	if (f != null) {
		writer.writeMessage(2, f, proto.ondewo.vtsi.Credentials.serializeBinaryToWriter);
	}
	f = /** @type {string} */ (jspb.Message.getField(message, 3));
	if (f != null) {
		writer.writeString(3, f);
	}
	f = message.getAgentName();
	if (f.length > 0) {
		writer.writeString(4, f);
	}
	f = message.getLanguageCode();
	if (f.length > 0) {
		writer.writeString(5, f);
	}
	f = message.getInitialIntent();
	if (f.length > 0) {
		writer.writeString(6, f);
	}
	f = message.getContextsList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(7, f, ondewo_nlu_context_pb.Context.serializeBinaryToWriter);
	}
	f = message.getHttpBasicAuthToken();
	if (f.length > 0) {
		writer.writeString(8, f);
	}
	f = /** @type {!proto.ondewo.nlu.Intent.Message.Platform} */ (jspb.Message.getField(message, 9));
	if (f != null) {
		writer.writeEnum(9, f);
	}
};

/**
 * optional BaseServiceConfig nlu_base_config = 1;
 * @return {?proto.ondewo.vtsi.BaseServiceConfig}
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.getNluBaseConfig = function () {
	return /** @type{?proto.ondewo.vtsi.BaseServiceConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.BaseServiceConfig, 1)
	);
};

/**
 * @param {?proto.ondewo.vtsi.BaseServiceConfig|undefined} value
 * @return {!proto.ondewo.vtsi.NluVtsiConfig} returns this
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.setNluBaseConfig = function (value) {
	return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.NluVtsiConfig} returns this
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.clearNluBaseConfig = function () {
	return this.setNluBaseConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.hasNluBaseConfig = function () {
	return jspb.Message.getField(this, 1) != null;
};

/**
 * optional Credentials credentials = 2;
 * @return {?proto.ondewo.vtsi.Credentials}
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.getCredentials = function () {
	return /** @type{?proto.ondewo.vtsi.Credentials} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.Credentials, 2)
	);
};

/**
 * @param {?proto.ondewo.vtsi.Credentials|undefined} value
 * @return {!proto.ondewo.vtsi.NluVtsiConfig} returns this
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.setCredentials = function (value) {
	return jspb.Message.setOneofWrapperField(this, 2, proto.ondewo.vtsi.NluVtsiConfig.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.NluVtsiConfig} returns this
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.clearCredentials = function () {
	return this.setCredentials(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.hasCredentials = function () {
	return jspb.Message.getField(this, 2) != null;
};

/**
 * optional string auth_token = 3;
 * @return {string}
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.getAuthToken = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.NluVtsiConfig} returns this
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.setAuthToken = function (value) {
	return jspb.Message.setOneofField(this, 3, proto.ondewo.vtsi.NluVtsiConfig.oneofGroups_[0], value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.NluVtsiConfig} returns this
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.clearAuthToken = function () {
	return jspb.Message.setOneofField(this, 3, proto.ondewo.vtsi.NluVtsiConfig.oneofGroups_[0], undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.hasAuthToken = function () {
	return jspb.Message.getField(this, 3) != null;
};

/**
 * optional string agent_name = 4;
 * @return {string}
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.getAgentName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.NluVtsiConfig} returns this
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.setAgentName = function (value) {
	return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * optional string language_code = 5;
 * @return {string}
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.getLanguageCode = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.NluVtsiConfig} returns this
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.setLanguageCode = function (value) {
	return jspb.Message.setProto3StringField(this, 5, value);
};

/**
 * optional string initial_intent = 6;
 * @return {string}
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.getInitialIntent = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.NluVtsiConfig} returns this
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.setInitialIntent = function (value) {
	return jspb.Message.setProto3StringField(this, 6, value);
};

/**
 * repeated ondewo.nlu.Context contexts = 7;
 * @return {!Array<!proto.ondewo.nlu.Context>}
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.getContextsList = function () {
	return /** @type{!Array<!proto.ondewo.nlu.Context>} */ (
		jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_context_pb.Context, 7)
	);
};

/**
 * @param {!Array<!proto.ondewo.nlu.Context>} value
 * @return {!proto.ondewo.vtsi.NluVtsiConfig} returns this
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.setContextsList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 7, value);
};

/**
 * @param {!proto.ondewo.nlu.Context=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Context}
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.addContexts = function (opt_value, opt_index) {
	return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.ondewo.nlu.Context, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.NluVtsiConfig} returns this
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.clearContextsList = function () {
	return this.setContextsList([]);
};

/**
 * optional string http_basic_auth_token = 8;
 * @return {string}
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.getHttpBasicAuthToken = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.NluVtsiConfig} returns this
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.setHttpBasicAuthToken = function (value) {
	return jspb.Message.setProto3StringField(this, 8, value);
};

/**
 * optional ondewo.nlu.Intent.Message.Platform platform = 9;
 * @return {!proto.ondewo.nlu.Intent.Message.Platform}
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.getPlatform = function () {
	return /** @type {!proto.ondewo.nlu.Intent.Message.Platform} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};

/**
 * @param {!proto.ondewo.nlu.Intent.Message.Platform} value
 * @return {!proto.ondewo.vtsi.NluVtsiConfig} returns this
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.setPlatform = function (value) {
	return jspb.Message.setField(this, 9, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.NluVtsiConfig} returns this
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.clearPlatform = function () {
	return jspb.Message.setField(this, 9, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.NluVtsiConfig.prototype.hasPlatform = function () {
	return jspb.Message.getField(this, 9) != null;
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
	proto.ondewo.vtsi.T2sVtsiConfig.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.T2sVtsiConfig.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.T2sVtsiConfig} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.T2sVtsiConfig.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				t2sBaseConfig: (f = msg.getT2sBaseConfig()) && proto.ondewo.vtsi.BaseServiceConfig.toObject(includeInstance, f),
				t2sRequestConfig:
					(f = msg.getT2sRequestConfig()) && ondewo_t2s_text$to$speech_pb.RequestConfig.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.vtsi.T2sVtsiConfig}
 */
proto.ondewo.vtsi.T2sVtsiConfig.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.T2sVtsiConfig();
	return proto.ondewo.vtsi.T2sVtsiConfig.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.T2sVtsiConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.T2sVtsiConfig}
 */
proto.ondewo.vtsi.T2sVtsiConfig.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new proto.ondewo.vtsi.BaseServiceConfig();
				reader.readMessage(value, proto.ondewo.vtsi.BaseServiceConfig.deserializeBinaryFromReader);
				msg.setT2sBaseConfig(value);
				break;
			case 2:
				var value = new ondewo_t2s_text$to$speech_pb.RequestConfig();
				reader.readMessage(value, ondewo_t2s_text$to$speech_pb.RequestConfig.deserializeBinaryFromReader);
				msg.setT2sRequestConfig(value);
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
proto.ondewo.vtsi.T2sVtsiConfig.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.T2sVtsiConfig.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.T2sVtsiConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.T2sVtsiConfig.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getT2sBaseConfig();
	if (f != null) {
		writer.writeMessage(1, f, proto.ondewo.vtsi.BaseServiceConfig.serializeBinaryToWriter);
	}
	f = message.getT2sRequestConfig();
	if (f != null) {
		writer.writeMessage(2, f, ondewo_t2s_text$to$speech_pb.RequestConfig.serializeBinaryToWriter);
	}
};

/**
 * optional BaseServiceConfig t2s_base_config = 1;
 * @return {?proto.ondewo.vtsi.BaseServiceConfig}
 */
proto.ondewo.vtsi.T2sVtsiConfig.prototype.getT2sBaseConfig = function () {
	return /** @type{?proto.ondewo.vtsi.BaseServiceConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.BaseServiceConfig, 1)
	);
};

/**
 * @param {?proto.ondewo.vtsi.BaseServiceConfig|undefined} value
 * @return {!proto.ondewo.vtsi.T2sVtsiConfig} returns this
 */
proto.ondewo.vtsi.T2sVtsiConfig.prototype.setT2sBaseConfig = function (value) {
	return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.T2sVtsiConfig} returns this
 */
proto.ondewo.vtsi.T2sVtsiConfig.prototype.clearT2sBaseConfig = function () {
	return this.setT2sBaseConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.T2sVtsiConfig.prototype.hasT2sBaseConfig = function () {
	return jspb.Message.getField(this, 1) != null;
};

/**
 * optional ondewo.t2s.RequestConfig t2s_request_config = 2;
 * @return {?proto.ondewo.t2s.RequestConfig}
 */
proto.ondewo.vtsi.T2sVtsiConfig.prototype.getT2sRequestConfig = function () {
	return /** @type{?proto.ondewo.t2s.RequestConfig} */ (
		jspb.Message.getWrapperField(this, ondewo_t2s_text$to$speech_pb.RequestConfig, 2)
	);
};

/**
 * @param {?proto.ondewo.t2s.RequestConfig|undefined} value
 * @return {!proto.ondewo.vtsi.T2sVtsiConfig} returns this
 */
proto.ondewo.vtsi.T2sVtsiConfig.prototype.setT2sRequestConfig = function (value) {
	return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.T2sVtsiConfig} returns this
 */
proto.ondewo.vtsi.T2sVtsiConfig.prototype.clearT2sRequestConfig = function () {
	return this.setT2sRequestConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.T2sVtsiConfig.prototype.hasT2sRequestConfig = function () {
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
	proto.ondewo.vtsi.S2tVtsiConfig.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.S2tVtsiConfig.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.S2tVtsiConfig} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.S2tVtsiConfig.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				s2tBaseConfig: (f = msg.getS2tBaseConfig()) && proto.ondewo.vtsi.BaseServiceConfig.toObject(includeInstance, f),
				s2tTranscribeRequestConfig:
					(f = msg.getS2tTranscribeRequestConfig()) &&
					ondewo_s2t_speech$to$text_pb.TranscribeRequestConfig.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.vtsi.S2tVtsiConfig}
 */
proto.ondewo.vtsi.S2tVtsiConfig.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.S2tVtsiConfig();
	return proto.ondewo.vtsi.S2tVtsiConfig.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.S2tVtsiConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.S2tVtsiConfig}
 */
proto.ondewo.vtsi.S2tVtsiConfig.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new proto.ondewo.vtsi.BaseServiceConfig();
				reader.readMessage(value, proto.ondewo.vtsi.BaseServiceConfig.deserializeBinaryFromReader);
				msg.setS2tBaseConfig(value);
				break;
			case 2:
				var value = new ondewo_s2t_speech$to$text_pb.TranscribeRequestConfig();
				reader.readMessage(value, ondewo_s2t_speech$to$text_pb.TranscribeRequestConfig.deserializeBinaryFromReader);
				msg.setS2tTranscribeRequestConfig(value);
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
proto.ondewo.vtsi.S2tVtsiConfig.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.S2tVtsiConfig.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.S2tVtsiConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.S2tVtsiConfig.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getS2tBaseConfig();
	if (f != null) {
		writer.writeMessage(1, f, proto.ondewo.vtsi.BaseServiceConfig.serializeBinaryToWriter);
	}
	f = message.getS2tTranscribeRequestConfig();
	if (f != null) {
		writer.writeMessage(2, f, ondewo_s2t_speech$to$text_pb.TranscribeRequestConfig.serializeBinaryToWriter);
	}
};

/**
 * optional BaseServiceConfig s2t_base_config = 1;
 * @return {?proto.ondewo.vtsi.BaseServiceConfig}
 */
proto.ondewo.vtsi.S2tVtsiConfig.prototype.getS2tBaseConfig = function () {
	return /** @type{?proto.ondewo.vtsi.BaseServiceConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.BaseServiceConfig, 1)
	);
};

/**
 * @param {?proto.ondewo.vtsi.BaseServiceConfig|undefined} value
 * @return {!proto.ondewo.vtsi.S2tVtsiConfig} returns this
 */
proto.ondewo.vtsi.S2tVtsiConfig.prototype.setS2tBaseConfig = function (value) {
	return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.S2tVtsiConfig} returns this
 */
proto.ondewo.vtsi.S2tVtsiConfig.prototype.clearS2tBaseConfig = function () {
	return this.setS2tBaseConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.S2tVtsiConfig.prototype.hasS2tBaseConfig = function () {
	return jspb.Message.getField(this, 1) != null;
};

/**
 * optional ondewo.s2t.TranscribeRequestConfig s2t_transcribe_request_config = 2;
 * @return {?proto.ondewo.s2t.TranscribeRequestConfig}
 */
proto.ondewo.vtsi.S2tVtsiConfig.prototype.getS2tTranscribeRequestConfig = function () {
	return /** @type{?proto.ondewo.s2t.TranscribeRequestConfig} */ (
		jspb.Message.getWrapperField(this, ondewo_s2t_speech$to$text_pb.TranscribeRequestConfig, 2)
	);
};

/**
 * @param {?proto.ondewo.s2t.TranscribeRequestConfig|undefined} value
 * @return {!proto.ondewo.vtsi.S2tVtsiConfig} returns this
 */
proto.ondewo.vtsi.S2tVtsiConfig.prototype.setS2tTranscribeRequestConfig = function (value) {
	return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.S2tVtsiConfig} returns this
 */
proto.ondewo.vtsi.S2tVtsiConfig.prototype.clearS2tTranscribeRequestConfig = function () {
	return this.setS2tTranscribeRequestConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.S2tVtsiConfig.prototype.hasS2tTranscribeRequestConfig = function () {
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
	proto.ondewo.vtsi.AsteriskConfig.prototype.toObject = function (opt_includeInstance) {
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
	proto.ondewo.vtsi.AsteriskConfig.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				asteriskBaseConfig:
					(f = msg.getAsteriskBaseConfig()) && proto.ondewo.vtsi.BaseServiceConfig.toObject(includeInstance, f)
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
proto.ondewo.vtsi.AsteriskConfig.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.AsteriskConfig();
	return proto.ondewo.vtsi.AsteriskConfig.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.AsteriskConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.AsteriskConfig}
 */
proto.ondewo.vtsi.AsteriskConfig.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new proto.ondewo.vtsi.BaseServiceConfig();
				reader.readMessage(value, proto.ondewo.vtsi.BaseServiceConfig.deserializeBinaryFromReader);
				msg.setAsteriskBaseConfig(value);
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
proto.ondewo.vtsi.AsteriskConfig.prototype.serializeBinary = function () {
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
proto.ondewo.vtsi.AsteriskConfig.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getAsteriskBaseConfig();
	if (f != null) {
		writer.writeMessage(1, f, proto.ondewo.vtsi.BaseServiceConfig.serializeBinaryToWriter);
	}
};

/**
 * optional BaseServiceConfig asterisk_base_config = 1;
 * @return {?proto.ondewo.vtsi.BaseServiceConfig}
 */
proto.ondewo.vtsi.AsteriskConfig.prototype.getAsteriskBaseConfig = function () {
	return /** @type{?proto.ondewo.vtsi.BaseServiceConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.BaseServiceConfig, 1)
	);
};

/**
 * @param {?proto.ondewo.vtsi.BaseServiceConfig|undefined} value
 * @return {!proto.ondewo.vtsi.AsteriskConfig} returns this
 */
proto.ondewo.vtsi.AsteriskConfig.prototype.setAsteriskBaseConfig = function (value) {
	return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.AsteriskConfig} returns this
 */
proto.ondewo.vtsi.AsteriskConfig.prototype.clearAsteriskBaseConfig = function () {
	return this.setAsteriskBaseConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.AsteriskConfig.prototype.hasAsteriskBaseConfig = function () {
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
	proto.ondewo.vtsi.CommonServicesConfig.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.CommonServicesConfig.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.CommonServicesConfig} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.CommonServicesConfig.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				s2tVtsiConfig: (f = msg.getS2tVtsiConfig()) && proto.ondewo.vtsi.S2tVtsiConfig.toObject(includeInstance, f),
				nluVtsiConfig: (f = msg.getNluVtsiConfig()) && proto.ondewo.vtsi.NluVtsiConfig.toObject(includeInstance, f),
				t2sVtsiConfig: (f = msg.getT2sVtsiConfig()) && proto.ondewo.vtsi.T2sVtsiConfig.toObject(includeInstance, f),
				csiVtsiConfig: (f = msg.getCsiVtsiConfig()) && proto.ondewo.vtsi.CsiVtsiConfig.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.vtsi.CommonServicesConfig}
 */
proto.ondewo.vtsi.CommonServicesConfig.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.CommonServicesConfig();
	return proto.ondewo.vtsi.CommonServicesConfig.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.CommonServicesConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.CommonServicesConfig}
 */
proto.ondewo.vtsi.CommonServicesConfig.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new proto.ondewo.vtsi.S2tVtsiConfig();
				reader.readMessage(value, proto.ondewo.vtsi.S2tVtsiConfig.deserializeBinaryFromReader);
				msg.setS2tVtsiConfig(value);
				break;
			case 2:
				var value = new proto.ondewo.vtsi.NluVtsiConfig();
				reader.readMessage(value, proto.ondewo.vtsi.NluVtsiConfig.deserializeBinaryFromReader);
				msg.setNluVtsiConfig(value);
				break;
			case 3:
				var value = new proto.ondewo.vtsi.T2sVtsiConfig();
				reader.readMessage(value, proto.ondewo.vtsi.T2sVtsiConfig.deserializeBinaryFromReader);
				msg.setT2sVtsiConfig(value);
				break;
			case 4:
				var value = new proto.ondewo.vtsi.CsiVtsiConfig();
				reader.readMessage(value, proto.ondewo.vtsi.CsiVtsiConfig.deserializeBinaryFromReader);
				msg.setCsiVtsiConfig(value);
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
proto.ondewo.vtsi.CommonServicesConfig.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.CommonServicesConfig.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.CommonServicesConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CommonServicesConfig.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getS2tVtsiConfig();
	if (f != null) {
		writer.writeMessage(1, f, proto.ondewo.vtsi.S2tVtsiConfig.serializeBinaryToWriter);
	}
	f = message.getNluVtsiConfig();
	if (f != null) {
		writer.writeMessage(2, f, proto.ondewo.vtsi.NluVtsiConfig.serializeBinaryToWriter);
	}
	f = message.getT2sVtsiConfig();
	if (f != null) {
		writer.writeMessage(3, f, proto.ondewo.vtsi.T2sVtsiConfig.serializeBinaryToWriter);
	}
	f = message.getCsiVtsiConfig();
	if (f != null) {
		writer.writeMessage(4, f, proto.ondewo.vtsi.CsiVtsiConfig.serializeBinaryToWriter);
	}
};

/**
 * optional S2tVtsiConfig s2t_vtsi_config = 1;
 * @return {?proto.ondewo.vtsi.S2tVtsiConfig}
 */
proto.ondewo.vtsi.CommonServicesConfig.prototype.getS2tVtsiConfig = function () {
	return /** @type{?proto.ondewo.vtsi.S2tVtsiConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.S2tVtsiConfig, 1)
	);
};

/**
 * @param {?proto.ondewo.vtsi.S2tVtsiConfig|undefined} value
 * @return {!proto.ondewo.vtsi.CommonServicesConfig} returns this
 */
proto.ondewo.vtsi.CommonServicesConfig.prototype.setS2tVtsiConfig = function (value) {
	return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CommonServicesConfig} returns this
 */
proto.ondewo.vtsi.CommonServicesConfig.prototype.clearS2tVtsiConfig = function () {
	return this.setS2tVtsiConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CommonServicesConfig.prototype.hasS2tVtsiConfig = function () {
	return jspb.Message.getField(this, 1) != null;
};

/**
 * optional NluVtsiConfig nlu_vtsi_config = 2;
 * @return {?proto.ondewo.vtsi.NluVtsiConfig}
 */
proto.ondewo.vtsi.CommonServicesConfig.prototype.getNluVtsiConfig = function () {
	return /** @type{?proto.ondewo.vtsi.NluVtsiConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.NluVtsiConfig, 2)
	);
};

/**
 * @param {?proto.ondewo.vtsi.NluVtsiConfig|undefined} value
 * @return {!proto.ondewo.vtsi.CommonServicesConfig} returns this
 */
proto.ondewo.vtsi.CommonServicesConfig.prototype.setNluVtsiConfig = function (value) {
	return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CommonServicesConfig} returns this
 */
proto.ondewo.vtsi.CommonServicesConfig.prototype.clearNluVtsiConfig = function () {
	return this.setNluVtsiConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CommonServicesConfig.prototype.hasNluVtsiConfig = function () {
	return jspb.Message.getField(this, 2) != null;
};

/**
 * optional T2sVtsiConfig t2s_vtsi_config = 3;
 * @return {?proto.ondewo.vtsi.T2sVtsiConfig}
 */
proto.ondewo.vtsi.CommonServicesConfig.prototype.getT2sVtsiConfig = function () {
	return /** @type{?proto.ondewo.vtsi.T2sVtsiConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.T2sVtsiConfig, 3)
	);
};

/**
 * @param {?proto.ondewo.vtsi.T2sVtsiConfig|undefined} value
 * @return {!proto.ondewo.vtsi.CommonServicesConfig} returns this
 */
proto.ondewo.vtsi.CommonServicesConfig.prototype.setT2sVtsiConfig = function (value) {
	return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CommonServicesConfig} returns this
 */
proto.ondewo.vtsi.CommonServicesConfig.prototype.clearT2sVtsiConfig = function () {
	return this.setT2sVtsiConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CommonServicesConfig.prototype.hasT2sVtsiConfig = function () {
	return jspb.Message.getField(this, 3) != null;
};

/**
 * optional CsiVtsiConfig csi_vtsi_config = 4;
 * @return {?proto.ondewo.vtsi.CsiVtsiConfig}
 */
proto.ondewo.vtsi.CommonServicesConfig.prototype.getCsiVtsiConfig = function () {
	return /** @type{?proto.ondewo.vtsi.CsiVtsiConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.CsiVtsiConfig, 4)
	);
};

/**
 * @param {?proto.ondewo.vtsi.CsiVtsiConfig|undefined} value
 * @return {!proto.ondewo.vtsi.CommonServicesConfig} returns this
 */
proto.ondewo.vtsi.CommonServicesConfig.prototype.setCsiVtsiConfig = function (value) {
	return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CommonServicesConfig} returns this
 */
proto.ondewo.vtsi.CommonServicesConfig.prototype.clearCsiVtsiConfig = function () {
	return this.setCsiVtsiConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CommonServicesConfig.prototype.hasCsiVtsiConfig = function () {
	return jspb.Message.getField(this, 4) != null;
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
	proto.ondewo.vtsi.SipBaseConfig.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.SipBaseConfig.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.SipBaseConfig} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.SipBaseConfig.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				sipSimVersion: jspb.Message.getFieldWithDefault(msg, 1, '')
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
 * @return {!proto.ondewo.vtsi.SipBaseConfig}
 */
proto.ondewo.vtsi.SipBaseConfig.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.SipBaseConfig();
	return proto.ondewo.vtsi.SipBaseConfig.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.SipBaseConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.SipBaseConfig}
 */
proto.ondewo.vtsi.SipBaseConfig.deserializeBinaryFromReader = function (msg, reader) {
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
proto.ondewo.vtsi.SipBaseConfig.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.SipBaseConfig.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.SipBaseConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.SipBaseConfig.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getSipSimVersion();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
};

/**
 * optional string sip_sim_version = 1;
 * @return {string}
 */
proto.ondewo.vtsi.SipBaseConfig.prototype.getSipSimVersion = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.SipBaseConfig} returns this
 */
proto.ondewo.vtsi.SipBaseConfig.prototype.setSipSimVersion = function (value) {
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
	proto.ondewo.vtsi.SipCallerConfig.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.SipCallerConfig.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.SipCallerConfig} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.SipCallerConfig.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				sipBaseConfig: (f = msg.getSipBaseConfig()) && proto.ondewo.vtsi.SipBaseConfig.toObject(includeInstance, f),
				calleeId: jspb.Message.getFieldWithDefault(msg, 2, ''),
				sipHeadersMap: (f = msg.getSipHeadersMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.ondewo.vtsi.SipCallerConfig}
 */
proto.ondewo.vtsi.SipCallerConfig.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.SipCallerConfig();
	return proto.ondewo.vtsi.SipCallerConfig.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.SipCallerConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.SipCallerConfig}
 */
proto.ondewo.vtsi.SipCallerConfig.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new proto.ondewo.vtsi.SipBaseConfig();
				reader.readMessage(value, proto.ondewo.vtsi.SipBaseConfig.deserializeBinaryFromReader);
				msg.setSipBaseConfig(value);
				break;
			case 2:
				var value = /** @type {string} */ (reader.readString());
				msg.setCalleeId(value);
				break;
			case 3:
				var value = msg.getSipHeadersMap();
				reader.readMessage(value, function (message, reader) {
					jspb.Map.deserializeBinary(
						message,
						reader,
						jspb.BinaryReader.prototype.readString,
						jspb.BinaryReader.prototype.readString,
						null,
						'',
						''
					);
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
proto.ondewo.vtsi.SipCallerConfig.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.SipCallerConfig.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.SipCallerConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.SipCallerConfig.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getSipBaseConfig();
	if (f != null) {
		writer.writeMessage(1, f, proto.ondewo.vtsi.SipBaseConfig.serializeBinaryToWriter);
	}
	f = message.getCalleeId();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
	f = message.getSipHeadersMap(true);
	if (f && f.getLength() > 0) {
		f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
	}
};

/**
 * optional SipBaseConfig sip_base_config = 1;
 * @return {?proto.ondewo.vtsi.SipBaseConfig}
 */
proto.ondewo.vtsi.SipCallerConfig.prototype.getSipBaseConfig = function () {
	return /** @type{?proto.ondewo.vtsi.SipBaseConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.SipBaseConfig, 1)
	);
};

/**
 * @param {?proto.ondewo.vtsi.SipBaseConfig|undefined} value
 * @return {!proto.ondewo.vtsi.SipCallerConfig} returns this
 */
proto.ondewo.vtsi.SipCallerConfig.prototype.setSipBaseConfig = function (value) {
	return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.SipCallerConfig} returns this
 */
proto.ondewo.vtsi.SipCallerConfig.prototype.clearSipBaseConfig = function () {
	return this.setSipBaseConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.SipCallerConfig.prototype.hasSipBaseConfig = function () {
	return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string callee_id = 2;
 * @return {string}
 */
proto.ondewo.vtsi.SipCallerConfig.prototype.getCalleeId = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.SipCallerConfig} returns this
 */
proto.ondewo.vtsi.SipCallerConfig.prototype.setCalleeId = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * map<string, string> sip_headers = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.ondewo.vtsi.SipCallerConfig.prototype.getSipHeadersMap = function (opt_noLazyCreate) {
	return /** @type {!jspb.Map<string,string>} */ (jspb.Message.getMapField(this, 3, opt_noLazyCreate, null));
};

/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ondewo.vtsi.SipCallerConfig} returns this
 */
proto.ondewo.vtsi.SipCallerConfig.prototype.clearSipHeadersMap = function () {
	this.getSipHeadersMap().clear();
	return this;
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
	proto.ondewo.vtsi.CsiVtsiConfig.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.CsiVtsiConfig.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.CsiVtsiConfig} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.CsiVtsiConfig.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				s2tVtsiCallbacks:
					(f = msg.getS2tVtsiCallbacks()) && proto.ondewo.vtsi.S2tVtsiCallbacks.toObject(includeInstance, f),
				nluVtsiCallbacks:
					(f = msg.getNluVtsiCallbacks()) && proto.ondewo.vtsi.NluVtsiCallbacks.toObject(includeInstance, f),
				t2sVtsiCallbacks:
					(f = msg.getT2sVtsiCallbacks()) && proto.ondewo.vtsi.T2sVtsiCallbacks.toObject(includeInstance, f),
				audioObjectStoreConfig:
					(f = msg.getAudioObjectStoreConfig()) &&
					proto.ondewo.vtsi.AudioObjectStorageConfig.toObject(includeInstance, f),
				messageBrokerConfig:
					(f = msg.getMessageBrokerConfig()) && proto.ondewo.vtsi.MessageBrokerConfig.toObject(includeInstance, f),
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
 * @return {!proto.ondewo.vtsi.CsiVtsiConfig}
 */
proto.ondewo.vtsi.CsiVtsiConfig.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.CsiVtsiConfig();
	return proto.ondewo.vtsi.CsiVtsiConfig.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.CsiVtsiConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.CsiVtsiConfig}
 */
proto.ondewo.vtsi.CsiVtsiConfig.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new proto.ondewo.vtsi.S2tVtsiCallbacks();
				reader.readMessage(value, proto.ondewo.vtsi.S2tVtsiCallbacks.deserializeBinaryFromReader);
				msg.setS2tVtsiCallbacks(value);
				break;
			case 2:
				var value = new proto.ondewo.vtsi.NluVtsiCallbacks();
				reader.readMessage(value, proto.ondewo.vtsi.NluVtsiCallbacks.deserializeBinaryFromReader);
				msg.setNluVtsiCallbacks(value);
				break;
			case 3:
				var value = new proto.ondewo.vtsi.T2sVtsiCallbacks();
				reader.readMessage(value, proto.ondewo.vtsi.T2sVtsiCallbacks.deserializeBinaryFromReader);
				msg.setT2sVtsiCallbacks(value);
				break;
			case 4:
				var value = new proto.ondewo.vtsi.AudioObjectStorageConfig();
				reader.readMessage(value, proto.ondewo.vtsi.AudioObjectStorageConfig.deserializeBinaryFromReader);
				msg.setAudioObjectStoreConfig(value);
				break;
			case 5:
				var value = new proto.ondewo.vtsi.MessageBrokerConfig();
				reader.readMessage(value, proto.ondewo.vtsi.MessageBrokerConfig.deserializeBinaryFromReader);
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
proto.ondewo.vtsi.CsiVtsiConfig.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.CsiVtsiConfig.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.CsiVtsiConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CsiVtsiConfig.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getS2tVtsiCallbacks();
	if (f != null) {
		writer.writeMessage(1, f, proto.ondewo.vtsi.S2tVtsiCallbacks.serializeBinaryToWriter);
	}
	f = message.getNluVtsiCallbacks();
	if (f != null) {
		writer.writeMessage(2, f, proto.ondewo.vtsi.NluVtsiCallbacks.serializeBinaryToWriter);
	}
	f = message.getT2sVtsiCallbacks();
	if (f != null) {
		writer.writeMessage(3, f, proto.ondewo.vtsi.T2sVtsiCallbacks.serializeBinaryToWriter);
	}
	f = message.getAudioObjectStoreConfig();
	if (f != null) {
		writer.writeMessage(4, f, proto.ondewo.vtsi.AudioObjectStorageConfig.serializeBinaryToWriter);
	}
	f = message.getMessageBrokerConfig();
	if (f != null) {
		writer.writeMessage(5, f, proto.ondewo.vtsi.MessageBrokerConfig.serializeBinaryToWriter);
	}
	f = message.getActivateControlMessages();
	if (f) {
		writer.writeBool(6, f);
	}
};

/**
 * optional S2tVtsiCallbacks s2t_vtsi_callbacks = 1;
 * @return {?proto.ondewo.vtsi.S2tVtsiCallbacks}
 */
proto.ondewo.vtsi.CsiVtsiConfig.prototype.getS2tVtsiCallbacks = function () {
	return /** @type{?proto.ondewo.vtsi.S2tVtsiCallbacks} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.S2tVtsiCallbacks, 1)
	);
};

/**
 * @param {?proto.ondewo.vtsi.S2tVtsiCallbacks|undefined} value
 * @return {!proto.ondewo.vtsi.CsiVtsiConfig} returns this
 */
proto.ondewo.vtsi.CsiVtsiConfig.prototype.setS2tVtsiCallbacks = function (value) {
	return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CsiVtsiConfig} returns this
 */
proto.ondewo.vtsi.CsiVtsiConfig.prototype.clearS2tVtsiCallbacks = function () {
	return this.setS2tVtsiCallbacks(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CsiVtsiConfig.prototype.hasS2tVtsiCallbacks = function () {
	return jspb.Message.getField(this, 1) != null;
};

/**
 * optional NluVtsiCallbacks nlu_vtsi_callbacks = 2;
 * @return {?proto.ondewo.vtsi.NluVtsiCallbacks}
 */
proto.ondewo.vtsi.CsiVtsiConfig.prototype.getNluVtsiCallbacks = function () {
	return /** @type{?proto.ondewo.vtsi.NluVtsiCallbacks} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.NluVtsiCallbacks, 2)
	);
};

/**
 * @param {?proto.ondewo.vtsi.NluVtsiCallbacks|undefined} value
 * @return {!proto.ondewo.vtsi.CsiVtsiConfig} returns this
 */
proto.ondewo.vtsi.CsiVtsiConfig.prototype.setNluVtsiCallbacks = function (value) {
	return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CsiVtsiConfig} returns this
 */
proto.ondewo.vtsi.CsiVtsiConfig.prototype.clearNluVtsiCallbacks = function () {
	return this.setNluVtsiCallbacks(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CsiVtsiConfig.prototype.hasNluVtsiCallbacks = function () {
	return jspb.Message.getField(this, 2) != null;
};

/**
 * optional T2sVtsiCallbacks t2s_vtsi_callbacks = 3;
 * @return {?proto.ondewo.vtsi.T2sVtsiCallbacks}
 */
proto.ondewo.vtsi.CsiVtsiConfig.prototype.getT2sVtsiCallbacks = function () {
	return /** @type{?proto.ondewo.vtsi.T2sVtsiCallbacks} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.T2sVtsiCallbacks, 3)
	);
};

/**
 * @param {?proto.ondewo.vtsi.T2sVtsiCallbacks|undefined} value
 * @return {!proto.ondewo.vtsi.CsiVtsiConfig} returns this
 */
proto.ondewo.vtsi.CsiVtsiConfig.prototype.setT2sVtsiCallbacks = function (value) {
	return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CsiVtsiConfig} returns this
 */
proto.ondewo.vtsi.CsiVtsiConfig.prototype.clearT2sVtsiCallbacks = function () {
	return this.setT2sVtsiCallbacks(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CsiVtsiConfig.prototype.hasT2sVtsiCallbacks = function () {
	return jspb.Message.getField(this, 3) != null;
};

/**
 * optional AudioObjectStorageConfig audio_object_store_config = 4;
 * @return {?proto.ondewo.vtsi.AudioObjectStorageConfig}
 */
proto.ondewo.vtsi.CsiVtsiConfig.prototype.getAudioObjectStoreConfig = function () {
	return /** @type{?proto.ondewo.vtsi.AudioObjectStorageConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.AudioObjectStorageConfig, 4)
	);
};

/**
 * @param {?proto.ondewo.vtsi.AudioObjectStorageConfig|undefined} value
 * @return {!proto.ondewo.vtsi.CsiVtsiConfig} returns this
 */
proto.ondewo.vtsi.CsiVtsiConfig.prototype.setAudioObjectStoreConfig = function (value) {
	return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CsiVtsiConfig} returns this
 */
proto.ondewo.vtsi.CsiVtsiConfig.prototype.clearAudioObjectStoreConfig = function () {
	return this.setAudioObjectStoreConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CsiVtsiConfig.prototype.hasAudioObjectStoreConfig = function () {
	return jspb.Message.getField(this, 4) != null;
};

/**
 * optional MessageBrokerConfig message_broker_config = 5;
 * @return {?proto.ondewo.vtsi.MessageBrokerConfig}
 */
proto.ondewo.vtsi.CsiVtsiConfig.prototype.getMessageBrokerConfig = function () {
	return /** @type{?proto.ondewo.vtsi.MessageBrokerConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.MessageBrokerConfig, 5)
	);
};

/**
 * @param {?proto.ondewo.vtsi.MessageBrokerConfig|undefined} value
 * @return {!proto.ondewo.vtsi.CsiVtsiConfig} returns this
 */
proto.ondewo.vtsi.CsiVtsiConfig.prototype.setMessageBrokerConfig = function (value) {
	return jspb.Message.setWrapperField(this, 5, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CsiVtsiConfig} returns this
 */
proto.ondewo.vtsi.CsiVtsiConfig.prototype.clearMessageBrokerConfig = function () {
	return this.setMessageBrokerConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CsiVtsiConfig.prototype.hasMessageBrokerConfig = function () {
	return jspb.Message.getField(this, 5) != null;
};

/**
 * optional bool activate_control_messages = 6;
 * @return {boolean}
 */
proto.ondewo.vtsi.CsiVtsiConfig.prototype.getActivateControlMessages = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.CsiVtsiConfig} returns this
 */
proto.ondewo.vtsi.CsiVtsiConfig.prototype.setActivateControlMessages = function (value) {
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
	proto.ondewo.vtsi.AudioObjectStorageConfig.prototype.toObject = function (opt_includeInstance) {
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
	proto.ondewo.vtsi.AudioObjectStorageConfig.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				activateAudioObjectStorage: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
				audioObjectStorageServicesActivationConfig:
					(f = msg.getAudioObjectStorageServicesActivationConfig()) &&
					proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.toObject(includeInstance, f)
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
proto.ondewo.vtsi.AudioObjectStorageConfig.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.AudioObjectStorageConfig();
	return proto.ondewo.vtsi.AudioObjectStorageConfig.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.AudioObjectStorageConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.AudioObjectStorageConfig}
 */
proto.ondewo.vtsi.AudioObjectStorageConfig.deserializeBinaryFromReader = function (msg, reader) {
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
				var value = new proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig();
				reader.readMessage(
					value,
					proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.deserializeBinaryFromReader
				);
				msg.setAudioObjectStorageServicesActivationConfig(value);
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
proto.ondewo.vtsi.AudioObjectStorageConfig.prototype.serializeBinary = function () {
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
proto.ondewo.vtsi.AudioObjectStorageConfig.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getActivateAudioObjectStorage();
	if (f) {
		writer.writeBool(1, f);
	}
	f = message.getAudioObjectStorageServicesActivationConfig();
	if (f != null) {
		writer.writeMessage(2, f, proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.serializeBinaryToWriter);
	}
};

/**
 * optional bool activate_audio_object_storage = 1;
 * @return {boolean}
 */
proto.ondewo.vtsi.AudioObjectStorageConfig.prototype.getActivateAudioObjectStorage = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.AudioObjectStorageConfig} returns this
 */
proto.ondewo.vtsi.AudioObjectStorageConfig.prototype.setActivateAudioObjectStorage = function (value) {
	return jspb.Message.setProto3BooleanField(this, 1, value);
};

/**
 * optional AudioObjectStorageServicesActivationConfig audio_object_storage_services_activation_config = 2;
 * @return {?proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig}
 */
proto.ondewo.vtsi.AudioObjectStorageConfig.prototype.getAudioObjectStorageServicesActivationConfig = function () {
	return /** @type{?proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig, 2)
	);
};

/**
 * @param {?proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig|undefined} value
 * @return {!proto.ondewo.vtsi.AudioObjectStorageConfig} returns this
 */
proto.ondewo.vtsi.AudioObjectStorageConfig.prototype.setAudioObjectStorageServicesActivationConfig = function (value) {
	return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.AudioObjectStorageConfig} returns this
 */
proto.ondewo.vtsi.AudioObjectStorageConfig.prototype.clearAudioObjectStorageServicesActivationConfig = function () {
	return this.setAudioObjectStorageServicesActivationConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.AudioObjectStorageConfig.prototype.hasAudioObjectStorageServicesActivationConfig = function () {
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
	proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.prototype.toObject = function (opt_includeInstance) {
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
	proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.toObject = function (includeInstance, msg) {
		var f,
			obj = {
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
proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig();
	return proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig}
 */
proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.deserializeBinaryFromReader = function (msg, reader) {
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
proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.prototype.serializeBinary = function () {
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
proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getActivateS2t();
	if (f) {
		writer.writeBool(1, f);
	}
	f = message.getActivateT2s();
	if (f) {
		writer.writeBool(2, f);
	}
};

/**
 * optional bool activate_s2t = 1;
 * @return {boolean}
 */
proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.prototype.getActivateS2t = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig} returns this
 */
proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.prototype.setActivateS2t = function (value) {
	return jspb.Message.setProto3BooleanField(this, 1, value);
};

/**
 * optional bool activate_t2s = 2;
 * @return {boolean}
 */
proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.prototype.getActivateT2s = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig} returns this
 */
proto.ondewo.vtsi.AudioObjectStorageServicesActivationConfig.prototype.setActivateT2s = function (value) {
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
proto.ondewo.vtsi.MessageBrokerConfig.prototype.getMessageBrokerConfigCase = function () {
	return /** @type {proto.ondewo.vtsi.MessageBrokerConfig.MessageBrokerConfigCase} */ (
		jspb.Message.computeOneofCase(this, proto.ondewo.vtsi.MessageBrokerConfig.oneofGroups_[0])
	);
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
	proto.ondewo.vtsi.MessageBrokerConfig.prototype.toObject = function (opt_includeInstance) {
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
	proto.ondewo.vtsi.MessageBrokerConfig.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				activateMessageBroker: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
				messageBrokerServicesActivationConfig:
					(f = msg.getMessageBrokerServicesActivationConfig()) &&
					proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.toObject(includeInstance, f),
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
proto.ondewo.vtsi.MessageBrokerConfig.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.MessageBrokerConfig();
	return proto.ondewo.vtsi.MessageBrokerConfig.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.MessageBrokerConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.MessageBrokerConfig}
 */
proto.ondewo.vtsi.MessageBrokerConfig.deserializeBinaryFromReader = function (msg, reader) {
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
				var value = new proto.ondewo.vtsi.MessageBrokerServicesActivationConfig();
				reader.readMessage(value, proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.deserializeBinaryFromReader);
				msg.setMessageBrokerServicesActivationConfig(value);
				break;
			case 3:
				var value = new proto.ondewo.vtsi.RabbitMqConfig();
				reader.readMessage(value, proto.ondewo.vtsi.RabbitMqConfig.deserializeBinaryFromReader);
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
proto.ondewo.vtsi.MessageBrokerConfig.prototype.serializeBinary = function () {
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
proto.ondewo.vtsi.MessageBrokerConfig.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getActivateMessageBroker();
	if (f) {
		writer.writeBool(1, f);
	}
	f = message.getMessageBrokerServicesActivationConfig();
	if (f != null) {
		writer.writeMessage(2, f, proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.serializeBinaryToWriter);
	}
	f = message.getRabbitMqConfig();
	if (f != null) {
		writer.writeMessage(3, f, proto.ondewo.vtsi.RabbitMqConfig.serializeBinaryToWriter);
	}
};

/**
 * optional bool activate_message_broker = 1;
 * @return {boolean}
 */
proto.ondewo.vtsi.MessageBrokerConfig.prototype.getActivateMessageBroker = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.MessageBrokerConfig} returns this
 */
proto.ondewo.vtsi.MessageBrokerConfig.prototype.setActivateMessageBroker = function (value) {
	return jspb.Message.setProto3BooleanField(this, 1, value);
};

/**
 * optional MessageBrokerServicesActivationConfig message_broker_services_activation_config = 2;
 * @return {?proto.ondewo.vtsi.MessageBrokerServicesActivationConfig}
 */
proto.ondewo.vtsi.MessageBrokerConfig.prototype.getMessageBrokerServicesActivationConfig = function () {
	return /** @type{?proto.ondewo.vtsi.MessageBrokerServicesActivationConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.MessageBrokerServicesActivationConfig, 2)
	);
};

/**
 * @param {?proto.ondewo.vtsi.MessageBrokerServicesActivationConfig|undefined} value
 * @return {!proto.ondewo.vtsi.MessageBrokerConfig} returns this
 */
proto.ondewo.vtsi.MessageBrokerConfig.prototype.setMessageBrokerServicesActivationConfig = function (value) {
	return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.MessageBrokerConfig} returns this
 */
proto.ondewo.vtsi.MessageBrokerConfig.prototype.clearMessageBrokerServicesActivationConfig = function () {
	return this.setMessageBrokerServicesActivationConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.MessageBrokerConfig.prototype.hasMessageBrokerServicesActivationConfig = function () {
	return jspb.Message.getField(this, 2) != null;
};

/**
 * optional RabbitMqConfig rabbit_mq_config = 3;
 * @return {?proto.ondewo.vtsi.RabbitMqConfig}
 */
proto.ondewo.vtsi.MessageBrokerConfig.prototype.getRabbitMqConfig = function () {
	return /** @type{?proto.ondewo.vtsi.RabbitMqConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.RabbitMqConfig, 3)
	);
};

/**
 * @param {?proto.ondewo.vtsi.RabbitMqConfig|undefined} value
 * @return {!proto.ondewo.vtsi.MessageBrokerConfig} returns this
 */
proto.ondewo.vtsi.MessageBrokerConfig.prototype.setRabbitMqConfig = function (value) {
	return jspb.Message.setOneofWrapperField(this, 3, proto.ondewo.vtsi.MessageBrokerConfig.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.MessageBrokerConfig} returns this
 */
proto.ondewo.vtsi.MessageBrokerConfig.prototype.clearRabbitMqConfig = function () {
	return this.setRabbitMqConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.MessageBrokerConfig.prototype.hasRabbitMqConfig = function () {
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
	proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.prototype.toObject = function (opt_includeInstance) {
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
	proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.toObject = function (includeInstance, msg) {
		var f,
			obj = {
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
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.MessageBrokerServicesActivationConfig();
	return proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.MessageBrokerServicesActivationConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.MessageBrokerServicesActivationConfig}
 */
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.deserializeBinaryFromReader = function (msg, reader) {
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
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.prototype.serializeBinary = function () {
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
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getActivateS2t();
	if (f) {
		writer.writeBool(1, f);
	}
	f = message.getActivateNlu();
	if (f) {
		writer.writeBool(2, f);
	}
	f = message.getActivateT2s();
	if (f) {
		writer.writeBool(3, f);
	}
	f = message.getActivateSip();
	if (f) {
		writer.writeBool(4, f);
	}
};

/**
 * optional bool activate_s2t = 1;
 * @return {boolean}
 */
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.prototype.getActivateS2t = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.MessageBrokerServicesActivationConfig} returns this
 */
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.prototype.setActivateS2t = function (value) {
	return jspb.Message.setProto3BooleanField(this, 1, value);
};

/**
 * optional bool activate_nlu = 2;
 * @return {boolean}
 */
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.prototype.getActivateNlu = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.MessageBrokerServicesActivationConfig} returns this
 */
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.prototype.setActivateNlu = function (value) {
	return jspb.Message.setProto3BooleanField(this, 2, value);
};

/**
 * optional bool activate_t2s = 3;
 * @return {boolean}
 */
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.prototype.getActivateT2s = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.MessageBrokerServicesActivationConfig} returns this
 */
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.prototype.setActivateT2s = function (value) {
	return jspb.Message.setProto3BooleanField(this, 3, value);
};

/**
 * optional bool activate_sip = 4;
 * @return {boolean}
 */
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.prototype.getActivateSip = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.MessageBrokerServicesActivationConfig} returns this
 */
proto.ondewo.vtsi.MessageBrokerServicesActivationConfig.prototype.setActivateSip = function (value) {
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
	proto.ondewo.vtsi.RabbitMqConfig.prototype.toObject = function (opt_includeInstance) {
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
	proto.ondewo.vtsi.RabbitMqConfig.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				host: jspb.Message.getFieldWithDefault(msg, 1, ''),
				port: jspb.Message.getFieldWithDefault(msg, 2, 0),
				port2: jspb.Message.getFieldWithDefault(msg, 3, 0),
				user: jspb.Message.getFieldWithDefault(msg, 4, ''),
				password: jspb.Message.getFieldWithDefault(msg, 5, '')
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
proto.ondewo.vtsi.RabbitMqConfig.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.RabbitMqConfig();
	return proto.ondewo.vtsi.RabbitMqConfig.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.RabbitMqConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.RabbitMqConfig}
 */
proto.ondewo.vtsi.RabbitMqConfig.deserializeBinaryFromReader = function (msg, reader) {
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
				var value = /** @type {number} */ (reader.readInt32());
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
proto.ondewo.vtsi.RabbitMqConfig.prototype.serializeBinary = function () {
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
proto.ondewo.vtsi.RabbitMqConfig.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getHost();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getPort();
	if (f !== 0) {
		writer.writeInt32(2, f);
	}
	f = message.getPort2();
	if (f !== 0) {
		writer.writeInt32(3, f);
	}
	f = message.getUser();
	if (f.length > 0) {
		writer.writeString(4, f);
	}
	f = message.getPassword();
	if (f.length > 0) {
		writer.writeString(5, f);
	}
};

/**
 * optional string host = 1;
 * @return {string}
 */
proto.ondewo.vtsi.RabbitMqConfig.prototype.getHost = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.RabbitMqConfig} returns this
 */
proto.ondewo.vtsi.RabbitMqConfig.prototype.setHost = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional int32 port = 2;
 * @return {number}
 */
proto.ondewo.vtsi.RabbitMqConfig.prototype.getPort = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.RabbitMqConfig} returns this
 */
proto.ondewo.vtsi.RabbitMqConfig.prototype.setPort = function (value) {
	return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional int32 port_2 = 3;
 * @return {number}
 */
proto.ondewo.vtsi.RabbitMqConfig.prototype.getPort2 = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.RabbitMqConfig} returns this
 */
proto.ondewo.vtsi.RabbitMqConfig.prototype.setPort2 = function (value) {
	return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional string user = 4;
 * @return {string}
 */
proto.ondewo.vtsi.RabbitMqConfig.prototype.getUser = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.RabbitMqConfig} returns this
 */
proto.ondewo.vtsi.RabbitMqConfig.prototype.setUser = function (value) {
	return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * optional string password = 5;
 * @return {string}
 */
proto.ondewo.vtsi.RabbitMqConfig.prototype.getPassword = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.RabbitMqConfig} returns this
 */
proto.ondewo.vtsi.RabbitMqConfig.prototype.setPassword = function (value) {
	return jspb.Message.setProto3StringField(this, 5, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.S2tVtsiCallbacks.repeatedFields_ = [1, 2];

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
	proto.ondewo.vtsi.S2tVtsiCallbacks.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.S2tVtsiCallbacks.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.S2tVtsiCallbacks} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.S2tVtsiCallbacks.toObject = function (includeInstance, msg) {
		var f,
			obj = {
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
 * @return {!proto.ondewo.vtsi.S2tVtsiCallbacks}
 */
proto.ondewo.vtsi.S2tVtsiCallbacks.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.S2tVtsiCallbacks();
	return proto.ondewo.vtsi.S2tVtsiCallbacks.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.S2tVtsiCallbacks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.S2tVtsiCallbacks}
 */
proto.ondewo.vtsi.S2tVtsiCallbacks.deserializeBinaryFromReader = function (msg, reader) {
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
proto.ondewo.vtsi.S2tVtsiCallbacks.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.S2tVtsiCallbacks.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.S2tVtsiCallbacks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.S2tVtsiCallbacks.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getPreS2tCallbacksList();
	if (f.length > 0) {
		writer.writeRepeatedString(1, f);
	}
	f = message.getPostS2tCallbacksList();
	if (f.length > 0) {
		writer.writeRepeatedString(2, f);
	}
};

/**
 * repeated string pre_s2t_callbacks = 1;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.S2tVtsiCallbacks.prototype.getPreS2tCallbacksList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.S2tVtsiCallbacks} returns this
 */
proto.ondewo.vtsi.S2tVtsiCallbacks.prototype.setPreS2tCallbacksList = function (value) {
	return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.S2tVtsiCallbacks} returns this
 */
proto.ondewo.vtsi.S2tVtsiCallbacks.prototype.addPreS2tCallbacks = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.S2tVtsiCallbacks} returns this
 */
proto.ondewo.vtsi.S2tVtsiCallbacks.prototype.clearPreS2tCallbacksList = function () {
	return this.setPreS2tCallbacksList([]);
};

/**
 * repeated string post_s2t_callbacks = 2;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.S2tVtsiCallbacks.prototype.getPostS2tCallbacksList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.S2tVtsiCallbacks} returns this
 */
proto.ondewo.vtsi.S2tVtsiCallbacks.prototype.setPostS2tCallbacksList = function (value) {
	return jspb.Message.setField(this, 2, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.S2tVtsiCallbacks} returns this
 */
proto.ondewo.vtsi.S2tVtsiCallbacks.prototype.addPostS2tCallbacks = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.S2tVtsiCallbacks} returns this
 */
proto.ondewo.vtsi.S2tVtsiCallbacks.prototype.clearPostS2tCallbacksList = function () {
	return this.setPostS2tCallbacksList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.NluVtsiCallbacks.repeatedFields_ = [1, 2];

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
	proto.ondewo.vtsi.NluVtsiCallbacks.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.NluVtsiCallbacks.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.NluVtsiCallbacks} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.NluVtsiCallbacks.toObject = function (includeInstance, msg) {
		var f,
			obj = {
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
 * @return {!proto.ondewo.vtsi.NluVtsiCallbacks}
 */
proto.ondewo.vtsi.NluVtsiCallbacks.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.NluVtsiCallbacks();
	return proto.ondewo.vtsi.NluVtsiCallbacks.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.NluVtsiCallbacks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.NluVtsiCallbacks}
 */
proto.ondewo.vtsi.NluVtsiCallbacks.deserializeBinaryFromReader = function (msg, reader) {
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
proto.ondewo.vtsi.NluVtsiCallbacks.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.NluVtsiCallbacks.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.NluVtsiCallbacks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.NluVtsiCallbacks.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getPreNluCallbacksList();
	if (f.length > 0) {
		writer.writeRepeatedString(1, f);
	}
	f = message.getPostNluCallbacksList();
	if (f.length > 0) {
		writer.writeRepeatedString(2, f);
	}
};

/**
 * repeated string pre_nlu_callbacks = 1;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.NluVtsiCallbacks.prototype.getPreNluCallbacksList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.NluVtsiCallbacks} returns this
 */
proto.ondewo.vtsi.NluVtsiCallbacks.prototype.setPreNluCallbacksList = function (value) {
	return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.NluVtsiCallbacks} returns this
 */
proto.ondewo.vtsi.NluVtsiCallbacks.prototype.addPreNluCallbacks = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.NluVtsiCallbacks} returns this
 */
proto.ondewo.vtsi.NluVtsiCallbacks.prototype.clearPreNluCallbacksList = function () {
	return this.setPreNluCallbacksList([]);
};

/**
 * repeated string post_nlu_callbacks = 2;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.NluVtsiCallbacks.prototype.getPostNluCallbacksList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.NluVtsiCallbacks} returns this
 */
proto.ondewo.vtsi.NluVtsiCallbacks.prototype.setPostNluCallbacksList = function (value) {
	return jspb.Message.setField(this, 2, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.NluVtsiCallbacks} returns this
 */
proto.ondewo.vtsi.NluVtsiCallbacks.prototype.addPostNluCallbacks = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.NluVtsiCallbacks} returns this
 */
proto.ondewo.vtsi.NluVtsiCallbacks.prototype.clearPostNluCallbacksList = function () {
	return this.setPostNluCallbacksList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.T2sVtsiCallbacks.repeatedFields_ = [1, 2];

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
	proto.ondewo.vtsi.T2sVtsiCallbacks.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.T2sVtsiCallbacks.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.T2sVtsiCallbacks} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.T2sVtsiCallbacks.toObject = function (includeInstance, msg) {
		var f,
			obj = {
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
 * @return {!proto.ondewo.vtsi.T2sVtsiCallbacks}
 */
proto.ondewo.vtsi.T2sVtsiCallbacks.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.T2sVtsiCallbacks();
	return proto.ondewo.vtsi.T2sVtsiCallbacks.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.T2sVtsiCallbacks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.T2sVtsiCallbacks}
 */
proto.ondewo.vtsi.T2sVtsiCallbacks.deserializeBinaryFromReader = function (msg, reader) {
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
proto.ondewo.vtsi.T2sVtsiCallbacks.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.T2sVtsiCallbacks.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.T2sVtsiCallbacks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.T2sVtsiCallbacks.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getPreT2sCallbacksList();
	if (f.length > 0) {
		writer.writeRepeatedString(1, f);
	}
	f = message.getPostT2sCallbacksList();
	if (f.length > 0) {
		writer.writeRepeatedString(2, f);
	}
};

/**
 * repeated string pre_t2s_callbacks = 1;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.T2sVtsiCallbacks.prototype.getPreT2sCallbacksList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.T2sVtsiCallbacks} returns this
 */
proto.ondewo.vtsi.T2sVtsiCallbacks.prototype.setPreT2sCallbacksList = function (value) {
	return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.T2sVtsiCallbacks} returns this
 */
proto.ondewo.vtsi.T2sVtsiCallbacks.prototype.addPreT2sCallbacks = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.T2sVtsiCallbacks} returns this
 */
proto.ondewo.vtsi.T2sVtsiCallbacks.prototype.clearPreT2sCallbacksList = function () {
	return this.setPreT2sCallbacksList([]);
};

/**
 * repeated string post_t2s_callbacks = 2;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.T2sVtsiCallbacks.prototype.getPostT2sCallbacksList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.T2sVtsiCallbacks} returns this
 */
proto.ondewo.vtsi.T2sVtsiCallbacks.prototype.setPostT2sCallbacksList = function (value) {
	return jspb.Message.setField(this, 2, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.T2sVtsiCallbacks} returns this
 */
proto.ondewo.vtsi.T2sVtsiCallbacks.prototype.addPostT2sCallbacks = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.T2sVtsiCallbacks} returns this
 */
proto.ondewo.vtsi.T2sVtsiCallbacks.prototype.clearPostT2sCallbacksList = function () {
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
	proto.ondewo.vtsi.Listener.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.Listener.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.Listener} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.Listener.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				name: jspb.Message.getFieldWithDefault(msg, 1, ''),
				callName: jspb.Message.getFieldWithDefault(msg, 2, ''),
				sipBaseConfig: (f = msg.getSipBaseConfig()) && proto.ondewo.vtsi.SipBaseConfig.toObject(includeInstance, f),
				commonServicesConfig:
					(f = msg.getCommonServicesConfig()) && proto.ondewo.vtsi.CommonServicesConfig.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.vtsi.Listener}
 */
proto.ondewo.vtsi.Listener.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.Listener();
	return proto.ondewo.vtsi.Listener.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.Listener} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.Listener}
 */
proto.ondewo.vtsi.Listener.deserializeBinaryFromReader = function (msg, reader) {
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
				msg.setCallName(value);
				break;
			case 3:
				var value = new proto.ondewo.vtsi.SipBaseConfig();
				reader.readMessage(value, proto.ondewo.vtsi.SipBaseConfig.deserializeBinaryFromReader);
				msg.setSipBaseConfig(value);
				break;
			case 4:
				var value = new proto.ondewo.vtsi.CommonServicesConfig();
				reader.readMessage(value, proto.ondewo.vtsi.CommonServicesConfig.deserializeBinaryFromReader);
				msg.setCommonServicesConfig(value);
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
proto.ondewo.vtsi.Listener.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.Listener.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.Listener} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.Listener.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getCallName();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
	f = message.getSipBaseConfig();
	if (f != null) {
		writer.writeMessage(3, f, proto.ondewo.vtsi.SipBaseConfig.serializeBinaryToWriter);
	}
	f = message.getCommonServicesConfig();
	if (f != null) {
		writer.writeMessage(4, f, proto.ondewo.vtsi.CommonServicesConfig.serializeBinaryToWriter);
	}
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.Listener.prototype.getName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.Listener} returns this
 */
proto.ondewo.vtsi.Listener.prototype.setName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string call_name = 2;
 * @return {string}
 */
proto.ondewo.vtsi.Listener.prototype.getCallName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.Listener} returns this
 */
proto.ondewo.vtsi.Listener.prototype.setCallName = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional SipBaseConfig sip_base_config = 3;
 * @return {?proto.ondewo.vtsi.SipBaseConfig}
 */
proto.ondewo.vtsi.Listener.prototype.getSipBaseConfig = function () {
	return /** @type{?proto.ondewo.vtsi.SipBaseConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.SipBaseConfig, 3)
	);
};

/**
 * @param {?proto.ondewo.vtsi.SipBaseConfig|undefined} value
 * @return {!proto.ondewo.vtsi.Listener} returns this
 */
proto.ondewo.vtsi.Listener.prototype.setSipBaseConfig = function (value) {
	return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.Listener} returns this
 */
proto.ondewo.vtsi.Listener.prototype.clearSipBaseConfig = function () {
	return this.setSipBaseConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Listener.prototype.hasSipBaseConfig = function () {
	return jspb.Message.getField(this, 3) != null;
};

/**
 * optional CommonServicesConfig common_services_config = 4;
 * @return {?proto.ondewo.vtsi.CommonServicesConfig}
 */
proto.ondewo.vtsi.Listener.prototype.getCommonServicesConfig = function () {
	return /** @type{?proto.ondewo.vtsi.CommonServicesConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.CommonServicesConfig, 4)
	);
};

/**
 * @param {?proto.ondewo.vtsi.CommonServicesConfig|undefined} value
 * @return {!proto.ondewo.vtsi.Listener} returns this
 */
proto.ondewo.vtsi.Listener.prototype.setCommonServicesConfig = function (value) {
	return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.Listener} returns this
 */
proto.ondewo.vtsi.Listener.prototype.clearCommonServicesConfig = function () {
	return this.setCommonServicesConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Listener.prototype.hasCommonServicesConfig = function () {
	return jspb.Message.getField(this, 4) != null;
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
	proto.ondewo.vtsi.Caller.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.Caller.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.Caller} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.Caller.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				name: jspb.Message.getFieldWithDefault(msg, 1, ''),
				callName: jspb.Message.getFieldWithDefault(msg, 2, ''),
				sipCallerConfig:
					(f = msg.getSipCallerConfig()) && proto.ondewo.vtsi.SipCallerConfig.toObject(includeInstance, f),
				commonServicesConfig:
					(f = msg.getCommonServicesConfig()) && proto.ondewo.vtsi.CommonServicesConfig.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.vtsi.Caller}
 */
proto.ondewo.vtsi.Caller.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.Caller();
	return proto.ondewo.vtsi.Caller.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.Caller} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.Caller}
 */
proto.ondewo.vtsi.Caller.deserializeBinaryFromReader = function (msg, reader) {
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
				msg.setCallName(value);
				break;
			case 3:
				var value = new proto.ondewo.vtsi.SipCallerConfig();
				reader.readMessage(value, proto.ondewo.vtsi.SipCallerConfig.deserializeBinaryFromReader);
				msg.setSipCallerConfig(value);
				break;
			case 4:
				var value = new proto.ondewo.vtsi.CommonServicesConfig();
				reader.readMessage(value, proto.ondewo.vtsi.CommonServicesConfig.deserializeBinaryFromReader);
				msg.setCommonServicesConfig(value);
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
proto.ondewo.vtsi.Caller.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.Caller.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.Caller} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.Caller.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getCallName();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
	f = message.getSipCallerConfig();
	if (f != null) {
		writer.writeMessage(3, f, proto.ondewo.vtsi.SipCallerConfig.serializeBinaryToWriter);
	}
	f = message.getCommonServicesConfig();
	if (f != null) {
		writer.writeMessage(4, f, proto.ondewo.vtsi.CommonServicesConfig.serializeBinaryToWriter);
	}
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.Caller.prototype.getName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.Caller} returns this
 */
proto.ondewo.vtsi.Caller.prototype.setName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string call_name = 2;
 * @return {string}
 */
proto.ondewo.vtsi.Caller.prototype.getCallName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.Caller} returns this
 */
proto.ondewo.vtsi.Caller.prototype.setCallName = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional SipCallerConfig sip_caller_config = 3;
 * @return {?proto.ondewo.vtsi.SipCallerConfig}
 */
proto.ondewo.vtsi.Caller.prototype.getSipCallerConfig = function () {
	return /** @type{?proto.ondewo.vtsi.SipCallerConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.SipCallerConfig, 3)
	);
};

/**
 * @param {?proto.ondewo.vtsi.SipCallerConfig|undefined} value
 * @return {!proto.ondewo.vtsi.Caller} returns this
 */
proto.ondewo.vtsi.Caller.prototype.setSipCallerConfig = function (value) {
	return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.Caller} returns this
 */
proto.ondewo.vtsi.Caller.prototype.clearSipCallerConfig = function () {
	return this.setSipCallerConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Caller.prototype.hasSipCallerConfig = function () {
	return jspb.Message.getField(this, 3) != null;
};

/**
 * optional CommonServicesConfig common_services_config = 4;
 * @return {?proto.ondewo.vtsi.CommonServicesConfig}
 */
proto.ondewo.vtsi.Caller.prototype.getCommonServicesConfig = function () {
	return /** @type{?proto.ondewo.vtsi.CommonServicesConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.CommonServicesConfig, 4)
	);
};

/**
 * @param {?proto.ondewo.vtsi.CommonServicesConfig|undefined} value
 * @return {!proto.ondewo.vtsi.Caller} returns this
 */
proto.ondewo.vtsi.Caller.prototype.setCommonServicesConfig = function (value) {
	return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.Caller} returns this
 */
proto.ondewo.vtsi.Caller.prototype.clearCommonServicesConfig = function () {
	return this.setCommonServicesConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Caller.prototype.hasCommonServicesConfig = function () {
	return jspb.Message.getField(this, 4) != null;
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
	proto.ondewo.vtsi.StartListenerRequest.prototype.toObject = function (opt_includeInstance) {
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
	proto.ondewo.vtsi.StartListenerRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				sipBaseConfig: (f = msg.getSipBaseConfig()) && proto.ondewo.vtsi.SipBaseConfig.toObject(includeInstance, f),
				commonServicesConfig:
					(f = msg.getCommonServicesConfig()) && proto.ondewo.vtsi.CommonServicesConfig.toObject(includeInstance, f)
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
proto.ondewo.vtsi.StartListenerRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StartListenerRequest();
	return proto.ondewo.vtsi.StartListenerRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StartListenerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StartListenerRequest}
 */
proto.ondewo.vtsi.StartListenerRequest.deserializeBinaryFromReader = function (msg, reader) {
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
				var value = new proto.ondewo.vtsi.SipBaseConfig();
				reader.readMessage(value, proto.ondewo.vtsi.SipBaseConfig.deserializeBinaryFromReader);
				msg.setSipBaseConfig(value);
				break;
			case 3:
				var value = new proto.ondewo.vtsi.CommonServicesConfig();
				reader.readMessage(value, proto.ondewo.vtsi.CommonServicesConfig.deserializeBinaryFromReader);
				msg.setCommonServicesConfig(value);
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
proto.ondewo.vtsi.StartListenerRequest.prototype.serializeBinary = function () {
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
proto.ondewo.vtsi.StartListenerRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getSipBaseConfig();
	if (f != null) {
		writer.writeMessage(2, f, proto.ondewo.vtsi.SipBaseConfig.serializeBinaryToWriter);
	}
	f = message.getCommonServicesConfig();
	if (f != null) {
		writer.writeMessage(3, f, proto.ondewo.vtsi.CommonServicesConfig.serializeBinaryToWriter);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StartListenerRequest.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartListenerRequest} returns this
 */
proto.ondewo.vtsi.StartListenerRequest.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional SipBaseConfig sip_base_config = 2;
 * @return {?proto.ondewo.vtsi.SipBaseConfig}
 */
proto.ondewo.vtsi.StartListenerRequest.prototype.getSipBaseConfig = function () {
	return /** @type{?proto.ondewo.vtsi.SipBaseConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.SipBaseConfig, 2)
	);
};

/**
 * @param {?proto.ondewo.vtsi.SipBaseConfig|undefined} value
 * @return {!proto.ondewo.vtsi.StartListenerRequest} returns this
 */
proto.ondewo.vtsi.StartListenerRequest.prototype.setSipBaseConfig = function (value) {
	return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.StartListenerRequest} returns this
 */
proto.ondewo.vtsi.StartListenerRequest.prototype.clearSipBaseConfig = function () {
	return this.setSipBaseConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.StartListenerRequest.prototype.hasSipBaseConfig = function () {
	return jspb.Message.getField(this, 2) != null;
};

/**
 * optional CommonServicesConfig common_services_config = 3;
 * @return {?proto.ondewo.vtsi.CommonServicesConfig}
 */
proto.ondewo.vtsi.StartListenerRequest.prototype.getCommonServicesConfig = function () {
	return /** @type{?proto.ondewo.vtsi.CommonServicesConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.CommonServicesConfig, 3)
	);
};

/**
 * @param {?proto.ondewo.vtsi.CommonServicesConfig|undefined} value
 * @return {!proto.ondewo.vtsi.StartListenerRequest} returns this
 */
proto.ondewo.vtsi.StartListenerRequest.prototype.setCommonServicesConfig = function (value) {
	return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.StartListenerRequest} returns this
 */
proto.ondewo.vtsi.StartListenerRequest.prototype.clearCommonServicesConfig = function () {
	return this.setCommonServicesConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.StartListenerRequest.prototype.hasCommonServicesConfig = function () {
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
	proto.ondewo.vtsi.StartListenerResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.StartListenerResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.StartListenerResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.StartListenerResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				listener: (f = msg.getListener()) && proto.ondewo.vtsi.Listener.toObject(includeInstance, f),
				errorMessage: jspb.Message.getFieldWithDefault(msg, 3, '')
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
 * @return {!proto.ondewo.vtsi.StartListenerResponse}
 */
proto.ondewo.vtsi.StartListenerResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StartListenerResponse();
	return proto.ondewo.vtsi.StartListenerResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StartListenerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StartListenerResponse}
 */
proto.ondewo.vtsi.StartListenerResponse.deserializeBinaryFromReader = function (msg, reader) {
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
				var value = new proto.ondewo.vtsi.Listener();
				reader.readMessage(value, proto.ondewo.vtsi.Listener.deserializeBinaryFromReader);
				msg.setListener(value);
				break;
			case 3:
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
proto.ondewo.vtsi.StartListenerResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.StartListenerResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StartListenerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StartListenerResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getListener();
	if (f != null) {
		writer.writeMessage(2, f, proto.ondewo.vtsi.Listener.serializeBinaryToWriter);
	}
	f = message.getErrorMessage();
	if (f.length > 0) {
		writer.writeString(3, f);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StartListenerResponse.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartListenerResponse} returns this
 */
proto.ondewo.vtsi.StartListenerResponse.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional Listener listener = 2;
 * @return {?proto.ondewo.vtsi.Listener}
 */
proto.ondewo.vtsi.StartListenerResponse.prototype.getListener = function () {
	return /** @type{?proto.ondewo.vtsi.Listener} */ (jspb.Message.getWrapperField(this, proto.ondewo.vtsi.Listener, 2));
};

/**
 * @param {?proto.ondewo.vtsi.Listener|undefined} value
 * @return {!proto.ondewo.vtsi.StartListenerResponse} returns this
 */
proto.ondewo.vtsi.StartListenerResponse.prototype.setListener = function (value) {
	return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.StartListenerResponse} returns this
 */
proto.ondewo.vtsi.StartListenerResponse.prototype.clearListener = function () {
	return this.setListener(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.StartListenerResponse.prototype.hasListener = function () {
	return jspb.Message.getField(this, 2) != null;
};

/**
 * optional string error_message = 3;
 * @return {string}
 */
proto.ondewo.vtsi.StartListenerResponse.prototype.getErrorMessage = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartListenerResponse} returns this
 */
proto.ondewo.vtsi.StartListenerResponse.prototype.setErrorMessage = function (value) {
	return jspb.Message.setProto3StringField(this, 3, value);
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
	proto.ondewo.vtsi.StartListenersRequest.prototype.toObject = function (opt_includeInstance) {
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
	proto.ondewo.vtsi.StartListenersRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				listenerRequestsList: jspb.Message.toObjectList(
					msg.getListenerRequestsList(),
					proto.ondewo.vtsi.StartListenerRequest.toObject,
					includeInstance
				)
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
proto.ondewo.vtsi.StartListenersRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StartListenersRequest();
	return proto.ondewo.vtsi.StartListenersRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StartListenersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StartListenersRequest}
 */
proto.ondewo.vtsi.StartListenersRequest.deserializeBinaryFromReader = function (msg, reader) {
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
				var value = new proto.ondewo.vtsi.StartListenerRequest();
				reader.readMessage(value, proto.ondewo.vtsi.StartListenerRequest.deserializeBinaryFromReader);
				msg.addListenerRequests(value);
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
proto.ondewo.vtsi.StartListenersRequest.prototype.serializeBinary = function () {
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
proto.ondewo.vtsi.StartListenersRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getListenerRequestsList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(2, f, proto.ondewo.vtsi.StartListenerRequest.serializeBinaryToWriter);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StartListenersRequest.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartListenersRequest} returns this
 */
proto.ondewo.vtsi.StartListenersRequest.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * repeated StartListenerRequest listener_requests = 2;
 * @return {!Array<!proto.ondewo.vtsi.StartListenerRequest>}
 */
proto.ondewo.vtsi.StartListenersRequest.prototype.getListenerRequestsList = function () {
	return /** @type{!Array<!proto.ondewo.vtsi.StartListenerRequest>} */ (
		jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.StartListenerRequest, 2)
	);
};

/**
 * @param {!Array<!proto.ondewo.vtsi.StartListenerRequest>} value
 * @return {!proto.ondewo.vtsi.StartListenersRequest} returns this
 */
proto.ondewo.vtsi.StartListenersRequest.prototype.setListenerRequestsList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.ondewo.vtsi.StartListenerRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.StartListenerRequest}
 */
proto.ondewo.vtsi.StartListenersRequest.prototype.addListenerRequests = function (opt_value, opt_index) {
	return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.vtsi.StartListenerRequest, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StartListenersRequest} returns this
 */
proto.ondewo.vtsi.StartListenersRequest.prototype.clearListenerRequestsList = function () {
	return this.setListenerRequestsList([]);
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
	proto.ondewo.vtsi.StartListenersResponse.prototype.toObject = function (opt_includeInstance) {
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
	proto.ondewo.vtsi.StartListenersResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				listenerResponsesList: jspb.Message.toObjectList(
					msg.getListenerResponsesList(),
					proto.ondewo.vtsi.StartListenerResponse.toObject,
					includeInstance
				),
				errorMessage: jspb.Message.getFieldWithDefault(msg, 3, '')
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
proto.ondewo.vtsi.StartListenersResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StartListenersResponse();
	return proto.ondewo.vtsi.StartListenersResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StartListenersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StartListenersResponse}
 */
proto.ondewo.vtsi.StartListenersResponse.deserializeBinaryFromReader = function (msg, reader) {
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
				var value = new proto.ondewo.vtsi.StartListenerResponse();
				reader.readMessage(value, proto.ondewo.vtsi.StartListenerResponse.deserializeBinaryFromReader);
				msg.addListenerResponses(value);
				break;
			case 3:
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
proto.ondewo.vtsi.StartListenersResponse.prototype.serializeBinary = function () {
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
proto.ondewo.vtsi.StartListenersResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getListenerResponsesList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(2, f, proto.ondewo.vtsi.StartListenerResponse.serializeBinaryToWriter);
	}
	f = message.getErrorMessage();
	if (f.length > 0) {
		writer.writeString(3, f);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StartListenersResponse.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartListenersResponse} returns this
 */
proto.ondewo.vtsi.StartListenersResponse.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * repeated StartListenerResponse listener_responses = 2;
 * @return {!Array<!proto.ondewo.vtsi.StartListenerResponse>}
 */
proto.ondewo.vtsi.StartListenersResponse.prototype.getListenerResponsesList = function () {
	return /** @type{!Array<!proto.ondewo.vtsi.StartListenerResponse>} */ (
		jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.StartListenerResponse, 2)
	);
};

/**
 * @param {!Array<!proto.ondewo.vtsi.StartListenerResponse>} value
 * @return {!proto.ondewo.vtsi.StartListenersResponse} returns this
 */
proto.ondewo.vtsi.StartListenersResponse.prototype.setListenerResponsesList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.ondewo.vtsi.StartListenerResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.StartListenerResponse}
 */
proto.ondewo.vtsi.StartListenersResponse.prototype.addListenerResponses = function (opt_value, opt_index) {
	return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.vtsi.StartListenerResponse, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StartListenersResponse} returns this
 */
proto.ondewo.vtsi.StartListenersResponse.prototype.clearListenerResponsesList = function () {
	return this.setListenerResponsesList([]);
};

/**
 * optional string error_message = 3;
 * @return {string}
 */
proto.ondewo.vtsi.StartListenersResponse.prototype.getErrorMessage = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartListenersResponse} returns this
 */
proto.ondewo.vtsi.StartListenersResponse.prototype.setErrorMessage = function (value) {
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
	proto.ondewo.vtsi.StartCallerRequest.prototype.toObject = function (opt_includeInstance) {
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
	proto.ondewo.vtsi.StartCallerRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				sipCallerConfig:
					(f = msg.getSipCallerConfig()) && proto.ondewo.vtsi.SipCallerConfig.toObject(includeInstance, f),
				commonServicesConfig:
					(f = msg.getCommonServicesConfig()) && proto.ondewo.vtsi.CommonServicesConfig.toObject(includeInstance, f)
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
proto.ondewo.vtsi.StartCallerRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StartCallerRequest();
	return proto.ondewo.vtsi.StartCallerRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StartCallerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StartCallerRequest}
 */
proto.ondewo.vtsi.StartCallerRequest.deserializeBinaryFromReader = function (msg, reader) {
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
				var value = new proto.ondewo.vtsi.SipCallerConfig();
				reader.readMessage(value, proto.ondewo.vtsi.SipCallerConfig.deserializeBinaryFromReader);
				msg.setSipCallerConfig(value);
				break;
			case 3:
				var value = new proto.ondewo.vtsi.CommonServicesConfig();
				reader.readMessage(value, proto.ondewo.vtsi.CommonServicesConfig.deserializeBinaryFromReader);
				msg.setCommonServicesConfig(value);
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
proto.ondewo.vtsi.StartCallerRequest.prototype.serializeBinary = function () {
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
proto.ondewo.vtsi.StartCallerRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getSipCallerConfig();
	if (f != null) {
		writer.writeMessage(2, f, proto.ondewo.vtsi.SipCallerConfig.serializeBinaryToWriter);
	}
	f = message.getCommonServicesConfig();
	if (f != null) {
		writer.writeMessage(3, f, proto.ondewo.vtsi.CommonServicesConfig.serializeBinaryToWriter);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StartCallerRequest.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartCallerRequest} returns this
 */
proto.ondewo.vtsi.StartCallerRequest.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional SipCallerConfig sip_caller_config = 2;
 * @return {?proto.ondewo.vtsi.SipCallerConfig}
 */
proto.ondewo.vtsi.StartCallerRequest.prototype.getSipCallerConfig = function () {
	return /** @type{?proto.ondewo.vtsi.SipCallerConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.SipCallerConfig, 2)
	);
};

/**
 * @param {?proto.ondewo.vtsi.SipCallerConfig|undefined} value
 * @return {!proto.ondewo.vtsi.StartCallerRequest} returns this
 */
proto.ondewo.vtsi.StartCallerRequest.prototype.setSipCallerConfig = function (value) {
	return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.StartCallerRequest} returns this
 */
proto.ondewo.vtsi.StartCallerRequest.prototype.clearSipCallerConfig = function () {
	return this.setSipCallerConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.StartCallerRequest.prototype.hasSipCallerConfig = function () {
	return jspb.Message.getField(this, 2) != null;
};

/**
 * optional CommonServicesConfig common_services_config = 3;
 * @return {?proto.ondewo.vtsi.CommonServicesConfig}
 */
proto.ondewo.vtsi.StartCallerRequest.prototype.getCommonServicesConfig = function () {
	return /** @type{?proto.ondewo.vtsi.CommonServicesConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.CommonServicesConfig, 3)
	);
};

/**
 * @param {?proto.ondewo.vtsi.CommonServicesConfig|undefined} value
 * @return {!proto.ondewo.vtsi.StartCallerRequest} returns this
 */
proto.ondewo.vtsi.StartCallerRequest.prototype.setCommonServicesConfig = function (value) {
	return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.StartCallerRequest} returns this
 */
proto.ondewo.vtsi.StartCallerRequest.prototype.clearCommonServicesConfig = function () {
	return this.setCommonServicesConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.StartCallerRequest.prototype.hasCommonServicesConfig = function () {
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
	proto.ondewo.vtsi.StartCallerResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.StartCallerResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.StartCallerResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.StartCallerResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				caller: (f = msg.getCaller()) && proto.ondewo.vtsi.Caller.toObject(includeInstance, f),
				errorMessage: jspb.Message.getFieldWithDefault(msg, 3, '')
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
 * @return {!proto.ondewo.vtsi.StartCallerResponse}
 */
proto.ondewo.vtsi.StartCallerResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StartCallerResponse();
	return proto.ondewo.vtsi.StartCallerResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StartCallerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StartCallerResponse}
 */
proto.ondewo.vtsi.StartCallerResponse.deserializeBinaryFromReader = function (msg, reader) {
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
				var value = new proto.ondewo.vtsi.Caller();
				reader.readMessage(value, proto.ondewo.vtsi.Caller.deserializeBinaryFromReader);
				msg.setCaller(value);
				break;
			case 3:
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
proto.ondewo.vtsi.StartCallerResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.StartCallerResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StartCallerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StartCallerResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getCaller();
	if (f != null) {
		writer.writeMessage(2, f, proto.ondewo.vtsi.Caller.serializeBinaryToWriter);
	}
	f = message.getErrorMessage();
	if (f.length > 0) {
		writer.writeString(3, f);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StartCallerResponse.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartCallerResponse} returns this
 */
proto.ondewo.vtsi.StartCallerResponse.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional Caller caller = 2;
 * @return {?proto.ondewo.vtsi.Caller}
 */
proto.ondewo.vtsi.StartCallerResponse.prototype.getCaller = function () {
	return /** @type{?proto.ondewo.vtsi.Caller} */ (jspb.Message.getWrapperField(this, proto.ondewo.vtsi.Caller, 2));
};

/**
 * @param {?proto.ondewo.vtsi.Caller|undefined} value
 * @return {!proto.ondewo.vtsi.StartCallerResponse} returns this
 */
proto.ondewo.vtsi.StartCallerResponse.prototype.setCaller = function (value) {
	return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.StartCallerResponse} returns this
 */
proto.ondewo.vtsi.StartCallerResponse.prototype.clearCaller = function () {
	return this.setCaller(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.StartCallerResponse.prototype.hasCaller = function () {
	return jspb.Message.getField(this, 2) != null;
};

/**
 * optional string error_message = 3;
 * @return {string}
 */
proto.ondewo.vtsi.StartCallerResponse.prototype.getErrorMessage = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartCallerResponse} returns this
 */
proto.ondewo.vtsi.StartCallerResponse.prototype.setErrorMessage = function (value) {
	return jspb.Message.setProto3StringField(this, 3, value);
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
	proto.ondewo.vtsi.StartCallersRequest.prototype.toObject = function (opt_includeInstance) {
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
	proto.ondewo.vtsi.StartCallersRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				callerRequestsList: jspb.Message.toObjectList(
					msg.getCallerRequestsList(),
					proto.ondewo.vtsi.StartCallerRequest.toObject,
					includeInstance
				)
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
proto.ondewo.vtsi.StartCallersRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StartCallersRequest();
	return proto.ondewo.vtsi.StartCallersRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StartCallersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StartCallersRequest}
 */
proto.ondewo.vtsi.StartCallersRequest.deserializeBinaryFromReader = function (msg, reader) {
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
				var value = new proto.ondewo.vtsi.StartCallerRequest();
				reader.readMessage(value, proto.ondewo.vtsi.StartCallerRequest.deserializeBinaryFromReader);
				msg.addCallerRequests(value);
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
proto.ondewo.vtsi.StartCallersRequest.prototype.serializeBinary = function () {
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
proto.ondewo.vtsi.StartCallersRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getCallerRequestsList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(2, f, proto.ondewo.vtsi.StartCallerRequest.serializeBinaryToWriter);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StartCallersRequest.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartCallersRequest} returns this
 */
proto.ondewo.vtsi.StartCallersRequest.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * repeated StartCallerRequest caller_requests = 2;
 * @return {!Array<!proto.ondewo.vtsi.StartCallerRequest>}
 */
proto.ondewo.vtsi.StartCallersRequest.prototype.getCallerRequestsList = function () {
	return /** @type{!Array<!proto.ondewo.vtsi.StartCallerRequest>} */ (
		jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.StartCallerRequest, 2)
	);
};

/**
 * @param {!Array<!proto.ondewo.vtsi.StartCallerRequest>} value
 * @return {!proto.ondewo.vtsi.StartCallersRequest} returns this
 */
proto.ondewo.vtsi.StartCallersRequest.prototype.setCallerRequestsList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.ondewo.vtsi.StartCallerRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.StartCallerRequest}
 */
proto.ondewo.vtsi.StartCallersRequest.prototype.addCallerRequests = function (opt_value, opt_index) {
	return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.vtsi.StartCallerRequest, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StartCallersRequest} returns this
 */
proto.ondewo.vtsi.StartCallersRequest.prototype.clearCallerRequestsList = function () {
	return this.setCallerRequestsList([]);
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
	proto.ondewo.vtsi.StartCallersResponse.prototype.toObject = function (opt_includeInstance) {
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
	proto.ondewo.vtsi.StartCallersResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				callerResponsesList: jspb.Message.toObjectList(
					msg.getCallerResponsesList(),
					proto.ondewo.vtsi.StartCallerResponse.toObject,
					includeInstance
				),
				errorMessage: jspb.Message.getFieldWithDefault(msg, 3, '')
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
proto.ondewo.vtsi.StartCallersResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StartCallersResponse();
	return proto.ondewo.vtsi.StartCallersResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StartCallersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StartCallersResponse}
 */
proto.ondewo.vtsi.StartCallersResponse.deserializeBinaryFromReader = function (msg, reader) {
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
				var value = new proto.ondewo.vtsi.StartCallerResponse();
				reader.readMessage(value, proto.ondewo.vtsi.StartCallerResponse.deserializeBinaryFromReader);
				msg.addCallerResponses(value);
				break;
			case 3:
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
proto.ondewo.vtsi.StartCallersResponse.prototype.serializeBinary = function () {
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
proto.ondewo.vtsi.StartCallersResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getCallerResponsesList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(2, f, proto.ondewo.vtsi.StartCallerResponse.serializeBinaryToWriter);
	}
	f = message.getErrorMessage();
	if (f.length > 0) {
		writer.writeString(3, f);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StartCallersResponse.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartCallersResponse} returns this
 */
proto.ondewo.vtsi.StartCallersResponse.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * repeated StartCallerResponse caller_responses = 2;
 * @return {!Array<!proto.ondewo.vtsi.StartCallerResponse>}
 */
proto.ondewo.vtsi.StartCallersResponse.prototype.getCallerResponsesList = function () {
	return /** @type{!Array<!proto.ondewo.vtsi.StartCallerResponse>} */ (
		jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.StartCallerResponse, 2)
	);
};

/**
 * @param {!Array<!proto.ondewo.vtsi.StartCallerResponse>} value
 * @return {!proto.ondewo.vtsi.StartCallersResponse} returns this
 */
proto.ondewo.vtsi.StartCallersResponse.prototype.setCallerResponsesList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.ondewo.vtsi.StartCallerResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.StartCallerResponse}
 */
proto.ondewo.vtsi.StartCallersResponse.prototype.addCallerResponses = function (opt_value, opt_index) {
	return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.vtsi.StartCallerResponse, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StartCallersResponse} returns this
 */
proto.ondewo.vtsi.StartCallersResponse.prototype.clearCallerResponsesList = function () {
	return this.setCallerResponsesList([]);
};

/**
 * optional string error_message = 3;
 * @return {string}
 */
proto.ondewo.vtsi.StartCallersResponse.prototype.getErrorMessage = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartCallersResponse} returns this
 */
proto.ondewo.vtsi.StartCallersResponse.prototype.setErrorMessage = function (value) {
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
	proto.ondewo.vtsi.ListCallersRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.ListCallersRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.ListCallersRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.ListCallersRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				pageToken: jspb.Message.getFieldWithDefault(msg, 2, ''),
				callView: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.ondewo.vtsi.ListCallersRequest}
 */
proto.ondewo.vtsi.ListCallersRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.ListCallersRequest();
	return proto.ondewo.vtsi.ListCallersRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.ListCallersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.ListCallersRequest}
 */
proto.ondewo.vtsi.ListCallersRequest.deserializeBinaryFromReader = function (msg, reader) {
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
				msg.setPageToken(value);
				break;
			case 3:
				var value = /** @type {!proto.ondewo.vtsi.CallView} */ (reader.readEnum());
				msg.setCallView(value);
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
proto.ondewo.vtsi.ListCallersRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.ListCallersRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.ListCallersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ListCallersRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = /** @type {string} */ (jspb.Message.getField(message, 2));
	if (f != null) {
		writer.writeString(2, f);
	}
	f = /** @type {!proto.ondewo.vtsi.CallView} */ (jspb.Message.getField(message, 3));
	if (f != null) {
		writer.writeEnum(3, f);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.ListCallersRequest.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ListCallersRequest} returns this
 */
proto.ondewo.vtsi.ListCallersRequest.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.ondewo.vtsi.ListCallersRequest.prototype.getPageToken = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ListCallersRequest} returns this
 */
proto.ondewo.vtsi.ListCallersRequest.prototype.setPageToken = function (value) {
	return jspb.Message.setField(this, 2, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.ListCallersRequest} returns this
 */
proto.ondewo.vtsi.ListCallersRequest.prototype.clearPageToken = function () {
	return jspb.Message.setField(this, 2, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ListCallersRequest.prototype.hasPageToken = function () {
	return jspb.Message.getField(this, 2) != null;
};

/**
 * optional CallView call_view = 3;
 * @return {!proto.ondewo.vtsi.CallView}
 */
proto.ondewo.vtsi.ListCallersRequest.prototype.getCallView = function () {
	return /** @type {!proto.ondewo.vtsi.CallView} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {!proto.ondewo.vtsi.CallView} value
 * @return {!proto.ondewo.vtsi.ListCallersRequest} returns this
 */
proto.ondewo.vtsi.ListCallersRequest.prototype.setCallView = function (value) {
	return jspb.Message.setField(this, 3, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.ListCallersRequest} returns this
 */
proto.ondewo.vtsi.ListCallersRequest.prototype.clearCallView = function () {
	return jspb.Message.setField(this, 3, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ListCallersRequest.prototype.hasCallView = function () {
	return jspb.Message.getField(this, 3) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.ListCallersResponse.repeatedFields_ = [1];

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
	proto.ondewo.vtsi.ListCallersResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.ListCallersResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.ListCallersResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.ListCallersResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				callersList: jspb.Message.toObjectList(msg.getCallersList(), proto.ondewo.vtsi.Caller.toObject, includeInstance)
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
 * @return {!proto.ondewo.vtsi.ListCallersResponse}
 */
proto.ondewo.vtsi.ListCallersResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.ListCallersResponse();
	return proto.ondewo.vtsi.ListCallersResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.ListCallersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.ListCallersResponse}
 */
proto.ondewo.vtsi.ListCallersResponse.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new proto.ondewo.vtsi.Caller();
				reader.readMessage(value, proto.ondewo.vtsi.Caller.deserializeBinaryFromReader);
				msg.addCallers(value);
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
proto.ondewo.vtsi.ListCallersResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.ListCallersResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.ListCallersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ListCallersResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getCallersList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(1, f, proto.ondewo.vtsi.Caller.serializeBinaryToWriter);
	}
};

/**
 * repeated Caller callers = 1;
 * @return {!Array<!proto.ondewo.vtsi.Caller>}
 */
proto.ondewo.vtsi.ListCallersResponse.prototype.getCallersList = function () {
	return /** @type{!Array<!proto.ondewo.vtsi.Caller>} */ (
		jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.Caller, 1)
	);
};

/**
 * @param {!Array<!proto.ondewo.vtsi.Caller>} value
 * @return {!proto.ondewo.vtsi.ListCallersResponse} returns this
 */
proto.ondewo.vtsi.ListCallersResponse.prototype.setCallersList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.ondewo.vtsi.Caller=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.Caller}
 */
proto.ondewo.vtsi.ListCallersResponse.prototype.addCallers = function (opt_value, opt_index) {
	return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.vtsi.Caller, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.ListCallersResponse} returns this
 */
proto.ondewo.vtsi.ListCallersResponse.prototype.clearCallersList = function () {
	return this.setCallersList([]);
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
	proto.ondewo.vtsi.GetCallerRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.GetCallerRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.GetCallerRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.GetCallerRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				name: jspb.Message.getFieldWithDefault(msg, 2, ''),
				callView: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.ondewo.vtsi.GetCallerRequest}
 */
proto.ondewo.vtsi.GetCallerRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.GetCallerRequest();
	return proto.ondewo.vtsi.GetCallerRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.GetCallerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.GetCallerRequest}
 */
proto.ondewo.vtsi.GetCallerRequest.deserializeBinaryFromReader = function (msg, reader) {
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
				msg.setName(value);
				break;
			case 3:
				var value = /** @type {!proto.ondewo.vtsi.CallView} */ (reader.readEnum());
				msg.setCallView(value);
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
proto.ondewo.vtsi.GetCallerRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.GetCallerRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.GetCallerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetCallerRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getName();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
	f = /** @type {!proto.ondewo.vtsi.CallView} */ (jspb.Message.getField(message, 3));
	if (f != null) {
		writer.writeEnum(3, f);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.GetCallerRequest.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.GetCallerRequest} returns this
 */
proto.ondewo.vtsi.GetCallerRequest.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string name = 2;
 * @return {string}
 */
proto.ondewo.vtsi.GetCallerRequest.prototype.getName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.GetCallerRequest} returns this
 */
proto.ondewo.vtsi.GetCallerRequest.prototype.setName = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional CallView call_view = 3;
 * @return {!proto.ondewo.vtsi.CallView}
 */
proto.ondewo.vtsi.GetCallerRequest.prototype.getCallView = function () {
	return /** @type {!proto.ondewo.vtsi.CallView} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {!proto.ondewo.vtsi.CallView} value
 * @return {!proto.ondewo.vtsi.GetCallerRequest} returns this
 */
proto.ondewo.vtsi.GetCallerRequest.prototype.setCallView = function (value) {
	return jspb.Message.setField(this, 3, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.GetCallerRequest} returns this
 */
proto.ondewo.vtsi.GetCallerRequest.prototype.clearCallView = function () {
	return jspb.Message.setField(this, 3, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.GetCallerRequest.prototype.hasCallView = function () {
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
	proto.ondewo.vtsi.ListListenersRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.ListListenersRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.ListListenersRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.ListListenersRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				pageToken: jspb.Message.getFieldWithDefault(msg, 2, ''),
				callView: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.ondewo.vtsi.ListListenersRequest}
 */
proto.ondewo.vtsi.ListListenersRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.ListListenersRequest();
	return proto.ondewo.vtsi.ListListenersRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.ListListenersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.ListListenersRequest}
 */
proto.ondewo.vtsi.ListListenersRequest.deserializeBinaryFromReader = function (msg, reader) {
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
				msg.setPageToken(value);
				break;
			case 3:
				var value = /** @type {!proto.ondewo.vtsi.CallView} */ (reader.readEnum());
				msg.setCallView(value);
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
proto.ondewo.vtsi.ListListenersRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.ListListenersRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.ListListenersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ListListenersRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = /** @type {string} */ (jspb.Message.getField(message, 2));
	if (f != null) {
		writer.writeString(2, f);
	}
	f = /** @type {!proto.ondewo.vtsi.CallView} */ (jspb.Message.getField(message, 3));
	if (f != null) {
		writer.writeEnum(3, f);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.ListListenersRequest.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ListListenersRequest} returns this
 */
proto.ondewo.vtsi.ListListenersRequest.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.ondewo.vtsi.ListListenersRequest.prototype.getPageToken = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ListListenersRequest} returns this
 */
proto.ondewo.vtsi.ListListenersRequest.prototype.setPageToken = function (value) {
	return jspb.Message.setField(this, 2, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.ListListenersRequest} returns this
 */
proto.ondewo.vtsi.ListListenersRequest.prototype.clearPageToken = function () {
	return jspb.Message.setField(this, 2, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ListListenersRequest.prototype.hasPageToken = function () {
	return jspb.Message.getField(this, 2) != null;
};

/**
 * optional CallView call_view = 3;
 * @return {!proto.ondewo.vtsi.CallView}
 */
proto.ondewo.vtsi.ListListenersRequest.prototype.getCallView = function () {
	return /** @type {!proto.ondewo.vtsi.CallView} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {!proto.ondewo.vtsi.CallView} value
 * @return {!proto.ondewo.vtsi.ListListenersRequest} returns this
 */
proto.ondewo.vtsi.ListListenersRequest.prototype.setCallView = function (value) {
	return jspb.Message.setField(this, 3, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.ListListenersRequest} returns this
 */
proto.ondewo.vtsi.ListListenersRequest.prototype.clearCallView = function () {
	return jspb.Message.setField(this, 3, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ListListenersRequest.prototype.hasCallView = function () {
	return jspb.Message.getField(this, 3) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.ListListenersResponse.repeatedFields_ = [1];

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
	proto.ondewo.vtsi.ListListenersResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.ListListenersResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.ListListenersResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.ListListenersResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				listenersList: jspb.Message.toObjectList(
					msg.getListenersList(),
					proto.ondewo.vtsi.Listener.toObject,
					includeInstance
				),
				nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, '')
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
 * @return {!proto.ondewo.vtsi.ListListenersResponse}
 */
proto.ondewo.vtsi.ListListenersResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.ListListenersResponse();
	return proto.ondewo.vtsi.ListListenersResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.ListListenersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.ListListenersResponse}
 */
proto.ondewo.vtsi.ListListenersResponse.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new proto.ondewo.vtsi.Listener();
				reader.readMessage(value, proto.ondewo.vtsi.Listener.deserializeBinaryFromReader);
				msg.addListeners(value);
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
proto.ondewo.vtsi.ListListenersResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.ListListenersResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.ListListenersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ListListenersResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getListenersList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(1, f, proto.ondewo.vtsi.Listener.serializeBinaryToWriter);
	}
	f = message.getNextPageToken();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
};

/**
 * repeated Listener listeners = 1;
 * @return {!Array<!proto.ondewo.vtsi.Listener>}
 */
proto.ondewo.vtsi.ListListenersResponse.prototype.getListenersList = function () {
	return /** @type{!Array<!proto.ondewo.vtsi.Listener>} */ (
		jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.Listener, 1)
	);
};

/**
 * @param {!Array<!proto.ondewo.vtsi.Listener>} value
 * @return {!proto.ondewo.vtsi.ListListenersResponse} returns this
 */
proto.ondewo.vtsi.ListListenersResponse.prototype.setListenersList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.ondewo.vtsi.Listener=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.Listener}
 */
proto.ondewo.vtsi.ListListenersResponse.prototype.addListeners = function (opt_value, opt_index) {
	return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.vtsi.Listener, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.ListListenersResponse} returns this
 */
proto.ondewo.vtsi.ListListenersResponse.prototype.clearListenersList = function () {
	return this.setListenersList([]);
};

/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.ondewo.vtsi.ListListenersResponse.prototype.getNextPageToken = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ListListenersResponse} returns this
 */
proto.ondewo.vtsi.ListListenersResponse.prototype.setNextPageToken = function (value) {
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
	proto.ondewo.vtsi.GetListenerRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.GetListenerRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.GetListenerRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.GetListenerRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				name: jspb.Message.getFieldWithDefault(msg, 2, ''),
				callView: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.ondewo.vtsi.GetListenerRequest}
 */
proto.ondewo.vtsi.GetListenerRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.GetListenerRequest();
	return proto.ondewo.vtsi.GetListenerRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.GetListenerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.GetListenerRequest}
 */
proto.ondewo.vtsi.GetListenerRequest.deserializeBinaryFromReader = function (msg, reader) {
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
				msg.setName(value);
				break;
			case 3:
				var value = /** @type {!proto.ondewo.vtsi.CallView} */ (reader.readEnum());
				msg.setCallView(value);
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
proto.ondewo.vtsi.GetListenerRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.GetListenerRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.GetListenerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetListenerRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getName();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
	f = /** @type {!proto.ondewo.vtsi.CallView} */ (jspb.Message.getField(message, 3));
	if (f != null) {
		writer.writeEnum(3, f);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.GetListenerRequest.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.GetListenerRequest} returns this
 */
proto.ondewo.vtsi.GetListenerRequest.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string name = 2;
 * @return {string}
 */
proto.ondewo.vtsi.GetListenerRequest.prototype.getName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.GetListenerRequest} returns this
 */
proto.ondewo.vtsi.GetListenerRequest.prototype.setName = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional CallView call_view = 3;
 * @return {!proto.ondewo.vtsi.CallView}
 */
proto.ondewo.vtsi.GetListenerRequest.prototype.getCallView = function () {
	return /** @type {!proto.ondewo.vtsi.CallView} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {!proto.ondewo.vtsi.CallView} value
 * @return {!proto.ondewo.vtsi.GetListenerRequest} returns this
 */
proto.ondewo.vtsi.GetListenerRequest.prototype.setCallView = function (value) {
	return jspb.Message.setField(this, 3, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.GetListenerRequest} returns this
 */
proto.ondewo.vtsi.GetListenerRequest.prototype.clearCallView = function () {
	return jspb.Message.setField(this, 3, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.GetListenerRequest.prototype.hasCallView = function () {
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
	proto.ondewo.vtsi.StopListenerRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.StopListenerRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.StopListenerRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.StopListenerRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				name: jspb.Message.getFieldWithDefault(msg, 1, '')
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
 * @return {!proto.ondewo.vtsi.StopListenerRequest}
 */
proto.ondewo.vtsi.StopListenerRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StopListenerRequest();
	return proto.ondewo.vtsi.StopListenerRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StopListenerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StopListenerRequest}
 */
proto.ondewo.vtsi.StopListenerRequest.deserializeBinaryFromReader = function (msg, reader) {
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
proto.ondewo.vtsi.StopListenerRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.StopListenerRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StopListenerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StopListenerRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StopListenerRequest.prototype.getName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StopListenerRequest} returns this
 */
proto.ondewo.vtsi.StopListenerRequest.prototype.setName = function (value) {
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
	proto.ondewo.vtsi.StopListenerResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.StopListenerResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.StopListenerResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.StopListenerResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				name: jspb.Message.getFieldWithDefault(msg, 1, ''),
				errorMessage: jspb.Message.getFieldWithDefault(msg, 2, '')
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
 * @return {!proto.ondewo.vtsi.StopListenerResponse}
 */
proto.ondewo.vtsi.StopListenerResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StopListenerResponse();
	return proto.ondewo.vtsi.StopListenerResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StopListenerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StopListenerResponse}
 */
proto.ondewo.vtsi.StopListenerResponse.deserializeBinaryFromReader = function (msg, reader) {
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
proto.ondewo.vtsi.StopListenerResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.StopListenerResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StopListenerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StopListenerResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getErrorMessage();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StopListenerResponse.prototype.getName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StopListenerResponse} returns this
 */
proto.ondewo.vtsi.StopListenerResponse.prototype.setName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string error_message = 2;
 * @return {string}
 */
proto.ondewo.vtsi.StopListenerResponse.prototype.getErrorMessage = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StopListenerResponse} returns this
 */
proto.ondewo.vtsi.StopListenerResponse.prototype.setErrorMessage = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.StopListenersRequest.repeatedFields_ = [1];

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
	proto.ondewo.vtsi.StopListenersRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.StopListenersRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.StopListenersRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.StopListenersRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				namesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ondewo.vtsi.StopListenersRequest}
 */
proto.ondewo.vtsi.StopListenersRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StopListenersRequest();
	return proto.ondewo.vtsi.StopListenersRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StopListenersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StopListenersRequest}
 */
proto.ondewo.vtsi.StopListenersRequest.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.addNames(value);
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
proto.ondewo.vtsi.StopListenersRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.StopListenersRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StopListenersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StopListenersRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getNamesList();
	if (f.length > 0) {
		writer.writeRepeatedString(1, f);
	}
};

/**
 * repeated string names = 1;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.StopListenersRequest.prototype.getNamesList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.StopListenersRequest} returns this
 */
proto.ondewo.vtsi.StopListenersRequest.prototype.setNamesList = function (value) {
	return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.StopListenersRequest} returns this
 */
proto.ondewo.vtsi.StopListenersRequest.prototype.addNames = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StopListenersRequest} returns this
 */
proto.ondewo.vtsi.StopListenersRequest.prototype.clearNamesList = function () {
	return this.setNamesList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.StopListenersResponse.repeatedFields_ = [1];

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
	proto.ondewo.vtsi.StopListenersResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.StopListenersResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.StopListenersResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.StopListenersResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				stopListenerResponsesList: jspb.Message.toObjectList(
					msg.getStopListenerResponsesList(),
					proto.ondewo.vtsi.StopListenerResponse.toObject,
					includeInstance
				),
				errorMessage: jspb.Message.getFieldWithDefault(msg, 2, '')
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
 * @return {!proto.ondewo.vtsi.StopListenersResponse}
 */
proto.ondewo.vtsi.StopListenersResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StopListenersResponse();
	return proto.ondewo.vtsi.StopListenersResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StopListenersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StopListenersResponse}
 */
proto.ondewo.vtsi.StopListenersResponse.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new proto.ondewo.vtsi.StopListenerResponse();
				reader.readMessage(value, proto.ondewo.vtsi.StopListenerResponse.deserializeBinaryFromReader);
				msg.addStopListenerResponses(value);
				break;
			case 2:
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
proto.ondewo.vtsi.StopListenersResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.StopListenersResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StopListenersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StopListenersResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getStopListenerResponsesList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(1, f, proto.ondewo.vtsi.StopListenerResponse.serializeBinaryToWriter);
	}
	f = message.getErrorMessage();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
};

/**
 * repeated StopListenerResponse stop_listener_responses = 1;
 * @return {!Array<!proto.ondewo.vtsi.StopListenerResponse>}
 */
proto.ondewo.vtsi.StopListenersResponse.prototype.getStopListenerResponsesList = function () {
	return /** @type{!Array<!proto.ondewo.vtsi.StopListenerResponse>} */ (
		jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.StopListenerResponse, 1)
	);
};

/**
 * @param {!Array<!proto.ondewo.vtsi.StopListenerResponse>} value
 * @return {!proto.ondewo.vtsi.StopListenersResponse} returns this
 */
proto.ondewo.vtsi.StopListenersResponse.prototype.setStopListenerResponsesList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.ondewo.vtsi.StopListenerResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.StopListenerResponse}
 */
proto.ondewo.vtsi.StopListenersResponse.prototype.addStopListenerResponses = function (opt_value, opt_index) {
	return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.vtsi.StopListenerResponse, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StopListenersResponse} returns this
 */
proto.ondewo.vtsi.StopListenersResponse.prototype.clearStopListenerResponsesList = function () {
	return this.setStopListenerResponsesList([]);
};

/**
 * optional string error_message = 2;
 * @return {string}
 */
proto.ondewo.vtsi.StopListenersResponse.prototype.getErrorMessage = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StopListenersResponse} returns this
 */
proto.ondewo.vtsi.StopListenersResponse.prototype.setErrorMessage = function (value) {
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
	proto.ondewo.vtsi.StopCallerRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.StopCallerRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.StopCallerRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.StopCallerRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				name: jspb.Message.getFieldWithDefault(msg, 1, '')
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
 * @return {!proto.ondewo.vtsi.StopCallerRequest}
 */
proto.ondewo.vtsi.StopCallerRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StopCallerRequest();
	return proto.ondewo.vtsi.StopCallerRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StopCallerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StopCallerRequest}
 */
proto.ondewo.vtsi.StopCallerRequest.deserializeBinaryFromReader = function (msg, reader) {
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
proto.ondewo.vtsi.StopCallerRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.StopCallerRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StopCallerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StopCallerRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StopCallerRequest.prototype.getName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StopCallerRequest} returns this
 */
proto.ondewo.vtsi.StopCallerRequest.prototype.setName = function (value) {
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
	proto.ondewo.vtsi.StopCallerResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.StopCallerResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.StopCallerResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.StopCallerResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				name: jspb.Message.getFieldWithDefault(msg, 1, ''),
				errorMessage: jspb.Message.getFieldWithDefault(msg, 2, '')
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
 * @return {!proto.ondewo.vtsi.StopCallerResponse}
 */
proto.ondewo.vtsi.StopCallerResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StopCallerResponse();
	return proto.ondewo.vtsi.StopCallerResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StopCallerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StopCallerResponse}
 */
proto.ondewo.vtsi.StopCallerResponse.deserializeBinaryFromReader = function (msg, reader) {
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
proto.ondewo.vtsi.StopCallerResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.StopCallerResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StopCallerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StopCallerResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getErrorMessage();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StopCallerResponse.prototype.getName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StopCallerResponse} returns this
 */
proto.ondewo.vtsi.StopCallerResponse.prototype.setName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string error_message = 2;
 * @return {string}
 */
proto.ondewo.vtsi.StopCallerResponse.prototype.getErrorMessage = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StopCallerResponse} returns this
 */
proto.ondewo.vtsi.StopCallerResponse.prototype.setErrorMessage = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.StopCallersRequest.repeatedFields_ = [1];

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
	proto.ondewo.vtsi.StopCallersRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.StopCallersRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.StopCallersRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.StopCallersRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				namesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ondewo.vtsi.StopCallersRequest}
 */
proto.ondewo.vtsi.StopCallersRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StopCallersRequest();
	return proto.ondewo.vtsi.StopCallersRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StopCallersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StopCallersRequest}
 */
proto.ondewo.vtsi.StopCallersRequest.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.addNames(value);
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
proto.ondewo.vtsi.StopCallersRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.StopCallersRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StopCallersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StopCallersRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getNamesList();
	if (f.length > 0) {
		writer.writeRepeatedString(1, f);
	}
};

/**
 * repeated string names = 1;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.StopCallersRequest.prototype.getNamesList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.StopCallersRequest} returns this
 */
proto.ondewo.vtsi.StopCallersRequest.prototype.setNamesList = function (value) {
	return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.StopCallersRequest} returns this
 */
proto.ondewo.vtsi.StopCallersRequest.prototype.addNames = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StopCallersRequest} returns this
 */
proto.ondewo.vtsi.StopCallersRequest.prototype.clearNamesList = function () {
	return this.setNamesList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.StopCallersResponse.repeatedFields_ = [1];

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
	proto.ondewo.vtsi.StopCallersResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.StopCallersResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.StopCallersResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.StopCallersResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				stopCallerResponsesList: jspb.Message.toObjectList(
					msg.getStopCallerResponsesList(),
					proto.ondewo.vtsi.StopCallerResponse.toObject,
					includeInstance
				),
				errorMessage: jspb.Message.getFieldWithDefault(msg, 2, '')
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
 * @return {!proto.ondewo.vtsi.StopCallersResponse}
 */
proto.ondewo.vtsi.StopCallersResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StopCallersResponse();
	return proto.ondewo.vtsi.StopCallersResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StopCallersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StopCallersResponse}
 */
proto.ondewo.vtsi.StopCallersResponse.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new proto.ondewo.vtsi.StopCallerResponse();
				reader.readMessage(value, proto.ondewo.vtsi.StopCallerResponse.deserializeBinaryFromReader);
				msg.addStopCallerResponses(value);
				break;
			case 2:
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
proto.ondewo.vtsi.StopCallersResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.StopCallersResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StopCallersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StopCallersResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getStopCallerResponsesList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(1, f, proto.ondewo.vtsi.StopCallerResponse.serializeBinaryToWriter);
	}
	f = message.getErrorMessage();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
};

/**
 * repeated StopCallerResponse stop_caller_responses = 1;
 * @return {!Array<!proto.ondewo.vtsi.StopCallerResponse>}
 */
proto.ondewo.vtsi.StopCallersResponse.prototype.getStopCallerResponsesList = function () {
	return /** @type{!Array<!proto.ondewo.vtsi.StopCallerResponse>} */ (
		jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.StopCallerResponse, 1)
	);
};

/**
 * @param {!Array<!proto.ondewo.vtsi.StopCallerResponse>} value
 * @return {!proto.ondewo.vtsi.StopCallersResponse} returns this
 */
proto.ondewo.vtsi.StopCallersResponse.prototype.setStopCallerResponsesList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.ondewo.vtsi.StopCallerResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.StopCallerResponse}
 */
proto.ondewo.vtsi.StopCallersResponse.prototype.addStopCallerResponses = function (opt_value, opt_index) {
	return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.vtsi.StopCallerResponse, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StopCallersResponse} returns this
 */
proto.ondewo.vtsi.StopCallersResponse.prototype.clearStopCallerResponsesList = function () {
	return this.setStopCallerResponsesList([]);
};

/**
 * optional string error_message = 2;
 * @return {string}
 */
proto.ondewo.vtsi.StopCallersResponse.prototype.getErrorMessage = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StopCallersResponse} returns this
 */
proto.ondewo.vtsi.StopCallersResponse.prototype.setErrorMessage = function (value) {
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
	proto.ondewo.vtsi.DeleteListenerRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.DeleteListenerRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.DeleteListenerRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.DeleteListenerRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				name: jspb.Message.getFieldWithDefault(msg, 1, '')
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
 * @return {!proto.ondewo.vtsi.DeleteListenerRequest}
 */
proto.ondewo.vtsi.DeleteListenerRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.DeleteListenerRequest();
	return proto.ondewo.vtsi.DeleteListenerRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.DeleteListenerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.DeleteListenerRequest}
 */
proto.ondewo.vtsi.DeleteListenerRequest.deserializeBinaryFromReader = function (msg, reader) {
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
proto.ondewo.vtsi.DeleteListenerRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.DeleteListenerRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.DeleteListenerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.DeleteListenerRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.DeleteListenerRequest.prototype.getName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.DeleteListenerRequest} returns this
 */
proto.ondewo.vtsi.DeleteListenerRequest.prototype.setName = function (value) {
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
	proto.ondewo.vtsi.DeleteListenerResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.DeleteListenerResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.DeleteListenerResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.DeleteListenerResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				name: jspb.Message.getFieldWithDefault(msg, 1, ''),
				errorMessage: jspb.Message.getFieldWithDefault(msg, 2, '')
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
 * @return {!proto.ondewo.vtsi.DeleteListenerResponse}
 */
proto.ondewo.vtsi.DeleteListenerResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.DeleteListenerResponse();
	return proto.ondewo.vtsi.DeleteListenerResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.DeleteListenerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.DeleteListenerResponse}
 */
proto.ondewo.vtsi.DeleteListenerResponse.deserializeBinaryFromReader = function (msg, reader) {
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
proto.ondewo.vtsi.DeleteListenerResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.DeleteListenerResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.DeleteListenerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.DeleteListenerResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getErrorMessage();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.DeleteListenerResponse.prototype.getName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.DeleteListenerResponse} returns this
 */
proto.ondewo.vtsi.DeleteListenerResponse.prototype.setName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string error_message = 2;
 * @return {string}
 */
proto.ondewo.vtsi.DeleteListenerResponse.prototype.getErrorMessage = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.DeleteListenerResponse} returns this
 */
proto.ondewo.vtsi.DeleteListenerResponse.prototype.setErrorMessage = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.DeleteListenersRequest.repeatedFields_ = [1];

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
	proto.ondewo.vtsi.DeleteListenersRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.DeleteListenersRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.DeleteListenersRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.DeleteListenersRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				namesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ondewo.vtsi.DeleteListenersRequest}
 */
proto.ondewo.vtsi.DeleteListenersRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.DeleteListenersRequest();
	return proto.ondewo.vtsi.DeleteListenersRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.DeleteListenersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.DeleteListenersRequest}
 */
proto.ondewo.vtsi.DeleteListenersRequest.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.addNames(value);
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
proto.ondewo.vtsi.DeleteListenersRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.DeleteListenersRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.DeleteListenersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.DeleteListenersRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getNamesList();
	if (f.length > 0) {
		writer.writeRepeatedString(1, f);
	}
};

/**
 * repeated string names = 1;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.DeleteListenersRequest.prototype.getNamesList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.DeleteListenersRequest} returns this
 */
proto.ondewo.vtsi.DeleteListenersRequest.prototype.setNamesList = function (value) {
	return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.DeleteListenersRequest} returns this
 */
proto.ondewo.vtsi.DeleteListenersRequest.prototype.addNames = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.DeleteListenersRequest} returns this
 */
proto.ondewo.vtsi.DeleteListenersRequest.prototype.clearNamesList = function () {
	return this.setNamesList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.DeleteListenersResponse.repeatedFields_ = [1];

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
	proto.ondewo.vtsi.DeleteListenersResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.DeleteListenersResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.DeleteListenersResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.DeleteListenersResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				deleteListenerResponsesList: jspb.Message.toObjectList(
					msg.getDeleteListenerResponsesList(),
					proto.ondewo.vtsi.DeleteListenerResponse.toObject,
					includeInstance
				),
				errorMessage: jspb.Message.getFieldWithDefault(msg, 2, '')
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
 * @return {!proto.ondewo.vtsi.DeleteListenersResponse}
 */
proto.ondewo.vtsi.DeleteListenersResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.DeleteListenersResponse();
	return proto.ondewo.vtsi.DeleteListenersResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.DeleteListenersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.DeleteListenersResponse}
 */
proto.ondewo.vtsi.DeleteListenersResponse.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new proto.ondewo.vtsi.DeleteListenerResponse();
				reader.readMessage(value, proto.ondewo.vtsi.DeleteListenerResponse.deserializeBinaryFromReader);
				msg.addDeleteListenerResponses(value);
				break;
			case 2:
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
proto.ondewo.vtsi.DeleteListenersResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.DeleteListenersResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.DeleteListenersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.DeleteListenersResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getDeleteListenerResponsesList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(1, f, proto.ondewo.vtsi.DeleteListenerResponse.serializeBinaryToWriter);
	}
	f = message.getErrorMessage();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
};

/**
 * repeated DeleteListenerResponse delete_listener_responses = 1;
 * @return {!Array<!proto.ondewo.vtsi.DeleteListenerResponse>}
 */
proto.ondewo.vtsi.DeleteListenersResponse.prototype.getDeleteListenerResponsesList = function () {
	return /** @type{!Array<!proto.ondewo.vtsi.DeleteListenerResponse>} */ (
		jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.DeleteListenerResponse, 1)
	);
};

/**
 * @param {!Array<!proto.ondewo.vtsi.DeleteListenerResponse>} value
 * @return {!proto.ondewo.vtsi.DeleteListenersResponse} returns this
 */
proto.ondewo.vtsi.DeleteListenersResponse.prototype.setDeleteListenerResponsesList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.ondewo.vtsi.DeleteListenerResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.DeleteListenerResponse}
 */
proto.ondewo.vtsi.DeleteListenersResponse.prototype.addDeleteListenerResponses = function (opt_value, opt_index) {
	return jspb.Message.addToRepeatedWrapperField(
		this,
		1,
		opt_value,
		proto.ondewo.vtsi.DeleteListenerResponse,
		opt_index
	);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.DeleteListenersResponse} returns this
 */
proto.ondewo.vtsi.DeleteListenersResponse.prototype.clearDeleteListenerResponsesList = function () {
	return this.setDeleteListenerResponsesList([]);
};

/**
 * optional string error_message = 2;
 * @return {string}
 */
proto.ondewo.vtsi.DeleteListenersResponse.prototype.getErrorMessage = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.DeleteListenersResponse} returns this
 */
proto.ondewo.vtsi.DeleteListenersResponse.prototype.setErrorMessage = function (value) {
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
	proto.ondewo.vtsi.DeleteCallerRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.DeleteCallerRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.DeleteCallerRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.DeleteCallerRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				name: jspb.Message.getFieldWithDefault(msg, 1, '')
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
 * @return {!proto.ondewo.vtsi.DeleteCallerRequest}
 */
proto.ondewo.vtsi.DeleteCallerRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.DeleteCallerRequest();
	return proto.ondewo.vtsi.DeleteCallerRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.DeleteCallerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.DeleteCallerRequest}
 */
proto.ondewo.vtsi.DeleteCallerRequest.deserializeBinaryFromReader = function (msg, reader) {
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
proto.ondewo.vtsi.DeleteCallerRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.DeleteCallerRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.DeleteCallerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.DeleteCallerRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.DeleteCallerRequest.prototype.getName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.DeleteCallerRequest} returns this
 */
proto.ondewo.vtsi.DeleteCallerRequest.prototype.setName = function (value) {
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
	proto.ondewo.vtsi.DeleteCallerResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.DeleteCallerResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.DeleteCallerResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.DeleteCallerResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				name: jspb.Message.getFieldWithDefault(msg, 1, ''),
				errorMessage: jspb.Message.getFieldWithDefault(msg, 2, '')
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
 * @return {!proto.ondewo.vtsi.DeleteCallerResponse}
 */
proto.ondewo.vtsi.DeleteCallerResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.DeleteCallerResponse();
	return proto.ondewo.vtsi.DeleteCallerResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.DeleteCallerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.DeleteCallerResponse}
 */
proto.ondewo.vtsi.DeleteCallerResponse.deserializeBinaryFromReader = function (msg, reader) {
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
proto.ondewo.vtsi.DeleteCallerResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.DeleteCallerResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.DeleteCallerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.DeleteCallerResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getErrorMessage();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.DeleteCallerResponse.prototype.getName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.DeleteCallerResponse} returns this
 */
proto.ondewo.vtsi.DeleteCallerResponse.prototype.setName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string error_message = 2;
 * @return {string}
 */
proto.ondewo.vtsi.DeleteCallerResponse.prototype.getErrorMessage = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.DeleteCallerResponse} returns this
 */
proto.ondewo.vtsi.DeleteCallerResponse.prototype.setErrorMessage = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.DeleteCallersRequest.repeatedFields_ = [1];

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
	proto.ondewo.vtsi.DeleteCallersRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.DeleteCallersRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.DeleteCallersRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.DeleteCallersRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				namesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ondewo.vtsi.DeleteCallersRequest}
 */
proto.ondewo.vtsi.DeleteCallersRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.DeleteCallersRequest();
	return proto.ondewo.vtsi.DeleteCallersRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.DeleteCallersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.DeleteCallersRequest}
 */
proto.ondewo.vtsi.DeleteCallersRequest.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.addNames(value);
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
proto.ondewo.vtsi.DeleteCallersRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.DeleteCallersRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.DeleteCallersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.DeleteCallersRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getNamesList();
	if (f.length > 0) {
		writer.writeRepeatedString(1, f);
	}
};

/**
 * repeated string names = 1;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.DeleteCallersRequest.prototype.getNamesList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.DeleteCallersRequest} returns this
 */
proto.ondewo.vtsi.DeleteCallersRequest.prototype.setNamesList = function (value) {
	return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.DeleteCallersRequest} returns this
 */
proto.ondewo.vtsi.DeleteCallersRequest.prototype.addNames = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.DeleteCallersRequest} returns this
 */
proto.ondewo.vtsi.DeleteCallersRequest.prototype.clearNamesList = function () {
	return this.setNamesList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.DeleteCallersResponse.repeatedFields_ = [1];

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
	proto.ondewo.vtsi.DeleteCallersResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.DeleteCallersResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.DeleteCallersResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.DeleteCallersResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				deleteCallerResponsesList: jspb.Message.toObjectList(
					msg.getDeleteCallerResponsesList(),
					proto.ondewo.vtsi.DeleteCallerResponse.toObject,
					includeInstance
				),
				errorMessage: jspb.Message.getFieldWithDefault(msg, 2, '')
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
 * @return {!proto.ondewo.vtsi.DeleteCallersResponse}
 */
proto.ondewo.vtsi.DeleteCallersResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.DeleteCallersResponse();
	return proto.ondewo.vtsi.DeleteCallersResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.DeleteCallersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.DeleteCallersResponse}
 */
proto.ondewo.vtsi.DeleteCallersResponse.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new proto.ondewo.vtsi.DeleteCallerResponse();
				reader.readMessage(value, proto.ondewo.vtsi.DeleteCallerResponse.deserializeBinaryFromReader);
				msg.addDeleteCallerResponses(value);
				break;
			case 2:
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
proto.ondewo.vtsi.DeleteCallersResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.DeleteCallersResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.DeleteCallersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.DeleteCallersResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getDeleteCallerResponsesList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(1, f, proto.ondewo.vtsi.DeleteCallerResponse.serializeBinaryToWriter);
	}
	f = message.getErrorMessage();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
};

/**
 * repeated DeleteCallerResponse delete_caller_responses = 1;
 * @return {!Array<!proto.ondewo.vtsi.DeleteCallerResponse>}
 */
proto.ondewo.vtsi.DeleteCallersResponse.prototype.getDeleteCallerResponsesList = function () {
	return /** @type{!Array<!proto.ondewo.vtsi.DeleteCallerResponse>} */ (
		jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.DeleteCallerResponse, 1)
	);
};

/**
 * @param {!Array<!proto.ondewo.vtsi.DeleteCallerResponse>} value
 * @return {!proto.ondewo.vtsi.DeleteCallersResponse} returns this
 */
proto.ondewo.vtsi.DeleteCallersResponse.prototype.setDeleteCallerResponsesList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.ondewo.vtsi.DeleteCallerResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.DeleteCallerResponse}
 */
proto.ondewo.vtsi.DeleteCallersResponse.prototype.addDeleteCallerResponses = function (opt_value, opt_index) {
	return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.vtsi.DeleteCallerResponse, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.DeleteCallersResponse} returns this
 */
proto.ondewo.vtsi.DeleteCallersResponse.prototype.clearDeleteCallerResponsesList = function () {
	return this.setDeleteCallerResponsesList([]);
};

/**
 * optional string error_message = 2;
 * @return {string}
 */
proto.ondewo.vtsi.DeleteCallersResponse.prototype.getErrorMessage = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.DeleteCallersResponse} returns this
 */
proto.ondewo.vtsi.DeleteCallersResponse.prototype.setErrorMessage = function (value) {
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
	proto.ondewo.vtsi.StartScheduledCallerRequest.prototype.toObject = function (opt_includeInstance) {
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
	proto.ondewo.vtsi.StartScheduledCallerRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				request: (f = msg.getRequest()) && proto.ondewo.vtsi.StartCallerRequest.toObject(includeInstance, f),
				scheduledTime:
					(f = msg.getScheduledTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
proto.ondewo.vtsi.StartScheduledCallerRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StartScheduledCallerRequest();
	return proto.ondewo.vtsi.StartScheduledCallerRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StartScheduledCallerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StartScheduledCallerRequest}
 */
proto.ondewo.vtsi.StartScheduledCallerRequest.deserializeBinaryFromReader = function (msg, reader) {
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
				var value = new proto.ondewo.vtsi.StartCallerRequest();
				reader.readMessage(value, proto.ondewo.vtsi.StartCallerRequest.deserializeBinaryFromReader);
				msg.setRequest(value);
				break;
			case 3:
				var value = new google_protobuf_timestamp_pb.Timestamp();
				reader.readMessage(value, google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
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
proto.ondewo.vtsi.StartScheduledCallerRequest.prototype.serializeBinary = function () {
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
proto.ondewo.vtsi.StartScheduledCallerRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getRequest();
	if (f != null) {
		writer.writeMessage(2, f, proto.ondewo.vtsi.StartCallerRequest.serializeBinaryToWriter);
	}
	f = message.getScheduledTime();
	if (f != null) {
		writer.writeMessage(3, f, google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StartScheduledCallerRequest.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartScheduledCallerRequest} returns this
 */
proto.ondewo.vtsi.StartScheduledCallerRequest.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional StartCallerRequest request = 2;
 * @return {?proto.ondewo.vtsi.StartCallerRequest}
 */
proto.ondewo.vtsi.StartScheduledCallerRequest.prototype.getRequest = function () {
	return /** @type{?proto.ondewo.vtsi.StartCallerRequest} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.StartCallerRequest, 2)
	);
};

/**
 * @param {?proto.ondewo.vtsi.StartCallerRequest|undefined} value
 * @return {!proto.ondewo.vtsi.StartScheduledCallerRequest} returns this
 */
proto.ondewo.vtsi.StartScheduledCallerRequest.prototype.setRequest = function (value) {
	return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.StartScheduledCallerRequest} returns this
 */
proto.ondewo.vtsi.StartScheduledCallerRequest.prototype.clearRequest = function () {
	return this.setRequest(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.StartScheduledCallerRequest.prototype.hasRequest = function () {
	return jspb.Message.getField(this, 2) != null;
};

/**
 * optional google.protobuf.Timestamp scheduled_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.StartScheduledCallerRequest.prototype.getScheduledTime = function () {
	return /** @type{?proto.google.protobuf.Timestamp} */ (
		jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3)
	);
};

/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.StartScheduledCallerRequest} returns this
 */
proto.ondewo.vtsi.StartScheduledCallerRequest.prototype.setScheduledTime = function (value) {
	return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.StartScheduledCallerRequest} returns this
 */
proto.ondewo.vtsi.StartScheduledCallerRequest.prototype.clearScheduledTime = function () {
	return this.setScheduledTime(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.StartScheduledCallerRequest.prototype.hasScheduledTime = function () {
	return jspb.Message.getField(this, 3) != null;
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
	proto.ondewo.vtsi.StartScheduledCallersRequest.prototype.toObject = function (opt_includeInstance) {
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
	proto.ondewo.vtsi.StartScheduledCallersRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				scheduledCallerRequestsList: jspb.Message.toObjectList(
					msg.getScheduledCallerRequestsList(),
					proto.ondewo.vtsi.StartScheduledCallerRequest.toObject,
					includeInstance
				)
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
proto.ondewo.vtsi.StartScheduledCallersRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StartScheduledCallersRequest();
	return proto.ondewo.vtsi.StartScheduledCallersRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StartScheduledCallersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StartScheduledCallersRequest}
 */
proto.ondewo.vtsi.StartScheduledCallersRequest.deserializeBinaryFromReader = function (msg, reader) {
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
				var value = new proto.ondewo.vtsi.StartScheduledCallerRequest();
				reader.readMessage(value, proto.ondewo.vtsi.StartScheduledCallerRequest.deserializeBinaryFromReader);
				msg.addScheduledCallerRequests(value);
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
proto.ondewo.vtsi.StartScheduledCallersRequest.prototype.serializeBinary = function () {
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
proto.ondewo.vtsi.StartScheduledCallersRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getScheduledCallerRequestsList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(2, f, proto.ondewo.vtsi.StartScheduledCallerRequest.serializeBinaryToWriter);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StartScheduledCallersRequest.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartScheduledCallersRequest} returns this
 */
proto.ondewo.vtsi.StartScheduledCallersRequest.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * repeated StartScheduledCallerRequest scheduled_caller_requests = 2;
 * @return {!Array<!proto.ondewo.vtsi.StartScheduledCallerRequest>}
 */
proto.ondewo.vtsi.StartScheduledCallersRequest.prototype.getScheduledCallerRequestsList = function () {
	return /** @type{!Array<!proto.ondewo.vtsi.StartScheduledCallerRequest>} */ (
		jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.StartScheduledCallerRequest, 2)
	);
};

/**
 * @param {!Array<!proto.ondewo.vtsi.StartScheduledCallerRequest>} value
 * @return {!proto.ondewo.vtsi.StartScheduledCallersRequest} returns this
 */
proto.ondewo.vtsi.StartScheduledCallersRequest.prototype.setScheduledCallerRequestsList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.ondewo.vtsi.StartScheduledCallerRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.StartScheduledCallerRequest}
 */
proto.ondewo.vtsi.StartScheduledCallersRequest.prototype.addScheduledCallerRequests = function (opt_value, opt_index) {
	return jspb.Message.addToRepeatedWrapperField(
		this,
		2,
		opt_value,
		proto.ondewo.vtsi.StartScheduledCallerRequest,
		opt_index
	);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StartScheduledCallersRequest} returns this
 */
proto.ondewo.vtsi.StartScheduledCallersRequest.prototype.clearScheduledCallerRequestsList = function () {
	return this.setScheduledCallerRequestsList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.StartScheduledCallersResponse.repeatedFields_ = [2];

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
	proto.ondewo.vtsi.StartScheduledCallersResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.StartScheduledCallersResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.StartScheduledCallersResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.StartScheduledCallersResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				scheduledCallerResponsesList: jspb.Message.toObjectList(
					msg.getScheduledCallerResponsesList(),
					proto.ondewo.vtsi.StartScheduledCallerResponse.toObject,
					includeInstance
				)
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
 * @return {!proto.ondewo.vtsi.StartScheduledCallersResponse}
 */
proto.ondewo.vtsi.StartScheduledCallersResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StartScheduledCallersResponse();
	return proto.ondewo.vtsi.StartScheduledCallersResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StartScheduledCallersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StartScheduledCallersResponse}
 */
proto.ondewo.vtsi.StartScheduledCallersResponse.deserializeBinaryFromReader = function (msg, reader) {
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
				var value = new proto.ondewo.vtsi.StartScheduledCallerResponse();
				reader.readMessage(value, proto.ondewo.vtsi.StartScheduledCallerResponse.deserializeBinaryFromReader);
				msg.addScheduledCallerResponses(value);
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
proto.ondewo.vtsi.StartScheduledCallersResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.StartScheduledCallersResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StartScheduledCallersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StartScheduledCallersResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getScheduledCallerResponsesList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(2, f, proto.ondewo.vtsi.StartScheduledCallerResponse.serializeBinaryToWriter);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StartScheduledCallersResponse.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartScheduledCallersResponse} returns this
 */
proto.ondewo.vtsi.StartScheduledCallersResponse.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * repeated StartScheduledCallerResponse scheduled_caller_responses = 2;
 * @return {!Array<!proto.ondewo.vtsi.StartScheduledCallerResponse>}
 */
proto.ondewo.vtsi.StartScheduledCallersResponse.prototype.getScheduledCallerResponsesList = function () {
	return /** @type{!Array<!proto.ondewo.vtsi.StartScheduledCallerResponse>} */ (
		jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.StartScheduledCallerResponse, 2)
	);
};

/**
 * @param {!Array<!proto.ondewo.vtsi.StartScheduledCallerResponse>} value
 * @return {!proto.ondewo.vtsi.StartScheduledCallersResponse} returns this
 */
proto.ondewo.vtsi.StartScheduledCallersResponse.prototype.setScheduledCallerResponsesList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.ondewo.vtsi.StartScheduledCallerResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.StartScheduledCallerResponse}
 */
proto.ondewo.vtsi.StartScheduledCallersResponse.prototype.addScheduledCallerResponses = function (
	opt_value,
	opt_index
) {
	return jspb.Message.addToRepeatedWrapperField(
		this,
		2,
		opt_value,
		proto.ondewo.vtsi.StartScheduledCallerResponse,
		opt_index
	);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StartScheduledCallersResponse} returns this
 */
proto.ondewo.vtsi.StartScheduledCallersResponse.prototype.clearScheduledCallerResponsesList = function () {
	return this.setScheduledCallerResponsesList([]);
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
	proto.ondewo.vtsi.StartScheduledCallerResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.StartScheduledCallerResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.StartScheduledCallerResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.StartScheduledCallerResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				scheduledCaller:
					(f = msg.getScheduledCaller()) && proto.ondewo.vtsi.ScheduledCaller.toObject(includeInstance, f),
				errorMessage: jspb.Message.getFieldWithDefault(msg, 3, '')
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
 * @return {!proto.ondewo.vtsi.StartScheduledCallerResponse}
 */
proto.ondewo.vtsi.StartScheduledCallerResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StartScheduledCallerResponse();
	return proto.ondewo.vtsi.StartScheduledCallerResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StartScheduledCallerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StartScheduledCallerResponse}
 */
proto.ondewo.vtsi.StartScheduledCallerResponse.deserializeBinaryFromReader = function (msg, reader) {
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
				var value = new proto.ondewo.vtsi.ScheduledCaller();
				reader.readMessage(value, proto.ondewo.vtsi.ScheduledCaller.deserializeBinaryFromReader);
				msg.setScheduledCaller(value);
				break;
			case 3:
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
proto.ondewo.vtsi.StartScheduledCallerResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.StartScheduledCallerResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StartScheduledCallerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StartScheduledCallerResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getScheduledCaller();
	if (f != null) {
		writer.writeMessage(2, f, proto.ondewo.vtsi.ScheduledCaller.serializeBinaryToWriter);
	}
	f = message.getErrorMessage();
	if (f.length > 0) {
		writer.writeString(3, f);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StartScheduledCallerResponse.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartScheduledCallerResponse} returns this
 */
proto.ondewo.vtsi.StartScheduledCallerResponse.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional ScheduledCaller scheduled_caller = 2;
 * @return {?proto.ondewo.vtsi.ScheduledCaller}
 */
proto.ondewo.vtsi.StartScheduledCallerResponse.prototype.getScheduledCaller = function () {
	return /** @type{?proto.ondewo.vtsi.ScheduledCaller} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.ScheduledCaller, 2)
	);
};

/**
 * @param {?proto.ondewo.vtsi.ScheduledCaller|undefined} value
 * @return {!proto.ondewo.vtsi.StartScheduledCallerResponse} returns this
 */
proto.ondewo.vtsi.StartScheduledCallerResponse.prototype.setScheduledCaller = function (value) {
	return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.StartScheduledCallerResponse} returns this
 */
proto.ondewo.vtsi.StartScheduledCallerResponse.prototype.clearScheduledCaller = function () {
	return this.setScheduledCaller(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.StartScheduledCallerResponse.prototype.hasScheduledCaller = function () {
	return jspb.Message.getField(this, 2) != null;
};

/**
 * optional string error_message = 3;
 * @return {string}
 */
proto.ondewo.vtsi.StartScheduledCallerResponse.prototype.getErrorMessage = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StartScheduledCallerResponse} returns this
 */
proto.ondewo.vtsi.StartScheduledCallerResponse.prototype.setErrorMessage = function (value) {
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
	proto.ondewo.vtsi.ScheduledCaller.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.ScheduledCaller.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.ScheduledCaller} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.ScheduledCaller.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				name: jspb.Message.getFieldWithDefault(msg, 1, ''),
				callName: jspb.Message.getFieldWithDefault(msg, 2, ''),
				sipConfig: (f = msg.getSipConfig()) && proto.ondewo.vtsi.SipBaseConfig.toObject(includeInstance, f),
				commonServicesConfig:
					(f = msg.getCommonServicesConfig()) && proto.ondewo.vtsi.CommonServicesConfig.toObject(includeInstance, f),
				scheduledTime:
					(f = msg.getScheduledTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.vtsi.ScheduledCaller}
 */
proto.ondewo.vtsi.ScheduledCaller.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.ScheduledCaller();
	return proto.ondewo.vtsi.ScheduledCaller.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.ScheduledCaller} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.ScheduledCaller}
 */
proto.ondewo.vtsi.ScheduledCaller.deserializeBinaryFromReader = function (msg, reader) {
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
				msg.setCallName(value);
				break;
			case 3:
				var value = new proto.ondewo.vtsi.SipBaseConfig();
				reader.readMessage(value, proto.ondewo.vtsi.SipBaseConfig.deserializeBinaryFromReader);
				msg.setSipConfig(value);
				break;
			case 4:
				var value = new proto.ondewo.vtsi.CommonServicesConfig();
				reader.readMessage(value, proto.ondewo.vtsi.CommonServicesConfig.deserializeBinaryFromReader);
				msg.setCommonServicesConfig(value);
				break;
			case 5:
				var value = new google_protobuf_timestamp_pb.Timestamp();
				reader.readMessage(value, google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
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
proto.ondewo.vtsi.ScheduledCaller.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.ScheduledCaller.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.ScheduledCaller} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ScheduledCaller.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getCallName();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
	f = message.getSipConfig();
	if (f != null) {
		writer.writeMessage(3, f, proto.ondewo.vtsi.SipBaseConfig.serializeBinaryToWriter);
	}
	f = message.getCommonServicesConfig();
	if (f != null) {
		writer.writeMessage(4, f, proto.ondewo.vtsi.CommonServicesConfig.serializeBinaryToWriter);
	}
	f = message.getScheduledTime();
	if (f != null) {
		writer.writeMessage(5, f, google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter);
	}
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.ScheduledCaller.prototype.getName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ScheduledCaller} returns this
 */
proto.ondewo.vtsi.ScheduledCaller.prototype.setName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string call_name = 2;
 * @return {string}
 */
proto.ondewo.vtsi.ScheduledCaller.prototype.getCallName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ScheduledCaller} returns this
 */
proto.ondewo.vtsi.ScheduledCaller.prototype.setCallName = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional SipBaseConfig sip_config = 3;
 * @return {?proto.ondewo.vtsi.SipBaseConfig}
 */
proto.ondewo.vtsi.ScheduledCaller.prototype.getSipConfig = function () {
	return /** @type{?proto.ondewo.vtsi.SipBaseConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.SipBaseConfig, 3)
	);
};

/**
 * @param {?proto.ondewo.vtsi.SipBaseConfig|undefined} value
 * @return {!proto.ondewo.vtsi.ScheduledCaller} returns this
 */
proto.ondewo.vtsi.ScheduledCaller.prototype.setSipConfig = function (value) {
	return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.ScheduledCaller} returns this
 */
proto.ondewo.vtsi.ScheduledCaller.prototype.clearSipConfig = function () {
	return this.setSipConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ScheduledCaller.prototype.hasSipConfig = function () {
	return jspb.Message.getField(this, 3) != null;
};

/**
 * optional CommonServicesConfig common_services_config = 4;
 * @return {?proto.ondewo.vtsi.CommonServicesConfig}
 */
proto.ondewo.vtsi.ScheduledCaller.prototype.getCommonServicesConfig = function () {
	return /** @type{?proto.ondewo.vtsi.CommonServicesConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.CommonServicesConfig, 4)
	);
};

/**
 * @param {?proto.ondewo.vtsi.CommonServicesConfig|undefined} value
 * @return {!proto.ondewo.vtsi.ScheduledCaller} returns this
 */
proto.ondewo.vtsi.ScheduledCaller.prototype.setCommonServicesConfig = function (value) {
	return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.ScheduledCaller} returns this
 */
proto.ondewo.vtsi.ScheduledCaller.prototype.clearCommonServicesConfig = function () {
	return this.setCommonServicesConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ScheduledCaller.prototype.hasCommonServicesConfig = function () {
	return jspb.Message.getField(this, 4) != null;
};

/**
 * optional google.protobuf.Timestamp scheduled_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.ScheduledCaller.prototype.getScheduledTime = function () {
	return /** @type{?proto.google.protobuf.Timestamp} */ (
		jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5)
	);
};

/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.ScheduledCaller} returns this
 */
proto.ondewo.vtsi.ScheduledCaller.prototype.setScheduledTime = function (value) {
	return jspb.Message.setWrapperField(this, 5, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.ScheduledCaller} returns this
 */
proto.ondewo.vtsi.ScheduledCaller.prototype.clearScheduledTime = function () {
	return this.setScheduledTime(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ScheduledCaller.prototype.hasScheduledTime = function () {
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
	proto.ondewo.vtsi.StopCallRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.StopCallRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.StopCallRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.StopCallRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				callName: jspb.Message.getFieldWithDefault(msg, 2, '')
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
 * @return {!proto.ondewo.vtsi.StopCallRequest}
 */
proto.ondewo.vtsi.StopCallRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StopCallRequest();
	return proto.ondewo.vtsi.StopCallRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StopCallRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StopCallRequest}
 */
proto.ondewo.vtsi.StopCallRequest.deserializeBinaryFromReader = function (msg, reader) {
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
				msg.setCallName(value);
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
proto.ondewo.vtsi.StopCallRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.StopCallRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StopCallRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StopCallRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getCallName();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StopCallRequest.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StopCallRequest} returns this
 */
proto.ondewo.vtsi.StopCallRequest.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string call_name = 2;
 * @return {string}
 */
proto.ondewo.vtsi.StopCallRequest.prototype.getCallName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StopCallRequest} returns this
 */
proto.ondewo.vtsi.StopCallRequest.prototype.setCallName = function (value) {
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
	proto.ondewo.vtsi.StopCallResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.StopCallResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.StopCallResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.StopCallResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				callName: jspb.Message.getFieldWithDefault(msg, 2, ''),
				errorMessage: jspb.Message.getFieldWithDefault(msg, 3, '')
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
 * @return {!proto.ondewo.vtsi.StopCallResponse}
 */
proto.ondewo.vtsi.StopCallResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StopCallResponse();
	return proto.ondewo.vtsi.StopCallResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StopCallResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StopCallResponse}
 */
proto.ondewo.vtsi.StopCallResponse.deserializeBinaryFromReader = function (msg, reader) {
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
				msg.setCallName(value);
				break;
			case 3:
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
proto.ondewo.vtsi.StopCallResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.StopCallResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StopCallResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StopCallResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getCallName();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
	f = message.getErrorMessage();
	if (f.length > 0) {
		writer.writeString(3, f);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StopCallResponse.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StopCallResponse} returns this
 */
proto.ondewo.vtsi.StopCallResponse.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string call_name = 2;
 * @return {string}
 */
proto.ondewo.vtsi.StopCallResponse.prototype.getCallName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StopCallResponse} returns this
 */
proto.ondewo.vtsi.StopCallResponse.prototype.setCallName = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string error_message = 3;
 * @return {string}
 */
proto.ondewo.vtsi.StopCallResponse.prototype.getErrorMessage = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StopCallResponse} returns this
 */
proto.ondewo.vtsi.StopCallResponse.prototype.setErrorMessage = function (value) {
	return jspb.Message.setProto3StringField(this, 3, value);
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
	proto.ondewo.vtsi.StopCallsRequest.prototype.toObject = function (opt_includeInstance) {
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
	proto.ondewo.vtsi.StopCallsRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				callNamesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
proto.ondewo.vtsi.StopCallsRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StopCallsRequest();
	return proto.ondewo.vtsi.StopCallsRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StopCallsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StopCallsRequest}
 */
proto.ondewo.vtsi.StopCallsRequest.deserializeBinaryFromReader = function (msg, reader) {
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
				msg.addCallNames(value);
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
proto.ondewo.vtsi.StopCallsRequest.prototype.serializeBinary = function () {
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
proto.ondewo.vtsi.StopCallsRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getCallNamesList();
	if (f.length > 0) {
		writer.writeRepeatedString(2, f);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StopCallsRequest.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StopCallsRequest} returns this
 */
proto.ondewo.vtsi.StopCallsRequest.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * repeated string call_names = 2;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.StopCallsRequest.prototype.getCallNamesList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.StopCallsRequest} returns this
 */
proto.ondewo.vtsi.StopCallsRequest.prototype.setCallNamesList = function (value) {
	return jspb.Message.setField(this, 2, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.StopCallsRequest} returns this
 */
proto.ondewo.vtsi.StopCallsRequest.prototype.addCallNames = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StopCallsRequest} returns this
 */
proto.ondewo.vtsi.StopCallsRequest.prototype.clearCallNamesList = function () {
	return this.setCallNamesList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.StopCallsResponse.repeatedFields_ = [1];

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
	proto.ondewo.vtsi.StopCallsResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.StopCallsResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.StopCallsResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.StopCallsResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				stopCallResponsesList: jspb.Message.toObjectList(
					msg.getStopCallResponsesList(),
					proto.ondewo.vtsi.StopCallResponse.toObject,
					includeInstance
				),
				errorMessage: jspb.Message.getFieldWithDefault(msg, 2, '')
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
 * @return {!proto.ondewo.vtsi.StopCallsResponse}
 */
proto.ondewo.vtsi.StopCallsResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StopCallsResponse();
	return proto.ondewo.vtsi.StopCallsResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StopCallsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StopCallsResponse}
 */
proto.ondewo.vtsi.StopCallsResponse.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new proto.ondewo.vtsi.StopCallResponse();
				reader.readMessage(value, proto.ondewo.vtsi.StopCallResponse.deserializeBinaryFromReader);
				msg.addStopCallResponses(value);
				break;
			case 2:
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
proto.ondewo.vtsi.StopCallsResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.StopCallsResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.StopCallsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.StopCallsResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getStopCallResponsesList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(1, f, proto.ondewo.vtsi.StopCallResponse.serializeBinaryToWriter);
	}
	f = message.getErrorMessage();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
};

/**
 * repeated StopCallResponse stop_call_responses = 1;
 * @return {!Array<!proto.ondewo.vtsi.StopCallResponse>}
 */
proto.ondewo.vtsi.StopCallsResponse.prototype.getStopCallResponsesList = function () {
	return /** @type{!Array<!proto.ondewo.vtsi.StopCallResponse>} */ (
		jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.StopCallResponse, 1)
	);
};

/**
 * @param {!Array<!proto.ondewo.vtsi.StopCallResponse>} value
 * @return {!proto.ondewo.vtsi.StopCallsResponse} returns this
 */
proto.ondewo.vtsi.StopCallsResponse.prototype.setStopCallResponsesList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.ondewo.vtsi.StopCallResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.StopCallResponse}
 */
proto.ondewo.vtsi.StopCallsResponse.prototype.addStopCallResponses = function (opt_value, opt_index) {
	return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.vtsi.StopCallResponse, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.StopCallsResponse} returns this
 */
proto.ondewo.vtsi.StopCallsResponse.prototype.clearStopCallResponsesList = function () {
	return this.setStopCallResponsesList([]);
};

/**
 * optional string error_message = 2;
 * @return {string}
 */
proto.ondewo.vtsi.StopCallsResponse.prototype.getErrorMessage = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StopCallsResponse} returns this
 */
proto.ondewo.vtsi.StopCallsResponse.prototype.setErrorMessage = function (value) {
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
	proto.ondewo.vtsi.StopAllCallsRequest.prototype.toObject = function (opt_includeInstance) {
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
	proto.ondewo.vtsi.StopAllCallsRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, '')
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
proto.ondewo.vtsi.StopAllCallsRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.StopAllCallsRequest();
	return proto.ondewo.vtsi.StopAllCallsRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.StopAllCallsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.StopAllCallsRequest}
 */
proto.ondewo.vtsi.StopAllCallsRequest.deserializeBinaryFromReader = function (msg, reader) {
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
proto.ondewo.vtsi.StopAllCallsRequest.prototype.serializeBinary = function () {
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
proto.ondewo.vtsi.StopAllCallsRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.StopAllCallsRequest.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.StopAllCallsRequest} returns this
 */
proto.ondewo.vtsi.StopAllCallsRequest.prototype.setVtsiProjectName = function (value) {
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
	proto.ondewo.vtsi.TransferCallRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.TransferCallRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.TransferCallRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.TransferCallRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				callName: jspb.Message.getFieldWithDefault(msg, 2, ''),
				transferId: jspb.Message.getFieldWithDefault(msg, 3, '')
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
 * @return {!proto.ondewo.vtsi.TransferCallRequest}
 */
proto.ondewo.vtsi.TransferCallRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.TransferCallRequest();
	return proto.ondewo.vtsi.TransferCallRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.TransferCallRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.TransferCallRequest}
 */
proto.ondewo.vtsi.TransferCallRequest.deserializeBinaryFromReader = function (msg, reader) {
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
				msg.setCallName(value);
				break;
			case 3:
				var value = /** @type {string} */ (reader.readString());
				msg.setTransferId(value);
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
proto.ondewo.vtsi.TransferCallRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.TransferCallRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.TransferCallRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.TransferCallRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getCallName();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
	f = message.getTransferId();
	if (f.length > 0) {
		writer.writeString(3, f);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.TransferCallRequest.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.TransferCallRequest} returns this
 */
proto.ondewo.vtsi.TransferCallRequest.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string call_name = 2;
 * @return {string}
 */
proto.ondewo.vtsi.TransferCallRequest.prototype.getCallName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.TransferCallRequest} returns this
 */
proto.ondewo.vtsi.TransferCallRequest.prototype.setCallName = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string transfer_id = 3;
 * @return {string}
 */
proto.ondewo.vtsi.TransferCallRequest.prototype.getTransferId = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.TransferCallRequest} returns this
 */
proto.ondewo.vtsi.TransferCallRequest.prototype.setTransferId = function (value) {
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
	proto.ondewo.vtsi.TransferCallResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.TransferCallResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.TransferCallResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.TransferCallResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				callName: jspb.Message.getFieldWithDefault(msg, 2, ''),
				transferId: jspb.Message.getFieldWithDefault(msg, 3, ''),
				errorMessage: jspb.Message.getFieldWithDefault(msg, 4, '')
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
 * @return {!proto.ondewo.vtsi.TransferCallResponse}
 */
proto.ondewo.vtsi.TransferCallResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.TransferCallResponse();
	return proto.ondewo.vtsi.TransferCallResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.TransferCallResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.TransferCallResponse}
 */
proto.ondewo.vtsi.TransferCallResponse.deserializeBinaryFromReader = function (msg, reader) {
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
				msg.setCallName(value);
				break;
			case 3:
				var value = /** @type {string} */ (reader.readString());
				msg.setTransferId(value);
				break;
			case 4:
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
proto.ondewo.vtsi.TransferCallResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.TransferCallResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.TransferCallResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.TransferCallResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getCallName();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
	f = message.getTransferId();
	if (f.length > 0) {
		writer.writeString(3, f);
	}
	f = message.getErrorMessage();
	if (f.length > 0) {
		writer.writeString(4, f);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.TransferCallResponse.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.TransferCallResponse} returns this
 */
proto.ondewo.vtsi.TransferCallResponse.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string call_name = 2;
 * @return {string}
 */
proto.ondewo.vtsi.TransferCallResponse.prototype.getCallName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.TransferCallResponse} returns this
 */
proto.ondewo.vtsi.TransferCallResponse.prototype.setCallName = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string transfer_id = 3;
 * @return {string}
 */
proto.ondewo.vtsi.TransferCallResponse.prototype.getTransferId = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.TransferCallResponse} returns this
 */
proto.ondewo.vtsi.TransferCallResponse.prototype.setTransferId = function (value) {
	return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string error_message = 4;
 * @return {string}
 */
proto.ondewo.vtsi.TransferCallResponse.prototype.getErrorMessage = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.TransferCallResponse} returns this
 */
proto.ondewo.vtsi.TransferCallResponse.prototype.setErrorMessage = function (value) {
	return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.TransferCallsRequest.repeatedFields_ = [2];

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
	proto.ondewo.vtsi.TransferCallsRequest.prototype.toObject = function (opt_includeInstance) {
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
	proto.ondewo.vtsi.TransferCallsRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				transferCallRequestsList: jspb.Message.toObjectList(
					msg.getTransferCallRequestsList(),
					proto.ondewo.vtsi.TransferCallRequest.toObject,
					includeInstance
				)
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
proto.ondewo.vtsi.TransferCallsRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.TransferCallsRequest();
	return proto.ondewo.vtsi.TransferCallsRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.TransferCallsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.TransferCallsRequest}
 */
proto.ondewo.vtsi.TransferCallsRequest.deserializeBinaryFromReader = function (msg, reader) {
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
				var value = new proto.ondewo.vtsi.TransferCallRequest();
				reader.readMessage(value, proto.ondewo.vtsi.TransferCallRequest.deserializeBinaryFromReader);
				msg.addTransferCallRequests(value);
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
proto.ondewo.vtsi.TransferCallsRequest.prototype.serializeBinary = function () {
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
proto.ondewo.vtsi.TransferCallsRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getTransferCallRequestsList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(2, f, proto.ondewo.vtsi.TransferCallRequest.serializeBinaryToWriter);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.TransferCallsRequest.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.TransferCallsRequest} returns this
 */
proto.ondewo.vtsi.TransferCallsRequest.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * repeated TransferCallRequest transfer_call_requests = 2;
 * @return {!Array<!proto.ondewo.vtsi.TransferCallRequest>}
 */
proto.ondewo.vtsi.TransferCallsRequest.prototype.getTransferCallRequestsList = function () {
	return /** @type{!Array<!proto.ondewo.vtsi.TransferCallRequest>} */ (
		jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.TransferCallRequest, 2)
	);
};

/**
 * @param {!Array<!proto.ondewo.vtsi.TransferCallRequest>} value
 * @return {!proto.ondewo.vtsi.TransferCallsRequest} returns this
 */
proto.ondewo.vtsi.TransferCallsRequest.prototype.setTransferCallRequestsList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.ondewo.vtsi.TransferCallRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.TransferCallRequest}
 */
proto.ondewo.vtsi.TransferCallsRequest.prototype.addTransferCallRequests = function (opt_value, opt_index) {
	return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.vtsi.TransferCallRequest, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.TransferCallsRequest} returns this
 */
proto.ondewo.vtsi.TransferCallsRequest.prototype.clearTransferCallRequestsList = function () {
	return this.setTransferCallRequestsList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.TransferCallsResponse.repeatedFields_ = [2];

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
	proto.ondewo.vtsi.TransferCallsResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.TransferCallsResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.TransferCallsResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.TransferCallsResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				transferCallResponsesList: jspb.Message.toObjectList(
					msg.getTransferCallResponsesList(),
					proto.ondewo.vtsi.TransferCallResponse.toObject,
					includeInstance
				),
				errorMessage: jspb.Message.getFieldWithDefault(msg, 3, '')
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
 * @return {!proto.ondewo.vtsi.TransferCallsResponse}
 */
proto.ondewo.vtsi.TransferCallsResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.TransferCallsResponse();
	return proto.ondewo.vtsi.TransferCallsResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.TransferCallsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.TransferCallsResponse}
 */
proto.ondewo.vtsi.TransferCallsResponse.deserializeBinaryFromReader = function (msg, reader) {
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
				var value = new proto.ondewo.vtsi.TransferCallResponse();
				reader.readMessage(value, proto.ondewo.vtsi.TransferCallResponse.deserializeBinaryFromReader);
				msg.addTransferCallResponses(value);
				break;
			case 3:
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
proto.ondewo.vtsi.TransferCallsResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.TransferCallsResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.TransferCallsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.TransferCallsResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getTransferCallResponsesList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(2, f, proto.ondewo.vtsi.TransferCallResponse.serializeBinaryToWriter);
	}
	f = message.getErrorMessage();
	if (f.length > 0) {
		writer.writeString(3, f);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.TransferCallsResponse.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.TransferCallsResponse} returns this
 */
proto.ondewo.vtsi.TransferCallsResponse.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * repeated TransferCallResponse transfer_call_responses = 2;
 * @return {!Array<!proto.ondewo.vtsi.TransferCallResponse>}
 */
proto.ondewo.vtsi.TransferCallsResponse.prototype.getTransferCallResponsesList = function () {
	return /** @type{!Array<!proto.ondewo.vtsi.TransferCallResponse>} */ (
		jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.TransferCallResponse, 2)
	);
};

/**
 * @param {!Array<!proto.ondewo.vtsi.TransferCallResponse>} value
 * @return {!proto.ondewo.vtsi.TransferCallsResponse} returns this
 */
proto.ondewo.vtsi.TransferCallsResponse.prototype.setTransferCallResponsesList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.ondewo.vtsi.TransferCallResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.TransferCallResponse}
 */
proto.ondewo.vtsi.TransferCallsResponse.prototype.addTransferCallResponses = function (opt_value, opt_index) {
	return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.vtsi.TransferCallResponse, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.TransferCallsResponse} returns this
 */
proto.ondewo.vtsi.TransferCallsResponse.prototype.clearTransferCallResponsesList = function () {
	return this.setTransferCallResponsesList([]);
};

/**
 * optional string error_message = 3;
 * @return {string}
 */
proto.ondewo.vtsi.TransferCallsResponse.prototype.getErrorMessage = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.TransferCallsResponse} returns this
 */
proto.ondewo.vtsi.TransferCallsResponse.prototype.setErrorMessage = function (value) {
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
	proto.ondewo.vtsi.GetCallRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.GetCallRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.GetCallRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.GetCallRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				callName: jspb.Message.getFieldWithDefault(msg, 2, ''),
				callView: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.ondewo.vtsi.GetCallRequest}
 */
proto.ondewo.vtsi.GetCallRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.GetCallRequest();
	return proto.ondewo.vtsi.GetCallRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.GetCallRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.GetCallRequest}
 */
proto.ondewo.vtsi.GetCallRequest.deserializeBinaryFromReader = function (msg, reader) {
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
				msg.setCallName(value);
				break;
			case 3:
				var value = /** @type {!proto.ondewo.vtsi.CallView} */ (reader.readEnum());
				msg.setCallView(value);
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
proto.ondewo.vtsi.GetCallRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.GetCallRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.GetCallRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.GetCallRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getCallName();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
	f = /** @type {!proto.ondewo.vtsi.CallView} */ (jspb.Message.getField(message, 3));
	if (f != null) {
		writer.writeEnum(3, f);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.GetCallRequest.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.GetCallRequest} returns this
 */
proto.ondewo.vtsi.GetCallRequest.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string call_name = 2;
 * @return {string}
 */
proto.ondewo.vtsi.GetCallRequest.prototype.getCallName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.GetCallRequest} returns this
 */
proto.ondewo.vtsi.GetCallRequest.prototype.setCallName = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional CallView call_view = 3;
 * @return {!proto.ondewo.vtsi.CallView}
 */
proto.ondewo.vtsi.GetCallRequest.prototype.getCallView = function () {
	return /** @type {!proto.ondewo.vtsi.CallView} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {!proto.ondewo.vtsi.CallView} value
 * @return {!proto.ondewo.vtsi.GetCallRequest} returns this
 */
proto.ondewo.vtsi.GetCallRequest.prototype.setCallView = function (value) {
	return jspb.Message.setField(this, 3, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.GetCallRequest} returns this
 */
proto.ondewo.vtsi.GetCallRequest.prototype.clearCallView = function () {
	return jspb.Message.setField(this, 3, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.GetCallRequest.prototype.hasCallView = function () {
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
	proto.ondewo.vtsi.Call.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.Call.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.Call} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.Call.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				name: jspb.Message.getFieldWithDefault(msg, 1, ''),
				sipAccount: jspb.Message.getFieldWithDefault(msg, 2, ''),
				containerName: jspb.Message.getFieldWithDefault(msg, 3, ''),
				callType: jspb.Message.getFieldWithDefault(msg, 4, 0),
				phoneNumber: jspb.Message.getFieldWithDefault(msg, 5, ''),
				startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
				endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
				sipStatusType: jspb.Message.getFieldWithDefault(msg, 8, 0),
				sipStatus: (f = msg.getSipStatus()) && ondewo_sip_sip_pb.SipStatus.toObject(includeInstance, f),
				sipStatusHistory:
					(f = msg.getSipStatusHistory()) && ondewo_sip_sip_pb.SipStatusHistoryResponse.toObject(includeInstance, f),
				servicesStatuses:
					(f = msg.getServicesStatuses()) && proto.ondewo.vtsi.AllServicesStatuses.toObject(includeInstance, f),
				active: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 13, ''),
				commonServicesConfig:
					(f = msg.getCommonServicesConfig()) && proto.ondewo.vtsi.CommonServicesConfig.toObject(includeInstance, f),
				sipPort: jspb.Message.getFieldWithDefault(msg, 15, 0),
				csiPort: jspb.Message.getFieldWithDefault(msg, 16, 0),
				nluSessionName: jspb.Message.getFieldWithDefault(msg, 17, ''),
				platforms: jspb.Message.getFieldWithDefault(msg, 18, 0)
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
 * @return {!proto.ondewo.vtsi.Call}
 */
proto.ondewo.vtsi.Call.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.Call();
	return proto.ondewo.vtsi.Call.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.Call} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.Call}
 */
proto.ondewo.vtsi.Call.deserializeBinaryFromReader = function (msg, reader) {
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
				var value = new google_protobuf_timestamp_pb.Timestamp();
				reader.readMessage(value, google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
				msg.setStartTime(value);
				break;
			case 7:
				var value = new google_protobuf_timestamp_pb.Timestamp();
				reader.readMessage(value, google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
				msg.setEndTime(value);
				break;
			case 8:
				var value = /** @type {!proto.ondewo.sip.SipStatus.StatusType} */ (reader.readEnum());
				msg.setSipStatusType(value);
				break;
			case 9:
				var value = new ondewo_sip_sip_pb.SipStatus();
				reader.readMessage(value, ondewo_sip_sip_pb.SipStatus.deserializeBinaryFromReader);
				msg.setSipStatus(value);
				break;
			case 10:
				var value = new ondewo_sip_sip_pb.SipStatusHistoryResponse();
				reader.readMessage(value, ondewo_sip_sip_pb.SipStatusHistoryResponse.deserializeBinaryFromReader);
				msg.setSipStatusHistory(value);
				break;
			case 11:
				var value = new proto.ondewo.vtsi.AllServicesStatuses();
				reader.readMessage(value, proto.ondewo.vtsi.AllServicesStatuses.deserializeBinaryFromReader);
				msg.setServicesStatuses(value);
				break;
			case 12:
				var value = /** @type {boolean} */ (reader.readBool());
				msg.setActive(value);
				break;
			case 13:
				var value = /** @type {string} */ (reader.readString());
				msg.setVtsiProjectName(value);
				break;
			case 14:
				var value = new proto.ondewo.vtsi.CommonServicesConfig();
				reader.readMessage(value, proto.ondewo.vtsi.CommonServicesConfig.deserializeBinaryFromReader);
				msg.setCommonServicesConfig(value);
				break;
			case 15:
				var value = /** @type {number} */ (reader.readInt32());
				msg.setSipPort(value);
				break;
			case 16:
				var value = /** @type {number} */ (reader.readInt32());
				msg.setCsiPort(value);
				break;
			case 17:
				var value = /** @type {string} */ (reader.readString());
				msg.setNluSessionName(value);
				break;
			case 18:
				var value = /** @type {!proto.ondewo.nlu.Intent.Message.Platform} */ (reader.readEnum());
				msg.setPlatforms(value);
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
proto.ondewo.vtsi.Call.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.Call.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.Call} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.Call.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getSipAccount();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
	f = message.getContainerName();
	if (f.length > 0) {
		writer.writeString(3, f);
	}
	f = message.getCallType();
	if (f !== 0.0) {
		writer.writeEnum(4, f);
	}
	f = message.getPhoneNumber();
	if (f.length > 0) {
		writer.writeString(5, f);
	}
	f = message.getStartTime();
	if (f != null) {
		writer.writeMessage(6, f, google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter);
	}
	f = message.getEndTime();
	if (f != null) {
		writer.writeMessage(7, f, google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter);
	}
	f = message.getSipStatusType();
	if (f !== 0.0) {
		writer.writeEnum(8, f);
	}
	f = message.getSipStatus();
	if (f != null) {
		writer.writeMessage(9, f, ondewo_sip_sip_pb.SipStatus.serializeBinaryToWriter);
	}
	f = message.getSipStatusHistory();
	if (f != null) {
		writer.writeMessage(10, f, ondewo_sip_sip_pb.SipStatusHistoryResponse.serializeBinaryToWriter);
	}
	f = message.getServicesStatuses();
	if (f != null) {
		writer.writeMessage(11, f, proto.ondewo.vtsi.AllServicesStatuses.serializeBinaryToWriter);
	}
	f = message.getActive();
	if (f) {
		writer.writeBool(12, f);
	}
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(13, f);
	}
	f = message.getCommonServicesConfig();
	if (f != null) {
		writer.writeMessage(14, f, proto.ondewo.vtsi.CommonServicesConfig.serializeBinaryToWriter);
	}
	f = /** @type {number} */ (jspb.Message.getField(message, 15));
	if (f != null) {
		writer.writeInt32(15, f);
	}
	f = /** @type {number} */ (jspb.Message.getField(message, 16));
	if (f != null) {
		writer.writeInt32(16, f);
	}
	f = /** @type {string} */ (jspb.Message.getField(message, 17));
	if (f != null) {
		writer.writeString(17, f);
	}
	f = /** @type {!proto.ondewo.nlu.Intent.Message.Platform} */ (jspb.Message.getField(message, 18));
	if (f != null) {
		writer.writeEnum(18, f);
	}
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.Call.prototype.getName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.setName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string sip_account = 2;
 * @return {string}
 */
proto.ondewo.vtsi.Call.prototype.getSipAccount = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.setSipAccount = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string container_name = 3;
 * @return {string}
 */
proto.ondewo.vtsi.Call.prototype.getContainerName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.setContainerName = function (value) {
	return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional CallType call_type = 4;
 * @return {!proto.ondewo.vtsi.CallType}
 */
proto.ondewo.vtsi.Call.prototype.getCallType = function () {
	return /** @type {!proto.ondewo.vtsi.CallType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {!proto.ondewo.vtsi.CallType} value
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.setCallType = function (value) {
	return jspb.Message.setProto3EnumField(this, 4, value);
};

/**
 * optional string phone_number = 5;
 * @return {string}
 */
proto.ondewo.vtsi.Call.prototype.getPhoneNumber = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.setPhoneNumber = function (value) {
	return jspb.Message.setProto3StringField(this, 5, value);
};

/**
 * optional google.protobuf.Timestamp start_time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.Call.prototype.getStartTime = function () {
	return /** @type{?proto.google.protobuf.Timestamp} */ (
		jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6)
	);
};

/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.setStartTime = function (value) {
	return jspb.Message.setWrapperField(this, 6, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.clearStartTime = function () {
	return this.setStartTime(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Call.prototype.hasStartTime = function () {
	return jspb.Message.getField(this, 6) != null;
};

/**
 * optional google.protobuf.Timestamp end_time = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.Call.prototype.getEndTime = function () {
	return /** @type{?proto.google.protobuf.Timestamp} */ (
		jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7)
	);
};

/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.setEndTime = function (value) {
	return jspb.Message.setWrapperField(this, 7, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.clearEndTime = function () {
	return this.setEndTime(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Call.prototype.hasEndTime = function () {
	return jspb.Message.getField(this, 7) != null;
};

/**
 * optional ondewo.sip.SipStatus.StatusType sip_status_type = 8;
 * @return {!proto.ondewo.sip.SipStatus.StatusType}
 */
proto.ondewo.vtsi.Call.prototype.getSipStatusType = function () {
	return /** @type {!proto.ondewo.sip.SipStatus.StatusType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};

/**
 * @param {!proto.ondewo.sip.SipStatus.StatusType} value
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.setSipStatusType = function (value) {
	return jspb.Message.setProto3EnumField(this, 8, value);
};

/**
 * optional ondewo.sip.SipStatus sip_status = 9;
 * @return {?proto.ondewo.sip.SipStatus}
 */
proto.ondewo.vtsi.Call.prototype.getSipStatus = function () {
	return /** @type{?proto.ondewo.sip.SipStatus} */ (jspb.Message.getWrapperField(this, ondewo_sip_sip_pb.SipStatus, 9));
};

/**
 * @param {?proto.ondewo.sip.SipStatus|undefined} value
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.setSipStatus = function (value) {
	return jspb.Message.setWrapperField(this, 9, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.clearSipStatus = function () {
	return this.setSipStatus(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Call.prototype.hasSipStatus = function () {
	return jspb.Message.getField(this, 9) != null;
};

/**
 * optional ondewo.sip.SipStatusHistoryResponse sip_status_history = 10;
 * @return {?proto.ondewo.sip.SipStatusHistoryResponse}
 */
proto.ondewo.vtsi.Call.prototype.getSipStatusHistory = function () {
	return /** @type{?proto.ondewo.sip.SipStatusHistoryResponse} */ (
		jspb.Message.getWrapperField(this, ondewo_sip_sip_pb.SipStatusHistoryResponse, 10)
	);
};

/**
 * @param {?proto.ondewo.sip.SipStatusHistoryResponse|undefined} value
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.setSipStatusHistory = function (value) {
	return jspb.Message.setWrapperField(this, 10, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.clearSipStatusHistory = function () {
	return this.setSipStatusHistory(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Call.prototype.hasSipStatusHistory = function () {
	return jspb.Message.getField(this, 10) != null;
};

/**
 * optional AllServicesStatuses services_statuses = 11;
 * @return {?proto.ondewo.vtsi.AllServicesStatuses}
 */
proto.ondewo.vtsi.Call.prototype.getServicesStatuses = function () {
	return /** @type{?proto.ondewo.vtsi.AllServicesStatuses} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.AllServicesStatuses, 11)
	);
};

/**
 * @param {?proto.ondewo.vtsi.AllServicesStatuses|undefined} value
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.setServicesStatuses = function (value) {
	return jspb.Message.setWrapperField(this, 11, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.clearServicesStatuses = function () {
	return this.setServicesStatuses(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Call.prototype.hasServicesStatuses = function () {
	return jspb.Message.getField(this, 11) != null;
};

/**
 * optional bool active = 12;
 * @return {boolean}
 */
proto.ondewo.vtsi.Call.prototype.getActive = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.setActive = function (value) {
	return jspb.Message.setProto3BooleanField(this, 12, value);
};

/**
 * optional string vtsi_project_name = 13;
 * @return {string}
 */
proto.ondewo.vtsi.Call.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 13, value);
};

/**
 * optional CommonServicesConfig common_services_config = 14;
 * @return {?proto.ondewo.vtsi.CommonServicesConfig}
 */
proto.ondewo.vtsi.Call.prototype.getCommonServicesConfig = function () {
	return /** @type{?proto.ondewo.vtsi.CommonServicesConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.CommonServicesConfig, 14)
	);
};

/**
 * @param {?proto.ondewo.vtsi.CommonServicesConfig|undefined} value
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.setCommonServicesConfig = function (value) {
	return jspb.Message.setWrapperField(this, 14, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.clearCommonServicesConfig = function () {
	return this.setCommonServicesConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Call.prototype.hasCommonServicesConfig = function () {
	return jspb.Message.getField(this, 14) != null;
};

/**
 * optional int32 sip_port = 15;
 * @return {number}
 */
proto.ondewo.vtsi.Call.prototype.getSipPort = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.setSipPort = function (value) {
	return jspb.Message.setField(this, 15, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.clearSipPort = function () {
	return jspb.Message.setField(this, 15, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Call.prototype.hasSipPort = function () {
	return jspb.Message.getField(this, 15) != null;
};

/**
 * optional int32 csi_port = 16;
 * @return {number}
 */
proto.ondewo.vtsi.Call.prototype.getCsiPort = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.setCsiPort = function (value) {
	return jspb.Message.setField(this, 16, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.clearCsiPort = function () {
	return jspb.Message.setField(this, 16, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Call.prototype.hasCsiPort = function () {
	return jspb.Message.getField(this, 16) != null;
};

/**
 * optional string nlu_session_name = 17;
 * @return {string}
 */
proto.ondewo.vtsi.Call.prototype.getNluSessionName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.setNluSessionName = function (value) {
	return jspb.Message.setField(this, 17, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.clearNluSessionName = function () {
	return jspb.Message.setField(this, 17, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Call.prototype.hasNluSessionName = function () {
	return jspb.Message.getField(this, 17) != null;
};

/**
 * optional ondewo.nlu.Intent.Message.Platform platforms = 18;
 * @return {!proto.ondewo.nlu.Intent.Message.Platform}
 */
proto.ondewo.vtsi.Call.prototype.getPlatforms = function () {
	return /** @type {!proto.ondewo.nlu.Intent.Message.Platform} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};

/**
 * @param {!proto.ondewo.nlu.Intent.Message.Platform} value
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.setPlatforms = function (value) {
	return jspb.Message.setField(this, 18, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.Call} returns this
 */
proto.ondewo.vtsi.Call.prototype.clearPlatforms = function () {
	return jspb.Message.setField(this, 18, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.Call.prototype.hasPlatforms = function () {
	return jspb.Message.getField(this, 18) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.CallFilter.repeatedFields_ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];

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
	proto.ondewo.vtsi.CallFilter.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.CallFilter.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.CallFilter} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.CallFilter.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				callNamesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
				nluSessionNamesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
				sipAccountsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
				phoneNumbersList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
				containerNamesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
				sipPortsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
				csiPortsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
				callTypesList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
				sipStatusTypesList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
				callStatus: jspb.Message.getFieldWithDefault(msg, 10, 0),
				startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
				endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
				durationInSMin: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
				durationInSMax: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
				platformsList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f
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
 * @return {!proto.ondewo.vtsi.CallFilter}
 */
proto.ondewo.vtsi.CallFilter.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.CallFilter();
	return proto.ondewo.vtsi.CallFilter.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.CallFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.CallFilter}
 */
proto.ondewo.vtsi.CallFilter.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.addCallNames(value);
				break;
			case 2:
				var value = /** @type {string} */ (reader.readString());
				msg.addNluSessionNames(value);
				break;
			case 3:
				var value = /** @type {string} */ (reader.readString());
				msg.addSipAccounts(value);
				break;
			case 4:
				var value = /** @type {string} */ (reader.readString());
				msg.addPhoneNumbers(value);
				break;
			case 5:
				var value = /** @type {string} */ (reader.readString());
				msg.addContainerNames(value);
				break;
			case 6:
				var value = /** @type {string} */ (reader.readString());
				msg.addSipPorts(value);
				break;
			case 7:
				var value = /** @type {string} */ (reader.readString());
				msg.addCsiPorts(value);
				break;
			case 8:
				var values = /** @type {!Array<!proto.ondewo.vtsi.CallType>} */ (
					reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]
				);
				for (var i = 0; i < values.length; i++) {
					msg.addCallTypes(values[i]);
				}
				break;
			case 9:
				var values = /** @type {!Array<!proto.ondewo.sip.SipStatus.StatusType>} */ (
					reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]
				);
				for (var i = 0; i < values.length; i++) {
					msg.addSipStatusTypes(values[i]);
				}
				break;
			case 10:
				var value = /** @type {!proto.ondewo.vtsi.CallStatus} */ (reader.readEnum());
				msg.setCallStatus(value);
				break;
			case 11:
				var value = new google_protobuf_timestamp_pb.Timestamp();
				reader.readMessage(value, google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
				msg.setStartTime(value);
				break;
			case 12:
				var value = new google_protobuf_timestamp_pb.Timestamp();
				reader.readMessage(value, google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
				msg.setEndTime(value);
				break;
			case 13:
				var value = /** @type {number} */ (reader.readFloat());
				msg.setDurationInSMin(value);
				break;
			case 14:
				var value = /** @type {number} */ (reader.readFloat());
				msg.setDurationInSMax(value);
				break;
			case 15:
				var values = /** @type {!Array<!proto.ondewo.nlu.Intent.Message.Platform>} */ (
					reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]
				);
				for (var i = 0; i < values.length; i++) {
					msg.addPlatforms(values[i]);
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
proto.ondewo.vtsi.CallFilter.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.CallFilter.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.CallFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.CallFilter.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getCallNamesList();
	if (f.length > 0) {
		writer.writeRepeatedString(1, f);
	}
	f = message.getNluSessionNamesList();
	if (f.length > 0) {
		writer.writeRepeatedString(2, f);
	}
	f = message.getSipAccountsList();
	if (f.length > 0) {
		writer.writeRepeatedString(3, f);
	}
	f = message.getPhoneNumbersList();
	if (f.length > 0) {
		writer.writeRepeatedString(4, f);
	}
	f = message.getContainerNamesList();
	if (f.length > 0) {
		writer.writeRepeatedString(5, f);
	}
	f = message.getSipPortsList();
	if (f.length > 0) {
		writer.writeRepeatedString(6, f);
	}
	f = message.getCsiPortsList();
	if (f.length > 0) {
		writer.writeRepeatedString(7, f);
	}
	f = message.getCallTypesList();
	if (f.length > 0) {
		writer.writePackedEnum(8, f);
	}
	f = message.getSipStatusTypesList();
	if (f.length > 0) {
		writer.writePackedEnum(9, f);
	}
	f = /** @type {!proto.ondewo.vtsi.CallStatus} */ (jspb.Message.getField(message, 10));
	if (f != null) {
		writer.writeEnum(10, f);
	}
	f = message.getStartTime();
	if (f != null) {
		writer.writeMessage(11, f, google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter);
	}
	f = message.getEndTime();
	if (f != null) {
		writer.writeMessage(12, f, google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter);
	}
	f = /** @type {number} */ (jspb.Message.getField(message, 13));
	if (f != null) {
		writer.writeFloat(13, f);
	}
	f = /** @type {number} */ (jspb.Message.getField(message, 14));
	if (f != null) {
		writer.writeFloat(14, f);
	}
	f = message.getPlatformsList();
	if (f.length > 0) {
		writer.writePackedEnum(15, f);
	}
};

/**
 * repeated string call_names = 1;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.CallFilter.prototype.getCallNamesList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.setCallNamesList = function (value) {
	return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.addCallNames = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.clearCallNamesList = function () {
	return this.setCallNamesList([]);
};

/**
 * repeated string nlu_session_names = 2;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.CallFilter.prototype.getNluSessionNamesList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.setNluSessionNamesList = function (value) {
	return jspb.Message.setField(this, 2, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.addNluSessionNames = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.clearNluSessionNamesList = function () {
	return this.setNluSessionNamesList([]);
};

/**
 * repeated string sip_accounts = 3;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.CallFilter.prototype.getSipAccountsList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.setSipAccountsList = function (value) {
	return jspb.Message.setField(this, 3, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.addSipAccounts = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.clearSipAccountsList = function () {
	return this.setSipAccountsList([]);
};

/**
 * repeated string phone_numbers = 4;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.CallFilter.prototype.getPhoneNumbersList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.setPhoneNumbersList = function (value) {
	return jspb.Message.setField(this, 4, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.addPhoneNumbers = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.clearPhoneNumbersList = function () {
	return this.setPhoneNumbersList([]);
};

/**
 * repeated string container_names = 5;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.CallFilter.prototype.getContainerNamesList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.setContainerNamesList = function (value) {
	return jspb.Message.setField(this, 5, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.addContainerNames = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.clearContainerNamesList = function () {
	return this.setContainerNamesList([]);
};

/**
 * repeated string sip_ports = 6;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.CallFilter.prototype.getSipPortsList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.setSipPortsList = function (value) {
	return jspb.Message.setField(this, 6, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.addSipPorts = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.clearSipPortsList = function () {
	return this.setSipPortsList([]);
};

/**
 * repeated string csi_ports = 7;
 * @return {!Array<string>}
 */
proto.ondewo.vtsi.CallFilter.prototype.getCsiPortsList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.setCsiPortsList = function (value) {
	return jspb.Message.setField(this, 7, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.addCsiPorts = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.clearCsiPortsList = function () {
	return this.setCsiPortsList([]);
};

/**
 * repeated CallType call_types = 8;
 * @return {!Array<!proto.ondewo.vtsi.CallType>}
 */
proto.ondewo.vtsi.CallFilter.prototype.getCallTypesList = function () {
	return /** @type {!Array<!proto.ondewo.vtsi.CallType>} */ (jspb.Message.getRepeatedField(this, 8));
};

/**
 * @param {!Array<!proto.ondewo.vtsi.CallType>} value
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.setCallTypesList = function (value) {
	return jspb.Message.setField(this, 8, value || []);
};

/**
 * @param {!proto.ondewo.vtsi.CallType} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.addCallTypes = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.clearCallTypesList = function () {
	return this.setCallTypesList([]);
};

/**
 * repeated ondewo.sip.SipStatus.StatusType sip_status_types = 9;
 * @return {!Array<!proto.ondewo.sip.SipStatus.StatusType>}
 */
proto.ondewo.vtsi.CallFilter.prototype.getSipStatusTypesList = function () {
	return /** @type {!Array<!proto.ondewo.sip.SipStatus.StatusType>} */ (jspb.Message.getRepeatedField(this, 9));
};

/**
 * @param {!Array<!proto.ondewo.sip.SipStatus.StatusType>} value
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.setSipStatusTypesList = function (value) {
	return jspb.Message.setField(this, 9, value || []);
};

/**
 * @param {!proto.ondewo.sip.SipStatus.StatusType} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.addSipStatusTypes = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.clearSipStatusTypesList = function () {
	return this.setSipStatusTypesList([]);
};

/**
 * optional CallStatus call_status = 10;
 * @return {!proto.ondewo.vtsi.CallStatus}
 */
proto.ondewo.vtsi.CallFilter.prototype.getCallStatus = function () {
	return /** @type {!proto.ondewo.vtsi.CallStatus} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};

/**
 * @param {!proto.ondewo.vtsi.CallStatus} value
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.setCallStatus = function (value) {
	return jspb.Message.setField(this, 10, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.clearCallStatus = function () {
	return jspb.Message.setField(this, 10, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CallFilter.prototype.hasCallStatus = function () {
	return jspb.Message.getField(this, 10) != null;
};

/**
 * optional google.protobuf.Timestamp start_time = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.CallFilter.prototype.getStartTime = function () {
	return /** @type{?proto.google.protobuf.Timestamp} */ (
		jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11)
	);
};

/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.setStartTime = function (value) {
	return jspb.Message.setWrapperField(this, 11, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.clearStartTime = function () {
	return this.setStartTime(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CallFilter.prototype.hasStartTime = function () {
	return jspb.Message.getField(this, 11) != null;
};

/**
 * optional google.protobuf.Timestamp end_time = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.vtsi.CallFilter.prototype.getEndTime = function () {
	return /** @type{?proto.google.protobuf.Timestamp} */ (
		jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12)
	);
};

/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.setEndTime = function (value) {
	return jspb.Message.setWrapperField(this, 12, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.clearEndTime = function () {
	return this.setEndTime(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CallFilter.prototype.hasEndTime = function () {
	return jspb.Message.getField(this, 12) != null;
};

/**
 * optional float duration_in_s_min = 13;
 * @return {number}
 */
proto.ondewo.vtsi.CallFilter.prototype.getDurationInSMin = function () {
	return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.setDurationInSMin = function (value) {
	return jspb.Message.setField(this, 13, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.clearDurationInSMin = function () {
	return jspb.Message.setField(this, 13, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CallFilter.prototype.hasDurationInSMin = function () {
	return jspb.Message.getField(this, 13) != null;
};

/**
 * optional float duration_in_s_max = 14;
 * @return {number}
 */
proto.ondewo.vtsi.CallFilter.prototype.getDurationInSMax = function () {
	return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.setDurationInSMax = function (value) {
	return jspb.Message.setField(this, 14, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.clearDurationInSMax = function () {
	return jspb.Message.setField(this, 14, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.CallFilter.prototype.hasDurationInSMax = function () {
	return jspb.Message.getField(this, 14) != null;
};

/**
 * repeated ondewo.nlu.Intent.Message.Platform platforms = 15;
 * @return {!Array<!proto.ondewo.nlu.Intent.Message.Platform>}
 */
proto.ondewo.vtsi.CallFilter.prototype.getPlatformsList = function () {
	return /** @type {!Array<!proto.ondewo.nlu.Intent.Message.Platform>} */ (jspb.Message.getRepeatedField(this, 15));
};

/**
 * @param {!Array<!proto.ondewo.nlu.Intent.Message.Platform>} value
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.setPlatformsList = function (value) {
	return jspb.Message.setField(this, 15, value || []);
};

/**
 * @param {!proto.ondewo.nlu.Intent.Message.Platform} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.addPlatforms = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.CallFilter} returns this
 */
proto.ondewo.vtsi.CallFilter.prototype.clearPlatformsList = function () {
	return this.setPlatformsList([]);
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
	proto.ondewo.vtsi.ListCallsRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.ListCallsRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.ListCallsRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.ListCallsRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				vtsiProjectName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				callView: jspb.Message.getFieldWithDefault(msg, 2, 0),
				callFilter: (f = msg.getCallFilter()) && proto.ondewo.vtsi.CallFilter.toObject(includeInstance, f),
				pageToken: jspb.Message.getFieldWithDefault(msg, 4, '')
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
 * @return {!proto.ondewo.vtsi.ListCallsRequest}
 */
proto.ondewo.vtsi.ListCallsRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.ListCallsRequest();
	return proto.ondewo.vtsi.ListCallsRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.ListCallsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.ListCallsRequest}
 */
proto.ondewo.vtsi.ListCallsRequest.deserializeBinaryFromReader = function (msg, reader) {
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
				var value = /** @type {!proto.ondewo.vtsi.CallView} */ (reader.readEnum());
				msg.setCallView(value);
				break;
			case 3:
				var value = new proto.ondewo.vtsi.CallFilter();
				reader.readMessage(value, proto.ondewo.vtsi.CallFilter.deserializeBinaryFromReader);
				msg.setCallFilter(value);
				break;
			case 4:
				var value = /** @type {string} */ (reader.readString());
				msg.setPageToken(value);
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
proto.ondewo.vtsi.ListCallsRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.ListCallsRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.ListCallsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ListCallsRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVtsiProjectName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = /** @type {!proto.ondewo.vtsi.CallView} */ (jspb.Message.getField(message, 2));
	if (f != null) {
		writer.writeEnum(2, f);
	}
	f = message.getCallFilter();
	if (f != null) {
		writer.writeMessage(3, f, proto.ondewo.vtsi.CallFilter.serializeBinaryToWriter);
	}
	f = /** @type {string} */ (jspb.Message.getField(message, 4));
	if (f != null) {
		writer.writeString(4, f);
	}
};

/**
 * optional string vtsi_project_name = 1;
 * @return {string}
 */
proto.ondewo.vtsi.ListCallsRequest.prototype.getVtsiProjectName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ListCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCallsRequest.prototype.setVtsiProjectName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional CallView call_view = 2;
 * @return {!proto.ondewo.vtsi.CallView}
 */
proto.ondewo.vtsi.ListCallsRequest.prototype.getCallView = function () {
	return /** @type {!proto.ondewo.vtsi.CallView} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {!proto.ondewo.vtsi.CallView} value
 * @return {!proto.ondewo.vtsi.ListCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCallsRequest.prototype.setCallView = function (value) {
	return jspb.Message.setField(this, 2, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.ListCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCallsRequest.prototype.clearCallView = function () {
	return jspb.Message.setField(this, 2, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ListCallsRequest.prototype.hasCallView = function () {
	return jspb.Message.getField(this, 2) != null;
};

/**
 * optional CallFilter call_filter = 3;
 * @return {?proto.ondewo.vtsi.CallFilter}
 */
proto.ondewo.vtsi.ListCallsRequest.prototype.getCallFilter = function () {
	return /** @type{?proto.ondewo.vtsi.CallFilter} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.CallFilter, 3)
	);
};

/**
 * @param {?proto.ondewo.vtsi.CallFilter|undefined} value
 * @return {!proto.ondewo.vtsi.ListCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCallsRequest.prototype.setCallFilter = function (value) {
	return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.ListCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCallsRequest.prototype.clearCallFilter = function () {
	return this.setCallFilter(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ListCallsRequest.prototype.hasCallFilter = function () {
	return jspb.Message.getField(this, 3) != null;
};

/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.ondewo.vtsi.ListCallsRequest.prototype.getPageToken = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ListCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCallsRequest.prototype.setPageToken = function (value) {
	return jspb.Message.setField(this, 4, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.vtsi.ListCallsRequest} returns this
 */
proto.ondewo.vtsi.ListCallsRequest.prototype.clearPageToken = function () {
	return jspb.Message.setField(this, 4, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.ListCallsRequest.prototype.hasPageToken = function () {
	return jspb.Message.getField(this, 4) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.vtsi.ListCallsResponse.repeatedFields_ = [1];

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
	proto.ondewo.vtsi.ListCallsResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.vtsi.ListCallsResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.vtsi.ListCallsResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.vtsi.ListCallsResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				callsList: jspb.Message.toObjectList(msg.getCallsList(), proto.ondewo.vtsi.Call.toObject, includeInstance),
				nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, '')
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
 * @return {!proto.ondewo.vtsi.ListCallsResponse}
 */
proto.ondewo.vtsi.ListCallsResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.ListCallsResponse();
	return proto.ondewo.vtsi.ListCallsResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.ListCallsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.ListCallsResponse}
 */
proto.ondewo.vtsi.ListCallsResponse.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new proto.ondewo.vtsi.Call();
				reader.readMessage(value, proto.ondewo.vtsi.Call.deserializeBinaryFromReader);
				msg.addCalls(value);
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
proto.ondewo.vtsi.ListCallsResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.vtsi.ListCallsResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.vtsi.ListCallsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.vtsi.ListCallsResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getCallsList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(1, f, proto.ondewo.vtsi.Call.serializeBinaryToWriter);
	}
	f = message.getNextPageToken();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
};

/**
 * repeated Call calls = 1;
 * @return {!Array<!proto.ondewo.vtsi.Call>}
 */
proto.ondewo.vtsi.ListCallsResponse.prototype.getCallsList = function () {
	return /** @type{!Array<!proto.ondewo.vtsi.Call>} */ (
		jspb.Message.getRepeatedWrapperField(this, proto.ondewo.vtsi.Call, 1)
	);
};

/**
 * @param {!Array<!proto.ondewo.vtsi.Call>} value
 * @return {!proto.ondewo.vtsi.ListCallsResponse} returns this
 */
proto.ondewo.vtsi.ListCallsResponse.prototype.setCallsList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.ondewo.vtsi.Call=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.vtsi.Call}
 */
proto.ondewo.vtsi.ListCallsResponse.prototype.addCalls = function (opt_value, opt_index) {
	return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.vtsi.Call, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.vtsi.ListCallsResponse} returns this
 */
proto.ondewo.vtsi.ListCallsResponse.prototype.clearCallsList = function () {
	return this.setCallsList([]);
};

/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.ondewo.vtsi.ListCallsResponse.prototype.getNextPageToken = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ListCallsResponse} returns this
 */
proto.ondewo.vtsi.ListCallsResponse.prototype.setNextPageToken = function (value) {
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
	proto.ondewo.vtsi.AllServicesStatuses.prototype.toObject = function (opt_includeInstance) {
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
	proto.ondewo.vtsi.AllServicesStatuses.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				statusSip: (f = msg.getStatusSip()) && proto.ondewo.vtsi.ServiceStatus.toObject(includeInstance, f),
				statusAsterisk: (f = msg.getStatusAsterisk()) && proto.ondewo.vtsi.ServiceStatus.toObject(includeInstance, f),
				statusNlu: (f = msg.getStatusNlu()) && proto.ondewo.vtsi.ServiceStatus.toObject(includeInstance, f),
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
proto.ondewo.vtsi.AllServicesStatuses.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.AllServicesStatuses();
	return proto.ondewo.vtsi.AllServicesStatuses.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.AllServicesStatuses} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.AllServicesStatuses}
 */
proto.ondewo.vtsi.AllServicesStatuses.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new proto.ondewo.vtsi.ServiceStatus();
				reader.readMessage(value, proto.ondewo.vtsi.ServiceStatus.deserializeBinaryFromReader);
				msg.setStatusSip(value);
				break;
			case 2:
				var value = new proto.ondewo.vtsi.ServiceStatus();
				reader.readMessage(value, proto.ondewo.vtsi.ServiceStatus.deserializeBinaryFromReader);
				msg.setStatusAsterisk(value);
				break;
			case 3:
				var value = new proto.ondewo.vtsi.ServiceStatus();
				reader.readMessage(value, proto.ondewo.vtsi.ServiceStatus.deserializeBinaryFromReader);
				msg.setStatusNlu(value);
				break;
			case 4:
				var value = new proto.ondewo.vtsi.ServiceStatus();
				reader.readMessage(value, proto.ondewo.vtsi.ServiceStatus.deserializeBinaryFromReader);
				msg.setStatusStt(value);
				break;
			case 5:
				var value = new proto.ondewo.vtsi.ServiceStatus();
				reader.readMessage(value, proto.ondewo.vtsi.ServiceStatus.deserializeBinaryFromReader);
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
proto.ondewo.vtsi.AllServicesStatuses.prototype.serializeBinary = function () {
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
proto.ondewo.vtsi.AllServicesStatuses.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getStatusSip();
	if (f != null) {
		writer.writeMessage(1, f, proto.ondewo.vtsi.ServiceStatus.serializeBinaryToWriter);
	}
	f = message.getStatusAsterisk();
	if (f != null) {
		writer.writeMessage(2, f, proto.ondewo.vtsi.ServiceStatus.serializeBinaryToWriter);
	}
	f = message.getStatusNlu();
	if (f != null) {
		writer.writeMessage(3, f, proto.ondewo.vtsi.ServiceStatus.serializeBinaryToWriter);
	}
	f = message.getStatusStt();
	if (f != null) {
		writer.writeMessage(4, f, proto.ondewo.vtsi.ServiceStatus.serializeBinaryToWriter);
	}
	f = message.getStatusTts();
	if (f != null) {
		writer.writeMessage(5, f, proto.ondewo.vtsi.ServiceStatus.serializeBinaryToWriter);
	}
};

/**
 * optional ServiceStatus status_sip = 1;
 * @return {?proto.ondewo.vtsi.ServiceStatus}
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.getStatusSip = function () {
	return /** @type{?proto.ondewo.vtsi.ServiceStatus} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.ServiceStatus, 1)
	);
};

/**
 * @param {?proto.ondewo.vtsi.ServiceStatus|undefined} value
 * @return {!proto.ondewo.vtsi.AllServicesStatuses} returns this
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.setStatusSip = function (value) {
	return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.AllServicesStatuses} returns this
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.clearStatusSip = function () {
	return this.setStatusSip(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.hasStatusSip = function () {
	return jspb.Message.getField(this, 1) != null;
};

/**
 * optional ServiceStatus status_asterisk = 2;
 * @return {?proto.ondewo.vtsi.ServiceStatus}
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.getStatusAsterisk = function () {
	return /** @type{?proto.ondewo.vtsi.ServiceStatus} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.ServiceStatus, 2)
	);
};

/**
 * @param {?proto.ondewo.vtsi.ServiceStatus|undefined} value
 * @return {!proto.ondewo.vtsi.AllServicesStatuses} returns this
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.setStatusAsterisk = function (value) {
	return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.AllServicesStatuses} returns this
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.clearStatusAsterisk = function () {
	return this.setStatusAsterisk(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.hasStatusAsterisk = function () {
	return jspb.Message.getField(this, 2) != null;
};

/**
 * optional ServiceStatus status_nlu = 3;
 * @return {?proto.ondewo.vtsi.ServiceStatus}
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.getStatusNlu = function () {
	return /** @type{?proto.ondewo.vtsi.ServiceStatus} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.ServiceStatus, 3)
	);
};

/**
 * @param {?proto.ondewo.vtsi.ServiceStatus|undefined} value
 * @return {!proto.ondewo.vtsi.AllServicesStatuses} returns this
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.setStatusNlu = function (value) {
	return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.AllServicesStatuses} returns this
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.clearStatusNlu = function () {
	return this.setStatusNlu(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.hasStatusNlu = function () {
	return jspb.Message.getField(this, 3) != null;
};

/**
 * optional ServiceStatus status_stt = 4;
 * @return {?proto.ondewo.vtsi.ServiceStatus}
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.getStatusStt = function () {
	return /** @type{?proto.ondewo.vtsi.ServiceStatus} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.ServiceStatus, 4)
	);
};

/**
 * @param {?proto.ondewo.vtsi.ServiceStatus|undefined} value
 * @return {!proto.ondewo.vtsi.AllServicesStatuses} returns this
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.setStatusStt = function (value) {
	return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.AllServicesStatuses} returns this
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.clearStatusStt = function () {
	return this.setStatusStt(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.hasStatusStt = function () {
	return jspb.Message.getField(this, 4) != null;
};

/**
 * optional ServiceStatus status_tts = 5;
 * @return {?proto.ondewo.vtsi.ServiceStatus}
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.getStatusTts = function () {
	return /** @type{?proto.ondewo.vtsi.ServiceStatus} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.vtsi.ServiceStatus, 5)
	);
};

/**
 * @param {?proto.ondewo.vtsi.ServiceStatus|undefined} value
 * @return {!proto.ondewo.vtsi.AllServicesStatuses} returns this
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.setStatusTts = function (value) {
	return jspb.Message.setWrapperField(this, 5, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.vtsi.AllServicesStatuses} returns this
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.clearStatusTts = function () {
	return this.setStatusTts(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.vtsi.AllServicesStatuses.prototype.hasStatusTts = function () {
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
	proto.ondewo.vtsi.ServiceStatus.prototype.toObject = function (opt_includeInstance) {
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
	proto.ondewo.vtsi.ServiceStatus.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				healthy: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
				errorMessage: jspb.Message.getFieldWithDefault(msg, 2, '')
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
proto.ondewo.vtsi.ServiceStatus.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.vtsi.ServiceStatus();
	return proto.ondewo.vtsi.ServiceStatus.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.vtsi.ServiceStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.vtsi.ServiceStatus}
 */
proto.ondewo.vtsi.ServiceStatus.deserializeBinaryFromReader = function (msg, reader) {
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
proto.ondewo.vtsi.ServiceStatus.prototype.serializeBinary = function () {
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
proto.ondewo.vtsi.ServiceStatus.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getHealthy();
	if (f) {
		writer.writeBool(1, f);
	}
	f = message.getErrorMessage();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
};

/**
 * optional bool healthy = 1;
 * @return {boolean}
 */
proto.ondewo.vtsi.ServiceStatus.prototype.getHealthy = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.vtsi.ServiceStatus} returns this
 */
proto.ondewo.vtsi.ServiceStatus.prototype.setHealthy = function (value) {
	return jspb.Message.setProto3BooleanField(this, 1, value);
};

/**
 * optional string error_message = 2;
 * @return {string}
 */
proto.ondewo.vtsi.ServiceStatus.prototype.getErrorMessage = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.vtsi.ServiceStatus} returns this
 */
proto.ondewo.vtsi.ServiceStatus.prototype.setErrorMessage = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * @enum {number}
 */
proto.ondewo.vtsi.CallView = {
	MINIMUM: 0,
	SHALLOW: 1,
	FULL: 2
};

/**
 * @enum {number}
 */
proto.ondewo.vtsi.CallStatus = {
	CALL_STATUS_UNSPECIFIED: 0,
	CALL_STATUS_ACTIVE: 1,
	CALL_STATUS_INACTIVE: 2
};

/**
 * @enum {number}
 */
proto.ondewo.vtsi.CallType = {
	BOTH: 0,
	LISTENER: 1,
	CALLER: 2,
	SCHEDULED_CALLER: 3
};

goog.object.extend(exports, proto.ondewo.vtsi);
