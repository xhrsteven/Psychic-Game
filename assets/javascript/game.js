var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','s','y','z'];
var wins = 0;
var losses = 0;
//allow user guesses 10 times
var GuessLeft = 10;
var guesssofar =[];

// Let computer select a random letter
var computerGuess = computerChoices[(Math.random()*computerChoices.length)];
//Update guess left function

document.onkeyup = function(event){
	//Determine which key is pressed
	var UserGuess = event.key.toLowerCase();
	
	if (guesssofar.indexOf(UserGuess)<0 && computerChoices.indexOf(UserGuess)>=0) {
		guesssofar[guesssofar.length] =UserGuess;
		GuessLeft--;
	}

	//Create logic to determine the outcome of the game
	if(GuessLeft > 0){
		if (UserGuess == computerGuess) {
		wins++;
		GuessLeft = 10;
		guesssofar = [];
		console.log("UserGuess:"+ UserGuess + 'ComputerChoice:'+computerGuess);
		}
	}
	if(GuessLeft ==0){
		losses++;
		GuessLeft = 10;
		guesssofar = [];
	}
	//Display to HTML
	var html = 
	"<p><h4>Guess what letter I'm thinking of</h4></p>"+
  	"<p><h4>Wins: "+wins +"</h4></p>" +
  	"<p><h4>Losses: " + losses +"</h4></p>" +
  	"<p><h4>Guesses Left: " + GuessLeft +"</h4></p>" +
  	"<p><h4>Your guesses so far: " +guesssofar +"</h4></p>";
	// Place html into the game ID
	document.querySelector("#game").innerHTML = html;
	} 
	