const express = require('express');
const { Publisher } = require('../db/models');
const { asyncHandler } = require('./utils')


const router = express.Router();

// GET /allPublishers/

router.get('/', asyncHandler(async (req, res) => {
    const publishers = await Publisher.findAll();

    res.render('allPublishers', {
        publishers
    })
}));


module.exports = router;