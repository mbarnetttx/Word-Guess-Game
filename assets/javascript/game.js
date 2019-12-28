
// words to be guessed
var words = ["Jupiter", "Nebula", "Cosmic", "Centauri"];

// randomizes the words that are displayed to guess
var answers = words[Math.floor(Math.random()*words.length)];


var answers = [];
for (var i = 0; i < words.length; i++) {
    answers[i] = "_";
}


// takes in which keys were pressed, and how many guesses they have left, as well as 
// provides an input area for guessed letters
var el;

function charCount(e) {
    var textEntered, charDisplay, counter, lastkey;
    textEntered = document.getElementById('spaces').nodeValue;
    charDisplay = document.getElementById('');
    lastkey.textContent = 'You have' + counter + 'guesses left'
    counter = (10 - (textEntered.length));
    charDisplay.textContent = counter;

    lastkey =Document.getElementById('lastkey');
    lastkey.textContect = 'Previous Guesses'+ e.keyCode
    
    el.addEventListener('keypress', charCount, false);
}

// displays the current word
document.querySelector("#words").innerHTML=word


// areas of extreme need of help:
// putting _ _ _ in place
// attaching words to _ 
// showing guesses # left and showing previously guessed letters


// if (answers = words) 
//  return true
// no backspaces or returns


// // IF  a player guesses a letter, it is either revealed in the _ space, 
// // ELSE it goes into the wrong guesses square







// **underscores for words letters, and guessed letters in a document on key up function, (put everything in there)


// make __ spaces on page that can be filled


// you get 10 chances to guess letters that are in the word  

// when a letter is guessed and it is a letter in the word, a letter is exposed on its corrosponding spaces XXXXX **

// when a wrong letter is guessed, your number of chances to guess goes down 1 from 10

// when you guess a letter that is wrong it is displayed in a line of "past guesses"

// if you guess all the letters to the word before running out of guesses, you win

// if you dont guess all the letters before you run out of guesses, you lose


