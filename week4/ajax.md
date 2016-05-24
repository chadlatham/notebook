#AJAX - Asynchronous JavaScript and XML
XMLHttpRequest global object in the browser used to make HTTP requests

jQuery has $.getJSON() to simplify this. It parses the output and returns a data object to a callback function. Example:

var $xhr = $.getJSON('http://www.omdbapi.com/?t=Frozen');
$xhr.done(function(data) {
  if($xhr.status !== 200) {
    return;
  }

  console.log(data);
}

$xhr object is a promise:
A promise can only succeed or fail once. It cannot succeed or fail twice, neither can it switch from success to failure or vica versa.
$xhr.done() is a success promise that takes a callback
$xhr.fail() is a failure promise that takes a callback

Failure states occur when the request response cycle fails. If the cycles completes but returns a non 200 status code, then the cycle did not fail.

## CORS - Cross Origin Resource Sharing
API Keys in the header can cause Access-Control-Allow-Origin errors.
If the header "Access-Control-Allow-Origin: * " is present, then keys in the header won't be a problem.

## Race conditions
A race condition is a term used to refer to any code that relies on some other snippet of code having completed.
