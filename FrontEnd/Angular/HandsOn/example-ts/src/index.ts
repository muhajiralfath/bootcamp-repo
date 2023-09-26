class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person = new Person("John", "Doe");
console.log(person.getFullName());

enum Color {
    Red = "Red",
    Green = "Green" ,
    Blue = "Blue"
}
let c: Color = Color.Green ;

console.log(c)
