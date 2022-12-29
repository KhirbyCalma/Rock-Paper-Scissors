function getRandomInt(start, end){
    return Math.floor(Math.random() * (end - start) ) + start;
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[getRandomInt(0, choices.length)];
}