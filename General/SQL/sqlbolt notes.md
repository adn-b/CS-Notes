# sqlbolt.com notes

## Lesson 1: SELECT queries 101

SELECT statements/queries are used to retrieve data from an sql database. 

Syntax:
```sql
SELECT column, another_column, …
FROM mytable;
```

Table:
| id | title | director | year | length_minutes
|-|-|-|-|-|
| 1	| Toy Story | John Lasseter | 1995 | 81
| 2	| A Bug's Life | John Lasseter | 1998 | 95
| 3	| Toy Story 2 | John Lasseter | 1999 | 93
| 4	| Monsters, Inc. | Pete Docter | 2001 | 92
| 5	| Finding Nemo | Andrew Stanton | 2003 | 107
| 6	| The Incredibles | Brad Bird | 2004 | 116
| 7	| Cars | John Lasseter | 2006 | 117
| 8	| Ratatouille | Brad Bird | 2007 | 115
| 9	| WALL-E | Andrew Stanton | 2008 | 104
| 10 | Up | Pete Docter | 2009 | 101
| 11 | Toy Story 3 | Lee Unkrich | 2010 | 103
| 12 | Cars 2 | John Lasseter | 2011 | 120
| 13 | Brave | Brenda Chapman | 2012 | 102
| 14 | Monsters University | Dan Scanlon | 2013 | 110

Tasks:
1. Find the title of each film
```sql
SELECT movies.title FROM movies;
```

2. Find the director of each film
```sql
SELECT movies.director FROM movies;
```

3. Find the title and director of each film
```sql
SELECT movies.title, movies.director FROM movies;
```

4. Find the title and year of each film
```sql
SELECT movies.title, movies.year FROM movies;
```

5. Find all the information about each film
```sql
SELECT * FROM movies;
```


## Lesson 2: Queries with constraints (Pt. 1)

Constraints can be added to queries using the "WHERE" keyword.

Syntax:
```sql
SELECT column, another_column, …
FROM mytable
WHERE condition
    AND/OR another_condition
    AND/OR …;
```

Below are some useful operators which can be used for numerical data (integer or floating point):

| Operator | Condition | SQL Example
|-|-|-|
| =, !=, <, <=, >, >= | Standard numerical operators | col_name != 4
| BETWEEN … AND … | Number is within range of two values (inclusive) | col_name BETWEEN 1.5 AND 10.5
| NOT BETWEEN … AND … | Number is not within range of two values (inclusive) | col_name NOT BETWEEN 1 AND 10
| IN (…) | Number exists in a list | col_name IN (2, 4, 6)
| NOT IN (…) | Number does not exist in a list | col_name NOT IN (1, 3, 5)

Tasks:
1. Find the movie with a row id of 6
```sql
SELECT * FROM movies
WHERE Id = 6;
```

2. Find the movies released in the years between 2000 and 2010
```sql
SELECT * FROM movies
WHERE Year BETWEEN 2000 and 2010;
```

3. Find the movies not released in the years between 2000 and 2010
```sql
SELECT * FROM movies
WHERE Year NOT BETWEEN 2000 and 2010;
```

4. Find the first 5 Pixar movies and their release year
```sql
SELECT Title, Year FROM movies
WHERE Id <= 5;
```

## Lesson 3: Queries with constraints (Pt. 2)

There are also some constraints which are useful for columns containing text data. For example:

| Operator | Condition | Example
|-|-|-|
| = | Case sensitive exact string comparison (notice the single equals) | col_name = "abc"
| != or <> | Case sensitive exact string inequality comparison | col_name != "abcd"
| LIKE | Case insensitive exact string comparison | col_name LIKE "ABC"
| NOT LIKE | Case insensitive exact string inequality comparison | col_name NOT LIKE "ABCD"
| % | Used anywhere in a string to match a sequence of zero or more characters (only with LIKE or NOT LIKE) | col_name LIKE "%AT%" (matches "AT", "ATTIC", "CAT" or even "BATS")
| _ | Used anywhere in a string to match a single character (only with LIKE or NOT LIKE) | col_name LIKE "AN_" (matches "AND", but not "AN")
| IN (…) | String exists in a list | col_name IN ("A", "B", "C")
| NOT IN (…) | String does not exist in a list | col_name NOT IN ("D", "E", "F")

Tasks:
1. Find all the Toy Story movies
```sql
SELECT * FROM movies
WHERE Title LIKE "%Toy Story%";
```

2. Find all the movies directed by John Lasseter
```sql
SELECT * FROM movies
WHERE Director LIKE "%John Lasseter%";
```

3. Find all the movies (and director) not directed by John Lasseter
```sql
SELECT * FROM movies
WHERE Director NOT LIKE "%John Lasseter%"
```

4. Find all the WALL-* movies
```sql
SELECT * FROM movies
WHERE Title LIKE "%WALL-_%"
```

## Lesson 4: Filtering and sorting Query results

The "DISTINCT" keyword can be used to filter out duplicate query results. This will blindly remove duplicate rows.

Syntax:
```sql
SELECT DISTINCT column, another_column, …
FROM mytable
WHERE condition(s);
```

The "ORDER BY" clause can be used to order query results based on a criteria.

Syntax:
```sql
SELECT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC;
```

The "LIMIT" and "OFFSET" clauses limit the query results, or only returns results past a certain row number.

Syntax:
```sql
SELECT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC
LIMIT num_limit OFFSET num_offset;
```

Tasks:
1. List all directors of Pixar movies (alphabetically), without duplicates
```sql
SELECT DISTINCT Director FROM movies
ORDER BY Director ASC;
```

2. List the last four Pixar movies released (ordered from most recent to least) 
```sql
SELECT * FROM movies
ORDER BY Year DESC
LIMIT 4;
```

3. List the first five Pixar movies sorted alphabetically
```sql
SELECT * FROM movies
ORDER BY Title ASC
LIMIT 5;
```

4. List the next five Pixar movies sorted alphabetically
```sql
SELECT * FROM movies
ORDER BY Title ASC
LIMIT 5 OFFSET 5;
```

## Lesson 5: Review - Simple Select Queries

Table:
| City | Country | Population | Latitude | Longitude |
|------|---------|------------|----------|-----------|
| Guadalajara | Mexico | 1500800 | 20.659699 | -103.349609
| Toronto | Canada | 2795060 | 43.653226 | -79.383184
| Houston | United States | 2195914 | 29.760427 | -95.369803
| New York | United States | 8405837 | 40.712784 | -74.005941
| Philadelphia | United States | 1553165 | 39.952584 | -75.165222
| Havana | Cuba | 2106146 | 23.05407 | -82.345189
| Mexico City | Mexico | 8555500 | 19.432608 | -99.133208
| Phoenix | United States | 1513367 | 33.448377 | -112.074037
| Los Angeles | United States | 3884307 | 34.052234 | -118.243685
| Ecatepec de Morelos | Mexico | 1742000 | 19.601841 | -99.050674
| Montreal | Canada | 1717767 | 45.501689 | -73.567256
| Chicago | United States | 2718782 | 41.878114 | -87.629798

Tasks:
1. List all the Canadian cities and their populations 
```sql
SELECT city, country, population FROM north_american_cities
WHERE Country LIKE "Canada";
```

2. Order all the cities in the United States by their latitude from north to south
```sql
SELECT * FROM north_american_cities
WHERE Country = "United States"
ORDER BY Latitude DESC;
```

3. List all the cities west of Chicago, ordered from west to east
```sql
SELECT city, longitude FROM north_american_cities
WHERE longitude < "-87.629798"
ORDER BY longitude ASC;
```

4. List the two largest cities in Mexico (by population)
```sql
SELECT * FROM north_american_cities
WHERE Country = "Mexico"
ORDER BY Population DESC
LIMIT 2;
```

5. List the third and fourth largest cities (by population) in the United States and their population
```sql
SELECT * FROM north_american_cities
WHERE Country = "United States"
ORDER BY Population DESC
LIMIT 2 OFFSET 2;
```


## Lesson 6: Multi-table queries with JOINs

Join statements are used after a SELECT statement and before a WHERE statement to add columns from other tables and match them with the first table based on a column/attribute.

Syntax:
```sql
SELECT column, another_table_column, …
FROM mytable
INNER JOIN another_table 
    ON mytable.id = another_table.id
WHERE condition(s)
```

Here we can see that columns from two different tables are being selected, but only one table is being used in the FROM statement. This is because we want to return the data in the correct format, i.e. with the correct rows being matched up from both tables.

So, we use INNER JOIN, which is a type of join, to join the second table, and match up rows where the "id" column/attribute in both tables are the same. This works because mytable.id is a primary key, and another_table.id is the corresponding foreign key. This ensures that there will be no redundant data/duplicates, as both are unique keys. Using joins with non unique keys can be problematic as it will return redundant data - this is why normal form/NF is used in databases.

Tasks:
1. Find the domestic and international sales for each movie
```sql
SELECT Movies.Title, Boxoffice.Domestic_sales, Boxoffice.International_sales 
    FROM Movies
    JOIN Boxoffice ON Boxoffice.Movie_id = Movies.Id;
```

2. Show the sales numbers for each movie that did better internationally rather than domestically
```sql
SELECT Movies.Title, Boxoffice.Domestic_sales, Boxoffice.International_sales 
    FROM Movies
    JOIN Boxoffice ON Boxoffice.Movie_id = Movies.Id
    WHERE Boxoffice.International_sales > Boxoffice.Domestic_sales;
```

3. List all the movies by their ratings in descending order
```sql
SELECT Movies.Title, Boxoffice.Rating FROM Movies
    JOIN Boxoffice ON Boxoffice.Movie_id = Movies.Id
    ORDER BY Boxoffice.Rating DESC;
```


## Lesson 7: OUTER JOINs

LEFT, RIGHT or FULL JOINs are used when two tables have asymmetric data, i.e where one table has rows which do not match up with rows in another table. If we were to use INNER JOIN with these tables and try to match the two rows on some criteria, the asymmetric data would not be included, which may be suboptimal.

Like the INNER JOIN these three new joins have to specify which column to join the data on. When joining table A to table B, a LEFT JOIN simply includes rows from A regardless of whether a matching row is found in B. The RIGHT JOIN is the same, but reversed, keeping rows in B regardless of whether a match is found in A. Finally, a FULL JOIN simply means that rows from both tables are kept, regardless of whether a matching row exists in the other table.

![title](/join%20types.png)

Tasks:

1. Find the list of all buildings that have employees 
```sql
SELECT DISTINCT Buildings.building_name 
FROM Buildings
INNER JOIN Employees ON Buildings.building_name = Employees.Building;
```

2. Find the list of all buildings and their capacity 
```sql
SELECT * FROM Buildings;
```

3. List all buildings and the distinct employee roles in each building (including empty buildings)
```sql
SELECT DISTINCT Buildings.Building_name, Employees.Role FROM Buildings
LEFT JOIN Employees ON Employees.Building = Building_name;
```

## Lesson 8: A short note on NULLs



It's always good to reduce the possibility of NULL values in databases because they require special attention when constructing queries, constraints (certain functions behave differently with null values) and when processing the results.

An alternative to NULL values in your database is to have data-type appropriate default values, like 0 for numerical data, empty strings for text data, etc. But if your database needs to store incomplete data, then NULL values can be appropriate if the default values will skew later analysis (for example, when taking averages of numerical data).

Sometimes, it's also not possible to avoid NULL values, as we saw in the last lesson when outer-joining two tables with asymmetric data. You can use "IS/IS NOT NULL" in WHERE clauses to check if a field is empty.

Tasks:
1. Find the name and role of all employees who have not been assigned to a building
```sql
SELECT Employees.Name, Employees.Role FROM employees
WHERE Building IS NULL;
```

2. Find the names of the buildings that hold no employees
```sql
SELECT DISTINCT Buildings.Building_name FROM Buildings
LEFT JOIN Employees ON Employees.Building = Buildings.Building_name
WHERE Employees.Name IS NULL;
```

## Lesson 9: Queries with expressions

In addition to querying and referencing raw column data with SQL, you can also use expressions to write more complex logic on column values in a query.

Syntax:
```sql
SELECT particle_speed / 2.0 AS half_particle_speed
FROM physics_data
WHERE ABS(particle_position) * 10.0 > 500;
```

Each database has its own supported set of mathematical, string, and date functions that can be used in a query, which you can find in their own respective docs.

The use of expressions can save time and extra post-processing of the result data, but can also make the query harder to read, so we recommend that when expressions are used in the SELECT part of the query, that they are also given a descriptive alias using the AS keyword.

Syntax:
```sql
SELECT col_expression AS expr_description, …
FROM mytable;
```

In addition to expressions, regular columns and even tables can also have aliases to make them easier to reference in the output and as a part of simplifying more complex queries:
```sql
SELECT column AS better_column_name, …
FROM a_long_widgets_table_name AS mywidgets
INNER JOIN widget_sales
  ON mywidgets.id = widget_sales.widget_id;
```

Tasks:
1. List all movies and their combined sales in millions of dollars 
```sql
SELECT Movies.title, (Boxoffice.Domestic_sales + Boxoffice.International_sales) / 1000000  AS "Total Sales"
FROM movies
JOIN Boxoffice ON Boxoffice.Movie_id = Movies.id ;
```

2. List all movies and their ratings in percent
```sql
SELECT Movies.title, Boxoffice.Rating * 10 AS "Rating"
FROM Movies
INNER JOIN Boxoffice ON Boxoffice.Movie_id = Movies.ID
```

3. List all movies that were released on even number years
```sql
SELECT Title FROM Movies
WHERE Year % 2 = 0;
```

## Lesson 10: Queries with aggregates (Pt. 1)

Aggregate expressions summarize information about a group of rows of data.

Some aggregate functions:

| Function | Description |
|-|-|
| COUNT(*), COUNT(column) | A common function used to counts the number of rows in the group if no column name is specified. Otherwise, count the number of rows in the group with non-NULL values in the specified column.
| MIN(column) | Finds the smallest numerical value in the specified column for all rows in the group.
| MAX(column) | Finds the largest numerical value in the specified column for all rows in the group.
| AVG(column) | Finds the average numerical value in the specified column for all rows in the group.
| SUM(column) | Finds the sum of all numerical values in the specified column for the rows in the group.

Syntax:
```sql
SELECT AGG_FUNC(column_or_expression) AS aggregate_description, …
FROM mytable
WHERE constraint_expression;
```

You can also use the GROUP BY clause to use a grouped aggregate function.
Syntax:
```sql
SELECT AGG_FUNC(column_or_expression) AS aggregate_description, …
FROM mytable
WHERE constraint_expression
GROUP BY column;
```

Tasks:
1. Find the longest time that an employee has been at the studio
```sql
SELECT MAX(Years_employed) FROM Employees;
```

2. For each role, find the average number of years employed by employees in that role
```sql
SELECT Role, AVG(Years_employed) AS "avg" FROM Employees
GROUP BY Role
```

3. Find the total number of employee years worked in each building
```sql
SELECT Building, SUM(Years_employed) AS "avg" FROM Employees
GROUP BY Building
```

## Lesson 11: Queries with aggregates (Pt. 2)

If the GROUP BY clause is executed after the WHERE clause (which filters the rows which are to be grouped), then how exactly do we filter the grouped rows?

Luckily, SQL allows us to do this by adding an additional HAVING clause which is used specifically with the GROUP BY clause to allow us to filter grouped rows from the result set.

Syntax:
```sql
SELECT group_by_column, AGG_FUNC(column_expression) AS aggregate_result_alias, …
FROM mytable
WHERE condition
GROUP BY column
HAVING group_condition;
```

The HAVING clause constraints are written the same way as the WHERE clause constraints, and are applied to the grouped rows. With our examples, this might not seem like a particularly useful construct, but if you imagine data with millions of rows with different properties, being able to apply additional constraints is often necessary to quickly make sense of the data.

If you aren't using the 'GROUP BY' clause, a simple 'WHERE' clause will suffice.

Tasks:

1. Find the number of Artists in the studio (without a HAVING clause)
```sql
SELECT COUNT(Name) FROM employees
WHERE Role = "Artist";
```

2. Find the number of Employees of each role in the studio
```sql
SELECT Role, COUNT(Name) AS "Number" FROM employees
GROUP BY Role;
```

3. Find the total number of years employed by all Engineers
```sql
SELECT Role, SUM(Years_employed) AS "Number" FROM employees
GROUP BY Role
HAVING Role = "Engineer";
```

## Lesson 12: Order of execution of a Query

Each query begins with finding the data that we need in a database, and then filtering that data down into something that can be processed and understood as quickly as possible. Because each part of the query is executed sequentially, it's important to understand the order of execution so that you know what results are accessible where.

1. FROM and JOINs

The FROM clause, and subsequent JOINs are first executed to determine the total working set of data that is being queried. This includes subqueries in this clause, and can cause temporary tables to be created under the hood containing all the columns and rows of the tables being joined.

2. WHERE

Once we have the total working set of data, the first-pass WHERE constraints are applied to the individual rows, and rows that do not satisfy the constraint are discarded. Each of the constraints can only access columns directly from the tables requested in the FROM clause. Aliases in the SELECT part of the query are not accessible in most databases since they may include expressions dependent on parts of the query that have not yet executed.

3. GROUP BY

The remaining rows after the WHERE constraints are applied are then grouped based on common values in the column specified in the GROUP BY clause. As a result of the grouping, there will only be as many rows as there are unique values in that column. Implicitly, this means that you should only need to use this when you have aggregate functions in your query.

4. HAVING

If the query has a GROUP BY clause, then the constraints in the HAVING clause are then applied to the grouped rows, discard the grouped rows that don't satisfy the constraint. Like the WHERE clause, aliases are also not accessible from this step in most databases.

5. SELECT

Any expressions in the SELECT part of the query are finally computed.

6. DISTINCT

Of the remaining rows, rows with duplicate values in the column marked as DISTINCT will be discarded.

7. ORDER BY

If an order is specified by the ORDER BY clause, the rows are then sorted by the specified data in either ascending or descending order. Since all the expressions in the SELECT part of the query have been computed, you can reference aliases in this clause.

8. LIMIT / OFFSET

Finally, the rows that fall outside the range specified by the LIMIT and OFFSET are discarded, leaving the final set of rows to be returned from the query.

Not every query needs to have all the parts we listed above, but a part of why SQL is so flexible is that it allows developers and data analysts to quickly manipulate data without having to write additional code, all just by using the above clauses.

Tasks:
1. Find the number of movies each director has directed
```sql
SELECT Director, COUNT(Title) AS Count 
FROM movies
GROUP BY Director;
```

2. Find the total domestic and international sales that can be attributed to each director
```sql
SELECT Movies.id, Movies.Director,  SUM(Boxoffice.Domestic_sales + Boxoffice.International_sales) AS "Total Sales"
FROM movies
LEFT JOIN Boxoffice ON Movies.id = boxoffice.movie_id
GROUP BY Director
```

## Lesson 13: Inserting rows

A database schema is a fixed structure which describes how data must be entered into and displayed from the database.

When inserting data into a database, we need to use an INSERT statement, which declares which table to write into, the columns of data that we are filling, and one or more rows of data to insert. In general, each row of data you insert should contain values for every corresponding column in the table. You can insert multiple rows at a time by just listing them sequentially.

Syntax:
```sql
INSERT INTO mytable
VALUES (value_or_expr, another_value_or_expr, …),
       (value_or_expr_2, another_value_or_expr_2, …),
       …;
```

In some cases, if you have incomplete data and the table contains columns that support default values, you can insert rows with only the columns of data you have by specifying them explicitly.

Syntax:
```sql
INSERT INTO mytable
(column, another_column, …)
VALUES (value_or_expr, another_value_or_expr, …),
      (value_or_expr_2, another_value_or_expr_2, …),
      …;
```

In these cases, the number of values need to match the number of columns specified. Despite this being a more verbose statement to write, inserting values this way has the benefit of being forward compatible. For example, if you add a new column to the table with a default value, no hardcoded INSERT statements will have to change as a result to accommodate that change.

In addition, you can use mathematical and string expressions with the values that you are inserting. This can be useful to ensure that all data inserted is formatted a certain way.

Syntax:
```sql
INSERT INTO boxoffice
(movie_id, rating, sales_in_millions)
VALUES (1, 9.9, 283742034 / 1000000);
```

Tasks:
1. Add the studio's new production, Toy Story 4 to the list of movies (you can use any director)
```sql
INSERT INTO Movies
VALUES (15, "Toy Story 4", "Paul Thomas Anderson", 2024, 120)
```

2. Toy Story 4 has been released to critical acclaim! It had a rating of 8.7, and made 340 million domestically and 270 million internationally. Add the record to the BoxOffice table.
```sql
INSERT INTO Boxoffice
VALUES (15, 8.7, 340000000, 270000000)
```


## Lesson 14: Updating rows

In addition to adding new data, a common task is to update existing data, which can be done using an UPDATE statement. Similar to the INSERT statement, you have to specify exactly which table, columns, and rows to update. In addition, the data you are updating has to match the data type of the columns in the table schema.

Syntax:
```sql
UPDATE mytable
SET column = value_or_expr, 
    other_column = another_value_or_expr, 
    …
WHERE condition;
```

Most people working with SQL will make mistakes updating data at one point or another. Whether it's updating the wrong set of rows in a production database, or accidentally leaving out the WHERE clause (which causes the update to apply to all rows), you need to be extra careful when constructing UPDATE statements.

One helpful tip is to always write the constraint first and test it in a SELECT query to make sure you are updating the right rows, and only then writing the column/value pairs to update.

Tasks:
1. The director for A Bug's Life is incorrect, it was actually directed by John Lasseter
```sql
UPDATE Movies
SET Director = "John Lasseter"
WHERE Title LIKE "%Bug's Life";
```

2. The year that Toy Story 2 was released is incorrect, it was actually released in 1999
```sql
UPDATE Movies
SET Year = 1999
WHERE Title = "Toy Story 2";
```

3. Both the title and director for Toy Story 8 is incorrect! The title should be "Toy Story 3" and it was directed by Lee Unkrich
```sql
UPDATE Movies
SET Title = "Toy Story 3", Director = "Lee Unkrich"
WHERE Title = "Toy Story 8"
```

## Lesson 15: Deleting rows

When you need to delete data from a table in the database, you can use a DELETE statement, which describes the table to act on, and the rows of the table to delete through the WHERE clause.

Syntax:
```sql
DELETE FROM mytable
WHERE condition;
```

Again, you should run a select statement to ensure you are deleting the correct rows.

Tasks:
1. This database is getting too big, lets remove all movies that were released before 2005. 
```sql
DELETE FROM movies
WHERE Year < 2005;
```

2. Andrew Stanton has also left the studio, so please remove all movies directed by him. 
```sql
DELETE FROM Movies
WHERE Director = "Andrew Stanton";
```


## Lesson 16: Creating tables

When you have new entities and relationships to store in your database, you can create a new database table using the CREATE TABLE statement.

Syntax:
```sql
CREATE TABLE IF NOT EXISTS mytable (
    column DataType TableConstraint DEFAULT default_value,
    another_column DataType TableConstraint DEFAULT default_value,
    …
);
```

The structure of the new table is defined by its table schema, which defines a series of columns. Each column has a name, the type of data allowed in that column, an optional table constraint on values being inserted, and an optional default value.

If there already exists a table with the same name, the SQL implementation will usually throw an error, so to suppress the error and skip creating a table if one exists, you can use the IF NOT EXISTS clause.

Some data types:

| Data type | Description |
|-|-|
| INTEGER, BOOLEAN | The integer datatypes can store whole integer values like the count of a number or an age. In some implementations, the boolean value is just represented as an integer value of just 0 or 1.
| FLOAT, DOUBLE, REAL | The floating point datatypes can store more precise numerical data like measurements or fractional values. Different types can be used depending on the floating point precision required for that value.
| CHARACTER(num_chars), VARCHAR(num_chars), TEXT | The text based datatypes can store strings and text in all sorts of locales. The distinction between the various types generally amount to underlaying efficiency of the database when working with these columns. Both the CHARACTER and VARCHAR (variable character) types are specified with the max number of characters that they can store (longer values may be truncated), so can be more efficient to store and query with big tables.
| DATE, DATETIME | SQL can also store date and time stamps to keep track of time series and event data. They can be tricky to work with especially when manipulating data across timezones.
| BLOB | Finally, SQL can store binary data in blobs right in the database. These values are often opaque to the database, so you usually have to store them with the right metadata to requery them.

Some table constraints:

| Constraint | Description
|-|-|
| PRIMARY KEY | This means that the values in this column are unique, and each value can be used to identify a single row in this table.
| AUTOINCREMENT | For integer values, this means that the value is automatically filled in and incremented with each row insertion. Not supported in all databases.
| UNIQUE | This means that the values in this column have to be unique, so you can't insert another row with the same value in this column as another row in the table. Differs from the `PRIMARY KEY` in that it doesn't have to be a key for a row in the table.
| NOT NULL | This means that the inserted value can not be `NULL`.
| CHECK (expression) | This allows you to run a more complex expression to test whether the values inserted are valid. For example, you can check that values are positive, or greater than a specific size, or start with a certain prefix, etc.
| FOREIGN KEY | This is a consistency check which ensures that each value in this column corresponds to another value in a column in another table. For example, if there are two tables, one listing all Employees by ID, and another listing their payroll information, the `FOREIGN KEY` can ensure that every row in the payroll table corresponds to a valid employee in the master Employee list.

Example of the movies schema:
```sql
CREATE TABLE movies (
    id INTEGER PRIMARY KEY,
    title TEXT,
    director TEXT,
    year INTEGER, 
    length_minutes INTEGER
);
```

Tasks:
1. Create a new table named Database with the following columns:

– Name A string (text) describing the name of the database
– Version A number (floating point) of the latest version of this database
– Download_count An integer count of the number of times this database was downloaded

This table has no constraints. 
```sql
CREATE TABLE IF NOT EXISTS Database(
  Name TEXT,
  Version FLOAT,
  Download_count INT
);
```

## Lesson 17: Altering tables

The ALTER TABLE statement allows you to update schemas by adding, removing, or modifying columns and table constraints.

The syntax for adding a new column is similar to the syntax when creating new rows in the CREATE TABLE statement. You need to specify the data type of the column along with any potential table constraints and default values to be applied to both existing and new rows. In some databases like MySQL, you can even specify where to insert the new column using the FIRST or AFTER clauses, though this is not a standard feature.

Syntax:
```sql
ALTER TABLE mytable
ADD column DataType OptionalTableConstraint 
    DEFAULT default_value;
```

Dropping columns is as easy as specifying the column to drop, however, some databases (including SQLite) don't support this feature. Instead you may have to create a new table and migrate the data over.

Syntax:
```sql
ALTER TABLE mytable
DROP column_to_be_deleted;
```

If you need to rename the table itself, you can also do that using the RENAME TO clause of the statement.

Syntax:
```sql
ALTER TABLE mytable
RENAME TO new_table_name;
```

Tasks:
1. Add a column named Aspect_ratio with a FLOAT data type to store the aspect-ratio each movie was released in.
```sql
ALTER TABLE Movies
ADD Aspect_ratio FLOAT;
```

2. Add another column named Language with a TEXT data type to store the language that the movie was released in. Ensure that the default for this language is English.
```sql
ALTER TABLE Movies
ADD Language TEXT
    DEFAULT English;
```

## Lesson 18: Dropping tables

In some rare cases, you may want to remove an entire table including all of its data and metadata, and to do so, you can use the DROP TABLE statement, which differs from the DELETE statement in that it also removes the table schema from the database entirely.

Syntax:
```sql
DROP TABLE IF EXISTS mytable;
```

Like the CREATE TABLE statement, the database may throw an error if the specified table does not exist, and to suppress that error, you can use the IF EXISTS clause.

In addition, if you have another table that is dependent on columns in table you are removing (for example, with a FOREIGN KEY dependency) then you will have to either update all dependent tables first to remove the dependent rows or to remove those tables entirely.

Tasks:
1. We've sadly reached the end of our lessons, lets clean up by removing the Movies table
```sql
DROP TABLE IF EXISTS Movies;
```

2. And drop the BoxOffice table as well
```sql
DROP TABLE IF EXISTS BoxOffice;
```