let stringSort = ()=>{
    let arr = ["Shravil", "Shubham", "Aditya", "Aditi"];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length-1; j++){
            if(arr[i].compareTo(arr[j+1])>0){
                temp = arr[i];
                arr[i] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    for(let i = 0; i<arr.length; i++){
        console.log(`arr[i]`);
    }
}
stringSort();