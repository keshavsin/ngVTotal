'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Header Controller of the vtApp
 */
vtApp.controller('manufacturerlistingCtrl',['$scope', '$route', '$log', function ($scope, $route, $log) {

	$scope.healthCategoryFilter=["Health Category 1","Health Category 2","Health Category 3","Health Category 4","Health Category 5"];
	
	$scope.healthSystemFilter=["Ayurveda","Unnani"];
	
	$scope.enterpriseTypeFilter=["Type1","Type2","Type3","Type4","Type5","Type6","Type7","Type8"];
	
	$scope.manufacturerDetailsList=[{"url":"","image":"images/the-manufacturer.png","heading":"Brand1","details":"details"},
									{"url":"","image":"images/the-manufacturer.png","heading":"Brand1","details":"details"},
									{"url":"","image":"images/the-manufacturer.png","heading":"Brand1","details":"details"},
									{"url":"","image":"images/the-manufacturer.png","heading":"Brand1","details":"details"},
									{"url":"","image":"images/the-manufacturer.png","heading":"Brand1","details":"details"},
									{"url":"","image":"images/the-manufacturer.png","heading":"Brand1","details":"details"},
									{"url":"","image":"images/the-manufacturer.png","heading":"Brand1","details":"details"},
									{"url":"","image":"images/the-manufacturer.png","heading":"Brand1","details":"details"},
									{"url":"","image":"images/the-manufacturer.png","heading":"Brand1","details":"details"},];
	
	
	
}]);
