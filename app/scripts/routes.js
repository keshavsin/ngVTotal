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
	.when('/explorelist', {
		templateUrl: 'views/explorelist.html',
		controller: 'exploreCtrl',
		controllerAs: 'exploreCtrl'
	})
	.when('/professionallisting', {
		templateUrl: 'views/professionallisting.html',
		controller: 'professionalCtrl',
		controllerAs: 'professionalCtrl'
	})
	.when('/professionaldetails', {
		templateUrl: 'views/professionaldetails.html',
		controller: 'professionaldetailsCtrl',
		controllerAs: 'professionaldetailsCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
});