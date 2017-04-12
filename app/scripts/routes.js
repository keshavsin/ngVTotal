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
	.when('/productdetails', {
		templateUrl: 'views/productdetails.html',
		controller: 'productdetailsCtrl',
		controllerAs: 'productdetailsCtrl'
	})
	.when('/manufacturerlisting', {
		templateUrl: 'views/manufacturerlisting.html',
		controller: 'manufacturerlistingCtrl',
		controllerAs: 'manufacturerlistingCtrl'
	})
	.when('/manufacturerdetails', {
		templateUrl: 'views/manufacturerdetails.html',
		controller: 'manufacturerdetailsCtrl',
		controllerAs: 'manufacturerdetailsCtrl'
	})
	.when('/exploredetails', {
		templateUrl: 'views/exploredetails.html',
		controller: 'exploredetailsCtrl',
		controllerAs: 'exploredetailsCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
});