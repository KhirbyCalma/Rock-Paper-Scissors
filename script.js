function getRandomInt(start, end){
    return Math.floor(Math.random() * (end - start) ) + start;
}

function getComputerChoice(){
    const choices = ["ROCK", "PAPER", "SCISSOR"];
    return choices[getRandomInt(0, choices.length)];
}

function getPlayerChoice(){
    let choice = prompt("Choose Rock, Paper, or SCISSOR: ");
    choice = choice.toUpperCase();
    if (choice === "ROCK" || choice === "PAPER" || choice === "SCISSOR"){
        return choice;
    }
    // invalid input ask again
    console.log(`Invalid input. Try again.`);
    return getPlayerChoice();
}

function playRound(playerSelection, computerSelection){
    // tie condition
    if (playerSelection === computerSelection){
        return `You both tie since you both chose ${playerSelection}. Try again.`;
    }
    // lose conditions
    else if (playerSelection === "ROCK" && computerSelection === "PAPER"){
        return `You lose. ${computerSelection} beats ${playerSelection}.`;
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSOR"){
        return `You lose. ${computerSelection} beats ${playerSelection}.`;
    }
    else if (playerSelection === "SCISSOR" && computerSelection === "ROCK"){
        return `You lose. ${computerSelection} beats ${playerSelection}.`;
    }
    // win conditions
    else if (playerSelection === "ROCK" && computerSelection === "SCISSOR"){
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    else if (playerSelection === "SCISSOR" && computerSelection === "PAPER"){
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
}

function game(){
    // amount of rounds
    for (let round = 1; round <= 5; round++){
        console.log(`Round ${round}`);
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
    }
}

// game();

const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorButton = document.getElementById('scissor-button');
const resultText = document.getElementById('results-text')

rockButton.addEventListener('click', () => {
    resultText.textContent = playRound('ROCK', getComputerChoice());
});

paperButton.addEventListener('click', () => {
    resultText.textContent = playRound('PAPER', getComputerChoice());
});

scissorButton.addEventListener('click', () => {
    resultText.textContent = playRound('SCISSOR', getComputerChoice());
});