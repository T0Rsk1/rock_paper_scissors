function computerPlay(){
    const randNum = Math.floor(Math.random()*3);
    
    if(randNum === 0) return 'rock';
    if(randNum === 1) return 'paper';
    
    return 'scissors';
}

function capitalize(str){
    str = str.toLowerCase();

    return str.charAt(0).toUpperCase() + str.slice(1); 
}

function checkInput(input){
    let choices = ['rock', 'paper', 'scissors'];
    
    if(choices.indexOf(input) !== -1) return true;

    return false;
}
function getInput(){
    let incorrect = true;
    let userInput = '';
    
    while(incorrect){
        userInput = prompt('Type rock, paper or scissors:');
        
        if(checkInput(userInput)) incorrect = false;
        else console.log('Wrong choice. Try again. c|:(');
    }

    return userInput;
}

function playRound(playerSelection, computerSelection){
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
    
    if(playerSelection === computerSelection){
        console.log('You tied. ' + playerSelection + ' and ' + computerSelection + ' are the same.');
        return 'tie';
    }

    if(playerSelection == 'Rock' && computerSelection == 'Scissors'||
            playerSelection == 'Paper' && computerSelection == 'Rock'||
            playerSelection == 'Scissors' && computerSelection == 'Paper'){
        console.log('You win!!!! ' + playerSelection + ' beats ' + computerSelection + '!');
        return 'win';
    }

    console.log('You lose! ' + computerSelection + ' beats ' + playerSelection + '!');
    return 'lose';
}

function game(){
    let playerScore = 0;
    let compScore = 0;
    
    for(let i=0;i<5;i++){
        let winner = playRound(getInput(),computerPlay());
        
        if(winner == 'win'){
            playerScore++;
            console.log('PLAYER SCORESSSS!!!!!!!');
        }
        else if(winner == 'lose'){
            compScore++;
            console.log('COMPUTER SCORESSSS!');
        }
        else console.log('NO SCORE!');
    }

    if(playerScore > compScore) console.log('YOU WIN!!!!!!!');
    else if(compScore > playerScore) console.log('YOU LOSE.');
    else console.log('TIE GAME.');

    console.log('GAME OVER');
}

