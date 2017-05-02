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
		controllerAs: 'ProductCtrl'
	})
	.when('/explorelist', {
		templateUrl: 'views/explorelist.html',
		controller: 'ExploreCtrl',
		controllerAs: 'ExploreCtrl'
	})
	.when('/professionallisting', {
		templateUrl: 'views/professionallisting.html',
		controller: 'ProfessionalCtrl',
		controllerAs: 'ProfessionalCtrl'
	})
	.when('/professionaldetails/:id', {
		templateUrl: 'views/professionaldetails.html',
		controller: 'ProfessionalCtrl',
		controllerAs: 'ProfessionalCtrl'
	})
	.when('/productdetails/:id', {
		templateUrl: 'views/productdetails.html',
		controller: 'ProductCtrl',
		controllerAs: 'ProductCtrl'
	})
	.when('/manufacturerlisting', {
		templateUrl: 'views/manufacturerlisting.html',
		controller: 'ManufacturerCtrl',
		controllerAs: 'ManufacturerCtrl'
	})
	.when('/manufacturerdetails/:id', {
		templateUrl: 'views/manufacturerdetails.html',
		controller: 'ManufacturerCtrl',
		controllerAs: 'ManufacturerCtrl'
	})
	.when('/exploredetails/:id', {
		templateUrl: 'views/exploredetails.html',
		controller: 'ExploreCtrl',
		controllerAs: 'ExploreCtrl'
	})
	.when('/blogdetails/', {
		templateUrl: 'views/blog-details.html',
		controller: 'ExploreCtrl',
		controllerAs: 'ExploreCtrl'
	})
	.when('/secured/herbs/', {
		templateUrl: 'views/herb.html',
		controller: 'HerbController',
		controllerAs: 'HerbController'
	})
	.when('/secured/lookup/', {
		templateUrl: 'views/lookup.html',
		controller: 'LookupController',
		controllerAs: 'LookupController'
	})
	.when('/secured/blog/', {
		templateUrl: 'views/blog.html',
		controller: 'BlogController',
		controllerAs: 'BlogController'
	})
	.when('/secured/formulation/', {
		templateUrl: 'views/formulation.html',
		controller: 'FormulationController',
		controllerAs: 'FormulationController'
	})
	.otherwise({
		redirectTo: '/'
	});
});