/* eslint-disable require-jsdoc */
const {DataSource} = require('apollo-datasource');
const Sequelize = require('sequelize');

class ReviewAPI extends DataSource {
  constructor(store) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getTitleOfReview(userId, eventId) {
    const title = await this.store.Review.findOne({
      where: {userId, eventId},
      attributes: ['title'],
    });
    return title.get('title');
  }

  async getContentOfReview(userId, eventId) {
    const content = await this.store.Review.findOne({
      where: {userId, eventId},
      attributes: ['content'],
    });
    return content.get('content');
  }

  async getAuthorOfReview(userId, eventId) {
    const author = await this.store.Review.findOne({
      where: {userId, eventId},
      attributes: ['author'],
    });
    return author.get('author');
  }

  async getIsPublicOfReview(userId, eventId) {
    const isPublic = await this.store.Review.findOne({
      where: {userId, eventId},
      attributes: ['isPublic'],
    });
    return isPublic.get('isPublic');
  }
}

module.exports={
  ReviewAPI,
};
