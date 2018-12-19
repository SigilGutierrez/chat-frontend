'use strict';

/**
 * @ngdoc service
 * @name chatFrontendApp.configuracion
 * @description
 * # configuracion
 * Service in the chatFrontendApp.
 */
angular.module('chatFrontendApp')
  .service('configuracion', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
     io.sails.url = 'http://localhost:1337/';
  });
