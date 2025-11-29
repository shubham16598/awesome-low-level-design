/**
 * Inheritance in JavaScript
 * 
 * This file demonstrates how to use inheritance to create a hierarchy of classes.
 * It shows how a child class can inherit properties and methods from a parent class,
 * and how to override methods.
 */

// Parent Class (Base Class)
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// Child Class (Derived Class) extending Animal
class Dog extends Animal {
    constructor(name, breed) {
        // Call the parent class constructor with super()
        // This is required before accessing 'this' in a derived class
        super(name);
        this.breed = breed;
    }

    // Overriding the speak method
    speak() {
        console.log(`${this.name} barks.`);
    }

    // New method specific to Dog
    fetch() {
        console.log(`${this.name} fetches the ball.`);
    }
}

// Another Child Class
class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
const cat = new Cat("Whiskers");

// Accessing inherited properties
console.log(`${dog.name} is a ${dog.breed}.`); // Output: Buddy is a Golden Retriever.

// Calling overridden methods
dog.speak(); // Output: Buddy barks.
cat.speak(); // Output: Whiskers meows.

// Calling parent method (if not overridden, or via super if needed)
// In this case, Animal's speak is overridden, but we can see polymorphism in action.

// Calling specific methods
dog.fetch(); // Output: Buddy fetches the ball.
