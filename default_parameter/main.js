// Problem Statement:

// Create a function greet(name, greeting = "Hello") that greets a person. If no greeting is provided, it should default to "Hello".

// Hint/Explanation:

// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

// Solution:

const greet = (name, greeting = "Hello") => `${greeting}, ${name}!`;

console.log(greet("Alice"));           

