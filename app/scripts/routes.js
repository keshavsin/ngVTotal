'use strict';

/**
 * @ngdoc overview
 * @name vtApp
 * @description
 * # vtApp
 *
 * All Main Routes of the application.
 */

vtApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'MainCtrl',
		controllerAs: 'main'
	})
	.when('/productlisting', {
		templateUrl: 'views/productlisting.html',
		controller: 'ProductCtrl',
		controllerAs: 'productCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
});