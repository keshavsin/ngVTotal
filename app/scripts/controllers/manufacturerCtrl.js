'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:manufacturerdetailsCtrl
 * @description
 * # ManufacturerdetailsCtrl
 * Manufacturer Details Controller of the vtApp
 */
vtApp.controller('ManufacturerCtrl',['$scope','$rootScope', '$route','$location', '$routeParams', '$log', 'ManufactureService', 'ProductService', 'LookupService', 'fileUploadService','HeaderService', 'toastr', function ($scope, $rootScope, $route, $location, $routeParams, $log, manufactureService, productService, lookupService, fileUploadService, headerService, toastr) {

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

	$scope.changePasswordTab = function(){
		$scope.manufacturerTab.selectedTab = "CHANGE_PASSWORD_TAB";
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

	$scope.healthCategoryFilter=["Digestive","Rejuvenative","Respiratory","Skin"];
	
	$scope.healthSystemFilter=["Ayurveda","Unnani"];
	
	$scope.enterpriseTypeFilter=["Medium","Tier-I","Small","Micro"];
	
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
			if($rootScope.sessionProfile != null){
				if($rootScope.sessionProfile.role != 'ADMIN'){
					$scope.addManufacturer();
				}
				var getSystems = lookupService.getAllActiveLookups('System');
				getSystems.then(function(msg){
					if(msg.status ==  200){
						$scope.systems = msg.data;
					}else{
						toastr.error("Error Fetching Systems");
					}
				})
				var getPortfolios = lookupService.getAllActiveLookups('ManufacturerPortfolio');
				getPortfolios.then(function(msg){
					if(msg.status ==  200){
						$scope.portfolios = msg.data;
					}else{
						toastr.error("Error Fetching Portfolios");
					}
				})
				var getSalesTypes = lookupService.getAllActiveLookups('SalesType');
				getSalesTypes.then(function(msg){
					if(msg.status ==  200){
						$scope.salesTypes = msg.data;
					}else{
						toastr.error("Error Fetching Sales Types");
					}
				})
				var getManufacturerTypes = lookupService.getAllActiveLookups('ManufacturerType');
				getManufacturerTypes.then(function(msg){
					if(msg.status ==  200){
						$scope.types = msg.data;
					}else{
						toastr.error("Error Fetching Sales Manufacturer Types");
					}
				})
				var getCountries = lookupService.getAllActiveLookups('Country');
				getCountries.then(function(msg){
					if(msg.status ==  200){
						$scope.countries = msg.data;
					}else{
						toastr.error("Error Fetching Countries");
					}
				})
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
				$location.path('/');
			}
		}else{
			$scope.getActiveManufacturers();
		}
	}

	$scope.init();

	$scope.clearCache = function(){
		$scope.manufacturer = {};
		$scope.product = {};
	}
	
	$scope.createManufacturer = function(manufacturer){
		if(manufacturer.healthSystems != null){
			manufacturer.healthSystems = manufacturer.healthSystems.join(); 
		}if(manufacturer.portfolio != null){
			manufacturer.portfolio = manufacturer.portfolio.join(); 
		}if(manufacturer.salesType != null){
			manufacturer.salesType = manufacturer.salesType.join();
		}
		var jsonData = {}; 
		jsonData = manufacturer;
		jsonData.json = JSON.stringify(manufacturer);
		var createManufacturer = manufactureService.createManufacturer(manufacturer);		
		createManufacturer.then(function(msg){
			if(msg.status == 200){
				$scope.manufacturerId = msg.data;
				if($scope.file.length > 0){
					$scope.uploadFiles($scope.manufacturerId,"MANUFACTURER");
				}
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
				$scope.manufacturer = JSON.parse(msg.data.json);
				$scope.manufacturer.healthSystems = $scope.manufacturer.healthSystems.split(','); 
				$scope.manufacturer.portfolio = $scope.manufacturer.portfolio.split(','); 
				$scope.manufacturer.salesType = $scope.manufacturer.salesType.split(','); 
				$scope.manufacturer.id = msg.data.id;
				$scope.isAddManufacturerEnabled = true;
			}else{
				toastr.error("Error Fetching Manufacturer");
			}
		})
	}

	$scope.updateManufacturer = function(manufacturer){
		if(manufacturer.healthSystems != null){
			manufacturer.healthSystems = manufacturer.healthSystems.join(); 
		}if(manufacturer.portfolio != null){
			manufacturer.portfolio = manufacturer.portfolio.join(); 
		}if(manufacturer.salesType != null){
			manufacturer.salesType = manufacturer.salesType.join();
		}
		var jsonData = {}; 
		jsonData = manufacturer;
		jsonData.json = JSON.stringify(manufacturer);
		var updateManufacturer = manufactureService.updateManufacturer(jsonData);
		updateManufacturer.then(function(msg){
			if(msg.status == 200){
				$scope.isAddManufacturerEnabled = false;
				if($scope.file.length > 0){
					$scope.uploadFiles(manufacturer.id,"MANUFACTURER");
				}
				$scope.clearCache();
			}else{
				toastr.error("Error Updating Manufacturer");
			}
		})
	}

	$scope.createProduct = function(product){
		var createproduct = productService.createProduct(product);		
		createproduct.then(function(msg){
			if(msg.status == 200){
				$scope.productId = msg.data;
				if($scope.file.length > 0){
					$scope.uploadFiles($scope.productId,"PRODUCT");
				}
				$scope.isAddProductEnabled = false;
				$scope.init();
				$scope.clearCache();
			}else{
				toastr.error("Error Creating Product");
			}
		})
	}

	$scope.getProduct = function(productId){
		var getProduct = productService.getProduct(productId);
		getProduct.then(function(msg){
			if(msg.status == 200){
				$scope.product = msg.data;
				$scope.isAddProductEnabled = true;
			}else{
				toastr.error("Error Fetching Product");			
			}
		})	
	}
	
	$scope.updateProduct = function(product){
		var updateProduct = productService.updateProduct(product);
		updateProduct.then(function(msg){
			if(msg.status == 200){
				$scope.isAddProductEnabled = false;
				if($scope.file.length > 0){
					$scope.uploadFiles(product.id,"PRODUCT");
				}
				$scope.clearCache();
			}else{
				toastr.error("Error Updating Product");
			}
		})
	}
		
	// File Upload
	$scope.clearFiles = function () {
	    angular.element("input[type='file']").val(null);
		formdata.delete("file");
		formdata.delete("type");
		formdata.delete("id");
		formdata.delete("docInfo");
	};
	
	$scope.getTheFiles = function ($files) {
		$scope.file = $files;
	    angular.forEach($files, function (value, key) {
	        formdata.append("file", value);
	    });
	    $scope.isFileSelected = true;
	};

	$scope.uploadFiles = function (id, docInfo) {
		formdata.append("type", "IMAGE");
		formdata.append("id", id);
		formdata.append("docInfo",	docInfo);
		var fileupload = fileUploadService.upload(formdata);
		fileupload.then(function(msg){
			var jsonResult = msg.data.data;
			if(msg.data.status == 200) {
				if(jsonResult.length == 0) {
					toastr.success('uploaded Successfully.');
				} else {
					$scope.errors = jsonResult;
				}
			} else {
				toastr.error('Error while uploading.');
			}
			$scope.clearFiles();
		}, function(msg){if(msg.status = 401) $location.path('/login');})
	};

	$scope.getStates = function(countryId){
		var getStates = lookupService.getLookupWithReference(countryId);
		getStates.then(function(msg){
			if(msg.status == 200){
				$scope.states = msg.data;
			}else{
				toastr.error("Error Fetching States");
			}
		})	
	}

	$scope.getCities = function(stateId){
		var getCities = lookupService.getLookupWithReference(stateId);
		getCities.then(function(msg){
			if(msg.status == 200){
				$scope.cities = msg.data;
			}else{
				toastr.error("Error Fetching Cities");
			}
		})	
	}

	$scope.changePassword = function(password){
		var login = $rootScope.sessionProfile.login;
		login.oldPassword = password.previous;
		login.password = password.new;
		var changePassword = headerService.changePassword(login);
		changePassword.then(function(msg){
			if(msg.status == 200){
				$scope.password = {};
				toastr.success("Password Changed Successfully");
			}else{
				$scope.errorMessage = msg.data;
				toastr.error("Error Updating Password, Please try again later");
			}
		})
	}	

}]);
