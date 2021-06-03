const express = require('express');
const {
    Game
} = require('../db/models');


const router = express.Router();

// GET /games/:id
router.get('/games/:id', asyncHandler(async (req, res) => {
    const gameId = parseInt(req.params.id)
    const game = await Game.findByPk(gameId, {
        includes: Publisher, Genre
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
    res.render('game-home-layout', {name, description, genreId, publisherId, platforms, imageSrc, releaseDate})
}));


module.exports = router;
