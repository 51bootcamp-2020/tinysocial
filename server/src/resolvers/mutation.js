module.exports.Mutation = {
  signInWithGoogle: async (_, {googleId}, {dataSources}) => { },
  singUpWithGoogle: async (_, {googleId, email, firstName, lastName, profileImgUrl}, {dataSources}) => { },
  signUp: async (_, {email, firstName, lastName, pw, repw}, {dataSources}) => { },
  signIn: async (_, {email, pw}, {dataSources}) => { },
  emailValidate: async (_, {token}, {dataSources}) => { },
  logOut: async (_, __, {dataSources, userId}) => { },
  createReview: async (_, {eventId, title, content, isPublic}, {dataSources, userId}) => { },
  modifyReview: async (_, {eventId, title, content, isPublic}, {dataSources, userId}) => { },
}
