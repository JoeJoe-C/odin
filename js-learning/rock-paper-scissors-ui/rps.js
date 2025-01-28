const COMP = "Computer" //label
const PLAYER = "Player" //label
const ROCK = "Rock"
const PAPER = "Paper"
const SCISSORS = "Scissor"

//game stats
let round = 0
let games = 0

//init btns
const rockBtn = document.querySelector("#rock-btn")
const paperBtn = document.querySelector("#paper-btn")
const scissorsBtn = document.querySelector("#scissors-btn")

//init chosen data 
const playerChoice = document.querySelector("#player-choice")
const compChoice = document.querySelector("#comp-choice")

//init round data
const roundWinner = document.querySelector("#round-winner")

//init gameStats
const compWins = document.querySelector("#comp-wins")
const playerWins = document.querySelector("#player-wins")
const gamesPlayed = document.querySelector("#games-played")

rockBtn.onclick = () => {
    playerChoice.textContent = ROCK
    console.log("Player chose: " + ROCK)
}

paperBtn.onclick = () => {
    playerChoice.textContent = PAPER
    console.log("Player chose: " + PAPER)
}

scissorsBtn.onclick = () => {
    playerChoice.textContent = SCISSORS
    console.log("Player chose: " + SCISSORS)
}

function getCompChoice() {
    //get computer choice via random
    let chance = Math.random() //0..1
    let choice = null
    if (chance < 0.33) {
        choice = ROCK
    } else if (chance < 0.66) {
        choice = PAPER
    } else {
        choice = SCISSORS
    }
    compChoice.textContent = choice
    console.log("Computer chose: " + choice)
    return choice
}

function decideRoundWinner(player, comp) {
    let winner = null
    if (player != comp) {
       //not a draw 
        if (player === ROCK) {
            if (comp === PAPER) {
                winner = COMP
            } else {
                winner = PLAYER
            }
        } else if (player === PAPER) {
            if (comp === ROCK) {
                winner = PLAYER
            } else {
                winner = COMP
            }
        } else {
        //player is scissors
            if (comp === ROCK) {
                winner = COMP
            } else {
                winner = PLAYER
            }
        }
    }
    return winner
}

function decideGameWinner() {

}