angular.module('flags.display', [])

.controller('FlagController', function ($scope, $location, Flags) {

  // Hold the data we receive from server.
  $scope.data = {
    score: 0,
    round: 1,
    playedCountries: [],
    country: null,
    flag_img: null,
    answers: null
  };

  // Use services module to interface with server
  // and send an API request to get a random flag.
  $scope.getFlag = function() {
    Flags.getRandom()
      .then(function(flag) {
        if ($scope.data.playedCountries.indexOf(flag.country) === -1) {
          $scope.data.playedCountries.push(flag.country);
          $scope.data.country = flag.country;
          $scope.data.flag_img = flag.flag_img;
          $scope.data.answers = flag.answers;
        } else {
          // We already played this country... get a new country.
          $scope.getFlag();
        }

        // console.log($scope.data);
      })
      .catch(function(error) {
        console.error(error);
      })
  }

  $scope.checkAnswer = function(answer) {
    if (answer === $scope.data.country) {
      alert('YOU WIN!');
      $scope.data.score++;
      $scope.data.round++;
    } else {
      alert('WRRRROOOOOOONNNG');
      $scope.data.round++;
    }
    // No matter what happens, let's retrieve a new flag.
    console.log('Played Countries', $scope.data.playedCountries);
    console.log('Score', $scope.data.score);
    console.log('Round', $scope.data.round);
    if ($scope.data.round > 10) {
      // TODO: Fix this routing
      //window.location = "#/gameover";
      $location.path('/gameover');
    } else {
      $scope.getFlag();
    }
  }

  // Immediately invoke the function on page load.
  $scope.getFlag();
});