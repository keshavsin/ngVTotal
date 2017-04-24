'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vtApp
 */
vtApp.controller('MainCtrl',['$scope', '$location', 'ExploreService', 'ProductService', 'ManufactureService', 'ProfessionalService', 'appSettings', function ($scope, $location, exploreService, productService, manufactureService, professionalService, appSettings) {
	
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
	
	$scope.toggleComments = function() {
		$scope.showComments = !$scope.showComments;
	}
	
	$scope.getExploreDetails = function() {
		var myExploreDetails = exploreService.getExploreDetails('78d3e109-b892-491e-a851-b8f669c8ee5d');
		myExploreDetails.then(function(msg) {
			if(msg.status == 200) {
				$scope.exploreDetails = msg.data;
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

	$scope.getFeaturedManufacturers = function() {
		var myFeaturedManufacturers = manufactureService.getFeaturedManufacturers();
		myFeaturedManufacturers.then(function(msg) {
			if(msg.status == 200) {
				$scope.featuredManufacturers = msg.data;
				//$scope.initializeExploreData();
			} else {
				toastr.error("Error fetching Exploration Details ... ");
			}
		});
	}
	
	$scope.initializeExploreData = function() {
		$scope.properties = $scope.getProperties();
		$scope.selectedTab = $scope.properties[0];
		var qArray=[];
		var catObjects = _.filter($scope.exploreDetails.webCategories, function(wC) {return wC.webCategory.displayName=='Benefits';});
		_.each(catObjects, function(cObj){
		var obj = {
			'name': cObj.title,
			'text': cObj.content
		}
		qArray.push(obj);
		});
		$scope.contentObject = qArray;
		$scope.contentObject.defaultText = $scope.contentObject[0].text;

	}
	
	$scope.blogList = [{
		"title":"My New Blog",
			"createdBy":"Peter Pan",
			"createdDate":"2-12-2010",
			"system":"Ayurveda",
			"image":"images/banner/1.jpg",
			"content":"My New Blog My New Blog My New Blog My New Blog My New Blog My New Blog My New Blog My New Blog My New Blog ",
			"authorImage":"images/logo.png",
			"authorName":"Bruce Lee",
			"timePosted": "11 minutes ago",
			"commentsCount":22,
			"likesCount":11
	},
	{
		"title":"My Third Blog",
			"createdBy":"Chuck Norris",
			"createdDate":"1-1-1989",
			"system":"Unnani",
			"image":"images/banner/1.jpg",
			"content":"My Third Blog My Third Blog My Third Blog My Third Blog My Third Blog My Third Blog My Third Blog My Third Blog My Third Blog My Third Blog My Third Blog My Third Blog My Third Blog ",
			"authorImage":"images/logo.png",
			"authorName":"Bruce Lee",
			"timePosted": "33 minutes ago",
			"commentsCount":5,
			"likesCount":4
	},
	{
		"title":"My First Blog on Tulasi",
			"createdBy":"Steven Spielburg",
			"createdDate":"11-11-2030",
			"system":"Ayurveda TEst",
			"image":"images/banner/1.jpg",
			"content":"My First Blog on Tulasi My First Blog on Tulasi My First Blog on Tulasi My First Blog on Tulasi My First Blog on Tulasi My First Blog on Tulasi My First Blog on Tulasi My First Blog on Tulasi My First Blog on Tulasi ",
			"authorImage":"images/logo.png",
			"authorName":"Bruce Lee",
			"timePosted": "51 minutes ago",
			"commentsCount":5,
			"likesCount":1
	},
	{
		"title":"My First Blog ",
			"createdBy":"Angelina Jolie",
			"createdDate":"12-12-2013",
			"system":"Ayurveda TEst",
			"image":"images/banner/1.jpg",
			"content":"My First Blog My First Blog My First Blog My First Blog My First Blog My First Blog My First Blog My First Blog My First Blog My First Blog My First Blog My First Blog ",
			"authorImage":"images/logo.png",
			"authorName":"Bruce Lee",
			"timePosted": "55 minutes ago",
			"commentsCount":22,
			"likesCount":45
	}]

	$scope.commentsList = [{
		"comment":"Hi this was a nice Blog",
		"datetime":"12-12-2012",
		"commentedBy":"Peter North",
		"commenterImage":"images/doctors/5.jpg",
		"replies":[{"comment":"Super Article, Keep up the Good work", "datetime":"12-12-2012","commentedBy":"Santa Cruz", "commenterImage":"images/doctors/4.jpg"}]
	},
	{
		"comment":"Apprecate the effort involved in creating such an article",
		"datetime":"23-03-1999",
		"commentedBy":"Johnny Walker",
		"commenterImage":"images/doctors/2.jpg",
		"replies":[{"comment":"What is this?", "datetime":"24-03-1999","commentedBy":"John John", "commenterImage":"images/doctors/5.jpg"}]
	},
	{
		"comment":"That was nice piece of article",
		"datetime":"01-09-2001",
		"commentedBy":"Jack William",
		"commenterImage":"images/doctors/5.jpg",
		"replies":[{"comment":"Nice Post", "datetime":"09-09-2001", "commentedBy":"Parker Ben", "commenterImage":"images/doctors/3.jpg"}]
	}
	]

	$scope.getProperties = function() {
		return _.uniq(_.pluck(_.pluck($scope.exploreDetails.webCategories, 'webCategory'), 'displayName'));
	}

	$scope.init = function() {
		console.log("Init Called -- Main Controller");
		$scope.getExploreDetails();
		$scope.getRelatedProducts();
		$scope.getFeaturedProfessionals();
		//Default Text comes from Benefit since onload this will be shown first
		//$scope.contentText = $scope.exploreDetails.properties[0].defaultText;
	}
	
  $scope.init();
}]);
