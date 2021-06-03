'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique:true,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      genreId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Genres"}
      },
      publisherId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Publishers"}
      },
      platforms: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      imageSrc: {
        allowNull: false,
        type: Sequelize.STRING
      },
      releaseDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Games');
  }
};
