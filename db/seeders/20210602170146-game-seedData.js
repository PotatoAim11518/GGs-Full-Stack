'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    Example: return queryInterface.bulkInsert('Games', [{
      name: 'Astroneer',
      description: "Explore and reshape distant worlds! Astroneer is set during the 25th century Intergalactic Age of Discovery, where Astroneers explore the frontiers of outer space, risking their lives in harsh environments to unearth rare discoveries and unlock the mysteries of the universe.",
      genreId: 1,
      publisherId: 1,
      platforms: "PC",
      imageSrc: 'https://store-images.s-microsoft.com/image/apps.17703.13510798887933723.57e43f19-4066-429e-b1a2-caea56e427b4.f555e1de-d116-4ab1-bed1-408a78622ba6',
      releaseDate: "December 16, 2016",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Grand Theft Auto: V',
      description: "Los Santos: a sprawling sun-soaked metropolis full of self-help gurus, starlets, and fading celebrities, once the envy of the Western world, now struggling to stay afloat in an era of economic uncertainty and cheap reality TV. Amidst the turmoil, three very different criminals plot their own chances of survival and success: Franklin, a street hustler looking for real opportunities and serious money; Michael, a professional ex-con whose retirement is a lot less rosy than he hoped it would be; and Trevor, a violent maniac driven by the chance of a cheap high and the next big score. Running out of options, the crew risks everything in a series of daring and dangerous heists that could set them up for life.",
      genreId: 1,
      publisherId: 2,
      platforms: "PC, Xbox One, Playstation 4, Playstation 5",
      imageSrc: "https://1734811051.rsc.cdn77.org/data/images/full/362176/gta5.jpeg",
      releaseDate: "April 14, 2015",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: 'Dota 2',
      description: "Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it's their 10th hour of play or 1,000th, there's always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own.",
      genreId: 2,
      publisherId: 3,
      platforms: "PC",
      imageSrc: "https://esportsobserver.com/wp-content/uploads/2019/05/dota-2-russia.png",
      releaseDate: "July 9, 2013",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: 'Microsoft Flight Simulator',
      description: "Fly cool planes, and try not to crash! The most exciting thing you'll do all week.",
      genreId: 1,
      publisherId: 4,
      platforms: "PC",
      imageSrc: "https://store-images.s-microsoft.com/image/apps.20786.14377492558798445.dbb01188-4892-4209-8afe-51244cbcda7e.f4e911ef-c295-4b00-b129-2f84acd134e9",
      releaseDate: "August 17, 2020",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: 'Call of Duty Modern Warfare 2',
      description: "Channel your inner warmonger and pwn noobs across the world!  Don't be a camper.",
      genreId: 3,
      publisherId: 5,
      platforms: "PlayStation 3, Xbox 360, PC, Mac OS",
      imageSrc: "https://image.api.playstation.com/vulcan/img/rnd/202008/1301/raryqz0xAsk3HutslehRAW4A.png",
      releaseDate: "November 10, 2009",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: 'Final Fantasy VII: Remake',
      description: "Final Fantasy VII Remake is a 2020 action role-playing game developed and published by Square Enix. It is the first in a planned series of games remaking the 1997 PlayStation game Final Fantasy VII. Set in the dystopian cyberpunk metropolis of Midgar, players control mercenary Cloud Strife.",
      genreId: 4,
      publisherId: 6,
      platforms: "Playstation 4",
      imageSrc: "https://image.api.playstation.com/vulcan/img/cfn/11307-dNapclgq_VqNtQ98Xp_LxovvAdjd5AknZhd_-k2Cckq9FPtKDXAHk-ODCfvDKChH6hkEO0VLtj7Vk4E-Z8G707oe0N.png",
      releaseDate: "April 10, 2020",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: 'Animal Crossing: New Horizons',
      description: "Animal Crossing: New Horizons is a 2020 life simulation game developed and published by Nintendo for the Nintendo Switch; it is the fifth main game in the Animal Crossing series.",
      genreId: 5,
      publisherId: 8,
      platforms: "Nintendo Switch",
      imageSrc: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5723/5723316_sd.jpg",
      releaseDate: "March 20, 2020",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: 'Overwatch',
      description: "Overwatch is a 2016 team-based multiplayer first-person shooter developed and published by Blizzard Entertainment. Described as a 'hero shooter', Overwatch assigns players into two teams of six, with each player selecting from a large roster of characters, known as 'heroes', with unique abilities.",
      genreId: 3,
      publisherId: 7,
      platforms: "PC, Playstation 4, Xbox One, Nintendo Switch",
      imageSrc: "https://images-na.ssl-images-amazon.com/images/I/91lid74MqmL.jpg",
      releaseDate: "May 3, 2016",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: 'Turnip Boy Commits Tax Evasion',
      description: "Play as an adorable yet trouble-making turnip. Avoid paying taxes, solve plantastic puzzles, harvest crops and battle massive beasts all in a journey to tear down a corrupt vegetable government!",
      genreId: 6,
      publisherId: 9,
      platforms: "Nintendo Switch, PC",
      imageSrc: "https://www.nintendo.com//content/dam/noa/en_US/games/switch/t/turnip-boy-commits-tax-evasion-switch/turnip-boy-commits-tax-evasion-switch-hero.jpg",
      releaseDate: "October 7, 2020",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: 'Stardew Valley',
      description: "Stardew Valley is a simulation role-playing video game developed by Eric 'ConcernedApe' Barone. It was released for Microsoft Windows in February 2016, and later for macOS, Linux, PlayStation 4, Xbox One, Nintendo Switch, PlayStation Vita, iOS, and Android.",
      genreId: 4,
      publisherId: 10,
      platforms: "PC, Playstation 4, Nintendo Switch, Android, iOS",
      imageSrc: "https://image.api.playstation.com/cdn/UP2456/CUSA06840_00/0WuZecPtRr7aEsQPv2nJqiPa2ZvDOpYm.png",
      releaseDate: "February 26, 2016",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: "Sid Meier's Civilization VI",
      description: "Sid Meier's Civilization VI is a turn-based strategy 4X video game developed by Firaxis Games, published by 2K Games, and distributed by Take-Two Interactive.",
      genreId: 7,
      publisherId: 11,
      platforms: "MacOS, PC",
      imageSrc: "https://s1.gaming-cdn.com/images/products/1437/orig/civilization-vi-cover.jpg",
      releaseDate: "October 21, 2016",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: 'Goldeneye 64',
      description: "GoldenEye 007 is a 1997 first-person shooter developed by Rare and published by Nintendo for the Nintendo 64. Play as your intrepid hero, James Bond, Agent 007, as he covertly fights the Ruski's in an epic battle for the safety of Western Civilization.",
      genreId: 3,
      publisherId: 8,
      platforms: "Nintendo 64",
      imageSrc: "https://i.redd.it/dya8d5hpr0i51.jpg",
      releaseDate: "August 25, 1997",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: 'Command & Conquer: Generals',
      description: "Command & Conquer: Generals is a real-time strategy video game and the seventh installment in the Command & Conquer series. It was released for Microsoft Windows and Mac OS in 2003 and 2004.",
      genreId: 7,
      publisherId: 12,
      platforms: "MacOS, PC",
      imageSrc: "https://i.redd.it/ai67e1oexyo11.jpg",
      releaseDate: "February 10, 2003",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: 'Mario Kart 64',
      description: "Mario Kart 64 is a 1996 kart racing video game developed and published by Nintendo for the Nintendo 64. It is the successor to Super Mario Kart for the Super Nintendo Entertainment System, and the second game in the Mario Kart series.",
      genreId: 8,
      publisherId: 8,
      platforms: "Nintendo 64",
      imageSrc: "https://i.redd.it/iy90tgs5l0i51.jpg",
      releaseDate: "December 14, 1996",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: 'Untitled Goose Game',
      description: "You're a goose, doing goose stuff. Wanna irritate the townspeople of a rural English villiage? This game is for you!",
      genreId: 4,
      publisherId: 13,
      platforms: "MacOS, PC",
      imageSrc: "https://store-images.s-microsoft.com/image/apps.25596.13856628096419252.2543d50f-bd53-4ec1-90dd-d76914de6757.df5a7952-3ea7-44b8-a791-0c3884d9b256",
      releaseDate: "September 23, 2020",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: 'Age of Empires',
      description: "In Age of Empires II: HD Edition, fans of the original game and new players alike will fall in love with the classic Age of Empires II experience. Explore all the original single player campaigns from both Age of Kings and The Conquerors expansion, choose from 18 civilizations spanning over a thousand years of history, and head online to challenge other Steam players in your quest for world domination throughout the ages.",
      genreId: 7,
      publisherId: 14,
      platforms: "MacOS, PC",
      imageSrc: "https://s1.gaming-cdn.com/images/products/2148/orig/age-of-empires-definitive-edition-windows-10-cover.jpg",
      releaseDate: "October 15, 1997",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: "Conker's Bad Fur Day",
      description: "Conker's Bad Fur Day is a 2001 platform game developed and published by Rare for the Nintendo 64. The game follows Conker, a greedy, hard-drinking red squirrel who must return home to his girlfriend.",
      genreId: 4,
      publisherId: 15,
      platforms: "Nintendo 64",
      imageSrc: "https://images-na.ssl-images-amazon.com/images/I/51NNW23M3NL._AC_.jpg",
      releaseDate: "March 5, 2001",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: "Grand Theft Auto: III",
      description: "Do crimes, get money, and don't die or get popped by the 5-0.",
      genreId: 4,
      publisherId: 2,
      platforms: "PlayStation 2",
      imageSrc: "https://i1.sndcdn.com/artworks-000446438355-qwgqs1-t500x500.jpg",
      releaseDate: "October 22, 2001",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: 'Pokemon Red',
      description: "Pokémon Red Version and Pokémon Blue Version are 1996 role-playing video games developed by Game Freak and published by Nintendo for the Game Boy. They are the first installments of the Pokémon video game series.",
      genreId: 4,
      publisherId: 8,
      platforms: "GameBoy Color",
      imageSrc: "https://cdn2.bulbagarden.net/upload/8/80/Red_EN_boxart.png",
      releaseDate: "September 28, 1998",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: 'World of Warcraft',
      description: "World of Warcraft is a massively multiplayer online role-playing game released in 2004 by Blizzard Entertainment.",
      genreId: 9,
      publisherId: 7,
      platforms: "PC",
      imageSrc: "https://images-na.ssl-images-amazon.com/images/I/510Xjw4h8kS._AC_.jpg",
      releaseDate: "November 23, 2004",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: 'Monster Hunter Rise',
      description: "Set in the ninja-inspired land of Kamura Village, explore lush ecosystems and battle fearsome monsters to become the ultimate hunter. It’s been half a century since the last calamity struck, but a terrifying new monster has reared its head and threatens to plunge the land into chaos once again. Hunt solo or in a party with friends to earn rewards that you can use to craft a huge variety of weapons and armor.",
      genreId: 4,
      publisherId: 16,
      platforms: "Nintendo Switch",
      imageSrc: "https://m.media-amazon.com/images/I/810s0mZFKcL._SS500_.jpg",
      releaseDate: "March 26, 2021",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: 'Bloodborne',
      description: "Bloodborne is an action role-playing game developed by FromSoftware and published by Sony Computer Entertainment, which released for the PlayStation 4 in March 2015.",
      genreId: 4,
      publisherId: 17,
      platforms: "Nintendo Switch",
      imageSrc: "https://f4.bcbits.com/img/a4218237573_10.jpg",
      releaseDate: "March 24, 2015",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: 'Red Dead Redemption: II',
      description: "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and is a prequel to the 2010 game Red Dead Redemption.",
      genreId: 1,
      publisherId: 2,
      platforms: "Playstation 4, Xbox One, Xbox Series X, Playstation 5, PC, Stadia",
      imageSrc: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08519_00/12/i_3da1cf7c41dc7652f9b639e1680d96436773658668c7dc3930c441291095713b/i/icon0.png",
      releaseDate: "October 26, 2018",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: 'The Legend of Zelda: Breath of the Wild',
      description: "STEP INTO A WORLD OF ADVENTURE! Forget everything you know about The Legend of Zelda games. Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule in this stunning Open-Air Adventure.",
      genreId: 1,
      publisherId: 8,
      platforms: "Nintendo Switch",
      imageSrc: "https://images.saymedia-content.com/.image/t_share/MTc0MzY1MzUwMzM3NDU1NzUw/most-annoying-monsters-breath-of-the-wild.png",
      releaseDate: "March 3, 2017",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: 'Slay the Spire',
      description: "We fused card games and roguelikes together to make the best single player deckbuilder we could. Craft a unique deck, encounter bizarre creatures, discover relics of immense power, and Slay the Spire!",
      genreId: 10,
      publisherId: 18,
      platforms: "PC",
      imageSrc: "https://s2.gaming-cdn.com/images/products/2434/orig/slay-the-spire-cover.jpg",
      releaseDate: "November 14, 2017",
        createdAt: new Date(),
        updatedAt: new Date()
    }, ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {});
  }
};
