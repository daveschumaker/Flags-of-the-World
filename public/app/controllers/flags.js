angular.module('flags.display', [])

.controller('FlagController', function ($scope, Flags) {

  // Hold the data we receive from server.
  $scope.data = {
    country: null,
    flag_img: null,
    answers: null
  };

  // Use services module to interface with server
  // and send an API request to get a random flag.
  $scope.getFlag = function() {
    Flags.getRandom()
      .then(function(flag) {
        $scope.data.country = flag.country;
        $scope.data.flag_img = flag.flag_img;
        $scope.data.answers = flag.answers;
        console.log($scope.data);
      })
      .catch(function(error) {
        console.error(error);
      })
  }

  $scope.checkAnswer = function(answer) {
    if (answer === $scope.data.country) {
      alert('YOU WIN!');
    } else {
      alert('WRRRROOOOOOONNNG');
    }
  }

  // Immediately invoke the function on page load.
  $scope.getFlag();
});