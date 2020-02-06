const {DateTimeResolver} = require('graphql-scalars');

const {Query} = require('./resolvers/query');
const {Mutation} = require('./resolvers/mutation');
const {User} = require('./resolvers/user');
const {Event} = require('./resolvers/event');
const {EventBookClub} = require('./resolvers/event-book-club');
const {Tag} = require('./resolvers/tag');
const {AuthResponse} = require('./resolvers/auth-response');
const {Review} = require('./resolvers/review');
const {EventSchedule} = require('./resolvers/event-schedule');
const {TagConnection} = require('./resolvers/tag-connection');
const {EventConnection} = require('./resolvers/event-connection');

// Why should you write field-level resolvers fetching data manually instead of
// default resolvers? Look at this references.
// https://medium.com/paypal-engineering/graphql-resolvers-best-practices-cd36fdbcef55
// https://www.apollographql.com/docs/apollo-server/data/data-sources/#batching
// https://graphql.org/learn/best-practices/#server-side-batching-caching

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
  TagConnection,
  EventConnection,
  DateTime: DateTimeResolver,
};
