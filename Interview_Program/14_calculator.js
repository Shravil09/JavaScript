let num1 = parseFloat(prompt(`Enter the first number : `));
let num2 = parseFloat(prompt(`Enter the second number : `));
let operator = prompt(`Enter operator(+,-,/,*,%)`);
let result;
switch(operator){
    case '+':
        console.log(result =num1 + num2);
        break;
    case '-':
        console.log(result = num1 - num2);
        break;
  
    case '*':
        console.log(result = num1 *num2);
        break;
    case '/':
        console.log(result = num1 /num2);
        break;
    
    case '%':
        console.log(result = num1 %num2);
        break;    

    default:
        console.log(`Invalid Operator`);
        break;    
}