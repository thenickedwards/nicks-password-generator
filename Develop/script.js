// Assignment Code
var generateBtn = document.querySelector("#generate");

// My code for Homework 3 below
// Arrays to be used
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["`", "-", "=", ";", "'", ",", ".", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", ":", "?"];
var availableChars = [];

// Function begins
function generatePassword() {
  var password = ""
  console.log("Generate a password triggered! Starting with a blank password.");

  // Prompt user for how many characters, must be 8-128 or ask again
  var pwLength=prompt("Let's generate a password for you! I can create a password from 8 - 128 characters. How long would you like your password to be?");

  if (pwLength < 8 || pwLength > 128) {
    alert("Hey now, " + pwLength + " isn't between 8 - 128 characters. Let's try again!");
    console.log("About to re-run generatePassword function.")
  } else {
    console.log("This password is going to be " + pwLength + " characters.");
    

    // Confirm if user wants to use uppercase letters, if yes add one to string and add uppercase array to available characters array
    var isUpperCase=confirm("Should your password include uppercase letters?")

    if (isUpperCase == true) {
      randomUpperCase = upperCase[Math.floor(Math.random() * upperCase.length)];
      password += randomUpperCase;
      availableChars.push(...upperCase);
      console.log("This password may include: " + availableChars);
      console.log("This password will include: " + password);
    }

    // Confirm if user wants to use lowercase letters, if yes add one to string and add lowercase array to available characters array
    var isLowerCase=confirm("Should your password include lowercase letters?")

    if (isLowerCase == true) {
      randomLowerCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];
      password += randomLowerCase;
      availableChars.push(...lowerCase);
      console.log("This password may include: " + availableChars);
      console.log("This password will include: " + password);
    }

    // Confirm if user wants to use numbers, if yes add one to string and add numbers array to available characters array
    var isNumbers=confirm("Should your password include numbers?")

    if (isNumbers == true) {
      randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      password += randomNumber;
      availableChars.push(...numbers);
      console.log("This password may include: " + availableChars);
      console.log("This password will include: " + password);
    }

    // Confirm if user wants to use special characters, if yes add one to string and add special characters array to available characters array
    var isSpecialChars=confirm("Should your password include special characters?")

    if (isSpecialChars == true) {
      randomSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)];
      password += randomSpecialChar;
      availableChars.push(...specialChars);
      console.log("This password may include: " + availableChars);
      console.log("This password will include: " + password);
    }

    // Randomly select character from available chracters
    // Repeat until desired length
    var neededChars = pwLength-password.length

    function addCharacter() {
      // if (password.length < pwLength)
        for (i = 0; i < neededChars; i++) {
          randomAvailableChar = availableChars[Math.floor(Math.random() * availableChars.length)];
          password += randomAvailableChar;
          console.log("This password will include: " + password);
        }
    }

    if (password.length < pwLength) {
      addCharacter();
    }

    // Randomize password

    // Return password
    return password

  

  }
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
