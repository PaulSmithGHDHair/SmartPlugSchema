// source: smart_plug.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.Field');
goog.provide('proto.Field.ValueCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.Power');

goog.forwardDeclare('proto.FieldKey');
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
proto.Field = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.Field.oneofGroups_);
};
goog.inherits(proto.Field, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Field.displayName = 'proto.Field';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.Field.oneofGroups_ = [[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]];

/**
 * @enum {number}
 */
proto.Field.ValueCase = {
  VALUE_NOT_SET: 0,
  V_BOOL: 2,
  V_INT32: 3,
  V_UINT32: 4,
  V_SINT32: 5,
  V_FIXED32: 6,
  V_SFIXED32: 7,
  V_INT64: 8,
  V_UINT64: 9,
  V_SINT64: 10,
  V_FIXED64: 11,
  V_SFIXED64: 12,
  V_DOUBLE: 13,
  V_FLOAT: 14,
  V_STRING: 15,
  V_BYTES: 16,
  V_POWER: 17
};

/**
 * @return {proto.Field.ValueCase}
 */
proto.Field.prototype.getValueCase = function() {
  return /** @type {proto.Field.ValueCase} */(jspb.Message.computeOneofCase(this, proto.Field.oneofGroups_[0]));
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
proto.Field.prototype.toObject = function(opt_includeInstance) {
  return proto.Field.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Field} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Field.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    vBool: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    vInt32: jspb.Message.getFieldWithDefault(msg, 3, 0),
    vUint32: jspb.Message.getFieldWithDefault(msg, 4, 0),
    vSint32: jspb.Message.getFieldWithDefault(msg, 5, 0),
    vFixed32: jspb.Message.getFieldWithDefault(msg, 6, 0),
    vSfixed32: jspb.Message.getFieldWithDefault(msg, 7, 0),
    vInt64: jspb.Message.getFieldWithDefault(msg, 8, 0),
    vUint64: jspb.Message.getFieldWithDefault(msg, 9, 0),
    vSint64: jspb.Message.getFieldWithDefault(msg, 10, 0),
    vFixed64: jspb.Message.getFieldWithDefault(msg, 11, 0),
    vSfixed64: jspb.Message.getFieldWithDefault(msg, 12, 0),
    vDouble: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    vFloat: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
    vString: jspb.Message.getFieldWithDefault(msg, 15, ""),
    vBytes: msg.getVBytes_asB64(),
    vPower: (f = msg.getVPower()) && proto.Power.toObject(includeInstance, f)
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
 * @return {!proto.Field}
 */
proto.Field.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Field;
  return proto.Field.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Field} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Field}
 */
proto.Field.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.FieldKey} */ (reader.readEnum());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVBool(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVInt32(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVUint32(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readSint32());
      msg.setVSint32(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setVFixed32(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.setVSfixed32(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVInt64(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVUint64(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readSint64());
      msg.setVSint64(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setVFixed64(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setVSfixed64(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVDouble(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVFloat(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setVString(value);
      break;
    case 16:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setVBytes(value);
      break;
    case 17:
      var value = new proto.Power;
      reader.readMessage(value,proto.Power.deserializeBinaryFromReader);
      msg.setVPower(value);
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
proto.Field.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Field.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Field} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Field.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeSint32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeFixed32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeSfixed32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeSint64(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeFixed64(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeSfixed64(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeFloat(
      14,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeString(
      15,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBytes(
      16,
      f
    );
  }
  f = message.getVPower();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.Power.serializeBinaryToWriter
    );
  }
};


/**
 * optional FieldKey key = 1;
 * @return {!proto.FieldKey}
 */
proto.Field.prototype.getKey = function() {
  return /** @type {!proto.FieldKey} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.FieldKey} value
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.setKey = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool v_bool = 2;
 * @return {boolean}
 */
proto.Field.prototype.getVBool = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.setVBool = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.Field.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.clearVBool = function() {
  return jspb.Message.setOneofField(this, 2, proto.Field.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Field.prototype.hasVBool = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 v_int32 = 3;
 * @return {number}
 */
proto.Field.prototype.getVInt32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.setVInt32 = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.Field.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.clearVInt32 = function() {
  return jspb.Message.setOneofField(this, 3, proto.Field.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Field.prototype.hasVInt32 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 v_uint32 = 4;
 * @return {number}
 */
proto.Field.prototype.getVUint32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.setVUint32 = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.Field.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.clearVUint32 = function() {
  return jspb.Message.setOneofField(this, 4, proto.Field.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Field.prototype.hasVUint32 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional sint32 v_sint32 = 5;
 * @return {number}
 */
proto.Field.prototype.getVSint32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.setVSint32 = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.Field.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.clearVSint32 = function() {
  return jspb.Message.setOneofField(this, 5, proto.Field.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Field.prototype.hasVSint32 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional fixed32 v_fixed32 = 6;
 * @return {number}
 */
proto.Field.prototype.getVFixed32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.setVFixed32 = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.Field.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.clearVFixed32 = function() {
  return jspb.Message.setOneofField(this, 6, proto.Field.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Field.prototype.hasVFixed32 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional sfixed32 v_sfixed32 = 7;
 * @return {number}
 */
proto.Field.prototype.getVSfixed32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.setVSfixed32 = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.Field.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.clearVSfixed32 = function() {
  return jspb.Message.setOneofField(this, 7, proto.Field.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Field.prototype.hasVSfixed32 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int64 v_int64 = 8;
 * @return {number}
 */
proto.Field.prototype.getVInt64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.setVInt64 = function(value) {
  return jspb.Message.setOneofField(this, 8, proto.Field.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.clearVInt64 = function() {
  return jspb.Message.setOneofField(this, 8, proto.Field.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Field.prototype.hasVInt64 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint64 v_uint64 = 9;
 * @return {number}
 */
proto.Field.prototype.getVUint64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.setVUint64 = function(value) {
  return jspb.Message.setOneofField(this, 9, proto.Field.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.clearVUint64 = function() {
  return jspb.Message.setOneofField(this, 9, proto.Field.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Field.prototype.hasVUint64 = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional sint64 v_sint64 = 10;
 * @return {number}
 */
proto.Field.prototype.getVSint64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.setVSint64 = function(value) {
  return jspb.Message.setOneofField(this, 10, proto.Field.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.clearVSint64 = function() {
  return jspb.Message.setOneofField(this, 10, proto.Field.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Field.prototype.hasVSint64 = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional fixed64 v_fixed64 = 11;
 * @return {number}
 */
proto.Field.prototype.getVFixed64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.setVFixed64 = function(value) {
  return jspb.Message.setOneofField(this, 11, proto.Field.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.clearVFixed64 = function() {
  return jspb.Message.setOneofField(this, 11, proto.Field.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Field.prototype.hasVFixed64 = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional sfixed64 v_sfixed64 = 12;
 * @return {number}
 */
proto.Field.prototype.getVSfixed64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.setVSfixed64 = function(value) {
  return jspb.Message.setOneofField(this, 12, proto.Field.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.clearVSfixed64 = function() {
  return jspb.Message.setOneofField(this, 12, proto.Field.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Field.prototype.hasVSfixed64 = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional double v_double = 13;
 * @return {number}
 */
proto.Field.prototype.getVDouble = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.setVDouble = function(value) {
  return jspb.Message.setOneofField(this, 13, proto.Field.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.clearVDouble = function() {
  return jspb.Message.setOneofField(this, 13, proto.Field.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Field.prototype.hasVDouble = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional float v_float = 14;
 * @return {number}
 */
proto.Field.prototype.getVFloat = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.setVFloat = function(value) {
  return jspb.Message.setOneofField(this, 14, proto.Field.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.clearVFloat = function() {
  return jspb.Message.setOneofField(this, 14, proto.Field.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Field.prototype.hasVFloat = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string v_string = 15;
 * @return {string}
 */
proto.Field.prototype.getVString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.setVString = function(value) {
  return jspb.Message.setOneofField(this, 15, proto.Field.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.clearVString = function() {
  return jspb.Message.setOneofField(this, 15, proto.Field.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Field.prototype.hasVString = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional bytes v_bytes = 16;
 * @return {string}
 */
proto.Field.prototype.getVBytes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes v_bytes = 16;
 * This is a type-conversion wrapper around `getVBytes()`
 * @return {string}
 */
proto.Field.prototype.getVBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getVBytes()));
};


/**
 * optional bytes v_bytes = 16;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getVBytes()`
 * @return {!Uint8Array}
 */
proto.Field.prototype.getVBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getVBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.setVBytes = function(value) {
  return jspb.Message.setOneofField(this, 16, proto.Field.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.clearVBytes = function() {
  return jspb.Message.setOneofField(this, 16, proto.Field.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Field.prototype.hasVBytes = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional Power v_power = 17;
 * @return {?proto.Power}
 */
proto.Field.prototype.getVPower = function() {
  return /** @type{?proto.Power} */ (
    jspb.Message.getWrapperField(this, proto.Power, 17));
};


/**
 * @param {?proto.Power|undefined} value
 * @return {!proto.Field} returns this
*/
proto.Field.prototype.setVPower = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.Field.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Field} returns this
 */
proto.Field.prototype.clearVPower = function() {
  return this.setVPower(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Field.prototype.hasVPower = function() {
  return jspb.Message.getField(this, 17) != null;
};

