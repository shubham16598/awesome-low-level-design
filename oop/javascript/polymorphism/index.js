/**
 * Polymorphism in JavaScript
 * 
 * This file demonstrates polymorphism, where different classes can be treated as instances
 * of the same general class through inheritance. It also shows method overriding.
 */

class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

// Function that works with any Shape object
function printArea(shape) {
    console.log(`Area: ${shape.area().toFixed(2)}`);
}

const shapes = [
    new Circle(5),
    new Rectangle(4, 6),
    new Circle(2)
];

// Iterating through different shapes and calling the same method
shapes.forEach(shape => {
    // Polymorphism in action: the correct area() method is called for each object type
    printArea(shape);
});

// Output:
// Area: 78.54
// Area: 24.00
// Area: 12.57
