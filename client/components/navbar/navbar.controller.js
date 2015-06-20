'use strict';

angular.module('techPeopleIoApp')
	.controller('NavbarCtrl', function ($scope, $location) {
		$scope.menu = [
			{
				'title': 'Youth Dev Academy',
				'link': 'youth-dev-academy'
			},
			{
				'title': 'For students',
				'link': '/for-students'
			},
			{
				'title': 'For parents',
				'link': '/for-parents'
			}, 
			{
				'title': 'For teachers',
				'link': '/for-teachers'
			}, 
			{
				'title': 'For admins',
				'link': '/for-admins'
			}
		];
		$scope.action = [
			{
				'title': 'Signup',
				'link': '/signup'
			}
		];
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