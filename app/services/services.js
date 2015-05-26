angular.module('marsWeather.services', [])

.factory('Weather', function ($http) {
  // takes optional param, date, to query for specific date
  var getWeather = function(dateQuery) {
    if (dateQuery){
      return $http.jsonp('http://marsweather.ingenology.com/v1/archive/?' + dateQuery + '&format=jsonp&callback=JSON_CALLBACK');
    }
    return $http.jsonp('http://marsweather.ingenology.com/v1/latest/?format=jsonp&callback=JSON_CALLBACK');
  };

  var getImages = function(dateQuery) {
    var jsonpUrl = "https://jsonp.afeld.me/?callback=JSON_CALLBACK&url=http://mars.jpl.nasa.gov/msl-raw-images/image/images_sol" + dateQuery + ".json"
    return $http.jsonp(jsonpUrl);
  };

  return {
    getWeather : getWeather,
    getImages : getImages
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
    var month = parseInt(dateString.substr(5, 7));
    var year = parseInt(dateString.substr(0,4));
    var date = parseInt(dateString.substr(8,10));

    return numberToMonth[month] + ' ' + date + ', ' + year;
  }

  var createQueryString = function(dateString) {
    var year = parseInt(dateString.substr(0,4));
    var month = dateString.charAt(5) + dateString.charAt(6);
    var date = dateString.substr(8);

    return 'terrestrial_date_start=' + year + '-' + month + '-01' + '&terrestrial_date_end=' + year + '-' + month + '-30';

  } 

  return {
    parseDate: parseDate,
    createQueryString : createQueryString
  }
});
