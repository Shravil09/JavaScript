var num1;
var num2;
num1 = prompt("Inpute the first integer", "0");
num2 = prompt("Inpute the second integer","0");

if(num1 >num2){
    console.log(`The larger number in betwwen ${num1} and ${num2} is ${num1} .`);
}
else
    if(num2 < num1){
        console.log(`The larger number in between ${num1} and ${num2} is ${num2} .`);
    }
    else
        if(num2 == num1){
            console.log(`The value of ${num1} and ${num2} is equal.`);
    }
