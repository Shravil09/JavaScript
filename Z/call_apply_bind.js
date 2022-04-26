/*
    const classA = {
        name : 'Shravil Bhgawat',
        age  : 24,
        work : 'Developer',
        meth : ()=>{
            console.log(`My name is ${classA.name}...I'm of ${classA.age}... Working as ${classA.work}`);
        }
    }

    const classB = {
        name : 'Shubham Bhagwat',
        age : 28,
        work : 'Tester',
    }

    classA.meth.call(classB);

    // My name is Shravil Bhgawat...I'm of 24... Working as Developer
*/


/*

    let classA = {
        name : 'Shravil Bhgawat',
        age  : 24,
        work : 'Developer',
        meth : function(designation, hobby){
            this.des = designation;
            this.hob = hobby;
            console.log(`My name is ${this.name}...I'm of ${this.age}... Working as ${this.work}... Designation is ${this.des}... My hobbies is ${this.hob}`);
        }
    }

    let classB = {
        name : 'Shubham Bhagwat',
        age : 28,
        work : 'Tester',
    }

    classA.meth.call(classB, 'Jr. Developer', 'Cricket, football');

    // My name is Shubham Bhagwat...I'm of 28... Working as Tester... Designation is Jr. Developer... My hobbies is Cricket, football
*/

/*
    const youtuber1= {
        Name :"Thappa Tech",
        designation : 'Berozgar',
        work : function(){
            console.log(`My name is ${this.Name}, my designation is ${this.designation}`);
        }
    }
    const youtuber2 = {
        Name : "Shravil Bhagwat",
        designation : "Developer"
    }

    youtuber1.work.call(youtuber2);
*/

/*
    let userDeatails = {
        name : "Shravil Bhagwat",
        age : 24,
        designation : "Developer",
    }
    let printDeatails = function(){
        console.log(this.name + " " + this.age + " " + this.designation );
    }

    printDeatails.call(userDeatails);   // Shravil Bhagwat 24 Developer

    let userDeatails1 = {
        name : "Shubham Bhagwat",
        age : 28,
        designation : "Devoop's",
    }

    printDeatails.call(userDeatails1)  // Shubham Bhagwat 28 Devoop's

*/


// ************************ apply() *****************************************
// ************************ apply() *****************************************

/*
    let classA = {
        name : 'Shravil Bhagwat',
        age : 24,
        position : 'Developer',
    }

    let work = function(state, country) {
        console.log(this.name + " " + this.age + " " +  this.position + " " + state + " "+ country);
    }

    let classB = {
        name : 'Shubham Bhagwat',
        age : 28,
        position : 'Devoops'
    }

    work.apply(classB, ["MP", "India"]);

    // Shubham Bhagwat 28 Devoops MP India

*/

const classA = {
    name : 'Shravil Bhagwat',
    age : 24,
    designation : "Developer",
    meth : function(){
        console.log(`My name is ${this.name}, I'm ${this.age} old, I'm ${this.designation}`);
    }
}

let obj = classA.meth.bind(classA);
obj();    // My name is Shravil Bhagwat, I'm 24 old, I'm Developer
























