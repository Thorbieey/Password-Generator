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

//Array of prompts containing questions regarding character preferences i.e. uppercase, lowercase, numeric or special characters
let charTypePrompts = [
  {prompt: 'Would you like Lowercase characters in your generated password? Enter Y for yes or any other letter for No', value: 'lowercase'},
  {prompt: 'Would you like Uppercase characters in your generated password? Enter Y for yes or any other letter for No', value: 'uppercase'},
  {prompt: 'Would you like Numeric characters in your generated password? Enter Y for yes or any other letter for No', value: 'numeric'},
  {prompt: 'Would you like Special characters in your generated password? Enter Y for yes or any other letter for No', value: 'special'}
];

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

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
  // return information about selected user password length preference
  return passLength;
};

// Function to prompt user for character types preference
function setCharacterTypes() {
  // alert user of next step in password generation process
  alert("A few more questions about your password criterias and we're all set");
  for (let i = 0; i < charTypePrompts.length; i++) {
    let charTypePreference = prompt(charTypePrompts[i].prompt);
    console.log(charTypePreference);
    
  }
  
}

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}



// Write password to the #password input
function writePassword() {
  // setPasswordLength();
  setCharacterTypes();
  // let password = generatePassword();
  // let passwordText = document.querySelector('#password');

  // passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);