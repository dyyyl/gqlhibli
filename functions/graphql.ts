import { createLambdaServer } from './bundle/server';

const server = createLambdaServer();

module.exports.handler = server.createHandler({
  cors: {
    origin: '*',
  },
});
