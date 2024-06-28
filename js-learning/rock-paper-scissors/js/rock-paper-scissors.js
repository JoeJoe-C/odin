const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let playerWins = 0;
let aiWins = 0;

function playGame() {
	let playerChoice;
	let computerChoice;
	let rounds;
	let numWins;
	let gameEnd = false;
	//ask for number of rounds
	rounds = getNumberRounds();
	numWins = Math.floor((rounds / 2) + 1); //threshold to win
	//start loop
	while (!gameEnd) {
		//ask user input
		playerChoice = getUserInput();
		displayChoice("player", playerChoice);
		computerChoice = getComputerChoice();
		displayChoice("computer", computerChoice);
		//check if winner and add points
		decideWinner(playerChoice, computerChoice);
		//game threshold to finish
		if (playerWins === numWins) {
			alert("Player has won!");
			displayStatistics(playerWins, aiWins, rounds);
			gameEnd = true;
		} else if (aiWins === numWins) {
			alert("Computer has won!");
			displayStatistics(playerWins, aiWins, rounds);
			gameEnd = true;
		} 
	}
	reset(); //resets the stats
}

function reset() {
	playerWins = 0;
	aiWins = 0;
}

function displayIntro() {
	let introMessage = "Welcome to the Javascript game rock, paper, scissors!\n\n" +
		"This is a console based javascript game to learn about the fundamentals of javascript\n" +
		"programming, I hope you enjoy! :)\n\n" + 
		"to start, please type in the console: playGame()";
	alert(introMessage)
}

function getNumberRounds() {
	let rounds;
	rounds = prompt("How many rounds would you like to play?");
	return Number(rounds);
}

function getUserInput() {
	let userInput;
	userInput =	prompt("Rock, Paper or scissors? (default: rock)")
	switch (userInput) {
		case rock:
			break;
		case paper:
			break;
		case scissors:
			break;
		default:
			userInput = rock;
	}
	return userInput;
}

function getComputerChoice() {
	let computer;
	let choice = Math.random();
	if (choice <= 0.33) {
		computer = rock;
	} else if (choice <= 0.66) {
		computer = paper;
	} else {
		computer = scissors;
	}
	return computer;
}

function decideWinner(playerChoice, computerChoice) {
	if (playerChoice === rock) {
		if (computerChoice === scissors) {
			playerWins++;
		} else if (computerChoice === paper) {
			aiWins++;
		}
	} else if (playerChoice === paper) {
		if (computerChoice === scissors) {
			aiWins++;
		} else if (computerChoice === rock) {
			playerWins++;
		}
	} else {
		// scissors for player
		if (computerChoice === paper) {
			playerWins++;
		} else if (computerChoice === rock) {
			aiWins++;
		}
	}
}

function displayChoice(entity, choice) {
	if (entity == "player") {
		console.log("Player chose: " + choice);
	} else if (entity = "computer") {
		console.log("Computer chose: " + choice);
	}
}

function restartGame() {
	playerWins = 0;
	aiWins = 0;
}

function displayStatistics(playerWin, computerWin, numRounds) {
	console.log("Number of rounds: " + numRounds + "\n" + 
	"Player Wins: " + playerWins + "\n" + 
	"Computer Wins: " + aiWins + "\n");
}

displayIntro();
