angular.module('flags.services', [])

.factory('Flags', function ($http) {
  // Your code here

  var getRandom = function () {
    return $http({
      method: 'GET',
      url: '/api/links'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  // var addLink = function (link) {
  //   return $http({
  //     method: 'POST',
  //     url: '/api/links',
  //     data: link
  //   });
  // };

  return {
    getRanomd: getRandom
    // addLink: addLink
  };
  })