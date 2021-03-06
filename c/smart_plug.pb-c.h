/* Generated by the protocol buffer compiler.  DO NOT EDIT! */
/* Generated from: smart_plug.proto */

#ifndef PROTOBUF_C_smart_5fplug_2eproto__INCLUDED
#define PROTOBUF_C_smart_5fplug_2eproto__INCLUDED

#include <protobuf-c/protobuf-c.h>

PROTOBUF_C__BEGIN_DECLS

#if PROTOBUF_C_VERSION_NUMBER < 1003000
# error This file was generated by a newer version of protoc-c which is incompatible with your libprotobuf-c headers. Please update your headers.
#elif 1003003 < PROTOBUF_C_MIN_COMPILER_VERSION
# error This file was generated by an older version of protoc-c which is incompatible with your libprotobuf-c headers. Please regenerate this file with a newer version of protoc-c.
#endif


typedef struct _Power Power;
typedef struct _Field Field;
typedef struct _UUID UUID;
typedef struct _SmartPlug SmartPlug;


/* --- enums --- */

/*
 * If the schema is designed correctly to be future-proof then we should *NEVER*
 * need to change the schema version number; since we can just extend the
 * FieldKey key space with new scalar/complex types in the Field oneof as
 * needed. De-serialising systems just need to ignore fields with FieldKey
 * values that they do not know.
 * However, just in case we do need to redesign the initial parent message
 * format, we maintain a version number space:
 */
typedef enum _SchemaVersion {
  /*
   * never used since is default value (for not provided)
   */
  SCHEMA_VERSION__INVALID = 0,
  /*
   * initial schema version number for device messages
   */
  SCHEMA_VERSION__SMARTPLUG_V1 = 1
    PROTOBUF_C__FORCE_ENUM_TO_BE_INT_SIZE(SCHEMA_VERSION)
} SchemaVersion;
/*
 * *CRITICAL*: The ordering and interpretation of individual key values in the
 * following FieldKey enum should *NEVER* change. If functionality is
 * deprecated the defined keys should not be reused. New functionality
 * (extensions) should append to the number space only:
 */
typedef enum _FieldKey {
  /*
   * normal enum default value
   */
  FIELD_KEY__UNUSED = 0,
  /*
   * bytes  : human-readable NUL terminated diagnostic strs
   */
  FIELD_KEY__FW_INFORMATION = 1,
  /*
   * Power
   */
  FIELD_KEY__POWER = 2
    PROTOBUF_C__FORCE_ENUM_TO_BE_INT_SIZE(FIELD_KEY)
} FieldKey;

/* --- messages --- */

struct  _Power
{
  ProtobufCMessage base;
  /*
   * voltage measurment
   */
  uint32_t voltage;
  /*
   * current measurment
   */
  uint32_t current;
  /*
   * power measurment
   */
  uint32_t power;
  /*
   * Timestamp seconds.
   */
  uint64_t timestamp;
};
#define POWER__INIT \
 { PROTOBUF_C_MESSAGE_INIT (&power__descriptor) \
    , 0, 0, 0, 0 }


typedef enum {
  FIELD__VALUE__NOT_SET = 0,
  FIELD__VALUE_V_BOOL = 2,
  FIELD__VALUE_V_INT32 = 3,
  FIELD__VALUE_V_UINT32 = 4,
  FIELD__VALUE_V_SINT32 = 5,
  FIELD__VALUE_V_FIXED32 = 6,
  FIELD__VALUE_V_SFIXED32 = 7,
  FIELD__VALUE_V_INT64 = 8,
  FIELD__VALUE_V_UINT64 = 9,
  FIELD__VALUE_V_SINT64 = 10,
  FIELD__VALUE_V_FIXED64 = 11,
  FIELD__VALUE_V_SFIXED64 = 12,
  FIELD__VALUE_V_DOUBLE = 13,
  FIELD__VALUE_V_FLOAT = 14,
  FIELD__VALUE_V_STRING = 15,
  FIELD__VALUE_V_BYTES = 16,
  FIELD__VALUE_V_POWER = 17
    PROTOBUF_C__FORCE_ENUM_TO_BE_INT_SIZE(FIELD__VALUE)
} Field__ValueCase;

/*
 * A basic field data item. NOTE: This approach avoids the issue of the message
 * generator not serializing values that match the default for the given
 * underlying scalar type; since we will never use the UNUSED enum key for real
 * fields:
 */
struct  _Field
{
  ProtobufCMessage base;
  /*
   * The key defines which of the oneof "value" encodings is interpreted:
   */
  FieldKey key;
  Field__ValueCase value_case;
  union {
    /*
     * scalar
     */
    protobuf_c_boolean v_bool;
    int32_t v_int32;
    uint32_t v_uint32;
    int32_t v_sint32;
    uint32_t v_fixed32;
    int32_t v_sfixed32;
    int64_t v_int64;
    uint64_t v_uint64;
    int64_t v_sint64;
    uint64_t v_fixed64;
    int64_t v_sfixed64;
    double v_double;
    float v_float;
    char *v_string;
    ProtobufCBinaryData v_bytes;
    /*
     * complex
     */
    Power *v_power;
  };
};
#define FIELD__INIT \
 { PROTOBUF_C_MESSAGE_INIT (&field__descriptor) \
    , FIELD_KEY__UNUSED, FIELD__VALUE__NOT_SET, {0} }


struct  _UUID
{
  ProtobufCMessage base;
  char *devid;
};
#define UUID__INIT \
 { PROTOBUF_C_MESSAGE_INIT (&uuid__descriptor) \
    , (char *)protobuf_c_empty_string }


/*
 * Top-level message:
 */
struct  _SmartPlug
{
  ProtobufCMessage base;
  /*
   * The "timestamp" is a monotonically increasing UTC millisecond timestamp:
   */
  uint64_t timestamp;
  /*
   * We treat the "version" field as OPTIONAL and the data generator will
   * normally only populate this field at the start-of-day. As such it can be
   * used by the backend as an indication that a client device has been rebooted
   * (for whatever reason). It allows the backend to track device restarts
   * without explicitly having to add a new field to provide that
   * information. After start-of-day all subsequent messages transmitted should
   * NOT fill the "version" field, thus minimising the size of the transmitted
   * binary and still allowing the backend to be notified of changes in
   * "version" if a client device is upgraded in the field (and hence will
   * restart and transmit the new "version" value in its first upload). There is
   * no point in continually transmitting a piece of "static" information for a
   * specific firmware build.
   */
  SchemaVersion version;
  /*
   * We provide support for an optional unique identifier to be carried in the
   * data so we can uniquely identify the source device. This can be a
   * per-device H/W specific value or something programmed into the flash of a
   * device during onboarding. It is *NOT* strictly necessary when using a
   * point-to-point system like Pelion where the connection already defines the
   * identity of the device. The field is just provided here as an option if we
   * want/need it.
   */
  UUID *identity;
  /*
   * We have a "vector" of fields to work around the receiver discerning
   * provided data against default values:
   */
  size_t n_fields;
  Field **fields;
  /*
   * A monotonically increasing sequence number. The default value of 0
   * indicates no sequence#, with valid sequences starting from 1. This optional
   * field is provided since it may be possible for a device that has not been
   * able to obtain network time to have an "uninitialised" timestamp field;
   * which would be indicated by timestamps being reported as the epoch or
   * shortly thereafter. To allow the backend data processing to correctly
   * interleave messages received with an invalid timestamp we provide the
   * ability for the firmware to provide a sequence number identifying the
   * message order. The use of a 64-bit numberspace obviates the requirement to
   * cope with the sequence# overflowing.
   */
  uint64_t sequence;
};
#define SMART_PLUG__INIT \
 { PROTOBUF_C_MESSAGE_INIT (&smart_plug__descriptor) \
    , 0, SCHEMA_VERSION__INVALID, NULL, 0,NULL, 0 }


/* Power methods */
void   power__init
                     (Power         *message);
size_t power__get_packed_size
                     (const Power   *message);
size_t power__pack
                     (const Power   *message,
                      uint8_t             *out);
size_t power__pack_to_buffer
                     (const Power   *message,
                      ProtobufCBuffer     *buffer);
Power *
       power__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data);
void   power__free_unpacked
                     (Power *message,
                      ProtobufCAllocator *allocator);
/* Field methods */
void   field__init
                     (Field         *message);
size_t field__get_packed_size
                     (const Field   *message);
size_t field__pack
                     (const Field   *message,
                      uint8_t             *out);
size_t field__pack_to_buffer
                     (const Field   *message,
                      ProtobufCBuffer     *buffer);
Field *
       field__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data);
void   field__free_unpacked
                     (Field *message,
                      ProtobufCAllocator *allocator);
/* UUID methods */
void   uuid__init
                     (UUID         *message);
size_t uuid__get_packed_size
                     (const UUID   *message);
size_t uuid__pack
                     (const UUID   *message,
                      uint8_t             *out);
size_t uuid__pack_to_buffer
                     (const UUID   *message,
                      ProtobufCBuffer     *buffer);
UUID *
       uuid__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data);
void   uuid__free_unpacked
                     (UUID *message,
                      ProtobufCAllocator *allocator);
/* SmartPlug methods */
void   smart_plug__init
                     (SmartPlug         *message);
size_t smart_plug__get_packed_size
                     (const SmartPlug   *message);
size_t smart_plug__pack
                     (const SmartPlug   *message,
                      uint8_t             *out);
size_t smart_plug__pack_to_buffer
                     (const SmartPlug   *message,
                      ProtobufCBuffer     *buffer);
SmartPlug *
       smart_plug__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data);
void   smart_plug__free_unpacked
                     (SmartPlug *message,
                      ProtobufCAllocator *allocator);
/* --- per-message closures --- */

typedef void (*Power_Closure)
                 (const Power *message,
                  void *closure_data);
typedef void (*Field_Closure)
                 (const Field *message,
                  void *closure_data);
typedef void (*UUID_Closure)
                 (const UUID *message,
                  void *closure_data);
typedef void (*SmartPlug_Closure)
                 (const SmartPlug *message,
                  void *closure_data);

/* --- services --- */


/* --- descriptors --- */

extern const ProtobufCEnumDescriptor    schema_version__descriptor;
extern const ProtobufCEnumDescriptor    field_key__descriptor;
extern const ProtobufCMessageDescriptor power__descriptor;
extern const ProtobufCMessageDescriptor field__descriptor;
extern const ProtobufCMessageDescriptor uuid__descriptor;
extern const ProtobufCMessageDescriptor smart_plug__descriptor;

PROTOBUF_C__END_DECLS


#endif  /* PROTOBUF_C_smart_5fplug_2eproto__INCLUDED */
