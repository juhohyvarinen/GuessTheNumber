var secretNumber ;
var guessedNumber;

function start()
{
secretNumber = Math.floor(Math.random()*100)+1;
console.log(secretNumber);
}

function guessButtonPressed()
{
    var usersGuess = parseInt(document.querySelector(".guessField"))

    console.log("Nappia painettu")
}

function isValidGuess(number)
{

}
