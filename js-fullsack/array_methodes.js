'use strict';

// -----------------  at()  ---------------------
// 
const array1 = [5, 12, 8, 130, 44];
let index = 2;
console.log(`An index of ${index} returns ${array1.at(index)}`);
index = -2;
console.log(`An index of ${index} returns ${array1.at(index)}`);
// Our array with items
const cart = ["apple", "banana", "pear"];
// A function which returns the last item of a given array
function returnLast(arr) {
    return arr.at(-1);
  }
// Get the last item of our array 'cart'
const item1 = returnLast(cart);
console.log(item1); // 'pear'

const arrayLike = {
    length: 2,
    0: "a",
    1: "b",
    2: "c", // ignored by at() since length is 2
  };
  console.log(Array.prototype.at.call(arrayLike, 0)); // "a"
  console.log(Array.prototype.at.call(arrayLike, 2)); // undefined

// -----------------  concat()()  ---------------------
// 

/*

concat()
concat(valeur0)
concat(valeur0, valeur1)
concat(valeur0, valeur1, ... , valeurN)


*/
const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// results in [[1], 2, [3]]
console.log(Array.prototype.concat.call({}, 1, 2, 3));
let arrayLike1 = {
    [Symbol.isConcatSpreadable]: true,
    length: 2,
    0: 1,
    1: 2,
    2: 99, // ignored by concat() since length is 2
  };
  console.log(Array.prototype.concat.call(arrayLike, 3, 4)); // [1, 2, 3, 4]
  console.log(arrayLike1); // [1, 2, 3, 4]
