'use strict';

/**
 * @ngdoc function
 * @name vtApp.service:ProductSrv
 * @description
 * # ProductSrv
 * Product service of the vtApp
 */
vtApp.service('AdminService',['appSettings', 'apiServices', function (appSettings, apiServices) {

	this.getUsers = function() {
		console.log("Inside Service for Admin Service Panel ");
		return apiServices.doAPIRequest(appSettings.appAPI.admin.getUsers, null, null, "sessionStorage");
	};

	this.enableUser = function(user) {
		console.log("Inside Service for Admin Service Panel ");
		return apiServices.doAPIRequest(appSettings.appAPI.admin.enableUser, user, null, "sessionStorage");
	};

}]);
