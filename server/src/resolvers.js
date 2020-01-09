const {authGoogle} = require('./auth/auth-google');
const {authFacebook} = require('./auth/auth-facebook');

module.exports = {
  Query: {
    events: (_, __, {dataSources}) => {
    },
    event: (_, {id}, {dataSources}) => {
    },
    me: (_, __, {dataSources}) => {
    },
    user: (_, __, {dataSources}) => {
    },
  },
  Mutation: {
    authGoogle,
    authFacebook,
    logout: (_, __) => {
    },
  },
};
