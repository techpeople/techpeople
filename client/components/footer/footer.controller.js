'use strict';

angular.module('techPeopleIoApp')
	.controller('FooterCtrl', function ($scope, $location) {
		$scope.menu1 = [
			{
				'title': 'item one',
				'link': '/item-one'
			},
			{
				'title': 'item two',
				'link': '/item-two'
			},
			{
				'title': 'item three',
				'link': '/item-three'
			}
		];
		$scope.menu2 = [
			{
				'title': 'item one',
				'link': '/item-one'
			},
			{
				'title': 'item two',
				'link': '/item-two'
			},
			{
				'title': 'item three',
				'link': '/item-three'
			}
		];

		$scope.isCollapsed = true;

		$scope.isActive = function (route) {
			return route === $location.path();
		};
	});