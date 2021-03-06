/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.exportSymbol('proto.Customer', null, global);
goog.exportSymbol('proto.Customer.Address', null, global);
goog.exportSymbol('proto.Customer.Type', null, global);

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
proto.Customer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Customer.repeatedFields_, proto.Customer.oneofGroups_);
};
goog.inherits(proto.Customer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Customer.displayName = 'proto.Customer';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Customer.repeatedFields_ = [2,7];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.Customer.oneofGroups_ = [[1,5]];

/**
 * @enum {number}
 */
proto.Customer.AccessTypeCase = {
  ACCESS_TYPE_NOT_SET: 0,
  USERNAME: 1,
  EMAIL: 5
};

/**
 * @return {proto.Customer.AccessTypeCase}
 */
proto.Customer.prototype.getAccessTypeCase = function() {
  return /** @type {proto.Customer.AccessTypeCase} */(jspb.Message.computeOneofCase(this, proto.Customer.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Customer.prototype.toObject = function(opt_includeInstance) {
  return proto.Customer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Customer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Customer.toObject = function(includeInstance, msg) {
  var f, obj = {
    emailAddressesList: jspb.Message.getRepeatedField(msg, 2),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    address: (f = msg.getAddress()) && proto.Customer.Address.toObject(includeInstance, f),
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 5, ""),
    nickNamesMap: (f = msg.getNickNamesMap()) ? f.toObject(includeInstance, undefined) : [],
    detailsList: jspb.Message.toObjectList(msg.getDetailsList(),
    google_protobuf_any_pb.Any.toObject, includeInstance)
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
 * @return {!proto.Customer}
 */
proto.Customer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Customer;
  return proto.Customer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Customer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Customer}
 */
proto.Customer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addEmailAddresses(value);
      break;
    case 3:
      var value = /** @type {!proto.Customer.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = new proto.Customer.Address;
      reader.readMessage(value,proto.Customer.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 6:
      var value = msg.getNickNamesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    case 7:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.addDetails(value);
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
proto.Customer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Customer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Customer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Customer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmailAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.Customer.Address.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
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
  f = message.getNickNamesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.Customer.Type = {
  REGULAR: 0,
  MEMBER: 1,
  SPONSOR: 2
};


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
proto.Customer.Address = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Customer.Address, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Customer.Address.displayName = 'proto.Customer.Address';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Customer.Address.prototype.toObject = function(opt_includeInstance) {
  return proto.Customer.Address.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Customer.Address} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Customer.Address.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    city: jspb.Message.getFieldWithDefault(msg, 2, ""),
    state: jspb.Message.getFieldWithDefault(msg, 3, ""),
    zipCode: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.Customer.Address}
 */
proto.Customer.Address.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Customer.Address;
  return proto.Customer.Address.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Customer.Address} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Customer.Address}
 */
proto.Customer.Address.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setZipCode(value);
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
proto.Customer.Address.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Customer.Address.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Customer.Address} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Customer.Address.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getZipCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.Customer.Address.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Customer.Address.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string city = 2;
 * @return {string}
 */
proto.Customer.Address.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Customer.Address.prototype.setCity = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string state = 3;
 * @return {string}
 */
proto.Customer.Address.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.Customer.Address.prototype.setState = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string zip_code = 4;
 * @return {string}
 */
proto.Customer.Address.prototype.getZipCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.Customer.Address.prototype.setZipCode = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string email_addresses = 2;
 * @return {!Array.<string>}
 */
proto.Customer.prototype.getEmailAddressesList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array.<string>} value */
proto.Customer.prototype.setEmailAddressesList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.Customer.prototype.addEmailAddresses = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.Customer.prototype.clearEmailAddressesList = function() {
  this.setEmailAddressesList([]);
};


/**
 * optional Type type = 3;
 * @return {!proto.Customer.Type}
 */
proto.Customer.prototype.getType = function() {
  return /** @type {!proto.Customer.Type} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.Customer.Type} value */
proto.Customer.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional Address address = 4;
 * @return {?proto.Customer.Address}
 */
proto.Customer.prototype.getAddress = function() {
  return /** @type{?proto.Customer.Address} */ (
    jspb.Message.getWrapperField(this, proto.Customer.Address, 4));
};


/** @param {?proto.Customer.Address|undefined} value */
proto.Customer.prototype.setAddress = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.Customer.prototype.clearAddress = function() {
  this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Customer.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.Customer.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Customer.prototype.setUsername = function(value) {
  jspb.Message.setOneofField(this, 1, proto.Customer.oneofGroups_[0], value);
};


proto.Customer.prototype.clearUsername = function() {
  jspb.Message.setOneofField(this, 1, proto.Customer.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Customer.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string email = 5;
 * @return {string}
 */
proto.Customer.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.Customer.prototype.setEmail = function(value) {
  jspb.Message.setOneofField(this, 5, proto.Customer.oneofGroups_[0], value);
};


proto.Customer.prototype.clearEmail = function() {
  jspb.Message.setOneofField(this, 5, proto.Customer.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Customer.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * map<string, string> nick_names = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.Customer.prototype.getNickNamesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


proto.Customer.prototype.clearNickNamesMap = function() {
  this.getNickNamesMap().clear();
};


/**
 * repeated google.protobuf.Any details = 7;
 * @return {!Array.<!proto.google.protobuf.Any>}
 */
proto.Customer.prototype.getDetailsList = function() {
  return /** @type{!Array.<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_any_pb.Any, 7));
};


/** @param {!Array.<!proto.google.protobuf.Any>} value */
proto.Customer.prototype.setDetailsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.Customer.prototype.addDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.google.protobuf.Any, opt_index);
};


proto.Customer.prototype.clearDetailsList = function() {
  this.setDetailsList([]);
};


goog.object.extend(exports, proto);
