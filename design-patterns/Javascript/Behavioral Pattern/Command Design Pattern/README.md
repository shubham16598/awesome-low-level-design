# Command Design Pattern

## Concept
The Command pattern turns a request into a stand-alone object that contains all information about the request. This transformation lets you parameterize methods with different requests, delay or queue a request's execution, and support undoable operations.

## Real-world Analogy
A restaurant order. You (client) give an order (command) to a waiter (invoker). The waiter takes the order to the kitchen (receiver). The chef cooks the meal. The order object contains all the details (what meal, table number). The waiter doesn't need to know how to cook, just how to pass the order.

## Key Features
- **Decoupling**: Decouples the object that invokes the operation from the one that knows how to perform it.
- **Undo/Redo**: Commands can be stored to implement undo/redo functionality.
- **Queueing**: Commands can be queued for delayed execution.

## When to use
- When you want to parameterize objects with operations.
- When you want to queue operations, schedule their execution, or execute them remotely.
- When you want to implement reversible operations.
