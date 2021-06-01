'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      Example:
      return queryInterface.bulkInsert('Games', [{
        name: 'Astroneer',
        description: "Explore and reshape distant worlds! Astroneer is set during the 25th century Intergalactic Age of Discovery, where Astroneers explore the frontiers of outer space, risking their lives in harsh environments to unearth rare discoveries and unlock the mysteries of the universe.",
        genreId: ,
        publisherId: ,
        platforms: ,
        imageSrc: ,
        releaseDate:
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
