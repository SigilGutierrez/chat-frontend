'use strict';

/**
 * @ngdoc service
 * @name chatFrontendApp.userFactory
 * @description
 * # userFactory
 * Factory in the chatFrontendApp.
 */
angular.module('chatFrontendApp')
  .factory('userFactory', function ($http) {
    // Service logic
    // ...
    // Public API here
    return {
      
      createUser: function (dataInf) {
      var oPromise = $http.post('http://localhost:1337/user',dataInf).then(function (response) {
        return response.data;
      });
      return oPromise;
      },

      createSession: function (data) {
      var oPromise = $http.post('http://localhost:1337/session',data).then(function (response) {
        return response.data;
      });
      return oPromise;
      },

      listUser: function () {
      var oPromise = $http.get('http://localhost:1337/user').then(function (response) {
        return response.data;
    });
    return oPromise;

    }
    };
  });
