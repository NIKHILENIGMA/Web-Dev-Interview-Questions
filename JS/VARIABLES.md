# Variables and Data types
<!-- <span style="color:#13E3E3; font-weight:500;font-size:15px"></span> -->
| No    | Questions                          |
| ------| ------------------------------------------------- |
| 1     | [What are variables? What is the difference between var, let, and const ?](#what-are-variables-what-is-the-difference-between-var-let-and-const) |                     
| 2     | [What are data types in JS?](#what-are-data-types-in-js) |                     
| 3     | [What is the difference between primitive and non-primitive data types?](#what-is-the-difference-between-primitive-and-non-primitive-data-types) |                     
| 4     | [What is the difference between null and undefined in JS?](#what-is-the-difference-between-null-and-undefined-in-js) |                     
| 5     | [What is the use of typeof operator?](#what-is-the-use-of-typeof-operator) |                     
| 6     | [What is type coercion in JS?](#what-is-type-coercion-in-js) |                     



1. ## What are variables? What is the difference between var, let, and const ?
- Variables are used to <span style="color:#13E3E3; font-weight:500;font-size:15px">**store data**.</span>
![ScopeImage](/Image/28.png)

-  <span style="color:yellow">var</span> creates a <span style="color:#13E3E3; font-weight:500;font-size:15px">function-scope</span> variable.
```javascript
    // Using var
    function foo() {
        if (true) {
            var value = 10;
            console.log(value);
            // output: 10
        }
        console.log(value);
        // output: 10
    }
```

- <span style="color:yellow">let</span> creates a <span style="color:#13E3E3; font-weight:500;font-size:15px">block-scoped</span> variable.
```javascript
    function foo() {
        if (true) {
            let value = 15;
            console.log(value);
            // Output: 15
        }
        console.log(value);
        // Reference Error: value is not defined
    }

```

- <span style="color:yellow; font-weight:500;font-size:15px">const</span> can be assigned only once, and its value <span style="color:#13E3E3; font-weight:500;font-size:15px">cannot be changed</span> afterwards.

```javascript
    // Using Constant
    const value = 25;
    value = 30;

    console.log(value);
    // This will lead to TypeError: Assignment to constant variable.
```


2. ## What are data types in JS?
- A data type determines the <span style="color:#13E3E3; font-weight:500;font-size:15px">type of variable.</span>

- There two categories in data types:
![DataTypes](/Image/668dfc002312ab58e0d1cb15e0b98a5e.png)


3. ## What is the difference between primitive and non-primitive data types?


| Primitive data types                     | Non-primitive data types                       |
|----------------------------------------  | ----------------------------------------------- |
| - Primitive data types can hold only     | -  Non-primitive data types can hold multiple |
|   **single valued**                      |    values or complex data structures.         |
| - Primitive data types are immutable,    | -  Non-primitive data types are mutable,      |
|   meaning their values, once assigned,   |    meaning their values can be changed        |
|   cannot be changed.                     |    after assignment.                          |
| - Number, String, boolean, undefined,    | - Object, array, function, date, regexp are   |
|   null are primitive data types.         |   non-primitive data types.                   |


4. ##  What is the difference between null and undefined in JS?

| Null                                     | Undefined                       |
|----------------------------------------  | ----------------------------------------------- |
| -  **null** variables are intentionally  | -  When a variable is declared but has not been |
|    assigned **the null value**           |    assigned a value, it is automatically        |
|                                          |    initialized with undefined                   |    
| - Null can be used when you are sure you | -  Undefined can be used when you don't have the |  
|   do not have any value for the          |    value right now,but you will get it after some |
|   particular variables                   |    logic or opration                          |

5. ## What is the use of typeof operator?
- typeof operator is used to determine the type of each variable.
- typeof operator can be used to validate the data received from external source(api).

``` javascript
    let number = 465;
    let string = "hello world!";
    let boolean = true;
    let array = [ 1, 2, 3, 4, 5 ]
    let function = function(){}
    let undefine = undefined;

    // Using Typeof 
    console.log(typeof number)
    // Output: "number" 
    console.log(typeof string)
    // Output: "string"
    console.log(typeof boolean)
    // Output: "boolean"
    console.log(typeof array)
    // Output: "object"
    console.log(typeof function)
    // Output: "function"
    console.log(typeof undefine)
    // Output: "undefined"
```

6. ## What is type coercion in JS?
- Type coercion is the automatic conversion of values from one data type to another during 
  certain opertions or comparisons.

```javascript
    let string = "56";
    let number = 89;
    let boolean = true;
    let nullValue = null;


    // Type coercion is the automatic conversion
    console.log(string + number)
    // Output: "5689"
    console.log(number + boolean) // 89 + 1 => 90
    // Output: 90
    console.log(number == string)
    // Output: true
    console.log(boolean + nullValue)
    // Output: 1

```
- Type coercion can be used during String and Number conversion.
- Type coercion can be used during Comparison operators.



