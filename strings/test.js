// Example 1 concate

const str1 = "Hello";
const str2 = "World";
// u can concate use concat method or with +
const withOp = str1 + " " + str2
const withMeth = str1.concat(" ", str2)
console.log(withOp, '\n', withMeth)

// Example 2 how to find the length of string
const findLengthText = "Commodo do irure do esse et officia. Excepteur enim ea aute occaecat mollit enim laborum deserunt. Non ex aliqua anim ut aute reprehenderit ipsum est aute elit veniam cillum enim laboris. Et qui reprehenderit pariatur nisi veniam anim fugiat."
const length = findLengthText.length
console.log(length)

// Example 3 Convertion to uppercase
const str = "hello world"
const up = str.toUpperCase()
console.log(up)

// Example 4 is it including this 'string'
const isITInclude = str.includes("world")
console.log(isITInclude)

// Example 5 extract a part of string
const extractWorld = str.substring(6)
const withSlice = str.slice(6)
const withSubstr = str.substr(6,5)
console.log(extractWorld, '\n', withSlice, '\n', withSubstr)

// Example 6 Replacing
const addUniverse = str.replace("world", "universe")
console.log(addUniverse)

// Example 7 Splitting
const notArray = "apple,banana,orange";
const anArray = notArray.split(",")
console.log(anArray)

// Example 8 create reverse function
const beforeReverse = "Hello world"
const afterReverse = myReverse(beforeReverse)
console.log(afterReverse)

// Example 9 check palindrome 
const palindrome = "racecar";
const isPalindrome = checkPalindrome(palindrome)
console.log(isPalindrome)

// Example 10 check occurrences 
const checkStr = "hello hello hello";
const substring = "hello";
const count = countOccurrences(checkStr, substring)
console.log(count)


// Example 11 remove extra white spaces
const extraWhiteSpace = "   Hello   World   ";
const withoutExtra = removeExtraWhiteSpaces(extraWhiteSpace)
console.log(withoutExtra)

// Example 12 truncate string
const beforeTruncate = "Hello world"
const truncated = beforeTruncate.substr(0, 5)
console.log(truncated)


function countOccurrences(str, substr) {
	const iterator = str.matchAll(substr)
	const arr = Array.from(iterator)
	return arr.length
}

function myReverse(str) {
	let reversedStr = "";

	for (let i = str.length - 1; i >= 0; i--) {
		reversedStr += str.at(i);
	}
	return reversedStr
}

function checkPalindrome(str) {
	const startIndex = 0;
	const endIndex = str.length - 1;
	for (let i = startIndex; i <= endIndex / 2; i++) {
		if (str.charAt(i) !== str.charAt(endIndex - i)) {
			return false;
		}
	}
	return true;
}

function removeExtraWhiteSpaces(str) {
	const trimit = str.trim();
	let noExtra = "";
	for (let i = 0; i < trimit.length; i++) {
		if (trimit[i] && trimit[i + 1] == " ") continue;
		noExtra += trimit[i];
	}
	return noExtra;
}
