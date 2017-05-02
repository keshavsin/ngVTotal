'use strict';

/**
 * @ngdoc function
 * @name vtApp.service:ProductSrv
 * @description
 * # ProductSrv
 * Product service of the vtApp
 */
vtApp.service('BlogService',['appSettings', 'apiServices', function (appSettings, apiServices) {

	this.getBlogDetails = function(blogId) {
		console.log("Inside Service for Blog " + blogId);
		return apiServices.doAPIRequest(appSettings.appAPI.blog.getBlog, null, blogId, "sessionStorage");
	};	

	this.getAllBlogs = function() {
		console.log("Inside Service for Blog " );
		return apiServices.doAPIRequest(appSettings.appAPI.blog.getAllBlogs, null, null, "sessionStorage");
	};

	this.create = function(blog) {
		console.log("Inside Service for Blog " );
		return apiServices.doAPIRequest(appSettings.appAPI.blog.create, blog, null, "sessionStorage");
	};

	this.update = function(blog) {
		console.log("Inside Service for Blog " );
		return apiServices.doAPIRequest(appSettings.appAPI.blog.update, blog, null, "sessionStorage");
	};

	this.deleteBlog = function(blogId) {
		console.log("Inside Service for Blog " );
		return apiServices.doAPIRequest(appSettings.appAPI.blog.deleteBlog, null, blogId, "sessionStorage");
	};

	this.getBlogComments = function(blogId) {
		console.log("Inside Service for Blog " + blogId);
		return apiServices.doAPIRequest(appSettings.appAPI.blog.getBlogComments, null, blogId, "sessionStorage");
	};

	this.getCommentReplies = function(commentId) {
		console.log("Inside Service for Blog " + commentId);
		return apiServices.doAPIRequest(appSettings.appAPI.blog.getCommentReplies, null, commentId, "sessionStorage");
	};

	this.getBlogLikes = function(blogId) {
		console.log("Inside Service for Blog " + blogId);
		return apiServices.doAPIRequest(appSettings.appAPI.blog.getBlogLikes, null, blogId, "sessionStorage");
	};

	this.insertBlogComment = function(blogComment) {
		console.log("Inside Service for Blog " + blogComment);
		return apiServices.doAPIRequest(appSettings.appAPI.blog.insertBlogComment, blogComment, null, "sessionStorage");
	};

	this.insertCommentReply = function(commentReply) {
		console.log("Inside Service for Blog " + commentReply);
		return apiServices.doAPIRequest(appSettings.appAPI.blog.insertCommentReply, commentReply, null, "sessionStorage");
	};

	this.insertBlogLike = function(blogLike) {
		console.log("Inside Service for Blog " + blogLike);
		return apiServices.doAPIRequest(appSettings.appAPI.blog.insertBlogLike, blogLike, null, "sessionStorage");
	};

}]);
