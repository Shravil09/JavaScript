/*
    for (let i = 0; i < 10; i++) {
        if (i==5) {
        // break;
        continue;
        // alert(44);
        }
        console.log(i);
    }
*/

/*
    outerLoop: for (let i = 0; i < 5; i++) {
        console.log(i);
        innerLoop: for (let j = 0; j < 5; j++) {
        if (i == 3) {
            //break outerLoop;
            continue outerLoop;
        }
        if (j == 2) {
            //continue innerLoop;
            break innerLoop;

        }
            console.log(`i:${i}`);
            console.log(`j:${j}`);
            }
        }
*/


    for(let i = 0; i < 5; i++){
       //console.log(i);
        if(i==2){
            continue;
            console.log(i);
        }
        
        console.log(`This is loop`);
    }

/*
    for(let i=0; i<5; i++){            // i=0 , i=1, i=2, i=3,, i=4
        if(i == 2){                  
            continue;
        }
        console.log(i);                // 0, 1, 3, 4

        for(let i=0; i<10; i++){       //0, 1, 2, 3, 4  // 0, 1, 2, 3, 4 // 0, 1, 2, 3, 4 // 0, 1, 2, 3, 4 //
            if(i == 5){
                break;
            }
            console.log(`i:${i}`);   // i:0, i:1, i:2, i:3, i:4
        }
    }
*/



























