// 10. find()
/*
    var arr=[5,22,19,25,34];  
    var result=arr.find(x=>x>20);  
    console.log(result);
*/

/*
    const personData = [{ name: "CK" }, { name: "Prabhat" }];
    // console.log(personData.indexOf({ name: "CK" }));
    const myName = personData.find(function(person, index, arr){
        console.log(index, 'idx');
        return person.name ==='CK';
    });

    console.log(myName, personData);
*/

// 11. findIndex()
/*
    const personData = [{ name: "CK" }, { name: "Prabhat" }];
    const myIndex = personData.findIndex((person, idx, persons) => {
        console.log(idx, "index");
        return person.name === "Prabhat";
    });
    console.log(myIndex);
*/

// 13. include()
/*
    const testResults = [1, 5.3, 1.5, 10.99, -5, 1.5, 10];
    console.log(testResults.indexOf(11) !== -1);
    console.log(testResults.includes(11));
*/

// 14. forEach loop

const price = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
taxAdjustPrice = [];

price.forEach((price, idx, prices)=>{
   if(price>6){
       const priceObj = {index : idx, taxAj : (price* (1+tax))}
       taxAdjustPrice.push(priceObj);
   }
})
console.log(taxAdjustPrice);
//console.log(price);