# Memento Design Pattern

## Concept
The Memento pattern lets you save and restore the previous state of an object without revealing the details of its implementation.

## Real-world Analogy
A save point in a video game. Before fighting a boss, you save the game. If you lose, you can reload the save and try again. The save file (memento) stores the state of your character (health, inventory) without exposing how the game engine works.

## Key Features
- **Snapshot**: Captures the internal state of an object.
- **Encapsulation**: Does not violate encapsulation (the memento is opaque to the caretaker).
- **Undo/Redo**: Useful for implementing undo mechanisms.

## When to use
- When you want to produce snapshots of the object's state to be able to restore a previous state of the object.
- When direct access to the object's fields/getters/setters violates its encapsulation.
