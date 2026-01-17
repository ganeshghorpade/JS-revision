let body = document.body;
let rb = document.querySelector("button");
let buttons = document.querySelectorAll(".button");

buttons.forEach((button)=>{
button.addEventListener('click',(e)=>{
if(e.target.id == "red"){
    body.style.backgroundColor = e.target.id;
}
if(e.target.id == "green"){
    body.style.backgroundColor = e.target.id;
}
if(e.target.id == "blue"){
    body.style.backgroundColor = e.target.id;
}
if(e.target.id == "orange"){
    body.style.backgroundColor = e.target.id;
}
})
})

rb.addEventListener('click',()=>{
    body.style.backgroundColor= "white";
    body.style.color = "black"
})

