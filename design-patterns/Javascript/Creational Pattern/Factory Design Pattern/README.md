# Factory Design Pattern

## Concept
The Factory Method pattern defines an interface for creating an object, but let subclasses decide which class to instantiate. It lets a class defer instantiation to subclasses.

## Real-world Analogy
Consider a logistics company. Initially, it only handles truck deliveries. So, your code is tightly coupled to the `Truck` class. Later, you add sea logistics. Now you need `Ships`. If you use a Factory, you can have a `Logistics` class with a `createTransport` method. `RoadLogistics` subclass returns a `Truck`, and `SeaLogistics` subclass returns a `Ship`. The client code just calls `createTransport` and works with the returned `Transport` object interface.

## Key Features
- **Decoupling**: The creator class is decoupled from the concrete products it creates.
- **Single Responsibility Principle**: You can move the product creation code into one place in the program, making the code easier to support.
- **Open/Closed Principle**: You can introduce new types of products into the program without breaking existing client code.

## When to use
- When you don't know beforehand the exact types and dependencies of the objects your code should work with.
- When you want to provide users of your library or framework with a way to extend its internal components.
