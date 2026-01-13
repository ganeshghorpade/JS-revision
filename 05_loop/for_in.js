// -------------------------------"for in" loop -----------------------------------------

//  with object

const obj = {
    name: "Ganesh",
    location :"mumbai",
    state : "Maharashtra"
}

for(const key in obj){
    // console.log(key,obj[key]);
    
}

// with array 

let arr = [1,2,3,5] 
let arr1 = []
for(const val in arr){
   let multiple =  arr[val] * 2;
   arr1.push(multiple);
}
// console.log(arr1);

//----------------------------------------------------------------------------
// with map

const mymap = new Map();
mymap.set("name","Ganesh");
mymap.set("location","mumbai");
mymap.set("age",22);

for(const key in mymap){
    console.log(key);   
}

// no output

// because

// for...in was NEVER designed to read “data containers”

// It was designed to inspect object structure.

// Map is not a structure
// Map is a data store
// That is the root cause.






