'use strict';
// Array of numbers, returns sums of each consecutive pair
function addConsecutive(arr) {
  const results = [];

  if (arr.length === 1) {
    results.push(arr[0]);
  }

  for (let i = 0; i < arr.length - 1; i++) {
    results.push(arr[i] + arr[i + 1]);
  }

  return results;
}



console.log(addConsecutive([1, 4, 8])); // [5, 12]
console.log(addConsecutive([])); // []
console.log(addConsecutive([2])); // [2]
