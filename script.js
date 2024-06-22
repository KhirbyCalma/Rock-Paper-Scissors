function getComputerChoice() {
    // choose random # b/w 0 and 2, inclusively, and store in variable
    let randomComputerChoice = getRandomInteger(0, 2);
    switch (randomComputerChoice) {
        // if 0, return rock
        case 0:
            return 'ROCK';
        // if 1, return paper,
        case 1:
            return 'PAPER';
        // if 2, return scissors
        case 2: 
            return 'SCISSORS';
        default:
            return 'ERROR';
    }
}

function getRandomInteger(min, max) {
    // return equation for random integer within specified range, inclusively
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getHumanChoice() {
    // ask user to choose rock, paper, or scissors and store in variable
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    // while user's choice is not rock, paper, or scissors, ask user again until valid choice
    while (humanChoice === null || (humanChoice.toUpperCase() !== 'ROCK' && humanChoice.toUpperCase() !== 'PAPER' && humanChoice.toUpperCase() !== 'SCISSORS')) {
        humanChoice = prompt("Invalid choice. Rock, Paper, or Scissors?");
    }
    // return user's choice 
    return humanChoice.toUpperCase();
}

function playRound(humanChoice, computerChoice) {
    // if human choice and computer choice the same, return 0 to indicate tie
    if (humanChoice === computerChoice) {
        return 0;
    } 
    // if human choice beats computer choice, return 1 to indicate output win message and increment human score
    else if ( (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
                (humanChoice === 'PAPER' && computerChoice === 'ROCK') ||
                (humanChoice === 'SCISSORS' && computerChoice === 'PAPER')
    )  {
       return 1;
    }
    // if computer choice beats computer choice, return -1 to indicate output lose message and increment computer score
    else {
        return -1;
    }
}

// helper function for getting user's intended action
function emojiToAction(emoji) {
    let emojiAsHex = emoji.codePointAt(0).toString(16);
    switch (emojiAsHex) {
        case ("270a"):
            return "ROCK";
        case ("1f590"):
            return "PAPER";
        case ("270c"):
            return "SCISSORS";
        default:
            return 'ERROR';
    }
}

// initialize scores
let humanScore = 0;
let computerScore = 0;

// initialize score text output
const humanScoreTextOutput = document.querySelector(".human .score-text-output");
const computerScoreTextOutput = document.querySelector(".computer .score-text-output");

// initialize round outcome text output
const roundOutcomeTextOutput = document.querySelector(".round-outcome-text-output");

const listOfHumanActions = document.querySelectorAll(".human-actions button.action");
listOfHumanActions.forEach((actionBtn) => {
    // user presses action button
    actionBtn.addEventListener("click", (event) => {
        // get the user's intended action
        let humanChoice = emojiToAction(event.target.textContent);
        // get the computer's action
        let computerChoice = getComputerChoice();
        // play round
        let roundOutcome = playRound(humanChoice, computerChoice);
        switch (roundOutcome) {
            // if returns 0, means tie and output tie message
            case 0: 
                roundOutcomeTextOutput.textContent = `You tie. You both chose ${humanChoice}.`;
                break;
            // if returns 1, means human wins and output win message
            case 1:
                roundOutcomeTextOutput.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
                humanScoreTextOutput.textContent = `Human: ${++humanScore}`;
                break;
            // if returns -1, means computer wins and output lose message
            case -1:  
                roundOutcomeTextOutput.textContent = `You lose. ${computerChoice} beats ${humanChoice}.`;
                computerScoreTextOutput.textContent = `Computer: ${++computerScore}`;
                break;
            default:
                console.log(`ERROR!`);
        }
    });
});
