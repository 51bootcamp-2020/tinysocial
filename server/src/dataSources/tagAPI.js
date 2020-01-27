/* eslint-disable require-jsdoc */
const {DataSource} = require('apollo-datasource');
const Sequelize = require('sequelize');

class TagAPI extends DataSource {
  constructor(store) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getNameOfTag(tagId) {
    const name = await this.store.Tag.findOne({
      where: {id: tagId},
      attributes: ['name'],
    });
    return name.get('name');
  }

  async getEventsOfTag(tagId) {
    const events = await this.store.Tag.findAll({
      where: {id: tagId},
      attributes: ['events'],
    });
    return events.get('events');
  }
}

module.exports={
  TagAPI,
};
