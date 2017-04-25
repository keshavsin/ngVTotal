'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:ExploreCtrl
 * @description
 * # ExploreCtrl
 * explore Controller of the vtApp
 */
vtApp.controller('ExploreCtrl',['$scope', '$route', '$location', '$routeParams','$log', 'ExploreService', function ($scope, $route, $location, $routeParams, $log, exploreService) {
	
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

	$scope.getExploration = function(herbId){
		var myExploration = exploreService.getExploreDetails(herbId);
		myExploration.then(function(msg) {
			if(msg.status == 200) {
				$scope.exploreList = msg.data;
			} else {
				toastr.error("Error fetching Exploration Details ... ");
			}
		});
	}

	$scope.init = function() {
		console.log(" Inside init of product Controller");
		if($location.$$path.startsWith('/exploredetails')){
			$scope.getExploration($routeParams.id);
		}else{
			$scope.getActiveExplorations();
		}
	}
	
	$scope.init();
	
}]);
