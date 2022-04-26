
    const makeWithdraw = (balance) => ((copyBalance) => {
        let balance = copyBalance; // This variable is private
        const doBadThings = () => {
        console.log('I will do bad things with your money');
        };
        doBadThings();
        return {
        withdraw(amount) {
            if (balance >= amount) {
            balance -= amount;
            return balance;
            }
            return 'Insufficient money';
        },
        };
    })(balance);
    
    const firstAccount = makeWithdraw(100);   
    console.log(firstAccount.balance);              
    console.log(firstAccount.withdraw(20));  
    console.log(firstAccount.withdraw(30));   
    console.log(firstAccount.doBadThings);    
    const secondAccount = makeWithdraw(20);   
    console.log(secondAccount.withdraw(30));  
    console.log(secondAccount.withdraw(20));  


//  function sumUp(resultHandler, ...numbers) {
//     let sum = 0;
//     for (const num of numbers) {
//         sum = sum + num; 
//     }
//         return resultHandler(sum);
//     };
//     const showResult = (result) => {
//         return `The result after adding all numbers is: ${result}`;
//     };
//     console.log(sumUp(showResult, 1, 5, -3, 6, 10));

// function sumUp(resultHandler, ...numbers){
//     let sum = 0;
//     for(let num of numbers){
//         sum = sum + num;
//     }
//     return resultHandler(sum);
// }
// function showResult(result){
//     return `The result after adding all numbers is: ${result}`
// }
// console.log(sumUp(showResult, 1,2,3,4,5));