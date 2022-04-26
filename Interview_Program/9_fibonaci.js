let fibonaci = ()=>{
    let a=0;
    let b=1;
    let c;

    for(let i=0; i<=10; i++){
        c = a + b;
        console.log(" "+c);
        b = a;
        a = c;
    }
}

fibonaci();