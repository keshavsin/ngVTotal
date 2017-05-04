'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Header Controller of the vtApp
 */
vtApp.controller('HeaderCtrl',['$rootScope', '$scope', '$route', 'HeaderService', 'SessionService' ,'$location', '$document','$log', '$modal', 'appSettings', function ($rootScope, $scope, $route, headerService, sessionService, $location, $document, $log, $modal, appSettings) {
	
	$scope.init = function() {
		console.log(" Inside init of header Controller");
	}
	
	$scope.init();
	

		//MODAL WINDOW OF LOGIN
	$rootScope.openLogin = function() {
		var modalInstance = $modal.open({
			animation: $scope.animationsEnabled,
			templateUrl: "views/modals/loginModal.html",
			controller: 'LoginCtrl',
			size: 'sm',
			resolve: {
				infoToLoginControllerFromParent: function() {
					//return $scope.items;
				}
			}
		});
		modalInstance.result.then(function(selectedObj) {
			console.log(" Login Details passed to parent " + JSON.stringify(selectedObj));
			if (selectedObj == null) {
				$rootScope.authenticated = false;
			} else {
				$rootScope.sessionProfile = selectedObj;
				$rootScope.authenticated = true;
				sessionService.saveSession($rootScope.sessionProfile);
				$scope.updateMenu();
			}
		}, function() {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};
	
	////MODAL Window For Register
	$rootScope.openRegister = function() {
		var modalInstance = $modal.open({
			animation: $scope.animationsEnabled,
			templateUrl: "views/modals/registerModal.html",
			controller: 'RegisterCtrl',
			size: 'lg',
			resolve: {
				infoToRegisterControllerFromParent: function() {
					//return $scope.items;
				}
			}
		});

		modalInstance.result.then(function(selectedObj) {
			$rootScope.sessionProfile = selectedObj;
			if (selectedObj == null) {
				$rootScope.authenticated = false;
				console.log("Checking time out jdsjdkskds ");
				$rootScope.sessionMessage = "We have sent a mail verification link to your mail box";
				$rootScope.showSessionMessage=true;
				$timeout(function () { $rootScope.showSessionMessage = false; }, appSettings.messageTime);
			} else if (selectedObj.role == 'Customer'){
				$rootScope.sessionProfile = selectedObj;
				$rootScope.authenticated = true;
				sessionService.saveSession($rootScope.sessionProfile);
				$scope.updateMenu();
			}
		}, function() {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};
	
}]);




////MODAL CONTROLLER OF LOGIN
vtApp.controller('LoginCtrl',['$route', '$scope', '$modalInstance', '$location', 'infoToLoginControllerFromParent','HeaderService', function($route, $scope, $modalInstance, $location, infoToLoginControllerFromParent, headerService) {

//    $scope.loginDetails = {role:"Customer"};
//    $scope.isLoginError = false;
//    $scope.loginErrorMessage = "";
//    
//    $scope.toggleRole = function() {
//    	$scope.loginDetails.role = ($scope.loginDetails.role === 'Customer')?'Guide':'Customer';
//    }
//
//    $scope.ok = function() {
//    	var details =  headerService.login($scope.loginDetails);
//    	details.then(function(msg) {
//			var jsonResult = null;
//			if (msg.status == 200) {
//				jsonResult = msg.data;
//				$modalInstance.close(jsonResult);
//			} else if (msg.status == 401) {
//				if ($scope.loginDetails.role=='Customer') {
//					$scope.loginErrorMessage = "Invalid username or password, Please retry";
//				} else {
//					$scope.loginErrorMessage = "Invalid username or password, Check your mail box for the verification email";
//				}
//				$scope.isLoginError = true;
//			} else {
//				$scope.loginErrorMessage = "Error while processing your request";
//				$scope.isLoginError = true;
//			}
//		},function errorCallback(response) {
//			$location.path('/login');
//		});
//        
//    };
//    $scope.cancel = function() {
//		$modalInstance.dismiss('cancel');
//    };
    
    $scope.close = function() {
		$modalInstance.dismiss('cancel');
    };
}]);


// MODAL CONTROLLER For Register 
vtApp.controller('RegisterCtrl', ['$scope', '$modalInstance', '$location', 'infoToRegisterControllerFromParent','HeaderService', 'SessionService', function($scope, $modalInstance, $location, infoToRegisterControllerFromParent, headerService, sessionService) {

    $scope.registerDetails = {name:"Rama", role:"OTHERS"};
	$scope.registerDetails.login={email:"some@some.com", password:"pass1234", cnfpasswrd:"pass1234", mobile:1829189211, tncAgreed:false};
	$scope.isRegisterError = false;

    $scope.save = function(registerDetails) {
    	delete $scope.registerDetails.login.cnfpasswrd;
    	console.log($scope.registerDetails)
    	var details =  headerService.save(registerDetails);
    	details.then(function(msg) {
			console.log(" Data CTRL " + JSON.stringify(msg));
			var jsonResult = null;
			if (msg.status == 500) {
				$scope.registerError="Error creating your profile, Login if you already have an account";
				$scope.isRegisterError = true;
			} else if (msg.status == 409) {
				$scope.registerError="Email already exists, Login with your registered email";
				$scope.isRegisterError = true;
			} else {
				jsonResult = msg.data;
				$modalInstance.close(jsonResult);
			}
		},function errorCallback(response) {
			$location.path('/login');
		});
    }
    $scope.close = function() {
		$modalInstance.dismiss('cancel');
    };
}]);


////MODAL CONTROLLER For Forgot Password
vtApp.controller('PasswordCtrl', ['$scope', '$modalInstance', '$location', 'infoToRegisterControllerFromParent','HeaderService',function($scope, $modalInstance, $location, infoToRegisterControllerFromParent,headerService) {

	$scope.registerDetails={};
    
	$scope.ok = function() {
        // Make a web service call to back end to create the user if any errors show message on modal or on parent.
    };

	$scope.save = function(registerDetails) {
    	
    	//To send data perent Ctrl
    	//$modalInstance.close(registerDetails);
    	var details =  headerService.save(registerDetails);
    	details.then(function(msg) {
			console.log(" Data CTRL " + JSON.stringify(msg));
			var jsonResult = msg.data;
			//$scope.guideList = jsonResult;
		},function errorCallback(response) {
			if(response.status = 401) {
				$location.path('/login');
			}
		});
    }

    $scope.cancel = function() {
		$modalInstance.dismiss('cancel');
    };
    
	$scope.close = function() {
		$modalInstance.dismiss('cancel');
    };
}]);