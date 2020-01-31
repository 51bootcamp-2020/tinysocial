'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Schedules', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      startDateTime: Sequelize.DATE,
      endDateTime: Sequelize.DATE,
      // TODO(yun-kwak): Split the address into country, state, city, zip, street,
      // additionalStreetAddress
      address: Sequelize.TEXT,
      latitude: Sequelize.FLOAT,
      longitude: Sequelize.FLOAT,
      eventId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Events',
          key: 'id',
        },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Schedules');
  }
};
