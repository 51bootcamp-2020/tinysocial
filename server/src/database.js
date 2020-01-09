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

  class User extends Model {
  }

  class Event extends Model {
  }

  User.init({
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        createdAt: Sequelize.DATE,
        firstName: {type: Sequelize.STRING, allowNull: false},
        lastName: Sequelize.STRING,
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

  class Tag extends Model {
  }

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

  class Schedule extends Model {
  }

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
    // If 'repeat' is null, this schedule is not repeated.
    repeat: Sequelize.ENUM('week', 'month', 'year'),
  }, {
    sequelize,
    modelName: 'schedule',
    timestamps: false,
  });

  class UserParticipatedEvent extends Model {
  }

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
  sequelize.sync();

  return {User, Tag, Event, Schedule, UserParticipatedEvent};
};

module.exports = {
  createStore,
};
