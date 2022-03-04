// source: pkg/model/planpreview.proto
/**
 * @fileoverview
 * @enhanceable
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



var pkg_model_common_pb = require('pipecd/pkg/app/web/model/common_pb.js');
goog.object.extend(proto, pkg_model_common_pb);
goog.exportSymbol('proto.model.ApplicationPlanPreviewResult', null, global);
goog.exportSymbol('proto.model.PlanPreviewCommandResult', null, global);
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
proto.model.PlanPreviewCommandResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.model.PlanPreviewCommandResult.repeatedFields_, null);
};
goog.inherits(proto.model.PlanPreviewCommandResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.PlanPreviewCommandResult.displayName = 'proto.model.PlanPreviewCommandResult';
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
proto.model.ApplicationPlanPreviewResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.ApplicationPlanPreviewResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.ApplicationPlanPreviewResult.displayName = 'proto.model.ApplicationPlanPreviewResult';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.model.PlanPreviewCommandResult.repeatedFields_ = [4];



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
proto.model.PlanPreviewCommandResult.prototype.toObject = function(opt_includeInstance) {
  return proto.model.PlanPreviewCommandResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.PlanPreviewCommandResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.PlanPreviewCommandResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    commandId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pipedId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pipedUrl: jspb.Message.getFieldWithDefault(msg, 3, ""),
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.model.ApplicationPlanPreviewResult.toObject, includeInstance),
    error: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.model.PlanPreviewCommandResult}
 */
proto.model.PlanPreviewCommandResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.PlanPreviewCommandResult;
  return proto.model.PlanPreviewCommandResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.PlanPreviewCommandResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.PlanPreviewCommandResult}
 */
proto.model.PlanPreviewCommandResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommandId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPipedId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPipedUrl(value);
      break;
    case 4:
      var value = new proto.model.ApplicationPlanPreviewResult;
      reader.readMessage(value,proto.model.ApplicationPlanPreviewResult.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.model.PlanPreviewCommandResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.PlanPreviewCommandResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.PlanPreviewCommandResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.PlanPreviewCommandResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommandId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPipedId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPipedUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.model.ApplicationPlanPreviewResult.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string command_id = 1;
 * @return {string}
 */
proto.model.PlanPreviewCommandResult.prototype.getCommandId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.PlanPreviewCommandResult} returns this
 */
proto.model.PlanPreviewCommandResult.prototype.setCommandId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string piped_id = 2;
 * @return {string}
 */
proto.model.PlanPreviewCommandResult.prototype.getPipedId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.PlanPreviewCommandResult} returns this
 */
proto.model.PlanPreviewCommandResult.prototype.setPipedId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string piped_url = 3;
 * @return {string}
 */
proto.model.PlanPreviewCommandResult.prototype.getPipedUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.PlanPreviewCommandResult} returns this
 */
proto.model.PlanPreviewCommandResult.prototype.setPipedUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated ApplicationPlanPreviewResult results = 4;
 * @return {!Array<!proto.model.ApplicationPlanPreviewResult>}
 */
proto.model.PlanPreviewCommandResult.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.model.ApplicationPlanPreviewResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.model.ApplicationPlanPreviewResult, 4));
};


/**
 * @param {!Array<!proto.model.ApplicationPlanPreviewResult>} value
 * @return {!proto.model.PlanPreviewCommandResult} returns this
*/
proto.model.PlanPreviewCommandResult.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.model.ApplicationPlanPreviewResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.model.ApplicationPlanPreviewResult}
 */
proto.model.PlanPreviewCommandResult.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.model.ApplicationPlanPreviewResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.model.PlanPreviewCommandResult} returns this
 */
proto.model.PlanPreviewCommandResult.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};


/**
 * optional string error = 5;
 * @return {string}
 */
proto.model.PlanPreviewCommandResult.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.PlanPreviewCommandResult} returns this
 */
proto.model.PlanPreviewCommandResult.prototype.setError = function(value) {
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
proto.model.ApplicationPlanPreviewResult.prototype.toObject = function(opt_includeInstance) {
  return proto.model.ApplicationPlanPreviewResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.ApplicationPlanPreviewResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.ApplicationPlanPreviewResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    applicationName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    applicationUrl: jspb.Message.getFieldWithDefault(msg, 3, ""),
    applicationKind: jspb.Message.getFieldWithDefault(msg, 4, 0),
    applicationDirectory: jspb.Message.getFieldWithDefault(msg, 5, ""),
    envId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    envName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    envUrl: jspb.Message.getFieldWithDefault(msg, 8, ""),
    pipedId: jspb.Message.getFieldWithDefault(msg, 9, ""),
    projectId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    headBranch: jspb.Message.getFieldWithDefault(msg, 20, ""),
    headCommit: jspb.Message.getFieldWithDefault(msg, 21, ""),
    syncStrategy: jspb.Message.getFieldWithDefault(msg, 30, 0),
    planSummary: msg.getPlanSummary_asB64(),
    planDetails: msg.getPlanDetails_asB64(),
    noChange: jspb.Message.getBooleanFieldWithDefault(msg, 33, false),
    error: jspb.Message.getFieldWithDefault(msg, 40, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 90, 0)
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
 * @return {!proto.model.ApplicationPlanPreviewResult}
 */
proto.model.ApplicationPlanPreviewResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.ApplicationPlanPreviewResult;
  return proto.model.ApplicationPlanPreviewResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.ApplicationPlanPreviewResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.ApplicationPlanPreviewResult}
 */
proto.model.ApplicationPlanPreviewResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationUrl(value);
      break;
    case 4:
      var value = /** @type {!proto.model.ApplicationKind} */ (reader.readEnum());
      msg.setApplicationKind(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationDirectory(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvUrl(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPipedId(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 11:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeadBranch(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeadCommit(value);
      break;
    case 30:
      var value = /** @type {!proto.model.SyncStrategy} */ (reader.readEnum());
      msg.setSyncStrategy(value);
      break;
    case 31:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPlanSummary(value);
      break;
    case 32:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPlanDetails(value);
      break;
    case 33:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNoChange(value);
      break;
    case 40:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 90:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedAt(value);
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
proto.model.ApplicationPlanPreviewResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.ApplicationPlanPreviewResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.ApplicationPlanPreviewResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.ApplicationPlanPreviewResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplicationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApplicationName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getApplicationUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getApplicationKind();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getApplicationDirectory();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEnvId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getEnvName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getEnvUrl();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPipedId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(11, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getHeadBranch();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getHeadCommit();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getSyncStrategy();
  if (f !== 0.0) {
    writer.writeEnum(
      30,
      f
    );
  }
  f = message.getPlanSummary_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      31,
      f
    );
  }
  f = message.getPlanDetails_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      32,
      f
    );
  }
  f = message.getNoChange();
  if (f) {
    writer.writeBool(
      33,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      40,
      f
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeInt64(
      90,
      f
    );
  }
};


/**
 * optional string application_id = 1;
 * @return {string}
 */
proto.model.ApplicationPlanPreviewResult.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.ApplicationPlanPreviewResult} returns this
 */
proto.model.ApplicationPlanPreviewResult.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string application_name = 2;
 * @return {string}
 */
proto.model.ApplicationPlanPreviewResult.prototype.getApplicationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.ApplicationPlanPreviewResult} returns this
 */
proto.model.ApplicationPlanPreviewResult.prototype.setApplicationName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string application_url = 3;
 * @return {string}
 */
proto.model.ApplicationPlanPreviewResult.prototype.getApplicationUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.ApplicationPlanPreviewResult} returns this
 */
proto.model.ApplicationPlanPreviewResult.prototype.setApplicationUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ApplicationKind application_kind = 4;
 * @return {!proto.model.ApplicationKind}
 */
proto.model.ApplicationPlanPreviewResult.prototype.getApplicationKind = function() {
  return /** @type {!proto.model.ApplicationKind} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.model.ApplicationKind} value
 * @return {!proto.model.ApplicationPlanPreviewResult} returns this
 */
proto.model.ApplicationPlanPreviewResult.prototype.setApplicationKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string application_directory = 5;
 * @return {string}
 */
proto.model.ApplicationPlanPreviewResult.prototype.getApplicationDirectory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.ApplicationPlanPreviewResult} returns this
 */
proto.model.ApplicationPlanPreviewResult.prototype.setApplicationDirectory = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string env_id = 6;
 * @return {string}
 */
proto.model.ApplicationPlanPreviewResult.prototype.getEnvId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.ApplicationPlanPreviewResult} returns this
 */
proto.model.ApplicationPlanPreviewResult.prototype.setEnvId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string env_name = 7;
 * @return {string}
 */
proto.model.ApplicationPlanPreviewResult.prototype.getEnvName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.ApplicationPlanPreviewResult} returns this
 */
proto.model.ApplicationPlanPreviewResult.prototype.setEnvName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string env_url = 8;
 * @return {string}
 */
proto.model.ApplicationPlanPreviewResult.prototype.getEnvUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.ApplicationPlanPreviewResult} returns this
 */
proto.model.ApplicationPlanPreviewResult.prototype.setEnvUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string piped_id = 9;
 * @return {string}
 */
proto.model.ApplicationPlanPreviewResult.prototype.getPipedId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.ApplicationPlanPreviewResult} returns this
 */
proto.model.ApplicationPlanPreviewResult.prototype.setPipedId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string project_id = 10;
 * @return {string}
 */
proto.model.ApplicationPlanPreviewResult.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.ApplicationPlanPreviewResult} returns this
 */
proto.model.ApplicationPlanPreviewResult.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * map<string, string> labels = 11;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.model.ApplicationPlanPreviewResult.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 11, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.model.ApplicationPlanPreviewResult} returns this
 */
proto.model.ApplicationPlanPreviewResult.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional string head_branch = 20;
 * @return {string}
 */
proto.model.ApplicationPlanPreviewResult.prototype.getHeadBranch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.ApplicationPlanPreviewResult} returns this
 */
proto.model.ApplicationPlanPreviewResult.prototype.setHeadBranch = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string head_commit = 21;
 * @return {string}
 */
proto.model.ApplicationPlanPreviewResult.prototype.getHeadCommit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.ApplicationPlanPreviewResult} returns this
 */
proto.model.ApplicationPlanPreviewResult.prototype.setHeadCommit = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional SyncStrategy sync_strategy = 30;
 * @return {!proto.model.SyncStrategy}
 */
proto.model.ApplicationPlanPreviewResult.prototype.getSyncStrategy = function() {
  return /** @type {!proto.model.SyncStrategy} */ (jspb.Message.getFieldWithDefault(this, 30, 0));
};


/**
 * @param {!proto.model.SyncStrategy} value
 * @return {!proto.model.ApplicationPlanPreviewResult} returns this
 */
proto.model.ApplicationPlanPreviewResult.prototype.setSyncStrategy = function(value) {
  return jspb.Message.setProto3EnumField(this, 30, value);
};


/**
 * optional bytes plan_summary = 31;
 * @return {string}
 */
proto.model.ApplicationPlanPreviewResult.prototype.getPlanSummary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 31, ""));
};


/**
 * optional bytes plan_summary = 31;
 * This is a type-conversion wrapper around `getPlanSummary()`
 * @return {string}
 */
proto.model.ApplicationPlanPreviewResult.prototype.getPlanSummary_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPlanSummary()));
};


/**
 * optional bytes plan_summary = 31;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPlanSummary()`
 * @return {!Uint8Array}
 */
proto.model.ApplicationPlanPreviewResult.prototype.getPlanSummary_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPlanSummary()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.model.ApplicationPlanPreviewResult} returns this
 */
proto.model.ApplicationPlanPreviewResult.prototype.setPlanSummary = function(value) {
  return jspb.Message.setProto3BytesField(this, 31, value);
};


/**
 * optional bytes plan_details = 32;
 * @return {string}
 */
proto.model.ApplicationPlanPreviewResult.prototype.getPlanDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 32, ""));
};


/**
 * optional bytes plan_details = 32;
 * This is a type-conversion wrapper around `getPlanDetails()`
 * @return {string}
 */
proto.model.ApplicationPlanPreviewResult.prototype.getPlanDetails_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPlanDetails()));
};


/**
 * optional bytes plan_details = 32;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPlanDetails()`
 * @return {!Uint8Array}
 */
proto.model.ApplicationPlanPreviewResult.prototype.getPlanDetails_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPlanDetails()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.model.ApplicationPlanPreviewResult} returns this
 */
proto.model.ApplicationPlanPreviewResult.prototype.setPlanDetails = function(value) {
  return jspb.Message.setProto3BytesField(this, 32, value);
};


/**
 * optional bool no_change = 33;
 * @return {boolean}
 */
proto.model.ApplicationPlanPreviewResult.prototype.getNoChange = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 33, false));
};


/**
 * @param {boolean} value
 * @return {!proto.model.ApplicationPlanPreviewResult} returns this
 */
proto.model.ApplicationPlanPreviewResult.prototype.setNoChange = function(value) {
  return jspb.Message.setProto3BooleanField(this, 33, value);
};


/**
 * optional string error = 40;
 * @return {string}
 */
proto.model.ApplicationPlanPreviewResult.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 40, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.ApplicationPlanPreviewResult} returns this
 */
proto.model.ApplicationPlanPreviewResult.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 40, value);
};


/**
 * optional int64 created_at = 90;
 * @return {number}
 */
proto.model.ApplicationPlanPreviewResult.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 90, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.ApplicationPlanPreviewResult} returns this
 */
proto.model.ApplicationPlanPreviewResult.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 90, value);
};


goog.object.extend(exports, proto.model);
