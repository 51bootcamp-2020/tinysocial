require('dotenv').config();
const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const {EventAPI, ReviewAPI, TagAPI, UserAPI, AuthAPI} = require('./utils');
const {createStore} = require('./database');
const jwt = require('jsonwebtoken');

if (process.env.NODE_ENV === undefined) {
  console.error('You have to make .env file to run the server.\n' +
    'Look at this(https://github.com/motdotla/dotenv) for more information.');
  console.error('If you made .env file but you are seeing this error,' +
    'make sure you are running Node in the src folder');
  process.exit();
}

const store = createStore();

const dataSources = () => ({
  eventAPI: new EventAPI(store),
  reviewAPI: new ReviewAPI(store),
  tagAPI: new TagAPI(store),
  userAPI: new UserAPI(store),
  authAPI: new AuthAPI(store),
});

const APP_SECRET = process.env.SECRET || 'default';

const context = async ({req}) => {
  if (!req.headers.authorization) {
    return {
      userId: null,
    };
  }
  try {
    const token = req.headers.authorization;
    const userId = jwt.verify(token, APP_SECRET);
    const id = userId.id;
    return {userId: id};
  } catch (e) {
    return {
      userId: null,
    };
  }
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context: context,
});


if (process.env.NODE_ENV !== 'test') {
  server.listen({port: 15780}).
    then(({url}) => console.log(`Server running at at ${url}`));
}
