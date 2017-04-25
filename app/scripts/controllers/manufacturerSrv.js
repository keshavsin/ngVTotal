'use strict';

/**
 * @ngdoc function
 * @name vtApp.service:ManufactureSrv
 * @description
 * # ManufactureSrv
 * Manufacture service of the vtApp
 */
vtApp.service('ManufactureService',['appSettings', 'apiServices', function (appSettings, apiServices) {

	this.getFeaturedManufacturers = function() {
		console.log("Isnide Service for Manufacturer ");
		return apiServices.doAPIRequest(appSettings.appAPI.manufacturer.getFeaturedManufacturers, null, null, "sessionStorage");
	};	
	
	this.getActiveManufacturers = function() {
		console.log("Isnide Service for Manufacturer ");
		return apiServices.doAPIRequest(appSettings.appAPI.manufacturer.getActiveManufacturers, null, null, "sessionStorage");
	};

	this.getManufacturerDetails = function(manufacturerId) {
		console.log("Isnide Service for Manufacturer ");
		return apiServices.doAPIRequest(appSettings.appAPI.manufacturer.getManufacturer, null, manufacturerId, "sessionStorage");
	};

}]);
