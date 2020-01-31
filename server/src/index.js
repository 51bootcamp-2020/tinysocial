'use strict';
require('dotenv').config({
  path: require('path').
      resolve(process.cwd(), 'src/.env'),
});
const {ApolloServer} = require('apollo-server-lambda');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const {EventAPI} = require('./dataSources/eventAPI');
const {ReviewAPI} = require('./dataSources/reviewAPI');
const {AuthAPI} = require('./dataSources/authAPI');
const {TagAPI} = require('./dataSources/tagAPI');
const {UserAPI} = require('./dataSources/userAPI.js');

if (process.env.NODE_ENV === undefined) {
  console.error('You have to make .env file to run the server.\n' +
    'Look at this(https://github.com/motdotla/dotenv) for more information.');
  console.error('If you made .env file but you are seeing this error,' +
    'make sure you are running Node in the src folder');
  process.exit();
}

const {createStore} = require('./database');
const context = require('./context');

const server = (async function constructServer() {
  const store = await createStore();
  return new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      eventAPI: new EventAPI(store),
      reviewAPI: new ReviewAPI(store),
      tagAPI: new TagAPI(store),
      userAPI: new UserAPI(store),
      authAPI: new AuthAPI(store),
    }),
    context,
  });
})();
console.log(server);

if (process.env.NODE_ENV === 'dev') {
  server.listen({port: 15780}).
      then(({url}) => console.log(`Server running at at ${url}`));
}
exports.graphqlHandler = server.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
});

exports.sync = store.sync;
