#Express and Knex
##Explain what a RESTful, database-driven HTTP server is.
A RESTful, database-driven HTTP server is exactly what the name implies. It's a server that communicates with a client using a RESTful HTTP API. The sole purpose of the HTTP server is to manage information that's persisted to a database.

##Explain why a RESTful, database-driven HTTP server is useful.
Separation of concerns, principle of least surprise, great way to organize data, relationships, and processes, scalable at each box in the diagram.

##Use Express and Knex to build a RESTful, database-driven HTTP server.

git checkout -b http_server - to create a new branch in git

npm install --save express body-parser morgan - to install express and middleware addons

touch server.js - to create a blank server.js

npm install --save-dev nodemon - to save nodemon locally as dev dependency.

Package json for dev dependency.
"devDependencies": {
    "nodemon": "^1.9.2"
  }

Add a script for nodemon
"scripts": {
  "knex": "knex",
  "heroku-postbuild": "knex migrate:latest",
  "nodemon": "nodemon server.js"
},

Make a knex.js file to export the knex object for use in multiple places.
'use strict';

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile')[environment];
const knex = require('knex')(knexConfig);

module.exports = knex;



##Deploy a RESTful, database-driven HTTP server to Heroku.




client  <-->  webServer  <-->  dbserver  <-->  cluster
jquery  json  node       sql   postgres  write database
html    json  Express    rows            read  table
browser       knex                             table
