'use strict';

  angular
    .module('devHapin', [])
    .factory('devAuth', devAuth);

  devAuth.$inject = ['$httpBackend'];

  function devAuth($httpBackend) {

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
        accounts.push(account);
        return [200, account, {}];
    });




  }
