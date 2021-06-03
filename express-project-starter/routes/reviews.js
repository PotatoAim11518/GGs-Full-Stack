const express = require('express');
const { Review, Game } = require('../db/models');
const { requireAuth } = require('../auth');
const { csrfProtection, asyncHandler} = require('./utils');
const { check, validationResult } = require('express-validator');

const router = express.Router();

// GET /games/:gameId/reviews
router.get('/games/:gameId/reviews', asyncHandler((req, res) => {
  const gameId = parseInt(req.params.gameId, 10);
  const reviews = await Review.findAll({
    include: [ Game ],
    where: {
      gameId
    }
  });
  // TO DO: figure out how to use the review objects in a template
  res.render('game', { reviews })
}));

const reviewValidators = [
  check('rating')
    .exists({ checkFalsy: true })
    .withMessage('Please rate this game!')
]

// POST /games/:gameId/reviews
router.post('/games/:gameId/reviews', csrfProtection, requireAuth, reviewValidators,asyncHandler((req, res) => {
  if (req.session.auth) {

    const validatorErrors = validationResult(req);


    const gameId = parseInt(req.params.gameId);
    const { userId } = req.session.auth;
    const { content, rating } = req.body;

    const review = await Review.create({
      userId,
      gameId,
      content,
      rating
    })

  } else {
    res.redirect('/users/login');
  }
}));

// DELETE /:reviewsId
router.delete('/:reviewsId(\\d+)', asyncHandler((req, res) => {

}));
module.exports = router;
