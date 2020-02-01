const {DataSource} = require('apollo-datasource');
const Sequelize = require('sequelize');
const {isUndefinedOrNull} = require('../utils');
const {
  eventIdIsNotPassedMessage,
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

  async getTagIdsOfEvent({eventId}) {
    if (eventId === undefined || eventId === null) {
      throw new Error(eventIdIsNotPassedMessage);
    }
    const tagIds = await this.store.EventTag.findAll({
      where: {eventId},
      attributes: [['tagId', 'id']],
      raw: true,
    });
    return tagIds;
  }
}

module.exports={
  TagAPI,
};
