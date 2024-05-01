# Java Notes - Basics - Aidan Butler
### Following the W3Schools curriculum with my own insight and touch.

## Java Basics

### What is Java?

Java was created in 1995 and is used primarily for:
- Mobile applications (specially Android apps)
- Desktop applications
- Web applications
- Web servers and application servers
- Games
- Database connections
- Etc.

### Installing Java

Java requires an installation which will include the compiler and base language libraries (there are many).

To check if you have Java installed on a Windows PC, search in the start bar for Java or type the following in Command Prompt (cmd.exe):

    java -version 

If Java is installed, you will see something like this (depending on version):

    java version "11.0.1" 2018-10-16 LTS
    Java(TM) SE Runtime Environment 18.9 (build 11.0.1+13-LTS)
    Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.1+13-LTS, mixed mode)

To install Java on Windows:

1. Go to "System Properties" (Can be found on Control Panel > System and Security > System > Advanced System Settings)
2. Click on the "Environment variables" button under the "Advanced" tab
3. Then, select the "Path" variable in System variables and click on the "Edit" button
4. Click on the "New" button and add the path where Java is installed, followed by \bin. By default, Java is installed in C:\Program Files\Java\jdk-11.0.1 (If nothing else was specified when you installed it). In that case, You will have to add a new path with: C:\Program Files\Java\jdk-11.0.1\bin. Then, click "OK", and save the settings
5. At last, open Command Prompt (cmd.exe) and type java -version to see if Java is running on your machine


## Java Syntax

Let's introduce a simple Java code block and explain the syntax:

```java
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
```
- "public class Main \{" 
    - The "public" keyword is used to define that the "class" and all items inside it are accessible by other classes. 
    - The "class" keyword is used to indicate that the code block is a "class" in Java, which is .
    - "Main" is the name of the class. This **must** match the name of the file.java.
- "public static void main(String[] args) \{"
    - This is the declaration of a method within the class above.
    - Again, "public" is used to indicate that this method is accessible by other classes or functions.
    - "static" is used to  indicate that the method is associated with the class, not instances of the class. This means that they can be called without creating an instance of the class. They are used to perform operations that don't require data from any particular object instance.
    - "void" indicates that the method does not return any value.
    - "main" is the name of the method. "String[] args" is used inside the brackets to indicate that the method takes a string array as a parameter. It is used to receive command-line arguments.
- "System.out.println("Hello World");"
    - "System" is a pre-defined class that provides access to the system.
    - "out" is a static member of the System class that represents the standard output stream (usually the console).
    - "println" is a method of the PrintStream class linked to out that prints a line of text to the output stream. In this case, it's printing "Hello World".
    - "Hello World" is the string that println will print to the console.

**Note:** The name of the java file must match the class name.


## Java Output

The method "println()" is used to output values or print text in Java.

You can add as many println() methods as you want. Note that it will add a new line for each method.

When you are working with text, it must be wrapped inside double quotations marks "".

There is also a print() method, which is similar to println(). The only difference is that it does not insert a new line at the end of the output.

You can also use the println() method to print numbers. However, unlike text, we don't put numbers inside double quotes.

You can also perform mathematical calculations inside the println() method:
```java
System.out.println(3 + 3);
```

## Java Comments

Single-line comments start with two forward slashes (//).

Any text between // and the end of the line is ignored by Java (will not be executed).

Multi-line comments start with /* and ends with */.

Any text between /* and */ will be ignored by Java.


## Java Variables

### Variables

Variables are containers for storing data values. 

In Java, there are different types of variables, for example:

- String - stores text, such as "Hello". String values are surrounded by double quotes.
- int - stores integers (whole numbers), without decimals, such as 123 or -123.
- float - stores floating point numbers, with decimals, such as 19.99 or -19.99.
- char - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes.
- boolean - stores values with two states: true or false.

To create a variable, you must specify the type and assign it a value:
```java
type variableName = value;
```

You can also declare a variable without assigning the value, and assign the value later:
```java
int myNum;
myNum = 15;
```

### Declaring Multiple Variables

To declare more than one variable of the same type, you can use a comma-separated list:

Instead of writing:
```java
int x = 5;
int y = 6;
int z = 50;
System.out.println(x + y + z);
```

You can simply write:
```java
int x = 5, y = 6, z = 50;
System.out.println(x + y + z);
```

You can also assign the same value to multiple variables in one line:
```java
int x, y, z;
x = y = z = 50;
System.out.println(x + y + z);
```

### Identifiers

All Java variables must be identified with unique names, these are called identifiers.


## Java Data Types

### Data Types

Data types are divided into two groups:
- Primitive data types - includes byte, short, int, long, float, double, boolean and char
- Non-primitive data types - such as String, Arrays and Classes

### Primitive

A primitive data type specifies the size and type of variable values, and it has no additional methods.

Primitive data types:

|Data Type | Size | Description | Example
|----------|------|------------|---------|
|byte | 1 byte | Stores whole numbers from -128 to 127 | 100
|short | 2 bytes | Stores whole numbers from -32,768 to 32,767 | 5000
|int | 4 bytes | Stores whole numbers from -2,147,483,648 to 2,147,483,647 | 10000
|long | 8 bytes | Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 | 15000000000L
|float | 4 bytes | Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits | 5.75f
|double | 8 bytes | Stores fractional numbers. Sufficient for storing 15 decimal digits | 19.99d
|boolean | 1 bit | Stores true or false values | True
|char | 2 bytes | Stores a single character/letter or ASCII values | A

### Non-Primitive

Non-primitive data types are called reference types because they refer to objects.

The main difference between primitive and non-primitive data types are:
- Primitive types are predefined (already defined) in Java. Non-primitive types are created by the programmer and is not defined by Java (except for String).
- Non-primitive types can be used to call methods to perform certain operations, while primitive types cannot.
- A primitive type has always a value, while non-primitive types can be null.
- A primitive type starts with a lowercase letter, while non-primitive types starts with an uppercase letter.


## Java Type Casting

Type casting is when you assign a value of one primitive data type to another type.

In Java, there are two types of casting:

- Widening Casting (automatically) - converting a smaller type to a larger type size
    - byte -> short -> char -> int -> long -> float -> double
- Narrowing Casting (manually) - converting a larger type to a smaller size type
    - double -> float -> long -> int -> char -> short -> byte 

Widening casting is done automatically when passing a smaller size type to a larger size type:
```java
public class Main {
  public static void main(String[] args) {
    int myInt = 9;
    double myDouble = myInt; // Automatic casting: int to double

    System.out.println(myInt);      // Outputs 9
    System.out.println(myDouble);   // Outputs 9.0
  }
}
```


Narrowing casting must be done manually by placing the type in parentheses in front of the value:
```java
public class Main {
  public static void main(String[] args) {
    double myDouble = 9.78d;
    int myInt = (int) myDouble; // Manual casting: double to int

    System.out.println(myDouble);   // Outputs 9.78
    System.out.println(myInt);      // Outputs 9
  }
}
```


## Java Operators

Operators in Java are used to perform operations on variables and values.

Java divides the operators into the following groups:
- Arithmetic operators
- Assignment operators
- Comparison operators
- Logical operators
- Bitwise operators


### Arithmetic Operators

| Operator | Name | Description | Example |
|:--------:|:----:|:-----------:|:-------:|
| + | Addition | Adds together two values |	x + y 	
| - | Subtraction | Subtracts one value from another | x - y 	
| * | Multiplication | Multiplies two values | x * y 	
| / | Division | Divides one value by another |	x / y 	
| % | Modulus |	Returns the division remainder | x % y 	
| ++ | Increment | Increases the value of a variable by 1 | ++x 	
| -- | Decrement | Decreases the value of a variable by 1 | --x


### Assignment Operators

Assignment operators are used to assign values to variables.

You can use operators like += to add a value to a variable.

| Operator | Example | Same As
|:--------:|:-------:|:-------:|
| = | x = 5 | x = 5 	
| += | x += 3 |	x = x + 3 	
| -= | x -= 3 |	x = x - 3 	
| *= | x *= 3 |	x = x * 3 	
| /= | x /= 3 |	x = x / 3 	
| %= | x %= 3 |	x = x % 3 	
| &= | x &= 3 |	x = x & 3 	
| \|= | x \|= 3 | x = x \| 3 	
| ^= | x ^= 3 |	x = x ^ 3 	
| >>= | x >>= 3 | x = x >> 3 	
| <<= | x <<= 3 | x = x << 3


### Comparison Operators

Comparison operators are used to compare two values (or variables). This is important in programming, because it helps us to find answers and make decisions.

The return value of a comparison is either true or false. These values are known as Boolean values.

| Operator | Name | Example
|:--------:|:----:|:------:|
| == | Equal to | x == y 	
| != | Not equal | x != y 	
| > | Greater than | x > y 	
| < | Less than | x < y 	
| >= | Greater than or equal to | x >= y 	
| <= | Less than or equal to | x <= y


### Logical Operators

You can also test for true or false values with logical operators.

| Operator | Name | Description | Example
|:--------:|:----:|:----------:|:-------:
| &&  | Logical and | Returns true if both statements are true | x < 5 &&  x < 10 	
| \|\|  | Logical or | Returns true if one of the statements is true | x < 5 \|\| x < 4 	
| ! | Logical not | Reverse the result, returns false if the result is true | !(x < 5 && x < 10)


## Java Strings

Strings are used for storing text.

A String variable contains a collection of characters surrounded by double quotes.


A String in Java is actually an object, which contain methods that can perform certain operations on strings. For example, the length of a string can be found with the length() method:
```java
String txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
System.out.println("The length of the txt string is: " + txt.length());
```

The indexOf() method returns the index (the position) of the first occurrence of a specified text in a string (including whitespace):
```java
String txt = "Please locate where 'locate' occurs!";
System.out.println(txt.indexOf("locate")); // Outputs 7
```

### Concatenation

The + operator can be used between strings to combine them. This is called concatenation.

You can also use the concat() method to concatenate two strings:
```java
String firstName = "John ";
String lastName = "Doe";
System.out.println(firstName.concat(lastName));
```

If you add two numbers, the result will be a number:
```java
int x = 10;
int y = 20;
int z = x + y;  // z will be 30 (an integer/number)
```

If you add two strings, the result will be a string concatenation:
```java
String x = "10";
String y = "20";
String z = x + y;  // z will be 1020 (a String)
```

If you add a number and a string, the result will be a string concatenation:
```java
String x = "10";
int y = 20;
String z = x + y;  // z will be 1020 (a String)
```

### Special Characters

Special characters must be prefixed with the blackslash ( \ ) symbol.

The sequence "\\\\" inserts a single backslash in a string.

Other common escape sequences that are valid in Java are:
| Code | Result |
|:----:|:------:|
| \n | New Line 	
| \r | Carriage Return 	
| \t | Tab 	
| \b | Backspace 	
| \f | Form Feed


## Java Math

The Math.max(x,y) method can be used to find the highest value of x and y.

The Math.min(x,y) method can be used to find the lowest value of x and y.

The Math.sqrt(x) method returns the square root of x.

The Math.abs(x) method returns the absolute (positive) value of x.

Math.random() returns a random number between 0.0 (inclusive), and 1.0 (exclusive).

To get more control over the random number, for example, if you only want a random number between 0 and 100, you can use the following formula:
```java
int randomNum = (int)(Math.random() * 101);  // 0 to 100
```


## Java Booleans

A boolean type is declared with the boolean keyword and can only take the values true or false:
```java
boolean isJavaFun = true;
boolean isFishTasty = false;
System.out.println(isJavaFun);     // Outputs true
System.out.println(isFishTasty);   // Outputs false
```

A Boolean expression returns a boolean value: true or false. This is useful to build logic, and find answers.

For example, you can use a comparison operator, such as the greater than (>) operator, to find out if an expression (or a variable) is true or false:
```java
int x = 10;
int y = 9;
System.out.println(x > y); // returns true, because 10 is higher than 9
```


## Java If...Else

In Java, if and else statements are fundamental control flow structures that allow you to execute different blocks of code based on specific conditions.

### If Statement

The if statement evaluates a Boolean expression, and if the expression is true, the block of code inside the if statement is executed. If the expression evaluates to false, the code inside the if block is skipped.

```java
if (condition) {
    // Code to execute if the condition is true
}
```

### Else Statement

The else statement is used in conjunction with an if statement. It specifies a block of code that is executed if the condition in the if statement evaluates to false.

```java
if (condition) {
    // Code to execute if the condition is true
} else {
    // Code to execute if the condition is false
}
```

### Else If

You can also chain multiple conditions using else if after an initial if. This is useful for checking multiple distinct conditions in sequence.

```java
if (condition1) {
    // Code to execute if condition1 is true
} else if (condition2) {
    // Code to execute if condition2 is true
} else {
    // Code to execute if all previous conditions are false
}
```

### Short Hand If...Else

There is also a short-hand if else, which is known as the ternary operator because it consists of three operands.

It can be used to replace multiple lines of code with a single line, and is most often used to replace simple if else statements:
```java
variable = (condition) ? expressionTrue :  expressionFalse;
```


## Java Switch






## Java While Loop

## Java For Loop

## Java Break/Continue

## Java Arrays
