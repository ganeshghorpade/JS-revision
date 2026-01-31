function addition(num){
    return 5+num;
}
addition.power = 3;

console.log(addition(2)); // 7
console.log(addition.power); //  3
console.log(addition.prototype); // {}


function createUser(username,price){
    this.username = username;
    this.price = price;
}

createUser.prototype.incPrice = function(){
    return this.price++;
}

createUser.prototype.printMe = function(){
    console.log(this.username);
    
}

const laptop = new createUser("lenovo",400);
const desktop = new createUser("Dell",700);


laptop.printMe();
console.log(laptop.incPrice());

