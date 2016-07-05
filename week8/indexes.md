#Indexes
In a relational database system, an index is a special lookup table used to improve the speed of information retrieval for a specified table-column pair.
Bonus discussion - People who know about indexes in interviews stand out from the crowd.
Similar to the index in an encyclopedia.
A primary key is an example of an index - tables_pkey is the special index for primary key.
Indexes are stored in b-tree data structure.
Indexes slow down inserts and updates marginally unless over indexed.
Don't use indexes in a few scenarios:
1. Tables with few rows.
2. Tables with frequent, large batch inserts or updates.
3. Columns with many NULL values.
Indexes are more effective on numerical columns (including time stamps) rather than textual columns.

Automatically created on primary keys. Postgres does not automatically create a key on foreign key constraints.
\di+
\dt+
WHERE INNER JOIN clauses will invoke an index.
CREATE INDEX ON places (parent_id);
If you want your select to be fast, you must have an index on all columns mentioned in a where clause.
CREATE INDEX ON places (country_code, target_type);

// Unique index is used for data integrity and speed.
CREATE UNIQUE INDEX ON places (canonical_name);
Unique index and unique constraint are basically the same - except for you can make a partial index.

DROP INDEX places_canonical_name_idx;
DROP INDEX places_country_code_target_type_idx;
