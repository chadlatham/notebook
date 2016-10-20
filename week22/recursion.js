'use strict';

// // Simple yet elegant recursion example.
// let nodes = {
//   name: 'A',
//   children: [
//     { name: 'B', children: [
//         { name: 'D', children: [] },
//         { name: 'E', children: [] }
//       ]
//     },
//     { name: 'C', children: [
//         { name: 'F', children: [] },
//         { name: 'G', children: [{ name: 'H', children: [] }] }
//       ]
//     }
//   ]
// }
//
// function printLetters(node) {
//   console.log(node.name)
//   node.children.forEach(childNode => {
//     printLetters(childNode)
//   })
// }
//
// printLetters(nodes);

// // Iterative factorial
// function factorial(n) {
//   let result = n;
//   while (n > 1) {
//     result *= --n;
//   }
//
//   return result;
// }
//
// console.log(factorial(5));
//
// // Recursive factorial
// function recursiveFactorial(n) {
//   return (n === 1) ? n: n * factorial(n - 1);
// }
//
// console.log(recursiveFactorial(5));

function bottles(n) {
  if (n === 1) {
    return `\n${n} bottles of beer on the wall`;
  } else {
    return `\n${n} bottles of beer on the wall` + bottles(n - 1);
  }
}

function fib(n) {
  if (n === 0) {
    return 0;
  }

}

console.log(bottles(15));
