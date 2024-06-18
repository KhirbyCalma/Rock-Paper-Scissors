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
            return 'SCISSOR';
        default:
            return 'ERROR';
    }
}

function getRandomInteger(min, max) {
    // return equation for random integer within specified range, inclusively
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// test to see if all choices are outputted by computer choice
for (let i = 1; i <= 10; i++) {
    console.log(`${i}. ${getComputerChoice()}`);
}

// ask user to choose rock, paper, or scissors and store in variable
// while user's choice is not rock, paper, or scissors, ask user again until valid choice
// return user's choice 