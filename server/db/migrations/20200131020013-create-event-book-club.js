'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EventBookClubs', {
      eventId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Events',
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EventBookClubs');
  }
};
