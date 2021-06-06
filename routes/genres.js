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

// GET /genres
router.get('/genres', asyncHandler(async (req, res) => {
    const genres = await Genre.findAll();
    res.locals.path = '/genres'
    res.render('genres', {
        genres
    })
}));


router.get('/genres/:id', asyncHandler(async (req, res) => {
    const genreId = parseInt(req.params.id, 10)
    const genre = await Genre.findByPk(genreId)
    const games = await Game.findAll({
        where: {
            genreId
        },
        include: [{
            model: Genre
        }]
    });

    res.render('genre', {
        games,
        genre
    })
}));

module.exports = router;
