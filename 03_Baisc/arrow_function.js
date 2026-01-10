// "This" is refer the current context

const  user = {
    name : "ganesh",
    location : "mumbai",

    greet : function(){
        // console.log(`hello ${this.name} welcome in ${this.location}`);
        // console.log(this); // { name: 'ganesh', location: 'mumbai', greet: [Function: greet] }
        
    }
}

/* user.greet();
user.name = "ram";
user.greet(); */
// console.log(this);  // { name: 'ram', location: 'mumbai', greet: [Function: greet] }
                     // also give {}



// -------------------------------------------------------------------

// "This" in function 

function name (){
    let name = "Ganesh";
    console.log(this.name); 
}

// name(); //  undefined
        // because : - this in a normal function

            /* When a normal function is called without an object

            this refers to:

            global object (browser → window)

            NOT the local function scope */

// try to "This" work on arrow function

let emp =()=>{
    let name1 = "ram";
    console.log(this.name1);
    
}

//emp(); // undefined

// Notes - In browsers, the global object is window, so top-level this refers to window, while in Node.js each file is a module, so top-level this refers 
// to module.exports, which is an empty object.

//arrow function

let sum = (num1,num2)=>{
    return num1+num2;
}

//console.log(sum(2,3)); // 5


// Implicit Return  function 

let greet =(name) => `hello ${name}`;

// console.log(greet("Ganesh"));

// if we return the Object

let greet1 =(name) => ({
    name:"ram"
});

console.log(greet1());



