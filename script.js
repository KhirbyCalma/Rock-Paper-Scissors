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

function resetGame() {
    // reset scores
    humanScore = 0;
    computerScore = 0;
    // reset action output texts
    humanActionTextOutput.textContent = String.fromCodePoint(0x2753);
    computerActionTextOutput.textContent = String.fromCodePoint(0x2753);
    // reset score output texts
    humanScoreTextOutput.textContent = `Human: ${humanScore}`;
    computerScoreTextOutput.textContent = `Computer: ${computerScore}`;
    // reset round outcome output text
    roundOutcomeTextOutput.textContent = 'Select an action to start. First to 5 wins!';
}

// helper function for getting user's intended action
function emojiToAction(emoji) {
    let emojiAsHex = emoji.codePointAt(0).toString(16);
    switch (emojiAsHex) {
        case ('1f44a'):
            return "ROCK";
        case ('1f44b'):
            return "PAPER";
        case ('270c'):
            return "SCISSORS";
        default:
            return 'ERROR';
    }
}

// helper function for turning user's intended action to emoji for action text output
function actionToEmoji(action) {
    switch (action) {
        case ("ROCK"):
            return String.fromCodePoint(0x1f44a);
        case ("PAPER"):
            return String.fromCodePoint(0x1f44b);
        case ("SCISSORS"):
            return String.fromCodePoint(0x270c);
        default:
            return "ERROR"; 
    }
}

// initialize modal behavior
const gameOutcomeModalContainer = document.getElementById("game-outcome-modal-container");
const gameOutcomeTextOutput = document.querySelector("#game-outcome-modal .game-outcome-text-output");
const playAgainBtn = document.querySelector("#game-outcome-modal button.play-again");
playAgainBtn.addEventListener('click', () => {
    // reset game
    resetGame();
    // make modal invisible
    gameOutcomeModalContainer.classList.remove("show")
});

// initialize action text outputs
const humanActionTextOutput = document.querySelector(".human .action-text-output");
const computerActionTextOutput = document.querySelector(".computer .action-text-output");

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
        // update actions visually
        humanActionTextOutput.textContent = actionToEmoji(humanChoice);
        computerActionTextOutput.textContent = actionToEmoji(computerChoice);
        // update text outputs
        switch (roundOutcome) {
            // if returns 0, means tie and output tie message
            case 0: 
                roundOutcomeTextOutput.textContent = `It is a tie. You both chose ${humanChoice}.`;
                break;
            // if returns 1, means human wins and output win message
            case 1:
                roundOutcomeTextOutput.textContent = `You win! Your ${humanChoice} beats the computer's ${computerChoice}.`;
                humanScoreTextOutput.textContent = `Human: ${++humanScore}`;
                break;
            // if returns -1, means computer wins and output lose message
            case -1:  
                roundOutcomeTextOutput.textContent = `You lose. The computer's ${computerChoice} beats your ${humanChoice}.`;
                computerScoreTextOutput.textContent = `Computer: ${++computerScore}`;
                break;
            default:
                roundOutcomeTextOutput.textContent = `ERROR!`;
        }
        // if any score reaches five, announce game outcome with game outcome modal
        if (humanScore === 5 || computerScore === 5) {
            if (humanScore === 5) {
                gameOutcomeTextOutput.textContent = 'You won the game!';
            } else {
                gameOutcomeTextOutput.textContent = 'You lost the game.';
            }
            gameOutcomeModalContainer.classList.add("show");
        }
    });
});
