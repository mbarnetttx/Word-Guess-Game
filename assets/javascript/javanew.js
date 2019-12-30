//Create an array that will hold the data choice

var words = ["jupiter", "nebula", "cosmic", "centauri"];


// Create an empty variable that will hold the chosen word
//// A function will be created that allows the computer to randomly choose a word from the above array
        //the chosen word is place inside this variable
var computerChoice = "";
//i.e computerChoice = Jupiter

//Create a variable that breaks down the word into indivdual letter
    //The computerChoice variable then is broken down (with a later created function) and the breakdown will go here
var wordBreakdown = [];
//i.e wordBreakdown = j u p i t e r 

//Create variable that holds the number amount of letters in the wordBreakdown variable
var numLetter = 0;
//i.e numLetter = 7;

//Create var that holds the blanksSpaces[]
var blankSpaces= [];

// Holds all of the wrong guesses
var wrongGuesses = [];

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;


//Create Function

//Brackets: 
        //Curly Brackets = {} - inside the steps for the function is held
        //Square Brackets = []

//Parenthesis: 
        // () - define a function

    //function NAME () {
        //Define in detail what the function does or will do 
   // }

   function startGAME () {
      
      numGuesses = 9;
        //Give the variable computerChoice a value
      computerChoice=  words[Math.floor(Math.random()*words.length)];
      //Takes the value of computerChoice and splits them (using a js library function)
      wordBreakdown = computerChoice.split("");
      //Captures the excution results
      console.log(computerChoice);
      console.log(wordBreakdown);
      //gives the variable numLetter the new value which counts the 
    //   amount of letters in the wordBreakdown variable
      numLetter =wordBreakdown.length;
      console.log(numLetter);

      //After a word is chosen - reset the blankSpaces
      blankSpaces = [];
      wrongGuesses = [];
      //Loop through the numLetter and however much the value it - push that amount of underscores
      for (var i =0; i < numLetter; i++){
        blankSpaces.push("_");

      
    }

    console.log(blankSpaces);
  //Here you reflect that values onto your html 
  document.getElementById("spaces").innerHTML = blankSpaces.join(" ");
  //Render the wrongguesses to the HTML
  document.getElementById("lastkey").innerHTML = "Wrong Guesses " + wrongGuesses.join(" ");
  //Render the numGuesses to the HTML
  document.getElementById("triesCounter").innerHTML = "You have " + numGuesses + " left";
}
 
//     function userINPUT() {

        
//         // count how many wins
//         winCounter = 

//         // count losses
//         lossCounter = 

//         // number of guesses (10)
//         numGuesses = 

//         // shows letters that were guessed and are not in the 
            // word (up to 10 times)
//         wrongGuesses = 

//     }

//    }

//CheckLetter function - the logic of the game itself 
//Create a function name checkLetterers

// with a param of letter

function checkLetter (letter){
//Why are we placing the variable to be false first? 
            //We want to assume to worst then test the choice 
            //If the lettermatches a letter  in the word - the false will change to true (based off the index)

    //create variable that holds a boolean
    //if the selected letter === to a letter in the word 
        //the boolean will turn true
    
        var trueLetters = false;
        //If true - the code will end 
        //If false - the remainder code will execute 
//Check to see if selected key.code (letter) is in the word at all
// (loop through the word adn compare the selected letter to the options)
for (var i = 0; i < numLetter; i++){
    if(computerChoice[i]===letter){
        trueLetters = true;
    }
}

//If the letter is true - now figure out where to place the letter on the screen (where to place the letter
//in the blankspaces)
//Creating our if it is true function 
if(trueLetters){
    //Loop through the word - computer choice
        //determine if the user selected letter matches an letter in the word 
    for(var j = 0; j < numLetter; j++){
        //if the letter matches
        if(computerChoice[j] === letter){
            //place the letter in the value for the correct black space
            blankSpaces[j]= letter;

        }
    }
    console.log(blankSpaces);
}
//here we create the else statement if the trueLetters is false
else{
    wrongGuesses.push(letter);
    numGuesses--;
}
}

//Create a fucntion that updates the page
 function resetGame(){
     //making sure the HTML is updated with the correct data
     document.getElementById("spaces").innerHTML = blankSpaces.join(" ");
     //Render the wrongguesses to the HTML
     document.getElementById("lastkey").innerHTML = "Wrong Guesses " + wrongGuesses.join(" ");
     //Render the numGuesses to the HTML
     document.getElementById("triesCounter").innerHTML = "You have " + numGuesses + " tries left";

     //If all letters were guessed properly add to wins and alert the user
     if(wordBreakdown.toString() === blankSpaces.toString()){
         winCounter++;
         alert("You won");
         //update the HTML and restart teh game

         document.getElementById("counter").innerHTML=winCounter;
         startGAME();
     }
     else if (numGuesses === 0 ){
         lossCounter++;
         alert("You're out of tires!");

         document.getElementById("losses-user").innerHTML = lossCounter;
         startGAME();
     }
 }

   startGAME();

   //Capture the user selection utilizing document.onkeyup

 
  // onkeyup = after the key is pressed and released 
  // onkeydown = while the key is pressed down

  //docuent.onkeyup: When the user loads the page and a key is pressed
    //function(event): Execute this event function
  document.onkeyup = function(event){
      //Check if the key pressed is a letter - Look at https://keycode.info/ for code ref
      if (event.keyCode>= 65 && event.keyCode <= 90){
          var letterGuessed = event.key.toLocaleLowerCase();
          //Calling a premade function (function you made) that will 
            //determine if the guessed letter matches the letter needed
          checkLetter(letterGuessed)
          //Calls the reset function - if game is completed - based on the checkLetter()
          resetGame();
          console.log("You Selected: " + letterGuessed);
          
      }
  }