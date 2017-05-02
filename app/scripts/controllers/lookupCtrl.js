vtApp.controller('LookupController', ['$scope','$rootScope','$location','LookupService',function($scope,$rootScope,$location,lookupService){
	
	$scope.lookup = {}; 
	$scope.lookupType="Please Select";
	
	$scope.initLookup = function(){
//		var isLoggedIn = sessionService.isLoggedIn();
//		if(!isLoggedIn) {
//			$location.path('/login');
//			toastr.info("Session Expired Please Login!");
//		}
		var getAllLookups = lookupService.getAllLookupTypes();
		getAllLookups.then(function(msg){
			if(msg.status == 200){
				$scope.lookupTypesList = msg.data;
				$scope.lookupTypesList.push("Please Select");
			}else{
				toastr.error("Error Fetching Lookups!");
			}
		})
	}

	$scope.getAllLookups = function(){
		console.log($scope.lookupType);
		if ($scope.lookupType !== 'Please Select') {
			$scope.lookup.type=$scope.lookupType;
			var getAllLookups = lookupService.getAllLookups($scope.lookupType);
			getAllLookups.then(function(msg){
				if(msg.status == 200){
					$scope.lookupsList = msg.data;
				}else{
					toastr.error("Error Fetching Lookups!");
				}
			})
		}
	}
	// Update the code to work for the screens provided in the html
	$scope.addLookup = function(lookup){
		var createLookup = lookupService.createLookup(lookup);
		createLookup.then(function(msg){
			if(msg.status == 200){
				toastr.success("Lookup Created Successfully");
				$scope.getAllLookups($scope.lookupType);
			}else{
				toastr.error("Error Creating Lookup");
			}
		})
	}
	
	$scope.updateLookup = function(lookup){
		var updateLookup = lookupService.updateLookup(lookup);
		updateLookup.then(function(msg){
			if(msg.status == 200){
				toastr.success("Lookup Updated Successfully");
				$scope.getAllLookups($scope.lookupType);
			}else{
				toastr.error("Error Updating Lookup");
			}
		})
	}
	
}]);