vtApp.controller('HerbController', ['$scope','$rootScope','$location','HerbService','LookupService','fileUploadService',function($scope,$rootScope,$location,herbService,lookupService,fileUploadService){

	$scope.herb = {};
	$scope.herb.homeRemedies = [];
	$scope.herb.safetyIndications = [];
	$scope.herb.didYouKnow = [];
	$scope.herbList = {};
	$scope.herb.webCategories = [];
	var formdata = new FormData();
	$scope.herbTab = {};

	$scope.herbDetailsTab = function(){
		$scope.herbTab.selectedTab = "HERB_DETAILS";
	}

	$scope.homeRemediesTab = function(){
		$scope.herbTab.selectedTab = "HOME_REMEDIES";
	}

	$scope.safetyIndicationsTab = function(){
		$scope.herbTab.selectedTab = "SAFETY_INDICATIONS";
	}

	$scope.dykTab = function(){
		$scope.herbTab.selectedTab = "DID_YOU_KNOW";
	}

	$scope.webCategoriesTab = function(){
		$scope.herbTab.selectedTab = "WEB_CATEGORIES";
	}

	$scope.initHerb = function(){
		if($rootScope.sessionProfile != null){
			// Make Herb Details Tab as Default
			$scope.herbTab.selectedTab = "HERB_DETAILS";
			var getTherepeuticActions = lookupService.getAllActiveLookups('TherepeuticAction');
			getTherepeuticActions.then(function(msg){
				if(msg.status ==  200){
					$scope.therapeuticActions = msg.data;
				}else{
					toastr.error("Error Fetching Therepeutic Actions");
				}
			})
			var getHerbIndications = lookupService.getAllActiveLookups('HerbIndication');
			getHerbIndications.then(function(msg){
				if(msg.status ==  200){
					$scope.herbIndications = msg.data;
				}else{
					toastr.error("Error Fetching Herb Indications");
				}
			})
			var getLanguages = lookupService.getAllActiveLookups('HerbLanguage');
			getLanguages.then(function(msg){
				if(msg.status ==  200){
					$scope.languages = msg.data;
				}else{
					toastr.error("Error Fetching Languages");
				}
			})
			var getTherapeuticTypes = lookupService.getAllActiveLookups('TherapeuticType');
			getTherapeuticTypes.then(function(msg){
				if(msg.status ==  200){
					$scope.therapeuticTypes = msg.data;
				}else{
					toastr.error("Error Fetching Therapeutic Types");
				}
			})
			var getFormOfConsumption = lookupService.getAllActiveLookups('FormOfFormulation');
			getFormOfConsumption.then(function(msg){
				if(msg.status ==  200){
					$scope.formOfConsumptions = msg.data;
				}else{
					toastr.error("Error Fetching Form Of Consumption");
				}
			})
			var getPurification = lookupService.getAllActiveLookups('Purification');
			getPurification.then(function(msg){
				if(msg.status ==  200){
					$scope.purifications = msg.data;
				}else{
					toastr.error("Error Fetching Purifications");
				}
			})
			var getHerbTaste = lookupService.getAllActiveLookups('HerbTaste');
			getHerbTaste.then(function(msg){
				if(msg.status ==  200){
					$scope.herbTaste = msg.data;
				}else{
					toastr.error("Error Fetching Herb Taste");
				}
			})
			var getChemicalCompounds = lookupService.getAllActiveLookups('ChemicalCompounds');
			getChemicalCompounds.then(function(msg){
				if(msg.status ==  200){
					$scope.chemicalCompounds = msg.data;
				}else{
					toastr.error("Error Fetching Chemical Compounds");
				}
			})
			var getReferences = lookupService.getAllActiveLookups('References');
			getReferences.then(function(msg){
				if(msg.status ==  200){
					$scope.references = msg.data;
				}else{
					toastr.error("Error Fetching References");
				}
			})
			var getWebCategories = lookupService.getAllActiveLookups('WebCategory');
			getWebCategories.then(function(msg){
				if(msg.status ==  200){
					$scope.webCategories = msg.data;
				}else{
					toastr.error("Error Fetching Web Categories");
				}
			})
			// Get herb classifications
			var getHerbClassifications = lookupService.getAllActiveLookups('herbClassification');
			getHerbClassifications.then(function(msg){
				if(msg.status ==  200){
					$scope.herbClassifications = msg.data;
				}else{
					toastr.error("Error Fetching Herb Classifications");
				}
			})
			// Get all herbs
			var getAllHerbs = herbService.getAll();
			getAllHerbs.then(function(msg){
				if(msg.status ==  200){
					$scope.herbsList = msg.data;
				}else{
					toastr.error("Error Fetching Herbs");
				}
			})
		}else{
			$location.path('/');
		}
	}

	$scope.createHerb = function(herb){
		var herb = herbService.create(herb);
		herb.then(function(msg){
			if(msg.status == 200){
				$scope.isAddHerbEnabled = false;
				$scope.herbId = msg.data;
				$scope.initHerb();
				$scope.clearCache();
				if($scope.file.length > 0){
					$scope.uploadFiles($scope.herbId);
				}
				toastr.success('Herb created successfully');
			}else{
				toastr.error('Error while creating');
			}
		})
	}
	
	$scope.getHerb = function(herbId){
		var getHerb = herbService.get(herbId);
		getHerb.then(function(msg){
			if(msg.status == 200){
				$scope.isAddHerbEnabled = true;
				$scope.herbId = msg.data.id;
				$scope.herb = JSON.parse(msg.data.json);
			}else{
				toastr.error("Error Fetching Herb");
			}
		})
	}
	
	$scope.updateHerb = function(herb){
		herb.id = $scope.herbId;
		var updateHerb = herbService.update(herb);
		updateHerb.then(function(msg){
			if(msg.status == 200){
				$scope.isAddHerbEnabled = false;
				$scope.initHerb();
				if($scope.file.length > 0){
					$scope.uploadFiles($scope.herbId);
				}
				$scope.clearCache();
				toastr.success('Herb updated successfully');
			}else{
				toastr.error('Error updating herb');
			}
		})
	}

	$scope.deleteHerb = function(herb){
		var deleteHerb = herbService.deleteHerb(herb);
		deleteHerb.then(function(msg){
			if(msg.status == 200){
				toastr.success('Herb Deleted successfully');
			}else{
				toastr.error('Error deleting herb');
			}
		})
	}
	
	$scope.addHerb = function(){
		$scope.isAddHerbEnabled = true;
	}

	$scope.backToList = function(){
		$scope.isAddHerbEnabled = false;
		$scope.clearCache();
	}
	
	$scope.clearCache = function(){
		$scope.herbId = "";
		$scope.herb = {};
		$scope.herb.homeRemedies = [];
		$scope.herb.safetyIndications = [];
		$scope.herb.didYouKnow = [];
		$scope.herbList = {};
		$scope.herb.webCategories = [];
}

	$scope.addHomeRemedies = function(){
		$scope.herb.homeRemedies.push($scope.homeRemedy);
		$scope.homeRemedy = "";
	}
	
	$scope.addSafetyIndication = function(){
		$scope.herb.safetyIndications.push($scope.safetyIndication);
		$scope.safetyIndication = "";
	}
	
	$scope.addDidYouKnow = function(){
		$scope.herb.didYouKnow.push($scope.didYouKnow);
		$scope.didYouKnow = "";
	}
	
	$scope.addWebCategory = function(){
		var webCategory = {};
		webCategory.webCategory = $scope.webCategory;
		webCategory.title = $scope.title;
		webCategory.content = $scope.content;
		$scope.herb.webCategories.push(webCategory);
		webCategory.webCategory = $scope.webCategory;
		webCategory.title = $scope.title;
		webCategory.content = $scope.content;
		webCategory = {};
		$scope.title = "";
		$scope.content = "";
	}

	$scope.removeWebCategory = function(index){
		$scope.herb.webCategories.splice(index, 1);
	}

	$scope.removeDidYouKnow = function(index){
		$scope.herb.didYouKnow.splice(index, 1);
	}

	$scope.removeHomeRemedy = function(index){
		$scope.herb.homeRemedies.splice(index, 1);
	}

	$scope.removeSafetyIndication = function(index){
		$scope.herb.safetyIndications.splice(index, 1);
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

	$scope.uploadFiles = function (herbId) {
		formdata.append("type", "IMAGE");
		formdata.append("id", herbId);
		formdata.append("docInfo",	"Herb Image");
		var fileupload = fileUploadService.upload(formdata);
		fileupload.then(function(msg){
			var jsonResult = msg.data;
			if(msg.status == 200) {
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