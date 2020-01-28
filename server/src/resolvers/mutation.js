const errorMessage = require('../errorMessages');
module.exports.Mutation = {
  signInWithGoogle: async (_, {googleId}, {dataSources}) => { },
  singUpWithGoogle: async (_, {googleId, email, firstName, lastName, profileImgUrl}, {dataSources}) => { },
  signUp: async (_, {email, firstName, lastName, pw, repw}, {dataSources}) => { },
  signIn: async (_, {email, pw}, {dataSources}) => { },
  emailValidate: async (_, {token}, {dataSources}) => { },
  logOut: async (_, __, {dataSources, userId}) => {
    throw new Error(errorMessage.notImplementMessage);
  },
  createOrModifyReview: async (_, {eventId, title, content, isPublic}, {dataSources, userId}) => {
    const review = dataSources.reviewAPI.createOrModifyOfReview({eventId, title, content, isPublic, userId});
    return review;
  },
};
