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

router.get('/:id', asyncHandler(async (req, res) => {
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

    res.render('game-home-layout', {
        game
    })
}));


module.exports = router;
