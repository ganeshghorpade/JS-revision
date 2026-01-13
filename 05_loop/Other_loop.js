// "for of" loop
// with array

const array = [1,2,3,4,5,6];

for(const value of array){
    // console.log(value);
}
//--------------------------------------------------------------------
// "for of" on string
//with string
const greet = "my name is ganesh";

for(const i of greet){
    if(i == " "){
        continue; // it is used to skip or remove the space
    }
    //console.log(i);
} 
//---------------------------------------------------------------------------

// "for of" with Object

// We not used for of With plane Object. Because object is not iterable.

// That's why, in below example We showing The type error. Which is info is not iterable?.

let info = {
    name :'Ganesh',
    location :'mumbai'
}

/* for(const value of info){
    console.log(value);
    
} */  // TypeError: info is not iterable

// But another way to done is "for of" with Object 

/* for(const key of Object.entries(info)){
    console.log(key);
} */


//-------------------------------------------------------------

// for of with Map

const MyMap = new Map();
MyMap.set("name","Ganesh");
MyMap.set("age",14);
MyMap.set("location","mumbai");

/* for(const [key,value] of MyMap){
    console.log(key,value);
}
 */