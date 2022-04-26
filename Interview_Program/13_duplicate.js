function duplicate(){
    let arr = [1,2,3,5,2,62,,4,9];
    for(let i = 0; i<arr.length; i++){
        for(let j =  i+1; j<arr.length; j++){
            if(arr[i]===arr[j]){
                console.log(`Duplicate ${arr[i]}`);
            }
        }
    }
}
duplicate();