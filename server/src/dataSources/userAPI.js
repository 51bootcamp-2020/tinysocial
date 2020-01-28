/* eslint-disable require-jsdoc */
const {DataSource} = require('apollo-datasource');
const Sequelize = require('sequelize');

class UserAPI extends DataSource {
  constructor(store) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getFirstNameOfUser(userId) {
    return this.store.User.findOne({
      where: {
        id: userId,
      },
      attributes: ['firstName'],
      raw: true,
    });
  }

  async getLastNameOfUser(userId) {
    return this.store.User.findOne({
      where: {
        id: userId,
      },
      attributes: ['lastName'],
      raw: true,
    });
  }

  async getEmailOfUser(userId) {
    return this.store.User.findOne({
      where: {
        id: userId,
      },
      attributes: ['email'],
      raw: true,
    });
  }

  async getAgeOfUser(userId) {
    // TODO(yun-kwak): Test this.
    const today = new Date();
    const birthDate = await this.store.User.findOne({
      where: {
        id: userId,
      },
      attributes: ['birthday'],
      raw: true,
    });
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  async getAddressOfUser(userId) {
    return this.store.User.findOne({
      where: {
        id: userId,
      },
      attributes: ['address'],
    });
  }

  async getPhoneOfUser(userId) {
    return this.store.User.findOne({
      where: {
        id: userId,
      },
      attributes: ['phone'],
      raw: true,
    });
  }

  async getSelfDescriptionOfUser(userId) {
    return this.store.User.findOne({
      where: {
        id: userId,
      },
      attributes: ['selfDescription'],
      raw: true,
    });
  }

  async getBirthdayOfUser(userId) {
    return this.store.User.findOne({
      where: {
        id: userId,
      },
      attributes: ['birthday'],
      raw: true,
    });
  }

  async getRegistrationDateOfUser(userId) {
    return this.store.User.findOne({
      where: {
        id: userId,
      },
      attributes: [['createdAt', 'registrationDate']],
      raw: true,
    });
  }

  async getProfileImgUrlOfUser(userId, {arg}) {
    return this.store.User.findOne({
      where: {
        id: userId,
      },
      attributes: ['profileImgUrl'],
      raw: true,
    });
  }

  async getLastInteractionTimeOfUser(userId) {
    return this.store.User.findOne({
      where: {
        id: userId,
      },
      attributes: ['lastInteractionTime'],
      raw: true,
    });
  }

  async getHostedEventIdsOfUser({userId}) {
    return this.store.Event.findOne({
      where: {
        host: userId,
      },
      attributes: ['id'],
      raw: true,
    });
  }

  async getParticipatedEventIdsOfUser({userId}) {
    return this.store.EventParticipant.findOne({
      where: {
        userId,
      },
      attributes: [['eventId', 'id']],
      raw: true,
    });
  }

  // TODO(seongjae): Rename this function
  async getIdOfUser(userId) {
    return this.store.User.findOne({
      where: {id: userId},
      attributes: ['id'],
      raw: true,
    });
  }

  async getAuthorOfReview({userId}) {
    const author = await this.store.User.findOne({
      where: {id: userId},
      attributes: ['id'],
      raw: true,
    });
    return author;
  }
}

module.exports = {
  UserAPI,
};
