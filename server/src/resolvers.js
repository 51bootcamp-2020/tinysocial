const {Query} = require('./resolvers/query');
const {Mutation} = require('./resolvers/mutation');
const {User} = require('./resolvers/user');
const {Event} = require('./resolvers/event');

module.exports = {
  Query,
  Mutation,
  User,
  Event,
  Tag: {
    events: () => {
    },
  },
  EventConnection: {
    events: () => {
    },
  },
};
