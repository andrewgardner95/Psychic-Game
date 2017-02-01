var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

//when the user presses a key, the following function will run.
document.onkeyup = function(event) {
	//Determine which key was pressed by user
	var userGuess = event.key
	//set computerChoice variable equal to a random letter in the letters array
	var computerChoice = letters[Math.floor(Math.random() * letters.length)];
	console.log(computerChoice + userGuess);

		//what happens when the userGuess and computerChoice are the same
		if (userGuess === computerChoice) {
			wins++;
			console.log("wins = " + wins);
		}
		//what happens when are not the same
		else {
			guessesSoFar.push(userGuess);
			console.log("guesses so far = " + guessesSoFar);
			guessesLeft--;
			console.log("guesses Left = " + guessesLeft);
		}

		//what happens when the user has run out of guesses
		if (guessesLeft === 0) {
			losses++;
			console.log("losses = " + losses);
		}

		//if key pressed is not letter???

		//if key pressed is a duplicate??

		//resets guessesLeft and guessesSoFar for the next game 
		if ((guessesLeft===0) || (userGuess === computerChoice)) {
    		guessesLeft = 9;
    		guessesSoFar = []; 
		}

		//Getting the html div element and populating it with the javascript data
    	document.getElementById("wins").innerHTML = "<div>Wins: " + wins + "</div>";
    	document.getElementById("losses").innerHTML = "<div>Losses: " + losses + "</div>";
    	document.getElementById("guessesLeft").innerHTML = "<div>Guesses Left: " + guessesLeft + "</div>";
    	document.getElementById("guessesSoFar").innerHTML = "<div>Your Guesses so Far: " + guessesSoFar.join(', ') + "</div>";

} 
