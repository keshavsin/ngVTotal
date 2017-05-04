'use strict';

/**
 * @ngdoc function
 * @name vtApp.service:ProfessionalSrv
 * @description
 * # ProfessionalSrv
 * Professional service of the vtApp
 */
vtApp.service('ProfessionalService',['appSettings', 'apiServices', function (appSettings, apiServices) {

	this.getFeaturedProfessionals = function() {
		console.log("Isnide Service for  featured Professional ");
		return apiServices.doAPIRequest(appSettings.appAPI.professional.getFeaturedProfessionals, null, null, "sessionStorage");
	};
	
	this.getActiveProfessionals = function() {
		console.log("Isnide Service for Active Professional ");
		return apiServices.doAPIRequest(appSettings.appAPI.professional.getActiveProfessionals, null, null, "sessionStorage");
	};

	this.getProfessionalDetails = function(professionalId) {
		console.log("Isnide Service for Professional" + professionalId);
		return apiServices.doAPIRequest(appSettings.appAPI.professional.getProfessional, null, professionalId, "sessionStorage");
	};	

	this.createProfessional = function(professional) {
		console.log("Isnide Service for Professional" );
		return apiServices.doAPIRequest(appSettings.appAPI.professional.create, professional, null, "sessionStorage");
	};	

	this.updateProfessional = function(professional) {
		console.log("Isnide Service for Professional");
		return apiServices.doAPIRequest(appSettings.appAPI.professional.update, professional, null, "sessionStorage");
	};	

}]);
