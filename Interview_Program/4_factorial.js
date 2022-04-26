function factorial(){
    let fact = 1;
    for(let i = 1; i <= 5; i++){
        fact = fact * i;
    }
    console.log(`Factorial of "5" is ${fact}`);
}
factorial();