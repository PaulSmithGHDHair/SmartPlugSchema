# protobuf C

To simplify the build system we use the C implementation of the
generic protobuf layer directly.

The C library files present in this sub-directory are as from:
```
https://github.com/protobuf-c/protobuf-c/releases/tag/v1.3.3
```

Ideally, support for the protobuf host build tool and runtime library
would eventually be provided as part of a standard mbed
build/import/add world.

Supporting the C++ generated runtime currently requires more porting
effort, so has been deferred.

