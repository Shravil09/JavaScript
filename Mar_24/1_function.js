document.write(`Total Subject = 5 <br> Total Marks = 500 <br>`);

function sumMarks(hindi, eng, math, phy, chemistry){
    var a = hindi + eng + math + phy + chemistry;
    return a;
}
let b = sumMarks(50,50,50,50,50);
document.write(`Marks obtain = ${b}` + `<br>`);

function percentage(tm){
    var c = (b/500)*100;
    return c;
}

let d = percentage(b);
document.write(`percentage = `+d+'%');
