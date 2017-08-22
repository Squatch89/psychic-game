var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



//chooses a letter to be guessed
    var selectedLetter = letters[Math.floor((Math.random() * (letters.length - 1)))];
    console.log(selectedLetter + " this is the selected letter");

//displays wins losses and guesses left
    var guessesLeftNode = document.createTextNode(guessesLeft);
    document.getElementById("guessesLeft").appendChild(guessesLeftNode);

    var winsNode = document.createTextNode(wins);
    document.getElementById("wins").appendChild(winsNode);
    
    var lossesNode = document.createTextNode(losses);
    document.getElementById("losses").appendChild(lossesNode);

//displays the letters guessed
    document.onkeyup = function (event) {
        var userInput = event.key;
        
        if ((lettersGuessed.indexOf(userInput) < 0)) {
            
            
            // console.log(typeof userInput + " this was the user input");
            
            lettersGuessed.push(userInput);
            
            var lettersChosenNode = document.createTextNode(" " + lettersGuessed[lettersGuessed.length - 1]);
            document.getElementById("letters").appendChild(lettersChosenNode);
            
        }
        
        console.log(lettersGuessed);
    
//checks for win and loss conditions
        if (lettersGuessed === selectedLetter) {
            wins++;
            console.log(wins + " this was a win");
        }
        else
        {
            guessesLeft--;
            console.log(guessesLeft + " this was a guess");
            document.getElementById("guessesLeft").appendChild(guessesLeftNode);
        }
    
        if (guessesLeft === 0)
        {
            losses++;
            console.log(losses + " this was a loss");
        }
        
        };

