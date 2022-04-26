let sum = (a,b) =>{
    console.log(`Sum of ${a} and ${b} is ${a+b}`);
}

let callback = (sum)=>{
    console.log(`Callback function called`);
    if(sum){
        sum();
    }
}

callback(sum(3,5));