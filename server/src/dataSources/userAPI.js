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
    return (await this.store.User.findOne({
      where: {
        id: userId,
      },
      attributes: ['firstName'],
    })).get('firstName');
  }

  async getLastNameOfUser(userId) {
    return (await this.store.User.findOne({
      where: {
        id: userId,
      },
      attributes: ['lastName'],
    })).get('lastName');
  }

  async getEmailOfUser(userId) {
    return (await this.store.User.findOne({
      where: {
        id: userId,
      },
      attributes: ['email'],
    })).get('email');
  }

  async getAgeOfUser(userId) {
    // TODO(yun-kwak): Test this.
    const today = new Date();
    const birthDate = (await this.store.User.findOne({
      where: {
        id: userId,
      },
      attributes: ['birthday'],
    })).get('birthday');
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  async getAddressOfUser(userId) {
    return (await this.store.User.findOne({
      where: {
        id: userId,
      },
      attributes: ['address'],
    })).get('address');
  }

  async getPhoneOfUser(userId) {
    return (await this.store.User.findOne({
      where: {
        id: userId,
      },
      attributes: ['phone'],
    })).get('phone');
  }

  async getSelfDescriptionOfUser(userId) {
    return (await this.store.User.findOne({
      where: {
        id: userId,
      },
      attributes: ['selfDescription'],
    })).get('selfDescription');
  }

  async getBirthdayOfUser(userId) {
    return (await this.store.User.findOne({
      where: {
        id: userId,
      },
      attributes: ['birthday'],
    })).get('birthday');
  }

  async getRegistrationDateOfUser(userId) {
    return (await this.store.User.findOne({
      where: {
        id: userId,
      },
      attributes: [['createdAt', 'registrationDate']],
    })).get('registrationDate');
  }

  async getProfileImgUrlOfUser(userId, {arg}) {
    return (await this.store.User.findOne({
      where: {
        id: userId,
      },
      attributes: ['profileImgUrl'],
    })).get('profileImgUrl');
  }

  async getLastInteractionTimeOfUser(userId) {
    return (await this.store.User.findOne({
      where: {
        id: userId,
      },
      attributes: ['lastInteractionTime'],
    })).get('lastInteractionTime');
  }

  async getHostedEventIdsOfUser({userId}) {
    return (await this.store.Event.findOne({
      where: {
        host: userId,
      },
      attributes: ['id'],
    })).get('id');
  }

  async getParticipatedEventIdsOfUser({userId}) {
    return (await this.store.EventParticipant.findOne({
      where: {
        userId,
      },
      attributes: [['eventId', 'id']],
    })).get('id');
  }

  // TODO(seongjae): Rename this function
  async getIdOfUser(userId) {
    const user = await this.store.User.findOne({
      where: {id: userId},
      attributes: ['id'],
    });
    return user.get('id');
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
