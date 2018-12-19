'use strict';

/**
 * @ngdoc overview
 * @name chatFrontendApp
 * @description
 * # chatFrontendApp
 *
 * Main module of the application.
 */
angular.module('chatFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.router',
    'ngMaterial',
    'ngMessages'
  ])
  .config(function($stateProvider) {
      var helloState = {
        name: 'user',
        url: '/',
        //template: '<h3>hello world ok ok!</h3>'
        templateUrl: 'views/user.html',
      }
  $stateProvider.state(helloState);
});
