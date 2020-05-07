var secretNumber ;
var guessedNumbers = [];
const guessField = document.querySelector(".guessField");
var MessageBox = document.getElementById("messageBox");
var WrongGuesses = document.getElementById("wrongGuesses");


function start()
{
secretNumber = Math.floor(Math.random()*100)+1;
console.log(secretNumber);
MessageBox.innerHTML = "";
WrongGuesses.innerHTML = "";
guessedNumbers = [];
}

function guessButtonPressed()
{
    var userGuess = Number(guessField.value);
    var guessBool = isValidGuess(userGuess)

    if(guessBool == true)
    {
        CheckIfCorrect(userGuess);
    }
    
    WrongGuesses.innerHTML = guessedNumbers;

    console.log("Nappia painettu")
    console.log(userGuess)

    guessField.value = "";
}

function isValidGuess(number)
{
    if(isNaN(number))
    {
        MessageBox.innerHTML = "Käytä vain numeroita";
        return false;
    }
    if(number >100 || number <1)
    {
        MessageBox.innerHTML = "Arvauksen täytyy olla isompi kuin 1 ja pienempi kuin 100";
        return false;
    }
    if(guessedNumbers.includes(number))
    {
        MessageBox.innerHTML = "Et voi arvata saa lukua kahdesti";
        return false;
    }
    else
    {
        
        guessedNumbers.push(number);
        return true;
    }
    
}
function CheckIfCorrect(number)
{
    if(number == secretNumber)
    {

        MessageBox.innerHTML = "Oikein, Arvauksien määrä " + guessedNumbers.length + "<button onclick=start()>Aloita uudelleen</button>";
    }
    if(number != secretNumber)
    {
        
        if(number >secretNumber)
        {
            MessageBox.innerHTML = "Vastaus on pienempi";
        }
        if(number <secretNumber)
        {
            MessageBox.innerHTML = "Vastaus on isompi";
        }
    }
}


