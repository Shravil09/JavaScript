/*
    const p1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`promise-1`);
        },4000)
    })
    const p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`promise-2`);
        },0)
    })
    const p3 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`promise-3`);
        },0)
    })
    Promise.race([p1, p2, p3]).then((prMsg)=>{
        console.log(prMsg);
    }).catch((err)=>{
        console.log(err);
    })

    // promise-2
*/

/*
    const p1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`promise-1`);
        },4000)
    })
    const p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`promise-2`);
        },0)
    })
    const p3 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject(`promise-3`);
        },0)
    })
    Promise.allSettled([p1, p2, p3]).then((prMsg)=>{
        console.log(prMsg);
    }).catch((err)=>{
        console.log(err);
    })

    // [
    //     { status: 'fulfilled', value: 'promise-1' },
    //     { status: 'fulfilled', value: 'promise-2' },
    //     { status: 'rejected', reason: 'promise-3' }
    //   ]
*/

/*
    const p1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`promise-1`);
        },4000)
    })
    const p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`promise-2`);
        },0)
    })
    const p3 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`promise-3`);
        },0)
    })
    Promise.all([p1, p2, p3]).then((prMsg)=>{
        console.log(prMsg);
    }).catch((err)=>{
        console.log(err);
    })
    // [ 'promise-1', 'promise-2', 'promise-3' ]

*/

const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(`promise-1`);
    },4000)
})
const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(`promise-2`);
    },0)
})
const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(`promise-3`);
    },0)
})
Promise.all([p1, p2, p3]).then((prMsg)=>{
    console.log(prMsg);
}).catch((err)=>{
    console.log(err);
})

// promise-3



























