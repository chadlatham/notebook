#Knex.js ----- NEVER CONCATENATE OR INTERPOLATE ANYTHING WITH THIS LIBRARY!!!!!!
Knex.js is a third-party JavaScript library that builds SQL commands and sends them to a relational database system like PostgreSQL. In other words, Knex.js allows you to build a Node.js-based PostgreSQL client that communicates with a PostgreSQL server.

Similar to jQuery getting AJAX requests from HTTP server, Knex.js makes AJAX requests to a PostgreSQL server.

To initialize a Node.js app with Knex.js
npm init
npm install --save pg
npm install --save knex
touch knexfile.js
touch index.js
The pg packages is a low level bridge (driver) to do bridge Knex and PostgreSQL

In the knexfile.js file, write and save the following code.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/movie_junkies_dev'
  }
};

The development object is for the connection to the development environement, a production object would be used when deploying to Heroku (production).

Knex is a query builder. It will generate SQL commands for us. The default command is SELECT.

A promise is an object that's used for asynchronous operations. Though at first it looks like just a regular callback, a promise is much more than that. A promise is an object that represents an operation that hasn't completed yet, but will in the future. The main benefit of a promise is its ability to separate the success handling logic from the error handling logic.

A promise starts off in an unresolved states and then either moves to a resolved state or a rejected state. If it resolves then it invokes the done(THEN) method's callback. If it goes to rejected then it invokes the fail method's callback.

Using Knex with the promise form:

knex('movies').then((result) => {
  console.log(result);
  knex.destroy();
})
.catch((err) => {
  console.error(err);
  knex.destroy();
  process.exit(1);
});

Knex(string or sql).then() immediately sends request asynchrouously to the db

Knex protects against SQL injection automatically.
Below is an example of sql injection:
const sql = "SELECT * FROM users WHERE name = '" + userName + "';"
const userName = "'; DROP TABLE users; -- ";
SELECT * FROM users WHERE name = ''; DROP TABLE users; -- ';
Everything past the -- is commented.

DIAGRAM:
CLIENT <--> HTTP SERVER <--> DATABASE SERVER <--> CLUSTER(DB(TABLE,TABLE))
            Node.js          PostgreSQL
            Express.js
            Knex.js
At the heart of Knex is the query builder. The query builder is the API used to build and send SQL queries, such as SELECT, INSERT, UPDATE, DELETE, to a database system.

knex('movies')
  .select('id', 'title', 'rating', 'is_3d', 'score')
  .where('score', '>=', 7.5)
  .where({rating: 'PG', is_3d: true})
  .then((result) => {
    console.log(result);
    knex.destroy(); // Not used for a webserver
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1); // Not used for a webserver
  });

Where method goes between select and then. Then goes at end to return the query. Chain where methods to create an AND or pass an object. .orWhere chained will create an OR between conditions.

Be careful with the results. Numerics come back as strings.

.distint() will return back non duplicate rows

To insert data into a row in a table:
.insert({key: value}, '`*`') The * returns all columns Also, an [key1, key2] will return back just columns that match key.

Update is very similar to insert. Same syntax with * or an array of keys.
.update() - make sure to include a where clause to filter down to 1 id.

del() is the delete method. delete is a keyword in JS, so it is named del.
.del() - no arguments.
