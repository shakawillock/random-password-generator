const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordLengthEl = document.getElementById("password-length");
let lettersEl = document.getElementById("letters");
let numbersEl = document.getElementById("numbers");
let symbolsEl= document.getElementById("symbols");

let feedbackMessageEl = document.getElementById("feedback-message");
let passwordOneEl = document.getElementById("generate-password-one");
let passwordTwoEl = document.getElementById("generate-password-two");
let buttonEl = document.getElementById("button-el");

let randomPasswordOne = "";
let randomPasswordTwo = "";

let userInput;
let userSelection = [];

buttonEl.addEventListener('click', generateRandomPasswords);

function generateRandomPasswords() {
    checkPasswordLength();
    checkUserSelection();
    checkPasswordGeneratorOutput();
    outputRandomPasswords();
}

function checkPasswordLength() {
    if (passwordLengthEl.value === "" || passwordLengthEl.value < 8) {
        feedbackMessageEl.textContent = "Please enter a password length between 8 and 128"
    } else {
        feedbackMessageEl.textContent = "";
        userInput = passwordLengthEl.value;
    }
}

function checkUserSelection() {
    if (userSelection.length !== 0) {
        userSelection = [];
    }

    if (lettersEl.checked === true) {
        for (let i = 0; i < letters.length;  i++) {
            userSelection.push(letters[i])
        }
    }

    if (numbersEl.checked === true) {
        for (let i = 0; i < numbers.length; i++) {
            userSelection.push(numbers[i]);
        }
    }

    if (symbolsEl.checked === true) {
        for (let i = 0; i < symbols.length; i++) {
            userSelection.push(symbols[i]);
        }
    }
}

function checkPasswordGeneratorOutput() {
    if (randomPasswordOne !== "" && randomPasswordTwo !== "") {
        randomPasswordOne = "";
        randomPasswordTwo = "";
    }
}

function outputRandomPasswords() {
    if (userSelection.length === 0) {
       for (let i = 0; i < userInput; i++) {
            let randomIndexOne = Math.floor(Math.random() * characters.length);
            let randomIndexTwo = Math.floor(Math.random() * characters.length);
            randomPasswordOne += characters[randomIndexOne];
            randomPasswordTwo += characters[randomIndexTwo];
       }
    } else {
        for (let i = 0; i < userInput; i++) {
            let randomIndexOne = Math.floor(Math.random() * userSelection.length);
            let randomIndexTwo = Math.floor(Math.random() * userSelection.length);
            randomPasswordOne += userSelection[randomIndexOne];
            randomPasswordTwo += userSelection[randomIndexTwo];
        }
    }

    passwordOneEl.textContent = randomPasswordOne;
    passwordTwoEl.textContent = randomPasswordTwo;
}