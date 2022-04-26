const object1 = {
    name:"Shravil Bhagwat",
}
console.log(object1);

const object2 = {
    rollNo : 101,
    __proto__ : object1,
}

console.log(object2);