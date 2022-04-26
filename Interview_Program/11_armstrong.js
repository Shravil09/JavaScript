
    // function armstrong(){
    //     let n = 153;
    //     let temp = n;
    //     let sum=0, r;

    //     while(n > 0){
    //         r = (n % 10);
    //         num = parseInt(n / 10);
    //         sum = (sum + r*r*r);
    //     }

    //     if(temp == sum){
    //         console.log(`Armstrong number`);
    //     }
    //     else
    //     console.log(`Not a Armstrong number`);
    // }
    // armstrong();


function armstrong(){
let sum = 0;
const number = prompt('Enter a three-digit positive integer: ');

// create a temporary variable
let temp = number;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
    }
}
armstrong();