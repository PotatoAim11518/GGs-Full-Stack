const { User } = require('./db/models');

const loginUser = (req, res, user) => {
   req.session.auth = {  // sets an auth property on the session object with the id of the passed in user
      userId: user.id
   };
};

const logoutUser = (req, res) => {
   res.locals.authenticated = false;
   delete req.session.auth; // removes the session auth object
   return
}

const restoreUser = async (req, res, next) => {
   if (req.session.auth) {
      const { userId } = req.session.auth; // pulls out the userId from the req

      try {
         const user = await User.findByPk(userId); // looks for the user in our db
         if (user) { // if the user is found...
            res.locals.authenticated = true; // ...set auth to true
            res.locals.user = user; // ...set who the user is with the query object
            next();
         }
      } catch (e) {
         res.locals.authenticated = false; // errors result in no auth
         next(e); //  error passed into next middleware
      }
   } else {
      res.locals.authenticated = false; // sets auth to false if the user isn't logged in (no session auth)
      next();
   }
}

// checks
const authUser = (req, res, next) => {
   if (!res.locals.authenticated) {
      return res.redirect('/users/login')
   }
   return next();
};

module.exports = {
   loginUser,
   logoutUser,
   restoreUser,
   authUser
};
