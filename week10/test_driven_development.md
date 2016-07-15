#JavaScript Testing and Test Driven Development.
##Explain the benefits of testing.
- Testing identifies bugs in our code.
- Testing continues to test to ensure no new bugs get introduced (called a regression).
- Tests enforce better code design to be testable.
- They provide better documentation on code.
- Testing reduces fear.
- It overall takes less to write correct code when testing. Specifically, testing reduce the cost of change in your code.

##Describe the different types of tests.
The most common type of tests amongst software developers are unit tests. Unit tests are tests that isolate specific pieces of code. These are particularly helpful during development because when a unit test fails, we can isolate the area of code that where the bug is.

Broader in scope, integration tests make no attempt to understand the inner workings of a function (also called black box testing). Here, integration tests are meant to test the overall functionality of a function, module, or API. They can overlap with unit tests, but oftentimes, integration tests work on larger pieces of code.

##Write tests using Mocha and Chai and additional testing libraries including.

npm install -D mocha chai - (Mocha is testing harness, Chai is assertion lib)
Example:
----------- index.js ------------------------
'use strict';

const toSentence = function(word1, word2, word3, oxfordComma) {
  if (oxfordComma) {
    return `${word1}, ${word2}, and ${word3}.`;
  }
  return `${word1}, ${word2} and ${word3}.`;
};

module.exports = { toSentence };

------------ test.js ------------------------
'use strict';

const assert = require('chai').assert;
const {suite, test} = require('mocha');

const {toSentence} = require('../index');

suite('toSentence function', () => {
  test('converts to a sentence without oxford comma', () => {
    assert.strictEqual(toSentence('', '', '', false), ',  and .');
    assert.strictEqual(toSentence('Huey', 'Dewey', 'Louie', false), 'Huey, Dewey and Louie.');
  });

  test('converts to a sentence with oxford comma', () => {
    assert.strictEqual(toSentence('', '', '', true), ', , and .');
    assert.strictEqual(toSentence('Huey', 'Dewey', 'Louie', true), 'Huey, Dewey, and Louie.');
  });
});

Best practice is to have one test suite per test file. Place multiple .js files in the test directory and Mocha will execute them all one by one.

- Nock - The Nock library intercepts requests and produces expected responses.
npm install --save-dev nock


- Supertest


##Explain what is Test Driven Development.
The process:
Given a requirement,
1. Add a test.
2. Run all tests to ensure new test fails.
3. Write the code. Refactor if needed.
4. Run tests.
and repeat.

##Practice Test Driven Development by writing tests then writing code.
Example with environment setup......
suite('editor module', () => {
  before(() => {
    // Wipe the db and migrate / seed
  });

  beforeEach(() => {
    // to be run before each test
  });

  beforeEach(() => {
    // to be run after each test
  });

  after(() => {
    // Disconnect from db? Redirect output or save to file?
  });

  test('test_name1', () => {
    // individual test.....
  });

  test('test_name2', () => {
    // individual test.....
  });

  test('test_name_etc', () => {
    // individual test.....
  });
