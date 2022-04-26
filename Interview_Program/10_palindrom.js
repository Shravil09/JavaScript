let palindrom = ()=>{
    let num = 121;
    let rev=0, rem = 0;
    let temp = num;

    while(temp != 0){
        rem = (temp/10);
        rev = rev * 10 + rem;
        temp = parseInt(temp % 10);
    }
    if(num == rev){
        console.log(`${num} is a palindrom number`);
    }
    else{
        console.log(`${num} is not a palindrom number`);
    }
}

palindrom();