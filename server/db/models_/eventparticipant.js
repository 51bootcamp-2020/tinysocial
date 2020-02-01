'use strict';
module.exports = (sequelize, DataTypes) => {
  const EventParticipant = sequelize.define('EventParticipant', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    eventId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Event',
        key: 'id',
      },
    },
  }, {});
  EventParticipant.associate = function(models) {
    // associations can be defined here
  };
  return EventParticipant;
};
