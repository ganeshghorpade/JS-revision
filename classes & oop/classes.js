class User {
    constructor(username,password,location){
        this.username = username;
        this.password = password;
        this.location = location;
    }

    encryptPassword (){
        return `${this.password}abc`;
    }
}

const user1 = new User("Ganesh","123#","mumbai");

console.log(user1.encryptPassword());


// note we also done this using prototype method refer Object.js

