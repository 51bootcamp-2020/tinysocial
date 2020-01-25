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
  Tag: {
    events: () => {
    },
  },
  EventConnection: {
    events: async (parents, _, {dataSources, userId}) => {
      const events = await dataSources.mainAPI.findEvents(parents.eventsId);
      return events;
    },
  },
};
