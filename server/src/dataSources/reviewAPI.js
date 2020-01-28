/* eslint-disable require-jsdoc */
const {DataSource} = require('apollo-datasource');
const Sequelize = require('sequelize');
const {cannotFindMessage} = require('../errorMessages');
class ReviewAPI extends DataSource {
  constructor(store) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getTitleOfReview({userId, eventId}) {
    const titleObj = await this.store.Review.findOne({
      where: {userId, eventId},
      attributes: ['title'],
      raw: true,
    });
    if(!titleObj){
      return null;
    }
    return titleObj.title;
  }

  async getContentOfReview({userId, eventId}) {
    const contentObj = await this.store.Review.findOne({
      where: {userId, eventId},
      attributes: ['content'],
      raw: true,
    });
    if(!contentObj){
      return null;
    }
    return contentObj.content;
  }

  async getIsPublicOfReview({userId, eventId}) {
    const isPublicObj = await this.store.Review.findOne({
      where: {userId, eventId},
      attributes: ['isPublic'],
      raw: true,
    });
    if(!isPublicObj){
      return null;
    }
    return isPublicObj.isPublic;
  }

  async getIdsOfReview({userId, eventId}) {
    const reviewIds = await this.store.Review.findAll({
      where: {userId, eventId},
      attributes: ['userId', 'eventId'],
      raw: true,
    });
    if(!reviewIds){
      return null;
    }
    return reviewIds;
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
}

module.exports={
  ReviewAPI,
};
