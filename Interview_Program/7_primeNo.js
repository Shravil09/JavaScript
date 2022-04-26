let primeNo = ()  =>{
    let num = 7;
    let temp = 0;
    
    for(let i=2; i< num; i++){
        if( num % 2 == 0){
            temp++;
           // break;
        }
    }
    if(temp == 0){
        console.log(`${num} : is Prime no`);
    }
    else{
        console.log(`${num} : is't Prime no`);
    }
}
primeNo();