 // nested Object
let student_info = {
    fullname : {
        firstname :"Gnaesh",
        lastname : "Ghorpade"
    },
    location :{
        address :{
            state :{
                statename :"maharashtra"
            },
            city :{
                cityname :"Mumbai"
            }
        }
    }
}

// console.log(student_info.location.address.city.cityname);

// how to marge two object 

const obj1 = {
    name1 : 'ram',
    location1 :"mumbai"
}

const obj2 = {
    name2 : 'Ganesh',
    location2 :"mumbai"
}

// here we used the assign function to  merge the two or more object
// {}  is the empty object where we merge the all obj in one obj this is know as 
//  target value then after write the source which obj we want to merge

const obj3 = Object.assign({},obj1,obj2); 

// console.log(obj3); 
// Note. But above is old way to merge the two object

//modern way is used the spread operator

objs = {...obj1,...obj2};
// console.log(objs);

//Object.keys,Object.values, Object.entries this all function return the output in array

//Object.keys(), Object.values(), and Object.entries() all return arrays, which makes iteration easy.

const obj4 = {
    name1 : 'ram',
    location1 :"mumbai",
    qualification : "BE Computer Engineer"
}

console.log(Object.keys(obj4)); // [ 'name1', 'location1', 'qualification' ]
console.log(Object.values(obj4)); // [ 'ram', 'mumbai', 'BE Computer Engineer' ]
console.log(Object.entries(obj4)); // [ [ 'name1', 'ram' ],[ 'location1', 'mumbai' ],[ 'qualification', 'BE Computer Engineer' ]]

// hasOwnProperty this is used to check particular property is present or not.  it is return 
// the boolean value

console.log(Object.hasOwnProperty("name"));  // true 
console.log(Object.hasOwn(obj4, "name1")); // above and below both are same

const newobj = {city:"vashi"};

console.log(Object.assign(obj4,newobj)); // Merge objects / Clone object (shallow)

Object.freeze(newobj);

newobj.pincode = "400612";

console.log(newobj.pincode); // output is undefine because on line 71 we used freeze - Makes object read-only



