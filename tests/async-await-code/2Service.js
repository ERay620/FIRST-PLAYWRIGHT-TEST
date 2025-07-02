
function getSalary(userId) {
    console.log(`Getting salary for ${userId}`)
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Returning salary')
            resolve(10000);
        }, 1000);
    });
}

function getName(userId){
    console.log(`Getting name for ${userId}`)
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Returning name')
            resolve('Cool John');
        }, 1000);
    });
}

const userId = 5;
// print user name and salary:
const name2 = getName(userId)
const salary = getSalary(userId)
console.log(`${name2} has a salary of ${salary}`)

/* 
### 📝 Understanding Your Code

### 🧠 What’s a Promise?

A **Promise** is like a placeholder for a value that will exist *later*. When you're working with data 
that takes time to load (like fetching from a database or API), 
Promises let you write code that continues executing while that data is loading in the background.

---

### 🚦 Breakdown of Your Code

Let’s go step by step:

#### 1. `getName(userId)` and `getSalary(userId)`

- Both functions return Promises that *resolve* after 1 second (`setTimeout(..., 1000)`).
- So right away, calling these functions kicks off **async operations** that won’t return immediately—they'll finish **after 1 second**.

#### 2. These lines:

const name2 = getName(userId);
const salary = getSalary(userId);


- You’re assigning the result of those async functions **directly to variables**, but:
- Since they return Promises (not the actual values), `name2` and `salary` aren’t `"Cool John"` or `10000`—they’re Promise objects.

#### 3. This line:

console.log(`${name2} has a salary of ${salary}`);


- This logs something like:  
  ```
  [object Promise] has a salary of [object Promise]
  ```
  ...because you're trying to print the values *before the Promises resolve*.

---

### ✅ How to Fix It – Use `async/await`

Here’s how you could make it behave properly:


async function printUserInfo(userId) {
    const name2 = await getName(userId);
    const salary = await getSalary(userId);
    console.log(`${name2} has a salary of ${salary}`);
}

printUserInfo(5);


#### Key points:

- The `async` keyword lets you use `await` inside the function.
- `await` pauses the function *until* the Promise resolves, letting you get the actual value.

---

### 🔄 Summary

| Concept       | What it Means                                      |
|---------------|----------------------------------------------------|
| `Promise`     | An object representing a future value              |
| `async`       | A function that always returns a Promise           |
| `await`       | Waits for a Promise to resolve before continuing   |

---


 */