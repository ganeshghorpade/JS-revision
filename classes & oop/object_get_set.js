const obj = {
    _email :"test@test.com",
    _password: "dgfgdgdh",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value;
    },
    get _password(){
        return this._password.toUpperCase();
    },
    set _password(value){
        this._password = value;
    }
}

console.log(obj._email);
