#Scopes
this keyword is assigned automatically depending on the context of the function call.
When called as a property of an object, this refers to the object.
When called outside an object, it refers to the calling scope.

##call and apply - methods of function objects
Functions can be invoked using call and apply to change the context of 'this'.
The call method takes a this context as well as the arguments immediately after.
Ex. func.call(null, 1, 2) sets the this variable to null before passing the params 1 and 2 to func.
The apply method converts an array into arguments but also accepts a changed this context in the same way call does.
These context changing methods allow you to hijack an objects function calls using a different context.

##Scope types:
1. Global scope
2. function scope
3. Block scope (new in ES6)

common window properties:
window.location
window.screen - useful to adjust images based on screen space

#Hoisting
All variable declarations are hoisted to the top of the function before any execution actually occurs inside the function. A combined declaration and assignment is split into its component pieces, and the declaration is hoisted but the assignment occurs inline during execution.

Common practice is to declare all variables at the top of functions excluding the variables inside for loops.

#IFFEs - Immediately Invoked Function Expressions
Create a function scope and call Immediately
IFFEs and other function invocations create closures. Parameters may be passed to the IFFE which get the state of the variable at the time the IFFE defined/invoked. Finally, the IFFE retains a reference to the context scope and the variables in that scope are not garbage collected and are available for reference until the IFFE/function completes.

Asynchronous calls create closures. When the callback is invoked, it still has access to variables that existed in the scope of the function in which the callback was defined.

Example of a closure for encapsulating the id variable:

idGenerator = function() {
  var id = 0;
  return function() {
    id += 1;
    return id;
  }
}

Example of closures being used in higher order functions to process api data in a callback:

var $xhr = $.getJSON('http://www.omdbapi.com/?s=Dinosaur');
$xhr.done(function(data) {
  if ($xhr.status !== 200) { return; }
  console.log(data.Search.map(function(elem) {
    return elem.imdbID;
  }));
});

#Higher-order functions
Most common:
Array.map(function(element, index, array){}) - returns array of same size. Function must return the transformed element.

Array.filter(function(element, index, array){}) - returns array of same or smaller size. Functions must return true or false to include in return array.

Array.reduce(function(previousValue, currentValue, currentIndex, array){}, seedValue) - returns a single answer that has been reduced by sequentially processing the array currentValues and storing the function return into previous value.
  ****** Never omit the seedValue or an empty array will result in a type error.
