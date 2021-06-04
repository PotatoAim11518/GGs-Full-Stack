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


router.get('games/genreId/:id', asyncHandler(async (req, res) => {
    const genreId = parseInt(req.params.id, 10)
    const genre = await Genre.findAll({
        where: {
            id
        },
        include: [{
            model: Games,
            attributes: ["name", "imageSrc"]
        }]

    });

    res.render('all-genres', {
        genre
    })
}));

module.exports = router;
