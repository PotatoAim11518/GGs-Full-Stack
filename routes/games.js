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
router.get('/games/:id', asyncHandler(async (req, res) => {
    const gameId = Number.parseInt(req.params.id)
    const game = await Game.findByPk(gameId, {
        includes: Publisher,
        Genre
    })

    const {
        name,
        description,
        genreId,
        publisherId,
        platforms,
        imageSrc,
        releaseDate
    } = game
    res.render('game-home-layout', {
        name,
        description,
        genreId,
        publisherId,
        platforms,
        imageSrc,
        releaseDate
    })
}));


module.exports = router;
