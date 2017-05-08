'use strict';

/**
 * @ngdoc function
 * @name vtApp.service:HeaderSrv
 * @description
 * # HeaderSrv
 * Header service of the vtApp
 */
vtApp.service('HeaderService',['appSettings', 'apiServices', function (appSettings, apiServices) {

	this.login = function(loginDetails) {
		console.log("Inside Service for Login ");
		return apiServices.doAPIRequest(appSettings.appAPI.common.login, loginDetails, null, "sessionStorage");
	};	

	this.save = function(registerDetails) {
		console.log("Inside Service for Register ");
		return apiServices.doAPIRequest(appSettings.appAPI.common.register, registerDetails, null, "sessionStorage");
	};	

	this.validateEmail = function(encryptedEmail) {
		console.log("Isnide Service for validate Email ");
		return apiServices.doAPIRequest(appSettings.appAPI.common.validateEmail, null, encryptedEmail, "sessionStorage");
	};

	this.logout = function() {
		console.log("Isnide Service for Logout ");
		return apiServices.doAPIRequest(appSettings.appAPI.common.logout, null, null, "sessionStorage");
	};

}]);
