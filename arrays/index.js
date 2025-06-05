console.log("Start of Arrays tutroial");

//~ Arrays
// Arrays are actually objects and they have many methods
// There are three ways to create an array
let arr1 = new Array("Banana", "Orange", "Apple", "Mango");
let arr2 = [{firstName: "John"}, {lastName: "Doe"}];
let arr3 = [1, 2, 3, 4, 5];

// to access arr1 and arr3  them
let firstElement = arr1[0];
let lastElement = arr1[arr1.length - 1];
console.log(firstElement, lastElement);

// to acess arr2
let firstName = arr2[0].firstName;
let lastName = arr2[1].lastName;
console.log(firstName, lastName);

// Two methods to iterate an array
// for, forEach

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
	text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
	text += "<li>" + value + "</li>";
}
console.log(text);

// toString method returns a string from an array

/*                                       */
console.log("#".repeat(50));


// Two ways to push to the end of an array and to add values into the array
// push and with its length
// push adds to the end of the array
const withPush = fruits.push("Kiwi");
fruits[fruits.length] = "Pineapple";
console.log(withPush, fruits);

// to add values into the array at the start
// unshift
// unshift adds to the start of the array
const withUnshift = fruits.unshift("Kiwi");
console.log(withUnshift);

// JS it uses numbered index arrays, but if u used named index arrays some properties wont work
// becasue JS will define it as object
// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;
// person.length;     // Will return 0
// person[0];         // Will return undefined



// new Array can reproduce some unexpected results, like new Array(40) will not create an array 40
// and it would be undefined
// You cant use typeof with arrays becuase it will return object [arrays are special objects]
// so u have to use Array.isArray or fruits instanceof Array


// Here are some methods of arrays
// at, join, pop, push, shift, slice, sort, splice, unshift, concate, copyWithin, flat
// at() method is doing the same as [], but [] doesnt accept negative value [in JS  only]
// so at() solves the problem
// join method joins all elements of an array into a string
// it is like toString(), but u can specify the separator

// shift is like pop but it removes the first element
// both pop and shift are returning the removed element
// unshift is like push but it adds to the start

// delete removes an element but it leaves a hole in the array[where it has been deleted]
// so delete is not recommended

// concat like in strings but it concatenates arrays
// concat method can also take a string as an argument
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = array1.concat(array2);
console.log(array3);
console.log("#".repeat(50));

// copyWithin copies part of an array to within the array
// copyWithin arguments are (target, start, end)
// target is the index to start copying at
// start is the index to start at
// end is the index to stop at
let array4 = [1, 2, 3, 4, 5];
let array5 = array4.copyWithin(0, 3, 4);
console.log(array5);
console.log("#".repeat(50));

// flat flattens an array it means it convert its dimensions like from multi-dimension to one dimension
let array6 = [[1, 2], [3, 4], [5, 6]];
let array7 = array6.flat();
console.log(array7);
console.log("#".repeat(50));

// splice is a way to add elemnets into the array but this time not from the end or start
// splice takes more than 2 arguments, first argument is the position, second is the number of elements to be removed
// and the rest are the elements to be added can be strings or array
// also splice can be used to remove elements only
// e.g. splice(0, 1) will remove the first element
// Es2023 has a new method called toSpliced
// toSpliced is like splice but it doesnt change or alter the array unlike splice
let array8 = [1, 2, 3, 4, 5];
let array9 = array8.splice(0, 1);
console.log(array9);
console.log("#".repeat(50));

// slice is a way to get a part of an array and it creates a new array with the part of the original array
// slice takes two arguments, first is the start and second is the end
// the rest of the arguments are optional and if not specified then it will take the rest of the array
//The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.
let array10 = [1, 2, 3, 4, 5];
let array11 = array10.slice(0, 3);
console.log(array11);
console.log("#".repeat(50));





// Search methods in arrays
// Seven methods
// indexOf, lastIndexOf, includes, find, findIndex, findLast, findLastIndex
// indexOf can take an optional second argument which is the index from which the search should start
// indexOf returns first occurrence while lastIndexOf returns last occurrence

// includes is not supported on IE

// The find() method returns the value of the first array element that passes a test function.
// the find test function takes three arguments
// function myFunction(value, index, array) {
//   return value > 18;
// }
// findIndex like find method but it returns the index not the value
// findLast starts from the end


const myArray = [1, 2, 3, 4, 5];
const withIndexOf = myArray.indexOf(3);
const withLastIndexOf = myArray.lastIndexOf(3);
const withIncludes = myArray.includes(3);
const withFind = myArray.find(element => element === 3);
const withFindIndex = myArray.findIndex(element => element === 3);
const withFindLast = myArray.findLast(element => element === 3);
const withFindLastIndex = myArray.findLastIndex(element => element === 3);
console.log(withIndexOf, withLastIndexOf, withIncludes, withFind, withFindIndex, withFindLast, withFindLastIndex);
/*                                       */
console.log("#".repeat(50));





// Sort methods in arrays
// Three methods
// sort, reverse, toSorted, toReversed
// like splice and toSpliced where toSpiced doesnt alter the original array
// same way for toSorted and toReversed
// sort is used with strings , therefor if u used it with numbers it give incorrect result
// so u can provide it with a compare function, also u can use it in same way with objects
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function (a, b) {
// 	return a - b;
// });

//?*                                       */



// to find the minmum and maximum in arrays
// Math.min.apply(null, array) and Math.max.apply(null, array)



//! Arrays are Not Constants
//! The keyword const is a little misleading.
//! It does NOT define a constant array. It defines a constant reference to an array.
//! Because of this, we can still change the elements of a constant array.




// Iterations in arrays
// forEach, map, filter, reduce, flatMap, reduceRight, every , some, from , keys , entries, with
// The forEach() method calls a function (a callback function) once for each array element.
// we have mentioned it before
// The map() method creates a new array by performing a function on each array element.
// The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
// TODO WITH map
// const numbers = [1, 2, 3];

// const doubled = numbers.map(num => [num * 2]);

// console.log(doubled); // Output: [[2], [4], [6]]
// TODO WITH flatMap
// const numbers = [1, 2, 3];

// const flattenedDoubled = numbers.flatMap(num => [num * 2]);

// console.log(flattenedDoubled); // Output: [2, 4, 6]

// filter creates a new array the elements of the original array that pass the test function

// this is best describe for reduce function
// function myFunction(total or accumlator, currentValue, currentIndex, array) {
// 	return total + value;
// }
// on every iteration the returned value assigned to total/accumlator will be passed to the next iteration
// reduce function starts from left to right, so reduceRight starts from right to left

// every checks if all elements in an array pass a test function
// it returns true or false
// some like every but it checks SOME elements passed the test function not EVERY/ALL

// The Array.keys() method returns an Array Iterator object with the keys of an array
// usually used with for...of
// and those keys would be usually the index

// Array.from creates array object from the gives values

// Array.entries like keys but not getting the keys only but the keys and values
// which both of them together called entry

// Array.with it updates the array but it returns a new array [safe method to not alter the original array]

console.log("Done with arrays")
