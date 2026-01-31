function User(username,password,location){
    this.username = username;
    this.password = password;
    this.location = location;
};

let U1 = new User("Ganesh",1234,"mumbai");
let U2 = new User("anesh",1234,"mumbai");

U1.qul = "comp engg";

console.log(U2.qul);
