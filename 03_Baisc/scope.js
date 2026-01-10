let a = 1;
var c = 3;

if(true){
    let a = 4;
    var b = 5;
    const c = 6;
    let d = 5;
    //console.log(c); // c=6 because already c =6 inside the block so he give 
                    // - 1 st preference block value because of block scope
}

// console.log(c); // c=3 because var have global scope 
// console.log(b); // b = 5 because var have global scop also `var` is function-scoped, not block-scoped
//console.log(d); // "ReferenceError: d is not defined" because we declare the value in block of code thats why we unable to access
                //  because the scope issue so variable is declare inside the scope not global declare

//nested scope

function first(){
    const name = "Ganesh";

    function two(){
        const location = "mumbai";
        console.log(name);
        
    }
    //console.log(location); 
    // "ReferenceError: "location" is not defined"
    // because parent unable to access the child variable so 
    // here location is not define thats why showing error so code is
    // is terminate thats why  function "two()" is not execute
    // two()
}
// first();


// with if statement

if(true){
    let name = "tom"

    if(name === "tom"){
    let location = "US";
    // console.log(`my code is ${name}${location}`);
}
//console.log(location);
// ReferenceError: location is not defined


}
// console.log(name); 
// ReferenceError: name is not defined


//------------------------------------------------------------------------------------------------------
// Hoisting in a javascript Behaviours there Variables and functions Declare and moved On the top of the 
// scope before execution

console.log(z);
greet();

var z = "ganesh";
function greet(){
    console.log("hello");
    
}


