angular.module('marsWeather', [
  'marsWeather.services',
  'marsWeather.current',
  'marsWeather.sunriseset',
  'marsWeather.search',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('current', {
      url: "/current",
      templateUrl: "app/current/current.html",
      controller: 'CurrentCtrl'
    })
    .state('sunriseset', {
      url: "/sunriseset",
      templateUrl: "app/sunriseset/sunriseset.html",
      controller: 'SunCtrl'
    })
    .state('search', {
      url: "/search",
      templateUrl: "app/search/search.html",
      controller: 'SearchCtrl'
    });
});
