'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:exploreCtrl
 * @description
 * # exploreCtrl
 * explore Controller of the vtApp
 */
vtApp.controller('exploreCtrl',['$scope', '$route', '$log', function ($scope, $route, $log) {
	
	$scope.explorelist =[{"name":"My Product1", "image":"images/banner/1.jpg", "url":"", "description":"Product DEscription for the product djks djds dks jds"},{"name":"My Product1", "image":"images/banner/1.jpg", "url":"", "description":"Product DEscription for the product djks djds dks jds"},{"name":"My Product1", "image":"images/banner/1.jpg", "url":"", "description":"Product DEscription for the product djks djds dks jds"}];

	$scope.productslist=[{"url":"","name":"ProductName","image":"images/products/1.jpg","details":"description"},
							{"url":"","name":"ProductName","image":"images/products/1.jpg","details":"description"},
							{"url":"","name":"ProductName","image":"images/products/1.jpg","details":"description"}];

	$scope.init = function() {
		console.log(" Inside init of product Controller");
	}
	
	$scope.init();
	
}]);
