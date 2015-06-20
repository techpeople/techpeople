'use strict';

describe('Controller: YouthDevAcademyCtrl', function () {

  // load the controller's module
  beforeEach(module('techPeopleIoApp'));

  var YouthDevAcademyCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    YouthDevAcademyCtrl = $controller('YouthDevAcademyCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
