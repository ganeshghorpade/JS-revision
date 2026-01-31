let RandomNum = Math.floor(Math.random()*100 + 1)
const SubmitBtn = document.querySelector('.btn');
const InputValue = document.querySelector(".input");
const GuessSlots = document.querySelector('.prv');
const Remaining = document.querySelector('.remain');
const LowHigh = document.querySelector(".loworhigh")
const StartOver = document.querySelector(".resultpar")

const p = document.createElement("p");

let GameStart = true;

let prvguess = [];
let numguess = 1;

if(GameStart){

SubmitBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    const guess = parseInt(InputValue.value)
    validateGuess(guess);
})
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Enter the valid number");
    }
    else if(guess<1){
        alert("Enter the number grater than 0");

    }else if(guess>100){
        alert("Enter the number less than 100")
    }
    else{
        prvguess.push(guess);

        if(numguess == 11){
            displayguess(guess);
            displaymessage(`Game Over , random number was ${RandomNum}`)
            endgame();
        }else{
            displayguess(guess);
            checkguess(guess);
        }
        
    
    }
}
 
function checkguess(guess){
    if(guess === RandomNum){
        displaymessage("you guess it right");
        endgame();
    }else if(guess>RandomNum){
        displaymessage("number is too high");
    }else if(guess<RandomNum){
        displaymessage("number is too low");
    }
    }

function displayguess(guess){
    InputValue.value = "";
    GuessSlots.innerHTML += `${guess},`;
    numguess++;
    Remaining.innerHTML = `${11-numguess}`;

}

function displaymessage(message){
    LowHigh.innerHTML = `<h2>${message}</h2>`

}
function endgame(){
 InputValue.value = '';
 InputValue.setAttribute('disabled','');
 p.classList.add('button');
 p.innerHTML = `<h2 id = "newgame">Start new Game</h2>`;
 StartOver.appendChild(p);
 newGame();
}

function newGame(){
    const newGamebtn = document.querySelector('#newgame');
    newGamebtn.addEventListener('click',(e)=>{
        RandomNum = Math.floor(Math.random()*100 + 1);
        prvguess = [];
        numguess = 1;
        GuessSlots.innerHTML = "";
        Remaining.innerHTML = `${11-numguess}`;
        InputValue.removeAttribute("disabled");
        StartOver.removeChild(p);
        GameStart(true);
    })
}