'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:ProfessionalCtrl
 * @description
 * # ProfessionalCtrl
 * Professional Controller of the vtApp
 */
vtApp.controller('ProfessionalCtrl',['$scope', '$route', '$location', '$routeParams', '$log','ProfessionalService', 'fileUploadService', function ($scope, $route, $location, $routeParams, $log, professionalService, fileUploadService) {

	$scope.professional = {};
	var formdata = new FormData();
	$scope.file = [];

	$scope.clearCache = function(){
		$scope.professional = {};
	}
	
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
		}else if($location.$$path.startsWith('/secured/professional')){
			$scope.getActiveProfessionals();
		}else {
			$scope.getActiveProfessionals();
		}
	}
	
	$scope.init();
	
	$scope.addProfessional = function(){
		$scope.isAddProfessionalEnabled = true;
	}

	$scope.backToProfessionalsList = function(){
		$scope.isAddProfessionalEnabled = false;
		$scope.clearCache();
	}

	$scope.createProfessional = function(professional){
		var createProfessional = professionalService.createProfessional(professional);
		createProfessional.then(function(msg){
			if(msg.status == 200){
				$scope.professionalId = msg.data;
				if($scope.file.length > 0){
					$scope.uploadFiles($scope.professionalId,"PROFESSIONAL");
				}
				$scope.isAddProfessionalEnabled = false;
				$scope.init();
			}else{
				toastr.error("Error Creating Professional");
			}
		})
	}

	$scope.getProfessional = function(professionalId){
		var getProfessionalDetails = professionalService.getProfessionalDetails(professionalId);
		getProfessionalDetails.then(function(msg) {
			if(msg.status == 200) {
				$scope.professional = msg.data;
				$scope.isAddProfessionalEnabled = true;
			} else {
				toastr.error("Error fetching Professional ");
			}
		});
	}

	$scope.updateProfessional = function(professional){
		var updateProfessional = professionalService.updateProfessional(professional);
		updateProfessional.then(function(msg){
			if(msg.status == 200){
				$scope.isAddProfessionalEnabled = false;
				if($scope.file.length > 0){
					$scope.uploadFiles(professional.id,"PROFESSIONAL");
				}
				$scope.init();
			}else{
				toastr.error("Error Updating Professional");
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

}]);
