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
    const startDateTime = await this.store.Schedule.findOne({
      where: {id: scheduleId},
      attributes: ['startDateTime'],
    });
    return startDateTime.get('startDateTime');
  }

  async getEndDateTimeOfEventSchedule(scheduleId) {
    const endDateTime = await this.store.Schedule.findOne({
      where: {id: scheduleId},
      attributes: ['endDateTime'],
    });
    return endDateTime.get('endDateTime');
  }

  async getAddressOfEventSchedule(scheduleId) {
    const address = await this.store.Schedule.findOne({
      where: {id: scheduleId},
      attributes: ['address'],
    });
    return address.get('address');
  }

  async getLatitudeOfEventSchedule(scheduleId) {
    const latitude = await this.store.Schedule.findOne({
      where: {id: scheduleId},
      attributes: ['latitude'],
    });
    return latitude.get('latitude');
  }

  async getLongitudeOfEventSchedule(scheduleId) {
    const longitude = await this.store.Schedule.findOne({
      where: {id: scheduleId},
      attributes: ['longitude'],
    });
    return longitude.get('longitude');
  }

  async getTypeOfEvent(eventId) {
    const type = await this.store.Event.findOne({
      where: {id: eventId},
      attributes: ['type'],
    });
    return type.get('type');
  }

  async getHostIdOfEvent({eventId}) {
    const hostId = await this.store.Event.findOne({
      where: {id: eventId},
      attributes: ['hostId'],
    }).get('hostId');
    return hostId;
  }

  async getThumbnailUrlOfEvent({eventId}) {
    const thumbnailUrl = await this.store.Event.findOne({
      where: {id: eventId},
      attributes: ['thumbnailUrl'],
    }).get('thumbnailUrl');
    return thumbnailUrl;
  }

  async getCreationTimeOfEvent({eventId}) {
    const creationTime = await this.store.Event.findOne({
      where: {id: eventId},
      attributes: ['createdAt'],
    }).get('createdAt');
    return creationTime;
  }

  async getLastUpdatedTime({eventId}) {
    const lastUpdatedTime = await this.store.Event.findOne({
      where: {id: eventId},
      attributes: ['updatedAt'],
    }).get('updatedAt');
    return lastUpdatedTime;
  }

  async getScheduleIdsOfEvent({eventId}) {
    const schedule = await this.store.Schedule.findAll({
      where: {id: eventId},
      attributes: ['id'],
    }).get('id');
    return schedule;
  }

  async getTitleOfEvent({eventId}) {
    const title = await this.store.Event.findOne({
      where: {id: eventId},
      attributes: ['title'],
    }).get('title');
    return title;
  }

  async getDescriptionOfEvent({eventId}) {
    const description = await this.store.Event.findOne({
      where: {id: eventId},
      attributes: ['description'],
    }).get('description');
    return description;
  }

  async getPriceOfEvent({eventId}) {
    const price = await this.store.Event.findOne({
      where: {id: eventId},
      attributes: ['price'],
    }).get('price');
    return price;
  }

  async getBookImgageUrlOfEvent({eventId}) {
    const bookImageUrl = await this.store.EventBookClub.findOne({
      where: {id: eventId},
      attributes: ['bookImageUrl'],
    }).get('bookImageUrl');
    return bookImageUrl;
  }

  async getBookTitleOfEvent({eventId}) {
    const bookTitle = await this.store.EventBookClub.findOne({
      where: {id: eventId},
      attributes: ['bookTitle'],
    }).get('bookTitle');
    return bookTitle;
  }

  async getBookAuthorOfEvent({eventId}) {
    const bookAuthor = await this.store.EventBookClub.findOne({
      where: {id: eventId},
      attributes: ['bookAuthor'],
    }).get('bookAuthor');
    return bookAuthor;
  }

  async getBookDescriptionOfEvent({eventId}) {
    const bookDescription = await this.store.EventBookClub.findOne({
      where: {id: eventId},
      attributes: ['bookDescription'],
    }).get('bookDescription');
    return bookDescription;
  }

  async getBookISBNOfEvent({eventId}) {
    const bookISBN = await this.store.EventBookClub.findOne({
      where: {id: eventId},
      attributes: ['bookISBN'],
    }).get('bookISBN');
    return bookISBN;
  }

  async getTagIdsOfEvent({eventId}) {
    const tagIds = await this.store.EventTag.findAll({
      where: {id: eventId},
      attributes: ['tagId'],
    }).get('tagId');
    return tagIds;
  }

  async getParticipantIdsOfEvent({eventId}) {
    const participantIds = await this.store.EventParticipant.findAll({
      where: {id: eventId},
      attributes: ['userId'],
    }).get('userId');
    return participantIds;
  }

  async getMaxParticipantNumOfEvent({eventId}) {
    const maxParticipantNum = await this.store.Event.findOne({
      where: {id: eventId},
      attributes: ['maxParticipantNum'],
    }).get('maxParticipantNum');
    return maxParticipantNum;
  }

  async getIdOfEvent(eventId) {
    const event = await this.store.Event.findOne({
      where: {id: eventId},
      attributes: ['id'],
    });
    return event.get('id');
  }

  async getUpcomingEventIdsOfEvent(userId) {
    const events = await this.store.EventParticipant.findAll({
      where: {userId},
      raw: true,
      attributes: ['eventId'],
      include: [{
        model: this.store.Schedule,
        where: {
          eventId,
          startDateTime: {
            [OP.gt]: new Date(),
          },
        },
      }],
    });
    return events.get('id');
  }

  async getPastEventIdsOfEvent(user) {
    const events = await this.store.EventParticipant.findAll({
      where: {userId},
      raw: true,
      attributes: ['eventId'],
      include: [{
        model: this.store.Schedule,
        where: {
          eventId,
          startDateTime: {
            [OP.lte]: new Date(),
          },
        },
      }],
    });
    return events.get('id');
  }
}
module.exports={
  EventAPI,
};
