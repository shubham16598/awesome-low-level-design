# Encapsulation in JavaScript

## Introduction
Encapsulation is the concept of bundling data (variables) and methods (functions) that operate on the data into a single unit, or class. It also restricts direct access to some of an object's components, which is a means of preventing accidental interference and misuse of the methods and data.

## Key Concepts

### Data Hiding
In many OOP languages, encapsulation is used to hide the internal state of an object and require all interaction to be performed through an object's methods.

### Private Fields
In JavaScript, private class fields are defined using a hash `#` prefix. These fields are accessible only within the class where they are defined.

## Syntax

```javascript
class ClassName {
  #privateField;

  constructor(value) {
    this.#privateField = value;
  }

  getPrivateField() {
    return this.#privateField;
  }
}
```
