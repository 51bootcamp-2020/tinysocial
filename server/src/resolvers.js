const {Query} = require('./resolvers/query');
const {Mutation} = require('./resolvers/mutation');
const {User} = require('./resolvers/user');
const {Event} = require('./resolvers/event');
const {EventBookClub} = require('./resolvers/eventBookClub');
const {Tag} = require('./resolvers/tag');
module.exports = {
  Query,
  Mutation,
  User,
  Event,
  EventBookClub,
  Tag,
  EventConnection: {
    events: async (parents, _, {dataSources, userId}) => {
      console.log("parents",parents);
      const events = await dataSources.mainAPI.findEvents(parents.eventsId);
      return events;
    },
  },
};
