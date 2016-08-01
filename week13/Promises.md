#Promise review
A result of the instructors learning from presenting promises in Q2:
Library called boom and humps - error messages and camel case.
Humps is for converting from snake to camel case.
const { camelizeKeys, decamelizeKeys } = require('humps');
Always use camel when sending across API in JSON.
Boom creates errors for you.
const boom = require('boom');
throw boom.create(404, 'Not found');
When inside a .then block, throw errors.
If outside a .then block, then return next(err);
