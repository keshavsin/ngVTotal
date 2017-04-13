'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vtApp
 */
vtApp.controller('MainCtrl',['$scope', '$location', function ($scope, $location) {
	
	$scope.init = function() {
    	console.log("Init Called -- Main Controller");
		//Default Text comes from Benefit since onload this will be shown first
		$scope.contentText = $scope.exploreDetails.properties[0].defaultText;
    };

	$scope.exploreDetails = {
		"herb": "Tulasi , Indian Basil",
		"image": "images/tulasi.jpg",
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
		"didYouKnow": ["Grown in India Bangladesh Burma India Java Nepal Pakistan Philippines Sri Lanka","It can be taken as single drug or with other drugs, it is a rejeunavator"],
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
	};
    
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
    $scope.init();
}]);
