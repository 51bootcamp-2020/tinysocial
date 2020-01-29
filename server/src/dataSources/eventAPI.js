/* eslint-disable require-jsdoc */
const {DataSource} = require('apollo-datasource');
const Sequelize = require('sequelize');
const OP = Sequelize.Op;


class EventAPI extends DataSource {
  constructor(store) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getStartDateTimeOfEventSchedule(scheduleId) {
    return (await this.store.Schedule.findOne({
      where: {id: scheduleId},
      attributes: ['startDateTime'],
      raw: true,
    })).startDateTime;
  }

  async getEndDateTimeOfEventSchedule(scheduleId) {
    return (await this.store.Schedule.findOne({
      where: {id: scheduleId},
      attributes: ['endDateTime'],
      raw: true,
    })).endDateTime;
  }

  async getAddressOfEventSchedule(scheduleId) {
    return (await this.store.Schedule.findOne({
      where: {id: scheduleId},
      attributes: ['address'],
      raw: true,
    })).address;
  }

  async getLatitudeOfEventSchedule(scheduleId) {
    return (await this.store.Schedule.findOne({
      where: {id: scheduleId},
      attributes: ['latitude'],
      raw: true,
    })).latitude;
  }

  async getLongitudeOfEventSchedule(scheduleId) {
    return (await this.store.Schedule.findOne({
      where: {id: scheduleId},
      attributes: ['longitude'],
      raw: true,
    })).longitude;
  }

  async getTypeOfEvent(eventId) {
    return (await this.store.Event.findOne({
      where: {id: eventId},
      attributes: ['type'],
      raw: true,
    })).type;
  }

  async getHostIdOfEvent({eventId}) {
    return this.store.Event.findOne({
      where: {id: eventId},
      attributes: ['hostId'],
      raw: true,
    });
  }

  async getThumbnailUrlOfEvent({id}) {
    return (await this.store.Event.findOne({
      where: {id: id},
      attributes: ['thumbnailUrl'],
      raw: true,
    })).thumbnailUrl;
  }

  async getCreationTimeOfEvent({id}) {
    return (await this.store.Event.findOne({
      where: {id: id},
      attributes: ['createdAt'],
      raw: true,
    })).createdAt;
  }

  async getLastUpdatedTime({id}) {
    return (await this.store.Event.findOne({
      where: {id: id},
      attributes: ['updatedAt'],
      raw: true,
    })).updatedAt;
  }

  async getScheduleIdsOfEvent({eventId}) {
    return this.store.Schedule.findAll({
      where: {id: eventId},
      attributes: ['id'],
      raw: true,
    });
  }

  async getTitleOfEvent({id}) {
    return (await this.store.Event.findOne({
      where: {id: id},
      attributes: ['title'],
      raw: true,
    })).title;
  }

  async getDescriptionOfEvent({id}) {
    return (await this.store.Event.findOne({
      where: {id: id},
      attributes: ['description'],
      raw: true,
    })).description;
  }

  async getPriceOfEvent({id}) {
    return (await this.store.Event.findOne({
      where: {id: id},
      attributes: ['price'],
      raw: true,
    })).price;
  }

  async getBookImageUrlOfEvent({id}) {
    return (await this.store.EventBookClub.findOne({
      where: {id: id},
      attributes: ['bookImageUrl'],
      raw: true,
    })).bookImageUrl;
  }

  async getBookTitleOfEvent({id}) {
    return (await this.store.EventBookClub.findOne({
      where: {id: id},
      attributes: ['bookTitle'],
      raw: true,
    })).bookTitle;
  }

  async getBookAuthorOfEvent({id}) {
    return (await this.store.EventBookClub.findOne({
      where: {id: id},
      attributes: ['bookAuthor'],
      raw: true,
    })).bookAuthor;
  }

  async getBookDescriptionOfEvent({id}) {
    return (await this.store.EventBookClub.findOne({
      where: {id: id},
      attributes: ['bookDescription'],
      raw: true,
    })).bookDescription;
  }

  async getBookISBNOfEvent({id}) {
    return (await this.store.EventBookClub.findOne({
      where: {id: id},
      attributes: ['bookISBN'],
      raw: true,
    })).bookISBN;
  }

  async getTagIdsOfEvent({eventId}) {
    return this.store.EventTag.findAll({
      where: {id: eventId},
      attributes: ['tagId'],
      raw: true,
    });
  }

  async getParticipantIdsOfEvent({eventId}) {
    return this.store.EventParticipant.findAll({
      where: {id: eventId},
      attributes: ['userId'],
      raw: true,
    });
  }

  async getMaxParticipantNumOfEvent({id}) {
    return (await this.store.Event.findOne({
      where: {id: id},
      attributes: ['maxParticipantNum'],
      raw: true,
    })).maxParticipantNum;
  }

  async getIdOfEvent(eventId) {
    return this.store.Event.findOne({
      where: {id: eventId},
      attributes: ['id'],
      raw: true,
    });
  }

  async getIdsOfEvent({limit, offset, tagIds, order}) {
    return this.store.EventTag.findAll({
      where: {tagId: tagIds},
      attributes: ['eventId'],
      limit: limit,
      offset: offset,
      order: order,
      raw: true,
    });
  }

  async getUpcomingEventIdsOfEvent(userId) {
    const events = await this.store.EventParticipant.findAll({
      where: {userId},
      attributes: ['eventId'],
      raw: true,
    });
    const eventId = events.eventId;
    const upcomingEvents = await this.store.Schedule.findAll({
      where: {
        eventId,
        startDateTime: {[OP.gt]: new Date()},
      },
      attributes: ['eventId'],
      raw: true,
    });
    return upcomingEvents;
  }

  async getPastEventIdsOfEvent(userId) {
    const events = await this.store.EventParticipant.findAll({
      where: {userId},
      attributes: ['eventId'],
      raw: true,
    });
    const eventId = events.eventId;
    const upcomingEvents = await this.store.Schedule.findAll({
      where: {
        eventId,
        startDateTime: {[OP.lte]: new Date()},
      },
      attributes: ['eventId'],
      raw: true,
    });
    return upcomingEvents;
  }
  async getEventIdsOfTag(tagId) {
    return this.store.EventTag.findAll({
      where: {id: tagId},
      attributes: ['eventId'],
      raw: true,
    });
  }
}
module.exports={
  EventAPI,
};
