const {DataSource} = require('apollo-datasource');
const APP_SECRET = process.env.SECRET || 'default';
const {cannotCreateUserMessage, userNotFoundMessage} = require(
    '../errorMessages');
const expirationTime = '100h';
const jwt = require('jsonwebtoken');
const sha256 = require('sha256');
const {checkPasswordMessage} = require('../errorMessages');
const sendmail = require('sendmail')();

const EMAIL_FROM = 'no-reply@tinsocial.com';
const EMAIL_TITLE = 'Action Required: Verify your email for the TinySocial';

// Verify password string
function passwordVerify(pw) {
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

class AuthAPI extends DataSource {
  constructor(store) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async signInWithGoogle({googleId}) {
    const userId = this.store.User.findOne({
      where: {
        googleId,
      },
      attributes: ['id'],
      raw: true,
    });
    if (!userId) {
      return {
        success: false,
        message: userNotFoundMessage,
        token: null,
        user: null,
      };
    }

    // TODO(lsh9034): expiration time depending on the last user interaction.
    const token = jwt.sign({userId}, APP_SECRET,
        {expiresIn: expirationTime});

    return {
      success: true,
      message: 'Success',
      token: token,
      user: {
        id: userId,
      },
    };
  }
  async signIn({email, pw}) {
    let hashedPw;
    if (email && pw) {
      hashedPw = sha256(pw + process.env.PASSWORD_SALT);
    }
    const userId = this.store.User.findOne({
      where: {
        email,
        password: hashedPw,
      },
      attributes: ['id'],
      raw: true,
    });

    if (!userId) {
      return {
        success: false,
        message: userNotFoundMessage,
        token: null,
        user: null,
      };
    }

    // TODO(lsh9034): expiration time depending on the last user interaction.
    const token = jwt.sign({userId}, APP_SECRET,
        {expiresIn: expirationTime});

    return {
      success: true,
      message: 'Success',
      token: token,
      user: {
        id: userId,
      },
    };
  }

  async signUpWithGoogle({
    googleId, email, firstName, lastName,
    profileImgUrl,
  }) {
    const user = await this.store.User.findOrCreate({
      where: {googleId},
      defaults: {
        email,
        firstName,
        lastName,
        profileImgUrl: profileImgUrl ? profileImgUrl : '',
      },
    });


    if (user === null) {
      return {
        success: false,
        message: cannotCreateUserMessage,
        token: null,
        user: null,
      };
    }

    const token = jwt.sign({userId: user.id}, APP_SECRET, {
      expiresIn: expirationTime,
    });
    return {
      success: true,
      message: 'Success',
      token: token,
      user,
    };
  }

  async signUp({email, pw, repw, firstName, lastName}) {
    const hashedPw = sha256(pw + process.env.PASSWORD_SALT);
    const hashedRepw = sha256(repw + process.env.PASSWORD_SALT);
    if (hashedPw !== hashedRepw || !passwordVerify(pw)) {
      return {
        success: false,
        message: checkPasswordMessage,
        token: null,
        user: null,
      };
    }
    const userId = (await this.store.User.findOrCreate({
      where: {
        email,
      },
    }));

    if (userId === null) {
      return {
        success: false,
        message: cannotCreateUserMessage,
        token: null,
        user: null,
      };
    }

    const emailValidationToken = jwt.sign({
      email, firstName, lastName, hashedPw,
    }, APP_SECRET, {
      expiresIn: '1h',
    });

    sendmail({
      from: EMAIL_FROM,
      to: email,
      subject: EMAIL_TITLE,
      // TODO(c0510gy): Modify href in production phase.
      html: 'Verify your email address:  <a href=\'http://localhost:3000/emailvalidation?token=' +
        emailValidationToken + '\'>Verify Email</a>',
    });

    return {
      success: true,
      message: 'Success',
    };
  }

  async emailValidate(emailValidationToken) {
    const userInfo = jwt.verify(emailValidationToken, APP_SECRET);
    const {email, firstName, lastName, hashedPw} = userInfo;

    // NEED TO DESTROY OR BLACK LISTING EXISTING QUERY

    const profileImgUrl = ''; // NEED TO HANDLE THIS LATER

    const user = await this.store.User.findOrCreate({
      where: {email},
      defaults: {
        firstName,
        lastName,
        password: hashedPw,
        profileImgUrl: profileImgUrl ? profileImgUrl : '',
      },
    });

    if (user === null) {
      return {
        success: false,
        message: cannotCreateUserMessage,
        token: null,
        user: null,
      };
    }

    const token = jwt.sign({userId: user.email}, APP_SECRET, {
      expiresIn: expirationTime,
    });

    return {
      success: true,
      message: 'Success',
      token: token,
      user,
    };
  }
}

module.exports = {
  AuthAPI,
};
