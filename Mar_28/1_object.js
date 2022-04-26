let person = {
    name : "Shravil",
    "Last name" : "Bhagwat",
    age : 24,
    hobbies : ["Sports", "Cooking"],
    greet: function(){
        alert("Hi there");
    },
    1.5 : "one point five", 
};

// console.log(person);
// console.log(person[1.5]);
// console.log(person['Last name']);


// console.log(person.isAdmin);

// person.age = undefined;
// console.log(person);
// person.age = null;
// console.log(person);

// //Deleting property
delete person.age;
console.log(person);
