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
  AuthResponse,
  Review,
  EventSchedule,
  // TODO(yun-kwak): Add scalar type
  TagConnection: {
    tags: async (parents, _, {dataSources}) =>{
      return parents.tagNames;
    },
  },
  EventConnection: {
    events: async (parents, _, {dataSources, userId}) => {
      const events = await dataSources.mainAPI.findEvents(parents.eventsId);
      return events;
    },
  },
};
