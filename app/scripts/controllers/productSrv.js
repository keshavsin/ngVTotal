'use strict';

/**
 * @ngdoc function
 * @name vtApp.service:ProductSrv
 * @description
 * # ProductSrv
 * Product service of the vtApp
 */
vtApp.service('ProductService',['appSettings', 'apiServices', function (appSettings, apiServices) {

	this.getProductDetails = function(productId) {
		console.log("Isnide Service for Product  " + productId);
		return apiServices.doAPIRequest(appSettings.appAPI.product.getProduct, null, productId, "sessionStorage");
	};	

	this.getRelatedProducts = function(herb) {
		console.log("Isnide Service for Product  " + herb);
		return apiServices.doAPIRequest(appSettings.appAPI.product.getRelatedProducts, null, null, "sessionStorage");
	};
	
	this.getActiveProducts = function() {
		console.log("Inside Service for Product  ");
		return apiServices.doAPIRequest(appSettings.appAPI.product.getActiveProducts, null, null, "sessionStorage");
	};
}]);
