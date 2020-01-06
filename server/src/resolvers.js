const {authGoogle} = require('./auth/auth-google');
const {authFacebook} = require('./auth/auth-facebook');

module.exports = {
  Query: {
    events: (_, __, {dataSources}) => {
      return dataSources.fakeAPI.getAllEvents();
    },
    event: (_, {id}, {dataSources}) => {
      return dataSources.fakeAPI.getAllEvents.filter(event => event.id === id);
    },
    me: (_, __, {dataSources}) => {
    },
  },
  Mutation: {
    authGoogle,
    authFacebook,
  },
};
