'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    genreName: DataTypes.STRING
  }, {});
  Genre.associate = function(models) {
    // associations can be defined here
  };
  return Genre;
};