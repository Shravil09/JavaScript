/*
    function classA(){
        var a = 10;
        var b = 20;

        b = a + b;  //30
        a = b - a;  //20 
        b = b - a;  //10
        console.log(a);
        console.log(b);
    }
    classA();
*/

function ClassA(){
    var a = 10;
    var b = 20;
    var c;

    c = a + b;
    a = c - a;
    b = c - b;

    console.log(a);
    console.log(b);
}
ClassA();