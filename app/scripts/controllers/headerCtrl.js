'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Header Controller of the vtApp
 */
vtApp.controller('HeaderCtrl',['$scope', '$route', '$log', function ($scope, $route, $log) {
	
	$scope.init = function() {
		console.log(" Inside init of header Controller");
	}
	
	$scope.init();
	
}]);
