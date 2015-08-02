'use strict'

angular.module('devAuth', [
          'hapin',
          'ngMockE2E',
])

  .run(function($httpBackend) {

    var accounts;

    //login
    $httpBackend.whenPOST('/api/v1/auth/login')
      .respond(function(method, url, data) {
        identity = {username: 'catwoman', role: 'Account'}
        return [200, identity, {}];
    });

    //register
    $httpBackend.whenPOST('/api/v1/accounts')
      .respond(function(method, url, data) {
        var account = angular.fromJson(data);
        var identity = {account: username, role: 'Account'};
        return [200, identity, {}];
    });

  });
