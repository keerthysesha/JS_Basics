// Problem Statement:

// Create a function waitAndReturn that returns a Promise which resolves with the string "Done" after 2 seconds. Then, use async/await to call this function and log the result.

// Hint/Explanation:

// Promises are used for asynchronous computations. Async/await is syntactic sugar for working with Promises in a more synchronous fashion.

// Solution:

const waitAndReturn = () => new Promise(resolve => 
    setTimeout(() => resolve("Done"), 2000)
  );
  
  async function run() {
    const result = await waitAndReturn();
    console.log(result);
  }
  
  run();
  