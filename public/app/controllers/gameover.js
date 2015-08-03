angular.module('flags.gameover', [])

.controller('GameOverController', function ($scope, $location) {
  $scope.newGame = function() {
    $location.path('/');
  }
});