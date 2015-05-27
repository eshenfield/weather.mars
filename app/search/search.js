angular.module('marsWeather.search', [])

.controller('SearchCtrl', function ($scope, $rootScope, $location, Weather, Date) {
  //$scope.date = "2014-10-06"
  $scope.validDate = true;

  $scope.getWeatherOnDate = function() {
    var query = "terrestrial_date=" + $scope.date;
    //var query = Date.createQueryString($scope.date);
    //var dates = [];

    Weather.getWeather(query)
    .then(function(data){
      if (data.data.results.length === 0) {
        $scope.validDate = false;
      } else {
        $scope.validDate = true;
        $rootScope.current = data.data.results[0];
        $rootScope.formatDates();
        $location.path('/search-view');
      }
    })
    .catch(function(error) {
      console.error(error);
    });
  };

  $rootScope.formatDates = function() {
    $rootScope.current.avg_tempF = ($rootScope.current.max_temp_fahrenheit + $rootScope.current.min_temp_fahrenheit) / 2
    $rootScope.current.avg_tempC = ($rootScope.current.max_temp + $rootScope.current.min_temp) / 2
    $rootScope.current.sunrise = Date.parseDate($rootScope.current.sunrise, true);
    $rootScope.current.sunset = Date.parseDate($rootScope.current.sunset, true);
    $rootScope.current.terrestrial_date = Date.parseDate($rootScope.current.terrestrial_date, false);
  };


});