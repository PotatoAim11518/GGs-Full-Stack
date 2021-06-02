'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here

    User.hasMany(models.Review, {
      through: 'UsersGames',
      otherKey: 'reviewId',
      foreignKey: 'userId'
    })
    // User.hasMany() userGames
  };
  return User;
};
