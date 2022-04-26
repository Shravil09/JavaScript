// 1. Non-Parameterized
/*
    const youtuber1= {
        name : "Shravil Bhagwat",
        Designation : "Software Engineer",
        work : function(){
            console.log(`My name is ${this.name}, and my designation ${this.Designation}.`);
        }
    }

    const youtuber2 ={
        name : "Shubham Bhagwat",
        Designation : "Devoop's Engineer"
    }

    youtuber1.work.call(youtuber2);
*/

//2. Parameterized 

/*
    const youtuber1= {
        name : "Shravil Bhagwat",
        Designation : "Software Engineer",
        work : function(salary, city){
            console.log(`My name is ${this.name}, and my designation ${this.Designation}. and my salary ${salary},  I lives in ${city}.`);
        }
    }

    const youtuber2 ={
        name : "Shubham Bhagwat",
        Designation : "Devoop's Engineer"
    }

    youtuber1.work.call(youtuber2, 20000, 'Indore');
*/

// 3. We can acess oject by creating individual function

let person = {
    name : `Shravil Bhagwat`,
    age : 24,
    designation : `Berozgar`
}

let person1 = {
    name : `Shubham Bhagwat`,
    age : 28,
    designation : `Devoop's Enginner`
}

let printDetails = function(salary, city){
    console.log(`My name is ${this.name}, and my designation ${this.designation}. and my salary ${salary},  I lives in ${city}.`);
}

printDetails.call(person,  20000, `Indore`,);
printDetails.call(person1,  80000, `Akola`,) ;