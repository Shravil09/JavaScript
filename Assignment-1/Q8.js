// Explain the output of the below code
let value = 0;
if(-2){
    var value = 10;
}
console.log(value);

// Output: syntaxError identifier value already decleared
// Explaination: var breaks block scope rule, In above question var will become global variable,
//               since value is aleready decleared with let keyword so it can't override. 