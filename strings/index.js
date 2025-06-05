console.log("Start of String tutroial");

//~ Extracting string Chars
// Five methods of chars
// charAt, charCodeAt, fromCharCode, at
// charAt and at similar but at is new feature and it accepts negative values
// charCodeAt returns unicode value
// fromCharCode converts unicode value to char
// u can also use `[]` to get char but it is not recommended

const str = "Hello";
withCharAt = str.charAt(0); // H
withAt = str.at(0); // H
withCharCodeAt = str.charCodeAt(0); //72
withFromCharCode = String.fromCharCode(72); // H
console.log(withCharAt, withAt, withCharCodeAt, withFromCharCode);
/*                                           */
console.log("#".repeat(50));



//~ Extracting string parts
// Three methods
// slice, substring, substr
// slice and substring accept negative values
// the difference between slice and substring is the way the negative values are handled
// substr accept negative values
// substr its second paratmer the lenth og the substring
// substr is considered deprecated

let text = "Apple, Banana, Kiwi";
withSlice = text.slice(7, 13); // Banana
withSubstring = text.substring(7, 13); // Banana
withSubstr = text.substr(7, 6); // Banana
console.log(withSlice, withSubstring, withSubstr);
/*                                          */
console.log("#".repeat(50));



//~ converting string caseness
// Two methods
// toUpperCase, toLowerCase

let text2 = "Hello World";
withUpperCase = text2.toUpperCase(); // "HELLO WORLD"
withLowerCase = text2.toLowerCase(); // "hello world"
console.log(withUpperCase, withLowerCase);
/*                                          */
console.log("#".repeat(50));


//~ Concating strings
// One method
// concat
// You can also use concetation operator

let text3 = "Hello";
let text4 = "World";
let withConcatedText = text3.concat(" ", text4); // "Hello World"
let withConcatationOperator = text3 + " " + text4; // "Hello World"
console.log(withConcatedText, withConcatationOperator);
/*                                          */
console.log("#".repeat(50));



//~ Trim strting
// Three method
// trim, trimStart, trimEnd

let text5 = " Hello World ";
let withTrim = text5.trim(); // "Hello World"
let withTrimStart = text5.trimStart(); // "Hello World "
let withTrimEnd = text5.trimEnd(); // " Hello World"
console.log(withTrim, withTrimStart, withTrimEnd);
/*                                          */
console.log("#".repeat(50));


//~ Padding strings
// Two methods
// padStart, padEnd
// Padding means to add the specified string in second parameter till it reaches the length of the first parameter



let text6 = "5"; // length is 1
let withPadStart = text6.padEnd(4, "0"); // 5000
let withPadEnd = text6.padStart(4, "0"); // 0005
console.log(withPadStart, withPadEnd);
/*                                          */
console.log("#".repeat(50));



//~ Utils methods
// Five methods
// toString, repeat, replace, replaceAll, split
// replace method can take regex as its paramters
// replace only replaces first occurence and it is case sensitive
// but if u want to replace all occurences use replaceAll or use replace with regex /g/
// Also replace all supports regex
// split converts string into array and unlike python it doesnt have default seperator


let number = 8;
let text7 = "Hello world world World";
let withToString = number.toString(); // "8"
let withRepeat = text7.repeat(5); // "Hello world world WorldHello world world WorldHello world world WorldHello world world WorldHello world world World"
let withReplace = text7.replace("World", "Universe"); // "Hello universe universe Universe"
let withReplaceAll = text7.replaceAll("World", "Universe"); // "Hello universe universe Universe"
console.log(withToString, withRepeat, withReplace, withReplaceAll);
/*                                          */
console.log("#".repeat(50));




// Seacrhing and Matching strings
// Eight methods
// indexOf, lastIndexOf, search, match, matchAll, includes, startsWidth, endsWidth
// Both indexOf(), and lastIndexOf() return -1 if the text is not found
// Both methods accept a second parameter as the starting position for the search
// search like indexOf() but search accepts regex
// search can not take second argument as indexOf()
// match returns an array of matches, also it accepts regex
// but match doesnt accept the /g/ [global] it only returns first match
// so if you want to return all matches use matchAll
// includes returns true or false based on if the is the substring included in the string[text]
// it accepts a second parameter as the starting position
// both startsWidth and endsWidth can take a second parameter as start position
//! matchAll , includes , startsWidth and endsWidth doesnt work on Internet Explorer


let text8 = "Please locate where 'locate' occurs!";
let withIndexOf = text8.indexOf("locate"); // 7
let withLastIndexOf = text8.lastIndexOf("locate"); // 21
let withSearch = text8.search("locate"); // 7
let withMatch = text8.match("ate"); // ["ate", index: 7, input: "Please locate where 'locate' occurs!", groups: undefined]
let withMatchAll = text8.matchAll("ate"); // ["ate", index: 7, input: "Please locate where 'locate' occurs!", groups: undefined]
let withIncludes = text8.includes("locate"); // true
let withStartsWith = text8.startsWith("Please"); // true
let withEndsWith = text8.endsWith("locate"); // true
console.log(withIndexOf, withLastIndexOf, withSearch, withMatch, withMatchAll, withIncludes, withStartsWith, withEndsWith);
/*                                          */
console.log("#".repeat(50));


console.log("End of String tutroial");
