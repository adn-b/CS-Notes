# SQL
# BASICS
## DBMS
A database management system (DBMS) is a set of program used to define, administer, and process databases. SQL is an example of a DBMS.

## Database Models
- Relational - nowadays, most databases are relational. This is where data is stored in columns and rows.
- Hierarchical - have a simple hierarchial structure, suffer from redundancy problems
- Network - have minimal redundancy but have structural complexity


## Relational Databases
- Relational databases have replaced databases built according to earlier models because the relational type has valuable attributes that distinguish relational databases from those other database types. 
- Probably the most important of these attributes is that, in a relational database, you can change the database structure without requiring changes to applications that were based on the old structures. 
- Suppose, for example, that you add one or more new columns to a database table. You don’t need to change any previously written applications that will continue to process that table, unless you alter one or more of the columns used by those applications.

In hierarchical/network DBMS's, the structure is hard-coded into the application, however this is not the case with relational databases. You can add columns or rows without having to change the codebase - the code still reads the database's columns and rows without issue.


## What are the main applications of SQL?
- SQL is used to create, delete, and update tables in a database.
- Access, manipulate, and modify data in a table
- Retrieve and summarize the necessary information from a table or several tables
- Add or remove certain rows or columns from a table

## What is an SQL statement?
- Statements in SQL are used to execute actions on a database. Some examples include:
- SELECT, CREATE, DELETE, DROP, REVOKE, etc.

## What are the types of SQL commands/SQL subsets?
- Data Definition Language (DDL) - these commands define and modify the structure of a database. 
- This may include commands like CREATE, DROP, etc.
- Data Manipulation Language (DML) - these commands access, manipulate and modify data in a database.
- This may include commands like SELECT, INSERT, DELETE, UPDATE, etc.
- Data Control Language (DCL) - these commands control user groups' access to the data.
- This may include commands like GRANT, REVOKE.
- Transaction Control Language (TCL) - these commands control transactions in a database, such as COMMIT, ROLLBACK, SAVEPOINT, SET TRANSACTION.
- Data Query Language (DQL) - this typically just consists of SELECT, and is used to start queries.

## Database Administration Controls
- These are commands used for the maintenance and management of the database.
- Some examples: BACKUP DATABASE, RESTORE DATABASE, 
- CREATE USER, ALTER USER, DROP USER, 
- CREATE ROLE, ALTER ROLE, CREATE ROLE, DROP ROLE, GRANT ROLE, REVOKE ROLE


## Primary Keys
- Primary keys are columns which contain unique values which can be used to identify entries in a table. 
- They may be a user ID, email, username, phone number, or an index value such as a simple integer used to identify each row uniquely.
- There can only be one primary key per table, however primary keys can consist of multiple columns.

## Unique Keys
- Unique keys are columns which are entirely unique. 
- Unique keys may also be primary keys, however primary keys must contain a non-null value as well as being unique.
- There can be any number of keys.
- Unique keys can accept a NULL value.

## Foreign Keys
- Foreign keys are columns which contain a value that is a primary key in different table.
- A table with a primary key may have its primary key stored in other tables, linking them together. This allows you to navigate back to the original table containing the primary key, by using the foreign key as a portal.

## Index
- An index is an object which can be created for column(s) in a table, and which speed up the search process of SELECT and WHERE queries.
- They typically use either balanced trees, which are binary trees where the path from the root node to any leaf node is approximately the same length.
- Or hash tables, which are arrays of buckets/slots where the values in table are converted into hashes and stored inside corresponding buckets. The users input is then also converted into a hash value and used to directly lookup the bucket where the matching value should be stored.


## Normalization
- Database normalization is where a database is designed and organized to prevent redundant data from being stored/returned.
- This involves decomposing a table into smaller tables and defining relationships between them to ensure that data is stored efficiently and consistently.
- 1NF: Atomic values, single type per column, must have primary key.
- 2NF: 1NF + no partial dependencies, aka non-key attributes depend on part of the primary key, not the whole key (different tables where possible).
- 3NF: 2NF + no transitive dependencies (non-key attributes are not dependent on other non-key attributes).
- BCNF: 3NF + every functional dependancy uses a super key.
- 4NF: BCNF + no multi-valued dependencies.
- 5NF: 4NF + no join dependencies.


## Subqueries
- Subqueries are used to query multiple elements from a database within the same query.
- This may be to access a single row but matching multiple conditions, multiple rows, or data from multiple columns.


## SQL Joins
- Joins are an sql clause (used as part of a query) which allow you to combine and retrieve records (rows) from two or multiple tables.
- SQL tables can be joined based on the relationship between the columns of those tables.
- There are multiple types of joins:
- Inner join - selects records which have matching values in both tables
- For example: 
```sql
SELECT ProductID, ProductName, CategoryName
FROM Products
INNER JOIN Categories ON Products.CategoryID = Categories.CategoryID; 
```
- This is returning 3 columns, ProductID, ProductName, and CategoryName, using an inner join statement. It states the base table, or the first table in the join, "Products", and then states that "Category" will be the second table. The "ON" clause specifies that only rows where the CategoryID column in both tables are the same. Essentially, this is returning a comprehensive set of information, where information about all of the products in the "Products" table are returned, but only if their CategoryID is present in the "Categories" table.
- Left join/left outer join - returns all records from the left table (table1), and the matching records from the right table (table2). The result is 0 records from the right side, if there is no match.
- For example:
```sql
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders 
ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;
```
- This is returning all of the customers' names from the "Customers" table, and returning the ID of any orders which they may have. If they have no orders, then the value in the column is left blank (null).
- Right join/right outer join - same as left join, but uses the second table as the base table.
- For example:
```sql
SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
FROM Orders
RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
ORDER BY Orders.OrderID; 
```
- This is returning customers' orders, but does so by selecting the rows from "Orders" table and then joining the "Employees" table where there is an order present for that user. This eliminates the null values, as it is not returning any employees who do not have orders.


## Union
- UNION operator is used to combine the results of two or more select statements:
```sql
SELECT City FROM Customers
UNION
SELECT City FROM Suppliers
ORDER BY City;
```
- This example is simply joining the City columns from these two tables.

## Schemas
The structure of a database is called a schema, or its conceptual view. This data is stored inside its own table within the database, in order for the codebase to keep track of the structure of the database so that it can access data quickly.

## Domains
The attribute of a relation, aka a column of a table, will contain values, stored in rows. The set of all of these values within a column is the "domain" of the attribute.

For example, if you have a table containing information about cars in your garage, you may have a column called "colour". The colours contained within this column are the domain of the "colour" attribute.

## Constraints
Constraints are rules that determine what values the table attributes can assume.

By applying tight constraints to a column, you can prevent people from entering invalid data into that column. 

The characteristics of a table column, plus the constraints that apply to that column, determine the column's domain.

In the auto dealership example, you can constrain the database to accept only those four values in the Color column. If a data entry operator then tries to enter in the Color column a value of, for example, forest green, the system refuses to accept the entry. Data entry can’t proceed until the operator enters a valid value into the Color field.

Examples:
- NOT NULL
- UNIQUE
- PRIMARY KEY
- FOREIGN KEY
- CHECK
- DEFAULT
- CREATE INDEX

## Object-relational Model
Object-oriented programming languages have somewhat eclipsed relational databases, as they provide in-built data structures and schemas for creating objects within the code, and this does not mesh well with classic relational databases.

So, the object-relational model was developed and supports more object-oriented features.

## Extracting data
You can extract information from a database in one of two ways:

- Make an ad hoc query from a computer console by just typing an SQL statement and reading the results from the screen. Console is the traditional term for the computer hardware that does the job of the keyboard and screen used in current PC-based systems. Queries from the console are appropriate when you want a quick answer to a specific question. To meet an immediate need, you may require information that you never needed before from a database. You’re likely never to need that information again either, but you need it now. Enter the appropriate SQL query statement from the keyboard, and in due time, the result appears on your screen.

- Execute a program that collects information from the database and then reports on the information, either on-screen or in a printed report. You can use SQL either way. Incorporating an SQL query directly into a program is a good way to run a complex query that you’re likely to run again in the future.

## Data Types
Depending on their histories, different SQL implementations support a variety of data types. The SQL:2003 specification recognizes only five predefined general types:
- Numerics - Numbers (5 types as discussed below)
- Strings - ASCII text strings
- Booleans - Y/N values
- Datetimes - Dates or times
- Intervals - Works with datetimes, allows you to specify intervals of years, months, days, etc

As you can probably guess from the name, the exact numeric data types enable you to express the value of a number exactly. Five data types fall into this category:
- INTEGER - no specific precision, can be any whole integer.
- SMALLINT - can be no larger than the precision of an INTEGER on the same implementation.
- BIGINT - precision is at least as large as the INTEGER type on the same implementation. May allow you to save storage space.
- NUMERIC - can specify the precision and scale. The scale is the number of digits on the fractional side. So, if the precision is 12, and the scale is 6, a NUMERIC value can be as high as 999,999.999999. This is because there are 6 values in the fractional side, and 12 overall, and thus it is the highest number possible for this implementation.
- DECIMAL - similar to numeric, as it can have a fractional component, and you can specify its precision and scale.

## Approximate Numerics
- REAL - this is a single-precision floating-point number, aka a number that contanis a decimal point. 
- DOUBLE PRECISION - this is a double-precision floating-point number. Essentially gives you twice the precision as a REAL number in a given implementation.
- FLOAT - uses a specific precision, making it more compatible for porting to different platforms.

## Character Strings
- CHARACTER - this data type allows you to specify the number of characters the column holds.
- CHARACTER VARYING - this simply stores the exact number of charactera that the user enters.
- CHARACTER LARGE - allows for larger precision than CHARACTER types, may not be used in a primary key, foreign key, or unique key. 

## Booleans
- Is simply a true/false/unknown value. 
- If either a Boolean true or false value is compared to a NULL or unknown truth value, the result will have the unknown value.

## Datetimes
- Allow formatting as dates or times.
- DATA - stores year, month and day values of a date, in that order. The year value is 4 digits long, and month/day are 2.
- TIME WITHOUT TIME ZONE - stores hour, minute, and second values of time. Precision is implementation-dependent but is at least 6 digits long.
- TIMESTAMP WITHOUT TIME ZONE - stores date and time information.
- TIME WITH TIME ZONE - stores time with the offset from UTC, or GMT. Time zone information takes up 6 more digit positions in ths specification.
- TIMESTAMP WITH TIME ZONE - self explanatory.

## Intervals
- Explained earlier.

## ROW Types
- Row types are used to apply constraints to column values.
- The ROW data type allows you to declare an entire row of data to be contained within a single field in a single row of a table — in other words, a row nested within a row.
![title](/row%20types.png)
- The advantage here is that if you are maintaining address information for multiple entities — such as customers, vendors, employees, and stockholders — you only have to define the details of the address specification once, in the ROW type definition.

## Collection Types
- Collection types are either ARRAYs or MULTISETs.
- ARRAY - this contains a number of other types. 
- MULTISET - same as array, but is unordered. Specific elements cannot be referenced therefore.

## REF Types
- Essentially pointers to data items, row types, or abstract data types residing in a row of a table (a site). Dereferencing the pointer can retrieve the value stored at this site.

## User-Defined Types
- Users can define either distinct types, or structured types.
- Distinct types are expressed as single data types