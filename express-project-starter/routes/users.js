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

router.get('users/signup', csrfProtection, (req, res, next)=> {
  const user = db.User.build();
  res.render('user-signup',{ title: "New User Sign Up",
  user,
  csrfToken: req.csrfToken(),
  });
});

router.post('/users/signup', csrfProtection, asyncHandler(async(req, res, next) => {
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
