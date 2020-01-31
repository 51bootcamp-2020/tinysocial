'use strict';
module.exports = (sequelize, DataTypes) => {
  const EventBookClub = sequelize.define('EventBookClub', {
    eventId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Event',
        key: 'id',
      },
    },
    bookTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookAuthor: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    bookDescription: {
      type: DataTypes.TEXT,
    },
    bookISBN: {
      type: DataTypes.STRING(20),
    },
    bookImageUrl: {
      type: DataTypes.TEXT,
    },
  }, {});
  EventBookClub.associate = function(models) {
    // associations can be defined here
    EventBookClub.belongsTo(models.Event);
  };
  return EventBookClub;
};
