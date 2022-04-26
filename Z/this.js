/*
    let obj = {
        name : 'Shravil',
        age  : 30,
        getName : function(){
            console.log(this);
            return `My name is ${this.name}`;
        }
    }
    console.log(obj.getName());
    // for(let p in obj){
    //     console.log(`${p} => ${obj[p]}` );
    // }
    console.log(obj.abc);

    // { name: 'Shravil', age: 30, getName: [Function: getName] }
    // My name is Shravil
    // undefined

*/

/*
    let obj = {
        name : 'Shravil',
        age : 30,
        getName : ()=>{
            console.log(this);
            return `My name is ${this.name} and i'm of ${this.age}`;
        }
    };

    console.log(obj.getName());
    console.log(obj.abc);

    // {}
    // My name is undefined and i'm of undefined
    // undefined
*/

/*

    let obj = {
        name : 'Shravil',
        age : 30,
        getName : ()=>{
            console.log(this);
            return `My name is ${obj.name} and i'm of ${obj.age}`;
        }
    };

    console.log(obj.getName());

    // {}
    // My name is Shravil and i'm of 30
*/


//*******************************************************

// we can create object in three ways 
// 1. object literal
// 2. by function
// 3. by class

// 2nd way====>
/*
    function person(){
        this.name = 'Shravil';
        this.age  = 24;
        this.greet = function(){
            console.log(`Hi... My name is ${this.name}, and i'm ${this.age} old`);
        }
    }
    let obj = new person();
    obj.greet();

    //Hi... My name is Shravil, and i'm 24 old
*/

/*
    function classA(var_one, var_two){
        this.name = var_one;
        this.age = var_two;
        this.greet = ()=>{
            console.log(`Hi... My name is ${this.name} and i'm of ${this.age} old.`);
        }
    }
    let obj = new classA("Rocky", 30);
    obj.greet();

    // Hi... My name is Rocky and i'm of 30 old.
*/

/*

    function classA(var_one, var_two){
        this.name = var_one;
        this.designation = var_two;
        this.meth1 = ()=>{
            console.log(`Hi... ${this.name} and I'm ${this.designation}`);
        }
        this.meth2 = ()=>{
            console.log(`Hello... ${this.name} and I'm ${this.designation}`);
        }
    }

    let obj1 = new classA('Shravil', 'Engg');
    obj1.meth1();

    let obj2 = new classA('Shubham', 'Devoops');
    obj2.meth2();

    classA.prototype.degree = 'B.Tech';
    classA.prototype.meth3 = ()=>{
        console.log(`Hola... I'm ${obj1.name}, and I'm pursuing ${obj1.degree}`);
    }

    obj1.meth3();

    // Hi... Shravil and I'm Engg
    // Hello... Shubham and I'm Devoops
    // Hola... I'm Shravil, and I'm pursuing B.Tech

*/





















































