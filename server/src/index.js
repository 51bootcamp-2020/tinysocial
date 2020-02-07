'use strict';
require('dotenv').config();
let ApolloServer;
let app;
if (process.env.NODE_ENV === 'production') {
  ApolloServer = require('apollo-server-lambda').ApolloServer;
} else {
  const express = require('express');
  app = express();
  ApolloServer = require('apollo-server-express').ApolloServer;
}
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const {EventAPI} = require('./dataSources/eventAPI');
const {ReviewAPI} = require('./dataSources/reviewAPI');
const {AuthAPI} = require('./dataSources/authAPI');
const {TagAPI} = require('./dataSources/tagAPI');
const {UserAPI} = require('./dataSources/userAPI.js');
const {JoinEventAPI} = require('./dataSources/join-eventAPI.js');

if (process.env.NODE_ENV === undefined) {
  console.error('You have to make .env file at the server folder' +
    'to run the server.\n' +
    'Look at this(https://github.com/motdotla/dotenv) for more information.\n' +
    'If you made .env file but you are seeing this error,' +
    'make sure you are running Node in the server folder');
  process.exit();
}

const {createStore} = require('./database');
const context = require('./context');

const store = createStore();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    eventAPI: new EventAPI(store),
    reviewAPI: new ReviewAPI(store),
    tagAPI: new TagAPI(store),
    userAPI: new UserAPI(store),
    authAPI: new AuthAPI(store),
    joinEventAPI: new JoinEventAPI(store),
  }),
  context,
  tracing: true,
});

switch (process.env.NODE_ENV) {
  case 'production':
    module.exports.graphqlHandler = server.createHandler({
      cors: {
        origin: true,
        credentials: true,
      },
    });
    break;
  case 'dev':
    server.applyMiddleware({app});
    app.listen({port: 4000}, () =>
      console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
    );
    break;
}
