const express = require('express');
const {
    Game,
    Publisher
} = require('../db/models');
const {
    asyncHandler
} = require('./utils')
const router = express.Router();
router.get('/:id', asyncHandler(async (req, res) => {
    const publisherId = parseInt(req.params.id, 10)
    const games = await Game.findAll({
        where: {
            publisherId: publisherId
        },
        include: [{
            model: Publisher,
        }]
    });
    res.render('publisher', {
        games, publisherId
    })
}));
module.exports = router;