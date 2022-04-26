/*
    let alien = {
        name : "Shravil",
        tech : "js",
        laptop: {
            ram :  `4 GB`,
            CPU : `I-3`,
            brand : `HP`
        }
    }
      console.log(alien.name);  // Shravil
      console.log(alien.laptop);  // { ram: '4 GB', CPU: 'I-3', brand: 'HP' }
      console.log(alien);  

    //   {
    //     name: 'Shravil',
    //     tech: 'js',
    //     laptop: { ram: '4 GB', CPU: 'I-3', brand: 'HP' }
    //   }
*/

/*
    let alien = {
        name : "Shravil",
        tech : "js",
        laptop: {
            ram :  `4 GB`,
            CPU : `I-3`,
            brand : `HP`
        }
    }
    console.log(alien.name);  // Shravil
    console.log(alien.laptop);  // { ram: '4 GB', CPU: 'I-3', brand: 'HP' }
    console.log(alien);
    delete alien.name;
    console.log(alien); // { tech: 'js', laptop: { ram: '4 GB', CPU: 'I-3', brand: 'HP' } }

*/

// ******** Object Destructring*********
/*
    const classA = {
        var_one:'Hello_1',
        var_two:'Hello_2',
        var_three:'Hello_3',
    }
    const {var_one, var_two, var_three} = classA;
    console.log(var_one, var_two, var_three);  // Hello_1 Hello_2 Hello_3
    console.log(classA.obj);                   // undefined
*/

/*
    let Person = {
        firstName : 'Shravil',
        lastName : `Bhagwat`,
        age : 30,
        hobbies : [`sports`, `Singing`],
        greet : ()=>{
            console.log(`Hello ! my name is ${this.firstName} ${this.lastName}. `);
            console.log(`I'm of ${this.age}`);
            console.log(`My hobby is ${this.hobbies}`);
        }
    }
    for( let p in Person){
        console.log(`${p} = ${Person[p]}`);
    }

*/

let person = {
    name : "Shravil",
    'Last Name' : "Bhagwat",
    age : 30,
    hobbies:["Sports", "Cooking"],
    // greet : function() {
    //     console.log('Hi there');
    // },
    // 1.5 : "one point five",
}

for(p in person){
    console.log(`${p} =>${person[p]}`);
}















































