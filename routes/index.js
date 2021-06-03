const express = require('express');
const router = express.Router();
const { asyncHandler } = require('./utils')
const { Genre, Game } = require('../db/models');

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  const randomNumber1 = Math.floor(Math.random() * 8);
  const randomNumber2 = Math.floor(Math.random()*(17-9)+ 9);
  const randomNumber3 = Math.floor(Math.random()*(25-17)+ 17);

  const game1 = await Game.findByPk(randomNumber1)
  const game2 = await Game.findByPk(randomNumber2)
  const game3 = await Game.findByPk(randomNumber3)

  const genres = await Genre.findAll({
    where:{ id },
    include: genreName
  })
  res.render('index', {
    title: 'Good Games',
    genres,
    game1,
    game2,
    game3,
  });
}));

module.exports = router;
