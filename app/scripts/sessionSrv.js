'use strict';
vtApp.factory('SessionService', function($http) {
	return {
		saveSession : function(userInfo) {
			sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
			return true;
		}, 
		
		getSession : function() {
			var userInfo = sessionStorage.getItem("userInfo");
			return JSON.parse(userInfo);
		}, 

		isLoggedIn : function() {
			var userInfo = sessionStorage.getItem("userInfo");
			var isLoggedIn = (userInfo == null ? false : true);
			return isLoggedIn;
		}, 		

		isAdminUser : function() {
			var userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
			if (userInfo.role == "admin") {
				return true;
			} else {
				return false;
			}
		},		

		removeSession : function() {
			sessionStorage.removeItem("userInfo");
			sessionStorage.removeItem("myToken");
			return true;
		}
	}
});