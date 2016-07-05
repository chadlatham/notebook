# Knex Migrations and Seeds
##Explain what the Knex migration system is.
The Knex migration system allows developers to automate the management of database tables in JavaScript. At the heart of the system are migration files. When defined, a migration file moves the database up and down, or forwards and backwards, through a set of changes applied to a single table.
Up corresponds to CREATE TABLE, down DROP TABLE.
One table, one migration file.
Once you complete an ERD, you write a migration file for each entity.
Knex prefixes each migration file with a UTC time stamp.
The schema is basically a container that sits between the DB and the tables.
Indexes and sequence tables live directly in the schema.
Example of migration file:
'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('artists', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.timestamps(true, true);
  })
};

- First true is time stamp with time zone, second is not null/default to now().

exports.down = function(knex) {
  return knex.schema.dropTable('artists');
};

##Explain why the Knex migration system is useful.
Knex migrations are a consistent and convenient way to automate the management of database tables.

First, when the same sequence of Knex migration files are run on an empty database, they result in the creation of the same tables every time. This consistency is useful for reproducing the same tables in multiple databases.
Second, when a mistake in a Knex migration is caught early in the development process, the affected tables can be dropped, effectively rolling the database back to a known good state.

##Use Knex to migrate a PostgreSQL database.
mkdir trackify
cd trackify
npm init
echo '.DS_Store' >> .gitignore
echo 'node_modules' >> .gitignore
echo 'npm-debug.log' >> .gitignore
brew services list
brew services stop postgresql - to stop the global pg instance
brew services list
initdb pg - this initializes a local cluster called pg in the project dir.
ls -hal pg
echo 'pg' >> .gitignore
postgres -D pg - to run the server in a terminal window
createdb trackify_dev
psql -l

touch knexfile.js
    'use strict';

    module.exports = {
      development: {
        client: 'pg',
        connection: 'postgres://localhost/trackify_dev'
      }
    };

./node_modules/.bin/knex migrate:currentVersion - to run the local version of knex with a command migrate:currentVersion - Node modules can come with both modules and executable files as in this case.

Place the following in the package.json file to make the command npm run knex work instead of having to type ./node_modules/bin/knex.
"scripts": {
  "knex": "knex"
},

npm run knex migrate:make artists - to create a migration file.

Sample migration file:
'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('artists', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('artists');
};

npm run knex migrate:latest - to run the up migration.

npm run knex migrate:currentVersion

psql trackify_dev -c '\dt' - to run a repl command from the terminal window.

psql trackify_dev -c '\d knex_migrations' - list the migrations table columns

psql trackify_dev -c 'SELECT * FROM knex_migrations;' - list the mig table data

npm run knex migrate:rollback - used to run the down code in migration files.

npm run knex migrate:currentVersion - used to list the current migration version

psql trackify_dev -c 'SELECT * FROM knex_migrations;' - shows migrations table is empty.

npm run knex migrate:latest - to rerun the migration

npm run knex migrate:currentVersion

psql trackify_dev -c 'SELECT * FROM knex_migrations;'


##Explain what the Knex seed system is.
The Knex seed system allows developers to automate the initialization of table rows in JavaScript. Typically, all rows are removed before new rows are created.

##Explain why the Knex seed system is useful.
Most web applications start with an initial set of table rows. It's useful to be able to seed a database with that set.

##Use Knex to seed a PostgreSQL database.
npm run knex seed:make 1_artists - the 1_ is for the batch number - you make this yourself and can omit if desired.

Sample seed file:
'use strict';

exports.seed = function(knex) {
  return knex('artists').del()
    .then(() => {
      return knex('artists').insert([{
        id: 1,
        name: 'The Beatles'
      }, {
        id: 2,
        name: 'Adele'
      }]);
    });
};

Use id's to enforce valid foreign key references.

npm run knex seed:run - to run the seeding process.

psql trackify_dev -c 'SELECT * FROM artists;' - to view the newly created rows.

npm run knex seed:run

psql trackify_dev -c 'SELECT * FROM artists;' - notice that the id's are ident.

npm run knex seed:make 2_tracks - to create another seed file.

ls -hal seeds

##Migrate and seed a PostgreSQL database on Heroku.

git init

git status

git add .

git commit -m 'Initial commit'

heroku apps:create USERNAME-trackify

heroku apps:info - to view web server info

node -v

"engines": {
  "node": "DEV_VERSION"
}

heroku addons:create heroku-postgresql

heroku pg:info - to view database info

Update the knexfile.js to add a production environment connection.
'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/trackify_dev'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};

Update the package.json to include a heroku-postbuild script for migration.
"scripts": {
  "knex": "knex",
  "heroku-postbuild": "knex migrate:latest"
}

git add .

git commit -m 'Prepare for Heroku'

git push heroku master

heroku apps:info

heroku pg:info

heroku run npm run knex seed:run - Runs the seed file into production

heroku pg:info

heroku pg:psql - Connects to the REPL for the prod database.


##Tricks
npm run knex -- --env test migrate:currentVersion - the first double-dash stops command line flags and passes all remain as command line arguments. The --env flag would pass as flag to npm instead of knex unless you add the first --.

RAW SQL to reset the sequence generator to the maximum id after a seed.
.then(() => {
      return knex.raw(
        "SELECT setval('authors_id_seq', (SELECT MAX(id) FROM authors));"
      );
    })
