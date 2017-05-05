'use strict';

/**
 * @ngdoc overview
 * @name VedicTotal (vtApp)
 * @description
 * # VedicTotal (vtApp)
 *
 * Main module of the application.
 */

var vtApp = angular
    .module('vtApp', [
        'ngRoute',
		'ui.bootstrap',
		'ngAnimate',
		'ngAria',
		'ngCookies',
		'ngMessages',
		'ngResource',
		'ngSanitize',
		'ngFileUpload',
		'toastr',
		'am.multiselect',
		'ngMaterial'
    ]);

var APPLOGIN = true;

vtApp.constant('_',
    window._
);