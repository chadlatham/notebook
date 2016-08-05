#Monday
##Dependency Injection - Giving an object its instance variables.
In node.js terms, requiring pieces of code into controllers and services.
$http, $scope, $routeParams, $locations, $rootScope, $cookies, etc...

##Client Side Routing
Changing the view
no reloading of page from server
ngRoute
inject into app
ng-view on index page
include the script
app.config(($routeProvider) => {
  $routeProvider.when('path', {
    templateUrl: path.html,
    controller: PathCtrl,
    controllerAs: pathCtrl
    })
    .otherwise({ redirectTo: '/' });
  });

#Tuesday
##Services
1. Service - uses this and provides a constructor function.
2. Factory - returns an object.
3. Provider - created for us and not often used.
Lazy loaded, contains business logic, singleton, shared info.

#Wednesday
##Authentication
JWT - JSON Web Token
Very compact
3 parts:
1. Header - algorithm, JWT
2. Payload - claims (body), reserved claims - exp(expiration), iss(issuer); added info like userId, userName, userPref, etc...
3. Signature - hashed header and payload with secret key.

package we used: jsonwebtoken
alternate easier package per Ryan express-jwt

methods on jsonwebtoken - verify, sign
for browser store in cookie and secure with http only / secure for production env.
store secret_key in environment variable using .env middleware and .env file or Heroku environment variable.

for server - server communication. Write to header; authorization, bearer, JWT

#Thursday
##Custom directives - Where you write code that manipulates the DOM.
Marker on a DOM element. (Element or Attribute) don't use Class or Comment
adds modularity and functionality.
app.directive('name', () => {
  return {
    templateUrl: 'template.html',
    scope: { // mapping object
      nameInDirective: '=nameInAttribute',
    };
  };
});

prefix directives with something that doesn't cause name collision.
Using isolate scope creates loose coupling between the directive and the controller in which it is consumed.
