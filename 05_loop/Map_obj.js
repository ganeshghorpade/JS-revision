//  Map is a special object that stores data as key → value pairs
// any  value (obj or primitive value) may be used as either key or a value.
// Map is a key-value data structure where any type can be a key and insertion order is preserved.

let MyMap = new Map();

MyMap.set("name","Ganesh");
MyMap.set("age",14);
MyMap.set("location","mumbai");
MyMap.set("location","mumbai"); // duplicate value is not allow in map
MyMap.set("age", 23);        // string key
MyMap.set(1, "one");         // number key
MyMap.set(true, "yes");      // boolean key
MyMap.set({}, "object key"); // object key

MyMap.get(age);


//console.log(MyMap);


// How to loop a Map

//--> Map with "forof"

/* for(let[key,value] of MyMap){
    console.log(key,value);
    
} */

