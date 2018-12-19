'use strict';

/**
 * @ngdoc service
 * @name chatFrontendApp.chatFactory
 * @description
 * # chatFactory
 * Factory in the chatFrontendApp.
 */
angular.module('chatFrontendApp')
  .factory('chatFactory', function ($http) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      createMsgChatGroup: function (data) {
      var oPromise = $http.post('http://localhost:1337/ChatGroup',data).then(function (response) {
        return response.data;
        });
        return oPromise;
        },
      
      listMsgGroup: function () {
          var oPromise = $http.get('http://localhost:1337/ChatGroup').then(function (response) {
            return response.data;
        });
        return oPromise;

        },
        
      createMsgChatPrivate: function (data) {
          var oPromise = $http.post('http://localhost:1337/ChatPrivate',data).then(function (response) {
            return response.data;
        });
        return oPromise;
        },
      
      listMsgChatPrivateUser: function (data) {
          var oPromise = $http.post('http://localhost:1337/ChatPrivateUser',data).then(function (response) {
            return response.data;
        });
        return oPromise;

     }
    };
  });
