/*
    function revString(){
        nam = "Shravil";
        rev = "";

        for(let i = nam.length; i>=0; i--){
            rev = rev + nam.charAt(i);
        }
        console.log(rev);
    }
    revString();
*/ 


let revString = () =>{
    nm = "Shravil";
    rev = "";
    // for(let i = nm.length; i>=0; i--){
    //     rev = rev + nm.charAt(i);
    // }
    rev = nm.split().reverse().join();
    console.log(rev);
}
revString();












