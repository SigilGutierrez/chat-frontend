'use strict';

describe('Controller: ChatgrupalCtrl', function () {

  // load the controller's module
  beforeEach(module('chatFrontendApp'));

  var ChatgrupalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChatgrupalCtrl = $controller('ChatgrupalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChatgrupalCtrl.awesomeThings.length).toBe(3);
  });
});
