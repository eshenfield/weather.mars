angular.module('marsWeather.search', [])

.controller('SearchCtrl', function ($scope, $location, Weather, Date) {
  $scope.date = "2014-10-06"
  $scope.validDate = true;
  $scope.weather = {};

  $scope.getWeatherOnDate = function() {
    var query = "terrestrial_date=" + $scope.date;
    //var query = Date.createQueryString($scope.date);
    //var dates = [];


    Weather.getWeather(query)
    .then(function(data){
      if (data.data.results.length === 0) {
        $scope.validDate = false;
      } else {
        $scope.weather = data.data.results[0];
      }
      console.log($scope.weather);
    })
    .catch(function(error) {
      console.error(error);
    });
  };

  $scope.renderWeatherView = function() {

  }


});