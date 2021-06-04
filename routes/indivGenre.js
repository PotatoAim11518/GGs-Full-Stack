const express = require('express');
const {
    Game,
    Genre
} = require('../db/models');
const {
    asyncHandler
} = require('./utils')


const router = express.Router();

router.get('/:id', asyncHandler(async (req, res) => {
    const genreId = parseInt(req.params.id, 10)
    const games = await Game.findAll({
        where: {
            genreId: genreId
        },
        include: [{
            model: Genre,
            // attributes: ["id" "genreName"]
        }]

    });

    res.render('indiv-genre', {
        games, genreId
    })
}));


module.exports = router;
