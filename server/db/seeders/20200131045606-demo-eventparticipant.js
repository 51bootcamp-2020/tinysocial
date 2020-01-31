'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EventParticipants', [
      {
        userId: 1,
        eventId: 1,
      },
      {
        userId: 2,
        eventId: 1,
      },
      {
        userId: 1,
        eventId: 2,
      },
      {
        userId: 2,
        eventId: 2,
      },
      {
        userId: 3,
        eventId: 2,
      },
      {
        userId: 3,
        eventId: 3,
      },
      {
        userId: 2,
        eventId: 4,
      },
      {
        userId: 1,
        eventId: 5,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EventParticipants', null, {});
  },
};
