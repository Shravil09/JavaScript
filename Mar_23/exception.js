/*
    try {
        function add(){
            let a = parseInt(prompt(`Enter the value of a`));
            let b = parseInt(prompt(`Enter the value of b`));
        
            let results = a + b;
            if(isNaN(results)){
                throw{message:`Please enter valid number`};
            }
        }
        
    } catch (error) {
        console.log(error.message);
    }
    console.log(add()); 
*/

/*
    function myFunc()
    {
    var a;
    try {
            document.write ("Value of variable a is : " + a );
        }catch ( e ) {  
            document.write ("Error: " + e.description );
        }finally {
            document.write ("Finally block will always execute!" );
        }
    }

    myFunc();
*/

function myFunc()
    {
        var a = 100;
        var b = 0;
        
        try{
            var c = a / b;
                console.log(c);
            
        }catch ( e ) {
            document.write ("Error: " + e.message );
        }
    }

myFunc();







