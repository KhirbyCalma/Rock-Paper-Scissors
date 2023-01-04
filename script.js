let playerScore = 0;
let computerScore = 0; 
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorButton = document.getElementById('scissor-button');
const resultText = document.getElementById('result-text')
const playerMoveText = document.getElementById('player-move-text');
const computerMoveText = document.getElementById('computer-move-text');
const playerScoreText = document.getElementById('player-score');
const computerScoreText = document.getElementById('computer-score');

function getRandomInt(start, end){
    return Math.floor(Math.random() * (end - start) ) + start;
}

function getComputerChoice(){
    const choices = ["ROCK", "PAPER", "SCISSOR"];
    return choices[getRandomInt(0, choices.length)];
}

function increaseComputerScore(){
    computerScore++;
}

function increasePlayerScore(){
    playerScore++
}

function updateScores(){
    playerScoreText.textContent = `Your Score: ${playerScore}`;
    computerScoreText.textContent = `Computer's Score: ${computerScore}`;
}

function updateResult(playerMove, computerMove){
    if (playerMove === computerMove){
        resultText.textContent = `You both tie since you both chose ${playerMove}. Try again.`;
        resultText.style.color = '#FEC83D';
    }
    else if ((playerMove === "ROCK" && computerMove === "PAPER") || 
            (playerMove === "PAPER" && computerMove === "SCISSOR") ||
            (playerMove === "SCISSOR" && computerMove === "ROCK")){
        if (isGameOver()){
            resultText.textContent = `You lose. ${computerMove} beats ${playerMove}. Select a move to restart the game! First to 5 wins.`;
            resultText.style.color = 'red';
            resetGame();
        }
        else{
            resultText.textContent = `You lose. ${computerMove} beats ${playerMove}.`;
            resultText.style.color = 'red';
        }
    }
    else if ((playerMove === "ROCK" && computerMove === "SCISSOR") || 
    (playerMove === "PAPER" && computerMove === "ROCK") ||
    (playerMove === "SCISSOR" && computerMove === "PAPER")){
        if (isGameOver()){
            resultText.textContent = `You win! ${playerMove} beats ${computerMove}. Select a move to restart the game! First to 5 wins.`;
            resultText.style.color = 'green';
            resetGame();
        }
        else{
            resultText.textContent = `You win! ${playerMove} beats ${computerMove}.`;
            resultText.style.color = 'green';
        }
    }
}

function updateMoves(playerMove, computerMove){
    switch(playerMove){
        case "ROCK":
            playerMoveText.textContent = `Your move: ${String.fromCodePoint(0x270A)}`;
            break;
        case "PAPER":
            playerMoveText.textContent = `Your move: ${String.fromCodePoint(0x270B)}`;
            break;
        case "SCISSOR":
            playerMoveText.textContent = `Your move: ${String.fromCodePoint(0x270C)}`;
            break;
    }
    switch(computerMove){
        case "ROCK":
            computerMoveText.textContent = `Computer's move: ${String.fromCodePoint(0x270A)}`;
            break;
        case "PAPER":
            computerMoveText.textContent = `Computer's move: ${String.fromCodePoint(0x270B)}`;
            break;
        case "SCISSOR":
            computerMoveText.textContent = `Computer's move: ${String.fromCodePoint(0x270C)}`;
            break;
    }
}

function isGameOver(){
    return (playerScore === 5 || computerScore === 5);
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    updateScores();
    playerMoveText.textContent = `Your move: ${String.fromCodePoint(0x2753)}`;
    computerMoveText.textContent = `Computer's move: ${String.fromCodePoint(0x2753)}`;
}

function playRound(playerSelection, computerSelection){
    // lose conditions
    if ((playerSelection === "ROCK" && computerSelection === "PAPER") || 
            (playerSelection === "PAPER" && computerSelection === "SCISSOR") ||
            (playerSelection === "SCISSOR" && computerSelection === "ROCK")){
        increaseComputerScore();
    }
    // win conditions
    else if ((playerSelection === "ROCK" && computerSelection === "SCISSOR") || 
            (playerSelection === "PAPER" && computerSelection === "ROCK") ||
            (playerSelection === "SCISSOR" && computerSelection === "PAPER")){
        increasePlayerScore();
    }
    updateMoves(playerSelection, computerSelection);
    updateScores();
    updateResult(playerSelection, computerSelection);
}

rockButton.addEventListener('click', () => {
    playRound("ROCK", getComputerChoice());
});

paperButton.addEventListener('click', () => {
    playRound("PAPER", getComputerChoice());
});

scissorButton.addEventListener('click', () => {
    playRound("SCISSOR", getComputerChoice());
});