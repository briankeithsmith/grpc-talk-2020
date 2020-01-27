


const grpc = require('grpc');
const users_proto = require('./proto');
const userService = require('./user-service');



const port = process.env.PORT || 5000;

function main() {
  var server = new grpc.Server();
  server.addService(users_proto.Users.service, {
    CreateUser: userService.createUser,
    UserExists: userService.userExists,
    ValidateUser: userService.validateUser,
  });
  server.bind(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure());
  server.start();
}

main();