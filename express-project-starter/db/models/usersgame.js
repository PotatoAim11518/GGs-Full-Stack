'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsersGame = sequelize.define('UsersGame', {
    gameId: DataTypes.INTEGER,
    reviewId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    playing: DataTypes.BOOLEAN,
    played: DataTypes.BOOLEAN,
    wantToPlay: DataTypes.BOOLEAN
  }, {});
  UsersGame.associate = function(models) {
    // associations can be defined here
  };
  return UsersGame;
};