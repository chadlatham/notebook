#Heroku setup

Create a production environment on Heroku.

NOTE: Replace USERNAME with the lowercase form of your GitHub username.

heroku apps:create USERNAME-trackify
Inspect the properties of the production environment.

heroku apps:info
Display the version of Node.js on your development environment.

node -v
Specify the exact version of Node.js on the production environment by adding the following property to the package.json file.

"engines": {
  "node": "DEV_VERSION"
}
Create a PostgreSQL database for the production environment.

heroku addons:create heroku-postgresql
Inspect the properties of the production database.

heroku pg:info
Specify the connection URL to the production database server by adding the following property to the package.json file.

production: {
  client: 'pg',
  connection: process.env.DATABASE_URL
}
Automatically migrate the production database after on deployment by adding the following property to the package.json file.

"scripts": {
  "knex": "knex",
  "heroku-postbuild": "knex migrate:latest",
  "nodemon": "nodemon server.js"
}
Install foreman as a local and saved development dependency.

npm install --save-dev foreman
Create a Procfile that'll start the server on the production environment.

echo 'web: node server.js' > Procfile
Make it easy to test foreman on the development environment by adding an nf script to the package.json file.

"scripts": {
  "knex": "knex",
  "heroku-postbuild": "knex migrate:latest",
  "nf": "nf start",
  "nodemon": "nodemon server.js"
},
Test foreman on the development environment.

npm run nf
Add and commit the changes to your repository.

git add .
git commit -m 'Prepare the Heroku'
Merge the feature branch into the master branch.

git checkout master
git merge heroku
Delete the feature branch now that it's merged.

git branch -d heroku
Deploy the project to Heroku.

git push heroku master
Inspect the production environment.

heroku apps:info
Inspect the production database.

heroku pg:info
Seed the production database.

heroku run npm run knex seed:run
Inspect the production database once again.

NOTE: Give Heroku about a minute to update it's records.

heroku pg:info
Log into the production database and verify

heroku pg:psql

add .env to the .gitignore file

The below statements will generate secret keys on the local .env file and set an environment variable in the heroku environment. - Equivalent for production.
`openssl rand -hex 64 | ruby -ne 'puts "SESSION_SECRET=" + $_' > .env
heroku config:set SESSION_SECRET=(openssl rand -hex 64)`

If you add a .env file, you have to restart the server.
