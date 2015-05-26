angular.module('marsWeather.current', [])

.controller('CurrentCtrl', function ($scope, $rootScope, Weather, Date) {
  $rootScope.current = {};
  $rootScope.tempFormat = "Celcius"
  
  $scope.getCurrentWeather = function() {
    Weather.getWeather()
    .then(function(data) {
      $rootScope.current = data.data.report;
      $scope.formatDates();
    })
    .catch(function(err) {
      console.error(err);
    });
  };

  $scope.getCurrentWeather();    

  $rootScope.toggleTempForm = function() {
    if ($rootScope.tempFormat === "Celcius"){
      $rootScope.tempFormat = "Fahrenheit"
    } else {
      $rootScope.tempFormat = "Celcius"
    }
  };

  $rootScope.formatDates = function() {
    $rootScope.current.sunrise = Date.parseDate($rootScope.current.sunrise, true);
    $rootScope.current.sunset = Date.parseDate($rootScope.current.sunset, true);
    $rootScope.current.terrestrial_date = Date.parseDate($rootScope.current.terrestrial_date, false);
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