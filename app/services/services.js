angular.module('marsWeather.services', [])

.factory('Weather', function ($http) {
  // takes optional param, date, to query for specific date
  var getWeather = function(date) {
    var dateQuery = date || 'latest/'
    return $http.jsonp('http://marsweather.ingenology.com/v1/' + dateQuery + '?format=jsonp&callback=JSON_CALLBACK');
   
  };


  return {
    getWeather : getWeather
  }

});
