'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = DataTypes.define('Event', {
    hostId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    // 'type' specifies which type of the event is.
    // Enum type is not SQL-standard and it is hard to add a new enum value.
    // If we want to, we have to use ALTER TABLE statement.
    // So we define type as INTEGER.
    // 0: BookClub
    type: DataTypes.INTEGER,
    thumbnailUrl: DataTypes.TEXT,
    maxParticipantNum: DataTypes.INTEGER,
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    Event.hasMany(models.EventParticipant);
    Event.hasMany(models.Schedule);
    Event.hasMany(models.Review);
    Event.hasOne(models.EventBookClub);
    Event.hasMany(models.Tag);
    Event.hasMany(models.EventTag);
  };
  return Event;
};
