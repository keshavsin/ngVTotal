'use strict';

/**
 * @ngdoc function
 * @name vtApp.service:ExploreSrv
 * @description
 * # ExploreSrv
 * Explore service of the vtApp
 */
vtApp.service('ExploreService',['appSettings', 'apiServices', function (appSettings, apiServices) {

	this.getExploreDetails = function(herbId) {
		console.log("Isnide Service for login ");
		return apiServices.doAPIRequest(appSettings.appAPI.explore.getExplore, null, herbId, "sessionStorage");
	};	
	
	this.getActiveExplorations = function() {
		console.log("Isnide Service for Exploration listings ... ");
		return apiServices.doAPIRequest(appSettings.appAPI.explore.getActiveExplorations, null, null, "sessionStorage");
	};	
	
}]);
