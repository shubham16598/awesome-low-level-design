# Aggregation in JavaScript

## Introduction
Aggregation is a specialized form of association where all objects have their own lifecycle, but there is ownership. This represents a "has-a" relationship.

## Key Concepts

### Weak Relationship
In aggregation, the child can exist independently of the parent. For example, a `Department` has `Teachers`. If the `Department` is destroyed, the `Teachers` still exist.

## Syntax

```javascript
class Teacher {
  // ...
}

class Department {
  constructor(name, teachers) {
    this.name = name;
    this.teachers = teachers;
  }
}

const teacher1 = new Teacher();
const dept = new Department("Science", [teacher1]);
```
