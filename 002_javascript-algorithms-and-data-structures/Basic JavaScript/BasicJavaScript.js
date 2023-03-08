/*************************************************
*
* 1 - Comment your JavaScript Code
*
* TASK: Try creating one of each type of comment.
*
*************************************************/

// inline comment

/* this
is a
multi lined
comment */

/**************************************************************
*
* 2 - Declare JavaScript Variables
*
* TASK: Use the var keyword to create a variable called myName.
*
**************************************************************/

var myName;

/**************************************************************
*
* 3 - Storing Values with the Assignment Operator
*
* TASK: Assign the value 7 to variable a.
*
**************************************************************/

// Setup
var a;

// Only change code below this line

a = 7;

/**************************************************************
*
* 4 - Assigning the Value of One Variable to Another
*
* TASK: Assign the contents of a to variable b.
*
**************************************************************/

// Setup
var a;
a = 7;
var b;

// Only change code below this line

b = a;

/**************************************************************
*
* 5 - Initializing Variables with the Assignment Operator
*
* TASK: Define a variable a with var and initialize it to a value of 9.
*
**************************************************************/

var a = 9;

/**************************************************************
*
* 6 - Declare String Variables
*
* TASK: Create two new string variables: myFirstName and myLastName
*       and assign them the values of your first and last name, 
*       respectively.
*
**************************************************************/

var myFirstName = "Danny";
var myLastName = "Hyde";

/**************************************************************
*
* 7 - Understanding Uninitialized Variables
*
* TASK: Initialize the three variables a, b, and c with 5, 10, 
*       and "I am a" respectively so that they will not be 
*       undefined.
*
**************************************************************/

// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

/**************************************************************
*
* 8 - Understanding Case Sensitivity in Variables
*
* TASK: Modify the existing declarations and assignments so 
*       their names use camelCase.
*
*       Do not create any new variables.
*
**************************************************************/

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

/**************************************************************
*
* 9 - Explore Differences Between the var and let Keywords
*
* TASK: Update the code so it only uses the let keyword.
*
**************************************************************/

let catName = "Oliver";
let catSound = "Meow!";

/**************************************************************
*
* 10 - Declare a Read-Only Variable with the const Keyword
*
* TASK: Change the code so that all variables are declared 
*       using let or const. Use let when you want the variable 
*       to change, and const when you want the variable to 
*       remain constant. Also, rename variables declared with 
*       const to conform to common practices. Do not change the 
*       strings assigned to the variables.
*
**************************************************************/

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

/**************************************************************
*
* 11 - Add Two Numbers with JavaScript
*
* TASK: Change the 0 so that sum will equal 20.
*
**************************************************************/

const sum = 10 + 10;

/**************************************************************
*
* 12 - Subtract One Number from Another with JavaScript
*
* TASK: Change the 0 so the difference is 12.
*
**************************************************************/

const difference = 45 - 33;

/**************************************************************
*
* 13 - Multiply Two Numbers with JavaScript
*
* TASK: Change the 0 so that product will equal 80.
*
**************************************************************/

const product = 8 * 10;

/**************************************************************
*
* 14 - Divide One Number by Another with JavaScript
*
* TASK: Change the 0 so that the quotient is equal to 2.
*
**************************************************************/

const quotient = 66 / 33;

/**************************************************************
*
* 15 - Increment a Number with JavaScript
*
* TASK: Change the code to use the ++ operator on myVar.
*
**************************************************************/

let myVar = 87;

// Only change code below this line
myVar++;

/**************************************************************
*
* 16 - Decrement a Number with JavaScript
*
* TASK: Change the code to use the -- operator on myVar.
*
**************************************************************/

let myVar = 11;

// Only change code below this line
myVar--;

/**************************************************************
*
* 17 - Create Decimal Numbers with JavaScript
*
* TASK: Create a variable myDecimal and give it a decimal value
*       with a fractional part (e.g. 5.7).
*
**************************************************************/

const ourDecimal = 5.7;

// Only change code below this line

let myDecimal = 4.8;

/**************************************************************
*
* 18 - Multiply Two Decimals with JavaScript
*
* TASK: Change the 0.0 so that product will equal 5.0.
*
**************************************************************/

const product = 2.0 * 2.5;

/**************************************************************
*
* 19 - Divide One Decimal by Another with JavaScript
*
* TASK: Change the 0.0 so that quotient will equal to 2.2.
*
**************************************************************/

const quotient = 4.4 / 2.0; // Change this line

/**************************************************************
*
* 20 - Finding a Remainder in JavaScript
*
* TASK: Set remainder equal to the remainder of 11 divided by
*       3 using the remainder (%) operator.
*
**************************************************************/

const remainder = 11 % 3;

/**************************************************************
*
* 21 - Compound Assignment With Augmented Addition
*
* TASK: Convert the assignments for a, b, and c to use the += 
*       operator.
*
**************************************************************/

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

/**************************************************************
*
* 22 - Compound Assignment With Augmented Subtraction
*
* TASK: Convert the assignments for a, b, and c to use the -= 
*       operator.
*
**************************************************************/

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

/**************************************************************
*
* 23 - Compound Assignment With Augmented Multiplication
*
* TASK: Convert the assignments for a, b, and c to use the *= 
*       operator.
*
**************************************************************/

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

/**************************************************************
*
* 24 - Compound Assignment With Augmented Division
*
* TASK: Convert the assignments for a, b, and c to use the /= 
*       operator.
*
**************************************************************/

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

/**************************************************************
*
* 25 - Escaping Literal Quotes in Strings
*
* TASK: Use backslashes to assign a string to the myStr variable
*       so that if you were to print it to the console, you would
*       see:
*
*       I am a "double quoted" string inside "double quotes".
*
**************************************************************/

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

/**************************************************************
*
* 26 - Quoting Strings with Single Quotes
*
* TASK: Change the provided string to a string with single 
*       quotes at the beginning and end and no escape characters.
*
*       Right now, the <a> tag in the string uses double quotes 
*       everywhere. You will need to change the outer quotes to 
*       single quotes so you can remove the escape characters.
*
**************************************************************/

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

/**************************************************************
*
* 27 - Escape Sequences in Strings
*
* TASK: Assign the following three lines of text into the single 
*       variable myStr using escape sequences.
*
*       FirstLine
*       \SecondLine
*       ThirdLine
*
*       You will need to use escape sequences to insert special 
*       characters correctly. You will also need to follow the 
*       spacing as it looks above, with no spaces between escape 
*       sequences or words.
*
*       Note: The indentation for SecondLine is achieved with the
*       tab escape character, not spaces.
*
*       Code	Output
*         \'	single quote
*         \"	double quote
*         \\	backslash
*         \n	newline
*         \t	tab
*         \r	carriage return
*         \b	word boundary
*         \f	form feed
*
**************************************************************/

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

/**************************************************************
*
* 28 - Concatenating Strings with Plus Operato
*
* TASK: Build myStr from the strings This is the start. and This 
*       is the end. using the + operator. Be sure to include a 
*       space between the two strings.
*
**************************************************************/

const myStr = "This is the start. " + "This is the end."; // Change this line

/**************************************************************
*
* 29 - Concatenating Strings with the Plus Equals Operator
*
* TASK: Build myStr over several lines by concatenating these
*       two strings: This is the first sentence. and This is the
*       second sentence. using the += operator. Use the += 
*       operator similar to how it is shown in the example and 
*       be sure to include a space between the two strings. Start 
*       by assigning the first string to myStr, then add on the 
*       second string.
*
**************************************************************/

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

/**************************************************************
*
* 30 - Constructing Strings with Variables
*
* TASK: Set myName to a string equal to your name and build 
*       myStr with myName between the strings My name is and 
*       and I am well!
*
**************************************************************/

// Only change code below this line
const myName = "Danny";
const myStr = "My name is " + myName + "and I am well!";

/**************************************************************
*
* 31 - Appending Variables to Strings
*
* TASK: Set someAdjective to a string of at least 3 characters 
*       and append it to myStr using the += operator.
*
**************************************************************/

// Change code below this line
const someAdjective = "good";
let myStr = "Learning to code is ";

myStr += someAdjective;

/**************************************************************
*
* 32 - Find the Length of a String
*
* TASK: Use the .length property to set lastNameLength to the
*       number of characters in lastName.
*
**************************************************************/

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

/**************************************************************
*
* 33 - Use Bracket Notation to Find the First Character in a String
*
* TASK: Use bracket notation to find the first character in the 
*       lastName variable and assign it to firstLetterOfLastName.
*
**************************************************************/

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

/**************************************************************
*
* 34 - Understand String Immutability
*
* TASK: Correct the assignment to myStr so it contains the
*       string value of Hello World using the approach shown in
*       the example above.
*
**************************************************************/

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

/**************************************************************
*
* 35 - Use Bracket Notation to Find the Nth Character in a String
*
* TASK: Let's try to set thirdLetterOfLastName to equal the third
*       letter of the lastName variable using bracket notation.
*
**************************************************************/

// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

/**************************************************************
*
* 36 - Use Bracket Notation to Find the Last Character in a String
*
* TASK: Use bracket notation to find the last character in the 
*       lastName variable.
*
**************************************************************/

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length -1]; // Change this line

/**************************************************************
*
* 37 - Use Bracket Notation to Find the Nth-to-Last Character 
*      in a String
*
* TASK: Use bracket notation to find the second-to-last character
*       in the lastName string
*
**************************************************************/

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

/**************************************************************
*
* 38 - Word Blanks
*
* TASK: In this challenge, we provide you with a noun, a verb, an
*       adjective and an adverb. You need to form a complete
*       sentence using words of your choice, along with the words
*       we provide.
*
*       You will need to use the string concatenation operator +
*       to build a new string, using the provided variables: myNoun,
*       myAdjective, myVerb, and myAdverb. You will then assign
*       the formed string to the wordBlanks variable. You should
*       not change the words assigned to the variables.
*
*       You will also need to account for spaces in your string,
*       so that the final sentence has spaces between all the words.
*       The result should be a complete sentence.
*
**************************************************************/

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + " down the street."; // Change this line
// Only change code above this line

/**************************************************************
*
* 39 - 
*
* TASK: 
*
**************************************************************/

/**************************************************************
*
* 40 - 
*
* TASK: 
*
**************************************************************/

/**************************************************************
*
* 41 - 
*
* TASK: 
*
**************************************************************/

/**************************************************************
*
* 42 - 
*
* TASK: 
*
**************************************************************/

/**************************************************************
*
* 43 - 
*
* TASK: 
*
**************************************************************/

/**************************************************************
*
* 44 - 
*
* TASK: 
*
**************************************************************/

/**************************************************************
*
* 45 - 
*
* TASK: 
*
**************************************************************/

/**************************************************************
*
* 46 - 
*
* TASK: 
*
**************************************************************/

/**************************************************************
*
* 47 - 
*
* TASK: 
*
**************************************************************/

/**************************************************************
*
* 48 - 
*
* TASK: 
*
**************************************************************/

/**************************************************************
*
* 49 - 
*
* TASK: 
*
**************************************************************/

/**************************************************************
*
* 50 - 
*
* TASK: 
*
**************************************************************/

/**************************************************************
*
* 51 - 
*
* TASK: 
*
**************************************************************/

/**************************************************************
*
* 52 - 
*
* TASK: 
*
**************************************************************/

/**************************************************************
*
* 53 - Local Scope and Functions
*
* TASK: The editor has two console.logs to help you see what is
*       happening. Check the console as you code to see how it
*       changes. Declare a local variable myVar inside 
*       myLocalScope and run the tests.
*
**************************************************************/

function myLocalScope() {
  // Only change code below this line
  const myVar = 5;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
//const myVar;
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

/**************************************************************
*
* 54 - Global vs. Local Scope in Functions
*
* TASK: Add a local variable to myOutfit function to override
*       the value of outerWear with the string sweater.
*
**************************************************************/

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

/**************************************************************
*
* 55 - Understanding Undefined Value returned from a Function
*
* TASK: Create a function addFive without any arguments. This
*       function adds 5 to the sum variable, but its returned
*       value is undefined.
*
**************************************************************/

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

/**************************************************************
*
* 56 - Assignment with a Returned Value
*
* TASK: Call the processArg function with an argument of 7 and
*       assign its return value to the variable processed.
*
**************************************************************/

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

/**************************************************************
*
* 57 - Stand in Line
*
* TASK: Write a function nextInLine which takes an array (arr)
*       and a number (item) as arguments.
*
*       Add the number to the end of the array, then remove the
*       first element of the array.
*
*       The nextInLine function should then return the element
*       that was removed.
*
**************************************************************/

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);

  return arr.shift();
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/**************************************************************
*
* 58 - Understanding Boolean Values
*
* TASK: Modify the welcomeToBooleans function so that it returns
*       true instead of false.
*
**************************************************************/

function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

/**************************************************************
*
* 59 - Use Conditional Logic with If Statements
*
* TASK: Create an if statement inside the function to return Yes,
*       that was true if the parameter wasThatTrue is true and
*       return No, that was false otherwise.
*
**************************************************************/

function trueOrFalse(wasThatTrue) {
  // Only change code below this line

  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";

  // Only change code above this line

}

/**************************************************************
*
* 60 - Comparison with the Equality Operator
*
* TASK: Add the equality operator to the indicated line so that
*       the function will return the string Equal when val is
*       equivalent to 12.
*
**************************************************************/

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

/**************************************************************
*
* 61 - Comparison with the Strict Equality Operator
*
* TASK: Use the strict equality operator in the if statement so
*       the function will return the string Equal when val is
*       strictly equal to 7.
*
**************************************************************/

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

/**************************************************************
*
* 62 - Practice comparing different values
*
* TASK: The compareEquality function in the editor compares two
*	  values using the equality operator. Modify the function
*       so that it returns the string Equal only when the values
*       are strictly equal.
*
**************************************************************/

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

/**************************************************************
*
* 63 - Comparison with the Inequality Operator
*
* TASK: Add the inequality operator != in the if statement so 
*       that the function will return the string Not Equal when
*       val is not equivalent to 99.
*
**************************************************************/

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

/**************************************************************
*
* 64 - Comparison with the Strict Inequality Operator
*
* TASK: Add the strict inequality operator to the if statement
*       so the function will return the string Not Equal when 
*       val is not strictly equal to 17
*
**************************************************************/

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

/**************************************************************
*
* 65 - Comparison with the Greater Than Operator
*
* TASK: Add the greater than operator to the indicated lines so
*       that the return statements make sense.
*
**************************************************************/

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

/**************************************************************
*
* 66 - Comparison with the Greater Than Or Equal To Operator
*
* TASK: Add the greater than or equal to operator to the indicated
*       lines so that the return statements make sense.
*
**************************************************************/

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

/**************************************************************
*
* 67 - Comparison with the Less Than Operator
*
* TASK: Add the less than operator to the indicated lines so that
*       the return statements make sense.
*
**************************************************************/

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

/**************************************************************
*
* 68 - Comparison with the Less Than Or Equal To Operator
*
* TASK: Add the less than or equal to operator to the indicated
*       lines so that the return statements make sense.
*
**************************************************************/

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

/**************************************************************
*
* 69 - Comparisons with the Logical And Operator
*
* TASK: Replace the two if statements with one statement, using
*       the && operator, which will return the string Yes if val
*       is less than or equal to 50 and greater than or equal to
*       25. Otherwise, will return the string No.
*
**************************************************************/

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
     return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

/**************************************************************
*
* 70 - Comparisons with the Logical Or Operator
*
* TASK: Combine the two if statements into one statement which
*       returns the string Outside if val is not between 10 and 20,
*       inclusive. Otherwise, return the string Inside.
*
**************************************************************/

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

/**************************************************************
*
* 71 - Introducing Else Statements
*
* TASK: Combine the if statements into a single if/else statement.
*
**************************************************************/

function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

/**************************************************************
*
* 72 - Introducing Else If Statements
*
* TASK: Convert the logic to use else if statements.
*
**************************************************************/

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

testElseIf(7);

/**************************************************************
*
* 73 - Logical Order in If Else Statements
*
* TASK: Change the order of logic in the function so that it 
*       will return the correct statements in all cases.
*
**************************************************************/

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

/**************************************************************
*
* 74 - Chaining If Else Statements
*
* TASK: Write chained if/else if statements to fulfill the following
*       conditions:
*
*	  num < 5 - return Tiny
*	  num < 10 - return Small
*	  num < 15 - return Medium
*	  num < 20 - return Large
*	  num >= 20 - return Huge
*
**************************************************************/

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
  // Only change code above this line
}

testSize(7);

/**************************************************************
*
* 75 - Golf Code
*
* TASK: In the game of Golf, each hole has a par, meaning, the
*	  average number of strokes a golfer is expected to make in
*       order to sink the ball in the hole to complete the play.
*       Depending on how far above or below par your strokes are,
*       there is a different nickname.
*
*       Your function will be passed par and strokes arguments.
*       Return the correct string according to this table which lists
*       the strokes in order of priority; top (highest) to bottom
*       (lowest):
*
*		Strokes	Return
*			1	"Hole-in-one!"
*		<= par - 2	"Eagle"
*		par - 1	"Birdie"
*			par	"Par"
*		par + 1	"Bogey"
*		par + 2	"Double Bogey"
*		>= par + 3	"Go Home!"
*
*	  par and strokes will always be numeric and positive. We
*       have added an array of all the names for your convenience.
*
**************************************************************/

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes <= par - 1) {
    return names[2];
  } else if (strokes <= par) {
    return names[3]
  } else if (strokes <= par + 1) {
    return names[4];
  } else if (strokes <= par + 2) {
    return names[5];
  } else {
  return names[6];
  }
  // Only change code above this line
}

golfScore(5, 4);

/**************************************************************
*
* 76 - Selecting from Many Options with Switch Statements
*
* TASK: Write a switch statement which tests val and sets answer
*       for the following conditions:
*	  1 - alpha
*	  2 - beta
*       3 - gamma
*	  4 - delta
*
**************************************************************/

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta"
      break;
  }


  // Only change code above this line
  return answer;
}

caseInSwitch(1);

/**************************************************************
*
* 77 - Adding a Default Option in Switch Statements
*
* TASK: Write a switch statement to set answer for the following
*       conditions:
*	  a - apple
*	  b - bird
*	  c - cat
*	  default - stuff
*
**************************************************************/

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  // Only change code above this line
  return answer;
}

switchOfStuff(1);

/**************************************************************
*
* 78 - Multiple Identical Options in Switch Statements
*
* TASK: Write a switch statement to set answer for the following
*	  ranges:
*	  1-3 - Low
*	  4-6 - Mid
*	  7-9 - High
*
**************************************************************/

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
    switch (val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        break;
    }
  // Only change code above this line
  return answer;
}

sequentialSizes(1);

/**************************************************************
*
* 79 - Replacing If Else Chains with Switch
*
* TASK: Change the chained if/else if statements into a switch
*       statement.
*
**************************************************************/

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  // Only change code above this line
  return answer;
}

chainToSwitch(7);

/**************************************************************
*
* 80 - Returning Boolean Values from Functions
*
* TASK: Fix the function isLess to remove the if/else statements.
*
**************************************************************/

function isLess(a, b) {
  // Only change code below this line
    return a < b;
  // Only change code above this line
}

isLess(10, 15);

/**************************************************************
*
* 81 - Return Early Pattern for Functions
*
* TASK: Modify the function abTest so that if a or b are less
*       than 0 the function will immediately exit with a value
*       of undefined.
*
**************************************************************/

// Setup
function abTest(a, b) {
  // Only change code below this line

if (a < 0 || b < 0) {
  return undefined;
} 

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(0,0);

/**************************************************************
*
* 82 - Counting Cards
*
* TASK: In the casino game Blackjack, a player can determine 
*       whether they have an advantage on the next hand over the
*       house by keeping track of the relative number of high and
*       low cards remaining in the deck. This is called Card Counting.
*
*       Having more high cards remaining in the deck favors the
*       player. Each card is assigned a value according to the table
*	  below. When the count is positive, the player should bet high.
*	  When the count is zero or negative, the player should bet low.
*
*		Count Change	Cards
*			+1		2, 3, 4, 5, 6
*			0		7, 8, 9
*			-1		10, 'J', 'Q', 'K', 'A'
*
*	  You will write a card counting function. It will receive a
*	  card parameter, which can be a number or a string, and
*	  increment or decrement the global count variable according to
*	  the card's value (see table). The function will then return a
*	  string with the current count and the string Bet if the count
*	  is positive, or Hold if the count is zero or negative. The
*	  current count and the player's decision (Bet or Hold) should
*	  be separated by a single space.
*
**************************************************************/

let count = 0;

function cc(card) {
  // Only change code below this line

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count ++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count --;
  }

  if (count > 0) {
    return count + ' Bet';
  } else {
    return count + ' Hold'
  }

  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

/**************************************************************
*
* 83 - Build JavaScript Objects
*
* TASK: Make an object that represents a dog called myDog which
*       contains the properties name (a string), legs, tails and
*       friends.
*
*	  You can set these object properties to whatever values you
*	  want, as long as name is a string, legs and tails are numbers,
*	  and friends is an array.
*
**************************************************************/

const myDog = {
  // Only change code below this line
  "name": "Kain",
  "legs": 4,
  "tails": 1,
  "friends": ["Arsenal", "Daisy", "Shimmy"]

  // Only change code above this line
};

/**************************************************************
*
* 84 - Accessing Object Properties with Dot Notation
*
* TASK: Read in the property values of testObj using dot notation.
*	  Set the variable hatValue equal to the object's property hat
*	  and set the variable shirtValue equal to the object's property
*	  shirt.
*
**************************************************************/

// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

/**************************************************************
*
* 85 - Accessing Object Properties with Bracket Notation
*
* TASK: 
*
**************************************************************/

// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line

/**************************************************************
*
* 86 - Accessing Object Properties with Variables
*
* TASK: 
*
**************************************************************/

// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

/**************************************************************
*
* 87 - Updating Object Properties
*
* TASK: 
*
**************************************************************/

// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line

myDog.name = "Happy Coder";

/**************************************************************
*
* 88 - Add New Properties to a JavaScript Object
*
* TASK: 
*
**************************************************************/

const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";

/**************************************************************
*
* 89 - Delete Properties from a JavaScript Object
*
* TASK: 
*
**************************************************************/

// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line

delete myDog.tails;

/**************************************************************
*
* 90 - Using Objects for Lookups
*
* TASK: 
*
**************************************************************/

// Setup
function phoneticLookup(val) {
  let result = "";

  //Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  }
  return lookup[val];

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

/**************************************************************
*
* 91 - Testing Objects for Properties
*
* TASK: 
*
**************************************************************/

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
}

  // Only change code above this line
}

/**************************************************************
*
* 92 - Manipulating Complex Objects
*
* TASK: 
*
**************************************************************/

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

myMusic.push(
  {
    "artist": "Dave",
    "title": "Happy Birthday",
    "release_year": 1989,
    "formats": [
      "CD",
      "8T",
      "LP"
    ]
  }
)

/**************************************************************
*
* 93 - Accessing Nested Objects
*
* TASK: 
*
**************************************************************/

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

/**************************************************************
*
* 94 - Accessing Nested Arrays
*
* TASK: 
*
**************************************************************/

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1]

/**************************************************************
*
* 95 - Record Collection
*
* TASK: 
*
**************************************************************/

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

/**************************************************************
*
* 96 - Iterate with JavaScript While Loops
*
* TASK: 
*
**************************************************************/

// Setup
const myArray = [];

// Only change code below this line
let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
}

/**************************************************************
*
* 97 - Iterate with JavaScript For Loops
*
* TASK: 
*
**************************************************************/



/**************************************************************
*
* 98 - 
*
* TASK: 
*
**************************************************************/

/**************************************************************
*
* 99 - 
*
* TASK: 
*
**************************************************************/

/**************************************************************
*
* 100 - 
*
* TASK: 
*
**************************************************************/

/**************************************************************
*
* 101 - 
*
* TASK: 
*
**************************************************************/

/**************************************************************
*
* 102 - 
*
* TASK: 
*
**************************************************************/

/**************************************************************
*
* 103 - 
*
* TASK: 
*
**************************************************************/

/**************************************************************
*
* 104 - 
*
* TASK: 
*
**************************************************************/

/**************************************************************
*
* 105 - Generate Random Fractions with JavaScript
*
* TASK: 
*
**************************************************************/

function randomFraction() {

  // Only change code below this line

  return Math.random();

  // Only change code above this line
}

/**************************************************************
*
* 106 - Generate Random Whole Numbers with JavaScript
*
* TASK: 
*
**************************************************************/

function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random() * 10);
}

/**************************************************************
*
* 107 - Generate Random Whole Numbers within a Range
*
* TASK: 
*
**************************************************************/

function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin +1)) + myMin;
  // Only change code above this line
}

/**************************************************************
*
* 108 - Use the parseInt Function
*
* TASK: 
*
**************************************************************/

function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

/**************************************************************
*
* 109 - Use the parseInt Function with a Radix
*
* TASK: 
*
**************************************************************/

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");

/**************************************************************
*
* 110 - Use the Conditional (Ternary) Operator
*
* TASK: 
*
**************************************************************/

function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

/**************************************************************
*
* 111 - Use Multiple Conditional (Ternary) Operators
*
* TASK: 
*
**************************************************************/

function checkSign(num) {
  return (num === 0) ? "zero"
  : (num > 0) ? "positive"
  : "negative";
}

checkSign(10);

/**************************************************************
*
* 112 - Use Recursion to Create a Countdown
*
* TASK: 
*
**************************************************************/

// Only change code below this line
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    let arr = countdown(n-1);
    arr.unshift(n);
    return arr;
  }
}
// Only change code above this line

/**************************************************************
*
* 113 - Use Recursion to Create a Range of Numbers
*
* TASK: 
*
**************************************************************/

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    let arr = rangeOfNumbers(startNum, endNum-1);
    arr.push(endNum);
    return arr;
  }  
};





