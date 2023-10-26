'use strict';

//Greet User

let userName = prompt("Welcome user! What is your name?");
console.log(userName);
alert("Welcome " + userName + ", this is my about me page.");

// Question: My name
alert("So my name is pretty long and unique. Can you guess what letter it starts with?");
let nameChar = prompt("What do you think the first letter of my name is? You can write out the whole name if you like ;-)");
nameChar = nameChar.toLowerCase();
nameChar = nameChar.charAt(0);
if (nameChar == "s") {
    console.log('Right');
    alert("That's it! The first letter of my name is S!");
 } else {
    alert("Sorry " + userName + ". That's not it. Try again!");
 }

 //Alpha-Numeric Test
function isNumeric(str) {
    return /^[0-9]+$/.test(str);
}

function isAlpha(str) {
    return /^[a-zA-Z]+$/.test(str);
}

//Question: My kids.
 let kidNum = prompt("Right. Now that we've got my name out of the way, how many kids do you think I've got? Btw it's single digit. Oh and numeric characters only.");
 if (console.log(isNumeric(kidNum)) != true) {
    alert("I said numbers only. C'mon you're better than that");
 } else if (kidNum.charAt(1) == true) {
    alert("Pretty sure I said SINGLE digit. Try again mate!");
 } else if (kidNum != 8) {
    alert("Man so close! Try again.");
 } else {
    alert("Spot on. I do have " + kidNum + " kids.");
 }

 //Question: State of origin

 let stateName = prompt("Okay" + userName + ". You've gotten this far. What state do you think I'm from? And please, only the two letter code.");
 
 stateName = stateName.toLowerCase();

 if (console.log(isAlpha(kidNum)) != true) {
    alert("I said two LETTER code. No numbers wiseguy.");
 } else if (stateName.charAt(2) == true) {
    alert("TWO letter code only. You have trouble listening don't you?")
 } else if ((stateName.charAt(0) == 'n') && (stateName.charAt(1) == 'y')) {
    alert("That's right! I'm from the big apple!");
 }
