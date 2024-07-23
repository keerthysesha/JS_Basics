// Problem Statement:

// Create a class Animal with a constructor setting the name property. Then, create a subclass Dog that extends Animal and adds a bark method.

// Hint/Explanation:

// ES6 classes are syntactical sugar over JavaScript's existing prototype-based inheritance. The extends keyword is used for class inheritance.

// Solution:

class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Dog extends Animal {
    bark() {
      return `Woof! My name is ${this.name}`;
    }
  }
  
  const myDog = new Dog('Buddy');
  console.log(myDog.bark()); 
  