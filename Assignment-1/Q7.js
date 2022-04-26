// //Explain the output of the below code
for (let i = 0; i < 5; i++) {       // value of i=0, i=1, i=2, i=3, i=4 
    if (i == 3) {                   // f, f, t, f, t          
        continue;                   
    }
    console.log(i);                 // 0, 1, 3, 4
    
    for (let i = 0; i <= 3; i++) {  // 0, 1, 2, 3
    if (i == 2) {                   // f, f, t, f          
        break;                      
    }
        console.log(`i:${i}`);      // i:0, i:1 
    }                               // i:0, i:1
}


0
i:0     
i:1
1
i:0
i:1
3
i:0
i:1
4
i:0
i:1