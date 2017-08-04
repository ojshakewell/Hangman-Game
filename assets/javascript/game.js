//game.js for Sesame Street Hangman-Game
//Brian Russell
//2017

//Variables

//nested array with links and hints
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


var muppet = ["Bert","Ernie","Elmo","Grover","Abbey"];


var lettersGuessed = [];
var wins = 42;
var gameRound = 0;
var	guessesLeft;
var	guessesMade;



//Reset function: Generates random letter based on possible output and sets guesses counters back to default
resetVariables();


var blank = blankMuppet.join(" ");
		//console.log(blank);

var html='<h3>' + blank + '</h3>'

document.querySelector(".blanks").innerHTML = html;


// Get user input
document.onkeyup = function(event) {
	// stores user input from keyboard, lowercase letter only
	var keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
	//console.log ("input: " + keyPressed);

	//Record the guessed letter in array 
	lettersGuessed.push(keyPressed);

	//loop through array to see if the letter has alreay been guessed
//loop through letter in word to determine if letter is in word


// if correct letter, show position in display


//if incorrect

//update user guess statistics

	// for (var i = 0; i < lettersGuessed.length; i++) {
	// 	console.log(lettersGuessed[i]);
	// 			console.log("test");

	// 	var duplicateLetter = false;

	// 	// if (keyPressed === lettersGuessed[i]) {
	// 	// 	duplicateLetter = true;
	// 	// } else {};

	// 	if (duplicateLetter == false) {
	// 		lettersGuessed.push(keyPressed);
	// 	} else {}
	// }


	var wins = 42;

	var winsHtml='<h3> Wins <br />' + wins + '</h3>';

	document.querySelector(".wins").innerHTML = winsHtml;

	//Show remaining guesses
	guessesLeft--;	

	var lettersGuessedHtml='<h3> Guesses Remaining <br />' + guessesLeft + '</h3>';

	document.querySelector(".remaining").innerHTML = lettersGuessedHtml;

	//Update the Letters Guessed <h3> in HTML
	var lettersGuessedDisplay = lettersGuessed.join(" ");

	var lettersGuessedHtml='<h3> Letters Guessed <br />' + lettersGuessedDisplay + '</h3>';

	document.querySelector(".guess").innerHTML = lettersGuessedHtml;

};//end document.onkeyup

function resetVariables(){

	guessesLeft = 10;
	guessesMade = [];

	newMuppet();

	// //chose muppet name from Array
	// chosenMuppet = muppet[Math.floor(Math.random()*muppet.length)];
	// 	console.log(chosenMuppet);

	// //Split muppen tame into letters
	// var muppetChars = chosenMuppet.split('');

	// //create an array of blank spaces basetd on the length of the name
	// for (var i = 0; i < chosenMuppet.length; i++) {

	// 	blankMuppet.push("_");
	//}
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