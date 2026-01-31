
const student = {
    name :"Ganesh",
    city:"pune"
}

const arr = ["a","b","c","d"];

const text = "myname";

Object.prototype.greet1 = function(){
    console.log(`i am object based`);
}

Array.prototype.greet2 = function(){
    console.log("i am only for the array based");
    
}

String.prototype.greet3 = function(){
    console.log("i am only for the Str based");
    
}

arr.greet1(); // arr can access the parent Object
arr.greet2();
text.greet3();

//student.greet2(); // but student can not access the child array object property

//--------------------

// inheritance

// The concept is inheritance, and in JavaScript it is achieved using prototype-based inheritance through __proto__.

const obj1 = {
    name :"obj1",
    id:22,
    city:"hyd",
    greet:function(){
        console.log("i am from obj1");
    }
}
const obj2 = {
    name :"obj1",
    id:22,
    city:"hyd",
    __proto__:obj1 //  here obj2 access the property of the object 1 (but this is old approach)
}
const obj3 = {
    name :"obj1",
    id:22,
    city:"hyd"
}

// obj2.greet(); // here we can access obj1 greet function

// modern syntax

Object.setPrototypeOf(obj3,obj2);

//obj3.greet();
