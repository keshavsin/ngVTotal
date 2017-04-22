
(function() {
    'use strict';
    vtApp.constant('appSettings', {
				"_":window._,
        "dataType": "local",
        "local": {
            "baseURL": "http://localhost:9000/static"
        },
        "production": {
            "baseURL": "http://localhost:8080"
        },
      //API URL
        "appAPI": {
            "details": {
                "register": {
                    "url": "/api/user/register",
                    "method": "POST"
                },
                "login": {
                    "url": "/api/login",
                    "method": "GET"
                },
                "logout": {
                    "url": "/api/logout",
                    "method": "GET"
                },
                "validate": {
                    "url": "/api/validate",
                    "method": "GET"
                },
                "changePassword": {
                    "url": "/api/changepassword",
                    "method": "POST"
                },
                "forgotPassword": {
                    "url": "/api/forgot",
                    "method": "POST"
                },
                "validateEmail": {
                    "url": "/api/validateEmail",
                    "method": "GET"
                }
            }            
        },
        "dateFormat": 'dd/MMM/yyyy hh:mm:ss a'
    });
}());
