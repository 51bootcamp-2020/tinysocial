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
      raw: true,
    });
    return startDateTime;
  }

  async getEndDateTimeOfEventSchedule(scheduleId) {
    const endDateTime = await this.store.Schedule.findOne({
      where: {id: scheduleId},
      attributes: ['endDateTime'],
      raw: true,
    });
    return endDateTime;
  }

  async getAddressOfEventSchedule(scheduleId) {
    const address = await this.store.Schedule.findOne({
      where: {id: scheduleId},
      attributes: ['address'],
      raw: true,
    });
    return address;
  }

  async getLatitudeOfEventSchedule(scheduleId) {
    const latitude = await this.store.Schedule.findOne({
      where: {id: scheduleId},
      attributes: ['latitude'],
      raw: true,
    });
    return latitude;
  }

  async getLongitudeOfEventSchedule(scheduleId) {
    const longitude = await this.store.Schedule.findOne({
      where: {id: scheduleId},
      attributes: ['longitude'],
      raw: true,
    });
    return longitude;
  }

  async getTypeOfEvent(eventId) {
    const type = await this.store.Event.findOne({
      where: {id: eventId},
      attributes: ['type'],
      raw: true,
    });
    return type;
  }

  async getHostIdOfEvent({eventId}) {
    const hostId = await this.store.Event.findOne({
      where: {id: eventId},
      attributes: ['hostId'],
      raw: true,
    });
    return hostId;
  }

  async getThumbnailUrlOfEvent({id}) {
    const thumbnailUrl = await this.store.Event.findOne({
      where: {id: id},
      attributes: ['thumbnailUrl'],
      raw: true,
    });
    return thumbnailUrl;
  }

  async getCreationTimeOfEvent({id}) {
    const creationTime = await this.store.Event.findOne({
      where: {id: id},
      attributes: ['createdAt'],
      raw: true,
    });
    return creationTime;
  }

  async getLastUpdatedTime({id}) {
    const lastUpdatedTime = await this.store.Event.findOne({
      where: {id: id},
      attributes: ['updatedAt'],
      raw: true,
    });
    return lastUpdatedTime;
  }

  async getScheduleIdsOfEvent({eventId}) {
    const schedule = await this.store.Schedule.findAll({
      where: {id: eventId},
      attributes: ['id'],
      raw: true,
    });
    return schedule;
  }

  async getTitleOfEvent({id}) {
    const title = await this.store.Event.findOne({
      where: {id: id},
      attributes: ['title'],
      raw: true,
    });
    return title;
  }

  async getDescriptionOfEvent({id}) {
    const description = await this.store.Event.findOne({
      where: {id: id},
      attributes: ['description'],
      raw: true,
    });
    return description;
  }

  async getPriceOfEvent({id}) {
    const price = await this.store.Event.findOne({
      where: {id: id},
      attributes: ['price'],
      raw: true,
    });
    return price;
  }

  async getBookImgageUrlOfEvent({id}) {
    const bookImageUrl = await this.store.EventBookClub.findOne({
      where: {id: id},
      attributes: ['bookImageUrl'],
      raw: true,
    });
    return bookImageUrl;
  }

  async getBookTitleOfEvent({id}) {
    const bookTitle = await this.store.EventBookClub.findOne({
      where: {id: id},
      attributes: ['bookTitle'],
      raw: true,
    });
    return bookTitle;
  }

  async getBookAuthorOfEvent({id}) {
    const bookAuthor = await this.store.EventBookClub.findOne({
      where: {id: id},
      attributes: ['bookAuthor'],
      raw: true,
    });
    return bookAuthor;
  }

  async getBookDescriptionOfEvent({id}) {
    const bookDescription = await this.store.EventBookClub.findOne({
      where: {id: id},
      attributes: ['bookDescription'],
      raw: true,
    });
    return bookDescription;
  }

  async getBookISBNOfEvent({id}) {
    const bookISBN = await this.store.EventBookClub.findOne({
      where: {id: id},
      attributes: ['bookISBN'],
      raw: true,
    });
    return bookISBN;
  }

  async getTagIdsOfEvent({eventId}) {
    const tagIds = await this.store.EventTag.findAll({
      where: {id: eventId},
      attributes: ['tagId'],
      raw: true,
    });
    return tagIds;
  }

  async getParticipantIdsOfEvent({eventId}) {
    const participantIds = await this.store.EventParticipant.findAll({
      where: {id: eventId},
      attributes: ['userId'],
      raw: true,
    });
    return participantIds;
  }

  async getMaxParticipantNumOfEvent({id}) {
    const maxParticipantNum = await this.store.Event.findOne({
      where: {id: id},
      attributes: ['maxParticipantNum'],
      raw: true,
    });
    return maxParticipantNum;
  }

  async getIdOfEvent(eventId) {
    const event = await this.store.Event.findOne({
      where: {id: eventId},
      attributes: ['id'],
      raw: true,
    });
    return event;
  }

  async getIdsOfEvent({limit, offset, tagIds, order}) {
    const eventIds = await this.store.EventTag.findAll({
      where: {tagId: tagIds},
      attributes: ['eventId'],
      limit: limit,
      offset: offset,
      order: order,
      raw: true,
    });
    return eventIds;
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
  async getEventsOfTag(tagId) {
    const events = await this.store.EventTag.findAll({
      where: {id: tagId},
      attributes: ['eventId'],
      raw: true,
    });
    return events;
  }
}
module.exports={
  EventAPI,
};
