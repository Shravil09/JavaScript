function ClassA(){
    let t = 2;
    for(let i = 1; i <= 10; i++){
        if(i>2 && i<10){
            console.log(`.`);
        }else
        console.log(`${t} X ${i} = ${t*i}`);
    }
}
ClassA();