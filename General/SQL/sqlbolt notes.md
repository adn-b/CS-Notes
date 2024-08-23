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


# Lesson 2: Queries with constraints (Pt. 1)

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

# Lesson 3: Queries with constraints (Pt. 2)

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

# Lesson 6: Multi-table queries with JOINs

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