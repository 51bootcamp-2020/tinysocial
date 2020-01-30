/* eslint-disable require-jsdoc */
const {DataSource} = require('apollo-datasource');
const userIdAndEventIdIsNotPassedMessage = 'You have to pass userId & eventId';

class ReviewAPI extends DataSource {
  constructor(store) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAttributeOfReview(attributeName, userId, eventId) {
    if (!(userId && eventId)) {
      throw new Error(userIdAndEventIdIsNotPassedMessage);
    }

    const review = await this.store.Review.findOne({
      where: {userId, eventId},
      attributes: [attributeName],
      raw: true,
    });
    return (review && review[attributeName]) ? review[attributeName] : null;
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
        return {userId: reviewInfo.userId, eventId: reviewInfo.eventId};
      }
    } else {
      review.title = reviewInfo.title;
      review.content = reviewInfo.content;
      review.isPublic = reviewInfo.isPublic;
      const flag = await review.save();
      if (flag !== null) {
        return {userId: reviewInfo.userId, eventId: reviewInfo.eventId};
      }
    }
    return null;
  }

  async getIdsOfReview({userId, eventId}) {
    const Ids = await this.store.Review.findAll({
      where: {userId, eventId},
      attributes: [['userId', 'eventId']],
      raw: true,
    });
    return Ids;
  }
}

module.exports={
  ReviewAPI,
  userIdAndEventIdIsNotPassedMessage,
};
