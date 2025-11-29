# Classes and Objects in JavaScript

## Introduction
JavaScript is a prototype-based language, but with ES6 (ECMAScript 2015), it introduced the `class` keyword to make it easier to write object-oriented code. Classes in JavaScript are primarily syntactical sugar over the existing prototype-based inheritance.

## Key Concepts

### Class
A class is a blueprint for creating objects. It encapsulates data (properties) and behavior (methods) that the objects created from the class will have.

### Object
An object is an instance of a class. It is a concrete entity created based on the blueprint defined by the class.

### Constructor
The `constructor` method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class.

## Syntax

```javascript
class ClassName {
  constructor(param1, param2) {
    this.prop1 = param1;
    this.prop2 = param2;
  }

  method1() {
    // code
  }
}

const obj = new ClassName(arg1, arg2);
```
