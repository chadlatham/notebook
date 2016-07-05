#Week 8 Review
##Monday - PostgreSQL
Data vs. information: Info has context.
Entities are objects (rows) that represent a person, place, or thing. They contain attributes.
Server-side web app
Database-driven web app
Relational databases store massive amounts of information efficiently and are based on the relational model.
Without a database, information is much harder to persist.
Relational model - an approach to managing data based on relationships among tables.
All values in a column must be of the same data type.
SQL - Structured Query Language - It is declarative. DDL, DML, DCL - Define, manipulate, control.
PostgreSQL runs as a service on a machine. This is the database server
psql is the main client for postgres
psql can be an interpreter or a REPL. psql databasename to use as REPL. psql databasename -f filename.ext to run as an interpreter.
createdb and dropdb are 2 alternate clients that only perform those limited operations.
Watch the prompt in the REPL for incomplete SQL statements.
A cluster (in postgres land) is just a collection of databases. It's a directory on the hard drive.
When working in projects, install a cluster inside the project and start a database instance inside the project. This is a RYANSOBOL best practice.

##Tuesday - More PostgreSQL
CREATE TABLE
DROP TABLE
ALTER TABLE
data types - Start project loose and look to limit as the project goes on.
serial type - adds NOT NULL, SEQUENCE GENERATOR, and INTEGER.
Sequence generator - table that is built automatically used to generate uids.
Migration - a file that contains commands that you use to recreate a table from scratch. - Used to give a new developer the dev environment. (table struct)
Seed - Insert data into the fresh migration. (rows)

SELECT - DISTINCT, FROM, INNERJOIN, WHERE, ORDERBY, LIMIT, OFFSET, COUNT, MAX, MIN, SUM, AVG, SET, VALUES, INTO, =, <>, ILIKE, LIKE % NOT, TRUE, FALSE, IS, NULL, BETWEEN, IF EXISTS,
INSERT
UPDATE
DELETE

##Wednesday - Entity relationships
cardinality - Number of relationships between various entities: 1:1, 1:many, many:many
Represent these with ERD - Entity Relationship Diagrams - crows feet
Discuss ERD's with your team to get opinions.

ALWAYS create a primary key - even if it's not needed for future possible cases.
Tables names should be plural.
primary keys should be labeled id
foreign keys should be movie_id (singular form of table named affixed to _ id)
add not null to foreign keys (typically) but do not make them unique.
ON DELETE CASCADE/NULL
ON UPDATE CASCADE/NULL
\x auto in .psqlrc to set the repl to display in extended mode
AS to rename columns

##Thursday - knex.js
Knex turns your webserver into a dbserver client (pg in this case).
It generates and sends SQL commands
npm install knex pg (to get both the library and driver)
create a knexfile.js to establish connection
require knex + configure
.toString() to just generate the sql
.next((result) => ) to send the sql
.catch((err) => ) to catch errors
Promises are objects that keeps track of state - starts as pending, then resolve, or reject.
Promises can be chained and pass state from one to the next.
knex must call .destroy() after promise.
knex opens 2 connections by default and grows up to 10 (or more if you config)
.where()
.select()
.insert()
.del()
.update()
.where*()
.innerJoin()
.orderBy()
.limit()
.offset()
.count()
.max()
.min()
.sum()
.avg()
.increment()
.decrement()
.first()
.pluck()
SQL Injection attack - inserts SQL commands into a user input field.
knex escapes these by default - but only if you don't concatenate ANYTHING!!!!!!
