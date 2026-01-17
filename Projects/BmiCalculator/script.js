const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{

    e.preventDefault()

    const height = parseInt(document.getElementById('in-1').value)
    const weight = parseInt(document.getElementById('in-2').value)
    const results = document.querySelector(".result");

    if((height==="" || height<0 || isNaN(height)) || (weight==="" || weight<0 || isNaN(weight))){
        results.style.color = "red"
        results.innerHTML = "please provide the valid inputs";
    }else{
        let result = (weight/((height*height)/10000)).toFixed(2);
        results.innerHTML = result;

        if(result<=18.6){
            document.body.style.backgroundColor = "yellow";

        }else if(result>=18.6 && result<=24.9){
            document.body.style.backgroundColor = "green"

        }else{
            document.body.style.backgroundColor = "red"
        }
    }

    
    
})


