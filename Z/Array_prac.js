/*
    let arr = [1,2,3,4,5];
    arr.push(6);
    console.log(arr);

    //[ 1, 2, 3, 4, 5, 6 ]
*/

/*
    let arr1 = [1,2,3,4,5];
    arr1.unshift(0);
    console.log(arr1);

    //[0, 1, 2, 3, 4, 5, 6 ]
*/

/*
    let arr2 = [1,2,3,4,5,6];
    arr2.pop();
    console.log(arr2);

    //[ 1, 2, 3, 4, 5 ]
*/

/*
    let arr3 = [1,2,3,4,5];
    arr3.shift();
    console.log(arr3);

    //[ 2, 3, 4, 5 ]
*/


/*
    // ex-1.

    let scl = ["Pink","Flower","Higher","Secondry"];
    let val = scl.splice(0,0, "New");
    console.log(val);
    console.log(scl);

    // []    => val  
    // [ 'New', 'Pink', 'Flower', 'Higher', 'Secondry' ] => scl
 
*/

/* 
    // ex-2.

    let scl = ["Pink","Flower","Higher","Secondry"];
    let val = scl.splice(1,2, "New");
    console.log(val);
    console.log(scl);

    // [ 'Flower', 'Higher' ]
    // [ 'Pink', 'New', 'Secondry' ]
*/


/*
    //.........slice()..............

    let arr4 = ["Shravil", "Shubham", "Aditya", "Aditi"];
    let a = arr4.slice(-4, -1);
    console.log(a);

   // [ 'Shravil', 'Shubham', 'Aditya' ]
*/


// ************ find()***************
/* 
    ex-1.

    const personData = [{name:"Shravil"},{name:"Shubham"}];
    const myName = personData.find(function(person, index){
        console.log(index, 'idx');
        return person.name === "shubham";
    })
    console.log(myName, personData);

*/

/*
    let arr5 = [1,2,34,5,6];
    let res = arr5.find(x=> x > 5);
    console.log(res);
        // 34
*/

/*
    let arr5 = [1,2,3,4,5,6];
    let res = arr5.findIndex(x=> x > 5);
    console.log(res);
    // 5 => index position

*/

/*
    const price = [1,2,3,4,5];
    const tax = 0.19;
    const taxAdj = [];

    price.forEach((price, idx, pri)=>{
        if(price > 2){
            const obj1 = {index: idx, taxAdj :price*(tax+1)}
            taxAdj.push(obj1);
        }
    })
    console.log(price, taxAdj);

    // [ 1, 2, 3, 4, 5 ] [
    // { index: 2, taxAdj: 3.57 },
    // { index: 3, taxAdj: 4.76 },
    // { index: 4, taxAdj: 5.949999999999999 }
    // ]
*/

// ************ map() **********************
/*
    const price = [1,2,3,4,5];
    const tax = 0.19;
    const taxAdj = price.map((price, index)=>{
        const obj = {idx:index, taxAdj: price*(1+tax)}
        return obj;
    })
    console.log(price)
    console.log(taxAdj);

//   [ 1, 2, 3, 4, 5 ]
//   [
//   { idx: 0, taxAdj: 1.19 },
//   { idx: 1, taxAdj: 2.38 },
//   { idx: 2, taxAdj: 3.57 },
//   { idx: 3, taxAdj: 4.76 },
//   { idx: 4, taxAdj: 5.949999999999999 }
// ]
*/


const price = [5,1,2,3,4];
const arr = price.sort((a,b)=>(a,b) ? -1:1);
console.log(price);
console.log(arr);





























































