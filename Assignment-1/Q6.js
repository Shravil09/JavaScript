// What is the output of below code and why?
function display(MyName)
{
    let userName = MyName || "CK";
    console.log(userName);
    return true
}
display('Yuvraj');

//output: Yuvraj
//Explaination: Logical or operator campare two values
//              Within two condition atleast one condition should be true
//              returns first truthy value