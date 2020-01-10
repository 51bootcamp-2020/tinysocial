const {DataSource} = require('apollo-datasource');

class mainAPI extends DataSource {
  constructor(store) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async findOneUser(where) {
    /**
     * Find one user. If user exists, return the user data from db.
     *
     * @param where: an object. The hint of the user you want to find
     * @return Returns the user, if the user exists. If not, returns null
     */
    const user = await this.store.User.findOne({
      where,
    });
    return user ? user : null;
  };

  async findOrCreateUser(where, userInfo) {
    /**
     * Find one user.
     * If user doesn't exist, create the user and return the user.
     * @param where: an Object. The hint of the user you want to find.
     * @param userInfo: an Object.
     * Additional information of user you want to create.
     * This function creates new user, merging 'where' and 'userInfo' objects.
     * @return Returns the user.
     * If this function fails to create the user, returns null.
     */
    const users = await this.store.User.findOrCreate({
      where,
      defaults: userInfo,
    });

    return users && users[0] ? users[0] : null;
  };
}

module.exports = {
  mainAPI,
};
