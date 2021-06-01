'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    Example: return queryInterface.bulkInsert('Games', [{
      name: 'Astroneer',
      description: "Explore and reshape distant worlds! Astroneer is set during the 25th century Intergalactic Age of Discovery, where Astroneers explore the frontiers of outer space, risking their lives in harsh environments to unearth rare discoveries and unlock the mysteries of the universe.",
      genreId: ,
      publisherId: ,
      platforms: "PC",
      imageSrc: 'https://store-images.s-microsoft.com/image/apps.17703.13510798887933723.57e43f19-4066-429e-b1a2-caea56e427b4.f555e1de-d116-4ab1-bed1-408a78622ba6',
      releaseDate: "December 16, 2016"
    }, {
      name: 'Grand Theft Auto V',
      description: "Los Santos: a sprawling sun-soaked metropolis full of self-help gurus, starlets, and fading celebrities, once the envy of the Western world, now struggling to stay afloat in an era of economic uncertainty and cheap reality TV. Amidst the turmoil, three very different criminals plot their own chances of survival and success: Franklin, a street hustler looking for real opportunities and serious money; Michael, a professional ex-con whose retirement is a lot less rosy than he hoped it would be; and Trevor, a violent maniac driven by the chance of a cheap high and the next big score. Running out of options, the crew risks everything in a series of daring and dangerous heists that could set them up for life.",
      genreId: ,
      publisherId: ,
      platforms: "PC, Xbox One, Playstation 4, Playstation 5",
      imageSrc: "https://1734811051.rsc.cdn77.org/data/images/full/362176/gta5.jpeg",
      releaseDate: "April 14, 2015"
    }, {
      name: 'Dota 2',
      description: "Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it's their 10th hour of play or 1,000th, there's always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own.",
      genreId: ,
      publisherId: ,
      platforms: "PC",
      imageSrc: "https://esportsobserver.com/wp-content/uploads/2019/05/dota-2-russia.png",
      releaseDate: "July 9, 2013"
    }, {
      name: 'Microsoft Flight Simulator',
      description: "Fly cool planes, and try not to crash! The most exciting thing you'll do all week.",
      genreId: ,
      publisherId: ,
      platforms: "PC",
      imageSrc: "https://store-images.s-microsoft.com/image/apps.20786.14377492558798445.dbb01188-4892-4209-8afe-51244cbcda7e.f4e911ef-c295-4b00-b129-2f84acd134e9",
      releaseDate: "August 17, 2020"
    }, {
      name: 'Call of Duty Modern Warfare 2',
      description: ,
      genreId: ,
      publisherId: ,
      platforms: ,
      imageSrc: ,
      releaseDate:
    }, {
      name: 'Final Fantasy VII: Remake',
      description: ,
      genreId: ,
      publisherId: ,
      platforms: ,
      imageSrc: ,
      releaseDate:
    }, {
      name: 'Animal Crossing: New Horizons',
      description: ,
      genreId: ,
      publisherId: ,
      platforms: ,
      imageSrc: ,
      releaseDate:
    }, {
      name: 'Overwatch',
      description: ,
      genreId: ,
      publisherId: ,
      platforms: ,
      imageSrc: ,
      releaseDate:
    }, {
      name: 'Turnip Boy Commits Tax Evasion',
      description: ,
      genreId: ,
      publisherId: ,
      platforms: ,
      imageSrc: ,
      releaseDate:
    }, {
      name: 'Stardew Valley',
      description: ,
      genreId: ,
      publisherId: ,
      platforms: ,
      imageSrc: ,
      releaseDate:
    }, {
      name: "Sid Meier's Civilization VI",
      description: ,
      genreId: ,
      publisherId: ,
      platforms: ,
      imageSrc: ,
      releaseDate:
    }, {
      name: 'Goldeneye 64',
      description: ,
      genreId: ,
      publisherId: ,
      platforms: ,
      imageSrc: ,
      releaseDate:
    }, {
      name: 'Command & Conquer: Generals',
      description: ,
      genreId: ,
      publisherId: ,
      platforms: ,
      imageSrc: ,
      releaseDate:
    }, {
      name: 'Mario Kart 64',
      description: ,
      genreId: ,
      publisherId: ,
      platforms: ,
      imageSrc: ,
      releaseDate:
    }, {
      name: 'Untitled Goose Game',
      description: ,
      genreId: ,
      publisherId: ,
      platforms: ,
      imageSrc: ,
      releaseDate:
    }, {
      name: 'Age of Empires',
      description: ,
      genreId: ,
      publisherId: ,
      platforms: ,
      imageSrc: ,
      releaseDate:
    }, {
      name: "Conker's Bad Fur Day",
      description: ,
      genreId: ,
      publisherId: ,
      platforms: ,
      imageSrc: ,
      releaseDate:
    }, {
      name: '',
      description: ,
      genreId: ,
      publisherId: ,
      platforms: ,
      imageSrc: ,
      releaseDate:
    }, {
      name: '',
      description: ,
      genreId: ,
      publisherId: ,
      platforms: ,
      imageSrc: ,
      releaseDate:
    }, {
      name: '',
      description: ,
      genreId: ,
      publisherId: ,
      platforms: ,
      imageSrc: ,
      releaseDate:
    }, {
      name: '',
      description: ,
      genreId: ,
      publisherId: ,
      platforms: ,
      imageSrc: ,
      releaseDate:
    }, {
      name: '',
      description: ,
      genreId: ,
      publisherId: ,
      platforms: ,
      imageSrc: ,
      releaseDate:
    }, {
      name: '',
      description: ,
      genreId: ,
      publisherId: ,
      platforms: ,
      imageSrc: ,
      releaseDate:
    }, {
      name: '',
      description: ,
      genreId: ,
      publisherId: ,
      platforms: ,
      imageSrc: ,
      releaseDate:
    }, {
      name: '',
      description: ,
      genreId: ,
      publisherId: ,
      platforms: ,
      imageSrc: ,
      releaseDate:
    }, {
      name: '',
      description: ,
      genreId: ,
      publisherId: ,
      platforms: ,
      imageSrc: ,
      releaseDate:
    }, {
      name: '',
      description: ,
      genreId: ,
      publisherId: ,
      platforms: ,
      imageSrc: ,
      releaseDate:
    }, ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
