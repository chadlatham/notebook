#Unit Testing
##Explain what an automated test is.
An automated test is software that compares the actual outcome of a separate program with an expected outcome.

Ensure one part of a use case works as a developer expects	           Unit test
Ensure multiple parts of a use case work as a developer expects	Integration test
Ensure an entire use case works as a developer expects	         End-to-end test
Ensure an entire use case works as a user expects	               Acceptance test
Ensures cross platform or browser works as expected           Compatibility test

##Explain why automated tests are important.
Automated tests can be helpful for projects because, as it gets bigger, keeping the entire codebase in your head gets harder. As a result, it's easy to accidentally slip bugs into your program. And fixing those bugs takes time away feature development. On a large project that doesn't use automated tests, it's common for your productivity to slow and possibly grind to a stop.

Because repeatedly executing manual tests is time consuming and error prone.
You hard code the expected value into the test.

##Explain what test-driven development is.
The process:
  1. Add a test.
  2. Run the test to ensure it fails.
  3. Write the code to make the test pass.
  4. Run the test to ensure it passes.
  5. Refactor the code to be more maintainable or performant.
  6. Repeat.

##Explain why test-driven development is important.
Test-driven development process has many benefits:
* When faced with a large and daunting piece of work ahead writing the tests will get you moving quickly.
* You are forced to have tests, which have the benefits described above.
* Your tests give you confidence that you've done enough for now and can stop tweaking and move on to the next thing.
* Tests help you really understand the design of the code you are working on. Instead of writing code to do something, you are starting by outlining all the conditions you are subjecting the code to and what outputs you'd expect from that.
* Overall, speed of development increases.

##Use test-driven development to write unit tests.

package.json scripts:
"test": "mocha",
<!-- "coverage": "istanbul cover _mocha -- -R spec" -->

Use istanbul for code coverage tests.
