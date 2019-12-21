var words = ["Jupitor", "Nebula", "Cosmic", "Centauri"];

var word = words[Math.floor(Math.random()*words.length)];

var answers = [];
for (var i = 0; i < word.length; i++) {
    answers[i] = "_";
}

// var remaining = word.length; set to 10

//     for (var l = 0; l < word.length; l++) {
//     if (word[l] === guess) {
//         answers[l] = guess;
//         remaining--;
//     }
// }           

document.querySelector("#currentword").innerHTML=word

**underscores for words letters, and guessed letters in a document on key up function, (put everything in there)

// letters are set as variables  XXXXX

// there is a word to be guessed, represented by empty spaces XXXXX

// you get 10 chances to guess letters that are in the word  

// when a letter is guessed and it is a letter in the word, a letter is exposed on its corrosponding spaces XXXXX **

// when a wrong letter is guessed, your number of chances to guess goes down 1 from 10

// when you guess a letter that is wrong it is displayed in a line of "past guesses"

// if you guess all the letters to the word before running out of guesses, you win

// if you dont guess all the letters before you run out of guesses, you lose

// reset button
