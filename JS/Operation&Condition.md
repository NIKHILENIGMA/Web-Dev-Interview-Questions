# Operation & Condition

# Content 
|  No  | Question                                    |
| ---  | --------------------------------------------| 
|  1   | [What are operators? What are the types of operators in JS?](#what-are-operators-what-are-the-types-of-operators-in-js)                                        |   
|  2   | [What is the difference between unary, binary, and ternary operators?](#what-is-the-difference-between-unary-binary-and-ternary-operators)                                        |   
|  3   | [What is short-circuit evaluation in JS?](#what-is-short-circuit-evaluation-in-js)                                        |   
|  4   | [What is operator precedence?](#what-is-operator-precedence)                                        |   
|  5   | [What are the types of conditions statements in JS?](#what-are-the-types-of-conditions-statements-in-js)                                        |   
|  6   | [When to use which type of conditions statements in real applications?](#when-to-use-which-type-of-conditions-statements-in-real-applications)                                        |   
|  7   | [What is the difference between == and ===?](#what-is-the-difference-between--and)                                        |   
|  8   | [What is the difference between Spread and Rest operator in JS?](#what-is-the-difference-between-spread-and-rest-operator-in-js)                                        |   


1. ## What are operators? What are the types of operators in JS?
- They are fundamental to manipulating data and variables in programming languages,
  including JavaScript. 
- Operators in JavaScript can be categorized based on the number of 
  operands they require or the kind of operation they perform. 
- Here are the main types of operators in JavaScript:

- ### Arithmetic Operators
    - Arithmetic operators are used to perform mathematical operations between numeric operands.
        - Addition (`+`)
        - Subtraction (`-`)
        - Multiplication (`*`)
        - Division (`/`)
        - Remainder (`%`)
        - Increment (`++`)
        - Decrement (`--`)
        - Exponentiation (`**`)

- ### Assignment Operators
    - Assignment operators are used to assign values to JavaScript variables. 
        - Assignment (`=`)
        - Addition assignment (`+=`)
        - Subtraction assignment (`-=`)
        - Multiplication assignment (`*=`)
        - Division assignment (`/=`)
        - Remainder assignment (`%=`)
        - Exponentiation assignment (`**=`)

- ### Comparison Operators
    - Comparison operators compare two values and return a boolean value, true or false.
        - Equal to (`==`)
        - Not equal to (`!=`)
        - Strictly equal to (`===`)
        - Strictly not equal to (`!==`)
        - Greater than (`>`)
        - Less than (`<`)
        - Greater than or equal to (`>=`)
        - Less than or equal to (`<=`)

- ### Logical Operators
    - Logical operators are used to determine the logic between variables or values.
        - Logical AND (`&&`)
        - Logical OR (`||`)
        - Logical NOT (`!`)

- ### String Operators
    - In JavaScript, the `+` operator can also be used to concatenate strings.

- ### Conditional (Ternary) Operator
    - The conditional operator is the only JavaScript operator that takes three operands and is a shorthand for the `if` statement.
    - `(condition) ? valueIfTrue : valueIfFalse`

- ### Unary Operators
    - Unary operators require a single operand, either before or after the operator.
        - Unary negation (`-`)
        - Unary plus (`+`)
        - Logical NOT (`!`)
        - Typeof (`typeof`)
        - Void (`void`)
        - Delete (`delete`)

- ### Bitwise Operators
    - Bitwise operators perform operations on binary representations of numbers.
        - AND (`&`)
        - OR (`|`)
        - XOR (`^`)
        - NOT (`~`)
        - Left shift (`<<`)
        - Right shift (`>>`)
        - Unsigned right shift (`>>>`)

[⬆️ Back to top](#content)

2. ## What is the difference between unary, binary, and ternary operators?
![oprators](/Image/maxresdefault.jpg)

- ### Unary operator
```javascript
    // Unary operator or Single operand

    let value1 = 5;

    let value2 = -value
    console.log(value2)
    // Output: -5
    console.log(++value);
    // Output: 6
```
- ### Binary operator

```javascript
    let a = 5;
    let b = 2;
    let result;

    result = a + b; // Binary addition, result is 7
    console.log(result);

    result = a > b; // Binary comparison, result is true
    console.log(result);
```

- ### Ternary operator
```javascript
    let age = 18;
    let canVote;

    canVote = (age >= 18) ? "Yes" : "No"; // Ternary operator
    console.log(canVote); // Outputs: Yes


```

[⬆️ Back to top](#content)


3. ## What is short-circuit evaluation in JS?
- Short-circuit evaluation stops the execution as soon as the result can be determined without 
  evaluting the remainning sub-expressions. 

```javascript
    let result = false && anything; // Short-circuits, 'anything' is not evaluated

    let result = true || anything; // Short-circuits, 'anything' is not evaluated

```

[⬆️ Back to top](#content)


4. ## What is operator precedence?
- As per operator precedence, the operators with higher precedence are **evaluated first**.
![Bodmas](/Image/bodmas.png)

```javascript
    let first = 9;
    let second = 3;
    let third = 4;

    // Bracker division multiplication addition subtraction

    let result = first + second * third + (first - second); 

    console.log(result);
    // Output 27

```

[⬆️ Back to top](#content)


5. ## What are the types of conditions statements in JS?
- There are three kinds of conditions statements:
    - If/else statements
    ```javascript
        if (condition) {
         // block of code to be executed if the condition is true
        }

        if (condition) {
        // block of code to be executed if the condition is true
        } else {
        // block of code to be executed if the condition is false
        }

        if (condition1) {
        // block of code to be executed if condition1 is true
        } else if (condition2) {
        // block of code to be executed if the condition1 is false and condition2 is true
        } else {
        // block of code to be executed if the condition1 is false and condition2 is false
        }

    ```
    - Ternary operator
    ```javascript
        let result = (condition) ? value1 : value2;

    ```

    - Switch statement
    ```javascript
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

[⬆️ Back to top](#content)

6. ## When to use which type of conditions statements in real applications?
- **`if` Statement**:
    - Use an `if` statement when you need to execute a block of code only if a specified condition is true. 
    - It's the simplest form of conditional execution and is best suited for single conditions.

- **Example Scenario**: 
    - Checking if a user is logged in before displaying a personalized welcome message.

```javascript
   if (user.isLoggedIn) {
       console.log(`Welcome back, ${user.name}!`);
   }

```

- `else` Statement:
    - An `else` statement is used in conjunction with an `if` statement to execute a block of code when the condition is false. 
    - It's useful when there are two possible paths of execution.

- **Example Scenario**: 
    - Displaying a default welcome message if the user is not logged in.

```javascript
    if (user.isLoggedIn) {
        console.log(`Welcome back, ${user.name}!`);
    } else {
        console.log("Welcome, guest!");
    }

```

- `else if` Statement:
    - Use `else if` to specify a new condition to test, if the first condition is false. 
    - It's useful when there are multiple conditions that need to be addressed separately.

- **Example Scenario**: 
    - Displaying different messages based on the user's subscription level.

```javascript
    if (user.subscription === "premium") {
        console.log("Welcome, premium user!");
    } else if (user.subscription === "standard") {
        console.log("Welcome, standard user!");
    } else {
        console.log("Please subscribe to access premium features.");
    }
```

- `switch` Statement
    - A `switch` statement is best used when you have multiple possible conditions for a single variable and you need to execute different blocks of code depending on the value of that variable. 
    - It's a cleaner alternative to multiple `if`-`else if` statements when dealing with the same variable.

- **Example Scenario**: 
    - Handling different keyboard inputs in a game.

```javascript
    switch (keyPressed) {
        case 'ArrowUp':
            movePlayerUp();
        break;
      case 'ArrowDown':
          movePlayerDown();
        break;
      // Additional cases...
      default:
          console.log("Key not recognized");
    }
```

- Ternary Operator
    - The ternary operator is useful for assigning a value to a variable based on a condition in a concise way. 
    - It's best for simple, inline conditional assignments.

- **Example Scenario**: 
    - Setting a user's status message based on their online status.

```javascript
    let statusMessage = user.isOnline ? "Online" : "Offline";
    console.log(statusMessage);
```

[⬆️ Back to top](#content)


7. ## What is the difference between == and ===?
- **Loose Equality (==)** operator compares two values for equality after performing type coercion.
- **Type Coercion:** 
    - The `==` operator performs type coercion if the types of the two operands are not the same. 
    - This means that before making the comparison, it converts one or both operands to a common type. 
    - For example, when comparing a number with a string, the string is converted to a number.
- **Loose Comparison:** 
    - Because of type coercion, the `==` operator is considered to perform a "loose" comparison.
```javascript
    //  Loose Equality 
    //Example
    
    console.log(1 == '1'); 

    console.log(true == 1);
    // Output: true

    // 0 == '0' evaluates to `true` because the string '0' is coerced to the number `0` before the comparison.
```

- **Strict Equality (===)** operator compares two values for equality without performing type coercion.

- **No Type Coercion:** 
    - The `===` operator, on the other hand, does not perform type coercion. 
    - If the types of the two operands are different, the comparison immediately evaluates to `false` without attempting to convert types.
- **Strict Comparison:** 
    - This behavior makes `===` a "strict" comparison operator, as it requires both the value and the type of the operands to be the same for the comparison to evaluate to `true`.
```javascript
    // Strict comparison
    // Example: 

    console.log(1 === '1'); 

    console.log(true === 1);
    // Output: false
    // 0 === '0' evaluates to `false` because the operands are of different types (number and string), and no type coercion is performed.

```


[⬆️ Back to top](#content)

8. ## What is the difference between Spread and Rest operator in JS?
- The Spread operator (...) is used to expand or spread elements from 
  an iterable (such as an array, string, or object) into individual 
  elements.
- **In Function Calls:** 
    - When used in function calls, it allows an iterable (e.g., an array) to 
      be expanded into individual arguments.
```javascript
    // Spread operator
    // Example 1: Copy an Array 
    const arr = [1, 2, 3]; 
    const copyArray = [...arr];
    console.log(copyArray) // Output [1, 2, 3,]

    // Example 2: passing multiple arguments to a function
    function sum(x, y, z) {
        return x + y + z;
    }
    const numbers = [1, 2, 3];
    console.log(sum(...numbers)); // Outputs: 6
    
    // Exampple 3. Insert in array
    const parts = ['shoulders', 'knees'];
    const body = ['head', ...parts, 'toes'];
    // body: ['head', 'shoulders', 'knees', 'toes']

    // Example 4. Merge  two array
    const arr1 = [1,2,3];
    const arr2 = [4,5,6];
    const mergeArr = [...arr1, ...arr2]
    console.log(mergeArr) 
    // mergeArr: [1,2,3,4,5,6]

```

- The Rest operator(...) is used in function parameters to collect 
  all **remaining arguments** into an array.

```javascript
    takeArgs(15,25,36,24,96,156,25)
    function takeArgs(first, second, ...restArgs) {
        console.log(first); // 15
        console.log(second); // 25 
        console.log(...restArgs); // 36,24,96,156,25 
    }

```

[⬆️ Back to top](#content)
