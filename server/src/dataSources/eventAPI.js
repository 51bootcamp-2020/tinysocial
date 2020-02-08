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
} = require('../error-messages');
const eventBookClubAttributes = [
  'eventId',
  'bookTitle',
  'bookAuthor',
  'bookDescription',
  'bookISBN',
  'bookImageUrl',
];
const {imageUpload} = require('../aws-s3');

class EventAPI extends DataSource {
  constructor(store) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAttributeOfEvent(attributeName, eventId) {
    if (eventId === undefined || eventId === null) {
      throw new Error(eventIdIsNotPassedMessage);
    }
    if (eventBookClubAttributes.includes(attributeName)) {
      const event = await this.getAttributeOfEventBookClub(attributeName,
          eventId);
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
    const eventBookClub = await this.store.EventBookClub.findOne({
      where: {eventId},
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
    return (eventParticipant &&
      isUndefinedOrNull(eventParticipant[attributeName])) ?
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

  // TODO(lsh9034): Move this function to userAPI.js
  async getHostIdOfEvent({eventId}) {
    if (eventId === undefined || eventId === null) {
      throw new Error(eventIdIsNotPassedMessage);
    }
    const hostId = await this.store.Event.findOne({
      where: {eventId: eventId},
      attributes: [['hostId', 'id']],
      raw: true,
    });
    return hostId;
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
      order: [
        ['startDateTime', 'ASC'],
      ],
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
    let eventIds;
    if (tagIds !== undefined && tagIds !== null && tagIds.length !== 0) {
      tagIdsObject = {tagId: tagIds};
      eventIds = await this.store.EventTag.findAll({
        where: tagIdsObject,
        attributes: [
          [
            Sequelize.fn('DISTINCT', Sequelize.col('eventId')),
            'id']],
        order: order,
        raw: true,
      });
    } else {
      eventIds = await this.store.Event.findAll();
    }
    // TODO(lsh9034): implement logic order by order parameter.
    console.log('eventIds', eventIds);
    eventIds = eventIds.map((element) => (element.id));
    const scheduleId = await this.store.Schedule.findAll({
      where: {eventId: eventIds},
      attributes: ['id', 'eventId'],
      order: [
        ['startDateTime', 'ASC'],
      ],
      raw: true,
    });
    const check = new Array(scheduleId.length + 1).fill(0);
    let sortedEventIdsBySchedule = [];
    for (let i = 0; i < scheduleId.length; i++) {
      if (check[scheduleId[i].eventId]) {
        continue;
      }
      check[scheduleId[i].eventId] = 1;
      sortedEventIdsBySchedule.push({id: scheduleId[i].eventId});
    }
    if (limit === undefined || limit === null) {
      limit = sortedEventIdsBySchedule.length - offset;
    }
    sortedEventIdsBySchedule = sortedEventIdsBySchedule.slice(offset,
        offset + limit);
    return sortedEventIdsBySchedule;
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
      attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('eventId')), 'id']],
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
      attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('eventId')), 'id']],
      raw: true,
    });
    return upcomingEvents;
  }

  async createEvent(eventInfo) {
    console.log(eventInfo);
    const eventBookClub = eventInfo.eventBookClub;
    const eventSchedule = eventInfo.schedule;
    const eventThumbnail = await eventInfo.thumbnail;
    const bookImage = eventBookClub.bookImage;

    const eventThumbnailPath = await imageUpload(eventThumbnail);
    const event = await this.store.Event.create({
      title: eventInfo.title,
      description: eventInfo.description,
      price: eventInfo.price,
      thumbnailUrl: eventThumbnailPath,
      maxParticipantNum: eventInfo.maxParticipantNum,
      hostId: eventInfo.userId,
    });
    if (!event) return false;

    if (eventBookClub) {
      const bookImagePath = await imageUpload(bookImage);
      const eventBookClub = this.store.EventBookClub.create({
        eventId: event.id,
        bookTitle: eventBookClub.bookTitle,
        bookDescription: eventBookClub.bookDescription,
        bookAuthor: eventBookClub.bookAuthor,
        bookISBN: eventBookClub.bookISBN,
        bookImageUrl: bookImagePath,
      });
    }
    if (eventBookClub) return false;
    eventSchedule.forEach((element) => this.store.Schedule.create({
      startDateTime: element.startDateTime,
      endDateTime: element.endDateTime,
      address: element.address+element.additionalAddress,
      latitude: element.latitude,
      longitude: element.longitude,
      eventId: event.id,
    }));

    return true;
  }
}

module.exports={
  EventAPI,
};
