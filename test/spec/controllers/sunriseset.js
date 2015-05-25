'use strict';

describe('Controller: SunrisesetCtrl', function () {

  // load the controller's module
  beforeEach(module('marsWeatherApp'));

  var SunrisesetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SunrisesetCtrl = $controller('SunrisesetCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
