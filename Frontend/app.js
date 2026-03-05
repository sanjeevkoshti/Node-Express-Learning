class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
}

let s1 = new Student("Sanju", 20, 90);
let s2 = new Student("Mallu", 20, 80);

let t1 = new Teacher("Shivu", 25, 15000);
let t2 = new Teacher("Manish", 30, 20000);
