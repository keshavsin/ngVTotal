'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:ExploreCtrl
 * @description
 * # ExploreCtrl
 * explore Controller of the vtApp
 */
vtApp.controller('ExploreCtrl',['$scope', '$route', '$location', '$routeParams','$log', 'ExploreService', 'ProductService', function ($scope, $route, $location, $routeParams, $log, exploreService, productService) {
	
	$scope.getRelatedProducts = function() {
		var myRelatedProducts = productService.getRelatedProducts();
		myRelatedProducts.then(function(msg) {
			if(msg.status == 200) {
				$scope.relatedProducts = msg.data;
				//$scope.initializeExploreData();
			} else {
				toastr.error("Error fetching Exploration Details ... ");
			}
		});
	}

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

	$scope.getActiveExplorations = function() {
		var myActiveExplorations = exploreService.getActiveExplorations();
		myActiveExplorations.then(function(msg) {
			if(msg.status == 200) {
				$scope.exploreList = msg.data;
			} else {
				toastr.error("Error fetching Exploration Details ... ");
			}
		});
	}

	$scope.getExploration = function(herbId){
		var myExploration = exploreService.getExploreDetails(herbId);
		myExploration.then(function(msg) {
			if(msg.status == 200) {
				$scope.exploreDetails = JSON.parse(msg.data.json);
				$scope.exploreDetails.image = msg.data.image;
				$scope.initializeExploreData();
			} else {
				toastr.error("Error fetching Exploration Details ... ");
			}
		});
	}

	$scope.initializeExploreData = function() {
		$scope.properties = $scope.getProperties();
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
		for(var i = 0; i < $scope.contentObject.length; i++){
			if($scope.contentObject[i].name == "Top 5 Actions"){
				$scope.contentObject.defaultText = $scope.contentObject[i].text;
					$scope.displaySecondary($scope.contentObject[i].text);
			}
		}
	}

	$scope.init = function() {
		console.log(" Inside init of product Controller");
		if($location.$$path.startsWith('/exploredetails')){
			$scope.getExploration($routeParams.id);
			$scope.getRelatedProducts();
			$scope.getActiveExplorations();
		}else{
			$scope.getActiveExplorations();
		}
	}

	$scope.getProperties = function() {
		return _.uniq(_.pluck(_.pluck($scope.exploreDetails.webCategories, 'webCategory'), 'displayName'));
	}

	$scope.init();
	
}]);
