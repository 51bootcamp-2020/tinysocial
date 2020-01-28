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

  async getTitleOfReview({userId, eventId}) {
    const title = await this.store.Review.findOne({
      where: {userId, eventId},
      attributes: ['title'],
      raw: true,
    });
    return title;
  }

  async getContentOfReview({userId, eventId}) {
    const content = await this.store.Review.findOne({
      where: {userId, eventId},
      attributes: ['content'],
    });
    return content.get('content');
  }

  async getIsPublicOfReview({userId, eventId}) {
    const isPublic = await this.store.Review.findOne({
      where: {userId, eventId},
      attributes: ['isPublic'],
    });
    return isPublic.get('isPublic');
  }

  async getIdsOfReview({userId, eventId}) {
    const reviewIds = await this.store.Review.findAll({
      where: {userId, eventId},
      attributes: ['userId', 'eventId'],
      raw: true,
    });
    console.log("reviewIds:", reviewIds);
    return reviewIds;
    // return reviewIds.get(['userId', 'eventId']);
  }

  async createOrModifyOfReview(reviewInfo) {
    const review = await this.store.Review.findOne({
      where: {userId: reviewInfo.userId, eventId: reviewInfo.eventId},
    });
    if (review === null) {
      const flag = await this.store.Review.create({
        userId: reviewInfo.userId,
        eventId: reviewInfo.eventId,
        title: reviewInfo.title,
        content: reviewInfo.content,
        isPublic: reviewInfo.isPublic,
      });
      if (flag !== null) {
        return review;
      }
    } else {
      review.title = reviewInfo.title;
      review.content = reviewInfo.content;
      review.isPublic = reviewInfo.isPublic;
      const flag = await review.save();
      if (flag !== null) {
        return review;
      }
    }
    return null;
  }
}

module.exports={
  ReviewAPI,
};
