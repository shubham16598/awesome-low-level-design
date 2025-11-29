# Interfaces in JavaScript

## Introduction
An interface is a contract that defines a set of methods that a class must implement. JavaScript does not have a built-in `interface` keyword like Java or TypeScript. However, we can simulate interfaces using "Duck Typing" or by creating a base class that throws errors if methods are not implemented.

## Key Concepts

### Duck Typing
"If it walks like a duck and quacks like a duck, then it must be a duck." In JavaScript, we often check if an object has the required methods rather than checking its type.

### Interface Simulation
We can create a class that acts as an interface by ensuring that any class extending it implements specific methods.

## Syntax

```javascript
class InterfaceName {
  methodName() {
    throw new Error("Method 'methodName' must be implemented.");
  }
}
```
