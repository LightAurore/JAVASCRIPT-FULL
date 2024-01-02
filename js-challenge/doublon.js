"use strict";

function uniqueValues(arr) {
  const myAr = new Set(arr);
  const array = arr;
  for (let i = 0; i < arr.length; i++) {
    array.shift(arr[i]);
    array.includes(arr[i]) ? myAr.delete(arr[i]) : "";
    array.push(arr[i]);
  }
  return [...myAr];
}

//   for (let i = 0; i < arr.length; i++) {
//     array.shift(arr[i]);
//     // if (array.includes(arr[i])) {
//     //   myAr.delete(arr[i]);
//     // }
//     array.includes(arr[i]) ? myAr.delete(arr[i]) : "";
//     array.push(arr[i]);
//   }

// tests à passer
uniqueValues([1, 1, 2, 2, 3, 3]); // []
uniqueValues(["pomme", "poire", "poire"]); // ["pomme"]
uniqueValues(["🎈", "🧪", "🐶", "🧪"]); // ["🎈","🐶"]
uniqueValues([1, 1, 1]); // []
