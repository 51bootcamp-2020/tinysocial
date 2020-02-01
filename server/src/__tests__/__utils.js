const {HttpLink} = require('apollo-link-http');
const fetch = require('node-fetch');
const {execute, toPromise} = require('apollo-link');

module.exports.toPromise = toPromise;

/**
 * e2e Testing Utils
 */

const startTestServer = async (server) => {
  const httpServer = await server.listen({port: 0});

  const link = new HttpLink({
    uri: `http://localhost:${httpServer.port}`,
    fetch,
  });

  const executeOperation = ({query, variables = {}}) =>
    execute(link, {query, variables});

  return {
    link,
    stop: () => httpServer.server.close(),
    graphql: executeOperation,
  };
};

module.exports.startTestServer = startTestServer;
