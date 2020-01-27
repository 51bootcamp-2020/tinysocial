/* eslint-disable require-jsdoc */
const {DataSource} = require('apollo-datasource');
const Sequelize = require('sequelize');

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
    return startDateTime;
  }

  async getEndDateTimeOfEventSchedule(scheduleId) {
    const endDateTime = await this.store.Schedule.findOne({
      where: {id: scheduleId},
      attributes: ['endDateTime'],
    });
    return endDateTime;
  }

  async getAddressOfEventSchedule(scheduleId) {
    const address = await this.store.Schedule.findOne({
      where: {id: scheduleId},
      attributes: ['address'],
    });
    return address;
  }

  async getLatitudeOfEventSchedule(scheduleId) {
    const latitude = await this.store.Schedule.findOne({
      where: {id: scheduleId},
      attributes: ['latitude'],
    });
    return latitude;
  }

  async getLongitudeOfEventSchedule(scheduleId) {
    const longitude = await this.store.Schedule.findOne({
      where: {id: scheduleId},
      attributes: ['longitude'],
    });
    return longitude;
  }

  async getTypeOfEvent(eventId) {
    const type = await this.store.Event.findOne({
      where: {id: eventId},
      attributes: ['type'],
    });
    return type;
  }
}

module.exports={
  EventAPI,
};
