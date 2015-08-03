angular.module('flags.services', [])

.factory('Flags', function ($http) {
  // Your code here

  var getRandom = function () {
    return $http({
      method: 'GET',
      url: '/api/flags'
    })
    .then(function (resp) {
      console.log(resp.data);
      return resp.data;
    });
  };

  var test = function() {
    console.log('HI');
  }


  // var addLink = function (link) {
  //   return $http({
  //     method: 'POST',
  //     url: '/api/links',
  //     data: link
  //   });
  // };

  return {
    getRandom: getRandom,
    test: test
    // addLink: addLink
  };
  })