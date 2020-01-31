const errorMessage = require('../errorMessages');
module.exports.Mutation = {
  signInWithGoogle: async (_, {googleId}, {dataSources}) => {
    return dataSources.authAPI.signInWithGoogle({googleId});
  },
  signUpWithGoogle: async (
    _,
    {googleId, email, firstName, lastName, profileImgUrl},
    {dataSources},
  ) => {
    return dataSources.authAPI.signUpWithGoogle({
      googleId,
      email,
      firstName,
      lastName,
      profileImgUrl,
    });
  },
  signIn: async (_, {email, pw}, {dataSources}) => {
    return dataSources.authAPI.signIn({email, pw});
  },
  signUp: async (
    _,
    {email, firstName, lastName, pw, repw},
    {dataSources},
  ) => {
    return dataSources.authAPI.signUp({
      email,
      firstName,
      lastName,
      pw,
      repw,
    });
  },
  emailValidate: async (_, {token}, {dataSources}) => {
    return dataSources.authAPI.emailValidate(token);
  },
  logOut: async (_, __, {dataSources, userId}) => {
    throw new Error(notImplementMessage);
  },
  createOrModifyReview: async (
    _,
    {eventId, title, content, isPublic},
    {dataSources, userId},
  ) => {
    if (!userId) {
      throw new Error(notLoggedInMessage);
    }
    const review = dataSources.reviewAPI.createOrModifyOfReview({
      eventId,
      title,
      content,
      isPublic,
      userId,
    });
    return review;
  },
  joinEvent: async (
    _,
    {orderId, eventId},
    {dataSources, userId},
  ) => {
    return dataSources.joinEventAPI.validateJoin({orderId, eventId, userId});
  },
};
