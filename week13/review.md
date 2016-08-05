#Monday
##Client Side Framework
  - Angular is one (knockout, Ember, React)
  - They are opinionated
  - Enforce you to do things their way
  - Provide code reuse
  - default behavior
  - Can override and extend
Two-way data binding
Designed for testing
Modules on the client side
Form validations
M-V-VM Provides separation of concerns
Directives, filters
ng-init - to init a variable - much better done in a controller
ng-bind - same as curlys
ng-model - used on inputs to create part of the two way data binding
ng-app - creates the app for all modules to tie into

#Tuesday
##Angular Expressions
  - JavaScriptish
  - Variables - boolean, string
  - Function calls
  - Math
  - Objects, arrays, and some propeties
  - No loops or conditionals - done with directives ng-repeat and ng-if

##Directives
  - Extend HTML adding functionality
  - 4 ways to apply directives: attributes, classes, comments, tags
  - ng-repeat
  - ng-click
  - ng-hide - sets display to none.
  - ng-show - sets display to none.
  - ng-if - primary difference from ng-show or ng-hide is that ng-if removes the element from the DOM conditionally rather than just hiding it.
  - ng-model - takes in a variable reference and binds the value of the input the ng-model is attached to to the variable.

##Filters
  - Take data and format it inside an {{ interpolation }}.
  - Does not change the underlying vale of the data.
  - currency
  - date
  - orderBy
  - Number
  - filter - reducing the set of items in an array

##Angular Modules
  - to create: angular.module('moduleName', []);
  - to retrieve: angular.module('moduleName');

##Custom Filter
  - to create: const app = angular.module('moduleName');
              app.filter('filterName', function() {
                return function(input) {
                  return input.filterThisShit!!!;
                };
              });

#Wednesday
##Controllers
  - Connects view with model(the data)
  - Separates concerns
  - Keeps complex logic out of the view
  - Code is readable
  - ng-controller="Name as instance"
  - to create: app.controller('ControllerNameCtrl', function() {
      this.variableName
      this.functionName = () => {
      }; // use arrows to maintain context and avoid const that = this;
    });

#Thursday
jQuery - imperative - perform operations
Angular - declarative - wiring up
Form validation:
  - ng-valid    - $valid
  - ng-invalid  - $invalid
  - ng-pristine - $pristine
  - ng-dirty    - $dirty
  - ng-touched  - $touched
