/*
    const datas = [
                    {name : "Shravil", profession : "Software Engineer"},
                    {name : "Shubham", profession : "Software Engineer"}
    ];

    function getData(){
        setTimeout(()=>{
            let output = "";
            datas.forEach((data, index)=>{
            output += `<li>${data.name}</li>`;
        });
            document.write(output);
        },2000)
    }

    function createData(newData){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                datas.push(newData);
                let error = true;
                if(!error){
                    resolve(`Data pushed successfully`);
                }else{
                    reject(`Something went wrong`);
                }
            },3000);
        })
    }

    createData({name : "Aditya", profession : "Software Engineer"}).then(getData).catch((err)=>{document.write(err);});
*/    

function getUser(userId) {
    return new Promise((resolve, reject) => {
    if (userId) {
    console.log("Get the user from the database.");
    resolve({
    userId: userId,
    username: "admin",
    });
    } else {
    reject(`Did not get userID from Database`);
    }
    });
    }
    function getServices(user) {
    return new Promise((resolve, reject) => {
    if (0) {
    console.log(`Get the services of ${user.username} from the API.`);
    resolve(["Email", "VPN", "CDN"]);
    } else {
    reject(`Did not get user from Database`);
    }
    });
    }
    function getServiceCost(services) {
    return new Promise((resolve, reject) => {
    console.log(`Calculate the service cost of ${services}.`);
    resolve(services.length * 100);
});
}
getUser(100)
.then(getServices)
.then(getServiceCost)
.then((serviceVal) => {
console.log(serviceVal);
})
.catch((err) => {
console.log(err);
});