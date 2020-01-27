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
}

module.exports={
  EventAPI,
};
