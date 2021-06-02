'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsersGame = sequelize.define('UsersGame', {
    gameId: DataTypes.INTEGER,
    reviewId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  UsersGame.associate = function(models) {
    // associations can be defined here
  };
  return UsersGame;
};