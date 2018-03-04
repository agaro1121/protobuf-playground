`brew install protobuf`

customer.js
`protoc --js_out=. messages.proto`

messages_pb.js
`protoc --js_out=import_style=commonjs,binary:. messages.proto`

# Reserved Tags
- useful when removing a field
- remove a field, then reserve it's tag so old clients depending on that field don't break

example:

```proto
syntax = "proto3";
message Foo {
    int32 id = 1;
    string name = 2 [deprecated = true]; // can also do this for languages that support it ie Java
}
```
later...
```proto
syntax = "proto3";
message Foo {
    int32 id = 1;
    string first_name = 3;
    string last_name = 4;
    reserved 2; // <------------
}
```

example syntax:
- `reserved 1;`
- `reserved 1,2,3;`
- `reserved 1 to 3;`
- `reserved 1,2,3, 15 to 25;`

# Reserved Fields
- helps when interacting with xml/json because fields pop up again 
```proto
syntax = "proto3";
message Foo {
    int32 id = 1;
    string full_name = 2;
}
```
later...
```proto
syntax = "proto3";
message Foo {
    int32 id = 1;
    string first_name = 3;
    string last_name = 4;
    reserved "full_name"; // <------------
}
```

example syntax:
- `resrved "field_name";`
- `resrved "field_name", "second";`