const jwt = require('jsonwebtoken');
const APP_SECRET = process.env.SECRET || "";
const expirationTime = '100h';
module.exports.Mutation = {
  signInWithGoogle: async (_, {googleId}, {dataSources,userId}) => {
    const user = await dataSources.mainAPI.findUser({googleId});
    if (user === null) {
      return {
        success: false,
        message: userNotFoundMessage,
        token: null,
        user: null
      };
    }

    // TODO(lsh9034): expiration time depending on the last user interaction.
    const token = jwt.sign({userId:userId}, APP_SECRET,{expiresIn: expirationTime});

    return {
      success: true,
      message: 'Success',
      token: token,
      user,
    };
  },

  signUpWithGoogle: async (
    _,
    { googleId, email, firstName, lastName, profileImgUrl },
    { dataSources }
  ) => {
    const user = await dataSources.mainAPI.findOrCreateUser(
      { googleId },
      {
        email,
        firstName,
        lastName,
        profileImgUrl: profileImgUrl ? profileImgUrl : ""
      }
    );

        if (user === null) {
          return {
            success: false,
            message: cannotCreateUserMessage,
            token: null,
            user: null,
          };
        }

        // TODO(lsh9034): Implement session logic.
        // Create session and return sessionId to client.

    // TODO(lsh9034): Implement session logic.
    //  Create session and return sessionId to client.

    return {
      success: false,
      message: "Success",
      token: "We have to implement this",
      user
    };
  },

  logout: async () => {}
};
