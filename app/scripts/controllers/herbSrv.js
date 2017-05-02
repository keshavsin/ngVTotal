'use strict';

/**
 * @ngdoc function
 * @name vtApp.service:ProductSrv
 * @description
 * # ProductSrv
 * Product service of the vtApp
 */
vtApp.service('HerbService',['appSettings', 'apiServices', function (appSettings, apiServices) {

	this.create = function(herb) {
		var jsonData = {};
		jsonData.name = herb.name;
		jsonData.json = herb;
		console.log("Inside Service for Herb" );
		return apiServices.doAPIRequest(appSettings.appAPI.herb.create, jsonData, null, "sessionStorage");
	};	

	this.get = function(herbId) {
		console.log("Inside Service for Herb" );
		return apiServices.doAPIRequest(appSettings.appAPI.herb.get, null, herbId, "sessionStorage");
	};
	
	this.getAll = function() {
		console.log("Inside Service for Herb");
		return apiServices.doAPIRequest(appSettings.appAPI.herb.getAll, null, null, "sessionStorage");
	};

	this.update = function(herb) {
		var jsonData = {};
		jsonData.id = herb.id;
		jsonData.name = herb.name;
		jsonData.json = herb;
		console.log("Inside Service for Herb");
		return apiServices.doAPIRequest(appSettings.appAPI.herb.update, jsonData, null, "sessionStorage");
	};

	this.deleteHerb = function(herbId) {
		console.log("Inside Service for Lookup " + herbId);
		return apiServices.doAPIRequest(appSettings.appAPI.herb.deleteHerb, herbId, null, "sessionStorage");
	};

}]);
