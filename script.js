const game = document.querySelectorAll('.button');
let playerScore = 0;
let compScore = 0;
let end = false;

function computerPlay(){
    const randNum = Math.floor(Math.random()*3);
    if(randNum === 0) return 'rock';
    if(randNum === 1) return 'paper';
    return 'scissors';
}

function capitalize(str){
    return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1); 
}

function playRound(playerSelection, computerSelection){
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
    
    if(playerSelection === computerSelection){
        console.log('You tied. ' + playerSelection + ' and ' + computerSelection + ' are the same.');
        return;
    }

    if(playerSelection === 'Rock' && computerSelection === 'Scissors'||
       playerSelection === 'Paper' && computerSelection === 'Rock'||
       playerSelection === 'Scissors' && computerSelection === 'Paper'){
           displayMsg('You win!!!! ' + playerSelection + ' beats ' + computerSelection + '!');
           return 1;
    }

    console.log('You lose! ' + computerSelection + ' beats ' + playerSelection + '!');
    return 0;
}

function updateScore(e){
    let winner = playRound(e.target.id, computerPlay());
    
    if(winner === 1){;
        playerScore++;
        return 'PLAYER SCORESSSS!!!!!!!';
    }
    else if(winner === 0){
        compScore++;
        return 'COMPUTER SCORESSSS!';
    }
    else return 'NO SCORE!';
}

function displayScore(){
    const player = document.querySelector('#player');
    const computer = document.querySelector('#computer');
    player.textContent = `PLAYER: ${playerScore}`;
    computer.textContent = `COMPUTER: ${compScore}`;
}

function displayMsg(msg){
    const message = document.querySelector('#message');
    message.textContent = `${msg}`;
}

function declareWinner(){
    if(playerScore === 5 || compScore === 5){
        if(playerScore > compScore) console.log('PLAYER ONE WINS!!!!!!!!!!!');
        else console.log('Computer wins.');
        return true;
    }
}

function endGame(){
    game.forEach(btn => btn.removeEventListener('click', playGame));
    console.log('GAME OVER');
    console.log('Press ENTER to reset');
    window.addEventListener('keydown', e => {
        if(e.keyCode === 13) window.location.reload();
    });
}

function playGame(e){
    let msg = updateScore(e);
    displayMsg(msg);
    displayScore();
    end = declareWinner();
    console.log(end);
    if(end) endGame();
}

displayScore();
game.forEach(btn => btn.addEventListener('click', playGame));
