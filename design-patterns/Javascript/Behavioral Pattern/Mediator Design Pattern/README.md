# Mediator Design Pattern

## Concept
The Mediator pattern lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.

## Real-world Analogy
Air traffic control. Pilots of planes don't talk to each other directly to decide who lands first. They talk to the air traffic controller (mediator). The controller coordinates the planes. This reduces the complexity of communication.

## Key Features
- **Centralized control**: Centralizes complex communications and control logic.
- **Decoupling**: Decouples colleagues (components) from each other.
- **Many-to-many to One-to-many**: Transforms many-to-many relationships into one-to-many relationships.

## When to use
- When it's hard to change some of the classes because they are tightly coupled to a bunch of other classes.
- When you can't reuse a component in a different program because it's too dependent on other components.
