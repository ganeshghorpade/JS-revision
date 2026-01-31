class user{
    constructor(username,password,location){
        this.username = username;
        this.password = password;
        this.location = location;
    }

    greet(){
        console.log(`hii my username is ${this.username}`); 
    }
}

class Teacher extends user{
    constructor(username,password,location){
        super(username,password);
        this.location = location;
    }

    adduser(){
        console.log(`i am ${this.username+this.location}`);
        
    }
}

const t1 = new Teacher("ganesh","12sds","roha");
const u1 = new user("rajaram");

t1.adduser();

// instanceof

console.log(t1 instanceof Teacher); // true
console.log(u1 instanceof Teacher);// false because u1 is not made by Teacher

