/*
    function classA(){
        navigator.geolocation.getCurrentPosition(
            function(posData){
                setTimeout(()=>{
                    console.log(posData);
                }, 2000);
            },
            function(err){
                console.log(err);
            }
        )
        console.log("Getting Position");
    }
    classA();
*/


let datas = [{name : 'Shravil', profession:'Engg'},
             {name : 'Shubham', profession:'Devoops'}]

function getData(){
    setTimeout(()=>{
        let output = "";
        datas.forEach((data, index)=>{
            output = output + `<li>${index}...${data.name}</li>`
        })
        document.write(output);
    },10000)
}

function createData(newData){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            datas.push(newData);
            let err = false;
            if(!err){
                resolve(newData);
            }
            else{
                reject("Something went wrong");
            }
        },2000)
    })
}

createData({name : 'Aditya', profession:'Ui/Ux'}).then(getData).catch((error)=>{
    console.log(error);
})
























