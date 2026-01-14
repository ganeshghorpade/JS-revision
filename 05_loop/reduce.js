// reduce 

let mynum = [1,2,3,4,5,6,7,8];

let result = mynum.reduce((acc,currval)=>{
    //console.log(acc,currval);
    
   // return acc+currval;
},1)

// console.log(result);

//-----------------------------------------------------------------------------------------

const product_data = [
    {
        pname : "laptop 1",
        price :120000
    },
    {
        pname : "laptop 2",
        price :28000
    },
    {
        pname : "laptop 3",
        price :20000
    },
    {
        pname : "laptop 4",
        price :130000
    },
]

const totalcartprice = product_data.reduce((acc,curval)=> acc + curval.price,0);

console.log(totalcartprice);



