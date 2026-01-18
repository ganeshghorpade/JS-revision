let TimeDiv = document.querySelector('.time');

setInterval(()=>{
    let data = new Date();
    let Time = data.toLocaleTimeString()
    TimeDiv.innerHTML = Time;
},1000)

