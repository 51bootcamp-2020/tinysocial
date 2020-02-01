'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [
      {
        name: 'Science',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Romance',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'History',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fiction',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Business',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Essay',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Self Improvement',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Art',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Biography',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Suspense',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags', null, {});
  },
};
