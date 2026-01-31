function SetUsername (username){
    this.username = username;
}

function CreateUser (username,email,location){
    SetUsername.call(this,username);
    this.email = email;
    this.location = location;
}

const user = new CreateUser("Ganesh","test@t.com","mumbai");

console.log(user);
