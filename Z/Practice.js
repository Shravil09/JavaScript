/*
    function person(){
        this.age = 30;
        this.name = 'Shravil';
        this.greet = function(){
            console.log(`Hi, I'm ${this.name} and i'm ${this.age} year's old`);
        }
    }
    let obj = new person();
    obj.greet();
*/

/*
    function person(a,n){
        this.age = a;
        this.name = n;
        this.greet = function(){
            console.log(`I'm ${this.name} and I'm of ${this.age}`);
        }
    }
    let p = new person(20, 'Shravil');
    p.greet();
    let w = new person(24, 'Shubham');
    w.greet();

    // I'm Shravil and I'm of 20                                                          _
    // I'm Shubham and I'm of 24

*/


/*
    function classA(var_1, var_2){
        this.var_1 = 'Shravil';
        this.var_2 = 24;
        this.greet = function(){
            console.log(`Hi i'm ${this.var_1}, & i'm of ${var_2}.. living in ${this.address}`);
        }
    }
    classA.prototype.address = "Indore";
    classA.prototype.printAge = function(){
        console.log("Prototype function executed");
    }
    let obj = new classA();
    obj.greet();
    obj.printAge();

*/

/*
    // ************* Call()****************

    let classA = {
        firstName : "Shravil",
        lastName :"Bhagwat",
        info : function(profession, sem){
            this.profession = profession;
            this.sem = sem;
            console.log(this.firstName+" "+ this.lastName+" "+ this.profession+ " " + this.sem);
        }
    }

    classA.info("Engineer","4th");

    let classB = {
        firstName : "Shubham",
        lastName : "Sonwane"
    }

    classA.info.call(classB, "Diploma", "3rd");
*/

/*
    // ************* apply()****************

    let classA = {
        firstName : "Shravil",
        lastName :"Bhagwat",
    }
    let info = function(profession, sem){
        this.profession = profession;
        this.sem = sem;
        console.log(this.firstName+" "+ this.lastName+" "+ this.profession+ " " + this.sem);
    }

    info.call(classA, ["Engineering", '4th-sem']);

    let classB = {
        firstName : "Shubham",
        lastName : "Sonwane"
    }

    info.apply(classB, ["Diploma", "8th-sem"]);

*/

const youtuber = {
    name : "Ashok-IT",
    content : "Programming",
    feature : function(){
        console.log(`My classes name is ${this.name}, It is a ${this.content} classes`);
    }
}
youtuber.feature;
youtuber1();

let youtuber2 = youtuber.feature.bind(youtuber);
youtuber2();








































































