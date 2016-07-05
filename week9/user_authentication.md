#User Authentication
##Explain what user authentication is
User authentication is the process of confirming the identity of a user. When a user logs into a web application, he or she is attempting to authenticate.

##Explain why is user authentication important
Privacy in short.


##Use bcrypt to authenticate a user
// Example of route that authenticates
'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt');

router.post('/session', (req, res, next) => {
  knex('users')
    .where('email', req.body.email)
    .first()
    .then((user) => {
      if (!user) {
        return res.sendStatus(401);
      }

      const hashed_password = user.hashed_password;

      bcrypt.compare(req.body.password, hashed_password, (err, isMatch) => {
        if (err) {
          return next(err);
        }

        if (!isMatch) {
          return res.sendStatus(401);
        }

        res.cookie('loggedIn', true);
        res.sendStatus(200);
      });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;

##Explain what a cookie is
The process of user authentication starts when a user provides a password to be stored for future login. Cookies are sent in the response header called Set-Cookie.

Express JS offers an easy way to set the cookie and clear a cookie in the response.
res.cookie(name, value [, options]);
res.clearCookie(name[, options]);

npm install --save cookie-parser - middleware to get the cookie info
Example of using cookie-parser:

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/hello', function(req, res, next) {
  console.log(req.cookies); // object
  if(req.cookies.loggedIn) {
    // user is logged in
  }
});

##Explain what a session is
Broadly speaking, a session refers to an ongoing dialogue between two system. In the case of Express, the systems are the client and the server. When a client makes a request to the server, the server creates a session token to identify the client. The server can then use that session token throughout the ongoing dialogue to keep track of who the client is.

cookie-session is a piece of middleware that is useful for storing, reading and signing sessions and storing them in a cookie. the library modifies the req object providing the following properties:

npm install --save cookie-session

Example:
const cookieSession = require('cookie-session');

app.use(cookieSession({
  name: 'session', // name of cookie to set
  keys: ['some_secure_key']
  // other cookie attributes like maxAge, expires, domain can be set here
}));

##Add routes to authenticate a user


##Create express middleware to detect whether user is authenticated
