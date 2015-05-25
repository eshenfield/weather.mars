angular.module('marsWeather.services', [])

.factory('Weather', function ($http) {
  var getCurrentWeather = function() {
    return $http({
      method: 'GET',
      url: 'http://marsweather.ingenology.com/v1/latest/'
    });    
  };


  return {
    getCurrentWeather : getCurrentWeather
  }
  
});
