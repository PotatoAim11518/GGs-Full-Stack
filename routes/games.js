const express = require('express');
const { Game } = require('../db/models');
const { asyncHandler } = require('./utils')

const router = express.Router();

// GET /games

router.get('/games', asyncHandler(async (req, res) => {
    const games = await Game.findAll();

    res.render('games', {
        games
    })
}));

module.exports = router;
