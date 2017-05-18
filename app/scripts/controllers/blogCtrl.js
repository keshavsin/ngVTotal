vtApp.controller('BlogController', ['$scope','$rootScope', '$routeParams','$location','BlogService','fileUploadService','LookupService', 'toastr',function($scope,$rootScope, $routeParams,$location,blogService,fileUploadService,lookupService, toastr){

	$scope.blog = {};
	var formdata = new FormData();
	$scope.file = [];
	
	$scope.addBlog = function(){
		$scope.isAddBlogEnabled = true;
	}

	$scope.backToList = function(){
		$scope.isAddBlogEnabled = false;
		$scope.clearCache();
	}
	
	$scope.clearCache = function(){
		$scope.blog = {};
	}

	$scope.initBlog = function(){
		// Checking the session 
			// Get Blog Details
		if ($location.$$path.startsWith('/blogdetails')) {
			$scope.getBlogDetails($routeParams.id);
		} 
		// if($rootScope.sessionProfile != null){
			// If user Logged in loading init methods
			// Load All Blogs
			var getBlogs = blogService.getAllBlogs();
			getBlogs.then(function(msg){
				if(msg.status == 200){
					$scope.blogList = msg.data;
				}else{
					toastr.error("Error Fetching Blogs");
				}
			})
			// Get Systems from lookup			
			var getSystem = lookupService.getAllActiveLookups('System');
			getSystem.then(function(msg){
				if(msg.status == 200){
					$scope.system = msg.data;
				}else{
					toastr.error("Error Fetching System");
				}
			})
		// }else{
		// 	// If User not logged in route to home page			
		// 	$location.path('/');
		// }
	}

	// Creating Blog
	$scope.createBlog = function(blog){
		if($scope.file.length > 0){
			var createBlog = blogService.create(blog);
			createBlog.then(function(msg){
				if(msg.status == 200){
					toastr.success("Blog Created Successfully");
					$scope.blogId = msg.data;
					$scope.uploadFiles($scope.blogId);
					$scope.initBlog();
					$scope.isAddBlogEnabled = false;
					$scope.clearCache();
				}else{
					toastr.error("Error Creating Blog");
				}
			})
		}else{
			toastr.error("Please Choose Blog Image");
		}
	}

	// Get Blog
	$scope.getBlog = function(blogId){
		var getBlog = blogService.getBlogDetails(blogId);
		getBlog.then(function(msg){
			if(msg.status == 200){
				$scope.isAddBlogEnabled = true;
				$scope.blog = msg.data;
			}else{
				toastr.error("Error Fetching Blog");
			}
		})
	}

	// Get the blog Details
	$scope.getBlogDetails = function(blogId){
		var getBlog = blogService.getBlogDetails(blogId);
		getBlog.then(function(msg){
			if(msg.status == 200){
				$scope.isAddBlogEnabled = true;
				$scope.blogDetails = msg.data;
				$scope.getBlogComments($scope.blogDetails.id);
				$scope.getBlogLikes($scope.blogDetails.id);
			}else{
				toastr.error("Error Fetching Blog");
			}
		})
	}

	// Update Blog 
	$scope.updateBlog = function(blog){
		var updateBlog = blogService.update(blog);
		updateBlog.then(function(msg){
			if(msg.status == 200){
				if($scope.file.length > 0){
					$scope.uploadFiles(blog.id);
				}
				$scope.isAddBlogEnabled = false;
				$scope.clearCache();
			}else{
				toastr.error("Error Fetching Blog");
			}
		})
	}

	$scope.showComments = function(blogDetails){
		blogDetails.showComments = !blogDetails.showComments;
	}

	$scope.getBlogComments = function(blogId) {
		var getBlogComments = blogService.getBlogComments(blogId);
		getBlogComments.then(function(msg){
			if(msg.status == 200){
				var commentsList = msg.data;
				var i;
						$scope.blogDetails.comments = commentsList;
						for(i = 0; i < $scope.blogDetails.comments.length; i++){
							$scope.blogDetails.comments[i].reply = false;
							$scope.getCommentReplies($scope.blogDetails.comments[i].id);
						}
			}else{
				toastr.error("Error Fetching Blog Comments");
			}
		})
	}

	$scope.getCommentReplies = function(commentId){
		var getCommentReplies = blogService.getCommentReplies(commentId);
		getCommentReplies.then(function(msg){
			if(msg.status == 200){
				var j;
					for(j = 0; $scope.blogDetails.comments.length; j++){
						if(commentId == $scope.blogDetails.comments[j].id){
							$scope.blogDetails.comments[j].replies = msg.data;
						}
					}
			}else{
				toastr.error("Error Fetching Comment Replies");
			}
		})
	}
	
	$scope.getBlogLikes = function(blogId){
		var getBlogLikes = blogService.getBlogLikes(blogId);
		getBlogLikes.then(function(msg){
			if(msg.status == 200){
			var blogLikes = msg.data;
			$scope.blogDetails.likes = blogLikes;
			}else{
				toastr.error("Error Fetching Blog Likes");
			}
		})
	}

	// Blog Since
	$scope.getNow = function(blogDate) {
		return moment(blogDate).fromNow();	
	}

	// Insert Blog Comment
	$scope.insertBlogComment = function(comment,blogDetails){
		var blogComment = {};
		blogComment.comment = comment;
		blogComment.blog = blogDetails.id;
		var insertBlogComment = blogService.insertBlogComment(blogComment);
		insertBlogComment.then(function(msg){
			if(msg.status == 200){
				$scope.getBlogComments(blogDetails.id);
			}else{
				toastr.error("Error Commenting The Blog");
			}
		})
	}

	// Insert Comment Reply
	$scope.addReply = function(comment){
		comment.reply = !comment.reply;	
	}

	$scope.insertCommentReply = function(reply, commentDetails){
		var commentReply = {};
		commentReply.comment = reply;
		commentReply.commentId = commentDetails.id;
		var insertCommentReply = blogService.insertCommentReply(commentReply);
		insertCommentReply.then(function(msg){
			if(msg.status == 200){
				$scope.getCommentReplies(commentDetails.id);
				$scope.commentReply = '';
			}else{
				toastr.error("Error Fetching ");
			}
		})
	}


	// File Upload
	$scope.clearFiles = function () {
	    angular.element("input[type='file']").val(null);
		formdata.delete("file");
		formdata.delete("type");
		formdata.delete("id");
		formdata.delete("docInfo");
	};
	
	$scope.getTheFiles = function ($files) {
		$scope.file = $files;
	    angular.forEach($files, function (value, key) {
	        formdata.append("file", value);
	    });
	    $scope.isFileSelected = true;
	};

	$scope.uploadFiles = function (blogId) {
		formdata.append("type", "IMAGE");
		formdata.append("id", blogId);
		formdata.append("docInfo",	"Blog Image");
		var fileupload = fileUploadService.upload(formdata);
		fileupload.then(function(msg){
			var jsonResult = msg.data.data;
			if(msg.status == 200) {
				if(jsonResult.length == 0) {
					toastr.success('uploaded Successfully.');
				} else {
					$scope.errors = jsonResult;
				}
			} else {
				toastr.error('Error while uploading.');
			}
			$scope.clearFiles();
		}, function(msg){if(msg.status = 401) $location.path('/login');})
	};

}]);