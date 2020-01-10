const Sequelize = require('sequelize');

const createStore = () => {
  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
  });

  sequelize.authenticate().then(() => {
    console.log('Connection to the database has been established successfully');
  }).catch(err => {
    console.error(`Unable to connect to the database: ${err}`);
  });

  const Model = Sequelize.Model;

  class User extends Model {}
  class Event extends Model {}
  class Tag extends Model {}
  class Schedule extends Model {}
  class UserParticipatedEvent extends Model {}

  User.init({
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        createdAt: Sequelize.DATE,
        firstName: {type: Sequelize.STRING, allowNull: false},
        lastName: {type: Sequelize.STRING, allowNull: false},
        googleId: Sequelize.STRING,
        facebookId: Sequelize.STRING,
        profileImgUrl: Sequelize.STRING,
        email: {
          type: Sequelize.STRING, allowNull: false,
        },
        token: Sequelize.STRING,
        birthday: Sequelize.DATE,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        phone: Sequelize.STRING,
      },
      {
        sequelize,
        modelName: 'user',
      });

  Event.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    hostId: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: 'id',
      },
    },
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.FLOAT,
    maxParticipants: Sequelize.INTEGER,
  }, {
    sequelize,
    modelName: 'event',
  });

  // Every event can have multiple tags.
  // Tags are predefined by ours(developers)
  // and used by the event host to categorize his event.
  // So we are able to categorize events by tags.
  Tag.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    eventId: {
      type: Sequelize.INTEGER,
      references: {
        model: Event,
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'tag',
  });

  Schedule.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    start: Sequelize.DATE,
    end: Sequelize.DATE,
    locationLatitude: Sequelize.FLOAT,
    locationLongitude: Sequelize.FLOAT,
    eventId: {
      type: Sequelize.INTEGER,
      references: {
        model: Event,
        key: 'id',
      },
    },
    // TODO(arin-kwak): Find better way to deal with repetition.
    //  Maybe we can reference calendar apps to improve this.
    //  This method can't deal with 'evey other tuesday'
    // If 'repeat' is null, this schedule is not repeated.
    repeat: Sequelize.ENUM('week', 'month', 'year'),
  }, {
    sequelize,
    modelName: 'schedule',
    timestamps: false,
  });

  UserParticipatedEvent.init({
        userId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        eventId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
      },
      {sequelize, modelName: 'UserParticipatedEvent'});

  // Synchronize the models with the database
  // TODO(arin-kwak): In production phase, consider using migration instead of 'sync'.
  //  reference: https://sequelize.org/v5/manual/migrations.html
  sequelize.sync();

  return {User, Tag, Event, Schedule, UserParticipatedEvent, sequelize};
};

module.exports = {
  createStore,
};
