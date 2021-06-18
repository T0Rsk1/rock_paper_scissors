const game = document.querySelectorAll('.button');
const message = document.querySelector('#message');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
let playerScore = 0;
let compScore = 0;
let end = false;

function computerPlay(){
    const randNum = Math.floor(Math.random()*3);
    if(randNum === 0) return 'Rock';
    if(randNum === 1) return 'Paper';
    return 'Scissors';
}

function capitalize(str){
    return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1); 
}

function playRound(playerSelection, computerSelection){
    playerSelection = capitalize(playerSelection);
    
    if(playerSelection === computerSelection){
        displayMsg('No score. You tied. ' + playerSelection + ' and ' + computerSelection + ' are the same.');
        return null;
    }

    if(playerSelection === 'Rock' && computerSelection === 'Scissors'||
       playerSelection === 'Paper' && computerSelection === 'Rock'||
       playerSelection === 'Scissors' && computerSelection === 'Paper'){
           displayMsg('You scored! ' + playerSelection + ' beats ' + computerSelection + '!');
           return 'p';
    }

    displayMsg('Computer scored! ' + computerSelection + ' beats ' + playerSelection + '!');
    return 'c';
}

function updateScore(e){
    let winner = playRound(e.target.id, computerPlay());
    if(winner === 'p') playerScore++;
    else if(winner === 'c') compScore++;
}

function displayScore(){
    player.textContent = `PLAYER: ${playerScore}`;
    computer.textContent = `COMPUTER: ${compScore}`;
}

function displayMsg(msg){
    message.textContent = `${msg}`;
}

function declareWinner(){
    if(playerScore === 5 || compScore === 5){
        if(playerScore > compScore) displayMsg('PLAYER WINS!');
        else displayMsg('Computer wins.');
        return true;
    }
    return false;
}

function endGame(){
    game.forEach(btn =>{
        btn.classList.add('no-hover');
        btn.removeEventListener('click', playGame);
    });
    setTimeout(() => displayMsg('\t      GAME OVER \nPress ENTER to PLAY AGAIN'), 1000);
    window.addEventListener('keydown', e => {
        if(e.keyCode === 13) window.location.reload();
    });
}

function playGame(e){
    updateScore(e);
    displayScore();
    end = declareWinner();
    if(end) endGame();
}

displayMsg('PLAY GAME!!!');
displayScore();
game.forEach(btn => btn.addEventListener('click', playGame));
