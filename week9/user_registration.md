#User Registration
##Explain what a cryptographic hash function is.
A cryptographic hash functions is a mathematical algorithm that converts a string of arbitrary length to a string of fixed length. Given the same input string, a cryptographic hash function always produces the same output string.
A cryptographic hash function is designed to be one-way function.
NOTE: There is no encryption involved in a cryptographic hash function because encryption is a two-way process. When you encrypt a string, you expect to reverse the process and get the original string back out again.

* It's quick to compute the digest for any given message.
* It's infeasible to generate a message from its digest, except by trying all possible messages.
* A small change to a message should change the digest so extensively that the new digest appears uncorrelated with the old digest.
* It's infeasible to find two different messages with the same digest.

echo 'Fox' | shasum -a 256

##Explain why a cryptographic hash function is important.
It guarantees that a hack of the system will only result in the hashes being released not the passwords. Passwords are comped against the hash at login. A hash of a hash does not result in the original password.
It provides a layer of separation between the user and the developer that shows due dilligence.

It's important because it keeps passwords safe from being attained during a hack and there is a layer of security between developers and users that reduces employee data theft.

SHA-256 is most useful to verify data integrity rather than password checking because it is SOOOOOOOOOOO fast at hashing. The problem with a really fast hash is that it makes it easier to crack due to the speed of attempts.

##Explain what bcrypt is.
bcrypt is an adaptive password hashing algorithm which uses the Blowfish keying schedule, not a symmetric encryption algorithm.
bcrypt has a work factor that increases the number of rounds of hashing.

##Register a user with a hashed password.
npm install --save bcrypt - to install bycrypt

Example:
'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const knex = require('../knex');

router.post('/users', (req, res, next) => {
  bcrypt.hash(req.body.password, 12, (err, hashed_password) => {
    if (err) {
      return next(err);
    }

    knex('users')
      .insert({
        email: req.body.email,
        hashed_password: hashed_password
      }, '``*``')
      .then((users) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        next(err);
      });
  });
});

module.exports = router;
