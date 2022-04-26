// 1st way
/*
    function myDisplayer(some){
        console.log(some);
    }
    function myCalculator(num1, num2){
        let sum = num1 + num2;
        return sum;
    }
    console.log(myCalculator(5,5));

    // 10

*/

// 2nd way
/*
    function myDisplayer(some){
        console.log("Sum of n1 and n2 is: "+ some);
    }

    function myCalculator(n1, n2){
        let sum = n1 + n2;
        myDisplayer(sum);
    }
    myCalculator(5,5)

    // sum of n1 and n2 is: 10
*/


// 3rd way

function myDisplayer(some){
    console.log(`Callback funtion called ` + some);
}

function sum(n1, n2, callback){
    let add = n1+n2;
    callback(add);
}

sum(5,5, myDisplayer);

// Callback funtion called 10


















