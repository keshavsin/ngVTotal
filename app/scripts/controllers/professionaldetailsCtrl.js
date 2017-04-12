'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Header Controller of the vtApp
 */
vtApp.controller('professionaldetailsCtrl',['$scope', '$route', '$log', function ($scope, $route, $log) {
	
	
	$scope.otherProfessionals=[{"name":"Doctor1","image":"images/doctors/5.jpg","url":"", "Qualification":"MBBS"},
								{"name":"Doctor2","image":"images/doctors/2.jpg","url":"", "Qualification":"MBBS"},
								{"name":"Doctor3","image":"images/doctors/3.jpg","url":"", "Qualification":"MBBS"},
								{"name":"Doctor4","image":"images/doctors/4.jpg","url":"", "Qualification":"MBBS"},
								{"name":"Doctor5","image":"images/doctors/5.jpg","url":"", "Qualification":"MBBS"},
								{"name":"Doctor6","image":"images/doctors/3.jpg","url":"", "Qualification":"MBBS"},
								{"name":"Doctor7","image":"images/doctors/2.jpg","url":"", "Qualification":"MBBS"},];
								
	
	
	$scope.init = function() {
		console.log(" Inside init of product Controller");
	}
	
	$scope.init();
	
}]);
