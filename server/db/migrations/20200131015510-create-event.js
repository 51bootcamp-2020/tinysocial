'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      hostId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      type: {type: Sequelize.INTEGER},
      thumbnailUrl: {type: Sequelize.TEXT},
      maxParticipantNum: {type: Sequelize.INTEGER},
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Events');
  },
};
