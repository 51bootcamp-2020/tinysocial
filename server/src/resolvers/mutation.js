const APP_SECRET = process.env.SECRET || " ";
const {
  cannotCreateUserMessage,
  userNotFoundMessage,
  notValidUserInfo,
} = require('../error-messages');
const expirationTime = '100h';
const jwt = require('jsonwebtoken');
const sha256 = require('sha256');
const sendmail = require('sendmail')();

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

  emailValidate: async (
      _,
      { token },
      { dataSources }
  ) => {
    const userInfo = jwt.verify(token, APP_SECRET);

    const user = await dataSources.mainAPI.findOrCreateUser(
        { email: userInfo.email },
        {
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          password: userInfo.pw_hashed,
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

    const token_ = jwt.sign({ userId: user.email }, APP_SECRET, {
      expiresIn: "100h"
    });

    return {
      success: true,
      message: "Success",
      token: token_,
      user
    };
  },

  signUp: async (
      _,
      { email, firstName, lastName, pw, repw },
      { dataSources }
  ) => {
    // Validating the input of user
    const pw_hashed = sha256(pw + process.env.PASSWORD_SALT);
    const repw_hashed = sha256(repw + process.env.PASSWORD_SALT);
    if(pw_hashed !== repw_hashed){
      return {
        success: false,
        message: notValidUserInfo,
        token: null,
        user: null,
      };
    }

    const user = await dataSources.mainAPI.findUser({ email });
    if(user !== null){
      return {
        success: false,
        message: notValidUserInfo,
        token: null,
        user: null,
      };
    }

    // Email check
    const token = jwt.sign({ email: email, firstName: firstName, lastName: lastName, pw_hashed: pw_hashed }, APP_SECRET, {
      expiresIn: "1h"
    });

    sendmail({
      from: 'no-reply@tinysocial.SangGeonZZang.com',
      to: email,
      subject: 'Action Required: Verify your email for the TinySocial',
      html: "Verify your email address:  <a href=\'http://localhost:3000/emailvalidation?token=" + token + "\'>Verify Email</a>",
    }, function(err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
    });

    return {
      success: true,
      message: "Success",
    };
  },

  signIn: async (_, {email, pw}, {dataSources,userId}) => {
    const hashed_pw = sha256(pw +  + process.env.PASSWORD_SALT);
    const user = await dataSources.mainAPI.findUser({email: email, password: hashed_pw});
    if (user === null) {
      return {
        success: false,
        message: userNotFoundMessage,
        token: null,
        user: null
      };
    }

    // TODO(lsh9034): expiration time depending on the last user interaction.
    const token = jwt.sign({userId: email}, APP_SECRET,{expiresIn: expirationTime});

    return {
      success: true,
      message: 'Success',
      token: token,
      user,
    };
  },


  logout: async () => {}
};
