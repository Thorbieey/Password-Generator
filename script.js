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

// save information about user password length preferences
let savedCharTypes = [];

// list of options for character types available to user
let charTypes = {
  uppercase: upperCasedCharacters,
  lowercase: lowerCasedCharacters,
  special: specialCharacters,
  numeric: numericCharacters
}

//Array of prompts containing questions regarding character preferences i.e. uppercase, lowercase, numeric or special characters
let charTypePrompts = [
  {prompt: 'Include Lowercase characters in your generated password? Enter Y for yes or any other letter for No', value: 'lowercase'},
  {prompt: 'Include Uppercase characters in your generated password? Enter Y for yes or any other letter for No', value: 'uppercase'},
  {prompt: 'Include Numeric characters in your generated password? Enter Y for yes or any other letter for No', value: 'numeric'},
  {prompt: 'Include Special characters in your generated password? Enter Y for yes or any other letter for No', value: 'special'}
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
    // store value inputted by user for password length
    savedPassLength = passLength;
    // alert user of password length choice if entered number is at least 10 characters but no more than 64.
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
  alert("A few more questions about your password character types and we're all set");
  for (let i = 0; i < charTypePrompts.length; i++) {
    // prompt each question from the charTypePrompts array and store user character type preference
    // make user response case insensitive by converting response to lowercase 
    const charTypePreference = prompt(charTypePrompts[i].prompt).toLowerCase();
    if (charTypePreference === "y"){
      // if user chooses yes, store corresponding value from the charTypePrompts to new array 
      savedCharTypes.push(charTypePrompts[i].value);
      // alert user of password character type preference selected.
      alert("Your password will include " + charTypePrompts[i].value + " characters");
    }
    else{
      // alert user that password character type wont be included in password.
      alert("Your password will not include " + charTypePrompts[i].value + " characters");
    }
  }
  // call function to confirm user selected atleast 1 character type
  charTypeRules();
}



// Function to make sure user selectes atleast one character type
function charTypeRules() {
  if (savedCharTypes.length < 1) {
    // alert user that atlease one character type must chosen
    alert('Invalid selection!!! Please chose at least one character type.');
    // call function 
    setCharacterTypes();
  }
}

// Function for collecting user password preferences i.e. password length and chracter types
function getPasswordOptions() {
  alert("Lets set your password preferences");
  // call function to prompt user for password length
  setPasswordLength();
  // call function to prompt user for password character types
  setCharacterTypes();
}

// Function for getting a random element from an array
function getRandomCharacter(array) {
  return array[Math.floor(Math.random()*array.length)]
}

// Function to generate password with user input
function generatePassword() {
// string for generated password 
let password = ''
  for (let i = 0; i < savedPassLength; i++) {
    // randomly select one of the character types chose by the user
    let randomCharacter = getRandomCharacter(savedCharTypes);
    // randomly select one character from the randomly selected character type
    let randomCharacterType = getRandomCharacter(charTypes[randomCharacter]);
    // add randomly selected character to password string
    password += randomCharacterType;
  }
  // returns the string of randomly generated characters
return password
}

// Write password to the #password input
function writePassword() {
  // call the function which collects user password preferences
  getPasswordOptions();
  // store generated password
  let password = generatePassword();
  // variable containing password text area on webpage
  let passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
// run function to write password to display on click of button on page
generateBtn.addEventListener('click', writePassword);