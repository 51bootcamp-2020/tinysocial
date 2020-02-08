const Sequelize = require('sequelize');
const {STRING, INTEGER, DATE, TEXT, FLOAT, BOOLEAN} = Sequelize;

const createStore = () => {
  let sequelize;
  switch (process.env.NODE_ENV) {
    case 'production':
      sequelize = new Sequelize('tinysocial', 'admin',
          process.env.DB_DEV_PASSWORD, {
            dialect: 'mariadb',
            host: process.env.DB_DEV_HOST,
            dialectOptions: {
              connectTimeout: 1000, // MariaDB connector option
            },
          });
      break;
    case 'dev':
      sequelize = new Sequelize('tinysocial', 'arin_kwak',
          process.env.DB_DEV_PASSWORD, {
            dialect: 'mariadb',
            host: process.env.DB_DEV_HOST,
            dialectOptions: {
              connectTimeout: 1000, // MariaDB connector option
            },
          });
      break;
    case 'test':
      sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: 'database.sqlite',
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

  class Event extends Model {}

  class EventBookClub extends Model {}

  class EventParticipant extends Model {}

  class EventTag extends Model {}

  class Review extends Model {}

  class Schedule extends Model {}

  class Tag extends Model {}

  class User extends Model {}

  User.init({
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: DATE,
    firstName: {type: STRING, allowNull: false},
    lastName: {type: STRING, allowNull: false},
    googleId: STRING,
    facebookId: STRING,
    profileImgUrl: TEXT,
    password: STRING(300),
    email: {
      type: STRING, allowNull: false,
    },
    birthday: DATE,
    // TODO(yun-kwak): Split the address into street address,
    // additional street address, city, state, zip code
    address: STRING(500),
    phone: STRING,
    selfDescription: TEXT,
    lastInteractionTime: DATE, // To refresh JWT token
  },
  {
    sequelize,
    modelName: 'User',
  });

  Event.init({
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: DATE,
    updatedAt: DATE,
    hostId: {
      type: INTEGER,
      references: {
        model: User,
        key: 'id',
      },
    },
    title: STRING,
    description: TEXT,
    price: FLOAT,
    // 'type' specifies which type of the event is.
    // Enum type is not SQL-standard and it is hard to add a new enum value.
    // If we want to, we have to use ALTER TABLE statement.
    // So we define type as INTEGER.
    // 0: BookClub
    type: INTEGER,
    thumbnailUrl: TEXT,
    maxParticipantNum: INTEGER,
  }, {
    sequelize,
    modelName: 'Event',
  });

  EventBookClub.init({
    eventId: {
      type: INTEGER,
      primaryKey: true,
      references: {
        model: Event,
        key: 'id',
      },
    },
    bookTitle: {
      type: STRING,
      allowNull: false,
    },
    bookAuthor: {
      type: STRING,
      allowNull: false,
    },
    bookDescription: {
      type: TEXT,
    },
    bookISBN: {
      type: STRING(20),
    },
    bookImageUrl: {
      type: TEXT,
    },
  }, {
    sequelize,
    modelName: 'EventBookClub',
    timestamps: false,
  },
  );

  Review.init({
    userId: {
      type: INTEGER,
      primaryKey: true,
      references: {
        model: User,
        key: 'id',
      },
    },
    eventId: {
      type: INTEGER,
      primaryKey: true,
      references: {
        model: Event,
        key: 'id',
      },
    },
    title: {
      type: TEXT,
      allowNull: false,
    },
    content: {
      type: TEXT,
    },
    isPublic: {
      type: BOOLEAN,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Review',
  },
  );

  // Every event can have multiple tags.
  // Tags are predefined by ours(developers)
  // and used by the event host to categorize his event.
  // So we are able to categorize events by tags.
  Tag.init({
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Tag',
    timestamps: false,
  });

  EventTag.init({
    eventId: {
      type: INTEGER,
      primaryKey: true,
      references: {
        model: Event,
        key: 'id',
      },
    },
    tagId: {
      type: INTEGER,
      primaryKey: true,
      references: {
        model: Tag,
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'EventTag',
    timestamps: false,
  });

  Schedule.init({
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    startDateTime: DATE,
    endDateTime: DATE,
    // TODO(yun-kwak): Split the address into country, state, city, zip, street,
    // additionalStreetAddress
    address: STRING(500),
    latitude: FLOAT,
    longitude: FLOAT,
    eventId: {
      type: INTEGER,
      references: {
        model: Event,
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Schedule',
    timestamps: false,
  });

  EventParticipant.init(
      {
        userId: {
          type: INTEGER,
          primaryKey: true,
          references: {
            model: User,
            key: 'id',
          },
        },
        eventId: {
          type: INTEGER,
          primaryKey: true,
          references: {
            model: Event,
            key: 'id',
          },
        },
      }, {
        sequelize,
        modelName: 'EventParticipant',
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
