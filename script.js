let playerScore = 0;
let computerScore = 0; 
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorButton = document.getElementById('scissor-button');
const resultText = document.getElementById('result-text')
const playerScoreText = document.getElementById('player-score');
const computerScoreText = document.getElementById('computer-score');

function getRandomInt(start, end){
    return Math.floor(Math.random() * (end - start) ) + start;
}

function getComputerChoice(){
    const choices = ["ROCK", "PAPER", "SCISSOR"];
    return choices[getRandomInt(0, choices.length)];
}

function updateScores(){
    playerScoreText.textContent = `Your Score: ${playerScore}`;
    computerScoreText.textContent = `Computer's Score: ${computerScore}`;
}

function updateResult(playerChoice){
    resultText.textContent = playRound(playerChoice, getComputerChoice());
}

function isGameOver(){
    return (playerScore === 5 || computerScore === 5);
}

function checkWinner(){
    if (playerScore === 5){
        return "You win!";
    }
    return "Computer wins.";
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
}

function playRound(playerSelection, computerSelection){
    // tie condition
    if (playerSelection === computerSelection){
        return `You both tie since you both chose ${playerSelection}. Try again.`;
    }
    // lose conditions
    else if ((playerSelection === "ROCK" && computerSelection === "PAPER") || 
            (playerSelection === "PAPER" && computerSelection === "SCISSOR") ||
            (playerSelection === "SCISSOR" && computerSelection === "ROCK")){
        computerScore++;
        return `You lose. ${computerSelection} beats ${playerSelection}.`;
    }
    // win conditions
    else if ((playerSelection === "ROCK" && computerSelection === "SCISSOR") || 
            (playerSelection === "PAPER" && computerSelection === "ROCK")
            (playerSelection === "SCISSOR" && computerSelection === "PAPER")){
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
}

rockButton.addEventListener('click', () => {
    updateResult("ROCK");
    updateScores();
    if (isGameOver()){
        resultText.textContent = checkWinner();
        resetGame();
    }
});

paperButton.addEventListener('click', () => {
    updateResult("PAPER");
    updateScores();
    if (isGameOver()){
        resultText.textContent = checkWinner();
        resetGame();
    }
});

scissorButton.addEventListener('click', () => {
    updateResult("SCISSOR");
    updateScores();
    if (isGameOver()){
        resultText.textContent = checkWinner();
        resetGame();
    }
});