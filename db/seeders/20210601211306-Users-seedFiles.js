"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "DemoUser",
          firstName: "Demo",
          lastName: "User",
          email: "user@demo.com",
          hashedPassword: "password",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "SKTT1Faker",
          firstName: "Lee",
          lastName: "Sang-hyeok",
          email: "faker@SKTT1.com",
          hashedPassword: "LCSChampion",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "ForrestGump",
          firstName: "Tom",
          lastName: "Hanks",
          email: "thanks@welcome.com",
          hashedPassword: "$2a$10$2a6I7i74zv9mCS9rZEexTObpH4GszRxh3d3PVy5f0wzSrrDmvTiiK",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "HashBrowns",
          firstName: "Hash",
          lastName: "Browns",
          email: "hbrowns@breakfast.com",
          hashedPassword: "$2a$10$JJa4ykGEQLbSNXVI5GxHM.qi5E//qlBvMMW26M3SmbZTREDcst2Vm",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
