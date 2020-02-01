'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EventTags', [
      {
        eventId: 1,
        tagId: 1,
      },
      {
        eventId: 1,
        tagId: 3,
      },
      {
        eventId: 2,
        tagId: 9,
      },
      {
        eventId: 2,
        tagId: 10,
      },
      {
        eventId: 2,
        tagId: 3,
      },
      {
        eventId: 3,
        tagId: 6,
      },
      {
        eventId: 4,
        tagId: 10,
      },
      {
        eventId: 4,
        tagId: 7,
      },
      {
        eventId: 5,
        tagId: 5,
      },
      {
        eventId: 5,
        tagId: 8,
      },
      {
        eventId: 5,
        tagId: 2,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EventTags', null, {});
  },
};
