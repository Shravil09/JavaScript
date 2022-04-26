function main(name, callback){
    var myName = `Hello, My name is ${name}`; 
    callback(myName);
}

function displayName(name){
    console.log(name);
}

main('Shravil', displayName);

// const main = (result) =>{
//     let name1 = '';
//     return result(name1);
// }
// const displayName = (result) =>{
//     return `Hello, My name is ${result}`;
// }

// console.log(main(displayName), "Shravil");







// function
let main = (name, callback) => {
    var myName = (`Your name is ${name}`);
    callback(myName);
}
// callback function
let displayName = (name) => {
    console.log (name);
}
// passing function as an argument
// main(displayName('Shravil'));
main('Shravil', displayName);










