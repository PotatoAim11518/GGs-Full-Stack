const express = require('express');
const { Game, Genre, Publisher } = require('../db/models');
const { asyncHandler } = require('./utils')


const router = express.Router();

// GET /games/:id
// "/:id(\\d+)"
router.get('/:id', asyncHandler(async (req, res) => {
    const gameId = parseInt(req.params.id,10)
    // const game = await Game.findAll({
    //     where: {
    //         id: {gameId}
    //     },
    //     include: [{model: Genre, as: "genre", attributes: ["genreName"]}, {model:Publisher, as: "publisher", attributes: ["publisherName"]}]

    // });
    const game = await Game.findByPk(gameId)
    const gamePOJO = game.toJSON();
    // console.log(gamePOJO)
    // res.send('success')

    const {
        name,
        description,
        genreId,
        publisherId,
        platforms,
        imageSrc,
        releaseDate,
        // Publisher,
        // Genre
    } = game
    res.render('game-home-layout', {
        name,
        description,
        genreId,
        publisherId,
        platforms,
        imageSrc,
        releaseDate,
        // Publisher,
        // Genre
    })
}));


module.exports = router;
