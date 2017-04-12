'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Header Controller of the vtApp
 */
vtApp.controller('productdetailsCtrl',['$scope', '$route', '$log', function ($scope, $route, $log) {
	
	
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
