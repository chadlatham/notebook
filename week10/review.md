#Review of Week 10
##Tuesday - Promises
An object that represents asnyc io.
Promises have 3 states:
1. Pending
2. Fulfilled
3. Rejected
They are chainable. .then() and .catch() also return promises. If you return a promise, you can chain .then's and .catch's together in a synchronous fashion.
Returning will resolve to the next .then() throw will go to catch().
Separates how you handle success and error cases.
Avoids infinite horizontal indentation - callback hell.
Native to ES6 and standard implementation in the industry.
request to send http requests from node. request-promise is the promisified ver.
They short circuit upon rejected to the first catch.

##Wednesday - Test Driven Development
Saves overall time developing on larger projects
Potential to make you a better programmer.
Helps you frame how the program should operate. Enforces better code design.
Prevents the costs of regression and bug analysis.
3 types of tests - unit tests (micro)(white box tests), integration tests (macro)(black box tests), compatibility tests (different devices).
Mocha (testing harness) and Chai (assertion library)
You group tests together into suites. Many different types of checks in chai. When it fails, it throws an error.
For async tests, you add a (done) parameter to the test callback.
Test driven development is writing tests first then writing your code then test.
1. Create tests first
2. Check that it fails
3. Write code (refactor if needed)
4. run tests until success then repeat process.
Benefits: Avoids biased testing. Prevents feature creep. Tests are now a req.

##Thursday - Server Side Validation
Checking input from the client.
NEVER TRUST THE CLIENT!!!!
Establishes a strong contract.
Use joi (schema package) and express-validation (validation middleware that consumes the schema)
express-validation will validate:
req.body
req.query
req.params
req.header
req.cookies
