"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      */
    return queryInterface.bulkInsert(
      "Publishers",
      [{
          publisherName: "System Era Softworks",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          publisherName: "Rockstar Games",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          publisherName: "Valve",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          publisherName: "Xbox Game Studios",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          publisherName: "Activision",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          publisherName: "Square Enix",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          publisherName: "Blizzard Entertainment",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          publisherName: "Nintendo",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          publisherName: "Grafitti Games",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          publisherName: "ChuckleFish",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          publisherName: "Sid Meier's",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          publisherName: "Electronic Arts (EA)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          publisherName: "Panic",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          publisherName: "Microsoft",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          publisherName: "Rare",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          publisherName: "Capcom",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          publisherName: "FromSoftware",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          publisherName: "Mega Crit",
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
    return queryInterface.bulkDelete("Publishers", null, {});
  },
};
