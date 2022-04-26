// 14. map()
/*
    const price = [10, 5.9, 6.9, 10.59];
    const tax = 0.19;

    const taxAdjustPrice = price.map((price, idx, prices)=>{
        const priceObj = {index:idx, taxAj: price * (1+tax)}
        return priceObj;
    })
    console.log(taxAdjustPrice);
*/

/*
    let add = [1,2,3,4,5];
    let change = add.map(x => x+1);
    console.log(change);
*/

/*
    const prices = [5.99, 10.99, 3.99, 6.59];
    const names = ["ck", "Prabhat", "Yogesh", "Haresh"];
    const info = [{ name: "CK" }, { name: "Prabhat" }, { name: "Haresh" }];
    let sortedValue = prices.sort((a, b) => {
        if (a > b) {
            return 3;
        } else if (a === b) {
            return 0;
        } else {
            return -4;
        }
    });
    console.log(prices);
    console.log(sortedValue);
    console.log(sortedValue.reverse());
*/

/*
    const prices = [5.99, 10.99, 3.99, 6.59];
    let finteredValue = prices.filter((price, idx, prices) => {
    return price > 6;
    });
    console.log(prices);
    console.log(finteredValue);
*/