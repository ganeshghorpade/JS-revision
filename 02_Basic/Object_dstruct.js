const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  isEmployed: true
}

// what is destructuring ? 
//---> We use destructuring to extract only required properties from large objects, 
// -- making functions and React components cleaner, readable, and self-documenting.

const {firstName,lastName} = person;

console.log(firstName); // by the help of destructuring we no need to write "person.firstName"

// json 

/* {
    "name" :"ghorpade",
    "age" :12
} */
