# C++ Notes - Aidan Butler
### Following the W3Schools curriculum with my own insight and touch.

## C++ Basics 

C++ is an extension of the C language, and uses almost identical syntax. The main difference is that C++ supports classes and objects, and is therefore considered object-oriented.

In order to build programs in C++, a compiler is needed. I personally use GCC. Additionally, where libraries are needed, these must be installed locally. The directories for these folders must be included in the build command, so that the compiler knows where to access them.

"Header" files, or .h files, contain classes which can be included and used in your code. "#include 'headername.h'" is the syntax used to include these files.


## C++ Syntax

C++ ignores whitespace, however intendation and spacing is used to make code more readable.


## C++ Output

### Print Text

The "cout" object can be used with the "<<" operator to output text, such as strings, integers, or essentially any variable.

### New Lines

"cout" objects can be used repeatedly, but "endl" must be used after the second "<<" operator to print the text on a new line. 

See example below:

```c++
#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!" << endl;
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

### Declaring Variables

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

### Multiple Variables

You can declare multiple variables like this:
```c++
int x = 5, y = 6, z = 50;
```

### Identifiers

All C++ variables must be identified with unique names, these are called identifiers.

### Constants

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

### Arithmetic

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

### Assignment

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

### Comparison

Comparison operators are used to compare two values/variables. These are very useful for making decisions in code:
| Operator | Name | Example |
|:--------:|------|:-------:|
== | Equal to | x == y 	
!= | Not equal | x != y 	
\> | Greater than | x > y 	
< | Less than | x < y 	
\>= | Greater than or equal to | x >= y 	
<= | Less than or equal to | x <= y

### Logical

As with comparison operators, you can also test for true (1) or false (0) values with logical operators. Logical operators are used to determine the logic between variables or values:
| Operator | Name | Description | Example |
|:--------:|------|-------------|:-------:|
&& | Logical and | Returns true if both statements are true | x < 5 &&  x < 10 	
\| \| | Logical or | Returns true if one of the statements is true | x < 5 \|\| x < 4 	
! | Logical not | Reverse the result, returns false if the result is true | !(x < 5 && x < 10)


## C++ Strings

A string variable contains a collection of characters surrounded by double quotes.

To use strings, you must include an additional header file in the source code, the \<string\> library.

### Concatenation

String concatenation is where two strings are added together to make a new string. This can be done by using the "+" operator between two strings.

You can also concatenate strings with the string1.append(string2) function.

**It should be noted that the "+" operator is used for both addition and concatenation.**

### String Length

To get the legth of a string, use the length() function.

### Access Strings

To access an individual character in a string, you can use the index number inside square brackets, i.e. string[0] would return the first character. Specific characters can also be modified in the same way, i.e. string[0] = 'J';.

### Special Characters

Because strings must be written within quotes, C++ will misunderstand this string, and generate an error: string txt = "We are the so-called "Vikings" from the north.";. The solution to avoid this problem, is to use the backslash escape character, for example "We are the so-called \"Vikings\" from the north". Using two backslashes will insert a single backslash into a string.

### User Input Strings

It is possible to use the extraction operator >> on cin to store a string entered by a user:
```c++
string firstName;
cout << "Type your first name: ";
cin >> firstName; // get user input from the keyboard
cout << "Your name is: " << firstName;

// Type your first name: John
// Your name is: John
```

However, cin considers a space (whitespace, tabs, etc) as a terminating character, which means that it can only store a single word (even if you type many words):
```c++
string fullName;
cout << "Type your full name: ";
cin >> fullName;
cout << "Your name is: " << fullName;

// Type your full name: John Doe
// Your name is: John 
```

That's why, when working with strings, we often use the getline() function to read a line of text. It takes cin as the first parameter, and the string variable as second:
```c++
string fullName;
cout << "Type your full name: ";
getline (cin, fullName);
cout << "Your name is: " << fullName;

// Type your full name: John Doe
// Your name is: John Doe 
```


## C++ Math

The max(x,y) function can be used to find the highest value of x and y.

And the min(x,y) function can be used to find the lowest value of x and y.

Other functions, such as sqrt (square root), round (rounds a number) and log (natural logarithm), can be found in the **\<cmath>** header file.


## C++ Booleans

A boolean variable is declared with the bool keyword and can only take the values true or false. A Boolean expression returns a boolean value that is either 1 (true) or 0 (false).

This is useful to build logic, and find answers.

You can use a comparison operator, such as the greater than (>) operator, to find out if an expression (or variable) is true or false:
```c++
int x = 10;
int y = 9;
cout << (x > y); // returns 1 (true), because 10 is higher than 9
```


Or even easier:
```c++
cout << (10 > 9); // returns 1 (true), because 10 is higher than 9 
```


## C++ Conditions

C++ supports the usual logical conditions from mathematics:

- Less than: a < b
- Less than or equal to: a <= b
- Greater than: a > b
- Greater than or equal to: a >= b
- Equal to a == b
- Not Equal to: a != b

You can use these conditions to perform different actions for different decisions.

C++ has the following conditional statements:

- Use if to specify a block of code to be executed, if a specified condition is true
- Use else to specify a block of code to be executed, if the same condition is false
- Use else if to specify a new condition to test, if the first condition is false
- Use switch to specify many alternative blocks of code to be executed

These behave very similarly to other languages, with "else" and "else if" requiring an "if" condition.


There is also a short-hand if else, which is known as the ternary operator because it consists of three operands. It can be used to replace multiple lines of code with a single line. It is often used to replace simple if else statements:
```c++
variable = (condition) ? expressionTrue : expressionFalse;
```

## C++ Switch

Use the switch statement to select one of many code blocks to be executed.
Syntax:
```c++
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

This is how it works:

- The switch expression is evaluated once
- The value of the expression is compared with the values of each case
- If there is a match, the associated block of code is executed
- The break and default keywords are optional, and will be described later in this chapter

Another example:

```c++
int day = 4;
switch (day) {
  case 1:
    cout << "Monday";
    break;
  case 2:
    cout << "Tuesday";
    break;
  case 3:
    cout << "Wednesday";
    break;
  case 4:
    cout << "Thursday";
    break;
  case 5:
    cout << "Friday";
    break;
  case 6:
    cout << "Saturday";
    break;
  case 7:
    cout << "Sunday";
    break;
}
// Outputs "Thursday" (day 4) 
```


## C++ While Loop

Loops are used to execute code as long as a specified condition is reached/satisified.

### While Loop

The while loop loops through a block of code as long as a specified condition is true:
```c++
int i = 0;
while (i < 5) {
  cout << i << "\n";
  i++;
}
```
### Do/While Loop

The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true:
```c++
int i = 0;
do {
  cout << i << "\n";
  i++;
}
while (i < 5);
```


## C++ For Loop

"For" loops are used to loop through a block of code for a specified amount of times, such as for each item in a data structure.

For example, in the code below, 3 arguments are used in the loop:
- "i" is set at 0, then the condition
- "while i < 5" is set
- Instruction "i++" is set to be executed each time the code block within the loop is executed.
```c++
for (int i = 0; i < 5; i++) {
  cout << i << "\n";
}
```

It is also possible to place a loop inside another loop. This is called a nested loop.

The "inner loop" will be executed one time for each iteration of the "outer loop":
```c++
// Outer loop
for (int i = 1; i <= 2; ++i) {
  cout << "Outer: " << i << "\n"; // Executes 2 times

  // Inner loop
  for (int j = 1; j <= 3; ++j) {
    cout << " Inner: " << j << "\n"; // Executes 6 times (2 * 3)
  }
}
```

The foreach Loop

There is also a "for-each loop" (introduced in C++ version 11 (2011), which is used exclusively to loop through elements in an array (or other data sets):
```c++
int myNumbers[5] = {10, 20, 30, 40, 50};
for (int i : myNumbers) {
  cout << i << "\n";
}
```


## C++ Break/Continue

The break statement can also be used to jump out of a loop.
```c++
for (int i = 0; i < 10; i++) {
  if (i == 4) {
    break;
  }
  cout << i << "\n";
}
```

The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

This example skips the value of 4:

```c++
for (int i = 0; i < 10; i++) {
  if (i == 4) {
    continue;
  }
  cout << i << "\n";
}
```

You can also use break and continue in while loops.


## C++ Arrays

Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.

To declare an array, define the variable type, specify the name of the array followed by square brackets and (optionally) specify the number of elements it should store:
```c++
string cars[4];
```

We have now declared a variable that holds an array of four strings. To insert values to it, we can use an array literal - place the values in a comma-separated list, inside curly braces:
```c++
string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
```


To change the value of a specific element, refer to the index number:
```c++
cars[0] = "Opel";
```

### Array Loops

You can loop through the array elements with the for loop:
```c++
string cars[5] = {"Volvo", "BMW", "Ford", "Mazda", "Tesla"};
for (int i = 0; i < 5; i++) {
  cout << cars[i] << "\n";
}
```

### Get Array Size

To get the size of an array (in bytes), you can use the sizeof() operator. 

### Multi-Dimensional Arrays

A multi-dimensional array is an array of arrays. To declare a multi-dimensional array, define the variable type, specify the name of the array followed by square brackets which specify how many elements the main array has, followed by another set of square brackets which indicates how many elements the sub-arrays have. Inside the 1st dimension array, you put both 2nd dimension arrays, with each item listed like normal:

```c++
string letters[2][4] = {
  { "A", "B", "C", "D" },
  { "E", "F", "G", "H" }
};
```

Arrays can have any number of dimensions. The more dimensions an array has, the more complex the code becomes. The following array has three dimensions:
```c++
string letters[2][2][2] = {
  {
    { "A", "B" },
    { "C", "D" }
  },
  {
    { "E", "F" },
    { "G", "H" }
  }
};
```

To access an element of a multi-dimensional array, specify an index number in each of the array's dimensions.

## C++ Structures

Structures (also called structs) are a way to group several related variables into one place. Each variable in the structure is known as a member of the structure.

These can effectively be used as templates for objects, as objects take on the structure and have each variable as an attribute. Below is an example with cars:
```c++
struct {
  string brand;
  string model;
  int year;
} myCar1, myCar2; // We can add variables by separating them with a comma here

// Put data into the first structure
myCar1.brand = "BMW";
myCar1.model = "X5";
myCar1.year = 1999;

// Put data into the second structure
myCar2.brand = "Ford";
myCar2.model = "Mustang";
myCar2.year = 1969;

// Print the structure members
cout << myCar1.brand << " " << myCar1.model << " " << myCar1.year << "\n";
cout << myCar2.brand << " " << myCar2.model << " " << myCar2.year << "\n";
```

This saves time because you can create a structure and use it for multiple objects (stored as variables), and then set each attribute for those objects in a more structured way.

By giving a name to the structure, you can treat it as a data type. This means that you can create variables with this structure anywhere in the program at any time.

To declare a variable that uses the structure, use the name of the structure as the data type of the variable:
```c++
myDataType myVar;
```

For example:
```c++
car myCar1;
myCar1.brand = "BMW";
myCar1.model = "X5";
myCar1.year = 1999;

// Create another car structure and store it in myCar2;
car myCar2;
myCar2.brand = "Ford";
myCar2.model = "Mustang";
myCar2.year = 1969;
```


## C++ References

### Create References

A reference variable is a "reference" to an existing variable, and it is created with the "&" operator:
```c++
string food = "Pizza";  // food variable
string &meal = food;    // reference to food
```

Now, we can use either the variable name food or the reference name meal to refer to the food variable:
```c++
string food = "Pizza";
string &meal = food;

cout << food << "\n";  // Outputs Pizza
cout << meal << "\n";  // Outputs Pizza
```

These are more useful when used dynamically for memory management.

### Memory Address

The "&" operator can also be used to get the memory address of a variable:
```c++
cout << &food; // outputs address in hex form, e.g. 0x6dfed4
```


## C++ Pointers

A pointer is a variable that stores the memory address as its value. 

A pointer variable points to a data type (like int or string) of the same type, and is created with the * operator. The address of the variable you're working with is assigned to the pointer:
```c++
string food = "Pizza";  // A food variable of type string
string* ptr = &food;    // A pointer variable, with the name ptr, that stores the address of food

// Output the value of food (Pizza)
cout << food << "\n";

// Output the memory address of food (0x6dfed4)
cout << &food << "\n";

// Output the memory address of food with the pointer (0x6dfed4)
cout << ptr << "\n";
```


## C++ Functions

Functions are very typical in C++; they take parameters and execute blocks of code when called.

C++ provides some pre-defined functions, such as main(), which is called automatically when a program is ran. 

To declare a function, specify the name of the function, followed by brackets ():
```c++
void myFunction() {
  // code to be executed
}
```
In this instance, "void" means that the function **does not have a return value**. Return values will be discussed more in the next chapter.

To call a function, simply write the name of the function along with two brackets, e.g. myFunction();.


## C++ Function Parameters

### Parameters/Arguments

Parameters are passed inside the brackets and act as variables inside the function. **Parameters must have their data type declared as if you were declaring a variable normally.**

For example:
```c++
void myFunction(string fname) {
  cout << fname << " Refsnes\n";
}

int main() {
  myFunction("Liam");
  myFunction("Jenny");
  myFunction("Anja");
  return 0;
}

// Liam Refsnes
// Jenny Refsnes
// Anja Refsnes
```

### Default Parameters

You can also use what is called a "default parameter" where a specific parameter is passed into the function, **but only if no parameter is passed in.**

For example:
```c++
void myFunction(string country = "Norway") {
  cout << country << "\n";
}

int main() {
  myFunction("Sweden");
  myFunction("India");
  myFunction();
  myFunction("USA");
  return 0;
}

// Sweden
// India
// Norway
// USA
```

You can pass as many parameters into a function as you like.

### Return Values

As discussed in the previous chapter, the "void" keyword was used before a function declaration, because the function does not return any values. 

In C++, when declaring a function, you must state the data type of the return value which the function is intended to return. These could include:
- int
- float
- double
- char
- bool
- void
- Modifiers (signed/unsigned, short/long, short int/long double etc.)
- Pointers (int*, char*, double*, etc)
- References (int&, char&, etc)
- Structures/Classes/Unions
- Arrays
- Pointers to other functions

And so on.

### Passing By Reference.

**Passing by reference** is an important concept, and differs to **passing by value**. 

Study the function below. If I was to pass two numbers into a fuction like this, with "int x, int y" as the parameters, then "int x" and "int y" will actually **take on the value of firstNum and secondNum.** This means that when I call the function and pass firstNum and secondNum as parameters, then the actual values of integers x and y will change within the swapNums() function, and firstNum and secondNum in the main() function will remain unchanged.

```c++
void swapNums(int x, int y) {
  int z = x;
  x = y;
  y = z;
}

int main() {
  int firstNum = 10;
  int secondNum = 20;

  cout << "Before swap: " << "\n";
  cout << firstNum << secondNum << "\n";

  // Call the function, which will change the values of firstNum and secondNum
  swapNums(firstNum, secondNum);

  cout << "After swap: " << "\n";
  cout << firstNum << secondNum << "\n";

  return 0;
}
// Output:
// Before swap: 
// 1020
// After swap:
// 1020
```

However, in the function below, I have used the "&" operator to pass both of the parameters **by reference.** This means that "int x" and "int y" are effectively aliases for integers "firstNum" and "secondNum", and when the operations in swapNums() are complete, the values of firstNum and secondNum will be changed.

```c++
void swapNums(int &x, int &y) {
  int z = x;
  x = y;
  y = z;
}

int main() {
  int firstNum = 10;
  int secondNum = 20;

  cout << "Before swap: " << "\n";
  cout << firstNum << secondNum << "\n";

  // Call the function, which will change the values of firstNum and secondNum
  swapNums(firstNum, secondNum);

  cout << "After swap: " << "\n";
  cout << firstNum << secondNum << "\n";

  return 0;
}
// Output:
// Before swap: 
// 1020
// After swap:
// 2010
```

### Pass Arrays

You can also pass arrays to a function, but you must include the type and size of the array, like so:
```c++
void myFunction(int myNumbers[5]) {
  for (int i = 0; i < 5; i++) {
    cout << myNumbers[i] << "\n";
  }
}

int main() {
  int myNumbers[5] = {10, 20, 30, 40, 50};
  myFunction(myNumbers);
  return 0;
}
```


## C++ Function Overloading

With function overloading, multiple functions can have the same name with different parameters, and which return different value types:
```c++
int myFunction(int x)
float myFunction(float x)
double myFunction(double x, double y)
```

Consider the following example, which has two functions that add numbers of different type:
```c++
int plusFuncInt(int x, int y) {
  return x + y;
}

double plusFuncDouble(double x, double y) {
  return x + y;
}

int main() {
  int myNum1 = plusFuncInt(8, 5);
  double myNum2 = plusFuncDouble(4.3, 6.26);
  cout << "Int: " << myNum1 << "\n";
  cout << "Double: " << myNum2;
  return 0;
}
```

Instead of defining two functions that should do the same thing, it is better to overload one. 


## C++ Recursion

Recursion is the technique of making a function call itself. This technique provides a way to break complicated problems down into simple problems which are easier to solve.

Adding two numbers together is easy to do, but adding a range of numbers is more complicated. In the following example, recursion is used to add a range of numbers together by breaking it down into the simple task of adding two numbers:
```c++
int sum(int k) {
  if (k > 0) {
    return k + sum(k - 1);
  } else {
    return 0;
  }
}

int main() {
  int result = sum(10);
  cout << result;
  return 0;
}
```

When the sum() function is called, it adds parameter k to the sum of all numbers smaller than k and returns the result. When k becomes 0, the function just returns 0. When running, the program follows these steps:
- 10 + sum(9)
- 10 + ( 9 + sum(8) )
- 10 + ( 9 + ( 8 + sum(7) ) )
- ...
- 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + sum(0)
- 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + 0 


## C++ OOP

OOP stands for Object-Oriented Programming.

Procedural programming is about writing procedures or functions that perform operations on the data, while object-oriented programming is about creating objects that contain both data and functions.

Object-oriented programming has several advantages over procedural programming:
- OOP is faster and easier to execute
- OOP provides a clear structure for the programs
- OOP helps to keep the C++ code DRY "Don't Repeat Yourself", and makes the code easier to maintain, modify and debug
- OOP makes it possible to create full reusable applications with less code and shorter development time

C++ is an object-oriented language, which means it uses classes, objects, and therefore techniques like encapsulation, inheritence, and polymorphism, which provide many advantages in coding, as will be discussed in the following chapters.

### What are Classes and Objects?

The following table will explain the differences:
| Class | Objects |
|:-----:|:-------:|
Fruit | Apple
| | Banana
| | Mango

Or:

| Class | Objects |
|:-----:|:-------:|
Car Brand | Volvo
| | Audi
| | Toyota

A class is effectively a template for objects, consisting of "attributes" and "methods", which are variables or functions. When the individual objects are created, they inherit all the variables and functions from the class. 


## C++ Classes/Objects

Everything in C++ is associated with classes and objects, along with its attributes and methods. For example: in real life, a car is an object. The car has attributes, such as weight and color, and methods, such as drive and brake.

Attributes and methods are basically variables and functions that belongs to the class. These are often referred to as "class members".

A class is a user-defined data type that we can use in our program, and it works as an object constructor, or a "blueprint" for creating objects.

### Creating a Class

To create a class, use the class keyword:
```c++
class MyClass {       // The class
  public:             // Access specifier
    int myNum;        // Attribute (int variable)
    string myString;  // Attribute (string variable)
};
```

The "public" keyword is an access specifier, which specifies that members (attributes and methods) of the class are accessible from outside the class. 

### Creating an Object

To create an object of MyClass, specify the class name, followed by the object name.

To access the class attributes (myNum and myString), use the dot syntax (.) on the object:

```c++
class MyClass {       // The class
  public:             // Access specifier
    int myNum;        // Attribute (int variable)
    string myString;  // Attribute (string variable)
};

int main() {
  MyClass myObj;  // Create an object of MyClass

  // Access attributes and set values
  myObj.myNum = 15; 
  myObj.myString = "Some text";

  // Print attribute values
  cout << myObj.myNum << "\n";
  cout << myObj.myString;
  return 0;
}
```

You can create multiple objects of one class:
```c++
// Create a Car class with some attributes
class Car {
  public:
    string brand;   
    string model;
    int year;
};

int main() {
  // Create an object of Car
  Car carObj1;
  carObj1.brand = "BMW";
  carObj1.model = "X5";
  carObj1.year = 1999;

  // Create another object of Car
  Car carObj2;
  carObj2.brand = "Ford";
  carObj2.model = "Mustang";
  carObj2.year = 1969;

  // Print attribute values
  cout << carObj1.brand << " " << carObj1.model << " " << carObj1.year << "\n";
  cout << carObj2.brand << " " << carObj2.model << " " << carObj2.year << "\n";
  return 0;
}
```


## C++ Class Methods

Methods are functions that belongs to the class.

There are two ways to define functions that belongs to a class:

- Inside class definition
- Outside class definition

**Inside class definition:**
```c++
class MyClass {        // The class
  public:              // Access specifier
    void myMethod() {  // Method/function defined inside the class
      cout << "Hello World!";
    }
};

int main() {
  MyClass myObj;     // Create an object of MyClass
  myObj.myMethod();  // Call the method
  return 0;
}
```

**Outside class definition:**
```c++
class MyClass {        // The class
  public:              // Access specifier
    void myMethod();   // Method/function declaration
};

// Method/function definition outside the class
void MyClass::myMethod() {
  cout << "Hello World!";
}

int main() {
  MyClass myObj;     // Create an object of MyClass
  myObj.myMethod();  // Call the method
  return 0;
}
```


You can also add **parameters:**
```c++
#include <iostream>
using namespace std;

class Car {                  // The class
  public:                    // Access specifier
    int speed(int maxSpeed); // Method/function declaration
};

// Method/function definition outside the class
int Car::speed(int maxSpeed) {
  return maxSpeed;
}

int main() {
  Car myObj; // Create an object of Car
  cout << myObj.speed(200); // Call the method with an argument
  return 0;
}
```

## C++ Constructors

### Constructors

A constructor in C++ is a special method that is automatically called when an object of a class is created.

To create a constructor, use the same name as the class, followed by parentheses ():
```c++
class MyClass {     // The class
  public:           // Access specifier
    MyClass() {     // Constructor
      cout << "Hello World!";
    }
};

int main() {
  MyClass myObj;    // Create an object of MyClass (this will call the constructor)
  return 0;
}
```

### Constructor Parameters

Constructors can also take parameters (just like regular functions), which can be useful for setting initial values for attributes.

```c++
class Car {        // The class
  public:          // Access specifier
    string brand;  // Attribute
    string model;  // Attribute
    int year;      // Attribute
    Car(string x, string y, int z) { // Constructor with parameters
      brand = x;
      model = y;
      year = z;
    }
};

int main() {
  // Create Car objects and call the constructor with different values
  Car carObj1("BMW", "X5", 1999);
  Car carObj2("Ford", "Mustang", 1969);

  // Print values
  cout << carObj1.brand << " " << carObj1.model << " " << carObj1.year << "\n";
  cout << carObj2.brand << " " << carObj2.model << " " << carObj2.year << "\n";
  return 0;
}
```

Just like functions, constructors can also be defined outside the class. First, declare the constructor inside the class, and then define it outside of the class by specifying the name of the class, followed by the scope resolution :: operator, followed by the name of the constructor (which is the same as the class):
```c++
class Car {        // The class
  public:          // Access specifier
    string brand;  // Attribute
    string model;  // Attribute
    int year;      // Attribute
    Car(string x, string y, int z); // Constructor declaration
};

// Constructor definition outside the class
Car::Car(string x, string y, int z) {
  brand = x;
  model = y;
  year = z;
}

int main() {
  // Create Car objects and call the constructor with different values
  Car carObj1("BMW", "X5", 1999);
  Car carObj2("Ford", "Mustang", 1969);

  // Print values
  cout << carObj1.brand << " " << carObj1.model << " " << carObj1.year << "\n";
  cout << carObj2.brand << " " << carObj2.model << " " << carObj2.year << "\n";
  return 0;
}
```


## C++ Access Specifiers

Access specifiers define how the members (attributes and methods) of a class can be accessed.

In C++, there are three access specifiers:
- public - members are accessible from outside the class
- private - members cannot be accessed (or viewed) from outside the class
- protected - members cannot be accessed from outside the class, however, they can be accessed in inherited classes. You will learn more about Inheritance later.


In the following example, we demonstrate the differences between public and private members:
```c++
class MyClass {
  public:    // Public access specifier
    int x;   // Public attribute
  private:   // Private access specifier
    int y;   // Private attribute
};

int main() {
  MyClass myObj;
  myObj.x = 25;  // Allowed (public)
  myObj.y = 50;  // Not allowed (private)
  return 0;
}
```

If you try to access a private member, an error occurs:

    error: y is private 

**Note:** By default, all members of a class are private if you don't specify an access specifier.


## C++ Encapsulation

The meaning of Encapsulation, is to make sure that "sensitive" data is hidden from users. To achieve this, you must declare class variables/attributes as private (cannot be accessed from outside the class). If you want others to read or modify the value of a private member, you can provide public get and set methods.

To access a private attribute, use public "get" and "set" methods:
```c++
#include <iostream>
using namespace std;

class Employee {
  private:
    // Private attribute
    int salary;

  public:
    // Setter
    void setSalary(int s) {
      salary = s;
    }
    // Getter
    int getSalary() {
      return salary;
    }
};

int main() {
  Employee myObj;
  myObj.setSalary(50000);
  cout << myObj.getSalary();
  return 0;
}
// Output:
// 50000
```

**Example explained:**
- The salary attribute is private, which have restricted access.
- The public setSalary() method takes a parameter (s) and assigns it to the salary attribute (salary = s).
- The public getSalary() method returns the value of the private salary attribute.
- Inside main(), we create an object of the Employee class. Now we can use the setSalary() method to set the value of the private attribute to 50000. Then we call the getSalary() method on the object to return the value.


## C++ Inheritance

In C++, it is possible to inherit attributes and methods from one class to another. We group the "inheritance concept" into two categories:

- Derived class (child) - the class that inherits from another class
- Base class (parent) - the class being inherited from

To inherit from a class, use the : symbol.

In the example below, the Car class (child) inherits the attributes and methods from the Vehicle class (parent):
```c++
// Base class
class Vehicle {
  public:
    string brand = "Ford";
    void honk() {
      cout << "Tuut, tuut! \n" ;
    }
};

// Derived class
class Car: public Vehicle {
  public:
    string model = "Mustang";
};

int main() {
  Car myCar;
  myCar.honk();
  cout << myCar.brand + " " + myCar.model;
  return 0;
}
// Output:
// Tuut, tuut!
// Ford Mustang 
```

### Multilevel Inheritance

A class can also be derived from one class, which is already derived from another class.

In the following example, MyGrandChild is derived from class MyChild (which is derived from MyClass).
```c++
// Base class (parent)
class MyClass {
  public:
    void myFunction() {
      cout << "Some content in parent class." ;
    }
};

// Derived class (child)
class MyChild: public MyClass {
};

// Derived class (grandchild)
class MyGrandChild: public MyChild {
};

int main() {
  MyGrandChild myObj;
  myObj.myFunction();
  return 0;
} 
```

### Multiple Inheritance

A class can also be derived from more than one base class, using a comma-separated list:
```c++
// Base class
class MyClass {
  public:
    void myFunction() {
      cout << "Some content in parent class." ;
    }
};

// Another base class
class MyOtherClass {
  public:
    void myOtherFunction() {
      cout << "Some content in another class." ;
    }
};

// Derived class
class MyChildClass: public MyClass, public MyOtherClass {
};

int main() {
  MyChildClass myObj;
  myObj.myFunction();
  myObj.myOtherFunction();
  return 0;
} 
```

### Access Specifiers

Until now, we have only used public (members of a class are accessible from outside the class) and private (members can only be accessed within the class). The third specifier, protected, is similar to private, but it can also be accessed in the inherited class:

```c++
// Base class
class Employee {
  protected: // Protected access specifier
    int salary;
};

// Derived class
class Programmer: public Employee {
  public:
    int bonus;
    void setSalary(int s) {
      salary = s;
    }
    int getSalary() {
      return salary;
    }
};

int main() {
  Programmer myObj;
  myObj.setSalary(50000);
  myObj.bonus = 15000;
  cout << "Salary: " << myObj.getSalary() << "\n";
  cout << "Bonus: " << myObj.bonus << "\n";
  return 0;
}
// Output:
// Salary: 50000
// Bonus: 15000 
```

**The protected access specificer essentially just means that the derived, or child class can be used to access the protected attributes through set and get functions.**


## C++ Polymorphism

Polymorphism means "many forms", and it occurs when we have many classes that are related to each other by inheritance.

Like we specified in the previous chapter; Inheritance lets us inherit attributes and methods from another class. Polymorphism uses those methods to perform different tasks. This allows us to perform a single action in different ways.

For example, think of a base class called Animal that has a method called animalSound(). Derived classes of Animals could be Pigs, Cats, Dogs, Birds - And they also have their own implementation of an animal sound (the pig oinks, and the cat meows, etc.):
```c++
// Base class
class Animal {
  public:
    void animalSound() {
      cout << "The animal makes a sound \n";
    }
};

// Derived class
class Pig : public Animal {
  public:
    void animalSound() {
      cout << "The pig says: wee wee \n";
    }
};

// Derived class
class Dog : public Animal {
  public:
    void animalSound() {
      cout << "The dog says: bow wow \n";
    }
};
```

Now we can create Pig and Dog objects and override the animalSound() method:
```c++
// Base class
class Animal {
  public:
    void animalSound() {
      cout << "The animal makes a sound \n";
    }
};

// Derived class
class Pig : public Animal {
  public:
    void animalSound() {
      cout << "The pig says: wee wee \n";
    }
};

// Derived class
class Dog : public Animal {
  public:
    void animalSound() {
      cout << "The dog says: bow wow \n";
    }
};

int main() {
  Animal myAnimal;
  Pig myPig;
  Dog myDog;

  myAnimal.animalSound();
  myPig.animalSound();
  myDog.animalSound();
  return 0;
}
// Output:
// The animal makes a sound
// The pig says: wee wee
// The dog says: bow wow 
```


## C++ Files

The fstream library allows us to work with files.

To use the fstream library, include both the standard <iostream> AND the <fstream> header file:
```c++
#include <iostream>
#include <fstream>
```

There are three classes included in the fstream library, which are used to create, write or read files:
| Class | Description |
|-------|-------------|
| ofstream | Creates and writes to files |
| ifstream | Reads from files |
| fstream | A combination of ofstream and ifstream: creates, reads, and writes to files |

### Create And Write To Files

To create a file, use either the ofstream or fstream class, and specify the name of the file.

To write to the file, use the insertion operator (<<).
```c++
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  // Create and open a text file
  ofstream MyFile("filename.txt");

  // Write to the file
  MyFile << "Files can be tricky, but it is fun enough!";

  // Close the file
  MyFile.close();
}
```


## C++ Exceptions

When executing C++ code, different errors can occur: coding errors made by the programmer, errors due to wrong input, or other unforeseeable things.

When an error occurs, C++ will normally stop and generate an error message. The technical term for this is: C++ will throw an exception (throw an error).

### C++ "try" and "catch"

Exception handling in C++ consist of three keywords: try, throw and catch:

- The "try" statement allows you to define a block of code to be tested for errors while it is being executed.
- The "throw" keyword throws an exception when a problem is detected, which lets us create a custom error.
- The "catch" statement allows you to define a block of code to be executed, if an error occurs in the try block.

The "try" and "catch" keywords come in pairs:
```c++
try {
  // Block of code to try
  throw exception; // Throw an exception when a problem arise
}
catch () {
  // Block of code to handle errors
}
```

Consider the following example:
```c++
try {
  int age = 15;
  if (age >= 18) {
    cout << "Access granted - you are old enough.";
  } else {
    throw (age);
  }
}
catch (int myNum) {
  cout << "Access denied - You must be at least 18 years old.\n";
  cout << "Age is: " << myNum;
}
```

In this example, because the "throw" statement simply "throws" the age variable, the "catch" statement then takes that variable as a parameter, and defines it as "int myNum".


You can also use the throw keyword to output a reference number, like a custom error number/code for organizing purposes:
```c++
try {
  int age = 15;
  if (age >= 18) {
    cout << "Access granted - you are old enough.";
  } else {
    throw 505;
  }
}
catch (int myNum) {
  cout << "Access denied - You must be at least 18 years old.\n";
  cout << "Error number: " << myNum;
} 
```

### Handle Any Type of Exceptions (...)

If you do not know the data type returned from the "throw" statement, you can use the "three dots" syntax (...) inside the catch block, which will handle any type of exception:
```c++
try {
  int age = 15;
  if (age >= 18) {
    cout << "Access granted - you are old enough.";
  } else {
    throw 505;
  }
}
catch (...) {
  cout << "Access denied - You must be at least 18 years old.\n";
}
```


## Footnote

This has been my C++ notes, please use at your leisure for studying or reference. I hope they are of use :)

Aidan Butler - https://aidan.vip