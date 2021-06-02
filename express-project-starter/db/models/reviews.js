'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    userId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    rating: DataTypes.NUMERIC
  }, {});
  Reviews.associate = function(models) {
    // associations can be defined here
    //review belongs to a user
    Review.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Reviews;
};