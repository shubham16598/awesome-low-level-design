# Chain of Responsibility Design Pattern

## Concept
The Chain of Responsibility pattern lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

## Real-world Analogy
Technical support. You call support. The first level support tries to solve your problem. If they can't, they escalate it to the second level. If they can't, they escalate it to the third level (engineers). The request passes along the chain until someone handles it.

## Key Features
- **Decoupling**: Decouples the sender of a request from its receiver.
- **Dynamic chain**: You can add or remove handlers dynamically.
- **Single Responsibility Principle**: You can decouple classes that invoke operations from classes that perform operations.

## When to use
- When your program is expected to process different kinds of requests in various ways, but the exact types of requests and their sequences are unknown beforehand.
- When it's essential to execute several handlers in a particular order.
