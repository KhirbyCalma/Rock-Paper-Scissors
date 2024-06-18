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

// test to see if all choices are outputted by computer choice
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i}. ${getComputerChoice()}`);
// }

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

// test to see if all choices are outputted by computer choice
// for (let i = 1; i <= 4; i++) {
//     console.log(`${i}. ${getHumanChoice()}`);
// }

let humanScore = 0;
let computerScore = 0;

// if human choice and computer choice the same, tie
// if human choice beats computer choice, output win message and increment human score
// if computer choice beats computer choice, output lose message and increment computer score