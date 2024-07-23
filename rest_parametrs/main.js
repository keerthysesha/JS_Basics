// Problem Statement:

// Write a function that takes multiple arguments and returns their sum using rest parameters.

// Hint/Explanation:

// Rest parameters allow us to represent an indefinite number of arguments as an array.

// Solution:

const sum = (...numbers) => numbers.reduce((acc, current) => acc + current, 0);

console.log(sum(1, 2, 3));          
console.log(sum(10, 20, 30, 40));                  
console.log(sum());                 
