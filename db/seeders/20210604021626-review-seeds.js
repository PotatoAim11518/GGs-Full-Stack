'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [
        {
          userId: 3,
          gameId: 7,
          content: "Made lifelong friends.",
          rating: 4.6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          gameId: 3,
          content: "Actually the worst game I've ever played.",
          rating: 0.0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          gameId: 4,
          content: "Planes go brrrrrrrrrrr.",
          rating: 4.0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          gameId: 24,
          content: "Is this legend in League of Legends?",
          rating: 3.7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          gameId: 15,
          content: "HONK.",
          rating: 4.2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          gameId: 25,
          content: "The art looks like a potato but the gameplay is top-tier.",
          rating: 4.5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          gameId: 5,
          content: "This game gave me PTSD",
          rating: 2.0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          gameId: 6,
          content: "If I could go pro in this game I would.",
          rating: 5.0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          gameId: 10,
          content: "This game let me live out my life-long dream of becoming a millionaire cash-crop farmer and marrying everyone in town.",
          rating: 4.9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
