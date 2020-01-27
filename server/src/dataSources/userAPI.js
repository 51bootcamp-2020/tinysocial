/* eslint-disable require-jsdoc */
const {DataSource} = require('apollo-datasource');
const Sequelize = require('sequelize');

class UserAPI extends DataSource {
  constructor(store) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }
  async getIdOfUser(userId) {
    const user = await this.store.User.findOne({
      where: {id: userId},
      attributes: ['id'],
    });
    return user.get('id');
  }
}

module.exports={
  UserAPI,
};
