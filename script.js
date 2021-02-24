function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let winner = '';
    if (playerSelection == computerSelection) {
        console.log(`Draw! Both ${playerSelection}, play again`);
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" &&
            computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
}

function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    for (let i = 0; i < 5 && playerWinCount <= 5 - i + computerWinCount && computerWinCount <= 5 - i +
        playerWinCount; i++) {
        let winner = playRound(prompt("Rock, paper or scissors ?"), computerPlay());
        switch (winner) {
            case 'player':
                playerWinCount++;
                break;
            case 'computer':
                computerWinCount++;
                break;
        }
        console.log(`The score is ${playerWinCount}-${computerWinCount}`);
    }

    if (playerWinCount == computerWinCount) {
        console.log('Draw! Do another game')
    } else if (playerWinCount > computerWinCount) {
        console.log('Player wins')
    } else {
        console.log('Computer wins')
    }
}
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
rock.addEventListener('click', function () {playRound('rock', computerPlay())});
paper.addEventListener('click', function () {playRound('paper', computerPlay())});
scissors.addEventListener('click', function () {playRound('scissors', computerPlay())});