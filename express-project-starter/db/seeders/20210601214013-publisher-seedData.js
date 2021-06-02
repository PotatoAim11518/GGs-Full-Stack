"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      */
    return queryInterface.bulkInsert(
      "People",
      [
        {
          publisherName: "System Era Softworks",
        },
        {
          publisherName: "Rockstar Games",
        },
        {
          publisherName: "Valve",
        },
        {
          publisherName: "Xbox Game Studios",
        },
        {
          publisherName: "Activision",
        },
        {
          publisherName: "Square Enix",
        },
        {
          publisherName: "Blizzard Entertainment",
        },
        {
          publisherName: "Nintendo",
        },
        {
          publisherName: "Grafitti Games",
        },
        {
          publisherName: "ChuckleFish",
        },
        {
          publisherName: "Sid Meier's",
        },
        {
          publisherName: "Electronic Arts (EA)",
        },
        {
          publisherName: "Panic",
        },
        {
          publisherName: "Microsoft",
        },
        {
          publisherName: "Rare",
        },
        {
          publisherName: "Capcom",
        },
        {
          publisherName: "FromSoftware",
        },
        {
          publisherName: "Mega Crit",
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
    return queryInterface.bulkDelete("People", null, {});
  },
};
