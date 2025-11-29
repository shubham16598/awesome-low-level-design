# Association in JavaScript

## Introduction
Association represents a relationship between two or more objects where all objects have their own lifecycle and there is no owner. It is a "has-a" relationship, but loosely coupled.

## Key Concepts

### Relationship
Association is a relationship where all objects have their own lifecycle and there is no owner.

### Types
- **One-to-One**: One object is associated with one object.
- **One-to-Many**: One object is associated with many objects.
- **Many-to-Many**: Many objects are associated with many objects.

## Syntax

```javascript
class ClassA {
  // ...
}

class ClassB {
  // ...
}

const objA = new ClassA();
const objB = new ClassB();

// Association established through method call or property assignment
objA.method(objB);
```
