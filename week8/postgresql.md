#PostgreSQL
##Explain the difference between data and information.
Data - Just literals
Information is facts about something or someone - properties of an object - data with context.

Exercise - data is just facts, while information provides a context for the facts.

##Explain what an entity is.
An entity is an object that represents a person, place, or thing.
An entity has attributes - the context.

JS Object
{
  name: 'Tom',
  species: 'cat',
  favorite_toy: 'string',
  legs: 4,
  owner: 'Chad'
}

Table
name    species   favorite_toy    legs    owner
'Tom'   'cat'     'string'        4       'Chad'

##Diagram how a server-side web applications manage information.


##Explain what a relational database system is.
It is a grouping of entities defined by a particular set of attributes. The grouping is called a table or relation. The entities are arranged in rows while their attributes are arranged in columns.
Data that is placed in an attribute can only be of the same data type.

##Explain why a relational database system so useful.
Because computers can quickly and efficiently store and retrieve insanely large amounts of data.

They are so useful because they allow storing massive amounts of information without duplication and the ability to quickly retrieve the information in a structured manner.

##Explain what SQL is.
Consists of 3 specific languages.
1. DDL - Data Definition Language for managing tables.
2. DML - Data Manipulation Language for managing rows.
3. DCL - Data Control Language for managing permissions to tables and rows.

SQL Commands MUST!!!!!! end with semicolons.

SQL - Structured Query Language - A standard for interacting with database systems that's composed of 3 main language classification - DDL, DML, and DCL. These 3 languages perform different categories of operations on the database.

##Explain what PostgreSQL is.
A powerful, open source relational database system. Very reliable, strong data integrity. It is cross-platform and has native interfaces for many languages. PostgreSQL is fully ACID compliant (atomicity, consistency, isolation, and durability).

Common data types:
- boolean
- character (char)
- character varying (varchar)
- integer
- numeric
- serial
- text
- timestamp

1. Database server manages a database cluster
2. A database client connects to a database server.
3. A database client sends SQL commands to a database server.
4. A database server sends rows of information back to a database client.
5. A single database cluster often contains multiple databases.
6. A single database often contains multiple tables.
7. A single table often contains multiple rows of information.
8. Rows are automatically persisted to the hard disk by the database server.

PostgreSQL is an open source database system that will manage multiple databases in a cluster. It is highly reliable, scalable, and provides full ACID data contracts.

##Install PostgreSQL using Homebrew.


brew install postgresql
postgres - database server software
psql - database client software
ls -hal /usr/local/var/postgres/ - to view the postgresql install folder
brew tap homebrew/services - to install the homebrew services application (to create services on the machine)
check activity monitor on Mac to view running services
brew services list - to view the list of brew services
brew services start postgresql - to start the service
brew services stop postgresql - to stop the service
brew services --help to get a list of services help


##Start a PostgreSQL server using Homebrew Services.
See above...

##Use the PostgreSQL command line tools to manage databases in a PostgreSQL cluster.
psql -l - to list all the databases in a cluster.
This will list 3 databases by default. The postgres database is a scratch pad to be used when experimenting with databases in application. Don't mess with template0 and template1 because these are used to copy for new databases.

createdb movie_junkies_dev to create a new database
dropdb movie_junkies_dev to destroy a database

##Use the PostgreSQL REPL to manage databases in a PostgreSQL cluster.
curl -fsSL https://git.io/voVWg | sh - command is for download config file created by Ryan to colorize the prompt and allow you to use alt + <- and ->
psql databaseName to launch the REPL

Commands being with \ and end with ;
\l lists the databases inside the REPL

CREATE DATABASE movie_junkies_test;

SQL commands can be split into multiple lines.
Yellow - sign in the prompt means you didn't complete the command - usually ;
\c databaseName to connect to another database

DROP DATABASE movie_junkies_test; - SQL command to delete database - can't be the active connected database

\q to quit the REPL

\? for help - for help on REPL commands

\h SQLC\OMMAND - for help on SQL commands

\dt to display tables

To create a table - example:
CREATE TABLE movies (
  id serial,
  title text,
  duration integer,
  rating varchar(10),
  genre text,
  is_3d boolean NOT NULL,
  released_at timestamp with time zone,
  score numeric(3, 1)
);

\d tableName - to display all the fields, types, and modifiers in a table

Data types numeric: numeric(precision, scale) Precision for datatypes is in the terms of 3,2 where 3 total places and 2 to the right of the decimal point.

When a serial column is declared, an integer column with a sequence generator and a NOT NULL constraint is created instead.

\d movies_id_seq - to display the sequence generator table for a column

Sequence generators will ALWAYS generate a new id rather than an old one that has been deleted.

not null is a constraint to enforce data input (always used in serial columns)
Very good idea to apply not null to booleans as well.

ALTER TABLE movies ADD COLUMN plot text; - to add a plot column to the movies table with a type of text.

ALTER TABLE movies RENAME COLUMN plot TO summary; - to rename a column

ALTER TABLE movies ALTER COLUMN summary TYPE varchar(255); - to change datatype

ALTER TABLE movies ALTER COLUMN summary SET NOT NULL; - to set a modifier

ALTER TABLE movies ALTER COLUMN rating SET DEFAULT 'PG'; - to set default

ALTER TABLE movies DROP COLUMN summary;

ALTER TABLE movies RENAME TO films;

DROP TABLE films;

psql movie_junkies_dev -f migration.sql - to execute the code in migration.sql

##SWITCHING TO DML Commands
          SQL     HTTP
CREATE    INSERT  POST
READ      SELECT  GET
UPDATE    UPDATE  PUT
DESTROY     DELETE

INSERT INTO movies (title, duration, rating, genre, is_3d, released_at, score) VALUES ('Frozen', 102, 'PG', 'Animation', TRUE, '2013-11-27 00:00:00 UTC', 7.6);

INSERT INTO movies (title, duration, rating, genre, is_3d, released_at, score) VALUES ('X-Men: Apocalypse', 144, 'PG-13', 'Action', TRUE, '2016-05-27 00:00:00 UTC', 7.4);
INSERT INTO movies (title, duration, rating, genre, is_3d, released_at, score) VALUES ('The Princess Bride', 98, 'PG', 'Adventure', FALSE, '1987-10-09 00:00:00 UTC', 8.1);
INSERT INTO movies (title, duration, rating, genre, is_3d, released_at, score) VALUES ('Pulp Fiction', 154, 'R', 'Crime', FALSE, '1994-10-14 00:00:00 UTC', 8.9);

SELECT * FROM movies;

SELECT id, title FROM movies;

###WHERE - filters rows based on column and value
SELECT id, title, rating FROM movies WHERE rating = 'PG';

SELECT id, title, rating FROM movies WHERE rating <> 'PG';


SELECT id, title, is_3d FROM movies WHERE is_3d IS TRUE;

### NOT TRUE is not the same as IS FALSE - NOT TRUE will catch Null values.
SELECT id, title, is_3d FROM movies WHERE is_3d IS NULL;
SELECT id, title, is_3d FROM movies WHERE is_3d IS NOT NULL;
SELECT id, title, is_3d FROM movies WHERE is_3d IS NOT TRUE;
SELECT id, title, is_3d FROM movies WHERE is_3d IS FALSE;

SELECT id, title, score FROM movies WHERE score > 8;

SELECT id, title, score FROM movies WHERE score <= 7.5;

### Notice the BETWEEN operator
SELECT id, title, score FROM movies WHERE score BETWEEN 7.5 AND 8;

SELECT id, title, score, rating FROM movies WHERE score > 8 AND rating = 'PG';

SELECT id, title, score, rating FROM movies WHERE score > 8 OR rating = 'PG';

### IN operator allows multiple matches
SELECT id, title, genre FROM movies WHERE genre IN ('Animation', 'Crime');

### LIKE operator is for partial matching
Starts with A
SELECT id, title, genre FROM movies WHERE genre LIKE 'A%';

Ends with e
SELECT id, title, genre FROM movies WHERE genre LIKE '%e';

contains i
SELECT id, title, genre FROM movies WHERE genre LIKE '%i%';

### ILIKE case insensitive partial matching.
SELECT id, title, genre FROM movies WHERE genre ILIKE '%i%';

SELECT id, title, genre FROM movies WHERE genre NOT LIKE '%i%';

### ORDER BY operator for sorting - If you omit an ORDER BY, there is no guarantee which order the records will be returned even though it may appear as though they are ordered by ID.
SELECT id, title, score FROM movies ORDER BY score DESC;

SELECT id, title, score FROM movies ORDER BY score ASC;

### LIMIT operator to return the top number of results.
SELECT id, title, score FROM movies ORDER BY score DESC LIMIT 1;

### Aggregate functions (like reduce, they return a single value);
SELECT COUNT(*) FROM movies;

SELECT COUNT(*) FROM movies;

SELECT MAX(duration) FROM movies;

SELECT MIN(duration) FROM movies;

SELECT SUM(duration) FROM movies;

SELECT AVG(duration) FROM movies;

### UPDATE command to modify a row SET command to set a field value.
UPDATE movies SET score = 9.1 WHERE id = 2;

SELECT id, title, score FROM movies ORDER BY score DESC;

UPDATE movies SET score = 7.4 WHERE id = 2;

UPDATE movies SET score = score + 0.3 WHERE rating = 'R';

SELECT id, title, score FROM movies ORDER BY score DESC;

### Delete command to delete a row.
DELETE FROM movies WHERE id = 1;

SELECT id, title, score FROM movies ORDER BY score DESC;

DELETE FROM movies WHERE score < 8;

SELECT id, title, score FROM movies ORDER BY score DESC;

### To reset the sequence generator
ALTER SEQUENCE movies_id_seq RESTART;

##Use the PostgreSQL REPL to manage tables in a database.

##Use the PostgreSQL REPL to manage rows in a table.
