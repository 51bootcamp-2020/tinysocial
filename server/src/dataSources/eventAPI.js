/* eslint-disable require-jsdoc */
const {DataSource} = require('apollo-datasource');
const Sequelize = require('sequelize');
const OP = Sequelize.Op;
const {isUndefinedOrNull} = require('../utils');
const {
  userIdIsNotPassedMessage,
  eventIdIsNotPassedMessage,
  scheduleIdIsNotPassedMessage,
  tagIdIsNotPassedMessage,
  notValidValueMessage,
} = require('../errorMessages');
const eventBookClubAttributes = [
  'eventId',
  'bookTitle',
  'bookAuthor',
  'bookDescription',
  'bookISBN',
  'bookImageUrl',
];

class EventAPI extends DataSource {
  constructor(store) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAttributeOfEvent(attributeName, eventId) {
    console.log('전달받은 eventId', eventId)
    if (eventId === undefined || eventId === null) {
      throw new Error(eventIdIsNotPassedMessage);
    }
    if (eventBookClubAttributes.includes(attributeName)) {
      const event = await this.getAttributeOfEventBookClub(attributeName, eventId);
      return event;
    }
    if (attributeName === 'creationTime') {
      attributeName = 'createdAt';
    } else if (attributeName === 'lastUpdatedTime') {
      attributeName = 'updatedAt';
    }
    const event = await this.store.Event.findOne({
      where: {id: eventId},
      attributes: [attributeName],
      raw: true,
    });
    return (event && isUndefinedOrNull(event[attributeName])) ?
        event[attributeName] : null;
  }

  async getAttributeOfEventBookClub(attributeName, eventId) {
    if (eventId === undefined || eventId === null) {
      throw new Error(eventIdIsNotPassedMessage);
    }
    const eventBookClub = this.store.EventBookClub.findOne({
      where: {id: eventId},
      attributes: [attributeName],
      raw: true,
    });
    return (eventBookClub && isUndefinedOrNull(eventBookClub[attributeName])) ?
        eventBookClub[attributeName] : null;
  }

  async getAttributeOfSchedule(attributeName, scheduleId) {
    if (scheduleId === undefined || scheduleId === null) {
      throw new Error(scheduleIdIsNotPassedMessage);
    }
    const schedule = await this.store.Schedule.findOne({
      where: {id: scheduleId},
      attributes: [attributeName],
      raw: true,
    });
    return (schedule && isUndefinedOrNull(schedule[attributeName])) ?
        schedule[attributeName] : null;
  }

  async getAttributeOfEventParticipant(attributeName, eventId, userId) {
    if (eventId === undefined || eventId === null) {
      throw new Error(eventIdIsNotPassedMessage);
    }
    if (userId === undefined || userId === null) {
      throw new Error(userIdIsNotPassedMessage);
    }
    const eventParticipant = await this.store.EventParticipant.findOne({
      where: {
        eventId: eventId,
        userId: userId,
      },
      attributes: attributeName,
      raw: true,
    });
    return (eventParticipant && isUndefinedOrNull(eventParticipant[attributeName])) ?
        eventParticipant[attributeName] : null;
  }

  async getHostedEventIdsOfUser({userId}) {
    if (userId === undefined) {
      throw new Error(userIdIsNotPassedMessage);
    }
    return this.store.Event.findAll({
      where: {
        hostId: userId,
      },
      attributes: ['id'],
      raw: true,
    });
  }
  
  async getHostIdOfEvent({eventId}) {
    if (eventId === undefined || eventId === null) {
      throw new Error(eventIdIsNotPassedMessage);
    }
    const event = await this.store.Event.findOne({
      where: {eventId: eventId},
      attributes: ['hostId'],
      raw: true,
    });
    return (event && isUndefinedOrNull(event['hostId'])) ?
        event['hostId'] : null;
  }

  async getParticipantIdsOfEvent({eventId}) {
    if (eventId === undefined || eventId === null) {
      throw new Error(eventIdIsNotPassedMessage);
    }
    const participantIds = await this.store.EventParticipant.findAll({
      where: {eventId: eventId},
      attributes: [['userId', 'id']],
      raw: true,
    });
    console.log(participantIds);
    return participantIds;
  }

  async getScheduleIdsOfEvent({eventId}) {
    if (eventId === undefined || eventId === null) {
      throw new Error(eventIdIsNotPassedMessage);
    }
    const schduleIds = await this.store.Schedule.findAll({
      where: {eventId: eventId},
      attributes: ['id'],
      raw: true,
    });
    return schduleIds;
  }
  
  async getParticipatedEventIdsOfUser({userId}) {
    if (userId === undefined) {
      throw new Error(userIdIsNotPassedMessage);
    }
    return this.store.EventParticipant.findAll({
      where: {
        userId,
      },
      attributes: [['eventId', 'id']],
      raw: true,
    });
  }

  async getEventIdsOfTag({tagId}) {
    if (tagId === undefined || tagId === null) {
      throw new Error(tagIdIsNotPassedMessage);
    }
    const eventIds = await this.store.EventTag.findAll({
      where: {tagId},
      attributes: [['eventId', 'id']],
      raw: true,
    });
    return eventIds;
  }

  async getIdsOfEvent({limit, offset, tagIds, order}) {
    if (limit < 0 || offset < 0) {
      throw new Error(notValidValueMessage);
    }
    let tagIdsObject = undefined;
    if (tagIds !== undefined && tagIds !== null) {
      tagIdsObject = {tagId: tagIds};
    }
    const event = await this.store.EventTag.findAll({
      where: tagIdsObject,
      attributes: ['eventId'],
      limit: limit,
      offset: offset,
      order: order,
      raw: true,
    });
    return event;
  }

  async getUpcomingEventIdsOfEvent({userId}) {
    if (userId === undefined || userId === null) {
      throw new Error(userIdIsNotPassedMessage);
    }
    const events = await this.store.EventParticipant.findAll({
      where: {userId},
      attributes: ['eventId'],
      raw: true,
    });
    const eventIds = events.map((element) => (element.eventId));
    const upcomingEvents = await this.store.Schedule.findAll({
      where: {
        eventId: eventIds,
        startDateTime: {[OP.gt]: new Date()},
      },
      attributes: ['eventId'],
      raw: true,
    });
    return upcomingEvents;
  }

  async getPastEventIdsOfEvent({userId}) {
    if (userId === undefined || userId === null) {
      throw new Error(userIdIsNotPassedMessage);
    }
    const events = await this.store.EventParticipant.findAll({
      where: {userId},
      attributes: ['eventId'],
      raw: true,
    });
    const eventIds = events.map((element) => (element.eventId));
    const upcomingEvents = await this.store.Schedule.findAll({
      where: {
        eventId: eventIds,
        startDateTime: {[OP.lte]: new Date()},
      },
      attributes: ['eventId'],
      raw: true,
    });
    return upcomingEvents;
  }
}
module.exports={
  EventAPI,
};
