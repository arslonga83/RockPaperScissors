
//Makes a random play choice for the computer
function computerPlay() {
    return randomNum = (Math.floor(Math.random()*(3)+1));
};

//Announces the computer play
function computerResult() {
   if (randomNum === 1) {
        console.log('Computer plays Rock');
    }
    else if (randomNum === 2) {
        console.log('Computer plays Paper')
    }
    else if (randomNum === 3) {
        console.log('Computer plays Scissors');
   }
}

//one play round - prints winners in console based on test selections above
function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 3) {
            console.log('You win! Rock breaks Scissors.');   
        }
        else if (computerSelection === 2) {
            console.log('You lose. Paper covers Rock');
        }
        else if (computerSelection === 1) {
            console.log('It\'s a tie!')
        }
    }
    else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 3) {
            console.log('You lose. Scissors cut paper.');
        }
        else if (computerSelection === 2) {
            console.log('It\'s a tie!')
        }
        else if (computerSelection === 1) {
            console.log('You win! Paper covers Rock');
        }
    }
    else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 3) {
            console.log('It\'s a tie!') 
        }
        else if (computerSelection === 2) {
            console.log('You win! Scissors cut paper');
        }
        else if (computerSelection === 1) {
            console.log('You lose. Rock breaks scissors.');
        }
    }
}

//now we play 5 rounds
function playGame () {
  for (let i = 0; i < 5; i++) {
    computerPlay();
    let playerSelection = prompt('Rock, Paper, or Scissors?');
    let computerSelection = randomNum;
    computerResult();
    playRound(playerSelection, computerSelection);
  }
}

playGame();





