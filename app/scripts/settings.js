
(function() {
    'use strict';
    vtApp.constant('appSettings', {
        "dataType": "local",
        "local": {
            "baseURL": "http://localhost:9000/static"
        },
        "production": {
            "baseURL": "http://localhost:8080"
        },
      //API URL
        "appAPI": {
            "common": {
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
            },
			"explore": {
                "getExplore": {
                    "url": "/api/explore/get",
                    "method": "GET"
                },
				"getActiveExplorations": {
                    "url": "/api/explore/active",
                    "method": "GET"
                }
            },
			"product": {
                "getProduct": {
                    "url": "/api/product/get",
                    "method": "GET"
                },
				"getActiveProducts": {
                    "url": "/api/product/active",
                    "method": "GET"
                },
				"getRelatedProducts": {
                    "url": "/api/product/related",
                    "method": "GET"
                }
            },
			"manufacturer": {
                "getManufacture": {
                    "url": "/api/manufacture/get",
                    "method": "GET"
                },
				"getActiveManufacturers": {
                    "url": "/api/manufacture/active",
                    "method": "GET"
                },
				"getFeaturedManufacturers": {
                    "url": "/api/manufacture/featured",
                    "method": "GET"
                }
            },
			"professional": {
                "getProfessional": {
                    "url": "/api/professional/get",
                    "method": "GET"
                },
				"getActiveProfessionals": {
                    "url": "/api/professional/active",
                    "method": "GET"
                },
				"getFeaturedProfessionals": {
                    "url": "/api/professional/featured",
                    "method": "GET"
                }
            }
        },
        "dateFormat": 'dd/MMM/yyyy hh:mm:ss a'
    });
}());
