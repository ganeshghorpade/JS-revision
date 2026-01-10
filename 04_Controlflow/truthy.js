const emails = [] ;
if(emails){
    console.log("got email");
}else{
    console.log("dont have emails"); 
}

// falsy value

// false, 0 , -0 , null , undefine , 0n ,"NaN", ""

// true value

// true, "0", 1,'false'," ", [], {},function(){}

if(emails.length == 0){
    console.log("true");  
}else{
    console.log("False");
    
}

//with object 

const obj = {};

if(Object.keys(obj).length === 0){
    console.log("obj is empty");
} //obj is empty
 

// flase == 0
//  false == ''
//  0 == ''

/* 
a) false == 0

false → gets converted to a number → 0

Comparison: 0 == 0 → true 

b) false == ''

'' (empty string) → gets converted to a number → 0

false → gets converted to a number → 0

Comparison: 0 == 0 → true 

c) 0 == ''

'' (empty string) → gets converted to a number → 0

Comparison: 0 == 0 → true 
*/
//----------------------------------------------------------------


/* 
In JavaScript, whenever we use loose equality (==) or do arithmetic, JS tries to convert values to numbers if needed.

"" (empty string) → number

"" is an empty string.

When JS converts it to a number:

Number("") // 0


So, "" becomes 0 when compared to a number.
*/

//--------------------------------------------------------

// Nullish Coalescing Operator (??)

// The Nullish Coalescing Operator (??) in JavaScript is used 
// to provide a default value when a variable is null or undefined. 
// It's like saying:
// "If this value is null or undefined, use this other value instead."

// let result = value ?? defaultValue;

let name = null;
let defaultName = "Guest";

let userName = name ?? defaultName;
// console.log(userName); // Output: "Guest"

let name1 = null;
let defaultName1 = null;

let userName1 = name1 ?? defaultName1;
console.log(userName1); // Output: null

//--------------------------------------------------------------

// Ternary Operator

// condition ? true : false;

let age = 18;

let canVote = age>=18 ? "you can vote" :"you not eligible to make a vote";

console.log(canVote);

