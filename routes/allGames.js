const express = require('express');
const { Game } = require('../db/models');
const { asyncHandler } = require('./utils')


const router = express.Router();

// GET /allGames/

router.get('/', asyncHandler(async (req, res) => {
    const games = await Game.findAll();

    res.render('allgames', {
        games
    })
}));


module.exports = router;
