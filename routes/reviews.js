const express = require('express');
const { check, validationResult } = require('express-validator');

const { Review, Game, User} = require('../db/models');

const { authUser } = require('../auth');
const { csrfProtection, asyncHandler} = require('./utils');

const router = express.Router();

// GET /games/:gameId/reviews
router.get(
  '/games/:id/reviews',
  asyncHandler(async (req, res) => {
    const gameId = parseInt(req.params.id, 10);
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
router.post(
  '/games/:id/reviews',
  authUser,
  csrfProtection,
  reviewValidators,
  asyncHandler(async (req, res) => {
    const { userId } = req.session.auth;
    console.log('====>SESSION.auth (userId)', req.session.auth)
    console.log('====>req.PARAMS', req.params)
    const gameId = parseInt(req.params.id, 10);
    console.log('====>GAMEID', gameId)
    console.log('====>REQ.BODY', req.body)
    const { content, rating } = req.body;

    const reviews = await Review.findAll({
      where: {
        gameId
      }
    });


    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
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

      if (!currentUserReview) {
        await newReview.save()
        res.redirect(`/games/${gameId}/reviews`)
      } else {
        errors.push('Sorry, you\'ve already written a review for this game.');
      }

    } else {
      errors = validatorErrors.array().map( (error) => error.msg );
    }
    res.render('reviews', {
      reviews,
      gameId,
      csrfToken: req.csrfToken(),
      errors
    })
  }
));

// DELETE /:reviewsId
router.delete(
  '/reviews/:id(\\d+)',
  authUser,
  csrfProtection,
  asyncHandler(async (req, res) => {
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
  }
));
module.exports = router;
