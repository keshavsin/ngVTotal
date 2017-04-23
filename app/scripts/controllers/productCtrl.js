'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Product Controller of the vtApp
 */
vtApp.controller('ProductCtrl',['$scope', '$route', '$log', function ($scope, $route, $log) {
	
	$scope.healthCategoryFilter=["Health Category 1","Health Category 2","Health Category 3","Health Category 4","Health Category 5"];
	
	$scope.productList=[{"name":"My Product1", "image":"images/banner/1.jpg", "url":"", "description":"Product DEscription for the product djks djds dks jds"},{"name":"My Product1", "image":"images/banner/1.jpg", "url":"", "description":"Product DEscription for the product djks djds dks jds"},{"name":"My Product1", "image":"images/banner/1.jpg", "url":"", "description":"Product DEscription for the product djks djds dks jds"}];
	
	$scope.manufactureFilter = ["Manufacture1","Manufacture2","Manufacture3","Manufacture4","Manufacture5","Manufacture6"];
	
	$scope.recipeTypeFilter = ["Veg","Non-Veg"];
	
	$scope.healthSystemFilter = ["Ayurveda","Unnani"];	
	
	
	$scope.otherProductList = [{"name":"Product Name","url":"","image":"images/products/1.jpg","details":"this product is for so and so"},
								{"name":"Product Name","url":"","image":"images/products/1.jpg","details":"this product is for so and so"},
								{"name":"Product Name","url":"","image":"images/products/1.jpg","details":"this product is for so and so"},
								{"name":"Product Name","url":"","image":"images/products/1.jpg","details":"this product is for so and so"},
								{"name":"Product Name","url":"","image":"images/products/1.jpg","details":"this product is for so and so"},];
	
	$scope.init = function() {
		console.log(" Inside init of product Controller");
	}
	
	$scope.init();
	
}]);
