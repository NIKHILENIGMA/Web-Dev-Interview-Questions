## Basic Interview Question

| No    | Questions                          |
| ------| ------------------------------------------------- |
| 1     | [What is JavaScript? What is the role of JavaScript engine?](#what-is-javascript-what-is-the-role-of-javascript-engine) |    
| 2     |   [What is Client side and Server side?](#what-is-client-side-and-server-side)                                 |    
| 3     |   [What is Scope in Java Script? ](#what-is-scope-in-java-script)                                 |    
| 4     |   [What is the type of a variable in JS when it is declared without using the `var`, `let` and `const`keywords?](#what-is-the-type-of-a-variable-in-js-when-it-is-declared-without-using-the-var-let-and-constkeywords)                                |    
| 5     |   [What is Hositing in Java script?](#what-is-hositing-in-java-script)                                 |    
| 6     |   [What is JSON?](#what-is-json)                                |    
   

1. ##  What is JavaScript? What is the role of JavaScript engine?
- JavaScript is a programming language that is used for converting static web pages to <span style="color:#13E3E3; font-weight:500">interactive and dynamic web pages</span>.
- JavaScript engine inside different browsers are:
    - chrome <span style="color:#13E3E3;">(V8)</span> 
    - Firefox <span style="color:#13E3E3;">(Spider Monkey)</span>
    - Safari <span style="color:#13E3E3;">(JavaScript-Core)</span>
    - Edge <span style="color:#13E3E3;">(Chakra)</span>

- A java-script engine is a program present in web browsers that executes JavaScript code.

2. ##  What is Client side and Server side?
<div style="background-color: rgba(255, 255, 255, 0.7); height: 500px;">
  <img src="./Image/Client-server-model.svg.png" alt="Client-server-architecture" style="object-fit: contain; height: 100vh; width: 100%;">
</div>

- <span style="font-weight:600; font-size:1.2rem">Client:</span> A Client is device, application or software component that requests and conssumes services or resources from a server.

- <span style="font-weight:600; font-size:1.2rem">Server:</span> A Server is device, computer or software component that provides services, resources, or functions to clients.

3. ##  What is Scope in Java Script?
- In JavaScript, scope refers to the current context of code, which determines the accessibility of variables to JavaScript.

- Scope determines where variables are defined and where they can be accessed.

- The different types of scope in JavaScript are:

    - **Global Scope**: 
        * When a variable is declared outside any function, it becomes a global variable. 
        * This means it can be accessed and modified from any part of the code, including within functions.
        ```javascript
        // Example
        let globalScope = 15;

        function scope(number) {
          // local variable declaration
          let num = number + 10;
          //Inside the function 15
          console.log("Inside the function", number); 

          return num; // 25
        }

        //Function call 25
        console.log("Function call", scope(globalScope));
        console.log(globalScope); // 15

        ```

    - **Local Scope or Function Scope**: 
        - Variables declared within a function are local to that function. 
        - They can only be accessed and modified within that function. 
        - This helps in preventing variables from being accessed or modified where it's not intended.
        
        ```javascript
        // Example
        function funcScope() {
        // local variable declaration
        const number = 15;

        return console.log("Inside the function: ", number);
        };

        funcScope()
        // Inside the function: 15 

        console.log(number); 
        // This will throw a ReferenceError: number is not defined

        ```

    - **Block Scope**: 
        - Variables declared with `let` and `const` are scoped to the block in which they are defined. 
        - A block is any code within curly braces `{}`. 
        - This means that such variables are only accessible within that specific block and not outside of it. 
        - This is different from variables declared with `var`, which are either function-scoped or globally scoped regardless of the block they are defined in.
        
        ```javascript
        // Example
        if (true) {
        let blockScopedVariable = 'I am only accessible within this block';
        console.log(blockScopedVariable); 
        // This will work and log the string to the console
        }

        console.log(blockScopedVariable); 
        // This will throw a ReferenceError: blockScopedVariable is not defined

        ```

    - **Lexical Scope**: 
        - This refers to the ability for a function scope to access variables from the outer scope in which it is defined. 
        - JavaScript functions are lexically scoped, meaning they inherit the scope from where they are defined, not where they are executed. 
        - This is a key part of closures in JavaScript.
        
        ```javascript
        // Example
        function outerFunction() {
        let outerVariable = 'I am from the outer function';

        function innerFunction() {
        // This is an example of lexical scoping.

        console.log(outerVariable); // This will work and log 'I am from the outer function'
        }

        innerFunction();
        }

        outerFunction();
        ```


4. ## What is the type of a variable in JS when it is declared without using the `var`, `let` and `const`keywords?
```javascript
    if (true) {
        variable = 10;
    }
    
    console.log(variable);
    // This will work and log 10 because if there is no var let or const declared before will take the implicit type as `var`

```
- `var` is the implicit type of a variable when it is declared without using `var`, `let` and `const` keywords.




5. ## What is Hositing in Java script?
- Hositing is a Java script behavior where functions and variable declaration are moved to the top of their respective scopes during the compliation phase.
- There are two main types of hoisting in JavaScript: 
    - variable hoisting
    - function hoisting.
```javascript
    Example variable hoisting

    // If a variable is declared using `var`, it is hoisted to the top of its containing function or global scope if declared outside of a function.

    console.log(myVar); // undefined
    var myVar = 5;

    // If a variable is declared using `let` or `const`, it is also hoisted to the top of its block scope, but it does not get initialized. Accessing it before the declaration results in a `ReferenceError`.

    console.log(myLet); 
    // ReferenceError: Cannot access 'myLet' before initialization
    let myLet = 5;
   
```

```javascript
   // Function declarations are hoisted to the top of their containing scope, and they are hoisted with their definitions. This means that a function can be called before it is declared in the code.

   myFunction(); // This will work and log 'Hello, world!'
   
   function myFunction() {
     console.log('Hello, world!');
   }

    // If you try to call a function expression before it is defined, you will get a `TypeError` saying that it is not a function.

    myFuncExpr(); // TypeError: myFuncExpr is not a function

    var myFuncExpr = function() {
    console.log('This will not work if called before declaration');
};

```

6. ## What is JSON?
- JSON, which stands for <span style="color:#13E3E3; font-weight:500">JavaScript Object Notation</span>, is a lightweight <span style="color:#13E3E3; font-weight:500">data-interchange format </span> that is easy for humans to read and write and easy for machines to parse and generate. 
- It is based on a subset of the JavaScript Programming Language Standard ECMA-262 3rd Edition - December 1999. 
- JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. - This property makes JSON an ideal data-interchange language.
```javascript
    // Example of JSON representation
    {
      "firstName": "John",
      "lastName": "Doe",
      "age": 30,
      "address": {
        "streetAddress": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postalCode": "10021-3100"
      },
      "phoneNumbers": [
        {
          "type": "home",
          "number": "212 555-1234"
        },
        {
          "type": "office",
          "number": "646 555-4567"
        }
      ],
      "children": [],
      "spouse": null
    }

```