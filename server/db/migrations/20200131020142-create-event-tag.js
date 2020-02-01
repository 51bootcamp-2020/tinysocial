'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EventTags', {
      eventId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Events',
          key: 'id',
        },
      },
      tagId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Tags',
          key: 'id',
        },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EventTags');
  }
};
