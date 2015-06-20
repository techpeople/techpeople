(function () {
	'use strict';

	angular.module('techPeopleIoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
	'firebase'
])
		.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
			$urlRouterProvider
				.otherwise('/');

			$locationProvider.html5Mode(true);
		});
}());
