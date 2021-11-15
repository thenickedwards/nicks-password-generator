// Assignment Code
var generateBtn = document.querySelector("#generate");

// My code for Homework 3 below
// Arrays to be used
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["`", "-", "=", ";", "'", ",", ".", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", ":", "?"];
var availableChars = ""

// Function begins
function generatePassword() {
  var password = ""
  console.log("Generate a password triggered! Starting with a blank password.");

// Prompt user for how many characters, must be 8-128 [or ask again???]
var pwLength=prompt("Let's generate a password for you! I can create a password from 8 - 128 characters. How long would you like your password to be?");

if (pwLength >= 8 && pwLength <= 128) {
  console.log("This password is going to be " + pwLength + " characters.");
} else {
  alert("Hey now, " + pwLength + " isn't between 8 - 128 characters. Let's try again!");
  // This part isn't re-presenitng question
  // pwLength=prompt("Let's generate a password for you! I can create a password from 8 - 128 characters. How long would you like your password to be?"); 
}



// Confirm if user wants to use uppercase letters, if yes add one to string and add uppercase array to available characters array
// Confirm if user wants to use lowercase letters, if yes add one to string and add lowercase array to available characters array
// Confirm if user wants to use numbers, if yes add one to string and add numbers array to available characters array
// Confirm if user wants to use special characters, if yes add one to string and add special characters array to available characters array
// Randomly select character from available chracters
// Repeat until desired length
// Randomize password


// Return password
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
