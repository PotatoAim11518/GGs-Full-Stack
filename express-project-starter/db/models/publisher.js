'use strict';
module.exports = (sequelize, DataTypes) => {
  const Publisher = sequelize.define('Publisher', {
    publisherName: DataTypes.STRING
  }, {});
  Publisher.associate = function(models) {
    // associations can be defined here
    //publisher has many games
    Publisher.hasMany(models.Game, { foreignKey: 'publisherId'})
  };
  return Publisher;
};