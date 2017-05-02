vtApp.controller('BlogController', ['$scope','$rootScope','$location','BlogService','fileUploadService','LookupService',function($scope,$rootScope,$location,blogService,fileUploadService,lookupService){

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
		var getBlogs = blogService.getAllBlogs();
		getBlogs.then(function(msg){
			if(msg.status == 200){
				$scope.blogList = msg.data;
			}else{
				toastr.error("Error Fetching Blogs");
			}
		})
		var getSystem = lookupService.getAllActiveLookups('System');
		getSystem.then(function(msg){
			if(msg.status == 200){
				$scope.system = msg.data;
			}else{
				toastr.error("Error Fetching System");
			}
		})
	}

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