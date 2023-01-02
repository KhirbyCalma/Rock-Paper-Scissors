function getRandomInt(start, end){
    return Math.floor(Math.random() * (end - start) ) + start;
}

function getComputerChoice(){
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[getRandomInt(0, choices.length)];
}

function getPlayerChoice(){
    let choice = prompt("Choose Rock, Paper, or Scissors: ");
    choice = choice.toUpperCase();
    if (choice === "ROCK" || choice === "PAPER" || choice === "SCISSORS"){
        return choice;
    }
    // invalid input ask again
    console.log(`Invalid input. Try again.`);
    return getPlayerChoice();
}

function playRound(playerSelection, computerSelection){
    // tie condition
    if (playerSelection === computerSelection){
        console.log(`You both tie since you both chose ${playerSelection}. Try again.`)
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        return playRound(playerChoice, computerChoice);
    }
    // lose conditions
    else if (playerSelection === "ROCK" && computerSelection === "PAPER"){
        return `You lose. ${computerSelection} beats ${playerSelection}.`;
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
        return `You lose. ${computerSelection} beats ${playerSelection}.`;
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK"){
        return `You lose. ${computerSelection} beats ${playerSelection}.`;
    }
    // win conditions
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
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