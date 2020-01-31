'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        eventId: 2,
        title: 'This event was so funny!!',
        content: 'It was so funny but a little bit boring',
        isPublic: true,
      },
      {
        userId: 2,
        eventId: 1,
        title: 'It was terrible book.',
        content: 'The book is so biased. I think it\'s author is racist',
        isPublic: false,
      },
      {
        userId: 3,
        eventId: 2,
        title: 'Just common book and event',
        content: 'It was not interestd. But my friends Sihyun like this.',
        isPublic: false,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  },
};
