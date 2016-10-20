'use strict'

// 4 different digits from 1-9 are required to open a safe.
// Exactly 2 digits are prime.
// The sum of the 1st and 3rd digits is even.
// The 1st and 4th igits differ by 2.
// The 3rd digit is at least 3x the 2nd.
// The sum of the 3rd and 4th digits is at least 15.

// Answer 5197

function calc(number) {
  if (!different(number)) {
    return false;
  }

  if (!twoPrime(number)) {
    return false;
  }

  if (!ThirdFourthEven(number)) {
    return false;
  }

  return true;
}

function twoPrime(input) {
  const arrPrimes = [2, 3, 5, 7]
  const arr = input.toString().split('');
  let count = 0;

  for (const a of arr) {
    if (arrPrimes.indexOf(Number.parseInt(a)) >= 0) {
      count += 1;
    }
  }

  return count === 2;
}

function different(input) {
  const arr = input.toString().split('');


}

console.log(calc());
