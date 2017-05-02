'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:ExploreCtrl
 * @description
 * # ExploreCtrl
 * explore Controller of the vtApp
 */
vtApp.controller('ExploreCtrl',['$scope', '$route', '$location', '$routeParams','$log', 'ExploreService', function ($scope, $route, $location, $routeParams, $log, exploreService) {
	
	$scope.productslist=[{"url":"","name":"ProductName","image":"images/products/1.jpg","details":"description"},
							{"url":"","name":"ProductName","image":"images/products/1.jpg","details":"description"},
							{"url":"","name":"ProductName","image":"images/products/1.jpg","details":"description"}];


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
		$scope.contentObject.defaultText = $scope.contentObject[0].text;
		$scope.displaySecondary($scope.contentObject[0].text);
	}

	$scope.init = function() {
		console.log(" Inside init of product Controller");
		if($location.$$path.startsWith('/exploredetails')){
			$scope.getExploration($routeParams.id);
		}else{
			$scope.getActiveExplorations();
		}
	}

	$scope.getProperties = function() {
		return _.uniq(_.pluck(_.pluck($scope.exploreDetails.webCategories, 'webCategory'), 'displayName'));
	}

	$scope.init();
	
}]);
