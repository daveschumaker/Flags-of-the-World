angular.module('flags.display', [])

.controller('FlagController', function ($scope, Flags) {
  // Your code here

  $scope.data = {
    country: null,
    flag_img: null,
  };

  $scope.getFlag = function() {
    Flags.getRandom()
      .then(function(flag) {
        $scope.data.country = flag.country;
        $scope.data.flag_img = flag.flag_img;
        console.log($scope.data);
      })
      .catch(function(error) {
        console.error(error);
      })
  }

  $scope.getFlag();

  // Get a random flag on page load.
});