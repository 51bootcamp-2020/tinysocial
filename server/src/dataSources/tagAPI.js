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
  async getIdsOfTag({limit, offset}) {
    const tagIds = await this.store.Tag.findAll({
      offset,
      limit,
      attributes: ['id'],
      raw: true,
    });
    return tagIds;
  }

  async getEventIdsOfTag({tagId}) {
    const eventIds = await this.store.EventTag.findAll({
      where: {id: tagId},
      attributes: ['eventId'],
      raw: true,
    });
    return eventIds;
  }
}

module.exports={
  TagAPI,
};
