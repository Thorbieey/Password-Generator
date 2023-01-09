// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// save information about user password length preferences
let savedPassLength;

// Function to prompt user for password length
function setPasswordLength() {
  // alert password length requirements
  alert("Choose you password length, from 10-64 characters");
  // prompt user to enter password legth as a number
  let passLength = Number(window.prompt("Enter a number for your password length!!!"));
  
  if (passLength >= 10 && passLength <= 64) {
    // alert user of password length choice if entered number is at least 10 characters but no more than 64.
    savedPassLength = passLength;
    alert("Your password will be " + passLength + " characters long!");
  } 
  else {
    // alert user of invalid password entered
    alert("Password length invalid. Enter a number between 10-64!!!");
    // rerun the function to set password if user answer is incorrect
    setPasswordLength();
  } 
  return passLength;
};



// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  setPasswordLength();
  // let password = generatePassword();
  // let passwordText = document.querySelector('#password');

  // passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);