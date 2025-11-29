/**
 * Encapsulation in JavaScript
 * 
 * This file demonstrates how to use encapsulation to restrict access to object properties
 * using private fields (introduced in ES2022).
 */

class BankAccount {
    // Private field declaration (prefixed with #)
    // These fields cannot be accessed directly from outside the class.
    #balance;

    constructor(owner, initialBalance) {
        this.owner = owner;       // Public property
        this.#balance = initialBalance; // Initialize private property
    }

    // Public method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Public method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
        } else {
            console.log("Insufficient funds or invalid amount.");
        }
    }

    // Public method to get the current balance (Getter)
    // This allows read-only access to the private balance.
    getBalance() {
        return this.#balance;
    }
}

const myAccount = new BankAccount("John Doe", 1000);

// Accessing public property
console.log("Account Owner:", myAccount.owner); // Output: John Doe

// Attempting to access private property directly will cause a syntax error
// console.log(myAccount.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class

// Using public methods to interact with private data
myAccount.deposit(500); // Output: Deposited 500. New balance: 1500
myAccount.withdraw(200); // Output: Withdrew 200. New balance: 1300

console.log("Current Balance:", myAccount.getBalance()); // Output: 1300
