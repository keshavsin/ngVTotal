'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vtApp
 */
vtApp.controller('MainCtrl',['$scope', '$location', 'appSettings', function ($scope, $location, appSettings) {
	
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
	
	$scope.exploreDetails = {
			"herb": "Tulasi , Indian Basil",
			"image": "images/tulasi.jpg",
			"description": "Description",
			"nativeNames": [
				{
					"id": "098asdhi-098s-09sd-sdsd-lkjhaljsu78s",
					"code": "HL-001",
					"name": "English",
					"displayName": "English",
					"type": "HerbLanguage",
					"status": true,
					"parentId": null,
					"nativeName": "Tulasi"
				},
				{
					"id": "87sdl0wl-doss-ssww-dlkk-kljdfolwossa",
					"code": "HL-002",
					"name": "Sanskrit",
					"displayName": "Sanskrit",
					"type": "HerbLanguage",
					"status": true,
					"parentId": null,
					"nativeName": "Tulasi"
				},
				{
					"id": "dfdlkpee-doss-dedw-sdww-dmndsfolwdw3",
					"code": "HL-003",
					"name": "Kannada",
					"displayName": "Kannada",
					"type": "HerbLanguage",
					"status": true,
					"parentId": null,
					"nativeName": "Tulasi"
				},
				{
					"id": "lkjd9lwp-f3r3-222e-swkk-sdj0wlwpd0sw",
					"code": "HL-004",
					"name": "Telugu",
					"displayName": "Telugu",
					"type": "HerbLanguage",
					"status": true,
					"parentId": null,
					"nativeName": "Tulasi"
				}
			],
			"homeRemedies": [
				"Home Remedy 1",
				"Home Remedy 2"
			],
			"safetyIndications": [
				"Safety Indications 1",
				"SafetyIndications 2"
			],
			"therapeuticActions": [
				{
					"id": "akdhkasd-dfdf-lsdl-slds-lkjsdfupwerr",
					"code": "TA-007",
					"name": "Liver Stimulant",
					"displayName": "Liver Stimulant",
					"type": "TherepeuticAction",
					"status": true,
					"parentId": null
				},
				{
					"id": "dfjlwwww-sdlw-dfww-dfss-ndlflwsdpfdf",
					"code": "TA-002",
					"name": "Digestant",
					"displayName": "Digestant",
					"type": "TherepeuticAction",
					"status": true,
					"parentId": null
				}
			],
			"therapeuticTypes": [
				{
					"id": "dnmsdlfe-sdwe-lkkj-sswd-djnhsdify33r",
					"code": "TT-002",
					"name": "Nutritive",
					"displayName": "Nutritive",
					"type": "TherapeuticType",
					"status": true,
					"parentId": null
				},
				{
					"id": "lmsoufdw-sdjs-ergf-sdsd-jhmdofyor3rf",
					"code": "TT-003",
					"name": "Preventive",
					"displayName": "Preventive",
					"type": "TherapeuticType",
					"status": true,
					"parentId": null
				}
			],
			"boosters": [
				"Super bio herb for respiratory health",
				"Booster bio herb for anti stress"
			],
			"didYouKnow": [
				"Grown in India Bangladesh Burma India Java Nepal Pakistan Philippines Sri Lanka",
				"It can be taken as single drug or with other drugs, it is a rejeunavator"
			],
			"webCategories": [
				{
					"webCategory": {
						"id": "wfwefedf-dfdf-wddw-wwaw-dnshflsodfuo",
						"code": "WC-001",
						"name": "Benefits",
						"displayName": "Benefits",
						"type": "WebCategory",
						"status": true,
						"parentId": null
					},
					"title": "Title 1",
					"content": "Content 1 Content 1Content 1Content 1"
				},
				{
					"webCategory": {
						"id": "wfwefedf-dfdf-wddw-wwaw-dnshflsodfuo",
						"code": "WC-001",
						"name": "Benefits",
						"displayName": "Benefits",
						"type": "WebCategory",
						"status": true,
						"parentId": null
					},
					"title": "Title 2",
					"content": "Content 2"
				},
				{
					"webCategory": {
						"id": "sdfjlsds-fwew-ldsw-feff-khdsoflsdfww",
						"code": "WC-003",
						"name": "Uses",
						"displayName": "Uses",
						"type": "WebCategory",
						"status": true,
						"parentId": null
					},
					"title": "Title 1",
					"content": "Use 1"
				},
				{
					"webCategory": {
						"id": "dhosdflj-fwrw-lkkj-sdfd-whsdofusdfr3",
						"code": "WC-002",
						"name": "Side Effects",
						"displayName": "Side Effects",
						"type": "WebCategory",
						"status": true,
						"parentId": null
					},
					"title": "Side Effect 1",
					"content": "Content Side effect 1"
				}
			],
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
			"primaryIndications": [
				{
					"id": "afsdfdsf-sddf-dfss-sdfk-skfkjhsfdfsd",
					"code": "HI-001",
					"name": "Constipation",
					"displayName": "Constipation",
					"type": "HerbIndication",
					"status": true,
					"parentId": "sllksdpd-msds-ldss-dfdf-jsdfino2jdsf"
				}
			],
			"secondaryIndications": [
				{
					"id": "dflsss33-msds-dsww-ddds-dlj03l3fjwlw",
					"code": "HI-004",
					"name": "Pain in Abdomen",
					"displayName": "Pain in Abdomen",
					"type": "HerbIndication",
					"status": true,
					"parentId": "sllksdpd-msds-ldss-dfdf-jsdfino2jdsf"
				},
				{
					"id": "fmdfnoee-mdfe-dfss-skdh-mnbnsdhfiksd",
					"code": "HI-007",
					"name": "Conjuctivitis",
					"displayName": "Conjuctivitis",
					"type": "HerbIndication",
					"status": true,
					"parentId": "dssdfdfl-Sdsd-dfwe-ssfe-dsfljsdllwer"
				}
			],
			"externalIndications": [
				{
					"id": "csdfeeff-msds-wefe-sdes-mnsdkfnwjrfd",
					"code": "HI-002",
					"name": "Diarrhoea",
					"displayName": "Diarrhoea",
					"type": "HerbIndication",
					"status": true,
					"parentId": "sllksdpd-msds-ldss-dfdf-jsdfino2jdsf"
				}
			],
			"formOfConsumptions": [
				{
					"id": "asdlsdsd-dfdf-alss-sawl-ansdlflwerwq",
					"code": "FF-008",
					"name": "Rasayana",
					"displayName": "Rasayana",
					"type": "FormOfFormulation",
					"status": true,
					"parentId": null
				},
				{
					"id": "dsljlsad-dfdf-sdsd-sdsd-dsdfhaosdasd",
					"code": "FF-010",
					"name": "Kashaya Choornam",
					"displayName": "Kashaya Choornam",
					"type": "FormOfFormulation",
					"status": true,
					"parentId": null
				}
			],
			"taste": [
				{
					"id": "lasqwjek-dfdf-dsah-sdfd-hsdkfhlwerer",
					"code": "HT-002",
					"name": "Bitter",
					"displayName": "Bitter",
					"type": "HerbTaste",
					"status": true,
					"parentId": null
				}
			],
			"chemicalCompounds": [
				{
					"id": "dsdolsda-dfdf-dasa-sdfd-jsdofulwerre",
					"code": "CC-003",
					"name": "Tannin",
					"displayName": "Tannin",
					"type": "ChemicalCompounds",
					"status": true,
					"parentId": null
				},
				{
					"id": "sdfdlsdf-sdsd-dasa-sdfd-khsoihfsf3ww",
					"code": "CC-006",
					"name": "Essential Oil",
					"displayName": "Essential Oil",
					"type": "ChemicalCompounds",
					"status": true,
					"parentId": null
				}
			],
			"primaryActions": [
				{
					"id": "lsjdflwe-dfdf-lkkj-sdfd-hsdkfhkhwere",
					"code": "TA-009",
					"name": "Antidiuretic",
					"displayName": "Antidiuretic",
					"type": "TherepeuticAction",
					"status": true,
					"parentId": null
				}
			],
			"secondaryActions": [
				{
					"id": "saldsads-ddsd-sxsd-sdfd-ljsldjfjlwer",
					"code": "TA-008",
					"name": "Expectorant",
					"displayName": "Expectorant",
					"type": "TherepeuticAction",
					"status": true,
					"parentId": null
				}
			],
			"purifications": [
				{
					"id": "oiupsjdw-dfdf-sf3q-sd3d-lmhsoduferef",
					"code": "PR-001",
					"name": "Check the google",
					"displayName": "Check the google",
					"type": "Purification",
					"status": true,
					"parentId": null
				},
				{
					"id": "omusjdww-dfdf-sdwj-sdwq-lmjhodsfljwd",
					"code": "PR-002",
					"name": "Contact Us",
					"displayName": "Contact Us",
					"type": "Purification",
					"status": true,
					"parentId": null
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
		//Default Text comes from Benefit since onload this will be shown first
		//$scope.contentText = $scope.exploreDetails.properties[0].defaultText;
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
	
  $scope.init();
}]);
