const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils')



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
  const {emailAddress,firstName,lastName,hashedPassword} = req.body;

  const user = db.User.build({
    username,
    firstName,
    lastName,
    email,
    hashedPassword
  });

}))


module.exports = router;
