/**
 * Composition in JavaScript
 * 
 * Composition is a restricted form of Aggregation in which two entities are highly dependent on each other.
 * 1. It represents a "Part-Of" relationship.
 * 2. In composition, both entities are dependent on each other.
 * 3. When there is a composition between two entities, the composed object cannot exist without the other entity.
 */

class Engine {
    constructor(type) {
        this.type = type;
    }

    start() {
        console.log(`${this.type} engine started.`);
    }
}

class Car {
    constructor(model, engineType) {
        this.model = model;
        // Composition: Engine is created INSIDE the Car.
        // If the Car is destroyed, the Engine is also effectively destroyed (or inaccessible).
        this.engine = new Engine(engineType);
    }

    startCar() {
        console.log(`Starting ${this.model}...`);
        this.engine.start();
    }
}

const myCar = new Car("Ford Mustang", "V8");

myCar.startCar();
// Output:
// Starting Ford Mustang...
// V8 engine started.

// The Engine instance is tightly coupled to the Car instance.
