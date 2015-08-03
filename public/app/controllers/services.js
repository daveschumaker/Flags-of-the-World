angular.module('flags.services', [])

.factory('Flags', function ($http) {

  // Get a random flag from our server.
  var getRandom = function () {
    return $http({
      method: 'GET',
      url: '/api/flags'
    })
    .then(function (resp) {
      // console.log(resp.data);
      return resp.data;
    });
  };

  // Unnecessary test function
  var test = function() {
    console.log('HI');
  }

  return {
    getRandom: getRandom,
    test: test
    // addLink: addLink
  };
})
// This service only exists to pass the score between multiple controllers
// e.g., Flag Game and Game Over.
.factory('Score', function() {
  var Score = {
    totalScore: 0
  };

  // Trying to increment points and pass between controllers but not working.
  Score.point = function() {
    console.log('Point!');
    Score.totalScore++;
  }

  console.log('Total Score: ', Score.totalScore);
  return Score;
});