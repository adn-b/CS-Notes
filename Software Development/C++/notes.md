# C++ Notes - Aidan Butler
### Following the W3Schools curriculum with my own insight and touch.

## C++ Basics

C++ is an extension of the C language, and uses almost identical syntax. The main difference is that C++ supports classes and objects, and is therefore considered object-oriented.

In order to build programs in C++, a compiler is needed. I personally use GCC. Additionally, where libraries are needed, these must be installed locally. The directories for these folders must be included in the build command, so that the compiler knows where to access them.

"Header" files, or .h files, contain classes which can be included and used in your code. "#include 'headername.h'" is the syntax used to include these files.


## C++ Syntax

C++ ignores whitespace, however intendation and spacing is used to make code more readable.


## C++ Output

The "cout" object can be used with the "<<" operator to output text, such as strings, integers, or essentially any variable.

"cout" objects can be used repeatedly, but "endl" must be used after the second "<<" operator to print the text on a new line. 

See example below:

```c++
#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!"; endl
  cout << "I am learning C++";
  return 0;
}
```

"return 0;" is used to end the function.

"\n" can also be used to start a new line in-text.


## C++ Comments

"//" is used to add comments in C++.

Multi-line comments start with /* and end with */.


## C++ Variables

In C++, there are different types of variables (defined with different keywords), for example:

- int - stores integers (whole numbers), without decimals, such as 123 or -123
- double - stores floating point numbers, with decimals, such as 19.99 or -19.99
- char - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes
- string - stores text, such as "Hello World". String values are surrounded by double quotes
- bool - stores values with two states: true or false


To create a variable, specify the type and assign it a value:

```c++
int number = 1;
```

You can also declare a variable without assigning the value, and assign the value later:
```c++
int myNum;
myNum = 15;
cout << myNum; 
```

You can output a variable alongside text like this:
```c++
int myAge = 35;
cout << "I am " << myAge << " years old."; 
```

You can declare multiple variables like this:
```c++
int x = 5, y = 6, z = 50;
```

All C++ variables must be identified with unique names, these are called identifiers.

Constants, similarly to other languages, are variables which cannot be modified, only read. These are declared with the "const" keyword.


## C++ User Input

"cin" is a predefined variable which read data from the keyboard with the extraction operator ">>". You can place this data into a variable with the following syntax:

```c++
int x;
cout << "Type a number:";
cin >> x;
cout << "Your number is: " << x;
```


## C++ Data Types

The data type specifies the size and type of information the variable will store:
- Boolean - 1 byte - Stores true or false values
- Char - 1 byte - Stores a single character/letter/number, or ASCII values
- Int - 2 or 4 bytes - Stores whole numbers, without decimals
- Float - 4 bytes - Stores fractional numbers, containing one or more decimals. Sufficient for storing 6-7 decimal digits.
- Double - 8 bytes - Stores fractional numbers, containing one or more decimals. Sufficient for storing 15 decimal digits.


## C++ Operators

Operators are used to perform operations on variables and values.

Arithmetic operators are used to perform common mathematical operations:
| Operator | Name | Description | Example |
|:--------:|------|-------------|:---------:|
\+ | Addition | Adds together two values | x + y
\- | Subtraction | Subtracts one value from another | x - y
\* | Multiplication | Multiplies two values | x * y
/ | Division | Divides one value by another | x / y
% | Modulus | Returns the division remainder | x % y
++ | Increment  | Increases the value of a variable by 1 | ++x	
-- | Decrement  | Decreases the value of a variable by 1 | --x



Assignment operators shorthands are used to assign data to variables:
| Operator | Example | Same As |
|:--------:|:-------:|:-------:|
= | x = 5 | x = 5 |	
+= | x += 3 | x = x + 3 	
-= | x -= 3 | x = x - 3 	
*= | x *= 3 | x = x * 3 	
/= | x /= 3 | x = x / 3 	
%= | x %= 3 | x = x % 3 	
&= | x &= 3 | x = x & 3 	
\|= |x \|= 3 | x = x \| 3 	
^= | x ^= 3 | x = x ^ 3 	
\>\>= | x >>= 3 | x = x >> 3 	
<<= | x <<= 3 | x = x << 3


Comparison operators are used to compare two values/variables. These are very useful for making decisions in code:
| Operator | Name | Example |
|:--------:|------|:-------:|
== | Equal to | x == y 	
!= | Not equal | x != y 	
\> | Greater than | x > y 	
< | Less than | x < y 	
\>= | Greater than or equal to | x >= y 	
<= | Less than or equal to | x <= y


As with comparison operators, you can also test for true (1) or false (0) values with logical operators. Logical operators are used to determine the logic between variables or values:
| Operator | Name | Description | Example |
|:--------:|------|-------------|:-------:|
&& | Logical and | Returns true if both statements are true | x < 5 &&  x < 10 	
\| \| | Logical or | Returns true if one of the statements is true | x < 5 \|\| x < 4 	
! | Logical not | Reverse the result, returns false if the result is true | !(x < 5 && x < 10)


## C++ Strings

A string variable contains a collection of characters surrounded by double quotes.

To use strings, you must include an additional header file in the source code, the \<string\> library.




## C++ Math
## C++ Booleans
## C++ Conditions
## C++ Switch
## C++ While Loop
## C++ For Loop
## C++ Break/Continue
## C++ Arrays
## C++ Structures
## C++ References
## C++ Pointers




## C++ Functions
## C++ Function Parameters
## C++ Function Overloading
## C++ Recursion
## C++ OOP
## C++ Classes/Objects
## C++ Class Methods
## C++ Constructors
## C++ Access Specifiers
## C++ Encapsulation
## C++ Inheritance
## C++ Polymorphism
## C++ Files
## C++ Exceptions
