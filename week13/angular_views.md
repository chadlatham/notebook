#Angular Views
##Explain what Angular expressions are.
Javascript-like snippets that are usually placed in bindings like "{{ expression }}".

##Explain what an Angular directive is.
It describes behavior where Angular will manipulate or transform the DOM.

##Use Angular's built-in directives, specifically:
  - ng-repeat - Used to loop through arrays or objects. Use track by $index to handle duplicates.

  - ng-model - The ngModel directive binds an input, select, textarea (or custom form control) to a property on the scope using NgModelController, which is created and exposed by this directive.

  - ng-if -

  - ng-hide - changes display to none if condition is true

  - ng-show - removes display none if condition is true
      ex: <div ng-show="3 + 4 === 8">Show ME!</div>

  - ng-class - adds a class when the expression (must be object that includes class name as properry)
      ex: <div ng-class="{highlight: 4 + 4 === 8, fail: 4 + 4 === 10}"> 4 + 4 = 8</div>

  - ng-src - Necessary to prevent original url loading in DOM.
  - ng-href - Necessary to prevent original url loading in DOM.


##Explain what an Angular filter is.
Filters are simply bits of code that format data before displaying it. They do not modify the underlying variable - only the view.

##Use Angular's built-in filters, specifically:
  - currency - converts a number into a currency value
  - date - converts a string into a datetime or UNIX timestamp
  - filter - returns a subset of items from an array
  - json - converts a JavaScript object to JSON
  - limitTo - returns a new string or array that contains only a limited number of elements
  - lowercase - converts a string to lowercase
  - uppercase - converts a string to uppercase
  - number - formats a number as text
  - orderBy - orders an array of objects by specific predicate

##Use Angular modules.
Each module gets its own script tag following the angular and app script tags.


##Build a custom Angular filter.
A function that returns a function with one parameter attached to the filter property of the app.

Ex.
```(function() {
  'use strict';

  const app = angular.module('cameraApp')

  app.filter('stars', () => (input) => '*'.repeat(input));
})();```
