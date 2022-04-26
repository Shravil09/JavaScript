function misDisPlayer(some){
   document.write(some);
}
function Calculator(n1, n2, mycallback){
    let add = n1 + n2;
    mycallback(add);
}

Calculator(5, 5,misDisPlayer);

/*
    function myDisplayer(some) {
        console.log(some);
    }
    
    function myCalculator(num1, num2, myCallback) {
        let sum = num1 + num2;
        myCallback(sum);
    }
    
    myCalculator(5, 5, myDisplayer);
*/
    