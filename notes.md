`brew install protobuf`

customer.js
`protoc --js_out=. messages.proto`

messages_pb.js
`protoc --js_out=import_style=commonjs,binary:. messages.proto`