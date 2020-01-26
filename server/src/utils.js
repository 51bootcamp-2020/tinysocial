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

  async getUserPastEvents(info) {
    const events = await this.store.EventParticipant.findAll({
      where: {userId: info.userId},
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

  async getUserUpcomingEvents(info) {
    const events = await this.store.EventParticipant.findAll({
      where: {userId: info.userId},
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

  async getUserReviews(info) {
    const review = await this.store.Review.findOne({
      where: {
        eventId: info.eventId,
        userId: info.userId,
      },
    });
    return review;
  }

  async createOrModifyReview(reviewInfo) {
    const review = await this.getUserReviews({
      userId: reviewInfo.userId, eventId: reviewInfo.eventId,
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
    }).map((element)=>(element.tag));
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

  async getReviewFromEvent(info) {
    const review = await this.store.Review.findOne({
      where: {
        userId: info.userId,
        eventId: info.eventId,
      },
    });
    return review;
  }
  /**
   * find tagId using tagName in Tag table
   * if tagName doesn't exist return empty list
   * @param {Array} tagName - The list which contain tag name object
   * @param {Object} tagName[idx] - The object which contain tag Name
   * @param {String} tagName[idx].name - The name of Tag.
   * @return {Array} tagId which is matched tagName.
   */
  async findTagIdByTagName(tagName) {
    if (tagName !== undefined && tagName !== null) {
      tagName = {name: tagName.map((element) => (element.name))};
    }
    const tagId = await this.store.Tag.findAll({
      where: tagName,
    }).map((element)=>({tagId: element.id}));
    return tagId;
  }

  /**
   * find eventId using tagId in EventTag table.
   * @param {Array} tagId - The Array which contain tagId object.
   * @param {object} tagId[idx] - The object which contain tagId
   * @param {number} tagId[idx].tagId - The id of Tag.
   * @return {Array} eventId - All events which is matched each tagId.
   */
  async findEventIdByTagId(tagId) {
    if (tagId !== undefined && tagId !== null) {
      tagId = {tagId: tagId.map((element) => (element.tagId))};
    }
    console.log("start");
    const eventId = await this.store.EventTag.findAll({
      where: tagId,
    }).map((element)=>({id: element.eventId}));
    console.log("end");
    return eventId;
  }

  /**
   * find events without anything in Event table.
   * @param {number} offset - Start index in event list.
   * @param {number} limit - THe number of eventId which is returned.
   * @return {Array} eventsId - eventsId array
   */
  async findEventsIdByNothing(offset, limit) {
    console.log('Nothing');
    const eventsId = await this.store.Event.findAll({
      offset: offset,
      limit: limit,
    }).map((element) => ({id: element.id}));
    console.log(eventsId);
    return eventsId;
  }

  /**
   * find events using eventsId & offset & limit in Event table.
   * @param {Array} eventsId - The array which contain eventsId object.
   * @param offset
   * @param limit
   * @returns {Promise<[]>}
   */
  async findEvents(eventsId, offset, limit) {
    if (eventsId !== undefined && eventsId !== null) {
      eventsId = {id: eventsId.map((element)=>(element.id))};
    }
    console.log('eventId', eventsId);
    let events;
    events = await this.store.Event.findAll({
      where: eventsId,
      offset: offset,
      limit: limit,
      raw: true,
    });
    const eventsWithExtra = [];
    console.log(events);
    for (let i=0; i<events.length; i++) {
      const table = this.getTable(events[i].type);
      if (table===null) continue;
      const extraField = await this.store.EventBookClub.findAll({
        where: {eventId: events[i].id},
        raw: true,
      });
      eventsWithExtra.push({...events[i], ...extraField[0]});
    }
    console.log(eventsWithExtra);
    return eventsWithExtra;
  }

  async findEventsIdByTag(tag, offset, limit, order) {
    let eventsId;
    if (tag !== undefined) {
      if (offset===undefined || offset === null) {
        offset=0;
      }
      const tagId = await this.findTagIdByTagName(tag);
      eventsId = await this.findEventIdByTagId(tagId);
      eventsId = new Set(eventsId);
      if (limit !== undefined && limit != null) {
        eventsId = Array.from(eventsId).slice(offset, offset + limit);
      } else {
        eventsId = Array.from(eventsId).slice(offset);
      }
    }
    return eventsId ? eventsId : null;
  }
  getTable(type) {
    if (type===0) return this.store.EventBookClub;
    return null;
  }
}
module.exports = {
  MainAPI,
};
