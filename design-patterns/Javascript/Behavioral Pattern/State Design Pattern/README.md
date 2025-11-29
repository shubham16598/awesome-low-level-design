# State Design Pattern

## Concept
The State pattern lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.

## Real-world Analogy
A smartphone. When the phone is unlocked, pressing the volume button adjusts the ringer volume. When the phone is in a call, pressing the volume button adjusts the call volume. The phone behaves differently depending on its state (unlocked vs. in-call).

## Key Features
- **State-specific behavior**: Encapsulates state-specific behavior in separate classes.
- **Context delegation**: The context delegates execution to the current state object.
- **Explicit transitions**: Makes state transitions explicit.

## When to use
- When you have an object that behaves differently depending on its current state, the number of states is enormous, and the state-specific code changes frequently.
- When you have a massive conditional (switch or if-else) that alters the behavior of the class according to the current values of the object's fields.
