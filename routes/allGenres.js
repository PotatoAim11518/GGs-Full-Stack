const express = require('express');
const {
    Genre
} = require('../db/models');
const {
    asyncHandler
} = require('./utils')


const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
    const genres = await Genre.findAll();

    res.render('allgenres', {
        genres
    })
}));

module.exports = router;
