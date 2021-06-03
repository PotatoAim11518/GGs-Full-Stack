'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    rating: DataTypes.NUMERIC
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    //review belongs to a user
    Review.belongsTo(models.User, {foreignKey: 'userId'});
    Review.belongsTo(models.Game, {foreignKey: 'gameId'});
  };
  return Review;
};
