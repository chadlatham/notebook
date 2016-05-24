// Morning Warmup 5/18/16 - Sum all inclusive numbers between two inputs.
// var sumRange = function (num1, num2) {
//
// }


// console.log(sumRange(10,20));
// Interesting solution involves an algorithm where the sum of all numbers from 0 to a positive number is equal to the equation (n * (n + 1)) / 2
// Figure out the correct correct code.


var experiment = "According to a research team at Cambridge University, it doesn't matter in what order the letters in a word are, the only important thing is that the first and last letter be in the right place. The rest can be a total mess and you can still read it without a problem. This is because the human mind does not read every letter by itself, but the word as a whole. Such a condition is appropriately called Typoglycemia.";

var scramble = function(input) {
  // Separate the input string into an array of words
  var splitInput = input.split(' ');
  var scrambled = [];

  for (var word of splitInput) {
    // Create an offset for words that end in a comma or period
    var offset = 0;
    if (word.match(/(\.|,)/g) !== null) {
      offset = 1;
    }
    // Store all words 3 letters or less (4 with punct.) without modification
    if (word.length <= 3+offset) {
      scrambled.push(word);
      continue;
    }
    // Split each word into its relavent letters to scramble
    var toScramble = word.split('').slice(1,word.length-1-offset);
    // Store the array length to iterate over
    var length = toScramble.length;
    // Store the first letter
    var newWord = word[0];
    // Loop through the letters to scramble and randomly append to newWord
    for (var letters = 0; letters < length; letters++) {
      // Pull a random index
      var randomIndex = Math.floor(Math.random() * toScramble.length);
      // Append the random letter to newWord
      newWord += toScramble[randomIndex];
      // Remove the random index from the toScramble array
      toScramble.splice(randomIndex,1);
    }
    // Append the final letter (and optional punctuation) to newWord
    newWord += word.substr(word.length-1-offset);
    // Push to scrambled word to the scrambled array
    scrambled.push(newWord);
  }
  // Joing the scrambled array into a string separated by spaces
  return scrambled.join(' ');
};

console.log(scramble(experiment));
