'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vtApp
 */
vtApp.controller('MainCtrl',['$scope', 'appSettings', '$location', function ($scope, appSettings, $location) {
	
	$scope.init = function() {
    	console.log("Init Called -- Main Controller");
    };
    
    $scope.init();
}]);
