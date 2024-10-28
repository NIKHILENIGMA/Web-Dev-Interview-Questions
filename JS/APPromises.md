# Asynchronous Programming - Promises

| No  | Question                                                                                                                       |
| --- | ------------------------------------------------------------------------------------------------------------------------------ |
| 1   | [What are Promises in JavaScript?](#what-are-promises-in-javascript)                                                           |
| 2   | [How to implement Promises in JavaScript?](#how-to-implement-promises-in-javascript)                                           |
| 3   | [When to use Promises in real applications?](#when-to-use-promises-in-real-applications)                                       |
| 4   | [What is the use of Promise.all() method?](#what-is-the-use-of-promiseall-method)                                              |
| 5   | [What is the use of Promise.race() method?](#what-is-the-use-of-promiserace-method)                                            |
| 6   | [What is the difference between Promise.all() and Promise.race()?](#what-is-the-difference-between-promiseall-and-promiserace) |

1. ## What are Promises in JavaScript?

- Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.
- A Promise can be in one of three states:
  - **Pending**: The initial state, neither fulfilled nor rejected.
  - **Fulfilled**: The operation completed successfully, resulting in a value.
  - **Rejected**: The operation failed, resulting in a reason for the failure.

[⬆️ Go back to top](#) 

2. ## How to implement Promises in JavaScript?
- You can create a Promise using the Promise constructor, which takes a function (executor) that has two parameters: resolve and reject. Here's an example:

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true; // Simulate success or failure
  if (success) {
    resolve("Operation succeeded!");
  } else {
    reject("Operation failed.");
  }
});

// Using the Promise
myPromise
  .then((result) => console.log(result)) // Handle success
  .catch((error) => console.error(error)); // Handle failure
```

[⬆️ Go back to top](#) 

3. ## When to use Promises in real applications?
- Promises are useful in scenarios where you need to handle asynchronous operations, such as:
 - Fetching data from APIs  (e.g., using fetch).
 - Performing file operations.
 - Handling user interactions that involve delays (e.g., animations, timers).
 - Chaining multiple asynchronous operations where the result of one operation is needed for the next.


[⬆️ Go back to top](#) 

4. ## What is the use of Promise.all() method?
- Promise.all() is a method that takes an iterable of Promises and returns a single Promise that resolves when all of the Promises in the iterable have resolved or rejects if any of the Promises reject. 
- It is useful for executing multiple asynchronous operations in parallel and waiting for all of them to complete.

```javascript
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'foo'));
const promise3 = 42;

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values); // [3, "foo", 42]
    })
    .catch(error => {
        console.error('One of the promises failed:', error);
    });


```


[⬆️ Go back to top](#) 

5. ## What is the use of Promise.race() method?
- Promise.race() takes an iterable of Promises and returns a single Promise that resolves or rejects as soon as one of the Promises in the iterable resolves or rejects, with the value or reason from that Promise. 
- This is useful when you want to proceed as soon as the first Promise completes, regardless of whether it was fulfilled or rejected.

```javascript
const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'first'));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 200, 'second'));

Promise.race([promise1, promise2])
    .then(value => {
        console.log(value); // "first"
    })
    .catch(error => {
        console.error(error); // "second"
    });


```


[⬆️ Go back to top](#) 

6. ## What is the difference between Promise.all() and Promise.race()?
- Promise.all(): Waits for all Promises to resolve. If any Promise rejects, the entire operation fails, and the returned Promise is rejected.
- Promise.race(): Resolves or rejects as soon as the first Promise in the iterable resolves or rejects. It does not wait for all Promises to complete.


[⬆️ Go back to top](#)
