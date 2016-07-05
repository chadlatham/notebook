#Monday - Knex Migrations and Seeds
Migrations - Used to setup the db structure of tables and columns and relationships.
npm run knex migrate:make table_name - to create a migration file

Seeds - Use to insert rows into the migrated tables. Always clear existing rows first.

#Tuesday - The love child of a database and Express - Knex.js
Use JS to talk to a db server. It builds querys and manages schemas. Must use a driver for the particular db.
Full-stack model client - webserver - db_server - db_cluster

#Wednesday - Crypto
Hash function - one way, fixed length result, consistent, salting

bcrypt - use workfactor to adjust the speed of hashing. Slower is better for being less hackable. Workfactor is exponential algorithm.

#Thursday - User authentication
Steps:
1. Check for user in system
2. bcrypt.compare(plaintext, hashed, (err, ismatch))
3. Return 401 for unauthorized
4. Create a session with cookie.

cookies - server sending data to browser
browser - sends cookie back to server
res.cookie - takes an object with cookie properties.
res.clearCookie - clear a given cookie
cookie-parser - middleware
document.cookie - browser access point

session - dialogue between two systems
session is stored as an http only cookie - not accessible in js
session cookie is encrypted
cookie-session - middleware
req.session.key = value
req.session = null - to delete session

To validate access to a route, we check for info in the session.
Create custom middleware called checkAuth (galvanize-bookshelf) that is applied in 2nd param for route to to authenticate.

session used for sensitive information.




#Friday -
