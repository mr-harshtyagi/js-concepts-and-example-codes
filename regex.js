// How to use regex (regular expressions) in programming - super powerful but don't abuse,otherwise can lead to unmaintable code
// can be used to add, remove, isolate, and manipulate all kinds of text and data
// Industry use cases: string manipulation and testing in web scraping, validation frontend logic

// /Code/ is regex to find Code in string freeCodeCamp
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr); // true

// OR operation
let regex = /dog|cat|bird/;

// ignore case - use i flag
regex = /freecodecamp/i;

// Use match to return strings
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex); // ["expressions"]

// Find more than one match - use g flag i.e. global search flag
testStr = "Repeat, Repeat, Repeat";
ourRegex = /Repeat/gi; // we can use more than one flag
testStr.match(ourRegex); // ["Repeat", "Repeat", "Repeat"]

// wildcard character (.) - only matches partial string
let humStr = "I'll hum a song";
let huRegex = /hu./;
huRegex.test(humStr); // true

// Match single character with multiple possibilities
let bgRegex = /b[aiu]g/; // test for bag,big and bug

// Match letters of alphabet
bgRegex = /[a-e]at/; // aat,bat .... eat

// ^ - to exclude those characters
regex = /[^aeiou0-9]/gi; // not vowel or numbers, global and insensitive

// + Match Characters that Occur One or More Times
regex = /a+/g; //because of the +, it would also find a single match in aabc and return ["aa"].

// * Match Characters that Occur Zero or More Times
regex = /go*/; // "goooooooo" gives ["goooooooo"] ,"gut feeling" gives ["g"]

// ? Lazy Matching -  finds the smallest possible part of the string that satisfies the regex pattern
regex = /t[a-z]*?i/; // "titanic" gives "ti"

// ^ caret character to search for patterns at the beginning of strings
// $ search the end of strings using the dollar sign character
