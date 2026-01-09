function greet(name){
    console.log(`hello ${name}`);
    
}
let name = "ganesh";
greet(name);

//-----------------------------------------------------------

let empinfo = {
    name :"Ganesh",
    location :"mumbai",
    age : 1
}


// function login massage

function LoginMassage (username){
    console.log(`${username} welcome to Startek`);
}

LoginMassage(empinfo.name);

// with if statment

function vote (age){
    if(age>=18){
        console.log("go make a vote"); 
    }else{
        console.log(`wait you not eligible to make a vote because your age is ${age}`);
        
    }
}

vote(empinfo.age); // we refer the empinfo object for value

//The rest operator (...) in JavaScript is used to collect multiple values into a single array or object, especially when handling function 
// parameters or extracting remaining properties during destructuring.


function cal_cart_price (...num1){
    return num1
}

console.log(cal_cart_price(200,3000,400)); // the function return array value


// we pass the object as argument

let testobj = {
    name :"Ganesh",
    age:34,
    location:"maharashtra"
}

function emp_details (anyobj){
    return `hii my name is ${anyobj.name}`
}

console.log(emp_details(testobj));


// pass the Array  as argument

let myarr = [1,2,3,4,5];

function findValue(anyArray){
    return anyArray[3];
}

console.log(findValue(myarr));
