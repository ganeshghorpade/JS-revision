class user{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    set email(value){
        this._email = value.toLowerCase();
    }

    get email(){
        return `${this._email}`
    }

    set password(value){
        this._password = value.toUpperCase();
    }

    get password(){
        return `${this._password}sdffgd`
    }
}

const user1 = new user("Ganesh@test.com","sdfhdsiuf");

console.log(user1.email);

console.log(user1.password);
