# asynchronous programming basics

| No  | Question                                                                                |
| --- | --------------------------------------------------------------------------------------- |
| 1   | [What is asynchronous programming in JS? What is its use?](#question-1)                 |
| 2   | [What is the difference between synchronous and asynchronous programming?](#question-2) |
| 3   | [What are the techniques for achieving asynchronous operations in JS?](#question-3)     |
| 4   | [What is setTimeout()? How is it used to handle asynchronous operations?](#question-4)  |
| 5   | [What is setInterval()? How is it used to handle asynchronous operations?](#question-5) |
| 6   | [What is the role of callbacks in fetching API data asynchronously?](#question-6)       |
| 7   | [What is callback hell? How can it be avoided?](#question-7)                            |

## Question 1

**What is asynchronous programming in JS? What is its use?**

- Asynchronous programming in JavaScript allows operations to run in the background without blocking the execution of the main thread.
- This is particularly useful for tasks that take time, such as network requests or file I/O, enabling the application to remain responsive while waiting for these operations to complete.

[⬆️ Go back to top](#)

## Question 2

**What is the difference between synchronous and asynchronous programming?**

- Synchronous programming executes tasks sequentially, meaning each task must complete before the next one starts.
- This can lead to blocking behavior, where the application becomes unresponsive during long-running tasks.
- **Asynchronous programming**, on the other hand, allows tasks to be initiated and then continue executing other code while waiting for the initial task to complete.
- This improves performance and user experience by keeping the application responsive.

[⬆️ Go back to top](#)

## Question 3

**What are the techniques for achieving asynchronous operations in JS?**

Common techniques for achieving asynchronous operations in JavaScript include:

- **Callbacks**: Functions passed as arguments to be executed after a task completes.
- **Promises**: Objects representing the eventual completion (or failure) of an asynchronous operation, allowing for cleaner chaining of operations.
- **Async/Await**: A syntactic sugar built on promises that allows writing asynchronous code in a more synchronous style, making it easier to read and maintain.

[⬆️ Go back to top](#)

## Question 4

**What is setTimeout()? How is it used to handle asynchronous operations?**

- **setTimeout()** is a built-in JavaScript function that executes a specified function after a defined delay (in milliseconds).
- It is often used to delay the execution of code or to perform tasks asynchronously after a certain period.

```javascript
setTimeout(() => {
  console.log("This message is displayed after 2 seconds");
}, 2000);
```

[⬆️ Go back to top](#)

## Question 5

**What is setInterval()? How is it used to handle asynchronous operations?**

- **setInterval()** is a JavaScript function that repeatedly executes a specified function at defined intervals (in milliseconds).
- It is useful for tasks that need to be performed repeatedly over time.

```javascript
setInterval(() => {
  console.log("This message is displayed every 1 second");
}, 1000);
```

[⬆️ Go back to top](#)

## Question 6

**What is the role of callbacks in fetching API data asynchronously?**

- Callbacks are functions that are passed as arguments to other functions and are executed after a task completes.
- In the context of fetching API data, callbacks are used to handle the response once the data is retrieved, allowing the application to continue executing other code while waiting for the API response.

```javascript
fetch("https://api.example.com/data", {
  method: "POST",
  type: "JSON/content-application",
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Handle the data here
  })
  .catch((error) => console.error("Error fetching data:", error));
```

[⬆️ Go back to top](#)

## Question 7

**What is callback hell? How can it be avoided?**

- Callback hell refers to the situation where multiple nested callbacks make code difficult to read and maintain.
- This often occurs when performing multiple asynchronous operations that depend on each other.
- To avoid callback hell, you can:
  - Use Promises to flatten the structure of asynchronous code.
  - Utilize Async/Await syntax for a more synchronous style of writing asynchronous code.
  - Modularize code by breaking down complex functions into smaller, reusable functions.

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
```

[⬆️ Go back to top](#)
