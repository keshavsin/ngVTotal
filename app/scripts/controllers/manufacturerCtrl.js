'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:manufacturerdetailsCtrl
 * @description
 * # ManufacturerdetailsCtrl
 * Manufacturer Details Controller of the vtApp
 */
vtApp.controller('ManufacturerCtrl',['$scope', '$route','$location', '$routeParams', '$log', 'ManufactureService', 'ProductService', 'LookupService', function ($scope, $route, $location, $routeParams, $log, manufactureService, productService, lookupService) {

	$scope.manufacturerTab = {};
	$scope.manufacturerTab.selectedTab = "MANUFACTURER_TAB";
	$scope.manufacturer = {};
	var formdata = new FormData();
	$scope.file = [];

	$scope.manufacturersTab = function(){
		$scope.manufacturerTab.selectedTab = "MANUFACTURER_TAB";
	}

	$scope.productsTab = function(){
		$scope.manufacturerTab.selectedTab = "PRODUCTS_TAB";
	}

	$scope.addManufacturer = function(){
		$scope.isAddManufacturerEnabled = true;
	}

	$scope.addProduct = function(){
		$scope.isAddProductEnabled = true;
	}

	$scope.backToProductsList = function(){
		$scope.isAddProductEnabled = false;
	}

	$scope.backToManufacturersList = function(){
		$scope.isAddManufacturerEnabled = false;
		$scope.clearCache();
	}
	

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
		}else if($location.$$path.startsWith('/secured/manufacturer')){
			var getSystem = lookupService.getAllActiveLookups('System');
			getSystem.then(function(msg){
				if(msg.data.status == 200){
					$scope.system = msg.data.data;
				}else{
					toastr.error("Error Fetching System");
				}
			})
			var getManufacturers = manufactureService.getManufacturers();
			getManufacturers.then(function(msg){
				if(msg.status == 200){
					$scope.manufacturersList = msg.data;
				}else{
					toastr.error("Error Fetching Manufacturers");
				}
			})
			var getProducts = productService.getProducts();
			getProducts.then(function(msg){
				if(msg.status == 200){
					$scope.productsList = msg.data;
				}else{
					toastr.error("Error Fetching Manufacturers");
				}
			})

		}else{
			$scope.getActiveManufacturers();
		}
	}

	$scope.init();

	$scope.clearCache = function(){
		$scope.manufacturer = {};
	}
	
	$scope.createManufacturer = function(manufacturer){
		var createManufacturer = manufactureService.createManufacturer(manufacturer);		
		createManufacturer.then(function(msg){
			if(msg.status == 200){
				$scope.manufacturerId = msg.data;
				$scope.isAddManufacturerEnabled = false;
				$scope.init();
				$scope.clearCache();
			}else{
				toastr.error("Error Creating Manufacturer");
			}
		})
	}

	$scope.getManufacturer = function(manufacturerId){
		var getManufacturer = manufactureService.getManufacturer(manufacturerId);
		getManufacturer.then(function(msg){
			if(msg.status == 200){
				$scope.manufacturer = msg.data;
				$scope.isAddManufacturerEnabled = true;
			}else{
				toastr.error("Error Fetching Manufacturer");
			}
		})
	}

	$scope.updateManufacturer = function(manufacturer){
		var updateManufacturer = manufactureService.updateManufacturer(manufacturer);
		updateManufacturer.then(function(msg){
			if(msg.status == 200){
				$scope.isAddManufacturerEnabled = false;
				$scope.clearCache();
			}else{
				toastr.error("Error Updating Manufacturer");
			}
		})
	}
		
}]);
