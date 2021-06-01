const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const { User } = require('../db/models');
const router = express.Router();
const { csrfProtection , asyncHandler } = require('./utils');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Login validators
const loginValidators = [
  check('username')
    .exists({ checkFalsy: true} )
    .withMessage('Please enter a username.'),
  check('password')
    .exists({ checkFalsy: true} )
    .withMessage('Please enter a password.'),
]

// GET /users/login
router.get('/login', csrfProtection, loginValidators, asyncHandler( (res, req) => {
  res.render('login', { title: 'Login', csrfToken = req.csrfToken() });
}));

// POST /users/login
router.post('/login', csrfProtection, loginValidators, asyncHandler( (res, req) => {
  const { username, password } = req.body; // pulls the input data out of the request
  const user = await User.findOne({ where: { username } }); // tries to find the user in the database

  let errors = [];
  const validatorErrors = validationResult(req);

  // check for validation errors...
  if (!validatorErrors.isEmpty()) {

    if (user) { // if the user was found...

      const passwordMatch = bcrypt.compare(password, user.hashedPassword); // compare the password provided with the stored hashedPassword in the db tied to the user

      if (passwordMatch) { // ...and if the password matches the hash
        // log the user in
        return res.redirect('/')
      }
    }
    errors.push('Login failed for provided username and password.'); // otherwise log an error that the credentials failed
  } else {
    errors = validatorErrors.map((error) => error.msg) // push the errors into the errors array
  }

  res.render(
    'login',
    {
      csrfToken: req.csrfToken(),
      title: "Login",
      username,
      errors,
    });
}));


module.exports = router;
