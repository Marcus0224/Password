var characterLenght = 8;
var choiceArr = [];

var specialCharArr = ['%', '&', ',', '@', '+', '%', '!', '/', '^', '*', ')'];
var lowerCassArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); //true or false
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  }
  else {
    passwordText.value = "";

  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLenght; i++) {
    var randompass = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randompass];
  }
  return password;
}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

function getPrompts() {
  choiceArr = [];

  characterLenght = parseInt(prompt("How many characters do you want your password to be? (8-128 characters)"));

  // Should come back false
  if (isNaN(characterLenght) || characterLenght < 8 || characterLenght > 128) {
    alert("Character lenght needs to be between 8-128. Try again");
    return false;
  }

  if (confirm("You need lowercase letters in your password!")) {
    choiceArr = choiceArr.concat(lowerCassArr);
  }

  if (confirm("You need Uppercase letters in your password!")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }

  if (confirm("You need numbers in your password!")) {
    choiceArr = choiceArr.concat(numberArr);
  }

  if (confirm("You need special characters in your password!")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }

  return true;
}

 //function generatePassword() {

 //}

