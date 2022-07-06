const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    let playerSelection = 'rock';
    console.log(playerSelection);
})

paper.addEventListener('click', () => {
    let playerSelection = 'paper';
    console.log(playerSelection);
})

scissors.addEventListener('click', () => {
    let playerSelection = 'scissors';
    console.log(playerSelection);
})




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
            let roundResult = 'win';
            console.log('You win! Rock breaks Scissors.')
            win = win + 1;       
        }
        else if (computerSelection === 2) {
            let roundResult = 'loss';
            console.log('You lose. Paper covers Rock');
            loss = loss + 1;     
        }
        else if (computerSelection === 1) {
            console.log('It\'s a tie!')
        }
    }
    else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 3) {   
            let roundResult = 'loss';
            console.log('You lose. Scissors cut paper.');
            loss = loss + 1;  
        }
        else if (computerSelection === 2) {
            console.log('It\'s a tie!');
        }
        else if (computerSelection === 1) {    
            let roundResult = 'win';
            console.log('You win! Paper covers Rock');
            win = win + 1;   
        }
    }
    else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 3) {
            console.log('It\'s a tie!');
        }
        else if (computerSelection === 2) {    
            let roundResult='win';
            console.log('You win! Scissors cut paper');
            win = win + 1;   
        }
        else if (computerSelection === 1) {
            let roundResult='loss';
            console.log('You lose. Rock breaks scissors.');
            loss = loss + 1;  
        } 
    }
    else {
        let roundResult = 'loss';
        console.log('Oops! You lose this round.');
        loss = loss + 1;
    }
}

//this will play 5 rounds
//let win = 0;
//let loss = 0;
//function playGame () {
//    for (let i = 0; i < 5; i++) {
//        computerPlay();
//        let playerSelection = prompt('Rock, Paper, or Scissors?');
//        let computerSelection = randomNum;
//        computerResult();
//        playRound(playerSelection, computerSelection);
//    }
//}

//here's the final game which will report results
console.log('Let\'s play Rock, Paper, Scissors! Enter your selections at the prompt.')
playGame();
console.log ('');
console.log('Wins = ' + win + '. Losses = ' + loss + '.');
if (win > loss) {
    console.log('You won the game!')
}
else if (loss > win) {
    console.log('Sorry, you lose the game.')
}
else if (win = loss) {
    console.log('The game is a tie!')
}
console.log('');
console.log('Thanks for playing! Refresh the page to play again.')











