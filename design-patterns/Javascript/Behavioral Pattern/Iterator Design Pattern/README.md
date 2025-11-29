# Iterator Design Pattern

## Concept
The Iterator pattern lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).

## Real-world Analogy
Touring a city. You can walk around randomly, or you can take a guided tour. The guide (iterator) knows the route and shows you the sights one by one. You don't need to know the map of the city, just follow the guide.

## Key Features
- **Traversal**: Provides a standard way to traverse a collection.
- **Decoupling**: Decouples the traversal algorithm from the collection.
- **Multiple traversals**: You can have multiple iterators traversing the same collection at the same time.

## When to use
- When your collection has a complex data structure under the hood, but you want to hide its complexity from clients.
- When you want to reduce duplication of the traversal code across your app.
