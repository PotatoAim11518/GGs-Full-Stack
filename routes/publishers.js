const express = require('express');
const {
    Game,
    Publisher
} = require('../db/models');
const {
    asyncHandler
} = require('./utils')


const router = express.Router();

// GET /publishers
router.get('/publishers', asyncHandler(async (req, res) => {
    const publishers = await Publisher.findAll();
    res.locals.path = '/publishers'
    res.render('publishers', {
        publishers
    })
}));


router.get('/publishers/:id', asyncHandler(async (req, res) => {
    const publisherId = parseInt(req.params.id, 10)
    const publisher = await Publisher.findByPk(publisherId)
    const games = await Game.findAll({
        where: {
            publisherId
        },
        include: [{
            model: Publisher
        }]
    });

    res.render('publisher', {
        games,
        publisher
    })
}));

module.exports = router;
