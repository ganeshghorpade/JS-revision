//Array

let arr = [1,2,3,4,5];
console.log(arr[3]);


// Array method

let arr1 = [1,2,34,333,22,42];

 arr1.push(23); //add the element at the end

arr1.pop();      // remove the element from the end

arr1.unshift(99);  // add the ele from start 

arr1.shift();  // remove the ele from start 

console.log(arr1.includes(2)); // check the ele is present or not 

console.log(arr1.indexOf(2)); //find number 2 is located on which index 

let myslice = arr1.slice(1,3); // slice is give the perticular part of array without affect orignal array 

console.log(myslice);
 

let mysplice = arr1.splice(1,4);

console.log(mysplice);
 
console.log(arr1);

