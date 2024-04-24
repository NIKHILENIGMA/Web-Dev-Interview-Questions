# Variables and Data types
<span style="color:#13E3E3; font-weight:500;font-size:15px"></span>
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
-  



4. ##  What is the difference between null and undefined in JS?
- 

5. ## What is the use of typeof operator?
- 

6. ## What is type coercion in JS?
- 

