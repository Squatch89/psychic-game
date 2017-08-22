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


    function resetGame () {
        guessesLeft = 10;
        lettersGuessed = [];
        document.getElementById("letters").textContent = lettersGuessed;
        document.getElementById("guessesLeft").textContent = guessesLeft;
        selectedLetter = letters[Math.floor((Math.random() * (letters.length - 1)))];
        console.log(selectedLetter + " this is the selected letter");
    }


        var alpha = {
            65: "a",
            66: "b",
            67: "c",
            68: "d",
            69: "e",
            70: "f",
            71: "g",
            72: "h",
            73: "i",
            74: "j",
            75: "k",
            76: "l",
            77: "m",
            78: "n",
            79: "o",
            80: "p",
            81: "q",
            82: "r",
            83: "s",
            84: "t",
            85: "u",
            86: "v",
            87: "w",
            88: "x",
            89: "y",
            90: "z",
        };
    
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
    
//checks for win and loss conditions and updates the values displayed
        if (String(lettersGuessed[lettersGuessed.length - 1]) === String(selectedLetter)) {
            wins++;
            console.log(wins + " this was a win");
            document.getElementById("wins").textContent = wins;
            resetGame();
            
        }
        else
        {
            guessesLeft--;
            console.log(guessesLeft + " this was a guess");
            document.getElementById("guessesLeft").textContent = guessesLeft;
        }
    
        if (guessesLeft === 0)
        {
            losses++;
            console.log(losses + " this was a loss");
            document.getElementById("losses").textContent = losses;
            resetGame();
        }
        
        };

 