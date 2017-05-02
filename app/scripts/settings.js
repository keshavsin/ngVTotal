
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
                    "url": "/api/herb/get",
                    "method": "GET"
                },
				"getActiveExplorations": {
                    "url": "/api/herb/getall",
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
                    "url": "/api/blogcomment/getall",
                    "method": "GET"
                },
				"getCommentReplies": {
                    "url": "/api/commentreply/getall",
                    "method": "GET"
                },
				"getBlogLikes": {
                    "url": "/api/bloglike/getall",
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
            }
        },

        "dateFormat": 'dd/MMM/yyyy hh:mm:ss a'
    });
}());
