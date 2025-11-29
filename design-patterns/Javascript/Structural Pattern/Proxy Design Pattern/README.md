# Proxy Design Pattern

## Concept
The Proxy pattern provides a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

## Real-world Analogy
A credit card. A credit card is a proxy for a bank account (or a bundle of cash). You can use it to make payments without carrying around a lot of cash. The bank checks your credit limit (access control) before approving the transaction.

## Key Features
- **Access control**: Controls access to the real object.
- **Lazy initialization**: Can create the real object only when it is needed.
- **Logging/Caching**: Can add logging or caching behavior.

## When to use
- **Lazy initialization (virtual proxy)**: When you have a heavyweight service object that wastes system resources by being always up, even though you only need it from time to time.
- **Access control (protection proxy)**: When you want only specific clients to be able to use the service object.
- **Remote proxy**: When the service object is located on a remote server.
