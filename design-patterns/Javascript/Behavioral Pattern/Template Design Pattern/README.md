# Template Method Design Pattern

## Concept
The Template Method pattern defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.

## Real-world Analogy
Building a house. The general steps are: build foundation, build walls, build roof, install windows. A standard house builder follows these steps. A wooden house builder implements "build walls" using wood. A brick house builder implements "build walls" using bricks. The overall process (template) is the same, but the details vary.

## Key Features
- **Skeleton**: Defines the invariant parts of an algorithm.
- **Hooks**: Subclasses can override specific steps (hooks) to customize behavior.
- **Code reuse**: Pulls common code into a superclass.

## When to use
- When you want to let clients extend only particular steps of an algorithm, but not the whole algorithm or its structure.
- When you have several classes that contain almost identical algorithms with some minor differences.
