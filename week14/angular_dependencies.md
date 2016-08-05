#Angular Dependencies
##Explain what dependency injection is.
Making a serverice available to a directive, controller, filter, application, or another service.

##Explain how Angular handles dependency injection.
3 ways:
  - Implicit annotation
  - Inline array annotation
  - $inject property annotation

Ex. $inject property based injection is the preferred method!
app.controller('SampleController', SampleController);

SampleController.$inject = ['$scope', '$rootScope'];

function SampleController($scope, $rootScope) {
  $scope.val = "some value from $scope";
  $rootScope.val = "some value from $rootScope";
});


##Use built-in Angular services.
Ex.
app.controller('TodoListCtrl', TodoListCtrl);
TodoListCtrl.$inject = ['$http'];

function TodoListCtrl($http) {


##Make AJAX requests using $http.
Ex: See above.


##Explain what client-side routing is.
Client side routing is the same as server side routing, but in the browser.
Client side routing is for presentation purposes and redirects the browser to a local view template instead of a server view template. This frees the server to be focused on serving data instead of views. Client side routing takes precedence over server side routing - the client looks to the local router first. The local views load at the browser refresh rate instead of the pages being loaded (refreshed) from file or http request.

##Use ngRoute for client-side routing in a single page application.
