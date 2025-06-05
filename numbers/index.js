console.log("Start of Numbers tutroial");

//~ Numbers methods
// Five methods
// toString, toExponential, toFixed, toPrecision, valueOf
// if u think about valueOf u would see it useless becuase it returns a primitive value from a number
// let numObj = new Number(10);
// console.log(numObj + 5);
//! Same as using
// let numObj = new Number(10); // Creating a Number object
// console.log(numObj.valueOf()); // Output: 10
// some methods in javascript uses valueOf

let n = 20;
let n2 = 9.6543;
let nObj = new Number(100);
const withToString = n.toString(); // "20"
const withToString2 = (n).toString()
const withExponential = n.toExponential(); // "2e+1"
const withFixed = n2.toFixed(2); // 
const withPrecision = n2.toPrecision(2);
const withValueOf = nObj.valueOf();
const typeofWithValueOf = typeof (withValueOf);

console.log(withToString, withToString2, withExponential, withFixed, withPrecision, withValueOf, typeofWithValueOf);
/*                                          */
console.log("#".repeat(50));



//~ Global Javascript methods
// Three methods
// isNaN, isFinite, isInteger, Number, parseInt, parseFloat
// Number() can also convert a date to a number.
// Note some methods do the same , but they repeated like for convention reasons
// methods as parseInt and Number.parseInt()

let n3 = "10.567";
const withNumber = Number(n3);
const withIsNaN = isNaN(n3);
const withIsFinite = isFinite(n3);
const withIsInteger = Number.isInteger(n3);
const withParseInt = parseInt(n3);
const withParseFloat = parseFloat(n3);
console.log(withNumber, withIsNaN, withIsFinite, withIsInteger, withParseInt, withParseFloat);
/*                                          */
console.log("#".repeat(50));



//~ There is more methods related to `Number` but u would not use them in javascript
// Methods as
// Number.EPSILON, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MAX_VALUE, Number.MIN_VALUE, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY

// For more methods refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// we are done with numbers
