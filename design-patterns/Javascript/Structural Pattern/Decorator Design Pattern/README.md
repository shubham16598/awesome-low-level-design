# Decorator Design Pattern

## Concept
The Decorator pattern lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors. It allows you to add functionality to an object dynamically without altering its structure.

## Real-world Analogy
Wearing clothes. You are the object. You can wear a shirt (decorator), then a jacket (another decorator), then a raincoat (another decorator). Each layer adds new functionality (warmth, rain protection) without changing you. You can take them off or put them on in any order.

## Key Features
- **Extensibility**: Adds responsibilities to an object dynamically.
- **Flexibility**: A flexible alternative to subclassing for extending functionality.
- **Composition**: Allows you to compose behaviors at runtime.

## When to use
- When you want to add responsibilities to individual objects dynamically and transparently, that is, without affecting other objects.
- When extension by subclassing is impractical or impossible.
