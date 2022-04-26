/*
    console.log(`Async example`);
    setTimeout(()=>{
        console.log(`TimeOut function starts`);
        for(let i = 1; i<=5; i++){
            console.log(`TimeOut function executed ${i}'s time`);
        }
        console.log(`TimeOut function ends`);
    }, 1000);

    function classA(){
        for(let i=1; i<=3; i++){
            console.log(`ClassA fun called ${i}`);
        }
    }
    classA();

//   output:-
//     Async example
//     ClassA fun called 1
//     ClassA fun called 2
//     ClassA fun called 3
//     TimeOut function starts
//     TimeOut function executed 1's time
//     TimeOut function executed 2's time
//     TimeOut function executed 3's time
//     TimeOut function executed 4's time
//     TimeOut function executed 5's time
//     TimeOut function ends

*/

/*
    const datas = [{name:'Shravil', profession: "Engg"},
                {name:'Shubham', profession: "Devoop's"}]

    function getData(){
        setTimeout(()=>{
            let output = "";
            datas.forEach((data, index)=>{
                output = output + `<li>${data.name}</li>`
            })
            document.write(output);
        },10000);
    }
    function createData(newdata){
        setTimeout(()=>{
            datas.push(newdata);
        },9000);
    }
    getData();
    createData({name:'Aditya', profession: "Designer"});
        // output-
        //* Shravil
        //* Shubham
        //* Aditya
*/

/*
    function getUser(userId){
        return new Promise((resolve, reject)=>{
            if(userId){
                console.log(`UserId is : ${userId}`)
                resolve({
                    userId: userId,
                    userName : "Shravil"
                });
            }
            else{
                reject(`Enter correct userId`);
            }
        })
    }

    function getServices(user){
        return new Promise((resolve, reject)=>{
            if(user){
                console.log(`Get serive from ${userName}`);
                resolve(["VPN", "CDN"]);
            }
            else{
                reject(`Unable to get services`);
            }
        })
    }

    getUser(1000).then(getServices).catch((err)=>{
        console.log(err);
    })

*/


// ***********************************************************************************************************
// ***********************************************************************************************************

/*

    console.log(`Asynchronus Example`);
    setTimeout(() => {
    console.log(`setTimeout function called...`);
    for(let i=1; i<=5; i++){
        console.log(`setTimeout function ${i} executed`);
    }
    console.log(`setTimeout function end...`); 
    }, 2000);

    for(let i=1; i<=3; i++){
        console.log(`For loop executed ${i}`);
    }
    console.log(`Code execution end...`);
*/

/*
    const datas = [{name:"Shravil Bhagwat", profession:"Developer"},
                {name:"Shubham Bhagwat", profession:"Dev Engg"}]

    function getData(){
        setTimeout(() => {
        let output = "";
        datas.forEach((data, index)=>{
            output += `<li>${index} ${data.name}...${data.profession}</li>`
        })
        document(output);
        }, 2000);
    }

    function createData(newdata){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                datas.push(newdata);
                let error = false;
                if(!error){
                    resolve(newdata);
                }
                else{
                    reject(`Somethingh went wrong`);
                }
            }, 2000);
        })
    }
    createData({name:"Aditya", profession:"UI/UX"}).then(getData).catch((err)=>{
        console.log(err);
    })

*/

let datas = [{name:"Shravil Bhagwat", profession: "Developer"},
             {name:"Shubham Bhagwat", profession: "Dev Engg"}]
function getData(){
    setTimeout(() => {
        let output = "";
        datas.forEach((index, data)=>{
            output += `<li>${index}... ${data.name}... ${data.profession}</li>`;
        })
        console.log(output);
    }, 5000);
}

function createData(newData){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            datas.push(newData);
            let error = false;
            if(!error){
                resolve(newData);
            }
            else{
                reject(`Something went wrong...`);
            }    
        }, 6000);        
    })
}

async function start(){
    await createData({name:"Aditya", profession:"UI/UX"});
    getData();
}
start();



























































































