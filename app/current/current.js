angular.module('marsWeather.current', [])

.controller('CurrentCtrl', function ($scope, Weather) {
  $scope.current = {};
  $scope.dateQuery = false;
  $scope.tempFormat = "Celcius"
  
  $scope.getCurrentWeather = function() {
    Weather.getWeather()
    .then(function(data) {
      $scope.current = data.data.report;
    })
    .catch(function(err) {
      console.error(err);
    });
  };

  $scope.changeTempForm = function() {
    if ($scope.tempFormat === "Celcius"){
      $scope.tempFormat = "Fahrenheit"
    } else {
      $scope.tempFormat = "Celcius"
    }
  };

  if (!$scope.dateQuery) {
    $scope.getCurrentWeather();
  }


});



/*
abs_humidity: null
atmo_opacity: "Sunny"
ls: 344
max_temp: -1
max_temp_fahrenheit: 30.2
min_temp: -76
min_temp_fahrenheit: -104.8
pressure: 839
pressure_string: "Higher"
season: "Month 12"
sol: 990
sunrise: "2015-05-20T11:46:00Z"
sunset: "2015-05-20T23:50:00Z"
terrestrial_date: "2015-05-20"
wind_direction: "--"
wind_speed: null
*/