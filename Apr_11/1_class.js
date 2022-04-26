/*
    class ClassA{
        var_1 = "Hello_1";
        var_2 = "Hello_2";
        var_3 = "Hello_3";
    }

    let obj = new ClassA();
    console.log(obj.var_1, obj.var_2, obj.var_3);

    // Hello_1 Hello_2 Hello_3

*/

/*
    class ClassA{
        v1;
        v2;
        v3;
        constructor(){
            this.v1 = "Hello_1";
            this.v2 = "Hello_2";
            this.v3 = "Hello_3";
        }
    }
        let obj = new ClassA();
        console.log(obj.v1, obj.v2, obj.v3,);

        // Hello_1 Hello_2 Hello_3
*/

/*
    class ClassA{
        sub_one;
        sub_two;
        sub_three;

        constructor(arg1, arg2, arg3){
            this.sub_one = arg1;
            this.sub_two = arg2;
            this.sub_three = arg3;
        }
    }

    let obj = new ClassA("JAVA", "JDBC", "SpringBoot");
    console.log(obj.sub_one, obj.sub_two, obj.sub_three);
    //JAVA JDBC SpringBoot

*/

/*
    class ClassA{
        fun_one(){
            console.log(`Hello_1`);
        }
        fun_two(){
            console.log(`Hello_2`);
        }
        fun_three(){
            console.log(`Hello_3`);
        }
    }
    let obj = new ClassA();
    obj.fun_one();
    obj.fun_two();
    obj.fun_three();

    // Hello_1
    // Hello_2
    // Hello_3

*/
/*
    class class_one{
        v1;
        v2;
        v3;
        constructor(){
            this.v1 = "Hello_1";
            this.v2 = "Hello_2";
            this.v3 = "Hello_3";
        }
        fun_one(){
            return this.v1;
        }
        fun_two(){
            return this.v2;
        }
        fun_three(){
            return this.v3;
        }
    }
    let obj = new class_one();
    console.log( obj.fun_one(), obj.fun_two(), obj.fun_three() );
    //Hello_1 Hello_2 Hello_3
*/

/*
    class Person{
        constructor(age, name){
            this.age = age || 30;
            this.name = name || "Shravil";
        }   

        greet(){
            console.log(`Hi... My name is ${this.name} and i'm of ${30}`);
        }
    }

    let obj = new Person(24, "Sage");
    obj.greet();
    obj.age;
    obj.name;
    //Hi... My name is Sage and i'm of 30

*/


class Person{
    
    constructor(age, name){
        this. location = "Indore";
        this.a = age || 30;
        this.n = name || "Sage";
    }
    
    greet(){
        console.log(`My name is ${this.n} and my age is ${this.a}... living in ${this.location}`);
    }
}

let obj = new Person(20, "Harry");
obj.greet();
console.log(obj.location);

// My name is Harry and my age is 20... living in Indore
// Indore





















































