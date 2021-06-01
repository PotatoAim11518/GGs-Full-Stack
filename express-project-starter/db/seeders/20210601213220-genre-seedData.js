"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      */
    return queryInterface.bulkInsert(
      "Genres",
      [
        {
          genreName: "Open World",
        },
        {
          genreName: "MOBA",
        },
        {
          genreName: "FPS",
        },
        {
          genreName: "RPG",
        },
        {
          genreName: "Simulation",
        },
        {
          genreName: "Action Adventure",
        },
        {
          genreName: "Strategy",
        },
        {
          genreName: "Racing",
        },
        {
          genreName: "MMORPG",
        },
        {
          genreName: "Deck-Builder",
        },
      ],
      {}
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
