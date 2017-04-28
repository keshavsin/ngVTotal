
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

            }
        },
        "dateFormat": 'dd/MMM/yyyy hh:mm:ss a'
    });
}());
