#Server-side Validation
##Explain what server-side validation is.
Checking user input on the server side and not trusting the client to do so properly.

##Explain why server-side validation is important.
It's important because HTTP requests may be sent from other sources besides the client side application. Server side validation protects against malformed or malicious requests from accessing your database or back-end.

Possible request locations:
From the browser's URL bar.
From the browser's console.
From another program like HTTPie.

##Validate user input sent to an Express server.
Validating against a template. Usually one validation file per route file.

Install the following packages:
npm install --save express-validation joi

Require in these in the route:
const ev = require('express-validation');
const validations = require('../validations/users');

Adjust the global error handler like so:
if (err.status) {
    return res.status(err.status).send(err);
}

Adjust route to include this ev(validations.post) syntax.

Example: trackify/validation/users.js
'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    email: Joi.string()
      .label('Email')
      .required()
      .email()
      .trim(),
    password: Joi.string()
      .label('Password')
      .required()
      .trim()
      .min(8),
  }
};
