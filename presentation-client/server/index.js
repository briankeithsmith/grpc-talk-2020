const fastifyStatic = require('fastify-static');
const fastifyBlipp = require('fastify-blipp');
const path = require('path');
const fs = require('fs');


const indexContents = fs.readFileSync(path.join(__dirname, '..', 'dist', 'index.html')).toString();

const fastify = require('fastify')({
  ignoreTrailingSlash: true,
  logger: true
});
fastify.register(fastifyBlipp);

//
fastify.register(fastifyStatic, {
  root: path.join(__dirname, '..', 'dist'),
  prefix: '/presentations/'
});

fastify.setNotFoundHandler(function (request, reply) {
  reply.type('text/html');
  reply.send(indexContents);
});

const start = async () => {
  try {
    await fastify.listen(8080, '0.0.0.0');
    fastify.blipp();

  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

process.on('uncaughtException', error => {
  console.error(error);
});
process.on('unhandledRejection', error => {
  console.error(error);
});

const shutdown = function() {
  process.exit(0);
}

process.on('SIGILL', shutdown);
process.on('SIGTERM', shutdown);
process.on('SIGTRAP', shutdown);
process.on('SIGINT', shutdown);

start();
