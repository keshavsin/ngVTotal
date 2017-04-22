'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vtApp
 */
vtApp.controller('MainCtrl',['$scope', '$location', 'ExploreService','appSettings', function ($scope, $location, exploreService, appSettings) {
	
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
		var myExploreDetails = exploreService.getExploreDetails();
		myExploreDetails.then(function(msg) {
			if(msg.status == 200) {
				$scope.exploreDetails = msg.data;
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
	
	$scope.herbList = [{
		"herb": "Tulasi , Indian Basil",
		"image": "",
		"nativeNames": [
			{
				"language": "English",
				"name": "Tulasi"
			},
			{
				"language": "Kannada",
				"name": "Tualsi"
			},
			{
				"language": "Telugu",
				"name": "Tualsi"
			},
			{
				"language": "Tamil",
				"name": "Tualsi"
			},
			{
				"language": "Botanical",
				"name": "Indian Basil"
			}
		],
		"therapeuticActions": [
			"Anti-infective",
			"Anti allergic"
		],
		"therapeuticTypes": [
			"Curative",
			"Nutrive",
			"Preventive"
		],
		"boosters": ["Super bio herb for respiratory health", "Booster bio herb for anti stress"],
		"didYouKnow": "Something of the Tualsi herb of the Tualsi herb of the Tualsi herb of the Tualsi herb of the Tualsi herb of the Tualsi herb",
		"properties": [
			{
				"name": "Benefits",
				"defaultText": [
					"Very effective in digestive Disorders like Loss of appetite, Diarrhea, Irritable Bowel syndrome",
					"Also effective in managing Diabetes, Insomnia, Hysteria and Epilepsy"
				],
				"properties": [
					{
						"name": "Primary use/Indications",
						"text": [
							"Very effective in digestive Disorders like Loss of appetite, Diarrhea, Irritable Bowel syndrome"
						]
					},
					{
						"name": "Secondary use/Indications",
						"text": [
							"Also effective in managing Diabetes, Insomnia, Hysteria and Epilepsy"
						]
					},
					{
						"name": "External use/Indications",
						"text": [
							"Leaf juice is effective on conjunctivitis, leaves are applied over the eye lids",
							"Leaves are used for pain  and swelling by fermentation"
						]
					}
				]
			},
			{
				"name": "Usage",
				"defaultText": [
					"Fine powder, coarse powder to prepare decoction, tablet and syrup form as part of other herbs"
				],
				"properties": [
					{
						"name": "Forms of consumption",
						"text": [
							"Fine powder, coarse powder to prepare decoction, tablet and syrup form as part of other herbs"
						]
					},
					{
						"name": "Long term usage",
						"text": [
							"Safe for long term usage",
							"Can be consumed along with allopathy drug"
						]
					},
					{
						"name": "Home remedies",
						"text": [
							"Leaf juice is effective on conjuntivitis",
							"Leaves are applied over the eye lids",
							"Leaves are used for pain and swelling"
						]
					},
					{
						"name": "Safety / Contra Indications",
						"text": [
							"High doses makes stomach and diarrhea",
							"Breast feeding women needs to consult before taking "
						]
					},
					{
						"name": "Purification",
						"text": [
							"Check the google for purification",
							"Call us for purification, we will purify you"
						]
					}
				]
			},
			{
				"name": "Properties",
				"defaultText": [
					"Major chemical Compounds includes",
					"Mucilage,Pectin,Tannin,Volatile oil and Marmelocin"
				],
				"properties": [
					{
						"name": "Potency",
						"text": [
							"Hot in Potency",
							"People having problems as below should not consume"
						]
					},
					{
						"name": "Herb taste",
						"text": [
							"Pungent",
							"Bitter",
							"Astringent"
						]
					},
					{
						"name": "Chemical compounds",
						"text": [
							"Major chemical compounds includes ",
							"Mucilage,Pectin,Tannin,Volatile oil and Marmelocin."
						]
					}
				]
			},
			{
				"name": "How does it act?",
				"defaultText": [
					"It primarily acts as an appetizer, Liver stimulant, Digestant, Astringent and Hypoglycemic",
					"Mild Tranquiliser, Mild laxative, Cardiac Tonic, Expectorant, Febrifuge and Anti Diuretic"
				],
				"properties": [
					{
						"name": "Primary Action",
						"text": [
							"It primarily acts as an appetizer, Liver stimulant, Digestant, Astringent and Hypoglycemic."
						]
					},
					{
						"name": "Secondary Action",
						"text": [
							"Mild Tranquiliser, Mild laxative, Cardiac Tonic, Expectorant, Febrifuge and Anti Diuretic"
						]
					},
					{
						"name": "Related herbs",
						"text": [
							"Bilva",
							"Selva"
						]
					}
				]
			}
		],
		"references": [
			{
				"system": "ayurveda",
				"script": [
					"Mahabharata",
					" Ramayan",
					"Sahasrayogam"
				],
				"formulations": [
					"BHADRADARVADI Kashayam",
					"BALAJEERAKADI Kashayam",
					"DASAMOOLAM kashayam",
					"DHANWANTHARAM",
					"Kashayam"
				]
			},
			{
				"system": "siddha",
				"script": [
					"Mahabharata",
					"Sahasrayogam"
				],
				"formulations": [
					"Kashayam",
					"BALAJEERAKADI Kashayam",
					"DASAMOOLAM kashayam",
					"DHANWANTHARAM"
				]
			}
		]
	},{
		"herb": "Bilva , Aegle marmelos",
		"image": "",
		"nativeNames": [
			{
				"language": "English",
				"name": "Tulasi"
			},
			{
				"language": "Kannada",
				"name": "Tualsi"
			},
			{
				"language": "Telugu",
				"name": "Tualsi"
			},
			{
				"language": "Tamil",
				"name": "Tualsi"
			},
			{
				"language": "Botanical",
				"name": "Indian Basil"
			}
		],
		"therapeuticActions": [
			"Anti-infective",
			"Anti allergic"
		],
		"therapeuticTypes": [
			"Curative",
			"Nutrive",
			"Preventive"
		],
		"boosters": ["Super bio herb for respiratory health", "Booster bio herb for anti stress"],
		"didYouKnow": "Something of the Tualsi herb of the Tualsi herb of the Tualsi herb of the Tualsi herb of the Tualsi herb of the Tualsi herb",
		"properties": [
			{
				"name": "Benefits",
				"defaultText": [
					"Very effective in digestive Disorders like Loss of appetite, Diarrhea, Irritable Bowel syndrome",
					"Also effective in managing Diabetes, Insomnia, Hysteria and Epilepsy"
				],
				"properties": [
					{
						"name": "Primary use/Indications",
						"text": [
							"Very effective in digestive Disorders like Loss of appetite, Diarrhea, Irritable Bowel syndrome"
						]
					},
					{
						"name": "Secondary use/Indications",
						"text": [
							"Also effective in managing Diabetes, Insomnia, Hysteria and Epilepsy"
						]
					},
					{
						"name": "External use/Indications",
						"text": [
							"Leaf juice is effective on conjunctivitis, leaves are applied over the eye lids",
							"Leaves are used for pain  and swelling by fermentation"
						]
					}
				]
			},
			{
				"name": "Usage",
				"defaultText": [
					"Fine powder, coarse powder to prepare decoction, tablet and syrup form as part of other herbs"
				],
				"properties": [
					{
						"name": "Forms of consumption",
						"text": [
							"Fine powder, coarse powder to prepare decoction, tablet and syrup form as part of other herbs"
						]
					},
					{
						"name": "Long term usage",
						"text": [
							"Safe for long term usage",
							"Can be consumed along with allopathy drug"
						]
					},
					{
						"name": "Home remedies",
						"text": [
							"Leaf juice is effective on conjuntivitis",
							"Leaves are applied over the eye lids",
							"Leaves are used for pain and swelling"
						]
					},
					{
						"name": "Safety / Contra Indications",
						"text": [
							"High doses makes stomach and diarrhea",
							"Breast feeding women needs to consult before taking "
						]
					},
					{
						"name": "Purification",
						"text": [
							"Check the google for purification",
							"Call us for purification, we will purify you"
						]
					}
				]
			},
			{
				"name": "Properties",
				"defaultText": [
					"Major chemical Compounds includes",
					"Mucilage,Pectin,Tannin,Volatile oil and Marmelocin"
				],
				"properties": [
					{
						"name": "Potency",
						"text": [
							"Hot in Potency",
							"People having problems as below should not consume"
						]
					},
					{
						"name": "Herb taste",
						"text": [
							"Pungent",
							"Bitter",
							"Astringent"
						]
					},
					{
						"name": "Chemical compounds",
						"text": [
							"Major chemical compounds includes ",
							"Mucilage,Pectin,Tannin,Volatile oil and Marmelocin."
						]
					}
				]
			},
			{
				"name": "How does it act?",
				"defaultText": [
					"It primarily acts as an appetizer, Liver stimulant, Digestant, Astringent and Hypoglycemic",
					"Mild Tranquiliser, Mild laxative, Cardiac Tonic, Expectorant, Febrifuge and Anti Diuretic"
				],
				"properties": [
					{
						"name": "Primary Action",
						"text": [
							"It primarily acts as an appetizer, Liver stimulant, Digestant, Astringent and Hypoglycemic."
						]
					},
					{
						"name": "Secondary Action",
						"text": [
							"Mild Tranquiliser, Mild laxative, Cardiac Tonic, Expectorant, Febrifuge and Anti Diuretic"
						]
					},
					{
						"name": "Related herbs",
						"text": [
							"Bilva",
							"Selva"
						]
					}
				]
			}
		],
		"references": [
			{
				"system": "ayurveda",
				"script": [
					"Mahabharata",
					" Ramayan",
					"Sahasrayogam"
				],
				"formulations": [
					"BHADRADARVADI Kashayam",
					"BALAJEERAKADI Kashayam",
					"DASAMOOLAM kashayam",
					"DHANWANTHARAM",
					"Kashayam"
				]
			},
			{
				"system": "siddha",
				"script": [
					"Mahabharata",
					"Sahasrayogam"
				],
				"formulations": [
					"Kashayam",
					"BALAJEERAKADI Kashayam",
					"DASAMOOLAM kashayam",
					"DHANWANTHARAM"
				]
			}
		]
	},{
		"herb": "Rasona , Aegle marmelos",
		"image": "",
		"nativeNames": [
			{
				"language": "Botanical Name",
				"name": "Tulasi"
			},
			{
				"language": "Kannada",
				"name": "Rasona"
			},
			{
				"language": "Telugu",
				"name": "Rassi"
			},
			{
				"language": "Sanskrit",
				"name": "Rasona"
			}
		],
		"therapeuticActions": [
			"Anti-infective",
			"Anti allergic"
		],
		"therapeuticTypes": [
			"Curative",
			"Nutrive",
			"Preventive"
		],
		"boosters": ["Super bio herb for respiratory health", "Booster bio herb for anti stress"],
		"didYouKnow": "Something of the Tualsi herb of the Tualsi herb of the Tualsi herb of the Tualsi herb of the Tualsi herb of the Tualsi herb",
		"properties": [
			{
				"name": "Benefits",
				"defaultText": [
					"Very effective in digestive Disorders like Loss of appetite, Diarrhea, Irritable Bowel syndrome",
					"Also effective in managing Diabetes, Insomnia, Hysteria and Epilepsy"
				],
				"properties": [
					{
						"name": "Primary use/Indications",
						"text": [
							"Very effective in digestive Disorders like Loss of appetite, Diarrhea, Irritable Bowel syndrome"
						]
					},
					{
						"name": "Secondary use/Indications",
						"text": [
							"Also effective in managing Diabetes, Insomnia, Hysteria and Epilepsy"
						]
					},
					{
						"name": "External use/Indications",
						"text": [
							"Leaf juice is effective on conjunctivitis, leaves are applied over the eye lids",
							"Leaves are used for pain  and swelling by fermentation"
						]
					}
				]
			},
			{
				"name": "Usage",
				"defaultText": [
					"Fine powder, coarse powder to prepare decoction, tablet and syrup form as part of other herbs"
				],
				"properties": [
					{
						"name": "Forms of consumption",
						"text": [
							"Fine powder, coarse powder to prepare decoction, tablet and syrup form as part of other herbs"
						]
					},
					{
						"name": "Long term usage",
						"text": [
							"Safe for long term usage",
							"Can be consumed along with allopathy drug"
						]
					},
					{
						"name": "Home remedies",
						"text": [
							"Leaf juice is effective on conjuntivitis",
							"Leaves are applied over the eye lids",
							"Leaves are used for pain and swelling"
						]
					},
					{
						"name": "Safety / Contra Indications",
						"text": [
							"High doses makes stomach and diarrhea",
							"Breast feeding women needs to consult before taking "
						]
					},
					{
						"name": "Purification",
						"text": [
							"Check the google for purification",
							"Call us for purification, we will purify you"
						]
					}
				]
			},
			{
				"name": "Properties",
				"defaultText": [
					"Major chemical Compounds includes",
					"Mucilage,Pectin,Tannin,Volatile oil and Marmelocin"
				],
				"properties": [
					{
						"name": "Potency",
						"text": [
							"Hot in Potency",
							"People having problems as below should not consume"
						]
					},
					{
						"name": "Herb taste",
						"text": [
							"Pungent",
							"Bitter",
							"Astringent"
						]
					},
					{
						"name": "Chemical compounds",
						"text": [
							"Major chemical compounds includes ",
							"Mucilage,Pectin,Tannin,Volatile oil and Marmelocin."
						]
					}
				]
			},
			{
				"name": "How does it act?",
				"defaultText": [
					"It primarily acts as an appetizer, Liver stimulant, Digestant, Astringent and Hypoglycemic",
					"Mild Tranquiliser, Mild laxative, Cardiac Tonic, Expectorant, Febrifuge and Anti Diuretic"
				],
				"properties": [
					{
						"name": "Primary Action",
						"text": [
							"It primarily acts as an appetizer, Liver stimulant, Digestant, Astringent and Hypoglycemic."
						]
					},
					{
						"name": "Secondary Action",
						"text": [
							"Mild Tranquiliser, Mild laxative, Cardiac Tonic, Expectorant, Febrifuge and Anti Diuretic"
						]
					},
					{
						"name": "Related herbs",
						"text": [
							"Bilva",
							"Selva"
						]
					}
				]
			}
		],
		"references": [
			{
				"system": "ayurveda",
				"script": [
					"Mahabharata",
					" Ramayan",
					"Sahasrayogam"
				],
				"formulations": [
					"BHADRADARVADI Kashayam",
					"BALAJEERAKADI Kashayam",
					"DASAMOOLAM kashayam",
					"DHANWANTHARAM",
					"Kashayam"
				]
			},
			{
				"system": "siddha",
				"script": [
					"Mahabharata",
					"Sahasrayogam"
				],
				"formulations": [
					"Kashayam",
					"BALAJEERAKADI Kashayam",
					"DASAMOOLAM kashayam",
					"DHANWANTHARAM"
				]
			}
		]
	}]
	
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
		//Default Text comes from Benefit since onload this will be shown first
		//$scope.contentText = $scope.exploreDetails.properties[0].defaultText;
	}
	
  $scope.init();
}]);
