let body = document.body;
    let start = document.getElementById('start');
    let stop = document.getElementById('stop');
    let intervalid = null;

    function randcolor (){
        let color = "#";
    let hex = "0123456789ABCDEF"

    for(let i = 0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
    }

    start.addEventListener('click',()=>{
        if(!intervalid){
            intervalid = setInterval(()=>{
             body.style.backgroundColor = randcolor();
        },2000)
        }
    })

     stop.addEventListener('click',()=>{
        clearInterval(intervalid);
        intervalid = null;
    })