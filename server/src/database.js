const Sequelize = require('sequelize');
const TESTDATA = require('./testData');
const createStore = async () => {
  let sequelize;
  switch (process.env.NODE_ENV) {
    case 'production':
      // TODO(yun-kwak): Make production DB and code.
      throw new Error('Not implemented');
    case 'dev':
      if (process.env.DB_PASSWORD === undefined) {
        throw new Error('Env variable DB_PASSWORD is required');
      }
      sequelize = new Sequelize('tinysocial', 'arin_kwak',
          process.env.DB_PASSWORD, {
            dialect: 'mariadb',
            host: 'tinysocial-dev.cwup5u7gf2do.us-west-2.rds.amazonaws.com',
            dialectOptions: {
              connectTimeout: 1000, // MariaDB connector option
            },
          });
      break;

    case 'test':
      sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: './database.sqlite',
      });
      break;

    default:
      console.error(`Received process.env.NODE_ENV: ${process.env.NODE_ENV}`);
      throw new Error('Invalid NODE_ENV value');
  }

  sequelize.authenticate().then(() => {
    console.log('Connection to the database has been established successfully');
  }).catch((err) => {
    console.error(`Unable to connect to the database: ${err}`);
  });

  const Model = Sequelize.Model;

  class Event extends Model { }
  class EventBookClub extends Model { }
  class EventParticipant extends Model { }
  class EventTag extends Model { }
  class Review extends Model { }
  class Schedule extends Model { }
  class Tag extends Model { }
  class User extends Model { }

  User.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: Sequelize.DATE,
    firstName: {type: Sequelize.TEXT, allowNull: false},
    lastName: {type: Sequelize.TEXT, allowNull: false},
    googleId: Sequelize.TEXT,
    facebookId: Sequelize.TEXT,
    profileImgUrl: Sequelize.TEXT,
    password: Sequelize.TEXT,
    email: {
      type: Sequelize.TEXT, allowNull: false,
    },
    birthday: Sequelize.DATE,
    // TODO(yun-kwak): Split the address into street address,
    // additional street address, city, state, zip code
    address: Sequelize.TEXT,
    phone: Sequelize.TEXT,
    selfDescription: Sequelize.TEXT,
    lastInteractionTime: Sequelize.DATE, // To refresh JWT token
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
    description: Sequelize.TEXT,
    price: Sequelize.FLOAT,
    // 'type' specifies which type of the event is.
    // Enum type is not SQL-standard and it is hard to add a new enum value.
    // If we want to, we have to use ALTER TABLE statement.
    // So we define type as INTEGER.
    // 0: BookClub
    type: Sequelize.INTEGER,
    thumbnailUrl: Sequelize.TEXT,
    maxParticipantNum: Sequelize.INTEGER,
  }, {
    sequelize,
    modelName: 'event',
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
    bookAuthor: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    bookDescription: {
      type: Sequelize.TEXT,
    },
    bookISBN: {
      type: Sequelize.STRING(20),
    },
    bookImageUrl: {
      type: Sequelize.TEXT,
    },
  }, {
    sequelize,
    modelName: 'eventBookClub',
    timestamps: false,
  },
  );

  Review.init({
    userId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: User,
        key: 'id',
      },
    },
    eventId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: Event,
        key: 'id',
      },
    },
    title: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
    },
    isPublic: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'review',
  },
  );

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
      type: Sequelize.TEXT,
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
      },
    },
    tagId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: Tag,
        key: 'id',
      },
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
    // TODO(yun-kwak): Split the address into country, state, city, zip, street,
    // additionalStreetAddress
    address: Sequelize.TEXT,
    latitude: Sequelize.FLOAT,
    longitude: Sequelize.FLOAT,
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

  EventParticipant.init(
      {
        userId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: User,
            key: 'id',
          },
        },
        eventId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: Event,
            key: 'id',
          },
        },
      }, {
        sequelize,
        modelName: 'eventParticipant',
      },
  );
  Event.hasMany(EventParticipant);
  EventParticipant.belongsTo(Event);
  Event.hasMany(Schedule);
  Schedule.belongsTo(Event);
  User.hasMany(Review);
  Event.hasMany(Review);
  Review.belongsTo(User);
  Review.belongsTo(Event);
  User.hasMany(EventParticipant);
  EventParticipant.belongsTo(User);
  Event.hasOne(EventBookClub);
  EventBookClub.belongsTo(Event);
  Event.hasMany(Tag);
  Tag.belongsToMany(Event, {through: EventTag});
  Tag.hasMany(EventTag);
  EventTag.belongsTo(Tag);
  EventTag.belongsTo(Event);
  Event.hasMany(EventTag);

  // Synchronize the models with the database
  // TODO(arin-kwak): In production phase, consider using migration instead of
  // 'sync'.
  // reference: https://sequelize.org/v5/manual/migrations.html
  let sync;
  switch (process.env.NODE_ENV) {
    case 'test':
      sequelize.sync({force: true}).then(async() =>{
        await User.create(TESTDATA.UsersData);
        await Event.create(TESTDATA.EventsData);
        await Schedule.create(TESTDATA.ScheduleData);
        await EventParticipant.create(TESTDATA.EventParticipantData);
        await Review.create(TESTDATA.ReviewData);
        await EventBookClub.create(TESTDATA.EventBookClubsData);
        await Tag.create(TESTDATA.TagsData)
        await EventTag.create(TESTDATA.EventTagsData)
      });
      break;
    case 'dev':
      sync = sequelize.sync();
      break;
    default:
      sync = sequelize.sync();
      break;
  }

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
    sync,
  };
};

module.exports = {
  createStore,
};
