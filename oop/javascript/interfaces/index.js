/**
 * Interfaces in JavaScript
 * 
 * JavaScript does not have built-in interfaces. This file demonstrates how to simulate
 * interfaces by defining a base class that enforces method implementation in its subclasses.
 */

// Simulating an Interface
class Printable {
    print() {
        throw new Error("Method 'print()' must be implemented.");
    }
}

// Class implementing the Printable interface
class Document extends Printable {
    constructor(content) {
        super();
        this.content = content;
    }

    print() {
        console.log(`Printing Document: ${this.content}`);
    }
}

// Another class implementing the Printable interface
class Image extends Printable {
    constructor(filename) {
        super();
        this.filename = filename;
    }

    print() {
        console.log(`Printing Image: ${this.filename}`);
    }
}

// Function expecting an object that implements the Printable interface
function printItem(item) {
    if (item instanceof Printable) {
        item.print();
    } else {
        console.log("Item is not printable.");
    }
}

const doc = new Document("Hello World");
const img = new Image("photo.jpg");

printItem(doc); // Output: Printing Document: Hello World
printItem(img); // Output: Printing Image: photo.jpg

// const invalid = new Printable();
// invalid.print(); // Error: Method 'print()' must be implemented.
