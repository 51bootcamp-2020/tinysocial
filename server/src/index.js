const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

// TODO(arin-kwak): Replace this with actual API
const {fakeAPI} = require('./utils');
const {createStore} = require('./utils');

// TODO(arin-kwak): Replace this fake DB with real database
const fakeDB = createStore();
const dataSources = () => ({
  fakeAPI: new fakeAPI({fakeDB}),
});
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => new dataSources(),
  context: ({req}) => {
    // TODO(arin-kwak): Serve user authentication info like token, etc
    return {};
  },
});

if (process.env.NODE_ENV !== 'test')
  server.listen({port: 4000}).
      then(({url}) => console.log(`Server ready at ${url}`));