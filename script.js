const playerImage = document.querySelector('#playerImage')
const computerImage = document.querySelector('#computerImage')
const rockImage = document.createElement('img')
const paperImage = document.createElement('img')
const scissorsImage = document.createElement('img')
rockImage.src = 'rock.png'
paperImage.src = 'paper.png'
scissorsImage.src = 'scissors.png'

let playerScore = 0
let computerScore = 0
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const currentRound = document.querySelector('#currentRound')
const score = document.querySelector('#score')

function gameOver() {
    return playerScore === 5 || computerScore === 5;
}

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    choice = choices[Math.floor(Math.random() * choices.length)];
    switch (choice) {
        case 'rock':
            computerImage.innerHTML = '';
            computerImage.appendChild(rockImage.cloneNode());
            break;
        case 'paper':
            computerImage.innerHTML = '';
            computerImage.appendChild(paperImage.cloneNode());
            break;
        case 'scissors':
            computerImage.innerHTML = '';
            computerImage.appendChild(scissorsImage.cloneNode());
            break;
    }
    return choice
}

function playRound(playerSelection, computerSelection) {
    if (!gameOver()) {
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection == computerSelection) {
            currentRound.textContent = `Draw! Both ${playerSelection}, play again`;
        } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" &&
                computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
            currentRound.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            playerScore++;
        } else {
            currentRound.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerScore++;
        }
        score.textContent = updateScore()
        if (playerScore === 5) {
            currentRound.textContent = 'You won the game! Congratulations!'
        }
        else if (computerScore ===5) {
            currentRound.textContent = 'You lost to a computer! Try again'
        }
    }
    else {
        alert('Game is over. Reload to play again')
    }
}


function updateScore() {
    return `Score is ${playerScore}-${computerScore}`
}

rock.addEventListener('click', function () {
    playRound('rock', computerPlay());
    playerImage.innerHTML ='';
    playerImage.appendChild(rockImage);
});
paper.addEventListener('click', function () {
    playRound('paper', computerPlay())
    playerImage.innerHTML ='';
    playerImage.appendChild(paperImage);
});
scissors.addEventListener('click', function () {
    playRound('scissors', computerPlay())
    playerImage.innerHTML ='';
    playerImage.appendChild(scissorsImage);
});