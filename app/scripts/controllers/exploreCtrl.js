'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:ExploreCtrl
 * @description
 * # ExploreCtrl
 * explore Controller of the vtApp
 */
vtApp.controller('ExploreCtrl',['$scope', '$route', '$location', '$routeParams','$log', 'ExploreService', 'ProductService', 'toastr' function ($scope, $route, $location, $routeParams, $log, exploreService, productService, toastr) {
	
	$scope.healthCategoryFilter=["Digestive","Rejuvenative","Respiratory","Skin"];
	
	$scope.manufactureFilter = ["Manufacture1","Manufacture2","Manufacture3","Manufacture4","Manufacture5","Manufacture6"];
	
	$scope.recipeTypeFilter = ["Veg","Non-Veg"];
	
	$scope.healthSystemFilter = ["Ayurveda","Unnani"];

	$scope.getRelatedProducts = function() {
		var myRelatedProducts = productService.getRelatedProducts();
		myRelatedProducts.then(function(msg) {
			if(msg.status == 200) {
				$scope.relatedProducts = msg.data;
				$scope.relatedProductsCollection = $scope.CarouselDemoCtrl($scope.relatedProducts);
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
				$scope.exploreListCollection = $scope.CarouselDemoCtrl($scope.exploreList);
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

//  Carousel Functions

  $scope.displayMode = 'mobile'; // default value
  $scope.myInterval = 7000;

  $scope.$watch('displayMode', function(value) {
  
    switch (value) {
      case 'mobile':
        // do stuff for mobile mode
          console.log(value);
        break;
      case 'tablet':
        // do stuff for tablet mode
          console.log(value);
        break;
    }
  });

  $scope.CarouselDemoCtrl = function(slides) {
  $scope.slides = slides;

    var i, first = [],
      second, third;
    var many = 1;

    //##################################################    
    //Need to be changed to update the carousel since the resolution changed
    $scope.displayMode = "tablet";
    //##################################################
    if ($scope.displayMode == "mobile") {many = 1;}
    else if ($scope.displayMode == "tablet") {many = 2;} 
    else {many = 3;}
    
    for (i = 0; i < $scope.slides.length; i += many) {
      second = {
        image1: $scope.slides[i]
      };
      if (many == 1) {}
      if ($scope.slides[i + 1] && (many == 2 || many == 3)) {
        second.image2 = $scope.slides[i + 1];

      }
      if ($scope.slides[i + (many - 1)] && many == 3) {
        second.image3 = $scope.slides[i + 2];
      }
      first.push(second);
    }
    $scope.groupedSlides = first;
    return $scope.groupedSlides;
}
	
}]);
