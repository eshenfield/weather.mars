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

})
.factory('Date', function() {
  var numberToMonth = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  }

  var parseDate = function(dateString, isTime) {
    if (isTime){
      return dateString.substr(11);
    }
    var month = numberToMonth[parseInt(dateString.substr(5, 7))];
    var year = dateString.substr(0,4);
    var date = dateString.substr(8,10);

    return month + ' ' + date + ', ' + year;
  }

  return {
    parseDate: parseDate
  }
});
