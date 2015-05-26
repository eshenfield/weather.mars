angular.module('marsWeather.solimages', [])

.controller('imageCtrl', function($scope, $rootScope, Weather) {
  $scope.images = true;
  $scope.picSrc = '../images/default_rover.jpg'

  $scope.getImage = function() {
    console.log("getting image for: ", $scope.sol);
    Weather.getImages($scope.sol)
    .then(function(data) {
      $scope.error = false;
      if (data.data.images.length === 0){
        // Sol 99
        $scope.images = false;
      } else {
        var randomImg = Math.floor(Math.random() * data.data.images.length);
        $scope.picSrc = data.data.images[randomImg]['urlList'];
        $scope.images = true;
      }
    })
    .catch(function(err) {
      $scope.error = true;
      console.error(err);
    })
  };
});