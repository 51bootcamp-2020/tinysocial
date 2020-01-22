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
  class EventBookClub extends Model {}
  class Review extends Model {}
  class Tag extends Model {}
  class EventTag extends Model {}
  class Schedule extends Model {}
  class EventParticipant extends Model {}

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
        birthday: Sequelize.DATE,
        // TODO: Split the address into
        // street address
        // additional street address
        // city
        // state
        // zip code
        address: Sequelize.STRING,
        phone: Sequelize.STRING,
        description: Sequelize.STRING,
        lastInteractionTime: Sequelize.STRING, // To refresh JWT token
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
    // 'type' specifies which type of the event is.
    // Enum type is not SQL-standard and it is hard to add a new enum value.
    // If we want to, we have to use ALTER TABLE statement.
    // So we define type as INTEGER.
    // 0: BookClub
    type: Sequelize.INTEGER,
    thumbnailUrl: Sequelize.STRING,
    maxParticipantNum: Sequelize.INTEGER,
  }, {
    sequelize,
    modelName: 'event'
  });

  EventBookClub.init({
    eventId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: Event,
        key: 'id',
      },
    },
    bookTitle: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
    ISBN: {
      type: Sequelize.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'eventBookClub',
    timestamps: false,
  });

  // TODO(yun-kwak): Modify Review to make review always stay in the system.
  // https://github.com/51bootcamp-2020/tinysocial/pull/22#discussion_r368315502
  Review.init({
    userId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: User,
        key: 'id',
      }
    },
    eventId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: Event,
        key: 'id',
      }
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.STRING,
    },
    isPublic: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    }
  },{
    sequelize,
    modelName: 'review'
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
  }, {
    sequelize,
    modelName: 'tag',
    timestamps: false,
  });

  EventTag.init({
    eventId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: Event,
        key: 'id',
      }
    },
    tagId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: Tag,
        key: 'id',
      }
    },
  }, {
    sequelize,
    modelName: 'eventTag',
    timestamps: false,
  });

  Schedule.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    startDateTime: Sequelize.DATE,
    endDateTime: Sequelize.DATE,
    country: Sequelize.STRING,
    state: Sequelize.STRING,
    city: Sequelize.STRING,
    zip: Sequelize.STRING,
    street: Sequelize.STRING,
    additionalAddress: Sequelize.STRING,
    eventId: {
      type: Sequelize.INTEGER,
      references: {
        model: Event,
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'schedule',
    timestamps: false,
  });

  EventParticipant.init({
        userId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: User,
            key: 'id',
          }
        },
        scheduleId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: Event,
            key: 'id',
          }
        },
      },
      {
        sequelize,
        modelName: 'EventParticipant',
      });

  // Synchronize the models with the database
  // TODO(arin-kwak): In production phase, consider using migration instead of 'sync'.
  // reference: https://sequelize.org/v5/manual/migrations.html
  sequelize.sync();

  return {
    User,
    Tag,
    Event,
    EventBookClub,
    EventTag,
    Review,
    Schedule,
    EventParticipant,
    sequelize,
  };
};

module.exports = {
  createStore,
};
