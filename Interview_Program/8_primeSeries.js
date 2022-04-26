let primeSeries = ()=>{
    for(let i=1; i<=200; i++){
        let temp=0;
        for(j=2; j<=i-1; j++){
            if(i% j == 0){
                temp++;
            }
        }
        if(temp == 0){
            console.log(i);
        }
    }
}
primeSeries();