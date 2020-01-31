'use strict';
module.exports = (sequelize, DataTypes) => {
  const EventTag = sequelize.define('EventTag', {
    eventId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Event',
        key: 'id',
      },
    },
    tagId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Tag',
        key: 'id',
      },
    },
  }, {timestamps: false});
  EventTag.associate = function(models) {
    // associations can be defined here
    EventTag.belongsTo(models.Tag);
    EventTag.belongsTo(models.Event);
  };
  return EventTag;
};
