const {HttpLink} = require('apollo-link-http');
const fetch = require('node-fetch');
const {execute, toPromise} = require('apollo-link');

module.exports.toPromise = toPromise;

const {
  context,
  typeDefs,
  resolvers,
  ApolloServer,
  store,
  AuthAPI,
  EventAPI,
  ReviewAPI,
  TagAPI,
  UserAPI,
} = require('../');

/**
 * Integration testing utils
 */

const constructTestServer = ({context = context} = {}) => {
  const authAPI = new AuthAPI(store);
  const eventAPI = new EventAPI(store);
  const reviewAPI = new ReviewAPI(store);
  const tagAPI = new TagAPI(store);
  const userAPI = new UserAPI(store);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({authAPI, eventAPI, reviewAPI, tagAPI, userAPI}),
    context,
  });

  return {server, authAPI, eventAPI, reviewAPI, tagAPI, userAPI};
};

module.exports.constructTestServer = constructTestServer;

/**
 * e2e Testing Utils
 */

const startTestServer = async (server) => {
  // if using apollo-server-express...
  // const app = express();
  // server.applyMiddleware({ app });
  // const httpServer = await app.listen(0);

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
