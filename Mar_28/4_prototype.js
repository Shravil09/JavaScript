function Person(a, n){
    this.age = a;
    this.name = n;
    this.info = function(){
        return `Hi my name is ${this.name} and i'm ${this.age} years old`;
    }
}

let obj1 = new Person(20, "Shravil");

console.log(obj1.info());

Person.prototype.partner = "Shubham";
console.log(obj1.partner);