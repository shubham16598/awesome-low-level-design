# Bridge Design Pattern

## Concept
The Bridge pattern lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.

## Real-world Analogy
A remote control and a TV. The remote control is the abstraction, and the TV is the implementation. You can have different remotes (basic, advanced) and different TVs (Sony, Samsung), and they can work together because they share a common interface (the signal). You can change the internal workings of the TV without changing the remote.

## Key Features
- **Decoupling**: Decouples an abstraction from its implementation so that the two can vary independently.
- **Extensibility**: You can extend the Abstraction and Implementor hierarchies independently.
- **Hiding details**: You can hide implementation details from clients.

## When to use
- When you want to divide and organize a monolithic class that has several variants of some functionality (e.g., if the class can work with various database servers).
- When you need to extend a class in several orthogonal (independent) dimensions.
