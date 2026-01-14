let mynum = [1,2,3,4,5,6,7,8];

/* let val = mynum.map((item)=>{
    return item + 10
})
 */
//console.log(val);

// also double map + filter we used
// here by using the filter we find out the even value and with map we find square  of all even num
// note . map is not used to search and remove the value so we used filter to extract only even value

let result = mynum.filter((num)=> num%2===0).map((num)=>num*num);

console.log(result);



