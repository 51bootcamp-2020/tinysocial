const {Query} = require('./resolvers/query');
const {Mutation} = require('./resolvers/mutation');
const {User} = require('./resolvers/user');
const {Event} = require('./resolvers/event');
const {EventBookClub} = require('./resolvers/eventBookClub');

module.exports = {
  Query,
  Mutation,
  User,
  Event,
  EventBookClub,
  Tag: {},
  EventConnection: {},
};
