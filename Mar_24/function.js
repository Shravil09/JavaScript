/*
// Function as statement
function add(a, b) {
    const results = a + b;
    return results;
}
console.log(add(2,5));
    
// Function as expression
let sum = function(a,b){
    const results = a + b;
    return results;
}
console.log(sum(5,5));

// Functions vs Methods
function add(a, b) {
    const results = a + b;
    return results;
}
let person = {
    name: "CK", // property
    greet: function () { // Method    // Initializing Annonymous function into variable inside object called method
    console.log("Hello CK");
    },
};
(person.greet());
*/

/*
    let add = function (a, b) {
        const results = a + b;
        return results;
        };
        console.log(add(2, 3));
        // addNum(3, 4);
 

//Annonymous function
var add = (a,b) =>{
    return a+b;
}
console.log(add(5,15));
*/

const log = (message) => {
    return "This is Shravil"
}
console.log(log); 
