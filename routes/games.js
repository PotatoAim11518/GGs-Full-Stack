const express = require('express');
const {
    Game,
    Genre,
    Publisher
} = require('../db/models');
const {
    asyncHandler
} = require('./utils')


const router = express.Router();

// GET /games/:id
// "/:id(\\d+)"
router.get('/:id', asyncHandler(async (req, res) => {
    const gameId = parseInt(req.params.id, 10)
    const game = await Game.findOne({
        where: {
            id: gameId
        },
        include: [{
            model: Genre,
            attributes: ["genreName"]
        }, {
            model: Publisher,
            attributes: ["publisherName"]
        }]

    });

    res.render('game-home-layout', {
        game
    })
}));


module.exports = router;
