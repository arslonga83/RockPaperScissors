
//Makes a random play choice for the computer
function computerPlay() {
    return randomNum = (Math.floor(Math.random()*(3)+1));
//MOVED THIS PART OUTSIDE FOR NOW....wasn't sure how to return random number outside otherwise
  //  if (randomNum === 1) {
   //     console.log('Computer plays Rock');
  //  }
   // else if (randomNum === 2) {
    //    console.log('Computer plays Paper')
   // }
   // else if (randomNum === 3) {
    //    console.log('Computer plays Scissors');
  // }
   
};

computerPlay();

   if (randomNum === 1) {
        console.log('Computer plays Rock');
    }
    else if (randomNum === 2) {
        console.log('Computer plays Paper')
    }
    else if (randomNum === 3) {
        console.log('Computer plays Scissors');
   }

//for testing
let playerSelection = prompt('Rock, Paper, or Scissors?')
let computerSelection = randomNum
//

//one play round - prints winners in console based on test selections above
function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 3) {
            console.log('You win! Rock breaks Scissors.')
        }
        else if (computerSelection === 2) {
            console.log('You lose. Paper covers Rock')
        }
        else if (computerSelection === 1) {
            console.log('It\'s a tie!')
        }
    }
    else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 3) {
            console.log('You lose. Scissors cut paper.')   
        }
        else if (computerSelection === 2) {
            console.log('It\'s a tie!')
        }
        else if (computerSelection === 1) {
            console.log('You win! Paper covers Rock')
        }
    }
    else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 3) {
            console.log('It\'s a tie!') 
        }
        else if (computerSelection === 2) {
            console.log('You win! Scissors cut paper')
        }
        else if (computerSelection === 1) {
            console.log('You lose. Rock breaks scissors.')
        }
    }
}

playRound(playerSelection, computerSelection);



