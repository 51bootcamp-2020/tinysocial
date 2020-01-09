const {DataSource} = require('apollo-datasource');

class mainAPI extends DataSource {
  constructor(db) {
    super();
    this.db = db;
  }

  initialize(config) {
    this.context = config.context;
  }

  // TODO(arin-kwak): Implement mainAPI
}

module.exports = {
  mainAPI,
};
