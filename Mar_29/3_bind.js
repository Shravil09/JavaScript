let classA = {
    name : "Shravil Bhagwat",
    age : 24,
    feature : function(){
        console.log(`My name is ${this.name} and i'm ${this.age} years old.`);
    }
}
let obj = classA.feature;  // output
obj();                     // My name is undefined and i'm undefined years old.

let obj1 = classA.feature.bind(classA);
obj1();