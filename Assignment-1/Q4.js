// // function
// let main = (name) => {
//     console.log(`Your name is ${name}`);
// }
// // callback function
// let displayName = (n) => {
//     return n;
// }
// // passing function as an argument
// main(displayName('Shravil'));

// function
function main(name, callback){
    var myName = `Hello, My name is ${name}`; 
    callback(myName);
}
// callback function
function displayName(name){
    console.log(name);
}

// passing function as an argument
main('Shravil', displayName);