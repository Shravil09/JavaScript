let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`Promise-1`);
    },2000)
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`Promise-2`);
    },3000)
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`Promise-3`);
    },1000)
})

Promise.race([p1,p2,p3]).then((prMsg)=>{
    console.log(prMsg);
}).catch((err)=>{
    console.log(err);
})