'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    userId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    rating: DataTypes.NUMERIC
  }, {});
  Reviews.associate = function(models) {
    // associations can be defined here
    //review belongs to a user
    Reviews.belongsTo(models.UsersGame, {foreignKey: 'reviewId'})
  };
  return Reviews;
};