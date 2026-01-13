// we see forEach is not return any value

// Filter function 

/* 
Arrow functions with NO {} have an implicit return.

That’s it — but let’s go deep.

Two types of arrow functions (this is the sacrifice point)
Expression body → auto return
(item) => item

JS engine reads this as:

(item) => {
  return item;
}

You didn’t skip return
JS inserted it for you.

Block body → manual return required
(item) => {
  item;
}

This returns:

undefined


Because block ≠ expression.

Why filter accepts this
What filter expects internally

For every element, filter does:

if (callbackResult is truthy) {
   keep element
}


So when you write:

(item) => item


Returned values:

0 → false 

"" → false 

null → false 

"Ganesh" → true 

22 → true 

Filter works perfectly.

*/

const arr3 = [1,2,3,4,5,6];

//let val = arr3.filter((item)=> item); //  here also val return the proper value output without write return

let val = arr3.filter((item)=> (item)); // here also same

/* let val = arr3.filter((item)=>{
    return item > 3; 
    
}) */
console.log(val); // [ 1, 2, 3, 4, 5, 6 ]
                  // but when we used {} in call back function we need to return the value
                  // if not used return, output will empty array


//----------------------------------------------------------------------------------

const users = [
  {
    id: 1,
    name: "Ganesh",
    age: 23,
    role: "Frontend Developer",
    city: "Pune",
    active: true
  },
  {
    id: 2,
    name: "Amit",
    age: 25,
    role: "Backend Developer",
    city: "Mumbai",
    active: false
  },
  {
    id: 3,
    name: "Rohit",
    age: 22,
    role: "UI Designer",
    city: "Nashik",
    active: true
  },
  {
    id: 4,
    name: "Suresh",
    age: 28,
    role: "Full Stack Developer",
    city: "Nagpur",
    active: true
  },
  {
    id: 5,
    name: "Nidhi",
    age: 24,
    role: "QA Engineer",
    city: "Delhi",
    active: false
  },
  {
    id: 6,
    name: "Priya",
    age: 26,
    role: "Product Manager",
    city: "Bangalore",
    active: true
  },
  {
    id: 7,
    name: "Kunal",
    age: 21,
    role: "Intern",
    city: "Indore",
    active: true
  },
  {
    id: 8,
    name: "Sneha",
    age: 27,
    role: "HR",
    city: "Hyderabad",
    active: false
  }
]

let result = users.filter((i)=>{
    return i.age>21 && i.id>4;
})

console.log(result);



