/*
    console.log("Code execution starts");

    setTimeout(()=>{
        for(let i=0; i<5; i++){
            console.log("SetTimeout function called.."+ i);
        }
        console.log("..SetTimeout function executed..");
        for(let i=0; i<5; i++){
            console.log("SetTimeout function ended.."+ i);
        }
    }, 1000);

    console.log("Code execution ends");
*/

let datas = [
    {name:"Google", profession: "Service Based"},
    {name:"Facebook", profession: "Service Based"}
]
function getDatas(){
    setTimeout(()=>{
        datas.forEach((data, index)=>{
            document.write(`${index}...${data.name}`);
            document.write('<br>');
        })
    },1000);
}
    function createData(newdata, callback){
        setTimeout(()=>{
            datas.push(newdata);
            callback();
        },5000);        
}

createData({name:"Rakuten", profession:"Product Based"}, getDatas);




















