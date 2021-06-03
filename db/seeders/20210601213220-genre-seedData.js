"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      */
    return queryInterface.bulkInsert(
      "Genres",
      [{
          genreName: "Open World",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          genreName: "MOBA",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          genreName: "FPS",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          genreName: "RPG",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          genreName: "Simulation",
          createdAt: new Date(),
            updatedAt: new Date()
        },
        {
          genreName: "Action Adventure",
          createdAt: new Date(),
            updatedAt: new Date()
        },
        {
          genreName: "Strategy",
          createdAt: new Date(),
            updatedAt: new Date()
        },
        {
          genreName: "Racing",
          createdAt: new Date(),
            updatedAt: new Date()
        },
        {
          genreName: "MMORPG",
          createdAt: new Date(),
            updatedAt: new Date()
        },
        {
          genreName: "Deck-Builder",
          createdAt: new Date(),
            updatedAt: new Date()
        },
      ], {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      */
    return queryInterface.bulkDelete("Genres", null, {});
  },
};
