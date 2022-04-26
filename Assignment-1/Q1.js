function Rectangle() {
    let len = prompt(`Enter the length value`);
    let wid = prompt(`Enter the width value`);
    
    let area;
    area = parseInt(len) * parseInt(wid);
        if(isNaN(area)){
            throw { message : `Please enter a number`};
        }
        else
            document.write(`Area of rectangle is ${area}`);
    }
Rectangle();
