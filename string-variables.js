// example

/* var firstName = "Alan";
var lastName = "Turing";

var myFirstName = "Beau";
var myLastName = "Carnes"; 
 */


// escaping literal quotes in strings
/* var myStr = "I am a \"double quoted\" string inside \double quotes"
console.log(myStr)  */


// quoting strings with single quotes
/* var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
 */

// escape sequences in strings
/****
code output
\'  single quote
\"  double quote
\\  backlash
\n  newline
\r  carriage return
\t  tab
\b  backspace
\f  form feed
******/
/* 
var myStr = "FirstLine\n\t\\SecondLine'nThirdLine"; */



// concatenating strings with plus operator
// example
/* var ourStr = "I come first. " + "I come second.";

var myStr = "This is the start. " + " Thisis the end.";
console.log(myStr) */



// concatenating strings with plus equals operator
// example
/* var ourStr = "I come first.";
ourStr += "I come second."

var myStr = "This is the first."
myStr += "THis is the second."

console.log(myStr); */



// constructing strings with variables
/* var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is" + ourName + ", how are you?";

var myName = "Beau";
var myStr = "my name is " + myName + "and I am well!";
console.log(myStr)
 */



// appending variables to strings
// example
/* var anAdjective ="awesome!";
var ourStr = "freeCodeCampe is"
ourStr += anAdjective;

var someAdjective = "worthwile"
var myStr = "learning to code is ";
myStr += someAdjective;
 */



// find length of string
// example
/* var firstNameLength = 0;
var firstName =  "Ada";

firstNameLength = firstName.length; */

// setup
/* var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength) */




// bracket notation to find first character in string
// example 
/* var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

//setup
var firstLetterOfFirstName = "";
var lastName = "lovelace";

firstLetterOfFirstName = lastName[0];
console.log(firstLetterOfFirstName) */



// String Immutability
/* var myStr = "Jello World"

myStr = "Hello World" */
// to fix the word you have to spell out the whole thing



// Bracket Notation to Find Nth Character in String
// example
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

//setup
var lastName = "Lovelace"

var thirdLetterOfLastName = lastName[2];




// Bracket Notation to Find Last Character in String
var firstName = "Ada";
var thirdLetterOfLastName = firstName[firstName.length - 1];

//setup 
var lastName = "Lovelace";

var lastLetterOfLastName = lastName[lastName.length - 1];

