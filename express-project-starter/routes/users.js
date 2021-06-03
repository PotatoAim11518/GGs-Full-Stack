const express = require('express');
const bcrypt = require('bcryptjs');
const { check , validationResult} = require('express-validator')

const { User } = require('../db/models')

const { loginUser, logoutUser } = require('../auth');
const { csrfProtection, asyncHandler} = require('./utils')

const router = express.Router();


// GET /users/login
router.get('/login', csrfProtection, asyncHandler(async (req, res) => {
  res.render('login', { title: 'Login', csrfToken: req.csrfToken() });
}));

// Login validators
const loginValidators = [
  check('username')
    .exists({ checkFalsy: true} )
    .withMessage('Please enter a username.'),
  check('password')
    .exists({ checkFalsy: true} )
    .withMessage('Please enter a password.'),
]

// POST /users/login
router.post(
  '/login',
  csrfProtection,
  loginValidators,
  asyncHandler(async (req, res) => {
    const { username, password } = req.body; // pulls the input data out of the request
    const user = await User.findOne({ where: { username } }); // tries to find the user in the database

    let errors = [];
    const validatorErrors = validationResult(req);

    // check for validation errors...
    if (validatorErrors.isEmpty()) { // when there are no errors

      if (user !== null) { // if the user was found...

        const passwordMatch = bcrypt.compare(password, user.hashedPassword.toString()); // compare the password provided with the stored hashedPassword in the db tied to the user

        if (passwordMatch) { // ...and if the password matches the hash
          loginUser(req, res, user); // log the user in
          console.log('-----Session object-----', req.session)
          return res.redirect('/');
        }
      }
      errors.push('Login failed for provided username and password.'); // otherwise log an error that the credentials failed
    } else {
      errors = validatorErrors.array().map((error) => error.msg) // push the errors into the errors array
    }

    res.render(
      'login',
      {
        csrfToken: req.csrfToken(),
        title: "Login",
        username,
        errors
      });
}));

// GET /users/signup
router.get('/signup', csrfProtection, asyncHandler(async (req, res, next)=> {
  const user = await User.build({
    email: null,
    username: null,
    firstName: null,
    lastName: null,
    hashedPassword: null
  });
  res.render('user-signup',{ title: "New User Sign Up",
  user,
  csrfToken: req.csrfToken(),
  });
}));


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
      return User.findOne({where: {email: value} })
      .then((user) =>{
        if (user){
          return Promise.reject('The provided Email is already in use by another user account')
        }
      })
    }),
  check('password')
    .exists({checkFalsy: true})
    .withMessage('Please povide a value for Password')
    .isLength({max:30})
    .withMessage('Last Name must not be longer than 100 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (Examp1e!)'),
  check('confirmPassword')
    .exists({checkFalsy : true})
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 30 })
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, {req}) => {
      if (value !== req.body.password){
        throw new Error('Confirm Password does not match Password')
      }
      return true;
    }),
];

// POST /users/signup
router.post('/signup', csrfProtection, signUpUserValidators, asyncHandler(async(req, res, next) => {
  const { email, username, firstName, lastName, password } = req.body;

  const user = User.build({ // builds a user sans password because we need to hash it, but only if everything else passes validation
    username,
    firstName,
    lastName,
    email
  });
  const validationErrors = validationResult(req);
  if (validationErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();
    res.redirect('/');
  } else {
    const errors = validationErrors.array().map((error) => error.msg)
    res.render('user-signup',{
      title: "New User Sign Up",
      user,
      errors,
      csrfToken: req.csrfToken(),
    })
  }
}));

// GET /users/logout
router.get('/logout', (req, res) => {
  // console.log("----------GOT TO PATH----------")
  logoutUser(req, res);
  // console.log("----------GOT PAST USER LOGOUT----------")
  res.redirect('/users/login');
  console.log(req.session)
})

module.exports = router;
