let obj = {
    firstName : "",
    lastName : "",

    get getName(){
        return this.firstName + " " + this.lastName;
    },
    set setName(param){
        this.firstName = param.firstName;
        this.lastName = param.lastName;
    }
}

obj.setName = {firstName: "Shravil", lastName: "Bhagwat"};
console.log(obj.getName);