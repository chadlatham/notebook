'use strict';

// 2 inputs x number of y sided die.

// output to string clearly return die, value, and total (console log);

// minimum sided is 4, roles should be >= 1

// Possibility 1: make a function that has the input of x and y that loops through the dice and generates random numbers between 1 and sided.

// Possibility 2: make an object that represents a dice with a constructor to create the sides and has a method called roll. Generate x number of dice with y sides. Call the roll method and add the totals. Store the dice in an array.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollDice(diceIn, sidesIn) {
  const dice = Number.parseInt(diceIn);
  const sides = Number.parseInt(sidesIn);

  if (dice < 1) {
    console.log('Must have at least 1 dice');

    return;
  }

  if (sides < 4) {
    console.log('Must be at least 4 sides')
    return;
  }

  let result = {
    rolls: [],
    total: 0
  };

  for (var i = 0; i < dice ; i++) {
    const roll = getRandomInt(1, sides);

    result.total += roll;
    result.rolls[i] = roll;
  }

  return result;
}

const res = rollDice(8, 10);

console.log(res);

for (var die = 0; die < res.rolls.length; die++) {
  console.log(`Die ${die + 1}: ${res.rolls[die]}`);
}

console.log(`Total: ${res.total}`);


// Instructor examples
function rollAll(num, sides) {
  let rolls = Array(num).fill().map(rollOne(sides))
  let total = rolls.reduce(accumulate)

  return { rolls, total}
}

function accumulate(num1, num2) { return num1 + num2 }

function rollOne(sides) {
  return () => Math.ceil(Math.random() * sides)
}
