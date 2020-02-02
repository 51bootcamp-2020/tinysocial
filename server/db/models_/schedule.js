'use strict';
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('Schedule', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    startDateTime: DataTypes.DATE,
    endDateTime: DataTypes.DATE,
    // TODO(yun-kwak): Split the address into country, state, city, zip, street,
    // additionalStreetAddress
    address: DataTypes.TEXT,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    eventId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Event',
        key: 'id',
      },
    },
  }, {});
  Schedule.associate = function(models) {
    Schedule.belongsTo(models.Event);
  };
  return Schedule;
};
