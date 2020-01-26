const Sequelize = require('sequelize');

const createStore = () => {
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
    firstName: {type: Sequelize.STRING, allowNull: false},
    lastName: {type: Sequelize.STRING, allowNull: false},
    googleId: Sequelize.STRING,
    facebookId: Sequelize.STRING,
    profileImgUrl: Sequelize.STRING,
    email: {
      type: Sequelize.STRING, allowNull: false,
    },
    birthday: Sequelize.DATE,
    // TODO(yun-kwak): Split the address into
    // street address
    // additional street address
    // city
    // state
    // zip code
    address: Sequelize.STRING,
    phone: Sequelize.STRING,
    self_description: Sequelize.STRING,
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
    modelName: 'event',
  });

  EventBookClub.init(
      {
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
          type: Sequelize.STRING,
          allowNull: false,
        },
        bookDescription: {
          type: Sequelize.STRING,
        },
        bookISBN: {
          type: Sequelize.INTEGER,
        },
        bookImageUrl: {
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
        modelName: 'eventBookClub',
        timestamps: false,
      },
  );

  Review.init(
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
        },
      },
      {
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
  },
  );

  Schedule.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    startDateTime: Sequelize.DATE,
    endDateTime: Sequelize.DATE,
    // TODO(yun-kwak): Split the address into
    // country: Sequelize.STRING,
    // state: Sequelize.STRING,
    // city: Sequelize.STRING,
    // zip: Sequelize.STRING,
    // street: Sequelize.STRING,
    // additionalStreetAddress: Sequelize.STRING,
    address: Sequelize.STRING,
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
  },
  );

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

  // Synchronize the models with the database
  // TODO(arin-kwak): In production phase, consider using migration instead of
  // 'sync'.
  // reference: https://sequelize.org/v5/manual/migrations.html

  // sequelize.sync();
  /////////////////////////////////TEST DATA///////////////////////////////////
 sequelize.sync({force: true}).then(async () => {
  try {
    await User.create({
      firstName: '1',
      lastName: '#',
      googleId: 'ThisIsUserGoogleId1',
      facebookId: 'ThisIsUserFacebookId1',
      profileImgUrl: 'ThisIsUserImgUrl1',
      email: 'ThisIsUserEmail1',
      birthday: new Date('1996-04-22 12:12:12'),
      address: 'ThisIsUserAddress1',
      phone: 'ThisIsUserPhone1',
      self_description: 'ThisIsUserSelf_description1',
      lastInteractionTime: 'lastInteractionTime1',
    }),
    await User.create({
      firstName: '2',
      lastName: '#',
      googleId: 'ThisIsUserGoogleId2',
      facebookId: 'ThisIsUserFacebookId2',
      profileImgUrl: 'ThisIsUserImgUrl2',
      email: 'ThisIsUserEmail2',
      birthday: new Date('2000-04-22 12:12:12'),
      address: 'ThisIsUserAddress2',
      phone: 'ThisIsUserPhone2',
      self_description: 'ThisIsUserSelf_description2',
      lastInteractionTime: 'lastInteractionTime2',
    }).then(async () => {
      const users = await User.findAll();
      console.log('All users:', JSON.stringify(users, null, 2));
    });
    console.log('success', User);
  } catch (err) {
    console.log(err);
  }
  try {
    await Event.create({
      title: 'event1',
      hostId: 1,
      description: 'ThisIsEventDescription1',
      price: 1.11111,
      type: 0,
      thumbnailUrl: 'ThisIsEventThumbnailUrl1',
      maxParticipantNum: 11,
    }),
    await Event.create({
      title: 'event2',
      hostId: 1,
      description: 'ThisIsEventDescription2',
      price: 2.22222,
      type: 0,
      thumbnailUrl: 'ThisIsEventThumbnailUrl2',
      maxParticipantNum: 22,
    }),
    await Event.create({
      title: 'event3',
      hostId: 1,
      description: 'ThisIsEventDescription3',
      price: 3.33333,
      type: 0,
      thumbnailUrl: 'ThisIsEventThumbnailUrl3',
      maxParticipantNum: 33,
    }),
    await Event.create({
      title: 'event4',
      hostId: 1,
      description: 'ThisIsEventDescription4',
      price: 4.44444,
      type: 0,
      thumbnailUrl: 'ThisIsEventThumbnailUrl4',
      maxParticipantNum: 44,
    }),
    await Event.create({
      title: 'event5',
      hostId: 1,
      description: 'ThisIsEventDescription5',
      price: 5.55555,
      type: 0,
      thumbnailUrl: 'ThisIsEventThumbnailUrl5',
      maxParticipantNum: 55,
    }).then(async () => {
      const events = await Event.findAll();
      console.log('All events:', JSON.stringify(events, null, 2));
    });
    console.log('success', Event);
  } catch (err) {
    console.log(err);
  }
  try {
    await EventBookClub.create({
      eventId: 1,
      bookTitle: 'ThisIsEventBookClubBookTitle1',
      bookDescription: 'ThisIsEventBookClubDescription1',
      bookAuthor: 'ThisIsEventBookClubAuthor1',
      bookISBN: 1,
    }),
    await EventBookClub.create({
      eventId: 2,
      bookTitle: 'ThisIsEventBookClubBookTitle2',
      bookDescription: 'ThisIsEventBookClubDescription2',
      bookAuthor: 'ThisIsEventBookClubAuthor2',
      bookISBN: 2,
    }).then(async () => {
      const eventBookClub = await EventBookClub.findAll();
      console.log('All eventBookClub:', JSON.stringify(eventBookClub, null, 2));
    });
    console.log('success', EventBookClub);
  } catch (err) {
    console.log(err);
  }
  try {
    await Tag.create({
      name: 'ThisIsTagName1',
    }).then(async () => {
      console.log('success', Tag);
    })
  } catch (err) {
    console.log(err);
  }
  try {
    await EventTag.create({
      eventId: 1,
      tagId: 1,
    }).then(async () => {
      console.log('success', EventTag);
    })
  } catch (err) {
    console.log(err);
  }
  try {
    await Schedule.create({
      startDateTime: new Date('2020-12-31 12:12:12'),
      endDateTime: new Date('2022-12-23 12:31:11'),
      address: 'ThisIsScheduleAddress1',
      eventId: 1,
      longitude: 1.111111,
      latitude: 1.111111,
    }),
    await Schedule.create({
      startDateTime: new Date('2015-12-31 12:12:12'),
      endDateTime: new Date('2018-12-23 12:31:11'),
      address: 'ThisIsScheduleAddress2',
      longitude: 2.222222,
      latitude: 2.222222,
      eventId: 2,
    }).then(async () => {
      const schedule = await Schedule.findAll();
      console.log('All schedule:', JSON.stringify(schedule, null, 2));
    });
    console.log('success', Schedule);
  } catch (err) {
    console.log(err);
  }

  try {
    await EventParticipant.create(
        {
          userId: 1,
          eventId: 1,
        },
    ),
    await EventParticipant.create(
        {
          userId: 2,
          eventId: 1,
        },
    ),
    await EventParticipant.create({
      userId: 1,
      eventId: 2,
    }).then(async () => {
      const eventParticipant = await EventParticipant.findAll();
      console.log('All eventParticipant:', JSON.stringify(eventParticipant, null, 2));
    });
    console.log('success', EventParticipant);
  } catch (err) {
    console.log(err);
  }

  try {
    await Review.create({
      userId: 1,
      eventId: 1,
      title: 'ThisIsReviewTitle1',
      content: 'ThisIsReviewContent1',
      isPublic: true,
    }).then(async () => {
      const review = await Review.findAll();
      console.log('All review:', JSON.stringify(review, null, 2));
    });
    console.log('success', Review);
  } catch (err) {
    console.log(err);
  }

});
  ///////////////////////////////TEST DATA///////////////////////////////////

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
