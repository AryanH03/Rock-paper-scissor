const rockbtn = document.querySelector('.rock');
const paperbtn = document.querySelector('.paper');
const scissorbtn = document.querySelector('.scissor');
const movesLeft = document.querySelector('.moves')
const choosen =document.querySelector('.result');
var ansPlayer = document.querySelector('.ans-player')
var ansComp = document.querySelector('.ans-comp');
var playPoints = document.querySelector('.p-score');
var compPoints = document.querySelector('.c-score');

const computerOption = ['rock','paper','scissor'];
let count = 10;
let computerPoint = 0;
let playerPoint = 0;

function playGame(playerChoice) {
    let computerChoice = computerOption[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    winner(playerChoice, computerChoice);

}
  
rockbtn.addEventListener('click', () => {
playGame('rock');
});

paperbtn.addEventListener('click', () => {
playGame('paper');
});

scissorbtn.addEventListener('click', () => {
playGame('scissor');
});

function gameOver(){
    rockbtn.disalbed = true;
    paperbtn.disabled = true;
    scissorbtn.disabled = true;
    movesLeft.disabled = true;
    choosen.innerHTML = '<div><p>Game Over</p><button class="reseting btn">Reset</btn></div>';
    const resetbtn = document.querySelector('.reseting');
    resetbtn.addEventListener('click',()=>{
        rockbtn.disalbed = false;
        paperbtn.disabled = false;
        scissorbtn.disabled = false;
        movesLeft.disabled = false;
        count=10;
        movesLeft.innerHTML = 'Moves Left : '+count;
        choosen.innerHTML = '';
        playPoints.innerText = '';
        compPoints.innerText = '';
        computerPoint=0;
        playerPoint=0;
        ansComp.innerHTML='';
        ansPlayer.innerHTML='';
    })
}

function winner(player,computerChoice){
    count=count-1;
    movesLeft.innerText = 'Moves left :'+count;
    if(count==0){
        gameOver();
    }
    else{
        if(player=='rock'){
            if(computerChoice=='rock'){
                ansComp.innerHTML='<i class="fa-solid fa-hand-back-fist fa-2xl" style="color: #fbfcfe;"></i>'
                choosen.innerText="TIE";
            }
            else if(computerChoice=='paper'){
                ansComp.innerHTML='<i class="fa-solid fa-hand fa-2xl" style="color: #ffffff;"></i>'
                choosen.innerText="Computer WON";
                computerPoint++;
            }
            else{
                ansComp.innerHTML='<i class="fa-solid fa-hand-scissors fa-2xl" style="color: #ffffff;"></i>'
                choosen.innerText="You WON"
                playerPoint++;
            }
            ansPlayer.innerHTML='<i class="fa-solid fa-hand-back-fist fa-2xl" style="color: #fbfcfe;"></i>'
        }
        else if(player=='paper'){
            if(computerChoice=='paper'){
                choosen.innerText="TIE";
                ansComp.innerHTML='<i class="fa-solid fa-hand fa-2xl" style="color: #ffffff;"></i>'
            }
            else if(computerChoice=='scissor'){
                choosen.innerText="Computer WON";
                computerPoint++;
                ansComp.innerHTML='<i class="fa-solid fa-hand-scissors fa-2xl" style="color: #ffffff;"></i>'
            }
            else{
                choosen.innerText="You WON";
                ansComp.innerHTML='<i class="fa-solid fa-hand-back-fist fa-2xl" style="color: #fbfcfe;"></i>'
                playerPoint++;
            }
            ansPlayer.innerHTML='<i class="fa-solid fa-hand fa-2xl" style="color: #ffffff;"></i>'
        }
        else{
            if(computerChoice=='scissor'){
                choosen.innerText="TIE";
                ansComp.innerHTML='<i class="fa-solid fa-hand-scissors fa-2xl" style="color: #ffffff;"></i>'
            }
            else if(computerChoice=='rock'){
                choosen.innerText="Computer WON";
                ansComp.innerHTML='<i class="fa-solid fa-hand-back-fist fa-2xl" style="color: #fbfcfe;"></i>'
                computerPoint++;
            }
            else{
                choosen.innerText="You WON";
                ansComp.innerHTML='<i class="fa-solid fa-hand fa-2xl" style="color: #ffffff;"></i>'
                playerPoint++;
            }
            ansPlayer.innerHTML='<i class="fa-solid fa-hand-scissors fa-2xl" style="color: #ffffff;"></i>'
        }
    }
    
    playPoints.innerText = playerPoint;
    compPoints.innerText = computerPoint;
}
// for(var i=0;i<10;i++){
//     let computerChoice = computerOption[Math.ceil(Math.random()*3)];
//     console.log(computerChoice);
//     var player='';
//     if (rockbtn.addEventListener('click', () => {
//         player = 'rock';
        
//     }));
    
//     if (paperbtn.addEventListener('click', () => {
//         player = 'paper';
//     }));
//     if (scissorbtn.addEventListener('click', () => {
//         player = 'scissor';
//     }));

//     winner(player, computerChoice); 
// }



// if (rockbtn.addEventListener('click', () => {
//     const player = 'rock';
//     winner(player, computerChoice);
    
// }));

// if (paperbtn.addEventListener('click', () => {
//     const player = 'paper';
//     winner(player, computerChoice);
// }));

// if (scissorbtn.addEventListener('click', () => {
//     const player = 'scissor';
//     winner(player, computerChoice);
// }));
// console.log(computerChoice);

