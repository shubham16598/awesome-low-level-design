# Inheritance in JavaScript

## Introduction
Inheritance is a mechanism where you can to derive a class from another class for a hierarchy of classes that share a set of attributes and methods.

## Key Concepts

### Extends
The `extends` keyword is used in class declarations or class expressions to create a class that is a child of another class.

### Super
The `super` keyword is used to access and call functions on an object's parent.

## Syntax

```javascript
class ParentClass {
  constructor() {
    // ...
  }
}

class ChildClass extends ParentClass {
  constructor() {
    super(); // Call parent constructor
    // ...
  }
}
```
