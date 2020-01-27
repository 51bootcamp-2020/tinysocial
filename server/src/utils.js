/* eslint-disable require-jsdoc */
const {DataSource} = require('apollo-datasource');
const Sequelize = require('sequelize');
const OP = Sequelize.Op;

class MainAPI extends DataSource {
  constructor(store) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async findUser(where) {
    /**
     * Find one user. If user exists, return the user data from db.
     *
     * @param where: an object. The hint of the user you want to find
     * @return Returns the user, if the user exists. If not, returns null
     */
    const user = await this.store.User.findOne({
      where,
      raw: true,
    });
    return user ? user : null;
  }

  async findOrCreateUser(where, userInfo) {
    /**
     * Find one user.
     * If user doesn't exist, create the user and return the user.
     * @param where: an Object. The hint of the user you want to find.
     * @param userInfo: an Object.
     * Additional information of user you want to create.
     * This function creates new user, merging 'where' and 'userInfo' objects.
     * @return Returns the user.
     * If this function fails to create the user, returns null.
     */
    const users = await this.store.User.findOrCreate({
      where,
      defaults: userInfo,
    });

    return users && users[0] ? users[0] : null;
  }

  async getUserPastEvents(userId) {
    const events = await this.store.EventParticipant.findAll({
      where: {userId: userId},
      include: [
        {
          model: this.store.Event,
          required: true,
          include: [
            {
              model: this.store.Schedule,
              where: {
                startDateTime: {
                  [OP.lte]: new Date(),
                },
              },
            },
          ],
        },
      ],
    });
    return events.map((event) => event.event);
  }

  async getUserUpcomingEvents(userId) {
    const events = await this.store.EventParticipant.findAll({
      where: {userId: userId},
      include: [
        {
          model: this.store.Event,
          required: true,
          include: [
            {
              model: this.store.Schedule,
              where: {
                startDateTime: {
                  [OP.gt]: new Date(),
                },
              },
            },
          ],
        },
      ],
    });
    return events.map((event) => event.event);
  }

  async getBookClubEvent(event) {
    const bookClubEvent = await this.store.EventBookClub.findOne({
      where: {eventId: event.id},
    });
    const eventType = bookClubEvent.dataValues;
    const eventWithType = {...event.dataValues, ...eventType};
    return eventWithType;
  }

  async getReviews(reviewInfo) {
    let review;
    if (reviewInfo.userId === undefined) {
      review = await this.store.Review.findOne({
        where: {
          eventId: reviewInfo.eventId,
          userId: reviewInfo.currentUserId,
        },
      });
    } else {
      review = await this.store.Review.findAll({
        where: {
          eventId: reviewInfo.eventId,
          userId: reviewInfo.userId,
        },
      });
    }
    return review;
  }

  async createOrModifyReview(reviewInfo) {
    const review = await this.getReviews({
      currentUserId: reviewInfo.userId, eventId: reviewInfo.eventId,
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
        return true;
      }
    } else {
      review.title = reviewInfo.title;
      review.content = reviewInfo.content;
      review.isPublic = reviewInfo.isPublic;
      const flag = await review.save();
      if (flag !== null) {
        return true;
      }
    }
    return false;
  }

  async getHostFromEvent(hostId) {
    const host = await this.store.User.findOne({
      where: {id: hostId},
    });

    return host;
  }

  async getScheduleFromEvent(eventId) {
    const schedule = await this.store.Schedule.findAll({
      where: {eventId},
    });
    return schedule;
  }

  async getTagsFromEvent(eventId) {
    const tags = await this.store.EventTag.findAll({
      where: {eventId},
      include: [{
        model: this.store.Tag,
        required: true,
      }],
    });
    return tags;
  }

  async getParticipantsFromEvent(eventId) {
    const participants = await this.store.EventParticipant.findAll({
      where: {eventId},
      include: [{
        model: this.store.User,
        required: true,
      }],
    });
    return participants.map((participant) => participant.user);
  }

  // async getReviewFromEvent(reviewInfo) {
  //   const review = await this.store.Review.findAll({
  //     where: {
  //       userId: reviewInfo.userId,
  //       eventId: reviewInfo.eventId,
  //     },
  //   });
  //   return review;
  // }
}
module.exports = {
  MainAPI,
};
