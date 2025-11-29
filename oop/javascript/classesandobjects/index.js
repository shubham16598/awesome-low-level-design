/**
 * Classes and Objects in JavaScript
 * 
 * This file demonstrates how to define a class, create objects (instances),
 * and use constructors and methods.
 */

// Defining a Class
class Car {
    // The constructor method is called automatically when a new object is created.
    // It is used to initialize the object's properties.
    constructor(brand, model, year) {
        this.brand = brand; // Property: brand
        this.model = model; // Property: model
        this.year = year;   // Property: year
    }

    // A method to display car details
    displayInfo() {
        console.log(`Car Details: ${this.year} ${this.brand} ${this.model}`);
    }

    // A method to calculate the age of the car
    getAge(currentYear) {
        return currentYear - this.year;
    }
}

// Creating Objects (Instances) of the Car class
const myCar1 = new Car("Toyota", "Corolla", 2020);
const myCar2 = new Car("Tesla", "Model 3", 2023);

// Accessing properties
console.log("My Car 1 Brand:", myCar1.brand); // Output: Toyota

// Calling methods
myCar1.displayInfo(); // Output: Car Details: 2020 Toyota Corolla
myCar2.displayInfo(); // Output: Car Details: 2023 Tesla Model 3

// Using a method with arguments
const carAge = myCar1.getAge(2024);
console.log(`My Car 1 is ${carAge} years old.`); // Output: My Car 1 is 4 years old.
