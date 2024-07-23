// Problem Statement:

// Combine two arrays [1, 2, 3] and [4, 5, 6] into a new array using the spread operator.

// Hint/Explanation:

// The spread operator allows an iterable (like an array) to be expanded in places where zero or more arguments or elements are expected.

// Solution:

const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined);