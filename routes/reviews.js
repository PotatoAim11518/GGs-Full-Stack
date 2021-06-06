// /routes/reviews.js
const express = require('express');
const { check, validationResult } = require('express-validator');

const { Review, Game, User, Publisher, Genre } = require('../db/models');

const { authUser } = require('../auth');
const { csrfProtection, asyncHandler} = require('./utils');
const e = require('express');

const router = express.Router();

// GET /games/:id/reviews
router.get('/games/:id/reviews',
csrfProtection,
asyncHandler(async (req, res) => {
  const gameId = parseInt(req.params.id, 10);
  let userId;
  try {
    userId = req.session.auth.userId ? req.session.auth.userId : null;
  } catch {}
  const game = await Game.findByPk(gameId, {
    include: [
      { model: Publisher },
      { model: Genre },
    ]
  });
  const reviews = await Review.findAll({
    include: [
      {
        model: Game,
        attributes: ["name"]
      },
      {
        model: User,
        attributes: ["username"]
      }],
      where: {
        gameId
      }
  });

  const calcAvgReview = (reviews) => {
    let total = 0;
    let count = 0;
    for (const review of reviews) {
      let rating = parseFloat(review.rating)
      total += rating;
      ++count;
    }
    try {
      return (total / count) ? (total / count).toFixed(1) : "Not enough reviews"
    } catch {}
  }

  const avgRating = calcAvgReview(reviews)
  console.log(avgRating)

  res.render('reviews', {
    reviews,
    userId,
    game,
    avgRating,
    csrfToken: req.csrfToken() })
}));

// Validators for writing a review
const reviewValidators = [
  check('rating')
    .exists({ checkFalsy: true })
    .withMessage('Please rate this game!'),
  check('content')
    .exists({ checkFalsy: true })
    .withMessage('Please write a review before submitting!')
]

// POST /games/:id/reviews/add
router.post('/games/:id/reviews/add',
  authUser,
  csrfProtection,
  reviewValidators,
  asyncHandler(async (req, res) => {
    const gameId = parseInt(req.params.id, 10);
    const { userId } = req.session.auth;
    const { content, rating } = req.body;

    const game = await Game.findByPk(gameId, {
      include: [
        { model: Publisher,
          attributes: ["publisherName"]
        },
        { model: Genre,
          attributes: ["genreName"]
        },
      ]
    });
    const reviews = await Review.findAll({
      include: {
        model: User,
        attributes: ["username"]
      },
      where: {
        gameId
      }
    });

    const currentUserReview = await Review.findAll({
      where: {
        gameId,
        userId,
      }
    })

    const newReview = await Review.build({
      userId,
      gameId,
      content,
      rating
    });

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {

      if (!currentUserReview.length) {
        await newReview.save()
        res.redirect(`/games/${game.id}/reviews`)
      } else {
        errors.push('Sorry, you\'ve already written a review for this game.');
      }

    } else {
      errors = validatorErrors.array().map( (error) => error.msg );
    }

    const calcAvgReview = (reviews) => {
      let total = 0;
      let count = 0;
      for (const review of reviews) {
        let rating = parseFloat(review.rating)
        total += rating;
        ++count;
      }
      try {
        return (total / count) ? (total / count).toFixed(1) : "Not enough reviews"
      } catch {}
    }

    const avgRating = calcAvgReview(reviews)

    res.render('reviews', {
      reviews,
      game,
      avgRating,
      errors,
      userId,
      csrfToken: req.csrfToken(),
    })
  }
));

// DELETE /reviews/:id
router.post(
  '/reviews/:id(\\d+)',
  authUser,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const { userId } = req.session.auth;
    const reviewId = req.params.id;
    const currentUserReview = await Review.findOne({
      where: {
        id: reviewId,
        userId,
      }
    });

    const { gameId } = currentUserReview
    await currentUserReview.destroy();
    res.redirect(`/games/${gameId}/reviews`);
  }
));

module.exports = router;
