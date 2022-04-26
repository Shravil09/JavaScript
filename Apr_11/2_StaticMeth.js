class Person2 {
    constructor(age, name) {
        this.age =  30;
        this.name = "CK";
        console.log(`Parameterized constructor`);
    }
    greet() {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
    }
    profession = "IT Professional";
    static address = "Ahmedabad";
    static showAddress() {
        console.log(`I am staying in ${this.address}`);
    }
}
let classObj = new Person2();
classObj.greet();
console.log(classObj.profession);
Person2.showAddress();