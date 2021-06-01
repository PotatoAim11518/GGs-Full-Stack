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

// GET /users/login
router.get('/login', csrfProtection, asyncHandler( (res, req) => {
  res.render('login', { title: 'Login', csrfToken = req.csrfToken() });
}));

// POST /users/login
router.post('/login', csrfProtection, asyncHandler( (res, req) => {
  const { username, password } = req.body; // pulls the input data out of the request
  const user = await User.findOne({ where: { username } }); // tries to find the user in the database

  // let errors = [];
  const validatorErrors = validationResult(req);

  // check for validation errors...
  if (!validatorErrors.isEmpty()) {

    if (user) { // if the user was found...

      const passwordMatch = bcrypt.compare(password, user.hashedPassword); // compare the password provided with the stored hashedPassword in the db tied to the user

      if (passwordMatch) {
        // log the user in
        return res.redirect('/')
      }
    }

  } else {
    // render the errors
  }


  res.render('login', { title: 'Login',

  })
}));


module.exports = router;
