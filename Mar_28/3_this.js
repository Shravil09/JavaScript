let obj = {
    name1: "CK",
    age: 30,
    address: "Ahmedabad",
    getName:  ()=> {
        console.log(this);
        return `My name is ${name1}`;
    },
};
console.log(obj.getName());
console.log(obj.abc);