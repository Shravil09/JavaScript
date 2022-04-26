/*
const myPromise = ()=>
    Promise.resolve("I have resolved!!");

    function firstFunction(){
        myPromise().then(res=>
            console.log(res));
            console.log("first");
    }

    async function secondFunction(){
        console.log(await myPromise());
        console.log("Second");
    }

    firstFunction();
    secondFunction();

// output:
    first
    I have resolved!!
    I have resolved!!
    Second

*/


const myPromise = ()=>
    Promise.resolve("I have resolved!!");

    function firstFunction(){
        myPromise().then(res=>
            console.log(res));
            console.log("first");
    }

    async function secondFunction(){
        console.log(await myPromise());
        console.log("Second");
    }

    firstFunction();
    secondFunction();










