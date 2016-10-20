#Heroku setup
##Start with a clean master branch

##Create and check out a branch called heroku
git co -b heroku

##Create a production environment on Heroku.
heroku apps:create <githubusername>-<appname>

##Inspect the properties of the production environment.
heroku apps:info <githubusername>-<appname>

<!-- ##Add a git remote: Skip! - Heroku has automated this step
git remote add heroku https://git.heroku.com/chadlatham-trackify.git
git remote -v to verify remote status -->

##Display the version of Node.js on your development environment.
node -v

##Specify exact version of Node.js prod env updating package.json.
"engines": {
  "node": "DEV_VERSION"
}

##Create a PostgreSQL database for the production environment.
<!-- heroku addons:create heroku-postgresql --app <githubusername>-<appname> -->
heroku addons:create heroku-postgresql

##Inspect the properties of the production database.
heroku pg:info

##URL to the production database by creating knexfile.js
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/dbname_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/dbname_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};

##Automatically migrate the prod db after deploy by updating package.json
###Choose 1 heroku-postbuild configuration
"scripts": {
  "knex": "knex",
  "foreman": "foreman",
  "heroku-postbuild": "knex migrate:latest",

  "heroku-postbuild": "knex migrate:latest; brunch build --production", !!!!!Brunch Config

  "heroku-postbuild": "knex migrate:latest; rimraf dist && webpack --config config/webpack.prod.js --progress --profile --bail", !!!!!Webpack config

  "nodemon": "nodemon server.js" - Non build tool config!
}

##Install foreman as a dev dependency.
npm i -D foreman

##Create a Procfile that'll start the server on the prod/foreman environment.
echo 'web: node server.js' > Procfile

##Create a .env file for foreman to run properly.
touch .env

##Add nf script to package.json.
"scripts": {
  "nf": "nf start"
},

##Use foreman to test the production environment.
npm run nf

##Add and commit the changes to your repository.
git add .
git c 'Prepare heroku deploy'

##Merge the feature branch into the master branch.
git co master
git merge heroku

##Delete the feature branch now that it's merged.
git br -d heroku

##Deploy the project to Heroku.
git push heroku master

##Inspect the production environment.
heroku apps:info

##Inspect the production database.
heroku pg:info

##Seed the production database.
heroku run npm run knex seed:run

##Inspect the production database once again.
NOTE: Give Heroku about a minute to update it's records.
heroku pg:info

##Log into the production database and verify
heroku pg:psql

##Ignore the .env file
add .env to the .gitignore file

##The below statements will generate secret keys on the local .env file and set an environment variable in the heroku environment. - Equivalent for production.
<!-- openssl rand -hex 64 | ruby -ne 'puts "JWT_SECRET=" + $_' > .env -->

<!-- heroku config:set JWT_SECRET=(openssl rand -hex 64) -->

##If you add a .env file, you have to restart the server.

##******** If you have problems pushing, you can do:
git push --force heroku master

##******** To connect the remote:
heroku git:remote -a concertclue
