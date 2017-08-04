//game.js for Sesame Street Hangman-Game
//Brian Russell
//2017

//Variables

//nested array with links and hints
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var muppet = ["bert","ernie","elmo","grover","abby","snuffleupagus"];

var lettersGuessed = [];
var wins = 0;
//var gameRound = 0;
var	guessesLeft = 10;
var	guessesMade;
var chosenMuppet;
var blankMuppet;
var correctGuess;

//Reset function: Generates random letter based on possible output and sets guesses counters back to default
resetVariables();

//joins array of blank spaces into a single word
var blank = blankMuppet.join(" ");

var html='<h3>' + blank + '</h3>'

document.querySelector(".blanks").innerHTML = html;


// Get user input
document.onkeyup = function(event) {
	var correctGuess = false;

	// stores user input from keyboard, lowercase letter only
	var keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
	//console.log ("input: " + keyPressed);

	//Record the guessed letter in array 
	lettersGuessed.push(keyPressed);

	//loop through array to see if the letter has alreay been guessed
	for (var i = 0; i < chosenMuppet.length; i++) {

		if (chosenMuppet[i] === keyPressed){

			blankMuppet[i] = keyPressed;

			correctGuess = true;

		} else {}
	};

	//reduce guesses only if the letter is not in the word
	if (correctGuess === false){
		guessesLeft--;	
	}

	if (keyPressed != chosenMuppet[i])

	var unsolved = blankMuppet.includes("_");

	console.log(unsolved);

	if (unsolved === false){
		wins++;
	}

	//update current word on html
	var blankMuppetDisplay = blankMuppet.join(" ");

	document.querySelector(".blanks").innerHTML = blankMuppetDisplay;

	//update number of wins on html
	document.querySelector(".wins").innerHTML = wins;

	//Show remaining guesses
	document.querySelector(".remaining").innerHTML = guessesLeft;

	//Update the Letters Guessed <h3> in HTML
	var lettersGuessedDisplay = lettersGuessed.join(" ");

	document.querySelector(".guess").innerHTML = lettersGuessedDisplay;

//loop through letter in word to determine if letter is in word



};//end document.onkeyup

function resetVariables(){

	guessesLeft = 10;
	guessesMade = [];

	newMuppet();
};//end resetVariables

function newMuppet (){
	blankMuppet = [];
	//chose muppet name from Array
	chosenMuppet = muppet[Math.floor(Math.random()*muppet.length)];
		console.log(chosenMuppet);

	//Split muppen tame into letters
	var muppetChars = chosenMuppet.split('');

	//create an array of blank spaces basetd on the length of the name
	for (var i = 0; i < chosenMuppet.length; i++) {

		blankMuppet.push("_");
	}		
};//end newMuppet