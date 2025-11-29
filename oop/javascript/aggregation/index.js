/**
 * Aggregation in JavaScript
 * 
 * Aggregation is a special form of Association where:
 * 1. It represents a "Has-A" relationship.
 * 2. It is a unidirectional association (a one-way relationship).
 * 3. Both entries can survive individually which means ending one entity will not affect the other entity.
 */

class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
}

class Department {
    constructor(name) {
        this.name = name;
        this.teachers = [];
    }

    addTeacher(teacher) {
        this.teachers.push(teacher);
    }

    listTeachers() {
        console.log(`Department: ${this.name}`);
        this.teachers.forEach(teacher => {
            console.log(`- ${teacher.name} (${teacher.subject})`);
        });
    }
}

const teacher1 = new Teacher("Mr. Smith", "Physics");
const teacher2 = new Teacher("Ms. Johnson", "Mathematics");

const scienceDept = new Department("Science");

// Aggregation: Department has Teachers, but Teachers exist independently.
scienceDept.addTeacher(teacher1);
scienceDept.addTeacher(teacher2);

scienceDept.listTeachers();
// Output:
// Department: Science
// - Mr. Smith (Physics)
// - Ms. Johnson (Mathematics)

// If scienceDept is destroyed, teacher1 and teacher2 still exist.
console.log(teacher1.name); // Output: Mr. Smith
