# Composition in JavaScript

## Introduction
Composition is a restricted form of Aggregation in which two entities are highly dependent on each other. It represents a "part-of" relationship.

## Key Concepts

### Strong Relationship
In composition, the child cannot exist without the parent. If the parent is destroyed, the child is also destroyed. For example, a `House` has `Rooms`. If the `House` is destroyed, the `Rooms` no longer exist.

## Syntax

```javascript
class Room {
  // ...
}

class House {
  constructor() {
    this.rooms = [new Room(), new Room()];
  }
}
```
