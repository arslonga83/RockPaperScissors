//reference html elements
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const comp = document.querySelector('#comp');
const human = document.querySelector('#human');
const score = document.querySelector('#score');

//set inital win count
let win = 0;
let loss = 0;

//click events to control each turn
rock.addEventListener('click', () => {
    computerPlay();
    let computerSelection = randomNum;
    computerResult();
    playRound('rock', computerSelection);
    winCount()
})

paper.addEventListener('click', () => {
    computerPlay();
    let computerSelection = randomNum;
    computerResult();
    playRound('paper', computerSelection);
    winCount();
})

scissors.addEventListener('click', () => {
    computerPlay();
    let computerSelection = randomNum;
    computerResult();
    playRound('scissors', computerSelection);
    winCount();
})

//Makes a random play choice for the computer
function computerPlay() {
    return randomNum = (Math.floor(Math.random()*(3)+1));
};

//Announces the computer play
function computerResult() {
    if (randomNum === 1) {
        comp.textContent = 'Computer plays Rock'
    }
    else if (randomNum === 2) {
        comp.textContent = 'Computer plays Paper'
    }
    else if (randomNum === 3) {
        comp.textContent = 'Computer plays Scissors'
    }
}

//one play round - prints winners in console based on test selections above
function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 3) {
            let roundResult = 'win';
            human.textContent = 'You win! Rock breaks Scissors.'
            win = win + 1;       
        }
        else if (computerSelection === 2) {
            let roundResult = 'loss';
            human.textContent = 'You win! Rock breaks Scissors'
            loss = loss + 1;     
        }
        else if (computerSelection === 1) {
            human.textContent = 'It\'s a tie!'
        }
    }
    else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 3) {   
            let roundResult = 'loss';
            human.textContent = 'You lose. Scissors cut paper.';
            loss = loss + 1;  
        }
        else if (computerSelection === 2) {
            human.textContent = 'It\'s a tie!';
        }
        else if (computerSelection === 1) {    
            let roundResult = 'win';
            human.textContent = 'You win! Paper covers Rock';
            win = win + 1;   
        }
    }
    else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 3) {
            human.textContent = 'It\'s a tie!';
        }
        else if (computerSelection === 2) {    
            let roundResult='win';
            human.textContent = 'You win! Scissors cut paper';
            win = win + 1;   
        }
        else if (computerSelection === 1) {
            let roundResult='loss';
            human.textContent = 'You lose. Rock breaks scissors.';
            loss = loss + 1;  
        } 
    }
    else {
        let roundResult = 'loss';
        human.textContent = 'Oops! You lose this round.';
        loss = loss + 1;
    }
}

//keeps tally for first to 5 wins
function winCount() {
    score.textContent = 'Wins = ' + win + '         Losses = ' + loss;
    if (win===5) {
        score.textContent = 'You won the game ' + win + ' to ' + loss + '! Refresh the page to play again.';
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    
    }
    else if (loss === 5) {
       score.textContent = 'You lost the game ' + loss + ' to ' + win + '. Refresh the page to play again.';
       rock.disabled = true;
       paper.disabled = true;
       scissors.disabled = true;
        
    }
}
