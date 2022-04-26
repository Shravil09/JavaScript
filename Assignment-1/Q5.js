// What is the output of below code and Why?
let obj1 = 2
let obj2 = "2"
console.log(obj1 == obj2);

// output = false
// Explaination : Whenever object is created, it'll store inside the Heap memory with address location,
//                In above question both objects have same value but their address location is different.
//                when we campare both object, The result will be false