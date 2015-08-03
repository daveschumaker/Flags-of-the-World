angular.module('flags.gameover', [])

.controller('GameOverController', function ($scope, $location, Flags, Score) {
  $scope.getScore = function() {
    return Score.totalScore;
  }

  $scope.newGame = function() {
    $location.path('/');
  }
});