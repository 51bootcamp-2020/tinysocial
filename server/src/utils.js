const {DataSource} = require('apollo-datasource');
const Sequelize = require('sequelize');
const OP = Sequelize.Op;

class MainAPI extends DataSource {
  constructor(store) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async findUser(where) {
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
  }

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
  }

  async getUserPastEvents(userId) {
    const events = await this.store.ScheduleParticipant.findAll({
<<<<<<< 1d66a671c22c284c305498d3a80cde939d1953cf
      where: {UserId: userId},
      include: [
        {
          model: Schedule,
          where: {ScheduleId: Id},
          include: [
            {
              model: Event,
              where: {EventId: Id, enddatetime: {[Op.lt]: Sequelize.NOW}},
            },
          ],
        },
      ],
=======
      where: { userId: userId.userId },
      include: [
        {
          model: this.store.Schedule,
          where: {
            endDateTime: {
              [OP.lte]: new Date()
            }
          },
          include: [
            {
              model: this.store.Event
            }
          ]
        }
      ]
>>>>>>> feat: Add getting user events api
    });
    return events.map(event => event.schedule.event);
  }

  async getUserUpcomingEvents(userId) {
    const events = await this.store.ScheduleParticipant.findAll({
      where: { userId: userId.userId },
      include: [
        {
          model: this.store.Schedule,
          where: {
            startDateTime: {
              [OP.gte]: new Date()
            }
          },
          include: [
            {
              model: this.store.Event
            }
          ]
        }
      ]
    });
    return events.map(event => event.schedule.event);
  }
<<<<<<< a30c74aeea8dca9827f59d5f9f99232665134456

  //   async getUserUpcomingEvents(userId) {
  //     this.store.Event.hasMany(this.store.Schedule);
  //     this.store.Schedule.hasMany(this.store.ScheduleParticipant);
  //     const events = await this.store.Event.findAll({
  //       where: { userId },
  //       include: [
  //         {
  //           model: this.store.Schedule,
  //           // where: { eventId: id },
  //           include: [
  //             {
  //               model: this.store.ScheduleParticipant,
  //               where: {
  //                 end: { [OP.gt]: Sequelize.literal("CURRENT_TIMESTAMP") }
  //               }
  //             }
  //           ]
  //         }
  //       ]
  //     });

  //     return events ? events : null;
  //   }
  // }

  async getUserUpcomingEvents(userId) {
    const events = await this.store.ScheduleParticipant.findAll({
      where: {userId: userId.userId},
      include: [
        {
          model: this.store.Schedule,
          where: {
            startDateTime: {
              [OP.gte]: new Date(),
            },
          },
          include: [
            {
              model: this.store.Event,
            },
          ],
        },
      ],
    });
    return events.map((event) => event.schedule.event);
  }
=======
>>>>>>> Revert "feat: Add getUserUpcomingEvent API"
}

module.exports = {
  MainAPI,
};
