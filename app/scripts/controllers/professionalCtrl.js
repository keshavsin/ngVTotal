'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:ProfessionalCtrl
 * @description
 * # ProfessionalCtrl
 * Professional Controller of the vtApp
 */
vtApp.controller('ProfessionalCtrl',['$scope', '$route', '$location', '$routeParams', '$log','ProfessionalService', function ($scope, $route, $location, $routeParams, $log, professionalService) {
	
	$scope.healthSystemFilter=["Ayurveda","system1","system2","system3"];
	$scope.locationFilter=["location1","location2","location3","location4","location5","location6"];
	$scope.specializationFilter = ["specialization1","specialization2","specialization3","specialization4","specialization5","specialization6"];
	$scope.doctorDetails=[{"name":"Doctor1", "image":"images/doctors/2.jpg", "url":"", "details":"Doctor details are as follows"},
							{"name":"Doctor2", "image":"images/doctors/3.jpg", "url":"", "details":"Doctor details are as follows"},
							{"name":"Doctor3", "image":"images/doctors/4.jpg", "url":"", "details":"Doctor details are as follows"},
							{"name":"Doctor4", "image":"images/doctors/5.jpg", "url":"", "details":"Doctor details are as follows"},
							{"name":"Doctor5", "image":"images/doctors/4.jpg", "url":"", "details":"Doctor details are as follows"}];

	$scope.otherProfessionals=[{"name":"Doctor1","image":"images/doctors/5.jpg","url":"", "Qualification":"MBBS"},
								{"name":"Doctor2","image":"images/doctors/2.jpg","url":"", "Qualification":"MBBS"},
								{"name":"Doctor3","image":"images/doctors/3.jpg","url":"", "Qualification":"MBBS"},
								{"name":"Doctor4","image":"images/doctors/4.jpg","url":"", "Qualification":"MBBS"},
								{"name":"Doctor5","image":"images/doctors/5.jpg","url":"", "Qualification":"MBBS"},
								{"name":"Doctor6","image":"images/doctors/3.jpg","url":"", "Qualification":"MBBS"},
								{"name":"Doctor7","image":"images/doctors/2.jpg","url":"", "Qualification":"MBBS"},];
	
	$scope.getActiveProfessionals = function(){
		var myActiveProfessionals = professionalService.getActiveProfessionals();
		myActiveProfessionals.then(function(msg) {
			if(msg.status == 200) {
				$scope.professionalList = msg.data;
				//$scope.initializeExploreData();
			} else {
				toastr.error("Error fetching Active Professionals... ");
			}
		});
	}
	
	$scope.getProfessionalDetails = function(professionalId){
		var getProfessionalDetails = professionalService.getProfessionalDetails(professionalId);
		getProfessionalDetails.then(function(msg) {
			if(msg.status == 200) {
				$scope.professionalDetails = msg.data;
				//$scope.initializeExploreData();
			} else {
				toastr.error("Error fetching Professional Details ... ");
			}
		});
	}

	$scope.init = function() {
	console.log(" Inside init of Professional Controller");
		if ($location.$$path.startsWith('/professionaldetails')) {
			$scope.getProfessionalDetails($routeParams.id);
		} else {
			$scope.getActiveProfessionals();
		}
	}
	
	$scope.init();
	
}]);
