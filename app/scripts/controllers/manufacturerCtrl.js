'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:manufacturerdetailsCtrl
 * @description
 * # ManufacturerdetailsCtrl
 * Manufacturer Details Controller of the vtApp
 */
vtApp.controller('ManufacturerCtrl',['$scope', '$route','$location', '$routeParams', '$log', 'ManufactureService', function ($scope, $route, $location, $routeParams, $log, manufactureService) {

	$scope.otherProductList=[{"url":"","image":"images/products/1.jpg","name":"Product1","details":"product details"},
								{"url":"","image":"images/products/1.jpg","name":"Product1","details":"product details"},
								{"url":"","image":"images/products/1.jpg","name":"Product1","details":"product details"},
								{"url":"","image":"images/products/1.jpg","name":"Product1","details":"product details"},
								{"url":"","image":"images/products/1.jpg","name":"Product1","details":"product details"},
								{"url":"","image":"images/products/1.jpg","name":"Product1","details":"product details"},
								{"url":"","image":"images/products/1.jpg","name":"Product1","details":"product details"},
								{"url":"","image":"images/products/1.jpg","name":"Product1","details":"product details"},];	

	$scope.healthCategoryFilter=["Health Category 1","Health Category 2","Health Category 3","Health Category 4","Health Category 5"];
	
	$scope.healthSystemFilter=["Ayurveda","Unnani"];
	
	$scope.enterpriseTypeFilter=["Type1","Type2","Type3","Type4","Type5","Type6","Type7","Type8"];
	
	$scope.getActiveManufacturers = function(){
		var activeManufacturers = manufactureService.getActiveManufacturers();
		activeManufacturers.then(function(msg) {
			if(msg.status == 200) {
				$scope.manufacturersList = msg.data;
			} else {
				toastr.error("Error fetching Active Manufacturers... ");
			}
		});
	}

	$scope.getManufacturer = function(manufacturerId){
		var manufacturer = manufactureService.getManufacturerDetails(manufacturerId);
		manufacturer.then(function(msg) {
			if(msg.status == 200) {
				$scope.manufacturerDetails = msg.data;
			} else {
				toastr.error("Error fetching Manufacturer ... ");
			}
		});
	}

	$scope.init = function(){
		console.log(" Inside init of product Controller");
		if($location.$$path.startsWith('/manufacturerdetails')){
			$scope.getManufacturer($routeParams.id);
		}else{
			$scope.getActiveManufacturers();
		}
	}

	$scope.init();
	
}]);
