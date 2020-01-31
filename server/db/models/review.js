'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
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
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
    },
    isPublic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {timestamps: false});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User);
    Review.belongsTo(models.Event);
  };
  return Review;
};
