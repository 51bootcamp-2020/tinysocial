'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      googleId: {
        type: Sequelize.TEXT,
      },
      facebookId: {
        type: Sequelize.TEXT,
      },
      profileImgUrl: {
        type: Sequelize.TEXT,
      },
      password: {
        type: Sequelize.TEXT,
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      birthday: {
        type: Sequelize.DATE,
      },
      address: {
        type: Sequelize.TEXT,
      },
      phone: {
        type: Sequelize.TEXT,
      },
      selfDescription: {
        type: Sequelize.TEXT,
      },
      lastInteractionTime: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  },
};
