angular.module('marsWeather', [
  'marsWeather.services',
  'marsWeather.current',
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
    .state('search', {
      url: "/search",
      templateUrl: "app/search/search.html",
      controller: 'SearchCtrl'
    });
});
