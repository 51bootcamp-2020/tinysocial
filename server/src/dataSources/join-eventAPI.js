/* eslint-disable require-jsdoc */
const {DataSource} = require('apollo-datasource');
const {
  userIdIsNotPassedMessage,
  eventIdIsNotPassedMessage,
} = require('../error-messages');

// Paypal API Info
const checkoutNodeJssdk = require('@paypal/checkout-server-sdk');
const payPalClient = require('../paypal-client');
const CURRENCY_CODE = 'USD';

class JoinEventAPI extends DataSource {
  constructor(store) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getParticipatedEventIds(userId) {
    if (userId === undefined || userId === null) {
      throw new Error(userIdIsNotPassedMessage);
    }
    const ids = await this.store.EventParticipant.findAll({
      where: {
        userId,
      },
      attributes: ['eventId'],
      raw: true,
    });

    return ids;
  }

  async getUserIdsOfParticipants(eventId) {
    if (eventId === undefined || eventId === null) {
      throw new Error(eventIdIsNotPassedMessage);
    }
    const ids = await this.store.EventParticipant.findAll({
      where: {
        eventId,
      },
      attributes: ['userId'],
      raw: true,
    });

    return ids;
  }

  async joinEvent({eventId, userId}) {
    const flag = await this.store.EventParticipant.create({
      eventId,
      userId,
    });
    if (flag !== null) {
      return {eventId: eventId, userId: userId};
    }

    return null;
  }

  async validateJoin({orderId, eventId, userId, price}) {
    if (price > 0) {
      // Call PayPal to get the transaction details
      const request = new checkoutNodeJssdk.orders.OrdersGetRequest(orderId);

      let order;
      try {
        order = await payPalClient.client().execute(request);
      } catch (err) {
        // Handle any errors from the call
        return false;
      }

      // Validate the transaction details are as expected
      if (order.result.purchase_units[0].description !==
        `userId:${userId},eventId:${eventId}`) {
        return false;
      }
      if (order.result.purchase_units[0].amount.currency_code !==
        CURRENCY_CODE ||
        order.result.purchase_units[0].amount.value !== price.toString()) {
        return false;
      }
    }

    // Save the transaction in your database
    await this.joinEvent({
      eventId,
      userId,
    });

    // Return a successful response to the client
    return true;
  }
}

module.exports={
  JoinEventAPI,
  userIdIsNotPassedMessage,
  eventIdIsNotPassedMessage,
};
