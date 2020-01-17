require('dotenv').config();
const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const {mainAPI} = require('./utils');
const {createStore} = require('./database');

if (process.env.NODE_ENV === undefined) {
  console.error('You have to make .env file to run the server.\n' +
      'Look at this(https://github.com/motdotla/dotenv) for more information.');
  console.error('If you made .env file but you are seeing this error, make sure ' +
      'you are running Node in the src folder');
  process.exit()
}

const store = createStore();

const dataSources = () => ({
  mainAPI: new mainAPI(store),
});
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context: async ({req}) => {
    // TODO(arin-kwak): Serve user authentication info like token, etc
    return {};
  },
});


if (process.env.NODE_ENV !== 'test') {
  server.listen({port: 15780}).
      then(({url}) => console.log(`Server running at at ${url}`));
}
