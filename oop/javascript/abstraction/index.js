/**
 * Abstraction in JavaScript
 * 
 * This file demonstrates how to achieve abstraction in JavaScript.
 * Since JavaScript doesn't have built-in abstract classes, we simulate them
 * by preventing direct instantiation and enforcing method implementation in subclasses.
 */

// Abstract Class Simulation
class Employee {
    constructor(name) {
        if (this.constructor === Employee) {
            throw new Error("Abstract class 'Employee' cannot be instantiated directly.");
        }
        this.name = name;
    }

    // Abstract method (must be implemented by subclasses)
    calculateSalary() {
        throw new Error("Method 'calculateSalary()' must be implemented.");
    }

    // Concrete method
    getDetails() {
        console.log(`Employee Name: ${this.name}`);
    }
}

class FullTimeEmployee extends Employee {
    constructor(name, salary) {
        super(name);
        this.salary = salary;
    }

    // Implementing the abstract method
    calculateSalary() {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(name, hourlyRate, hoursWorked) {
        super(name);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    // Implementing the abstract method
    calculateSalary() {
        return this.hourlyRate * this.hoursWorked;
    }
}

// const emp = new Employee("John"); // Error: Abstract class 'Employee' cannot be instantiated directly.

const fullTimeEmp = new FullTimeEmployee("Alice", 5000);
fullTimeEmp.getDetails(); // Output: Employee Name: Alice
console.log(`Salary: $${fullTimeEmp.calculateSalary()}`); // Output: Salary: $5000

const partTimeEmp = new PartTimeEmployee("Bob", 20, 80);
partTimeEmp.getDetails(); // Output: Employee Name: Bob
console.log(`Salary: $${partTimeEmp.calculateSalary()}`); // Output: Salary: $1600
