'use strict';

angular.module('techPeopleIoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('students', {
        url: '/students',
        templateUrl: 'app/students/students.html',
        controller: 'StudentsCtrl'
      });
  });