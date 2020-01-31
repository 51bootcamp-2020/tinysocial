'use strict';
require('dotenv').config({path: require('path').
    resolve(process.cwd(), 'src/.env')});
const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const {EventAPI} = require('./dataSources/eventAPI');
const {ReviewAPI} = require('./dataSources/reviewAPI');
const {AuthAPI} = require('./dataSources/authAPI');
const {TagAPI} = require('./dataSources/tagAPI');
const {UserAPI} = require('./dataSources/userAPI.js');
const {JoinEventAPI} = require('./dataSources/joinEventAPI.js');

if (process.env.NODE_ENV === undefined) {
  console.error('You have to make .env file to run the server.\n' +
    'Look at this(https://github.com/motdotla/dotenv) for more information.');
  console.error('If you made .env file but you are seeing this error,' +
    'make sure you are running Node in the src folder');
  process.exit();
}

const {createStore} = require('./database');
const context = require('./context');

let dataSources; let server;
createStore().then((store) => {
  dataSources = () => ({
    eventAPI: new EventAPI(store),
    reviewAPI: new ReviewAPI(store),
    tagAPI: new TagAPI(store),
    userAPI: new UserAPI(store),
    authAPI: new AuthAPI(store),
    joinEventAPI: new JoinEventAPI(store),
  });

  server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    context,
  });

  if (process.env.NODE_ENV !== 'test') {
    server.listen({port: 15780}).
        then(({url}) => console.log(`Server running at at ${url}`));
  }
});

