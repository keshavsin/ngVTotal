'use strict';


vtApp.service('apiServices', function($http, $q, $timeout, $log, $rootScope, $location, $parse, $filter, appSettings) {

        //Do Request
        this.doAPIRequest = function( apiObj, requestParams, urlParam, localStorageItem) {

            var defer = $q.defer();
            var callURL = "";
            if (sessionStorage.getItem("myToken") != null) {
            	var requestHeader = null; //{"x-token":sessionStorage.getItem("myToken")};  //{"x-token":	"tIxKEibK3iO9OIiQY+1hNA=="};
            } else {
            	var requestHeader = null;
            }

            if (appSettings.dataType == 'local') {
                callURL = appSettings.local.baseURL + apiObj.url;
            }
            if (appSettings.dataType == 'production') {
                callURL = appSettings.production.baseURL +  apiObj.url;
            }
            
            if (urlParam != null) {
            	callURL = callURL + "/"+ urlParam
            }

			if (appSettings.dataType == 'local') {
				//dont suffix .Json when POST
                callURL = callURL+".json";
            }
            var httpParams = {
                method: apiObj.method,
                url: callURL,
                data: requestParams
            };
            
            if (requestHeader != null) {
                httpParams.headers = requestHeader;
            }
            console.log(httpParams);
            //TODO 
            //Check if obj is present in local Storage else get it from the http call below.

            $timeout(function() {
               $http(httpParams)
                    .success(function(data, status, headers, config) {
                        if (status == 200) {
                           $log.debug('Response Success Data: ============= \n '+callURL);
                           //TODO
                           if (headers("X-Token") != null) {
                        	   sessionStorage.setItem("myToken", headers("X-Token"));
                           }
                           console.log(headers("X-Token"));
                        }
                        console.log($rootScope.authenticated);
                        defer.resolve(data);
                        
                    })
                    .error(function(error, status, headers, config) {                       
                        if (status == 400) {
                           $log.debug('Error: Could not fetch data from: ================== \n'+callURL);
                        }                    
                        defer.reject(error);
                    })
            }, 0);
            console.log(" DEFER PROMISE " + JSON.stringify(defer.promise));
            return defer.promise;
            
         }
    });
