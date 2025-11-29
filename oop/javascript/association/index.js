/**
 * Association in JavaScript
 * 
 * Association is a relationship between two separate classes which establishes through their objects.
 * Association can be one-to-one, one-to-many, many-to-one, many-to-many.
 * In Association, the two classes are independent of each other.
 */

class Driver {
    constructor(name) {
        this.name = name;
    }

    drive(car) {
        console.log(`${this.name} is driving a ${car.model}.`);
    }
}

class Car {
    constructor(model) {
        this.model = model;
    }
}

const driver = new Driver("John");
const car = new Car("Toyota Camry");

// Association: Driver uses Car, but neither owns the other.
// They have independent lifecycles.
driver.drive(car); // Output: John is driving a Toyota Camry.
