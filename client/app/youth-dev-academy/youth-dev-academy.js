'use strict';

angular.module('techPeopleIoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('youth-dev-academy', {
        url: '/youth-dev-academy',
        templateUrl: 'app/youth-dev-academy/youth-dev-academy.html',
        controller: 'YouthDevAcademyCtrl'
      });
  });