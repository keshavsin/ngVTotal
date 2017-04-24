
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
            },
			"explore": {
                "getExplore": {
                    "url": "/api/explore/getexplore",
                    "method": "GET"
                },
				"getActiveExplorations": {
                    "url": "/api/explore/activeexplorations",
                    "method": "GET"
                }
            },
			"product": {
                "getProduct": {
                    "url": "/api/product/getproduct",
                    "method": "GET"
                },
				"getActiveProducts": {
                    "url": "/api/product/getactiveproducts",
                    "method": "GET"
                },
				"getRelatedProducts": {
                    "url": "/api/product/relatedproducts",
                    "method": "GET"
                }
            },
			"manufacturer": {
                "getManufacture": {
                    "url": "/api/manufacture/getmanufacturer",
                    "method": "GET"
                },
				"getActiveManufacturers": {
                    "url": "/api/manufacture/getactivemanufacturers",
                    "method": "GET"
                },
				"getFeaturedManufacturers": {
                    "url": "/api/manufacture/featuredmanufacturers",
                    "method": "GET"
                }
            },
			"professional": {
                "getProfessional": {
                    "url": "/api/professional/getprofessional",
                    "method": "GET"
                },
				"getActiveProfessionals": {
                    "url": "/api/professional/getactiveprofessionals",
                    "method": "GET"
                },
				"getFeaturedProfessionals": {
                    "url": "/api/professional/featuredprofessionals",
                    "method": "GET"
                }
            }
        },
        "dateFormat": 'dd/MMM/yyyy hh:mm:ss a'
    });
}());
