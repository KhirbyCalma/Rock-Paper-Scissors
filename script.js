// external | https://www.npmjs.com/package/js-confetti
const confettiEffect = document.getElementById("confetti-effect");
const jsConfetti = new JSConfetti();

// scores
let playerScore = 0;
let computerScore = 0; 
// player moveset
const playerMoves = document.querySelectorAll('.player-move-selection');
playerMoves.forEach( (move) => 
    move.addEventListener('click', (event) => {
        playRound(event.target.textContent, getComputerChoice());
    })
);
// text to update
const resultText = document.getElementById('result')
const playerMoveText = document.getElementById('player-move');
const computerMoveText = document.getElementById('computer-move');
const playerScoreText = document.getElementById('player-score');
const computerScoreText = document.getElementById('computer-score');
// emojis to string
const QUESTION_MARK_EMOJI = String.fromCodePoint(0x2753);
const ROCK_EMOJI = String.fromCodePoint(0x270A);
const PAPER_EMOJI = String.fromCodePoint(0x270B);
const SCISSOR_EMOJI = String.fromCodePoint(0x270C);

// choose random integer in given range inclusively
function getRandomInt(start, end){
    return Math.floor(Math.random() * (end - start) ) + start;
}

// computer generates random move
function getComputerChoice(){
    const choices = ["ROCK", "PAPER", "SCISSOR"];
    return choices[getRandomInt(0, choices.length)];
}
// when player makes move, inputs emoji via button and converts to string
function convertEmojiToMove(playerEmojiMove) {
    if (playerEmojiMove === "✊") return "ROCK";
    else if (playerEmojiMove === "✋") return "PAPER";
    else if (playerEmojiMove === "✌") return "SCISSOR";
}

// increase score based on player
function increaseScore(player){
    if (player === "COMPUTER") ++computerScore;
    else if (player === "PLAYER") ++playerScore;
}

// conducts round played after player makes move and updates moves, scores, and result
function playRound(playerSelection, computerSelection){
    playerSelection = convertEmojiToMove(playerSelection);
    // lose conditions
    console.log(playerSelection);
    if ((playerSelection === "ROCK" && computerSelection === "PAPER") || 
            (playerSelection === "PAPER" && computerSelection === "SCISSOR") ||
            (playerSelection === "SCISSOR" && computerSelection === "ROCK")){
        increaseScore("COMPUTER");
    }
    // win conditions
    else if ((playerSelection === "ROCK" && computerSelection === "SCISSOR") || 
            (playerSelection === "PAPER" && computerSelection === "ROCK") ||
            (playerSelection === "SCISSOR" && computerSelection === "PAPER")){
        increaseScore("PLAYER");
    }
    updateMoves(playerSelection, computerSelection);
    updateScores();
    updateResult(playerSelection, computerSelection);
}

// updates moveset text on player and computer
function updateMoves(playerMove = "QUESTION_MARK", computerMove = "QUESTION_MARK"){
    switch(playerMove){
        case "ROCK":
            playerMoveText.textContent = `${ROCK_EMOJI}`;
            break;
        case "PAPER":
            playerMoveText.textContent = `${PAPER_EMOJI}`;
            break;
        case "SCISSOR":
            playerMoveText.textContent = `${SCISSOR_EMOJI}`;
            break;
        default:
            playerMoveText.textContent = `${QUESTION_MARK_EMOJI}`;
    }
    switch(computerMove){
        case "ROCK":
            computerMoveText.textContent = `${ROCK_EMOJI}`;
            break;
        case "PAPER":
            computerMoveText.textContent = `${PAPER_EMOJI}`;
            break;
        case "SCISSOR":
            computerMoveText.textContent = `${SCISSOR_EMOJI}`;
            break;
        default:
            computerMoveText.textContent = `${QUESTION_MARK_EMOJI}`;
    }
}

// updates score text of player and computer
function updateScores(){
    playerScoreText.textContent = `${playerScore}`;
    computerScoreText.textContent = `${computerScore}`;
}

// update result text of who won, lost, or tied
function updateResult(playerMove, computerMove){
    if (playerMove === computerMove){
        resultText.textContent = "You tied.";
    }
    else if ((playerMove === "ROCK" && computerMove === "PAPER") || 
            (playerMove === "PAPER" && computerMove === "SCISSOR") ||
            (playerMove === "SCISSOR" && computerMove === "ROCK")){
                if (isGameOver()){
                    resultText.textContent = `
                    You lost ${playerScore}-${computerScore}. Select a move to restart the game! First to 5 wins.`;
                    resetGame();
                }
                else{
                    resultText.textContent = `You lose.`;
                }
    }
    else if ((playerMove === "ROCK" && computerMove === "SCISSOR") || 
    (playerMove === "PAPER" && computerMove === "ROCK") ||
    (playerMove === "SCISSOR" && computerMove === "PAPER")){
        if (isGameOver()){
            resultText.textContent = `You won ${playerScore}-${computerScore}! Select a move to restart the game! First to 5 wins.`;
            jsConfetti.addConfetti();
            resetGame();
        }
        else{
            resultText.textContent = `You win!`;
        }
    }
}

// checks if game is over (in 5)
function isGameOver(){
    return (playerScore === 5 || computerScore === 5);
}

// resets scores and moves
function resetGame(){
    playerScore = 0;
    computerScore = 0;
    updateScores();
    updateMoves();
}