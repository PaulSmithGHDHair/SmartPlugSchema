# Protocol Buffer schemas

Schemas for Protocol Buffer messages used for firmware and server
communications. The use of Protocol Buffers allows for a standard
transport encoding, with a reasonable set of run-time language
implementations to allow for easier platform agnostic binary data
transfer.

## Glossary

term     | description
-------- | -----------
protobuf | Shorthand for Protocol Buffer in this documentation

## Introduction

By default we use the `proto3` form of protobuf message encoding: See [Language Guide (proto3)](https://developers.google.com/protocol-buffers/docs/proto3).

> **NOTE**: Schemas should conform to the standard [Google style-guide](https://developers.google.com/protocol-buffers/docs/style)

The protobuf schema definitions should be extensible, allowing the
incorporation of other data (e.g. sensors) in the future without
affecting backward compability with older code using earlier
implementations of the schema.

The schema used are designed for maximum flexibility as well as low
network overhead (binary) communication. It is beyond the scope of
this document to cover the transport mechanism. We do not consider
encoding explicitly for request/response behaviours since it is
assumed that the transport layer will guarantee valid delivery of
complete single messages (e.g. TCP/IP). If a non-guaranteed transport
pipe is used to connect peers, then the protobuf messages can be
wrapped in a suitable ACK/NAK mechanism outside the scope of this
protobuf layer.

> Using a simple fire-and-forget message between peers means we can
have any requirement for request operations for data to be implemented
by the receiver just transmitting a suitable protobuf back to the
originator depending on the contents of the messages they receive
themselves.

## Details

The `proto3` version of protobuf messages allows for all fields to be
optional which has a benefit on the transmission (pack) side since
only fields that have valid data need be populated. The downside is
that `proto3` does not allow the receiver (unpack) side to detect
whether a field **WAS** provided or not; since it only has the concept
of returning default values for fields that were **not** transferred
in the binary message.

For our usage this means that instead of using a simple flat schema
consisting of (potentially optional) scalar type fields for messages
that may have optionally populated fields, we use a repeated
sub-message with a enum defined `key` to identify the specific
data. The enum list is treated like the field numbering of a normal
flat message with the scalar/complex type of the field being
**implied** (since all enum entries are wrapped in a `oneof`
union). Like fields in a normal flat message the `enum` numbers
assigned for `key` values should **NEVER** be re-purposed. This
guarantees backwards compatibility with older systems (that only need
to be coded to ignore unrecognised keys) and provides for extension
over time through adding new `enum` values.

Basically, the following simple schema is used:

```
syntax = "proto3";

enum FieldKey {
  UNUSED = 0;
  // The key number space that is only appended to and NEVER changed
}

message Field {
  FieldKey key = 1;
  oneof value {
    // scalar or complex types needed for the different implied "key" data types
  }
}

message Protocol {
  repeated Field fields = 1;
}
```

So, to be definitive, fields (or enums) should not be reused. Once
assigned they exist forever. This allows extensibility whilst not
breaking backwards compatability. Receiver (unpack) implementations
should just ignore (or silently handle) fields that it does not
recognise.

**NOTE**: We need to be explicit that an `enum` key/field has a
specific **IMPLIED** scalar type encoding, since that is "lost" in the
enum/key model used (we do not have a mechanism for tieing specific
`key` values to `oneof` union fields). If a different scalar/complex
type is needed in the future for a particular data value represented
by an existing `key` then a new `enum` key mapping should be generated
where the scalar/complex type is implicit for that key in an update to
the schema. e.g. We need to provide a new value interpretation for a
field, or we need to extend the data provided, so we would go from:

```
enum FieldKey {
  ...
  TEMPERATURE_H = 2; // double (Centigrade)
  ACCELEROMETER = 3; // Accelerometer type { int x,y,z }
  ...
}
```

... to:


```
enum FieldKey {
  ...
  TEMPERATURE_H = 2; // double (Centigrade)
  ACCELEROMETER = 3; // Accelerometer type { int x,y,z }
  ...
  TEMPERATURE_F = x; // double (Fahrenheit)
  ACCELEROMETER_NEW = y; // AccelerometerComplex type { float x,y,z; uint32 event }
}
```

## Host tools

The aim is that eventually the protobuf related host build tools will
be provided as part of a standard Mbed OS build world, with the target
run-time support files available as a Mbed OS library. At a minimum
the application build world can locally build the extra tools as
needed if 'protoc' never becomes a formally supported Mbed OS tool.

Also, the *default* for the `protoc` tool is to generate C++
source. **HOWEVER** At the moment we are using the generated C version
of the schema (and not the generated C++ source) due to
cross-compilation issues from the C++ generated code (e.g. "error:
cannot use 'typeid' with '-fno-rtti'").

We also "cheat" and add the the protobuf C run-time support directly
into the application, along with the schema specific generated C
sources. This is a workaround until we have a Mbed OS library
providing the necessary support based on the version of the protobuf
host tools being used for the build.

### `protoc`

**NOTE** You may need to install some build dependencies before constructing the protobuf host build tools. e.g.

```
$ sudo apt-get install autoconf automake libtool curl make g++ unzip
```

You should source the latest release package from
[protobuf github](https://github.com/protocolbuffers/protobuf/releases).

The example below uses the `protobuf-python-3.11.3.tar.gz` package to
ensure support for Python run-times (all the packages contain the
default C++ support). After downloading it can be extracted and the
package directory entered before configuring and building:

```
.../protobuf-3.11.3$ ./configure --prefix=/usr --disable-shared
.../protobuf-3.11.3$ make
.../protobuf-3.11.3$ sudo make install
.../protobuf-3.11.3$ sudo ldconfig
```

For generating C code for the schema we also need `protoc-c` from
[protobuf-c github](https://github.com/protobuf-c/protobuf-c).

So after building the standard C++ 'protoc' as described above you
should be able to:

```
.../3rd_party/github$ git clone --recursive https://github.com/protobuf-c/protobuf-c.git
.../3rd_party/github$ cd protobuf-c/
.../3rd_party/github/protobuf-c$ ./autogen.sh
.../3rd_party/github/protobuf-c$ ./configure
.../3rd_party/github/protobuf-c$ make
.../3rd_party/github/protobuf-c$ sudo make install
```

The above steps will ensure you have the necessary tool support for
converting a schema into C++, C or Python wrappers as required.

## Generating the output

The following commands were used to generate the output files.

```
$ mkdir c
$ mkdir js
$ protoc-c --c_out c smart_plug.proto
$ protoc --python_out=python --js_out=js smart_plug.proto
```

## Examples and Testing

**NOTE** The aim is to utilise the standard Mbed OS testing
infrastructures where appropriate to allow both the pack and unpack
sides of protobuf usage to be verified.

A very simple Python `./Python/Poller.py` script is provided that can act
as an endpoint for protobuf messages conforming to our
`smart_plug.proto` schema.

