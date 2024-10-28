# Aschronously Programming - Async Await Programming

| No  | Question                                                                                                                         |
| --- | -------------------------------------------------------------------------------------------------------------------------------- |
| 1   | [What is the purpose of async/ await? Compare it with Promises?](#what-is-the-purpose-of-asyncawait-compare-it-with-promises)    |
| 2   | [Explain the use of async and await keywords in JS?](#explain-the-use-of-async-and-await-keywords-in-js)                         |
| 3   | [Can we use async keyword without await keyword and vice versa?](#can-we-use-async-keyword-without-await-keyword-and-vice-versa) |
| 4   | [How do you handle errors in async/ await functions?](#how-do-you-handle-errors-in-async-await-functions)                        |

1. ## What is the purpose of async/await? Compare it with Promises?

- The purpose of async and await is to simplify the process of working with asynchronous code, making it easier to read and write.
  - **Promises** provide a way to handle asynchronous operations by representing a value that may be available now, or in the future, or never. They allow chaining of operations using .then() and .catch(), but can lead to complex nested structures, often referred to as "promise chaining.
  - **"Async/Await** is built on top of Promises and allows you to write asynchronous code in a more synchronous manner. When you declare a function as async, it automatically returns a Promise. The await keyword can be used inside an async function to pause execution until the Promise is resolved or rejected, making the code easier to read and maintain.

[⬆️ Back to top](#)

2. ## Explain the use of async and await keywords in JS?

- **async**: This keyword is used to declare an asynchronous function. It ensures that the function returns a Promise, and allows the use of await within it.
- **await**: This keyword is used to pause the execution of an async function until a Promise is resolved. It can only be used inside async functions. When await is used, the code execution will wait for the Promise to resolve and then continue with the next line of code.

```javascript
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
}
```

[⬆️ Back to top](#)

3. ## Can we use async keyword without await keyword and vice versa?
- **Using async without await**: Yes, you can declare an async function without using await. The function will still return a Promise, but it won't pause execution for any asynchronous operations.
- **Using await without async**: No, you cannot use await outside of an async function. If you try to use await in a non-async function, it will result in a syntax error.


4. ## How do you handle errors in async/ await functions?
- Errors in async/await functions can be handled using try...catch blocks. This allows you to catch any errors that occur during the execution of the awaited Promise.

```JAVASCRIPT
async function fetchData() {

    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData()
```