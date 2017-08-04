//game.js for Sesame Street Hangman-Game
//Brian Russell
//2017

//Variables
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var muppet = ["bert","ernie","elmo","grover","abby","snuffleupagus","oscar", "bigbird"];

var lettersGuessed;
var wins = 0;
var	guessesLeft;
var	guessesMade;
var chosenMuppet;
var blank;
var blankMuppet;
var correctGuess;

//Reset function: Generates random letter based on possible output and sets guesses counters back to default
resetVariables();

// Get user input
document.onkeyup = function(event) {
	// resets correct guess toggle 
	var correctGuess = false;

	// stores user input from keyboard, lowercase letter only
	var keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
	console.log ("input: " + keyPressed);

	

	//Record the guessed letter in array 
	//loop through array to see if the letter has alreay been guessed
	for (var i = 0; i < chosenMuppet.length; i++) {

		if (chosenMuppet[i] === keyPressed){
			//enter keyboard input into blank array
			blankMuppet[i] = keyPressed;

			correctGuess = true;
		}
	};
	var lettersGuessedDisplay = lettersGuessed.join(" ");

	var duplicateLetter = lettersGuessedDisplay.includes(keyPressed)
	console.log("dup:"+ duplicateLetter);
	if (duplicateLetter === false){
		lettersGuessed.push(keyPressed);

		//reduce guesses only if the letter is not in the word
		if (correctGuess === false){
			guessesLeft--;	
		}
	}


	// reset win or loss
	var unsolved = blankMuppet.includes("_");
	
	if (unsolved === false){
		wins++;
		resetVariables();
		//play winning video
	} else if (guessesLeft === 0){ 
		wins--;
		resetVariables();
		//play loser video
	};
	//update current word on html
	var blankMuppetDisplay = blankMuppet.join(" ");

	document.querySelector(".blanks").innerHTML = blankMuppetDisplay;

	//update number of wins on html
	document.querySelector(".wins").innerHTML = wins;

	//Show remaining guesses
	document.querySelector(".remaining").innerHTML = guessesLeft;

	//Update the Letters Guessed <h3> in HTML
	lettersGuessedDisplay = lettersGuessed.join(" ");

	document.querySelector(".guess").innerHTML = lettersGuessedDisplay;
};//end document.onkeyup

function resetVariables(){

	blankMuppet = [];
	guessesLeft = 10;
	guessesMade = [];
	lettersGuessed = [];

	//chose muppet name from Array
	chosenMuppet = muppet[Math.floor(Math.random()*muppet.length)];
		console.log(chosenMuppet);

	//Split muppen Name into letters
	var muppetChars = chosenMuppet.split('');

	//create an array of blank spaces basetd on the length of the name
	for (var i = 0; i < chosenMuppet.length; i++) {

		blankMuppet.push("_");

	//joins array of blank spaces into a single word
	blank = blankMuppet.join(" ");

	//update html
	var html='<h3>' + blank + '</h3>'

	document.querySelector(".blanks").innerHTML = html;
	}		
};//end resetVariables()