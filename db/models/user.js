'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING.BINARY
  }, {});
  User.associate = function(models) {
    // associations can be defined here

    User.hasMany(models.Review, {foreignKey: "userId"});
    // User.hasMany() userGames
    User.hasMany(models.UsersGame, {foreignKey: "userId"});

    //usersgames
    const columnMapping = {
      through: 'UsersGame',
      otherKey: 'gameId',
      foreignKey: 'userId'
      }
      User.belongsToMany(models.Game, columnMapping);
  };
  return User;
};
