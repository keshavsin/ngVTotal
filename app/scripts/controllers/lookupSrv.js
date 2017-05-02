'use strict';

/**
 * @ngdoc function
 * @name vtApp.service:ProductSrv
 * @description
 * # ProductSrv
 * Product service of the vtApp
 */
vtApp.service('LookupService',['appSettings', 'apiServices', function (appSettings, apiServices) {

	this.getAllActiveLookups = function(lookupType) {
		console.log("Inside Service for Lookup " + lookupType);
		return apiServices.doAPIRequest(appSettings.appAPI.lookup.getAllActiveLookups, null, lookupType, "sessionStorage");
	};	

	this.getAllLookups = function(lookupType) {
		console.log("Inside Service for Lookup " );
		return apiServices.doAPIRequest(appSettings.appAPI.lookup.getAllLookups, null, lookupType, "sessionStorage");
	};
	
	this.getAllLookupTypes = function() {
		console.log("Inside Service for Lookup");
		return apiServices.doAPIRequest(appSettings.appAPI.lookup.getAllLookupTypes, null, null, "sessionStorage");
	};

	this.createLookup = function(lookup) {
		console.log("Inside Service for Lookup");
		return apiServices.doAPIRequest(appSettings.appAPI.lookup.createLookup, lookup, null, "sessionStorage");
	};

	this.getLookup = function(lookupId) {
		console.log("Inside Service for Lookup " + lookupId);
		return apiServices.doAPIRequest(appSettings.appAPI.lookup.getLookup, null, lookupId, "sessionStorage");
	};

	this.updateLookup = function(lookup) {
		console.log("Inside Service for Lookup ");
		return apiServices.doAPIRequest(appSettings.appAPI.lookup.updateLookup, lookup, null, "sessionStorage");
	};

	this.deleteLookup = function(lookupId) {
		console.log("Inside Service for Blog " + lookupId);
		return apiServices.doAPIRequest(appSettings.appAPI.lookup.deleteLookup, null, lookupId, "sessionStorage");
	};

	this.getLookupWithReference = function(lookupType) {
		console.log("Inside Service for Blog " + lookupType);
		return apiServices.doAPIRequest(appSettings.appAPI.lookup.getLookupWithReference, null, lookupType, "sessionStorage");
	};

}]);
