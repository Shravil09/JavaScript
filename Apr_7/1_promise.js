
// Promise chaning


function getUser(userId){
    return new Promise((resolve, reject)=>{
        if(userId){
            console.log(`Get the user from database`);
            resolve({
                userId : userId,
                username : "admin"
            });
        }
        else{
            reject(`Did not get userId from Database`);
        }

    })
}

function getServices(user){
    return new Promise((resolve, reject)=>{
        if(user){
            console.log(`Get the service of ${user.username} from the API`);
            resolve(["Email", "VPN", "CDN"]);
        }
        else{
            reject(`Did not get user from database`);
        }
    })
}

function getServiceCost(services){
    return new Promise((resolve, reject)=>{
        console.log(`Calculate the service cost of ${services}`);
        resolve(services.length *3);
    })
}

getUser(10)
.then(getServices)
.then(getServiceCost)
.then((serviceVal)=>{
    console.log(serviceVal);
}).catch((err=>{
    console.log(err);
}))














































