const express = require('express');
const { check , validationResult} = require('express-validator')
const db = require('../db/models')
const { csrfProtection, asyncHandler} = require('./utils')
const bcrypt = require('bcryptjs');
const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users/signup', csrfProtection, (req, res, next)=> {
  const user = db.User.build();
  res.render('user-signup',{ title: "New User Sign Up",
  user,
  csrfToken: req.csrfToken(),
  });
});

const signUpUserValidators = [
  check('username')
    .exists({checkFalsy: true})
    .withMessage('Please povide a value for User Name')
    .isLength({max:30})
    .withMessage('User Name must not be longer than 30 characters'),
  check('firstName')
    .exists({checkFalsy: true})
    .withMessage('Please povide a value for First Name')
    .isLength({max:30})
    .withMessage('First Name must not be longer than 30 characters'),
  check('lastName')
    .exists({checkFalsy: true})
    .withMessage('Please povide a value for First Name')
    .isLength({max:30})
    .withMessage('Last Name must not be longer than 30 characters'),
  check('email')
    .exists({checkFalsy: true})
    .withMessage('Please povide a value for Email')
    .isLength({max:100})
    .withMessage('Email must not be longer than 100 characters')
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom((value) =>{
      return db.User.findOne({where: {email: value} })
      .then((user) =>{
        if (user){
          return Promise.reject('The provided Email is already in use by another user account')
        }
      })
    }),
  check('hashedPassword')
      .exists({checkFalsy: true})
      .withMessage('Please povide a value for Password')
      .isLength({max:30})
      .withMessage('Last Name must not be longer than 100 characters')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
      .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (Examp1e!)'),
  check('confirmPassword')
  .exists({checkFalsy : true})
  .withMessage('Pleasse provide a value for Confirm Password')
  .isLength({ max: 30 })
  .withMessage('Confirm Password must not be more than 50 characters long')
  .custom((value, {req}) => {
    if (value !== req.body.hashedPassword){
      throw new Error('Confirm Password does not match Password')
    }
    return true;
  }),

];

router.post('/users/signup', csrfProtection, signUpUserValidators, asyncHandler(async(req, res, next) => {
  const {email,username,firstName,lastName,hashedPassword} = req.body;

  const user = db.User.build({
    email,
    username,
    firstName,
    lastName,
    hashedPassword
  });
  const validationErrors = validationResult(req);
  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();
    res.redirect('/');
  } else {
    const errors = validationErrors.array().map((error)=> error.msg)
    res.render('user-signup',{
      title: "New User Sign Up",
      user,errors,
      csrfToken: req.csrfToken(),
    })
  }

}))


module.exports = router;
