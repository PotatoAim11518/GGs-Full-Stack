'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    genreName: DataTypes.STRING
  }, {});
  Genre.associate = function(models) {
    // associations can be defined here
    //genre has many games
    Genre.hasMany(models.Games, { foreignKey: 'genreId'})
  };
  return Genre;
};