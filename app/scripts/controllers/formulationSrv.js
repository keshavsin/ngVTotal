'use strict';

/**
 * @ngdoc function
 * @name vtApp.service:ProductSrv
 * @description
 * # ProductSrv
 * Product service of the vtApp
 */
vtApp.service('FormulationService',['appSettings', 'apiServices', function (appSettings, apiServices) {

	this.create = function(formulation) {
		var jsonData = {};
		jsonData.json = formulation;
		console.log("Inside Service for Formulation" );
		return apiServices.doAPIRequest(appSettings.appAPI.formulation.create, jsonData, null, "sessionStorage");
	};	

	this.get = function(formulationId) {
		console.log("Inside Service for Formulation" +formulationId);
		return apiServices.doAPIRequest(appSettings.appAPI.formulation.get, null, formulationId, "sessionStorage");
	};
	
	this.getAll = function() {
		console.log("Inside Service for Formulation");
		return apiServices.doAPIRequest(appSettings.appAPI.formulation.getAll, null, null, "sessionStorage");
	};

	this.update = function(formulation) {
		var jsonData = {};
		jsonData.json = formulation;
		console.log("Inside Service for Formulation");
		return apiServices.doAPIRequest(appSettings.appAPI.formulation.update, jsonData, null, "sessionStorage");
	};

	this.deleteFormulation = function(formulationId) {
		console.log("Inside Service for Formulation" + formulationId);
		return apiServices.doAPIRequest(appSettings.appAPI.formulation.deleteHerb, null, formulationId, "sessionStorage");
	};

}]);
