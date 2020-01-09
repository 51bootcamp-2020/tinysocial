const {authGoogle} = require('./auth/auth-google');
const {authFacebook} = require('./auth/auth-facebook');
const {Query} = require('./resolvers/Query');
const {Mutation} = require('./resolvers/Mutation');
const {AuthResponse} = require('./resolvers/AuthResponse');
const {AuthInput} = require('./resolvers/AuthInput');
const {Date} = require('./resolvers/Date');
const {User} = require('./resolvers/User');
const {Event} = require('./resolvers/Event');
const {Tag} = require('./resolvers/Tag');
const {EventConnection} = require('./resolvers/EventConnection');
const {DateTime} = require('./resolvers/DateTime');
const {EventSchedule} = require('./resolvers/EventSchedule');

module.exports = {
  Query,
  Mutation,
  AuthResponse,
  AuthInput,
  Date,
  User,
  Event,
  Tag,
  EventConnection,
  DateTime,
  EventSchedule,
};