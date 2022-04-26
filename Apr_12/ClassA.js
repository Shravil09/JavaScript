class ClassA{
    display(){
        console.log("Display() method called");
    }
    meth(){
        console.log("ClassA method called");
    }
    // constructor(){
    //     console.log("Default constructor of classA...");
    // }
    constructor(i){
        console.log("Parameterized constructor of classA..."+i);
    }
}

class ClassB extends ClassA{
    show(){
        super.meth();
        console.log("Show() method called");
    }
    meth(){
        console.log("ClassB() method called");
    }
    // constructor(){
    //     this(50);
    //     console.log("Default constructor of classB...");
    // }
    constructor(){
        super(50);
        console.log("Default constructor of ClassB...");
    }
}

let obj = new ClassB();
obj.show ();
obj.display();