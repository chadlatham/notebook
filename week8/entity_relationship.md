#Entity Relationship
An entity relationship diagram (ER diagram) is a drawing that represents people, places, or things that are inter-related.
Relationship cardinality is just a fancy term that means the number of related entities in a relationship.
3 types of cardinality: 1:1, 1:many, many:many
1:1 - one entity in A relates to one entity in B
1:many - one entity in A relates to many entities in B
many:many - many entities in A relate to many entities in B

Associative entities (join table) that sits in the middle of many to many relationships. ACTORS - ACTORS_MOVIES - MOVIES

A primary key is a unique identifier for an entity and is usually an id attribute.
Every entity has a unique identifier.
A foreign key is a primary key that is stored in another table. It usually is labeled singularforeigntablename_id.

A crows foot touches the entity that needs to store a foreign key.
An associative entity gets two foreign keys.

Foreign key's need to have a not null constraint, so in the case of microchip_id, it shouldn't go in the pets table, it should go in the microchips table.

The PostgreSQL column constraints useful for entity relationships are the following.

1. Not-null constraints
2. Unique constraints
3. Primary key constraints
4. Foreign key constraints

A foreign key constraint specifies that the values in a column must match the values appearing in some row of another table.
To define a foreign key: integer NOT NULL REFERENCES movies ON DELETE CASCADE
ON DELETE CASCADE means that these rows will be deleted if the primary key row is deleted.

1:1         integer UNIQUE NOT NULL REFERENCES movies ON DELETE CASCADE
1:many      integer NOT NULL REFERENCES movies ON DELETE CASCADE
many:many   integer NOT NULL REFERENCES movies ON DELETE CASCADE

JOIN clause is an optional part of a SELECT command that combines rows from two or more tables by joining on columns that are common to each. (The keys).

\x auto to turn on expanded display in the REPL.

INNER JOIN
LEFT OUTER JOIN
RIGHT OUTER JOIN
FULL OUTER JOIN
CROSS JOIN

SELECT movies.id AS movies_id, awards.id AS awards_id, title, kind, name FROM movies INNER JOIN awards ON awards.movie_id = movies.id;

AS will let you rename a column

SELECT DISTINCT title, kind FROM movies INNER JOIN awards ON awards.movie_id = movies.id;

DISTINCT will only show non-duplicates (duplicates in the resulting data not original)(for example: only in title and kind)

SELECT title, role FROM movies INNER JOIN actors_movies ON actors_movies.movie_id = movies.id;

SELECT title, role, name, birthed_at FROM movies INNER JOIN actors_movies ON actors_movies.movie_id = movies.id INNER JOIN actors ON actors_movies.actor_id = actors.id WHERE movies.id = 3 AND birthed_at >= '1962-01-01 00:00:00 UTC' ORDER BY birthed_at DESC LIMIT 1;

HOMEWORK movies actors tables

SELECT title, released_at, score, name AS actor_name, role FROM movies INNER JOIN actors_movies ON actors_movies.movie_id = movie.id INNER JOIN actors ON actors.id = actors_movies.id ORDER BY score DESC;
