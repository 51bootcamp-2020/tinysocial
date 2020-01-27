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
    return events.get('id')
  }

  async getPastEventIdsOfEvent(user){
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
    return events.get('id')
  }
module.exports={
  EventAPI,
};
