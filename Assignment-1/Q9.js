//Explain the output of the below code
console.log(add);
    var add = function (a, b) {
    const results = a + b;
    return results;
};

// Output: undefined
// Explaination: Whenever we decleared function as an expression, varible will hoist without initialization.