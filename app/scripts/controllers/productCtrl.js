'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Header Controller of the vtApp
 */
vtApp.controller('ProductCtrl',['$scope', '$route', '$log', function ($scope, $route, $log) {
	
	$scope.healthCategoryFilter=["Health Category 1","Health Category 2","Health Category 3","Health Category 4","Health Category 5"];
	
	$scope.productList=[{"name":"My Product1", "image":"images/banner/1.jpg", "url":"", "description":"Product DEscription for the product djks djds dks jds"},{"name":"My Product1", "image":"images/banner/1.jpg", "url":"", "description":"Product DEscription for the product djks djds dks jds"},{"name":"My Product1", "image":"images/banner/1.jpg", "url":"", "description":"Product DEscription for the product djks djds dks jds"}];
	
	$scope.init = function() {
		console.log(" Inside init of product Controller");
	}
	
	$scope.init();
	
}]);
