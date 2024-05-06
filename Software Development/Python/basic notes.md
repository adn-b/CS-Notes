# Python Notes - Aidan Butler
### Following the W3Schools curriculum with my own insight and touch.

# Python

## Python Basics

### What can Python do?

- Python can be used on a server to create web applications.
- Python can be used alongside software to create workflows.
- Python can connect to database systems. It can also read and modify files.
- Python can be used to handle big data and perform complex mathematics.
- Python can be used for rapid prototyping, or for production-ready software development.

### Why Python?

- Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).
- Python has a simple syntax similar to the English language.
- Python has syntax that allows developers to write programs with fewer lines than some other programming languages.
- Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.
- Python can be treated in a procedural way, an object-oriented way or a functional way.


## Python Syntax

### Indentation

Python uses indentation to indicate blocks of code. It is very important in Python.


## Python Comments

Comments in Python start with a #. 

Python does not have a syntax for multiline comments. You can simply create multiple lines of comments with separate # prefixes.


## Python Variables

### Creating Variables

Python has no command for declaring a variable.

A variable is created the moment you first assign a value to it.
```py
x = 5
y = "John"
print(x)
print(y)
```

Variables do not need to be declared with any particular type, and can even change type after they have been set.
```py
x = 4       # x is of type int
x = "Sally" # x is now of type str
print(x)
```

However, if you want to specify the data type, you can use a technique called "casting":
```py
x = str(3)    # x will be '3'
y = int(3)    # y will be 3
z = float(3)  # z will be 3.0
```

You can then get the data type of a variable with the type() function.

Variables names are case sensitive, and can be declared with single or double quotations.

### Variable Names

Variables should be declared with short, descriptive names, and can contain underscores or numbers/letters, but no other forms of punctuation.

### Assigning Multiple Values

Python allows you to assign values to multiple variables in one line:
```py
x, y, z = "Orange", "Banana", "Cherry"
print(x)
print(y)
print(z)
```

And you can assign the same value to multiple variables in one line:
```py
x = y = z = "Orange"
print(x)
print(y)
print(z)
```

If you have a collection of values in a list, tuple etc. Python allows you to extract the values into variables. This is called unpacking.
```py
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
print(x)
print(y)
print(z)
```

### Outputting Variables

The Python "print()" function is often used to output variables.

You can also use it to output multiple variables, separated either by commas, or by + operators, which will concatenate string variables, or add numerical variables, as long as both variables are of the same data type.

### Global Variables

Variables that are created outside of a function (as in all of the examples above) are known as global variables.

Global variables can be used by everyone, both inside of functions and outside.

Normally, when you create a variable inside a function, that variable is local, and can only be used inside that function.

To create a global variable inside a function, you can use the global keyword.

Also, use the global keyword if you want to change a global variable inside a function.


## Python Data Types

Python has various built-in data types:

    Text Type: str
    Numeric Types: int, float, complex
    Sequence Types: list, tuple, range
    Mapping Type: dict
    Set Types: set, frozenset
    Boolean Type: bool
    Binary Types: bytes, bytearray, memoryview
    None Type: NoneType

You can get the data type of any object by using the type() function.

Generally in Python, the data type of a variable is set when you assign a value to it, depending on whatever the data type of that value is. 


## Python Numbers

There are three numeric types in Python:

- int
- float
- complex

### Int

Int, or integer, is a whole number, positive or negative, without decimals, of unlimited length.
```py
x = 1
y = 35656222554887711
z = -3255522
print(type(x))
print(type(y))
print(type(z))
```

### Float

Float, or "floating point number" is a number, positive or negative, containing one or more decimals.
```py
x = 1.10
y = 1.0
z = -35.59

print(type(x))
print(type(y))
print(type(z))
```

Float can also be scientific numbers with an "e" to indicate the power of 10.
```py
x = 35e3
y = 12E4
z = -87.7e100

print(type(x))
print(type(y))
print(type(z))
```

### Complex

Complex numbers are written with a "j" as the imaginary part:
```py
x = 3+5j
y = 5j
z = -5j

print(type(x))
print(type(y))
print(type(z))
```

### Type Conversion

You can convert from one type to another with the int(), float(), and complex() methods:
```py
x = 1    # int
y = 2.8  # float
z = 1j   # complex

#convert from int to float:
a = float(x)

#convert from float to int:
b = int(y)

#convert from int to complex:
c = complex(x)

print(a)
print(b)
print(c)

print(type(a))
print(type(b))
print(type(c))
```

Note: You cannot convert complex numbers into another number type.

### Random Number

Python does not have a random() function to make a random number, but Python has a built-in module called random that can be used to make random numbers:
```py
import random

print(random.randrange(1, 10)) 
```


## Python Casting

There may be times when you want to specify a type on to a variable. This can be done with casting. Python is an object-orientated language, and as such it uses classes to define data types, including its primitive types.

Casting in python is therefore done using constructor functions:

- int() - constructs an integer number from an integer literal, a float literal (by removing all decimals), or a string literal (providing the string represents a whole number)
- float() - constructs a float number from an integer literal, a float literal or a string literal (providing the string represents a float or an integer)
- str() - constructs a string from a wide variety of data types, including strings, integer literals and float literals
    
```py
x = int(1)   # x will be 1
y = int(2.8) # y will be 2
z = int("3") # z will be 3
```


## Python Strings

Like many other popular programming languages, strings in Python are arrays of bytes representing unicode characters.

However, Python does not have a character data type, a single character is simply a string with a length of 1.

Square brackets can be used to access elements of the string.
```py
a = "Hello, World!"
print(a[1])
```
This will output the letter "e", as Python indexing is 0-based.

### Looping Through a String

Since strings are arrays, we can loop through the characters in a string, with a for loop.
```py
for x in "banana":
  print(x)
```

### Check String

To check if a certain phrase or character is present in a string, we can use the keyword in.
```py
txt = "The best things in life are free!"
print("free" in txt)
```

You can also use the "if" keyword to check if a word is present in a string, or the "NOT" keyword to check the opposite.

### Slicing Strings

You can return a range of characters by using the slice syntax.

Specify the start index and the end index, separated by a colon, to return a part of the string.
```py
b = "Hello, World!"
print(b[2:5])
```

Use negative indexes to start the slice from the end of the string:
```py
b = "Hello, World!"
print(b[-5:-2])
```
This will output "orl".

### Modify Strings

Python has a set of built-in methods that you can use on strings.

- The upper() method returns the string in upper case.
- The lower() method returns the string in lower case.
- The strip() method removes any whitespace from the beginning or the end.
- The replace() method replaces a string, or portion of a string, with another string.
- The split() method returns a list where the text between the specified separator becomes the list items, if it finds instances of a specified "separator".

### Concatenate Strings

To concatenate, or combine, two strings you can use the + operator.

### Format Strings

F-String was introduced in Python 3.6, and is now the preferred way of formatting strings.

To specify a string as an f-string, simply put an f in front of the string literal, and add curly brackets {} as placeholders for variables and other operations.

It allows you to use "placeholders" which can contain variables, operations, functions, and modifiers to format a value inside a string. 

For example:
```py
txt = f"The price is {20 * 59} dollars"
print(txt)
```

Or

```py
price = 59
txt = f"The price is {price} dollars"
print(txt)
```

### Escape Characters

To insert characters that are illegal in a string, use an escape character.

An escape character is a backslash \ followed by the character you want to insert.

### String Methods

Python has a set of built-in methods that you can use on strings:

- capitalize() - Converts the first character to upper case
- casefold() - Converts string into lower case
- center() - Returns a centered string
- count() Returns the number of times a specified value occurs in a string
- encode() - Returns an encoded version of the string
- endswith() - Returns true if the string ends with the specified value
- expandtabs()- Sets the tab size of the string
- find()- Searches the string for a specified value and returns the position of where it was found
- format() - Formats specified values in a string
- format_map() - Formats specified values in a string
- index() - Searches the string for a specified value and returns the position of where it was found
- isalnum() - Returns True if all characters in the string are alphanumeric
- isalpha() - Returns True if all characters in the string are in the alphabet
- isascii() - Returns True if all characters in the string are ascii characters
- isdecimal() - Returns True if all characters in the string are decimals
- isdigit() - Returns True if all characters in the string are digits
- isidentifier() - Returns True if the string is an identifier
- islower() - Returns True if all characters in the string are lower case
- isnumeric() - Returns True if all characters in the string are numeric
- isprintable() - Returns True if all characters in the string are printable
- isspace() - Returns True if all characters in the string are whitespaces
- istitle()  - Returns True if the string follows the rules of a title
- isupper() - Returns True if all characters in the string are upper case
- join() - Joins the elements of an iterable to the end of the string
- ljust() - Returns a left justified version of the string
- lower() - Converts a string into lower case
- lstrip() - Returns a left trim version of the string
- maketrans() - Returns a translation table to be used in translations
- partition() - Returns a tuple where the string is parted into three parts
- replace() - Returns a string where a specified value is replaced with a specified value
- rfind() - Searches the string for a specified value and returns the last position of where it was found
- rindex() - Searches the string for a specified value and returns the last position of where it was found
- rjust() - Returns a right justified version of the string
- rpartition() - Returns a tuple where the string is parted into three parts
- rsplit() - Splits the string at the specified separator, and returns a list
- rstrip() - Returns a right trim version of the string
- split() - Splits the string at the specified separator, and returns a list
- splitlines() - Splits the string at line breaks and returns a list
- startswith() - Returns true if the string starts with the specified value
- strip() - Returns a trimmed version of the string
- swapcase() - Swaps cases, lower case becomes upper case and vice versa
- title() - Converts the first character of each word to upper case
- translate() - Returns a translated string
- upper() - Converts a string into upper case
- zfill() - Fills the string with a specified number of 0 values at the beginning


## Python Booleans

Booleans represent one of two values: True or False.

In programming you often need to know if an expression is True or False.

You can evaluate any expression in Python, and get one of two answers, True or False.

When you compare two values, the expression is evaluated and Python returns the Boolean answer:
```py
print(10 > 9)
print(10 == 9)
print(10 < 9) 
```

```py
a = 200
b = 33

if b > a:
  print("b is greater than a")
else:
  print("b is not greater than a")
```

### Evaluate Values and Variables

The bool() function allows you to evaluate any value, and give you True or False in return.
```py
print(bool("Hello"))
print(bool(15))
```

Almost any value is evaluated to True if it has some sort of content.

Any string is True, except empty strings.

Any number is True, except 0.

Any list, tuple, set, and dictionary are True, except empty ones.

In fact, there are not many values that evaluate to False, except empty values, such as (), [], {}, "", the number 0, and the value None. And of course the value False evaluates to False.

### Functions can Return a Boolean

You can create functions that returns a Boolean Value:
```py
def myFunction() :
  return True

print(myFunction())
```

You can execute code based on the Boolean answer of a function:
```py
def myFunction() :
  return True

if myFunction():
  print("YES!")
else:
  print("NO!")
```

Python also has many built-in functions that return a boolean value, like the isinstance() function, which can be used to determine if an object is of a certain data type:
```py
x = 200
print(isinstance(x, int)) 
```

## Python Operators

Operators are used to perform operations on variables and values.

Python divides the operators in the following groups:

- Arithmetic operators
- Assignment operators
- Comparison operators
- Logical operators
- Identity operators
- Membership operators
- Bitwise operators


## Python Lists
## Python Tuples
## Python Sets
## Python Dictionaries
## Python If...Else
## Python While Loops
## Python For Loops
## Python Functions
## Python Lambda
## Python Arrays
## Python Classes/Objects
## Python Inheritance
## Python Iterators
## Python Polymorphism
## Python Scope
## Python Modules
## Python Dates
## Python Math
## Python JSON
## Python RegEx
## Python PIP
## Python Try...Except
## Python User Input
## Python String Formatting