// Static is used to create methods or variables that belong to the class, not to the object.
// Static members are accessed using the class name directly.


class user{
    constructor(username,location){
        this.username = username;
        this.location = location;
    }

    static sayhii(){
        console.log(`hii`);
        
    }
}

const u1 = new user("Ganesh","roha");

// u1.sayhii();  // Error

user.sayhii(); // hii