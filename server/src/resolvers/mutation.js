const APP_SECRET = process.env.SECRET || 'default';
const {
  cannotCreateUserMessage,
  userNotFoundMessage,
} = require('../error-messages');
const expirationTime = '100h';
const jwt = require('jsonwebtoken');
const sha256 = require('sha256');
const sendmail = require('sendmail')();

const EMAIL_FROM = 'no-reply@tinysocial.SangGeonZZang.com';
const EMAIL_TITLE = 'Action Required: Verify your email for the TinySocial';

// Verify password string
function passworldVerify(pw) {
  let ret = true;
  if (pw.length < 8) {
    ret = false;
  }
  if (pw.match(/\d/g) === null) {
    ret = false;
  }
  if (pw.match(/[a-zA-Z]/g) === null) {
    ret = false;
  }

  return ret;
}

module.exports.Mutation = {
  logout: async () => {
  },

  signInWithGoogle: async (_, {googleId}, {dataSources}) => {
    const user = await dataSources.mainAPI.findUser({googleId});
    if (user === null) {
      return {
        success: false,
        message: userNotFoundMessage,
        token: null,
        user: null,
      };
    }

    // TODO(lsh9034): expiration time depending on the last user interaction.
    const token = jwt.sign(
        {id: user.id}, APP_SECRET, {expiresIn: expirationTime},
    );

    return {
      success: true,
      message: 'Success',
      token: token,
      user,
    };
  },

  signUpWithGoogle: async (
    _,
    {googleId, email, firstName, lastName, profileImgUrl},
    {dataSources},
  ) => {
    const user = await dataSources.mainAPI.findOrCreateUser(
        {googleId},
        {
          email,
          firstName,
          lastName,
          profileImgUrl: profileImgUrl ? profileImgUrl : '',
        },
    );

    if (user === null) {
      return {
        success: false,
        message: cannotCreateUserMessage,
        token: null,
        user: null,
      };
    }

    const token = jwt.sign({userId: user.id}, APP_SECRET, {
      expiresIn: '100h',
    });
    return {
      success: true,
      message: 'Success',
      token: token,
      user,
    };
  },

  createOrModifyReview: async (
    _, {eventId, title, content, isPublic},
    {dataSources, userId}) => {
    if (userId === null) {
      return false;
    }
    const review = await dataSources.mainAPI.
        createOrModifyReview(
            {
              userId, eventId, title, content, isPublic,
            },
        );
    return review;
  },
  emailValidate: async (
    _,
    {token},
    {dataSources},
  ) => {
    const userInfo = jwt.verify(token, APP_SECRET);

    // NEED TO DESTROY OR BLACK LISTING EXISTING QUERY

    const profileImgUrl = ''; // NEED TO HANDLE THIS LATER

    const user = await dataSources.mainAPI.findOrCreateUser(
        {email: userInfo.email},
        {
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          password: userInfo.pw_hashed,
          profileImgUrl: profileImgUrl ? profileImgUrl : '',
        },
    );

    if (user === null) {
      return {
        success: false,
        message: cannotCreateUserMessage,
        token: null,
        user: null,
      };
    }

    const token_ = jwt.sign({userId: user.email}, APP_SECRET, {
      expiresIn: '100h',
    });

    return {
      success: true,
      message: 'Success',
      token: token_,
      user,
    };
  },

  signUp: async (
    _,
    {email, firstName, lastName, pw, repw},
    {dataSources},
  ) => {
    // Validating the input of user

    const pw_hashed = sha256(pw + process.env.PASSWORD_SALT);
    const repw_hashed = sha256(repw + process.env.PASSWORD_SALT);
    if (pw_hashed !== repw_hashed || !passworldVerify(pw)) {
      return {
        success: false,
        message: cannotCreateUserMessage,
        token: null,
        user: null,
      };
    }

    const user = await dataSources.mainAPI.findUser({email});
    if (user !== null) {
      return {
        success: false,
        message: cannotCreateUserMessage,
        token: null,
        user: null,
      };
    }

    // Email check
    const token = jwt.sign({email: email, firstName: firstName, lastName: lastName, pw_hashed: pw_hashed}, APP_SECRET, {
      expiresIn: '1h',
    });

    sendmail({
      from: EMAIL_FROM,
      to: email,
      subject: EMAIL_TITLE,
      html: 'Verify your email address:  <a href=\'http://localhost:3000/emailvalidation?token=' + token + '\'>Verify Email</a>',
    }, function(err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
    });

    return {
      success: true,
      message: 'Success',
    };
  },

  signIn: async (_, {email, pw}, {dataSources, userId}) => {
    const hashed_pw = sha256(pw + + process.env.PASSWORD_SALT);
    const user = await dataSources.mainAPI.findUser(
        {email: email, password: hashed_pw},
    );
    if (user === null) {
      return {
        success: false,
        message: userNotFoundMessage,
        token: null,
        user: null,
      };
    }

    // TODO(lsh9034): expiration time depending on the last user interaction.
    const token = jwt.sign(
        {userId: email}, APP_SECRET, {expiresIn: expirationTime},
    );

    return {
      success: true,
      message: 'Success',
      token: token,
      user,
    };
  },
};
