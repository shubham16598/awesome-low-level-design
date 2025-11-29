# Composite Design Pattern

## Concept
The Composite pattern lets you compose objects into tree structures and then work with these structures as if they were individual objects. It allows you to treat individual objects and compositions of objects uniformly.

## Real-world Analogy
A file system. A folder can contain files and other folders. You can treat a file and a folder in the same way (e.g., get name, get size). If you ask for the size of a folder, it calculates the sum of the sizes of all its contents.

## Key Features
- **Tree structure**: Represents part-whole hierarchies.
- **Uniformity**: Clients can treat individual objects and compositions of objects uniformly.
- **Recursion**: Makes it easy to add new kinds of components.

## When to use
- When you want to represent part-whole hierarchies of objects.
- When you want clients to be able to ignore the difference between compositions of objects and individual objects.
