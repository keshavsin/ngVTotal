'use strict';

/**
 * @ngdoc function
 * @name vtApp.service:ExploreSrv
 * @description
 * # ExploreSrv
 * Explore service of the vtApp
 */
vtApp.service('ExploreService',['appSettings', 'apiServices', function (appSettings, apiServices) {

	this.exploreDetails = {
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

	this.getExploreDetails = function() {
		console.log("Isnide Service for login ");
		return apiServices.doAPIRequest(appSettings.appAPI.explore.getExplore, null, null, "sessionStorage");
	};	
	
//	this.logout = function() {
//		console.log("Isnide Service for logOUT TTTTTTT ");
//		return apiServices.doAPIRequest(appSettings.appAPI.details.logout, null, null, "sessionStorage");
//	};
	
}]);
