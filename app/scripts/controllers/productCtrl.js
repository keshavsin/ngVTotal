'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Product Controller of the vtApp
 */
vtApp.controller('ProductCtrl',['$scope', '$route', '$routeParams', '$log', '$location', 'ProductService',  function ($scope, $route, $routeParams, $log, $location, productService) {
	
	$scope.healthCategoryFilter=["Digestive","Rejuvenative","Respiratory","Skin"];
	
	$scope.manufactureFilter = [];
	
	$scope.recipeTypeFilter = ["Veg","Non-Veg"];
	
	$scope.healthSystemFilter = ["Ayurveda","Unnani"];	
	
	$scope.otherProductList = [{"name":"Product Name","url":"","image":"images/products/1.jpg","details":"this product is for so and so"},
								{"name":"Product Name","url":"","image":"images/products/1.jpg","details":"this product is for so and so"},
								{"name":"Product Name","url":"","image":"images/products/1.jpg","details":"this product is for so and so"},
								{"name":"Product Name","url":"","image":"images/products/1.jpg","details":"this product is for so and so"},
								{"name":"Product Name","url":"","image":"images/products/1.jpg","details":"this product is for so and so"},];
								
	$scope.getActiveProducts = function() {
		var myActiveProducts = productService.getActiveProducts();
		myActiveProducts.then(function(msg) {
			if(msg.status == 200) {
				$scope.productList = msg.data;
				//$scope.initializeExploreData();
			} else {
				toastr.error("Error fetching Exploration Details ... ");
			}
		});
	}

	$scope.getProductDetails = function(productId) {
		var myProductDetails = productService.getProductDetails(productId);
		myProductDetails.then(function(msg) {
			if(msg.status == 200) {
				$scope.productDetails = msg.data;
				//$scope.initializeExploreData();
			} else {
				toastr.error("Error fetching Exploration Details ... ");
			}
		});
	}


	$scope.getProduct = function(productId) {
		$location.path('/get/'+productId);
	}

	$scope.init = function() {
		console.log(" Inside init of product Controller");
		console.log($location);
		if ($location.$$path.startsWith('/productdetails')) {
			$scope.getProductDetails($routeParams.id);
		} else {
			$scope.getActiveProducts();
		}
	}

	$scope.init();
		
}]);
