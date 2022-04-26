let person = {
    name : `Shravil Bhagwat`,
    age : 24,
    designation : `Berozgar`
}

let person1 = {
    name : `Shubham Bhagwat`,
    age : 28,
    designation : `Devoop's Enginner`
}

let printDetails = function(salary, city){
    console.log(`My name is ${this.name}, and my designation ${this.designation}. and my salary ${salary},  I lives in ${city}.`);
}

printDetails.apply(person,  [20000, `Indore`]);
printDetails.apply(person1,  [80000, `Akola`]) ;