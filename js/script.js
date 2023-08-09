// GLOBAL VARIABLES

const guessButton = document.querySelector(".guess");
const letter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const guessedLetter = document.querySelector(".guessed-letters");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

const word = "magnolia";

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
}

placeholder(word);


guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = letter.value;
    console.log(guess);
    letter.value = "";
});
