angular.module('marsWeather', [
  'marsWeather.services',
  'marsWeather.current',
  'marsWeather.search',
  'marsWeather.solimages',
  '720kb.datepicker',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/current");

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
    })
    .state('searchView', {
      url: '/search-view',
      templateUrl: "app/current/current.html",
      controller: 'SearchCtrl'
    })
    .state('solimages', {
      url: '/solimages',
      templateUrl: "app/solimages/solimages.html",
      controller: 'imageCtrl'
    })
})

