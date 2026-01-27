// how to resolve works

let promiseOne = new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("start...");
        res();
    },1000)
})

promiseOne.then(()=>{
    console.log("working...");
    
})

//-------------------------------------------------------

// based on condition promise is resolve or reject

let promiseTwo = new Promise((res,rej)=>{

    const success = false;

    if(success){
         res("process success"); 
    }else{
        rej("process fail");
    }
}).then((result)=>{
    console.log(result);
}).catch((err)=>{
console.log(err);

})

//----------------------------------------------------------------------

// promise  chaining to get return value

let promiseThree = new Promise((res,rej)=>{

    const success = true;

    if(success){
        res({username:"user1",password:"123"});
    }else{
        rej("Something went wrong");
    }
})

promiseThree.then((data)=>{          
    return data.username          
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("promise either res or reject");
    
})

//-------------------------------------------------------------------------

// handel promise with async await

const PromiseFour = new Promise((res,rej)=>{

    const success = false;

    if(success){
        res("success");
    }else{
        rej("reject");
    }
})

async function GetData(){

    try {
    
        let data = await PromiseFour;

    console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
    
}
GetData();

//--------------------------------------------------------------

// get data via github api using fetch and async await

async function GetGitData (){

    try {
        let resp = await fetch("https://api.github.com/users/ganeshghorpade");

        let data = await resp.json();

        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}
GetGitData();

//----------------------------------------------------------------

// get data via github api using fetch and .then

fetch("https://api.github.com/users/ganeshghorpade").then((resp)=>{
    return resp.json();
}).then((data)=>{
    console.log(data);
    
}).catch((err)=>{
console.log(err);

})
