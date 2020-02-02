'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {type: DataTypes.TEXT, allowNull: false},
    lastName: {type: DataTypes.TEXT, allowNull: false},
    googleId: DataTypes.TEXT,
    facebookId: DataTypes.TEXT,
    profileImgUrl: DataTypes.TEXT,
    password: DataTypes.TEXT,
    email: {
      type: DataTypes.TEXT, allowNull: false,
    },
    birthday: DataTypes.DATE,
    // TODO(yun-kwak): Split the address into street address,
    // additional street address, city, state, zip code
    address: DataTypes.TEXT,
    phone: DataTypes.TEXT,
    selfDescription: DataTypes.TEXT,
    lastInteractionTime: DataTypes.DATE, // To refresh JWT token
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Review);
    User.hasMany(models.EventParticipant);
  };
  return User;
};
