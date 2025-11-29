# Flyweight Design Pattern

## Concept
The Flyweight pattern lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.

## Real-world Analogy
A library. A library has many books. Instead of buying a new copy of a book for every person who wants to read it, the library buys a few copies and lends them out. The book object (title, author, content) is shared among many readers (contexts).

## Key Features
- **Memory efficiency**: Reduces memory usage by sharing data.
- **Intrinsic vs Extrinsic state**: Separates intrinsic state (shared) from extrinsic state (context-specific).
- **Immutability**: Shared objects must be immutable.

## When to use
- When your program needs to support a huge number of objects which barely fit into available RAM.
- When many groups of objects contain duplicate state, and you can extract this state into a shared object.
