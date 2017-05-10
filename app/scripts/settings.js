
(function() {
    'use strict';
    vtApp.constant('appSettings', {
        "dataType": "production",
        "local": {
            "baseURL": "http://localhost:9000/static"
        },
        "production": {
            "baseURL": "http://localhost:8080/controllers"
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
                    "method": "POST"
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
                },
                "logout": {
                    "url": "/api/logout",
                    "method": "GET"
                }
            },
			"explore": {
                "getExplore": {
                    "url": "/api/herb/get",
                    "method": "GET"
                },
				"getActiveExplorations": {
                    "url": "/api/herb/related",
                    "method": "GET"
                }
            },
			"product": {
                "getProduct": {
                    "url": "/api/product/get",
                    "method": "GET"
                },
				"getActiveProducts": {
                    "url": "/api/product/getall",
                    "method": "GET"
                },
				"getRelatedProducts": {
                    "url": "/api/product/related",
                    "method": "GET"
                },
				"getProducts": {
                    "url": "/api/product/getall",
                    "method": "GET"
                },
				"create": {
                    "url": "/api/product/create",
                    "method": "POST"
                },
				"update": {
                    "url": "/api/product/update",
                    "method": "PUT"
                }
            },
			"manufacturer": {
                "getManufacturer": {
                    "url": "/api/manufacturer/get",
                    "method": "GET"
                },
				"getActiveManufacturers": {
                    "url": "/api/manufacturer/getall",
                    "method": "GET"
                },
				"getFeaturedManufacturers": {
                    "url": "/api/manufacturer/featured",
                    "method": "GET"
                },
				"getManufacturers": {
                    "url": "/api/manufacturer/getall",
                    "method": "GET"
                },
				"getManufacturer": {
                    "url": "/api/manufacturer/get",
                    "method": "GET"
                },
				"updateManufacturer": {
                    "url": "/api/manufacturer/update",
                    "method": "PUT"
                },
				"createManufacturer": {
                    "url": "/api/manufacturer/create",
                    "method": "POST"
                }
            },
			"professional": {
                "getProfessional": {
                    "url": "/api/professional/get",
                    "method": "GET"
                },
				"getActiveProfessionals": {
                    "url": "/api/professional/getall",
                    "method": "GET"
                },
				"getFeaturedProfessionals": {
                    "url": "/api/professional/featured",
                    "method": "GET"
                },
				"create": {
                    "url": "/api/professional/create",
                    "method": "POST"
                },
				"update": {
                    "url": "/api/professional/update",
                    "method": "PUT"
                }
            },
			"blog": {
                "getBlog": {
                    "url": "/api/blog/get",
                    "method": "GET"
                },
				"getAllBlogs": {
                    "url": "/api/blog/getall",
                    "method": "GET"
                },
				"create": {
                    "url": "/api/blog/create",
                    "method": "POST"
                },
				"update": {
                    "url": "/api/blog/update",
                    "method": "PUT"
                },
				"getBlogComments": {
                    "url": "/api/blogcomments",
                    "method": "GET"
                },
				"getCommentReplies": {
                    "url": "/api/commentreplies",
                    "method": "GET"
                },
				"getBlogLikes": {
                    "url": "/api/bloglikes",
                    "method": "GET"
                },
				"insertBlogComment": {
                    "url": "/api/blogcomment/create",
                    "method": "POST"
                },
				"insertBlogLike": {
                    "url": "/api/bloglike/create",
                    "method": "POST"
                },
				"insertCommentReply": {
                    "url": "/api/commentreply/create",
                    "method": "POST"
                }
            },
			"lookup": {
                "getAllActiveLookups": {
                    "url": "/api/lookup/getactivelookups",
                    "method": "GET"
                },
				"getAllLookups": {
                    "url": "/api/lookup/getalllookups",
                    "method": "GET"
                },
				"getAllLookupTypes": {
                    "url": "/api/lookup/getalllookuptypes",
                    "method": "GET"
                },
				"createLookup": {
                    "url": "/api/lookup/createlookup",
                    "method": "POST"
                },
				"getLookup": {
                    "url": "/api/lookup/getlookup",
                    "method": "GET"
                },
				"updateLookup": {
                    "url": "/api/lookup/updatelookup",
                    "method": "PUT"
                },
				"deleteLookup": {
                    "url": "/api/lookup/deletelookup",
                    "method": "DELETE"
                },
				"getLookupWithReference": {
                    "url": "/api/lookup/getlookupwithreference",
                    "method": "GET"
                }
            },
			"herb": {
                "create": {
                    "url": "/api/herb/create",
                    "method": "POST"
                },
				"get": {
                    "url": "/api/herb/get",
                    "method": "GET"
                },
				"getAll": {
                    "url": "/api/herb/getall",
                    "method": "GET"
                },
				"update": {
                    "url": "/api/herb/update",
                    "method": "PUT"
                },
				"deleteHerb": {
                    "url": "/api/herb/delete",
                    "method": "DELETE"
                }
            },
			"formulation": {
                "create": {
                    "url": "/api/formulation/create",
                    "method": "POST"
                },
				"get": {
                    "url": "/api/formulation/get",
                    "method": "GET"
                },
				"getAll": {
                    "url": "/api/formulation/getall",
                    "method": "GET"
                },
				"update": {
                    "url": "/api/formulation/update",
                    "method": "PUT"
                },
				"deleteHerb": {
                    "url": "/api/formulation/delete",
                    "method": "DELETE"
                }
            },
            "admin": {
                "getUsers": {
                    "url": "/api/user/getall",
                    "method": "GET"
                },
                "enableUser": {
                    "url": "/api/user/enable",
                    "method": "PUT"
                }                
            }
        },

        "dateFormat": 'dd/MMM/yyyy hh:mm:ss a'
    });
}());
