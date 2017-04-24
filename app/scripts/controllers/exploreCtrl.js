'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:ExploreCtrl
 * @description
 * # ExploreCtrl
 * explore Controller of the vtApp
 */
vtApp.controller('ExploreCtrl',['$scope', '$route', '$log', 'ExploreService', function ($scope, $route, $log, exploreService) {
	
	$scope.productslist=[{"url":"","name":"ProductName","image":"images/products/1.jpg","details":"description"},
							{"url":"","name":"ProductName","image":"images/products/1.jpg","details":"description"},
							{"url":"","name":"ProductName","image":"images/products/1.jpg","details":"description"}];


	$scope.getActiveExplorations = function() {
		var myActiveExplorations = exploreService.getActiveExplorations();
		myActiveExplorations.then(function(msg) {
			if(msg.status == 200) {
				$scope.exploreList = msg.data;
			} else {
				toastr.error("Error fetching Exploration Details ... ");
			}
		});
	}

	$scope.init = function() {
		console.log(" Inside init of product Controller");
		$scope.getActiveExplorations();
	}
	
	$scope.init();
	
}]);
