angular.module('marsWeather.current', [])

.controller('CurrentCtrl', function ($scope, Weather, Date) {
  $scope.current = {};
  $scope.tempFormat = "Celcius"
  
  $scope.getCurrentWeather = function() {
    Weather.getWeather()
    .then(function(data) {
      $scope.current = data.data.report;
      $scope.formatDates();
    })
    .catch(function(err) {
      console.error(err);
    });
  };

  $scope.getCurrentWeather();

  $scope.toggleTempForm = function() {
    if ($scope.tempFormat === "Celcius"){
      $scope.tempFormat = "Fahrenheit"
    } else {
      $scope.tempFormat = "Celcius"
    }
  };

  $scope.formatDates = function() {
    console.log("Sunrise: ", $scope.current.sunrise)
    $scope.current.sunrise = Date.parseDate($scope.current.sunrise, true);
    $scope.current.sunset = Date.parseDate($scope.current.sunset, true);
    $scope.current.terrestrial_date = Date.parseDate($scope.current.terrestrial_date, false);
  };

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