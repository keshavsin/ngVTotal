'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vtApp
 */
vtApp.controller('MainCtrl',['$scope', '$location', 'ExploreService', 'ProductService', 'ManufactureService', 'ProfessionalService', 'appSettings', 'BlogService', function ($scope, $location, exploreService, productService, manufactureService, professionalService, appSettings, blogService) {

	$scope.blogs = [];
	$scope.addCommentReply = false;
		
	$scope.updateData = function(prop) {
		var qArray=[];
		var catObjects = _.filter($scope.exploreDetails.webCategories, function(wC) {return wC.webCategory.displayName==prop;});
		_.each(catObjects, function(cObj){
				var obj = {
					'name': cObj.title,
					'text': cObj.content
				}
				qArray.push(obj);
		});
		$scope.contentObject = qArray;
		$scope.contentObject.defaultText = $scope.contentObject[0].text;
		$scope.selectedTab = prop;
		console.log("hello");
	}

	$scope.displaySecondary = function(primaryTxt) {
		$scope.contentObject.defaultText = primaryTxt;
	}
	
	$scope.getExploreDetails = function() {
		var myExploreDetails = exploreService.getExploreDetails('78d3e109-b892-491e-a851-b8f669c8ee5d');
		myExploreDetails.then(function(msg) {
			if(msg.status == 200) {
				$scope.exploreDetails = JSON.parse(msg.data.json);
				$scope.initializeExploreData();
			} else {
				toastr.error("Error fetching Exploration Details ... ");
			}
		});
	}
	
	$scope.getRelatedProducts = function() {
		var myRelatedProducts = productService.getRelatedProducts('dummyHerb');
		myRelatedProducts.then(function(msg) {
			if(msg.status == 200) {
				$scope.relatedProducts = msg.data;
				//$scope.initializeExploreData();
			} else {
				toastr.error("Error fetching Exploration Details ... ");
			}
		});
	}

	$scope.getActiveProducts = function() {
		var myActiveProducts = productService.getActiveProducts();
		myActiveProducts.then(function(msg) {
			if(msg.status == 200) {
				$scope.activeProducts = msg.data;
			} else {
				toastr.error("Error fetching Active Products ... ");
			}
		});
	}

	$scope.getFeaturedProfessionals = function() {
		var myFeaturedProfessionals = professionalService.getFeaturedProfessionals();
		myFeaturedProfessionals.then(function(msg) {
			if(msg.status == 200) {
				$scope.featuredProfessionals = msg.data;
				//$scope.initializeExploreData();
			} else {
				toastr.error("Error fetching Exploration Details ... ");
			}
		});
	}

	$scope.getActiveProfessionals = function() {
		var myActiveProfessionals = professionalService.getActiveProfessionals();
		myActiveProfessionals.then(function(msg) {
			if(msg.status == 200) {
				$scope.activeProfessionals = msg.data;
			} else {
				toastr.error("Error fetching Exploration Details ... ");
			}
		});
	}

	$scope.getFeaturedManufacturers = function() {
		var myFeaturedManufacturers = manufactureService.getFeaturedManufacturers();
		myFeaturedManufacturers.then(function(msg) {
			if(msg.status == 200) {
				$scope.featuredManufacturers = msg.data;
			} else {
				toastr.error("Error fetching Exploration Details ... ");
			}
		});
	}
	
	$scope.initializeExploreData = function() {
		$scope.properties = $scope.getProperties();
		$scope.updateData($scope.properties[0]);
		$scope.selectedTab = $scope.properties[0];
		var qArray=[];
		var catObjects = _.filter($scope.exploreDetails.webCategories, function(wC) {return wC.webCategory.displayName==$scope.properties[0];});
		_.each(catObjects, function(cObj){
		var obj = {
			'name': cObj.title,
			'text': cObj.content
		}
		qArray.push(obj);
		});
		$scope.contentObject = qArray;
		$scope.contentObject.defaultText = $scope.contentObject[0].text;
		$scope.displaySecondary($scope.contentObject[0].text);
	}
	

	$scope.getProperties = function() {
		return _.uniq(_.pluck(_.pluck($scope.exploreDetails.webCategories, 'webCategory'), 'displayName'));
	}

	$scope.getAllBlogs = function(){
		var getAllBlogs = blogService.getAllBlogs();
		getAllBlogs.then(function(msg){
			if(msg.status == 200){
				$scope.blogList = msg.data; 
				var i;
				for(i = 0; i < $scope.blogList.length; i++){
					$scope.blogList[i].showComments = false;
					$scope.getBlogComments($scope.blogList[i].id);
					$scope.getBlogLikes($scope.blogList[i].id);
				}
			}else{
				toastr.error("Error Fetching Blogs");
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
				var i, j;
				for(i = 0; i < $scope.blogList.length; i++){
					if(blogId == $scope.blogList[i].id){
						$scope.blogList[i].comments = commentsList;
						for(j = 0; j < $scope.blogList[i].comments.length; j++){
							$scope.blogList[i].comments[j].reply = false;
							$scope.getCommentReplies($scope.blogList[i].comments[j].id);
						}
					}
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
				var i, j;
				for(i = 0; i < $scope.blogList.length; i++){
					for(j = 0; $scope.blogList[i].comments.length; j++){
						if(commentId == $scope.blogList[i].comments[j].id){
							$scope.blogList[i].comments[j].replies = msg.data;
						}
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
				var i;
				for(i = 0; i < $scope.blogList.length; i++){
					if(blogId == $scope.blogList[i].id){
						$scope.blogList[i].likes = blogLikes;
					}
				}
			}else{
				toastr.error("Error Fetching Blog Likes");
			}
		})
	}

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

	$scope.likeBlog = function(blogId){
		var blogLike = {};
		blogLike.blog = blogId;
		var likeBlog = blogService.insertBlogLike(blogLike);
		likeBlog.then(function(msg){
			if(msg.status == 200){
				$scope.getBlogLikes(blogId);
			}else{
				toastr.error("Error Liking the post");
			}
		})
	}

	$scope.addReply = function(comment){
		comment.reply = !comment.reply;	
	}
	
	$scope.init = function() {
		console.log("Init Called -- Main Controller");
		$scope.getExploreDetails();
//		$scope.getRelatedProducts();
//		$scope.getFeaturedProfessionals();
		$scope.getActiveProducts();
		$scope.getActiveProfessionals();
		$scope.getAllBlogs();
		//Default Text comes from Benefit since onload this will be shown first
		//$scope.contentText = $scope.exploreDetails.properties[0].defaultText;
	}
	
  $scope.init();
}]);

