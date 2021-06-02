'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    genreId: DataTypes.INTEGER,
    publisherId: DataTypes.INTEGER,
    platforms: DataTypes.TEXT,
    imagSrc: DataTypes.STRING,
    releaseDate: DataTypes.DATE
  }, {});
  Game.associate = function(models) {
    // associations can be defined here
    //game belongs to a genre
    //game belongs to a publisher
  };
  return Game;
};