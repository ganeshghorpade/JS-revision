// Basic for loop
for(let i = 1 ;i<=10;i++){
    // console.log(i);
}

// nested for loop

for(let i = 1;i<=10;i++){
    // console.log(`outer loop : ${i}`);
    for(let j = 1; j<=10;j++){
        // console.log(`${i} * ${j} = ${i*j}`);
    } 
}


// break and continue

for(let i = 1;i<=10;i++){
   if(i==8){
        break;
   }
   //console.log(i);
}

for(let i = 1;i<=10;i++){
    if(i==4){
        continue;
    }
    console.log(i);
    
}
