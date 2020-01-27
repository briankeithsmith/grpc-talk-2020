const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.join(__dirname, 'protos', "users.proto");
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
var users_proto = grpc.loadPackageDefinition(packageDefinition).voting.users;
module.exports = users_proto;