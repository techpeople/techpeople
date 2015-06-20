'use strict';

angular.module('techPeopleIoApp')
  .factory('auth', function () {
    // Service logic
    // ...
		var Firebase = require('firebase');
		var authRef = new Firebase('https://techpeople.firebaseIO.com/auth');

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
