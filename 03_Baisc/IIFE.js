// Immediate invoke function Expressions

/*
We use an IIFE to execute a function immediately and to create a private scope.
It helps avoid polluting the global namespace, protects variables from global access, and was commonly used before ES6 to achieve data encapsulation.
---------------------
IIFE runs as soon as it is defined

Variables inside IIFE are not accessible outside

Prevents global variable conflicts

Useful for initialization code
*/

(function greet(){
    console.log("hello world");
})();

// also we used arrow function

((name)=>{
    console.log(`Hello ${name} `);
    
})("Ganesh");

