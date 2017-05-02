'use strict';
vtApp.factory('FormulationService', function($http){
	return{
		
		create : function(formulation){
			var jsonData = {};
			jsonData.json = formulation;
			var $promise = $http.post("api/formulation/create",jsonData);
			return $promise;
		},
		
		get : function(formulationId){
			var $promise = $http.get("api/formulation/get/"+formulationId+"?"+new Date().getTime());
			return $promise;
		},
		
		getAll : function(){
			var $promise = $http.get("api/formulation/getall/"+"?"+new Date().getTime());
			return $promise;
		},
		
		update : function(formulation){
			var jsonData = {};
			jsonData.json = formulation;
			var $promise = $http.put("api/formulation/update",jsonData);
			return $promise;
		},
		
		delete : function(formulationId){
			var $promise = $http.delete("api/formualtion/delete/"+formulationId);
			return $promise;
		}

	}
})