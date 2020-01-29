/* eslint-disable require-jsdoc */
const {DataSource} = require('apollo-datasource');
const Sequelize = require('sequelize');
const {isUndefinedOrNull} = require('../utils');
const {
  tagIdIsNotPassedMessage,
} = require('../errorMessages');

class TagAPI extends DataSource {
  constructor(store) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAttributeOfTag(attributeName, tagId) {
    if (tagId === undefined || tagId === null) {
      throw new Error(tagIdIsNotPassedMessage);
    }
    const tag = await this.store.Tag.findOne({
      where: {id: tagId},
      attributes: [attributeName],
      raw: true,
    });
    return (tag && isUndefinedOrNull(tag[attributeName])) ?
        tag[attributeName] : null;
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
