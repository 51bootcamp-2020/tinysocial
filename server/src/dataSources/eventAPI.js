/* eslint-disable require-jsdoc */
const {DataSource} = require('apollo-datasource');
const Sequelize = require('sequelize');
const OP = Sequelize.Op;
const {isUndefinedOrNull} = require('../utils');
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
    const eventBookClub = this.store.findOne({
      where: {id: eventId},
      attributes: [attributeName],
      raw: true,
    });
    return (eventBookClub && isUndefinedOrNull(eventBookClub[attributeName])) ?
        eventBookClub[attributeName] : null;
  }

  async getAttributeOfSchedule(attributeName, scheduleId) {
    const schedule = await this.store.Schedule.findOne({
      where: {id: scheduleId},
      attributes: [attributeName],
      raw: true,
    });
    return (schedule && isUndefinedOrNull(schedule[attributeName])) ?
        schedule[attributeName] : null;
  }

  async getAttributeOfEventParticipant(attributeName, eventId, userId) {
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
  async getParticipantIdsOfEvent({eventId}) {
    const participantIds = await this.store.EventParticipant.findAll({
      where: {eventId: eventId},
      attributes: ['userId'],
    });
    return participantIds;
  }
  async getScheduleIdsOfEvent({eventId}) {
    const schduleIds = await this.store.Schedule.findAll({
      where: {eventId: eventId},
      attributes: ['id'],
      raw: true,
    });
    return schduleIds;
  }

  async getTagIdsOfEvent({eventId}) {
    const tagIds = await this.store.EventTag.findAll({
      where: {id: eventId},
      attributes: ['tagId'],
      raw: true,
    });
    return tagIds;
  }

  async getIdsOfEvent({limit, offset, tagIds, order}) {
    const event = await this.store.EventTag.findAll({
      where: {tagId: tagIds},
      attributes: ['eventId'],
      limit: limit,
      offset: offset,
      order: order,
      raw: true,
    });
    return event;
  }

  async getUpcomingEventIdsOfEvent({userId}) {
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

  async getPastEventIdsOfEvent({userId}) {
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
}
module.exports={
  EventAPI,
};
