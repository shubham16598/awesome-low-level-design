# Polymorphism in JavaScript

## Introduction
Polymorphism is the ability of an object to take on many forms. The most common use of polymorphism in OOP occurs when a parent class reference is used to refer to a child class object.

## Key Concepts

### Method Overriding
Child classes can provide a specific implementation of a method that is already provided by one of its parent classes.

### Dynamic Typing
JavaScript's dynamic typing naturally supports polymorphism. Functions can accept arguments of any type, and as long as the object has the required method or property, it will work (Duck Typing).

## Syntax

```javascript
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const animals = [new Animal(), new Dog()];
animals.forEach(animal => animal.speak());
```
