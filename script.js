// Assignment code here
var minLength =8
var maxLength=128


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
 var pwLength = window.prompt( "lengh of password")
 console.log (pwLength)
 if(pwLength < minLength || pwLength > maxLength){ 
    window.alert ("password bewtween " + minLength + " and " + maxLength)
    generatePassword()
}
 var lowercase = window.confirm ("yes or no to lowercase")
 var uppercase = window.confirm ("yes or no to uppercase")
 var numbers= window.confirm ("yes or no to numbers")
 var character = window.confirm ("yes or no to special character")
