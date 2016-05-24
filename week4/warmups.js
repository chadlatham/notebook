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
