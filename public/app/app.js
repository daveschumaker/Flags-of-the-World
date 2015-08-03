angular.module('flags', [
  'flags.display',
  'flags.gameover',
  'flags.services',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/views/flags.html',
      controller: 'FlagController',
    })
    .when('/gameover', {
      templateUrl: 'app/views/gameover.html',
      controller: 'GameOverController',
    })
    .otherwise({
      redirectTo: '/'
    });
})