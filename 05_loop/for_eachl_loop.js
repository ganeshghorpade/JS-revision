//---------------------- forEach loop ------------------------------------


const arr = [1,2,3,4,5,6];

/* arr.forEach((ele,index,arr)=>{
    console.log(ele,index,arr);
}) */

//----------------------------------------------------

const arr2 = [
    {
        name:'Ganesh',
        location :{
            city :"noida",
            state :"Maharashtra"
        }
    },{
        name:'sham',
        location :{
            city :"delhi",
            state :"delhi"
        }
    }
]

/* arr2.forEach((ele)=>{
    console.log(ele.location);
    
}) */

//-----------------------------------------------------

const arr3 = [1,2,3,4,5,6];

const val = arr3.forEach((item)=>{
    //console.log(item); 
    return item;
})

console.log(val); // undefined

// forEach not return the value
