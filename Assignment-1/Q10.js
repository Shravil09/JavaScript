//Explain the result of the below codes?
let results = ((4 + 5) / 3) ** 2
console.log(results)
let result = NaN && null || '0' && 0
console.log(result);

//Output: 9 and 0
//Explaination: 1st Answer is 9 because associativity of braces is high, so code will execute left to right. 
//              2nd Answer is 0 because condition for logical AND operator should be true, & in above problem
//              NaN is truthy and null is falsy value, so it'll return false but we are also using logical OR
//              operator, so it will return 0 because of '0' && 0 is satisfying true condition.