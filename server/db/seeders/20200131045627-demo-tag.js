'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [
      {
        name: 'Science',
      },
      {
        name: 'Romance',
      },
      {
        name: 'History',
      },
      {
        name: 'Fiction',
      },
      {
        name: 'Business',
      },
      {
        name: 'Essay',
      },
      {
        name: 'Self Improvement',
      },
      {
        name: 'Art',
      },
      {
        name: 'Biography',
      },
      {
        name: 'Suspense',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags', null, {});
  },
};
