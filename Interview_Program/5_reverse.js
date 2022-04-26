
    function reverse(){
        var t = 54321;
        var rev=0;
        var rem;

        while( t != 0){
            rem = t % 10;
            rev = (rev * 10) + rem;
            t = parseInt(t / 10);
            
        }
        console.log(rev);
    }
    reverse();


/*
    const num = 234567;
    const reverseNumber = (num, res = 0) => {
    if(num){
        return reverseNumber(Math.floor(num / 10), (res*10)+(num % 10));
    };
    return res;
    };
    console.log(reverseNumber(num));
*/





















