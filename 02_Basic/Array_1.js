let arr1 = [1,2,34,5];
let arr2 = [6,7,8];

// spread operator

//The spread operator (...) is used to expand elements of an array or properties 
// - of an object into individual values, 
// - commonly used for copying, merging, and updating data immutably.

let merge = [...arr1,...arr2];
console.log(merge);

// flat function

let arr3 = [1,2,4,[345,32,1,[234,0,[33,34,[501,503]]]]];

// it is used to create To convert nested arrays into a single array

let nest_arr3 = arr3.flat(Infinity);

console.log(nest_arr3);

// isAarray

let name = "Ganesh";
console.log(Array.isArray(name));

// convert string into array 

let namearr = Array.from(name);
console.log(namearr);

let emp1 = "ramesh";
let emp2 = "ram";
let emp3 = "rajesh";

console.log(Array.of(emp1,emp2,emp3));


