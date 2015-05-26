angular.module('marsWeather.solimages', [])

.controller('imageCtrl', function($scope, $rootScope, Weather) {
  $scope.images = true;

  $scope.getImage = function() {
    console.log("getting image for: ", $scope.sol);
    Weather.getImages($scope.sol)
    .then(function(data) {
      if (data.data.images.length === 0){
        $scope.images = false;
      } else {
        var randomImg = Math.floor(Math.random() * data.data.images.length);
        $scope.picSrc = data.data.images[randomImg]['urlList'];
        $scope.images = true;
      }
    })
    .catch(function(err) {
      console.error(err);
    })
  };
});