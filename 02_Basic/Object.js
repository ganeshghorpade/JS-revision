// object and how to create Symbol and used in/dec in object

let mykey = Symbol("GAN01");

let myinfo = {
    name :"Ganesh",
    [mykey]:"GAN01",
    age :24,
    loction : "mumbai",
    qulification : "BE Computer Engineering"
}

console.log(myinfo);


// how to update the Object value

myinfo.name = "shreeman";

// freeze
// Once an object is frozen, we cannot add, delete, or modify its properties.
// It helps in preventing accidental changes to objects and is commonly used for data safety and predictability.
//Object.freeze(myinfo);

//myinfo.name = "shreeganesh" //try to update the object value when used freeze function
 myinfo.greet = function(){
    console.log(`hello ${this.name}`);
    
}

console.log(myinfo.greet());


