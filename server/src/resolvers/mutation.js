const APP_SECRET = process.env.SECRET || " ";
const {
  cannotCreateUserMessage,
  userNotFoundMessage,
} = require('../error-messages')
const expirationTime = '100h';
const jwt = require('jsonwebtoken');

module.exports.Mutation = {
  signInWithGoogle: async (_, { googleId }, { dataSources, userId }) => {
    const user = await dataSources.mainAPI.findUser({ googleId });
    if (user === null) {
      return {
        success: false,
        message: userNotFoundMessage,
        token: null,
        user: null
      };
    }

    // TODO(lsh9034): expiration time depending on the last user interaction.
    const token = jwt.sign({ userId: userId }, APP_SECRET, { expiresIn: expirationTime });

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

    const token = jwt.sign({ userId: user.id }, APP_SECRET, {
      expiresIn: "100h"
    });
    
    return {
      success: true,
      message: "Success",
      token: token,
      user
    };
    },
  createReview: async (_, { userId, eventId, title, content, isPublic }, { dataSources }) => {
    const isSuccess = await dataSources.mainAPI.
      createOrModifyReview(
        {
          userId, eventId, title, content, isPublic
        }
      );
    return isSuccess;
  },
  modifyReview: async (_, { userId, eventId, title, content, isPublic }, { dataSources }) => {
    const isSuccess = await dataSources.mainAPI.
      createOrModifyReview(
        {
          userId, eventId, title, content, isPublic
        }
      );
    return isSuccess;
  },
  logout: async () => {
  },

};
