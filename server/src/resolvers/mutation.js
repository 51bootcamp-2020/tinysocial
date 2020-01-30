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

// Paypal API Info
const checkoutNodeJssdk = require('@paypal/checkout-server-sdk');
const payPalClient = require('../paypal-client');

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

  createReview: async (
    _, {eventId, title, content, isPublic},
    {dataSources, userId}) => {
    if (userId === null) {
      return false;
    }
    const isSuccess = await dataSources.mainAPI.
        createOrModifyReview(
            {
              userId, eventId, title, content, isPublic,
            },
        );
    return isSuccess;
  },

  modifyReview: async (
    _, {eventId, title, content, isPublic},
    {dataSources, userId}) => {
    if (userId === null) {
      return false;
    }
    const isSuccess = await dataSources.mainAPI.
        createOrModifyReview(
            {
              userId, eventId, title, content, isPublic,
            },
        );
    return isSuccess;
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
    const token = jwt.sign({userId: email}, APP_SECRET, {expiresIn: expirationTime});

    return {
      success: true,
      message: 'Success',
      token: token,
      user,
    };
  },

  logout: async () => {},

  joinEvent: async (
    _,
    {orderId, eventId},
    {dataSources},
  ) => {
    const orderID = orderId;

    // Call PayPal to get the transaction details
    const request = new checkoutNodeJssdk.orders.OrdersGetRequest(orderID);

    let order;
    try {
      order = await payPalClient.client().execute(request);
    } catch (err) {
      // Handle any errors from the call
      console.error(err);
      return false;
    }

    // Validate the transaction details are as expected
    console.log(order.result);
    console.log(order.result.purchase_units[0].amount);
    console.log(order.result.purchase_units[0].payee);
    console.log(order.result.purchase_units[0].payments);
    if (order.result.purchase_units[0].amount.currency_code !== 'USD' ||
        order.result.purchase_units[0].amount.value !== '0.01') {
      return false;
    }

    // Save the transaction in your database
    // await database.saveTransaction(orderID);


    // Return a successful response to the client
    return true;
  },
};
