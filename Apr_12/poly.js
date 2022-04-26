//polymorphism
//behaves like many called as polymorphism
//1) function overloading
//2) function overriding

/*
    //function overloading
    class class_one{
        fun_one(param1:number,param2:number):void;
        fun_one(param1:string,param2:string):void;
        fun_one(param1:any,param2:any):void{
            console.log( param1+param2 );
        };
    };
    let obj:class_one = new class_one();
    obj.fun_one(10,10);                             //20
    obj.fun_one("Hello_1","Hello_2");               //Hello_1Hello_2
*/



//function overriding
//overriding the parent class functionality with child class functionality called as function overriding
class Parent{
    dbFun(){
        return "data from oracle database soon...!";
    }
}

class Child extends Parent{
    dbFun(){
        return "data from mongodb soon...!";
    }   
}

let obj = new Parent();
console.log( obj.dbFun() );
//data from mongodb soon...!