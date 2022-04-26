let bubbleSort = ()=>{
    let arr = [1,2,3,5,4];
    let temp;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-1; j++){
            if(arr[j]<arr[j+1]){
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]+"");
}
}
bubbleSort();