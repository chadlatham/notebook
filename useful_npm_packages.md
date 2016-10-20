#Very useful NPM packages
------------------------- Testing ----------------------------------------------
mocha, chai, supertest - For test-driven development

------------------------- General ----------------------------------------------
nodemon - runs an http server but restarts it upon file save
foreman - similar to nodemon but simulates environment of Heroku

request - Node's http client --- don't use unless needed for manual requests
request-promise - Node's http client with built-in promise compliance

bcrypt - password hashing and comparing the right way
bcrypt-as-promised - promise wrapped bcrypt!!!!!!!!!

knex - library for communicating with database - promisified
pg - the postgres driver for knex
boom - to create errors in 1 lines
humps - to convert to and from camelCase
moments - to convert JS dates into formatted strings
lodash - tons of useful functions - especially for array and object processing.

------------------------- Express ----------------------------------------------
express - HTTP server framework / library
##Middleware
morgan - logging
body-parser - to build body object
cookie-parser - to separate cookie attributes
cookie-session - to work with sessions
dotenv - creates env variables from .env files. For security of api keys or session tokens.
express-validation - validates the following locations: req.body, req.params, req.query, req.header, req.cookies
joi - the validation package for express-validation
--------------------------------------------------------------------------------

// To update Typings for typescript
npm run typings install dt~hammerjs  -- --global --save
