const express = require('express');
const {
    Game,
    Genre
} = require('../db/models');
const {
    asyncHandler
} = require('./utils')


const router = express.Router();

router.get('/genre/:id', asyncHandler(async (req, res) => {
    const genreId = parseInt(req.params.id, 10)
    const genre = await Genre.findOne({
        where: {
            id: genreId
        },
        include: [{
            model: Game,
            attributes: ["name", "imageSrc"]
        }]

    });

    res.render('indiv-genre', {
        genre
    })
}));


module.exports = router;
