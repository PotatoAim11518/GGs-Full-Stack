const express = require('express');
const { Review, Game, User} = require('../db/models');
const { authUser } = require('../auth');
const { csrfProtection, asyncHandler} = require('./utils');
const { check, validationResult } = require('express-validator');

const router = express.Router();

// GET /games/:gameId/reviews
router.get('/games/:gameId/reviews', asyncHandler((req, res) => {
  const gameId = parseInt(req.params.gameId, 10);
  const reviews = await Review.findAll({
    include: [ Game, User ],
    where: {
      gameId
    }
  });
  // TO DO: figure out how to use the review objects in a template
  res.render('reviews', { reviews })
}));

const reviewValidators = [
  check('rating')
    .exists({ checkFalsy: true })
    .withMessage('Please rate this game!'),
  check('content')
    .exists({ checkFalsy: true })
    .withMessage('Please write a review before submitting!')
]

// POST /games/:gameId/reviews
router.post('/games/:gameId/reviews', authUser, csrfProtection, requireAuth, reviewValidators,asyncHandler(async (req, res) => {

  const { userId } = req.session.auth;
  const gameId = parseInt(req.params.gameId);
  const { content, rating } = req.body;

  const currentUserReview = await Review.findAll({
    where: {
      gameId,
      userId,
    }
  })

  let errors = [];
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {

    if (!currentUserReview) {
      await Review.create({
        userId,
        gameId,
        content,
        rating
      });
    }
    errors.push('Sorry, you\'ve already written a review for this game.');
  } else {
    errors = validatorErrors.array().map( (error) => error.msg );
  }
  res.render('reviews', {
    csrfToken: req.csrfToken(),
    errors,
  })
}));

// DELETE /:reviewsId
router.delete('/reviews/:id(\\d+)', authUser, csrfProtection, asyncHandler((req, res) => {

  const { userId } = req.session.auth;
  const reviewId = req.params.id;
  const currentUserReview = await Review.findOne({
    where: {
      reviewId,
      userId,
    }
  });
  const { gameId } = currentUserReview
  await currentUserReview.destroy();
  res.redirect(`/games/${gameId}`);
}));
module.exports = router;
