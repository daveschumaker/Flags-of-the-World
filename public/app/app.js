angular.module('app', ['ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $routeProvider
    .when('/', {
      templateUrl: '/partials/main',
      controller: 'mainController'
    })
});

angular.module('app').controller('mainController', function($scope) {
  $scope.myVar = 'Hello, Angular!';
});