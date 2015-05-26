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


});