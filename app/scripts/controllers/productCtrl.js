'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Product Controller of the vtApp
 */
vtApp.controller('ProductCtrl',['$scope', '$route', '$log', 'ProductService',  function ($scope, $route, $log, productService) {
	
	$scope.healthCategoryFilter=["Health Category 1","Health Category 2","Health Category 3","Health Category 4","Health Category 5"];
	
	$scope.manufactureFilter = ["Manufacture1","Manufacture2","Manufacture3","Manufacture4","Manufacture5","Manufacture6"];
	
	$scope.recipeTypeFilter = ["Veg","Non-Veg"];
	
	$scope.healthSystemFilter = ["Ayurveda","Unnani"];	
	
	
	$scope.otherProductList = [{"name":"Product Name","url":"","image":"images/products/1.jpg","details":"this product is for so and so"},
								{"name":"Product Name","url":"","image":"images/products/1.jpg","details":"this product is for so and so"},
								{"name":"Product Name","url":"","image":"images/products/1.jpg","details":"this product is for so and so"},
								{"name":"Product Name","url":"","image":"images/products/1.jpg","details":"this product is for so and so"},
								{"name":"Product Name","url":"","image":"images/products/1.jpg","details":"this product is for so and so"},];
								
	$scope.getActiveProducts = function() {
		var myActiveProducts = productService.getActiveProducts('dummyHerb');
		myActiveProducts.then(function(msg) {
			if(msg.status == 200) {
				$scope.productList = msg.data;
				//$scope.initializeExploreData();
			} else {
				toastr.error("Error fetching Exploration Details ... ");
			}
		});
	}
	
	
	$scope.init = function() {
		console.log(" Inside init of product Controller");
		$scope.getActiveProducts();
	}
	
	$scope.init();
	
}]);
