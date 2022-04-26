/*
    class Student{
        constructor(){
            let marks, name;
        }
        getName(){
            return this.name;
        }
        setName(name){
            this.name = name;
        }

        getMarks(){
            return this.marks;
        }
        setMarks(marks){
            this.marks = marks;
        }
    }

    let obj = new Student();
    obj.setName("Shravil");
    obj.setMarks(101);
    obj.setName("Shubham");
    obj.setMarks(102);

    console.log(obj.getMarks());
    console.log(obj.getName());

    // 102
    // Shubham
*/

// Without callback
/*
    class Person{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        address(add){
            this.address = add;
            this.details = function(){
                console.log(`My name is ${this.name}, Address is: ${this.address}`);
            }
            this.details();
        }
    }

let obj = new Person("Shravil", 24);
obj.address('Indore')
// obj.details();

*/


// With callback
/*
    class person{
        constructor(name, id){
            this.name = name;
            this.id = id;
        }
        add_Address(add, callback){
            this.address = add;
            this.details = callback;
        }
    }

    function getDetails(params){
        console.log(`Name is ${this.name}, Address is: ${this.id}`);
        console.log(params);
    }

    let obj = new person("Shravil", 101);
    obj.add_Address("Indore", getDetails);
    obj.details();

    // Name is Shravil, Address is: 101
    // undefined
*/


// With callback
/*
    class person{
        constructor(name, id){
            this.name = name;
            this.id = id;
        }
        add_Address(add, callback){
            this.address = add;
            this.details = callback;
        }
    }

    function getDetails(params){
        console.log(`Name is ${this.name}, Address is: ${this.id}`);
        console.log(params);
    }

    let obj = new person("Shravil", 101);
    obj.add_Address("Indore", getDetails.);
    obj.details();

    // Name is Shravil, Address is: 101
    // undefined
*/


// With callback

    class person{
        constructor(name, id){
            this.name = name;
            this.id = id;
        }
        add_Address(add, callback){
            this.address = add;
            this.details = callback;
        }
    }

    function getDetails(params){
        console.log(`Name is ${this.name}, Address is: ${this.id}`);
        console.log(params);
    }

    let obj = new person("Shravil", 101);
    obj.add_Address("Indore", getDetails.bind(obj, "Thanks"));
    obj.details();

    // Name is Shravil, Address is: 101
    // undefined


























