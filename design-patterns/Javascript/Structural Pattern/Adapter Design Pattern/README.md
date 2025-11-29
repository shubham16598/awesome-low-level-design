# Adapter Design Pattern

## Concept
The Adapter pattern allows objects with incompatible interfaces to collaborate. It acts as a wrapper between two objects. It catches calls for one object and transforms them to format and interface recognizable by the second object.

## Real-world Analogy
A power plug adapter. If you travel from the US to Europe, you can't plug your US laptop into a European socket. You need an adapter that accepts the US plug and fits into the European socket.

## Key Features
- **Interface conversion**: Converts the interface of a class into another interface clients expect.
- **Reusability**: Allows classes to work together that couldn't otherwise because of incompatible interfaces.
- **Decoupling**: The client code is decoupled from the concrete adapters.

## When to use
- When you want to use an existing class, but its interface isn't compatible with the rest of your code.
- When you want to create a reusable class that cooperates with unrelated or unforeseen classes, that is, classes that don't necessarily have compatible interfaces.
