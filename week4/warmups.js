var rotate = function(arr, pos) {
  // Rotate the elements in an array 'pos' positions to the right
  var result = [];

  for (var index = 0; index < arr.length; index++) {
    console.log(arr[index]);
    var newIndex = (index + pos) % arr.length;
    result[newIndex] = arr[index];
  }

  return result;
}

var rotate2 = function(arr, pos) {
  return arr.map((current, index, array) => {
    return array[(index + arr.length - pos % arr.length) % arr.length];
  })
}

// Example:
// rotate([1, 2, 3], 0);   // [1, 2, 3]
// rotate([1, 2, 3], 1);   // [3, 1, 2]
// rotate([1, 2, 3], 2);   // [2, 3, 1]
// rotate([1, 2, 3], 3);   // [1, 2, 3]

var sameDigits = function(a, b) {
  var numa = parseInt(a.toString().split('').sort().join(''),10);
  var numb = parseInt(b.toString().split('').sort().join(''),10);
  return numa === numb;
}

console.log(sameDigits(1230,00321));
//
// Write a function named `map` that takes two arguments.
//   `arr` (array)
//   `callback` (function)
//
// Return a ​_new_​ array where each element of `arr` is transformed by the `callback` function and the result is pushed into the new array.
//
// For example:
//
// ```var rounded = map([0.01, 2, 9.89, Math.PI], function(num) {
//   return Math.round(num);
// });
//
// console.log(rounded); // [0, 2, 10, 3]

var map = function(array, callback) {
  var result = [];
  var element;
  for (var index = 0; index < array.length; index++) {
    element = array[index];
    result.push(callback(element, index, array));
  }
  return result;
}

var round = function(num) {
  return Math.round(num);
};

console.log(map([0.01, 2, 9.89, Math.PI], round));
