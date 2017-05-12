vtApp.controller('FormulationController', ['$scope','$rootScope','$location','FormulationService','LookupService','HerbService',function($scope,$rootScope,$location,formulationService,lookupService,herbService){

	$scope.formulation = {};
	$scope.formulation.formulationItems = [];

	$scope.addFormulation = function(){
		$scope.isAddFormulationEnabled = true;
	}

	$scope.backToList = function(){
		$scope.isAddFormulationEnabled = false;
		$scope.clearCache();
	}

	$scope.clearCache = function(){
		$scope.formulation = {};
	}

	$scope.initFormulation = function(){
		// Check the Session
		if($rootScope.sessionProfile != null){
			// User logged in and loading initial things
			// Load all Formualtions
			var getAllFormulations = formulationService.getAll();
			getAllFormulations.then(function(msg){
				if(msg.status == 200){
					$scope.formulationsList = msg.data;
				}else{
					toastr.error("Error Fetching Formulations");
				}
			})
			// Load all herbs for references 
			var getAllHerbs = herbService.getAll();
			getAllHerbs.then(function(msg){
				if(msg.status == 200){
					$scope.herbs = msg.data;
				}else{
					toastr.error("Error Fetching Herbs");
				}
			})
			// Get References from lookup  
			var getReferences = lookupService.getAllActiveLookups('References');
			getReferences.then(function(msg){
				if(msg.status == 200){
					$scope.references = msg.data;
				}else{
					toastr.error("Error Fetching References");
				}
			})
			// Get System from lookup  
			var getSystem = lookupService.getAllActiveLookups('System');
			getSystem.then(function(msg){
				if(msg.status == 200){
					$scope.system = msg.data;
				}else{
					toastr.error("Error Fetching System");
				}
			})
			// Get formulation types from lookup  
			var getFormulationTypes = lookupService.getAllActiveLookups('FormulationType');
			getFormulationTypes.then(function(msg){
				if(msg.status == 200){
					$scope.formulationTypes = msg.data;
				}else{
					toastr.error("Error Fetching Formulation Types");
				}
			})
		}else{
			$location.path('/');
		}
	}
	
	$scope.addFormulations = function(addFormulationItem){
		$scope.formulation.formulationItems.push(addFormulationItem);
		$scope.addFormulationItem = {};
	}

	$scope.createFormulation = function(formulation){
		var createFormulation = formulationService.create(formulation);
		createFormulation.then(function(msg){
			if(msg.status == 200){
				$scope.initFormulation();
				$scope.isAddFormulationEnabled = false;
				$scope.clearCache();
			}else{
				toastr.error("Error Creating Formulation");
			}
		})
	}
	
	$scope.getFormulation = function(formulationId){
		var getFormulation = formulationService.get(formulationId);
		getFormulation.then(function(msg){
			if(msg.status == 200){
				$scope.isAddFormulationEnabled = true;
				$scope.formulation = msg.data;
				$scope.formulation.json = "";
			}else{
				toastr.error("Error Fetching Formulation");
			}
		})
	}
	
	$scope.updateFormulation = function(formulation){
		var updateFormulation = formulationService.update(formulation);
		updateFormulation.then(function(msg){
			if(msg.status == 200){
				$scope.initFormulation();
				$scope.isAddFormulationEnabled = false;
				$scope.clearCache();
			}else{
				toastr.error("Error updating Formulation");
			}
		})
	}

}]);