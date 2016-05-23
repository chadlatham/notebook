// Morning Warmup 5/18/16 - Sum all inclusive numbers between two inputs.
var sumRange = function (num1, num2) {

}


console.log(sumRange(10,20));
// Interesting solution involves an algorithm where the sum of all numbers from 0 to a positive number is equal to the equation (n * (n + 1)) / 2
// Figure out the correct correct code.


var experiment = "According to a research team at Cambridge University, it doesn't matter in what order the letters in a word are, the only important thing is that the first and last letter be in the right place. The rest can be a total mess and you can still read it without a problem. This is because the human mind does not read every letter by itself, but the word as a whole. Such a condition is appropriately called Typoglycemia.";

var scramble = function(input) {
  var splitInput = input.split(' ');
  var scrambled = [];

  for (var word of splitInput) {
    if (word.length <= 3) {
      scrambled.push(word);
    } else {
      var offset = 0;
      if (word.match(/(\.|,)/g) !== null) {
        offset = 1;
      }
      var toScramble = word.split('').slice(1,word.length-1-offset);
      // console.log(toScramble);
      var length = toScramble.length;
      var newWord = word[0];
      for (var letters = 0; letters < length; letters++) {
        var randomIndex = Math.floor(Math.random() * toScramble.length);
        newWord += toScramble[randomIndex];
        toScramble = toScramble.slice(0, randomIndex).concat(toScramble.slice(randomIndex +1,toScramble.length))
        // console.log(toScramble);
      }
      newWord += word.substr(word.length-1-offset);
      scrambled.push(newWord);
      // console.log(newWord);
    }
  }
  return scrambled.join(' ');
};

console.log(scramble(experiment));
