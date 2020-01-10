module.exports.Mutation = {
  signInWithGoogle: async (_, {googleId}, {dataSources}) => {
    const user = await dataSources.mainAPI.findOneUser({googleId});
    if (user === null) {
      return {
        success: false,
        message: 'User not found. You have to sign up first.',
        token: null,
        user: null,
      };
    }

    // TODO(lsh9034): Implement session logic.
    //  Create session and return sessionId to client.

    return {
      success: true,
      message: 'Success',
      token: 'We have to implement this',
      user,
    };
  },

  signUpWithGoogle:
      async (
          _, {googleId, email, firstName, lastName, profileImgUrl},
          {dataSources}) => {
        const user = await dataSources.mainAPI.findOrCreateUser({googleId},
            {
              email,
              firstName,
              lastName,
              profileImgUrl: profileImgUrl ? profileImgUrl : '',
            });

        if (user === null) {
          return {
            success: false,
            message: 'Fail to create the user. Please try again later',
            token: null,
            user: null,
          };
        }

        // TODO(lsh9034): Implement session logic.
        //  Create session and return sessionId to client.

        return {
          success: true,
          message: 'Success',
          token: 'We have to implement this',
          user,
        };
      },

  logout: async () => {
  },
};
