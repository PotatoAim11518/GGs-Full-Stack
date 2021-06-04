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


router.get('genre/:id', asyncHandler(async (req, res) => {
                    const genreId = parseInt(req.params.id, 10)
                    const genre = await Genre.findAll({
                        where: {
                            id: gameId
                        },
                        include: [{
                            model: Genre,
                            attributes: ["genreName"]
                        }, {
                            model: Publisher,
                            attributes: ["publisherName"]
                        }]

                    });

module.exports = router;
