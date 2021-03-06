Write a function named `filter` that takes two arguments.
  `arr` (array)
  `predicate` (function)

Iterate over the elements of `arr` and return a ​_new_​ array of all elements the `predicate` function returns truthy for. The `predicate` function is invoked with one argument.

 `element` (anything)

For example:

var users = [
  { name: 'Katie', points: 240 },
  { name: 'Ralph', points: 130 }
];

var winners = filter(users, function(element) {
  return element.points >= 200;
});


function filter(arr, predicate) {
  var result =[];
  for (var i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(winners); // [{ name: 'Katie', points: 240 }]

// Write a function named `every` that takes two arguments.
//   `arr` (array)
//   `predicate` (function)
//
// Return `true` if the `predicate` function returns ​*truthy*​ for all elements of `arr`, otherwise return `false`. The `predicate` function is invoked with one argument.
//
//  `element` (anything)
//

function every (arr, predicate) {
  for (var elem of arr) {
    if (!predicate(elem)) { return false; }
  }
  return true;
}
// For example:
var result = every([1, 2, 3], function(element) {
  return element % 2 === 0;
});


console.log(result); // false

result = every([2, 4, 6], function(element) {
  return element % 2 === 0;
});

console.log(result); // true
