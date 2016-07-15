#Promises
##Explain what a promise is.
It is async io that allows non-dependent code to continue to execute and dependent code to wait for the io to complete.

A promise is an object that represents an asynchronous operation that hasn't completed yet, but will in the future. As an object, a promise has the following three possible states.

A promise is like a candy wrapper. The delicious candy you want is on the inside or potentially a terrible tasting candy. When you unwrap it, you find out which candy is on the inside.

1. Pending
2. Fulfilled
3. Rejected

As you can see, the role of the executor callback function is to start an asynchronous I/O operation. If the operation generates an error, the callback invokes the reject() function, passing along the error. Invoking the reject() function permanently changes the state of the promise to rejected.

If the operating doesn't generate an error, the callback invokes the resolve() function, passing along the results of the operation. Invoking the resolve() function with a value other than another promise permanently changes the state of the promise to fulfilled.

NOTE: Believe it or not, a promise can be resolved with the state of another promise. It's a sophisticated technique which you'll practice shortly. Never the less, this is why the function is called resolve() and not fulfill().

A promise is unresolved while in the pending state. A promised is resolved when it's state is changed to either fulfilled or rejected. Once a promise is resolved, it's state can never change.

If a promise is fulfilled, the results of the asynchronous I/O operation are ready. To access them, you use the then() method to register a callback. As soon as promise is fulfilled, the registered callbacks will be invoked with the operations results.

On the other hand, if a promise is rejected, the error of the asynchronous I/O operation is ready. To access it, you use the catch() method to register a callback. As soon as promise is rejected, the registered callbacks will be invoked with the error.



##Explain why a promise is important.
The main benefit of a promise is its ability to separate the success handling logic from the error handling logic.

When .then or .catch are chained, they then return a new promise themselves.

###Chaining order is synchronous, however, a return or throw will control the flow from one chain to the next. If you return from a .then() or .catch(), the next promise will be fulfilled and only the next .next() in the chain will be called. If you throw then the next .catch() promise will be because of the rejected state.

The next promise in a promise chain receives that state of the prior promise upon fulfilled or rejected.

You must return a value to be used as the argument for the 2nd .then() in a chain.

npm install --save request - for http requests
npm install --save request-promise - for promise wrapped http requests

A nested promise will cause blocking of subsequently chained promises until is resolves or is rejected.

###Main point!!!!!!!
Returning a value, returning undefined (omitting return), or returning a fulfilled promise will cause the next fullfilled (.then) promise in the chain to execute.

Calling throw or returning a rejected callback will cause the next rejected (.catch) promise in the chain to execute.

To chain promises of different types together, return the next promise from the one above it then call .then() on then new promise.

##Send an HTTP request from Node.js with a promise.

Example of nested request objects.
'use strict';

const request = require('request');

const getJSON = function(url) {
  const promise = new Promise((resolve, reject) => {
    request.get(url, (err, res, body) => {
      if (err) {
        return reject(err);
      }

      resolve(JSON.parse(body));
    });
  });

  return promise;
};

getJSON('http://www.omdbapi.com/?s=Captain%20America')
  .then((body) => {
    return getJSON(`http://www.omdbapi.com/?i=${body.Search[0].imdbID}`);
  })
  .then((body) => {
    console.log(body);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });


Example using the request-promise library

var rp = require('request-promise');

rp('http://www.omdbapi.com/?s=Captain%20America')
    .then(function (htmlString) {
        console.log(JSON.parse(htmlString));
    })
    .catch(function (err) {
        console.error(err);
        process.exit(1);
    });
